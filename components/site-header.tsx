import Link from "next/link";
import { useTranslations } from "next-intl";
import { LocaleSwitcher } from "@/components/locale-switcher";
import { NavigationLinks } from "@/components/navigation-links";
import { ThemeToggle } from "@/components/theme-toggle";

export function SiteHeader() {
  const t = useTranslations("Navigation");
  const siteT = useTranslations("Site");

  return (
    <header className="border-b border-[var(--border)]">
      <div className="site-shell flex min-h-20 items-center justify-between gap-4">
        <Link
          href="/"
          className="shrink-0 text-sm font-semibold tracking-[-0.025em] text-[var(--ink)]"
        >
          {siteT("name")}
        </Link>

        <nav className="flex items-center gap-3" aria-label={t("primaryLabel")}>
          <NavigationLinks className="hidden items-center gap-5 md:flex" />
          <LocaleSwitcher />
          <ThemeToggle />
          <details className="relative md:hidden">
            <summary
              className="grid size-10 cursor-pointer list-none place-items-center rounded-full border border-[var(--border)] text-[var(--ink)] transition-colors hover:bg-[var(--surface-muted)] [&::-webkit-details-marker]:hidden"
              aria-label={t("openMenu")}
            >
              <svg aria-hidden="true" viewBox="0 0 24 24" className="size-5" fill="none" stroke="currentColor" strokeWidth="1.8">
                <path d="M4 7h16M4 12h16M4 17h16" />
              </svg>
            </summary>
            <div className="absolute right-0 top-[calc(100%+0.75rem)] w-44 rounded-lg border border-[var(--border)] bg-[var(--surface)] p-4 shadow-[0_16px_32px_rgb(var(--shadow-color)_/_0.16)]">
              <NavigationLinks className="grid gap-3" />
            </div>
          </details>
        </nav>
      </div>
    </header>
  );
}
