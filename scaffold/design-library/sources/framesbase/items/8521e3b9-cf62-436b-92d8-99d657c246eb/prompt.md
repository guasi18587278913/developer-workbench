**Create a luxury jewelry mobile app concept displayed inside a realistic iPhone mockup. The design is a "Blue Nile" branded mobile screen with a warm orange hero section and a product card below. Use React, Tailwind CSS, and Lucide React icons. The entire phone is centered on a warm off-white page background.**

---

### Page & Phone Frame

- **Page background:** `#f5f5f0` (warm off-white), full viewport height, centered with flexbox and `p-8` padding.
- **Phone mockup:** 375x812px, `rounded-[55px]`, black frame with 12px padding. Drop shadow: `0 50px 100px -20px rgba(0,0,0,0.5), 0 30px 60px -10px rgba(0,0,0,0.4)`. A subtle white/10 border highlight on the outer frame. Side buttons on left (silent switch at top-120px, two volume buttons at 170px and 235px) and right (power button at 185px). Screen area has `rounded-[43px]` with overflow hidden.
- **Dynamic Island:** Centered pill at top-12px, 126x36px, black rounded-full, containing a small 10x10px dark circle (camera lens) with a border of `#2a2a3e`.

---

### Fonts (Critical)

- **Body font:** "Test Founders Grotesk Light" loaded from: `https://db.onlinewebfonts.com/c/7973d1644865c7217230fea96daae6fe?family=Test+Founders+Grotesk+Light`
- **Logo font:** "NimbusSanExt" loaded from: `https://db.onlinewebfonts.com/c/12487acadbf8efa35235fe8d339411ec?family=NimbusSanExt`

---

### Color Palette

- **Brand orange (hero background):** `#E96B00`
- **Brand peach (glow):** `#F6BB7E`
- **Brand dark:** `#0B2122`

---

### Hero Section (Top ~73% of screen)

- **Background:** Solid `#E96B00` (brand-orange), full width, `flex-1` to fill available space, `overflow-hidden`, positioned relative.
- **Gradient glow:** A 600x600px circle positioned at `-left-24`, `top-[33%]`, color `brand-peach/40`, blurred 200px.
- **Vertical grid lines:** Two vertical 1px white lines at `left-1/3` and `left-2/3`, opacity 16% (`bg-white/[0.16]`), spanning full height.
- **Navigation bar:** Absolutely positioned at top, `px-4 pt-14`, z-index 70, flexbox space-between.
  - **Logo (left):** White bold text "Blue" on first line, "Nile" on second line (`<br/>`), font-family `NimbusSanExt, sans-serif`, `text-xl font-bold leading-none`.
  - **Menu button (right):** 40x40px flex center, white. Shows a Lucide `Menu` icon (5x5) by default, crossfades/rotates to Lucide `X` icon when menu is open. Transition: 300ms cubic-bezier(0.77,0,0.18,1), with rotation and scale effects.

- **Hero image (center):** Absolutely positioned at `-bottom-10`, centered horizontally with `left-1/2 -translate-x-1/2`, z-20, width `132%` (`max-w-none`).
  - **Image URL:** `https://soft-zoom-63098134.figma.site/_assets/v11/9028130a3e77802079d3a2e663b85ee12d365b61.png`
  - **Behind the image:** An 80% wide, 60% tall rounded-full glow using `brand-peach/40` with `blur-[80px]`, centered via absolute + translate.

- **Awards section (bottom-left and bottom-right):** Absolutely positioned at `left-4 right-4 bottom-4`, z-30, flex space-between, vertically centered.
  - **Left side:** `[12+]` displayed as:
    - `[` in white, `text-5xl font-light`
    - `12` in white, `text-5xl font-bold`
    - `+` in white, `text-lg font-bold`, positioned slightly up with `relative -top-1`
    - `]` in white, `text-5xl font-light`
  - **Right side:** White uppercase text, `text-base`, `tracking-wide leading-snug`, reading "Awards / Celebrate / Innovation" (each word on its own line via `<br />`).

---

### Mobile Menu Overlay

- **Backdrop:** Full-screen absolute overlay, z-60, with `bg-black/60 backdrop-blur-sm`. Fades in/out over 500ms. Clicking it closes the menu.
- **Drawer:** Slides in from the left, 80% width (max 280px), background `brand-orange`, with `shadow-2xl`. Transition: translateX, 500ms, cubic-bezier(0.77,0,0.18,1).
- **Menu items:** List of links ["Search", "Catalog", "About", "Profile", "Favorites"], white text, `text-2xl font-medium`, each with `py-2.5` and a bottom border of `white/10`. Each item staggers in with 50ms delay intervals (starting at 80ms) via opacity and translateX animation. Hover: slides right 2px and dims to 80% opacity.

---

### Product Card (Bottom ~27% of screen)

- **Container:** White background, `p-3`, fixed height 220px, flex column justify-between.
- **Product info (top-left):**
  - Title: "Coco Crush ring", black, `text-lg font-medium leading-tight`
  - Subtitle: "18K yellow", `text-black/60 text-xs mt-1`
- **Product image (centered):** Absolutely positioned center (50%/50% translate), width 70%, object-contain.
  - **Image URL:** `https://soft-zoom-63098134.figma.site/_assets/v11/6297b1b8b8a1c0720cbd098274da6619ad35b486.png`
- **Price info (bottom-left):**
  - Label: "From", `text-brand-dark/64 text-xs`
  - Price: "$25,550", `text-brand-dark text-lg font-medium`
- **Arrow button (bottom-right corner):** 72x68px black box, absolutely positioned at `bottom-0 right-0`, containing a white Lucide `ArrowUpRight` icon (4x4). Hover: slightly lighter black (`bg-black/90`) with transition.

---

### Animations (Staggered on mount)

All elements animate in on mount with a 100ms initial delay:

1. **Translate stagger:** Elements fade in (opacity 0 to 1) and slide up (translateY 20px to 0) with `0.7s cubic-bezier(0.16, 1, 0.3, 1)` easing, each subsequent element delayed by 120ms.
2. **Scale stagger:** Elements scale from 0.92 to 1 with opacity fade, `0.8s cubic-bezier(0.16, 1, 0.3, 1)`.
3. **Fade stagger:** Pure opacity fade, `0.8s cubic-bezier(0.16, 1, 0.3, 1)`.

Stagger order (index): grid lines (0), logo (1), menu button (2), hero image fade (3), awards left (4), awards right (5), product card container (6), product text top (7), product image (8), price section (9), arrow button scale (10).

---

### CSS Utilities

- `.scrollbar-hide` class to hide scrollbars on the screen content area.
- Global reset: `* { margin: 0; padding: 0; box-sizing: border-box; }`
- Body: font-family set to "Test Founders Grotesk Light", with `-webkit-font-smoothing: antialiased`.

---

### Tech Stack

- React 18 + TypeScript
- Vite
- Tailwind CSS 3.4
- Lucide React (for Menu, X, ArrowUpRight icons)
- No additional UI libraries