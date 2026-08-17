import { useTranslations } from "next-intl";
import { NavigationLinks } from "@/components/navigation-links";

export function SiteFooter() {
  const t = useTranslations("Footer");
  const navigation = useTranslations("Navigation");
  const siteT = useTranslations("Site");

  return (
    <footer className="border-t border-[var(--border)]">
      <div className="site-shell flex flex-col gap-4 py-8 sm:flex-row sm:items-center sm:justify-between">
        <p className="text-sm text-[var(--ink-muted)]">
          {t("copyright", { year: new Date().getFullYear(), name: siteT("name") })}
        </p>
        <nav aria-label={navigation("footerLabel")}>
          <NavigationLinks className="flex flex-wrap items-center gap-x-5 gap-y-2" />
        </nav>
      </div>
    </footer>
  );
}
