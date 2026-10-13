Build a single-page dark portfolio landing page for a remote development agency called **CO\</DEVHAUS**, using **React + TypeScript + Vite + Tailwind CSS + Framer Motion + lucide-react** (icons: `ArrowUpRight`, `Menu`, `X`). Recreate it exactly as specified below.

## Global setup

- Page `<title>`: `CO</DEVHAUS - Dedicated Engineering Crew`
- Font: **Manrope** from Google Fonts, weights 200–800: `https://fonts.googleapis.com/css2?family=Manrope:wght@200;300;400;500;600;700;800&display=swap` (with preconnects to `fonts.googleapis.com` and `fonts.gstatic.com`)
- Global CSS:  `html { scroll-behavior: smooth }`; `body { font-family: 'Manrope', sans-serif; background: #000; color: #fff; -webkit-font-smoothing: antialiased; -moz-osx-font-smoothing: grayscale }`
- Text selection style: `::selection { background: rgba(168, 85, 247, 0.4); color: #fff }`
- Accent color used throughout: **#A22211** (dark brick red)

## "Liquid glass" utility class (CSS, exact values)

Define a `.liquid-glass` class:

```css
.liquid-glass {
  background: linear-gradient(165deg, rgba(255,255,255,0.005) 0%, rgba(255,255,255,0.002) 40%, rgba(255,255,255,0.001) 100%);
  backdrop-filter: blur(18px) saturate(1.4) brightness(1.05);
  -webkit-backdrop-filter: blur(18px) saturate(1.4) brightness(1.05);
  border: none;
  box-shadow: inset 0 0 12px rgba(255, 255, 255, 0.15);
  position: relative;
  overflow: hidden;
}
.liquid-glass::before {
  content: '';
  position: absolute;
  inset: 0;
  border-radius: inherit;
  padding: 1.5px;
  background: linear-gradient(180deg,
    rgba(255,255,255,0.08) 0%, rgba(255,255,255,0.025) 15%,
    rgba(255,255,255,0.005) 40%, rgba(255,255,255,0.005) 60%,
    rgba(255,255,255,0.025) 85%, rgba(255,255,255,0.06) 100%);
  -webkit-mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
  -webkit-mask-composite: xor;
  mask-composite: exclude;
  pointer-events: none;
}
.liquid-glass::after {
  content: '';
  position: absolute;
  inset: 0;
  border-radius: inherit;
  background: radial-gradient(ellipse at 50% 0%, rgba(255,255,255,0.01) 0%, transparent 50%),
              radial-gradient(ellipse at center, transparent 55%, rgba(255,255,255,0.005) 80%, rgba(255,255,255,0.01) 100%);
  pointer-events: none;
}
```

## Page structure (sticky video background)

Root: `<div class="relative" style="background-color: #000000">`.

**Sticky background wrapper** for the first two sections: an outer `relative z-0` div containing a `sticky top-0 h-screen w-full overflow-hidden` div with a fullscreen background **video**:

- `src="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260803_194549_38b1103b-2df4-4661-bfc8-3e318cb3cfaa.mp4"`
- attributes `autoPlay muted loop playsInline`, classes `w-full h-full object-cover`
- Overlaid on the bottom 40% of the video: an `absolute inset-x-0 bottom-0 h-[40%] pointer-events-none` div with `background: linear-gradient(to bottom, transparent, #000000)`

Then a `relative z-10 -mt-[100vh]` div (pulls content up over the sticky video) containing the Nav, Hero, and About/Features sections. The video stays pinned while these two sections scroll over it, then fades out.

The third section (text-fill + stats + CTA) sits after in a plain `relative z-10` div on pure black, followed by a `h-[10vh]` spacer.

## 1. Navbar (fixed)

`fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 sm:px-8 md:px-12 py-5 md:py-6`.

- Left logo: `CO</DEVHAUS` — white, `font-light text-lg tracking-wide`, where "DEVHAUS" is `font-normal` (literally rendered as `CO</` + `DEVHAUS`).
- Desktop menu (`hidden md:flex items-center gap-2`): links **About, Portfolio, Services, Prices** (`text-sm px-4 py-2 rounded-full transition-all duration-300`). Active item ("About") gets `border border-[#A22211] text-white`; others `text-white/70 hover:text-white`.
- **Join us** pill button: `bg-[#A22211] text-white text-sm font-medium px-5 py-2 rounded-full hover:bg-[#A22211]/90 transition-all duration-300 ml-4`.
- Mobile: a hamburger button (`md:hidden`, `w-10 h-10`, `z-[60]`) toggling `Menu`/`X` icons (size 24) with Framer Motion `AnimatePresence mode="wait"` — icon swaps with `initial {opacity: 0, rotate: ±90}` → `animate {opacity: 1, rotate: 0}` → `exit {opacity: 0, rotate: ∓90}`, duration 0.2s.
- Mobile fullscreen menu (AnimatePresence): fixed `inset-0 z-[55]`, backdrop `bg-black/95 backdrop-blur-xl` fading in over 0.3s; close X button top-right; nav links centered vertically in a column (`gap-6`), `text-2xl font-light`, each staggering in with `{opacity: 0, y: 20}` → `{opacity: 1, y: 0}`, duration 0.3s, delay `0.15 + index * 0.05`; ends with a white "Join us" pill (`bg-white text-black text-lg font-medium px-8 py-3 rounded-full`) at delay 0.4s.

## 2. Hero section

`px-6 sm:px-8 md:px-12 pt-24 md:pt-32 pb-20 md:pb-40`, inner `max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-start`.

- Left: `<h1>` with three lines — **"Dedicated / engineering / crew"** (`<br/>` separated) — `text-white text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-light leading-[1.1] tracking-tight`. Below it: "Works remotely. Feels onsite." in `text-white/50 text-sm mt-6 font-light`.
- Right (aligned `items-start md:items-end`): a row of 4 overlapping circular avatars (`w-8 h-8 rounded-full border-2 border-black/50 object-cover`, container `flex -space-x-2 mb-2`) using these Pexels images (each with `?auto=compress&cs=tinysrgb&w=100`):
  - `https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg`
  - `https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg`
  - `https://images.pexels.com/photos/1681010/pexels-photo-1681010.jpeg`
  - `https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg`
- Under the avatars, a testimonial card: `max-w-sm w-full rounded-2xl liquid-glass p-5`, text `text-white/90 text-sm font-light leading-relaxed`: *"Partnering with this crew felt like gaining a superpower. I shared a sketch + a rough concept, and days later I got a polished product with flawless interactions. Fully distributed, yet fully aligned."*

## 3. "Who we really are" section

`px-6 sm:px-8 md:px-12 pb-20 min-h-screen flex items-center`, inner `max-w-7xl mx-auto w-full`. One big `rounded-3xl liquid-glass` container:

- Header row (`p-8 md:p-12 pb-0 flex flex-col md:flex-row items-start justify-between gap-8 mb-12`): left `<h2>` **"Who we really are"** (`text-3xl md:text-4xl font-light`); right column (`max-w-md`) with paragraph `text-white/70 text-sm font-light leading-relaxed mb-6`: *"We're a distributed engineering crew that bridges the world of lean startups and large scale. From quick iterations to resilient platforms — we transform your ideas into sharp, reliable code. Always on mark. Always in form."* — followed by a **"Start a brief"** button (`inline-flex items-center gap-2 bg-[#A22211] text-white text-sm font-medium px-6 py-3 rounded-full hover:bg-[#A22211]/90`) with an `ArrowUpRight` icon (size 16).
- Feature grid (`grid grid-cols-1 md:grid-cols-3 gap-3 p-6 md:p-12 pt-8 md:pt-10`), each card `p-6 md:p-8 flex flex-col justify-between min-h-[260px] rounded-2xl bg-black/40` with a small number (`text-white/40 text-xs font-light`), title (`text-xl md:text-2xl font-light`), and description (`text-white/60 text-sm font-light leading-relaxed`):
  1. **01 — Sharp engineering**: "We're not just builders — we craft systems. Expect lean, reliable, battle-tested products designed for your goals."
  2. **02 — Rapid-fire launches**: "We ship live products in weeks, not months. Tight processes and lean structure mean you outpace even the fastest rivals."
  3. **03 — Worldwide & wired**: "Distant doesn't mean detached. Our crew spans across all zones with constant communication and trusted check-ins."

## 4. Text-fill section + stats + CTA

`relative flex flex-col justify-end px-6 sm:px-8 md:px-12 py-16 md:py-24`, inner `max-w-7xl mx-auto w-full`.

**Letter-by-letter text reveal**: the paragraph *"You won’t need to check in to know we’re on track. Our workflow is quiet. Our results — sharp and solid. Distributed means effortless. Just focused crews, driving toward your next big launch."* is rendered at `text-2xl leading-snug tracking-tight sm:text-3xl md:text-5xl lg:text-6xl lg:leading-[1.15] mb-20 md:mb-32`. Implementation details:

- Trigger with Framer Motion's `useInView(ref, { once: true, margin: '-20% 0px' })` on the section.
- Split the text into words wrapped in `inline-block whitespace-nowrap` spans (so words don't break), then split each word into individual letters (spaces rendered as `\u00A0` between words).
- Each letter is a `relative inline-block` span containing an invisible placeholder copy (`invisible font-normal`) plus an absolutely-positioned `motion.span` (`absolute inset-0 font-normal text-white`) that animates `opacity` from **0.3 → 1** with `duration: 0.05` and a per-letter delay of `(letterIndex / totalChars) * 1.5` seconds — producing a left-to-right "ink fill" sweep across the whole paragraph over 1.5s.

**Stats row** (`grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 mb-12`), each stat in a `relative rounded-lg overflow-hidden` card decorated with **four SVG corner brackets**: 20×20 SVGs absolutely positioned in each corner, drawing an L-shaped path with a 5px quarter-circle corner radius (`Q` curve), `stroke: rgba(255,255,255,0.35)`, `strokeWidth: 2.5`, `strokeLinecap: round`, no fill. Inner padding `px-6 py-8` with number (`text-white/40 text-xs`), value (`text-3xl md:text-4xl font-light`), and label (`text-white/50 text-xs`):

1. **01 — 241** — "Launches shipped out"
2. **02 — 98%** — "Repeat engagement rate"
3. **03 — 36 devs** — "Our engineering bench grows as you grow"

**Final CTA**: centered **"Let's talk"** pill — `bg-white text-black text-sm px-8 py-3 rounded-full hover:bg-[#A22211] hover:text-white transition-all duration-300`.

End the page with a `h-[10vh]` black spacer. All links are `href="#"`. Everything is `font-light` by default with the dark, minimal, glassy aesthetic described above.