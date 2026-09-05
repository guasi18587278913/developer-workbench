export function initNav() {
  const btn = document.getElementById('hamburger');
  if (!btn) return;

  btn.addEventListener('click', () => {
    btn.classList.toggle('open');
    const expanded = btn.classList.contains('open');
    btn.setAttribute('aria-expanded', expanded);
  });
}
