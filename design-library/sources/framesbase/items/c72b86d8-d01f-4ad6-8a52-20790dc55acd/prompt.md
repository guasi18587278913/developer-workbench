Build a single static web page — one HTML file, one CSS file, one JS file — reproducing the
"Axiom — Cloud Observability" landing page EXACTLY to the spec below. Every number is literal;
do not round, re-derive, or "clean up" values. No framework, no build step, no CDN.


=============================================================
0. THE THREE THINGS THAT GO WRONG. FIX THESE FIRST.
=============================================================
Previous attempts at this spec failed in exactly three ways. Read all three before writing code.

--- FAILURE 1: the responsive architecture was never built. ---
SYMPTOM: at a ~1000px-wide window the navbar still shows five inline links and a Login button
  with no hamburger, and ALL the type — navbar worst of all — is microscopic (~8.5px).
CAUSE: the build applied the desktop artboard downscale at every width. The page is a 1800x2612
  artboard scaled by scale = paintableWidth / 1700.406. At 1009px paintable that scale is
  0.5934, so authored 14.268px navbar type lands on screen at 14.268 x 0.5934 = 8.5px.
FIX: the 1280px breakpoint in section 7 is MANDATORY, not optional polish. Below it both
  sections CANCEL the scale with transform: scale(calc(1 / var(--artboard-scale))) and lay
  themselves out in real device pixels, the inline nav links move into a closed drawer, and
  .nav-toggle becomes visible. Verified on the reference build at 1009px paintable:
  architecture TABLET, navToggle visible, drawer visibility hidden, nav link font 14.268px
  rendering at its true 14.268px because the two scales cancel.

--- FAILURE 2: the partner rail's right edge is visibly cut. ---
SYMPTOM: a logo at the right end of the "Trusted by engineering teams globally" row is sliced
  off against a hard edge instead of dissolving out.
CAUSE: .partner-fade--right was omitted, not right-anchored, or sized wrong. That fade is
  LOAD-BEARING, not decoration. The rail image is 1252.026 wide inside a 612.268 window and
  animates translateX(0) -> translateX(-650.766px). Because 1252.026 - 650.766 = 601.26, which
  is 11.008px LESS than the 612.268 window, the last ~11px of the strip is genuinely EMPTY at
  the end of every 18s cycle, and the sequence restart is a jump, not a seam-free wrap. The
  right fade is what makes both invisible.
FIX: build the fades to the exact geometry in section 5 and assert the coverage test in
  section 12. Do NOT "fix" the rail by changing 650.766, 1252.026, 612.268 or the 18s duration
  — those are authored values. Cover the tail; do not re-cut the rail.

--- FAILURE 3: the hero is not one viewport tall. ---
SYMPTOM: a gap of sky below the fold, or the hero overflowing a short window.
CAUSE: clamping the hero height. Measured on the unfixed reference build: at 1425x1440 the hero
  was 961.8px = 66.8% of the viewport (478px short); at 1425x700 it was 754.2px = 107.7%; at
  1009x768 it was 647.6px = 84.3%.
FIX: the [100VH] lines in sections 3, 5, 7, 8 and 11. The hero band is EXACTLY 100vh at every
  width and height, with no minimum and no maximum.

Two standing constraints govern everything else:

  [100VH]  Lines so marked enforce failure-3's fix.
  [FROZEN] EVERY other piece of UI is unchanged, pixel for pixel. Reproduce verbatim.

If a [100VH] instruction seems to require altering a [FROZEN] element, you have misread it:
the hero BAND changes height; the hero's CONTENTS are never restyled.


=============================================================
1. [FROZEN] THINGS THAT MUST NOT CHANGE
=============================================================
Do not restyle, resize, recolour, reposition, re-crop, replace, "improve", "modernise",
"clean up", or regenerate ANY of the following. They are already correct:

  * THE NAVBAR LOGO. Both marks stay exactly as supplied:
      - a.brand-mark   -> assets/brand-mark.svg      left:84.924px  top:85.359px
                          42.434 x 42.434, img width:100% height:100% display:block
      - a.wordmark     -> assets/axiom-wordmark.svg  left:788.123px top:93.441px
                          79.152 x 19.706, img width:100% height:100% display:block
    Use the supplied SVG files byte-for-byte. Do NOT redraw them, do NOT substitute live text
    "axiom." for the wordmark, do NOT swap in an icon font or an inline <svg> you author, do
    NOT recolour or filter them, do NOT change either box's coordinates or dimensions, and do
    NOT alter their responsive rules in section 7. If the files are missing, STOP and ask —
    do not improvise a replacement.
  * The rest of the navigation: .nav-left, .nav-right, .nav-links, .login-button, .nav-toggle,
    .nav-drawer, and all their coordinates, colours, blurs and radii.
  * The headline's two-overlaid-node construction and all its type metrics.
  * .hero-copy > p, .trial-button, .hero-dots.
  * .insight-card and .diamond-grid in full.
  * .trusted-block, .partner-strip, .partner-fade and the 18s rail animation.
  * .hero-divider, .carousel-controls, .carousel-button.
  * The entire problem section: kicker, divider, heading, four cards, both captions, every
    illustration coordinate.
  * All fonts, sizes, weights, line-heights, letter-spacings, colours and radii anywhere.
  * The entrance-motion timeline (section 10) — every duration, delay and easing.
  * All asset URLs (section 2).

The only things that differ from a naive build are the [100VH] items and the correct
construction of failures 1 and 2 above. Nothing else.


=============================================================
2. ASSETS  [FROZEN]
=============================================================
REMOTE (use verbatim — live CloudFront assets):

  Hero background video — 10s, 1440x1440, silent, seamless cloud loop:
  https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260827_000114_3a4353ea-66bd-4c61-afe8-db78a4495313.mp4

  Hero cloud still (2048x2048) — the video's fallback plate:
  https://d2ol7oe51mr4n9.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/bb93fb3b-7156-469c-8d7d-d48c4adcf876.png

  Hero cloud desktop plate (1254x1254) — atmosphere-only variant, >=1280px:
  https://d2ol7oe51mr4n9.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/60fdb0d8-1e5e-4e7b-ace7-50b782304c5b.png

  Card illustration A — "Distributed nodes converging into a server" (transparent PNG):
  https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260827_000149_54b3763c-dd74-44a1-9678-dcf83880d28d.png

  Card illustration B — "Infrastructure and server visibility diagram" (transparent PNG):
  https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260827_000152_2c23e513-b00b-46b0-8be7-b09ffad2bb4d.png

  Card illustration C — "Network connections breaking at a bottleneck" (transparent PNG):
  https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260827_000158_92c0c95f-dead-4c0b-a911-7c4b39530270.png

LOCAL, required in assets/ (vector — must be supplied, cannot be generated from text):
  brand-mark.svg        square mark, 42.434px                 <- NAVBAR LOGO, see section 1
  axiom-wordmark.svg    "axiom." wordmark, 79.152 x 19.706    <- NAVBAR LOGO, see section 1
  partner-logos.svg     THE RAIL. Authored as
                          <svg preserveAspectRatio="none" overflow="visible"
                               style="display:block" width="1252.03" height="25.6219"
                               viewBox="0 0 1252.03 25.6219" fill="none">
                        containing the Intel / Google / Sony / Amazon / Adobe wordmarks laid
                        out left to right and then repeated, in flat #C2C2C2 paths. Its
                        intrinsic 1252.026 x 25.622 and its preserveAspectRatio="none" both
                        matter — see failure 2 and section 5.
  card-grid.svg         faint technical grid, 809.466 x 525.446
  arrow-prev.svg, arrow-next.svg   16.165px chevrons

FONTS, local in assets/fonts/, via @font-face, font-display: swap:
  geist-mono-regular.ttf       -> "Geist Mono" 400 normal
  geist-mono-medium.ttf        -> "Geist Mono" 500 normal
  playfair-display-italic.ttf  -> "Playfair Display" 400 italic
  aeonik-trial-regular.woff2   -> "Aeonik TRIAL" 400 normal
  aeonik-trial-bold.woff2      -> "Aeonik TRIAL" 700 normal
  NOTE: Aeonik TRIAL's charset covers only A-Z a-z 0-9 space comma hyphen period. The slash in
  "Login / Sign in" intentionally falls through the rest of the stack per-glyph. Do not fix it.
  Aeonik TRIAL is a trial licence — do not redistribute it publicly. Free substitutes: Inter or
  Manrope for Aeonik; Geist Mono and Playfair Display are both on Google Fonts.

Stacks:
  --aeonik: "Aeonik TRIAL", "Aeonik", "Helvetica Neue", Arial, sans-serif;
  mono: "Geist Mono", monospace       italic accent: "Playfair Display", Georgia, serif


=============================================================
3. ARCHITECTURE AND THE TYPE SCALE
=============================================================
ONE fixed 1800 x 2612 px artboard, uniformly scaled to the viewport by JS.
  scale = document.documentElement.clientWidth / 1700.406
Desktop (>=1280px) renders that artboard verbatim, absolutely positioned. Below 1280px both
sections CANCEL that scale and re-lay out in real device pixels as CSS grids.

The artboard is WIDTH-driven; the hero's HEIGHT is driven independently to the viewport.
Keep those two ideas separate — conflating them is failure 3.

*** THE TYPE SCALE IS NOT A BUG. *** Above 1280px every glyph scales with viewport WIDTH,
because the whole artboard does. Authored px are NOT device px there. Reference build,
measured:

  viewport   paintable   scale     nav link + login    trusted label   hero p    h1 mono / italic
  1920x1080    1905     1.1203        15.98px            15.85px       18.11px    73.39 / 82.41px
  1440x900     1425     0.8380        11.96px            11.85px         —              —
  1024x768     1009     0.5934     ARCHITECTURE SWITCHES — see below

  All from one authored 14.268px nav rule. If your navbar type does not track the viewport
  this way above 1280px, the artboard transform is wrong.

  At 1024x768 the reference build reports architecture TABLET, .nav-toggle display != none,
  .nav-drawer visibility hidden, and .nav-links a computed font-size 14.268px rendering at a
  true 14.268px because the artboard scale and its inverse cancel. A build showing five inline
  links and 8.5px type at this width has skipped section 7 entirely — that is failure 1.

DOM skeleton:
  body > .site-shell#site-shell > main.artboard#artboard
    > .page-surface (aria-hidden)
    > header.hero#home
    > section.problem#problem
  <script src="js/script.js"></script> at end of body.

<head>, in this order:
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta name="description" content="Axiom cloud observability platform">
  <title>Axiom — Cloud Observability</title>
  An INLINE blocking script (before the stylesheet):
      document.documentElement.classList.add("motion-ready");
      window.__motionFallback = window.setTimeout(function () {
        document.documentElement.classList.remove("motion-ready");
      }, 5000);
  <link rel="stylesheet" href="css/style.css">
  <noscript><style>.motion-ready * { animation: none !important; }</style></noscript>

:root custom properties:
  --ink: #000e23;  --stage: #000c1e;
  --artboard-width: 1800;  --artboard-height: 2612;
  --hero-offset: 0px;
  --hero-top-shift: 0px;
  --hero-content-scale: 1;              /* [100VH] the ONLY new property; see section 11 */
  --hero-title-size: 65.512px;
  --hero-title-leading: 1.1;
  --hero-title-line: calc(var(--hero-title-size) * var(--hero-title-leading));
  --problem-heading-shift: 0px;  --problem-card-shift: 0px;
  --problem-card-scale: 1;  --problem-caption-shift: 0px;
  --aeonik: (stack above)
  --entrance-ease: cubic-bezier(0.22, 1, 0.36, 1);
  --entrance-ease-soft: cubic-bezier(0.16, 1, 0.3, 1);
  --entrance-shift: 22px;               /* 14px at max-width:475px */
JS also writes --artboard-scale, --viewport-width, --hero-content-scale at runtime.


=============================================================
4. BASE / RESET  [FROZEN]
=============================================================
  * { box-sizing: border-box }
  html { scroll-behavior: smooth; background:#fff; scrollbar-gutter: stable; }
     (scrollbar-gutter is load-bearing: the artboard scales off paintable width, so a
      mid-resize scrollbar would feed back into its own scale.)
  body { margin:0; min-width:320px; overflow-x:hidden; background:#fff; }
  ::selection { color:#fff; background:#2372ae; }
  p,h1,h2,h3,span,em { user-select: text }
  img { -webkit-user-drag:none; user-select:none }
  a,button { -webkit-tap-highlight-color: transparent }
  .site-shell { position:relative; margin:0 auto; width:100%; height:100vh; overflow:hidden;
                background:#fff }
  .artboard   { position:absolute; inset:0 auto auto 0; width:1800px; height:2612px;
                overflow:hidden; transform-origin:top left; background:#fff }
  .page-surface { position:absolute; z-index:0; left:52.592px; top:50px;
                  width:1700.406px; height:3570.481px; background:#fff }
  .hero, .problem { position:absolute; inset:0 }


=============================================================
5. SECTION 1 — HERO (desktop artboard geometry)
=============================================================
MARKUP, in this order inside <header class="hero" id="home">:

  <div class="hero-sky" aria-hidden="true">
    img.cloud-layer.cloud-layer--wide                     src=<hero cloud still> alt=""
    img.cloud-layer.cloud-layer--wide.cloud-layer--shift  src=<hero cloud still> alt=""
    img.cloud-layer.cloud-layer--computer                 src=<hero cloud still> alt=""
    video.cloud-layer.cloud-layer--computer.cloud-layer--live
        src=<CloudFront mp4>  muted loop playsinline preload="metadata" aria-hidden="true"
  </div>
  <div class="nav-left" aria-hidden="true"></div>
  <div class="nav-right" aria-hidden="true"></div>
  <div class="hero-panel" aria-hidden="true"></div>
  <nav class="navigation" aria-label="Primary navigation">
    <!-- [FROZEN] navbar logo: exactly these two links, these two SVG files, nothing else -->
    a.brand-mark  href="#home" aria-label="Axiom home" > img src=assets/brand-mark.svg alt=""
    a.wordmark    href="#home" aria-label="Axiom home" > img src=assets/axiom-wordmark.svg
                                                             alt="axiom."
    button.nav-toggle#nav-toggle type=button aria-label="Open menu" aria-expanded="false"
        aria-controls="nav-drawer" > span.nav-toggle-bars aria-hidden > <i><i><i>
    div.nav-drawer#nav-drawer
      > div.nav-links > a href="#problem" x5: Problem, Technology, Pricing, About, Contact
      > a.login-button href="#home">Login / Sign in</a>
  </nav>
  <div class="hero-dots" aria-hidden="true"><i></i><i></i><i></i></div>
  <section class="hero-copy" aria-labelledby="hero-title">
    <h1 id="hero-title"><span>The evolution</span><em>of cloud</em><span>observability</span></h1>
    <p>An intelligent platform to visualize dependencies, predict bottlenecks, and protect your distributed systems from downtime</p>
    <a class="trial-button" href="#problem">Start Free Trial</a>
  </section>
  <aside class="insight-card" aria-live="polite">
    <div class="diamond-grid" aria-hidden="true">
      <i></i><i></i><i class="outline"></i>
      <i></i><i class="outline"></i><i></i>
      <i></i><i></i><i></i>
    </div>
    <h2 id="insight-title">Data Bottlenecks</h2>
    <p id="insight-copy">Microservices and distributed nodes make traditional tracking</p>
  </aside>
  <div class="trusted-block">
    <p>Trusted by engineering teams globally</p>
    <div class="partner-strip"><img src=assets/partner-logos.svg alt="Intel, Google, Sony, Amazon and Adobe"></div>
    <span class="partner-fade partner-fade--left" aria-hidden="true"></span>
    <span class="partner-fade partner-fade--right" aria-hidden="true"></span>
  </div>
  <div class="hero-divider" aria-hidden="true"></div>
  <div class="carousel-controls" aria-label="Insight carousel controls">
    button.carousel-button#previous-slide aria-label="Previous insight" > img arrow-prev.svg alt=""
    button.carousel-button#next-slide     aria-label="Next insight"     > img arrow-next.svg alt=""
  </div>
  NOTE the order: both .partner-fade spans are SIBLINGS of .partner-strip and come AFTER it,
  inside .trusted-block. They are not children of the strip and must not be nested in it.

CSS (desktop):
  /* [100VH] Only these two BAND heights read --hero-offset for sizing. */
  .hero-sky   z-index:1; left:52.592px; top:50px; width:1700.406px;
              height: calc(1147.749px + var(--hero-offset));      /* [100VH] */
              overflow:hidden; background:#2372ae
  .hero-panel left:70.779px;  top:150.027px; width:821.409px;
              height: calc(1029.539px + var(--hero-offset));      /* [100VH] tracks the sky */
              background:#fff

  [FROZEN] the cloud plates:
  .cloud-layer            position:absolute; display:block; max-width:none; object-fit:cover;
                          pointer-events:none
  .cloud-layer--wide      left:-14.914px; top:-380.352px; width:2038.81px; height:2038.81px
  .cloud-layer--shift     top:-208.82px
  .cloud-layer--computer  left:659.754px; top:-9.098px; width:1207.359px; height:1207.359px
  .cloud-layer--live      aspect-ratio:1;
                          mask-image: linear-gradient(to right, transparent 0, #000 8%);
                          opacity:0; transition: opacity 420ms ease
  .cloud-layer--live[data-playing] { opacity:1 }
     (Revealed ONLY once genuinely playing, so blocked autoplay / load failure /
      reduced-motion all land on the identical still underneath, never on a gap. The 8% left
      feather dissolves the video's slightly different blue into the still.)
  @media (min-width:1280px):
     .cloud-layer--wide { content: url(<hero cloud desktop plate>) }
     .cloud-layer--computer { mask-image: linear-gradient(to right, transparent 0 16%, #000 32%) }
  @media (prefers-reduced-motion: reduce) { .cloud-layer--live { transition:none } }

  .nav-left,.nav-right,.hero-panel { position:absolute; z-index:2; border-radius:4.041px }
  .nav-left   left:70.779px;  top:68.188px;  width:821.409px; height:72.745px; background:#fff
  .nav-right  left:902.291px; top:68.188px;  width:832.522px; height:72.745px;
              background: rgba(255,255,255,.1); backdrop-filter: blur(19.55px)
  .navigation { position:absolute; z-index:10; inset:0; pointer-events:none }
  .navigation a, .nav-links { pointer-events:auto }
  .brand-mark,.wordmark,.login-button,.nav-links { position:absolute }
  /* ---- [FROZEN] NAVBAR LOGO — these three rules ARE the logo. Do not touch. ---- */
  .brand-mark  left:84.924px;  top:85.359px; width:42.434px; height:42.434px
  .brand-mark img,.wordmark img { width:100%; height:100%; display:block }
  .wordmark    left:788.123px; top:93.441px; width:79.152px; height:19.706px
  /* ------------------------------------------------------------------------------ */
  .nav-links   left:929.568px; top:91.426px; display:flex; align-items:center; gap:63.652px
  .nav-links a, .login-button {
      color: rgba(255,255,255,.84); font-family:var(--aeonik); font-size:14.268px;
      font-weight:700; line-height:26.158px; letter-spacing:-0.143px;
      text-decoration:none; white-space:nowrap }
      (700 is correct — the frame labels it SemiBold but its stored label widths match Bold.
       14.268px is the AUTHORED size; see the type-scale table in section 3 for what the eye
       actually gets at each width. Do not inflate it to "fix" apparent smallness.)
  .login-button left:1587.307px; top:78.285px; width:136.734px; height:53.158px;
      display:grid; place-items:center; border-radius:2.378px; color:#252525; background:#fff

  /* [100VH] The TOP copy group. Coordinates, type and colour are [FROZEN]; the only addition
     is the guard scale appended to the transform each already had. Both boxes scale about the
     SAME artboard point so they stay locked together at every height. */
  .hero-dots   z-index:4; left:457.74px; top:344.014px; display:flex; gap:8.081px;
               transform: translateY(var(--hero-top-shift)) scale(var(--hero-content-scale));
               transform-origin: 23.25px 0
  .hero-dots i { width:10.103px; height:10.103px; display:block; background:var(--ink) }
  .hero-copy   z-index:4; inset:0; color:#000; text-align:center;
               transform: translateY(var(--hero-top-shift)) scale(var(--hero-content-scale));
               transform-origin: 481.2px 344.014px
                 /* 481.2 = 220.309 + 521.797/2, the copy column's centre; 344.014 = the top
                    of the stack, matching hero-dots' own origin in artboard space. */

  [FROZEN] .hero-copy h1 { position:absolute; left:220.309px; top:407.66px; width:521.797px;
                  margin:0; text-transform:uppercase }
  .hero-copy h1 span { display:block; font-family:"Geist Mono",monospace;
                       font-size:var(--hero-title-size); font-weight:400;
                       line-height:var(--hero-title-leading); letter-spacing:-3.931px }
  .hero-copy h1 span:last-child { margin-top: var(--hero-title-line) }
  .hero-copy h1 em { position:absolute; z-index:1; left:0; top:65.512px; width:100%;
                     font-family:"Playfair Display",Georgia,serif; font-size:73.557px;
                     font-weight:400; line-height:0.95; letter-spacing:-4.413px;
                     text-transform:none }
     CRITICAL: the headline is two overlaid nodes. The mono block reserves an EMPTY middle
     line (that is what span:last-child's margin-top does) and the Playfair italic is
     absolutely positioned into it. Do NOT flatten this into three flowed lines — the air
     above and below "of cloud" comes from the reserved line box.
  .hero-copy > p { position:absolute; left:310.23px; top:656.207px; width:342.506px; margin:0;
                   font-family:var(--aeonik); font-size:16.165px; line-height:1.2;
                   letter-spacing:-0.323px }
  .trial-button { position:absolute; left:381.965px; top:759.258px; width:198.683px;
                  height:56.579px; display:grid; place-items:center; border-radius:2.021px;
                  color:#fff; background:var(--ink); font-family:"Geist Mono",monospace;
                  font-size:14.145px; font-weight:500; line-height:1; letter-spacing:-0.283px;
                  text-decoration:none; text-transform:uppercase }

  /* [100VH] The BOTTOM group pins to the sky's lower edge by taking the FULL offset. The
     rules are unchanged, but the offset is now signed BOTH ways, so this pins correctly
     whether the viewport is shorter or taller than the design height. */
  .insight-card { z-index:4; left:922.498px; top:901.719px; width:312.196px; height:265.72px;
                  margin:0; border-radius:3.031px; color:#fff; background:rgba(255,255,255,.2);
                  backdrop-filter: blur(31.169px);
                  transform: translateY(var(--hero-offset)) }
  .diamond-grid { position:absolute; left:19.196px; top:19.198px; width:54.929px;
                  height:54.929px; display:grid; grid-template-columns:repeat(3,15.474px);
                  grid-auto-rows:15.474px; gap:4.253px }
  .diamond-grid i { width:10.941px; height:10.941px; place-self:center; transform:rotate(45deg);
                    border-radius:0.608px; background:#fff }
  .diamond-grid i.outline { border:0.608px solid #fff; background:transparent }
  .insight-card h2 { position:absolute; left:18.187px; top:176.814px; margin:0;
                     font-family:"Geist Mono",monospace; font-size:20.207px; font-weight:400;
                     line-height:1.1; letter-spacing:-1.212px; text-transform:uppercase }
  .insight-card p  { position:absolute; left:18.187px; top:213.183px; width:231.368px; margin:0;
                     font-family:var(--aeonik); font-size:15.155px; line-height:1.2;
                     letter-spacing:-0.303px }

  /* ================= THE TRUSTED BLOCK AND ITS FADES — see failure 2 ================= */
  /* Geometry inside .trusted-block's own 660.766 x 99.012 box:
        label      y 0      -> 11.9        (its own line box)
        strip      x 42.435 -> 654.703     y 47.482 -> 72.741
        fade left  x 0      -> 113.158     y 22.226 -> 99.012
        fade right x 547.608-> 660.766     y 22.226 -> 99.012
     So each fade overhangs the strip's cut edge — 70.7px on the left, 107.1px on the right —
     and overruns it vertically top and bottom. That is deliberate: the rail's tail gap and
     its restart jump both happen at the right edge, under the right fade. */
  .trusted-block { z-index:4; left:150.595px; top:1058.322px; width:660.766px; height:99.012px;
                   transform: translateY(var(--hero-offset)) }
  .trusted-block > p { position:absolute; left:190.957px; top:0; margin:0; color:#4a4a4a;
                       font-family:"Geist Mono",monospace; font-size:14.145px; font-weight:500;
                       line-height:1; letter-spacing:-0.283px; text-transform:uppercase;
                       white-space:nowrap }
  .partner-strip { position:absolute; left:42.435px; top:47.482px; width:612.268px;
                   height:25.259px; overflow:hidden }
      /* overflow:hidden is what makes it a window; without it the 1252px rail escapes and
         runs across the whole panel. */
  .partner-strip img { position:absolute; inset:0 auto auto 0; width:1252.026px;
                       height:25.622px; opacity:.28;
                       animation: brand-rail-loop 18s linear infinite; will-change:transform }
  @keyframes brand-rail-loop { from{transform:translateX(0)} to{transform:translateX(-650.766px)} }
  @media (hover:hover) { .partner-strip:hover img { animation-play-state: paused } }
  .partner-fade { position:absolute; z-index:2; top:22.226px; width:113.158px; height:76.786px;
                  background: linear-gradient(90deg,#fff 31.7%, rgba(255,255,255,0) 93.304%) }
  .partner-fade--left  { left:0 }
  .partner-fade--right { right:0; transform:rotate(180deg) }
      /* right:0, NOT left:547.608px — it must stay welded to the block's right edge at every
         scale. The 180deg rotation is what reverses the gradient; do not instead author a
         second mirrored gradient, and do not drop the rotation. z-index:2 puts both fades
         OVER the strip — a fade painted under the rail hides nothing. */
  /* ==================================================================================== */

  .hero-divider { z-index:5; left:71.791px; top:1018.918px; width:820.398px; height:1.01px;
                  background: rgba(0,14,35,.12); transform: translateY(var(--hero-offset)) }
  .carousel-controls { z-index:5; left:1620.643px; top:1116.922px; display:flex; gap:2.023px;
                       transform: translateY(var(--hero-offset)) }
  .carousel-button { width:50.517px; height:50.517px; display:grid; place-items:center;
                     padding:0; border:0; border-radius:3.031px; cursor:pointer;
                     background: rgba(255,255,255,.2); backdrop-filter: blur(31.169px) }
  .carousel-button img { width:16.165px; height:16.165px }
  #previous-slide img { transform: rotate(90deg) }
  #next-slide img     { transform: rotate(-90deg) }
  .carousel-button:focus-visible, .trial-button:focus-visible, .navigation a:focus-visible {
      outline: 3px solid #fff; outline-offset: 4px }


=============================================================
6. SECTION 2 — PROBLEM (desktop artboard geometry)  [FROZEN ENTIRELY]
=============================================================
MARKUP inside <section class="problem" id="problem" aria-labelledby="problem-heading">:
  div.section-kicker  > <i aria-hidden></i><span>The Problem</span><i aria-hidden></i>
  div.section-divider aria-hidden
  h2#problem-heading  "The cloud is growing faster<br />than your ability to monitor it"
  article.problem-card.card-one   > img.card-grid card-grid.svg alt=""
                                  + img.card-illustration.illustration-one   src=<CloudFront A>
                                    alt="Distributed nodes converging into a server"
  article.problem-card.card-two   > img.card-grid + img.card-illustration.illustration-two
                                    src=<CloudFront B> alt="Infrastructure and server visibility diagram"
  article.problem-card.card-three > img.card-grid + img.card-illustration.illustration-three
                                    src=<CloudFront C> alt="Network connections breaking at a bottleneck"
  article.problem-card.card-four  > img.card-grid + img.card-illustration.illustration-four
                                    src=<CloudFront A>   (same asset as card-one, reused)
                                    alt="Distributed nodes converging into a server"
  div.card-caption.caption-one > h3 "Data Bottlenecks"
        + p "Microservices and distributed nodes make traditional tracking obsolete"
  div.card-caption.caption-two > h3 "Infrastructure Blind Spots"
        + p "Fragmented metrics and outdated logs obscure the real picture of your server health"

CSS (desktop):
  /* [100VH] Rides the hero's now-signed offset, so it always begins exactly at the hero's
     lower edge — one viewport down, whatever the viewport is. Rule unchanged; only the value
     flowing through it is new. */
  .problem { z-index:6; pointer-events:none; transform: translateY(var(--hero-offset)) }
  .section-kicker, .problem > h2, .card-caption, .card-caption * {
      pointer-events:auto; user-select:text }
  .section-kicker { position:absolute; left:80px; top:1233px; width:1645.252px; height:14px;
      display:flex; align-items:center; justify-content:space-between; color:#4a4a4a;
      font-family:"Geist Mono",monospace; font-size:14.145px; font-weight:500; line-height:1;
      letter-spacing:-0.283px; text-transform:uppercase }
  .section-kicker i { width:10.103px; height:10.103px; display:block; opacity:.3;
                      background:var(--ink) }
  .section-divider { position:absolute; left:47px; top:1280.555px; width:1706px; height:1.01px;
                     background: rgba(0,14,35,.13) }
  .problem > h2 { position:absolute; left:522px; top:1391px; width:756.979px; margin:0;
      color:#000; font-family:"Geist Mono",monospace; font-size:44.748px; font-weight:400;
      line-height:1.1; letter-spacing:-2.685px; text-align:center; text-transform:uppercase;
      transform: translateY(var(--problem-heading-shift)) }
  .problem-card { position:absolute; width:821px; height:538px; overflow:hidden;
                  border-radius:4.041px; background: rgba(224,224,224,.3) }
  .card-one   left:71px;  top:1535px; transform: translateY(var(--problem-card-shift))
                                       scale(var(--problem-card-scale)); transform-origin: top center
  .card-two   left:904px; top:1535px; (same transform)
  .card-three left:71px;  top:2225px; transform: translateY(var(--problem-caption-shift))
  .card-four  left:904px; top:2225px; transform: translateY(var(--problem-caption-shift))
  .card-grid { position:absolute; z-index:1; left:7px; top:7px; width:809.466px;
               height:525.446px; transform: rotate(180deg); opacity:.34 }
  .card-illustration { position:absolute; z-index:2; display:block; object-fit:cover;
                       border-radius:4.041px }
  .illustration-one   { left:97px;  top:103px; width:592px; height:388px }
  .illustration-two   { left:119px; top:88px;  width:574px; height:403px }
  .illustration-three { left:87px;  top:72px;  width:602px; height:394px }
  .illustration-four  { left:109px; top:60px;  width:595px; height:418px }
  .card-caption { position:absolute; color:#000 }
  .caption-one { left:90px;  top:2102px; transform: translateY(var(--problem-caption-shift)) }
  .caption-two { left:941px; top:2105px; transform: translateY(var(--problem-caption-shift)) }
  .card-caption h3 { width:522px; margin:0; font-family:"Geist Mono",monospace; font-size:24px;
                     font-weight:400; line-height:1.1; letter-spacing:-1.44px;
                     text-transform:uppercase }
  .card-caption p  { margin:7px 0 0; font-family:var(--aeonik); font-size:16.165px;
                     line-height:1.2; letter-spacing:-0.323px; opacity:.6; white-space:nowrap }
  @media (prefers-reduced-motion: reduce) {
      html { scroll-behavior:auto } .partner-strip img { animation:none } }


=============================================================
7. RESPONSIVE — TABLET (max-width: 1279px)   *** THIS IS FAILURE 1. DO NOT SKIP IT. ***
=============================================================
Boundary is 1279/1280 on purpose: an earlier 1368px boundary sat on top of the common 1366px
desktop width, so browser zoom flipped the site between two unrelated architectures.

Outside any media query:  [FROZEN]
  .nav-toggle { display:none }
  .nav-drawer { display: contents }   /* wide screens: wrapper is not in the box tree at all */

@media (max-width: 1279px) — HERO:
  .hero { inset:auto; left:52.592px; top:50px; width: var(--viewport-width, 100vw);
          /* [100VH] Below the boundary the hero cancels the artboard scale, so its layout
             pixels ARE device pixels and viewport units mean what they say. A bare
             height:auto is what made it content-sized and short — add a 100vh floor. dvh
             second so mobile browsers exclude the collapsing URL bar; vh is the fallback. */
          height: auto;
          min-height: 100vh;
          min-height: 100dvh;
          /* THIS is the line that restores readable type. Without it the desktop downscale
             persists and every glyph, the navbar most visibly, shrinks with the window. */
          transform: scale(calc(1 / var(--artboard-scale, 1))); transform-origin: 0 0;
          /* [FROZEN] every token below */
          --v: 1vw; --v: min(1vw, 1.5svh);       /* declared twice for no-svh browsers */
          --pad: clamp(14px, 2.1vw, 26px);
          --card-pad: clamp(24px, 3.4vw, 46px);
          --sky-pad: clamp(16px, 2.2vw, 28px);
          --nav-h: clamp(54px, 5.4vw, 72.745px);
          --nav-gap: 9.094px;
          --radius: 4.041px;
          --hero-title-size: clamp(40px, calc(var(--v) * 4.6), 65.512px);
          --hero-title-line: calc(var(--hero-title-size) * var(--hero-title-leading));
             /* re-declared here on purpose: the :root copy is frozen at desktop size */
          --body-size: clamp(15px, 1.25vw, 16.165px);
          display:grid;
          grid-template-columns: minmax(0,1fr) minmax(288px,0.8fr);
          /* [100VH] Final row is flexible, so height beyond what the content needs is
             absorbed there instead of leaving the hero short. Rows 1-5 unchanged. */
          grid-template-rows: var(--nav-h) var(--nav-gap) auto auto auto minmax(auto, 1fr);
          column-gap: var(--pad); padding: var(--pad) }

  /* [FROZEN] The desktop squeeze and the guard scale have nothing to do here — the grid sizes
     itself. This existing reset already neutralises --hero-content-scale; keep it. */
  .hero-copy,.hero-dots,.insight-card,.trusted-block,.hero-divider,.carousel-controls
      { transform:none }

  [FROZEN] from here to the end of the block:
  .nav-left,.nav-right { position:relative; inset:auto; width:auto; height:auto; grid-row:1 }
  .nav-left{grid-column:1} .nav-right{grid-column:2}
  .hero-panel { position:relative; inset:auto; width:auto; height:auto; grid-row:3/-1; grid-column:1 }
  .hero-sky   { position:relative; inset:auto; width:auto; height:auto; grid-row:1/-1;
                grid-column:1/-1; margin: calc(var(--pad) * -1) }   /* bleeds to viewport edges */
  .cloud-layer--wide,.cloud-layer--shift { inset:0; width:100%; height:100%; object-fit:cover;
                                           object-position:50% 20% }
  .cloud-layer--computer { left:38.8%; top:-0.79%; width:73%; height:auto }
  .navigation { display:contents }
  /* ---- [FROZEN] NAVBAR LOGO, tablet placement. Do not touch. ---- */
  .brand-mark,.wordmark { position:relative; inset:auto; z-index:11; grid-row:1; grid-column:1;
                          align-self:center }
  .brand-mark { justify-self:start; margin-inline-start: clamp(12px,1.4vw,18.187px);
                width: clamp(30px,3.1vw,42.434px); height: clamp(30px,3.1vw,42.434px) }
  .wordmark   { justify-self:end; margin-inline-end: clamp(14px,1.6vw,24.153px);
                width: clamp(58px,5.8vw,79.152px); height:auto; aspect-ratio: 79.152/19.706 }
  /* --------------------------------------------------------------- */
  .nav-toggle { display:grid; place-items:center; position:relative; z-index:11; grid-row:1;
                grid-column:2; justify-self:end; align-self:center;
                margin-inline-end: clamp(10px,1.2vw,16px); width:46px; height:46px; padding:0;
                border:0; pointer-events:auto; border-radius:2.378px; background:transparent;
                cursor:pointer; -webkit-tap-highlight-color:transparent }
      /* .navigation switches pointer events off and the existing exception only names links,
         so the button has to opt back in. */
  .nav-toggle-bars { display:grid; gap:4.5px; width:20px }
  .nav-toggle-bars i { display:block; height:2px; background: rgba(255,255,255,.84);
                       transition: transform 180ms ease, opacity 120ms ease }
  [data-nav-open="true"] .nav-toggle-bars i:nth-child(1){ transform: translateY(6.5px) rotate(45deg) }
  [data-nav-open="true"] .nav-toggle-bars i:nth-child(2){ opacity:0 }
  [data-nav-open="true"] .nav-toggle-bars i:nth-child(3){ transform: translateY(-6.5px) rotate(-45deg) }
  .nav-drawer { display:grid; position:absolute; z-index:12;
                top: calc(var(--pad) + var(--nav-h) + 8px); right: var(--pad);
                width: min(300px, calc(100% - var(--pad)*2)); gap:14px; padding:14px;
                border:1px solid rgba(255,255,255,.14); border-radius: var(--radius);
                background: rgba(0,14,35,.9); backdrop-filter: blur(19.55px);
                pointer-events:auto; opacity:0; visibility:hidden; transform: translateY(-6px);
                transition: opacity 180ms ease, transform 180ms ease, visibility 0s linear 180ms }
  [data-nav-open="true"] .nav-drawer { opacity:1; visibility:visible; transform:none;
                                       transition-delay:0s }
  .nav-links { position:relative; inset:auto; display:grid; gap:2px }
  .nav-links a { display:flex; align-items:center; min-height:44px; padding-inline:10px;
                 border-radius:2.378px }
  .nav-links a:hover { background: rgba(255,255,255,.08) }
  .login-button { position:relative; inset:auto; width:100%; height:48px }
  .hero-dots { position:relative; inset:auto; grid-row:3; grid-column:1; justify-self:center;
               margin-top: var(--card-pad) }
  .hero-copy { position:relative; inset:auto; grid-row:4; grid-column:1; display:flex;
               flex-direction:column; align-items:center; padding-inline: var(--card-pad);
               margin-top: clamp(22px, calc(var(--v)*3.4), 52px) }
  .hero-copy h1 { position:relative; left:auto; top:auto; width:100%; text-wrap:balance }
  .hero-copy h1 span { letter-spacing: -0.06em }
  .hero-copy h1 em { top: var(--hero-title-size);
                     font-size: calc(var(--hero-title-size) * 1.1228);
                     letter-spacing: -0.06em }
  .hero-copy > p { position:relative; left:auto; top:auto; width: min(100%, 44ch);
                   margin-top: clamp(16px, calc(var(--v)*2.2), 34px);
                   font-size: var(--body-size); letter-spacing:-0.02em }
  .trial-button { position:relative; left:auto; top:auto;
                  margin-top: clamp(18px, calc(var(--v)*2.6), 38px);
                  width:198.683px; min-height:52px; height:auto }
  .hero-divider { position:relative; inset:auto; grid-row:5; grid-column:1; width:auto;
                  margin: clamp(24px, calc(var(--v)*3.6), 54px) var(--card-pad) 0 }

  /* The block narrows to the rail itself here, so the fades stop being inset from the
     block's edges and glue directly to the rail's own cut edges instead — same job, new
     geometry. Reference build at 1009px paintable: block and strip both x 132 w 303.5,
     fades 44px wide at x 132 and x 391.6, all three sharing y 566.9 h 25.3. */
  .trusted-block { position:relative; inset:auto; grid-row:6; grid-column:1; display:flex;
                   flex-direction:column; align-items:center; gap: clamp(14px,1.8vw,22px);
                   width:auto; height:auto; max-width:612.268px;
                   align-self:start;   /* [100VH] keeps it under the divider at its natural
                      height rather than being stretched by the now-flexible final row */
                   margin: clamp(18px, calc(var(--v)*2.6), 34px) auto var(--card-pad) }
  .trusted-block > p { position:relative; left:auto; top:auto; text-align:center }
  .partner-strip { position:relative; left:auto; top:auto; width:100% }
  .partner-fade { top:auto; bottom:0; height:25.259px; width: clamp(44px, 11%, 113.158px) }

  .insight-card { position:relative; inset:auto; z-index:5; grid-row:3/-1; grid-column:2;
                  align-self:end; justify-self:start; display:flex; flex-direction:column;
                  width:auto; height:auto;
                  max-width: min(312.196px, calc(100% - var(--sky-pad)*2 - 104px));
                  min-height:0; margin: var(--sky-pad); padding:19.196px }
      /* the max-width leaves the carousel its corner: two 44px buttons, their gap, margins */
  .diamond-grid { position:relative; inset:auto }
  .insight-card h2 { position:relative; left:auto; top:auto; margin-top: clamp(40px,6vw,82px);
                     font-size: clamp(17px,1.6vw,20.207px); letter-spacing:-0.06em }
  .insight-card p  { position:relative; left:auto; top:auto; width:auto; margin-top:8px;
                     font-size: clamp(13.5px,1.2vw,15.155px); letter-spacing:-0.02em }
  .carousel-controls { position:relative; inset:auto; z-index:5; grid-row:3/-1; grid-column:2;
                       align-self:end; justify-self:end; margin: var(--sky-pad) }
  .carousel-button { width:44px; height:44px }

@media (max-width: 1279px) — PROBLEM:  [FROZEN]
  .problem { inset:auto; left:52.592px;
             top: calc(1197.749px + var(--hero-offset));
             width: var(--viewport-width, 100vw); height:auto;
             transform: scale(calc(1 / var(--artboard-scale, 1))); transform-origin: 0 0;
             --pad: clamp(14px, 2.1vw, 26px);
             --card-gap: clamp(8px, 0.9vw, 12px);
             --row-gap: clamp(34px, 4.1vw, 70px);
             display:grid; grid-template-columns: repeat(2, minmax(0,1fr));
             grid-template-areas: "kick kick" "rule rule" "head head" "c1 c2" "p1 p2" "c3 c4";
             column-gap: var(--card-gap);
             padding: clamp(20px,2.1vw,35.25px) var(--pad) clamp(40px,5vw,88px) }
  .problem > h2,.problem-card,.card-caption { transform:none }
  .section-kicker { position:relative; inset:auto; grid-area:kick; width:auto;
                    letter-spacing:-0.02em }
  .section-divider { position:relative; inset:auto; grid-area:rule; width:auto;
                     margin: clamp(18px,2vw,33.6px) calc(var(--pad) * -1) 0 }
  .problem > h2 { position:relative; left:auto; top:auto; grid-area:head; width:auto;
                  margin-top: clamp(48px,6.4vw,109.4px); font-size: clamp(26px,5.5vw,44.748px);
                  letter-spacing:-0.06em }
  .problem-card { position:relative; inset:auto; width:auto; height:auto;
                  aspect-ratio: 821/538 }
  .card-one{grid-area:c1} .card-two{grid-area:c2} .card-three{grid-area:c3} .card-four{grid-area:c4}
  .card-one,.card-two   { margin-top: clamp(24px,2.7vw,45.6px) }
  .card-three,.card-four{ margin-top: var(--row-gap) }
  .card-grid { left:0.8526%; top:1.3011%; width:98.5951%; height:97.6666% }
  .card-illustration { height:auto }
  .illustration-one   { left:11.8149%; top:19.1450%; width:72.1072%; height:72.1190% }
  .illustration-two   { left:14.4945%; top:16.3569%; width:69.9147%; height:74.9071% }
  .illustration-three { left:10.5968%; top:13.3829%; width:73.3252%; height:73.2342% }
  .illustration-four  { left:13.2765%; top:11.1524%; width:72.4726%; height:77.6952% }
     (Percentages, not insets — an <img> is a replaced element, so width:auto would keep its
      intrinsic size however the box is anchored.)
  .card-caption { position:relative; inset:auto; margin-top: clamp(16px,1.7vw,29px);
                  padding-inline-start: 2.314% }
  .caption-one{grid-area:p1} .caption-two{grid-area:p2}
  .card-caption h3 { width:auto; font-size: clamp(18px,1.9vw,24px); letter-spacing:-0.06em }
  .card-caption p  { white-space:normal; font-size: clamp(14.5px,1.25vw,16.165px);
                     letter-spacing:-0.02em }

@media (prefers-reduced-motion: reduce) { .nav-drawer, .nav-toggle-bars i { transition:none } }


=============================================================
8. RESPONSIVE — STACKED (max-width: 895px)
=============================================================
HERO:
  .hero { --sky-band: clamp(240px, min(41vw, 30svh), 420px);           /* [FROZEN] */
          --hero-title-size: clamp(36px, min(7vw, 9svh), 65.512px);    /* [FROZEN] */
          grid-template-columns: minmax(0,1fr) var(--nav-h);           /* [FROZEN] */
             /* a square the height of the nav row, not an auto box sized to the button plus
                its trailing margin — which is what left the bars off-centre inside it */
          /* [100VH] The sky band is the flexible row here: slack goes into the open sky where
             the machine sits, which is where it belongs. Rows 1-7 unchanged. */
          grid-template-rows: var(--nav-h) var(--nav-gap) auto auto auto auto var(--pad)
                              minmax(var(--sky-band), 1fr) }
  [FROZEN] the rest:
  .hero-panel { grid-row:3/7; grid-column:1/-1 }
  .hero-dots,.hero-copy,.hero-divider,.trusted-block { grid-column:1/-1 }
  .nav-toggle { justify-self:center; margin-inline:0 }
  .cloud-layer--wide,.cloud-layer--shift { object-position: 50% 50% }
  .cloud-layer--shift { top:14% }
  .cloud-layer--computer { left:50%; top:auto;
      bottom: calc(var(--sky-band)/2 - var(--viewport-width,100vw) * 0.627);
      width: calc(var(--viewport-width,100vw) * 1.1); height:auto; translate:-50% 0 }
  .cloud-layer--live { mask-image: linear-gradient(to bottom, transparent 0, #000 8%) }
      (Stacked, the plate overruns both sides and it is the TOP edge that shows — so the
       feather turns downward.)
  .insight-card,.carousel-controls { grid-row:8; grid-column:1/-1 }
PROBLEM:  [FROZEN]
  .problem { grid-template-columns: minmax(0,1fr);
             grid-template-areas: "kick" "rule" "head" "c1" "p1" "c2" "p2" "c3" "c4" }
  .card-two  { margin-top: var(--row-gap) }
  .card-four { margin-top: var(--card-gap) }


=============================================================
9. RESPONSIVE — MOBILE (max-width: 475px)  [FROZEN ENTIRELY]
=============================================================
  :root { --entrance-shift: 14px }
  .hero { --sky-band: clamp(390px, 92vw, 450px);
          --hero-title-size: clamp(29px, min(7vw, 9svh), 65.512px);
          --card-pad: clamp(20px, 5vw, 46px) }
  .insight-card { justify-self:stretch; max-width:none;
                  margin-bottom: calc(var(--sky-pad) + 54px) }
      (Lifted by the CAROUSEL's fixed height, not its own variable height, so the gap holds
       at 10px from 475 down to 320 and through the longer second slide.)
  .insight-card h2 { margin-top: clamp(24px, 7vw, 82px) }
  .cloud-layer--computer { bottom: calc(var(--sky-band) * 0.81
                                        - var(--viewport-width,100vw) * 0.79315);
                           width: calc(var(--viewport-width,100vw) * 1.45) }
  .trusted-block > p { white-space:normal; text-wrap:balance }
  .problem { padding-bottom: clamp(32px, 9vw, 88px) }
  .problem > h2 { margin-top: clamp(36px, 11vw, 109.4px); text-wrap: pretty }
      (`pretty`, not `balance` — it is what pulls a stranded one-word last line back up here.)
  .card-one,.card-two { margin-top: clamp(20px, 6vw, 45.6px) }
  .card-caption { margin-top: clamp(13px, 4vw, 29px) }
  .motion-ready .hero-copy h1 span:first-child,
  .motion-ready .hero-copy h1 em,
  .motion-ready .hero-copy h1 span:last-child { animation-duration: 680ms }


=============================================================
10. ENTRANCE MOTION  [FROZEN ENTIRELY]
=============================================================
Scoped under .motion-ready (set by the inline head script, removed by a 5000ms fallback timer
that script.js clears). The CLOUD ARTWORK IS DELIBERATELY EXCLUDED — it is the static stage.
Use `translate`/`scale`/`clip-path` individual properties, never `transform`, so the layout's
own transform calculations — including the [100VH] ones — stay untouched.

Keyframes:
  entrance-wipe-right : clip-path inset(0 100% 0 0) -> inset(0)
  entrance-wipe-down  : clip-path inset(0 0 100% 0) -> inset(0)
  entrance-nav-content: opacity 0 / translate 0 -12px -> opacity 1 / translate none
  entrance-type       : opacity 0 / clip-path inset(100% 0 0 0) / translate 0 62%
                        -> opacity 1 / inset(0) / none
  entrance-support    : opacity 0 / translate 0 var(--entrance-shift) -> 1 / none
  entrance-action     : opacity 0 / translate 0 16px / scale .975 -> 1 / none / none
  entrance-visual     : opacity 0 / translate 0 var(--entrance-shift) / scale .985 -> 1/none/none
  entrance-rule       : opacity 0 / scale 0 1 -> opacity 1 / scale none

Hero timeline (all `both`):
  .nav-left      entrance-wipe-right   680ms  ease        40ms
  .nav-right     entrance-wipe-right   760ms  ease       110ms
  .hero-panel    entrance-wipe-down    920ms  ease-soft  230ms
  .brand-mark    entrance-nav-content  560ms  ease       150ms      <- logo, timing unchanged
  .wordmark      entrance-nav-content  560ms  ease       220ms      <- logo, timing unchanged
  .nav-links     entrance-nav-content  560ms  ease       240ms
  .login-button  entrance-nav-content  560ms  ease       310ms
  .nav-toggle    entrance-nav-content  560ms  ease       310ms
  .hero-dots     entrance-support      460ms  ease       430ms
  h1 span:first  entrance-type         780ms  ease-soft  500ms
  h1 em          entrance-type         780ms  ease-soft  610ms
  h1 span:last   entrance-type         780ms  ease-soft  720ms
  .hero-copy > p entrance-support      620ms  ease       940ms
  .trial-button  entrance-action       600ms  ease      1080ms
  .hero-divider  entrance-rule         760ms  ease      1100ms  transform-origin: left center
  .insight-card  entrance-visual       820ms  ease-soft 1160ms  transform-origin: center bottom
  .trusted-block entrance-support      620ms  ease      1200ms
  .carousel-controls entrance-support   560ms  ease      1380ms

Problem section HELD until JS adds .problem-is-visible:
  .motion-ready .problem:not(.problem-is-visible) :is(.section-kicker, >h2, .problem-card,
      .card-caption) { opacity:0; translate: 0 var(--entrance-shift) }
  ...:not(.problem-is-visible) > h2 { clip-path: inset(100% 0 0 0) }
  ...:not(.problem-is-visible) .problem-card { scale: .985 }
  ...:not(.problem-is-visible) .section-divider { opacity:0; scale:0 1;
                                                  transform-origin: left center }
Then under .problem.problem-is-visible (all `both`):
  .section-kicker   entrance-support  520ms ease         0ms
  .section-divider  entrance-rule     760ms ease        70ms  transform-origin: left center
  > h2              entrance-type     820ms ease-soft  160ms
  .card-one         entrance-visual   800ms ease-soft  390ms
  .card-two         entrance-visual   800ms ease-soft  480ms
  .caption-one      entrance-support  580ms ease       650ms
  .caption-two      entrance-support  580ms ease       730ms
  .card-three       entrance-visual   760ms ease-soft  760ms
  .card-four        entrance-visual   760ms ease-soft  840ms

@media (prefers-reduced-motion: reduce): for
  .motion-ready .hero :is(.nav-left,.nav-right,.hero-panel,.brand-mark,.wordmark,.nav-links,
      .login-button,.nav-toggle,.hero-dots,.hero-copy h1 span,.hero-copy h1 em,.hero-copy > p,
      .trial-button,.hero-divider,.trusted-block,.insight-card,.carousel-controls),
  .motion-ready .problem :is(.section-kicker,.section-divider,h2,.problem-card,.card-caption)
  set: animation:none !important; clip-path:none !important; opacity:1 !important;
       scale:none !important; translate:none !important;


=============================================================
11. js/script.js — IIFE, "use strict"
=============================================================
Constants (exact):
  CONTENT_LEFT 52.592, CONTENT_TOP 50, CONTENT_WIDTH 1700.406,
  CONTENT_HEIGHT = 2612 - CONTENT_TOP, HERO_HEIGHT 1147.749,
  HERO_COMPOSITION_MIN 900,      // [100VH] guard threshold — NOT a height floor
  DESKTOP_MIN_WIDTH 1024, PROBLEM_SECTION_HEIGHT 970,
  MAX_PROBLEM_GAP_REDUCTION 40, PROBLEM_CARD_HEIGHT 538, MIN_PROBLEM_CARD_SCALE 0.88,
  HERO_TOP_GAP 193.987, HERO_ACTION_GAP 203.081,
  HERO_TOP_GAP_SHARE = HERO_TOP_GAP / (HERO_TOP_GAP + HERO_ACTION_GAP),
  TABLET_BREAKPOINT 1279
  (There is deliberately NO MIN_DESKTOP_HERO_HEIGHT.)
On start: clear window.__motionFallback and null it, so .motion-ready survives.
tabletLayout = matchMedia("(max-width: 1279px)")   // must MIRROR the stylesheet's boundary

fitArtboard(force):
  viewportWidth  = document.documentElement.clientWidth    // NOT innerWidth — excludes scrollbar
  viewportHeight = document.documentElement.clientHeight
  if (!force && width & height unchanged since last fit) return;   // prevents observer feedback
  scale = viewportWidth / CONTENT_WIDTH
  shouldFitDesktopHeight = viewportWidth >= DESKTOP_MIN_WIDTH
  viewportHeroHeight = viewportHeight / scale        // the viewport, in artboard units
  set --artboard-scale = scale, --viewport-width = viewportWidth + "px"
      // published BEFORE the hero is measured: the tablet architecture reads these to cancel
      // this scale and lay itself out in real pixels. Failure 1 is what happens when the
      // stylesheet never consumes them.

  // ***** [100VH] THE FIX — do not reintroduce either clamp *****
  // A naive build reads
  //     Math.min(HERO_HEIGHT, Math.max(MIN_DESKTOP_HERO_HEIGHT, viewportHeroHeight))
  // whose Math.min caps the hero at its 1147.749 design height — measured at 66.8% of a
  // 1440px-tall viewport, 478px short — and whose Math.max floors it at 900 units, measured
  // at 107.7% of a 700px-tall one. Both clamps must be gone.
  fittedHeroHeight = shouldFitDesktopHeight ? viewportHeroHeight : HERO_HEIGHT
  heroOffset   = fittedHeroHeight - HERO_HEIGHT          // signed in BOTH directions
  heroTopShift = heroOffset * HERO_TOP_GAP_SHARE         // same formula, works both ways

  // The composition, not the band, is what cannot survive an arbitrarily short viewport:
  // under ~900 units the CTA would reach the divider (at 1440x600 the button's bottom lands
  // near 605 units against a divider at ~587). Shrink the top copy group instead of
  // shortening the hero. Nothing is restyled — only scaled.
  heroContentScale = shouldFitDesktopHeight
      ? Math.min(1, viewportHeroHeight / HERO_COMPOSITION_MIN) : 1

  if (tabletLayout.matches) {
      // The grid sizes itself against min-height:100dvh there, so measure what it became.
      heroOffset = hero.getBoundingClientRect().height / scale - HERO_HEIGHT
      heroTopShift = 0
      heroContentScale = 1 }

  [FROZEN] problem-section maths, unchanged:
  problemOverflow = shouldFitDesktopHeight
      ? Math.max(0, PROBLEM_SECTION_HEIGHT - viewportHeroHeight) : 0
  problemGapReduction = Math.min(problemOverflow, MAX_PROBLEM_GAP_REDUCTION)
  remainingProblemOverflow = Math.max(0, problemOverflow - problemGapReduction)
  problemCardScale = Math.max(MIN_PROBLEM_CARD_SCALE,
                              1 - remainingProblemOverflow / PROBLEM_CARD_HEIGHT)
  problemCardShift = -problemGapReduction
  problemCaptionShift = problemCardShift + PROBLEM_CARD_HEIGHT * (problemCardScale - 1)

  write --hero-offset, --hero-top-shift, --hero-content-scale,
        --problem-heading-shift (= problemCardShift * 0.5),
        --problem-card-shift, --problem-card-scale, --problem-caption-shift
  shell.style.width = viewportWidth + "px"
  artboard.style.transform =
      `scale(${scale}) translate(${-CONTENT_LEFT}px, ${-CONTENT_TOP}px)`
  if (tabletLayout.matches) {
      stackHeight = hero.rect.height + problem.rect.height
      shell.style.height = stackHeight + "px"
      artboard.style.height = (CONTENT_TOP + stackHeight / scale) + "px"
  } else {
      shell.style.height = ((CONTENT_HEIGHT + heroOffset) * scale) + "px"
      artboard.style.height = "" }

Call fitArtboard() immediately; addEventListener("resize", fitArtboard, {passive:true}).
If ResizeObserver exists: observe document.documentElement -> fitArtboard() (catches the
scrollbar-gutter settling after the first parse-time fit, plus zoom and scrollbar changes that
fire no resize event); and a second observer on hero and problem calling fitArtboard(true)
only when tabletLayout.matches (the hero's height is content-driven there, so the next
section's offset must follow it through webfont swap, drawer toggles and reflow).

[FROZEN] Nav drawer:
  setNavOpen(open): root.dataset.navOpen = "true"/"false"; navToggle aria-expanded =
    String(open); aria-label = open ? "Close menu" : "Open menu". Call setNavOpen(false) at init.
  toggle click -> flip; when opening, focus the drawer's first <a>.
  click inside drawer on an <a> (closest) -> close.
  keydown Escape while open -> close + return focus to toggle.
  document click outside toggle and drawer while open -> close.
  tabletLayout "change" -> setNavOpen(false) + fitArtboard(true).

[FROZEN] Hero video:
  heroVideo = .cloud-layer--live ; calmMotion = matchMedia("(prefers-reduced-motion: reduce)")
  syncHeroVideo(): if calmMotion.matches -> pause() + removeAttribute("data-playing"), return.
    else const started = heroVideo.play();
    if (started) started.then(-> setAttribute("data-playing","")).catch(-> remove it).
  Call once; re-run on calmMotion "change".
  This is the whole reveal mechanism — never set data-playing optimistically.

[FROZEN] Insight carousel:
  insights = [
    { title: "Data Bottlenecks",
      copy: "Microservices and distributed nodes make traditional tracking" },
    { title: "Infrastructure Blind Spots",
      copy: "Fragmented metrics and outdated logs obscure the real picture of your server health" }
  ]
  insightIndex = 0; delegate a document click on .carousel-button (closest);
  showInsight(dir): index = (index + dir + len) % len; write textContent into
  #insight-title and #insight-copy. #next-slide -> +1, otherwise -1.
  Then document.documentElement.dataset.carouselReady = "true".

[FROZEN] Problem-section one-shot entrance:
  target = problem.querySelector(".section-kicker"); lastScrollPosition = window.scrollY.
  revealProblemSection(): if already .problem-is-visible return; add the class; remove the
    scroll listener; disconnect + null the observer.
  armProblemEntry(): movingDown = scrollY > lastScrollPosition + 1; update lastScrollPosition;
    return unless movingDown and not already armed; set armed = true; remove scroll listener;
    if (target.getBoundingClientRect().top <= innerHeight * 0.88) revealProblemSection() and
    return (covers fast scrolls / anchor jumps that outrun the first intersection record);
    else create IntersectionObserver({rootMargin:"0px 0px -12% 0px", threshold:0.01}) that
    reveals on any isIntersecting entry, and observe(target).
  syncProblemEntryMotion(): if calmMotion.matches -> revealProblemSection() and return;
    else if not visible and not armed -> lastScrollPosition = scrollY and
    addEventListener("scroll", armProblemEntry, {passive:true}).
  Call once; re-run on calmMotion "change".
  Intentionally NOT observed until the first DOWNWARD scroll, so a sliver of the section in a
  tall opening viewport cannot fire during the hero entrance.


=============================================================
12. ACCEPTANCE CHECKS — run all three groups
=============================================================
GROUP A — FAILURE 1, the architecture switch. At 1024x768:
    matchMedia('(max-width: 1279px)').matches                       === true
    getComputedStyle(document.querySelector('.nav-toggle')).display !== 'none'
    getComputedStyle(document.querySelector('.nav-drawer')).visibility === 'hidden'
    getComputedStyle(document.querySelector('.nav-links a')).fontSize === '14.268px'
    and that 14.268px must MEASURE 14.268px on screen — the artboard scale and its inverse
    cancel. If the rendered cap-height looks like ~8px, the inverse scale is missing.
  At 1440x900 and 1920x1080 the nav must be five inline links plus the Login button with NO
  hamburger, and .nav-links a must render at 11.96px and 15.98px respectively — matching the
  type-scale table in section 3. A navbar whose size does not move between those two widths
  means the artboard transform is not being applied.

GROUP B — FAILURE 2, the rail and its fades. At 1440x900 and 1920x1080:
    const s  = document.querySelector('.partner-strip').getBoundingClientRect();
    const fl = document.querySelector('.partner-fade--left').getBoundingClientRect();
    const fr = document.querySelector('.partner-fade--right').getBoundingClientRect();
    fl.left <= s.left && fl.right  > s.left      // left cut edge covered
    fr.right >= s.right && fr.left < s.right     // right cut edge covered  <- the failing one
    fl.top  <= s.top  && fl.bottom >= s.bottom   // covered vertically too
  Reference build: leftOverlap 79.2px / rightOverlap 120px at 1920; both edges covered at 1440
  and at 1009 in tablet form. Then WATCH one full 18s cycle at 1440: no logo may ever appear
  hard-cut at either end, and the restart must not be perceptible. Confirm too that
  getComputedStyle('.partner-strip').overflow === 'hidden' and that both fades compute a
  higher stacking position than the rail image.

GROUP C — FAILURE 3, the hero band. At 1440x700, 1440x900, 1440x1440, 1280x1024, 1024x1366,
768x1024, 414x896 and 320x568:
    document.querySelector('.hero-sky').getBoundingClientRect().height
      === document.documentElement.clientHeight          (within 1px)
    document.querySelector('.section-kicker').getBoundingClientRect().top >= 0
  Reference failures that must now read 100%: 1425x1440 -> 961.8px (66.8%);
  1425x700 -> 754.2px (107.7%); 1009x768 -> 647.6px (84.3%).

REGRESSION — diff against a build without these fixes at 1440x900, where the hero already
happened to equal 100vh. At that size the two must be VISUALLY IDENTICAL. Confirm:
  - .brand-mark 42.434x42.434 at (84.924, 85.359) desktop, rendering assets/brand-mark.svg
  - .wordmark 79.152x19.706 at (788.123, 93.441) desktop, rendering assets/axiom-wordmark.svg
  - neither logo recoloured, refiltered, re-cropped, replaced by text, or moved
  - --hero-content-scale computes to exactly 1 at every viewport >= 900 artboard units tall
  - every other section's geometry byte-identical

ALSO:
- On a short desktop viewport (<=780px tall) the CTA never touches .hero-divider, and
  --hero-content-scale is below 1 there.
- The hero video fades in over the identical still only after play() resolves; killing the
  network leaves the still with no visible gap or flash.
- The headline keeps a full empty line box between "The evolution" and "observability", with
  the Playfair italic "of cloud" centred in it, at every width.
- Section two animates in exactly once, only after the user's first downward scroll.
- prefers-reduced-motion: reduce -> no entrance animations, no rail scroll, no video, section
  two visible immediately, scroll-behavior auto.
- No horizontal overflow from 320px up. (body.scrollWidth exceeding
  documentElement.clientWidth by ~15px is the reserved scrollbar gutter, not overflow.)