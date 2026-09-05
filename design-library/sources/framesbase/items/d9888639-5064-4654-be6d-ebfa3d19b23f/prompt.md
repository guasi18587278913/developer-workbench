# PROMPT — Recreate “siteforge” landing page exactly

Create a **single self-contained `index.html`** that recreates this page pixel-faithfully. Title: `siteforge — Build websites at scale`.

## Critical facts (do not invent)

- **No external URLs.** No Google Fonts, CDNs, images, favicons, or remote assets. Everything is inline.
- **No CSS animations, transitions, or `@keyframes`.** No hover motion, no dashed-line draw, no pulsing nodes. The only “motion” is a **responsive JS layout engine** that recalculates absolute positions on resize / orientation / visualViewport / ResizeObserver via `requestAnimationFrame`.
- **No links, buttons, or real interactivity.** This is a static artboard mockup of a product UI, not a working app.
- Architecture: fixed full-viewport dark stage with an absolutely positioned artboard of UI chrome.

Reference live file (local): `http://127.0.0.1:9555/index.html`  
Reference artboards in the same folder: `pc-preview-1282x981.png`, `tablet-preview-768x1024.png`, `mobile-preview-390x844.png`, `mobile-preview-360x640-9x16.png`.

---

## Fonts (exact family names used in source)

Embed two custom families as **WOFF2 `@font-face` data URIs** (as in the original), `font-display: block`:

| Family | Weights | Role |
|---|---|---|
| **`Sf Sans`** | 400, 500, **600** | Brand + headline + body + “You” pill |
| **`Sf Mono`** | 400, **500** | All UI chrome labels (tabs, ELEMENTS, node titles, steps, AUTO SAVE, LAYERS, toolbar labels) |

Body stack:

```css
font-family: 'Sf Sans', Inter, -apple-system, 'Helvetica Neue', Arial, sans-serif;
```

Also set:
- `-webkit-font-smoothing: antialiased`
- `font-kerning: none`

If you cannot embed the original base64 fonts, closest public substitutes:
- **Sf Sans** → Geist Sans / Inter / SF Pro Display–like geometric sans
- **Sf Mono** → JetBrains Mono / IBM Plex Mono / SF Mono–like technical mono  
Keep the **same names in CSS** (`'Sf Sans'`, `'Sf Mono'`) so styles match.

---

## Color system (exact)

| Token | Value | Use |
|---|---|---|
| Page / stage bg | `#08090a` | `html`, `body`, `#viewport` |
| Card gradient | `linear-gradient(180deg, #08090a 0%, #08090a 40%, #0b0c0d 80%, #0b0c0d 100%)` | Main card |
| Pure white | `#fff` / `#fdfdfd` / `#f8f8f8` / `#fbfbfb` | Logo, wordmark, headline, active tab bg, icons, nubs, cursor, live dot |
| Soft white | `rgba(255,255,255,.93)` | Eyebrow |
| Mid gray text | `#a9a9a9` | Lede |
| Node subtitle | `#9d9d9d` | `.nsub` |
| Dim UI text | `rgba(255,255,255,.86)` / `.82` / `.78` / `.72` | Tabs inactive, toolbar, ELEMENTS, AUTO SAVE, LAYERS, steps |
| Hairlines | `rgba(255,255,255,.062)` | Vertical page rules |
| Borders | `rgba(255,255,255,.082)` panel; `.105` tabs/cells/toolbar | |
| Node borders | `rgba(255,255,255,.72)` | Nodes + plus boxes |
| Connector stroke | `rgba(255,255,255,.55)` dashed; `.505` solid stubs | |
| You pill | bg `#232324`, border `rgba(255,255,255,.14)`, text `#f2f2f2` | |
| Active tab text | `#0b0b0c` | BUILDER |
| Hatch pattern | `repeating-linear-gradient(45deg, rgba(255,255,255,.95) 0 2.1px, transparent 2.1px 4.72px)` | |

**Live status dot is white `#fff` in code** (not green), 8×8px circle.

---

## Stage / coordinate system (exact desktop reference)

```
#viewport: position fixed; inset 0; overflow hidden; bg #08090a
#stage:    1282 × 981; transform: scale(var(--fit-scale,1)); transform-origin: 0 0
#artboard: left -82px; top -46px; 1448 × 1086
#artboard > *: position absolute
```

Card (visible frame): `left:82px; top:46px; width:1282px; height:981px` (fills stage in desktop mode).

Three vertical rules inside card at x = `319.5`, `641.5`, `962.5` (1px wide, full card height, `rgba(255,255,255,.062)`).

`overflow: hidden` on html/body — no page scroll.

---

## Header / hero (desktop absolute positions)

**Logo mark** (SVG, left `128px`, top `99px`, 42×34, fill `#fff`):
- Path A: `M8 0 L26.2 0 L20.3 17 L0 17 Z`
- Path B: `M20.3 17 L41.2 17 L32.2 33.4 L15.2 33.4 Z`  
(Two offset parallelograms / chevrons.)

**Wordmark** `.wordmark`: `siteforge`  
`left:184.5; top:99; font-size:28.5; font-weight:600; letter-spacing:-.42px; line-height:34px; color:#fdfdfd`

**Eyebrow hatch** `.hatch-eyebrow`: `left:433; top:112; 29×13` diagonal slash block.

**Eyebrow** `.eyebrow`: `OUR PLATFORM` (non-breaking space after OUR)  
`left:475; top:108; Sf Mono 15/20; letter-spacing:-.50px; color:rgba(255,255,255,.93)`

**Menu** (top-right): two white bars `.menu i` at `left:1289`, width `33`, height `3`, tops `107` and `117`, `border-radius:.5px`.

**H1**:  
`Build websites<br>at scale`  
`left:432; top:160; width:620; font-size:67.5; font-weight:400; line-height:66; letter-spacing:-1.15px; color:#f8f8f8`

**Lede** `.lede`:  
Line 1 (`letter-spacing:-.20px`): `Design, launch, and manage high-performance websites`  
Line 2 (`letter-spacing:-.055px`): `with a visual builder. No complex coding—just results.`  
`left:434; top:313; width:520; font-size:18; line-height:33; color:#a9a9a9`

---

## Builder panel shell

`.panel`: `left:122; top:428; 1200×544; border:1px solid rgba(255,255,255,.082); border-radius:3px`

### Left rail
- Side hatch `.hatch-side`: `158,461` size `13×91`
- Tab **BUILDER** `.tab.tab-a`: `208,466` size `163×40`; bg `#fbfbfb`; text `#0b0b0c`; Sf Mono 13.6; letter-spacing `.22px`; centered
- Tab **TEMPLATES** `.tab.tab-b`: `208,516` size `163×39`; border `1px solid rgba(255,255,255,.105)`; text `rgba(255,255,255,.86)`
- Label **ELEMENTS**: `208,588`; Sf Mono 13.4; letter-spacing `-.33px`; color `.78`
- **3×3 element cells** (each `47×45`, border `.105`, radius `2`), icons 21×21 stroke `#fff` stroke-width `~1.7`:

| Position | Icon |
|---|---|
| 208,616 | Text “T” (horizontal + vertical stroke) |
| 266,616 | Image (rect + circle + mountain paths) |
| 324,616 | Sidebar layout (rect + vertical divider + filled bar) |
| 208,671 | Stacked layers (3 chevrons) |
| 266,671 | Button / pill (rounded rect + midline) |
| 324,671 | 2×2 grid of rounded squares |
| 208,726 | Code chevrons `<>` |
| 266,726 | Bulleted list (3 dots + lines) |
| 324,726 | Plus |

- Vertical tool divider `.vline`: `160,608` size `2.4×224`, bg `rgba(255,255,255,.72)`
- Bottom-left L-bracket SVG at `157,862` (60×72, stroke `#fff` width `2.6`)
- **AUTO SAVE** at `227,915`; Sf Mono 10.4; letter-spacing `.2px`
- Live dot `.dot-live`: `291.5,921` 8×8 white circle
- Save hatch `.hatch-save`: `309,920` `62×11`

### Top toolbar (y≈467, height 38, border `.105`, radius 3)
1. History control `left:403.5; width:77` — undo + redo (redo is same SVG flipped `scaleX(-1)`), vertical divider at x38
2. **VIEW** box `497.5` width `92.5` + chevron
3. **PAGE: HOME** box `602.5` width `140.5` + chevron
4. Settings gear box `759.5` width `38`

Toolbar labels: Sf Mono 11.3; letter-spacing `-.2px`; color `.86`

### Canvas
`.canvas`: `404,513` size `852×424`  
Dot grid:

```css
background-image: radial-gradient(
  circle,
  rgba(255,255,255,.225) 0 .55px,
  rgba(255,255,255,.10) .55px 1.15px,
  transparent 1.15px
);
background-size: 22.3px 22.3px;
background-position: -1.95px -.15px;
```

### Right edge
**LAYERS** rotated 90°: `left:1288; top:472; Sf Mono 11.2; color .72; transform:rotate(90deg); transform-origin:0 0`

---

## Workflow nodes (exact copy + structure)

**Row 1** (nodes top `568`, height `59.5`, border `.72`, radius `10`, white filled icons ~29×29):

| Node | Title | Subtitle |
|---|---|---|
| Lead Form | Lead Form | Capture Leads |
| Choose Template | Choose Template | Pick a Starter |
| Customize Layout | Customize Layout | Visual Builder |
| CMS | CMS | Content Hub |
| Publish Site | Publish Site | Deploy |

Between consecutive row-1 pairs: tiny **`1 step`** labels (Sf Mono 7.2, color `.78`) above the connectors.

White rectangular **nubs** (ports) `10×13`, radius `2.5` on node left/right edges.

After Publish Site: small **plus** box `17×18` with + icon.

**Row 2** (`.node2`, top `747.5`, height `57`) inside a dashed group rect:

| Node | Title | Subtitle |
|---|---|---|
| Mobile Preview | Mobile Preview | Responsive Check |
| SEO Check | SEO Check | Optimize |
| Go Live | Go Live | Launch |

Plus two more **`1 step`** labels between those three, then another trailing plus.

Icons (exact meaning):
- Lead Form: person (circle head + body)
- Choose Template: split layout window
- Customize Layout: pencil + underline
- CMS: stacked database cylinders
- Publish Site: rocket (with small dark window circle)
- Mobile Preview: phone outline
- SEO Check: magnifying glass
- Go Live: checkmark in circle

### Connectors (SVG overlay, pointer-events none)
- Horizontal **dashed** links row 1: `stroke rgba(255,255,255,.55)`, width `1.5`, `stroke-dasharray: 13 9`
- Vertical **dashed** branch from Customize Layout down into group
- Dashed rounded group rect around row 2: `x=686 y=717.3 w=468 h=152.7 rx=2`
- Short **solid** stubs to trailing pluses / group edges: stroke `.505`
- White mouse cursor polygon near bottom pointing at the You pill

### Collaboration pill
`.youpill`: text **`You`**  
`647,902` size `51×32`, radius `16`, bg `#232324`, border `.14`, font-size `14.5`, color `#f2f2f2`

---

## Responsive behavior (must implement)

Breakpoints from source JS:

```
mobile:  width <= 599 AND height >= width
tablet:  width <= 1024 (else)
desktop: width > 1024
tablet orientation: portrait if height >= width else landscape
```

### Desktop
- Fit scale = `min(1.2, availableWidth/1282, availableHeight/contentHeight)`
- Set `--fit-scale` on `#stage`
- Grow card/panel/canvas horizontally; redistribute header / toolbar / flow nodes / ports / step labels / connectors proportionally
- Vertical rules stretch with growth using workspace anchor from first rule

### Tablet / mobile
- Rebuild layout into stacked / reflowed compositions (sidebar rail, scaled toolbar, reflowed node rows, recomputed connector geometry)
- Use token functions from source (`MOBILE_TOKENS`, `TABLET_TOKENS.portrait|landscape`) for margins, headline sizes, node sizes, etc.
- Force `--fit-scale: 1` in mobile/tablet modes while manually positioning elements

Listeners: `resize`, `orientationchange`, `visualViewport.resize`, `ResizeObserver` on `documentElement`.

---

## What NOT to add

- No purple gradients, glassmorphism, drop shadows, glow, rounded-full marketing pills, emoji
- No cards-as-marketing-sections — the only “panel” is the builder chrome
- No real navigation destinations / URLs
- No CSS animation of connectors, cursors, or tabs
- No green auto-save indicator (code uses white)

---

## Delivery

Output one production-ready `index.html` with:
1. Embedded `@font-face` (or documented substitute mapping)
2. Exact copy, hierarchy, and desktop absolute artboard
3. Inline SVG icons matching the described strokes/fills
4. Full responsive JS layout engine matching the breakpoints above
5. Visual match to `pc-preview-1282x981.png` at ~1282×981 and the mobile/tablet preview PNGs at their breakpoints

Match the aesthetic: flat, technical, blueprint / wireframe SaaS dark mode — almost zero ornament beyond hatch marks, hairlines, and the node graph.

---

### Notes for you (not part of the prompt)

- Original fonts are proprietary **embedded base64 WOFF2** named `Sf Sans` / `Sf Mono` — there are **zero** remote font URLs to paste.
- There are **no animations** in the real file; if someone asks for “animations,” the accurate answer is responsive reflow only.
- Closest public font stand-ins: **Geist/Inter + JetBrains Mono**.