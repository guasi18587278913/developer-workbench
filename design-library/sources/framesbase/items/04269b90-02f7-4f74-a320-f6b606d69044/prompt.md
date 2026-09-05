Build a fully responsive, single-page landing page for an AI-agent platform named “Metricra.” The page should be implemented in React + Vite + Tailwind CSS v4, with the primary UI in `src/App.tsx` and global styles/font wiring in `src/index.css`.

The visual goal is a precise, minimalist product-launch page: warm cream canvas, strong black typography, one orange accent, asymmetric hero composition, and a full-width product video directly below the hero. Do not add extra sections, cards, testimonials, navigation links, footer content, gradients outside the download button, or generic SaaS UI elements.

────────────────────────────────
GLOBAL VISUAL SYSTEM
────────────────────────────────

Page background:
- Use `#F4EBE3` for the entire canvas.
- Apply this background to `:root`, `html`, `body`, `#root`, and the main page wrapper.
- The page must not show white, black, or differently colored areas outside the video content itself.
- Use `min-height: 100%` for the document layers and `min-height: 100svh` for the main page.

Typography:
- Use Figma-hosted custom fonts via `@font-face`.
- Add these exact font definitions in `src/index.css`:

```css
@font-face {
  font-family: 'Kalam:Bold';
  font-style: normal;
  font-weight: 700;
  font-display: swap;
  src: url('https://static.figma.com/font/Kalam-Bold_1') format('woff2');
}

@font-face {
  font-family: 'Geist:SemiBold';
  font-style: normal;
  font-weight: 600;
  font-display: swap;
  src: url('https://static.figma.com/font/Geist_wght__1') format('woff2');
}

@font-face {
  font-family: 'Geist:Medium';
  font-style: normal;
  font-weight: 500;
  font-display: swap;
  src: url('https://static.figma.com/font/Geist_wght__1') format('woff2');
}
Font usage:

Eyebrow label: Kalam:Bold, 700.
Main heading: Geist:SemiBold, 600.
Body copy, Metricra wordmark, and supporting text: Geist:Medium, 500.
Use black #000 for primary text.
Use muted gray #616161 for the hero description.
Use orange #EA580C for the eyebrow label and logo dots.
Page styling:

Keep the page clean and editorial.
Do not use visible borders around sections.
Do not use large rounded panels.
Whitespace must feel intentional and generous.
Hide horizontal overflow.
──────────────────────────────── HEADER ────────────────────────────────

Create a top header with:

A Metricra logo on the left.
A Download button on the right.
On desktop, the header should have:
width: min(1200px, calc(100% - 48px))
height: 64px
top margin: 15px
horizontally centered
flex layout with justify-content: space-between
vertical alignment centered
Metricra logo:

Make the entire logo an anchor linking to #top.
Add aria-label="Metricra home".
The word “Metricra” should use Geist Medium:
font size: 20px
weight: 500
black
no underline
Use a 22px × 22px orange dot-grid mark before the wordmark.
Space between mark and wordmark: approximately 6px.
Logo mark:

Build the logo as CSS-positioned circular dots rather than an image.
Dot color: #EA580C.
Dot dimensions: approximately 4.35px × 4.35px.
Each dot has border-radius: 50%.
The mark is an asymmetric, modular grid of 12 visible dots:
left and right columns in several rows
two inset dots near the top
central dots toward the lower part
It should visually resemble a compact orange dot-pattern / abstract “M” mark.
──────────────────────────────── DOWNLOAD BUTTON ────────────────────────────────

Use the same Download button in:

The top-right header.
The left side of the hero under the heading.
Button contents:

Apple icon on the left.
“Download” text on the right.
Use an inline SVG Apple logo filled with currentColor.
Main button aria-label: Download Metricra.
Desktop styling:

Inline flex.
Center all content.
Gap: 8px.
Padding: 10px 20px 10px 16px.
Pill radius: 48px.
No border.
White icon and text.
Font: Geist SemiBold, 14px, 600 weight.
Cursor pointer.
Button background:

Use this dark metallic/liquid-glass-inspired radial gradient:
radial-gradient(
  ellipse at center,
  #000 0%,
  #060606 12.5%,
  #0d0d0d 25%,
  #1a1a1a 50%,
  #343434 100%
)
The button should feel like subtly reflective, dark liquid glass rather than a flat black pill.
Do not add a hard border.
Add a refined hover:
brighten slightly with filter: brightness(1.16)
lift by translateY(-1px)
transition over approximately 160ms ease.
Add an accessible focus-visible state:
outline: 2px solid #EA580C
outline-offset: 3px.
──────────────────────────────── HERO ────────────────────────────────

Use an asymmetric hero layout with:

Left-aligned title/content.
A supporting paragraph positioned on the right.
Desktop hero container:
position relative
width: min(1200px, calc(100% - 48px))
min-height: 266px
top margin: 34px
centered horizontally
Left content block:

Width: 651px
Top padding: 20px
Eyebrow:

Exact text: AI agents to work for you
Orange #EA580C
Kalam Bold
Font size: 16px
Letter spacing: -0.352px
Line height: 1.3
Bottom margin: 24px
Main heading:

Exact text: Let professional AI agents do the work for you.
Use an h1 with id hero-title.
Geist SemiBold.
Black.
Max width: 483px
Font size: 40px
Weight: 600
Letter spacing: -2px
Line height: 1.1
Bottom margin: 24px
It should wrap into a compact, bold multi-line editorial composition.
Hero description:

Exact text: Choose from a growing team of AI agents, each built to solve a specific problem professionally.
Position absolutely on desktop:
right: 0
top: 184px
width: 394px
Margin: 0.
Geist Medium.
Color #616161.
Font size 16px.
Weight 500.
Letter spacing -0.1068px.
Line height 1.4.
──────────────────────────────── VIDEO ────────────────────────────────

Directly after the hero, render a native HTML <video> element using this exact CloudFront source URL:

https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260801_022931_e13cbef4-690a-42d2-b5ee-5b3b1f483c83.mp4

Use this structure:

<video
  className="media-placeholder"
  aria-label="Metricra product preview"
  autoPlay
  loop
  muted
  playsInline
  preload="metadata"
>
  <source
    src="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260801_022931_e13cbef4-690a-42d2-b5ee-5b3b1f483c83.mp4"
    type="video/mp4"
  />
</video>
Video rules:

The video must span the full viewport width edge-to-edge.
It must have no horizontal page padding.
It must immediately follow the hero with no gap or margin above/below.
It must not be cropped.
It must fit the entire video naturally:
display: block
width: 100%
height: auto
Do not assign a fixed height.
Do not use object-fit: cover.
Do not create a black placeholder rectangle.
If the video has any unused internal area, use the same warm cream #F4EBE3 rather than black.
There must be no artificial empty space underneath the video.
──────────────────────────────── RESPONSIVE RULES ────────────────────────────────

Tablet/mobile breakpoint: max-width: 760px

Header:

Width: calc(100% - 32px)
Height: 52px
Top margin: 10px
Logo text size: 18px
Header download button:
padding: 9px 15px 9px 13px
font size: 13px
Hero:

Width: calc(100% - 32px)
Margin top: 20px
Min height: 408px
Left content width: 100%
Left content top padding: 20px
Eyebrow on mobile:

Font size: 15px
Bottom margin: 18px
Heading on mobile:

Max width: 340px
Font size: clamp(34px, 10vw, 40px)
Letter spacing: -1.7px
Bottom margin: 26px
Hero description on mobile:

No longer absolutely aligned to the right.
Position it on the left:
left: 0
right: auto
top: 285px
Width: min(394px, 100%)
Font size: 15px
Extra-small breakpoint: max-width: 390px

Hide the “Download” text inside only the header button, leaving the Apple icon visible.
Keep the button compact:
padding 10px
Hero min height: 430px
Hero description top position: 300px
Keep the design clean and avoid overflow on screens narrower than 390px.
──────────────────────────────── ACCESSIBILITY AND MOTION ────────────────────────────────

Use semantic <main>, <header>, <section>, <h1>, <button>, and <video> elements.
Use aria-labelledby="hero-title" on the hero section.
The video must be muted because it autoplays.
Ensure focus-visible styling exists for interactive controls.
Keep all micro-animation restrained:
only the button hover lift/brightness transition
no distracting scroll effects
no excessive motion
Preserve the polished liquid-glass feeling only in the dark Download buttons, not elsewhere.
──────────────────────────────── IMPORTANT CONSTRAINTS ────────────────────────────────

Match the warm minimal Metricra composition exactly.
Keep the page sparse: header, hero, full-width video only.
Do not add a navbar menu.
Do not add an app mockup frame around the video.
Do not add a footer.
Do not use cards, blue gradients, serif typography, stock photography, or filler copy.
The video must retain its natural dimensions and have no added blank area underneath.