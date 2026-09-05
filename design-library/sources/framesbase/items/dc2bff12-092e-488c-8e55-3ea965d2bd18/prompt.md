Cut the provenance and the regeneration appendix. Here it is:

---

# Build this page

Single-screen landing page. Vanilla HTML/CSS/JS — no frameworks, no build step, no external fonts or scripts. Every number below is final; don't improvise or substitute.

Files:

```
index.html
styles.css
app.js
assets/hero.webp           2560×1429  RGB
assets/hero-cutout.webp    2560×1429  RGBA
assets/card-ridge.jpg      480×360
assets/card-baths.jpg      400×500
```

Serve with `python3 -m http.server 4173`.

## 1. Assets

Download:

- **HERO** 5504×3072 — `https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260814_032321_ca06c649-15e1-4bdd-b0e1-d99eb2efb06d.png`
- **CUTOUT** 2048×1143 RGBA — `https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260814_032749_d6e6ac55-933e-4474-ad35-7e283b8becc9.png`
- **RIDGE** 4800×3584 — `https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260814_032325_e46e72c6-5c04-4915-a9a0-d063acb30385.png`
- **BATHS** 3712×4608 — `https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260814_032328_c50d9711-69b3-4f5b-9b7e-2980447b7af3.png`

Process with PIL exactly:

```python
from PIL import Image
W, H = 2560, 1429

hero = Image.open('HERO.png').convert('RGB').resize((W, H), Image.LANCZOS)
hero.save('assets/hero.webp', quality=84, method=6)

# Cutout = ORIGINAL hero RGB + remover's ALPHA. Never the remover's own RGB
# (its matte fringe glows when composited over the identical backdrop).
cut   = Image.open('CUTOUT.png').convert('RGBA')
alpha = cut.split()[3].resize((W, H), Image.LANCZOS)
out   = hero.copy(); out.putalpha(alpha)
out.save('assets/hero-cutout.webp', quality=88, method=6)

Image.open('RIDGE.png').convert('RGB').resize((480, 360), Image.LANCZOS).save('assets/card-ridge.jpg', quality=90)
Image.open('BATHS.png').convert('RGB').resize((400, 500), Image.LANCZOS).save('assets/card-baths.jpg', quality=90)
```

## 2. Font

```
"Helvetica Neue", "HelveticaNeue", Helvetica, "Inter Tight", "Segoe UI", Arial, sans-serif
```

Weights: **700** H1 only; **500** nav pills, intro head, card `h3`, mobile menu links; **400** everything else; *italic 400* for `{ 2026 }`. Add `-webkit-font-smoothing:antialiased; -moz-osx-font-smoothing:grayscale`.

## 3. Sizing system

Design frame **1200 × 675**. `--u` is one design pixel:

```css
:root{ --u: 0.08333333vw; }   /* 1200 design px === 100vw */
```

Every size below is in design px → write as `calc(N * var(--u))`. Vertical anchors are `top: calc(Y / 675 * 100%)`. At ≤1000px `--u` rebases to `1px` (§8).

Tokens: `--ink:#ffffff` · `--ink-dim:rgba(255,255,255,.78)` · `--glass:rgba(22,20,18,.28)` · `--glass-line:rgba(255,255,255,.30)` · `--e:cubic-bezier(.16,1,.3,1)`. Body `background:#0d0f10; overflow-x:hidden`, universal `box-sizing:border-box`.

## 4. Layer stack

`section.hero`: `position:relative; height:100svh; min-height:430px; overflow:hidden; isolation:isolate`.

```
z1  img.hero__bg      assets/hero.webp
z2  div.hero__scrim
z3  h1.hero__title
z4  img.hero__cutout  assets/hero-cutout.webp
z5  .nav .intro .pins .scroll
```

The headline sits between the two plates, so the cabin, deck, tub and chimney occlude it.

Both plates get identical geometry — `position:absolute; inset:0; width:100%; height:100%; object-fit:cover; object-position:center center; pointer-events:none; user-select:none; -webkit-user-drag:none` — **and the same animation** `plate-in 2s var(--e) both`, which keeps them pixel-registered through the zoom.

Scrim:

```css
background:
  linear-gradient(to bottom, rgba(0,0,0,.30) 0%, rgba(0,0,0,0) 26%),
  linear-gradient(to top,    rgba(0,0,0,.34) 0%, rgba(0,0,0,0) 34%),
  radial-gradient(120% 90% at 50% 45%, rgba(0,0,0,0) 42%, rgba(0,0,0,.30) 100%);
```

## 5. Markup — verbatim

Head: `<title>Norvik Slowhouse</title>`; meta description `A slow house in the northern woods — open-sky pools, unbroken quiet.`; viewport `width=device-width, initial-scale=1, viewport-fit=cover`; `<link rel="preload" as="image" href="assets/hero.webp">`; stylesheet. Body ends with `<script src="app.js"></script>`.

```html
<section class="hero">
  <img class="hero__bg" src="assets/hero.webp" alt="A black timber cabin with an open-air pool above a misty autumn valley" fetchpriority="high">
  <div class="hero__scrim"></div>

  <h1 class="hero__title">
    <span class="line"><span class="line__in">Norvik</span></span>
    <span class="line"><span class="line__in">Slowhouse</span></span>
  </h1>

  <img class="hero__cutout" src="assets/hero-cutout.webp" alt="" aria-hidden="true">

  <nav class="nav" aria-label="Main">
    <button class="burger" id="burger" aria-expanded="false" aria-controls="menu">
      <span class="burger__box"><span></span><span></span></span>
      <span class="u-sr">Menu</span>
    </button>
    <div class="nav__links" id="menu">
      <a class="pill" href="#">home page</a>
      <a class="pill" href="#">our story</a>
      <a class="pill" href="#">amenities</a>
      <a class="pill" href="#">residences</a>
      <a class="pill pill--phone" href="tel:+380502470812">+38(050)-247-08-12</a>
    </div>
  </nav>

  <div class="intro">
    <h2 class="intro__head">
      <span class="line"><span class="line__in">We shaped a stillness</span></span>
      <span class="line"><span class="line__in">among the pines that</span></span>
      <span class="line"><span class="line__in">renews</span></span>
    </h2>
    <div class="intro__body">
      <p>Each stay is a quiet exchange<br>
         of distance and warmth, arranged<br>
         to bring you back to yourself.<br>
         For those who value their<br>
         own pace and choose<br>
         to keep it unhurried.</p>
      <span class="intro__year">{ 2026 }</span>
    </div>
  </div>

  <div class="pins">
    <figure class="pin pin--ridge">
      <span class="pin__dot"></span>
      <span class="pin__line"></span>
      <div class="card">
        <div class="card__thumb"><img src="assets/card-ridge.jpg" alt="Mist over the Vinterfjellet ridge" loading="lazy"></div>
        <figcaption class="card__text">
          <h3>Vinterfjellet<br>Ridge</h3>
          <p>Pines beyond the<br>window hold the quiet.<br>And the stream below is<br>not loud, but steady.</p>
        </figcaption>
      </div>
    </figure>

    <figure class="pin pin--baths">
      <span class="pin__dot"></span>
      <span class="pin__line"></span>
      <div class="card">
        <figcaption class="card__text">
          <h3>Open-sky<br>pools</h3>
          <p>Just arrive. And rest.<br>Two of you. Or one.<br>In unbroken quiet.</p>
        </figcaption>
        <div class="card__thumb"><img src="assets/card-baths.jpg" alt="Steaming open-air pool on the deck" loading="lazy"></div>
      </div>
    </figure>
  </div>

  <div class="scroll">
    <span class="scroll__label">keep going</span>
    <button class="scroll__btn" aria-label="Scroll down">
      <span class="scroll__disc">
        <svg viewBox="0 0 24 24" aria-hidden="true">
          <path d="M12 4.4 V18.9 M5.6 12.4 L12 18.9 L18.4 12.4"/>
        </svg>
      </span>
    </button>
  </div>
</section>
```

Card DOM order differs: ridge = thumb→text, baths = text→thumb.

## 6. Desktop styles (design px)

**`.hero__title`** — absolute; `left:15; top:calc(67.9 / 675 * 100%); margin:0; font-size:123.2; font-weight:700; line-height:.772; letter-spacing:-.055em; white-space:nowrap; pointer-events:none`. First `.line` gets `margin-top:-.145em`.

**`.nav`** — absolute `top:calc(32 / 675 * 100%); right:24`. `.nav__links` flex, `gap:13`.

**`.pill`** — inline-flex centered; `height:26; padding:0 9; border-radius:999px; border:1px solid rgba(255,255,255,.10); background:rgba(0,0,0,.22); backdrop-filter:blur(9u)` (+`-webkit-`); `font-size:10.3; font-weight:500; letter-spacing:-.005em; text-decoration:none; white-space:nowrap; transition:background .25s ease, border-color .25s ease, color .25s ease`. Hover `background:rgba(0,0,0,.40); border-color:rgba(255,255,255,.24)`.

**`.pill--phone`** — `background:#f3f0ea; border-color:rgba(255,255,255,.65); color:#16140f; padding:0 16; letter-spacing:-.01em`. Hover `background:#fff; border-color:#fff`.

**`.burger`** — `display:none`.

**`.intro`** — absolute `left:24; top:calc(434.5 / 675 * 100%); width:210`.
- `.intro__head` — `margin:0; font-size:17.6; font-weight:500; line-height:1.055; letter-spacing:-.017em`
- `.intro__body` — `position:relative; margin-top:12`
- `.intro__body p` — `margin:0; font-size:9.6; line-height:1.235; letter-spacing:-.002em; color:var(--ink-dim); text-indent:16`
- `.intro__year` — absolute `right:43; bottom:0; font-size:9.8; font-style:italic; letter-spacing:.02em; color:var(--ink-dim); white-space:nowrap`

**`.pins`** — absolute `inset:0; pointer-events:none`. **`.pin`** — absolute, `margin:0; pointer-events:auto`.

**`.card`** — `display:flex; align-items:stretch; gap:9; padding:10; border-radius:16; border:1px solid var(--glass-line); background:var(--glass); backdrop-filter:blur(11u) saturate(.9)` (+`-webkit-`); `box-shadow: inset 0 1px 0 rgba(255,255,255,.10), 0 14u 34u rgba(0,0,0,.28)`.
- `.card__thumb` — `flex:0 0 auto; width:69; border-radius:8; overflow:hidden`; img `display:block; width:100%; height:100%; object-fit:cover`
- `.card__text` — `margin:0`
- `h3` — `margin:0; font-size:13.4; font-weight:500; line-height:1.08; letter-spacing:-.022em`
- `p` — `margin:9 0 0; font-size:9.4; line-height:1.245; letter-spacing:-.002em; color:var(--ink-dim)`

**`.pin__dot`** — `9×9`, `border-radius:50%; background:#fff; box-shadow: 0 0 0 3u rgba(10,10,10,.30), 0 0 10u rgba(0,0,0,.35)`.
**`.pin__line`** — `width:1px; background:rgba(255,255,255,.55)`; `transform-origin:top center`, and `bottom center` on `.pin--baths`.

**`.pin--ridge`** — `left:887; top:calc(239 / 675 * 100%); width:207`; card `height:108`; line `left:11; top:100%; height:23`; dot `left:6.5; top:calc(100% + 23u)`.

**`.pin--baths`** — `left:463; top:calc(513 / 675 * 100%); width:211`; card `height:114`; its `.card__thumb` `width:74; margin-left:auto`; line `left:196; bottom:100%; height:21`; dot `left:191.5; bottom:calc(100% + 21u)`.

**`.scroll`** — absolute `right:26; bottom:calc(19 / 675 * 100%)`; column flex, centered, `gap:6`.
- `.scroll__label` — `font-size:9.6; letter-spacing:-.005em`
- `.scroll__btn` — `68×68`; `display:grid; place-items:center; padding:0; border-radius:50%; border:1px solid rgba(255,255,255,.60); background:transparent; cursor:pointer; transition:border-color .25s ease, transform .25s ease`. Hover `border-color:#fff; transform:translateY(3px)`
- `.scroll__disc` — `49×49`; `display:grid; place-items:center; border-radius:50%; background:#fff`
- `svg` — `19×19; fill:none; stroke:#141414; stroke-width:1.7; stroke-linecap:square; stroke-linejoin:miter`

## 7. Animations — CSS only, all `var(--e)` with `both`

```css
@keyframes plate-in { from{ transform:scale(1.06); } to{ transform:none; } }
@keyframes fade-in  { from{ opacity:0; } to{ opacity:1; } }
@keyframes line-open{ from{ clip-path:inset(-28% -8% 100% -8%); }
                      to  { clip-path:inset(-28% -8% -28% -8%); } }
@keyframes line-rise{ from{ transform:translateY(.62em); opacity:0; }
                      40% { opacity:1; }
                      to  { transform:none; opacity:1; } }
@keyframes pill-in  { from{ opacity:0; transform:translateY(-9px); } to{ opacity:1; transform:none; } }
@keyframes soft-up  { from{ opacity:0; transform:translateY(14px); } to{ opacity:1; transform:none; } }
@keyframes card-in  { from{ opacity:0; transform:translateY(16px) scale(.97); } to{ opacity:1; transform:none; } }
@keyframes dot-in   { from{ opacity:0; transform:scale(.2); } to{ opacity:1; transform:none; } }
@keyframes line-draw{ from{ transform:scaleY(0); } to{ transform:none; } }
```

Line reveal, shared by H1 and intro head — a mask opens while the text rises through it:

```css
.line    { display:block; clip-path:inset(-28% -8% 100% -8%);
           animation:line-open 1.15s var(--e) var(--dl,0s) both; }
.line__in{ display:block;
           animation:line-rise 1.15s var(--e) var(--dl,0s) both; }
```

Timeline (26 animations total):

| Target | Animation | Duration | Delay |
|---|---|---|---|
| `.hero__bg`, `.hero__cutout` | plate-in | 2s | 0 |
| `.hero__scrim` | fade-in | 1.4s | 0 |
| H1 line 1 / 2 | line-open + line-rise | 1.15s | .10s / .22s |
| pills 1–5 | pill-in | .85s | .30 / .36 / .42 / .48 / .54s |
| intro head lines 1–3 | line-open + line-rise | 1.15s | .46 / .54 / .62s |
| ridge card / baths card | card-in | 1.1s | .72s / .86s |
| `.intro__body` | soft-up | 1.1s | .78s |
| `.scroll` | soft-up | 1.1s | 1.0s |
| ridge line / baths line | line-draw | .6s | 1.10s / 1.24s |
| ridge dot / baths dot | dot-in | .6s | 1.28s / 1.42s |

## 8. Mobile — `@media (max-width: 1000px)`

First rule inside the query: **`:root{ --u: 1px; }`**.

- `.hero{ min-height:600px; padding:0 20px calc(24px + env(safe-area-inset-bottom)); }`
- Both plates: `object-position:44% 56%`
- **Title** — `left:20px; top:auto; margin-top:calc(clamp(132px, 25.4svh, 250px) + env(safe-area-inset-top)); font-size:clamp(46px, 15.2vw, 96px); line-height:.86; letter-spacing:-.045em`. Drop the `-.145em` margin on line 1.
- **`.nav`** — `top:calc(16px + env(safe-area-inset-top)); right:16px; z-index:40`
- **`.burger`** — `display:grid; place-items:center; width:48px; height:38px; padding:0; border-radius:999px; border:1px solid rgba(255,255,255,.14); background:rgba(0,0,0,.28); backdrop-filter:blur(10px); position:relative; z-index:31; cursor:pointer; animation:pill-in .85s var(--e) .3s both`.
  `.burger__box` — `display:block; position:relative; width:17px; height:9px`; its two spans — `position:absolute; left:0; width:100%; height:1.5px; border-radius:2px; background:#fff; transition:transform .38s var(--e), opacity .2s ease`; first `top:0`, second `bottom:0`.
  `body.menu-open`: span 1 `translateY(3.75px) rotate(45deg)`, span 2 `translateY(-3.75px) rotate(-45deg)`, burger `background:rgba(0,0,0,.5)`.
- **`.nav__links`** — `position:fixed; inset:0; z-index:30; display:flex; flex-direction:column; align-items:flex-start; justify-content:center; gap:14px; padding:0 28px calc(40px + env(safe-area-inset-bottom)); background:rgba(10,11,11,.72); backdrop-filter:blur(22px) saturate(.9); opacity:0; visibility:hidden; transition:opacity .4s ease, visibility .4s`. `body.menu-open` → `opacity:1; visibility:visible`.
- **Overlay links** — `height:auto; padding:0; border:0; background:none; backdrop-filter:none; font-size:clamp(30px, 8.6vw, 46px); font-weight:500; letter-spacing:-.035em; animation:none; opacity:0; transform:translateY(18px); transition:opacity .5s var(--e), transform .5s var(--e)`. `body.menu-open` → `opacity:1; transform:none` with `transition-delay` `.10 / .16 / .22 / .28 / .36s`.
  `.pill--phone` keeps its shape: `margin-top:12px; padding:0 20px; height:44px; border-radius:999px; background:#f3f0ea; color:#16140f; font-size:15px; letter-spacing:-.01em`.
- **`.pins`** → snap strip: `position:absolute; inset:auto 0 auto 0; bottom:calc(222px + env(safe-area-inset-bottom)); display:flex; gap:12px; padding:6px 20px; overflow-x:auto; overflow-y:hidden; pointer-events:auto; scroll-snap-type:x mandatory; scroll-padding-inline:20px; -webkit-overflow-scrolling:touch; scrollbar-width:none`, plus `.pins::-webkit-scrollbar{display:none}`.
  `.pin{ position:static; flex:0 0 clamp(212px, 66vw, 268px); width:auto; scroll-snap-align:start }`. `.pin__dot,.pin__line{ display:none }`.
  `.card{ height:auto !important; gap:11px; padding:11px; border-radius:17px }`; `.card__thumb{ width:66px !important; border-radius:9px }`; `h3{ font-size:15px }`; `p{ font-size:10.5px; margin-top:8px }`.
- **`.intro`** — `position:absolute; left:20px; right:20px; top:auto; bottom:calc(28px + env(safe-area-inset-bottom)); width:auto`. Head `clamp(19px, 5.4vw, 26px)`; `.intro__body{ margin-top:14px }`; `p{ font-size:11.5px; text-indent:20px; max-width:340px }`; `.intro__year{ right:auto; left:min(210px, 62%) }`.
- **`.scroll`** — `display:none`

```css
@media (max-width:1000px) and (max-height:640px){
  .hero{ min-height:560px; }
  .pins{ bottom:calc(186px + env(safe-area-inset-bottom)); }
  .hero__title{ margin-top:calc(64px + env(safe-area-inset-top)); }
}
@media (max-width: 380px){
  .intro__body p{ font-size:11px; }
  .card__text p{ font-size:10px; }
}
```

## 9. Accessibility

- `.u-sr` visually-hidden utility (`position:absolute; width:1px; height:1px; overflow:hidden; clip:rect(0 0 0 0); clip-path:inset(50%); white-space:nowrap`)
- `:focus-visible{ outline:2px solid #fff; outline-offset:3px; border-radius:4px; }`
- `@media (prefers-reduced-motion: reduce)`: all animation/transition durations `.01ms !important`, delays `0ms !important`, and `.line{ clip-path:none; }`

## 10. app.js

Vanilla IIFE, `'use strict'`.

- `const mq = matchMedia('(max-width: 1000px)')`
- `setMenu(open)` — toggle `menu-open` on `<body>`; set burger `aria-expanded`; `menu.toggleAttribute('inert', mq.matches && !open)`
- Burger click toggles; a click on any `<a>` inside the menu closes it; `Escape` closes and refocuses the burger
- On `mq` change, force-close so the overlay is never stranded across the breakpoint; run that close once on load
- `.scroll__btn` click → `window.scrollBy({ top: innerHeight * 0.9, behavior:'smooth' })`

## 11. Verify at exactly 1200×675

- Nav pills span y 32→58; phone pill right edge ≈ x1176
- H1 cap line at y≈73, ink left ≈ x24, baseline pitch 95px; computed `123.2px` / `-6.776px`
- Ridge card (887, 239)–(1094, 347); thumb (898, 250)–(967, 336); dot centre ≈ (898, 374.5)
- Baths card (463, 513)–(674, 627); thumb (589, 524)–(663, 616); dot centre ≈ (659, 487.5)
- Scroll button (1106, 588)–(1174, 656); disc 49px
- Intro head top ≈ y434; year right edge ≈ x191
- `document.getAnimations().length === 26` on load
- Roof and chimney occlude the headline; plates never separate during the zoom

At 390×844: burger top-right, headline overlapping the roofline, two-card snap strip above the intro, overlay menu covering everything with staggered links.