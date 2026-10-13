Build ONE standalone HTML file. No frameworks. CSS in <style>, JS inline. Recreate this exact full-viewport hero. Follow the CTA section VERBATIM — that is the piece one-shot generations get wrong.

============================================================
MEDIA (do not substitute)
============================================================
Video src:
https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260826_124917_8316313b-031e-44c7-90fa-d660944081e1.mp4
Poster:
https://d2ol7oe51mr4n9.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/dd434947-66e8-4157-9a51-e69b6fab4913.webp
<video class="scene" autoplay muted loop playsinline> with one <source type="video/mp4">.
Native video 1536×1024. Scene: twilight mossy valley, snow mountains, water mirror, tall luminous rectangular portal centered.

============================================================
FONT
============================================================
Space Grotesk only, weight 400 on every text node (nav, h1, sub, CTA). Never Inter, Geist, or fake-bold.
<link href="https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@300..700&display=block" rel="stylesheet">
font-family: 'Space Grotesk','Helvetica Neue',Helvetica,Arial,sans-serif
font-synthesis: none; letter-spacing: -0.06em on all text.
Do NOT set -webkit-font-smoothing: antialiased.
html/body background #0c0e29; overflow:hidden; theme-color #0c0e29.
<title>Global Gateway — Your Personal Gateway To Global Connection</title>

============================================================
SCALE TOKENS (:root)
============================================================
--vh: 100vh; @supports (height:100dvh){ --vh:100dvh }
--s: max(calc(100vw / 1530), calc(var(--vh) / 1020));
--kfull: calc(var(--s) * 0.765);
--kfit: calc(100vw * 0.90 / 1084);
--kvh: calc(var(--vh) / 1250);
--k: min(var(--kfull), var(--kfit), var(--kvh));
--ptop: calc(var(--vh) * .4429);
--scene-top: clamp(calc(var(--vh) - 1024 * var(--s)), calc(var(--ptop) - 453.5 * var(--s)), 0px);
--portal-top: calc(var(--scene-top) + 453.5 * var(--s));
--cta-standoff: calc(38.5 * var(--k));
--fs-nav: max(11.9px, calc(21.875 * var(--k)));
--fs-head: calc(100 * var(--k));
--fs-sub: max(13.8px, calc(25 * var(--k)));
--fs-cta: max(11.9px, calc(21.875 * var(--k)));
--fw-text: 400;
--tracking-tight: -0.06em;
--leading-display: 1.02;
--leading-body: 1;
--gap-sub: calc(12.85 * var(--k));
--gap-cta: calc(26.6 * var(--k));
--c-nav: rgba(255,255,255,.90);
--c-head1: #ffffff;
--c-head2: rgba(255,255,255,.63);
--c-sub: rgba(255,255,255,.93);
--c-line: rgba(255,255,255,.92);
--c-cta-fg: #2b2430;

============================================================
STAGE
============================================================
<main class="stage"> fixed inset 0, 100vw × var(--vh), overflow hidden, isolation isolate.
.scene video: absolute; left 50%; top var(--scene-top); width calc(1536 * var(--s)); height calc(1024 * var(--s)); transform: translateX(calc(-50% - 1.5 * var(--s))); z-index 0.
.veil: absolute top 0 left 0 right 0 height 34%; pointer-events none; z-index 1;
background: linear-gradient(180deg, rgba(8,5,26,.38) 0%, rgba(8,5,26,.22) 12%, rgba(8,5,26,.09) 22%, rgba(8,5,26,0) 100%);

============================================================
NAV
============================================================
.nav z-index 3; flex center; top max(14px, calc(62 * var(--k))); gap calc(100 * var(--k)); font-size var(--fs-nav).
Links exact: Solutions, Product, Pricing, Recourses (keep misspelling). hrefs #solutions #product #pricing #recourses.
Order around the mark: Solutions | Product | MARK | Pricing | Recourses.
.nav-links { display:contents } on desktop.
Nav links: color var(--c-nav); no hover underline. Only :focus-visible shows a 1px underline (scaleX 0→1 from center).
MARK: <a class="mark" href="#" aria-label="Home"> 16-point white star. Size max(24px, 52*k); side margin 48*k. Hover rotate(22.5deg) .6s cubic-bezier(.4,0,.2,1).
SVG viewBox="0 0 52 52" fill="none"; group fill="#fff" stroke="#fff" stroke-width=".9" stroke-linejoin="round" with these 16 paths:
M27.15 17.40L28.05 3.45A2.05 2.05 0 0 0 23.95 3.45L24.85 17.40Z
M30.35 18.49L36.52 5.95A2.05 2.05 0 0 0 32.74 4.38L28.23 17.61Z
M32.89 20.73L43.39 11.50A2.05 2.05 0 0 0 40.50 8.61L31.27 19.11Z
M34.39 23.77L47.62 19.26A2.05 2.05 0 0 0 46.05 15.48L33.51 21.65Z
M34.60 27.15L48.55 28.05A2.05 2.05 0 0 0 48.55 23.95L34.60 24.85Z
M33.51 30.35L46.05 36.52A2.05 2.05 0 0 0 47.62 32.74L34.39 28.23Z
M31.27 32.89L40.50 43.39A2.05 2.05 0 0 0 43.39 40.50L32.89 31.27Z
M28.23 34.39L32.74 47.62A2.05 2.05 0 0 0 36.52 46.05L30.35 33.51Z
M24.85 34.60L23.95 48.55A2.05 2.05 0 0 0 28.05 48.55L27.15 34.60Z
M21.65 33.51L15.48 46.05A2.05 2.05 0 0 0 19.26 47.62L23.77 34.39Z
M19.11 31.27L8.61 40.50A2.05 2.05 0 0 0 11.50 43.39L20.73 32.89Z
M17.61 28.23L4.38 32.74A2.05 2.05 0 0 0 5.95 36.52L18.49 30.35Z
M17.40 24.85L3.45 23.95A2.05 2.05 0 0 0 3.45 28.05L17.40 27.15Z
M18.49 21.65L5.95 15.48A2.05 2.05 0 0 0 4.38 19.26L17.61 23.77Z
M20.73 19.11L11.50 8.61A2.05 2.05 0 0 0 8.61 11.50L19.11 20.73Z
M23.77 17.61L19.26 4.38A2.05 2.05 0 0 0 15.48 5.95L21.65 18.49Z
Burger in DOM always, display:none until tablet. 44×44, two 1.6px white bars, X when .nav.open.

============================================================
HERO COPY
============================================================
.stack: absolute z-index 3; left 0 right 0; flex column align center; text-align center; padding 0 4vw;
bottom: calc(var(--vh) - var(--portal-top) + var(--cta-standoff));
so the CTA’s BOTTOM edge sits 38.5 design-px ABOVE the portal’s top edge.

h1 exact markup:
<h1><span class="l1"><span>Your Personal Gateway&nbsp;To</span></span><span class="l2"><span>Global Connection</span></span></h1>
.l1 #fff; .l2 rgba(255,255,255,.63); overflow hidden; padding-bottom .28em; margin-bottom -.28em; inner span display:block.
text-shadow: 0 calc(2*k) calc(34*k) rgba(22,7,44,.28);

<p class="sub">Step through and&nbsp; host real-time, multilingual conversations - no extra <br class="brk">Apps or plugins needed</p>
Keep the extra space after nbsp, ASCII hyphen, capital Apps.
max-width: min(92vw, max(calc(820 * var(--k)), 460px)); color var(--c-sub).

============================================================
CRITICAL — CTA / “contact sales” BUTTON
This is a CAMERA VIEWFINDER, not a normal button.
Copy this HTML and CSS exactly. Do not restyle it.
============================================================

WHAT IT LOOKS LIKE
A sharp-cornered opaque white rectangle (the label plate) floating above the portal.
Around it, four detached white L-shaped crop marks — one at each corner — like print registration marks / a camera reticle.
The L’s sit OUTSIDE the white plate with a clear air gap. They never touch the plate. They never join into a full rectangle. The middle of each side is empty sky.

ASCII (not to scale):
      ┌              ┐
        ██████████
        █ contact █
        █  sales  █
        ██████████
      └              ┘

FORBIDDEN (these are why one-shot output is wrong — do none of them):
- border-radius of any amount (must be 0). Corners of the plate are 90°.
- border, outline, or outline-offset on .cta
- a wrapping box with a gap/dashed/dotted/double border
- clip-path, conic-gradient, repeating-linear-gradient, or mask to fake the frame
- box-shadow as the frame
- connecting the four L’s into one rectangle
- putting the L’s ON TOP OF or INSIDE the white fill
- rounded “pill” or iOS button
- extra icon, arrow, or chevron
- uppercase or Title Case label
- padding that makes a tall chunky button; height is only ~38 design px — a slim bar, not a fat CTA

EXACT HTML (four empty <i> children are required):
<a class="cta" href="#contact">
  <span>contact sales</span>
  <i class="tl"></i><i class="tr"></i><i class="bl"></i><i class="br"></i>
</a>

EXACT CSS (paste as-is; tokens already exist on :root):
.cta{
  margin-top: var(--gap-cta);
  position: relative;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: clamp(calc(var(--fs-cta) * 6.28 + 38px),
               calc(124 * var(--s) * 1.1228),
               calc(var(--fs-cta) * 6.28 + 175px));
  height: max(28px, calc(38 * var(--k)));
  padding: 0;
  border: 0;
  border-radius: 0;
  outline: none;
  box-shadow: none;
  overflow: visible;
  font-size: var(--fs-cta);
  font-weight: var(--fw-text);
  letter-spacing: var(--tracking-tight);
  color: #2b2430;
  text-decoration: none;
  white-space: nowrap;
  background: #ffffff;
  -webkit-backdrop-filter: none;
          backdrop-filter: none;
  --brk-gap: max(3px, calc(5 * var(--k)));
  --brk-len: max(8px, calc(17 * var(--k)));
  --brk-w:   max(1px, calc(1.4 * var(--k)));
  transition: background .3s ease, box-shadow .35s ease, transform .35s ease;
}
.cta span{ position: relative; z-index: 1; display: block; line-height: 1; }
.cta:hover, .cta:focus-visible{
  background: #fff;
  box-shadow: 0 0 calc(34 * var(--k)) rgba(255,236,214,.40);
  transform: translateY(calc(-1 * var(--k)));
}
/* L marks: each <i> is a square of --brk-len. Horizontal bar = ::before, vertical bar = ::after.
   Positioned OUTSIDE the plate by (gap + stroke). */
.cta i{
  position: absolute;
  pointer-events: none;
  width: var(--brk-len);
  height: var(--brk-len);
  background: none;
  border: 0;
}
.cta i::before, .cta i::after{
  content: '';
  position: absolute;
  background: rgba(255,255,255,.92);
  border-radius: 0;
}
.cta i::before{ width: 100%; height: var(--brk-w); }
.cta i::after{  width: var(--brk-w); height: 100%; }
.cta .tl{ left:  calc(-1 * (var(--brk-gap) + var(--brk-w))); top:    calc(-1 * (var(--brk-gap) + var(--brk-w))); }
.cta .tl::before{ left: 0; top: 0; }
.cta .tl::after{  left: 0; top: 0; }
.cta .tr{ right: calc(-1 * (var(--brk-gap) + var(--brk-w))); top:    calc(-1 * (var(--brk-gap) + var(--brk-w))); }
.cta .tr::before{ right: 0; top: 0; }
.cta .tr::after{  right: 0; top: 0; }
.cta .bl{ left:  calc(-1 * (var(--brk-gap) + var(--brk-w))); bottom: calc(-1 * (var(--brk-gap) + var(--brk-w))); }
.cta .bl::before{ left: 0; bottom: 0; }
.cta .bl::after{  left: 0; bottom: 0; }
.cta .br{ right: calc(-1 * (var(--brk-gap) + var(--brk-w))); bottom: calc(-1 * (var(--brk-gap) + var(--brk-w))); }
.cta .br::before{ right: 0; bottom: 0; }
.cta .br::after{  right: 0; bottom: 0; }

GEOMETRY AT DESIGN SCALE (k=1, s such that 124*s*1.1228 ≈ 182)
- White plate: ~182 × 38 CSS px. Slim horizontal bar. About 12% wider than the portal core (portal core width = 124 asset px × --s).
- Label “contact sales” lowercase, Space Grotesk 400, ~22px, tracking -0.06em, color #2b2430 (not pure black).
- Air gap plate-edge → inner face of L: 5 design px.
- Each L arm: 17 design px long, 1.4 design px thick, color rgba(255,255,255,.92).
- The L’s are NOT a border of the plate; they are siblings drawn in the empty space around it.
- Resting state: no glow. Hover may add a warm white glow and 1*k lift.

============================================================
RESPONSIVE
============================================================
TABLET — @media (max-width:1080px) and (max-aspect-ratio:0.91/1), (max-width:620px) and (min-height:480px)
--fs-sub: clamp(13.8px, 2.27vw, 23.2px);
--fs-cta: clamp(12.4px, 2.00vw, 20.5px);
--gap-sub: clamp(7px, 1.8vw, 22px);
--gap-cta: clamp(16px, 3.2vw, 34px);
--nav-top: max(16px, min(3.2vw, calc(62 * var(--k))));
--mark-size: clamp(26px, 4.6vw, 46px);
--nav-zone: calc(var(--nav-top) + var(--mark-size));
--cta-standoff: clamp(22px, 3.4vh, 48px);
h1: clamp(24px, 7.6vw, 84px);
.stack: top calc(var(--nav-zone) + clamp(18px, 3.2vh, 44px)); justify-content center; padding 0 8vw;
.sub: max-width min(84vw, 62ch, calc(7.70 * var(--fs-head))); line-height 1.42; text-wrap:balance; hide br.brk
Nav: burger shown; mark centered; .nav-links becomes fullscreen overlay rgba(10,6,28,.55) blur(24px) saturate(120%); links clamp(20px, 3.4vw, 30px); stagger on .nav.open.
CTA still uses the same L-mark CSS. Add .cta::after { content:''; position:absolute; left:0; right:0; top:50%; height:max(100%,44px); transform:translateY(-50%); } for 44px touch — do not change the drawn box.
Short tablet max-height 520px: .nav{top:10px}

MOBILE — @media (max-width:500px) and (min-height:480px)
--fs-sub: clamp(13.8px, min(4.4vw, 2.3vh), 18.8px);
--fs-cta: clamp(13.5px, min(4.1vw, 2.2vh), 17.3px);
--gap-sub / --gap-cta: clamp(8px,1.6vh,20px) / clamp(14px,2.6vh,30px);
--s: max(calc(100vw / 1530), calc(var(--vh) / 1006));
--nav-top: clamp(14px, 2.2vh, 26px); --mark-size: clamp(26px, 7vw, 36px);
h1: clamp(24px, min(9vw, 4.2vh), 46px); text-wrap:balance; allow wrap.
.stack: top calc(nav-zone + clamp(14px, 2.6vh, 34px)); padding 0 max(20px, 6vw);
.sub: max-width min(100%, 34ch); line-height 1.5; hide br.brk
CTA L-marks still outside; do not drop them on mobile.

SHORT — @media (max-height:620px){ --ptop: max(calc(var(--vh) * .4429), calc(500 * var(--k) + 78px)); }

============================================================
ENTRANCE (once)
============================================================
Head script adds html.ent before paint unless prefers-reduced-motion: reduce. Remove .ent when animationName === 'entPanel' (or 2600ms). Then force reflow on .cta (display none / offsetHeight / restore). fill-mode backwards never both.
.ent .mark: scale(.9) fade .70s cubic-bezier(.16,1,.3,1) delay .10s
.ent nav links: entRise .55s; children 2+3 delay .20s, 1+4 delay .26s
.ent h1 .l1>span / .l2>span: translateY(116%)→none .95s delays .30s / .42s
.ent .sub: entRise .62s delay .66s
.ent .cta i: start 6px outward (tl 6,6 / tr -6,6 / bl 6,-6 / br -6,-6) .50s delay .82s
.ent .cta: opacity 0 scale(.985)→1 .65s delay .90s (entPanel)
Tablet overlay: .ent .nav-links a { animation:none }

MENU JS: toggle .nav.open, aria-expanded, Escape, overlay click, matchMedia same as tablet query.

:focus-visible { outline: 2px solid rgba(255,255,255,.85); outline-offset: 4px }

DO NOT add other pages, scroll, footer, extra sections, Inter, or a different video.
Deliver complete index.html.