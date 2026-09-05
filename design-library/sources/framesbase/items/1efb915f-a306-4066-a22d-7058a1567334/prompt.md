Recreate this EXACT Mobius SaaS landing page — pixel-faithful to the spec below. Single-file or HTML+CSS+JS. Do not invent liquid glass, purple gradients, cards in the hero, rounded pills for CTAs, or Inter as the primary font. This is a flat, hairline-grid, off-white editorial SaaS layout with dual looping hero videos and a typewriter headline.

════════════════════════════════════════
PAGE META
════════════════════════════════════════
- Title: Mobius — The pipeline that runs itself
- Language: en
- Viewport: width=device-width, initial-scale=1
- Body: height 100%, overflow hidden on desktop (scroll only on short/mobile viewports)
- Background: #fdfdfc
- Ink: #0a0a0a
- Antialiased text (-webkit-font-smoothing: antialiased)

════════════════════════════════════════
FONTS (exact Google Fonts load)
════════════════════════════════════════
Preconnect to fonts.googleapis.com and fonts.gstatic.com (crossorigin).
Load exactly:
https://fonts.googleapis.com/css2?family=Geist:wght@400;500;600;700&family=Geist+Mono:wght@500&display=swap

CSS stacks:
- --font-sans / --font-body: "Geist", "Inter", "Helvetica Neue", Helvetica, Arial, sans-serif
- --font-mono: "Geist Mono", "SF Mono", ui-monospace, monospace

Weights used:
- Brand / titles / feature titles: 600
- Nav / CTAs / buttons / badge: 500
- Body / subcopy: 400

════════════════════════════════════════
DESIGN TOKENS (exact)
════════════════════════════════════════
--bg: #fdfdfc
--surface: #ffffff
--ink: #0a0a0a
--ink-muted: #4a4a4a
--text-sub: #6e6e6e
--line: #eaeaea
--blue: #2340ff
--blue-badge: #3a44b8
--gray-block: #d9d9d9   (hero video panel fallback behind videos)

Fluid fit helper:
--fit: calc(0.5vw + 0.5vh)

Type (desktop base):
--title: clamp(2.15rem, calc(1.55rem + 1.6vw + var(--fit)), 3.5rem)
--sub: clamp(0.85rem, calc(0.7rem + var(--fit)), 1.2rem)
--feat-heading: clamp(0.95rem, calc(0.75rem + 0.35vw + var(--fit)), 1.65rem)
--feat-title: clamp(0.8rem, calc(0.65rem + var(--fit)), 1.15rem)
--feat-body: clamp(0.72rem, calc(0.58rem + var(--fit)), 0.95rem)
--nav: clamp(0.75rem, calc(0.62rem + var(--fit)), 1.05rem)
--btn: clamp(0.85rem, calc(0.7rem + var(--fit)), 1.1rem)
--brand: clamp(0.85rem, calc(0.7rem + var(--fit)), 1.15rem)
--badge: clamp(0.55rem, calc(0.45rem + var(--fit)), 0.8rem)

Chrome:
--pad-x: clamp(1.15rem, calc(0.85rem + 1.2vw + var(--fit)), 3.5rem)
--pad-y: clamp(0.85rem, calc(0.55rem + 1.2vh + var(--fit)), 2.5rem)
--header-h: clamp(2.85rem, calc(2.4rem + 0.8vw + var(--fit)), 4rem)
--gutter-h: 50px
--frame-pad-b: 50px
--features-h: clamp(9.5rem, calc(7.25rem + 8vh), 12rem)
--btn-h: clamp(2.65rem, calc(2.2rem + 0.6vw + var(--fit)), 3.5rem)
--btn-pad-x: clamp(1.1rem, calc(0.9rem + 0.5vw + var(--fit)), 1.85rem)
--badge-h: clamp(1.45rem, calc(1.2rem + var(--fit)), 2rem)
--badge-r: clamp(6px, calc(4px + var(--fit)), 10px)  /* defined but badge uses border-radius: 0 */
--dot: clamp(5px, calc(4px + var(--fit)), 8px)
--logo / --icon: clamp(1.05rem, calc(0.9rem + var(--fit)), 1.5rem) / 1.45rem

At min-width 1600px only:
--title: clamp(3.6rem, calc(2.6rem + 2.6vw + 0.8vw + 0.8vh), 8rem)

════════════════════════════════════════
OVERALL STRUCTURE (one composition, 100vh/100dvh)
════════════════════════════════════════
Outer .frame:
- flex column, full viewport height (100vh + 100dvh)
- bg #fdfdfc
- borders: 1px solid #eaeaea on top/left/right; NO bottom border
- padding-bottom: 50px (frame-pad-b)
- overflow hidden

Vertical stack inside frame:
1) HEADER (fixed chrome height)
2) GUTTER strip (50px, hairline top+bottom)
3) HERO (flex:1, fills remaining height)
4) GUTTER--FEATURES strip (50px; continues the vertical column hairline)
5) FEATURES row (fixed features-h)

CRITICAL GRID (header, hero, features on desktop):
grid-template-columns: minmax(0, 4fr) repeat(4, minmax(0, 1fr));
= left 50% content column | right 50% split into 4 equal cells

Hairline system: every cell divided by 1px #eaeaea borders. Sharp corners everywhere (border-radius: 0 on badge + buttons). No cards, no shadows on layout chrome (only soft shadows on badge + button hover).

════════════════════════════════════════
1) HEADER
════════════════════════════════════════
Height: --header-h. Same 5-column grid.

LEFT cell (.header__brand):
- flex, align center, gap ~0.45–0.85rem
- padding 0 --pad-x
- border-right 1px #eaeaea
- Logo SVG 20×20 scaled to --logo:
  • Black circle fill #0A0A0A
  • White Möbius/infinity path (two linked loops) fill #fff
- Wordmark “Mobius”: Geist 600, --brand, letter-spacing -0.025em, line-height 1

RIGHT 4 cells via display:contents menu:
1. “Platform” — link, center, Geist 500, --nav, letter-spacing -0.02em, border-right #eaeaea, hover bg rgba(0,0,0,0.035)
2. “Connectors” — same
3. “Pricing” — same
4. “Book a demo” — CTA: bg #2340ff, color #fff, Geist 500, --nav; hover: brightness 1.08, bg #2f4aff, box-shadow 0 8px 22px rgba(35,64,255,0.28); active softer shadow

Mobile (≤640px): hide full menu behind burger (3 lines → X animate). Full-screen fixed menu with staggered fade/slide links. Lock body scroll when open. Escape + outside click close.

Tablet (≤900px): hide Platform + Connectors; keep Pricing + Book a demo; grid becomes 2fr + 1fr + 1fr.

════════════════════════════════════════
2) GUTTERS
════════════════════════════════════════
.gutter: height 50px, border-top + border-bottom 1px #eaeaea, bg #fdfdfc
.gutter--features: same height, AND a ::before pseudo on column 1 drawing a vertical 1px #eaeaea that continues the hero left/right split through the gutter (margin-top/bottom -1px to bridge hairlines). Hidden on tablet+.

════════════════════════════════════════
3) HERO (two panes)
════════════════════════════════════════
LEFT (.hero__content) — grid-column 1, border-right 1px #eaeaea, padding --pad-y/--pad-x, flex column, justify center, align start:

A) STATUS BADGE (.badge)
- inline-flex, height --badge-h, padding 0 --badge-pad-x
- bg #ffffff, border-radius 0 (sharp), box-shadow 0 2px 8px rgba(0,0,0,0.05)
- Blue pulsing dot (.badge__dot): size --dot, bg #2340ff, border-radius 50%
  Animation badge-pulse 2.2s ease-in-out infinite:
  0/100%: opacity 1, scale 1, box-shadow 0 0 0 0 rgba(35,64,255,0.35)
  50%: opacity 0.7, scale 0.92, box-shadow 0 0 0 6px rgba(35,64,255,0)
- Text: “SYNCING 2.4B ROWS / DAY”
  Geist Mono 500, --badge, letter-spacing 0.06em, color #3a44b8, nowrap

B) H1 — two stacked lines (typewriter)
- aria-label: “The pipeline that runs itself”
- Line 1 data-print="The pipeline" — color #4a4a4a (muted)
- Line 2 data-print="that runs itself" — color #0a0a0a (strong)
- Font: Geist 600, --title, line-height 1.05, letter-spacing -0.035em, max-width 12em
- JS typewriter (unless prefers-reduced-motion):
  startDelay 380ms, charMs 42, linePause 220ms
  While typing: caret ::after (0.06em × 0.85em, currentColor) with caret-blink 0.85s steps(1) infinite
  Start empty; type line1 then line2

C) SUBCOPY
“Mobius moves data from every source to every
destination — real time, exactly once, zero maintenance.”
(hard <br /> after “every”)
Geist 400, --sub, line-height 1.5, color #6e6e6e, letter-spacing -0.012em

D) ACTIONS
- “Start free” — .btn--primary: bg #000, color #fff, border 1px #000, height --btn-h, padding 0 --btn-pad-x, Geist 500, border-radius 0
  hover: bg #111, translateY(-3px), box-shadow 0 12px 28px rgba(0,0,0,0.22)
  easing: cubic-bezier(0.22, 1, 0.36, 1)
- “See how it works” — .btn--ghost: bg #fff, color #000, border 1px #000
  hover: translateY(-3px), box-shadow 0 12px 28px rgba(0,0,0,0.12)
- gap: --gap-btn

RIGHT (.hero__visual) — grid-column 2 / -1, bg #d9d9d9, overflow hidden, position relative, height 100%

DUAL VIDEOS (exact CloudFront URLs — mandatory):

Base (always visible):
https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260807_133235_37fdd7c6-69cb-44f1-9936-4600b59d3ee7.mp4
class: hero__video hero__video--base

Hover crossfade layer (opacity 0 → 1 on .hero__visual:hover / :focus-within, transition opacity 0.4s ease):
https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260807_135732_f8178baa-95d1-4c08-b880-a9f4439e4a63.mp4
class: hero__video hero__video--hover
pointer-events: none on hover layer

Both videos: autoplay muted loop playsinline preload="auto"
CSS: position absolute; inset 0; width/height 100%; object-fit: cover

Visual content: abstract 3D interlocking Möbius / X of glossy black micro-spheres on light gray — cinematic CGI loop. Hover swaps to alternate take of the same motif via opacity crossfade (both keep playing).

════════════════════════════════════════
4) FEATURES ROW
════════════════════════════════════════
Height --features-h. Same 5-column grid.

Col1 .features__intro (padding --pad-x, justify space-between):
H2: “Built for teams that ship data, not tickets.”
  Geist 600, --feat-heading, line-height 1.3, letter-spacing -0.03em, white-space nowrap
P: “Set it once. Mobius handles schema drift, retries, and backfills on its own.”
  Geist 400, --feat-body, color #6e6e6e, max-width 28em

Cols 2–5 — four feature articles, each with 20×20 stroke icons (#0A0A0A, stroke-width 1.4):

1. Lightning bolt icon — “Real-time CDC”
   “Sub-second change capture from Postgres, MySQL, Mongo and more.”
2. 2×2 squares icon — “300+ connectors”
   “Every warehouse, lake, and SaaS tool. Pre-built and maintained.”
3. Check-in-circle icon — “Exactly-once delivery”
   “No dupes, no drops. Guaranteed ordering under failure.”
4. Padlock icon — “SOC 2 Type II”
   “End-to-end encryption with region-pinned data residency.”

Titles: Geist 600, --feat-title
Descs: Geist 400, --feat-body, color #6e6e6e
Each cell: border-right 1px #eaeaea except last; padding --feat-pad-y/--feat-pad-x; overflow hidden

════════════════════════════════════════
PAGE-LOAD ANIMATIONS (exact timings)
════════════════════════════════════════
Easing default: cubic-bezier(0.22, 1, 0.36, 1)
Respect prefers-reduced-motion: disable all animations/transforms/typewriter; show full text immediately.

Desktop delays:
- .header: reveal-fade 0.85s, delay 0.04s
- .gutter: reveal-fade 0.85s, delay 0.1s
- .gutter--features: delay 0.55s
- .hero__visual: reveal-visual 1.15s (from opacity 0, scale 1.02 translateY(8px)), delay 0.2s
- .badge: badge-in 0.8s, delay 0.12s
- .hero__sub: reveal-rise 0.9s, delay 1.85s (after typewriter)
- .hero__actions: reveal-up 0.85s, delay 2.05s
- .btn--primary: btn-pop 0.7s, delay 2.1s
- .btn--ghost: btn-pop 0.7s, delay 2.22s
- .features__intro: reveal-rise 0.95s, delay 0.5s
- .feature n=2..5: reveal-feature 0.9s, delays 0.58 / 0.68 / 0.78 / 0.88s
- .feature__icon: badge-in 0.75s, delays 0.66 / 0.76 / 0.86 / 0.96s

Keyframes:
reveal-up: opacity 0→1, translateY(14px→0)
reveal-rise: opacity 0→1, translateY(18px→0)
reveal-fade: opacity 0→1
reveal-visual: opacity 0→1, scale(1.02) translateY(8px) → scale(1) translateY(0)
reveal-feature: opacity 0→1, translateY(14px→0)
badge-in: opacity 0→1, translateY(10px→0)
btn-pop: opacity 0→1
caret-blink: opacity 1 for 0–45%, 0 for 50–100%
badge-pulse: as above

════════════════════════════════════════
RESPONSIVE (must match)
════════════════════════════════════════
max-height 920 / 780 / 640: compress gutters, title, features-h; at 640 allow page scroll
max-width 900: tablet grid; features 2×2; intro full-width row
max-width 640: stacked hero (copy then video 16/10); no gutters; burger menu; features 1-col; frame padding-bottom 50px
max-width 380: video 4/3; buttons stack full width

════════════════════════════════════════
WHAT NOT TO ADD
════════════════════════════════════════
- No liquid glass / frosted blur / backdrop-filter on chrome
- No purple/indigo gradient theme
- No Inter as primary display font (Geist only)
- No inset rounded media cards; video is edge-to-edge in its grid pane
- No floating badges/stickers over the video
- No stats strips beyond the single syncing badge
- No hero overlays on the video

════════════════════════════════════════
ACCEPTANCE CHECK
════════════════════════════════════════
Opening the page shows a full-viewport hairline-grid Mobius marketing page: black circle∞ logo + Mobius; Platform|Connectors|Pricing|blue Book a demo; badge SYNCING 2.4B ROWS / DAY with pulsing blue dot; typewriter “The pipeline / that runs itself”; two CTAs; right pane dual CloudFront MP4s with hover crossfade; bottom features row with four stroke icons; Geist + Geist Mono; exact colors #fdfdfc / #0a0a0a / #2340ff / #eaeaea / #d9d9d9.
```