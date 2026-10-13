Build a single-page GenoTrace landing site as a Vite vanilla JS app (index.html, style.css, main.js). Recreate the page exactly. Do not add extra sections, copy, pages, or libraries beyond what is specified.
Stack
Vite vanilla (HTML/CSS/JS modules).
Load MP4Box from CDN: https://cdn.jsdelivr.net/npm/mp4box@0.5.2/dist/mp4box.all.min.js (classic script, not a module — it must expose global MP4Box and DataStream).
main.js is type="module".
Title: GenoTrace. Favicon: /vite.svg.
OG/Twitter images: https://bolt.new/static/og_default.png, twitter card summary_large_image.
Font
Load exactly: https://db.onlinewebfonts.com/c/95cecf452d3208890088a5b4c19c7ecf?family=Helvetica+Neue+ME
Body and buttons: font-family: 'Helvetica Neue ME', 'Helvetica Neue', Helvetica, Arial, sans-serif;
CloudFront video (required, exact URL)
https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260821_183659_804e0948-c701-4565-b56b-a99c78f9bfba.mp4
Video attributes: muted, playsinline, preload="auto". Never autoplay as a looping background video. It is scroll-scrubbed (paused; time driven by scroll).
HTML structure (exact)
Navbar (fixed)
Inner max-width 1400px, height 72px, flex space-between, horizontal padding 48px.
Logo left: text “GenoTrace” linking #.
Center links (desktop): Testing, Traits, Science, Story — all #.
Right CTA: “Begin Here” with classes btn btn--primary.
Hamburger (3 spans .hamburger-line), aria-label="Toggle menu", aria-expanded="false". Hidden on desktop.
Full-screen .mobile-menu with the same 4 links plus “Begin Here” CTA.
Scroll video block .scroll-video (height 500vh)
<video id="scrollVideo"> with the CloudFront URL above.
<canvas id="scrollCanvas" class="scroll-canvas" aria-hidden="true"> stacked over the video.
Fixed .content-overlay (pointer-events: none) with 3 .section-content panels. Only .active is visible and receives pointer events.
Section 0 (.section-content--1, starts .active, data-section="0"): bottom-left.
H1: Learn what your genes reveal about you and your roots.
P: Explore your heritage and connect with kin through one easy DNA kit.
Button btn btn--primary: Begin Here
Section 1 (.section-content--2, data-section="1"): top-right on desktop (align-items: flex-start; justify-content: flex-end).
H1: Reveal the journeys encoded in your blood.
P: Map your lineage across centuries and civilizations.
Button btn btn--primary: Discover Now
Section 2 (.section-content--3, data-section="2"): bottom-right on desktop (align-items: flex-end; justify-content: flex-end).
H1: Where data meets origin.
P: Cutting-edge genetic insights built on years of discovery.
Button btn btn--outline: Read More (underline text button, not a filled outline box)
Visual design (exact CSS)
Reset: universal margin/padding 0, box-sizing: border-box. html { scroll-behavior: smooth; }. Body: black #000, white #fff, overflow-x: hidden.
Navbar
position: fixed; top: 0; left: 0; width: 100%; z-index: 100; padding: 0 48px;
Logo: 1.25rem, weight 500, white, no underline, letter-spacing: -0.01em
Links: flex, gap: 40px, 0.9375rem, weight 300, opacity 0.9, hover opacity 1
Navbar CTA: font-size: 0.8125rem; padding: 4px 10px;
Entrance: @keyframes fadeInDown from opacity 0, translateY(-12px) to identity, easing cubic-bezier(0.23, 1, 0.32, 1) 
logo: 0.6s delay 0.2s both
each nav li: 0.5s, delays 0.3 / 0.4 / 0.5 / 0.6s (start opacity: 0)
CTA: 0.5s delay 0.7s both
Hamburger (32×24)
Three 2px white rounded bars at top 2 / 11 / 20. Active: bars 1 and 3 rotate ±45° to top 11; middle fades and scaleX(0). Transitions 0.4s cubic-bezier(0.23, 1, 0.32, 1).
Mobile menu
Full viewport, background: rgba(0,0,0,0.97), backdrop-filter: blur(20px), centered column, gap: 48px. Closed: opacity 0; visibility hidden; translateY(-8px). Open: visible, translateY(0), 0.5s same cubic-bezier. Links 1.75rem weight 300, column gap: 32px. Stagger open: items translateY 20px → 0, delays 0.1 / 0.15 / 0.2 / 0.25s; CTA delay 0.3s.
Video / canvas
.scroll-video: position: relative; width: 100%; height: 500vh;
video: position: sticky; top: 0; width: 100%; height: 100vh; object-fit: cover; z-index: 1;
.scroll-canvas: sticky, same 100vw/100vh cover, z-index: 2, opacity: 0, transition: opacity 200ms linear, margin-top: -100vh (sits on top of the sticky video). Class .is-live sets opacity: 1.
Overlay: position: fixed; inset 0; height: 100vh; z-index: 3;
Overlay copy
.section-content: absolute fill flex, default opacity: 0, transition: opacity 0.4s ease. .active: opacity 1.
.content: max-width: 480px; padding: 64px;
h1: clamp(2rem, 3vw, 2.25rem), weight 400, line-height 1.2, margin-bottom 16px, letter-spacing: -0.02em
p: clamp(0.875rem, 1.2vw, 1.125rem), weight 300, line-height 1.5, margin-bottom 32px, opacity 0.85
Stagger inside active section: h1/p/btn start opacity 0; translateY(20px); on .active they ease to place with 0.6s cubic-bezier(0.23, 1, 0.32, 1), delays 0.1s / 0.25s / 0.4s. Active paragraph opacity is 0.85.
Buttons
Shared .btn: 0.8125rem, weight 400, padding: 5px 12px, border-radius: 0, letter-spacing: 0.02em, 0.3s all.
.btn--primary: white fill, black text, 1px solid #fff. Hover: transparent bg, white text.
.btn--outline: transparent, white, no border, padding: 8px 0, underline, text-underline-offset: 4px. Hover opacity 0.7.
Mobile @media (max-width: 768px)
Navbar padding 0 24px, inner height 64px.
Hide .navbar__links and .navbar__cta; show hamburger.
.content: max-width 100%, padding 32px 24px; h1 1.75rem.
Section 2: justify-content: flex-start; align-items: flex-start; padding-top: 72px; (top-left under navbar).
Section 3: justify-content: flex-start; align-items: flex-end; (bottom-left).
JS: hamburger
Toggle .open on .mobile-menu and .active on hamburger; set aria-expanded; lock document.body.style.overflow to hidden while open. Any mobile-menu link click closes menu and restores overflow.
JS: scroll-scrubbed video (same logic — required)
This is NOT Apple-style canvas frame sequences from numbered JPGs. It is a live MP4 whose playback time is bound to scroll, with a WebCodecs frame bank for smoothness.
Geometry
start = container.offsetTop
end = start + container.offsetHeight - window.innerHeight
span = end - start
progress p = clamp((scrollY - start) / span, 0, 1)
Re-measure on resize/orientationchange (debounced 100ms).
Time mapping
MAX_TIME = 7.5 — cap scrub range at 7.5 seconds even if the file is longer.
On loadedmetadata (and if readyState >= 1 at start): duration = min(video.duration, MAX_TIME), size canvas to video.videoWidth/Height (fallback 1280×720), video.pause().
Target time: target = p * min(duration, MAX_TIME).
Smooth lerp (rAF loop)
Constants: LERP_TAU = 8, SNAP = 0.002. Each frame:
dt = min(0.1, (now - lastTime) / 1000)
if prefers-reduced-motion: current = target
else:
  current += (target - current) * (1 - Math.exp(-dt * LERP_TAU))
  if abs(target - current) < SNAP: current = target
Then render(current) and updateSections(p). Always requestAnimationFrame(update).
Render
If frame bank is ready: draw nearest bank frame onto canvas (see below).
Else fallback: if not video.seeking and abs(video.currentTime - t) > 0.01, set video.currentTime = t (try/catch). The sticky <video> is visible until the canvas fades in.
Section switching
sectionIndex = min(2, floor(p * 3))
Toggle .active on the matching .section-content. If scrollY > start + span + innerHeight, set overlay display: none; otherwise clear display.
Frame bank (WebCodecs + MP4Box) — skip if reduced motion, or if VideoDecoder / MP4Box / DataStream missing
Constants: LEAD = 24, LRU_MAX = 30.
fetch the video src as arrayBuffer.
MP4Box.createFile(), set buf.fileStart = 0, appendBuffer + flush.
onReady: take first video track; extract codec description from avcC || hvcC || vpcC || av1C via DataStream BIG_ENDIAN (new Uint8Array(s.buffer, 8) skip box header); VideoDecoder.configure({ codec, codedWidth, codedHeight, description }); setExtractionOptions(track.id, null, { nbSamples: Infinity }); file.start().
onSamples: collect samples.
Pump decode: for each sample, decoder.decode(new EncodedVideoChunk({ type: is_sync ? "key" : "delta", timestamp: cts * 1e6 / timescale, duration: duration * 1e6 / timescale, data })). If in-flight (i - cnt > LEAD), wait until cnt >= i - LEAD then continue. Then decoder.flush().
Decoder output(vf): sequential promise chain — draw VideoFrame to offscreen canvas, vf.close(), toBlob(..., "image/webp", 0.82), push { ts: vf.timestamp, blob } into bank.
Sort bank by ts. Binary-search nearestIndex(t) comparing t * 1e6 to bank[m].ts.
createImageBitmap for current index into an LRU Map (max 30; close old bitmaps). warm(i) preloads bitmaps for i-1 .. i+2.
drawFromBank(t): if bitmap exists and index changed, ctx.drawImage(bm, 0, 0, canvas.width, canvas.height) and add class is-live on canvas (fades canvas in over 200ms).
On any decode/fetch/configure failure set bankFailed and keep the video.currentTime fallback.
Start buildFrameBank on window load (or immediately if document.readyState === "complete"). Canvas context: getContext("2d", { alpha: false }).
Reduced motion
If (prefers-reduced-motion: reduce), skip building the frame bank and snap current = target (no lerp).
Do not
Do not use GSAP, ScrollTrigger, Lenis, or Apple “image sequence” scrubbing.
Do not loop/autoplay the MP4.
Do not change copy, colors, radii (buttons are square), or the 500vh / 7.5s mapping.
Do not add a footer or extra sections after the 500vh scroller unless needed for document height (the scroller itself is 500vh).
Deliver complete index.html, style.css, and main.js that work on first load: sticky fullscreen video, canvas overlay when frames are ready, three overlay copy states over the 500vh scroll, navbar + mobile menu, and the lerp + WebCodecs bank described above.