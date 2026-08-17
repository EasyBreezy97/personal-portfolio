import { site } from "@/data/site";

type NavigationLinksProps = {
  className?: string;
};

export function NavigationLinks({ className }: NavigationLinksProps) {
  return (
    <ul className={className}>
      {site.socialLinks.map((link) => (
        <li key={link.label}>
          <a
            className="text-sm font-medium text-[var(--ink-muted)] transition-colors hover:text-[var(--ink)]"
            href={link.href}
            {...(link.href.startsWith("http")
              ? { rel: "noreferrer", target: "_blank" }
              : {})}
          >
            {link.label}
          </a>
        </li>
      ))}
    </ul>
  );
}
