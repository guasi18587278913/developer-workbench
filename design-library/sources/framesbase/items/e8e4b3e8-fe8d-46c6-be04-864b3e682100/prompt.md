# PROMPT — Recreate the "WildCrumb — Taste The Sky" 3D cookie landing page

Build a single-file `index.html` (no build step, no frameworks) that recreates the following scroll-driven 3D landing page exactly. Vanilla HTML/CSS/JS + Three.js only.

---

## 1. Assets (exact URLs)

- **3D cookie model (GLB):**
  `https://pub-86dc5b5484314368ac5436a674b0d919.r2.dev/a/cookie/chocolate-chip-cookie.web.glb`
  (glTF 2.0 binary, ~5.8 MB, a photoreal chocolate-chip cookie)
- **Background landscape image:**
  `https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260811_124849_cd98c829-55dc-4ee2-aecf-dcf140759d0f.png&w=1280&q=85`
  (1280×2276 portrait: teal-blue sky with puffy 3D-render clouds in the top half, grassy meadow with yellow wildflowers and two large smooth boulders in the bottom half)
- **Three.js + GLTFLoader (classic, non-module builds — version split is required):**
  `https://cdn.jsdelivr.net/npm/three@0.160.0/build/three.min.js`
  `https://cdn.jsdelivr.net/npm/three@0.147.0/examples/js/loaders/GLTFLoader.js`
  Use classic `<script>` tags in that order; the loader is used as `new THREE.GLTFLoader()`.
  **Do not** load the loader from 0.160.0 — the `examples/js/` (non-module) build was removed
  around r148, so that URL 404s, `THREE.GLTFLoader` stays undefined, and you get
  `THREE.GLTFLoader is not a constructor`. Because the readiness gate waits on the GLB,
  the whole stage then stays at `opacity: 0` and the page looks blank.
  r0.147.0 is the last version shipping the classic loader and is fully compatible with the
  r160 core (it only logs a harmless `Texture: Property .encoding has been replaced by
  .colorSpace` deprecation warning).
- **Fonts (Google Fonts, don't inline files):**
  - Display font: **Passion One** weight 400 (used for the two giant titles; fallback `Impact, sans-serif`)
  - UI font: **Inter** weights 500 and 600, registered under the family name `"Suisse Fallback"` (450–500 range maps to Medium, 600 to SemiBold; fallback `Arial, sans-serif`). Use `font-display: swap`.
- **Icons — do NOT paste large SVG code.** Use **simple filled (solid) glyphs**, not outline/stroked ones: author each as a tiny inline `<svg viewBox="0 0 24 24" fill="#fff" stroke="none">` with a single filled path (or a few filled rects), or pull solid variants from an icon library (Lucide "solid"/Tabler Filled/Heroicons Solid) via CDN. Never use `fill="none"` + `stroke`. All rendered as white glyphs ~14.79px (nav) or ~24.13px (callouts):
  - `brand` — script/hand-lettered white wordmark "WildCrumb" (167×35.2px logo; a cursive logotype)
  - `category` — 2×2 filled rounded squares (app-grid icon), used in the Shop pill
  - `cart` — filled shopping cart with two solid wheel circles, 14×14
  - `instagram` (solid rounded-square badge with ring + dot), `threads` (solid mark), `x` (solid X wordmark shape)
  - `chocolate` — filled chocolate bar with segment gaps; `leaf` — filled leaf with midrib; `egg` — solid egg; `flash` — solid lightning bolt


## 2. Global setup

- `<title>WildCrumb — Taste The Sky</title>`, `<meta name="theme-color" content="#4a8192">`, viewport meta.
- CSS custom props on `:root`: `--desktop-scale:1; --header-scale:1; --brand-edge-margin:45px; --social-edge-margin:38.6204px; --design-width:1726; --design-height:1195; --tablet-layout:0; --mobile-layout:0; --hero-background-crop:0.115; --final-background-crop:0.303; --sky-blue:#4a8192;`
- `html` and `body` background `#4a8192`; body `min-height:320vh`, white text, `overflow-x:hidden`, scrollbars hidden (`scrollbar-width:none` + `::-webkit-scrollbar {width:0}`), `overscroll-behavior:none` on html.
- The page is one `<main class="experience">` of height **320vh** — the visible UI never scrolls; a fixed full-viewport `.viewport` stays pinned and everything animates from scroll progress (0→1 across the 320vh).

## 3. Layout architecture — the "stage" system

Everything is authored on a fixed **1726×1195 design canvas** (`.stage`), absolutely centered in the viewport and uniformly scaled:

- `.stage { position:absolute; top:50%; left:50%; width:1726px; height:1195px; transform:translate(-50%,-50%) scale(var(--desktop-scale)); }`
- JS computes `--desktop-scale = min(innerWidth/1726, innerHeight/1195)` on desktop ("contain"), and `max(...)` on mobile ("cover").
- Stage starts at `opacity:0` and fades in over 220 ms once **fonts + GLB model + background image** are all ready (`.is-ready` class); the intro animation starts 360 ms after that.

Inside the fixed viewport, stacked in z-order:
1. `.scene` — the background `<img class="landscape">` plus a subtle `.scene-vignette` overlay: `linear-gradient(180deg, rgba(6,40,52,.035), transparent 32%, rgba(18,25,9,.025))`.
   **The image MUST always cover the full fixed viewport** — including the strip behind the header — otherwise the `#4a8192` body colour shows through and the navbar area reads as a different colour than the photo. Use:
   `position:absolute; top:0; left:50%; width:105vw; height:auto; max-width:none; min-width:105vw; min-height:100%; object-fit:cover; object-position:center top; transform:translate3d(-50%, offsetY, 0)`.
   The `min-height:100%` + `object-fit:cover` pair is required: with `height:auto` alone, wide/short viewports render the portrait image shorter than the viewport and leave an uncovered band at the top/bottom. Parallax only ever translates the image **upward** (negative offsetY), so the extra height must exist before the pan starts.

2. `.stage` containing the `<canvas id="cookie-canvas">` (absolute inset 0, z-index 3, pointer-events none), two split-letter titles, and four ingredient callouts.
3. `.scene-nav` — the header UI (z-index 10), also fading in with `.is-ready`.

## 4. Header (desktop)

- **Brand logo** top-left: `top:36px; left:45px; width:167px; height:35.2px`, wrapped in a link to `#top`.
- **Center pill nav** (`top:30px`, horizontally centered, `gap:7px`, height 47px). Pills: border-radius 14px, padding 0 18px, font-size **13.3846px**, weight 450, letter-spacing −0.02em, background `rgba(0,0,0,0.15)` with `backdrop-filter: blur(10.7px)`, hover → `rgba(0,0,0,0.28)`:
  - **Shop** — solid `#0b0b0b` background, width 92.7932px, grid icon + label, left-aligned with 10px gap
  - **Cookies** (width 86px, scrolls to top smoothly), **About Us** (92px), **Ingredients** (104px, scrolls to page bottom smoothly)
- **Right cluster** (`top:30px; right:38.6204px; gap:7px`): a **social tray** (138.3796×47px, radius 14px, `rgba(11,11,11,0.1)` + blur 15.7px, three 14.79px icons spaced with space-between, padding 0 18px) and a **cart button** (47×47, radius 14, solid `#0b0b0b`, 14px cart icon).
- Header scales via `--header-scale` (desktop: `min(1, innerWidth/1726)`; brand anchors left-top, nav center-top, socials right-top).

## 5. Titles (split into per-letter spans)

Both titles use Passion One 400, white, centered, `white-space:nowrap`, `perspective:800px` on the parent; each character wrapped in a `<span>` (spaces → `&nbsp;`) with `transform-origin:50% 70%`.

- `<h1>` **"Taste The Sky"** — stage coords `top:167px; left:271px; width:1184px; height:242px; font-size:255px; line-height:0.95; letter-spacing:-0.03em`.
- `<h2>` **"The Difference"** — `top:937px; left:364px; width:998px; height:192px; font-size:202px`, same spacing.

## 6. Ingredient callouts (4 pills around the cookie in section 2)

Layer `.callouts` (inset 0, z-index 5). Each callout is a flex row (`gap:6px`, height **81px**) of a **label pill** (radius 24px, `rgba(0,0,0,0.15)` + `backdrop-filter: blur(35.8px)`, font 20px weight 600, letter-spacing −0.02em) and an **icon tile** (81×81, radius 24.1277px, solid `#0b0b0b`, 24.13px white icon):

| # | Text | Icon | Order in DOM | Position |
|---|------|------|--------------|----------|
| 0 | `70% Single-Origin Dark` (label 275px) | chocolate | label, icon | top-left of cookie |
| 1 | `Organic Grass-fed Butter` (label 288px) | leaf | icon, label | top-right |
| 2 | `Organic Maple & Coconut` (label 293px) | egg | label, icon | bottom-left |
| 3 | `Light, Aerated Snap` (label 238px) | flash | icon, label | bottom-right |

Positioning is computed off the section-2 cookie radius via CSS vars set from JS: left pair `right: calc(50% + var(--section-cookie-radius) + 36px)`, right pair mirrored with `left:`; top row `top: calc(50% − rowOffset − 40.5px)`, bottom row `+ rowOffset`, where `rowOffset = sectionCookieRadius × 0.84` and `--section-cookie-radius = (532 × sectionScale × 0.96)/2`.

## 7. Three.js scene

- **Orthographic camera** matching the design canvas: `left:-863, right:863, top:597.5, bottom:-597.5, near:0.1, far:4000`, `camera.position.z = 2000`.
- Renderer: `alpha:true, antialias:true, powerPreference:"high-performance"`, pixel ratio capped at 2, size fixed at 1726×1195 (`setSize(w,h,false)` — CSS stretches it over the stage), `outputColorSpace = SRGBColorSpace`, transparent clear color.
- **Tone mapping (required — without it the cookie renders dark and muddy):**
  `renderer.toneMapping = THREE.ACESFilmicToneMapping`, `renderer.toneMappingExposure = 1.15`.
- **Environment / IBL (required):** the GLB uses PBR `MeshStandardMaterial`, which gets most of its
  brightness from `scene.environment`. Generate a cheap studio IBL at init instead of leaving it null:
  draw a 64×32 canvas with a vertical linear gradient `#ffffff → #f3ece2 (50%) → #cbbfae`, wrap it in a
  `CanvasTexture` with `mapping = EquirectangularReflectionMapping` and `colorSpace = SRGBColorSpace`,
  run it through `new THREE.PMREMGenerator(renderer)` (`compileEquirectangularShader()` then
  `fromEquirectangular(tex).texture`), assign to `scene.environment`, then dispose the texture and the
  generator.
- **Lights:** `HemisphereLight(0xffffff, 0xd9c4ad, 0.55)` — a light warm-neutral ground colour at
  reduced intensity, since the IBL now supplies the ambient fill (a dark brown ground like `0x704019`
  at 0.82 tints the cookie's underside muddy); key `DirectionalLight(0xffffff, 1.05)` at
  (−450, 650, 1200); rim `DirectionalLight(0xffb56b, 0.24)` at (600, −100, 500).
- **Model handling:** load the GLB; compute its Box3, recentre on origin, and scale so `max(size.x, size.y)` equals **532 design px** (`targetDiameter`). On every mesh material: `metalness = 0`, `roughness = min(0.95, existing)` — **never clamp roughness upward** (e.g. `max(0.72, …)`
  kills the baked specular sheen and makes the cookie look flat), texture maps → sRGB with anisotropy
  `min(8, maxAnisotropy)`. Put the model in an inner group (normalization scale) nested in an outer `cookieGroup` (animated transform).
- On load failure just log and continue (page still fades in).

## 8. Scroll + animation system (all in one rAF loop)

- Track `targetScroll = scrollY / (scrollHeight − innerHeight)` on passive scroll listener; smooth it exponentially each frame: `smooth += (target − smooth) × (1 − exp(−frameDelta/220))`, frame delta clamped to 64 ms, snap when within 0.00008.
- Easings: `easeOutCubic`, `easeInOutCubic`, and `easeOutBack` with `c1 = 1.70158`.
- Master section transition: `transition = easeInOutCubic(clamp((smooth − 0.08) / 0.72))` (i.e. scroll 8%→80% morphs hero → ingredients section).

**Background parallax:** image translates vertically from `−height×0.115` (hero crop) to `−height×0.303` (final crop), lerped by `transition`.

**Intro (time-based, 1350 ms, starting 360 ms after ready):** `introProgress = clamp((now − introStart)/1350)`.

**Hero title letters** (per letter, index i, direction `dir = i even ? −1 : +1`):
- Enter: `enter = easeOutCubic(clamp((introProgress − i×0.024)/0.63))` — letters fly in from `x = (1−enter)×(dir×52+80)`, `y = (1−enter)×(−310)`, `rotateX = (1−enter)×74°`, `rotateZ = (1−enter)×dir×9°`, opacity = enter. Staggered top-drop with a slight cascade.
- Leave on scroll: `leave = easeInOutCubic(clamp((smooth − 0.08 − i×0.019)/0.29))` — letters scatter upward: `x += leave×((i − (n−1)/2)×39 + dir×28)`, `y += −430×leave^1.8`, `rotateX −= leave×24°`, `rotateZ += leave×dir×(17 + i×1.7)°`, opacity `× (1 − clamp((leave−0.58)/0.42))`.

**"The Difference" letters:** enter on scroll with `easeOutBack(clamp((smooth − 0.27 − i×0.006)/0.22))`; from `y = 250px` below, `x = (1−enter)×((i − n/2)×9)`, `rotateX = (1−enter)×(−66°)`, `rotateZ = ±5°` alternating; opacity ramps over `(smooth − 0.27 − i×0.005)/0.13`.

**Callouts** (per callout, index i from `data-order`):
- Icon tile: `easeOutBack(clamp((smooth − 0.63 − i×0.026)/0.13))` → `scale(p) rotate((1−p)×18deg)`, opacity p. Pops in with overshoot.
- Label pill: `easeOutCubic(clamp((smooth − 0.74 − i×0.025)/0.17))` → `scaleX(p)` growing **away from its icon** (transform-origin `right center` when the icon is the last child, else `left center`), opacity p.

**Cookie motion:**
- Intro: `cookieIntro = easeOutBack(clamp((introProgress − 0.22)/0.72))`; position lerps from (x 155, y 430) to its hero slot; scale from 0.18 → hero scale (with back-overshoot).
- Scroll: `y = lerp(heroY, sectionY, transition) + sin(transition×π)×9` (small lift mid-flight); `x += sin(transition×π)×(−20)`; scale lerps hero → section×0.96; **rotation.y = transition × π** (a full half-turn flip as you scroll); `rotation.z = lerp(−0.09, 0.19, transition)`.
- Hero slot (desktop): cookie center sits in the corridor between hero-title bottom (y 409 + 20 gap) and "The Difference" top (937 − 20), i.e. `heroY = 1195/2 − corridorCenter`, diameter capped at 532 or corridor height. Section slot: vertical center of the viewport mapped into stage coords (`sectionY = (stageCenterY − viewportCenterY)/scale`).

## 9. Responsive behavior

- **≤1060px (tablet):** `--tablet-layout:1`. Hero title enlarges to font-size 280px (`top:80px; left:163px; width:1400px`). Header collapses into a **hamburger button** (47×47, radius 14, `#0b0b0b`, three 17×2px white lines → animates into an X via the middle line fading and outer lines rotating ±45°). Menu opens a dropdown panel (top-right, `min(360px, 100vw−40px)`, radius 24, `rgba(22,59,70,0.48)` + blur 28px, 1px `rgba(255,255,255,0.12)` border, shadow `0 18px 60px rgba(7,24,30,0.22)`, scale/fade transition 180–220 ms) holding the nav pills in a 2-column grid plus the social tray + cart. Full a11y: `aria-expanded`, `inert` when closed, focus trap with Tab/Shift-Tab wrap, Escape closes, click-outside closes, first item focused on open. Header scale clamps `innerWidth/900` to [0.82, 1]. Cookie diameter becomes `clamp(innerWidth×0.38, 260, 340)` placed under the hero title (18px gap, bottom margin ≥ max(56, 8vh)).
- **≤1060px and aspect < 49/64:** background switches to `height:145dvh; width:auto; min-width:105vw; object-fit:cover`.
- **≤620px (mobile):** `--mobile-layout:1`; viewport uses `100dvh`; stage scale switches to cover. Titles centered at `width:530px, translateX(-50%)`: hero 102px, difference 92px (tops set from JS vars measured off the real header bottom + clamped gaps). Callouts become a static 2-column grid (each row 72px, radius 21, label text wraps, centered, 19px) positioned below the section cookie via JS-computed `--mobile-callouts-top`. Hero cookie `clamp(72vw, 250, 310)`, section cookie `clamp(67vw, 235, 300)` centered at 44.5% viewport height. Brand scales 0.75 at `top:25px; left:20px`.
- `prefers-reduced-motion: reduce` disables the pill/menu transitions.

## 10. Wiring details

- Layout recompute (`updateLayout`) runs on load, on `resize`, `visualViewport.resize`, and a `ResizeObserver` on the viewport — throttled to one rAF. It sets `--desktop-scale`, `--header-scale`, cookie hero/section positions & scales (converting viewport px → stage px by dividing by scale), the callout CSS vars, and re-reads the background height for parallax.
- Readiness gate: `document.fonts.ready` + GLB loaded + background `load`/`error` → add `.is-ready` to stage and header, set `introStart = now + 360`.
- Nav buttons with `data-scroll="top"|"bottom"` do smooth `window.scrollTo`.
- Cancel the rAF on `pagehide`.

**Lighting acceptance check:** the baked cookie must read bright golden-tan with visible specular
highlights on the dough and glossy dark-chocolate chunks — not brown, flat, or shadowed on its lower
half. If it looks dark, the missing piece is `scene.environment` (IBL), ACES tone mapping, or an
upward roughness clamp.

**Acceptance check:** on load, letters of "Taste The Sky" tumble in from above one-by-one while the cookie pops up from below-right into the gap beneath the title; scrolling smoothly scatter-dissolves the hero title upward, flips the cookie 180° while the background pans down ~19% of its height, then "The Difference" springs up letter-by-letter beneath the cookie and the four black icon tiles pop in (0.63–0.76 of scroll) followed by their frosted labels unfurling sideways (0.74–0.91). No visible scrollbar; everything stays pinned.