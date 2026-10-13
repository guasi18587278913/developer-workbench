Build a one-page luxury real-estate landing site called "Aether Lane" using Vite + React 18 + TypeScript, Tailwind CSS 3, Framer Motion (v12), and lucide-react. Page title: "Aether Lane | Luxury Real Estate". Recreate it EXACTLY as specified below.

## FONTS
Load Inter Tight from Google Fonts in index.html (weights 400, 500, 600, 700):
https://fonts.googleapis.com/css2?family=Inter+Tight:wght@400;500;600;700&display=swap
Set it as the default sans font in Tailwind (`fontFamily.sans: ['Inter Tight', 'system-ui', 'sans-serif']`) and on `body`. Apply `-webkit-font-smoothing: antialiased`, `scroll-behavior: smooth` on html, and `overflow-x: hidden` on body.

## TAILWIND THEME
Extend colors:
- brand.blue: #8F9EFF
- brand.navy: #271C40
- brand.dark: #020319

Extend animations/keyframes:
- `marquee`: translateX(0%) → translateX(-50%), 30s linear infinite
- `marquee-reverse`: translateX(-50%) → translateX(0%), 30s linear infinite

## IMAGE ASSETS (use these exact URLs)
- SKY BACKGROUND (hero): https://soft-zoom-63098134.figma.site/_assets/v11/7af55796a90a26e2d57c9fa2a48815874023cff0.png
- BUILDING FOREGROUND (hero): https://soft-zoom-63098134.figma.site/_assets/v11/644aba5492aa8bd5756bc5c6d65255d577b1aaf3.png
- MOUNTAIN BACKGROUND (below hero): https://soft-zoom-63098134.figma.site/_assets/v11/3d8fdaf726b804c1299840860af873a910ce1571.png

## PAGE STRUCTURE (App.tsx)
Root wrapper: `<div className="relative bg-black">` with a ref. Use Framer Motion `useScroll` on this wrapper with offset `['start start', 'end end']`, and `useTransform(scrollYProgress, [0, 1], ['0%', '-20%'])` as a parallax `y` value.

Order inside the wrapper:
1. Navbar (fixed)
2. Hero (full screen)
3. A `<div className="relative z-40 -mt-[25vh]">` that pulls itself up 25vh over the hero. Inside it:
   - A `motion.div` with `className="absolute -top-[10vh] left-0 right-0 bottom-0 z-0"` and `style={{ y }}` (the -20% parallax) containing the MOUNTAIN image as `<img className="h-[120%] w-full object-cover object-top" />` (empty alt).
   - A `<div className="relative z-10">` containing ContentSection then StatsSection (so all content renders on top of the mountain image).

## NAVBAR (fixed, glassmorphism pill)
`<header className="fixed top-0 left-0 right-0 z-[60] flex justify-center px-4 pt-4 md:pt-6">` containing
`<nav className="flex items-center gap-4 rounded-full bg-[#312D7C]/40 px-4 py-3 backdrop-blur-[15px] md:gap-8 lg:gap-20">`.

Left: logo — an inline white SVG (viewBox "0 0 256 256", h-6 w-6, md:h-7 md:w-7) with this exact path:
`M 228 0 C 172.772 0 128 44.772 128 100 L 128 0 L 0 0 L 0 28 C 0 83.228 44.772 128 100 128 L 0 128 L 0 256 L 28 256 C 83.228 256 128 211.228 128 156 L 128 256 L 256 256 L 256 228 C 256 172.772 211.228 128 156 128 L 256 128 L 256 0 Z`
(a four-petal pinwheel shape), next to text "Aether Lane" (`text-base font-medium text-white md:text-xl`).

Center (hidden below md): links Home, About, Estates, Projects, Inquire → `href="#home"` etc. First link `text-white`, the rest `text-[#B6B8C3] hover:text-white`, all `text-sm transition-colors`, gap-6.

Right (hidden below md): "Get in touch" button — `relative overflow-hidden rounded-full border border-white/80 px-6 py-2 text-[15px] font-medium text-white/90 shadow-inner transition-transform hover:scale-105` with this exact layered background:
`linear-gradient(180deg, rgba(255,255,255,0) 30%, rgba(255,255,255,0.10) 76%), radial-gradient(ellipse at 50% 100%, rgba(255,255,255,0.7) 0%, transparent 100%), #BEC7FF`
Label span: `relative z-10 text-brand-navy/80 drop-shadow-sm`. (This same button style is reused twice more, below.)

Mobile (below md): animated hamburger of three motion.span bars (h-[2px] w-5 rounded-full bg-white, at top 2px/9px/16px). Open state: top bar rotate 45 + y 7, bottom bar rotate -45 + y -7 (0.3s, cubic-bezier(0.25,0.1,0.25,1)); middle bar fades out with scaleX 0 (0.2s easeInOut). When open, lock body scroll and show a fullscreen menu via AnimatePresence: backdrop `bg-brand-dark/95 backdrop-blur-xl` fading in (0.3s), links stacked vertically (`text-3xl font-medium text-white/90`) with staggered variants — open: staggerChildren 0.06, delayChildren 0.1; closed: staggerChildren 0.03 reversed. Each item animates opacity 0→1, y 20→0, blur(4px)→blur(0px), 0.35s. Include a "Get in touch" button (same gradient style, px-8 py-3 text-lg) at the bottom; clicking anything closes the menu.

## HERO (100vh, layered parallax)
`<section className="relative z-10 h-screen w-full overflow-hidden">` with `useScroll` offset `['start start', 'end start']` and `bgY = useTransform(scrollYProgress, [0, 1], ['0%', '8%'])`.

Layers, bottom to top:
1. z-0: motion.div `absolute inset-0` with `style={{ y: bgY }}` → SKY image, `h-[120%] w-full object-cover`.
2. z-10: title container `absolute inset-0 flex items-start justify-center pt-[22vh] md:pt-32 lg:pt-36`. The `<h1>` reads `Galaxy&nbsp;&nbsp;Home` (two non-breaking spaces between words) with classes `whitespace-nowrap bg-clip-text text-center text-[clamp(3rem,14vw,14rem)] font-semibold leading-none text-transparent mix-blend-lighten` and inline `backgroundImage: 'linear-gradient(to bottom, #A8B4FF, #FFFFFF)'`.
3. z-20 (hidden below md, `mix-blend-overlay`): two absolutely-positioned subtexts at `top-[200px] md:top-[320px]` — left (`left-6 md:left-12 lg:left-24`): "Elegance Above the Skyline" in `text-lg font-medium text-white/70 md:text-[22px] md:leading-6`; right (`right-6 md:right-12 lg:right-24`): "Your Dream Residence Starts Here" in the same style but `text-white`.
4. z-30: motion.div `absolute inset-0` with the SAME `bgY` parallax → BUILDING image (`alt="Luxury hilltop residence"`), `h-[120%] w-full object-cover`. It overlaps the bottom of the title so the building appears in front of the text.

The mountain section that follows overlaps the hero by 25vh (see App structure), so the building appears to sit in front of the mountain landscape as you scroll.

## CONTENT SECTION
`<section className="relative pt-24 sm:pt-32 md:pt-40">` containing:

1. Description + CTA (`flex flex-col items-center justify-center px-5 py-16 sm:px-6 md:py-32`):
   - Paragraph, max-w-[600px], centered: "Explore distinguished estates, iconic design, and meticulously curated homes across the globe's most sought-after destinations." Classes: `text-sm font-medium leading-relaxed text-white/90 sm:text-base md:text-lg` with `textShadow: '2px 4px 26px rgba(0, 0, 0, 0.56)'`.
   - "Get in touch" button (same gradient style as navbar; `mt-6 px-8 py-2.5 text-base sm:mt-7 sm:px-10 sm:py-3 sm:text-lg`).

2. SCROLL-DRIVEN TEXT FILL section: the sentence
   "We present refined estates that merge remarkable design, prime surroundings, and relentless craftsmanship. Each residence is chosen for the experience it delivers not merely the footprint it provides."
   rendered per-character. Container: section with ref, `useScroll` offset `['start 0.8', 'end 0.2']`. Wrapper `max-w-[820px] px-5 pb-16 pt-8 sm:px-6 sm:pb-24 sm:pt-12 md:px-12`; paragraph `text-center text-xl leading-snug tracking-tight sm:text-2xl md:text-[40px] md:leading-[48px]`. Split the text into words (each word in `inline-block whitespace-nowrap` so lines wrap by word), then each character (including spaces, rendered as \u00A0) is a component: a relatively-positioned span holding an invisible copy of the char (`invisible font-medium`, reserves layout) plus an absolutely-positioned `motion.span` (`absolute inset-0 font-medium text-white`) whose opacity maps from 0.25 → 1 via `useTransform(scrollYProgress, [charIndex/total - 0.01, charIndex/total + 0.01], [0.25, 1])`. Result: letters "light up" left-to-right as you scroll.

3. LOGO MARQUEE: `<section className="relative mx-auto max-w-[820px] overflow-hidden py-4 sm:py-6">` with two rows. Each row is `flex overflow-hidden` containing TWO identical flex tracks (second `aria-hidden`) of `items-center gap-8 sm:gap-12`, each track rendering the logo list twice, so the -50% translate loops seamlessly.
   - Row 1 (mb-5 sm:mb-8, animate-marquee, leftward): Sparkles "Prism", Waves "Cascade", Star "Pinnacle" — list repeated so the base array is those three twice.
   - Row 2 (animate-marquee-reverse, rightward): Zap "Impulse", Orbit "Nexus", Gem "Radiant", Orbit "Nexus", Gem "Radiant".
   Icons are lucide-react, `h-4 w-4 text-white/80 sm:h-5 sm:w-5`; names `text-sm font-medium text-white/90 sm:text-base whitespace-nowrap`; each item `flex shrink-0 items-center gap-1.5 px-3 sm:gap-2 sm:px-4`.

## STATS SECTION
`<section className="relative px-5 py-16 sm:px-6 md:py-32">`. First child: a pointer-events-none overlay `absolute -top-[400px] left-0 right-0 bottom-0 z-0 bg-gradient-to-b from-transparent via-white/60 to-white` — this fades the dark mountain image into white so the stats sit on a light background.

Content (`relative z-10 mx-auto max-w-5xl`):
- H2 "Only the proven results here": `mb-10 text-center text-2xl font-medium text-brand-navy sm:mb-16 md:text-[40px] md:leading-[44px]`.
- Stats grid: `grid grid-cols-2 gap-8 sm:gap-6 md:flex md:flex-nowrap md:items-center md:justify-center md:gap-0`. Four stats: 500 "Estates Delivered", 25 "Exclusive Markets", 12 "Years in the Field", 99% "Owner Satisfaction". Value: `text-4xl font-semibold text-brand-navy sm:text-5xl md:text-[64px] md:leading-[76px]`; label: `text-center text-sm font-medium text-brand-navy/70 sm:text-base md:text-xl`; each stat column `flex flex-col items-center gap-2 md:w-[200px] md:gap-4`. Between stats on md+: vertical divider `mx-8 h-[80px] w-px bg-brand-navy/20 lg:mx-12`.
- Entrance animation: `useInView` (once, margin '-100px'); each stat animates opacity 0→1 and y 30→0 over 0.6s with 0.15s stagger per index.

## SUMMARY OF ALL MOTION
- Hero sky + building: shared parallax, y 0% → 8% over hero scroll ('start start' → 'end start').
- Mountain background: parallax y 0% → -20% over full page scroll.
- Text-fill paragraph: per-character opacity 0.25 → 1 driven by scroll position.
- Logo marquees: infinite 30s linear loops, row 1 leftward, row 2 rightward.
- Stats: staggered fade-up on scroll into view.
- Buttons: hover:scale-105. Mobile menu: hamburger-to-X morph, blur/fade staggered links.