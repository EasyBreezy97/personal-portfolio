import { useTranslations } from "next-intl";
import { site } from "@/data/site";

type NavigationLinksProps = {
  className?: string;
};

export function NavigationLinks({ className }: NavigationLinksProps) {
  const t = useTranslations("Navigation");

  return (
    <ul className={className}>
      {site.socialLinks.map((link) => (
        <li key={link.labelKey}>
          <a
            className="text-sm font-medium text-[var(--ink-muted)] transition-colors hover:text-[var(--ink)]"
            href={link.href}
            {...(link.href.startsWith("http")
              ? { rel: "noreferrer", target: "_blank" }
              : {})}
          >
          {t(link.labelKey)}
          </a>
        </li>
      ))}
    </ul>
  );
}
