Build a single self-contained `index.html` file (no build step, no external JS libraries — one inline `<style>` block and one inline `<script>` block) that recreates the following two-section landing page **exactly** as specified. Follow every pixel value, color, timing, and easing below literally.

---

## 1. Document shell

- `<!DOCTYPE html>`, `<html lang="en">`.
- `<head>`: charset UTF-8; viewport `width=device-width, initial-scale=1.0, viewport-fit=cover`; meta description `"Build intelligent automation systems that learn, scale, and act in real time."`; `<title>Intelligent Automation Systems</title>`.
- Google Fonts: preconnect to `https://fonts.googleapis.com` and `https://fonts.gstatic.com` (crossorigin), then load **Hanken Grotesk** ital,wght 300–900 with `display=swap`.
- Immediately after the font links, an inline head script that runs before paint:
  ```js
  document.documentElement.classList.add('entrance-pending','section-two-pending');
  window.__entranceFailsafe = window.setTimeout(() => {
    document.documentElement.classList.remove('entrance-pending','entrance-running');
  }, 3000);
  ```
- Global CSS: `*{box-sizing:border-box}`, `html{scroll-behavior:smooth}`, `body{margin:0;overflow-x:hidden;background:#fdfdfc}`.
- `<body>` contains a single `<main>` with two `<section>`s: `#section-one` (aria-label "Build systems that think and act") and `#section-two` (aria-labelledby "section-two-title"). All scripts at the end of body in IIFEs.

## 2. Fonts

- **Section one** uses `"Hanken Grotesk",-apple-system,BlinkMacSystemFont,"Segoe UI",sans-serif`.
- **Section two** uses **Inter** via three local `@font-face` rules (weights 400/500/600, `font-display:swap`), sources `assets/inter-400.woff2`, `assets/inter-500.woff2`, `assets/inter-600.woff2`; family stack `'Inter',-apple-system,BlinkMacSystemFont,'Segoe UI',sans-serif`.
- Both sections: `-webkit-font-smoothing:antialiased; text-rendering:optimizeLegibility`.

## 3. Section one — hero + dashboard mockup

All rules scoped under `#section-one`. CSS variables on `#section-one`: `--ink:#18181a; --gray:#57585b; --line:#f1f1f1; --bg:#fdfdfc; --statfill:#fbfbfb; --green:#3ecf4c; --coral:#ef9a6f`. Reset inside: `#section-one *{box-sizing:border-box;`. `overflow-x:hidden`. Links inherit color; `:focus-visible{outline:2px solid #6b6bff;outline-offset:2px;border-radius:6px}`.

Layout shell: `.page{min-height:100vh;display:flex;flex-direction:column}`; `.wrap{width:100%;max-width:1448px; clamp(18px,3.6vw,52px);display:flex;flex-direction:column;flex:1}`.

### 3.1 Nav
- `.nav`: flex, space-between, `padding-top:clamp(20px,3vh,35px)`, position relative, `min-height:calc(44px + clamp(20px,3vh,35px))`.
- `.logo`: `clamp(26px,2.1vw,31px)` square, color #111. Inline SVG four-point sparkle/star: `viewBox="0 0 100 100"`, `fill="currentColor"`, single path `M50 2 C54 30 70 46 98 50 C70 54 54 70 50 98 C46 70 30 54 2 50 C30 46 46 30 50 2 Z`.
- `.nav-links`: centered via `position:absolute;left:50%;transform:translateX(-50%)`, `gap:clamp(18px,2.8vw,40px)`; four links About / Features / Pricing / FAQ (`href="#"`), color `var(--gray)`, weight 400, `font-size:clamp(15px,1.35vw,19.5px)`, letter-spacing .1px, `transition:color .2s`; first link `#3d3e41`; hover #111.
- `.btn` (shared): background #121212, white text, weight 600, `border-radius:999px`, hover #000, `:active{transform:translateY(1px)}`, `transition:background .2s,transform .12s`. `.btn-nav`: `font-size:clamp(13px,1.05vw,15px)`, padding `clamp(9px,1.15vh,13px) clamp(15px,1.6vw,24px)`. Label: **Start Building**.
- `.burger` (hidden on desktop): 46×46 transparent button, three 23×2px bars (#18181a, radius 2, gap 5px), bar transition `transform .3s cubic-bezier(.2,.7,.3,1), opacity .2s`; `.open` state: bar1 `translateY(7px) rotate(45deg)`, bar2 opacity 0, bar3 `translateY(-7px) rotate(-45deg)`.
- `.menu-backdrop`: fixed inset 0, z-40, `rgba(24,20,32,.30)` + `backdrop-filter:blur(3px)`, fades via opacity/visibility .3s.
- `.menu-panel`: fixed z-50, `left/right:clamp(16px,5vw,52px)`, `top:clamp(74px,10.5vh,94px)`, white, `border:1px solid #f0efec`, radius 22px, padding 14px, `box-shadow:0 26px 64px rgba(70,50,95,.20)`; hidden state `translateY(-12px) scale(.98)` origin top-right, transitions `opacity .26s ease, transform .3s cubic-bezier(.2,.75,.3,1)`. `::before` grab-handle: 44×4px bar, `linear-gradient(90deg,#fec4a5,#e9bdcc,#a1b0e8)`, opacity .9, radius 3, margin `2px auto 12px`. Links: #1c1c1e, weight 600, 19px, `letter-spacing:-.01em`, padding 14px 16px, radius 13px, hover background #f6f5f3; `::after` content "→" in #c7c4cf that fades/slides in on hover. `.menu-div`: 1px #efeeec divider, margin 9px 8px 13px. `.menu-cta`: full-width, padding 15px, 16px, radius 14px.

### 3.2 Hero
- `.hero`: flex space-between, align flex-start, `gap:clamp(24px,4vw,60px)`, `margin-top:clamp(40px,8vh,104px)`, `margin-bottom:clamp(24px,3.6vh,40px)`.
- `.headline` (h1): weight 700, `font-size:clamp(37px,4.98vw,72px)`, line-height 1.02, `letter-spacing:-.03em`, color #171718, `max-width:clamp(320px,47.5vw,688px)`. Two lines, each wrapped as `<span class="headline-line"><span>…</span></span>`: "Build Systems That" / "Think and Act". (`.headline-line` is display:block; the outer span gets `overflow:hidden` only while `html.entrance-pending`.)
- `.hero-right`: `max-width:clamp(300px,31vw,448px)`, `padding-top:clamp(4px,1vh,12px)`.
- `.subtitle`: "Automate decisions with systems that learn from your data in real time." — #5a5b5e, `clamp(15px,1.35vw,19.5px)`, line-height 1.34.
- `.btn-hero`: "Start Building", `margin-top:clamp(20px,3.6vh,40px)`, `font-size:clamp(14px,1.2vw,17px)`, padding `clamp(12px,1.6vh,16px) clamp(22px,2vw,29px)`.

### 3.3 Showcase gradient frame
`.showcase`: `padding:clamp(14px,4.4vw,64px) clamp(14px,4.4vw,64px) 0` (**no bottom padding** — dashboard bleeds off the bottom edge), `border-radius:clamp(12px,1.4vw,20px)`, `overflow:hidden`, and this exact layered background:
```css
background:
  radial-gradient(76% 54% at 52% -7%, #fec4a5 0%, rgba(254,196,165,0.74) 28%, rgba(254,196,165,0) 60%),
  radial-gradient(60% 55% at -4% 82%, #e9bdcc 0%, rgba(233,189,204,0) 52%),
  radial-gradient(46% 42% at 104% 76%, #a1b0e8 0%, rgba(161,176,232,0) 52%),
  radial-gradient(130% 42% at 50% -6%, #eabfc5 0%, rgba(234,191,197,0) 68%),
  radial-gradient(120% 60% at 50% 46%, #c8c7ec 0%, rgba(200,199,236,0) 78%),
  linear-gradient(178deg, #ecbfc4 0%, #d2c4e0 46%, #c8c6ea 100%);
```

### 3.4 Dashboard mockup (fixed internal layout, container-query units)
`.dash`: white, `border-radius:clamp(10px,1.4vw,18px) clamp(10px,1.4vw,18px) 0 0`, `box-shadow:0 30px 60px rgba(90,70,110,.14), 0 4px 14px rgba(90,70,110,.06)`, flex, overflow hidden, **`container-type:inline-size; container-name:dash`** — every internal dimension uses `cqw` so the whole mockup scales like an image.

**Sidebar** (`flex:0 0 21.4%`, right border `1px solid var(--line)`, padding `2cqw 1.7cqw 3cqw 1.9cqw`):
- `.search` pill: 1px #eaeaea border, radius 999px, padding `.7cqw 1.15cqw`, text "Search" in #a9a9ad at `1.2cqw`, magnifier SVG (circle cx11 cy11 r7 + line 16.5,16.5→21,21, stroke-width 2.2) at `1.15cqw` wide, `margin-bottom:2cqw`.
- Six `.navitem` rows (gap `1cqw`, padding `.75cqw .35cqw`, #4a4b4e, `1.24cqw`, icons `1.42cqw` wide): **Overview** (active: color #141414 weight 500, plus a `::before` left rail at `left:-1.9cqw`, `.28cqw × 1.65cqw`, #141414), with 4-squares grid icon (rects 7×7 rx1.5 at 3,3/14,3/3,14/14,14, stroke 1.9); **Automation** with gear icon (circle r3 + gear path, stroke 1.7) and a trailing chevron `.chev` (`margin-left:auto`, `1.05cqw`, opacity .55); **Signals** (audio-levels icon: paths `M4 12h2M9 6v12M14 3v18M19 8v8M22 11v2`, stroke 1.9); **Analytics** (bar chart: `M4 20V10M9 20V4M14 20v-7M19 20V8`); **Workflows** (org-chart boxes icon, stroke 1.8); **Marketing** (megaphone/speaker icon with sound-waves, stroke 1.8).

**Content** (`flex:1`, padding `2cqw 2cqw 2.4cqw`, column gap `2cqw`):
- `.stat-row`: 3-column grid, gap `2.1cqw`. Each `.stat`: background var(--statfill), `1px solid #f5f5f4`, radius `1.3cqw`, padding `2.4cqw 1.5cqw 2.8cqw`, centered. `h4` `1.55cqw` weight 500 #1c1c1e; `.big` `3.76cqw` weight 600 #141416 letter-spacing -.02em; `.sub` `1.1cqw` #8d8e92. Contents: **Decisions Today / 14,222** (with a green `var(--green)` up-right arrow SVG `M7 17L17 7M17 7H8M17 7v9`, `1.8cqw` wide) / "Increase compared to last week"; **Accuracy Rate / 98.4% / + 0.3% this week**; **Active WorkFlow / 2.7x / throughout multiplier**.
- `.grid-row`: grid `44.3% 1fr`, gap `3cqw`. `.panel`: statfill background, `1px solid #f2f2f2`, radius `1.3cqw`, padding `2cqw 2cqw 1.5cqw`. `.panel-head h3` `1.71cqw` weight 600; `.dropdown` label + chevron, `1.18cqw` #5f6063.
  - **Growth panel** ("Today" dropdown): `.chart{height:14cqw}` containing an SVG `viewBox="0 0 460 235" preserveAspectRatio="none"`:
    - `<defs>` linearGradient id="area" vertical: `#f4a582` opacity .45 → 0.
    - Horizontal gridlines stroke #eeeeee at y = 30/70/110/150/190 (x 52→452), class `chart-grid`.
    - Vertical gridlines stroke #f3f3f3 at x = 92/152/212/272/332/392 (y 30→190), class `chart-grid`.
    - Y labels (class `chart-y-labels`, fill #9a9b9e, 12px Hanken Grotesk, anchor end, x=42): 4k/3k/2k/1k/0 at y 34/74/114/154/194.
    - Area path (class `chart-area`, fill url(#area)): `M62,180 L92,110 L132,150 L182,70 L222,168 L262,102 L302,148 L342,58 L392,110 L452,52 L452,190 L62,190 Z`.
    - Polyline (class `chart-line`, **`pathLength="1"`**, stroke #ef9a6f width 2.4, round joins/caps): points `62,180 92,110 132,150 182,70 222,168 262,102 302,148 342,58 392,110 452,52`.
    - X labels (class `chart-x-labels`, anchor middle, y=212): 00/02/04/06/08/10/12/14 at x 62/118/174/230/286/342/398/452.
  - **Team Access panel** ("Sort by Top" dropdown): four `.member` rows (gap `1.1cqw`, padding `.85cqw 1cqw`, radius `1cqw`): Chris Fiendly – Automation Lead (`assets/profile-chris.jpg`); **Maggie Johnson – Data Engineer, highlighted** (`.hl{background:#f2f2f1}`, `assets/profile-maggie.jpg`); Gael Harry – Analyst (`assets/profile-gael.jpg`); Jenna Sullivan – ML Engineer (`assets/profile-jenna.jpg`). `.avatar`: `3.1cqw` circle, object-fit cover, ring `box-shadow:0 0 0 2px #fff,0 0 0 3px #ededed`. `.name` `1.31cqw` weight 500; `.role` `1.1cqw` #8d8e92.
- `.bottom-row`: 2-column grid, gap `2.1cqw`; two `.minicard`s (statfill, `1px solid #f2f2f2`, radius `1.3cqw`, padding `1.9cqw`): "Top month" and "Top year", each with `.dashes` "- - - -" in #c9cacd, `1.6cqw`, `letter-spacing:.3cqw`.

### 3.5 Section-one responsive
- `@media (max-width:1024px)`: page min-height auto; hide `.nav-links` and `.btn-nav`; show burger; hero becomes column (`gap:clamp(16px,2.5vh,22px)`, `margin-top:clamp(34px,6vh,60px)`); headline `clamp(38px,7vw,60px)` max-width 16ch; hero-right max-width 640px.
- `@media (max-width:620px)`: wrap padding 0 14px; nav padding-top 20px; hero margins 30px/26px gap 16px; headline `clamp(33px,9.6vw,44px)` line-height 1.06 letter-spacing -.036em; subtitle 16.5px/1.5 #6a6b6e max-width 33ch; `.btn-hero` full-width 15px 26px 16px; showcase padding 11px 11px 0 radius 12px; menu-panel top 70px.
- `@media (prefers-reduced-motion:reduce)`: kill all transitions in section one.

## 4. Section two — "Automate the complexity. Keep the control."

Fixed-canvas design that scales as one unit. Variables on `#section-two`: `--bg:#fdfdfc; --ink:#0B0B0A; --peach:#FDC2A1; --white:#ffffff; --stage-width:1672px; --stage-height:941px; --stage-ratio:1672 / 941; --section-gap:clamp(32px,4vw,64px)`.

- `#section-two`: `position:relative;height:100vh;min-height:560px;isolation:isolate;margin-block-start:var(--section-gap);overflow:hidden;background:var(--bg)`; Inter font stack.
- `#viewport`: absolute inset 0, overflow hidden, background var(--bg).
- `#stage`: absolute, centered via `left:50%;top:50%;transform:translate(-50%,-50%) scale(var(--s,1))`, size 1672×941, `transform-origin:center center`.

### 4.1 Title
`h2.title` at left 66px / top 33px: weight 600, 67px/72px, `letter-spacing:-0.024em`, color var(--ink), nowrap. Two lines each wrapped `<span class="section-two-line"><span>…</span></span>`: "Automate the complexity." / "Keep the control."

### 4.2 Cards (the three animated cards)
`.card`: absolute, top 227px, height 664px, radius 19px, overflow hidden.
- `#c1`: left 66px, width 506px, `background-color:var(--peach)` (#FDC2A1), `filter:saturate(1.13) brightness(0.975)`.
- `#c2`: left 584px, width 505px.
- `#c3`: left 1100px, width 506px, `background-color:#111214`.

Each card's artwork is a `<video class="card-media" autoplay muted loop playsinline preload="auto" aria-hidden="true">` placed as the **first child** of the card (5-second seamless loops, Kling v3.0 pro/1080p generations; the poster is the CDN copy of the original still so nothing flashes while loading):

| Card | `src` (video) | `poster` (still) |
|---|---|---|
| #c1 planet | `https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260811_023241_a4b49912-11fc-415e-becd-a0d5253a507e.mp4` | `https://d2ol7oe51mr4n9.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/9f4745b3-2cbe-4eea-8edd-feee1c9a5fc0.jpg` |
| #c2 butterfly | `https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260811_023247_f5250e39-0588-4693-a24e-8063e9b66297.mp4` | `https://d2ol7oe51mr4n9.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/69f629a1-bc5c-4058-bb44-b1bcfddab3bd.jpg` |
| #c3 coral | `https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260811_023253_3f946b89-9de8-4bf7-9150-6dd891d46728.mp4` | `https://d2ol7oe51mr4n9.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/eddb5d0c-27e0-4cb1-b6be-053eb2bf0d39.jpg` |

Card media CSS (hand-tuned crops):
```css
.card-media{position:absolute;display:block;border:0;pointer-events:none;}
#c1 .card-media{left:-138px;top:128px;width:768px;height:576px;object-fit:cover;}   /* planet: offset crop, planet sits lower-left */
#c2 .card-media{inset:0;width:100%;height:100%;object-fit:cover;object-position:52% 34%;}
#c3 .card-media{inset:0;width:100%;height:100%;object-fit:cover;object-position:44% 62%;}
```
Video imagery: **c1** — soft pastel ringed planet (orange top / violet bottom) slowly rotating on a peach field; **c2** — translucent iridescent butterfly gently beating its wings on a peach-to-blue gradient; **c3** — pink/lilac macro coral swaying subtly on pure black.

Card #c3 additionally contains, after the video, `<div class="lift"></div>`: `position:absolute;inset:0;mix-blend-mode:screen;background:#0c0c0c;pointer-events:none;` (lifts the blacks of the dark card).

### 4.3 Card text + badges
- `.num` (big white numbers): weight 500, 143px/1, `letter-spacing:0.004em`, #fff. `#n1` "98.4%" at 29,39; `#n2` "10M+" at 17,421; `#n3` "2.7x" at 28,39 with `letter-spacing:-0.005em`.
- `.sub` (white copy, `rgba(255,255,255,0.94)`, 400, 20px/1.44, `letter-spacing:-0.006em`):
  - `#s1` at 25,201 width 462: "Systems that learn continuously and optimize outcomes in real time."
  - `#s2` at 25,583 width 478: "Handle massive data flows without complexity or performance loss."
  - `#s3` at 184,560 width 322: "From insight to action — instantly across your entire system."
- `.badge`: 90px white circle, flex-centered, containing the arrow SVG `.arw` (`viewBox="0 0 100 100"`): group stroke #0d0d0d width 7.5 round caps/joins, `<line x1="34" y1="66" x2="66" y2="34"/>` + `<polyline points="40,34 66,34 66,60"/>` (up-right arrow). Positions: `#b1` 375,532; `#b2` 376,41; `#b3` 15,532.

### 4.4 Section-two responsive
- Tablet `(min-width:621px) and (max-width:1024px)`: section `height:auto;min-height:0;aspect-ratio:var(--stage-ratio)` (keeps the horizontal composition, scaled).
- Mobile `(max-width:620px)`: section and viewport become natural-flow (`height:auto;min-height:100dvh;overflow:visible`); `#stage` becomes `position:relative`, transform none, flex column, `padding:clamp(20px,5vw,44px)`, `gap:clamp(14px,3.2vw,22px)`. Title static, `clamp(30px,8.4vw,60px)`, wraps normally. Cards: relative, full width, `aspect-ratio:506/560`, `min-height:340px`, radius `clamp(16px,3.6vw,22px)`. Media overrides: `#c1 .card-media{left:-15%;top:26.5%;width:130%;height:auto}`, `#c2 .card-media{object-position:52% 42%}`, `#c3 .card-media{object-position:50% 42%}`. Numbers `clamp(58px,15vw,120px)`; n1/n3 at 6.5%/8%, n2 at left 6.5% bottom 26%. Subs `clamp(15px,3.9vw,20px)`: s1 6.5%/34% w82%; s2 left 6.5% bottom 8% w88%; s3 right 5% bottom 9% w60% text-right. Badges `clamp(56px,13vw,88px)`: b1 right 6% bottom 7%; b2 right 6% top 6%; b3 left 5% bottom 7%.

## 5. Entrance animations

Two independent choreographies driven by `<html>` classes. Hidden "pending" states are gated behind `html.entrance-pending` / `html.section-two-pending` (so the authored design is the no-JS default); animations run when `entrance-running` / `section-two-running` are added. Signature easing: **`cubic-bezier(.22,1,.36,1)`** everywhere except noted.

### 5.1 Pending states (exact)
Section one, under `html.entrance-pending`: logo, nav links, btn-nav, burger, subtitle, btn-hero, dash, sidebar, stats, panels, stat `.big`, chart grid/labels/area, team avatars + text, minicards — all `opacity:0` plus: headline line spans `translateY(105%)` (parents overflow:hidden); logo `scale(.92)`; nav links/burger `translateY(-8px)`; btn-nav `translateY(-6px)`; subtitle `translateY(14px)`; btn-hero `translateY(12px) scale(.985)`; dash `clip-path:inset(0 0 12% 0 round clamp(10px,1.4vw,18px))` + `translateY(22px) scale(.985)`; sidebar `translateX(-10px)`; stat `clip-path:inset(0 100% 0 0 round 12px)` (wipe from left); stat .big `clip-path:inset(0 0 100% 0)` + `translateY(6px)`; panel `clip-path:inset(0 0 8% 0 round 12px)` + `scale(.985)`; chart-area `clip-path:inset(0 100% 0 0)`; chart-line `stroke-dasharray:1;stroke-dashoffset:1`; avatars `scale(.78)`; member text `translateX(7px)`; minicards `translateY(10px)`.

Section two, under `html.section-two-pending`: title line spans `translateY(105%)` in overflow-hidden parents; cards `clip-path:inset(100% 0 0 0 round 19px)` (reveal bottom-up); nums `clip-path:inset(0 0 100% 0)` + `translateY(10px)`; subs `translateY(8px)`; badges `scale(.72)`; badge arrow groups `translate(-6px,6px)`; all opacity 0.

### 5.2 Section-one timeline (under `html.entrance-running`)
| Element | keyframes | duration | delay |
|---|---|---|---|
| logo | entrance-logo (scale .92→1) | 520ms | 60ms |
| nav links 1–4 | entrance-nav (y −8→0) | 460ms | 110/165/220/275ms |
| burger | entrance-nav | 460ms | 115ms |
| btn-nav | entrance-nav-cta (y −6→0) | 480ms | 155ms |
| headline line 1 / 2 | entrance-line (y 105%→0) | 820ms | 235 / 325ms |
| subtitle | entrance-support (y 14→0) | 640ms | 570ms |
| btn-hero | entrance-action | 640ms | 690ms |
| dash | entrance-dashboard (clip+lift) | 1000ms | 690ms |
| sidebar | entrance-dashboard-rail (x −10→0) | 580ms | 780ms |
| stats 1–3 | entrance-dashboard-card (left wipe) | 560ms | 820/885/950ms |
| stat values 1–3 | entrance-stat-value (top wipe) | 540ms | 940/1005/1070ms |
| panels 1–2 | entrance-dashboard-panel | 620ms | 990/1050ms |
| chart grid + y-labels | entrance-chart-context (fade), ease-out | 420ms | 1080ms |
| chart area | entrance-chart-area (left wipe) | 720ms | 1130ms |
| chart line | entrance-chart-line (dashoffset 1→0), `cubic-bezier(.45,0,.25,1)` | 760ms | 1150ms |
| chart x-labels | entrance-chart-context, ease-out | 400ms | 1290ms |
| team avatars / texts (members 2–5) | entrance-profile-avatar / -info | 460ms | avatars 1130/1190/1250/1310ms, texts 1170/1230/1290/1350ms |
| minicards 1–2 | entrance-dashboard-detail (y 10→0) | 560ms | 1370/1440ms |

All `both` fill. (Members are `:nth-child(2)`–`(5)` because the panel-head is child 1.)

### 5.3 Section-two timeline (under `html.section-two-running`)
| Element | keyframes | duration | delays |
|---|---|---|---|
| title lines | entrance-section-two-title (y 105%→0) | 680ms | 0 / 70ms |
| cards c1/c2/c3 | entrance-section-two-card (clip bottom-up, round 19px) | 720ms | 120/200/280ms |
| nums n1/n2/n3 | entrance-section-two-metric (top wipe + y10) | 600ms | 280/360/440ms |
| subs s1/s2/s3 | entrance-section-two-copy (y 8→0) | 520ms | 420/500/580ms |
| badges b1/b2/b3 | entrance-section-two-badge (scale .72→1) | 480ms | 540/620/700ms |
| badge arrows | entrance-section-two-arrow (translate −6,6→0) | 420ms | 590/670/750ms |

Define all keyframes exactly as fromto pairs matching the pending states (e.g. `@keyframes entrance-dashboard{from{opacity:0;clip-path:inset(0 0 12% 0 round 18px);transform:translateY(22px) scale(.985)}to{opacity:1;clip-path:inset(0 0 0 0 round 18px);transform:none}}`).

### 5.4 Reduced motion
`@media (prefers-reduced-motion:reduce)` forces every pending selector to `opacity:1;transform:none;clip-path:none;animation:none!important;stroke-dashoffset:0`.

## 6. JavaScript (four IIFEs, end of body)

1. **Burger menu**: `setMenu(open)` toggles `.open` on panel/backdrop/burger, syncs `aria-expanded` and `aria-label` (Open menu / Close menu), locks body scroll (`document.body.style.overflow`). Triggers: burger click (toggle), backdrop click (close), any panel link or `.menu-cta` click (close), Escape key (close), and window resize closes it if the burger is `display:none`.
2. **Stage scaler**: `fitStage()` — if `#stage` computed position is `relative` (mobile), remove the `--s` property; otherwise `--s = min(sectionWidth/stageOffsetWidth, sectionHeight/stageOffsetHeight)` from `#section-two.getBoundingClientRect()`. Run once, on `resize`, on `orientationchange`, and via a `ResizeObserver` on the section.
3. **Section-one entrance**: if `prefers-reduced-motion`, immediately clear the pending classes and set `document.documentElement.dataset.entranceComplete='true'`. Otherwise `Promise.race([document.fonts.ready, 450ms timeout])` then add `entrance-running`; listen for `animationend` of `entrance-dashboard-detail` on the **last minicard** (fallback: `entrance-dashboard` on `.dash`) to remove `entrance-pending`/`entrance-running` and clear the head-script failsafe timer (`window.__entranceFailsafe`).
4. **Section-two entrance on scroll**: reduced-motion → finish immediately (`dataset.sectionTwoEntranceComplete='true'`). Otherwise record `initialScrollY`; observe the section with an `IntersectionObserver` (`threshold:0.12, rootMargin:'0px 0px -10% 0px'`); a passive scroll handler fires the entrance only when the section is ≥12% visible **and** `window.scrollY > initialScrollY + 4` (so it never auto-plays without an actual scroll); then disconnect everything, add `section-two-running`, and on `animationend` of `entrance-section-two-badge` on `#b3` clear both classes. Fallback when no IntersectionObserver: first scroll event starts it.

## 7. Local assets required

`assets/` folder: `inter-400.woff2`, `inter-500.woff2`, `inter-600.woff2` (Inter subsets), and four square team avatar photos `profile-chris.jpg`, `profile-maggie.jpg`, `profile-gael.jpg`, `profile-jenna.jpg`. The three card artworks are **not** local — they are the CloudFront video/poster URLs in §4.2.

## 8. Acceptance checks

- Desktop: nav pill top-right, centered links; hero headline left with subtitle+CTA right; gradient frame with dashboard bleeding off the bottom; section two fills one viewport with three cards side by side, title top-left.
- The dashboard's internal proportions never reflow at any width (container units), only scale.
- Section two's 1672×941 stage scales uniformly to fit the viewport (letterboxed by --bg), tablet keeps the composition via aspect-ratio, mobile stacks cards vertically.
- All three card videos autoplay muted, loop seamlessly, and are cropped exactly as specified (planet lower-left with peach field above, butterfly centered slightly high, coral centered low on black).
- Page load plays the section-one cascade (logo → nav → headline lines rising from masks → subtitle/CTA → dashboard clip-reveal → sidebar → stats → chart draw-on → avatars → minicards, ~1.9s total); scrolling to section two plays its cascade (title lines → cards rising bottom-up → numbers wiping down → copy → badges popping with arrows sliding in diagonally).
- With `prefers-reduced-motion`, everything is instantly visible and static imagery still shows via video posters.