Build a single-page immersive scroll experience called "Step Into Wonder" as a React 18 + TypeScript + Vite + Tailwind CSS app. The entire page is one component (App.tsx) using inline styles plus a few Tailwind classes. Recreate it EXACTLY as specified below.

=====================================================
1. HTML SHELL & FONTS
=====================================================
- index.html: <title>Step Into Wonder</title>, lang="en".
- Preconnect to https://fonts.googleapis.com and https://fonts.gstatic.com (crossorigin), then load:
  https://fonts.googleapis.com/css2?family=Viaoda+Libre&family=Imprima&display=swap
- Two fonts only: 'Viaoda Libre', serif (display headings) and 'Imprima', sans-serif (body/UI).

Global CSS (index.css):
- @tailwind base/components/utilities.
- *, *::before, *::after { box-sizing: border-box; }
- html, body { background: #0a0608; scroll-behavior: auto; }
- body { font-family: 'Imprima', sans-serif; -webkit-font-smoothing: antialiased; }
- html { scrollbar-gutter: stable; }
- @keyframes bobUp { 0%,100% { transform: translateY(0); } 50% { transform: translateY(-6px); } }

=====================================================
2. EXACT ASSET URLS
=====================================================
const PORTAL_BG     = 'https://flick-award-65707097.figma.site/_assets/v11/bbc8d4f1308d5df012c4b0a657b44c6d92609c24.png';
const CURTAIN_LEFT  = 'https://flick-award-65707097.figma.site/_assets/v11/535b5bc4f8b600a7758bc74dc3540f405f0b89a6.png';
const CURTAIN_RIGHT = 'https://flick-award-65707097.figma.site/_assets/v11/ab14033a7fe6dcedbae303726331b6a26d9d201c.png';
const WORLD_BG      = 'https://flick-award-65707097.figma.site/_assets/v11/4f4f0651516e75fbfeebf87e12be372c0683a7fd.png';
const BOTTOM_CLOUDS = 'https://flick-award-65707097.figma.site/_assets/v11/fb811f79bccceab1c4cdbb81b5524632cffc9c52.png';

const CARD_IMAGES = [
  'https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260525_160507_2ccbb4eb-1469-484f-af25-59168ad9a233.png&w=1280&q=85',
  'https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260525_160644_072a7f68-a101-4ded-a332-7d37707dbdd1.png&w=1280&q=85',
  'https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260525_160706_1c153d04-0dfb-4ac9-a4ef-e74f301c329c.png&w=1280&q=85',
];

=====================================================
3. SCENE-2 CARD DATA (exact copy + pastel hex colors)
=====================================================
1. "Hidden Realms"  — "Luminous sanctuaries unseen by wandering eyes"  — #f3cdd6
2. "Wild Solitudes" — "Dissolve into untamed horizons and deep calm"   — #dcedc2
3. "Silent Havens"  — "Remote escapes far beyond ordinary reach"       — #c3e3f4
4. "Bespoke Quests" — "Journeys shaped around your vision and soul"    — #f0e4c0
5. "Vivid Drifts"   — "Surreal passages through breathtaking terrain"  — #dcd2f2
6. "Mystic Crests"  — "Timeless ridgelines wrapped in cloud and myth"  — #f3cdd6
7. "Deep Currents"  — "Glowing depths alive with uncharted wonder"     — #c3e3f4
8. "Gilded Dusk"    — "Amber horizons that stretch past all reason"    — #f0e4c0
9. "Glassy Tides"   — "Calm waters holding skies of pure stillness"    — #dcedc2

=====================================================
4. PAGE STRUCTURE & SCROLL MECHANICS
=====================================================
- Outer container: height 480vh, position relative. Inside it, a sticky viewport: position sticky, top 0, width 100%, height 100vh, overflow hidden, background #0a0608. All visuals render inside this sticky viewport (scrollytelling: the page scrolls, the visuals stay pinned and animate by scroll progress).
- scrollProgress = clamp(window.scrollY / (container.scrollHeight - window.innerHeight), 0, 1), updated via a passive scroll listener into both state and a ref (the ref feeds the rAF loop).
- Helpers: easeInOut(t) = t < 0.5 ? 2t² : -1 + (4 - 2t)t; lerp(a,b,t) = a + (b-a)t; clamp(v,min,max). Let ep = easeInOut(scrollProgress).
- Mobile detection hook: isMobile = window.innerWidth < 768, kept in sync via matchMedia('(max-width: 767px)') change listener.

=====================================================
5. ENTRANCE SEQUENCE (setTimeouts on mount)
=====================================================
- t=100ms:  curtainsOpen = true (curtains slide apart by 62%).
- t=600ms:  uiVisible = true (scene-1 UI fades/slides in).
- t=2200ms: entranceDone = true; after this the curtains' CSS transition becomes 'none' so the rAF loop drives them directly.
- Curtain entrance transition: 'transform 1.8s cubic-bezier(0.16, 1, 0.3, 1)'.

=====================================================
6. MOUSE PARALLAX + rAF LOOP
=====================================================
- mousemove (passive): raw.x = (clientX/innerWidth - 0.5) * 2; raw.y = (clientY/innerHeight - 0.5) * 2 (range -1..1).
- Every requestAnimationFrame: smooth = lerp(smooth, raw, 0.07). Use rx = -smooth.x, ry = -smooth.y (layers drift OPPOSITE the cursor).
- Parallax magnitudes (px): world 6, clouds 9, portal 7, curtainL 14, curtainR 14.
- The rAF loop writes style.transform directly onto refs (all with willChange 'transform'):
  • WORLD:  scale = lerp(1, 1.18, ep); `scale(s) translate(${rx*6}px, ${ry*6}px)`; transformOrigin '50% 50%'.
  • CLOUDS: scale = lerp(1, 1.4, ep); `scale(s) translate(${rx*9}px, ${ry*9*0.4}px)`; transformOrigin '50% 100%'.
  • PORTAL: scale = lerp(1, 7.5, ep); `scale(s) translate(${rx*7}px, ${ry*7}px)`; transformOrigin '52% 38%'  ← zooms 7.5× into a point slightly right of center, above middle: the "fly through the portal" effect.
  • CURTAIN LEFT:  totalShift = (curtainsOpen ? 62 : 0) + lerp(0, 150, ep); s = lerp(1, 1.3, ep); `translateX(calc(-${totalShift}% + ${rx*14}px)) translateY(${ry*14*0.3}px) scale(s)`; transformOrigin 'left center'.
  • CURTAIN RIGHT: identical but translateX positive; transformOrigin 'right center'.
  • Until entranceDone, curtains keep transition 'transform 1.8s cubic-bezier(0.16,1,0.3,1)'; afterwards 'none'.

=====================================================
7. SCROLL-DERIVED OPACITIES (per render)
=====================================================
- portalOpacity: 1 while p < 0.65, then clamp(1 - (p-0.65)/0.2, 0, 1) (fully gone at 85%).
- cloudsOpacity: p < 0.05 ? lerp(0.7, 1, p/0.05) : 1.
- scene1Opacity: clamp(1 - p/0.22, 0, 1).
- scene2Opacity: clamp((p - 0.68)/0.16, 0, 1).
- Arc slider: arcSweepDeg = (9-1)*10 = 80; arcRotationOffset = lerp(0, 80, clamp((p-0.70)/0.30, 0, 1)).
- Scene 1 and Scene 2 containers get pointerEvents 'none' when their opacity < 0.05.

=====================================================
8. LAYER STACK (inside sticky viewport, bottom → top)
=====================================================
1. WORLD: absolute inset-0 (ref); <img src=WORLD_BG> w/h 100%, objectFit cover, display block.
2. BOTTOM CLOUDS (z 10): absolute bottom/left/right 0 (ref), opacity = cloudsOpacity; <img src=BOTTOM_CLOUDS> width 100%, height auto.
3. ARC CARD SLIDER (z 9): absolute, bottom 80px desktop / 60px mobile, left 50% translateX(-50%), width 100%, flex centered alignItems flex-end, opacity = scene2Opacity.
4. PORTAL (z 15): absolute inset-0 (ref), opacity = portalOpacity; <img src=PORTAL_BG> cover.
5. BOTTOM FADE (z 16): absolute bottom, height 40%, linear-gradient(to top, rgba(0,0,0,0.45) 0%, transparent 100%), pointerEvents none.
6. CURTAIN LEFT (z 16): absolute inset-0 (ref); <img src=CURTAIN_LEFT> cover, objectPosition 'right center'.
7. CURTAIN RIGHT (z 16): absolute inset-0 (ref); <img src=CURTAIN_RIGHT> cover, objectPosition 'left center'.
8. TOP FADE (z 45): absolute top, height 42vh, linear-gradient(to bottom, rgba(0,0,0,0.45) 0%, transparent 100%), pointerEvents none.
9. NAV (z 50).  10. SCENE 1 UI (z 20).  11. SCENE 2 UI (z 46).

=====================================================
9. NAVIGATION
=====================================================
- Absolute top full-width flex, justify space-between, padding '22px 48px' desktop / '18px 20px' mobile.
- Link style: 'Imprima', 12px, letterSpacing 0.12em, uppercase, color #fff, no underline, opacity 0.9. Links are <a href="#">.
- Desktop: left group (flex gap 36px): Worlds, Atelier, Immersions. Center: StarLogo. Right group (gap 36px): Craft, Codex, Connect.
- Mobile: "Explore" (span, 11px), StarLogo, "Connect" (span, 11px).
- StarLogo SVG 28×28, viewBox "0 0 28 28": white star path "M14 2l2.09 6.42H23l-5.45 3.96 2.09 6.42L14 14.84l-5.64 4.06 2.09-6.42L4.96 8.42h6.95L14 2z" opacity 0.9; circles (14,24) r1.5 opacity 0.6, (6,6) r1 opacity 0.4, (22,6) r1 opacity 0.4.

=====================================================
10. SCENE 1 UI (opacity = scene1Opacity, transition 'opacity 0.1s linear')
=====================================================
All blocks enter from opacity 0 / translateY(+20–32px) with 'opacity 0.9s ease, transform 0.9s ease', gated by uiVisible, staggered delays: 0.3s heading/cards-column, 0.55s desktop card row, 0.8s dots, 0.9s scroll cue.

DESKTOP (Tailwind xl:, ≥1280px):
- Heading: absolute, top 46%, left 60px, maxWidth 440px, translateY(-50%) when visible (from calc(-50% + 24px)).
  h1 'Viaoda Libre', textShadow '0 2px 24px rgba(0,0,0,0.7), 0 1px 4px rgba(0,0,0,0.9)':
  Line 1 "FALL › INTO": clamp(32px, 4.5vw, 54px), lineHeight 1.1, #fff, letterSpacing 0.04em; "›" span rgba(255,220,180,0.7) fontSize 0.8em; "INTO" italic <em>.
  Line 2 "REVERIE": clamp(50px, 7.5vw, 88px), lineHeight 0.9, #fff, letterSpacing -0.02em.
  Paragraph: 'Imprima' 18px, lineHeight 1.7, rgba(255,245,235,0.88), marginTop 18px, maxWidth 300px, textShadow '0 1px 12px rgba(0,0,0,0.8)'. Text: "Crafting boundless digital worlds where the edge between AI, vision, and living myth dissolves."
- Card row: absolute right 40px, top 50% translateY(-50%) when visible (from calc(-50% + 32px)), flex gap 12px, delay 0.55s. Three cards 158×158px, borderRadius 28px, boxShadow '0 8px 32px rgba(0,0,0,0.45)', overflow hidden, cursor pointer, backgrounds = CARD_IMAGES[0..2] cover center.
  Overlays per card: (a) bottom 60% gradient 'linear-gradient(to top, rgba(0,0,0,0.72) 0%, rgba(0,0,0,0.18) 60%, transparent 100%)'; (b) bottom 44% strip with backdropFilter blur(6px) (+ -webkit-) masked by 'linear-gradient(to top, black 40%, transparent 100%)' (+ -webkit- mask).
  Content row at bottom 12px, left/right 12px, flex gap 8px:
  • Cards 1 & 3 (type "play"): 30×30px circle, borderRadius 50%, background rgba(255,255,255,0.88), centered SVG 10×12 viewBox "0 0 10 12" path "M1 1l8 5-8 5V1z" fill #1a0a00; label "View Reel" 'Imprima' 18px #fff lineHeight 1.3.
  • Card 2 (type "number"): "32" in 'Viaoda Libre' 36px #fff lineHeight 1, textShadow '0 2px 10px rgba(0,0,0,0.4)'; label "World Patrons" 'Imprima' 18px rgba(255,255,255,0.9).

TABLET (md: to xl:, 768–1279px; hidden below md and at xl+):
- Centered flex column, gap 28px, px-8 pt-20 pb-24, delay-0.3s entrance.
- Same h1 but dark-brown: both lines #3b1a0a, "›" #6b2e0e; line 1 clamp(28px, 5vw, 44px) tracking-widest leading-tight; line 2 clamp(60px, 12vw, 86px) tracking-tight leading-none.
- Paragraph 16px, maxWidth 400px, #5c2d0e, centered.
- All three cards in a row (gap 14px), 140×140px, borderRadius 22px, boxShadow '0 8px 32px rgba(0,0,0,0.45)', same gradient + blur overlays; play circle 26×26px with 8×10 svg, labels 14px, "32" at 28px.

MOBILE (<768px, md:hidden):
- Centered flex column, px-6 pt-20 pb-24, same entrance.
- h1 dark-brown: line 1 clamp(26px, 7vw, 42px), line 2 clamp(52px, 16vw, 80px), #3b1a0a with "›" #6b2e0e.
- Paragraph 15px leading-relaxed, maxWidth 280px, #5c2d0e, mt-4.
- ONE card only (CARD_IMAGES[0]), 140×140px, borderRadius 22px, boxShadow '0 8px 32px rgba(0,0,0,0.5)', simpler overlay: bottom 60% 'linear-gradient(to top, rgba(0,0,0,0.72) 0%, transparent 100%)' (no blur strip); play circle 26×26 + "View Reel" 13px; card mt-6.

SLIDER DOTS:
- Desktop: absolute bottom 40px, left 60px. Mobile: bottom 28px, left 50% translateX(-50%).
- Flex gap 7px, four bars height 4px borderRadius 2px: first 28px wide rgba(255,255,255,0.9); other three 14px wide rgba(255,255,255,0.35). Fade in 'opacity 0.9s ease' delay 0.8s.

SCROLL CUE (desktop only):
- Absolute bottom 36px, left 50% translateX(-50%), column, gap 8px, fade delay 0.9s.
- Label "DESCEND": 'Imprima' 10px, letterSpacing 0.22em, uppercase, rgba(255,255,255,0.6).
- Chevron: 34×34px circle, border '1.5px solid rgba(255,255,255,0.5)', centered SVG 12×8 path "M1 1.5l5 4.5 5-4.5" stroke rgba(255,255,255,0.7) strokeWidth 1.5, round caps/joins; circle animates 'bobUp 1.8s ease-in-out infinite'.

=====================================================
11. SCENE 2 UI (z 46, opacity = scene2Opacity)
=====================================================
- Absolute inset-0 flex column, alignItems center.
- Header block: marginTop 12vh desktop / 8vh mobile, textAlign center, padding '0 20px'.
  h2 "FORGE BEYOND THE REAL": 'Viaoda Libre', clamp(38px, 6.5vw, 78px) desktop / clamp(28px, 8vw, 44px) mobile, #ffffff, letterSpacing 0.03em, lineHeight 1.05, textShadow '0 2px 20px rgba(0,0,0,0.4)'.
  Paragraph: "Singular voyages to astonishing destinations, shaped for those who seek beauty beyond the ordinary and the known." — 'Imprima', 20px desktop / 14px mobile, lineHeight 1.6, letterSpacing -0.01em, marginTop 12px, maxWidth 480px desktop / 260px mobile, rgba(255,255,255,0.82), centered.

=====================================================
12. ARC CARD SLIDER (ferris wheel of 9 pastel cards)
=====================================================
Props: cards (the 9 items), rotationOffset (from scroll), isMobile.
- Geometry: cardSpacingDeg = 9 desktop / 12 mobile; centerIndex = 4; arcRadius = 1100 desktop / 700 mobile; card 220×230 desktop / 160×175 mobile; container height 360px desktop / 260px mobile, width 100vw, flex center alignItems flex-end, overflow visible.
- Per card i:
  baseDeg = (i - centerIndex) * cardSpacingDeg
  deg = baseDeg - rotationOffset + centerIndex * cardSpacingDeg
  rad = deg·π/180; x = sin(rad)·arcRadius; y = arcRadius - cos(rad)·arcRadius
  Wrapper: absolute; bottom = -y + 200px desktop (140px mobile); left = calc(50% + x px - cardW/2 px); transform rotate(deg); transformOrigin '{cardW/2}px {arcRadius}px'; transition 'transform 0.05s linear'; willChange transform.
  (Cards ride a huge circle centered far below the viewport; scroll rotates the wheel 80° through all 9 cards.)
- Card visual: borderRadius 26px desktop / 18px mobile, background = pastel color, boxShadow '0 8px 40px rgba(80,40,60,0.18)', padding '18px 16px' desktop / 12px mobile, flex column justify space-between, overflow hidden.
  Top-right badge: 24×24px circle, border '1.5px solid rgba(80,50,60,0.3)', text "01".."09" (zero-padded) in 'Imprima' 10px rgba(80,50,60,0.6).
  Bottom: h3 title 'Viaoda Libre' 30px desktop / 22px mobile, #3a2530, lineHeight 1.15, margin '0 0 8px' (4px mobile); p desc 'Imprima' 15px desktop / 12px mobile, rgba(58,37,48,0.65), lineHeight 1.5.

=====================================================
13. THE COMPLETE EXPERIENCE, SUMMARIZED
=====================================================
Load: closed painted curtains over a glowing portal-archway scene → 100ms later curtains part 62% with a 1.8s springy ease → "FALL › INTO REVERIE" title, three photo cards, dots, and "DESCEND" cue fade in staggered. Scroll (480vh, all scroll-scrubbed with easeInOut): the world zooms to 1.18×, clouds to 1.4×, curtains slide fully offscreen (+150%) while scaling to 1.3×, and the portal frame zooms 7.5× toward origin (52%, 38%) then fades out between 65–85% progress, revealing the world beyond. Scene-1 UI fades out by 22% progress. From 68% Scene 2 fades in: "FORGE BEYOND THE REAL" plus a giant arc slider of 9 pastel info cards along the bottom clouds, which rotates 80° across the last 30% of scroll to sweep through every card. Throughout, all layers gently drift opposite the mouse (parallax magnitudes 6–14px, smoothed with lerp factor 0.07 in a requestAnimationFrame loop).
```