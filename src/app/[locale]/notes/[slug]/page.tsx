import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getDictionary } from "@/i18n/get-dictionary";
import { isLocale, locales, type Locale } from "@/i18n/config";
import { constructMetadata } from "@/lib/seo";
import { Container, Label, Section } from "@/components/kit";
import { ArrowLeft, Mail } from "@/components/icons";
import { NoteArt } from "@/components/art/note-art";
import { formatDate } from "@/lib/format";
import { Navigation } from "@/components/landing/navigation";
import { Footer } from "@/components/landing/footer";

export function generateStaticParams() {
  return locales.flatMap((locale) =>
    getDictionary(locale).notes.items.map((note) => ({ locale, slug: note.slug }))
  );
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}): Promise<Metadata> {
  const { locale, slug } = await params;
  if (!isLocale(locale)) return {};

  const dict = getDictionary(locale as Locale);
  const note = dict.notes.items.find((item) => item.slug === slug);
  if (!note) return {};

  return constructMetadata({
    locale: locale as Locale,
    title: `${note.title} — ${dict.meta.title.split(" — ")[0]}`,
    description: note.excerpt,
    path: `/notes/${slug}`,
  });
}

export default async function NotePage({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}) {
  const { locale, slug } = await params;
  if (!isLocale(locale)) {
    notFound();
  }

  const dict = getDictionary(locale as Locale);
  const index = dict.notes.items.findIndex((item) => item.slug === slug);
  if (index === -1) {
    notFound();
  }

  const note = dict.notes.items[index];

  return (
    <div className="flex min-h-screen flex-col">
      <Navigation content={dict.nav} locale={locale as Locale} />

      <main id="main" className="flex-1 pt-32 sm:pt-36">
        <Section className="pb-section">
          <Container className="max-w-[820px]">
            <Link
              href={`/${locale}#notes`}
              className="inline-flex items-center gap-2 text-[13px] font-semibold text-muted transition-colors hover:text-ink"
            >
              <ArrowLeft className="h-4 w-4" />
              {dict.notes.backLabel}
            </Link>

            <div className="mt-8 flex items-center gap-3">
              <span className="rounded-full border-2 border-ink px-2.5 py-0.5 text-[10px] font-semibold uppercase tracking-[0.1em]">
                {note.tag}
              </span>
              <span className="label text-muted">{formatDate(note.date, locale)}</span>
            </div>

            <h1 className="mt-5 text-display">{note.title}</h1>

            <div className="mt-8 overflow-hidden rounded-block border-[3px] border-ink shadow-hard">
              <NoteArt index={index} className="h-40 w-full sm:h-56" />
            </div>

            <div className="mt-10 max-w-[680px] space-y-6">
              {note.body.map((paragraph, position) => (
                <p
                  key={position}
                  className={
                    position === 0
                      ? "m-0 text-[19px] leading-relaxed text-ink"
                      : "m-0 text-[17px] leading-relaxed text-muted"
                  }
                >
                  {paragraph}
                </p>
              ))}
            </div>

            <div className="mt-12 rounded-block border-[3px] border-ink bg-mint p-6 sm:p-8">
              <Label className="text-ink/60">{dict.contact.label}</Label>
              <p className="mt-3 max-w-[520px] text-[17px] leading-relaxed text-ink">
                {dict.notes.endNote}
              </p>
              <a
                href={`mailto:${dict.contact.email}`}
                className="mt-5 inline-flex h-12 items-center gap-2 rounded-xl border-[3px] border-ink bg-ink px-5 text-[15px] font-semibold text-paper transition-transform hover:-translate-y-0.5"
              >
                <Mail className="h-4 w-4" />
                {dict.contact.email}
              </a>
            </div>
          </Container>
        </Section>
      </main>

      <Footer content={dict.footer} nav={dict.nav} locale={locale as Locale} />
    </div>
  );
}
