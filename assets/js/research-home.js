// Navigation stays visible when JavaScript is unavailable.
(() => {
  const button = document.querySelector('.menu-toggle');
  const nav = document.querySelector('#primary-nav');
  if (!button || !nav) return;

  const closeMenu = () => {
    button.setAttribute('aria-expanded', 'false');
    nav.classList.remove('is-open');
  };

  button.hidden = false;
  document.documentElement.classList.add('menu-ready');
  button.addEventListener('click', () => {
    const expanded = button.getAttribute('aria-expanded') === 'true';
    button.setAttribute('aria-expanded', String(!expanded));
    nav.classList.toggle('is-open', !expanded);
  });
  nav.addEventListener('click', (event) => {
    if (event.target.closest('a')) closeMenu();
  });
  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape' && nav.classList.contains('is-open')) {
      closeMenu();
      button.focus();
    }
  });
  window.matchMedia('(max-width: 640px)').addEventListener('change', closeMenu);
})();
