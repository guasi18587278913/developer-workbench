Build a production-quality, pixel-accurate fullscreen marketing page for a studio brand called INFLUXO. Recreate this exact section in one shot: a fixed top navbar plus a full-viewport hero with a looping CloudFront background video. Do not invent extra sections, extra copy, extra logos, extra overlays, or extra UI. Match layout, type, spacing, colors, motion, and breakpoints exactly as specified.

STACK / CONSTRAINTS
- React + TypeScript + Vite + Tailwind CSS v3.
- lucide-react icons only: Play and X.
- Page shell: min-h-screen, background #0a0a0a.
- White body text (#ffffff), overflow-x hidden.
- Global reset: margin 0, padding 0, box-sizing border-box on *.
- Body font-family: 'Larsseit', sans-serif.

FONTS (load both in index.html, these exact stylesheet URLs)
1) Larsseit (sans, used for almost all UI):
   https://db.onlinewebfonts.com/c/d5bd523d9152e80458f764c62c5bb9df?family=Larsseit
2) Plantin Infant MT Std Italic (serif italic, used ONLY for the two italic headline words):
   https://db.onlinewebfonts.com/c/3188d95f0fc5fdd0ed446e1acdc9902c?family=Plantin+Infant+MT+Std+Italic

Tailwind theme.extend:
- colors.cyan.brand = '#02edf8'
- fontFamily.larsseit = ['Larsseit', 'sans-serif']
- fontFamily.plantin = ['Plantin Infant MT Std Italic', 'serif']

Utility class .font-italic-serif:
- font-family: 'Plantin Infant MT Std Italic', serif
- font-style: italic

BRAND COLOR
- Cyan brand: #02edf8 (Tailwind: bg-cyan-brand / text-cyan-brand)

EXACT BACKGROUND VIDEO (do not substitute, do not use a poster image unless the video fails)
URL:
https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260819_204252_1b44898d-2854-4b81-87e8-eae4e5683398.mp4

Video element attributes: autoPlay, muted, loop, playsInline.
Video CSS: absolute fullscreen cover — width 100%, height 100%, object-fit: cover.
No dark gradient overlay, no vignette, no color filter. Video is the raw background.

ANIMATION SYSTEM (must match exactly)
Keyframes:
1) fadeSlideUp
   from: opacity 0, translateY(30px)
   to:   opacity 1, translateY(0)
2) fadeIn
   from: opacity 0
   to:   opacity 1

Classes:
- .animate-stagger: start opacity 0; animation fadeSlideUp 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards
- .animate-fade: start opacity 0; animation fadeIn 0.6s cubic-bezier(0.16, 1, 0.3, 1) forwards

Delays:
- .delay-0 = 0ms
- .delay-1 = 150ms
- .delay-2 = 300ms
- .delay-3 = 500ms
- .delay-4 = 700ms
- .delay-5 = 900ms
- .delay-6 = 1100ms

Entrance choreography:
- Video wrapper: animate-fade delay-0
- MENU button: animate-stagger delay-0
- Center logo INFLUXO: animate-stagger delay-1
- Desktop LETS CONNECT: animate-stagger delay-2
- Headline line 1: animate-stagger delay-2
- Headline line 2: animate-stagger delay-3
- PLAY OUR STORY button: animate-stagger delay-4
- SEE OUR CRAFT button: animate-stagger delay-5
- Bottom description + Trusted-by block: both animate-stagger delay-6

==================================================
1) FIXED NAVBAR
==================================================
Position: fixed, top 0, left 0, right 0, z-index 50.
Background: transparent by default.
When window.scrollY > 50: background black/80 + backdrop-blur-md.
Transition: all 300ms.

Inner bar:
- display flex, items-center, justify-between
- horizontal padding: 24px (px-6) mobile, 40px (md:px-10) from md up
- vertical padding: 20px (py-5)

LEFT — MENU button (always visible)
- button, opens fullscreen overlay
- flex, items-center, gap 8px
- border: 1px solid white/30, hover border white/60
- rounded-full, padding px-4 py-2
- text-sm, font-larsseit, tracking-wider, color white
- label: MENU (all caps)
- hamburger: two white bars, each 16px wide × 2px tall, stacked with 3px gap (flex-col gap-[3px])
- no third bar

CENTER — wordmark
- absolute left-1/2 -translate-x-1/2 so it is truly centered regardless of left/right button widths
- text: INFLUXO
- font-larsseit, font-medium
- text-lg mobile, md:text-xl
- letter-spacing: 0.3em (tracking-[0.3em])
- white

RIGHT — LETS CONNECT (desktop only)
- hidden on mobile, inline-flex from md breakpoint up
- href="#contact"
- rounded-full, bg #02edf8, text black
- text-sm, font-larsseit, font-semibold, tracking-wider
- padding px-5 py-2
- hover: bg-cyan-brand/90
- label exactly: LETS CONNECT (no apostrophe)

==================================================
2) FULLSCREEN MENU OVERLAY
==================================================
When MENU is clicked:
- lock body overflow hidden; restore on close
- overlay z-index 100
- closed: opacity 0, pointer-events none
- open: opacity 100, pointer-events auto
- overlay fade transition: all 500ms ease-in-out

Inner panel:
- absolute inset-0, bg-black/95, backdrop-blur-xl
- closed: translate-y-full (slides up off-screen)
- open: translate-y-0
- transform transition 500ms, easing cubic-bezier(0.22, 1, 0.36, 1)

Overlay header (same padding as navbar):
- LEFT close button: same pill as MENU, label CLOSE, lucide X icon size 16
- CENTER: same INFLUXO wordmark
- no right CTA in overlay header

Overlay links, vertically centered in remaining height calc(100% - 80px):
- flex-col, items-center, gap 32px
- items in this exact order and spelling:
  Work, Expertise, Studio, Joining, Connect
- hrefs: #work, #expertise, #studio, #joining, #connect
- text-4xl mobile, md:text-6xl
- font-larsseit, font-light, tracking-wide, text-white/90
- hover: text-cyan-brand (#02edf8)
- click closes menu
- stagger on open: each item starts translate-y-8 opacity-0, then translate-y-0 opacity-100
  transition-all 300ms
  delay when opening: 150ms + index * 80ms (Work 150, Expertise 230, Studio 310, Joining 390, Connect 470)
  delay when closing: 0ms

Mobile-only LETS CONNECT in overlay (md:hidden):
- mt-8, px-8 py-3, rounded-full, bg #02edf8, text black
- text-base, font-larsseit, font-semibold, tracking-wider
- href="#contact", closes menu
- same slide/fade as links, delay 550ms when opening

==================================================
3) HERO SECTION
==================================================
<section>: relative, w-full, h-screen, overflow-hidden.

A) VIDEO LAYER
- absolute inset-0, animate-fade delay-0
- <video> with the CloudFront URL above, autoPlay muted loop playsInline
- class: w-full h-full object-cover

B) CENTER CONTENT
- relative z-10
- flex flex-col items-center justify-center
- h-full
- horizontal padding: px-6 (24px) mobile, md:px-10 (40px)

HEADLINE BLOCK
- text-center
- mt-[-2rem] (nudge the whole headline block up 32px from true vertical center)

Line 1 (exact copy):
We make waves.
- "We make " in Larsseit; "waves" in Plantin Infant MT Std Italic (.font-italic-serif)
- font-larsseit, font-light, tracking-tight, leading-[1.1]
- sizes: text-5xl → sm:text-6xl → md:text-7xl → lg:text-[6.5rem]
- animate-stagger delay-2

Line 2 (exact copy):
We spark bonds.
- "We spark " in Larsseit; "bonds" in Plantin Infant MT Std Italic
- same type sizes/weight/leading/tracking as line 1
- mt-1 mobile, md:mt-2
- md:ml-16 (on md+ this second line is indented 64px to the right, creating a staggered two-line composition)
- animate-stagger delay-3

Both lines are <h1>. No extra subtitle under the headline.

CTA ROW
- flex flex-col on mobile (stacked, centered), sm:flex-row on ≥640px
- items-center, gap-4 (16px)
- mt-10 (40px) mobile, md:mt-14 (56px)

Button 1 — PLAY OUR STORY
- <a href="#reel">
- pill: rounded-full, bg-white, text-black
- px-6 py-3, text-sm, font-larsseit, tracking-widest (0.1em)
- flex items-center gap-3
- hover: bg-white/90, transition-all 300ms
- label: PLAY OUR STORY (all caps)
- trailing circular icon well: 28×28px (w-7 h-7), rounded-full, bg-black/10, group-hover:bg-black/20
- inside: lucide Play size 12, fill black, text-black, ml-[1px] so the triangle looks optically centered
- animate-stagger delay-4

Button 2 — SEE OUR CRAFT
- <a href="#work">
- pill: rounded-full
- bg-black/40, backdrop-blur-md
- border 1px solid white/20, hover: border-white/40 and bg-black/60
- same padding/type/gap as button 1
- label: SEE OUR CRAFT (all caps)
- trailing circular icon well: 28×28px, rounded-full, background EXACTLY #02edf8 (bg-cyan-brand)
- same Play icon treatment as button 1 (size 12, fill black, ml-[1px])
- animate-stagger delay-5

C) BOTTOM BAR (pinned to bottom of the hero, over the video)
- absolute bottom-0 left-0 right-0 z-10
- px-6 md:px-10
- pb-8 (32px) mobile, md:pb-10 (40px)
- flex flex-col on mobile, md:flex-row
- items-start on mobile, md:items-end
- justify-between
- gap-6

LEFT — description
- max-w-sm (~24rem)
- text-sm mobile, md:text-base
- font-larsseit, text-white/80, leading-relaxed
- exact copy:
  We are a global experiential creative studio driving brand growth through connecting with audiences in unforgettable moments. See our purpose.
- "See our purpose." is an inline <a href="#vision">, color #02edf8, hover:underline
- animate-stagger delay-6

RIGHT — “Chosen  by” + Volvo card
- flex flex-col items-end gap-3 (right-aligned on all breakpoints)
- label text EXACTLY: "Chosen  by" (two spaces between Chosen and by), then visually uppercase via CSS
- text-[11px], font-larsseit, tracking-[0.2em], text-white/60, uppercase
- card: border 1px solid white/20, rounded-lg, px-8 py-5
- flex items-center justify-center, min-w-[160px]
- inside the card, text: VOLVO
- font-larsseit, text-xl, tracking-[0.15em], text-white/90
- no Volvo SVG/logo image — lettering only
- wrapper animate-stagger delay-6

==================================================
RESPONSIVE RULES (must implement)
==================================================
- Default / mobile (<640px):
  - CTAs stacked vertically
  - LETS CONNECT hidden in top nav; shown only inside the overlay
  - Headline not indented; second line only has mt-1
  - Bottom stack: description on top, Volvo block below, both left-start except Volvo column is items-end
  - Horizontal page padding 24px
- sm (≥640px): CTAs become a horizontal row
- md (≥768px):
  - padding 40px
  - second headline line gets mt-2 and ml-16 indent
  - headline size text-7xl
  - LETS CONNECT visible in navbar
  - bottom bar becomes one row, description left, Volvo right, items-end
  - overlay nav links become text-6xl
- lg (≥1024px): headline size 6.5rem

==================================================
WHAT NOT TO ADD
==================================================
- No extra pages, no work grid, no footer, no cookie banner, no volume control, no video controls, no play/pause UI on the background video
- No drop shadows on type
- No overlay darkening the video
- No third CTA
- No additional trusted-by logos besides the VOLVO text card
- Do not change “LETS CONNECT” to “LET’S CONNECT”
- Do not change “Chosen  by” spacing
- Do not replace the italic words with a CSS italic of Larsseit — they must use Plantin Infant MT Std Italic

Deliver a complete working implementation: index.html font links, Tailwind config with cyan.brand and font families, global CSS for animations + .font-italic-serif, Navbar component, Hero component, and App composing Navbar then Hero. The first paint must look like a cinematic full-bleed video hero with centered two-line headline, two pills under it, and a bottom description + Volvo card, with the INFLUXO nav floating on top.