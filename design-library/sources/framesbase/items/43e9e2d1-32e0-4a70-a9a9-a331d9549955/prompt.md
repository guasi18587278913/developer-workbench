Create a React + Vite + Tailwind CSS project that displays 3 mobile phone screens (375x812px each) side by side on a page with a `#BBB8B9` body background. No phone frames -- just raw screen content. The middle screen is positioned 75px higher than center, and the left/right screens are 45px lower than center. Screens are spaced with a 40px gap.

**Dependencies:** `react`, `react-dom`, `react-router-dom`, `lucide-react`, `@supabase/supabase-js`, Tailwind CSS.

**Fonts (Google Fonts loaded in index.html):**
- `Hammersmith One` (headings, logo, quotes -- uppercase, bold display)
- `Inter` (body text, labels, inputs -- weights 400, 500, 600, 700)

**Tailwind Config -- custom extensions:**
- `fontFamily.hammersmith`: `"Hammersmith One", sans-serif`
- `fontFamily.inter`: `"Inter", sans-serif`
- `colors.brand`: `#E30A17` (Turkish flag red, used as accent)

**Custom CSS Animations (defined in index.css):**
- `animate-fade-up`: translateY(24px) to 0, opacity 0 to 1, 0.8s, cubic-bezier(0.22, 1, 0.36, 1)
- `animate-fade-in`: opacity 0 to 1, 0.8s, same easing
- `animate-scale-in`: scale(0.92) to 1 + fade, same easing
- `animate-slide-right`: translateX(-30px) to 0 + fade
- `animate-slide-left`: translateX(30px) to 0 + fade
- Delay classes: `.delay-0` through `.delay-1200` (100ms increments)

---

### SCREEN 1 -- Hero (White Background)

**Layout:** `w-full h-[812px] bg-white overflow-hidden relative`

**Navigation (shared across all 3 screens):**
- Absolutely positioned at top, `px-5 pt-[60px] pb-4`, z-50
- Left: 44x44px circle with `bg-brand` (or custom `logoBg` prop), contains "Arda" / "Guler" text in white, `font-hammersmith text-[9px]`, stacked vertically
- Right: Hamburger button -- 3 bars (w-6 h-[2px]), animates to X when toggled
- Full-screen overlay menu on toggle with links: Partners, Collaboration, Home + social icons (TikTok, Instagram, Spotify, YouTube, X)
- `dark` prop variant: white text/bars on dark backgrounds

**Name Title:**
- Absolutely positioned, `top-[15%]`, centered, z-10
- `font-hammersmith text-brand uppercase`, font-size: 90px, line-height: 0.85, letter-spacing: -0.02em
- Text: "ARDA" (line break) "GULER"
- Animation: `animate-fade-in delay-100`

**Player Image:**
- Absolutely positioned, spans full height, z-20
- Image URL: `https://soft-zoom-63098134.figma.site/_assets/v11/617399912274f2b80327c4a1be99d14720bd14f3.png?h=1024`
- Positioned at bottom center, `h-[90%] w-auto object-contain`
- CSS mask: `linear-gradient(to bottom, black 60%, transparent 100%)` -- fades out at bottom
- Animation: `animate-fade-in delay-300`

**Quote Section:**
- Absolutely positioned, `bottom-[200px]`, z-30, `px-6`
- Opening curly quote character: `font-hammersmith text-[28px] uppercase leading-[28px]` in black
- Quote text: `font-hammersmith text-[22px] uppercase leading-[28px] tracking-[-0.01em]` in black
- Content: "Only a few of my dreams have come true; I still have a lot of dreams to achieve."
- Attribution: "Arda Guler" in `text-black/60 text-xs font-medium`
- Animation: `animate-fade-up delay-500`

**Bottom Cards Row:**
- Absolutely positioned at bottom, z-30, `flex gap-2 px-4 pb-10`
- Animation: `animate-fade-up delay-700`

**Left card (Video thumbnail):**
- `w-[42%]`, image height 140px, `object-cover`
- Image URL: `https://soft-zoom-63098134.figma.site/_assets/v11/6784c1243841844bc70e510357fd3060179cce83.png`
- Centered play button: 48x48 circle, `bg-brand`, white triangle SVG

**Right card (Next Game):**
- `flex-1`, `bg-black p-4`
- "NEXT GAME" pill badge: `bg-brand rounded-full`, white text 10px font-semibold
- Time: "19:00" in `text-white/70 text-xs`
- Two team badges: RM (gold `#FEBE10` circle, blue `#00529F` border/text) vs PC (navy `#162577` circle)
- VS circle: 28px, `border border-white/40`, white text

---

### SCREEN 2 -- Partners/Gallery (Dark Background)

**Layout:** `w-full h-[812px] bg-[#1C1C1D] overflow-hidden flex flex-col`

**Nav:** dark variant (white bars, white text)

**Heading:**
- `text-white font-hammersmith text-[32px] uppercase leading-[36px] px-5 mb-10`
- Text: "I'm more than a football player."
- Animation: `animate-fade-up delay-200`

**Horizontal Gallery Carousel:**
- `flex gap-2 overflow-x-auto pl-5 pr-2`, hidden scrollbar
- Animation: `animate-fade-up delay-400`
- Each card: `w-[280px]` fixed, flex-shrink-0

**Gallery Items (6 items):**
1. Image: `https://soft-zoom-63098134.figma.site/_assets/v11/3c81261e2c9a7b9a500141e5b3a3fdafd3d52409.png?h=512` | Title: "A seguir adelante" | Date: "10 March 2024"
2. Image: `https://soft-zoom-63098134.figma.site/_assets/v11/2f008d7054282f95f88c0be3bc528a7b36faf30c.png` | Title: "Puente Romano" | Date: "2 April 2024"
3. Image: `https://soft-zoom-63098134.figma.site/_assets/v11/de02babc0cd2f4a0166cb2ed7140bc3ef52e412b.png` | Title: "Mother" | Date: "25 May 2020"
4. Same as #1 | Title: "La vida ultimamente" | Date: "2 April 2024"
5. Same as #2 | Title: "Home" | Date: "2 April 2024"
6. Same as #3 | Title: "Puente Romano" | Date: "2 April 2024"

**Card structure:**
- Image container: `w-full h-[420px] overflow-hidden rounded-sm`, img is `object-cover`
- Below: title in `text-white text-[15px] font-semibold leading-tight`, date in `text-white/50 text-[12px] font-medium`
- Spacing: `pt-3 pb-8` below image

---

### SCREEN 3 -- Collaboration/Contact Form (Red Background)

**Layout:** `w-full h-[812px] bg-[#E30A17] overflow-hidden flex flex-col`

**Nav:** dark variant with `logoBg="bg-[#1C1C1D]"` (black logo circle instead of red)

**Content:** flex-1, flex-col, justify-end, `px-6 pb-14 gap-5`

**Heading:**
- `text-white font-hammersmith text-[32px] uppercase leading-[36px]`
- Text: "Do you have an ideas for collaboration?"
- Animation: `animate-fade-up delay-200`

**Description:**
- `text-white/80 text-sm font-normal leading-[22px]`
- Text: "For professional inquiries, collaborations, or media requests, please get in touch using the form below."
- Animation: `animate-fade-up delay-300`

**Form Fields (all have `border-b border-white/70`, h-[50px]):**
- Each field: input on left (white text, 60% opacity placeholder), label on right (`text-white/80 text-[11px] font-medium`)
- First Name: placeholder "David" | animate-fade-up delay-400
- Last Name: placeholder "Beckham" | same animation group
- Email: placeholder "davidbeckham@gmail.com" | animate-fade-up delay-500
- Message: textarea, `h-[90px]`, placeholder "Message" | animate-fade-up delay-600

**Checkbox + Submit (animate-fade-up delay-700):**
- Checkbox: 20x20, toggles between `border border-white/70` and `bg-[#1C1C1D]` with white checkmark SVG
- Label: "I accept the Terms of Conditions" (Terms in white, rest in white/80, text-[11px])
- Submit button: `h-[48px] w-full bg-[#1C1C1D] rounded`, "Submit Message" in white text-sm font-medium

---

### App Layout

```
Page: min-h-screen, flex items-center justify-center, py-10, gap-10, flex-wrap
Body background: #BBB8B9
Left phone wrapper: mt-[45px]
Middle phone wrapper: -mt-[75px]
Right phone wrapper: mt-[45px]
Each phone container: w-[375px] h-[812px] overflow-hidden (no frame/border/rounding)
```

Left phone = Screen 1 (Hero), Middle phone = Screen 2 (Partners), Right phone = Screen 3 (Collaboration).