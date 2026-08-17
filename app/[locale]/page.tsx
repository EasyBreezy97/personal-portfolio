import { setRequestLocale } from "next-intl/server";
import { hasLocale } from "@/i18n/routing";

export default async function Home({ params }: PageProps<"/[locale]">) {
  const { locale } = await params;

  if (hasLocale(locale)) {
    setRequestLocale(locale);
  }

  return null;
}
