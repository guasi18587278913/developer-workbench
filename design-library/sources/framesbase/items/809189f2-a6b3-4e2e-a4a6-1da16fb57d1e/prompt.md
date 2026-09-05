Build a complete single-page website called **Apogee** — a full-viewport hero for a fictional predictive-AI infrastructure company. It consists of a looping background video, a glass navigation bar, a centered serif headline with CTA, and a photorealistic macOS-browser-window analytics dashboard bleeding off the bottom edge of the screen.

Everything is exactly one viewport tall. There is no scrolling and no second section.

Follow every number, color, delay, and spacing value **exactly**. Do not round, substitute, or "improve" anything.

# 1. Stack and setup

Use **Vite + React 18 + TypeScript + Tailwind CSS 3.4**, with `lucide-react` for all icons.

Configure:
- A path alias `@` → `./src`, in both `vite.config.ts` (via `fileURLToPath`) and `tsconfig.app.json` (`baseUrl: "."`, `paths: { "@/*": ["src/*"] }`)
- `optimizeDeps.exclude: ['lucide-react']` in the Vite config
- PostCSS with the `tailwindcss` and `autoprefixer` plugins
- Tailwind `content` covering `./index.html` and `./src/**/*.{js,ts,jsx,tsx}`

Build just two components — `Hero.tsx` and `Dashboard.tsx` — both under `src/components/`. `App.tsx` renders `<Hero />` and nothing else. `Dashboard` is imported by `Hero`, not by `App`.

# 2. Fonts

Two typefaces. Load both in `<head>`:

```html
<link href="https://fonts.googleapis.com/css2?family=STIX+Two+Text:ital,wght@0,400;1,400&display=swap" rel="stylesheet">
<link href="https://db.onlinewebfonts.com/c/13ab13418f633c1b0516fed6e30bedbc?family=Suisse+Int%27l" rel="stylesheet">
```

Register them in the Tailwind theme as `font-stix` and `font-suisse`:

```js
fontFamily: {
  stix: ['"STIX Two Text"', 'serif'],
  suisse: ['"Suisse Intl"', '"Suisse Int\'l"', 'sans-serif'],
}
```

**Where each is used:**
- **STIX Two Text (serif)** — only three places: the "Apogee" logo wordmark, the H1 headline, and the mobile menu links. Nothing else.
- **Suisse Int'l (sans)** — everything else: all buttons, all labels, and every element inside the dashboard. Also set as the `body` font-family, with `-webkit-font-smoothing: antialiased` and `-moz-osx-font-smoothing: grayscale`.

Page `<title>` is `Apogee`.

# 3. External assets

Use these two URLs verbatim.

**Background video (CloudFront):**
```
https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260813_085826_d5bb3e73-0448-4266-970b-75623818addd.mp4
```

**Dashboard user avatar (Unsplash):**
```
https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=64&h=64&fit=crop&crop=face
```

# 4. Color palette

Register these seven in the Tailwind theme:

```js
colors: {
  cream: '#FFF4E7',
  tan: '#DABFA0',
  dark: '#0A0707',
  'dark-blue': '#0A1B2D',
  'panel-dark': 'rgba(17, 16, 15, 0.35)',
  'title-bar': '#191C1F',
  'dot-inactive': '#3E332F',
}
```

`cream` is the primary text and button color throughout. `tan` is the dashboard's secondary/muted text color. `dark` is the page background behind the video.

Use these additional values as inline literals (they are **not** theme tokens):

| Value | Used for |
|---|---|
| `rgba(17,16,15,0.35)` | Glass panel + all five card backgrounds |
| `#191C1F` at 19% opacity | Full-screen tint over the video |
| `#EED3B3` | Warm glow slab behind the dashboard |
| `#0C0F12` | Browser URL pill background |
| `#A6FB89` | Avatar online-status dot |
| `#EE6A5F` fill / `#EC6D62` inner shadow / `#CE5347` border | Red traffic light |
| `#F5BD4F` fill / `#F5C451` inner shadow / `#D6A243` border | Amber traffic light |
| `#61C454` fill / `#68CC58` inner shadow / `#58A942` border | Green traffic light |

# 5. Global CSS

Reset **all** margin and padding to zero globally with `* { margin: 0; padding: 0; box-sizing: border-box; }`. Every space in this design is explicit — never rely on browser defaults for headings or paragraphs.

Set `overflow-x: hidden` on both `html` and `body`. This is **mandatory**: two dashboard layers deliberately overflow their container and will otherwise cause horizontal scroll.

Define these seven keyframes and their utility classes verbatim:

```css
@keyframes fade-up    { from { opacity: 0; transform: translateY(24px); } to { opacity: 1; transform: none; } }
@keyframes fade-in    { from { opacity: 0; } to { opacity: 1; } }
@keyframes grow-up    { from { transform: scaleY(0); } to { transform: scaleY(1); } }
@keyframes count-in   { from { opacity: 0; transform: translateY(6px); } to { opacity: 1; transform: translateY(0); } }
@keyframes dot-pop    { from { opacity: 0; transform: scale(0); } to { opacity: 1; transform: scale(1); } }
@keyframes scale-up   { from { opacity: 0; transform: scale(0.94) translateY(16px); } to { opacity: 1; transform: none; } }
@keyframes slide-down { from { opacity: 0; transform: translateY(-12px); } to { opacity: 1; transform: none; } }
```

| Class | Duration | Easing | Fill |
|---|---|---|---|
| `.animate-fade-up` | 0.9s | `cubic-bezier(0.16, 1, 0.3, 1)` | `both` |
| `.animate-fade-in` | 0.8s | `cubic-bezier(0.16, 1, 0.3, 1)` | `forwards`, plus `opacity: 0` |
| `.animate-grow-up` | 0.7s | `cubic-bezier(0.16, 1, 0.3, 1)` | `forwards`, plus `transform-origin: bottom` |
| `.animate-count-in` | 0.6s | `cubic-bezier(0.16, 1, 0.3, 1)` | `forwards`, plus `opacity: 0` |
| `.animate-dot-pop` | 0.4s | `cubic-bezier(0.34, 1.56, 0.64, 1)` | `forwards`, plus `opacity: 0` |
| `.animate-scale-up` | 1s | `cubic-bezier(0.16, 1, 0.3, 1)` | `both` |
| `.animate-slide-down` | 0.8s | `cubic-bezier(0.16, 1, 0.3, 1)` | `both` |

Note that `dot-pop` is the only one using the **overshoot** curve (`1.56`) — it gives the dots a slight pop past full size. Every other animation uses the same smooth decelerating curve.

# 6. Page architecture

The root is a `relative w-full h-screen overflow-hidden` section with a `dark` background, holding three stacked layers:

1. **Video layer** — absolutely inset-0, `w-full h-full object-cover`, carrying `animate-fade-in`. Attributes: `autoPlay`, `loop`, `muted`, `playsInline`. `muted` is required or mobile browsers block autoplay.
2. **Tint layer** — absolutely inset-0, filled with `#191C1F` at 19% opacity. A subtle cool wash that darkens the video for text contrast.
3. **Content layer** — `relative z-10 flex flex-col h-full`, containing the nav, the menu overlay, the hero copy, and the dashboard.

# 7. Navigation bar

A flex row, vertically centered, `justify-between`, with responsive horizontal padding of **20 → 32 → 48 → 100px** (base → sm → md → lg) and top padding of **24 → 28 → 35px** (base → md → lg). No bottom padding.

## Left: logo

A flex row with a **10px** gap between icon and wordmark. Animates with `slide-down` at **100ms**.

The icon is an inline SVG, 28×28 growing to 32×32 at `sm`, `viewBox="0 0 256 256"`, `fill="none"`, containing one white-filled path. Use this path data exactly:

```
M 128 128 C 198.692 128 256 185.308 256 256 L 151.883 256 C 149.812 220.307 120.213 192 84 192 C 47.787 192 18.188 220.307 16.117 256 L 0 256 C 0 185.308 57.308 128 128 128 Z M 104.117 0 C 106.188 35.694 135.787 64 172 64 C 208.213 64 237.812 35.694 239.883 0 L 256 0 C 256 70.692 198.692 128 128 128 C 57.308 128 0 70.692 0 0 Z
```

Beside it, the wordmark **"Apogee"** in cream, STIX, `leading-[28.5px]`, sized **22 → 26 → 30px** (base → sm → md).

## Center: glass pill (desktop only, hidden below `md`)

A capsule with `bg-black/35`, `rounded-[13px]`, `backdrop-blur-[26.5px]`, **3px** padding on all sides, and a **5px** gap between its two children. Animates with `slide-down` at **250ms**.

That 3px inset is what creates the "button floating inside a capsule" look — do not increase it.

Both child buttons are **38px** tall growing to **46px** at `lg`, with **16 → 24px** horizontal padding and `rounded-[11px]`:

- **"Menu"** — transparent, `hover:bg-white/5`. Contains a lucide `Menu` icon at `size={16}` with `strokeWidth={1.1}`, then a **9px** gap, then the label in cream, `text-sm`, medium weight. Clicking it opens the menu overlay.
- **"Book a demo"** — solid `cream` background, dark text, `hover:opacity-90`.

## Right: outline button (desktop only, hidden below `md`)

**"Find out more"** — same height and padding as the pill buttons, `rounded-[11px]`, a 1px cream border, transparent fill, `hover:bg-cream/5`. Animates with `slide-down` at **400ms**.

## Mobile: hamburger toggle (hidden at `md` and above)

A **40×40** cream-colored tap target, flex-centered, `z-50`, animating with `slide-down` at **250ms**. Its `aria-label` toggles between `"Open menu"` and `"Close menu"`.

Inside it, place **two absolutely-stacked spans** that cross-fade and counter-rotate over `300ms ease-out`:
- A `Menu` icon at `size={24}` — visible when closed; when open it goes `opacity-0 rotate-90 scale-75`
- An `X` icon at `size={24}` — hidden when closed at `opacity-0 -rotate-90 scale-75`; when open it becomes `opacity-100 rotate-0 scale-100`

The opposite rotation directions are what make the two icons appear to twist through each other.

# 8. Mobile menu overlay

A `fixed inset-0 z-40` wrapper toggling between `visible` and `invisible` over `500ms ease-out`.

**Backdrop:** absolutely inset-0, `bg-dark/95` with `backdrop-blur-xl`, cross-fading on opacity over `500ms`.

**Close button:** absolutely positioned at **24px top / 20px right**, moving to **32px right** at `sm` and **35px top / 100px right** at `md` — deliberately matching the nav's own padding so the X lands exactly where the hamburger was. It's a 40×40 flex-centered target holding an `X` at `size={26}`, animating `opacity-0 rotate-90 scale-75` → `opacity-100 rotate-0 scale-100` with a `100ms` transition delay when opening.

**Content:** a full-height flex column, centered both ways, with **32px** side padding.

**Links:** `Home`, `About`, `Services`, `Contact` — in STIX, cream, sized `text-3xl → sm:text-4xl → md:text-5xl`, stacked with a **4px** gap. Each link carries its own **12px** vertical padding (**16px** at `md`) and no horizontal padding, so the whole row stays tappable. Combined with the container gap this yields a **28 → 36px** rhythm between links.

They animate from `opacity-0 translate-y-6` to `opacity-100 translate-y-0` over `500ms`, **staggered by index**: `transitionDelay = 150 + i * 75` ms. Clicking any link closes the menu.

**CTA stack:** **40px** below the links, a full-width column capped at **280px**, with a **12px** gap. Both buttons are **52px** tall with `rounded-xl` — "Book a demo" solid cream with dark text, "Find out more" outlined in cream. Same transform transition, delayed `450ms`.

**On close, every `transitionDelay` resets to `0ms`** so the whole menu collapses at once rather than un-staggering.

**Scroll lock:** while the menu is open, set `document.body.style.overflow = 'hidden'`; restore it to `''` on close, and also restore on unmount via the effect's cleanup.

# 9. Hero copy

A centered flex column with **20px** side padding (**32px** at `sm`), pushed down from the nav by a single margin: `mt-[clamp(40px, 8vh, 120px)]`. This is viewport-height-driven, so short screens tighten automatically.

Inside, a column capped at **820px** wide with a **20px** gap (**23px** at `md`). The three children are separated **only** by this gap — none of them carries its own margin.

**H1** — cream, centered, STIX, normal weight. Size `clamp(28px, 7vw, 62px)`, becoming `clamp(32px, 4.4vw, 62px)` at `md`. Line-height `1`, tightening to `0.95` at `md`. Letter-spacing `-0.01em`. Animates with `fade-up` at **300ms**. Text:

> Ascend beyond limits with intelligent predictive infrastructure

**Sub-headline** — `cream/80`, centered, Suisse, medium weight, capped at **423px** wide (roughly half the H1 width — this is what forces the two-line break). Size `clamp(14px, 3.5vw, 18px)`, becoming `clamp(14px, 1.4vw, 20px)` at `md`. Line-height `1.3` → `1.2` at `md`. Animates with `fade-up` at **500ms**. Text:

> Advanced reasoning systems and predictive models built for the unknown

**CTA button** — solid cream, `rounded-xl`, **180×52px** growing to **192×60px** at `sm`, with **20px** horizontal padding (**22px** at `sm`). Its label and arrow are pushed apart by `justify-between`, not a gap. Label **"Discover the Core"** in `dark-blue`, `text-sm`, medium, `leading-[22px]`; then a lucide `ArrowRight` at `size={16}`, also `dark-blue`, which nudges **2px** right on group hover. Whole button animates with `fade-up` at **700ms** and dims to `opacity-90` on hover.

# 10. Dashboard mount — the responsive rig

This is the key layout mechanism. Wrap `<Dashboard />` in a container that is:

- Absolutely pinned to `bottom-0`, horizontally centered via `left-1/2 -translate-x-1/2`
- **700px wide** at base and `sm`; at `md` and up, `58%` wide with `min-w-[700px]`
- Scaled with `origin-bottom` at **0.52 → 0.7 → 0.78 → 1.0** across base → sm → md → lg
- Translated vertically by **0 → 0 → 32% → 28%** across the same breakpoints

The dashboard is authored at a fixed 700px and **scaled down**, never reflowed — this is what keeps its percentage-based internal layout intact at every size. `origin-bottom` means it shrinks toward the edge it's pinned to. On mobile it sits flush at the bottom; from `md` up it's pushed *below* the fold so only its top portion is visible.

Effective rendered widths: **364px** mobile · **490px** sm · **546px** md · **700px+** lg.

# 11. Dashboard structure

A `relative overflow-hidden` container locked to an **`aspect-[795/478]`** ratio, with no padding. Every child is absolutely positioned.

Two backdrop layers sit behind everything:

1. **Warm glow slab** — an oversized `#EED3B3` rectangle with a `border-black/5`, positioned at `left: -14%`, `top: 58%`, sized `127%` wide × `133%` tall. It bleeds well outside the container and is mostly clipped; its job is to light the lower half of the panel through the glass.
2. **Glass panel** — inset-0, `100%` wide but **`116%` tall** (deliberately taller than the frame so the blur still covers the bottom card row), filled with `rgba(17,16,15,0.35)`, `rounded-md`, and `backdrop-blur-[145px]`.

## How the percentages resolve — critical

The dashboard is authored at **700px wide**, so its height is `700 × (478/795)` = **420.88px**. Get these rules wrong and every element lands in the wrong place:

- **`left`, `right`, `width`** resolve against the **width** (700px)
- **`top`, `height`** resolve against the **height** (420.88px)
- **`padding`, on all four sides including top and bottom, resolves against WIDTH** — never height. This is standard CSS, and it's why the cards' `p-[2.4%]` produces a *uniform* 16.8px on all four sides rather than squashed vertical padding.
- Anything nested inside the title bar resolves against the **title bar's** box (700 × 29.46px), not the root.

All px values below are given at this 700px base.

# 12. Browser title bar

Absolutely pinned to the top, full width, **7%** tall (29.46px), filled with the `title-bar` color, `rounded-t-md`, contents vertically centered. Animates with `fade-in` at **1000ms**.

Left to right:

| Element | Position | Detail |
|---|---|---|
| Traffic lights | `ml-[1.6%]` (11.2px), **5px** apart | Three 8×8 circles. Each has a fill, an `inset 0 0 3.7px` shadow, and a `0.3px` border — see the palette table for the nine hex values. |
| Window icons | `ml-[2.5%]` (17.5px) from the lights, **8px** apart | lucide `PanelLeft`, `ChevronLeft` (both `cream/60`), `ChevronRight` (`cream/40`) — all `size={12}`, `strokeWidth={1.5}` |
| Site ring | `left-[26%]` (182px), vertically centered | A bare 10×10 circle with a `cream/40` border |
| URL pill | `left-[30%]` (210px), `top-[18%]`, `w-[34%]` (238px), `h-[64%]` (18.85px) | `#0C0F12` background, `rounded-md`, contents flex-centered with a **4px** gap and no padding: a `Lock` icon at `size={8}` `strokeWidth={2}` in `cream/60`, then `apogee.ai` in cream at **8px**, normal weight |
| Refresh | `left-[65%]` (455px), vertically centered | `RotateCw` at `size={10}`, `cream/50`, `strokeWidth={1.5}` |
| Right icons | `right-[1.6%]` (11.2px), **10px** apart | `Info`, `Share`, `Plus`, `Copy` — all `size={11}`, `cream/50`, `strokeWidth={1.5}` |

# 13. Dashboard chrome

**Sub-navigation** — at `top-[8.6%] left-[2.4%]`, a flex row with a **20px** gap. Animates with `fade-in` at **1100ms**. Five tabs, each a bare icon+label pair with a **4px** gap and no padding: icons at `size={11}`, labels at **9px** Suisse medium. The active tab is `cream`; the rest are `tan/50`.

Order and icons: **Dashboard** (`LayoutDashboard`, active) · **Data** (`Database`) · **Network** (`Globe`) · **Analytics** (`BarChart3`) · **Setting** (`Settings`).

**Divider** — two 1px rules, both at `top-[14.2%]`, both flush to the container edges, both fading in at **1100ms**: a full-width track in `cream/20`, and on top of it an active segment from the left edge spanning `11.3%` (79.1px) in solid `cream` — sitting under the "Dashboard" tab.

**Avatar cluster** — at `top-[8.2%] right-[3%]`, a flex row with an **8px** gap, fading in at **1150ms**. An 18×18 `rounded-full object-cover` image (Unsplash URL above), with a **4×4** `#A6FB89` status dot offset **−2px** on both axes so it straddles the avatar's edge, bordered in `rgba(17,16,15,0.5)`. Beside it, **"Jane D."** in cream at 9px medium.

**Page tabs** — at `top-[18%] left-[2.4%]`, a flex row aligned on the **baseline** (not center) with a **32px** gap, fading in at **1200ms**. Three labels at `clamp(16px, 4.4vw, 35px)`, Suisse medium, `leading-none`: **Global** in `cream`, then **Cluster** and **Insights** in `cream/40`.

# 14. Card grid

Five cards. All share: `rgba(17,16,15,0.35)` background, `rounded-[20px]`, and `p-[2.4%]` — which resolves to a **uniform 16.8px** on all four sides.

| Card | top | left | width | height | Animation delay |
|---|---|---|---|---|---|
| Revenue Growth | `28%` (117.85) | `2.2%` (15.40) | `31.3%` (219.10) | `45.6%` (191.92) | 1300ms |
| Lead Perfomance | `28%` | `34.4%` (240.80) | `31.3%` | `45.6%` | 1450ms |
| Sales Trend | `28%` | `66.6%` (466.20) | `31.3%` | `45.6%` | 1600ms |
| Real-time inference log | `80%` (336.70) | `2.3%` (16.10) | `47.3%` (331.10) | `45.6%` | 1750ms |
| Predictive Trajectory | `80%` | `50.6%` (354.20) | `47.3%` | `45.6%` | 1900ms |

The three row-1 cards are also `flex flex-col`. All five fade in.

**Derived gutters** — don't hardcode these, but use them to verify the output:

- Between row-1 cards: **0.9%** ≈ 6.3px (twice)
- Right margin after card 3: **2.1%** ≈ 14.7px
- Between the two wide cards: **1.0%** = 7px
- Vertical gap between rows: **6.4%** ≈ 26.9px
- **Row 2 overflows the frame bottom by 25.6%** (≈108px) and is clipped — this is intentional and is what makes the panel read as a window continuing past the screen edge

Content box inside each card after padding: row-1 cards **185.50 × 158.32px**, row-2 cards **297.50 × 158.32px**.

Every card title is **12px** cream Suisse medium with `leading-[12px]`, no margin (it sits flush against the card's top padding), and its own `fade-in` **200ms after its card**.

# 15. Card contents

## Revenue Growth

Title **"Revenue Growth"** (fade-in 1500ms).

**Figure**, `mt-[14px]`, `count-in` at 1650ms — two inline spans butted directly together with no gap: `$14,205,890` in cream at `clamp(14px, 3vw, 24px)` medium `leading-[1]`, immediately followed by `.00` in `white/70` at a **fixed 28px** `leading-[28px]`. The decimals are deliberately *larger* than the number.

**Delta row**, `mt-[10px]`, **6px** gap, fade-in 1800ms — a `+32.4%` pill with **4px** padding all round, `bg-tan/[0.14]`, `rounded`, cream 9px medium; then `vs. previous period ($10.7M)` in `tan/70` at 9px.

**Bar chart**, pushed to the card bottom with `mt-auto flex-1`, items end-aligned. Behind the bars, an absolutely-inset underlay with **4px** side padding holding five `w-px` full-height rules in `cream/10`, spaced `justify-between`.

The bars themselves fill the width at **75%** height with a **2.5px** gap. Each bar is `flex-1 min-w-[1px] max-w-[2px]` — hairline-thin, so the gap dominates visually — in solid cream, animating `grow-up` at `1900 + i * 20` ms. Heights are `(value / 60) * 100%`. Use this 32-value dataset:

```js
const BAR_DATA = [
  14, 25, 33, 25, 20, 9, 4, 11, 46, 40, 54, 46, 40, 29, 20, 54,
  3, 4, 5, 9, 58, 40, 49, 23, 4, 25, 11, 12, 38, 29, 56, 44,
];
```

**Time axis**, `mt-1.5` (6px), `justify-between`, fade-in 2400ms — `10:00`, `12:00`, `14:00` in `tan` at **6px**; `16:00` and `18:00` in `tan/40`.

## Lead Perfomance

Title **"Lead Perfomance"** (fade-in 1650ms) — **keep this typo**, the `r` is missing in the original.

**Stats**, `mt-[14px]`, **32px** gap, two columns each with a **4px** label/value gap, `count-in` at 1750ms and 1850ms. Labels in `tan/50` at 9px, values in cream at 9px medium:
- Total Generated → **84,592**
- AI-Qualified (AQI) → **94.2%**

**Dot matrix**, `mt-[20px]` — a 7×12 grid of 6×6 circles. Rows are **9px** apart; dots within a row are **12px** apart. The gaps are deliberately **asymmetric** (wider horizontally), which gives the grid its stretched look. Filled dots are `cream`; empty ones are `dot-inactive`.

Each dot animates `dot-pop` at `1900 + row * 80 + col * 30` ms, producing a diagonal ripple across the grid. Use this exact pattern:

```js
const DOT_GRID = [
  [0,1,0,1,1,0,1,0,1,0,1,0],
  [1,1,0,1,1,1,1,1,1,0,1,1],
  [1,1,1,0,0,1,1,0,0,1,1,0],
  [0,1,0,1,1,0,1,1,0,1,1,0],
  [0,0,1,1,1,0,0,1,0,0,1,1],
  [1,1,0,1,0,0,1,1,0,1,1,0],
  [0,1,0,0,0,1,1,0,1,0,0,1],
];
```

Matrix footprint: **204 × 96px**.

## Sales Trend

Title **"Sales Trend"** (fade-in 1800ms).

**Stats**, `mt-[14px]`, **32px** gap, **4px** internal gaps, `count-in` at 1900ms and 2000ms — Active Pipeline → **$4.8M**, Win Rate Prediction → **85%**. Same label/value styling as the previous card.

**Progress rail**, `mt-[16px]`, 1px tall, fade-in 2100ms — a full-width track in `cream/10`, overlaid with two lit cream segments: one from `23%` spanning `23%`, another from `50%` spanning `44%`. That leaves a **4%** dark break between them and **6%** unlit at the right end.

**Column chart**, pushed to the card bottom with `mt-auto`, **48%** tall (≈76px), **5px** gaps, six flex-1 columns animating `grow-up` at `2100 + i * 60` ms. Heights and states:

```js
const SALES_BARS = [
  { h: 27, active: false },
  { h: 55, active: false },
  { h: 67, active: false },
  { h: 40, active: false },
  { h: 80, active: true },
  { h: 27, active: false },
];
```

The single active column (the 5th, at 80%) is filled solid `cream`. Every inactive column is filled `tan/10` **and additionally gets a 2px cream cap** absolutely positioned across its top edge — so the inactive columns read as outlined ghosts with a bright top rule.

## Real-time inference log

Title **"Real-time inference log"** (fade-in 1950ms).

Three rows, `mt-[16px]`, **6px** apart, each fading in individually at **2100 / 2250 / 2400ms**.

Each row is `flex items-center justify-between`. On the left, a **7px**-gapped pair: a `[TAG]` chip with **asymmetric 3.5px horizontal / 4.5px vertical** padding, `bg-tan/[0.07]`, `tan/50` text at 9px, and **no border radius**; then the message in `tan` at 9px. An optional status pushes to the right edge via `justify-between`.

| Tag | Message | Status |
|---|---|---|
| `SYS` | Initiating deep-scan protocol | `DONE` |
| `AI` | Model 'Apogee-V4' loaded. Latency: 0.08ms | — |
| `NET` | Re-routing traffic to Global Node Alpha | — |

## Predictive Trajectory

Title **"Predictive Trajectory"** (fade-in 2100ms).

**Stats**, `mt-[16px]`, **30px** gap, three columns with **5px** label/value gaps, `count-in` at 2200 / 2350 / 2500ms. Labels in `tan/50` at 9px; values in cream at **12px** medium — note these are larger than the 9px values used in the row-1 cards.

- Escaping Velocity → **99.98%**
- Target ARR → **$50,000,000**
- Confidence Score → **99.98%**

# 16. Spacing reference

## Tailwind token → px

| Token | px | Token | px |
|---|---|---|---|
| `gap-1` / `mt-1` | 4 | `px-5` / `right-5` | 20 |
| `gap-1.5` / `mt-1.5` | 6 | `px-6` | 24 |
| `gap-2` | 8 | `top-6` / `pt-6` | 24 |
| `gap-2.5` | 10 | `px-8` / `gap-8` / `right-8` | 32 |
| `gap-3` / `py-3` | 12 | `mt-10` | 40 |
| `px-1` / `py-1` | 4 | `px-12` | 48 |
| `px-4` / `py-4` | 16 | `w-10` / `h-10` | 40 |
| `gap-5` | 20 | `-top-0.5` / `-right-0.5` | −2 |

## Hero spacing at a glance

| Element | Padding | Margin | Gap |
|---|---|---|---|
| Nav | 20/32/48/100 horizontal; 24/28/35 top | — | `justify-between` |
| Logo group | — | — | 10 |
| Nav pill | 3 all sides | — | 5 |
| Pill buttons | 16 → 24 horizontal | — | 9 (icon↔label) |
| Mobile hamburger | — | — | — (40×40) |
| Menu close button | — | 24 top / 20→32→100 right, 35 top at md | — |
| Menu wrapper | 32 horizontal | — | — |
| Menu links | 12 → 16 vertical only | — | 4 (container) |
| Menu CTA stack | — | 40 top | 12 |
| Hero copy wrapper | 20 → 32 horizontal | `clamp(40px, 8vh, 120px)` top | — |
| Hero copy inner | — | — | 20 → 23 |
| CTA button | 20 → 22 horizontal | — | `justify-between` |

**Hero vertical rhythm, top to bottom:** nav top padding → nav (38–46px tall) → `clamp(40px, 8vh, 120px)` → H1 → gap → sub-headline → gap → CTA.

## Card internal spacing

| Card | Below title | Stat gap | Label↔value | Chart |
|---|---|---|---|---|
| Revenue Growth | `mt-[14px]` | — | — | `mt-auto`, bars 2.5 gap, axis `mt-1.5` |
| Lead Perfomance | `mt-[14px]` | 32 | 4 | matrix `mt-[20px]`, 12 h / 9 v |
| Sales Trend | `mt-[14px]` | 32 | 4 | rail `mt-[16px]`, columns `mt-auto`, 5 gap |
| Inference log | `mt-[16px]` | — | — | rows 6 apart, chip↔msg 7 |
| Predictive Trajectory | `mt-[16px]` | 30 | 5 | — |

Row-1 and row-2 cards use **different** internal spacing (14/32 vs 16/30). That inconsistency is in the original — do not normalize it.

## Breakpoint matrix

| Property | base (<640) | `sm` (≥640) | `md` (≥768) | `lg` (≥1024) |
|---|---|---|---|---|
| Nav horizontal padding | 20 | 32 | 48 | 100 |
| Nav top padding | 24 | 24 | 28 | 35 |
| Hero copy horizontal padding | 20 | 32 | 32 | 32 |
| Hero children gap | 20 | 20 | 23 | 23 |
| Nav button height | — | — | 38 | 46 |
| Nav button horizontal padding | — | — | 16 | 24 |
| Logo icon / wordmark | 28 / 22 | 32 / 26 | 32 / 30 | 32 / 30 |
| CTA width × height | 180 × 52 | 192 × 60 | 192 × 60 | 192 × 60 |
| CTA horizontal padding | 20 | 22 | 22 | 22 |
| Menu link vertical padding | 12 | 12 | 16 | 16 |
| Dashboard scale | 0.52 | 0.7 | 0.78 | 1.0 |
| Dashboard translate-Y | 0 | 0 | 32% | 28% |
| Dashboard width | 700px | 700px | 58% (min 700) | 58% (min 700) |

**The dashboard's internal spacing never changes across breakpoints.** Only the outer `scale()` varies. Do not put a single responsive modifier inside `Dashboard.tsx`.

# 17. Animation timeline

One uninterrupted cascade from 100ms to ~2500ms. No scroll triggers, no IntersectionObserver — every animation is a plain CSS `animationDelay` firing on mount.

| Time | Element | Animation |
|---|---|---|
| 0ms | Background video | `fade-in` |
| 100ms | Logo | `slide-down` |
| 250ms | Nav pill / mobile hamburger | `slide-down` |
| 300ms | H1 | `fade-up` |
| 400ms | "Find out more" button | `slide-down` |
| 500ms | Sub-headline | `fade-up` |
| 700ms | CTA button | `fade-up` |
| 1000ms | Browser title bar | `fade-in` |
| 1100ms | Sub-nav + both dividers | `fade-in` |
| 1150ms | Avatar cluster | `fade-in` |
| 1200ms | Page tabs | `fade-in` |
| 1300 / 1450 / 1600 / 1750 / 1900ms | The five cards | `fade-in` |
| +200ms after each card | Card titles | `fade-in` |
| 1650–2500ms | Stat values | `count-in` |
| 1900 + i×20ms | 32 revenue bars | `grow-up` |
| 1900 + row×80 + col×30ms | 84 matrix dots | `dot-pop` |
| 2100 + i×60ms | 6 sales columns | `grow-up` |
| 2100 / 2250 / 2400ms | Log rows | `fade-in` |
| 2400ms | Revenue time axis | `fade-in` |

The menu overlay is the one exception: it uses **`transitionDelay`**, not `animationDelay`, because it must reverse cleanly on close.

# 18. Quirks to reproduce, not fix

1. The second card title reads **"Lead Perfomance"** — the `r` is missing. Keep it.
2. The `.00` in the revenue figure is a fixed 28px while the dollar amount beside it is clamped to a max of 24px, so the decimals render **larger** than the number.
3. The revenue bar dataset has exactly 32 entries, but the original applies a dimming class when the index is `>= 32` — a condition that never fires. Harmless; keep or drop it.
4. A `scale-up` keyframe and `.animate-scale-up` class are defined but never used. Keep them defined.
5. Row-1 and row-2 cards use inconsistent internal spacing. Intentional.

# 19. Verification checklist

**Assets & effects**
- [ ] Video has `autoPlay loop muted playsInline` — `muted` is required or autoplay is blocked
- [ ] Tint is `#191C1F` at 19% opacity
- [ ] Glass panel blur is `145px`; nav pill blur is `26.5px`; menu backdrop is `blur-xl`
- [ ] STIX appears only on the logo, H1, and menu links; Suisse everywhere else

**Spacing**
- [ ] Global reset zeroes all margin and padding
- [ ] Nav padding steps 20 → 32 → 48 → 100px; top 24 → 28 → 35px
- [ ] Nav pill has 3px inset padding and a 5px internal gap
- [ ] Hero copy top margin is `clamp(40px, 8vh, 120px)`, not a fixed value
- [ ] Hero children are separated by flex gap only — no per-child margins
- [ ] H1 capped at 820px, sub-headline at 423px
- [ ] Card padding resolves to a uniform 16.8px on all four sides
- [ ] Row-1 gutters land at 0.9%; wide-card gutter at 1.0%; row gap 6.4%
- [ ] Bottom card row overflows the frame by 25.6% and is clipped
- [ ] Dot matrix gaps are 12px horizontal, 9px vertical
- [ ] `[TAG]` chip padding is 3.5 / 4.5px with no border radius

**Layout & behavior**
- [ ] Dashboard aspect ratio is `795/478`; glass panel is 116% tall; glow slab is 127% × 133% at `top-58% left--14%`
- [ ] Dashboard is scaled, never reflowed — zero responsive classes inside `Dashboard.tsx`
- [ ] Mobile hamburger uses two stacked spans that cross-fade and counter-rotate
- [ ] Body scroll locks when the menu opens, and restores on close **and** on unmount
- [ ] Menu transition delays reset to 0ms on close
- [ ] Inactive sales columns keep their 2px cream top cap
- [ ] `dot-pop` is the only animation using the 1.56 overshoot easing

**Runs clean**
- [ ] `npm run dev` serves with no console errors
- [ ] Nothing scrolls horizontally at any width
- [ ] Type-check and lint both pass