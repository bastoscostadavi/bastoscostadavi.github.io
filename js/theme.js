// Light/dark toggle, shared with /bsm-atlas/ through the same localStorage key.
(function () {
  var root = document.documentElement;
  var theme;
  try { theme = localStorage.getItem('atlas-theme'); } catch (e) {}
  if (theme !== 'dark' && theme !== 'light') {
    theme = window.matchMedia && matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
  }
  root.dataset.theme = theme;

  document.addEventListener('DOMContentLoaded', function () {
    var button = document.getElementById('theme-toggle');
    if (!button) return;
    var label = function () {
      var next = root.dataset.theme === 'dark' ? 'light' : 'dark';
      button.setAttribute('aria-label', 'Switch to ' + next + ' theme');
      button.setAttribute('title', 'Switch to ' + next + ' theme');
    };
    label();
    button.addEventListener('click', function () {
      root.dataset.theme = root.dataset.theme === 'dark' ? 'light' : 'dark';
      try { localStorage.setItem('atlas-theme', root.dataset.theme); } catch (e) {}
      label();
    });
  });
})();
