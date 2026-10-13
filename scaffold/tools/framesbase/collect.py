#!/usr/bin/env python3
"""Archive normal Framesbase member UI deliveries through agent-browser.

Requires an already signed-in, task-isolated browser session. Never reads
cookies, account fields or browser storage. No source material is executed.
"""
import argparse
import base64
import hashlib
import json
import re
import subprocess
import time
from datetime import datetime, timezone
from pathlib import Path
from urllib.parse import parse_qs, urlsplit

ROOT = Path(__file__).resolve().parents[2]
DEST = ROOT / 'design-library/sources/framesbase'
SECTIONS = {'sites': 'Sites', 'apps': 'Apps', 'sections': 'Sections', 'backgrounds': 'Backgrounds'}


def save_json(path, value):
    atomic_write(path, (json.dumps(value, ensure_ascii=False, indent=2) + '\n').encode())


def atomic_write(path, content):
    path.parent.mkdir(parents=True, exist_ok=True)
    temporary = path.with_suffix(path.suffix + '.tmp')
    temporary.write_bytes(content)
    temporary.replace(path)


class Browser:
    def __init__(self, session):
        self.session = session

    def evaluate(self, code):
        result = subprocess.run(
            ['agent-browser', '--session', self.session, '--json', 'eval', code],
            capture_output=True, text=True, timeout=65,
        )
        if result.returncode:
            raise RuntimeError('Browser evaluation failed (output withheld to protect temporary media URLs)')
        payload = json.loads(result.stdout)
        if not payload.get('success'):
            raise RuntimeError('Browser reported an unsuccessful evaluation')
        return payload['data'].get('result')

    def wait(self, expression, timeout=25):
        deadline = time.monotonic() + timeout
        while time.monotonic() < deadline:
            value = self.evaluate(expression)
            if value:
                return value
            time.sleep(.4)
        raise TimeoutError('Visible page content did not finish loading')

    def select_section(self, section):
        previous = self.page_state()
        self.evaluate('document.querySelector("button.modal-close")?.click()')
        self.evaluate('Array.from(document.querySelectorAll("nav button")).find(b=>b.textContent.trim()===' + json.dumps({'sites':'◫Sites','apps':'▦Apps','sections':'◇Sections','backgrounds':'◉Backgrounds'}[section]) + ')?.click()')
        return self.await_page(SECTIONS[section] + '.', previous=previous if previous.get('heading') != SECTIONS[section] + '.' else None)

    def page_state(self):
        return self.evaluate('(() => {const a=document.querySelector("article");const src=a?.querySelector("video")?.poster||a?.querySelector("img")?.src;const key=a?.dataset.itemId||(src?new URL(src,location.href).searchParams.get("key"):null);const p=document.querySelector("#library-page-jump-input");const m=document.querySelector("main")?.innerText.match(/(\\d+)\\s*卡片总数/);return {heading:document.querySelector("h1")?.textContent,total:m?+m[1]:null,pages:p?+p.max:null,page:p?+p.value:null,firstKey:key};})()')

    def await_page(self, heading, page=None, previous=None):
        deadline = time.monotonic() + 30
        while time.monotonic() < deadline:
            state = self.page_state()
            if (state.get('heading') == heading and state.get('total') and state.get('firstKey')
                    and (page is None or state['page'] == page)
                    and (not previous or state['firstKey'] != previous.get('firstKey'))):
                return state
            time.sleep(.4)
        raise TimeoutError('New page cards did not replace previous page cards')

    def first_page(self):
        previous = self.page_state()
        if previous['page'] == 1:
            return
        self.evaluate('document.querySelector("nav[aria-label=内容分页] button[aria-current=page]")?.textContent!=="1" && Array.from(document.querySelectorAll("nav[aria-label=内容分页] button")).find(b=>b.textContent==="1")?.click()')
        self.await_page(previous['heading'], page=1, previous=previous)

    def install_copy_capture(self):
        self.evaluate('Object.defineProperty(navigator.clipboard,"writeText",{configurable:true,value:async text=>{window.__framesbaseArchiveCopy=String(text)}}); true')

    def go_page(self, page):
        previous = self.page_state()
        if previous['page'] == page:
            return
        subprocess.run(['agent-browser','--session',self.session,'fill','#library-page-jump-input',str(page)],check=True,capture_output=True,timeout=30)
        self.evaluate('document.querySelector("#library-page-jump-input").form.requestSubmit()')
        self.await_page(previous['heading'],page=page,previous=previous)

    def card(self, index):
        self.evaluate(f'document.querySelectorAll("article")[{index}]?.scrollIntoView({{block:"center"}})')
        return self.wait('(() => {const a=document.querySelectorAll("article")[' + str(index) + ']; if(!a)return null; const bg=a.classList.contains("background-card"); const title=a.querySelector("h3")?.textContent; const video=a.querySelector("video"); const img=a.querySelector("img"); const poster=img?.getAttribute("src")||video?.getAttribute("poster"); if(!bg&&!title)return null;return {id:a.dataset.itemId||null,title:title||null,category:a.querySelector("p")?.textContent||null,poster,background:bg};})()')

    def delivery(self, index, background):
        if background:
            self.evaluate('window.__framesbaseArchiveCopy=null;document.querySelectorAll("article")[' + str(index) + '].click()')
            copied = self.wait('window.__framesbaseArchiveCopy')
            if not isinstance(copied, str) or urlsplit(copied).scheme not in ('https', 'http'):
                raise ValueError('Background copy did not return a URL')
            return {'kind': 'background-link', 'url': copied}
        self.evaluate('document.querySelectorAll("article")[' + str(index) + '].querySelector("[role=button]").click()')
        try:
            result = self.wait('(() => {const d=document.querySelector("[role=dialog]");if(!d)return null;const p=d.querySelector("pre.prompt-box");const a=d.querySelector("a[href]");if(p && p.textContent.trim() && d.innerText.match(/([0-9,]+) 字符/) && p.textContent.length===Number(d.innerText.match(/([0-9,]+) 字符/)[1].replaceAll(",",""))){return {kind:"prompt",text:p.textContent,title:d.querySelector("h2")?.textContent,displayedChars:d.innerText.match(/([0-9,]+) 字符/)?.[1]||null};}if(a && d.innerText.includes("外部链接")){return {kind:"source-link",url:a.href,title:d.querySelector("h2")?.textContent};}return null;})()')
            result['poster'] = self.evaluate('document.querySelector("[role=dialog] .modal-visual img")?.getAttribute("src")||document.querySelector("[role=dialog] .modal-visual video")?.getAttribute("poster")||null')
            return result
        finally:
            self.evaluate('document.querySelector("button.modal-close")?.click()')

    def preview(self, url):
        # The URL was read from the currently accessible card, not constructed.
        return self.evaluate('(async()=>{const u=new URL(' + json.dumps(url) + ',location.href);const r=await fetch(u.href,{signal:AbortSignal.timeout(20000)});if(!r.ok)return {ok:false,status:r.status};const type=r.headers.get("content-type")||"";if(!type.startsWith("image/"))return {ok:false,status:"not-image"};const b=new Uint8Array(await r.arrayBuffer());if(b.length>8388608)return {ok:false,status:"too-large"};let s="";for(let i=0;i<b.length;i+=16384)s+=String.fromCharCode(...b.subarray(i,i+16384));return {ok:true,type,base64:btoa(s)};})()')


def collect_item(browser, section, page, index, refresh=False):
    card = browser.card(index)
    if card.get('id') and not re.fullmatch(r'[A-Za-z0-9_-]{1,128}', card['id']):
        raise ValueError('Invalid source item ID')
    if card['id'] and not refresh:
        cached_path = DEST / 'items' / card['id'] / 'metadata.json'
        if cached_path.exists():
            cached = json.loads(cached_path.read_text())
            files = cached.get('files', {})
            prompt_path = cached_path.parent / (files.get('prompt') or 'prompt.md')
            content = prompt_path.read_bytes() if files.get('prompt') and prompt_path.exists() else (cached.get('original_url') or '').encode()
            all_present = all((cached_path.parent / f).is_file() for f in files.values() if f)
            if (cached.get('source',{}).get('section') == section and cached.get('title') == card['title']
                    and all_present and files.get('preview') and content
                    and hashlib.sha256(content).hexdigest() == cached.get('content_sha256')):
                return card['id'], cached['delivery_type'], cached['preview_status']
    delivery = browser.delivery(index, card['background'])
    card['poster'] = delivery.get('poster') or card.get('poster')
    if delivery.get('title') and delivery['title'] != card['title']:
        raise ValueError('Card title and detail title differ')
    identity = card['id'] or ('bg-' + hashlib.sha256(delivery['url'].encode()).hexdigest()[:20])
    if not re.fullmatch(r'[A-Za-z0-9_-]{1,128}', identity):
        raise ValueError('Invalid source item ID')
    folder = DEST / 'items' / identity
    folder.mkdir(parents=True, exist_ok=True)
    existing_path = folder / 'metadata.json'
    existing = json.loads(existing_path.read_text()) if existing_path.exists() else {}
    text = delivery.get('text')
    if text is not None:
        if not text.strip():
            raise ValueError('Empty prompt')
        advertised = delivery.get('displayedChars')
        js_length = len(text.encode('utf-16-le')) // 2
        if advertised and js_length != int(advertised.replace(',', '')):
            raise ValueError('Prompt length differs from displayed character count')
        atomic_write(folder / 'prompt.md', text.encode())
    else:
        atomic_write(folder / 'reference.md', ('# 原始交付链接\n\n' + delivery['url'] + '\n\n类型：' + delivery['kind'] + '\n原站交付的是链接；本地下载状态见 metadata.json。\n').encode())
    preview_status = existing.get('preview_status', 'missing')
    preview_file = existing.get('files', {}).get('preview')
    if not card['poster'] and not preview_file:
        preview_status = 'not-provided-by-source'
    if card['poster'] and (refresh or not preview_file or not (folder / preview_file).exists()):
        try:
            result = browser.preview(card['poster'])
            if result and result.get('ok'):
                raw = base64.b64decode(result['base64'], validate=True)
                # Keep originals intact, using their actual media format.
                extension = {'image/webp':'webp','image/png':'png','image/jpeg':'jpg','image/avif':'avif','image/gif':'gif'}.get(result['type'].split(';')[0])
                if extension:
                    preview_file = 'preview.' + extension
                    atomic_write(folder / preview_file, raw)
                    preview_status = 'downloaded'
                    existing.pop('preview_processing', None)
                else:
                    preview_status = 'unsupported-image-format'
            else:
                preview_status = 'unavailable:' + str((result or {}).get('status', 'unknown'))
        except (RuntimeError, TimeoutError, subprocess.TimeoutExpired):
            preview_status = 'download-failed'
    key = parse_qs(urlsplit(card['poster'] or '').query).get('key', [None])[0]
    metadata = {
        **existing,
        'id': identity, 'title': card['title'] or 'Background ' + identity[3:11],
        'source': {'provider':'framesbase','url':'https://app.framesbase.app/','section':section,'category':card['category'],'item_id':card['id'],'page_at_capture':page,'position_at_capture':index+1,'preview_media_key':key},
        'delivery_type': delivery['kind'], 'original_url': delivery.get('url'),
        'captured_at': datetime.now(timezone.utc).isoformat(),
        'capture_status':'complete', 'preview_status':preview_status,
        'content_quality':'source-placeholder' if text is not None and len(text.strip()) < 30 else 'unreviewed-reference',
        'implementation_status':'unverified',
        'files': {**existing.get('files',{}),'prompt':'prompt.md' if text is not None else None,'reference':'reference.md' if text is None else None,'preview':preview_file},
        'content_sha256': hashlib.sha256((text if text is not None else delivery['url']).encode()).hexdigest(),
        'preview_sha256': hashlib.sha256((folder/preview_file).read_bytes()).hexdigest() if preview_file and (folder/preview_file).exists() else None,
        'displayed_prompt_chars': int(delivery['displayedChars'].replace(',','')) if delivery.get('displayedChars') else None,
    }
    save_json(existing_path, metadata)
    return identity, delivery['kind'], preview_status


def retry_failures(browser):
    report_path = DEST/'collection-report.json'
    report = json.loads(report_path.read_text())
    pending = list(report['failures'])
    # Previews use expiring member URLs; a stale cached page can lose images
    # while its original prompt/link remains complete. Retry those positions too.
    positions = {(f['section'],f['page'],f['position']) for f in pending}
    for metadata_path in (DEST/'items').glob('*/metadata.json'):
        metadata = json.loads(metadata_path.read_text())
        if not metadata['files'].get('preview') and metadata.get('preview_status') != 'not-provided-by-source':
            source = metadata['source']
            position = (source['section'],source['page_at_capture'],source['position_at_capture'])
            if position not in positions:
                pending.append({'section':position[0],'page':position[1],'position':position[2],'error':'Preview missing'})
                positions.add(position)
    remaining = []
    history = {'mode':'retry','started_at':datetime.now(timezone.utc).isoformat(),'attempted':pending,'recovered':[]}
    for failure in pending:
        section,page,index = failure['section'],failure['page'],failure['position']-1
        try:
            browser.select_section(section)
            browser.go_page(page)
            identity,kind,preview = collect_item(browser,section,page,index)
            if identity not in report['sections'][section]['ids']:
                report['sections'][section]['ids'].append(identity)
            verified = json.loads((DEST/'items'/identity/'metadata.json').read_text())
            preview_name = verified['files'].get('preview')
            if (not preview_name and verified.get('preview_status') != 'not-provided-by-source') or (preview_name and not (DEST/'items'/identity/preview_name).is_file()):
                raise RuntimeError('Content saved but preview is still missing')
            if preview_name:
                from PIL import Image
                with Image.open(DEST/'items'/identity/preview_name) as image:
                    image.verify()
            history['recovered'].append({'id':identity,'section':section,'page':page,'position':index+1})
            print(f'RECOVERED {section} page={page} position={index+1} {kind} preview={preview}',flush=True)
        except Exception as error:
            remaining.append({**failure,'error':type(error).__name__+': '+str(error)[:160]})
            print(f'RETRY FAILED {section} page={page} position={index+1} {type(error).__name__}',flush=True)
    report['failures'] = remaining
    for section,info in report['sections'].items():
        state = browser.select_section(section)
        info['final_visible_total'] = state['total']
        info['complete'] = len(set(info['ids']))==info['expected']==state['total'] and not info['duplicates']
    report['finished_at'] = datetime.now(timezone.utc).isoformat()
    history['remaining'] = remaining
    history['finished_at'] = report['finished_at']
    save_json(DEST/'runs'/(datetime.now(timezone.utc).strftime('%Y%m%dT%H%M%S%fZ')+'-retry.json'),history)
    save_json(report_path,report)
    print(json.dumps({'recovered':len(history['recovered']),'remaining':len(remaining)}),flush=True)
    return 1 if remaining or not all(s['complete'] for s in report['sections'].values()) else 0


def audit_duplicates(browser):
    """Verify repeated deliveries against each physical source card position."""
    report_path = DEST/'collection-report.json'
    report = json.loads(report_path.read_text())
    audit = {'verified_at':datetime.now(timezone.utc).isoformat(),'sections':{}}
    for section,info in report['sections'].items():
        if not info['duplicates']:
            continue
        if section != 'backgrounds':
            raise ValueError('Duplicate prompt/source card IDs require separate investigation')
        state = browser.select_section(section)
        if state['total'] != info['expected']:
            raise ValueError('Source total changed during duplicate audit')
        metadata = [json.loads(p.read_text()) for p in (DEST/'items').glob('bg-*/metadata.json')]
        known = {(m['source']['page_at_capture'],m['source']['position_at_capture']) for m in metadata}
        page_size = max(position for page,position in known)
        all_positions = {(i//page_size+1,i%page_size+1) for i in range(info['expected'])}
        missing = all_positions-known
        repeated = set(info['duplicates'])
        candidates = missing | {(m['source']['page_at_capture'],m['source']['position_at_capture']) for m in metadata if m['id'] in repeated}
        grouped = {identity:[] for identity in repeated}
        for page,position in sorted(candidates):
            browser.go_page(page)
            card = browser.card(position-1)
            delivery = browser.delivery(position-1,True)
            digest = hashlib.sha256(delivery['url'].encode()).hexdigest()
            identity = 'bg-'+digest[:20]
            if identity not in repeated:
                raise ValueError('Suspected duplicate position has a different delivery')
            saved = json.loads((DEST/'items'/identity/'metadata.json').read_text())
            if saved['content_sha256'] != digest:
                raise ValueError('Duplicate delivery hash mismatch')
            key = parse_qs(urlsplit(card.get('poster') or '').query).get('key',[None])[0]
            grouped[identity].append({'page':page,'position':position,'delivery_sha256':digest,'preview_media_key':key})
            print(f'CONFIRMED {section} page={page} position={position} {identity}',flush=True)
        duplicate_count = sum(len(group)-1 for group in grouped.values())
        if any(len(group)<2 for group in grouped.values()) or duplicate_count!=len(info['duplicates']) or len(info['ids'])+duplicate_count!=info['expected']:
            raise ValueError('Duplicate audit did not reconcile the source card count')
        audit['sections'][section] = {'expected_cards':info['expected'],'unique_deliveries':len(info['ids']),'duplicate_cards':duplicate_count,'groups':[{'id':identity,'occurrences':group} for identity,group in sorted(grouped.items())]}
        info['duplicate_audit'] = 'duplicate-audit.json'
        info['complete'] = info['final_visible_total']==info['expected']
    save_json(DEST/'duplicate-audit.json',audit)
    save_json(report_path,report)
    print(json.dumps({'verified_duplicate_cards':sum(s['duplicate_cards'] for s in audit['sections'].values())}),flush=True)
    return 1 if report['failures'] or not all(s['complete'] for s in report['sections'].values()) else 0


def main():
    parser = argparse.ArgumentParser(description=__doc__)
    parser.add_argument('--session', default='framesbase-archive')
    parser.add_argument('--sample', action='store_true')
    parser.add_argument('--refresh', action='store_true', help='Re-read content and previews instead of resuming verified files')
    parser.add_argument('--retry-failures', action='store_true', help='Retry positions recorded by the last full collection')
    parser.add_argument('--audit-duplicates',action='store_true',help='Verify duplicate background deliveries at their source card positions')
    parser.add_argument('--section', choices=list(SECTIONS))
    args = parser.parse_args()
    browser = Browser(args.session)
    browser.install_copy_capture()
    if args.retry_failures:
        return retry_failures(browser)
    if args.audit_duplicates:
        return audit_duplicates(browser)
    report = {'started_at':datetime.now(timezone.utc).isoformat(),'mode':'sample' if args.sample else 'full','sections':{},'failures':[]}
    report_path = DEST / ('sample-report.json' if args.sample else 'collection-report' + ('-' + args.section if args.section else '') + '.json')
    history_path = DEST / 'runs' / (datetime.now(timezone.utc).strftime('%Y%m%dT%H%M%S%fZ') + '.json')
    for section in ([args.section] if args.section else SECTIONS):
        state = browser.select_section(section)
        browser.first_page()
        seen = []
        section_report = {'expected':state['total'],'pages':state['pages'],'ids':seen,'duplicates':[]}
        report['sections'][section] = section_report
        for page in range(1, (1 if args.sample else state['pages']) + 1):
            browser.wait('document.querySelectorAll("article").length>0')
            count = browser.evaluate('document.querySelectorAll("article").length')
            indexes = ([0,1,8] if section=='sites' else [0,1,2]) if args.sample else range(count)
            for index in indexes:
                try:
                    identity, kind, preview = collect_item(browser, section, page, index, refresh=args.refresh)
                    if identity in seen:
                        section_report['duplicates'].append(identity)
                    else:
                        seen.append(identity)
                    print(f'{section} {page}/{state["pages"]} card {index+1}/{count}: {kind}, preview={preview}, saved={len(seen)}', flush=True)
                except Exception as error:
                    report['failures'].append({'section':section,'page':page,'position':index+1,'error':type(error).__name__ + ': ' + str(error)[:160]})
                    print(f'FAILED {section} page={page} position={index+1} {type(error).__name__}', flush=True)
                    browser.evaluate('document.querySelector("button.modal-close")?.click()')
                save_json(report_path, report)
                save_json(history_path, report)
                time.sleep(.25)
            if not args.sample and page < state['pages']:
                previous = browser.page_state()
                browser.evaluate('document.querySelector("nav[aria-label=内容分页] button[aria-label=下一页]").click()')
                browser.await_page(SECTIONS[section] + '.', page=page+1, previous=previous)
        section_report['final_visible_total'] = browser.evaluate('+(document.querySelector("main").innerText.match(/(\d+)\s*卡片总数/)||[])[1]')
        section_report['complete'] = (len(seen) == (3 if args.sample else state['total']) and not section_report['duplicates']
                                      and section_report['final_visible_total'] == state['total'])
        save_json(report_path, report)
    report['finished_at'] = datetime.now(timezone.utc).isoformat()
    save_json(report_path, report)
    save_json(history_path, report)
    print(json.dumps({'mode':report['mode'],'saved':sum(len(s['ids']) for s in report['sections'].values()),'failures':len(report['failures'])}), flush=True)
    return 1 if report['failures'] or not all(s['complete'] for s in report['sections'].values()) else 0


if __name__ == '__main__':
    raise SystemExit(main())
