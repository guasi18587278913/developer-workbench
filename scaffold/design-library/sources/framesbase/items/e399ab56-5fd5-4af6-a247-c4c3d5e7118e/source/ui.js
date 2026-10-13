const menu = document.getElementById('menu');
const openBtn = document.getElementById('menu-open');
const closeBtn = document.getElementById('menu-close');
const backdrop = document.getElementById('menu-backdrop');

function setMenu(open) {
  menu.classList.toggle('is-open', open);
  openBtn.setAttribute('aria-expanded', String(open));
  if (open) menu.querySelector('.menu__close').focus({ preventScroll: true });
  else openBtn.focus({ preventScroll: true });
}

openBtn.addEventListener('click', () => setMenu(true));
closeBtn.addEventListener('click', () => setMenu(false));
backdrop.addEventListener('click', () => setMenu(false));

menu.querySelectorAll('.menu__link').forEach((link) => {
  link.addEventListener('click', () => setMenu(false));
});

window.addEventListener('keydown', (e) => {
  if (e.key === 'Escape' && menu.classList.contains('is-open')) setMenu(false);
});
