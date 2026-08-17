"use client";

import { useLocale, useTranslations } from "next-intl";
import { usePathname, useRouter } from "@/i18n/navigation";
import { locales, type Locale } from "@/i18n/routing";

export function LocaleSwitcher() {
  const locale = useLocale() as Locale;
  const pathname = usePathname();
  const router = useRouter();
  const t = useTranslations("Navigation");

  function changeLocale(nextLocale: Locale) {
    router.replace(pathname, { locale: nextLocale });
  }

  return (
    <label className="relative block">
      <span className="sr-only">{t("languageLabel")}</span>
      <select
        className="h-10 appearance-none rounded-full border border-[var(--border)] bg-transparent py-0 pl-3 pr-8 text-sm font-medium text-[var(--ink)] transition-colors hover:bg-[var(--surface-muted)]"
        value={locale}
        onChange={(event) => changeLocale(event.target.value as Locale)}
      >
        {locales.map((supportedLocale) => (
          <option key={supportedLocale} value={supportedLocale}>
            {t(supportedLocale)}
          </option>
        ))}
      </select>
      <svg
        aria-hidden="true"
        viewBox="0 0 24 24"
        className="pointer-events-none absolute right-2.5 top-1/2 size-3.5 -translate-y-1/2"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
      >
        <path d="m7 10 5 5 5-5" />
      </svg>
    </label>
  );
}
