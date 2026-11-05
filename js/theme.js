export function initTheme() {
  const root = document.documentElement; // The <html> element
  const button = document.querySelector("#theme-toggle");

  function applyTheme(isDark) {
    root.classList.toggle("dark", isDark);
    button.setAttribute("aria-pressed", String(isDark));
  }

  // Use the visitor's saved choice, or their device setting on the first visit.
  const savedTheme = localStorage.getItem("theme");
  const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;

  applyTheme(savedTheme === null ? prefersDark : savedTheme === "dark");

  button.addEventListener("click", () => {
    const isDark = !root.classList.contains("dark");
    applyTheme(isDark);
    localStorage.setItem("theme", isDark ? "dark" : "light");
  });
}
