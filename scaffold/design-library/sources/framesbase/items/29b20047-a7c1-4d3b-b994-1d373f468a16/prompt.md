Recreate this exact SaaS marketing section as a **single self-contained HTML file**. No frameworks, no separate CSS/JS files, no Google Fonts, no CDN. Match every measurement, color, type size, interaction, and animation below. Do not invent extra UI (no nav, footer, logos, CTAs, or extra copy).

---

## 1. Document shell

```html
<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover">
<title>Built for every team that influences growth</title>
```

**Critical head script (runs before first paint):**  
If `prefers-reduced-motion: reduce` → do nothing.  
Else: add class `entrance-pending` on `<html>`, and set a **12 000 ms** fallback timer that removes `entrance-pending` if the main entrance script never runs. Store the timer id on `window.__entranceFallback`.

---

## 2. Font (exact)

Embed **Inter** as a variable WOFF2 (latin subset, weights **100–900**), fully inlined — no network font load:

```css
@font-face {
  font-family: 'Inter';
  font-style: normal;
  font-weight: 100 900;
  font-display: block;
  src: url(data:font/woff2;base64,<COPY_EXACT_BASE64_FROM_SOURCE_INDEX.HTML>) format('woff2');
}
```

Body stack:
```css
font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI',
             'Helvetica Neue', Helvetica, Arial, sans-serif;
-webkit-font-smoothing: antialiased;
-moz-osx-font-smoothing: grayscale;
font-synthesis: none;
```

Use non-round weights the variable font allows: **610** (headline), **620** (open label), **420** (description), **500** (closed label / stat). Do not substitute 600/400.

---

## 3. Design tokens

```css
:root {
  --u: 1px;
  --container: 1096px;
  --gutter: 30px;
  --card-aspect: 533 / 438;
  --pad-x: 24px;

  --bg-1: #fdfdfe;
  --bg-2: #f4f7fa;
  --bg-3: #edf2f7;
  --rule: #e3e6e9;
  --divider: #e5e8ea;
  --ink: #14171b;
  --ink-row: #16191d;
  --blue: #0b61d6;
  --muted: #6f7680;
  --marker: #3c4149;
  --grid: rgba(255,255,255,.20);
}
```

Page background:
```css
background: linear-gradient(152deg, var(--bg-1) 0%, var(--bg-2) 56%, var(--bg-3) 100%);
background-attachment: fixed;
```

Body: `min-height: 100vh; display: flex; align-items: center;` (centers the section; scrolls if viewport is short).

---

## 4. Layout geometry (prototype-exact)

| Measurement | Value |
|---|---|
| Content width | 1096px (= 533 + 30 + 533) |
| Stage max-width | `1096 + 24*2` |
| Stage padding | `40px 24px` |
| Top hairline → content | margin-top **36px** on the two-column grid |
| Columns | CSS grid `1fr 1fr`, gap **30px**, `align-items: start` |
| Top rule | 1px high, `#e3e6e9`, full container width |

Class names: `.stage` → `.rule` + `.split` → left `.col` + right `.card`.  
Do **not** name the grid `.row` (that class is reserved for accordion buttons).

---

## 5. Left column — headline

```html
<h1 class="headline">
  <span class="headline-mask"><span class="headline-line">Built for every team that</span></span>
  <span class="headline-mask"><span class="headline-line accent">influences&nbsp;growth.</span></span>
</h1>
```

Typography:
- **27px / 44px**, weight **610**, tracking **-0.60px**, color `#14171b`
- `white-space: nowrap`
- `margin-left: -2px` (side-bearing compensation)
- `.accent`: color `#0b61d6`, `display: block`
- `.headline-mask`: `display: block; overflow: hidden`
- `.headline-line`: `display: block`

Then spacer: **37.4px** tall (`.spacer`).

---

## 6. Accordion (5 exclusive rows)

Constant total height: `4×65 + 81 = 341px`. Exactly one row open. Clicking the already-open row is a **no-op**.

| State | Height | Extra |
|---|---|---|
| Closed | 65px | — |
| Open | 81px | `padding-bottom: 16px` |

All rows: `padding-top: 19px` so label ink starts **23.5px** below row top in **both** states (opening must not shift its own label). Bottom border: 1px `#e5e8ea`.

### Row chrome
- Button `.row`: reset styles, full width, `cursor: pointer`, inherit font, left-aligned, no tap highlight.
- Focus-visible: `outline: 2px solid #0b61d6; outline-offset: 3px`.
- Marker gutter: **23px** wide, **16px** tall, `padding-left: 2.7px` closed / **0** open, `margin-top: -4.6px`.
- Two SVGs always in DOM; CSS toggles visibility:
  - **Closed** — chevron `.cv`, `viewBox="0 0 6 10"`, path `M0 0 L6 5 L0 10 Z`, fill `#3c4149`, size 6×10.
  - **Open** — square `.sq`, `viewBox="0 0 12 12"`, rect `x=.7 y=.7 w=10.6 h=10.6 rx=1.4`, stroke `#0b61d6` at **1.4**, no fill, size 12×12.
- Label: **16.5 / 21**, weight **500**, tracking **-0.08px**, color `#16191d`. Open: color `#0b61d6`, weight **620**. Transition: `color .18s ease`.
- Description (open only): **10.9 / 15**, weight **420**, tracking **+0.02px**, color `#6f7680`, `padding-top: 8.9px`. Closed: `display: none`.
- `aria-expanded` true/false on each button.

### Exact copy + chart data (card is 533×438; percentages of that box)

| Team | Default | Description | `--bar-top` | `--bar-one-top` | Value | Caption |
|---|---|---|---|---|---|---|
| Product | **open** | Understand which features create loyal customers. | 33.99% | 54.11% | 32 | Higher expansion revenue |
| Growth | | See which activation loops actually move revenue. | 39.76% | 47.50% | 41 | Faster time to first value |
| Sales | | Walk into every call knowing what to pitch next. | 44.01% | 59.50% | 27 | Larger average deal size |
| Customer Success | | Catch churn risk weeks before the renewal call. | 50.38% | 58.00% | 19 | Lower gross churn |
| Leadership | | One number the whole company can steer by. | 46.60% | 51.00% | 24 | Shorter planning cycles |

Store as `data-bar-top`, `data-bar-one-top`, `data-value`, `data-caption` on each `.item`.

SR-only figcaption (Product default):  
`Expansion revenue is 32% higher for teams using the product.`

---

## 7. Right card

```css
.card {
  position: relative;
  aspect-ratio: 533 / 438;
  border-radius: 8px;
  overflow: hidden;
  isolation: isolate;
  box-shadow: 0 2px 16px rgba(16,32,56,.10);
  --bar-top: 33.99%;
  --bar-one-top: 54.110%;
  --cap-h: 3.082%;
  --label-op: 1;
}
.chart { --d-cap: 4.566%; --d-label: 9.938%; --d-stat: 15.630%; }
```

### Layers (back → front)
1. **`.mesh`** — inlined WebP photograph (`data:image/webp;base64,…` copied from source). `object-fit: cover`, full bleed, `decoding="sync"`, `alt=""`, `aria-hidden="true"`. **Never animates** (no fade, scale, clip, or move).
2. **`.mesh-film`** —  
   `linear-gradient(180deg, rgba(255,255,255,.05) 0%, rgba(255,255,255,0) 32%, rgba(0,0,0,.045) 100%)`
3. **Grid** (pointer-events none):
   - 6 dashed horizontal 1px lines `--grid`, tops: **8.904%, 26.712%, 44.521%, 62.329%, 80.137%, 97.945%**
   - 1 vertical at left **11.470%**, 1px, gradient:  
     `180deg, rgba(255,255,255,.02) 0%, rgba(218,238,247,.12) 22%, rgba(225,241,248,.28) 54%, rgba(255,255,255,.72) 100%`
4. **Chart**

### Bars (both width **15.009%**)
- **Ghost** left **29.831%**, top `var(--bar-one-top)`, bottom 0:  
  `linear-gradient(180deg, rgba(202,220,233,.43) 0%, rgba(220,232,238,.39) 54%, rgba(240,241,235,.31) 100%)`  
  + `backdrop-filter: blur(1px) saturate(96%)`  
  + inset shadows `0 1px 0 rgba(255,255,255,.12)`, `1px 0 0 rgba(255,255,255,.08)`
- **Blue** left **54.409%**, top `var(--bar-top)`, bottom 0 (opaque, crisp, no outer bloom):  
  `linear-gradient(180deg, rgb(27,101,225) 2.768%, rgb(20,89,211) 33.910%, rgb(17,79,198) 65.052%, rgb(13,74,184) 97.924%)`  
  + inset `1.2px 0 0 rgba(255,255,255,.10)`
- **Cap** same left/width as blue:  
  `top: calc(var(--bar-top) - var(--d-cap))`, height `var(--cap-h)`, fill `rgb(26,104,230)`, inset `1.2px 0 0 rgba(255,255,255,.12)`.  
  **Nothing is drawn between cap and bar** — photograph shows through the gap.

### Chart type
- **Stat** `right: 31.20%`, `top: calc(var(--bar-top) - var(--d-stat))`  
  40/42, weight 500, tracking **-3.0px**, `rgba(255,255,255,.93)`, shadow `0 1px 10px rgba(8,22,40,.34)`, `font-variant-numeric: tabular-nums`, default `32%`
- **Caption** `right: 48.50%`, `top: calc(var(--bar-top) - var(--d-label))`  
  12.3/16, weight 400, tracking 0.04px, `rgba(255,255,255,.95)`, shadow `0 1px 8px rgba(8,22,40,.40)`, opacity `var(--label-op)`, default `Higher expansion revenue`

---

## 8. Accordion → chart animation (rAF, measured @ 60fps)

Constants:
```
BAR_MS = 370, NUM_MS = 800
OUT_MS = 160, IN_AT = 230, IN_MS = 200
CAP_OUT = 190, CAP_AT = 390, CAP_IN = 250
CAP_H = 3.082
```

Easings:  
`outCubic = 1-(1-t)^3` `outQuad = 1-(1-t)^2`

On open of a different row:
1. Toggle `.open` + `aria-expanded` so only that item is open.
2. Resume from **current painted** `--bar-top`, `--bar-one-top`, rounded stat, and caption text (rapid clicks stay smooth).
3. Interpolate both bar tops over **370ms** outCubic.
4. Count number over **800ms** outQuad → `Math.round(value) + '%'`.
5. Caption: fade out 160ms outQuad → hold 0 → **swap text while invisible** → fade in from t=230 for 200ms outQuad.
6. Cap height: shrink to 0 by 190ms outQuad → hold → regrow from 390ms for 250ms outCubic to 3.082%.
7. If `prefers-reduced-motion: reduce`, snap with `settle()` and skip tween.

---

## 9. One-time page entrance (Web Animations API)

On entrance script start: **clear** `window.__entranceFallback` immediately.

If not `.entrance-pending`, or no `Element.animate`, or reduced-motion → remove pending and exit.

### First-paint CSS while `html.entrance-pending`
| Element | Initial state |
|---|---|
| `.rule` | `scaleX(0)`, origin left |
| `.headline-line` | opacity `.01`, `translate3d(0,110%,0)` |
| `.acc` | opacity `.01`, `clip-path: inset(0 0 100% 0)` |
| `.grid` | opacity `0`, `clip-path: inset(0 100% 0 0)` |
| `.bar-ghost`, `.bar-blue` | `scaleY(0)`, origin bottom |
| `.bar-cap`, `.stat-label`, `.stat` | opacity `0`, `translate3d(0,8px,0)` |

**`.mesh` is never in this list.**

### Timeline
Start after **two rAF frames**, racing a **250ms** timeout (idempotent).  
Mobile (`max-width: 520px`): multiply all times by **0.9**; rise **8px** instead of **12px**.

Easings:
- reveal: `cubic-bezier(.16,1,.3,1)`
- structure: `cubic-bezier(.22,1,.36,1)`
- support: `cubic-bezier(.2,.8,.2,1)`

| Element | Delay | Duration | Motion | Easing |
|---|---|---|---|---|
| `.rule` | 60 | 650 | scaleX 0→1 | structure |
| headline line 1 | 180 | 720 | opacity .01 + translateY(rise) → 1/0 | reveal |
| headline line 2 | 300 | 760 | same | reveal |
| `.grid` | 430 | 720 | opacity 0 + clip inset(0 100% 0 0) → full | structure |
| `.acc` | 650 | 740 | opacity .01 + clip inset(0 0 100% 0) → full | structure |
| `.bar-ghost` | 720 | 860 | scaleY 0→1 (bottom) | reveal |
| `.bar-blue` | 790 | 900 | scaleY 0→1 | reveal |
| `.bar-cap` | 1050 | 460 | opacity 0 + translateY(6) → 1/0 | support |
| `.stat-label` | 1060 | 480 | same | support |
| `.stat` | 1140 | 620 | opacity 0 + translateY(8) → 1/0 | reveal |

When all `animation.finished` resolve (or hard timeout **2600ms**): cancel every animation, remove `entrance-pending`, leave authored static styles. No idle loops, no repeating motion.

Reduced-motion CSS: force `transition/animation: none`, restore entrance elements to visible/untransformed.

---

## 10. Responsive

**≤1000px:** headline 25/40; spacer 46; label 15.5/20; closed row 58px.

**≤860px:** stack one column, gap 40px; body `align-items: flex-start`; stage padding 56px; headline 30/41 tracking -0.5, wrap OK, accent **inline**; closed row 62px; card aspect **16/11**.

**≤520px:** `--pad-x: 20px`; `min-height: 100svh`; svh clamps for padding/gaps/type/row heights so accordion stays one-screen; accent **block** again; card **4/3**; caption + stat both `right: 33.692%`, label top 5% (11/14), stat top 13% (30/32); desc `white-space: nowrap`.

**≤520px and height ≤620px:** stage padding-top/bottom 18/14; split margin/gap 14; spacer 12.

---

## 11. Absolute constraints

- Single file; Inter + card photo are **data URIs** only (copy exact base64 from the source `index.html`).
- No third bar, axis numbers, legend, or CTA.
- Cap/caption/stat ride `--bar-top` via fixed offsets — do not animate them as independent vertical targets.
- Do not round the listed percentages; they were fitted off a prototype.