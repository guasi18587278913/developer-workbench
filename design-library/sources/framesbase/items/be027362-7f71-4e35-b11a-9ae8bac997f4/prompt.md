
**Build a single-page React 18 + TypeScript + Vite + Tailwind CSS site called "veldara" — a dark 3D-framework landing page with a scroll-scrubbed background video. Recreate it exactly as follows:**

## Global setup

- `index.html`: title "Hero Section Design", load Google Font **Inter** (weights 400, 500, 600, 700) with preconnects to fonts.googleapis.com and fonts.gstatic.com.
- Global CSS:  `html, body { overflow-x: hidden }`; body uses `font-family: 'Inter', sans-serif`, color `#ffffff`.
- Utility class `.fade-blur-in`: `opacity:0; transform:translateY(32px); filter:blur(8px); transition: opacity 1s ease-out, transform 1s ease-out, filter 1s ease-out;` — `.visible` state resets all three to `opacity:1; translateY(0); blur(0)`.
- Accent color throughout: **#2C5C88** (hover variant **#3a7aad**).
- Only dependency beyond React: `lucide-react` (for `ChevronDown`).

## Layer 1 — `<ScrollVideo>` (fixed background, scroll-scrubbed)

Video URL (exact):
```
https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260616_212935_bbf608da-62d1-4f25-9be4-c346e4d09cc8.mp4
```

Component takes `src`, `scrollStart`, `scrollEnd` props. Wrapper: `fixed inset-0 -z-10`, inline `backgroundColor: '#0a0a0a'`, `top: '-20%'`. Contains a canvas, a fallback `<video>`, and an overlay `<div className="absolute inset-0 bg-black/20">`.

**Frame pre-extraction (primary path):** On mount, `fetch(src, { mode: 'cors' })` → blob → object URL → offscreen `<video>` (muted, playsInline, preload auto). Await `loadedmetadata` with a 15s timeout reject. Compute `scale = min(1, 1280 / videoWidth)`, and `frameCount = clamp(round(duration * 24), 30, 120)`. Loop `i` from 0 to frameCount−1: set `currentTime = (i / (frameCount - 1)) * (duration - 0.05)`, await the `seeked` event (3s timeout reject), then `createImageBitmap(video, { resizeWidth, resizeHeight })` and push into a frames ref. When done, set `framesReady = true`. Cleanup closes all bitmaps and revokes the object URL. Any error is swallowed — silently falls back to direct video seeking.

**Canvas rendering:** DPR-aware resize with `dpr = min(devicePixelRatio, 2)`, resetting `lastFrameIndex = -1` on resize/orientationchange. A `requestAnimationFrame` loop computes scroll progress: `clamp((scrollY - scrollStart) / (scrollEnd - scrollStart), 0, 1)` (end defaults to `scrollHeight - innerHeight`). Map progress → `frameIndex = round(progress * (frames.length - 1))`; only redraw when the index changes. Draw cover-fit: `s = max(cw/fw, ch/fh)`, centered.

**Fallback path with seeking guard:** While frames aren't ready, render the real `<video>` (muted, playsInline, preload auto, crossOrigin anonymous, `object-cover`, pointer-events none, `onLoadedData` sets `currentTime = 0`). In the rAF loop, scrub it directly: `target = progress * duration`, and only assign `video.currentTime = target` **if a `videoSeekingRef` guard is false and `|currentTime − target| > 0.001`** — set the guard true on assignment, and reset it to false on the video's `seeked`, `stalled`, and `error` events. Canvas is `visibility: hidden` until `framesReady`; the fallback video unmounts once frames are ready.

In App, the scroll bounds are `start = innerHeight * 0.5`, `end = scrollHeight - innerHeight`, recalculated on resize and once on a rAF after mount.

## Layer 2 — `<Particles>` (fixed starfield canvas)

Full-viewport `<canvas>` at `fixed inset-0 pointer-events-none z-[3]`. Particle count = `floor(width * height / 12000)`. Each particle: random position, velocity `(Math.random()−0.5) * 0.3` per axis, size `random*1.5 + 0.5`, opacity `random*0.6 + 0.2`. rAF loop: clear, advance positions, wrap around edges, draw white circles with `rgba(255,255,255,opacity)`. Recreate particles on resize.

## Layer 3 — Fixed nav (z-50)

`fixed top-0 inset-x-0 flex items-center justify-between px-4 sm:px-6 md:px-10 py-4 sm:py-5`. Left: wordmark **"veldara"** (white, bold, `text-lg sm:text-xl`, tracking-tight) plus, hidden below `md`, links **Guides** and **Journal** (`text-sm text-gray-300 hover:text-white transition-colors`, gap-6). Right (gap-3 sm:gap-4): three `w-5 h-5` inline-SVG icons — GitHub, Discord, Twitter (standard brand paths, `fill="currentColor"`), each `text-gray-300 hover:text-white transition-colors`, all hrefs `#`.

## Content (z-[2] wrapper)

**Hero section** — `h-screen flex flex-col`, whole section's `opacity` driven by scroll: `max(0, 1 − scrollY / (innerHeight * 0.3))` (passive scroll listener). Backdrop: `absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent`. Content column is bottom-anchored (`items-center justify-end`, `pb-24 sm:pb-28`, centered text):
- Eyebrow: "Our Purpose:" — `text-sm md:text-base text-gray-400 mb-3 sm:mb-4 tracking-wide`.
- H1 (`text-2xl sm:text-3xl md:text-5xl lg:text-6xl font-semibold leading-tight max-w-3xl`): "Instantly craft immersive **3D worlds** on the web." — where "3D worlds" is a relative inline-block with an absolutely positioned highlight bar behind it: `bottom-1 left-0 w-full h-[10px] bg-[#2C5C88] rounded-sm`, text on top via `relative`.
- Button row (`mt-8 sm:mt-10`, column on mobile / row on sm+, gap-3/4): (1) a code chip — `bg-[#1a1a1a] border border-gray-700/50 rounded-lg px-6 sm:px-8 py-3.5 sm:py-4` containing a `#2C5C88` monospace "**>**" and mono `text-gray-200` code text `npm i @veldara/core`; (2) a CTA link — `bg-[#2C5C88] hover:bg-[#3a7aad] text-white font-medium rounded-lg px-8 py-3.5 sm:py-4 text-sm transition-colors`, text "Get Started" followed by a → arrow.
- Bottom of section: centered lucide `ChevronDown`, `w-6 h-6 text-gray-500 animate-bounce`, `pb-8`.

**Spacers:** after the hero, a transparent `h-[150vh]` div; then `<div id="cards-trigger" className="h-[150vh] md:h-[200vh]" />`; then another `h-[100vh]` spacer. Video plays behind all of them.

**Fixed cards with scroll-driven wipe reveal (z-[4]):** a fixed bottom overlay (`fixed bottom-0 inset-x-0 pb-8 sm:pb-12 md:pb-16 px-4 sm:px-6 md:px-10`, `paddingBottom: max(2rem, env(safe-area-inset-bottom))`, starts at opacity 0 / pointer-events none). Inside: `max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-10 will-change-[mask-image]`. A rAF loop measures `#cards-trigger`: `start = triggerTop − vh*0.5`, `end = triggerTop + triggerHeight − vh*0.3`. Progress = clamped `(scrollY − start)/range`. Container opacity = `min(fadeIn, fadeOut)` where fadeIn ramps over `vh*0.2` before start−vh*0.2 and fadeOut ramps over `vh*0.3` after end; pointer-events auto only when opacity > 0.1. The **wipe**: set the grid's `maskImage` (and `-webkit-`) each frame to `linear-gradient(to right, black ${progress*130}%, transparent ${progress*130 + 15}%)` on desktop, or `to bottom` with a `+20%` soft edge when `innerWidth < 768`. Three cards, each `space-y-3 md:space-y-4` with an `text-lg sm:text-xl md:text-2xl font-bold` white title and a `text-gray-300 text-sm md:text-base leading-relaxed line-clamp-4 md:line-clamp-none` paragraph:

1. **Explore Veldara** — "Veldara merges the elegance of Svelte 5 with the depth of Three.js within easy reach. It's crafted to be robust and adaptable while remaining intuitive and simple to grasp."
2. **Unlock Three.js** — "The web is growing increasingly dimensional. At its heart, Veldara offers a composable declarative API for building performant Three.js experiences on the web."
3. **Connect Everything** — "Veldara ships with tooling for physics, XR, animation, layouting, model loading, and extensive utilities to make building compelling 3D apps for the web effortless."

**Final section:** `min-h-screen flex items-end justify-center px-4 sm:px-6 md:px-10 pb-20 sm:pb-32`. Centered column with the `.fade-blur-in` class, toggled `.visible` via a one-shot IntersectionObserver (threshold 0.15, unobserve after first intersection): eyebrow "Presenting" (`text-gray-300 text-sm sm:text-base md:text-lg mb-3`) and H2 "**Veldara 8**" (`text-3xl sm:text-5xl md:text-7xl font-bold text-white`).

---
