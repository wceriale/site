/* Theme toggle: light <-> dark, remembered in localStorage.
   The initial value is applied by an inline snippet in each page's <head>
   so there is no flash of the wrong theme before this file loads. */
(function () {
  "use strict";

  var root = document.documentElement;
  var button = document.querySelector(".theme-toggle");
  if (!button) return;

  function currentTheme() {
    var explicit = root.getAttribute("data-theme");
    if (explicit) return explicit;
    return window.matchMedia("(prefers-color-scheme: dark)").matches
      ? "dark"
      : "light";
  }

  function label(theme) {
    return theme === "dark" ? "Switch to light theme" : "Switch to dark theme";
  }

  button.setAttribute("aria-label", label(currentTheme()));

  button.addEventListener("click", function () {
    var next = currentTheme() === "dark" ? "light" : "dark";
    root.setAttribute("data-theme", next);
    button.setAttribute("aria-label", label(next));
    try {
      localStorage.setItem("theme", next);
    } catch (e) {
      /* Private mode or storage disabled — the toggle still works for this page. */
    }
  });
})();
