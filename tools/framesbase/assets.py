#!/usr/bin/env python3
"""Prepare small previews and download selected original deliveries on demand."""
import argparse
import hashlib
import json
import shutil
import subprocess
import tempfile
from pathlib import Path
from urllib.parse import urlsplit

from collect import DEST, atomic_write, save_json


def thumbnail_all(section=None):
    from PIL import Image
    cache = Path.home()/'.cache/framesbase-original-previews'
    before = after = count = 0
    for metadata_path in sorted((DEST/'items').glob('*/metadata.json')):
        metadata = json.loads(metadata_path.read_text())
        if section and metadata['source']['section'] != section:
            continue
        if metadata.get('preview_processing',{}).get('method') == 'static-webp-max960-q82':
            continue
        original_name = metadata['files'].get('preview')
        if not original_name:
            continue
        original = metadata_path.parent/original_name
        if not original.is_file():
            continue
        original_bytes = original.read_bytes()
        digest = hashlib.sha256(original_bytes).hexdigest()
        cached = cache/metadata['id']/(digest+original.suffix)
        if not cached.exists():
            atomic_write(cached,original_bytes)
        output = metadata_path.parent/'preview.webp'
        temp = output.with_suffix('.webp.tmp')
        with Image.open(original) as image:
            frames = getattr(image,'n_frames',1)
            image.seek(min(frames//3,20))
            image = image.convert('RGB')
            original_size = list(image.size)
            image.thumbnail((960,960))
            dimensions = list(image.size)
            image.save(temp,format='WEBP',quality=82,method=6)
        temp.replace(output)
        metadata['files']['preview'] = output.name
        metadata['preview_processing'] = {'method':'static-webp-max960-q82','original_sha256':digest,'original_bytes':len(original_bytes),'original_dimensions':original_size,'original_frames':frames,'dimensions':dimensions,'bytes':output.stat().st_size}
        metadata['preview_sha256'] = hashlib.sha256(output.read_bytes()).hexdigest()
        save_json(metadata_path,metadata)
        if original != output:
            # This generated preview has been preserved byte-for-byte in cache.
            original.unlink()
        before += len(original_bytes)
        after += output.stat().st_size
        count += 1
    print(json.dumps({'processed':count,'before_bytes':before,'after_bytes':after,'originals_preserved_in':str(cache)}))


def get_item(identity):
    if not identity or Path(identity).name != identity or identity in ('.','..'):
        raise ValueError('Invalid item ID')
    path = DEST/'items'/identity/'metadata.json'
    metadata = json.loads(path.read_text())
    parsed = urlsplit(metadata.get('original_url') or '')
    if parsed.scheme != 'https' or parsed.username or parsed.password:
        raise ValueError('Only the original HTTPS delivery URL is supported')
    return path,metadata,parsed


def download(identity,output,maximum_mb):
    _,metadata,parsed = get_item(identity)
    if metadata['delivery_type'] != 'background-link' or parsed.hostname != 'd8j0ntlcm91z4.cloudfront.net':
        raise ValueError('This command downloads observed background CDN deliveries only')
    output = Path(output).expanduser().resolve()
    if output.exists():
        raise ValueError('Output already exists; choose another path')
    output.parent.mkdir(parents=True,exist_ok=True)
    temporary = output.with_suffix(output.suffix+'.part')
    maximum = int(maximum_mb*1024*1024)
    result = subprocess.run(['curl','--fail','--silent','--show-error','--location','--proto','=https','--proto-redir','=https','--max-time','180','--max-filesize',str(maximum),'--output',str(temporary),metadata['original_url']],capture_output=True,text=True)
    if result.returncode:
        temporary.unlink(missing_ok=True)
        raise RuntimeError('Background download failed; curl exit code '+str(result.returncode))
    temporary.replace(output)
    print(json.dumps({'id':identity,'path':str(output),'bytes':output.stat().st_size,'sha256':hashlib.sha256(output.read_bytes()).hexdigest()}))


def archive_source(identity):
    metadata_path,metadata,parsed = get_item(identity)
    if metadata['delivery_type'] != 'source-link' or parsed.hostname != 'github.com':
        raise ValueError('Only observed GitHub repository links can be archived')
    segments = parsed.path.strip('/').split('/')
    if len(segments) != 2:
        raise ValueError('Expected a repository root URL')
    source = metadata_path.parent/'source'
    if source.exists():
        raise ValueError('Source is already present; review before refreshing')
    with tempfile.TemporaryDirectory(prefix='framesbase-source-') as directory:
        checkout = Path(directory)/'repo'
        subprocess.run(['git','-c','core.hooksPath=/dev/null','-c','protocol.file.allow=never','clone','--quiet','--depth','1','--',metadata['original_url'],str(checkout)],check=True,capture_output=True,timeout=180)
        commit = subprocess.check_output(['git','-C',str(checkout),'rev-parse','HEAD'],text=True).strip()
        source.mkdir()
        omitted = []
        excluded_non_source = []
        files = []
        for path in sorted(checkout.rglob('*')):
            relative = path.relative_to(checkout)
            if '.git' in relative.parts:
                continue
            if path.is_symlink():
                omitted.append({'path':str(relative),'reason':'symlink'})
                continue
            if not path.is_file():
                continue
            if path.name in ('.DS_Store','Thumbs.db'):
                excluded_non_source.append({'path':str(relative),'reason':'operating-system-metadata'})
                continue
            if path.name == '.env' or (path.name.startswith('.env.') and not path.name.endswith(('.example','.sample','.template'))):
                omitted.append({'path':str(relative),'reason':'environment-file-review-required'})
                continue
            if path.stat().st_size > 90*1024*1024:
                omitted.append({'path':str(relative),'reason':'over-90-MiB'})
                continue
            target = source/relative
            target.parent.mkdir(parents=True,exist_ok=True)
            shutil.copyfile(path,target)
            files.append({'path':str(relative),'bytes':target.stat().st_size,'sha256':hashlib.sha256(target.read_bytes()).hexdigest()})
        receipt = {'repository_url':metadata['original_url'],'commit':commit,'status':'partial' if omitted else 'complete','files':files,'omitted':omitted,'excluded_non_source':excluded_non_source,'execution':'not-executed','license_files':[f['path'] for f in files if Path(f['path']).name.lower().startswith(('license','copying','notice'))]}
        save_json(metadata_path.parent/'source-receipt.json',receipt)
        metadata['files']['source_receipt'] = 'source-receipt.json'
        metadata['source_archive'] = {'directory':'source','commit':commit,'status':receipt['status'],'license_status':'preserved' if receipt['license_files'] else 'not-found','verified_runtime':False}
        save_json(metadata_path,metadata)
        print(json.dumps({'id':identity,'files':len(files),'bytes':sum(f['bytes'] for f in files),'omitted':len(omitted),'license_files':receipt['license_files'],'commit':commit}))


def main():
    parser = argparse.ArgumentParser(description=__doc__)
    commands = parser.add_subparsers(dest='command',required=True)
    thumbnails = commands.add_parser('thumbnails')
    thumbnails.add_argument('--section',choices=['sites','apps','sections','backgrounds'])
    media = commands.add_parser('download')
    media.add_argument('--id',required=True)
    media.add_argument('--output',required=True)
    media.add_argument('--max-mb',type=int,default=100)
    source = commands.add_parser('source')
    source.add_argument('--id',required=True)
    args = parser.parse_args()
    if args.command == 'thumbnails': thumbnail_all(args.section)
    elif args.command == 'download': download(args.id,args.output,args.max_mb)
    else: archive_source(args.id)


if __name__ == '__main__':
    main()
