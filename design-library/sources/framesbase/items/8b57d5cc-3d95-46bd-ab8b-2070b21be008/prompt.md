Build a single-page, production-quality marketing landing page called "Atlas — Your compliant global workspace".

Deliver exactly three files: `index.html`, `css/style.css`, `js/script.js`. No build step, no framework, no external JS libraries, no CSS frameworks. Vanilla HTML/CSS/JS only. All photography is remote (CloudFront URLs below); all icons are local SVG files you author from the sources given.

╔═══════════════════════════════════════════════════════════════╗
║ 0. CRITICAL FAILURE MODES — READ BEFORE WRITING ANY CSS       ║
║ Three mistakes will render sections 2 and 3 completely blank.  ║
║ Section 1 will still look perfect, which hides the bug.        ║
╚═══════════════════════════════════════════════════════════════╝

▶ TRAP 1 — `--k` MUST RESOLVE TO A LENGTH (px), NEVER A UNITLESS NUMBER.
  Every dimension in sections 2 and 3 is written `calc(<number> * var(--k))`.
  In CSS, number × length = length ✅, but number × number = number ❌, and a bare
  number is invalid for `height`/`width`, so the whole declaration is DISCARDED.

  CORRECT (divide a length by a UNITLESS number → length):
      --design-w: 1685;                                   /* unitless! no px */
      --page-scale: calc((100vw - 2 * var(--gutter)) / var(--design-w));   /* → px */
  WRONG (divides by a length → unitless ratio → every calc downstream dies):
      --page-scale: calc((100vw - 40px) / 1685px);        /* ✗ NEVER */
      --page-scale: calc(100vw / 1685);                   /* ✗ missing gutter */

  Every redefinition of --k in every media query must ALSO stay length-valued.
  In clamp()/min() this means every branch carries a unit:
      --k: clamp(0.72px, calc((100vw - 2 * var(--tablet-inset)) / 1080), 1px);  ✅
      --k: clamp(0.72, calc(...), 1);                                            ✗
  (Firefox is strictest here; a unitless branch poisons the whole clamp.)

  SELF-CHECK: after writing the CSS, confirm in devtools that the computed value of
  `--k` on `.features` reads like "0.83px" — not "0.83". If it has no unit, stop and
  fix the token before continuing.

▶ TRAP 2 — `.feature__media` AND `.showcase__figure` CONTAIN ONLY ABSOLUTELY
  POSITIONED CHILDREN, SO THEY HAVE NO INTRINSIC HEIGHT.
  If their `height` is missing or invalid they collapse to 0px and the card artwork,
  chips, mini-cards, benefit card and mini-finder all vanish — the section renders as
  bare headings on white, or as nothing at all.
  MANDATORY BELT-AND-BRACES: give each one an `aspect-ratio` fallback IN ADDITION to
  its height, so a zero height is impossible even if a calc fails:
      .feature__media  { height: calc(577.97 * var(--k)); aspect-ratio: 1060.28 / 577.97;
                         min-height: 320px; }
      .showcase__figure{ aspect-ratio: 1060.85 / 675.47; min-height: 260px; }
  Never let either box end up `height: auto` with no aspect-ratio.

▶ TRAP 3 — THE SCROLL REVEAL MUST FAIL OPEN, NEVER FAIL CLOSED.
  All of sections 2 and 3 start at `opacity: 0` — but ONLY while `<html>` carries the
  class `scroll-reveal-ready`. That class is added by JS *after* the IntersectionObserver
  is successfully constructed. If the observer never fires, or the class is added by a
  hardcoded stylesheet rule, or you put the hidden state on the bare selector, both
  sections stay invisible forever.
  RULES, all mandatory:
    a) NEVER write `.feature__media { opacity: 0 }` unqualified. The hidden state must
       always be prefixed `html.scroll-reveal-ready .feature:not(.is-revealed) …`.
    b) `scroll-reveal-ready` is added by JS ONLY, and only after `new IntersectionObserver(…)`
       has returned successfully and `.observe()` has been called on every target.
    c) Bail out of the whole controller (adding nothing) if `IntersectionObserver` is
       missing or reduced motion is on.
    d) Add an unconditional safety net inside the controller: a 3000ms timer that reveals
       everything and removes `scroll-reveal-ready` no matter what the observer did.
       Clear it once all targets have revealed normally.
    e) The default, no-JS, no-class state of sections 2 and 3 is FULLY VISIBLE.

▶ FINAL ACCEPTANCE TEST (run all four before declaring done):
   1. Load the page — all three sections visible, no blank regions.
   2. Disable JavaScript entirely and reload — all three sections still fully visible
      and readable (only the animations and the finder demo are gone).
   3. In devtools confirm `.features` computed `--k` ends in "px", and that
      `.feature__media` and `.showcase__figure` both report a non-zero height.
   4. Check widths 360 / 700 / 900 / 1440 / 2560 — zero horizontal scrollbar at each.

═══════════════════════════════════════════════════════════════
1. CORE ARCHITECTURE — THE SCALE SYSTEM
═══════════════════════════════════════════════════════════════
The design was authored in Figma on a 1685px-wide page. Do NOT reflow the desktop layout
with ordinary responsive techniques. Instead EVERY desktop length is `calc(<figma-number>
* var(--k))`, where --k is the ratio between the space the page actually has and that
1685px canvas. At exactly 1685px --k === 1px and the layout is pixel-identical to Figma;
at any other width the whole composition scales proportionally instead of re-flowing.

Two scales, because the hero and the sections below it are constrained differently:
  --page-scale : respects viewport WIDTH only. Drives features + showcase.
  --hero-scale : additionally respects viewport HEIGHT so the hero fits one screen.
                 Equals --page-scale until the viewport is too short, then height wins.

:root tokens (exact — note which are unitless and which carry px):
  --gutter: 20px;              /* LENGTH */
  --design-w: 1685;            /* UNITLESS — see Trap 1 */
  --section-inset: 10;         /* unitless */
  --section-gap: 150;          /* unitless */
  --media-h: 737;              /* unitless */
  --hero-chrome: 336;          /* unitless — 11 above + 71 below + 180 text + 74 closing */
  --media-min: 675;            /* unitless — shortest media clearing nav + panel + CTA */
  --viewport-h: 100vh;
  --page-scale: calc((100vw - 2 * var(--gutter)) / var(--design-w));
  --hero-scale: min(var(--page-scale),
                    calc(var(--viewport-h) / (var(--media-min) + var(--hero-chrome))));
  --k: var(--page-scale);

Two @supports refinements:
  @supports (height: 1svh) { :root { --viewport-h: 100svh; } }
  @supports (width: 1cqw) {
    body { container-type: inline-size; }
    .page { --page-scale: calc((100cqw - 2 * var(--gutter)) / var(--design-w));
            --hero-scale: min(var(--page-scale),
                          calc(var(--viewport-h) / (var(--media-min) + var(--hero-chrome))));
            --k: var(--page-scale); }
  }
  (Container units exclude the scrollbar, so the page measures space it actually has.)

`.hero` overrides `--k: var(--hero-scale)`. Its photograph is `flex: 1 1 auto` and absorbs
leftover height, so width-fill and height-fill never fight.

Palette:  --white:#ffffff  --black:#000000  --ink:#020202 (hero backdrop)
          --placeholder:#d9d9d9 (avatar fallback fill)
          --glass:rgba(0,0,0,0.1)   --glass-soft:rgba(0,0,0,0.08)
Radii (unitless design units, × --k at each use):
          --radius-media:30 --radius-panel:18 --radius-button:14 --radius-pill:12
          --radius-card:38.34
Type:     --font: 'Figtree','Inter','Helvetica Neue',Arial,sans-serif;
          --track-tight:-0.02em;  --track-display:-0.05em;
Motion:   --ease-panel: cubic-bezier(0.42, 0.02, 0.05, 0.97);

═══════════════════════════════════════════════════════════════
2. FONTS
═══════════════════════════════════════════════════════════════
The design specifies TT Hoves (commercial). Use Figtree — the closest metric match.
Load Figtree weights 400 and 500 ONLY, `font-display: swap`, and preload the 500 weight.
Only those two weights are ever used: 400 for body copy, 500 for everything else.
body { font-synthesis: none; -webkit-font-smoothing: antialiased; overflow-x: hidden; }

═══════════════════════════════════════════════════════════════
3. REMOTE IMAGE ASSETS — use these URLs verbatim
═══════════════════════════════════════════════════════════════
HERO VIDEO (10s, silent, loops):
https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260826_125443_3ffe8709-59c1-428c-86c4-8ffa90e4b8d6.mp4
HERO VIDEO POSTER:
https://d2ol7oe51mr4n9.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/b9fe4e1a-0975-4771-98bb-ee87c8482508.png
AVATAR — Ivan K.:
https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260826_130521_b5b53fe3-4384-45c0-9976-04b33f7dcbee.png
AVATAR — Jennifer A.:
https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260826_130521_44261148-84ef-402e-89e6-ce814dfdb002.png
AVATAR — David F.:
https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260826_130521_266e2b6b-299c-4b71-b904-26890402a148.png
AVATAR — fourth (stack only):
https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260826_130521_873837cc-8877-4187-be86-2a60aa2f34ce.png
SUNFLOWER PORTRAIT (feature cards 1 AND 2 — same file, cropped differently):
https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260826_130521_74acdc41-c223-4a2b-9b50-8bf985022b0c.png
SUNFLOWER DUSK (feature card 3):
https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260826_130708_e51acd98-0f33-4aa2-8bc5-0a453a732e97.png
SUNFLOWER CLOUDS (feature card 4):
https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260826_130708_58c53874-8db1-44ec-9073-cc8cf2ecad57.png
OFFICE WINDOW (showcase figure 1):
https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260826_131754_75fc072a-991e-4f75-a2aa-5f8deb71c592.png
OFFICE TEAM (showcase figure 2):
https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260826_130707_5b123fed-335a-492a-bff9-0a48f996226a.png

═══════════════════════════════════════════════════════════════
4. LOCAL SVG ICONS — create these 7 files under assets/svg/
═══════════════════════════════════════════════════════════════
logo-mark.svg (43×43, white circle with a crescent bite — brand mark AND favicon):
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 43 43" width="43" height="43"><path d="M 21.500 0.000 C 33.374 0.000  43.000 9.626  43.000 21.500 C 43.000 33.374  33.374 43.000  21.500 43.000 C 9.626 43.000  0.000 33.374  0.000 21.500 C 0.000 9.626  9.626 0.000  21.500 0.000 Z M 15.246 6.133 C 9.186 8.602  4.914 14.550  4.914 21.497 C 4.914 30.657  12.340 38.083  21.500 38.083 C 28.007 38.083  33.637 34.335  36.354 28.881 C 34.424 29.667  32.314 30.102  30.102 30.102 C 20.942 30.102  13.516 22.676  13.516 13.516 C 13.516 10.863  14.139 8.356  15.246 6.133 Z" fill="#ffffff"/></svg>

search.svg (31×31, white outlined magnifier):
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 31 31" width="31" height="31"><path d="M 26.809 15.199 L 25.309 15.199 C 25.309 20.782  20.782 25.309  15.199 25.309 L 15.199 26.809 L 15.199 28.309 C 22.439 28.309  28.309 22.439  28.309 15.199 L 26.809 15.199 Z M 15.199 26.809 L 15.199 25.309 C 9.615 25.309  5.088 20.782  5.088 15.199 L 3.588 15.199 L 2.088 15.199 C 2.088 22.439  7.958 28.309  15.199 28.309 L 15.199 26.809 Z M 3.588 15.199 L 5.088 15.199 C 5.088 9.615  9.615 5.088  15.199 5.088 L 15.199 3.588 L 15.199 2.088 C 7.958 2.088  2.088 7.958  2.088 15.199 L 3.588 15.199 Z M 15.199 3.588 L 15.199 5.088 C 20.782 5.088  25.309 9.615  25.309 15.199 L 26.809 15.199 L 28.309 15.199 C 28.309 7.958  22.439 2.088  15.199 2.088 L 15.199 3.588 Z" fill="#ffffff"/><path d="M 24.333 22.815 C 23.746 22.230  22.797 22.231  22.212 22.817 C 21.627 23.404  21.628 24.354  22.214 24.939 L 23.274 23.877 L 24.333 22.815 Z M 26.766 29.479 C 27.353 30.064  28.303 30.062  28.888 29.476 C 29.473 28.889  29.471 27.940  28.885 27.355 L 27.826 28.417 L 26.766 29.479 Z M 23.274 23.877 L 22.214 24.939 L 26.766 29.479 L 27.826 28.417 L 28.885 27.355 L 24.333 22.815 L 23.274 23.877 Z" fill="#ffffff"/></svg>

globe.svg (31×31, WHITE latitude/longitude wireframe globe):
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 31 31" width="31" height="31"><path d="M 15.220 4.844 C 9.334 4.844  4.564 9.614  4.564 15.500 C 4.564 21.386  9.334 26.156  15.220 26.156 C 21.106 26.156  25.876 21.386  25.876 15.500 C 25.876 9.614  21.106 4.844  15.220 4.844 Z M 2.626 15.500 C 2.626 8.544  8.264 2.906  15.220 2.906 C 22.176 2.906  27.814 8.544  27.814 15.500 C 27.814 22.456  22.176 28.094  15.220 28.094 C 8.264 28.094  2.626 22.456  2.626 15.500 Z" fill="#ffffff" fill-rule="evenodd"/><path d="M 17.219 3.324 C 17.672 3.040  18.270 3.177  18.554 3.631 C 19.612 5.319  20.377 7.853  20.773 10.759 C 20.986 12.235  21.098 13.828  21.098 15.491 C 21.098 17.152  20.986 18.758  20.773 20.234 C 20.377 23.140  19.612 25.674  18.554 27.363 C 18.270 27.816  17.672 27.953  17.219 27.669 C 16.766 27.385  16.628 26.787  16.912 26.334 C 17.765 24.974  18.475 22.744  18.853 19.969 L 18.854 19.961 C 19.053 18.583  19.160 17.069  19.160 15.491 C 19.160 13.913  19.054 12.411  18.855 11.032 L 18.853 11.025 C 18.475 8.249  17.765 6.019  16.912 4.659 C 16.628 4.206  16.766 3.608  17.219 3.324 Z" fill="#ffffff" fill-rule="evenodd"/><path d="M 13.230 3.324 C 13.683 3.608  13.820 4.206  13.536 4.659 C 12.683 6.022  11.960 8.253  11.582 11.025 L 11.581 11.032 C 11.383 12.410  11.277 13.912  11.277 15.491 C 11.277 17.069  11.383 18.584  11.581 19.961 L 11.583 19.969 C 11.960 22.740  12.683 24.972  13.536 26.334 C 13.820 26.787  13.683 27.385  13.230 27.669 C 12.776 27.953  12.178 27.816  11.894 27.363 C 10.838 25.677  10.060 23.144  9.663 20.234 C 9.450 18.758  9.340 17.152  9.340 15.491 C 9.340 13.829  9.450 12.236  9.663 10.759 C 10.060 7.849  10.838 5.317  11.894 3.631 C 12.178 3.177  12.776 3.040  13.230 3.324 Z" fill="#ffffff" fill-rule="evenodd"/><path d="M 15.218 11.549 C 13.640 11.549  12.138 11.656  10.759 11.855 L 10.752 11.856 C 7.981 12.233  5.747 12.955  4.382 13.800 C 3.927 14.081  3.330 13.941  3.049 13.486 C 2.767 13.031  2.907 12.434  3.362 12.152 C 5.046 11.110  7.576 10.333  10.486 9.937 C 11.962 9.724  13.556 9.612  15.218 9.612 C 16.880 9.612  18.473 9.724  19.949 9.937 C 22.859 10.333  25.375 11.098  27.070 12.138 C 27.526 12.418  27.669 13.014  27.389 13.470 C 27.109 13.926  26.512 14.069  26.056 13.789 C 24.680 12.944  22.457 12.234  19.684 11.856 L 19.676 11.855 C 18.297 11.656  16.795 11.549  15.218 11.549 Z" fill="#ffffff" fill-rule="evenodd"/><path d="M 3.052 17.493 C 3.336 17.040  3.934 16.903  4.387 17.187 C 5.748 18.040  7.979 18.763  10.752 19.140 L 10.759 19.141 C 12.137 19.340  13.639 19.446  15.217 19.446 C 16.796 19.446  18.298 19.340  19.676 19.141 L 19.683 19.140 C 22.458 18.762  24.676 18.052  26.047 17.188 C 26.499 16.903  27.097 17.039  27.383 17.491 C 27.668 17.944  27.532 18.542  27.080 18.827 C 25.380 19.898  22.856 20.663  19.949 21.060 C 18.473 21.273  16.879 21.383  15.217 21.383 C 13.556 21.383  11.963 21.273  10.486 21.060 C 7.575 20.663  5.043 19.885  3.358 18.828 C 2.904 18.544  2.767 17.946  3.052 17.493 Z" fill="#ffffff" fill-rule="evenodd"/></svg>

globe-dark.svg — the SAME 5-path latitude/longitude globe, but viewBox/width/height 25×25
with every fill #000000 and all coordinates scaled to the 25-unit box.

arrow-up-right.svg (21.2067×21.2067, black arrow pointing up-right):
<svg xmlns="http://www.w3.org/2000/svg" viewBox="20.8967 20.8967 21.2067 21.2067" width="21.2067" height="21.2067"><path d="M 32.594 37.593 L 39.195 31.287 L 32.594 24.982 L 31.347 26.185 L 35.801 30.439 L 23.805 30.439 L 23.805 32.136 L 35.801 32.136 L 31.347 36.391 L 32.594 37.593 Z" fill="#000000" fill-rule="evenodd"/></svg>

check-badge.svg (25×25, white scalloped rosette badge enclosing a checkmark):
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 25 25" width="25" height="25"><path d="M 16.233 10.998 L 11.990 15.242 C 11.843 15.389  11.644 15.472  11.437 15.472 C 11.230 15.472  11.031 15.389  10.885 15.242 L 8.826 13.180 C 8.522 12.874  8.522 12.379  8.827 12.074 C 9.133 11.769  9.627 11.771  9.932 12.075 L 11.438 13.584 L 15.128 9.892 C 15.433 9.587  15.928 9.587  16.233 9.892 C 16.538 10.198  16.538 10.692  16.233 10.998 Z M 21.566 10.506 L 20.838 9.778 C 20.506 9.444  20.324 9.001  20.324 8.531 L 20.324 7.489 C 20.324 5.938  19.061 4.677  17.511 4.677 L 16.467 4.677 C 15.996 4.677  15.553 4.494  15.222 4.163 L 14.481 3.424 C 13.380 2.332  11.597 2.337  10.504 3.435 L 9.778 4.163 C 9.443 4.495  9.001 4.678  8.530 4.678 L 7.487 4.678 C 5.955 4.679  4.705 5.912  4.677 7.439 C 4.676 7.456  4.675 7.473  4.675 7.490 L 4.675 8.529 C 4.675 9.000  4.492 9.442  4.160 9.775 L 3.423 10.513 C 3.422 10.516  3.418 10.517  3.416 10.519 C 2.328 11.622  2.337 13.405  3.434 14.491 L 4.162 15.222 C 4.493 15.554  4.677 15.996  4.677 16.466 L 4.677 17.513 C 4.677 19.063  5.937 20.325  7.487 20.325 L 8.528 20.325 C 9.000 20.326  9.442 20.508  9.774 20.838 L 10.516 21.579 C 11.046 22.105  11.748 22.394  12.494 22.394 L 12.507 22.394 C 13.258 22.391  13.962 22.096  14.489 21.565 L 15.219 20.836 C 15.548 20.509  16.002 20.322  16.465 20.322 L 17.513 20.322 C 19.060 20.322  20.322 19.062  20.325 17.513 L 20.325 16.468 C 20.325 15.999  20.507 15.556  20.837 15.224 L 21.578 14.483 C 22.672 13.383  22.665 11.599  21.566 10.506 Z" fill="#ffffff" fill-rule="evenodd"/></svg>

connector.svg (94×169, white hairline — a vertical spine with three horizontal branches
at top/middle/bottom, like an org-chart bracket):
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -0.5 94 169" width="94" height="169" fill="none"><path d="M 47.000 0.000 L 47.000 -0.500 L 46.500 -0.500 L 46.500 0.000 L 47.000 0.000 Z M 47.000 168.000 L 46.500 168.000 L 46.500 168.500 L 47.000 168.500 L 47.000 168.000 Z M 0.000 84.500 L 0.000 85.000 L 47.000 85.000 L 47.000 84.500 L 47.000 84.000 L 0.000 84.000 L 0.000 84.500 Z M 47.000 84.500 L 47.000 85.000 L 94.000 85.000 L 94.000 84.500 L 94.000 84.000 L 47.000 84.000 L 47.000 84.500 Z M 47.000 84.500 L 47.500 84.500 L 47.500 0.000 L 47.000 0.000 L 46.500 0.000 L 46.500 84.500 L 47.000 84.500 Z M 47.000 0.000 L 47.000 0.500 L 94.000 0.500 L 94.000 0.000 L 94.000 -0.500 L 47.000 -0.500 L 47.000 0.000 Z M 47.000 0.000 L 46.500 0.000 L 46.500 168.000 L 47.000 168.000 L 47.500 168.000 L 47.500 0.000 L 47.000 0.000 Z M 47.000 168.000 L 47.000 168.500 L 94.000 168.500 L 94.000 168.000 L 94.000 167.500 L 47.000 167.500 L 47.000 168.000 Z" fill="#ffffff"/></svg>

═══════════════════════════════════════════════════════════════
5. DOCUMENT HEAD & BOOT SCRIPT
═══════════════════════════════════════════════════════════════
<title>Atlas — Your compliant global workspace</title>
<meta name="description" content="Discover, onboard, and pay compliant remote teams in over 150 countries.">
favicon = assets/svg/logo-mark.svg (type image/svg+xml); preload Figtree 500 woff2.

MANDATORY inline blocking script in <head>, BEFORE the stylesheet link:
  document.documentElement.classList.add('has-js','entrance-pending');
  window.__atlasEntranceFallback = setTimeout(function () {
    document.documentElement.classList.remove('entrance-pending','entrance-playing');
  }, 3500);
This guarantees the hero becomes visible even if the entrance controller never runs.

═══════════════════════════════════════════════════════════════
6. HTML STRUCTURE (exact — reproduce this tree and these class names)
═══════════════════════════════════════════════════════════════
<body> > <main class="page"> containing three <section>s: .hero, .features, .showcase.
`<script src="js/script.js">` at end of body — not deferred, not async.

── SECTION 1: <section class="hero">
  <div class="hero__media">
    <div class="hero__zoom">
      <video class="hero__video" muted loop playsinline preload="metadata"
             poster="[HERO POSTER URL]" aria-hidden="true" tabindex="-1">
        <source src="[HERO VIDEO URL]" type="video/mp4">
      </video>
    </div>
    <div class="hero__scrim"></div>

    <header class="nav">
      <a class="brand" href="#">
        <img class="brand__mark" src="assets/svg/logo-mark.svg" alt="" aria-hidden="true">
        <span class="brand__name">Atlas</span>
      </a>
      <nav class="nav__menu" id="primary-menu" aria-label="Primary">
        <a class="pill nav__link" href="#">Platform</a>
        <a class="pill nav__link" href="#">Use Cases</a>
        <a class="pill nav__link" href="#">Country</a>
        <a class="pill nav__link" href="#">Pricing</a>
        <a class="pill pill--light nav__cta nav__cta--menu" href="#">Request Demo</a>
      </nav>
      <a class="pill pill--light nav__cta" href="#">Request Demo</a>
      <button class="nav__toggle" type="button" aria-controls="primary-menu"
              aria-expanded="false" aria-label="Open navigation menu">
        <span></span><span></span>
      </button>
    </header>

    <div class="finder" id="finder" data-state="results">
      <div class="finder__bar">
        <div class="finder__field">
          <span class="icon-button icon-button--soft" aria-hidden="true">
            <img src="assets/svg/search.svg" alt="">
          </span>
          <input class="finder__input" type="search" id="expert-search"
                 placeholder="Search expert" aria-label="Search expert" autocomplete="off">
          <span class="finder__demo" id="finder-demo" aria-hidden="true">
            <span class="finder__demo-hint" id="demo-hint">Search expert</span>
            <span class="finder__demo-typed" id="demo-typed"></span>
          </span>
        </div>
        <div class="country">
          <button class="country__toggle" type="button" id="country-toggle"
                  aria-haspopup="listbox" aria-expanded="false">
            <img class="country__icon" src="assets/svg/globe.svg" alt="" aria-hidden="true">
            <span class="country__label" id="country-label">Global</span>
          </button>
          <ul class="country__menu" id="country-menu" role="listbox"
              aria-labelledby="country-toggle" hidden>
            <li class="country__option" role="option" tabindex="-1" data-country="Global"  aria-selected="true">Global</li>
            <li class="country__option" role="option" tabindex="-1" data-country="Germany" aria-selected="false">Germany</li>
            <li class="country__option" role="option" tabindex="-1" data-country="Belgium" aria-selected="false">Belgium</li>
          </ul>
        </div>
      </div>

      <div class="finder__roles" id="role-list">
        <button class="pill pill--row role" type="button" aria-pressed="false">UI Designer</button>
        <button class="pill pill--row role" type="button" aria-pressed="false">UX Designer</button>
        <button class="pill pill--row role" type="button" aria-pressed="false">Web Designer</button>
      </div>

      <div class="finder__results">
        3 × <article class="expert" data-country="…"> each:
              <div class="expert__who">[img.avatar]<div class="expert__id">
                <span class="expert__name">…</span><span class="expert__meta">…</span></div></div>
              <div class="expert__terms">
                <span class="expert__rate">…</span><span class="expert__type">…</span></div>
        Rows in order:
          1. Ivan K.     | Germany | "Germany, 5 year exp." | $4,500-$6,000 | Remote
          2. Jennifer A. | Belgium | "Belgium, 4 year exp." | $5,500-$6,500 | In-house
          3. David F.    | Belgium | "Belgium, 4 year exp." | $5,500-$6,000 | In-house
        Then <p class="finder__count">and 50+ expert hired</p>
      </div>
    </div>

    <div class="cta">
      <a class="cta__label" href="#">Get Early Access</a>
      <a class="cta__go" href="#" aria-label="Get Early Access">
        <img src="assets/svg/arrow-up-right.svg" alt="" aria-hidden="true">
      </a>
    </div>
  </div>

  <div class="hero__foot">
    <h1 class="hero__title">Your compliant global workspace</h1>
    <div class="hero__aside">
      <div class="avatar-stack" aria-hidden="true">
        4 × <img class="avatar avatar--ring"> in order: Ivan, David, Jennifer, fourth
      </div>
      <p class="hero__lede">Discover,&nbsp;onboard,&nbsp;and pay compliant remote teams in over 150 countries.</p>
    </div>
  </div>
</section>

── SECTION 2: <section class="features"> — two rows, two cards each
  <div class="features__row features__row--top">
    <article class="feature feature--payroll">
      <div class="feature__media">
        <img class="crop crop--payroll" src="[SUNFLOWER PORTRAIT]" alt="" aria-hidden="true">
        <span class="pill pill--light chip chip--payroll">Global Payroll
          <img class="chip__icon" src="assets/svg/globe-dark.svg" alt="" aria-hidden="true"></span>
        <img class="feature__connector" src="assets/svg/connector.svg" alt="" aria-hidden="true">
        3 × <div class="mini-card mini-card--r1|--r2|--r3">
              <span class="mini-card__who"><img class="avatar avatar--mini" src="[AVATAR]">
                <span class="mini-card__name">NAME</span></span>
              <span class="mini-card__place">PLACE</span></div>
            r1 Ivan K./Germany · r2 Jennifer A./Belgium · r3 David F./Belguim  [sic]
      </div>
      <h3 class="feature__title">Global Payroll Setup</h3>
      <p class="feature__text">Automatic,&nbsp;mult-currency payments made easy</p>  [sic]
    </article>

    <article class="feature feature--onboarding">
      <div class="feature__media">
        <img class="crop crop--onboarding" src="[SUNFLOWER PORTRAIT — same file]" alt="" aria-hidden="true">
        <span class="pill pill--light chip chip--legal">Legal layer</span>
        3 × <span class="pill pill--glass chip chip--labor|--data|--contract">LABEL
              <img class="chip__icon" src="assets/svg/check-badge.svg" alt="" aria-hidden="true"></span>
            labels: "Labor Laws" · "Data Protection" · "Contract"
      </div>
      <h3 class="feature__title">Instant Onboarding</h3>
      <p class="feature__text">Legal-verified templates to hire in 24 hours</p>
    </article>
  </div>

  <div class="features__row features__row--bottom">
    <article class="feature feature--benefits">
      <div class="feature__media">
        <img class="crop crop--cover" src="[SUNFLOWER DUSK]" alt="" aria-hidden="true">
        <div class="benefit-card">
          <div class="benefit-card__person"><img class="avatar" src="[DAVID]" alt="" aria-hidden="true">
            <div class="expert__id"><span class="expert__name">David F.</span>
              <span class="expert__meta">Belgium, 4 year exp.</span></div></div>
          <div class="benefit-card__tags">
            2 × <span class="pill pill--light chip">LABEL
                  <img class="chip__icon" src="assets/svg/globe-dark.svg" alt="" aria-hidden="true"></span>
                labels: "Retirement Benefits" · "Hearth Insurance"  [sic]
          </div>
        </div>
      </div>
      <h3 class="feature__title">Offer competitive benefits</h3>
      <p class="feature__text">Provide pensions and retirement plans. Stand out and attract the best talent.&nbsp;</p>
    </article>

    <article class="feature feature--experts">
      <div class="feature__media">
        <img class="crop crop--cover" src="[SUNFLOWER CLOUDS]" alt="" aria-hidden="true">
        <div class="mini-finder">
          <div class="mini-finder__field">
            <span class="icon-button icon-button--soft" aria-hidden="true">
              <img src="assets/svg/search.svg" alt=""></span>
            <span class="mini-finder__placeholder">Search </span>
          </div>
          <div class="country country--static">
            <img class="country__icon" src="assets/svg/globe.svg" alt="" aria-hidden="true">
            <span class="country__label">Belgium</span></div>
        </div>
      </div>
      <h3 class="feature__title">Access locally-based HR experts</h3>
      <p class="feature__text">Get done-for-you employee lifecycle management</p>
    </article>
  </div>
</section>

── SECTION 3: <section class="showcase">
  <h2 class="showcase__title">Hire anywhere in 24 hours</h2>
  <figure class="showcase__figure">
    <img class="crop crop--cover" src="[OFFICE WINDOW]"
         alt="A team working together in a bright open-plan office"></figure>
  <h2 class="showcase__title showcase__title--second">Experience the competition can’t match</h2>
  <figure class="showcase__figure showcase__figure--second">
    <img class="crop crop--cover" src="[OFFICE TEAM]"
         alt="Colleagues collaborating around a desk in a plant-filled workspace"></figure>
</section>

("can’t" uses a typographic right single quote.)

═══════════════════════════════════════════════════════════════
7. DESKTOP CSS — EXACT VALUES
Notation: every bare number below means `calc(<number> * var(--k))` unless a unit is
shown. Font sizes, gaps, paddings, radii, offsets — all of them. Write the calc() out.
═══════════════════════════════════════════════════════════════
RESET
  *,*::before,*::after { box-sizing: border-box }
  html { text-size-adjust: 100% }
  body { margin:0; background:var(--white); color:var(--black); font-family:var(--font);
         font-weight:400; font-synthesis:none; -webkit-font-smoothing:antialiased;
         overflow-x:hidden }
  img { display:block; max-width:100% }
  [hidden] { display:none !important }
  a { color:inherit; text-decoration:none }
  button,input { font:inherit; color:inherit }
  :focus-visible { outline: calc(2*var(--k)) solid currentColor;
                   outline-offset: calc(2*var(--k)) }
  .page { position:relative; margin-inline:var(--gutter) }

SHARED PRIMITIVES
  .avatar       56×56; border-radius 50%; object-fit cover; background var(--placeholder);
                flex none
  .avatar--ring border calc(3*var(--k)) solid var(--white)
  .pill         inline-flex, centered both axes; height 40; padding 12 / 18; border 0;
                radius --radius-pill; background var(--glass); color white; font-size 16;
                weight 500; line-height 1; letter-spacing --track-tight; nowrap
  .pill--light  background white; color black
  .icon-button  grid place-items center; 63×63; radius --radius-button; flex none
  .icon-button--soft  background var(--glass-soft)
  .icon-button img    31×31
  .crop--cover  width 100%; height 100%; object-fit cover; object-position center

HERO
  .hero        --k: var(--hero-scale); position relative; flex column;
               min-height var(--viewport-h); padding-block 11 / 74
               (min-height not height: on a viewport too short for even the smallest
               usable hero the section grows and the page scrolls rather than clipping)
  .hero__media position relative; flex 1 1 auto; min-height calc(var(--media-min)*var(--k));
               margin-inline calc(var(--section-inset)*var(--page-scale));
               radius --radius-media; overflow hidden; background var(--ink)
  .hero__zoom  absolute inset 0; overflow hidden; transform-origin 50% 42%
               html.continuous-motion .hero__zoom { animation: hero-push 5.2s ease-in-out
                 infinite alternate; will-change: transform }
               @keyframes hero-push { from { transform: scale(1) }
                                      to   { transform: scale(1.238) } }
               The zoom stays DORMANT until the entrance completes (§9).
  .hero__video absolute inset 0; 100%×100%; max-width none; object-fit cover; center
  .hero__scrim absolute inset 0; background var(--ink); opacity .2

NAV
  .nav         absolute; left 26; right 25; top 19; flex row space-between, align center;
               height 43
  .brand       relative 126×43; flex none
  .brand__mark absolute 0,0; 43×43
  .brand__name absolute left 55, top 6; white; font-size 34.08; weight 500;
               line-height .9; letter-spacing --track-display
  .nav__menu   flex; gap 1; width 389; height 40;
               backdrop-filter blur(calc(12.35*var(--k))) + -webkit- prefix
  .nav__link widths by position: 1→96, 2→111, 3→94, 4→85
  .nav__cta    width 140
  .nav__cta--menu, .nav__toggle { display: none }    /* desktop only */
  hover: .nav__link → rgba(0,0,0,.22); .nav__cta → rgba(255,255,255,.86)

TALENT PANEL — four resizable states
  Heights (design units) via [data-state]:
    collapsed    83 = 10+63+10                        search row only
    suggestions 223 = 10+63+10+130+10                 + role list
    results     388 = 10+63+10+295+10                 + result list   [--results-top: 83]
    full        528 = 10+63+10+130+10+295+10          both            [--results-top: 223]
  Visibility: collapsed hides .finder__roles AND .finder__results; suggestions hides
  .finder__results; results hides .finder__roles; full shows both.
  .finder      --finder-h: 388; --results-top: 83;
               --finder-half: calc(var(--finder-h) * var(--k) / 2);
               absolute; left calc(50% + 8*var(--k));
               top: clamp(calc(82*var(--k) + var(--finder-half)),
                          calc(100% * 339 / var(--media-h)),
                          calc(100% - 159*var(--k) - var(--finder-half)));
               width 541; height calc(var(--finder-h)*var(--k));
               radius --radius-panel; background var(--glass);
               backdrop-filter blur(calc(16.85*var(--k))); overflow hidden;
               transform translate(-50%,-50%);
               transition: height var(--finder-dur,600ms) var(--ease-panel),
                           top    var(--finder-dur,600ms) var(--ease-panel);
               (Held by its CENTRE — 8 units right of the media centre line, 46% down —
                so it keeps its place however the photograph is shaped. The clamp stops
                the full panel climbing into the nav or sliding past the CTA.)
  .finder__bar    absolute 10,10; flex space-between align center; 521×63
  .finder__field  relative flex align center; gap 20; 340×63
  .finder__input  width 257; border 0; padding 0; background none; white; font-size 26;
                  weight 500; line-height 1; --track-tight; appearance none
                  ::placeholder white opacity .4; hide ::-webkit-search-cancel-button
  .country        relative; flex none
  .country__toggle, .country--static  flex align center; gap 11; 149×31; padding 0 16;
                  border 0; background none; cursor pointer
  .country__icon  31×31 flex none
  .country__label white; 26 / 500 / 1; --track-tight
  .country__menu  absolute right 0, top 41; z-index 2; margin 0; padding 6;
                  list-style none; width 180; radius --radius-pill;
                  background rgba(0,0,0,.55); backdrop-filter blur(calc(16.85*var(--k)))
  .country__option padding 9 / 12; radius 8; white; 18/500/1; --track-tight; pointer
                  hover or [aria-selected=true] → rgba(255,255,255,.16)
  .finder__roles  absolute left 10, top 83; flex column; gap 5; width 519
  .pill--row      width 519; justify-content flex-start; cursor pointer
                  .role:hover rgba(0,0,0,.16); .role[aria-pressed=true] rgba(255,255,255,.2)
  .finder__results absolute left 10, top calc(var(--results-top)*var(--k));
                  flex column align center; gap 5; width 519;
                  transition top var(--finder-dur,600ms) var(--ease-panel)
  .expert         flex space-between align center; 519×80; padding 12 / 18;
                  radius --radius-pill; background var(--glass)
  .expert__who    flex align center; gap 13
  .expert__id / .expert__terms  flex column; gap 6 — .expert__terms align flex-end
  .expert__name / .expert__rate  white 20/500/1 --track-tight
  .expert__meta / .expert__type  white 16/400/1 --track-tight
                  .expert__meta opacity .5 · .expert__type opacity .6
  .finder__count  margin 0; padding 10 0; white 20/500/1 --track-tight

CTA
  .cta          absolute left 50%; bottom 76; flex; 252×63; transform translateX(-50%)
  .cta__label, .cta__go  grid place-items center; height 63; radius --radius-button;
                background white; color black
  .cta__label   width 189; font-size 19; weight 500; --track-tight
  .cta__go      width 63 · .cta__go img 21.2067×21.2067
  hover both → rgba(255,255,255,.86)

HERO FOOT
  .hero__foot   relative; flex none; height 180; margin-top 71
  .hero__title  absolute left 57, top 0; width 757; margin 0; font-size 100; weight 500;
                line-height .9; letter-spacing --track-display
  .hero__aside  absolute right 35, top 17; width 437
  .avatar-stack relative; height 56; children absolute top 0 at left 0 / 48 / 95 / 143
  .hero__lede   width 437; margin 43 0 0; font-size 25; weight 400; line-height 1.1;
                letter-spacing --track-display

FEATURES  (authored on a 1186.5px artboard; all numbers below already multiplied by
           1685 / 1186.5 = 1.420143 to sit on the same 1685 page)
  .features     display grid; row-gap 70;
                padding-top calc(var(--section-gap) * var(--page-scale));
                padding-inline calc(var(--section-inset) * var(--page-scale));
                padding-bottom 70
  .features__row display grid; min-width 0
  .features__row--top    grid-template-columns minmax(0,1060.28fr) minmax(0,457.29fr);
                         column-gap 25.44
  .features__row--bottom grid-template-columns minmax(0,774.44fr) minmax(0,738.47fr);
                         column-gap 30.06
  .feature      min-width 0
  .feature__media  position relative; width 100%;
                   height calc(577.97 * var(--k));
                   aspect-ratio: 1060.28 / 577.97;   ← Trap 2 safety net
                   min-height: 320px;                ← Trap 2 safety net
                   radius --radius-card; overflow hidden
  .feature__title  margin-block 39 0; font-size 37.48; weight 500; line-height .9;
                   --track-display; white-space nowrap
  .feature__text   margin-block 17 0; font-size 21.1; weight 400; line-height 1.1;
                   --track-tight; opacity .6; white-space nowrap

  Oversized Figma crops (absolute, max-width none — these deliberately overflow and are
  clipped by the media box; they are NOT object-fit images on desktop):
  .crop--payroll     absolute; left -247.27;  top -385.32; width 1380.29; height 1725.35
  .crop--onboarding  absolute; left -1055.85; top -210.19; width 1513.36; height 1891.70

  Floating chrome (all absolute inside .feature__media):
  .chip          gap 19.88; height 69.59; padding 17.04 / 25.56; radius 17.04;
                 font-size 22.72     (composes on top of .pill)
  .chip__icon    35.5×35.5; flex none
  .pill--glass   background var(--glass); white;
                 backdrop-filter blur(calc(30.11*var(--k)))
  .chip--payroll   left 149.85  top 254.67  width 242.84
  .chip--legal     left 149.12  top 120.71  width 157.64  height 56.81
  .chip--labor     left 117.88  top 213.02  width 220.12
  .chip--data      left  96.58  top 299.65  width 262.73
  .chip--contract  left 130.66  top 386.28  width 195.98
  .feature__connector  left 405.48  top 168.75 (=169.46 less the .71 stroke overhang)
                       width 133.49  height 239.99
  .mini-card     absolute left 557.43; flex space-between align center; 353.79×91.89;
                 padding 13.78 / 20.68; radius 13.78; background var(--glass);
                 backdrop-filter blur(calc(39.92*var(--k)))
                 tops: --r1 121.17 · --r2 242.93 · --r3 365.74
  .mini-card__who  flex align center; gap 14.93
  .avatar--mini    64.33×64.33
  .mini-card__name / __place  white 22.97/500/1 --track-tight nowrap
  .benefit-card  absolute left 199.56, top 150.25; flex column; gap 34.08;
                 413.26×298.23; padding 17.04 / 25.56; radius 17.04;
                 background var(--glass); backdrop-filter blur(calc(38.56*var(--k)))
  .benefit-card__person  flex align center; gap 18.46
                 its .avatar 79.53² · .expert__id gap 8.52
                 .expert__name 28.4 · .expert__meta 22.72
  .benefit-card__tags    flex column align flex-start; gap 11.36
                 its .chip { position: static }
  .mini-finder   absolute left 68.47, top 223.14; flex space-between align center;
                 603.56×117.87; padding 14.2; radius 25.56; background var(--glass);
                 backdrop-filter blur(calc(23.93*var(--k)))
  .mini-finder__field  flex align center; gap 28.4; 313.85×89.47
  .mini-finder .icon-button  89.47² radius 19.88 · its img 44.02²
  .mini-finder__placeholder  white opacity .4; 36.92/500/1 --track-tight
  .country--static  238.58×44.02; gap 15.62; padding 0 22.72; cursor default
                 its .country__icon 44.02² · its .country__label 36.92

SHOWCASE (base = absolute Figma placement; overridden at ≥1024px and below 1081px)
  .showcase          position relative; height calc(2387.26 * var(--k))
  .showcase__title   absolute left 69.59, top 274.09; width 624.86; margin 0;
                     font-size 96.85; weight 500; line-height .9; --track-display
  .showcase__title--second   left 71.01  top 1330.67  width 1062.27
  .showcase__figure  absolute left 71.01, top 521.19; width 1060.85; height 675.47;
                     margin 0; radius --radius-card; overflow hidden;
                     aspect-ratio 1060.85 / 675.47; min-height 260px   ← Trap 2
  .showcase__figure--second  left 72.43  top 1577.78

  @media (min-width: 1024px)  — the two stories sit side by side:
    .showcase → display grid; grid-template-columns repeat(2, minmax(0,1fr));
      grid-template-areas 'title-one title-two' / 'figure-one figure-two';
      grid-template-rows auto auto; column-gap 40; row-gap 42; height auto;
      padding-block calc(var(--section-gap)*var(--page-scale)) 120;
      padding-inline calc(var(--section-inset)*var(--page-scale));
    all four children → position static; width 100%
    .showcase__title  grid-area title-one; font-size 72
    .showcase__title--second  grid-area title-two
    .showcase__figure grid-area figure-one; height auto;
                      aspect-ratio 1060.85 / 675.47    ← keeps height non-zero
    .showcase__figure--second grid-area figure-two

═══════════════════════════════════════════════════════════════
8. RESPONSIVE ARCHITECTURE
The proportional desktop composition stays active down to 1080px. Below that its scaled
type and controls become too small for touch, so each section adopts an INTRINSIC layout.
Reminder: every --k redefinition below must stay LENGTH-valued in every clamp branch.
═══════════════════════════════════════════════════════════════
── TABLET: @media (min-width:700px) and (max-width:1080px)
.page  --tablet-inset: clamp(16px,2.5vw,28px);
       --tablet-section-gap: clamp(72px,10vw,108px);
       margin-inline: var(--tablet-inset)
.hero  --k: clamp(0.72px, calc((100vw - 2*var(--tablet-inset)) / 1080), 1px);
       min-height auto; padding-block 10px var(--tablet-section-gap)
.hero__media  flex none; min-height 0; height clamp(720px,90svh,820px);
       margin-inline 0; radius clamp(20px,3vw,30px)
.nav   left/right clamp(18px,3vw,28px); top clamp(16px,2.4vw,24px); height 48px
.brand 126×43px · .brand__mark 43×43px · .brand__name left 55px top 6px font-size 34px
.nav > .nav__cta { display: none }
.nav__toggle → SHOWN: position relative; z-index 4; grid place-content center; gap 7px;
       48×48px; padding 0; border 0; radius 14px; background var(--glass); color white;
       backdrop-filter blur(14px); cursor pointer
       its spans: 22×2px; radius 999px; background currentColor;
         transition transform 240ms var(--ease-panel)
       [aria-expanded=true] → first span translateY(4.5px) rotate(45deg);
                              last  span translateY(-4.5px) rotate(-45deg)   (X)
.nav__menu → dropdown: absolute; z-index 3; right 0; top 58px; display grid; gap 6px;
       width min(320px, calc(100vw - 2*var(--tablet-inset) - 36px)); height auto;
       padding 8px; radius 18px; background rgba(0,0,0,.28); backdrop-filter blur(22px);
       box-shadow 0 18px 42px rgba(0,0,0,.14); opacity 0; visibility hidden;
       transform translateY(-8px) scale(.98); transform-origin top right;
       transition opacity 220ms var(--ease-panel), transform 220ms var(--ease-panel),
                  visibility 220ms
       .nav__menu.is-open → opacity 1; visibility visible; transform none
.nav__link (plus `.nav__link:nth-child(n)` to beat the desktop width rules) and
.nav__cta--menu → display flex; justify-content flex-start; width 100%; min-height 48px;
       height auto; padding 14px 16px; radius 12px; font-size 16px
       .nav__cta--menu → justify-content center; margin-top 2px
.finder  left 50%; top 46%; width min(calc(541*var(--k)), calc(100% - 48px))
.cta     bottom clamp(36px,6vw,60px)
.hero__foot  display grid; columns minmax(0,1.55fr) minmax(240px,0.7fr); align-items start;
       column-gap clamp(32px,6vw,72px); height auto; margin-top clamp(48px,7vw,72px);
       padding-inline clamp(18px,4vw,44px)
.hero__title, .hero__aside → position static; width auto
.hero__title font-size clamp(58px,8.5vw,82px); line-height .9
.hero__aside padding-top 8px
.hero__lede  width auto; margin-top 30px; font-size clamp(18px,2.3vw,24px)
.features  --k: clamp(0.64px, calc((100vw - 2*var(--tablet-inset)) / 1080), 0.94px);
       gap clamp(56px,8vw,84px); padding 0 0 var(--tablet-section-gap)
.features__row  gap clamp(18px,2.5vw,28px)
.features__row--top     columns minmax(0,1.45fr) minmax(310px,0.75fr)
.features__row--bottom  columns repeat(2, minmax(0,1fr))
.feature  container-type: inline-size;  then per-card container-relative --k so the card
       interiors keep their design-unit geometry (note: LENGTH-valued):
         .feature--payroll    > * { --k: min(1px, calc(100cqw / 1060.28)) }
         .feature--onboarding > * { --k: min(1px, calc(100cqw / 457.29)) }
         .feature--benefits   > * { --k: min(1px, calc(100cqw / 774.44)) }
         .feature--experts    > * { --k: min(1px, calc(100cqw / 738.47)) }
.feature__media  height clamp(390px,53vw,540px); radius clamp(24px,4vw,38px)
.feature__title  margin-top clamp(24px,3.5vw,38px); font-size clamp(29px,3.8vw,38px);
                 white-space normal
.feature__text   margin-top 14px; font-size clamp(17px,2.15vw,21px); white-space normal
.showcase  --k: clamp(0.68px, calc((100vw - 2*var(--tablet-inset)) / 1080), 0.94px);
       same 2-column grid/areas as ≥1024px; column-gap clamp(20px,3vw,34px);
       row-gap clamp(28px,4vw,42px); height auto; padding 0 0 var(--tablet-section-gap);
       children static width 100%; .showcase__title font-size clamp(48px,6.5vw,66px);
       .showcase__figure height auto; aspect-ratio 1060.85/675.47

── NARROW TABLET: @media (min-width:700px) and (max-width:860px)
.hero__foot  grid-template-columns 1fr; row-gap 38px
.hero__aside display grid; columns 190px minmax(0,1fr); align center; gap 28px;
             padding-top 0
.hero__lede  margin 0
.features__row--top, .features__row--bottom → grid-template-columns 1fr
.features__row gap 56px
.feature__media height min(66vw, 520px)
.feature--onboarding .crop--onboarding { left -230.96%; top -36.37%; width 330.96%;
                                         height auto }
.feature--onboarding .chip { transform: translateX(calc((100cqw - 457.29px) / 2)) }
.showcase  grid-template-columns 1fr; areas 'title-one'/'figure-one'/'title-two'/'figure-two';
           row-gap 36px
.showcase__title--second margin-top 34px

── MOBILE: @media (max-width:699px)
.page  --mobile-inset: clamp(12px,4vw,20px);
       --mobile-section-gap: clamp(64px,18vw,88px); margin-inline var(--mobile-inset)
.hero  --k: 1px;   ← note the unit
       min-height auto; padding-block 8px var(--mobile-section-gap)
.hero__media flex none; min-height 0; height clamp(640px,88svh,760px);
       margin-inline 0; radius clamp(18px,6vw,26px)
.nav   left/right 16px; top max(14px, env(safe-area-inset-top)); height 46px
.brand 112×40px · mark 40×40px · name left 51px top 6px font-size 31px
.nav__toggle as tablet but 46×46px, spans 21×2px
.nav__menu top 56px; width min(300px, calc(100vw - 2*var(--mobile-inset) - 32px));
       background rgba(0,0,0,.3); box-shadow 0 18px 42px rgba(0,0,0,.16)
.finder left 50%; top 45%; width calc(100% - 24px); radius 16px
       FIXED pixel heights replace the scaled ones:
         collapsed 72px · suggestions 218px · results 344px · full 490px
.finder__bar left/top 8px; width calc(100% - 16px); height 56px
.finder__field gap 12px; width min(58%,230px); height 56px
.finder .icon-button 48×48px radius 12px · its img 24×24px
.finder__input, .finder__demo font-size clamp(16px,4.5vw,19px)
.finder__input width calc(100% - 60px) · .finder__demo left 60px top 18px
.country__toggle gap 7px; width auto; min-width 104px; height 36px; padding 0 8px
.country__icon 25×25px · .country__label clamp(15px,4vw,18px)
.country__menu top 40px; width 150px; padding 6px
.country__option min-height 42px; padding 12px 10px; font-size 15px
.finder__roles, .finder__results  left 8px; top 72px; gap 4px; width calc(100% - 16px)
.finder[data-state='full'] .finder__results { top: 218px }
.pill--row justify flex-start; width 100%; height 42px; padding 12px 14px; font-size 15px
.expert width 100%; height 76px; padding 10px 12px
.expert__who gap 10px · .expert .avatar 44×44px · .expert__id/.expert__terms gap 5px
.expert__name/.expert__rate clamp(13px,3.6vw,15px)
.expert__meta/.expert__type clamp(11px,3vw,13px)
.finder__count padding 9px 0; font-size 14px
.cta bottom max(24px, env(safe-area-inset-bottom)); 224×56px
.cta__label/.cta__go height 56px · .cta__label width 168px font-size 17px
.cta__go width 56px · its img 20×20px
.hero__foot display grid; gap clamp(34px,9vw,48px); height auto;
       margin-top clamp(42px,11vw,58px); padding-inline clamp(4px,2vw,10px)
.hero__title, .hero__aside → static; width auto
.hero__title max-width 11ch; font-size clamp(44px,12.2vw,68px); line-height .91
.hero__aside grid; columns 178px minmax(0,1fr); align center; gap clamp(18px,5vw,28px)
.avatar-stack height 50px · its avatars 50×50px · lefts 0 / 42px / 84px / 126px
.hero__lede width auto; margin 0; font-size clamp(16px,4.4vw,20px); line-height 1.15
.features display grid; gap clamp(52px,14vw,72px); padding 0 0 var(--mobile-section-gap)
.features__row grid-template-columns 1fr; gap clamp(48px,13vw,68px)
.feature min-width 0; container-type inline-size
.feature__media height clamp(330px,94vw,480px); radius clamp(24px,8vw,34px)
.feature__title margin-top clamp(24px,7vw,34px); font-size clamp(28px,8vw,38px); normal wrap
.feature__text  margin-top 13px; font-size clamp(17px,4.7vw,21px); normal wrap
IMPORTANT — the oversized Figma crops are neutralized on mobile:
  .feature__media > .crop { inset 0; width 100%; height 100%; max-width none;
                            object-fit cover }
  .feature--payroll    .crop--payroll    { object-position: 30% center }
  .feature--onboarding .crop--onboarding { object-position: 73% center }
.chip height 46px; padding 12px 15px; radius 13px; font-size 14px · .chip__icon 23×23px
.chip--payroll left 18px; top 30px; width auto
.feature__connector left 31%; top 104px; 58×108px
.mini-card left 43%; width 53%; height 62px; padding 9px 10px; radius 11px
       tops 88px / 160px / 232px · __who gap 8px · .avatar--mini 38×38px
       name/place clamp(11px,3vw,13px)
.chip--legal left 50%; top 30px; width auto; height 44px; transform translateX(-50%)
.chip--labor/.chip--data/.chip--contract left 50%; width auto; translateX(-50%)
       tops 98px / 158px / 218px
.benefit-card left 7%; top 48px; gap 20px; width 86%; height auto; padding 16px;
       radius 15px · __person gap 14px, its avatar 58×58px, name 20px, meta 15px
       __tags gap 9px, its chips max-width 100%, height 44px, font-size 13px
.mini-finder left 5%; top 50%; width 90%; height 76px; padding 10px; radius 18px;
       transform translateY(-50%) · __field gap 12px width 48% height 56px
       its icon-button 56×56px radius 13px, img 27×27px · placeholder 20px
.country--static gap 8px; width auto; height 34px; padding 0 8px
       its icon 28×28px · its label 18px
.showcase single-column grid (areas title-one/figure-one/title-two/figure-two); gap 0;
       height auto; padding 0 0 var(--mobile-section-gap); children static width 100%
.showcase__title max-width 10ch; font-size clamp(44px,12vw,66px); line-height .92
.showcase__title--second max-width 13ch; margin-top var(--mobile-section-gap)
.showcase__figure height auto; margin-top clamp(30px,8vw,42px); aspect-ratio 4/3;
       radius clamp(24px,8vw,34px)

── EXTRA-NARROW: @media (max-width:360px)
.hero__aside grid-template-columns 1fr; gap 24px
.finder__field width calc(100% - 106px)
.expert__meta max-width 98px
.mini-card left 39%; width 58% · its name/place font-size 10px

═══════════════════════════════════════════════════════════════
9. ONE-TIME ENTRANCE ANIMATION  (hero only)
═══════════════════════════════════════════════════════════════
Deliberately FINITE: two paint frames establish the start state, CSS resolves one
overlapping sequence, then every entrance class/timer/listener is removed. Only after
completion do the ambient hero zoom and the finder demo begin.

Participants: .brand, .nav__link, .nav > .nav__cta, .nav__toggle, .finder, .cta,
.hero__title, .avatar-stack, .hero__lede.

START — `html.entrance-pending`:
  all participants opacity 0
  .brand translateY(calc(-8*var(--k)))
  .nav__link, .nav > .nav__cta, .nav__toggle translateY(calc(-6*var(--k)))
  .hero__title clip-path inset(100% 0 0 0) + translateY(calc(18*var(--k)))
  .finder clip-path inset(5% 0 5% 0 round calc(var(--radius-panel)*var(--k)))
          + translate(-50%,-50%) scale(.98)
  .cta translateX(-50%) translateY(calc(10*var(--k))) scale(.985)
  .avatar-stack translateY(calc(8*var(--k))) scale(.97); transform-origin left center
  .hero__lede translateY(calc(10*var(--k)))
  mobile ≤699px overrides: title translateY(12px); finder translate(-50%,-50%) scale(.99);
    cta translateX(-50%) translateY(7px)
Add `will-change: opacity, transform` to participants under BOTH .entrance-pending and
.entrance-playing.

PLAY — `html.entrance-playing` transitions (duration / --ease-panel / delay):
  .brand            opacity 560ms @80ms   · transform 680ms @80ms
  .nav__link        opacity 460ms         · transform 580ms
        :nth-child stagger delays → 1:130ms · 2:170ms · 3:210ms · 4:250ms
  .nav > .nav__cta  opacity 480ms @280ms  · transform 600ms @280ms
  .nav__toggle      opacity 480ms @130ms  · transform 600ms @130ms
  .hero__title      opacity 680ms @180ms  · transform 900ms @180ms · clip-path 900ms @180ms
  .finder           opacity 720ms @390ms  · transform 920ms @390ms · clip-path 920ms @390ms
  .cta              opacity 520ms @710ms  · transform 700ms @710ms
  .avatar-stack     opacity 500ms @610ms  · transform 680ms @610ms
  .hero__lede       opacity 560ms @720ms  · transform 720ms @720ms

CONTROLLER (IIFE #1 in script.js):
  calm = matchMedia('(prefers-reduced-motion: reduce)')
  Gate on Promise.race([document.fonts.ready, 250ms timeout]) so fallback font metrics are
  never revealed but a slow font never stalls the entrance; fall through to playEntrance
  on both resolve and reject, and call it directly if document.fonts is unavailable.
  playEntrance(): if calm.matches → completeEntrance() immediately. Otherwise subscribe to
  calm changes, then double-requestAnimationFrame → add 'entrance-playing', remove
  'entrance-pending', set a 1700ms completion timer.
  completeEntrance() is idempotent: clear both timers (including
  window.__atlasEntranceFallback), remove both classes, set root.dataset.entrance =
  'complete', dispatch CustomEvent 'atlas:entrance-complete', unsubscribe.

═══════════════════════════════════════════════════════════════
10. FINDER DEMO LOOP + INTERACTIVE CONTROLS  (IIFE #2)
═══════════════════════════════════════════════════════════════
A 5.2s looping "someone is searching" demo the visitor can take over.
Constants: QUERY='Designer'; LOOP=5200; TYPE_STEP=58ms/char; ENTRY=780.
Bail out entirely (`return`) if `#finder` is absent.

Timeline (ms from loop start), driven by requestAnimationFrame — NOT setInterval:
     0  hide all experts + count (remove .is-revealed)
    70  size('collapsed', 667)
   350  hint(true)                    — restore placeholder, fade out typed text
  1060  type()                        — type "Designer" char by char
  1380  size('suggestions', 900)
  1620  reveal role 1
  1790  reveal role 2
  1960  reveal role 3
  2850  hide all roles
  3200  size('results', 1520)
  3370  reveal expert 1
  3570  reveal expert 2
  3770  reveal expert 3
  4270  reveal count
        …wraps at 5200.
`size(state, duration)` sets `--finder-dur: <duration>ms` on the panel and then assigns
`panel.dataset.state`, so each resize gets its own bespoke duration.

Reveal styling:
  .finder .role, .finder .expert, .finder__count
       → transition opacity 180ms linear, transform 180ms linear
  …same three with .is-revealed
       → transition opacity 420ms var(--ease-panel), transform 420ms var(--ease-panel)
  .finder.is-demo .role/.expert/.finder__count → opacity 0; transform scale(.9)
  .finder.is-demo …is-revealed                 → opacity 1; transform none

Typing effect: the real <input> is hidden (`.finder.is-demo .finder__input {opacity:0}`)
and a fake overlay shown instead (`.finder:not(.is-demo) .finder__demo {display:none}`).
  .finder__demo  absolute left 83, top 18.5; display block; white-space pre;
                 pointer-events none; 26/500/1 --track-tight; white
  .finder__demo-hint, .finder__demo-typed  absolute 0,0; white-space pre
  .finder__demo-hint  opacity .4; transition opacity 300ms linear; .is-hidden → opacity 0
  .finder__demo-typed transition opacity 300ms linear; .is-out → opacity 0
  .finder__demo-typed .char  opacity 0; transition opacity 120ms linear;
                             .char.is-in → opacity 1
type() appends one `<span class="char">` per letter and schedules `.is-in` at
index * 58ms. type(true) renders every char already `.is-in`.

Takeover: 'pointerdown', 'focusin', 'keydown' on the panel → stopDemo(): cancel the rAF,
clear timers, remove .is-demo, set panel.dataset.userOwned='true', type(true),
size('full', 420) — so every control in the design stays reachable.

Ambient motion gating:
  enableAmbientMotion()  → add 'continuous-motion' to <html> (starts hero-push) and call
                           video.play() with a caught rejection
  disableAmbientMotion() → remove the class; video.pause()
  applyMotionPreference(fromEntrance): if calm.matches → stop the loop, clear timers,
    remove .is-demo, disableAmbientMotion(), type(true), size('full', 0), return.
    Otherwise return early unless root.dataset.entrance === 'complete', then
    enableAmbientMotion() + startDemo(fromEntrance).
  Call it once on load, again on 'atlas:entrance-complete' ({once:true}), and on every
  calm change.
  startDemo(fromEntrance): no-op if already running or userOwned. Add .is-demo. From the
    entrance → jump straight to the results state and resume(0); otherwise → quiet
    collapsed state and resume(ENTRY).

Visibility: IntersectionObserver threshold 0.15 on the panel pauses the rAF loop when it
scrolls out of view and resumes from ENTRY when it returns.

Real filtering (independent of the demo):
  state = { query: '', country: 'Global' }
  input 'input' → update query → applyFilters()
  applyFilters(): hide any role whose text doesn't contain the query; hide any expert
  unless (country === 'Global' || expert.dataset.country === country) AND the text matches.
  Use the `hidden` property.
  Roles: clicking toggles aria-pressed exclusively (clear all, then set the clicked one
  unless it was already pressed).
  Country listbox: toggle opens/closes via the `hidden` attribute + aria-expanded;
  choosing an option updates the label and aria-selected, closes the menu, refocuses the
  toggle, and re-filters. Close on outside click and on Escape (restoring focus).

═══════════════════════════════════════════════════════════════
11. TABLET NAVIGATION CONTROLLER  (IIFE #3)
═══════════════════════════════════════════════════════════════
Desktop links stay the source of truth; this only changes how they're exposed below
1080px. Bail if .nav, .nav__toggle or #primary-menu is missing.
responsiveMenu = matchMedia('(max-width:1080px)').
setMenu(open, restoreFocus): toggle `.is-open`, set aria-expanded, swap aria-label
between 'Open navigation menu' / 'Close navigation menu', refocus the toggle when
closing with restoreFocus. Toggle click flips it. Clicking any <a> inside closes it.
'pointerdown' outside .nav closes it (only while the media query matches). Escape closes
and restores focus. On media-query change, force-close when back above the breakpoint.

═══════════════════════════════════════════════════════════════
12. SCROLL CHOREOGRAPHY  (IIFE #4)  — see Trap 3, this must fail OPEN
═══════════════════════════════════════════════════════════════
One-time only: each element is unobserved after revealing, so nothing replays on
scroll-back.

Controller order — do not deviate:
  1. Collect targets: all `.feature`, all `.showcase__title`, all `.showcase__figure`.
  2. If there are no features and no titles → return.
  3. If `!('IntersectionObserver' in window) || calm.matches` → return WITHOUT ever
     adding `scroll-reveal-ready`. (Sections stay visible — correct.)
  4. Construct the observer: threshold 0.16, rootMargin '0px 0px -10% 0px'.
  5. NOW add `scroll-reveal-ready` to <html>.
  6. observe() every .feature and every .showcase__title.
  7. Start the mandatory 3000ms safety net (Trap 3d): reveal everything, disconnect,
     remove `scroll-reveal-ready`. Clear this timer when all targets reveal normally.
  Revealing a title also reveals its paired `.showcase__figure` by index.
  When all targets are done, wait 1400ms, then remove `scroll-reveal-ready` and
  unsubscribe — leaving zero residual will-change.
  Also revealAll() immediately if reduced motion switches on mid-session.

Stagger variable:
  .feature, .showcase__title, .showcase__figure { --scroll-order: 0 }
  .feature:nth-child(even), .showcase__title--second, .showcase__figure--second
                                                    { --scroll-order: 1 }

Feature scene — hidden state, ALWAYS prefixed
`html.scroll-reveal-ready .feature:not(.is-revealed)`:
  .feature__media  opacity 0; clip-path inset(9% 0 0 0 round calc(var(--radius-card)*var(--k)));
                   transform translateY(calc(18*var(--k))) scale(.985)
  .feature__title  opacity 0; clip-path inset(0 0 100% 0);
                   transform translateY(calc(11*var(--k)))
  .feature__text   opacity 0; transform translateY(calc(9*var(--k)))
Revealed transitions under `html.scroll-reveal-ready .feature.is-revealed`
(every delay adds `var(--scroll-order) * 90ms`):
  .feature__media  opacity 720ms · transform 920ms · clip-path 920ms @ order*90ms
  .feature__title  opacity 560ms · transform 720ms · clip-path 720ms @ 150ms + order*90ms
  .feature__text   opacity 520ms · transform 680ms                  @ 260ms + order*90ms
  (mobile ≤699px: hidden media transform becomes translateY(14px) scale(.99))

Interior choreography — each element gets its own `--inside-delay`, local to its card,
so every scene reads as a single action:
  payroll:    connector 250 · chip--payroll 320 · mini-card r1 390 · r2 460 · r3 530
  onboarding: chip--legal 280 · chip--labor 360 · chip--data 440 · chip--contract 520
  benefits:   benefit-card 280 · __person 390 · tags .chip:first 480 · :last 560
  experts:    mini-finder 300 · icon-button 410 · placeholder 470 · country--static 540
  each written `calc(<n>ms + var(--scroll-order) * 90ms)`
Interior hidden states (same `:not(.is-revealed)` prefix):
  .chip--payroll        opacity 0; translateX(calc(-14*var(--k)))
  .feature__connector   opacity 0; clip-path inset(50% 0 50% 0)   ← draws out from centre
  .mini-card            opacity 0; translateX(calc(18*var(--k)))
  .feature--onboarding .chip  opacity 0; translateY(calc(10*var(--k)))
  .benefit-card         opacity 0; translateY(calc(14*var(--k))) scale(.985)
  .benefit-card__person and .benefit-card__tags .chip
                        opacity 0; translateY(calc(8*var(--k)))
  .mini-finder          opacity 0; translateY(calc(12*var(--k))) scale(.985)
  .mini-finder .icon-button and .mini-finder__placeholder
                        opacity 0; translateX(calc(-8*var(--k)))
  .country--static      opacity 0; translateX(calc(8*var(--k)))
Interior revealed transition: opacity 460ms + transform 640ms, both @ var(--inside-delay);
the connector instead uses opacity 420ms + clip-path 620ms @ var(--inside-delay).

Showcase story:
  hidden title  → opacity 0; translateY(calc(15*var(--k)))
  hidden figure → opacity 0; clip-path inset(10% 0 0 0 round calc(var(--radius-card)*var(--k)));
                  translateY(calc(20*var(--k))) scale(.985)
                  (mobile ≤699px: translateY(16px) scale(.99))
  revealed title  → opacity 620ms + transform 820ms @ order*100ms
  revealed figure → opacity 760ms + transform 980ms + clip-path 980ms @ 190ms + order*100ms

═══════════════════════════════════════════════════════════════
13. REDUCED MOTION  @media (prefers-reduced-motion: reduce)
═══════════════════════════════════════════════════════════════
  *, *::before, *::after { transition: none !important; animation: none !important }
  Every entrance participant under .entrance-pending → opacity 1; clip-path none;
  transform none — EXCEPT .finder keeps translate(-50%,-50%) and .cta keeps
  translateX(-50%), since those are layout, not animation.
  Every scroll-reveal target → opacity 1; clip-path none; transform none;
  will-change auto.
  JS additionally: no ambient zoom, video paused, finder parked in the 'full' state with
  the query already typed, scroll observer never starts. Toggling the OS setting
  mid-session must take effect live in BOTH directions.

═══════════════════════════════════════════════════════════════
14. QUALITY BAR
═══════════════════════════════════════════════════════════════
- Zero horizontal overflow from 320px to 2560px.
- Every backdrop-filter carries a -webkit-backdrop-filter twin.
- Keyboard: focus-visible outlines, Escape closes both menus, focus returns to triggers,
  the finder demo yields to the user on first focus or keypress.
- The page renders correctly and stays fully readable with JavaScript disabled.
- Preserve the source typos verbatim — they are in the original design:
  "mult-currency", "Belguim", "Hearth Insurance".
- Semantic HTML: one <h1>; <h2> for showcase headlines; <h3> for feature titles;
  decorative images `alt="" aria-hidden="true"`; showcase images get real alt text.
- Before finishing, run all four checks in §0 FINAL ACCEPTANCE TEST.