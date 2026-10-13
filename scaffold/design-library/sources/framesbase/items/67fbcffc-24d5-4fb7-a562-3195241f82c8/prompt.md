Recreate this EXACT one-page Legion VPN landing page as a React + Vite + TypeScript + Tailwind CSS app. Match every layout detail, asset URL, font, animation timing, liquid-glass SVG filter, and mouse-driven spotlight system precisely. Do not invent alternate styles, colors, or placeholder assets.

════════════════════════════════════════
TECH STACK
════════════════════════════════════════
- React 18 + Vite + TypeScript + Tailwind CSS 3
- lucide-react (Menu icon only)
- No router, no backend, single full-viewport page
- Google Fonts in index.html:
  https://fonts.googleapis.com/css2?family=Imbue:opsz,wght@10..40,100..900&family=Manrope:wght@200..800&display=swap
- Page title: "Legion VPN"
- Tailwind font families:
  - font-sans → Manrope
  - font-display → Imbue
- CSS variables:
  --font-sans: "Manrope", ui-sans-serif, system-ui, sans-serif;
  --font-display: "Imbue", serif;
- html/body: max-width 100%, overflow-x hidden, background #000, color #fff, font-family Manrope

════════════════════════════════════════
COLOR SYSTEM (exact)
════════════════════════════════════════
- Primary text charcoal: #2F2F2F
- Muted text: rgba(47,47,47,0.64), rgba(47,47,47,0.6), rgba(47,47,47,0.5)
- Hero line opacities stacked: #2F2F2F → rgba(47,47,47,0.95) → 0.9 → 0.8
- Fallback bg under images: #f4f0ea
- Grid stroke: #64748b at opacity 0.1 on the SVG overlay
- Glass borders: rgba(47,47,47,0.15) with stronger top edge rgba(47,47,47,0.3) and softer bottom rgba(47,47,47,0.08)
- Soft white fills / gradients: rgba(255,255,255,0.02→0.25→0.01), #fff→#f3f4f6 for solid buttons
- Active nav pill: rgba(47,47,47,0.12)
- Helmet card border: rgba(255,255,255,0.2)

════════════════════════════════════════
EXACT ASSET URLS (must use these, no substitutes)
════════════════════════════════════════

1) Base background image (warm architectural / soft interior scene):
https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260717_041652_483badb8-74b7-42fa-8e76-a5506932b3d0.png&w=1920&q=85

2) Reveal / spotlight overlay image (alternate version of same scene, shown only inside mouse spotlight mask):
https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260717_060708_051d8b4a-3bba-4ce1-9f88-47e39834f9e2.png&w=1920&q=85

3) Imperial helmet ornament (right card):
https://flick-award-65707097.figma.site/_assets/v11/09548c2c4b3f57f6d08ba1a3eee3341c34f989d2.png

All <img> tags using higgs.ai must include referrerPolicy="no-referrer".

════════════════════════════════════════
PAGE STRUCTURE (z-order + layout)
════════════════════════════════════════

Root App renders, in order:
1. <Background /> — fixed full-viewport, z-0, pointer-events-none
2. <SvgFilters /> — hidden SVG defs (width/height 0)
3. Content shell:
   relative min-h-screen flex flex-col justify-between
   p-6 lg:p-12 z-10 max-w-[1800px] mx-auto
   containing:
   a) <Header />
   b) Main 2-column grid:
      flex-1 grid grid-cols-1 lg:grid-cols-2 gap-8 items-end
      mt-16 lg:mt-0 mb-12

LEFT COLUMN (self-stretch, flex-col justify-between, pt-12 lg:pt-24):
- Giant display headline (Imbue):
  "Conquer the web"
  block light: "— Unseen,"
  block: "Untouchable,"
  block opacity 0.8: "Imperial"
  Classes: font-display text-[12vw] lg:text-[5.4vw] leading-[0.82] font-normal tracking-[-0.01em] uppercase text-[#2F2F2F]
  Animation: animate-fade-slide-up
- Vertical hairline divider: w-px h-[220px] my-6
  background: linear-gradient(to bottom, rgba(47,47,47,0.4), rgba(47,47,47,0.15), transparent)
  Animation: animate-scale-y-in (transform-origin: top)
- Body copy (Manrope):
  "Encrypt your traffic, hide your IP, and bypass any restrictions. Full online anonymity — no logs, no limits, no compromises."
  text-[15px] text-[rgba(47,47,47,0.64)] leading-relaxed font-light w-[320px] max-w-full
  Animation: animate-fade-in

RIGHT COLUMN (flex items-end justify-start lg:justify-end gap-6 flex-wrap):
- <GlassCard /> then <HelmetCard />

Hooks called at App root:
- useSpotlightEffect()
- useGlassCardSync()

════════════════════════════════════════
BACKGROUND COMPONENT (exact)
════════════════════════════════════════
fixed inset-0 overflow-hidden pointer-events-none z-0 bg-[#f4f0ea]

Layer A — base image (#bg-image):
absolute inset-0 w-full h-full object-cover
src = asset URL #1

Layer B — reveal layer (#reveal-layer):
absolute inset-0
background-image = asset URL #2 (as CSS url)
background-position:center; background-size:cover; background-repeat:no-repeat
maskSize/WebkitMaskSize: 100% 100%; maskRepeat/WebkitMaskRepeat: no-repeat
Mask image is set dynamically by JS each frame (see Spotlight)

Layer C — grid SVG overlay:
absolute inset-0 opacity-10
pattern id="grid" width="48" height="48" patternUnits="userSpaceOnUse"
path: "M 48 0 L 0 0 0 48" fill none stroke="#64748b" strokeWidth="0.6"
full rect fill="url(#grid)"
Pattern x/y attributes are animated by mouse parallax (see Spotlight)

════════════════════════════════════════
MOUSE SPOTLIGHT / REVEAL SYSTEM (critical — recreate exactly)
════════════════════════════════════════
Hook: useSpotlightEffect
- Spotlight radius SPOTLIGHT_R = 260
- Track mouse.x/y on window mousemove; start at -9999,-9999
- Smooth follow: smooth += (mouse - smooth) * 0.1 each RAF frame
- Grid parallax:
  cx = smooth.x/w - 0.5; cy = smooth.y/h - 0.5
  gridOffset lerp toward (cx*16, cy*16) with factor 0.06
  set SVG pattern #grid attributes x and y to gridOffset (2 decimal places)
- Offscreen canvas sized to window; on each frame:
  clear, createRadialGradient(smooth.x, smooth.y, 0 → SPOTLIGHT_R) with stops:
    0: rgba(255,255,255,1)
    0.4: rgba(255,255,255,1)
    0.6: rgba(255,255,255,0.75)
    0.75: rgba(255,255,255,0.4)
    0.88: rgba(255,255,255,0.12)
    1: rgba(255,255,255,0)
  fill a circle of radius 260 at smooth position
  convert canvas.toDataURL() → maskURL = url(data...)
  Apply as maskImage AND webkitMaskImage to BOTH:
    #reveal-layer
    #dup-reveal (inside glass card)
- Resize resets canvas size
- Cancel RAF + remove listeners on unmount

This creates a soft circular “reveal” of the second background image following the cursor, including inside the liquid-glass card.

════════════════════════════════════════
LIQUID GLASS SVG FILTER (exact — do not simplify)
════════════════════════════════════════
Hidden SVG (position absolute, width 0, height 0, pointer-events none) with filter id="liquid-glass-refraction"
filter region: x="-30%" y="-30%" width="160%" height="160%"

Pipeline (exact params):
1. feTurbulence type="fractalNoise" baseFrequency="0.012 0.015" numOctaves={3} result="noise"
2. feColorMatrix type="matrix" values="0 0 0 0 0  0 0 0 0 0  0 0 0 0 0  0 0 0 100 0" in="SourceAlpha" result="boosted_alpha"
3. feGaussianBlur in="boosted_alpha" stdDeviation={45} result="blurred_alpha"
4. feComponentTransfer in="blurred_alpha" result="edge_mask":
   feFuncA type="linear" slope={-1.3} intercept={1}
5. feComposite in="noise" in2="edge_mask" operator="arithmetic" k1={1} k2={0} k3={0} k4={0} result="masked_noise"
6. Chromatic dispersion via 3 displacement maps:
   - red:   feDisplacementMap scale={65} → keep R channel via feColorMatrix
   - green: feDisplacementMap scale={56} → keep G channel
   - blue:  feDisplacementMap scale={47} → keep B channel
   each uses xChannelSelector="R" yChannelSelector="G" on masked_noise
7. feBlend mode="screen" red+green → rg; then screen rg+blue → "chromatic_dispersion"

Applied as CSS filter: url(#liquid-glass-refraction) on the duplicated background layers inside the glass card.

════════════════════════════════════════
GLASS CARD + BACKGROUND SYNC (liquid glass window)
════════════════════════════════════════
Glass card outer:
- data-glass-card
- w-[340px] max-w-full h-[460px] rounded-[48px] p-8
- flex flex-col justify-between relative overflow-hidden
- border: 1px solid rgba(47,47,47,0.15); background: transparent
- Animation: animate-fade-slide-up-card
- group (for hover)

Inside, first child: #dup-video-container
- absolute pointer-events-none z-0 overflow-hidden
- Its left/top/width/height are synced every RAF by useGlassCardSync:
  left = -glassCard.getBoundingClientRect().left
  top  = -glassCard.getBoundingClientRect().top
  width = document.documentElement.clientWidth
  height = document.documentElement.clientHeight
  This makes the card act as a “window” into a full-viewport copy of the background.

Inside dup container:
A) #dup-image — same URL as base bg, absolute inset-0 object-cover scale-[1.06], filter:url(#liquid-glass-refraction)
B) #dup-reveal — same as reveal layer (bg URL #2), scale-[1.06], same filter + mask props; mask updated by spotlight loop

Frost overlay on card (z-[1]):
absolute inset-0 rounded-[48px]
background: rgba(255,255,255,0.05)
box-shadow: inset 0 1.5px 2px rgba(255,255,255,0.3), inset 0 -1px 2px rgba(0,0,0,0.15)

Card content (z-10):
TOP: circular 56×56 (w-14 h-14) shield icon button
  backdrop-blur-[80px], bg rgba(255,255,255,0.05), border 1px rgba(47,47,47,0.15)
  SVG shield path: M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z (fill+stroke currentColor)
  group-hover:scale-105 transition-transform duration-500

BOTTOM copy (Imbue 40px / leading 40px, uppercase, tracking 0.02em, #2F2F2F):
  "Protect the web"
  block font-light: "— Unbreakable,"
  block: "Invisible, Absolute"
Body (Manrope xs / 12px, leading 19px, rgba(47,47,47,0.5), font-light, mt-2):
  same anonymity sentence as hero

════════════════════════════════════════
HELMET CARD
════════════════════════════════════════
- w-[220px] h-[320px]; max-md: w-[180px] h-[260px]
- rounded-[40px] overflow-hidden flex-shrink-0 relative
- border: 1px solid rgba(255,255,255,0.2); background transparent
- Animation: animate-fade-slide-up-helmet
- Image: asset URL #3, alt="Imperial Helmet Ornament"
  absolute inset-0 object-cover pointer-events-none
  scale-[1.40] rotate-[15deg]
  transition-transform duration-1000 ease-[cubic-bezier(0.16,1,0.3,1)]
  group-hover: scale-[1.46] rotate-[18deg]

════════════════════════════════════════
HEADER (exact)
════════════════════════════════════════
w-full flex items-center justify-between py-4
Animation: animate-fade-slide-down

LEFT brand group (cursor-pointer, group):
- Custom LegionLogo SVG 48×48 (w-12 h-12), fill #2F2F2F, group-hover:scale-110 duration-500
  viewBox="0 0 57 56" — 4 path shapes forming a stylized circular/imperial mark (use the exact path d attributes from the design’s LegionLogo)
- Wordmark: font-display uppercase tracking-[0.12em] font-medium text-2xl text-[#2F2F2F]
  text: "Legion VPN"

CENTER nav (hidden below lg, shown lg:flex):
Pill container h-16 px-3 rounded-full gap-1 backdrop-blur-[64px]
border: 1px solid rgba(47,47,47,0.15)
borderTopColor: rgba(47,47,47,0.3)
borderBottomColor: rgba(47,47,47,0.08)
background: linear-gradient(to top right, rgba(255,255,255,0.02), rgba(255,255,255,0.25), rgba(255,255,255,0.01))
Items: Features | Servers | Pricing | Download
Each button: px-5 py-2.5 rounded-full text-xs font-bold tracking-[0.05em] uppercase font-sans
Active default = "Features": text #2F2F2F + absolute inset fill rgba(47,47,47,0.12) rounded-full
Inactive: text rgba(47,47,47,0.6) hover #2F2F2F
Active state toggles on click (local React state)

RIGHT CTAs (hidden below lg):
1) Circular 64×64 (w-16 h-16) button with arrow-up-right SVG (lucide-style: line 7,17→17,7 + polyline 7,7 17,7 17,17)
   border 1px rgba(47,47,47,0.18), borderTopColor rgba(47,47,47,0.3)
   background: linear-gradient(to top right, #fff, #f3f4f6)
2) "Contact Us" pill: px-6 h-16 rounded-full text-xs font-bold uppercase tracking-[0.05em]
   same border/gradient as circle button

MOBILE: only hamburger (lucide Menu size 20)
w-11 h-11 rounded-full, border rgba(47,47,47,0.2), bg rgba(255,255,255,0.3), backdrop-blur 12px, text #2F2F2F
Shown flex lg:hidden

════════════════════════════════════════
LEGION LOGO SVG PATHS (exact)
════════════════════════════════════════
viewBox="0 0 57 56" fill="#2F2F2F" on all paths:

Path1: M8.61805 6.56531C8.60358 6.57818 8.58911 6.58943 8.57624 6.60229C8.21287 6.92872 7.85913 7.26477 7.51505 7.6121C2.87 12.2866 0 18.7284 0 25.8407C0 31.0539 1.54194 35.907 4.19648 39.9689C4.19648 39.9689 4.19809 39.9705 4.19809 39.9721C4.26241 40.0718 4.32832 40.1699 4.39425 40.268C4.9184 41.0463 6.09535 40.9337 6.4539 40.0654L18.9565 9.81992C16.802 6.73733 13.6683 4.87367 8.61805 6.56531Z

Path2: M35.0869 12.4188L41.2852 29.9801C42.5377 33.5354 44.3256 37.7195 46.7116 41.1398C49.8598 36.8544 51.7201 31.5656 51.7201 25.841C51.7201 11.9074 40.7031 0.549946 26.9062 0C31.3841 2.08883 33.4534 7.7925 35.0869 12.4188Z

Path3: M56.2272 49.0769C51.5838 50.0722 47.8423 47.6779 44.9032 44.0165C42.2326 41.0802 39.8224 36.7643 37.8448 30.9271L31.3459 11.7353C30.7896 10.0919 30.1673 8.36164 29.3924 6.76004C29.3924 6.76004 28.8586 5.31119 27.7459 3.96366C26.241 1.91342 24.2714 0.459756 21.5413 0.335938C20.9399 0.437243 20.345 0.557849 19.7582 0.700963C18.0185 1.12227 16.3496 1.71728 14.7674 2.47144C13.0117 3.30601 11.3668 4.3335 9.85547 5.52505C20.3724 2.11764 23.7086 11.2304 26.1059 18.0195L32.3042 35.5807C33.7432 39.6667 35.8897 44.5841 38.84 48.2166C40.0668 47.5027 41.2309 46.6906 42.3194 45.7917C46.5577 50.2878 51.4294 51.3683 56.2706 49.585L56.2272 49.0769Z

Path4: M35.9593 49.6562C35.9593 49.6562 35.9609 49.6562 35.9625 49.6562C33.2774 46.7184 30.8543 42.3912 28.867 36.5267L22.3682 17.3349C22.1366 16.6482 21.8922 15.9471 21.6301 15.246C21.1767 14.0303 19.4612 14.0159 18.9917 15.2251L12.1423 32.8169L8.05836 43.1887C7.81558 43.8078 7.97153 44.5121 8.45228 44.9704C13.0475 49.1545 19.1557 51.7048 25.8588 51.7048C28.2561 51.7048 30.5762 51.3784 32.7805 50.769C37.1442 55.7844 42.2347 57.0452 47.2913 55.1831L47.2479 54.6749C42.6237 55.667 38.8903 53.2952 35.9576 49.6562H35.9593Z

════════════════════════════════════════
ANIMATIONS (exact keyframes + classes)
════════════════════════════════════════
Shared easing: cubic-bezier(0.16, 1, 0.3, 1)

fadeSlideDown: opacity 0→1, translateY(-40px)→0
  .animate-fade-slide-down → 1.2s ease forwards

fadeSlideUp: opacity 0→1, translateY(50px)→0
  .animate-fade-slide-up → 1.4s ease 0.2s both

fadeSlideUpCard: opacity 0→1, translateY(60px)→0
  .animate-fade-slide-up-card → 1.5s ease 0.4s both

fadeSlideUpHelmet: opacity 0→1, translateY(80px) scale(0.95)→ translateY(0) scale(1)
  .animate-fade-slide-up-helmet → 1.6s ease 0.6s both

scaleYIn: opacity 0→1, scaleY(0)→1; transform-origin:top
  .animate-scale-y-in → 1.5s ease 0.4s both

fadeIn: opacity 0→1, translateY(30px)→0
  .animate-fade-in → 1.4s ease 0.5s both

Also define (unused on this page but present): marquee 25s linear infinite translate3d(0)→translate3d(-50%,0)

Entrance choreography on load:
Header ↓ → Hero title ↑ (0.2s delay) → Divider scaleY + Glass card ↑ (0.4s) → Body fade (0.5s) → Helmet ↑ (0.6s)

════════════════════════════════════════
VISUAL INTENT / FEEL (do not deviate)
════════════════════════════════════════
- Soft cream/beige photographic architectural background with subtle 48px slate grid
- Cursor-following soft spotlight that reveals a second image layer (and inside the glass card)
- Large Imbue serif display type in charcoal, stacked imperial slogan
- Frosted liquid-glass card that optically refracts the background through chromatic edge displacement (not a simple blur frosted panel)
- Smaller rounded helmet image card with slight rotation that eases further on hover
- Premium minimal header: logo + wordmark, frosted pill nav, two solid light CTAs
- No purple gradients, no dark theme, no cards-as-dashboard, no extra sections below the fold — this is a single full-viewport composition only

Build it so a pixel-perfect observer cannot tell it apart from the original: same assets, same filter math, same RAF mask + glass sync, same typography, same timings.
```