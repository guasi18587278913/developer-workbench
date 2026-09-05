Build a full-screen dental clinic hero section using React + Tailwind CSS + Lucide React icons. Use the Inter font (weights 300, 400, 500, 600, 700) from Google Fonts. The entire page uses a single `HeroSection` component.

---

**BACKGROUND & VIDEO:**

- The section is `h-screen w-full overflow-hidden` with a fallback background color of `#5F9AD1` (a calm mid-blue).
- Behind all content, place an autoplaying, muted, looping, playsInline `<video>` element absolutely positioned to cover the section.
- Video source URL: `https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260710_141802_1d85412a-1df8-4993-8fc4-7400520bb1d1.mp4`
- On desktop (md+): the video is `inset-0 h-full object-center`.
- On mobile: the video sits at the bottom 70% of the screen (`top-[30%] h-[70%]`), with `object-[80%_center]`.
- The video fades in with a custom `fadeIn` animation: `animate-[fadeIn_1.2s_ease-out_0.2s_both]`.
- On mobile only, add a gradient overlay div at `top-[30%]` that fades from `#5F9AD1` to transparent (height 128px, z-index 1) to blend the solid blue top into the video below.

---

**NAVIGATION (header):**

- Positioned at the top with horizontal padding `px-6 md:px-8 lg:px-16` and top padding `pt-6 md:pt-8 lg:pt-12`.
- Animates in with: `animate-[slideDown_0.7s_ease-out_0.1s_both]`.
- **Logo (left):** A custom SVG tooth/pin icon (white fill with a `#5F9AD1` inner shape), 28x32 on mobile, 32x36 on md+. Next to it, the text "SmileLab" in white, `text-xl md:text-2xl lg:text-[28px] font-medium tracking-tight`.
- **Desktop nav links (center, hidden on mobile):** "About" (white, font-medium), "Results", "Pricing", "Reviews", "Blog" (all `text-white/60`, hovering to white). Font size `text-lg`, gap `gap-8 lg:gap-12`.
- **Desktop CTA button (right, hidden on mobile):** A white pill button (`rounded-full px-5 py-3`) containing "Contacts" in black `text-lg`, plus a `#EBFA73` (lime-yellow) circle (w-7 h-7) with an `ArrowUpRight` icon in `#5F9AD1`. The circle scales on hover (`group-hover:scale-110`).
- **Mobile hamburger (hidden on md+):** A toggle button using Lucide `Menu` and `X` icons with animated crossfade (opacity + rotation + scale transitions, 300ms).

---

**MOBILE MENU OVERLAY:**

- Fixed fullscreen, z-50, with a `#5F9AD1/95` backdrop + `backdrop-blur-md`.
- Menu items ("About", "Results", "Pricing", "Reviews", "Blog") are `text-3xl font-light` white, staggered entrance (each item delayed by 60ms + 100ms base).
- A "Contacts" pill button at the bottom (same style as desktop CTA), delayed 400ms.
- Easing: `cubic-bezier(0.16, 1, 0.3, 1)`. Duration: 500ms for all transitions.
- Close button (X icon) positioned `top-6 right-6`.

---

**MAIN HEADING:**

- Container: `px-6 md:px-8 lg:px-16 max-w-3xl mt-8 md:mt-6 lg:mt-10`, centered on mobile, left-aligned on md+.
- Animates with: `animate-[blurIn_0.9s_ease-out_0.3s_both]` (starts blurred and transparent, becomes sharp and opaque).
- The `<h1>` is white, `text-[72px] sm:text-6xl lg:text-[90px] xl:text-[100px]`, `font-normal`, `leading-[0.9] md:leading-[0.85]`, `tracking-tight`.
- Text reads:
  ```
  Restore
  Your True
  Smile [avatars]
  ```
- The word "Smile" and the avatar group are in an `inline-flex items-end gap-4 lg:gap-6` span.
- **Avatar group (hidden on mobile):** Three overlapping circles (`-space-x-2`, `mb-[0.1em]`):
  1. Pexels photo 1239291 (woman), `w-10 h-10 lg:w-14 lg:h-14`, rounded-full, `border-2 border-[#5F9AD1]`, object-cover.
  2. Pexels photo 774909 (woman), same sizing.
  3. A white circle with `+2k` text in `#3D8CD5`, `text-xs lg:text-base font-medium`.

---

**SUBTEXT (hidden on mobile):**

- Below the heading with `mt-5 lg:mt-6`, `max-w-md text-lg leading-tight`.
- Mixed opacity text: "Using " (white/60) + "advanced technology" (white) + ", we deliver comprehensive treatments for a healthy, " (white/60) + "confident smile." (white).

---

**BOTTOM-LEFT STAT + FIGURE (hidden on mobile):**

- Positioned `absolute bottom-0 left-4 lg:left-12`.
- Animates: `animate-[slideUp_0.9s_ease-out_0.8s_both]`.
- **Stat overlay:** Positioned `absolute top-8 lg:top-12 left-3 lg:left-4 z-20` above the image. Shows "98%" in `text-[#3D8CD5] text-2xl lg:text-4xl font-bold` and "loyal dental patients" in `text-xs lg:text-sm font-medium text-center`, same blue color.
- **Person image:** URL `https://soft-zoom-63098134.figma.site/_assets/v11/ecccf0c10f5c64505f8cb104b04c72aba0b85b0c.png?w=512`. Sized `w-52 sm:w-64 lg:w-80`, `object-contain`, z-10. This is a transparent-background PNG of a smiling woman.

---

**CUSTOM KEYFRAME ANIMATIONS (in global CSS):**

```css
@keyframes fadeIn { from { opacity: 0 } to { opacity: 1 } }
@keyframes blurIn { from { opacity: 0; filter: blur(12px) } to { opacity: 1; filter: blur(0px) } }
@keyframes slideDown { from { opacity: 0; transform: translateY(-20px) } to { opacity: 1; transform: none } }
@keyframes slideUp { from { opacity: 0; transform: translateY(30px) } to { opacity: 1; transform: none } }
@keyframes float { 0%,100% { transform: translateY(0px) } 50% { transform: translateY(-8px) } }
```

---

**KEY COLORS:**
- Primary blue: `#5F9AD1`
- Accent lime: `#EBFA73`
- Stat text blue: `#3D8CD5`
- White at 60% opacity for secondary text

**FONT:** Inter (Google Fonts), applied to body with antialiased rendering.

**TECH:** React, Tailwind CSS, Lucide React (`ArrowUpRight`, `Menu`, `X`), Vite, TypeScript.