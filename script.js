const toggle = document.getElementById("theme-toggle");

toggle.addEventListener("click", () => {
  const isDark = document.body.dataset.theme === "dark";

  document.body.dataset.theme = isDark ? "light" : "dark";
  toggle.textContent = isDark ? "🌙 Dark mode" : "☀️ Light mode";
  toggle.setAttribute("aria-pressed", String(!isDark));
});