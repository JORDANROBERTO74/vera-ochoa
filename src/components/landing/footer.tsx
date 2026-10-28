import Link from "next/link";
import type { Dictionary } from "@/i18n/dictionaries/en";
import type { Locale } from "@/i18n/config";
import { Container } from "@/components/kit";
import { LogoMark } from "@/components/icons";
import { LocaleSwitcher } from "./locale-switcher";

export function Footer({
  content,
  nav,
  locale,
}: {
  content: Dictionary["footer"];
  nav: Dictionary["nav"];
  locale: Locale;
}) {
  return (
    <footer className="border-t-[3px] border-ink bg-ink py-12 text-paper">
      <Container>
        <div className="grid gap-10 md:grid-cols-[1.4fr_1fr_1fr]">
          <div>
            <Link href={`/${locale}`} className="inline-flex items-center gap-2.5">
              <LogoMark className="h-9 w-9" />
              <span className="font-display text-lg font-bold tracking-tight">{content.brand}</span>
            </Link>
            <p className="mt-4 max-w-[320px] text-[14px] leading-relaxed text-paper/60">
              {content.blurb}
            </p>
            <a
              href={`mailto:${content.email}`}
              className="mt-5 inline-block text-[14px] font-semibold underline decoration-paper/30 underline-offset-4 transition-colors hover:decoration-paper"
            >
              {content.email}
            </a>
          </div>

          <nav aria-label={content.menuLabel}>
            <p className="m-0 label text-paper/40">{content.menuLabel}</p>
            <ul className="mt-4 list-none space-y-2.5 p-0">
              {content.sections.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-[14px] text-paper/70 transition-colors hover:text-paper"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div>
            <p className="m-0 label text-paper/40">{nav.localeLabel}</p>
            <div className="mt-4">
              <LocaleSwitcher currentLocale={locale} label={nav.localeLabel} inverted />
            </div>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-3 border-t border-paper/15 pt-6 text-[12px] text-paper/40 sm:flex-row sm:items-center sm:justify-between">
          <p className="m-0">{content.copyright}</p>
          <p className="m-0">{content.note}</p>
        </div>
      </Container>
    </footer>
  );
}
