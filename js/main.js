document.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('.case-toggle').forEach((btn) => {
    btn.addEventListener('click', () => {
      const item = btn.closest('.case-item');
      const expanded = item.classList.toggle('expanded');
      btn.textContent = expanded ? 'Show less ▴' : 'Read full case study ▾';
      btn.setAttribute('aria-expanded', String(expanded));
    });
  });
});
