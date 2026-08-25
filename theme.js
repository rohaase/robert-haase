/* Theme Toggle — Basis ist hell (seit 2026-08-25), Dunkel folgt der Systemeinstellung.
   Ein Klick setzt eine explizite Wahl (data-theme + localStorage), die ab dann gewinnt. */
document.addEventListener('DOMContentLoaded', function () {
  var btn = document.querySelector('.theme-toggle');
  if (!btn) return;
  btn.addEventListener('click', function () {
    var root = document.documentElement;
    var attr = root.getAttribute('data-theme');
    var isDark = attr === 'dark' ||
      (!attr && window.matchMedia('(prefers-color-scheme: dark)').matches);
    var next = isDark ? 'light' : 'dark';
    root.setAttribute('data-theme', next);
    try { localStorage.setItem('theme', next); } catch (e) {}
  });
});
