(() => {
  const menuButton = document.querySelector('.menu-toggle');
  const nav = document.querySelector('#site-nav');
  if (menuButton && nav) {
    menuButton.addEventListener('click', () => {
      const open = menuButton.getAttribute('aria-expanded') === 'true';
      menuButton.setAttribute('aria-expanded', String(!open));
      nav.classList.toggle('is-open', !open);
    });
    nav.querySelectorAll('a').forEach(link => link.addEventListener('click', () => {
      menuButton.setAttribute('aria-expanded', 'false'); nav.classList.remove('is-open');
    }));
    document.addEventListener('keydown', event => {
      if (event.key === 'Escape') { menuButton.setAttribute('aria-expanded', 'false'); nav.classList.remove('is-open'); }
    });
  }
  const year = document.querySelector('#current-year');
  if (year) year.textContent = new Date().getFullYear();
  document.querySelectorAll('.photo-frame').forEach(frame => {
    const img = frame.querySelector('.personal-photo');
    if (!img) return;
    const markLoaded = () => { if (img.naturalWidth > 0) frame.classList.add('has-image'); };
    img.addEventListener('load', markLoaded);
    img.addEventListener('error', () => frame.classList.remove('has-image'));
    if (img.complete) markLoaded();
  });
  const toast = document.querySelector('#resume-toast');
  document.querySelectorAll('[data-resume-link]').forEach(link => link.addEventListener('click', event => {
    if (link.dataset.resumeReady !== 'true') { event.preventDefault(); if (toast) toast.hidden = false; }
  }));
  const close = document.querySelector('.toast-close');
  if (close && toast) close.addEventListener('click', () => { toast.hidden = true; });
})();
