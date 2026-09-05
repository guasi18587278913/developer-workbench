# Exact recreation prompt — Livo AI landing page

Copy everything below into another model/tool:

---

**TASK:** Recreate this marketing landing page **pixel-faithfully**. Product: **Livo AI**. Stack: React 18 + TypeScript + Vite + Tailwind CSS + Framer Motion + Lucide React. Do not invent alternate layouts, colors, copy, or assets. Use the exact URLs, numbers, easings, and copy below.

---

## Global / foundation

**Font (exact):**
```html
<link rel="preconnect" href="https://fonts.googleapis.com" />
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
<link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap" rel="stylesheet" />
```
- Family everywhere: `Inter, sans-serif`
- Default weight for headlines/body CTAs: **500** (`font-medium`); nav/links medium; pagination active number **600**

**Page shell:**
- Root: `min-h-screen`
- Four full-width sections stacked vertically, each wrapped in a `ScaledSection`:
  1. Hero
  2. Scenarios (Talent & Hiring carousel)
  3. App Advert (AI analysis / full-bleed)
  4. Pricing Plans

**ScaledSection behavior:**
- Design frame: `1440 × 900`
- If `window.innerWidth < 1024`: no scale (`zoom = 1`)
- Else: `scale = min(vw/1440, vh/900)`, clamped `max(scale, 0.5)`; apply CSS `zoom` on a wrapper when zoom ≠ 1

**Shared brand colors:**
| Token | Value |
|--------|--------|
| Page blush bg | `rgb(254, 241, 238)` |
| Purple | `rgb(122, 50, 227)` / `#7A32E3` |
| Deep purple (hero gradient text) | `rgb(115, 34, 237)` |
| Orange | `rgb(253, 135, 61)` |
| Pink | `rgb(236, 72, 153)` / `#ec4899` |
| Tailwind purple-600 | `#9333ea` |
| Black | `#000` |
| White | `#fff` |

**Shared word animation (used across sections):**
- Split text by spaces; each word is `inline-block`
- Initial: `opacity: 0`, `y: 10` (or 12), `filter: blur(10px)` (or 8px)
- Animate when in view (once): `opacity: 1`, `y: 0`, `filter: blur(0)`
- Spring: `stiffness ~160–163`, `damping ~38–40`, `mass: 1`
- Stagger: typically `0.04–0.05s` per word (paragraphs often `0.02`)
- Non-breaking space between words (`\u00A0`)

**Smooth ease (common):** `[0.25, 0.46, 0.45, 0.94]`  
**Snappy ease (scenarios image):** `[0.44, 0, 0.56, 1]`

**Tailwind custom animation:** `spin-slow` = `spin 3s linear infinite` (rotating CTA border)

**Icons:** Lucide — `User`, `Menu`, `X`, `Check`, `ArrowDownCircle`, `ArrowUpRight`

---

## ASSET URLS (use these exact URLs — do not substitute)

**App icon / logo (navbar + app advert):**
```
https://framerusercontent.com/images/sXJWPys5DXyez95t6axrD3kbJkc.png
```

**Hero product image:**
```
https://framerusercontent.com/images/b4pOG23X1MeuH63d5Dmm4HFLVA.png
```

**Logo ticker (5 logos, heights 70px):**
1. `https://framerusercontent.com/images/Qo4XNTbEsI5VNAtleec5o3fWg.png` — 210×70  
2. `https://framerusercontent.com/images/t6BIfZjwwbbizLquISVq96n6EGc.png` — 210×70  
3. `https://framerusercontent.com/images/blfT46mvLdPrSwL7JUMxh1mUVI.png` — 210×70  
4. `https://framerusercontent.com/images/zDwbpG7hVs2UTJsIh3Fwr3eX4E.png` — 164×70  
5. `https://framerusercontent.com/images/F2VMPPEvVSp3zSIiTC7dXDzw.png` — 210×70  

**Scenarios slide images:**
1. Talent & Hiring: `https://framerusercontent.com/images/J8MYD2sMAbepbr2MiuyxCmAYEgk.png`  
2. Commercial Teams: `https://polo-pecan-73837341.figma.site/_assets/v11/56974c2f2a0bcc77e6331ef7df0ebdd1d7d4d377.png`  
3. Management & Teams: `https://polo-pecan-73837341.figma.site/_assets/v11/b1bded3078219cd54a5a2fef5cb4919c68e7c261.png`  
4. Remote Team Members: `https://polo-pecan-73837341.figma.site/_assets/v11/1c14b7ac2dcdea9ad19040e054b91f33dd4ed3ec.png`  

**App advert backgrounds:**
1. `https://framerusercontent.com/images/qnyDJGivgHQMm5JaWxQxdKn3q0.png`  
2. `https://polo-pecan-73837341.figma.site/_assets/v11/f71ca5dd250ff31df02f32da412dc606df352cc5.png?w=2191`  

---

## SECTION 1 — HERO

**Container:** relative, full width, `min-h-screen`, overflow hidden, flex column, center, background `rgb(254,241,238)`  
Inner: full width, flex column, center, `pt-8`, flex-1

### Navbar
- Max width 1440, `mx-auto`, flex space-between, padding `px-5 md:px-10 lg:px-16`
- **Logo:** 50×50 mobile / 60×60 md+, radius 16 / 20, overflow hidden, box-shadow `15px 25px 45px rgba(0,0,0,0.25)`, img object-cover from APP_ICON
- **Desktop links (lg+ only):** gap `54px` — exact labels: `How it works` | `Use cases` | `Features` | `Pricing` | `FAQ`  
  Style: 16px / 16px line-height, font-medium, tracking 0, black, hover opacity 0.7
- **Desktop actions (lg+):** gap 12px; two square buttons 50×50, radius 16, border `rgba(0,0,0,0.18)`, hover `bg-black/5`  
  1) text arrow `→` (24px)  
  2) Lucide `User` 24×24, strokeWidth 1.5
- **Mobile:** hamburger `Menu` in same 50×50 bordered button; opens full-screen white overlay (`fixed inset-0 z-50`) with Framer: enter/exit opacity + `y: ±20`, duration 0.25; links 22px medium, py-3, border-b black/5, stagger `i*0.05` from `x: -10`; close with `X`

### Hero content row
- Max 1440, flex column → `lg:flex-row`, space-between, padding `px-5 md:px-10 lg:px-16`, top `pt-16 md:pt-20 lg:pt-[100px]`, bottom `pb-16 md:pb-20 lg:pb-[80px]`, gap `12` / `lg:gap-8`, flex-1

**Left copy column** (`max-w-[520px]` on lg, gap 8/10):
- Entrance: opacity 0 → 1, y 24 → 0, duration 0.7, ease `[0.25,0.46,0.45,0.94]`

**H1:**
- Sizes: `44px` → `md:64px` → `lg:82px`, leading 1.1, font-medium, tracking `-0.05em`
- Line 1: `"AI analysis"` — gradient text `linear-gradient(100deg, rgb(115,34,237) 0%, rgb(253,135,61) 100%)` via background-clip; word animation delay 0
- Line 2: `"for real-time discussions"` — solid black; word animation `delayOffset: 0.15`

**Paragraph (exact):**
> Livo AI records your meetings, recognizes who's speaking, and provides real-time insights and live recommendations — all without taking manual notes.

- Sizes: 16/24 → md 17/26 → lg 18/28, font-medium, tracking `-0.02em`, black, `text-wrap: balance`
- Word animation: `delayOffset: 0.4`, `staggerDelay: 0.02`

**CTAs** (row, gap 14px):
1. **Primary “Start for free”**  
   - Wrapper `p-[5px]` relative group  
   - Rotating border: absolute inset-0, radius 23, overflow hidden; inner div 600% size positioned top -200% left -250%, `conic-gradient(from 0deg, rgb(122,50,227) 0%, rgb(253,135,61) 25%, rgb(236,72,153) 50%, rgb(122,50,227) 75%, rgb(253,135,61) 100%)`, `animate-spin-slow` (3s linear infinite)  
   - Gap fill: `inset-[2px]`, radius 21, bg `rgb(254,241,238)`  
   - Button: h 56/60, px 24/30, radius 18, white text 17/18 medium tracking `-0.02em`, flex gap 12,  
     bg `linear-gradient(135deg, rgba(122,50,227,1) 0%, rgba(236,72,153,0.9) 50%, rgba(253,135,61,1) 100%)`  
   - Left circle 28×28, border 1.5px white/80, white arrow SVG 14×14 (right arrow path)  
   - Hover: scale 1.03, shadow `0 8px 32px rgba(122,50,227,0.35), 0 4px 16px rgba(253,135,61,0.25)`, brighter overlay gradient opacity 0→1  
   - Tap: scale 0.97; spring stiffness 400 damping 25
2. **Secondary “Contact us”**  
   - h 56/60, px 28/32, radius 20, border black/25, transparent bg, black text same size  
   - Hover: white bg, border black/10, shadow `0 4px 20px rgba(0,0,0,0.08)`, scale 1.03; tap 0.97

**Trust notes** (exact, with bullet prefix `• `):
- `31-day free trial`
- `No credit card required`
- `Cancel anytime`  
Style: 14px/14px, medium, tracking `-0.02em`, black, gap-x 24, wrap

**Right image:**
- Width full / `lg:w-[788px]`, aspect `3/2`, radius `rounded-2xl` (16px), overflow hidden, object-cover HERO_IMAGE  
- Motion: opacity 0→1, x 40→0, duration 0.7, delay 0.1, same smooth ease

### Offer strip (bottom of hero)
- Full width, `bg-white/[0.82]`, flex column center, gap 18px, padding `px-5 md:px-10`, `py-8 md:pt-[52px] md:pb-8`
- Text (exact): `Enjoy 50% off premium features for first 3 months — 21 days remaining` — 15/16px medium tracking `-0.02em` black
- Link (exact): `Start 14 days trial` — same size, color `rgb(122,50,227)`, hover opacity 0.7

**Logo ticker:**
- Height 85px, overflow hidden  
- Mask: `linear-gradient(270deg, transparent 0%, black 4.7%, black 95.3%, transparent 100%)`  
- Triple the logo array; animate `x: [0, -totalWidth]` where `totalWidth = sum(logo.width + 30)`, duration `totalWidth / 80` seconds, linear infinite  
- Logos: height 70px, gap 30px, object-contain, fixed widths as listed above

---

## SECTION 2 — SCENARIOS

**Container:** `min-h-screen`, flex center, padding `px-5 md:px-10 lg:px-16 py-10 md:py-12`, bg `rgb(254,241,238)`  
Inner max 1440, flex col → lg row, gap 10 / `lg:gap-[60px]`, items center / lg start

**Left column:** full / `lg:w-[540px]`, `lg:h-[830px]`, justify space-between

**Label:** `"Scenarios"` — 22→26→28px, medium, leading 28, tracking `-0.05em`, gradient `from-purple-600 to-pink-500` (`bg-clip-text text-transparent`); fade in y 8→0, 0.6s smooth

**Auto-carousel:** 4 slides, **5000ms** each; progress updates every 30ms; click pagination jumps and resets progress

| # | Heading | Paragraph | Features | Image |
|---|---------|-----------|----------|-------|
| 1 | Talent & Hiring | Run interviews more efficiently by capturing candidate answers automatically and to turn them into clear, useful insights. | Structured interviews with standardized questions; Clear insights and hiring recommendations; Automatic recording and transcription | Framer URL above |
| 2 | Commercial Teams | Record all customer interactions to ensure precise follow-ups and use insights to accelerate deal progression. | Track every customer touchpoint; Leverage insights to drive deals; Enable accurate follow-ups | Figma site URL |
| 3 | Management & Teams | Capture decisions with speaker-tagged transcripts and receive automated summaries. Broadcast live sessions so everyone stays updated in real time. | Generate instant reports from the transcripts.; Keep the team updated in real time. | Figma site URL |
| 4 | Remote Team Members | Remain focused during meetings as Livo AI provides real-time transcription. Quickly act on key points with clear summaries. | Capture every word instantly without manual note-taking.; Get concise, actionable insights from discussions. | Figma site URL |

**Heading slot:** fixed height ~110/100/130px; h2 44→62→78px, leading 1.05, tracking `-0.05em`, black; AnimatePresence wait: enter y 24 opacity 0→1, exit y -20, duration 0.55

**Paragraph slot:** height ~120/100/130; text 17→19→21px, leading 1.55, tracking `-0.02em`, `text-black/75`, max-w 560; enter y 14 delay 0.08 duration 0.45

**Feature cards:** height slot ~232/248; white cards radius 18, h 68/72, px-6, shadow `0 2px 8px rgba(0,0,0,0.04)`, gap 16; left circle 36×36 gradient `from-purple-100 to-pink-100` with purple Check 18px; feature text 16→17→18 medium `text-black/80`; each card stagger delay `0.12 + i*0.09`

**Pagination (desktop lg+, 44×44):** labels `01` `02` `03` `04`  
- Active: white fill circle + track stroke `rgba(0,0,0,0.06)` + progress stroke purple→pink linear gradient `#9333ea`→`#ec4899`, strokeWidth 2.5, round cap, `-rotate-90`, dasharray `progress * 125.66`; number 16px semibold black tracking `-0.05em`  
- Inactive: circle border black/20, number black/30 medium, hover border black/40  
- Mobile: 40×40, circumference factor `113.1`, shown below image

**Right visual:** `lg:flex-1`, `lg:h-[830px]`; frame h 320/440/full, rounded-2xl overflow; image `h-full w-auto max-w-none`  
- Enter: opacity 0, x 80, scale 0.97 → 1,0,1  
- Exit: opacity 0, x -50, scale 0.97  
- Duration 0.7, snappy ease

---

## SECTION 3 — APP ADVERT (AI ANALYSIS)

**Container:** relative, full width, **`h-screen`**, overflow hidden, flex center

**Background:** crossfade every **7000ms** between 2 slides (`AnimatePresence`, opacity 0↔1, duration 0.6 easeInOut), `bg-cover bg-center` using the two BG URLs above

**Overlay:** `bg-gradient-to-r from-black/60 via-black/30 to-transparent` (lg: `from-black/40 via-black/15 to-transparent`)

**Content:** z-10, padding `px-6 md:px-10 lg:px-16 py-16`, max 1440; left column max-w full / 540 / 580, gap 10–12

**App icon:** 80→100→110px, radius 22/28, overflow hidden, `shadow-2xl`, same APP_ICON; spring in: opacity/scale/y from 0.9/14 when section in view (stiffness 180, damping 28)

**Slide 1 copy:**
- Heading: `AI analysis`
- Paragraph: `Record meetings wherever you are with the Livo AI mobile app. From video calls to in-person conversations, effortlessly capture audio, generate live transcripts, and review actionable insights right from your phone.`

**Slide 2 copy:**
- Heading: `In real-time mode`
- Paragraph: `Start using Livo AI to seamlessly capture your meetings, turn conversations into clear understanding, and easily share key takeaways with your team.`

**Heading style:** white, 52/56 → 66/70 → 78/82, medium, tracking `-0.05em`; AnimatePresence wait y 20/-16, 0.6s  
**Paragraph:** white/90, 17/24 → 19/27 → 22/30, medium, tracking `-0.03em`; delay 0.1, word stagger 0.02 delayOffset 0.15

**CTA “Download App”:**  
- Flex gap 8, h 56/62/66, px 24/28, radius 20, w-fit  
- bg `linear-gradient(165deg, rgba(122,50,227,1) 0%, rgba(253,135,61,1) 100%)`  
- Lucide `ArrowDownCircle` 28–32 white stroke 1.5 + white text 17–19 medium tracking `-0.02em`  
- Hover scale 1.04 + shadow `0 8px 30px rgba(122,50,227,0.3)`; tap 0.97

---

## SECTION 4 — PRICING

**Container:** `min-h-screen`, **white** bg, flex center, `py-16 md:py-20`, Inter

Inner max 1440, `px-5 md:px-10 lg:px-16`

**Title:** `"Plans"` — 46→54→58px, medium, leading 1, tracking `-0.05em`, black, centered; word animate when in view

**Billing toggle:** centered flex gap 20  
- Labels: `Yearly` (left, width 55 right-aligned) and `Monthly` (right) — 15/16 medium; active opacity 1, inactive 0.4  
- Default: **Yearly ON** (knob at x=0); Monthly moves knob to x=20  
- Track: 52×32, radius full, padding 3px, gradient `135deg` purple→orange  
- Knob: 26×26 white circle, spring stiffness 400 damping 30

**Cards row:** `mt-14 md:mt-[72px]`, flex col → lg row, gap 5/6, stretch; each card flex-1, radius **30**, overflow hidden; enter y 36→0 stagger `index*0.1`

### Plan data (exact)

**1. Individual** (light)
- Name: Individual  
- Description: `Well suited for beginning without any expenses.`  
- Yearly price: `0€` | Monthly: `0€`  
- CTA: `Free forever` (black button)  
- Subtext: `0€ per month`  
- Features: Mobile application; Auto transcript; Unlimited sessions; Unlimited contacts  
- Top bg: `rgb(254,241,238)`; bottom features bg: `rgb(252,225,224)`

**2. Advanced** (dark, Top choice ribbon)
- Name: Advanced  
- Description: `Unlimited premium tools`  
- Yearly: price `132€`, strikethrough old `165€`; Monthly: `165€` (no strike)  
- CTA: `Free 14 days trial` (**gradient** button)  
- Yearly subtext: `132€ per month, paid annually` | Monthly: `165€ per month`  
- Features: Prompt modes; Team collaboration; Advanced summaries; Live time history  
- Top bg: `#000`; bottom: `rgb(24,24,24)`  
- Ribbon: absolute `top-[24px] right-[-32px] rotate-45`, gradient purple→orange, text `Top choice` 12/13 white medium, px-10 py-7px

**3. Business** (light)
- Name: Business  
- Description: `Tailored or self-managed solutions`  
- Price (both): `Contact us`  
- CTA: `Request pricing` (black)  
- Subtext: `Schedule a short call — we'll set everything up for you.`  
- Features: Self-hosted options; HIPAA support; Custom LLMs; Priority support  
- Same light top/bottom colors as Individual

### Card chrome
- Top section: center, `px-7 md:px-10 lg:px-12`, `pt-14 md:pt-[64px]`, `pb-10`, gap 7, minHeight 400  
- Plan name: 42→50→56px medium tracking `-0.05em` (white if dark)  
- Description: 17/18 medium leading 22 tracking `-0.02em` (white/80 or black/80)  
- Price row: old strikethrough 36/38 medium tracking `-0.05em` (white/50 or black/50); current same size; AnimatePresence on price/subtext with blur y transitions  
- CTA full width: h 62/66, radius 20, px 28; black OR gradient `165deg` purple→orange; left circle 30×30 border white/60 with `ArrowUpRight` 15px; label 18/19 white medium  
- Features bottom: `px-7/10/12 py-9/10`; each row check circle 28×28 (`bg-white/10` dark / `bg-black/5` light) + Check 16px; text 17/18 medium tracking `-0.02em`

---

## Responsive summary

- Breakpoints used: default / `sm` / `md` / `lg` (Tailwind defaults)  
- Desktop nav + scenarios desktop pagination: `lg` only  
- Mobile nav overlay + scenarios mobile pagination: below `lg`  
- Hero stacks image under copy below `lg`; scenarios stacks visual under text; pricing stacks cards vertically below `lg`  
- App advert always full viewport height with left-aligned copy over photo

## Motion / interaction checklist (must all exist)

1. Word-by-word blur+spring reveal on headings/paragraphs  
2. Hero primary CTA spinning conic border (`spin-slow` 3s) + hover scale/shadow/overlay  
3. Infinite logo ticker with edge fade mask  
4. Scenarios 5s autoplay + circular SVG progress ring + clickable 01–04  
5. Scenarios image slide from right / exit left with scale  
6. App advert 7s background crossfade + copy swap  
7. Pricing yearly/monthly toggle spring knob + price AnimatePresence  
8. Mobile full-screen nav AnimatePresence  
9. Section/card entrance fades via `useInView` once  
10. ScaledSection CSS zoom on mid-size desktop viewports  

## Do not

- Change Inter to another font  
- Replace Framer/Figma asset URLs  
- Use purple-on-white generic SaaS cards instead of blush `rgb(254,241,238)` + black Advanced card  
- Drop the rotating conic border on “Start for free”  
- Invent extra sections (FAQ, footer, testimonials) — only these four sections  

**Deliverable:** a working React page matching the above exactly in structure, copy, assets, typography, colors, spacing, and animations.

---

That prompt is derived directly from the current React components (`HeroSection`, `ScenariosTalentHiringSection`, `AppAdvertAIAnalysisSection`, `PricingPlansSection`, `ScaledSection`) and `index.html` font loading.