Build a single full-viewport hero section that looks pixel-identical to this layout. Use React + TypeScript + Tailwind CSS + Vite. One page only. No extra sections, navbar, or routes.

Tech
React 18, Vite, Tailwind CSS 3
lucide-react for the CTA icon (ArrowUpRight)
Tailwind color: primary: #031433
Tailwind font: resist: ["Resist Sans Txt Light", "sans-serif"]
Load this exact font in index.html: https://db.onlinewebfonts.com/c/1ee2f72753afaa550435b7078d2d1213?family=Resist+Sans+Txt+Light
Body font: 'Resist Sans Txt Light', sans-serif with -webkit-font-smoothing: antialiased and -moz-osx-font-smoothing: grayscale
Global reset: * { margin: 0; padding: 0; box-sizing: border-box; }
Page title: Hero Section Design
Section shell
Outer: relative min-h-screen w-full overflow-hidden bg-[#f0f1f6] font-resist
Background video (full bleed, behind content):
src exactly: https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260819_204159_7ff9da7a-093f-40db-b983-daea542669ab.mp4
Attributes: autoPlay muted loop playsInline
Classes: absolute inset-0 w-full h-full object-cover pointer-events-none
Content wrapper on top: relative z-10 flex flex-col min-h-screen px-6 sm:px-10 md:px-16 lg:px-20
Layout is a column: header at top, headline + CTA pushed to the bottom of the remaining space, footer under that. No overlay/gradient on the video.
Header / logo (top-left)
Header: pt-5 sm:pt-6
Three stacked lines, text-primary, leading-tight, text-sm sm:text-base, font-normal
Animation: animate-fade-up delay-100
Line 1: Talent
Line 2: Bridge
Line 3: Partners™ (use &trade;)
Each line is a block span
Main (bottom of viewport)
flex-1 flex flex-col justify-end mb-10 sm:mb-14 md:mb-16
Headline

Text: Ignite Your then a line break then Ambition
Classes: text-primary text-[clamp(2.5rem,8vw,5.5rem)] leading-[1.05] tracking-[-0.02em] font-light max-w-[600px] animate-fade-up delay-400
After “Ambition”, an inline dot: inline-block w-3 h-3 sm:w-4 sm:h-4 bg-primary/60 rounded-full ml-1 mb-1 sm:mb-2
CTA

Wrapper: mt-8 sm:mt-10 animate-fade-up delay-600
Link href="#contact"
Classes: inline-flex items-center gap-3 bg-primary text-white px-6 sm:px-8 py-3.5 sm:py-4 rounded-md text-sm sm:text-base tracking-wide hover:bg-primary/90 transition-colors duration-200
Label: Reach Out Now
Icon: Lucide ArrowUpRight with className="w-4 h-4" (no extra stroke overrides)
Footer
pb-6 sm:pb-8
Two-column row (flex flex-col sm:flex-row justify-between gap-8 sm:gap-4 mb-6 sm:mb-8)

Left “Pages” (animate-fade-up delay-800):

Label: Pages — text-primary/60 text-xs sm:text-sm mb-2 sm:mb-3
Nav: flex flex-col gap-0.5
Link Thinking → #insights
Link Connect → #contact
Links: text-primary text-lg sm:text-xl md:text-2xl hover:opacity-70 transition-opacity
Right “Write” (sm:text-right animate-fade-up delay-1000):

Label: Write — same label styles as Pages
Email: hello@talentbridg.com (exact spelling, no “e” at the end of bridge) as mailto:hello@talentbridg.com
Same link styles as nav links
Copyright (animate-fade-up delay-1200):

text-primary/50 text-[10px] sm:text-xs
Text: © 2025 TalentBridgePartners. All rights reserved. (no space before “Partners”)
Animations (custom CSS, not Tailwind defaults)
@keyframes fadeUp {
  from { opacity: 0; transform: translateY(24px); }
  to   { opacity: 1; transform: translateY(0); }
}
.animate-fade-up {
  opacity: 0;
  animation: fadeUp 0.9s cubic-bezier(0.16, 1, 0.3, 1) forwards;
}
.delay-100  { animation-delay: 0.1s; }
.delay-400  { animation-delay: 0.4s; }
.delay-600  { animation-delay: 0.6s; }
.delay-800  { animation-delay: 0.8s; }
.delay-1000 { animation-delay: 1.0s; }
.delay-1200 { animation-delay: 1.2s; }
Stagger order: logo 0.1s → headline 0.4s → CTA 0.6s → Pages 0.8s → email 1.0s → copyright 1.2s.

Responsive rules (must match)
Breakpoint
Padding X
Header top
Main bottom
Footer bottom
Logo
CTA pad
Footer labels
Nav/email
default
24px (px-6)
20px
40px
24px
14px
px-6 py-3.5
12px
18px
sm
40px
24px
56px
32px
16px
px-8 py-4
14px
20px
md
64px
—
64px
—
—
—
—
24px
lg
80px
—
—
—
—
—
—
—





Mobile: footer stacks (Pages then Write), Write left-aligned
sm+: footer row, Write right-aligned, tighter gap (gap-4)
Headline scales with clamp(2.5rem, 8vw, 5.5rem)
Video always cover-fills the viewport; content stays readable over it
Do not crop, letterbox, or add a dark overlay
Do not
Change the CloudFront URL, email spelling, copyright year/string, or brand name
Add extra buttons, social icons, hamburger, or a second section
Use Inter, Geist, or any substitute font
Use a different navy than #031433 or a different page bg than #f0f1f6
Implement the exact JSX/CSS/Tailwind classes above. Output a working page, not a mock description.