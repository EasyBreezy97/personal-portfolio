import { NavigationLinks } from "@/components/navigation-links";
import { site } from "@/data/site";

export function SiteFooter() {
  return (
    <footer className="border-t border-[var(--border)]">
      <div className="site-shell flex flex-col gap-4 py-8 sm:flex-row sm:items-center sm:justify-between">
        <p className="text-sm text-[var(--ink-muted)]">
          © {new Date().getFullYear()} {site.name}
        </p>
        <nav aria-label="Footer navigation">
          <NavigationLinks className="flex flex-wrap items-center gap-x-5 gap-y-2" />
        </nav>
      </div>
    </footer>
  );
}
