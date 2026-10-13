**Recreate this exact single-screen marketing landing page for “Synra.”** It is a pure-black, full-viewport cinematic site: no hero headline, no body copy, no cards in the main area. The entire upper 70%+ of the screen is only a full-bleed looping background video. All UI lives in a transparent footer docked to the bottom. Match Linear / Raycast landing motion: blur + fade + rise on load, then quiet hover shine.

Do not invent extra sections, a navbar at the top, a CTA button, a form, or a hamburger. The page is one locked `100vh` / `100dvh` frame.

---

### Page identity
- Document title: `synra` (lowercase)
- Language: `en`
- Brand name in the wordmark: `Synra` (capital S)
- Copyright: `© 2026 Synra. All rights reserved.`
- Body starts with class `is-loading`. After load, remove `is-loading` and add `is-ready`.

---

### Exact media URLs (use these, do not substitute)

**Background video (required, CloudFront):**
```
https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260808_070656_ce62197b-fdb9-4daf-8068-91a4a36e6f38.mp4
```
`<video>` attributes: `muted` `loop` `playsinline` `autoplay` `preload="auto"` `id="bg-video"` `aria-hidden="true"`. Single `<source type="video/mp4">`.

**Back-to-top card background image (Higgsfield CDN, WebP, 1280w, q=85):**
```
https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260811_125700_151e276c-11e9-4183-bebc-e03b437a778e.png&w=1280&q=85
```
CSS: `background: url(...) center / cover no-repeat`.

**Logo mark:** circular raster `assets/logo-mark.png` (not the SVG wordmark). Display as a perfect circle via `border-radius: 50%` and `object-fit: cover`. Size: `clamp(56px, 8vw, 120px)` desktop.

---

### Fonts (exact)

Load both:

1. Google Fonts Inter, weights 400 / 500 / 600:
```
https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600&display=swap
```
Preconnect `https://fonts.googleapis.com` and `https://fonts.gstatic.com` (crossorigin).

2. Display / wordmark font **BubbledotICG-FinePos** from OnlineWebFonts:
```
https://db.onlinewebfonts.com/c/8cb707a9b8a73f8a7403336b861c3074?family=BubbledotICG-FinePos
```

UI stack:
```
"Inter", "Helvetica Neue", Helvetica, Arial, sans-serif
```
Wordmark stack:
```
"BubbledotICG-FinePos", "Inter", sans-serif
```
Antialiased: `-webkit-font-smoothing: antialiased`, `-moz-osx-font-smoothing: grayscale`.

---

### Color tokens
```
--bg: #000000
--text: #ffffff
--muted: #8a8a8a
--line: rgba(255, 255, 255, 0.12)
--social-bg: linear-gradient(to bottom, rgba(0,0,0,0.3) 0%, rgba(255,255,255,0.2) 100%)
--social-border: rgba(255, 255, 255, 0.12)
```
Easing:
```
--ease-out-expo: cubic-bezier(0.16, 1, 0.3, 1)
--reveal-dur: 1.05s
```
Viewport height: `--vh: 100vh`, and if supported `--vh: 100dvh`.
Horizontal pad: `--pad-x: clamp(1rem, 3.5vw, 3.5rem)`
Bottom pad: `--pad-y: clamp(0.85rem, 1.8vh, 1.75rem)`
Nav size: `--nav-size: clamp(0.82rem, 1.05vw, 0.95rem)`
Nav gap: `--nav-gap: clamp(0.55rem, 1.2vh, 0.85rem)`
Social button size: `--social-size: clamp(44px, 4.2vw, 52px)`
Back-to-top square side equals the 4-link nav stack height:
```
--menu-h: calc(4 * (var(--nav-size) * 1.2) + 3 * var(--nav-gap))
```
with `min-width/min-height: 72px`.

---

### Layout (exact structure)

```
html/body: height = var(--vh), overflow hidden, background #000
.page: flex column, 100% × var(--vh), overflow hidden

1. .bg (position:fixed; inset:0; z-index:0; pointer-events:none)
   - .bg-fallback: solid #000
   - video.bg-video: object-fit:cover; object-position: right center
   - ::after overlay gradient (see below)

2. main.main (empty, aria-hidden="true")
   - flex:1; min-height:0; z-index:1
   - NO content. The video IS the hero.

3. footer.footer (z-index:2; transparent; padding: 0 var(--pad-x) var(--pad-y))
   .footer-inner
     A. .socials  — top footer row
     B. .footer-main — middle row: logo left, nav + back-to-top right
     C. .footer-bottom — copyright left, legal links right
```

**Video overlay** (`.bg::after`, z-index 2):
```
linear-gradient(
  to bottom,
  transparent 0%,
  transparent 35%,
  rgba(0, 0, 0, 0.55) 65%,
  #000 88%
)
```
This burns the lower third to black so the footer reads cleanly over the video.

---

### Footer row A — socials
- Flex row, `gap: 0.65rem`
- `padding-bottom: clamp(0.9rem, 2vh, 1.75rem)`
- `border-bottom: 1px solid rgba(255,255,255,0.12)`
- Three square buttons, `border-radius: 10px`, glass gradient fill, `1px` white 12% border, `backdrop-filter: blur(8px)`
- Icon SVGs at 46% of button size, color `#fff`

**Instagram** (`aria-label="Instagram"`, href `#`):
- rounded rect `x=3 y=3 w=18 h=18 rx=5`, stroke 1.6
- inner circle `cx=12 cy=12 r=4.2`, stroke 1.6
- lens dot `cx=17.4 cy=6.6 r=1.1` filled

**LinkedIn** (`aria-label="LinkedIn"`, href `#`): filled path of the “in” mark (circle + i-bar + n-body). Use the exact path from the source:
```
M6.2 9.2H3.4V20.5H6.2V9.2ZM4.8 3.5C3.85 3.5 3.1 4.26 3.1 5.2C3.1 6.14 3.85 6.9 4.8 6.9C5.75 6.9 6.5 6.14 6.5 5.2C6.5 4.26 5.76 3.5 4.8 3.5ZM20.6 13.35C20.6 10.7 19.2 9.05 16.85 9.05C15.7 9.05 14.85 9.6 14.45 10.35H14.4V9.2H11.75V20.5H14.55V14.15C14.55 12.5 15.55 11.7 16.7 11.7C17.8 11.7 18.35 12.4 18.35 14.15V20.5H21.15L20.6 13.35Z
```

**X / Twitter** (`aria-label="X"`, href `#`):
```
M17.6 3.5H20.4L13.85 11L21.55 20.5H15.7L11.1 14.35L5.85 20.5H3.05L10.05 12.45L2.65 3.5H8.65L12.8 9.1L17.6 3.5ZM16.6 18.75H18.15L7.7 5.15H6.05L16.6 18.75Z
```

Hover (only when `body.is-ready`):
- background becomes `linear-gradient(to bottom, rgba(0,0,0,0.4), rgba(255,255,255,0.3))`
- border `rgba(255,255,255,0.28)`
- shadow `0 10px 24px rgba(0,0,0,0.4)`
- icon scales to `1.12`
- shine sweep (`::before`): 115° white 28% sheen, starts `translateX(-45%) rotate(8deg)` opacity 0, on hover `translateX(45%)` opacity 1, 0.65s expo
- active: `0 4px 12px rgba(0,0,0,0.3)`

Reveal: `data-reveal="item"` with `--d: 0 | 1 | 2`. Delay `calc(0.42s + var(--d) * 0.07s)`, duration 0.85s.

---

### Footer row B — logo + nav + back-to-top
Flex, `space-between`, vertically centered.
Padding: `clamp(1.1rem, 3.2vh, 2.75rem) 0 clamp(1rem, 2.8vh, 2.5rem)`
Gap: `clamp(1rem, 3vw, 2rem)`

**Logo** (left, `data-reveal="logo"`, href `#`, `aria-label="synra"`):
- inline-flex, gap `clamp(0.75rem, 1.6vw, 1.25rem)`
- circular `logo-mark` image
- word `Synra` in BubbledotICG-FinePos
- size `clamp(3.6rem, 10vw, 8.5rem)`
- `font-weight: normal`, `line-height: 1`, `letter-spacing: 0.04em`, white, nowrap, no text-transform
- This wordmark is huge — it is the visual title of the page, sitting in the footer, not in the hero

**Right cluster** (`.footer-right`): flex, gap `clamp(1.25rem, 4vw, 4.5rem)`

**Nav** (column, 4 links, Inter 500):
```
How it Works     → #how-it-works
Who Benefits     → #who-benefits
Learn More       → #learn-more
Contact          → #contact
```
- `letter-spacing: -0.01em`, `line-height: 1.2`, white, nowrap
- After reveal, rest opacity is **0.65**, hover opacity **1** in 0.2s
- Reveal: `data-reveal="nav"`, `--d: 0..3`
- Start pose: `translate3d(18px, 10px, 0)` + blur 8px
- Delay `calc(0.55s + var(--d) * 0.12s)`, duration 0.9s
- They slide in from the right, staggered

**Back to top** (`#back-to-top`, `data-reveal="card"`):
- Square, `border-radius: 10px`, overflow hidden
- Photo fill + `rgba(0,0,0,0.28)` dim
- Centered column: up-arrow SVG + label `Back to top`
- Arrow: 24 viewBox, stroke 1.8 round caps:
  - vertical line `M12 5V19`
  - chevron `M6.5 10.5L12 5L17.5 10.5`
- Arrow size `clamp(16px, 1.6vw, 22px)`
- Label: Inter 500, `clamp(0.55rem, 0.85vw, 0.72rem)`, letter-spacing 0.01em
- Reveal: start `translate3d(0,24px,0) scale(0.94)` blur 10px, delay **1.05s**, duration 0.95s
- Hover:
  - photo zooms to `scale(1.18)` over 0.7s expo
  - dim lightens to `rgba(0,0,0,0.12)`
  - shine sweep (white 22%) `translateX(-40%) → 40%`, rotate 8deg
  - arrow scales 1.12
  - label letter-spacing 0.04em
  - shadow `0 12px 28px rgba(0,0,0,0.45)`
- Click: `window.scrollTo({ top: 0, behavior: "smooth" })`

---

### Footer row C — legal
- Top border `1px solid rgba(255,255,255,0.12)`
- Padding-top `clamp(0.75rem, 1.8vh, 1.35rem)`
- Flex space-between
- Left: `© 2026 Synra. All rights reserved.`
- Right: `Privacy Policy` (`#privacy`) and `Terms & Conditions` (`#terms`)
- Type: `clamp(0.7rem, 0.95vw, 0.78rem)`, color `#8a8a8a`, letter-spacing 0.01em
- Legal links underlined, underline-offset 2px, hover color `#fff` in 0.2s
- Legal gap `clamp(0.85rem, 2vw, 1.5rem)`
- Reveal: `data-reveal="bottom"`, start `translate3d(0,14px,0)` blur 6px, delay **1.20s**, duration 0.9s

---

### Entrance choreography (must match)

Default hidden state for `[data-reveal]`:
```
opacity: 0
transform: translate3d(0, 22px, 0)
filter: blur(8px)
```

| Element | start transform | blur | delay | duration |
|---|---|---|---|---|
| background `data-reveal="bg"` | none | none | 0 | **1.6s** fade only |
| socials `--d` 0,1,2 | default 22px up | 8px | 0.42 + d×0.07s | 0.85s |
| logo | `0, 28px` + `scale(0.985)` | 10px | **0.28s** | 1.05s |
| nav links `--d` 0–3 | `18px, 10px` (from right) | 8px | 0.55 + d×0.12s | 0.9s |
| back-to-top card | `0, 24px` + `scale(0.94)` | 10px | **1.05s** | 0.95s |
| legal row | `0, 14px` | 6px | **1.20s** | 0.9s |

On `body.is-ready`, all go to `opacity:1`, `translate3d(0,0,0) scale(1)`, `blur(0)`. Nav settles at opacity 0.65. Background must stay untransformed (`transform: none !important`).

**JS timing:**
- If `prefers-reduced-motion: reduce`, reveal immediately and skip all motion.
- Else: on `window.load`, wait **80ms**, then `requestAnimationFrame` → add `is-ready`.
- Hard fallback: also fire reveal at **1200ms** so a slow video does not block UI.
- Video autoplay: force `muted=true`, `play()`. If rejected, unlock on first `pointerdown` or `keydown`. If `readyState < 2`, listen `canplay` once and call `video.load()`.

---

### Responsive (must implement)

**≤1100px:** tighten footer-main / footer-right gaps.

**≤860px:** wrap footer-main; logo grows; right cluster `margin-left: auto`. Logo mark `clamp(52px, 10vw, 88px)`. Wordmark `clamp(3rem, 11vw, 5.4rem)`.

**≤640px:**
- `--pad-x: 1rem`, `--nav-size: 0.9rem`, `--nav-gap: 0.65rem`
- page may scroll vertically (`overflow-y: auto`)
- footer-main column, align start
- logo mark 64×64, wordmark `3.4rem`
- footer-right full width, space-between
- back-to-top min 68×68
- legal row stacks, align start, gap 0.65rem

**max-height 700px:** compress vertical padding; smaller logo `clamp(44px, 10vh, 72px)`; wordmark `clamp(2.2rem, 10vh, 4rem)`.

**max-height 560px:** nav 0.8rem; logo 40px; wordmark `2rem`; socials 38px; back-to-top min 56px; label `0.5rem`.

`html { scroll-behavior: smooth }`. Reset all margins. Links inherit color, no underline except legal.

---

### What this page is NOT
- No top navigation bar
- No headline / subhead / paragraph in `<main>`
- No email capture, no primary CTA except the footer links
- No extra pages — anchors are `#how-it-works` `#who-benefits` `#learn-more` `#contact` `#privacy` `#terms` but this file is a single screen
- No Ken Burns / drift on the video after load (`animation: none; transform: none`)
- No bounce on the back-to-top arrow after entrance

---

### Implementation
Static HTML + CSS + JS only. Three files: `index.html`, `styles.css`, `script.js`. No framework. Pixel-match the footer geometry, the right-anchored video crop (`object-position: right center`), the black burn gradient, the Bubbledot giant wordmark, the glass social tiles, and the delayed staggered reveal.