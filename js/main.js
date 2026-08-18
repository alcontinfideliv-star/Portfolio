document.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('.case-toggle').forEach((btn) => {
    btn.addEventListener('click', () => {
      const item = btn.closest('.case-item');
      const expanded = item.classList.toggle('expanded');
      btn.textContent = expanded ? 'Show less ▴' : 'Read full case study ▾';
      btn.setAttribute('aria-expanded', String(expanded));
    });
  });

  const navToggle = document.querySelector('.nav-toggle');
  const siteNav = document.getElementById('site-nav');
  if (navToggle && siteNav) {
    const closeMenu = () => {
      siteNav.classList.remove('open');
      navToggle.setAttribute('aria-expanded', 'false');
    };
    navToggle.addEventListener('click', () => {
      const open = siteNav.classList.toggle('open');
      navToggle.setAttribute('aria-expanded', String(open));
    });
    siteNav.querySelectorAll('a').forEach((link) => {
      link.addEventListener('click', closeMenu);
    });
  }
});
