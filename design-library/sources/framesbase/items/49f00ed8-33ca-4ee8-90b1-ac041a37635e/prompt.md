Build a pixel-faithful recreation of the "Meridial" landing page — a dark cinematic
fintech hero plus a dashboard section, joined by a gesture-triggered morph.
Output index.html, css/style.css, js/main.js.

═══════════════════════════════════════════════════════════════════════════
0. NON-NEGOTIABLE ARCHITECTURE
═══════════════════════════════════════════════════════════════════════════
• The page is EXACTLY ONE SCREEN and NEVER SCROLLS. body{overflow:hidden}.
• Every length is ARTBOARD UNITS × a single scale --u. No fixed px anywhere
  except --u-max and --shell-max. Pattern: calc(<number> * var(--u)).
• Structure uses fractions and auto margins — never fixed offsets.
• BOTH sections are absolutely positioned on the SAME screen, one visible at a
  time. Section 2 is NOT below section 1.

═══════════════════════════════════════════════════════════════════════════
1. ASSETS — exact URLs
═══════════════════════════════════════════════════════════════════════════
VIDEO (1080x1916, 10.04s, seamless loop, silent) — used by BOTH sections:
https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260827_142319_f711d024-2a01-47c3-93d9-1224b1496276.mp4

POSTER / CSS BACKGROUND FALLBACK (9:16 still = frame 0):
https://d2ol7oe51mr4n9.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/9df0fbe6-c369-4a24-b0cc-25d538dbb30b.png

LOGOS (transparent PNG, 10% transparent margin), prefix
https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/ :
intel  1228x636  hf_20260827_140033_f85a881b-6d29-4cae-9c41-c2165f10423e.png
google 1228x540  hf_20260827_140037_4c53cf5c-7e8f-4b73-9844-6ed86f42f123.png
sony   1228x385  hf_20260827_140041_4f5d4a4f-ade9-41f6-8f16-d02b958ecc4e.png
amazon 1228x524  hf_20260827_140044_8dd26bc3-e7b5-4297-86e3-98bd5657a480.png
adobe  1228x475  hf_20260827_140048_263047b9-3ae4-4018-b678-aefebdbb94be.png

FONTS — Google Fonts: Geist 400/500; DM Sans 500 (radar months + chips ONLY).
--font-sans: 'Suisse Intl','Geist','Helvetica Neue',Arial,sans-serif;
Do NOT add a Suisse @font-face.

═══════════════════════════════════════════════════════════════════════════
2. TOKENS (:root)
═══════════════════════════════════════════════════════════════════════════
--artboard-w:1606; --artboard-h:1161; --column-content:1037; --column-panel:569;
--u-max:1.35px;
--u: min(calc(100vh/var(--artboard-h)), calc(100vw/var(--artboard-w)), var(--u-max));
--split-panel: calc(var(--column-panel)/var(--artboard-w));
--shell-max:2560px;
--morph:1; --morph-dur:1000ms; --morph-ease:cubic-bezier(0.33,0,0.2,1);
--gutter:calc(35*var(--u)); --hairline:max(1px, calc(1*var(--u)));
--surface-top:#06080A; --surface-bottom:#191919; --white:#fff;
--text-muted:#c1c1c1; --ink:#111; --ink-strong:#000;
--radius-card:calc(25*var(--u)); --radius-control:calc(3*var(--u));
--radius-glow:calc(10*var(--u));
--track-tight:-0.04em; --track-snug:-0.03em; --track-narrow:-0.02em; --track-wide:0.07em;
Base: border-box everywhere; body bg var(--surface-bottom), colour #fff,
antialiased, text-rendering geometricPrecision; p/h1/ul margin 0; ul no list-style;
a colour inherit; img,svg display block.

═══════════════════════════════════════════════════════════════════════════
3. PAGE SHELL + GLOW/VIDEO LAYER
═══════════════════════════════════════════════════════════════════════════
.page{position:relative; block-size:100svh; overflow:hidden}
.section--hero,.section--signal{position:absolute; inset:0; block-size:100svh}
.section--signal{visibility:hidden}
.signal-shown .section--signal{visibility:visible}
.signal-shown .section--hero{visibility:hidden}
.section--hero{display:flex; min-block-size:100svh; overflow:hidden;
  background:linear-gradient(180deg,var(--surface-top),var(--surface-bottom))}
.hero__grid{position:relative; z-index:1; display:grid;
  grid-template-columns:1fr calc(var(--split-panel)*100%);
  inline-size:100%; max-inline-size:var(--shell-max); margin-inline:auto}
.hero__content,.hero__panel{min-inline-size:0}
.hero__content{display:flex; flex-direction:column;
  padding:calc(46*var(--u)) var(--gutter) calc(59*var(--u))}
.hero__panel{position:relative; display:flex; flex-direction:column;
  justify-content:center; padding-block:calc(46*var(--u)) calc(59*var(--u))}
.hero__glow{position:absolute; inset-block:0; right:0;
  left:calc(50% + min(100%,var(--shell-max))/2 - min(100%,var(--shell-max))*var(--split-panel));
  border-radius:var(--radius-glow) 0 0 var(--radius-glow);
  background:#fff url(<POSTER>) center/cover no-repeat;
  filter:grayscale(1); overflow:hidden}
Both .hero__glow AND .signal__wash contain:
<video class="glow__video" autoplay muted loop playsinline preload="auto"
       poster="<POSTER>"><source src="<VIDEO>" type="video/mp4"></video>
.glow__video{position:absolute; inset:0; width:100%; height:100%;
  object-fit:cover; border-radius:inherit; pointer-events:none}

═══════════════════════════════════════════════════════════════════════════
4. MASTHEAD (identical markup in BOTH sections)
═══════════════════════════════════════════════════════════════════════════
.masthead{flex:none; display:grid; grid-template-columns:1fr auto 1fr;
  align-items:center; gap:calc(24*var(--u))}
Brand = inline SVG (viewBox "0 0 29 24", 12 paths in <g transform="translate(29 24)">,
fill = vertical linearGradient #FFFFFF→#999999, UNIQUE gradient id per section)
+ wordmark "Meridial". gap 9u, mark 29x24u.
.brand__name{font-size:calc(23.12195*var(--u)); line-height:.99473; --track-tight}
Nav (white-space:pre): "Platform ", " Compliance ", "Security", "Company".
gap 44u, 16u/1.1875/--track-snug, opacity .5→1 over .2s.
.btn-nav{justify-self:end; padding:calc(10.37*var(--u)) calc(15.83*var(--u));
  border-radius:var(--radius-control); background:#fff; color:var(--ink);
  16u/--track-snug; hover #e6e6e6}
Burger hidden on desktop.

═══════════════════════════════════════════════════════════════════════════
5. HERO BODY
═══════════════════════════════════════════════════════════════════════════
.hero__body{inline-size:min(calc(842*var(--u)),100%); margin-block:auto;
  margin-inline:auto; text-align:center}
.hero__head{margin-bottom:calc(54*var(--u))}
PILL "Managing $4.2B+ in tracked assets" — SQUARE corners, width 279u, padding 10u,
text-align left, 12u/1.05/--track-wide/uppercase, background
linear-gradient(90deg, rgba(153,153,153,.1), rgba(255,255,255,.2) 45.55%, rgba(153,153,153,.1));
::before inset hairline via padding + mask-composite:exclude, background
linear-gradient(90deg, rgba(152,152,152,.1), rgba(102,102,102,.1)).
TITLE — three <span class="hero__line">: "Clarity, across " / "every portfolio you" / "manage"
.hero__title{inline-size:min(calc((842 - 96*0.04)*var(--u)),100%);
  margin:calc(45*var(--u)) auto 0; font-size:calc(96*var(--u)); font-weight:400;
  line-height:1; --track-tight}
Gradient sits on EACH LINE (a line that animates opacity gets its own stacking
context and cannot show through an ancestor's background-clip:text):
.hero__line{display:block; background-image:linear-gradient(180deg,#fff,#999);
  background-size:100% 300%; background-clip:text; color:transparent}
:nth-child(1){background-position:0 0%} (2){0 50%} (3){0 100%}
SUB "Meridial gives advisors real-time insight across every client's holdings —
without the spreadsheet" — min(calc((472-20*0.04)*var(--u)),100%),
20u/1.4/--track-tight/var(--text-muted).
ACTIONS "Request access"(solid) + "Book a demo"(ghost) — gap 18u, width 372u,
margin-top 54u. .btn 177x62u, radius --radius-control, 18u/--track-narrow.
.btn--solid{background:#fff;color:#000;hover #e6e6e6}
.btn--ghost{border:var(--hairline) solid rgba(255,255,255,.1); hover .35}

═══════════════════════════════════════════════════════════════════════════
6. MARQUEE
═══════════════════════════════════════════════════════════════════════════
.trusted{flex:none; inline-size:min(calc(645*var(--u)),100%); margin-inline:auto}
.trusted__label "Trusted by wealth advisors at" — min(calc((227+12*0.07)*var(--u)),100%),
12u/1.08333/--track-wide/uppercase/centred/nowrap/opacity .4.
.marquee{inline-size:min(calc(606*var(--u)),100%); height:calc(25.351*var(--u));
  margin:calc(44*var(--u)) auto 0; overflow:hidden; opacity:.4;
  mask-image:linear-gradient(90deg,transparent 0%,#000 18%,#000 82%,transparent 100%)}
.marquee__track{--marquee-shift:calc(-644.104*var(--u)); display:flex;
  align-items:center; gap:calc(49*var(--u)); width:max-content; height:100%;
  animation:marquee-scroll 32s linear infinite}
.marquee:hover .marquee__track{animation-play-state:paused}
@keyframes marquee-scroll{from{transform:translate3d(0,0,0)}
  to{transform:translate3d(var(--marquee-shift),0,0)}}
Five logos TWICE (second set alt="" aria-hidden="true").
PADDING COMPENSATION (each PNG has a 10% transparent margin per side):
.marquee__logo{flex:none; object-fit:contain}
--intel {62.377 x 32.301u; margin-inline:calc(-5.181*var(--u))}
--google{92.574 x 40.743u; margin-inline:calc(-7.689*var(--u))}
--sony  {115.125 x 36.160u; margin-inline:calc(-9.563*var(--u))}
--amazon{96.472 x 39.547u; margin-inline:calc(-8.013*var(--u))}
--adobe {112.065 x 43.409u; margin-inline:calc(-9.308*var(--u))}

═══════════════════════════════════════════════════════════════════════════
7. HERO PANEL — two glass cards
═══════════════════════════════════════════════════════════════════════════
.panel{position:relative; inline-size:min(calc(328*var(--u)),100%); margin-inline:auto}
.card{position:relative; width:100%; border-radius:var(--radius-card);
  background:rgba(0,0,0,0.325); backdrop-filter:blur(calc(77.65*var(--u)))}
.card::before — inset hairline, mask-composite:exclude,
  linear-gradient(127.6deg, rgba(0,0,0,.1) 4.14%, rgba(102,102,102,.1) 54.67%)
.card--allocation{height:calc(386*var(--u))}
.card--value{height:calc(264*var(--u)); margin-top:calc(11*var(--u))}
.card__item{position:absolute; left:calc(var(--x)*var(--u)); top:calc(var(--y)*var(--u)); margin:0}
.fig-box{inline-size:calc(var(--w)*var(--u)); text-align:center; white-space:nowrap}
CARD 1 — (--x,--y[,--w]) + inline reveal delay/dur:
 dot filled 28,29 2000/300 | label "Target allocation" 63,34 2000/300
 tl-line 38.5,55 --len:185 2133/333
 stat "60%" 63,78 w72 · "/" 161,78 w13 (--o:.3) · "40%" 200,78 w72 — all 2383/100
 unit "equity" 63,120 w38 · "bonds" 200,120 w40 — 2467/50
 pill--card "Rebalance needed" 63,166 2550/50
 note "Bond allocation drifted 4.2%" 63,203 (--o:.4) 2683/183
 dot filled 28,247 + label "+7.2% YTD" 63,252 — 2117/417
 tl-line dim 38.5,274 --len:12 (--o:.2) 2367/417
 dot hollow 28,290 + label dim "next review: Q3" 63,295 — 2367/417
 tl-line dim 38.5,316 --len:12 2600/383
 dot hollow 28,333 + label dim "next review: Q4" 63,338 — 2600/383
CARD 2:
 label "Whitmore Family Trust" 28,29 2317/350
 value "$18,420,500" 28,70 w178 (32u) 2533/350
 delta "▲ 2.4%" 216,79 w50 (14u) 2533/350
 chart-grid svg 28,121 viewBox"0 0 274 120" preserveAspectRatio=none, --o:.45 2667/367
 chart svg 19,132 viewBox"0 0 290 117", overflow visible 2667/367
   Two paths on ONE bezier spline: fill linearGradient #D9D9D9@.1→#737373@0,
   stroke #FFFFFF@.6 width 1 round cap/join. A MULTI-PEAK trend, not a
   monotonic rising line.
Sub-elements: .dot 22x22u radius 50%, ::after 6x6u white at 8,8;
 --filled bg rgba(255,255,255,.11); --hollow border hairline rgba(255,255,255,.1),
 ::after offset -hairline, opacity .23.
.tl-line{width:var(--hairline); height:calc(var(--len)*var(--u));
 background-image:repeating-linear-gradient(to bottom,#fff 0 calc(2*var(--u)),
 transparent calc(2*var(--u)) calc(8*var(--u)))}
.card__label 12u/1.05/--track-wide/uppercase/nowrap; --dim{--o:.2}
.stat 32u/1/--track-narrow; .stat--sep{--o:.3}
.stat__unit 14u/1/--track-narrow  ← NO white-space:nowrap (it must be able to wrap)
.card__note 14u{--o:.4}; .pill--card{width:152u; padding:7u 8u}
.panel__title "Real-time drift detection" margin-top 96u, 28u, weight 500,
 --track-tight, centred, nowrap
.panel__caption "From target to rebalance — tracked automatically" margin-top 16u,
 16u/1.375/--track-tight/var(--text-muted)

═══════════════════════════════════════════════════════════════════════════
8. LOAD REVEAL
═══════════════════════════════════════════════════════════════════════════
<script>document.documentElement.className+=' js'</script> BEFORE the stylesheet.
.js [data-reveal]:not(.is-revealed){opacity:0; will-change:opacity}
.is-ready [data-reveal]:not(.is-revealed){
  animation:reveal calc(var(--rv-dur,600ms)*var(--rv-scale,1)) linear
            calc(var(--rv-delay,0ms)*var(--rv-scale,1)) both}
@keyframes reveal{from{opacity:0} to{opacity:var(--o,1)}}  ← target --o, NOT 1
LINEAR ramp, OPACITY ONLY.
masthead 70/615 · glow 90/970 · title-1 267/483 · title-2 417/450 ·
title-3 567/467 · sub 833/617 · actions 833/600 · marquee 850/600 ·
eyebrow 1017/50 · panel-note 1675/760 · card-1 1783/350 · card-2 1867/350
JS adds .is-revealed on animationend.

╔═════════════════════════════════════════════════════════════════════════╗
║ 9. SECTION TWO — "SIGNAL"                                               ║
╚═════════════════════════════════════════════════════════════════════════╝
9.1 SHELL
.section--signal{display:flex; align-items:center; min-block-size:100svh;
  overflow:hidden; background:var(--surface-bottom)}
.signal{position:relative; inline-size:100%; max-inline-size:var(--shell-max);
  block-size:calc(var(--artboard-h)*var(--u)); margin-inline:auto}
.signal__wash{position:absolute; inset:0; overflow:hidden;
  background:#fff url(<POSTER>) center/cover no-repeat; filter:grayscale(1)}
  + its own <video class="glow__video"> child. FULL strength.

9.2 MASTHEAD
.signal__masthead{position:absolute; left:calc(34*var(--u)); right:calc(43.34*var(--u));
  top:calc(46*var(--u) - max(0px,(100svh - var(--artboard-h)*var(--u))/2))}
  ← the inset subtraction is REQUIRED: the 1161u shell centres, so below aspect
    1606/1161 it sits inset from the top and the nav would step down at the swap.

9.3 BOARD
.board{position:absolute; top:calc(236*var(--u)); left:0; right:0; margin-inline:auto;
  inline-size:calc(1198*var(--u)); block-size:calc(689*var(--u)); display:flex;
  padding:calc(13*var(--u)) calc(20*var(--u)) calc(15*var(--u)) calc(14*var(--u));
  border-radius:calc(39*var(--u)); background:none}
  ← FIXED in units, never stretched: the cards must stay the same size as the
    hero panel's so the travel is translate-only.
.board__col{display:flex; flex-direction:column; min-inline-size:0}
.board__col--allocation{flex:none; inline-size:calc(328*var(--u)); gap:calc(11*var(--u))}
.board__col--mid{flex:none; inline-size:calc(407*var(--u)); gap:calc(12*var(--u));
  margin-inline-start:calc(13*var(--u))}
.board__col--end{flex:none; inline-size:calc(407*var(--u)); gap:calc(12*var(--u));
  margin-inline-start:calc(9*var(--u))}
EVERY COLUMN SUMS TO 661u:
  col1 386+11+264 · col2 264+12+385 · col3 264+12+385
.board-card{position:relative; flex:none; border-radius:calc(25*var(--u));
  background:rgba(0,0,0,0.325); backdrop-filter:blur(calc(77.65*var(--u)))}
.board-card::before — identical inset hairline to .card::before.
.bc__item{position:absolute; left:calc(var(--x)*var(--u)); top:calc(var(--y)*var(--u)); margin:0}
.bc__item--end{left:auto; right:calc(var(--x)*var(--u))}
.board-card .card__note--bright{opacity:1}
.board-card .trend{inline-size:calc(290*var(--u)); block-size:calc(117*var(--u));
  overflow:visible}   ← 290 not 260: it is the hero's card arriving.

9.4 COLUMN 1 (328u) — the two hero cards, .bc__item, NO --rv-delay
(they arrive by travelling, not by revealing).

9.5 COLUMN 2, CARD "composition" (407 × 264u)
  "PORTFOLIO COMPOSITION" 28,29
  stat "58%" 28,75 · "34%" 161,75 · "8%" 292,75
  unit "Equities" 28,118 · "Bonds" 161,118 · "Cash &amp; alt" 292,118
  <div class="bars" style="--y:161"> → 3 bars --w:198.63 | 105.22 | 28.52
  "LAST REBALANCED: 12 DAYS AGO" 28,227
.bars{position:absolute; top:calc(var(--y)*var(--u)); left:calc(18.02*var(--u));
  right:calc(45.8*var(--u)); display:flex; block-size:calc(37*var(--u))}
.bars__bar{flex:var(--w) 1 0; background:#fff}
.bars__bar:nth-child(2){opacity:.4}  :nth-child(3){opacity:.2}
.bars__bar + .bars__bar{margin-inline-start:calc(5.9*var(--u))}
.bars__bar:last-child{margin-inline-start:calc(4.91*var(--u))}

╔═════════════════════════════════════════════════════════════════════════╗
║ 9.6 CARD "ADVISOR ACTIVITY" — USE THIS CODE VERBATIM. DO NOT REDESIGN.  ║
║                                                                         ║
║ This card has failed twice. The cause both times: a competing           ║
║ `.radar{position:absolute; left:…}` rule overriding the right-anchor,   ║
║ which slides the radar over the figure column.                          ║
║                                                                         ║
║ THE GEOMETRY: the 407u card is two bands that TILE EXACTLY at x=122u.   ║
║   left band  28u → 122u   (a 94u text column: 28 + 94 = 122)            ║
║   right band 122u → 397u  (the 275u radar: 407 − 10 − 275 = 122)        ║
║   overlap MUST be exactly 0.                                            ║
║                                                                         ║
║ RULES:                                                                  ║
║  1. The radar is anchored with `right`, NEVER `left`.                   ║
║  2. Do NOT write any other rule that sets `left` on .radar.             ║
║  3. `.bc__stack` caps the two long labels at 94u so they WRAP.          ║
║  4. `.stat__unit` must NOT carry white-space:nowrap.                    ║
║  5. "Risk profile" is short and takes NO .bc__stack.                    ║
╚═════════════════════════════════════════════════════════════════════════╝

── HTML ──────────────────────────────────────────────────────────────────
<article class="board-card board-card--activity">
  <p class="bc__item card__label" style="--x:28; --y:26">Advisor activity</p>
  <p class="bc__item card__label card__label--dim bc__item--end"
     style="--x:29; --y:26">full history</p>

  <p class="bc__item stat"       style="--x:28; --y:69">218</p>
  <p class="bc__item stat__unit bc__stack" style="--x:28; --y:113">Portfolios reviewed</p>
  <p class="bc__item stat"       style="--x:28; --y:176">35</p>
  <p class="bc__item stat__unit bc__stack" style="--x:28; --y:220">Rebalances triggered</p>
  <p class="bc__item stat"       style="--x:31; --y:284">74</p>
  <p class="bc__item stat__unit" style="--x:28; --y:328">Risk profile</p>

  <div class="radar">
    <svg viewBox="0 0 275 250" aria-hidden="true" focusable="false">
      <g class="radar__rings" transform="translate(35.5 25)">
        <path d="M 100 0 L 178.183 37.651 L 197.493 122.252 L 143.388 190.097 L 56.612 190.097 L 2.507 122.252 L 21.817 37.651 Z"/>
        <path transform="translate(20 20)" d="M 80 0 L 142.547 30.121 L 157.994 97.802 L 114.711 152.078 L 45.289 152.078 L 2.006 97.802 L 17.453 30.121 Z"/>
        <path transform="translate(40 40)" d="M 60 0 L 106.910 22.591 L 118.496 73.351 L 86.033 114.058 L 33.967 114.058 L 1.504 73.351 L 13.090 22.591 Z"/>
        <path transform="translate(60 60)" d="M 40 0 L 71.273 15.060 L 78.997 48.901 L 57.355 76.039 L 22.645 76.039 L 1.003 48.901 L 8.727 15.060 Z"/>
        <path transform="translate(81 80)" d="M 20 0 L 35.637 7.530 L 39.499 24.450 L 28.678 38.019 L 11.322 38.019 L 0.501 24.450 L 4.363 7.530 Z"/>
      </g>
      <path class="radar__area2" transform="translate(75 46)"
            d="M 60.5 0 L 0 28.5 L 40.649 90.273 L 51.567 105.149 L 78.366 123 L 123.030 100.190 L 123.030 28.5 Z"/>
      <g transform="translate(39 91)">
        <path class="radar__area1"
              d="M 62.876 14.986 L 0 55 L 78.449 76.525 L 131.5 121 L 115.339 45.957 L 127.218 14.986 L 95.542 0 Z"/>
      </g>
      <g class="radar__months">
        <text x="136.0" y="14">Jan</text>
        <text x="231.5" y="66">Feb</text>
        <text x="251.0" y="151">Mar</text>
        <text x="192.5" y="232">Apr</text>
        <text x="81.0"  y="232">May</text>
        <text x="15.5"  y="149">Jun</text>
        <text x="39.5"  y="62">Jul</text>
      </g>
    </svg>
    <ul class="radar__chips">
      <li style="--y:0">218</li>
      <li style="--y:32">35</li>
      <li style="--y:64">74</li>
    </ul>
  </div>
</article>

── CSS ───────────────────────────────────────────────────────────────────
.board-card--activity{ block-size: calc(385 * var(--u)); }

/* The 94u text column. Its right edge lands on 122u — exactly where the
   radar begins — so the two tile with no overlap. Both labels wrap to two
   lines inside it; without this cap they run the full width of the card and
   the radar is drawn straight over them. */
.bc__stack{
  inline-size: calc(94 * var(--u));
  white-space: normal;
}

/* RIGHT-anchored. `left:auto` is not optional — it cancels .bc__item's left.
   This is the single rule that positions the radar; do not add another. */
.radar{
  position: absolute;
  left: auto;
  right: calc(10 * var(--u));
  top: calc(104 * var(--u));
  inline-size: calc(275 * var(--u));
  block-size: calc(250 * var(--u));
}
.radar > svg{ inline-size:100%; block-size:100%; overflow:visible; }

.radar__rings path{ fill:none; stroke:#383838; stroke-width:1.202; }
.radar__area2{ fill:rgba(255,255,255,0.2); stroke:rgba(255,255,255,0.1); }
/* White, NOT the #4AFAA9 the source file stores — the artboard resolves that
   library variable monochrome. Stored colour is not painted colour anywhere. */
.radar__area1{ fill:none; stroke:var(--white); stroke-width:2; }
.radar__months text{
  fill:#C6C6C6; font-family:'DM Sans', var(--font-sans); font-weight:500;
  font-size:12px; letter-spacing:-0.02em; text-anchor:middle;
}

.radar__chips{ position:absolute; left:calc(120.5*var(--u)); top:calc(25*var(--u)); }
.radar__chips li{
  position:absolute; top:calc(var(--y) * var(--u));
  display:flex; align-items:center;
  padding:calc(2*var(--u)) calc(4*var(--u));
  border-radius:calc(6*var(--u));
  background:#1C1C1C;                     /* first chip: nearly invisible */
  font-family:'DM Sans', var(--font-sans); font-weight:500;
  font-size:calc(12*var(--u)); line-height:1;
  letter-spacing:var(--track-narrow); color:var(--white); white-space:nowrap;
}
.radar__chips li + li{ background:var(--white); color:#0B0B0B; }
──────────────────────────────────────────────────────────────────────────

╔═════════════════════════════════════════════════════════════════════════╗
║ 9.7 CARD "ASSET CLASS" — ALSO USE VERBATIM                              ║
║                                                                         ║
║ Previously broken: the percentage values floated at the top of the card.║
║ CAUSE: the four values are .bc__item and position from the CARD, while  ║
║ the four bars position from the .allocation box (itself a .bc__item at  ║
║ 15.02,176). Two different origins. Do not nest the values inside        ║
║ .allocation and do not re-base their coordinates.                       ║
╚═════════════════════════════════════════════════════════════════════════╝

── HTML ──────────────────────────────────────────────────────────────────
<article class="board-card board-card--assets">
  <p class="bc__item card__label" style="--x:27; --y:26">Portfolio composition</p>
  <p class="bc__item pill pill--card bc__item--end bc__tag"
     style="--x:27; --y:19">Asset class</p>

  <!-- card-relative, one per bar, sitting ~35u above each bar's top edge -->
  <p class="bc__item allocation__value" style="--x:47;  --y:226">13%</p>
  <p class="bc__item allocation__value" style="--x:132; --y:144">34%</p>
  <p class="bc__item allocation__value" style="--x:229; --y:192">23%</p>
  <p class="bc__item allocation__value" style="--x:316; --y:144">34%</p>

  <div class="bc__item allocation" style="--x:15.02; --y:176">
    <span class="allocation__bar" style="--x:0;      --h:56.82"></span>
    <span class="allocation__bar" style="--x:88.5;   --h:144"></span>
    <span class="allocation__bar" style="--x:177;    --h:94.04"></span>
    <span class="allocation__bar allocation__bar--lead" style="--x:286.98; --h:138.45"></span>
    <span class="allocation__tick" style="--x:3.98">Equities</span>
    <span class="allocation__tick" style="--x:94.98">Bonds</span>
    <span class="allocation__tick" style="--x:217.98">Cash</span>
    <span class="allocation__tick" style="--x:293.98">Alternatives</span>
  </div>
</article>

── CSS ───────────────────────────────────────────────────────────────────
.board-card--assets{ block-size: calc(385 * var(--u)); }
.bc__tag{ inline-size: calc(104 * var(--u)); }
.allocation{
  position:absolute;                       /* via .bc__item */
  inline-size: calc(356.98 * var(--u));
  block-size:  calc(172 * var(--u));
}
.allocation__value{
  font-size: calc(20 * var(--u)); line-height:1;
  letter-spacing: var(--track-narrow); color: var(--white);
}
/* Bars grow UP from a shared baseline 27.55u above the box's bottom. */
.allocation__bar{
  position:absolute;
  left: calc(var(--x) * var(--u));
  bottom: calc(27.55 * var(--u));
  inline-size: calc(68.83 * var(--u));
  block-size: calc(var(--h) * var(--u));
  border-radius: calc(12 * var(--u));
  /* Diagonal hatch on near-black. The ramp is SOFT, not switched — the
     artboard's lines are feathered at this scale. */
  background:
    repeating-linear-gradient(-20.209deg,
      rgba(255,255,255,0) 0,
      rgba(255,255,255,0.32) calc(2 * var(--u)),
      rgba(255,255,255,0) calc(4 * var(--u))),
    #0B0B0B;
}
.allocation__bar--lead{ inline-size: calc(70 * var(--u)); background:#D2D2D2; }
.allocation__tick{
  position:absolute; top: calc(160 * var(--u)); left: calc(var(--x) * var(--u));
  font-size: calc(12 * var(--u)); line-height:1;
  letter-spacing: var(--track-narrow); color: var(--white);
}
──────────────────────────────────────────────────────────────────────────

9.8 COLUMN 3, CARD "digest" (407 × 264u)
  "WEEKLY PORTFOLIO DIGEST" 27,29
  pill--card "Rebalance needed" 29,75
  note--bright "Bond allocation drifted 4.2%" 29,118  (opacity 1, not .4)
  digest__detail 27,196:
   "· Bond allocation drifted 4.2% from target<br>· Recommended shift: -3% bonds, +3% equities"
.digest__detail{inline-size:calc(298*var(--u)); font-size:calc(14*var(--u));
  line-height:1.5; letter-spacing:var(--track-narrow); color:#fff; opacity:.4}

9.9 CLOSING LINE — absolutely positioned, NOT in flow
<p class="signal__title"><span data-reveal="signal-title">Every advisor, every
client, one clear signal</span></p>
.signal__title{position:absolute; top:calc(1008*var(--u)); left:0; right:0;
  margin:0; font-size:calc(48*var(--u)); line-height:1;
  letter-spacing:var(--track-tight); text-align:center}
.signal__title > span{display:inline-block;
  background-image:linear-gradient(180deg,#fff,#999); background-clip:text;
  color:transparent}
  ← the wash lives on the SPAN: the wipe masks it, and a masked child cannot
    show through an ancestor's background-clip:text.

╔═════════════════════════════════════════════════════════════════════════╗
║ 10. ANIMATION + TIMING  (this is already correct — do not change it)    ║
╚═════════════════════════════════════════════════════════════════════════╝
10.1 CLASS SEQUENCE (t = 0 is the gesture)
  t=0     add .to-signal
  t=1000  add .signal-shown   (= --morph-dur, read back via getComputedStyle;
          parse "1000ms" vs "1s". At this instant the two sections are
          pixel-identical, which is what makes the swap invisible.)
  t=1020  add .signal-in      (a 20ms TIMER, not rAF: frames are not guaranteed
          when nothing is moving, and the section must be on screen before the
          opacity transitions start or they will not animate.)
  Reverse: remove .signal-in, .signal-shown, .to-signal; clear card transforms.

10.2 DURING THE TRAVEL (0 → 1000ms), all on cubic-bezier(0.33,0,0.2,1)
  a) .morph-ready .panel .card{transition:transform var(--morph-dur) var(--morph-ease);
       will-change:transform}                                 0 → 1000
     (transform written inline by JS — measured, never authored)
  b) .morph-ready .hero__glow{transition:left var(--morph-dur) var(--morph-ease),
       border-radius var(--morph-dur) var(--morph-ease)}      0 → 1000
     .to-signal .hero__glow{left:0; border-radius:0}
  c) .morph-ready .hero__body,.trusted{transition:opacity 330ms var(--morph-ease),
       transform 500ms var(--morph-ease)}
     .to-signal …{opacity:0; transform:translateX(var(--hero-out-x,-12vw))}
  d) .morph-ready .panel__title,.panel__caption{
       transition:opacity 500ms var(--morph-ease) 350ms}      350 → 850
     .to-signal …{opacity:0}
  e) .morph-ready .section--hero .brand,.mainnav,.btn-nav{
       transition:transform 850ms var(--morph-ease) 150ms}    150 → 1000
     .to-signal … translateX(var(--brand-dx / --nav-dx / --cta-dx))
  f) .morph-ready:not(.signal-shown) [data-board-col1]{visibility:hidden}
     .morph-ready [data-board-col1]{position:relative; z-index:1}

10.3 AFTER THE SWAP (relative to .signal-in)
  g) .board{background:none}
     .board::before{content:''; position:absolute; inset:0; border-radius:inherit;
       background:linear-gradient(180deg,var(--surface-top) 0%,rgba(25,25,25,.4) 100%);
       transform-origin:50% 0}
     .morph-ready .board::before{clip-path:inset(0 0 100% 0)}
     .signal-in .board::before{clip-path:inset(0 0 0% 0);
       transition:clip-path 370ms var(--morph-ease) 170ms}   +170 → +540
     ← a separate layer so growing it cannot squash the column on top of it.
  h) .morph-ready [data-reveal='board-mid'],[data-reveal='board-end']{
       animation:none; opacity:0}
     .signal-in …{opacity:1; transition:opacity 200ms var(--morph-ease) 390ms}
                                                              +390 → +590
  i) .morph-ready [data-reveal='signal-masthead']{animation:none; opacity:1}
  j) @property --wipe{syntax:'<percentage>'; inherits:false; initial-value:0%}
     .morph-ready [data-reveal='signal-title']{animation:none; opacity:1; --wipe:0%;
       mask-image:linear-gradient(90deg,#000 0 calc(var(--wipe) - 12.5%),
         transparent var(--wipe))}
     .signal-in [data-reveal='signal-title']{
       animation:signal-wipe 566ms linear 900ms forwards}     +900 → +1466
     @keyframes signal-wipe{from{--wipe:63.25%} to{--wipe:112.5%}}
     ← `forwards` NOT `both`: through the 900ms delay the element keeps its own
       --wipe:0%; `backwards` would show 57% of the line early.

10.4 TIMELINE (ms from gesture)
   0 ──────────────────────────────── 1000  cards travel / glow widens
   0 ─── 330                                hero words fade
   0 ────── 500                             hero words slide
        350 ────── 850                      panel captions fade
     150 ─────────────────────────── 1000   masthead slides
                                     1000   ▲ SWAP      1020 .signal-in
                              1190 ── 1560  board surface wipes down
                                 1410 ─ 1610 columns 2 & 3 fade
                                      1920 ─── 2486  closing line wipes

═══════════════════════════════════════════════════════════════════════════
11. JAVASCRIPT (vanilla IIFE)
═══════════════════════════════════════════════════════════════════════════
1. DURATION — read --morph-dur from getComputedStyle; parse ms/s; default 1000.
2. buildChartGrid() — per [data-chart-grid], append 14 <line>: x = i*21 + 0.25,
   y1=0 y2=120, stroke #FFFFFF, stroke-width 0.5, stroke-dasharray "1 5",
   stroke-opacity 0.3, in the SVG's own coordinate space.
3. measureMarquee() — shift = logos[half].left − logos[0].left; write
   --marquee-shift as negative px (≈644.1u). Re-run on viewport change.
4. Transition() — measure both ends with getBoundingClientRect, write the card
   transform and --brand-dx/--nav-dx/--cta-dx inline, drive §10.1.
   Input (NOT scroll): wheel (preventDefault; 260ms quiet lock clears so a
   trackpad's inertial tail cannot bounce; ignore |deltaY|<4; one gesture = one
   section) · touch (fires once |dy| ≥ 24, then nulls the anchor) · keydown
   (ArrowDown/PageDown/Space/End forward; ArrowUp/PageUp/Home back).
   Read --morph back from the stylesheet rather than measuring the window.
   Re-measure on resize via a rAF-debounced handler.
5. releaseReveals() — animationend (capture) → add .is-revealed, clear will-change.
6. Menu() — burger toggle, aria-expanded, Escape closes, outside click closes.
Add .is-ready on load; .morph-ready once measured.

═══════════════════════════════════════════════════════════════════════════
12. RESPONSIVE
═══════════════════════════════════════════════════════════════════════════
Desktop needs NO breakpoint — a pure scale holding 2560 → ~1024.

TABLET @media (max-width:1023px) and (max-aspect-ratio:5/4)
  --u: min(calc(100vw/917), calc(100vh/1470), var(--u-max));
  .hero__grid{grid-template-columns:100%; align-content:space-between}
    ← space-between, NOT centre (centring puts the burger under its own menu).
  .hero__content{padding-block:calc(40*var(--u)) 0}
  .hero__body{gap:calc(34*var(--u))} .hero__head{margin-block-end:0}
  .trusted{margin-block-start:calc(34*var(--u))}
  .hero__panel{padding-block:calc(30*var(--u)) calc(40*var(--u)); justify-content:flex-start}
  .panel{display:flex; flex-wrap:wrap; justify-content:center; align-items:flex-start;
    gap:calc(11*var(--u)); inline-size:min(calc(667*var(--u)),100%)}
  .panel .card{inline-size:calc(328*var(--u)); flex:none}
  .card--value{margin-block-start:0}
  .panel__title,.panel__caption{flex-basis:100%}
  .panel__title{margin-block-start:calc(34*var(--u))}
  .hero__glow{inset-inline:0; inset-block:auto 0; block-size:calc(578*var(--u));
    border-radius:var(--radius-glow) var(--radius-glow) 0 0}
  .masthead{grid-template-columns:1fr auto}
  .masthead .mainnav,.btn-nav{display:none}  .masthead .burger{display:flex}
  SIGNAL → three rows of two, in flow:
  .section--signal{align-items:flex-start}
  .signal{block-size:auto; display:flex; flex-direction:column; align-items:center}
  .signal__masthead{position:static; align-self:stretch;
    margin-block-start:calc(40*var(--u)); padding-inline:var(--gutter)}
  .board{position:relative; inset:auto; block-size:auto;
    inline-size:min(calc(854*var(--u)),100%); margin-block-start:calc(24*var(--u));
    flex-direction:column; gap:calc(12*var(--u)); padding:calc(14*var(--u))}
    ← `relative` REQUIRED: a static board hands its ::before to the whole signal
      shell. `inset:auto` — top:236u is inert while static, not once positioned.
  .board__col{flex:none; inline-size:100%; flex-direction:row; align-items:flex-start;
    justify-content:center; gap:calc(12*var(--u)); margin-inline-start:0}
  .board__col--allocation{gap:calc(11*var(--u))}
  .board__col--allocation .board-card{inline-size:calc(328*var(--u))}
  .board__col--mid .board-card,.board__col--end .board-card{flex:none;
    inline-size:calc(407*var(--u))}
    ← cards NEVER narrow: their contents sit at fixed --x coordinates, so a
      narrower card draws its own text past its edge. The radar's 122u tiling
      breaks the moment the card is not 407u.
  .signal__title{position:static; align-self:stretch;
    margin-block-start:calc(24*var(--u)); padding-inline:var(--gutter)}
  Travel adapted — the glow grows UPWARD (it entered from the bottom):
  .morph-ready .hero__glow{transition:block-size var(--morph-dur) var(--morph-ease),
    border-radius var(--morph-dur) var(--morph-ease)}
  .to-signal .hero__glow{left:0; block-size:100%; border-radius:0}

MOBILE @media (max-width:599px), (max-height:479px) and (max-width:1023px)
  --u: min(calc(100vw/866), calc(100vh/1450), var(--u-max));
  --gutter:calc(14*var(--u));  --rv-scale:0.6;
  .hero__grid{grid-template-rows:1fr auto; align-content:stretch}
  .hero__content{padding-block:calc(30*var(--u)) calc(40*var(--u))}
  .hero__body{gap:calc(26*var(--u))} .trusted{margin-block-start:calc(26*var(--u))}
  .hero__panel{padding-block:calc(24*var(--u)) calc(28*var(--u))}
  .hero__glow{block-size:calc(556*var(--u))}
  .panel__title{margin-block-start:calc(26*var(--u))}
  .hero__title{font-size:calc(72*var(--u))}  .signal__title{font-size:calc(40*var(--u))}
  .board{padding:calc(8*var(--u)); gap:calc(8*var(--u));
    margin-block-start:calc(18*var(--u)); inline-size:min(calc(838*var(--u)),100%)}
  .board__col,.board__col--allocation{gap:calc(8*var(--u))}
  .signal__masthead{margin-block-start:calc(30*var(--u))}
  .signal__title{margin-block-start:calc(18*var(--u))}
  .menu{inset-block-start:calc(96*var(--u))}

MENU (tablet/mobile): fixed panel below the masthead; surface is the card's own —
rgba(0,0,0,.325) over a backdrop blur, 10% gradient hairline, 25u radius.

REDUCED MOTION @media (prefers-reduced-motion:reduce)
  .marquee__track{animation:none}
  *,*::before,*::after{transition-duration:.01ms !important}
  .js [data-reveal]{opacity:1}  .is-ready [data-reveal]{animation:none}
  .morph-ready [data-reveal='board-mid'],[data-reveal='board-end'],
    [data-reveal='signal-masthead']{opacity:1}
  .morph-ready [data-reveal='signal-title']{--wipe:112.5%}
  .morph-ready .hero__glow{transition:none}
  .morph-ready .panel{transform:none !important}

═══════════════════════════════════════════════════════════════════════════
13. ACCEPTANCE CHECKS — run these in the console before declaring done
═══════════════════════════════════════════════════════════════════════════
□ ADVISOR CARD — paste and confirm all three read 122 / 122 / 0:
    const c=document.querySelector('.board-card--activity').getBoundingClientRect();
    const r=document.querySelector('.board-card--activity .radar').getBoundingClientRect();
    const s=document.querySelector('.board-card--activity .bc__stack').getBoundingClientRect();
    const u=c.width/407;
    console.log({stackRight:((s.right-c.left)/u).toFixed(1),
                 radarLeft:((r.left-c.left)/u).toFixed(1),
                 overlap:((s.right-r.left)/u).toFixed(1),
                 radarRightGap:((c.right-r.right)/u).toFixed(1)});
    → stackRight 122.0 · radarLeft 122.0 · overlap 0.0 · radarRightGap 10.0
    If radarLeft is ~10, the radar is anchored with `left` — fix rule 1.
□ "Portfolios reviewed" and "Rebalances triggered" wrap to two lines; "Risk
  profile" does not.
□ ASSET CARD — the four % values sit directly above their own bars, inside the
  lower half of the card. None near the title.
□ Board is exactly 1198×689u, centred, top 236u. Every column measures 661u.
□ Page never scrolls; no scrollbar in either axis.
□ Video 1080x1916, ~10.04s, looping with no visible snap.
□ Marquee cycle ≈644.1u; glyph gaps = 49u.
□ Title gradient reads as ONE wash across all three lines.
□ Closing line arrives by a left-to-right soft-edged wipe, never a fade.
□ At 390x844 the whole composition fits one screen with no overflow.
□ Nothing in fixed px except --u-max and --shell-max.