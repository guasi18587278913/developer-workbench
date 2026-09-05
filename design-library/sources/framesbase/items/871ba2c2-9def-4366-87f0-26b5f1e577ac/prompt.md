Build a single, self-contained `index.html` (inline <style> and <script>, no build step,
no frameworks, no external JS/CSS libraries) that reproduces the "Seamless Web3 Banking"
dark landing page described below EXACTLY. Every pixel value, colour, easing and
breakpoint below is normative — reproduce them literally, do not round, re-tune or
"improve" them.

═══════════════════════════════════════════════════════════════════════
0. CONCEPT
═══════════════════════════════════════════════════════════════════════
A near-black, high-end Web3 banking landing page derived from two Figma frames
("Dribbble shot HD - 128" and "- 129"), each a fixed 1685 x 1073 rounded panel.
Two full-viewport sections:
  Section 1 "hero"      — id="top", split into two rounded panes
  Section 2 "lifestyle" — id="features", three feature cards
On desktop the whole 1685x1073 artboard is scaled uniformly to the viewport and the
two sections are swapped by a scripted scroll transition. Below 1200px it reflows
into a normal scrolling document.

═══════════════════════════════════════════════════════════════════════
1. FONTS
═══════════════════════════════════════════════════════════════════════
Display face: Figtree weight 500.  Body face: Instrument Sans weight 400.
Load via Google Fonts:
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Figtree:wght@500&family=Instrument+Sans:wght@400&display=swap">
  --font-display: 'Figtree','Helvetica Neue',Arial,sans-serif
  --font-body:    'Instrument Sans','Helvetica Neue',Arial,sans-serif
All display headings are UPPERCASE with letter-spacing -0.05em; all body copy uses
letter-spacing -0.02em. Hard-code every line break with <br> exactly as specified so
wrapping matches the frames.

═══════════════════════════════════════════════════════════════════════
2. ASSETS — use these exact URLs, hotlinked, no local files
═══════════════════════════════════════════════════════════════════════
HERO BACKGROUND VIDEO (10s, 1440x1440, silent, loops):
https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260826_235157_a2db1448-9c00-4add-bb3b-5a1e74991a32.mp4
HERO VIDEO POSTER:
https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260826_235213_406a82ca-a782-471c-8a1c-184a9176c232.png
GLOBE VIDEO (10s, 1440x1440, silent, loops):
https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260827_000315_18f51f30-19eb-41bf-8af8-76b807149ab1.mp4
GLOBE VIDEO POSTER:
https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260826_235401_49d061b8-bc92-4b9d-98e7-57142c5b5b77.png
SILVER VISA CARD (portrait, transparent PNG, 896x1200):
https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260826_235351_70b6115b-a70b-43bb-a647-4ce7e1822875.png
BLACK VISA CARD (landscape, transparent PNG, 1200x896):
https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260826_235358_adfda61f-2eab-4b0d-bcfb-16d51d040169.png
LOGO SVG:      https://d2ol7oe51mr4n9.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/6c7d7e04-d9b9-46ef-a22d-5a93fcdd2ff4.svg
ARROW-UP SVG:  https://d2ol7oe51mr4n9.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/96c6fd8f-f830-4557-910d-448abb667292.svg
KEY SVG:       https://d2ol7oe51mr4n9.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/0c985e57-95bf-4425-b1ea-22afb746d1b7.svg
BOLT SVG:      https://d2ol7oe51mr4n9.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/3b0eb749-45c9-4539-838d-35e5bcc2557d.svg
NOISE PNG (1px grain tile): https://d2ol7oe51mr4n9.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/b5d82d6c-1778-4485-b23d-001836c144bc.png
Use the LOGO SVG as the favicon (<link rel="icon" type="image/svg+xml">).
Both <video> elements: autoplay muted loop playsinline preload="auto" aria-hidden="true".

═══════════════════════════════════════════════════════════════════════
3. DESIGN TOKENS (:root)
═══════════════════════════════════════════════════════════════════════
--design-width:1685px; --design-height:1073px;
--panel-bg:#020202; --pane-base:#262626; --pane-top:#313131; --pane-bottom:#111212;
--card-top:#1a1b1b; --card-bottom:#111212; --white:#ffffff; --ink:#000000;
--hairline:rgba(255,255,255,.1); --tag-fill:rgba(255,255,255,.05);
--glass-fill:rgba(0,0,0,.1); --glass-line:rgba(255,255,255,.14);
--r-panel:33px; --r-pane:26px; --r-visa:37px; --r-cta:14px; --r-pill:10px;
--r-keyplate:40px; --r-keyplate-inner:30px; --r-tag:29px;
--surface-card: linear-gradient(0deg, var(--card-bottom) 0%, var(--card-top) 100%);
--panel-gap:20px;
Base: box-sizing border-box everywhere; html{scroll-behavior:smooth}; body margin 0,
background var(--panel-bg), colour white, font-family var(--font-body),
-webkit-font-smoothing:antialiased. h1,h2,h3,p margin 0. img{display:block;max-width:100%}.
a{color:inherit;text-decoration:none}. :focus-visible{outline:2px solid rgba(255,255,255,.75);
outline-offset:3px}.

═══════════════════════════════════════════════════════════════════════
4. DOCUMENT STRUCTURE
═══════════════════════════════════════════════════════════════════════
<svg class="svg-defs" aria-hidden="true" width="0" height="0"> holding two
linearGradients used by the decorative rings:
  #ringDown  x1=0 y1=0 x2=0 y2=1 : stop .5436 #999 opacity 0 → stop 1 #fff opacity .14
  #ringUp    x1=0 y1=1 x2=0 y2=0 : same two stops
  .svg-defs{position:absolute;width:0;height:0;overflow:hidden}

.viewport#viewport > .stage#stage > two .panel-slot, each wrapping one
<section class="panel hero" id="top"> / <section class="panel lifestyle" id="features">.
Each panel contains a .{hero|lifestyle}__scene (the animated layer) plus a
<header class="topbar"> AFTER the scene in source order.

.viewport,.stage{width:100%} .viewport{overflow-x:clip}
.panel-slot{position:relative;width:100%;height:100vh;height:100dvh;overflow:clip;
  scroll-snap-align:start;scroll-snap-stop:always}
.panel{position:absolute;left:50%;top:50%;
  width:var(--layout-width,var(--design-width));height:var(--layout-height,var(--design-height));
  border-radius:var(--r-panel);background:var(--panel-bg);
  transform:translate(-50%,-50%) scale(var(--scale,1));transform-origin:center}
@media (min-width:1200px){ html{scroll-snap-type:y mandatory} }

═══════════════════════════════════════════════════════════════════════
5. SHARED CHROME (identical in both sections, positioned per-section)
═══════════════════════════════════════════════════════════════════════
.logo{position:absolute;width:46.92px;height:46px} .logo img{width:100%;height:100%}
.navlinks{position:absolute;display:flex;align-items:center;gap:8px;height:46px;
  transform:translateX(var(--pill-x,0px))}
.pill{display:flex;align-items:center;justify-content:center;height:46px;padding:16px;
  border-radius:var(--r-pill);background:transparent;color:#fff;font-family:var(--font-display);
  font-weight:500;font-size:16px;line-height:14px;letter-spacing:-.02em;
  transition:background-color .18s ease}
.pill:hover,.pill.is-active{background:rgba(255,255,255,.1)}
.btn-white{position:absolute;display:flex;align-items:center;justify-content:center;
  width:151px;height:46px;padding:16px;border-radius:var(--r-pill);background:#fff;color:#000;
  font-family:var(--font-display);font-weight:500;font-size:16px;line-height:14px;
  letter-spacing:-.02em}
.navmenu{display:contents}  .navburger{display:none}
Nav links: "Features"→#features, "Cards"→#cards, "Spending"→#spending. Button: "Get Early Access".
Both topbars carry the same three links + button, each wrapped in
<div class="navmenu" id="nav-menu-hero"> / id="nav-menu-lifestyle">, with a
<button class="navburger" aria-expanded="false" aria-controls="…"><span class="navburger__bars">.

═══════════════════════════════════════════════════════════════════════
6. SECTION 1 — HERO (desktop coordinates, panel-relative)
═══════════════════════════════════════════════════════════════════════
.hero .logo{left:39px;top:37px} .hero .navlinks{left:96.76px;top:37px}
.hero .btn-white{right:40px;top:37px}
.hero__scene,.lifestyle__scene{position:absolute;inset:0;transform-origin:50% 50%}
.hero__scene{opacity:var(--scene-opacity,1);
  transform:translateY(var(--scene-y,0px)) scale(var(--scene-scale,1))}
.lifestyle__scene{opacity:var(--feature-scene-opacity,1);
  transform:translateY(var(--feature-scene-y,0px)) scale(var(--feature-scene-scale,1))}

TWO PANES:
.hero__pane{position:absolute;top:10px;width:calc((100% - 31px)/2);height:calc(100% - 20px);
  border-radius:var(--r-pane)}
.hero__pane--left{left:10px;background:linear-gradient(0deg,var(--pane-bottom) 0%,var(--pane-top) 100%),var(--pane-base)}
.hero__pane--right{right:10px;overflow:hidden}  ← class="hero__pane hero__pane--right showcase" id="cards"

RIGHT PANE (showcase) children:
.showcase__video{position:absolute;inset:0;width:100%;height:100%;object-fit:cover;object-position:center}
.showcase__eyebrow{position:absolute;left:34px;top:32.02px;font-family:var(--font-body);
  font-size:14px;line-height:18px;letter-spacing:-.02em;opacity:.4}  text "Limitless Crypto Banking"
.showcase__card{position:absolute;left:calc(50% - 150.5px);top:269px;width:301px;height:423px;
  border-radius:var(--r-visa)}  ← SILVER VISA CARD, alt "Brushed metal Visa card"
.showcase__copy{display:contents} id="spending"
.showcase__title{position:absolute;left:calc(50% - 154.5px);top:745px;width:286px;height:72px;
  font-family:var(--font-display);font-weight:500;font-size:40px;line-height:36px;
  letter-spacing:-.05em;text-transform:uppercase;text-align:center}  "Global<br>Spending"
.showcase__sub{position:absolute;left:calc(50% - 149.5px);top:836.05px;width:275.42px;height:46px;
  font-family:var(--font-body);font-size:18px;line-height:23px;letter-spacing:-.02em;
  text-align:center}  "Spend your crypto instantly<br>anywhere in the world"
.dots{position:absolute;left:calc(50% - 18px);bottom:49px;display:flex;align-items:center;
  gap:9px;height:6px}  three <button class="dot"> with aria-label "Show card 1..3"
.dot{width:6px;height:6px;padding:0;border:0;border-radius:22px;background:#d9d9d9;opacity:.2;
  cursor:pointer;transition:opacity .18s ease}  .dot.is-active{opacity:1}

LEFT-PANE COPY (.hero__content, absolute over the left pane):
.hero__title{position:absolute;left:39px;top:279px;transform:translateY(1.8px);width:578px;
  height:324px;font-family:var(--font-display);font-weight:500;font-size:120px;line-height:108px;
  letter-spacing:-.05em;text-transform:uppercase}
  Three <span class="hero__line">: "Seamless" / "Web3" / "Banking"; .hero__line{display:block}
.hero__lede{position:absolute;left:39px;top:640.06px;width:357.49px;height:58px;
  font-family:var(--font-body);font-size:22px;line-height:29px;letter-spacing:-.02em}
  "Bridge the gap between your digital<br>assets and the real world"
.cta{position:absolute;left:39px;bottom:46px;display:flex;width:244px;height:63px}
.cta__label{display:flex;align-items:center;justify-content:center;width:189px;height:63px;
  padding:10px 24px;border-radius:var(--r-cta);background:#fff;color:#000;
  font-family:var(--font-display);font-weight:500;font-size:19px;line-height:19px;
  letter-spacing:-.02em}  "Get Early Access"
.cta__arrow{position:absolute;left:181px;top:0;display:flex;align-items:center;
  justify-content:center;width:63px;height:63px;border-radius:var(--r-cta);background:#fff}
.cta__arrow img{width:21.21px;height:21.21px;transform:rotate(90deg)}  ← ARROW-UP SVG

═══════════════════════════════════════════════════════════════════════
7. SECTION 2 — YOUR DIGITAL LIFESTYLE
═══════════════════════════════════════════════════════════════════════
.lifestyle .logo{left:39px;top:37px} .lifestyle .navlinks{left:calc(50% - 142.5px);top:37px}
.lifestyle .btn-white{right:40px;top:37px}
.lifestyle__title{position:absolute;left:calc(50% - 292.5px);top:195px;transform:translateY(1.54px);
  width:585px;height:172px;font-family:var(--font-display);font-weight:500;font-size:96px;
  line-height:86px;letter-spacing:-.05em;text-transform:uppercase;text-align:center}
  "Your Digital<br>Lifestyle"

SHARED CARD PIECES:
.lifestyle__grid,.lcard-slot{display:contents}   .lcard{position:absolute}
.lcard__surface{position:absolute;border-radius:var(--r-pane);background:var(--surface-card)}
.lcard__title{position:absolute;height:58px;font-family:var(--font-display);font-weight:500;
  font-size:32px;line-height:29px;letter-spacing:-.05em;text-transform:uppercase;text-align:center}
.lcard__desc{position:absolute;width:327.19px;height:46px;font-family:var(--font-body);
  font-size:18px;line-height:23px;letter-spacing:-.02em;text-align:center;opacity:.8}
.lring{position:absolute;overflow:visible;pointer-events:none}
  Each ring is an inline <svg viewBox="0 0 N N"> containing ONE <circle fill="none"
  stroke="url(#ringDown|#ringUp)" stroke-width="1"> at cx=cy=N/2, r=N/2-0.5.
.ltag{position:absolute;display:flex;align-items:center;justify-content:center;height:34px;
  padding:0 14px;border:1px solid var(--hairline);border-radius:var(--r-tag);
  background:var(--tag-fill);color:rgba(255,255,255,.8);font-family:var(--font-body);
  font-size:14px;line-height:18px;letter-spacing:-.02em;white-space:nowrap}

Each card: <div class="lcard-slot"><article class="lcard lcard--X">
             <div class="lcard__surface"></div><div class="lcard__content"> …artwork… </div>

── CARD 1 · NON-CUSTODIAL SECURITY ──────────────────────────────────
.lcard--security{left:10px;bottom:9px;width:547px;height:843px}
.lcard--security .lcard__surface{left:0;top:241px;width:547px;height:602px;
  background:radial-gradient(368px 368px at 273.5px -26px,rgba(102,102,102,.5) 0%,rgba(102,102,102,0) 100%),var(--surface-card)}
.lring--security{left:34px;top:0;width:481px;height:481px}   viewBox 0 0 481 481, #ringDown
.ltag--soa{left:210px;top:304px;width:127px}   "State-of-the-art"
.keyplate{position:absolute;left:180px;top:369px;width:189px;height:189px;
  border:1px solid transparent;border-radius:var(--r-keyplate);
  background-image:conic-gradient(from 180deg at 50% 50%,#8b8b8c 133.14deg,#171818 313.95deg),
                   linear-gradient(180deg,#000 0%,#666 100%);
  background-origin:border-box;background-clip:padding-box,border-box}
.keyplate__well{position:absolute;left:196px;top:386px;width:156px;height:156px;
  border:9px solid transparent;border-radius:var(--r-keyplate-inner);
  background-image:radial-gradient(253.7px 263.9px at 8.5px -7.5px,rgba(237,237,237,.2) 24.15%,rgba(0,0,0,0) 100%),
                   linear-gradient(rgba(0,0,0,.77),rgba(0,0,0,.77)),
                   linear-gradient(180deg,rgba(87,87,87,.9) -77.56%,rgba(12,12,12,.9) 165.38%);
  background-origin:border-box;background-clip:padding-box,padding-box,border-box;
  backdrop-filter:blur(59.45px)}
.keyplate__key{position:absolute;left:237px;top:427px;width:73px;height:73px;
  transform:rotate(90deg);mix-blend-mode:soft-light}
  ← KEY SVG, output TWO identical stacked <img> instances (Figma stacks it twice in soft-light)
.lcard--security .lcard__title{left:117px;top:652px;width:305px}  "Non-Custodial<br>Security"
.lcard--security .lcard__desc{left:106px;top:732.05px}
  "Your keys, your money. State-of-the-art<br>encryption included."
DOM order inside .lcard__content: ring, keyplate, title, desc, keyplate__well, key, key, tag.

── CARD 2 · AUTOMATED STAKING ───────────────────────────────────────
.lcard--staking{right:10px;bottom:10px;width:548px;height:843px}
.lcard--staking .lcard__surface{left:0;top:241px;width:548px;height:602px;
  background:radial-gradient(357.1px 444.3px at 610.5px -78.5px,rgba(102,102,102,.5) 0%,rgba(102,102,102,0) 100%),
             radial-gradient(278.5px 365.1px at 13.5px -16px,rgba(102,102,102,.5) 0%,rgba(102,102,102,0) 100%),
             var(--surface-card)}
.lcard--staking .lcard__surface::after{content:'';position:absolute;inset:0;
  border-radius:var(--r-pane);background-image:url(NOISE PNG);pointer-events:none}
.lring--orbit-outer{left:22px;top:0;width:505px;height:505px}    viewBox 0 0 505 505, #ringDown
.lring--orbit-inner{left:133px;top:118px;width:265px;height:265px} viewBox 0 0 265 265, #ringDown
.orbit__card{position:absolute;left:98.3px;top:381px;width:346px;height:264px}
  ← BLACK VISA CARD, alt "Brushed black Visa card"
.orbit__badge{position:absolute;left:220px;top:335px;width:103px;height:103px;
  border:1px solid var(--glass-line);border-radius:50%;background:var(--glass-fill);
  box-shadow:0 32px 43px -13px rgba(0,0,0,.48);backdrop-filter:blur(27.3px)}
.orbit__badge-inner{position:absolute;left:230px;top:345px;width:82px;height:82px;
  border:1px solid var(--glass-line);border-radius:50%;background:var(--glass-fill)}
.orbit__bolt{position:absolute;left:255px;top:364px;width:38px;height:38.52px}  ← BOLT SVG
.ltag--yield{left:222px;top:279px;width:103px}   "2% monthly"
.lcard--staking .lcard__title{left:127px;top:653px;width:286px}  "Automated<br>Staking"
.lcard--staking .lcard__desc{left:106px;top:733.05px}
  "Earn passive income on your balances<br>while still keeping them ready"
DOM order: title, desc, ring-outer, ring-inner, orbit card, badge, badge-inner, bolt, tag.

── CARD 3 · LIGHTNING TRANSFERS ─────────────────────────────────────
.lcard--transfers{left:calc(50% - 274.5px);bottom:10px;width:549px;height:602px;isolation:isolate}
.lcard--transfers .lcard__surface{left:0;top:0;width:548px;height:602px}
.globe{position:absolute;left:1px;top:98px;width:545px;height:411px;object-fit:contain;
  object-position:center;mix-blend-mode:screen}   ← GLOBE VIDEO (NOT autoplay; JS starts it)
.globe-fade{position:absolute;left:1px;top:98px;width:548px;height:413px;
  background:linear-gradient(180deg,rgba(25,26,26,0) 11.26%,#121313 67.07%)}
.lring--transfers{left:25px;top:81px;width:481px;height:481px}  viewBox 0 0 481 481, #ringUp
.ltag--wallet{left:44px;top:123px;width:90px;backdrop-filter:blur(17.95px)}   "Any wallet"
.ltag--bank{left:366px;top:94px;width:114px;backdrop-filter:blur(17.95px)}    "Bank account"
.transfer-node-path{position:absolute;left:184px;top:89px;width:9px;height:9px;z-index:5;
  pointer-events:none}  contains <span class="node-dot">
.node-dot{display:block;width:100%;height:100%;border-radius:50%;background:#fff;
  box-shadow:0 0 10px rgba(255,255,255,.45)}
.lcard--transfers .lcard__title{left:174px;top:413px;width:192px}  "Lightning<br>Transfers"
.lcard--transfers .lcard__desc{left:106px;top:493.05px}
  "Send funds across the globe<br>to any wallet or bank account"

DESKTOP THREE-COLUMN TRACK @media (min-width:1200px):
.lifestyle__scene{--feature-card-width:calc((100% - 40px)/3)}  .lcard{width:var(--feature-card-width)}
.lcard--security{left:10px} .lcard--transfers{left:calc(20px + var(--feature-card-width))}
.lcard--staking{right:10px}
Each card's > .lcard__surface{width:100%}.
.lcard__content{position:absolute;top:0;height:100%} and is horizontally re-centred so the
pixel-locked artwork stays centred inside the fluid surface:
  security  left:calc(50% - 273.5px);width:547px
  transfers left:calc(50% - 274.5px);width:549px
  staking   left:calc(50% - 274px);width:548px
.lcard__content > *{max-width:none}

═══════════════════════════════════════════════════════════════════════
8. ANIMATIONS
═══════════════════════════════════════════════════════════════════════
A) HERO ENTRANCE — only @media (min-width:1200px) and (prefers-reduced-motion:no-preference)
@keyframes hero-line-enter   {from{opacity:0;filter:blur(16px)} to{opacity:1;filter:blur(0)}}
@keyframes hero-detail-enter {from{opacity:0;filter:blur(10px);transform:translateY(8px)}
                              to{opacity:1;filter:blur(0);transform:translateY(0)}}
@keyframes hero-cta-enter    {from{opacity:0;filter:blur(6px);transform:scale(.96)}
                              to{opacity:1;filter:blur(0);transform:scale(1)}}
@keyframes hero-card-motion  {0%{opacity:0;filter:blur(10px);transform:rotateY(0deg) scale(.48)}
                              15%{opacity:1;filter:blur(0);transform:rotateY(0deg) scale(1)}
                              80%{opacity:1;filter:blur(0);transform:rotateY(270deg) scale(1)}
                              100%{opacity:1;filter:blur(0);transform:rotateY(360deg) scale(1)}}
.hero__pane--right{perspective:1400px}
.hero__line  → hero-line-enter 420ms cubic-bezier(.22,1,.36,1) both;
               nth-child(1|2|3) delay 360|460|560ms
.hero__lede  → hero-detail-enter 380ms 780ms cubic-bezier(.22,1,.36,1) both
.cta         → hero-cta-enter 340ms 880ms cubic-bezier(.22,1,.36,1) both; transform-origin:left center
.showcase__card → transform-origin:center; transform-style:preserve-3d;
                  hero-card-motion 4300ms 350ms linear both; will-change:transform,opacity,filter
.showcase__title → hero-detail-enter 380ms 820ms …   .showcase__sub → 380ms 930ms …
.dots            → hero-detail-enter 300ms 1040ms …

B) TRANSFER NODE (card 3) — a dot travelling the ring arc, synced to the globe loop
@keyframes transfer-node-motion{0%,15%{offset-distance:0%} 80%,99.99%{offset-distance:100%}
                                100%{offset-distance:0%}}
@keyframes transfer-node-visibility{0%,8%{opacity:0;transform:scale(.82)}
                                    15%,80%{opacity:1;transform:scale(1)}
                                    87%,100%{opacity:0;transform:scale(.82)}}
.has-transfer-loop .transfer-node-path{left:0;top:0;
  offset-path:path('M 61 198 A 240.5 240.5 0 0 1 451 166');offset-rotate:0deg;offset-anchor:center;
  animation:transfer-node-motion 5042ms linear infinite both;will-change:offset-distance}
.has-transfer-loop .node-dot{animation:transfer-node-visibility 5042ms linear infinite both;
  will-change:opacity,transform}

C) SECTION-2 ENTRANCE VARIABLES — each group reads a 0→1 custom property and maps it to
opacity + a blur that resolves to 0, e.g.
  .lifestyle__title{opacity:var(--title-opacity,1);filter:blur(calc((1 - var(--title-opacity,1))*14px))}
Groups (property → blur px → extra):
  --security-base 10  (surface,title,desc)     --security-art 9  (ring,keyplate,well,key,tag-soa)
      + .keyplate/.keyplate__well/.keyplate__key scale:calc(.84 + var(--security-art,1)*.16)
  --transfer-base 10  (surface,title,desc)     --transfer-art 9  (globe,globe-fade,ring,tags,node)
  --staking-base 10   (surface,title,desc)     --staking-rings (opacity only)
  --staking-card 11   + scale:calc(.9 + var(--staking-card,1)*.1)
  --staking-badge 8   + scale:calc(.75 + var(--staking-badge,1)*.25)  (badge,badge-inner,bolt)
  --staking-tag 7     + scale:calc(.9 + var(--staking-tag,1)*.1)
.is-transitioning .hero__scene,.is-transitioning .lifestyle__scene{will-change:transform,opacity}

D) REDUCED MOTION @media (prefers-reduced-motion:reduce):
html{scroll-behavior:auto} *{transition:none!important;animation:none!important}
.hero__scene,.lifestyle__scene{opacity:1!important;transform:none!important}
.navlinks{transform:none!important}

═══════════════════════════════════════════════════════════════════════
9. JAVASCRIPT (vanilla IIFE, 'use strict')
═══════════════════════════════════════════════════════════════════════
Constants: DESIGN_WIDTH 1685, DESIGN_HEIGHT 1073,
DESKTOP_QUERY '(min-width:1200px)', COMPACT_QUERY '(min-width:600px) and (max-width:1199.98px)'.

1) layout(): if desktop → scale = Math.min(width/1685, height/1073) using
   visualViewport.height when available; set on #stage: --scale, --layout-width
   (width/scale + 'px'), --layout-height (height/scale + 'px'). Else remove those three
   and, when COMPACT_QUERY matches, scaleFeatureCards(), otherwise releaseFeatureCards().
   scaleFeatureCards(): for each .lcard-slot → scale = slot.clientWidth / card.offsetWidth;
   crop = computed --crop-top (0 if unset); set --card-scale, --crop-shift (-crop*scale px)
   and slot.style.height = (card.offsetHeight - crop)*scale px.
   Rerun on resize/orientationchange/visualViewport resize, rAF-debounced, plus on load.

2) SECTION TRANSITION (desktop only, not reduced-motion, exactly 2 slots).
   One wheel/touch/key gesture plays a two-phase transition; the header never moves except
   the nav pills. Constants: EXIT_MS 800, PILL_MS 733, PILL_DELAY 17, TITLE_AT 750,
   TITLE_MS 583, TOTAL_MS 3400, EXIT_TRAVEL -3150, EXIT_EXP 9.1, EXIT_SCALE .039,
   EXIT_SCALE_EXP .62, HERO_PILL_X 96.76, PILL_HALF 142.5.
   easeInExpo(t)= t<=0?0:Math.pow(2, 9.1*(t-1)).
   pillEase(t) = cubic-bezier(.42,.09,0,1) solved with 8 Newton iterations.
   reveal(ms,start,dur) = 1 - Math.pow(1 - clamp01((ms-start)/dur), 2.2).
   paintHeroTransition(ms), u=clamp01(ms/800): --scene-opacity 1-u;
     --scene-y  = -3150*easeInExpo(u) px; --scene-scale = 1 - .039*Math.pow(u,.62);
     --pill-x   = pillTravel()*pillEase(clamp01((ms-17)/733)) px, where pillTravel() =
     lifestylePanelWidth / --scale / 2 - 142.5 - 96.76.
   paintFeatureEntrance(ms) sets, via reveal(ms,start,dur):
     --title-opacity 750/583   --security-base 1060/420  --security-art 1480/420
     --transfer-base 1390/430  --transfer-art 1880/470   --staking-base 1900/440
     --staking-rings 2220/430  --staking-card 2580/430   --staking-badge 2920/340
     --staking-tag 3140/260
   paintFeatureSceneExit(u): --feature-scene-opacity 1-u; --feature-scene-y +3150*easeInExpo(u) px;
     --feature-scene-scale 1 - .039*Math.pow(u,.62).
   play(forward): add body.is-transitioning; duration = forward ? 3400 : 1600. Forward:
   at ms>=800 jump scroll to slot 1 (scrollBehavior temporarily 'auto'), paint hero exit +
   feature entrance, and at ms>=1880 startGlobe(). Backward: while ms<800 hold
   paintHeroTransition(800) and run paintFeatureSceneExit(ms/800); after 800 jump to slot 0
   and run paintHeroTransition(800-(ms-800)). On finish clear every custom property and the
   body class. Guard re-entry with a `running` flag and preventDefault() while running.
   Triggers: wheel (ignore |deltaY|<2), touchstart/touchmove (threshold 12px),
   keydown PageDown/ArrowDown/Space → forward, PageUp/ArrowUp → backward. Direction only
   acts when the matching slot is active (viewport-middle hit test).

3) VIDEO: hero video plays always (pause under reduced motion; swallow rejected play()).
   The globe video does NOT autoplay on desktop — startGlobe() adds .has-transfer-loop to
   the lifestyle scene and calls play() in the SAME task so the dot and video share a clock;
   resetGlobe() pauses, removes the class and rewinds. Below 1200px the globe simply loops
   on its own. Re-sync on the reduced-motion change event and on crossing 1199.98px.
   On hashchange clear paint; if hash === '#features' reset then start the globe.

4) NAV: clicking a .pill sets .is-active + aria-current="true" on it and clears the others.
5) BURGER: each .navburger toggles .is-open on the #id in its aria-controls, keeps
   aria-expanded in sync and swaps aria-label Open/Close menu. Opening closes any other menu
   and focuses the first link on the next frame. Clicking a link, clicking outside, or Escape
   closes (Escape restores focus to the burger). Leaving the ≤1199.98px band closes it.
6) DOTS: clicking a dot sets .is-active + aria-pressed="true" on it, false on the others.

═══════════════════════════════════════════════════════════════════════
10. RESPONSIVE — breakpoints 1200px / 940px / 600px (+ an aspect-ratio rule)
═══════════════════════════════════════════════════════════════════════
@media (max-width:1199.98px) — REFLOW FOUNDATION
  .viewport{display:block;height:auto!important;overflow:visible}
  .panel-slot{display:block;height:auto;overflow:visible;scroll-snap-align:none}
  .panel{position:relative;width:100%;height:auto;border-radius:24px;padding:20px 20px 32px;
    overflow:hidden;transform:none}   .panel-slot + .panel-slot{margin-top:var(--panel-gap)}
  All .logo/.navlinks/.btn-white become position:static. .hero{display:flex;flex-direction:column}
  .hero__pane--left{display:none} (restored below), .hero__content order 2,
  .hero__pane--right order 3. .hero__title/.hero__lede/.cta go position:relative, auto size.
  .hero__title{font-size:clamp(48px,14vw,96px);line-height:.9}
  .showcase__copy{display:block}; eyebrow/card/copy/dots stay absolute inside the pane.
  .hero__scene,.lifestyle__scene{display:contents}  ← the transition is off below 1200px
  .lifestyle__grid becomes a centred flex column, gap 20px; .lcard-slot{display:block;
    position:relative;width:100%;max-width:549px;overflow:hidden}; .lcard is scaled as a whole:
    transform:translateY(var(--crop-shift,0px)) scale(var(--card-scale,1));transform-origin:top left
  .lcard--security,.lcard--staking{--crop-top:241}  ← trims their empty 241px top band

@media (max-width:1199.98px) — COMPACT ARCHITECTURE (tablet)
  :root{--pad:clamp(24px,3.2vw,40px);--tgap:clamp(18px,2.4vw,30px);--bar-h:calc(46px + var(--pad)*2)}
  .panel{display:flex;flex-direction:column;
    padding:calc(var(--bar-h) + var(--tgap)) var(--pad) calc(var(--pad) + 6px);
    border-radius:clamp(26px,2.6vw,33px)}
  ONE BAR FOR THE PAGE: .lifestyle .topbar{display:none}; .hero .topbar becomes
    position:fixed;inset:0 0 auto;z-index:100;padding:var(--pad);
    background:rgba(2,2,2,.72);backdrop-filter:blur(18px)
  .panel,#cards,#spending{scroll-margin-top:calc(var(--bar-h) + var(--tgap))}
  .navburger{display:flex;width:46px;height:46px;border-radius:var(--r-pill);background:transparent}
    hover/expanded → rgba(255,255,255,.1). Bars: 18px x 1.5px white, ::before top -5.5px,
    ::after top 5.5px; when expanded the middle bar goes transparent and the two rotate
    ±45deg into a close icon (transition transform .22s ease).
  .navmenu{display:block;position:absolute;right:0;top:calc(100% + 14px);z-index:30;
    width:min(300px,100%);padding:14px;border:1px solid var(--hairline);
    border-radius:var(--r-pane);background:var(--surface-card);
    box-shadow:0 32px 43px -13px rgba(0,0,0,.48);opacity:0;visibility:hidden;
    pointer-events:none;transform:translateY(-8px) scale(.98);transform-origin:100% 0;
    transition:opacity .22s ease,transform .22s ease,visibility 0s linear .22s}
  .navmenu.is-open{opacity:1;visibility:visible;pointer-events:auto;transform:none;
    backdrop-filter:blur(27.3px);transition:…,visibility 0s}
  Inside the menu the links stack (column, gap 6px, left-aligned pills) and the white
  button goes full width, height 46px, margin-top 10px.
  .hero__scene becomes a 1-col grid, gap var(--tgap); .hero__pane--left returns
  (display:block, grid-area 1/1) as the surface under .hero__content (also grid-area 1/1,
  z-index 1, padding clamp(28px,4.2vw,56px)).
  .hero__pane--right becomes grid-area 2/1 and a FOUR-ROW grid
    (auto / minmax(0,1fr) / auto / auto), justify-items center, min-height 380px,
    aspect-ratio 5/4, max-height min(56dvh,620px), padding clamp(20px,3.4%,34px),
    row-gap clamp(14px,2.4%,24px). Eyebrow, card, copy and dots become flow children;
    .showcase__card{max-width:100%;max-height:100%;border-radius:12.3%/8.75%}.
    Each .dot gets a 20x32px invisible ::after hit area for touch.
  .lifestyle__grid → 1-column grid, justify-items center, align-items start, gap var(--tgap).

@media (min-width:600px) and (max-width:1199.98px) and (min-aspect-ratio:1/1)
  The hero keeps its side-by-side split on landscape tablets:
  .hero__scene{--hero-h:clamp(430px,calc(100dvh - var(--bar-h) - var(--tgap) - var(--pad) - 6px),720px);
    grid-template-columns:minmax(0,1fr) minmax(0,.9fr);min-height:var(--hero-h)}
  .hero__pane--right{grid-area:1/2;height:var(--hero-h);aspect-ratio:auto;max-height:none}
  .hero__title{font-size:clamp(40px,7.6vw,92px)}

@media (min-width:940px) and (max-width:1199.98px)
  .lifestyle__grid{grid-template-columns:repeat(2,minmax(0,1fr))}
  .lcard-slot:last-child{grid-column:1/-1;width:calc((100% - var(--tgap))/2)}

@media (max-width:599.98px) — MOBILE
  :root{--pad:clamp(16px,5vw,24px);--tgap:clamp(14px,4vw,22px)}
  .navmenu{left:var(--pad);right:var(--pad);width:auto}
  .hero__content{padding:clamp(22px,6vw,34px)}
  .hero__title{font-size:clamp(40px,13vw,72px)}
  .hero__lede{font-size:clamp(16px,4.4vw,19px);margin-bottom:clamp(22px,6vw,32px)}
  .hero__pane--right{aspect-ratio:3/4;min-height:62dvh;max-height:620px}
  .lifestyle__title{font-size:clamp(40px,12vw,72px)}
  THE FEATURE CARDS STOP BEING SCALED and are rebuilt at native type size:
  .lcard-slot{max-width:none}; .lcard{position:relative;width:100%;height:auto;transform:none}
  Every .lcard__surface becomes inset:0 (the card itself).
  .lcard__content{position:relative;display:flex;flex-direction:column;align-items:center;
    padding:var(--art-h) clamp(16px,5vw,26px) var(--art-foot)}  ← artwork stays absolute in
    the reserved top band, copy flows beneath it.
  .lcard__title,.lcard__desc{position:static;width:auto;height:auto;max-width:100%}
  .lcard__desc{margin-top:22px}; title/desc/.showcase__sub get text-wrap:balance
  .lring{left:50%;height:auto;aspect-ratio:1;transform:translate(-50%,-50%)}
  .ltag,.keyplate,.keyplate__well,.orbit__card,.orbit__badge,.orbit__badge-inner,.orbit__bolt
    {left:50%;transform:translateX(-50%)}
  card 1: --art-h:calc(317px + 17.2%); --art-foot:max(40px,11.8%);
          ring top 0 width 88%; tag top 63px; keyplate top 128px; well top 145px;
          key top 186px with transform:translateX(-50%) rotate(90deg)
  card 2: --art-h:min(412px,calc(148px + 76.3%)); --art-foot:max(40px,11.8%);
          ring-outer top 11.5px width 92.2%; ring-inner left 48.4% top 9.5px width 48.4%;
          tag top 38px; orbit card top 140px width min(346px,100%) height auto;
          badge 94px; badge-inner 104px; bolt 123px
  card 3: --art-h:calc(98px + 57.8%); --art-foot:max(40px,11.8%);
          .globe,.globe-fade{left:0;right:0;top:98px;width:100%;height:auto}
          .globe{aspect-ratio:545/411} .globe-fade{aspect-ratio:548/413}
          .lring--transfers{top:98px;margin-top:40.7%;width:87.6%}
          .ltag--wallet{left:8%;top:123px;transform:none}
          .ltag--bank{left:auto;right:12.6%;top:94px;transform:none}
          .transfer-node-path{left:33.5%;top:89px;offset-path:none;animation:none}
            ← the measured path does not scale here, so the dot holds its place

═══════════════════════════════════════════════════════════════════════
11. QUALITY BAR
═══════════════════════════════════════════════════════════════════════
- <html lang="en">, <meta charset="utf-8">, viewport meta.
  <title>Seamless Web3 Banking</title>
  <meta name="description" content="Bridge the gap between your digital assets and the real world.">
- Decorative images alt=""; decorative SVG/video aria-hidden="true"; the dots group is
  role="group" aria-label="Card showcase"; navs are aria-label="Primary"/"Sections".
- Prefix backdrop-filter with -webkit-.
- No horizontal scrollbar at any width from 320px to 2560px.
- Must run correctly opened directly from the filesystem (file://) — all assets are remote.