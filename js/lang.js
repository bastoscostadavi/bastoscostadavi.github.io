// EN/PT-BR toggle. Portuguese text sits beside the English in data-lang="pt" elements;
// CSS shows the set matching <html lang>. Defaults to the browser language.
(function () {
  var root = document.documentElement;
  var lang;
  try { lang = localStorage.getItem('site-lang'); } catch (e) {}
  if (lang !== 'en' && lang !== 'pt') {
    lang = /^pt\b/i.test(navigator.language || '') ? 'pt' : 'en';
  }
  var titles = { en: document.title, pt: root.dataset.titlePt || document.title };
  var apply = function () {
    root.lang = lang === 'pt' ? 'pt-BR' : 'en';
    document.title = titles[lang];
  };
  apply();

  document.addEventListener('DOMContentLoaded', function () {
    var button = document.getElementById('lang-toggle');
    if (!button) return;
    var label = function () {
      var text = lang === 'pt' ? 'Read in English' : 'Ler em português';
      button.setAttribute('aria-label', text);
      button.setAttribute('title', text);
    };
    label();
    button.addEventListener('click', function () {
      lang = lang === 'pt' ? 'en' : 'pt';
      try { localStorage.setItem('site-lang', lang); } catch (e) {}
      apply();
      label();
    });
  });
})();
