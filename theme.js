/* Theme Toggle — Default folgt der Systemeinstellung (prefers-color-scheme).
   Ein Klick setzt eine explizite Wahl (data-theme + localStorage), die ab dann gewinnt. */
document.addEventListener('DOMContentLoaded', function () {
  var btn = document.querySelector('.theme-toggle');
  if (!btn) return;
  btn.addEventListener('click', function () {
    var root = document.documentElement;
    var attr = root.getAttribute('data-theme');
    var isLight = attr === 'light' ||
      (!attr && window.matchMedia('(prefers-color-scheme: light)').matches);
    var next = isLight ? 'dark' : 'light';
    root.setAttribute('data-theme', next);
    try { localStorage.setItem('theme', next); } catch (e) {}
  });
});
