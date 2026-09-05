Recreate ONE standalone HTML section that is a pixel-accurate clone of the “Code Quality — Features” landing grid. Output a single self-contained index.html with all CSS in a <style> block and all JS inline. Do not add extra sections, nav, footer, hero, or a video. There is NO video on this page.

GOAL
A full-viewport beige editorial features grid: diagonal hatch bands top and bottom, a hairline-black framed strip, four company logos in a row, then a 2×2 feature card grid. Desktop composition is locked to a 4096×2300 design canvas and scales as one unit. Content (logos, illustrations, titles, copy, buttons) plays a one-shot entrance sequence; the frame, rules, and hatches never animate.

ABSOLUTE RULES
- Single file. No frameworks, no Tailwind, no CSS-in-JS.
- Use the EXACT CloudFront PNG URLs below. Do not generate, replace, or invent images. Do not use <video>, mp4, webm, or any CloudFront video URL.
- Use Figtree as the display face (Google Sans Text / Google Sans are metric fallbacks only).
- Reproduce the CSS custom properties, unit system (--u / --ux), breakpoints, keyframes, and JS entrance cleanup exactly.
- Do not add hover effects except the specified button hover. No scroll-linked animation, no looping animation after load.

FONTS
Load Figtree as a variable font, weights 100–900, font-display: block.
@font-face locally if available: assets/fonts/figtree-variable.woff2
Otherwise load from Google Fonts:
https://fonts.googleapis.com/css2?family=Figtree:wght@100..900&display=block
Stack:
font-family: 'Figtree','Google Sans Text','Google Sans',-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,'Helvetica Neue',Arial,sans-serif;
font-synthesis-weight: none;
-webkit-font-smoothing: antialiased;
-moz-osx-font-smoothing: grayscale;
text-rendering: geometricPrecision;

DESIGN TOKENS (:root)
--bg: #F0EFEB
--ink: #161513
--title: #262523
--copy: #787775
--btn: #252525
--btn-ink: #FFFFFF
--weight-title: 385
--weight-body: 370
--tracking: -0.038em
--size-title: calc(69.5 * var(--u))
--size-body: calc(41 * var(--u))
--size-action: calc(41 * var(--u))
--leading-title: 1.15
--leading-body: calc(45 * var(--u))
--ux: calc(100vw / 4096)
--u: min(calc(100vw / 4096), calc(100dvh / 2300))
  fallback if no dvh: min(calc(100vw / 4096), calc(100vh / 2300))
--rule: max(1px, calc(3 * var(--u)))
Entrance tokens:
--ease-reveal: cubic-bezier(0.16, 1, 0.3, 1)
--ease-soft: cubic-bezier(0.33, 1, 0.68, 1)
--rise-md: 14px
--rise-sm: 9px
--rise-xs: 6px
--step: 90ms

HTML / HEAD
<!DOCTYPE html>
<html lang="en">
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover">
<title>Code Quality — Features</title>
html/body: margin 0, background var(--bg), -webkit-text-size-adjust 100%.
box-sizing: border-box on *, *::before, *::after.
img { display: block; }

STRUCTURE (exact)
<main class="stage">
  <div class="hatch hatch--top" aria-hidden="true"></div>
  <section class="frame" aria-label="Code quality platform features">
    <div class="logos"> … 4 logo-cells … </div>
    <div class="grid"> … 4 articles.card … </div>
  </section>
  <div class="hatch hatch--bottom" aria-hidden="true"></div>
</main>

STAGE
.stage: width 100%; min-height and height 100dvh (fallback 100vh); display flex; flex-direction column; overflow hidden.
This fills the viewport with no dead bands.

HATCH BANDS
.hatch: flex 0 0 auto; margin-inline: calc(89 * var(--ux));
background-image: repeating-linear-gradient(135deg, var(--ink) 0, var(--ink) calc(2.95 * var(--u)), transparent calc(2.95 * var(--u)), transparent calc(14.142 * var(--u)));
background-position: 0 0;
.hatch--top: height calc(53 * var(--u));
.hatch--bottom: height calc(57.75 * var(--u)); background-position: calc(7.5 * var(--u)) 0;
These are present from first paint and NEVER move.

FRAME
.frame: flex 1 1 auto; min-height 0; margin-inline calc(89 * var(--ux)); border: var(--rule) solid var(--ink); background var(--ink);
display grid; grid-template-rows: calc(233 * var(--u)) 1fr; gap: var(--rule);
The black background + gap creates 3px hairline gutters between cells.

LOGO STRIP
.logos: display grid; grid-template-columns: repeat(4, 1fr); gap var(--rule); background var(--ink); min-height 0;
.logo-cell: background var(--bg); flex center; min-width/min-height 0; padding-inline calc(20 * var(--u));
.logo: width calc(var(--lw) * var(--u)); height calc(var(--lh) * var(--u)); max-width 100%; object-fit contain;

Exact logos (order left → right), each wrapped in .logo-cell with --i:

0 Europa
src: https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260826_124213_e07f44a3-d2e8-4518-8151-c04bf62c6b42.png
width="477" height="190" style="--lw:477;--lh:190" alt="Europa"

1 Eclipseful
src: https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260826_124222_f1fd7a94-1521-4f7d-afb8-f460d062c23e.png
width="570" height="192" style="--lw:570;--lh:192" alt="Eclipseful"

2 Ikigai Labs
src: https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260826_124230_dc729a05-ab86-4a86-8ce7-90fc009e428a.png
width="636" height="154" style="--lw:636;--lh:154" alt="Ikigai Labs"

3 Eightball
src: https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260826_124238_6b3cc043-2800-4477-a05e-bb2796592273.png
width="503" height="191" style="--lw:503;--lh:191" alt="Eightball"

FEATURE GRID
.grid: display grid; 2 columns 2 rows; gap var(--rule); background var(--ink); min-height 0.

CARD
.card: background var(--bg); flex column; min-width/min-height 0;
padding: 0 calc(43.25 * var(--u)) calc(41.75 * var(--u));
.well: flex 1 1 auto; min-height 0; flex center; padding-top calc(21.0 * var(--u));
.ill: width calc(var(--iw) * var(--u)); height calc(var(--ih) * var(--u)); max-width 100%; max-height 100%; object-fit contain;

.title: h3; margin 0 0 calc(21.0 * var(--u)); font-size var(--size-title); font-weight var(--weight-title); letter-spacing var(--tracking); line-height var(--leading-title); color var(--title); white-space nowrap;
Each title wraps a single <span class="line">…</span> (display:block) for the mask animation.
.copy: p; margin 0 0 calc(22.0 * var(--u)); font-size var(--size-body); font-weight var(--weight-body); letter-spacing var(--tracking); line-height var(--leading-body); color var(--copy);
Keep the desktop <br> line breaks in the copy (hidden on tablet/mobile via .copy br { display:none }).
.btn: a href="#"; flex 0 0 auto; align-self flex-start; width calc(373 * var(--u)); height calc(94.5 * var(--u)); flex center; background var(--btn); color var(--btn-ink); text-decoration none; font-size var(--size-action); font-weight var(--weight-body); letter-spacing var(--tracking); border-radius 0;
transition: background-color .18s ease, color .18s ease;
.btn:hover { background #000; }
.btn:focus-visible { outline: calc(3 * var(--u)) solid var(--ink); outline-offset: calc(4 * var(--u)); }
@media (prefers-reduced-motion: reduce) { .btn { transition: none; } }
Button label on all four cards: Learn More

FOUR CARDS (reading order: TL, TR, BL, BR) with style="--i:0|1|2|3"

Card 0 — Intelligent Code Analysis Engine
ill: https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260826_124140_015959f9-68a7-4770-b431-3b9603d36945.png
width="752" height="840" style="--iw:752;--ih:840" alt=""
title: Intelligent Code Analysis Engine
copy: An AI core that scans your code in real time, detecting structural issues <br>and logic flaws before they become real problems.

Card 1 — Precision Bug Detection & Deep Inspection
ill: https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260826_124148_7cc7aea0-c1ac-4d1a-ab6d-49ec3803db3a.png
width="803" height="837" style="--iw:803;--ih:837" alt=""
title: Precision Bug Detection & Deep Inspection  (use &amp; in HTML)
copy: Catch subtle bugs, edge cases, and performance issues that <br>traditional tools often overlook.

Card 2 — Advanced Architecture & Structure Validation
ill: https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260826_124156_8de82330-deab-4f81-af88-8cf92324c9ee.png
width="762" height="836" style="--iw:762;--ih:836" alt=""
title: Advanced Architecture & Structure Validation
copy: Identify weak dependencies, unnecessary complexity, and <br>scaling risks to keep your codebase clean and future-ready.

Card 3 — Actionable Performance & Quality Insights Dashboard
ill: https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260826_124204_6fce356a-bbae-4a66-8c2c-bac825b87840.png
width="896" height="837" style="--iw:896;--ih:837" alt=""
title: Actionable Performance & Quality Insights Dashboard
copy: Track code quality and risk areas through clear insights that help <br>your team ship with confidence.

Illustrations are 3D isometric product renders (soft-shadowed, sitting in the well). Do not restyle them.

RESPONSIVE — TABLET  @media (max-width: 1279px), (max-aspect-ratio: 4/5)
:root { --u: clamp(0.335px, calc(100vw / 3700), 0.36px); --ux: var(--u); }
.stage { height: auto; min-height: 100dvh; overflow: visible; }
.grid { grid-template-rows: none; grid-auto-rows: auto; }
.card { padding-bottom: calc(58 * var(--u)); }
.well { padding-block: calc(46 * var(--u)) calc(38 * var(--u)); }
.ill { width: min(calc(var(--iw) * var(--u)), 58%); height: auto; max-height: none; }
.title { white-space: normal; margin-bottom: calc(24 * var(--u)); }
.copy { margin-bottom: calc(28 * var(--u)); }
.copy br { display: none; }
Type stops shrinking with the viewport; layout reflows. Keep 2×2 cards.

RESPONSIVE — NARROW TABLET  @media (max-width: 967px)
.frame { grid-template-rows: auto 1fr; }
.logos { grid-template-columns: 1fr 1fr; grid-auto-rows: calc(233 * var(--u)); }
Logos fold to 2×2. Do NOT collapse the feature cards to one column.

RESPONSIVE — MOBILE  @media (max-width: 599px)
:root {
  --u: clamp(0.25px, calc(100vw / 1450), 0.30px);
  --ux: var(--u);
  --size-title: clamp(12.5px, 3.4vw, 15px);
  --size-body: clamp(11px, 2.85vw, 12.5px);
  --size-action: clamp(11px, 2.85vw, 12.5px);
  --leading-title: 1.2;
  --leading-body: 1.4;
}
.stage { height: 100dvh; min-height: 100dvh; overflow: hidden; }  /* one viewport, no scrollbar */
.frame { grid-template-rows: auto 1fr; }
.logos { grid-template-columns: 1fr 1fr; grid-auto-rows: calc(178 * var(--u)); }
.logo { height: calc(var(--lh) * var(--u) * 0.74); width: auto; max-width: 74%; }
.grid { still 2 columns × 2 rows (do NOT stack to 1 column) }
.card { padding: 0 calc(38 * var(--u)) calc(40 * var(--u)); }
.well { padding-block: calc(30 * var(--u)) calc(26 * var(--u)); }
.ill { width: auto; height: auto; max-width: 88%; max-height: 100%; }
.title { white-space: normal; margin-bottom: calc(26 * var(--u)); }
.copy { margin-bottom: calc(30 * var(--u)); }
.copy br { display: none; }
.btn { width: auto; min-width: max(104px, calc(330 * var(--u))); height: max(34px, calc(112 * var(--u))); padding-inline: calc(40 * var(--u)); }

SAFETY VALVE  @media (max-width: 599px) and (max-height: 619px)
.stage { height: auto; min-height: 100dvh; overflow: visible; }
.well { min-height: calc(420 * var(--u)); }

ENTRANCE SEQUENCE (once on load, then fully removed)
Motion direction: frame, hairline rules, and hatch bands are the stage — present from frame 0, never move. Only content performs.

Behaviors:
1. RISE — logos and copy: short travel, quick.
2. SETTLE — illustrations: tiny scale + short drop onto their shadow.
3. MASK — titles: revealed from behind their own edge with clip-path (NOT overflow:hidden, which would clip descenders).
4. ACTION — buttons last.

Layer order: logos → illustrations → titles → copy → buttons. Per-card --i stagger. Total ~1.65s.

@keyframes enterRise {
  from { opacity: 0; transform: translate3d(0, var(--rise-sm), 0); }
  to { opacity: 1; transform: none; }
}
@keyframes enterSettle {
  from { opacity: 0; transform: translate3d(0, var(--rise-md), 0) scale(0.985); }
  to { opacity: 1; transform: none; }
}
@keyframes enterMaskClip {
  from { clip-path: inset(-60% -6% 100% -6%); }
  to { clip-path: inset(-60% -6% -60% -6%); }
}
@keyframes enterMaskRise {
  from { transform: translate3d(0, 0.6em, 0); }
  to { transform: none; }
}
@keyframes enterAction {
  from { opacity: 0; transform: translate3d(0, var(--rise-xs), 0) scale(0.99); }
  to { opacity: 1; transform: none; }
}

While html has class is-entering:
.logo, .ill, .copy, .btn start at opacity: 0.
Shared animation props on .logo, .ill, .title .line, .copy, .btn:
  animation-duration: var(--dur); animation-delay: var(--delay);
  animation-timing-function: var(--ease-reveal); animation-fill-mode: both;
  animation-iteration-count: 1; will-change: transform, opacity;

.logo: --dur 620ms; --delay calc(120ms + var(--i) * 55ms); animation-name enterRise; timing-function var(--ease-soft);
.ill: --dur 900ms; --delay calc(300ms + var(--i) * var(--step)); animation-name enterSettle;
.title: --dur 820ms; --delay calc(480ms + var(--i) * var(--step)); animation-name enterMaskClip;
.title .line: --dur 820ms; --delay calc(480ms + var(--i) * var(--step)); animation-name enterMaskRise;
.copy: --dur 700ms; --delay calc(620ms + var(--i) * var(--step)); animation-name enterRise;
.btn: --dur 640ms; --delay calc(740ms + var(--i) * var(--step)); animation-name enterAction;

@media (max-width: 599px) { :root { --rise-md: 9px; --rise-sm: 6px; --rise-xs: 4px; --step: 70ms; } }

@media (prefers-reduced-motion: reduce) {
  all entrance animations none; opacity 1; transform none; clip-path none; will-change auto.
}

JS — HEAD (before first paint, inside <head> after CSS)
IIFE: if prefers-reduced-motion: reduce, return; else document.documentElement.classList.add('is-entering');
If JS is disabled, class is never added and content is fully visible.

JS — BODY END
IIFE: if html does not have is-entering, return.
Listen animationend (capture). When animationName === 'enterAction' AND target is the LAST .card .btn, remove is-entering.
Fallback timer 2600ms also removes the class.
Cleanup: remove listener, clearTimeout, drop is-entering. After that nothing is running: no timeline, interval, rAF, scroll or hover hooks.

DELIVERABLE
One complete index.html that matches this spec exactly: same colors, same CloudFront PNGs (not video), same type metrics, same 2×2 mobile grid, same hatch, same entrance, same cleanup.