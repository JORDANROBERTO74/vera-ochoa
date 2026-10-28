"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import type { Dictionary } from "@/i18n/dictionaries/en";
import type { Locale } from "@/i18n/config";
import { buttonClass } from "@/components/button";
import { LogoMark } from "@/components/icons";
import { LocaleSwitcher } from "./locale-switcher";
import { cn } from "@/lib/utils";

export function Navigation({
  content,
  locale,
}: {
  content: Dictionary["nav"];
  locale: Locale;
}) {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!open) return;
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    document.documentElement.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.documentElement.style.overflow = "";
    };
  }, [open]);

  const links = [
    { label: content.links.home, href: "#home" },
    { label: content.links.about, href: "#about" },
    { label: content.links.work, href: "#work" },
    { label: content.links.notes, href: "#notes" },
  ];

  return (
    <header className="fixed inset-x-0 top-0 z-50 px-3 pt-3 sm:px-6 sm:pt-5">
      <nav
        aria-label={content.links.home}
        className="mx-auto flex max-w-[820px] items-center justify-between gap-4 rounded-2xl border-[3px] border-ink bg-paper px-3 py-2 shadow-hard sm:px-4"
      >
        <Link
          href={`/${locale}`}
          className="flex shrink-0 items-center gap-2"
          aria-label={content.brand}
        >
          <LogoMark className="h-7 w-7" />
          <span className="hidden font-display text-[15px] font-bold tracking-tight sm:block">
            {content.brand}
          </span>
        </Link>

        <ul className="hidden list-none items-center gap-6 p-0 md:flex">
          {links.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className="text-[14px] font-semibold transition-opacity hover:opacity-60"
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        <div className="hidden items-center gap-3 md:flex">
          <LocaleSwitcher currentLocale={locale} label={content.localeLabel} />
          <Link href="#contact" className={buttonClass("ink", "sm")}>
            {content.cta}
          </Link>
        </div>

        <button
          type="button"
          onClick={() => setOpen((value) => !value)}
          aria-expanded={open}
          aria-controls="mobile-menu"
          aria-label={open ? content.closeMenu : content.openMenu}
          className="flex h-10 w-10 items-center justify-center rounded-lg border-[3px] border-ink md:hidden"
        >
          <span aria-hidden="true" className="relative block h-3 w-5">
            <span
              className={cn(
                "absolute left-0 h-[2.5px] w-5 rounded bg-ink transition-transform duration-300",
                open ? "top-1.5 rotate-45" : "top-0"
              )}
            />
            <span
              className={cn(
                "absolute left-0 top-1.5 h-[2.5px] w-5 rounded bg-ink transition-opacity duration-200",
                open ? "opacity-0" : "opacity-100"
              )}
            />
            <span
              className={cn(
                "absolute left-0 h-[2.5px] w-5 rounded bg-ink transition-transform duration-300",
                open ? "top-1.5 -rotate-45" : "top-3"
              )}
            />
          </span>
        </button>
      </nav>

      {open && (
        <div
          aria-hidden="true"
          onClick={() => setOpen(false)}
          className="fixed inset-0 -z-10 bg-ink/40 md:hidden"
        />
      )}

      {open && (
        <div
          id="mobile-menu"
          className="relative mx-auto mt-2 max-w-[820px] rounded-2xl border-[3px] border-ink bg-paper p-5 shadow-hard md:hidden"
        >
          <ul className="flex list-none flex-col gap-4 p-0">
            {links.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="font-display text-2xl font-bold tracking-tight"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
          <div className="mt-6 flex items-center justify-between gap-3 border-t-[3px] border-ink pt-4">
            <LocaleSwitcher currentLocale={locale} label={content.localeLabel} />
            <Link
              href="#contact"
              onClick={() => setOpen(false)}
              className={buttonClass("coral", "sm")}
            >
              {content.cta}
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
