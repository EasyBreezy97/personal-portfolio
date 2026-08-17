"use client";

type Theme = "dark" | "light";

function getSystemTheme(): Theme {
  return window.matchMedia("(prefers-color-scheme: dark)").matches
    ? "dark"
    : "light";
}

function applyTheme(theme: Theme) {
  document.documentElement.dataset.theme = theme;
  document.documentElement.style.colorScheme = theme;
  localStorage.setItem("theme", theme);
}

export function ThemeToggle() {
  function toggleTheme() {
    const currentTheme =
      document.documentElement.dataset.theme === "dark" ||
      document.documentElement.dataset.theme === "light"
        ? document.documentElement.dataset.theme
        : getSystemTheme();
    const nextTheme = currentTheme === "dark" ? "light" : "dark";
    applyTheme(nextTheme);
  }

  return (
    <button
      type="button"
      className="grid size-10 place-items-center rounded-full border border-[var(--border)] text-[var(--ink)] transition-colors hover:bg-[var(--surface-muted)]"
      aria-label="Toggle color theme"
      onClick={toggleTheme}
    >
      <svg aria-hidden="true" viewBox="0 0 24 24" className="theme-icon theme-icon--sun size-[1.125rem]" fill="none" stroke="currentColor" strokeWidth="1.8">
        <circle cx="12" cy="12" r="3.5" />
        <path d="M12 2.5v2M12 19.5v2M21.5 12h-2M4.5 12h-2M18.72 5.28l-1.42 1.42M6.7 17.3l-1.42 1.42M18.72 18.72l-1.42-1.42M6.7 6.7 5.28 5.28" />
      </svg>
      <svg aria-hidden="true" viewBox="0 0 24 24" className="theme-icon theme-icon--moon size-[1.125rem]" fill="none" stroke="currentColor" strokeWidth="1.8">
        <path d="M20.7 14.3A8.5 8.5 0 0 1 9.7 3.3 8.5 8.5 0 1 0 20.7 14.3Z" />
      </svg>
    </button>
  );
}
