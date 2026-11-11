#!/usr/bin/env python3
"""Merge component annotations and build the by-component index. No network access."""
import argparse
import json
from collections import Counter, defaultdict
from datetime import date
from pathlib import Path

from collect import ROOT, save_json
from library import write_indexes

LIBRARY = ROOT / 'design-library'
NOTES = LIBRARY / 'annotations/framesbase-components.json'
OUT = LIBRARY / 'components'
ITEMS = 'sources/framesbase/items'

# 顺序即目录里的排列顺序；规程 component-review.md 里的类型表与此保持一致。
TYPES = {
    'layout': '整体布局与网格', 'nav': '导航栏', 'hero': '首屏', 'logos': '标志墙与跑马灯', 'features': '功能介绍',
    'stats': '数据条', 'cards': '卡片与列表', 'pricing': '价格区', 'testimonials': '客户评价',
    'faq': '常见问题与折叠面板', 'cta': '行动号召区', 'forms': '表单与登录注册', 'footer': '页脚',
    'dashboard': '数据看板与图表', 'table': '表格与筛选', 'steps': '流程与时间线', 'tabs': '标签切换与轮播',
    'about': '关于、团队与自我介绍', 'status': '404 与空状态',
    'm-onboarding': '手机欢迎与引导页', 'm-tabbar': '手机底部导航', 'm-topbar': '手机顶栏与搜索', 'm-home': '手机首页',
    'm-detail': '手机详情页', 'm-profile': '手机个人中心',
    'buttons': '按钮', 'controls': '徽标与小控件', 'mockup': '截图框与样机',
    'type': '标题与字体排印', 'motion': '动效做法', 'bg': '背景处理',
}
GROUPS = [('网页', ['layout', 'nav', 'hero', 'logos', 'features', 'stats', 'cards', 'pricing', 'testimonials', 'faq', 'cta', 'forms', 'footer', 'dashboard', 'table', 'steps', 'tabs', 'about', 'status']),
          ('手机界面', ['m-onboarding', 'm-tabbar', 'm-topbar', 'm-home', 'm-detail', 'm-profile']),
          ('通用样式', ['buttons', 'controls', 'mockup', 'type', 'motion', 'bg'])]
# reactbits-preview 仓库 src/components/blocks/ 下的区块文件前缀及数量（2026-07 同步的 ReactBits Pro 区块）。
REACTBITS = {
    'nav': [('navigation', 11)], 'hero': [('hero', 17)], 'features': [('features', 9)], 'stats': [('stats', 11)],
    'cards': [('blog', 7), ('ecommerce', 7), ('showcase', 5)], 'pricing': [('pricing', 11), ('comparison', 4)],
    'testimonials': [('social-proof', 12)], 'logos': [('social-proof', 12)], 'faq': [('faq', 5)],
    'cta': [('cta', 10), ('download', 5)], 'forms': [('auth', 3), ('contact', 8), ('waitlist', 3)],
    'footer': [('footer', 8)], 'steps': [('how-it-works', 6)], 'about': [('about', 8), ('profile', 3)],
    'status': [('404', 5)],
}
PLATFORM = {'desktop': '电脑', 'mobile': '手机', 'responsive': '电脑＋手机'}
SCOPE = {'first-screen': '只有首屏', 'full-page': '整页', 'module': '单个模块', 'app': '应用界面'}
BASIS = {'preview': '预览可见', 'prompt': '仅提示词'}
THEMES = {'dark': '深色', 'light': '浅色', 'mixed': '明暗混合'}
SPLIT_AT = 150  # 单个组件超过这么多条时，按明暗拆成几个文件


def check(record, known):
    problems = []
    if record.get('id') not in known:
        problems.append('unknown-id')
    if record.get('platform') not in PLATFORM:
        problems.append('bad-platform')
    if record.get('scope') not in SCOPE:
        problems.append('bad-scope')
    if not record.get('look_zh'):
        problems.append('missing-look')
    for position, part in enumerate(record.get('components') or []):
        where = 'components[%d]' % position
        if part.get('type') not in TYPES:
            problems.append(where + ':bad-type:' + str(part.get('type')))
        if part.get('basis') not in BASIS:
            problems.append(where + ':bad-basis')
        if part.get('rating') not in (3, 4, 5):
            problems.append(where + ':bad-rating')
        elif part.get('basis') == 'prompt' and part['rating'] > 4:
            problems.append(where + ':prompt-only-rated-5')
        if part.get('type') == 'motion' and part.get('basis') != 'prompt':
            problems.append(where + ':motion-must-be-prompt')
        if not part.get('look_zh') or not part.get('how_zh'):
            problems.append(where + ':missing-text')
    if sum(1 for part in record.get('components') or [] if part.get('rating') == 5) > 1:
        problems.append('more-than-one-5')
    if not record.get('components') and not record.get('note_zh'):
        problems.append('empty-without-note')
    return problems


def merge(paths, dry_run=False):
    catalog = {e['id'] for e in json.loads((LIBRARY / 'catalog.json').read_text())['items']}
    notes = json.loads(NOTES.read_text()) if NOTES.exists() else {'items': {}}
    failures = []
    added = 0
    for path in paths:
        for number, line in enumerate(Path(path).read_text().splitlines(), 1):
            if not line.strip():
                continue
            try:
                record = json.loads(line)
            except ValueError:
                failures.append([str(path), number, 'invalid-json'])
                continue
            problems = check(record, catalog)
            if problems:
                failures.append([str(path), number, record.get('id'), problems])
                continue
            identity = record.pop('id')
            record.pop('title', None)
            record.update({'method': 'assistant-preview-and-prompt-review', 'reviewed_at': date.today().isoformat()})
            notes['items'][identity] = record
            added += 1
    if dry_run:
        print(json.dumps({'valid_records': added, 'failures': failures}, ensure_ascii=False, indent=2))
        return 1 if failures else 0
    if not failures:
        notes['items'] = dict(sorted(notes['items'].items()))
        save_json(NOTES, notes)
    print(json.dumps({'merged': 0 if failures else added, 'total': len(notes['items']), 'failures': failures}, ensure_ascii=False, indent=2))
    return 1 if failures else 0


def write_list(filename, title, entries, catalog, see_also):
    lines = ['# ' + title, '',
             '共 %d 条，按推荐度从高到低排。推荐度是 AI 看预览图、读提示词后给的，只用来排先后，选用前仍要看图。' % len(entries), '',
             '- 预览可见：预览图里看得到这个组件。',
             '- 仅提示词：预览图没拍到，按提示词的文字写的，用前先读提示词。',
             '- 每条素材的目录是 `../%s/<编号>/`，里面 `preview.webp` 是预览图，`prompt.md` 是提示词。' % ITEMS, '']
    for rating in (5, 4, 3):
        group = [row for row in entries if row[2]['rating'] == rating]
        if not group:
            continue
        lines.extend(['## 推荐度 %d（%d 条）' % (rating, len(group)), ''])
        for identity, record, part in group:
            folder = '../%s/%s/' % (ITEMS, identity)
            source = '%s · %s · 来自「%s」（%s）' % (PLATFORM[record['platform']], BASIS[part['basis']], catalog[identity]['title'], SCOPE[record['scope']])
            if rating >= 4:
                lines.extend(['- **' + part['look_zh'] + '**',
                              '  做法：' + part['how_zh'],
                              '  %s · [预览图](%spreview.webp) · [提示词](%sprompt.md)' % (source, folder, folder)])
            else:
                lines.append('- %s · %s · [目录](%s)' % (part['look_zh'], source, folder))
        lines.append('')
    (OUT / (filename + '.md')).write_text('\n'.join(lines + see_also).rstrip() + '\n')


def build():
    catalog = {e['id']: e for e in json.loads((LIBRARY / 'catalog.json').read_text())['items']}
    notes = json.loads(NOTES.read_text())['items']
    rows = defaultdict(list)
    for identity, record in notes.items():
        for part in record['components']:
            rows[part['type']].append((identity, record, part))
    OUT.mkdir(exist_ok=True)
    for stale in OUT.glob('*.md'):
        stale.unlink()
    counts = {}
    for kind, name in TYPES.items():
        entries = sorted(rows.get(kind, []), key=lambda row: (-row[2]['rating'], row[2]['basis'] != 'preview', catalog[row[0]]['title'].lower()))
        counts[kind] = Counter(part['rating'] for _, _, part in entries)
        if not entries:
            continue
        see_also = []
        if kind in REACTBITS:
            files = '、'.join('`src/components/blocks/%s-*.tsx`（%d 个）' % pair for pair in REACTBITS[kind])
            see_also = ['## 另见带源码的区块', '',
                        'reactbits-preview 仓库的 %s。React＋Tailwind 付费源码，只借做法，说明见[库外参考](../references.md)。' % files, '']
        if len(entries) <= SPLIT_AT:
            write_list(kind, name, entries, catalog, see_also)
            continue
        # 条目太多时按预览图明暗拆成几份，本文件只做分流。
        parts = defaultdict(list)
        for row in entries:
            parts[(catalog[row[0]]['derived'].get('visual') or {}).get('theme') or 'mixed'].append(row)
        lines = ['# ' + name, '',
                 '共 %d 条，太多放不进一个文件，按预览图的明暗拆成下面几份。先定页面是深色还是浅色，再只打开对应那份；每份都按推荐度从高到低排。' % len(entries), '',
                 '| 明暗 | 文件 | 条数 | 其中推荐度 4 以上 |', '| --- | --- | --- | --- |']
        for theme, label in THEMES.items():
            group = parts.get(theme, [])
            if group:
                write_list('%s-%s' % (kind, theme), '%s · %s' % (name, label), group, catalog, see_also)
                lines.append('| %s | [%s-%s.md](%s-%s.md) | %d | %d |' % (label, kind, theme, kind, theme, len(group), sum(1 for row in group if row[2]['rating'] >= 4)))
        lines.extend(['', '明暗按预览图像素自动判断，混合明暗指画面里深浅区域都占不少。'] + ([''] + see_also if see_also else []))
        (OUT / (kind + '.md')).write_text('\n'.join(lines).rstrip() + '\n')
    lines = ['# 按组件找', '',
             '已看图标注 %d 条页面类素材（网站整页、页面模块、应用界面）。先在下表找到要改的组件，再只打开对应的文件。' % len(notes), '',
             '“带源码区块”是 reactbits-preview 仓库里同类区块的数量，列在各组件文件末尾。', '']
    for title, kinds in GROUPS:
        lines.extend(['## ' + title, '', '| 组件 | 文件 | 条数 | 其中推荐度 4 以上 | 带源码区块 |', '| --- | --- | --- | --- | --- |'])
        for kind in kinds:
            total = sum(counts[kind].values())
            link = '[%s.md](%s.md)' % (kind, kind) if total else '暂无'
            extra = sum(n for _, n in REACTBITS.get(kind, [])) or '—'
            lines.append('| %s | %s | %d | %d | %s |' % (TYPES[kind], link, total, counts[kind][5] + counts[kind][4], extra))
        lines.append('')
    (OUT / 'README.md').write_text('\n'.join(lines).rstrip() + '\n')
    print(json.dumps({'annotated_items': len(notes), 'components': {k: sum(v.values()) for k, v in counts.items() if v}}, ensure_ascii=False))
    write_indexes(list(catalog.values()))
    return 0


def main():
    parser = argparse.ArgumentParser(description=__doc__)
    commands = parser.add_subparsers(dest='command', required=True)
    commands.add_parser('check', help='Validate annotation JSONL files without writing').add_argument('files', nargs='+')
    commands.add_parser('merge').add_argument('files', nargs='+')
    commands.add_parser('build')
    args = parser.parse_args()
    if args.command == 'build':
        return build()
    return merge(args.files, dry_run=args.command == 'check')


if __name__ == '__main__':
    raise SystemExit(main())
