import type { Metadata } from "next";
import Image from "next/image";
import { notFound } from "next/navigation";
import { getTranslations, setRequestLocale } from "next-intl/server";
import profileImage from "@/assets/img/profile.png";
import { site } from "@/data/site";
import { hasLocale } from "@/i18n/routing";

const experienceIds = [
  "basisBank",
  "staffbase",
  "makingScience",
  "aptos",
  "translateGe",
] as const;

const educationIds = ["masters", "bachelors"] as const;

const primaryTechnologyIds = [
  "javascript",
  "typescript",
  "react",
  "nextjs",
  "tailwind",
] as const;

const supportingTechnologyIds = [
  "zustand",
  "redux",
  "singleSpa",
  "jest",
  "reactTestingLibrary",
  "webpack",
  "html",
  "css",
  "microfrontendArchitecture",
] as const;

export async function generateMetadata({
  params,
}: PageProps<"/[locale]">): Promise<Metadata> {
  const { locale } = await params;

  if (!hasLocale(locale)) {
    notFound();
  }

  const t = await getTranslations({ locale, namespace: "Home.metadata" });

  return {
    title: t("title"),
    description: t("description"),
    robots: {
      index: true,
      follow: true,
    },
    openGraph: {
      type: "profile",
      title: t("title"),
      description: t("description"),
      locale: locale === "ka" ? "ka_GE" : "en_US",
    },
    twitter: {
      card: "summary",
      title: t("title"),
      description: t("description"),
    },
  };
}

export default async function Home({ params }: PageProps<"/[locale]">) {
  const { locale } = await params;

  if (!hasLocale(locale)) {
    notFound();
  }

  setRequestLocale(locale);
  const t = await getTranslations({ locale, namespace: "Home" });
  const siteT = await getTranslations({ locale, namespace: "Site" });
  const email = site.socialLinks.find((link) => link.labelKey === "email");
  const github = site.socialLinks.find((link) => link.labelKey === "github");
  const linkedIn = site.socialLinks.find((link) => link.labelKey === "linkedin");

  const personJsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: siteT("name"),
    jobTitle: t("hero.title"),
    description: t("metadata.description"),
    email: email?.href.replace("mailto:", ""),
    sameAs: [github?.href, linkedIn?.href].filter(Boolean),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
      />
      <section className="site-shell grid items-center gap-12 py-16 sm:py-24 lg:grid-cols-[minmax(0,1fr)_22rem] lg:gap-20 lg:py-32">
        <div className="max-w-3xl">
          <p className="mb-5 text-sm font-semibold tracking-[0.08em] text-[var(--accent)] uppercase">
            {t("hero.eyebrow")}
          </p>
          <h1 className="type-display">{t("hero.title")}</h1>
          <p className="type-body mt-7">{t("hero.lead")}</p>
          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            {email && (
              <a
                className="inline-flex min-h-12 items-center justify-center rounded-md bg-[var(--accent)] px-5 text-sm font-semibold text-white transition-transform hover:-translate-y-0.5"
                href={email.href}
              >
                {t("hero.emailCta")}
              </a>
            )}
            {github && (
              <a
                className="inline-flex min-h-12 items-center justify-center rounded-md border border-[var(--border)] px-5 text-sm font-semibold text-[var(--ink)] transition-colors hover:bg-[var(--surface-muted)]"
                href={github.href}
                target="_blank"
                rel="noreferrer"
              >
                {t("hero.githubCta")}
              </a>
            )}
          </div>
        </div>
        <div className="relative mx-auto w-full max-w-[22rem] lg:mx-0">
          <div className="absolute inset-x-6 -bottom-5 h-full rounded-[1.5rem] bg-[var(--surface-muted)]" />
          <Image
            className="relative aspect-square w-full rounded-[1.5rem] border border-[var(--border)] object-cover shadow-[0_24px_48px_rgb(var(--shadow-color)_/_0.18)]"
            src={profileImage}
            alt={t("hero.imageAlt")}
            priority
            sizes="(max-width: 640px) calc(100vw - 4rem), 22rem"
          />
        </div>
      </section>

      <section className="border-y border-[var(--border)] bg-[var(--surface)] py-16 sm:py-20">
        <div className="site-shell">
          <div className="max-w-2xl">
            <p className="text-sm font-semibold tracking-[0.08em] text-[var(--accent)] uppercase">
              {t("technology.eyebrow")}
            </p>
            <h2 className="type-heading mt-4">{t("technology.title")}</h2>
            <p className="type-body mt-4">{t("technology.description")}</p>
          </div>
        </div>
        <div className="mt-10 w-3/5 m-auto grid gap-4">
          <div className="tech-marquee" aria-label={t("technology.primaryLabel")}>
            <div className="tech-motion">
              <ul className="tech-list" role="list">
                {primaryTechnologyIds.map((id) => (
                  <li key={id} className="tech-chip tech-chip--primary">
                    {t(`technology.items.${id}`)}
                  </li>
                ))}
              </ul>
              <ul className="tech-list" aria-hidden="true">
                {primaryTechnologyIds.map((id) => (
                  <li key={id} className="tech-chip tech-chip--primary">
                    {t(`technology.items.${id}`)}
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="tech-marquee" aria-label={t("technology.supportingLabel")}>
            <div className="tech-motion tech-motion--reverse">
              <ul className="tech-list" role="list">
                {supportingTechnologyIds.map((id) => (
                  <li key={id} className="tech-chip">
                    {t(`technology.items.${id}`)}
                  </li>
                ))}
              </ul>
              <ul className="tech-list" aria-hidden="true">
                {supportingTechnologyIds.map((id) => (
                  <li key={id} className="tech-chip">
                    {t(`technology.items.${id}`)}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="border-y border-[var(--border)] bg-[var(--surface)] py-16 sm:py-20">
        <div className="site-shell">
          <p className="text-sm font-semibold tracking-[0.08em] text-[var(--accent)] uppercase">
            {t("focus.eyebrow")}
          </p>
          <h2 className="type-heading mt-4">{t("focus.title")}</h2>
          <div className="mt-10 grid gap-px overflow-hidden rounded-xl border border-[var(--border)] bg-[var(--border)] md:grid-cols-3">
            {(["architecture", "performance", "leadership"] as const).map(
              (item) => (
                <article key={item} className="bg-[var(--surface)] p-6 sm:p-7">
                  <h3 className="type-subheading">{t(`focus.items.${item}.title`)}</h3>
                  <p className="mt-3 text-sm leading-6 text-[var(--ink-muted)]">
                    {t(`focus.items.${item}.description`)}
                  </p>
                </article>
              ),
            )}
          </div>
        </div>
      </section>

      <section className="site-shell py-16 sm:py-24">
        <div className="grid gap-8 lg:grid-cols-[minmax(0,0.8fr)_minmax(0,1.2fr)] lg:gap-20">
          <div>
            <p className="text-sm font-semibold tracking-[0.08em] text-[var(--accent)] uppercase">
              {t("about.eyebrow")}
            </p>
            <h2 className="type-heading mt-4">{t("about.title")}</h2>
          </div>
          <p className="type-body max-w-none">{t("about.description")}</p>
        </div>
      </section>

      <section className="border-y border-[var(--border)] bg-[var(--surface)] py-16 sm:py-24">
        <div className="site-shell">
          <p className="text-sm font-semibold tracking-[0.08em] text-[var(--accent)] uppercase">
            {t("experience.eyebrow")}
          </p>
          <h2 className="type-heading mt-4">{t("experience.title")}</h2>
          <div className="mt-10 divide-y divide-[var(--border)] border-y border-[var(--border)]">
            {experienceIds.map((id) => (
              <article
                key={id}
                className="grid gap-4 py-7 sm:grid-cols-[11rem_minmax(0,1fr)] sm:gap-8"
              >
                <p className="text-sm font-medium text-[var(--ink-muted)]">
                  {t(`experience.items.${id}.date`)}
                </p>
                <div>
                  <h3 className="type-subheading">
                    {t(`experience.items.${id}.organization`)}
                  </h3>
                  <p className="mt-1 text-sm font-medium text-[var(--accent)]">
                    {t(`experience.items.${id}.role`)}
                  </p>
                  <p className="mt-4 max-w-2xl text-sm leading-6 text-[var(--ink-muted)]">
                    {t(`experience.items.${id}.description`)}
                  </p>
                  <ul className="mt-4 grid max-w-2xl list-disc gap-2 pl-5 text-sm leading-6 text-[var(--ink)] marker:text-[var(--accent)]">
                    <li>{t(`experience.items.${id}.contributionOne`)}</li>
                    <li>{t(`experience.items.${id}.contributionTwo`)}</li>
                  </ul>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="site-shell py-16 sm:py-24">
        <p className="text-sm font-semibold tracking-[0.08em] text-[var(--accent)] uppercase">
          {t("education.eyebrow")}
        </p>
        <h2 className="type-heading mt-4">{t("education.title")}</h2>
        <div className="mt-10 grid gap-4 md:grid-cols-2">
          {educationIds.map((id) => (
            <article
              key={id}
              className="rounded-xl border border-[var(--border)] bg-[var(--surface)] p-6 sm:p-7"
            >
              <h3 className="type-subheading">
                {t(`education.items.${id}.degree`)}
              </h3>
              <p className="mt-3 text-sm font-medium text-[var(--ink-muted)]">
                {t(`education.items.${id}.institution`)}
              </p>
              <p className="mt-1 text-sm text-[var(--ink-muted)]">
                {t(`education.items.${id}.detail`)}
              </p>
            </article>
          ))}
        </div>
      </section>

      <section className="border-t border-[var(--border)] bg-[var(--ink)] py-16 text-[var(--canvas)] sm:py-20">
        <div className="site-shell grid gap-8 lg:grid-cols-[minmax(0,1fr)_auto] lg:items-end">
          <div className="max-w-2xl">
            <p className="text-sm font-semibold tracking-[0.08em] text-[var(--surface-muted)] uppercase">
              {t("contact.eyebrow")}
            </p>
            <h2 className="type-heading mt-4 text-[var(--canvas)]">
              {t("contact.title")}
            </h2>
            <p className="mt-4 max-w-xl text-[var(--surface-muted)]">
              {t("contact.description")}
            </p>
          </div>
          {email && (
            <a
              className="inline-flex min-h-12 items-center justify-center rounded-md bg-[var(--accent)] px-5 text-sm font-semibold text-white transition-transform hover:-translate-y-0.5"
              href={email.href}
            >
              {t("contact.emailCta")}
            </a>
          )}
        </div>
      </section>
    </>
  );
}
