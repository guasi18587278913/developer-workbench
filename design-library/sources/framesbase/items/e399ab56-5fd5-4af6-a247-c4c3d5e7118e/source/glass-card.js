// Liquid-glass window sync.
//
// The card is a window into a full-viewport duplicate of the background video.
// Every frame the duplicate layer is offset by the negative of the card's
// position and sized to the viewport, so its pixels line up exactly with the
// real background behind the card; the card's own overflow/border-radius does
// the clipping.
//
// Sizing the duplicate to the viewport (rather than the card) is load-bearing:
// the filter shifts each colour channel by a different amount, so the leading
// edges of the filtered element show hard channel-separation bands. At viewport
// size those bands fall outside the card and only clean refraction is visible.

const DUP_PIXEL_RATIO = 1;

function createGlassCardSync(video) {
  const card = document.querySelector('[data-glass-card]');
  const dup = document.getElementById('dup-video-container');
  const target = document.getElementById('dup-image');
  if (!card || !dup || !target || !video) return () => {};

  const ctx = target.getContext('2d');

  return function syncGlassCard() {
    const rect = card.getBoundingClientRect();
    if (rect.width < 1 || rect.height < 1) return;
    if (!video.videoWidth || !video.videoHeight) return;

    const vw = document.documentElement.clientWidth;
    const vh = document.documentElement.clientHeight;

    dup.style.left = `${-rect.left}px`;
    dup.style.top = `${-rect.top}px`;
    dup.style.width = `${vw}px`;
    dup.style.height = `${vh}px`;

    // The SVG filter's cost scales with the pixel count of this layer, so the
    // duplicate stays at 1x even on retina. What shows through the card is a
    // soft refraction, where the extra density is not worth 4x the filter work.
    const w = Math.round(vw * DUP_PIXEL_RATIO);
    const h = Math.round(vh * DUP_PIXEL_RATIO);
    if (target.width !== w || target.height !== h) {
      target.width = w;
      target.height = h;
    }

    // Mirror the background's object-fit: cover crop, so the duplicate samples
    // exactly the region of the frame that is on screen behind the card.
    const cover = Math.max(vw / video.videoWidth, vh / video.videoHeight);
    const sw = vw / cover;
    const sh = vh / cover;
    const sx = (video.videoWidth - sw) / 2;
    const sy = (video.videoHeight - sh) / 2;

    try {
      ctx.drawImage(video, sx, sy, sw, sh, 0, 0, w, h);
    } catch {
      // frame not decodable yet
    }
  };
}

const syncGlassCard = createGlassCardSync(document.getElementById('bg-video'));

(function frame() {
  syncGlassCard();
  requestAnimationFrame(frame);
})();
