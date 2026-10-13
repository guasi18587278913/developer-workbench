You are reconstructing ONE self-contained HTML page (single file: index.html). Output ONLY that file. No frameworks, no libraries, no build step. Inline ALL CSS in <style> and ALL JS in <script>. Match this specification pixel-for-pixel. Do not invent extra sections, copy, or UI. Do not simplify geometry, tokens, or animation.

================================================================================
GOAL
================================================================================
A full-viewport “Constellation” landing page: a ruled specimen sheet — hairline black frame, two 45° hatch divider bands, a hero (headline + subcopy + two CTAs over a looping mountain VIDEO that is the full hero background), a 4-column footer, a copyright bar. Warm off-white paper. Black ink. Figtree only.

Design frame: 1440 × 1161. Root type scale so 1rem === 16px at that frame:
  html { font-size: clamp(9px, min(1.1111vw, 1.42vh), 22px); }
The composition always fits between top and bottom edges; the panorama/video absorbs leftover aspect. No letterboxing. On desktop the whole sheet is one screen.

================================================================================
DOCUMENT HEAD
================================================================================
<!DOCTYPE html>, lang="en"
charset UTF-8
viewport: width=device-width, initial-scale=1, viewport-fit=cover
meta description: Constellation — your AI-powered code space that catches the obvious, the subtle, and the “how did that even happen?”
theme-color: #F0EEE9
title: Constellation — For Developers Who Swear It Wasn’t Their Fault

FONT — Figtree variable, weights 300–900, normal, font-display: swap.
Prefer Google Fonts:
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Figtree:wght@300..900&display=swap" rel="stylesheet">
Fallback stack: "Figtree", ui-sans-serif, system-ui, -apple-system, "Segoe UI", sans-serif
Tells: tail-less lowercase l; W apex geometry. Do NOT substitute Inter, Geist, or system-only.

================================================================================
CSS RESET
================================================================================
box-sizing: border-box on *, *::before, *::after
ul { list-style:none }
img, svg { display:block }
a { color:inherit; text-decoration:none }
body: background --bg, color --ink, font-family --font-sans, font-weight 400, -webkit-font-smoothing antialiased, -moz-osx-font-smoothing grayscale, text-rendering optimizeLegibility

================================================================================
DESIGN TOKENS (:root)
================================================================================
Palette (exact):
  --bg:          #F0EEE9
  --ink:         #000000          /* all text/rules — pure black, not near-black */
  --ink-muted:   #6E6D6A          /* headline line 2, footer brand copy */
  --cell-head:   #E7E5E0          /* footer column-header fill */
  --btn-bg:      #222220
  --btn-fg:      #F0EEE9
  --rule-soft:   rgba(0, 0, 0, .28)

Type:
  --fw-regular:  400              /* headline, hero desc, brand copy, CTA labels */
  --fw-medium:   500              /* wordmark, footer headings, links, bottom bar */
  --fs-display:  3rem             /* 48px hero headline */
  --fs-brand:    1.375rem         /* 22px wordmark */
  --fs-head:     1.25rem          /* 20px column headers */
  --fs-ui:       1rem             /* 16px footer links + bottom bar */
  --fs-copy:     .875rem          /* 14px description + CTA labels */
  --lh-display:  1.13
  --lh-copy:     1.145
  --track-text:  -0.030em         /* headline + body */
  --track-ui:    -0.0275em        /* wordmark, headings, links, buttons, bottom */
  --measure:     24.857em         /* 348px at 14px — keep in em so 9/8 word split survives scale */
  --display-run: 11.37            /* “For Developers Who Swear” width / font-size */
  --sub-ratio:   .88

Art geometry defaults (PNG still-image maths; the VIDEO restates two values inline on the figure):
  --art-aspect:   2               /* 1774 / 887 */
  --art-headroom: .3912           /* 347 / 887 */
  --art-ratio:    calc(var(--art-aspect) / (1 - var(--art-headroom)))  /* ~3.285 ridge band */
  --art-zoom:     1
  --art-overhang: 1.625rem
  --hero-inset:   1.5rem

Geometry:
  --hair:        1px
  --mark:        .375rem          /* 6px corner ticks on ghost CTA */
  --inset:       2rem             /* 32px page padding */
  --pad-x:       2rem
  --stripe-h:    1.40625rem       /* 22.5px hatch band including borders */
  --row-h:       3.625rem         /* 58px footer link row */
  --head-h:      4.5rem           /* 72px column header */
  --bar-h:       2.8125rem        /* 45px copyright bar */

Hatch (both divider bands identical):
  --hatch-angle:  45deg
  --hatch-repeat: 7px             /* horizontal distance between rules */
  --hatch-duty:   .175            /* ink coverage of band */
  --hatch-pitch:  calc(var(--hatch-repeat) * cos(var(--hatch-angle)))
  --hatch-rule:   calc(var(--hatch-pitch) * var(--hatch-duty))
  --stripe: repeating-linear-gradient(
              calc(90deg + var(--hatch-angle)),
              var(--ink) 0 var(--hatch-rule),
              transparent var(--hatch-rule) var(--hatch-pitch));

================================================================================
STRUCTURE (DOM — exact class names)
================================================================================
body
  .page                          /* padding: var(--inset); min-height: 100svh; display:flex */
    .frame                       /* flex column; ONLY border-top + border-bottom 1px solid ink; overflow:hidden */
      main.hero
        .hero-copy
          h1.headline
            span.hl-line > span     “For Developers Who Swear”
            span.hl-line.muted > span  “It Wasn’t Their Fault”
          p.hero-sub
          .cta-row
            a.btn.btn-primary href="#"  “Get Started”
            a.btn.btn-ghost href="#"    “Book a Call”
        figure.hero-art  [inline style --art-aspect:1.77778; --art-headroom:.45892; background:var(--bg)]
          video  (see VIDEO)
      .stripe  aria-hidden="true"
      footer.footer
        .brand
          .brand-lockup
            svg.brand-mark
            span.brand-name  “Constellation”
          p.brand-copy  (same sentence as hero-sub)
          .socials  (Instagram, Threads, X, Dribbble — href="#")
        nav.col aria-label="Products"
          h2.col-head > span  Products
          ul: Features, Pricing, FAQs, Changelog
        nav.col aria-label="Company"
          h2.col-head > span  Company
          ul: About, Blog, Contact, Careers
        nav.col aria-label="Legal"
          h2.col-head > span  Legal
          ul: Privacy Policy, Terms & Conditions, Cookie Policy, 404
      .stripe  aria-hidden="true"
      .bottom-bar
        span  © 2026 Constellation. All rights reserved
        span  Designed By Brennan Jay

CRITICAL FRAME RULE: .frame owns ONLY top and bottom rules. .hero, .footer, .bottom-bar each own their own left+right 1px borders. Hatch .stripe has NO left/right border — bands run edge-to-edge and interrupt the vertical frame. Outer width unchanged.

================================================================================
VIDEO (must use these exact URLs — do not replace, invent, or use a PNG mountain)
================================================================================
<figure class="hero-art" style="--art-aspect: 1.77778; --art-headroom: .45892; background: var(--bg)">
  <video
    src="https://d2ol7oe51mr4n9.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/59667f02-3a0c-4b7b-be8a-072215ffbaa9.mp4"
    poster="https://d2ol7oe51mr4n9.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/6d67c4db-fc8f-4e20-b5d1-0d9f82ce7a69.png"
    width="1920" height="1080"
    autoplay muted loop playsinline
    aria-label="Halftone illustration of a layered mountain valley, with mist drifting across the peaks">
  </video>
</figure>

This is a Kling v3.0 animation of the halftone mountain. Source composited onto --bg (#F0EEE9) and padded at the TOP to 16:9 so the ridge band’s pixels, scale, and bottom alignment stay intact. Artwork is 1774×998 (not 1774×887); first opaque row is 458 (347+111). Sky is painted page colour so the frame reads continuous with the page. Do not use an <img> as the plate.

COPY (exact punctuation, curly quotes, apostrophe):
  Headline L1 (black): For Developers Who Swear
  Headline L2 (muted #6E6D6A, display:block): It Wasn’t Their Fault
  Sub + brand-copy: Your AI-powered code space that catches the obvious, the subtle, and the “how did that even happen?”
  Legal link: Terms & Conditions (HTML: Terms &amp; Conditions)

================================================================================
HERO LAYOUT (desktop, default)
================================================================================
.hero: flex 1 1 auto; display:grid; 1 column 1 row; min-height:0
.hero-copy AND .hero-art both grid-area 1/1 (overlap)
.hero-copy: align-self start; padding 3.9375rem var(--hero-inset) 0; text-align center; z-index 2
.headline: fs-display, lh-display, fw-regular, track-text, color ink, text-wrap:balance
.headline .muted { display:block; color: var(--ink-muted) }
.hero-sub: margin .4375rem auto 0;
  max-width: min(var(--measure), calc(var(--fs-display) * var(--display-run) * var(--sub-ratio)));
  fs-copy, lh-copy, track-text
.cta-row: margin-top 1rem; flex; justify-content center; gap .625rem

BUTTONS:
.btn: inline-flex center; height 2.0625rem (33px); padding 0 1.875rem; fs-copy; fw-regular; track-ui; white-space nowrap; cursor pointer
  transition: background-color .18s ease, color .18s ease, border-color .18s ease
.btn-primary: bg --btn-bg; color --btn-fg; hover background #000
.btn-ghost: position relative; color ink; border 1px solid --rule-soft
  ::before and ::after: content ""; position absolute; inset -1px; pointer-events none
  four L-bracket corner marks via 4 linear-gradients of --ink, size --mark × --hair (and swapped), at 0 0 and 100% 0
  ::after { transform: scaleY(-1) }  so bottom corners exist
  hover: border-color ink; background rgba(0,0,0,.04)

================================================================================
ARTWORK / VIDEO CSS  (do not merge img and video rules)
================================================================================
.hero-art:
  grid-area: 1 / 1;
  align-self: stretch;          /* fills the hero — it IS the section background */
  z-index: 1;
  position: relative;
  overflow: hidden;
  width: 100%;
  height: 100%;
  min-height: 8rem;
  container-type: size;
NO max-height. Surplus hero height is filled by the video’s own sky (painted #F0EEE9), not empty page.

.hero-art img  (ridge maths — only if a still image were used; do NOT apply to video):
  --art-img-h: calc(100cqw * var(--art-zoom) / var(--art-aspect));
  position: absolute;
  left: 0;
  width: calc(100% * var(--art-zoom));
  height: auto;
  top: max(
         calc(100cqh + var(--art-overhang) - var(--art-img-h)),
         calc(-1 * var(--art-headroom) * var(--art-img-h))
       );

.hero-art video is a full-bleed background for the WHOLE section. It covers the box; it is NOT placed by the ridge maths. Pinning the bottom keeps the ridge welded to the divider. Crop is always taken off the top (flat #F0EEE9 sky). Peaks can never be cut:
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: 50% 100%;
  display: block;

================================================================================
STRIPES
================================================================================
.stripe: height var(--stripe-h); background-image var(--stripe); border-top and border-bottom 1px solid ink; flex 0 0 auto
Two identical stripes: one under hero, one under footer.

================================================================================
FOOTER
================================================================================
.footer: display grid; grid-template-columns: 1.334fr 1fr 1fr 1fr  /* 587:441:442:440 */; flex 0 0 auto

.brand: padding 2.75rem var(--pad-x) 2rem; border-right 1px solid ink; flex column
.brand-lockup: flex; align-items center; gap .5rem
.brand-mark: 1.625rem × 1.625rem (26px)
.brand-name: fs-brand, fw-medium, track-ui
.brand-copy: margin-top .4375rem; max-width --measure; fs-copy; lh-copy; track-text; color --ink-muted
.socials: margin-top auto; padding-top 2.5rem; flex; gap 1.25rem
.socials a: 1.125rem × 1.125rem; hover opacity .55; transition opacity .18s ease
.socials svg { width:100%; height:100% }

LOGO SVG (viewBox 0 0 24 24, aria-hidden, currentColor strokes, NO fill on ring/ellipses):
  <circle cx="12" cy="12" r="11.05" fill="none" stroke="currentColor" stroke-width="1.9"/>
  <ellipse cx="12" cy="12" rx="11" ry="6.4" fill="none" stroke="currentColor" stroke-width="1.8" transform="rotate(45 12 12)"/>
  <ellipse cx="12" cy="12" rx="11" ry="6.4" fill="none" stroke="currentColor" stroke-width="1.8" transform="rotate(-45 12 12)"/>
Two congruent ellipses in a ring at ±45°, no centre fill.

SOCIAL SVGs (24×24, currentColor) — implement full path geometry, not generic icons:
  Instagram: rounded rect x=2.1 y=2.1 w=19.8 h=19.8 rx=5.6, fill none, stroke 1.9; inner circle r=4.6 stroke 1.9; filled dot r=1.25 at (17.5, 6.5)
  Threads: filled path (Meta Threads “@” mark) — use this exact path:
    M12.186 24h-.007c-3.581-.024-6.334-1.205-8.184-3.509C2.35 18.44 1.5 15.586 1.472 12.01v-.017c.03-3.579.879-6.43 2.525-8.482C5.845 1.205 8.6.024 12.18 0h.014c2.746.02 5.043.725 6.826 2.098 1.677 1.29 2.858 3.13 3.509 5.467l-2.04.569c-1.104-3.96-3.898-5.984-8.304-6.015-2.91.022-5.11.936-6.54 2.717C4.307 6.504 3.616 8.914 3.589 12c.027 3.086.718 5.496 2.057 7.164 1.43 1.783 3.631 2.698 6.54 2.717 2.623-.02 4.358-.631 5.8-2.045 1.647-1.613 1.618-3.593 1.09-4.798-.31-.71-.873-1.3-1.634-1.75-.192 1.352-.622 2.446-1.284 3.272-.886 1.102-2.14 1.704-3.73 1.79-1.202.065-2.361-.218-3.259-.801-1.063-.689-1.685-1.74-1.752-2.964-.065-1.19.408-2.285 1.33-3.082.88-.76 2.119-1.207 3.583-1.291a13.853 13.853 0 0 1 3.02.142c-.126-.742-.375-1.332-.75-1.757-.513-.586-1.308-.883-2.359-.89h-.029c-.844 0-1.992.232-2.721 1.32L7.734 7.847c.98-1.454 2.568-2.256 4.478-2.256h.044c3.194.02 5.097 1.975 5.287 5.388.108.046.216.094.321.142 1.49.7 2.58 1.761 3.154 3.07.797 1.82.871 4.79-1.548 7.158-1.85 1.81-4.094 2.628-7.277 2.65Zm1.003-11.69c-.242 0-.487.007-.739.021-1.836.103-2.98.946-2.916 2.143.067 1.256 1.452 1.839 2.784 1.767 1.224-.065 2.818-.543 3.086-3.71a10.5 10.5 0 0 0-2.215-.221Z
  X: filled path M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932ZM17.61 20.644h2.039L6.486 3.24H4.298Z
  Dribbble: filled basketball path:
    M12 24C5.385 24 0 18.615 0 12S5.385 0 12 0s12 5.385 12 12-5.385 12-12 12Zm10.12-10.358c-.35-.11-3.17-.953-6.384-.438 1.34 3.684 1.887 6.684 1.992 7.308 2.3-1.555 3.936-4.02 4.395-6.87Zm-6.115 7.808c-.153-.9-.75-4.032-2.19-7.77l-.066.02c-5.79 2.015-7.86 6.025-8.04 6.4 1.73 1.358 3.92 2.166 6.29 2.166 1.42 0 2.77-.29 4-.816Zm-11.62-2.58c.232-.4 3.045-5.055 8.332-6.765.135-.045.27-.084.405-.12-.26-.585-.54-1.167-.832-1.74C7.17 11.775 2.206 11.71 1.756 11.7l-.004.312c0 2.633.998 5.037 2.634 6.855Zm-2.42-8.955c.46.008 4.683.026 9.477-1.248-1.698-3.018-3.53-5.558-3.8-5.928-2.868 1.35-5.01 3.99-5.676 7.17ZM9.6 2.052c.282.38 2.145 2.914 3.822 6 3.645-1.365 5.19-3.44 5.373-3.702-1.81-1.61-4.19-2.586-6.795-2.586-.825 0-1.63.1-2.4.285Zm10.335 3.483c-.218.29-1.935 2.493-5.724 4.04.24.49.47.985.68 1.486.08.18.15.36.22.53 3.41-.43 6.8.26 7.14.33-.02-2.42-.88-4.64-2.31-6.386Z

COLUMNS:
.col: flex column; :not(:last-child) border-right 1px solid ink
.col-head: height --head-h; flex center; bg --cell-head; border-bottom 1px solid ink; fs-head; fw-medium; track-ui
  Inner <span> is required (animation inks the span, never the h2 — fading h2 would fade fill+rule)
.col li: flex 1 1 auto; display flex; min-height --row-h
.col li:not(:last-child) border-bottom 1px solid ink
.col li a: flex 1; flex center; padding .5rem 1rem; fs-ui; fw-medium; track-ui; text-align center; hover bg rgba(0,0,0,.05); transition background-color .18s ease
Four rows × 58px = 232px (hairline is INSIDE the row height)

================================================================================
BOTTOM BAR
================================================================================
height --bar-h; flex; align center; justify space-between; gap 1rem; padding 0 --pad-x; fs-ui; fw-medium; track-ui
Two <span> children (required for INK animation)

:focus-visible { outline 2px solid ink; outline-offset 2px }

================================================================================
ENTRANCE ANIMATION (first load only — then page is a static print)
================================================================================
HEAD SCRIPT (before </head>, so it runs before first paint):
  document.documentElement.classList.add('is-entering');
  window.__entranceRelease = setTimeout(() => document.documentElement.classList.remove('is-entering'), 3500);
If JS is off, class is never added and the page renders in final state.

CSS while .is-entering:
  .hl-line { display:block }  .hl-line > span { display:block }
  .stripe { clip-path: inset(0 100% 0 0) }
  .hero-art { clip-path: inset(12% 0 0 0); opacity: 0 }
  .hl-line { overflow:hidden; padding-bottom:.18em; margin-bottom:-.18em }
  .hl-line > span { transform: translateY(120%) }
  opacity:0 on: .hero-sub, .cta-row > .btn, .brand-lockup, .brand-copy, .socials, .col-head > span, .col li a, .bottom-bar > span
STRUCTURE NEVER ANIMATES: frame, grid, cell fills, hairlines stay put from frame 1.

BODY SCRIPT — Web Animations API only (no GSAP). If prefers-reduced-motion OR !document.body.animate → finish() immediately.
finish(): clearTimeout(__entranceRelease); remove is-entering; cancel all animations; drop refs. Nothing left running.

Easings:
  wipe:    cubic-bezier(.16, 1, .30, 1)
  rise:    cubic-bezier(.19, 1, .22, 1)
  settle:  cubic-bezier(.22, .61, .36, 1)
  develop: cubic-bezier(.32, .08, .24, 1)

Keyframes:
  RISE:    translateY(120%) → none
  LIFT:    opacity 0 + translateY(6px) → opacity 1 + none     /* open-space type */
  INK:     opacity 0 → 1                                      /* cell-bound type — no travel */
  WIPE_X:  clip-path inset(0 100% 0 0) → inset(0)
  DEVELOP: clip-path inset(12% 0 0 0) + opacity 0 → inset(0) + opacity 1
  Artwork itself never moves, scales, or crops during animation.

play(selector, frames, duration, delay, easing, stagger): querySelectorAll, element.animate(..., { duration, delay: at + i*stagger, easing, fill:'both' })

Timeline (ms):
  .stripe                              WIPE_X   760   0     wipe     stagger 90
  .hl-line > span                      RISE     900   180   rise     stagger 90
  .hero-sub                            LIFT     560   560   settle
  .hero-art                            DEVELOP  1100  620   develop
  .cta-row > .btn                      LIFT     520   700   settle   stagger 70
  .brand-lockup, .brand-copy, .socials LIFT     520   880   settle   stagger 70
  .col-head > span                     INK      460   980   settle   stagger 70
  [aria-label="Products"] li a         INK      460   1060  settle   (all four together)
  [aria-label="Company"] li a          INK      460   1130  settle
  [aria-label="Legal"] li a            INK      460   1200  settle
  .bottom-bar > span                   INK      440   1240  settle   stagger 80
Last frame ~1.72s. On all finished → finish().
Start after document.fonts.ready, with a 400ms timeout fallback so fonts never stall the opening.

@media (prefers-reduced-motion: reduce) { * { transition:none !important; animation:none !important } }

================================================================================
RESPONSIVE — composition re-flows, never letterboxes
================================================================================

1) TABLET HERO  @media (max-width: 1279px)
  .hero { display:flex; flex-direction:column }  /* copy then art as stacked flex — used as the default in this band */
  .hero-copy { flex:0 0 auto; align-self:stretch; padding: var(--copy-lead) var(--hero-inset); margin-block:auto }
  :root { --fs-display: clamp(32px, min(3.3333vw, 4.26vh), 42px) }
  :root { --copy-text: calc(var(--fs-display) * .29167); --copy-lead: calc(var(--fs-display) * 1.3125) }
  .hero-sub { margin-top: calc(var(--fs-display) * .14583); font-size: var(--copy-text) }
  .hero-sub, .brand-copy { text-wrap: balance }
  .cta-row { margin-top: calc(var(--fs-display) * .33333) }
  .btn { height: calc(var(--fs-display) * .6875); padding: 0 calc(var(--fs-display) * .625); font-size: var(--copy-text) }
  .hero-art { flex:1 1 auto; width:100%; height:auto; min-height:0 }

2) RESTORE OVERLAP FOR WIDE TABLET  @media (min-width: 900px) and (max-width: 1279px)
  REQUIRED. A full-bleed video’s upper region is flat --bg, so copy can sit on it again. Stacked layout crowded the CTAs; overlap is restored wherever the hero is wide enough. Keep stacked only below 900px (phone hero is short enough that the ridge would reach the copy).
  .hero { display:grid; grid-template-columns:1fr; grid-template-rows:1fr }
  .hero-copy { grid-area:1/1; align-self:start; margin-block:0; z-index:2 }
  .hero-art { grid-area:1/1; align-self:stretch; height:100%; min-height:0 }

3) TABLET FOOTER  @media (max-width: 899px)
  :root { --inset:1.5rem; --pad-x:1.75rem; --head-h:4rem; --row-h:3.5rem }
  html { font-size: clamp(9px, min(1.75vw, 1.32vh), 15px) }
  .footer { grid-template-columns: repeat(3, 1fr) }
  .brand { grid-column: 1 / -1; border-right:0; border-bottom: 1px solid ink; padding: 2.5rem var(--pad-x) }
  .socials { padding-top: 2rem }
  Links stay THREE columns. Brand is full width above them.

4) MOBILE  @media (max-width: 639px)
  :root {
    --inset:.75rem; --pad-x:1rem; --stripe-h:1.05rem; --head-h:2.5rem; --row-h:2.25rem; --bar-h:auto;
    --fs-display: min(2.15rem, 7vw);   /* keep “For Developers Who Swear” on ONE line */
  }
  html { font-size: clamp(10px, min(4.1vw, 2vh), 18px) }   /* vh term kills scrollbar */
  .page { height: 100svh }   /* exactly one screen, not min-height */
  .hero { flex column }
  .hero-copy { flex:0 0 auto; align-self:stretch; padding: 1.75rem 1.25rem; margin-block:auto }
  .headline { line-height: 1.12 }
  .hero-sub { margin-top:.75rem; font-size: var(--fs-copy) }
  .cta-row { margin-top:1rem; gap:.5rem }
  .btn { height:2.75rem; padding:0 1.25rem; font-size:.8125rem }
  .hero-art { flex:1 1 auto; width:100%; height:auto; min-height:4rem; --art-zoom: 1.5 }
  .hero-art img { left:50%; translate: -50% 0 }   /* img ONLY — do NOT apply to video */
  .brand { padding: 1.25rem var(--pad-x) }
  .brand-name { font-size: 1.25rem }
  .brand-copy { margin-top:.5rem; font-size:.8125rem }
  .socials { padding-top:1rem; gap:1.5rem }
  .socials a { position:relative }
  .socials a::after { content:""; position:absolute; inset: calc((1.125rem - 44px) / 2) }  /* 44px hit area, 18px icon */
  .col-head { height: var(--head-h); font-size:1rem }
  .col li { flex: 1 1 0 }   /* equal rows so hairlines stay level if “Terms & Conditions” wraps */
  .col li a { font-size:.8125rem; padding:.25rem; line-height:1.15 }
  KEEP THREE FOOTER COLUMNS — do not stack into four full-width blocks
  .bottom-bar { flex-direction:column; align-items:flex-start; justify-content:center; gap:.125rem; padding:.625rem var(--pad-x); font-size:.75rem }

================================================================================
HARD CONSTRAINTS
================================================================================
- Single HTML file. Inline CSS + JS. No React/Tailwind/Bootstrap.
- Exact CloudFront video src AND poster URLs above.
- Figtree 400/500. Pure #000 ink. #F0EEE9 paper.
- Hairlines 1px. Hatch 45° / 7px / 17.5% duty.
- Ghost CTA has four corner registration marks, not a full inner frame.
- Entrance: wipe / rise / lift / ink / develop as specified; then remove is-entering and cancel WAAPI.
- Do NOT share .hero-art img placement with .hero-art video.
- Do NOT cap .hero-art with max-height.
- Video CSS only: position absolute; inset 0; width/height 100%; object-fit cover; object-position 50% 100%.
- Include the 900px–1279px overlap-restore media query.
- Mobile: one 100svh sheet, 3-column footer; --art-zoom 1.5 and centered translate apply to img only.
- Curly quotes in the tagline. “Wasn’t” with a real apostrophe.
- Do not add a nav, logo in the hero, extra CTAs, gradients, drop shadows, or a static PNG mountain.