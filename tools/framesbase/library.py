#!/usr/bin/env python3
"""Build, search and verify the local design library without network access."""
import argparse
import colorsys
import hashlib
import json
import re
from collections import Counter
from datetime import datetime, timezone
from pathlib import Path

from collect import DEST, ROOT, save_json

LIBRARY = ROOT / 'design-library'
SECTION_ZH = {'sites':'网站整页','apps':'应用界面','sections':'页面模块','backgrounds':'动态背景'}
ALIASES = {
    'hero':'首屏 主视觉', 'pricing':'价格区 定价 套餐', 'footer':'页脚',
    'cards':'卡片', 'card':'卡片', 'bento':'便当格 网格 卡片', 'faq':'常见问题',
    'testimonial':'客户评价', 'testimonials':'客户评价', 'dashboard':'仪表盘 数据看板',
    'sign in':'登录 表单', 'sign up':'注册 表单', 'signup':'注册 表单', 'form':'表单',
    'feature':'功能介绍', 'features':'功能介绍', 'cta':'行动按钮 转化区',
    'about':'关于我们', 'blog':'博客', 'accordion':'折叠面板', 'tabs':'标签切换',
    'marquee':'跑马灯', 'slider':'滑块 轮播', 'carousel':'轮播', 'carousal':'轮播',
    'saas':'软件服务', 'fintech':'金融科技', 'health':'健康', 'healthcare':'医疗',
    'wellness':'身心健康', 'ecommerce':'电商 商城', 'e-commerce':'电商 商城',
    'travel':'旅行', 'portfolio':'个人作品集', 'agency':'工作室', 'creative':'创意',
    'developer':'开发者', 'education':'教育', 'sports':'运动', 'transportation':'运输',
    'technology':'科技', 'security':'安全', 'nature':'自然', 'food':'食品',
    '3d':'三维 立体', 'art':'艺术', 'editorial':'编辑 杂志', 'fashion':'时尚',
}
SIGNALS = {
    'minimal 极简':r'\bminimal(?:ist|ism)?\b', 'editorial 杂志':r'\beditorial\b',
    'brutalist 粗野':r'\b(?:neo-?)?brutali(?:st|sm)\b', 'glass 玻璃':r'\bglassmorph|\bfrosted glass',
    'gradient 渐变':r'\bgradient\b', 'retro 复古':r'\bretro\b|\bvintage\b',
    'neon 霓虹':r'\bneon\b', '3d 三维':r'\b3d\b|\bthree\.js\b',
    'grid 网格':r'\bgrid\b', 'serif 衬线':r'(?<!sans-)\bserif\b',
    'monospace 等宽':r'\bmonospace\b', 'rounded 圆角':r'\brounded\b',
    'grain 颗粒':r'\bgrain\b|\bnoise texture\b', 'dark 深色':r'\bdark (?:theme|background|mode|palette)\b',
    'light 浅色':r'\blight (?:theme|background|mode|palette)\b',
}
REGIONS = ['hero','pricing','footer','card','bento','faq','testimonial','dashboard','form','feature','cta','about','blog','accordion','tabs','marquee','slider','carousel']


def entries():
    return [(p, json.loads(p.read_text())) for p in sorted((DEST / 'items').glob('*/metadata.json'))]


def visual_summary(path):
    if not path:
        return {}
    from PIL import Image
    with Image.open(path) as image:
        rgb = image.convert('RGB').resize((48,48))
        pixels = list(rgb.getdata())
        luminance = sum(.2126*r+.7152*g+.0722*b for r,g,b in pixels)/len(pixels)/255
        palette_image = rgb.quantize(colors=5)
        palette = palette_image.getpalette()
        colors = []
        color_names = []
        for count, index in sorted(palette_image.getcolors(), reverse=True):
            r,g,b = palette[index*3:index*3+3]
            colors.append('#%02x%02x%02x' % (r,g,b))
            h,s,v = colorsys.rgb_to_hsv(r/255,g/255,b/255)
            hue = h*360
            if v<.18:
                name = '黑色'
            elif s<.18:
                name = '白色' if v>.85 else '灰色'
            else:
                name = next(label for upper,label in [(15,'红色'),(45,'橙色'),(70,'黄色'),(170,'绿色'),(200,'青色'),(255,'蓝色'),(290,'紫色'),(345,'粉色'),(361,'红色')] if hue<upper)
            if name not in color_names:
                color_names.append(name)
        return {'theme':'dark' if luminance<.38 else 'light' if luminance>.68 else 'mixed', 'palette':colors,'color_names':color_names,'method':'preview-pixel-analysis'}


def make_entry(path, metadata, visual_notes=None):
    folder = path.parent
    prompt_file = metadata['files'].get('prompt')
    prompt = (folder/prompt_file).read_text() if prompt_file else ''
    # Conservative lexical signals, not a claim of human-verified style.
    positive = '\n'.join(line for line in prompt.splitlines() if not re.search(r"\b(?:don't|do not|avoid|without)\b",line,re.I))
    signals = [tag for tag, pattern in SIGNALS.items() if re.search(pattern,positive,re.I)]
    category = metadata['source'].get('category') or ''
    title = metadata['title']
    identity_text = (category+' '+title).lower()
    aliases = ' '.join(dict.fromkeys(v for k,v in ALIASES.items() if re.search(r'\b'+re.escape(k)+r'\b',identity_text)))
    regions = [r for r in REGIONS if re.search(r'\b'+r+r'(?:s| section)?\b',identity_text)]
    if not regions:
        regions = [r for r in REGIONS if re.search(r'\b'+r+r'(?:s| section)?\b',positive[:3000],re.I)]
    frameworks = [name for name,pattern in [('React',r'\breact\b'),('Vue',r'\bvue\b'),('Tailwind',r'\btailwind\b'),('HTML/CSS',r'\bhtml\b'),('Three.js',r'\bthree(?:\.js|js)\b'),('GSAP',r'\bgsap\b'),('SwiftUI',r'\bswiftui\b'),('Flutter',r'\bflutter\b'),('React Native',r'\breact native\b')] if re.search(pattern,positive,re.I)]
    preview = folder / metadata['files']['preview'] if metadata['files'].get('preview') else None
    visual = visual_summary(preview)
    section = metadata['source']['section']
    reviewed_visual = (visual_notes or {}).get(metadata['id'])
    theme_zh = {'dark':'深色 暗色','light':'浅色 明亮','mixed':'混合明暗'}.get(visual.get('theme'),'')
    region_aliases = ' '.join(ALIASES.get(r,'') for r in regions)
    note = ' '.join(filter(None,[SECTION_ZH[section], category, aliases, theme_zh, ' '.join(visual.get('color_names',[]))]))
    if reviewed_visual:
        note = reviewed_visual['summary_zh']+' · '+note
    result = {
        'id':metadata['id'],'title':title,'section':section,'category':category,
        'summary_zh':note,'delivery_type':metadata['delivery_type'],
        'derived':{'regions':regions,'style_signals':signals,'framework_mentions':frameworks,'visual':visual,'visual_review':reviewed_visual,'method':'category-and-prompt-keywords; requires-preview-review'},
        'search_aliases':aliases+' '+region_aliases,
        'reuse':{'web':'reference','mini_program':'needs-adaptation','native_app':'needs-adaptation'},
        'implementation_status':metadata.get('implementation_status','unverified'),
        'content_quality':metadata.get('content_quality','unreviewed-reference'),
        'preview_status':metadata.get('preview_status'),
        'source_archive':({**metadata['source_archive'],'directory':str((folder/metadata['source_archive']['directory']).relative_to(LIBRARY))} if metadata.get('source_archive') else None),
        'files':{key:str((folder/value).relative_to(LIBRARY)) for key,value in metadata['files'].items() if value},
        'metadata':str(path.relative_to(LIBRARY)),
    }
    return result


def build():
    notes_path = LIBRARY/'annotations/framesbase-backgrounds.json'
    visual_notes = json.loads(notes_path.read_text())['items'] if notes_path.exists() else {}
    catalog = [make_entry(p,m,visual_notes) for p,m in entries()]
    save_json(LIBRARY/'catalog.json', {'schema_version':1,'generated_at':datetime.now(timezone.utc).isoformat(),'items':catalog})
    by_section = Counter(e['section'] for e in catalog)
    lines = ['# 设计素材目录','', '这是轻量标题目录。精确筛选请使用仓库中的检索命令；完整提示词按需读取。','']
    for section, title in SECTION_ZH.items():
        lines.extend(['## '+title+'（'+str(by_section[section])+'）',''])
        for entry in (e for e in catalog if e['section']==section):
            target = entry['files'].get('prompt') or entry['files'].get('reference') or entry['metadata']
            label = (entry['derived'].get('visual_review') or {}).get('summary_zh') or entry['title']
            issue = ' · ⚠ 原站占位内容' if entry['content_quality']=='source-placeholder' else ' · 原站未提供预览' if entry.get('preview_status')=='not-provided-by-source' else ''
            lines.append('- ['+label.replace('[','').replace(']','')+']('+target+') · '+entry['summary_zh']+' · '+entry['delivery_type']+issue)
        lines.append('')
    (LIBRARY/'INDEX.md').write_text('\n'.join(lines).rstrip()+'\n')
    print(json.dumps({'entries':len(catalog),'sections':dict(by_section)},ensure_ascii=False))


def search(args):
    catalog = json.loads((LIBRARY/'catalog.json').read_text())['items']
    terms = args.query.lower().split()
    matches = []
    for entry in catalog:
        if entry.get('content_quality') == 'source-placeholder' and not args.include_incomplete:
            continue
        if args.section and entry['section'] != args.section:
            continue
        if args.delivery and entry['delivery_type'] != args.delivery:
            continue
        if args.theme and entry['derived']['visual'].get('theme') != args.theme:
            continue
        if args.region and args.region not in entry['derived']['regions']:
            continue
        haystack = json.dumps({k:entry[k] for k in ['title','category','summary_zh','derived','search_aliases']},ensure_ascii=False).lower()
        found = [term for term in terms if term in haystack]
        if terms and not found:
            continue
        score = sum(4 if term in entry['title'].lower() or term in entry['category'].lower() else 1 for term in found)
        matches.append((len(found),score,entry))
    matches.sort(key=lambda value:(-value[0],-value[1],value[2]['id']))
    output = []
    for _,score,e in matches[:args.limit]:
        output.append({'id':e['id'],'title':e['title'],'summary_zh':e['summary_zh'],'delivery_type':e['delivery_type'],'regions':e['derived']['regions'],'framework_mentions':e['derived']['framework_mentions'],'implementation_status':e['implementation_status'],'source_archive':e.get('source_archive'),'files':e['files'],'score':score})
    print(json.dumps({'matches':len(matches),'shown':len(output),'paths_relative_to':'design-library/','items':output},ensure_ascii=False,indent=2))


def validate():
    failures = []
    rows = entries()
    ids = set()
    counts = Counter()
    kinds = Counter()
    missing_previews = []
    source_issues = []
    source_files_verified = 0
    for path,m in rows:
        identity = m['id']
        if identity in ids or path.parent.name != identity:
            failures.append([identity,'duplicate-or-misplaced-id'])
        ids.add(identity)
        counts[m['source']['section']] += 1
        kinds[m['delivery_type']] += 1
        if m.get('content_quality') == 'source-placeholder':
            source_issues.append({'id':identity,'title':m['title'],'issue':'source-placeholder'})
        for name,value in m['files'].items():
            if value and (not (path.parent/value).is_file() or not (path.parent/value).resolve().is_relative_to(path.parent.resolve())):
                failures.append([identity,'missing-or-escaping-path:'+name])
        prompt = m['files'].get('prompt')
        if prompt and (path.parent/prompt).exists():
            raw = (path.parent/prompt).read_bytes()
            js_length = len(raw.decode().encode('utf-16-le'))//2
            if m.get('displayed_prompt_chars') is not None and m['displayed_prompt_chars'] != js_length:
                failures.append([identity,'prompt-length-mismatch'])
        else:
            raw = (m.get('original_url') or '').encode()
        if hashlib.sha256(raw).hexdigest() != m.get('content_sha256'):
            failures.append([identity,'content-hash-mismatch'])
        if not m['files'].get('preview'):
            missing_previews.append(identity)
            source_issues.append({'id':identity,'title':m['title'],'issue':m.get('preview_status','missing-preview')})
            if m.get('preview_status') != 'not-provided-by-source':
                failures.append([identity,'unexpected-missing-preview'])
        else:
            from PIL import Image
            try:
                with Image.open(path.parent/m['files']['preview']) as image:
                    if m.get('preview_processing') and (getattr(image,'n_frames',1) != 1 or max(image.size)>960 or list(image.size)!=m['preview_processing']['dimensions']):
                        failures.append([identity,'processed-preview-shape-mismatch'])
                    image.verify()
                preview_path = path.parent/m['files']['preview']
                if m.get('preview_sha256') and hashlib.sha256(preview_path.read_bytes()).hexdigest() != m['preview_sha256']:
                    failures.append([identity,'preview-hash-mismatch'])
                if m.get('preview_processing') and preview_path.stat().st_size != m['preview_processing']['bytes']:
                    failures.append([identity,'processed-preview-size-mismatch'])
            except Exception:
                failures.append([identity,'invalid-preview'])
        if m.get('source_archive'):
            source_dir = (path.parent/m['source_archive']['directory']).resolve()
            receipt_path = path.parent/(m['files'].get('source_receipt') or 'source-receipt.json')
            if not source_dir.is_dir() or not source_dir.is_relative_to(path.parent.resolve()) or not receipt_path.is_file():
                failures.append([identity,'source-directory-or-receipt-invalid'])
            else:
                receipt = json.loads(receipt_path.read_text())
                if receipt['commit'] != m['source_archive']['commit']:
                    failures.append([identity,'source-commit-mismatch'])
                expected_source_paths = set()
                for item in receipt['files']:
                    source_path = source_dir/item['path']
                    expected_source_paths.add(item['path'])
                    if source_path.is_symlink() or not source_path.is_file() or not source_path.resolve().is_relative_to(source_dir):
                        failures.append([identity,'source-file-missing-or-escaping:'+item['path']])
                    elif source_path.stat().st_size != item['bytes'] or hashlib.sha256(source_path.read_bytes()).hexdigest() != item['sha256']:
                        failures.append([identity,'source-file-hash-or-size:'+item['path']])
                    else:
                        source_files_verified += 1
                actual_source_paths = {str(p.relative_to(source_dir)) for p in source_dir.rglob('*') if p.is_file()}
                if actual_source_paths != expected_source_paths:
                    failures.append([identity,'source-file-set-mismatch'])
        serialized = json.dumps(m,ensure_ascii=False)
        if re.search(r'[?&](?:signature|account|expires|token|access_token)=|-----BEGIN .*PRIVATE KEY-----',serialized,re.I):
            failures.append([identity,'sensitive-metadata'])
    collection_path = DEST/'collection-report.json'
    expected = {}
    verified_duplicates = {}
    if collection_path.exists():
        report = json.loads(collection_path.read_text())
        expected = {s:v['expected'] for s,v in report['sections'].items()}
        audit_path = DEST/'duplicate-audit.json'
        if audit_path.exists():
            audit = json.loads(audit_path.read_text())
            by_id = {m['id']:m for _,m in rows}
            for section,section_audit in audit['sections'].items():
                seen_positions = set()
                verified = Counter()
                valid = section_audit['expected_cards']==expected.get(section)
                for group in section_audit['groups']:
                    original = by_id.get(group['id'])
                    if not original or len(group['occurrences'])<2:
                        valid = False
                        continue
                    for occurrence in group['occurrences']:
                        position = (occurrence['page'],occurrence['position'])
                        if position in seen_positions or occurrence['delivery_sha256']!=original['content_sha256']:
                            valid = False
                        seen_positions.add(position)
                    verified[group['id']] += len(group['occurrences'])-1
                if verified != Counter(report['sections'][section]['duplicates']) or sum(verified.values())!=section_audit['duplicate_cards']:
                    valid = False
                if valid:
                    verified_duplicates[section] = sum(verified.values())
                else:
                    failures.append([section,'duplicate-audit-invalid'])
        for section,total in expected.items():
            if counts[section]+verified_duplicates.get(section,0) != total:
                failures.append([section,'count-mismatch',counts[section],total])
        if report.get('failures'):
            failures.append(['collection','unresolved-capture-failures'])
    if (LIBRARY/'catalog.json').exists():
        catalog = json.loads((LIBRARY/'catalog.json').read_text())['items']
        if {e['id'] for e in catalog} != ids or len(catalog) != len(ids):
            failures.append(['catalog','identity-mismatch'])
        for entry in catalog:
            for value in entry['files'].values():
                if not (LIBRARY/value).is_file() or not (LIBRARY/value).resolve().is_relative_to(LIBRARY.resolve()):
                    failures.append([entry['id'],'catalog-path-missing-or-escaping'])
    summary = {'validated_at':datetime.now(timezone.utc).isoformat(),'source_cards':sum(expected.values()),'entries':len(rows),'counts':dict(counts),'expected':expected,'verified_duplicate_cards':verified_duplicates,'delivery_types':dict(kinds),'source_files_verified':source_files_verified,'preview_missing':missing_previews,'source_issues':source_issues,'failures':failures,'passed_entries':len(rows)-len({f[0] for f in failures if f[0] in ids})}
    save_json(DEST/'manifest.json',summary)
    print(json.dumps(summary,ensure_ascii=False,indent=2))
    return 1 if failures else 0


def main():
    parser = argparse.ArgumentParser(description=__doc__)
    commands = parser.add_subparsers(dest='command',required=True)
    commands.add_parser('build')
    commands.add_parser('validate')
    query = commands.add_parser('search')
    query.add_argument('--query',default='')
    query.add_argument('--section',choices=list(SECTION_ZH))
    query.add_argument('--delivery',choices=['prompt','source-link','background-link','downloadable-code'])
    query.add_argument('--theme',choices=['light','dark','mixed'])
    query.add_argument('--region',choices=REGIONS)
    query.add_argument('--limit',type=int,default=5)
    query.add_argument('--include-incomplete',action='store_true',help='Include source placeholders for auditing')
    args = parser.parse_args()
    if args.command == 'build': build()
    elif args.command == 'search': search(args)
    else: return validate()
    return 0


if __name__ == '__main__':
    raise SystemExit(main())
