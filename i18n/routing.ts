import { defineRouting } from "next-intl/routing";

export const locales = ["en", "ka"] as const;

export type Locale = (typeof locales)[number];

export const defaultLocale: Locale = "en";

export const routing = defineRouting({
  locales,
  defaultLocale,
  localePrefix: "always",
});

export function hasLocale(locale: string): locale is Locale {
  return locales.includes(locale as Locale);
}
