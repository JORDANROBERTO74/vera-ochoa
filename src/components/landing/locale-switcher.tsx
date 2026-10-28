import Link from "next/link";
import type { Locale } from "@/i18n/config";
import { cn } from "@/lib/utils";

export function LocaleSwitcher({
  currentLocale,
  label,
  inverted = false,
}: {
  currentLocale: Locale;
  label: string;
  inverted?: boolean;
}) {
  return (
    <div
      className="inline-flex items-center gap-1 text-[11px] font-semibold uppercase tracking-[0.14em]"
      role="group"
      aria-label={label}
    >
      {(["en", "es"] as const).map((locale) => (
        <Link
          key={locale}
          href={`/${locale}`}
          hrefLang={locale}
          aria-current={currentLocale === locale ? "page" : undefined}
          className={cn(
            "rounded-md px-1.5 py-0.5 transition-colors",
            currentLocale === locale
              ? inverted
                ? "bg-paper text-ink"
                : "bg-ink text-paper"
              : inverted
                ? "text-paper/50 hover:text-paper"
                : "text-ink/40 hover:text-ink"
          )}
        >
          {locale}
        </Link>
      ))}
    </div>
  );
}
