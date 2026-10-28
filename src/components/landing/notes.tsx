import Link from "next/link";
import type { Dictionary } from "@/i18n/dictionaries/en";
import type { Locale } from "@/i18n/config";
import { Container, Heading2, Label, Section } from "@/components/kit";
import { ArrowRight } from "@/components/icons";
import { NoteArt } from "@/components/art/note-art";
import { formatDate } from "@/lib/format";

export function Notes({
  content,
  locale,
}: {
  content: Dictionary["notes"];
  locale: Locale;
}) {
  return (
    <Section id="notes" className="pb-section">
      <Container>
        <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
          <div className="max-w-[560px]">
            <Label className="text-muted">{content.label}</Label>
            <Heading2
              lead={content.titleLead}
              highlight={content.titleHighlight}
              tone="mint"
              className="mt-4"
            />
          </div>
          <p className="m-0 max-w-[340px] text-[15px] leading-relaxed text-muted">
            {content.intro}
          </p>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {content.items.map((note, index) => (
            <Link
              key={note.slug}
              href={`/${locale}/notes/${note.slug}`}
              className="group flex flex-col overflow-hidden rounded-block border-[3px] border-ink bg-paper transition-all duration-200 hover:-translate-y-1 hover:shadow-hard"
            >
              <div className="overflow-hidden border-b-[3px] border-ink">
                <NoteArt
                  index={index}
                  className="aspect-[16/9] w-full transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="flex flex-1 flex-col p-6">
                <div className="flex items-center gap-3">
                  <span className="rounded-full border-2 border-ink px-2.5 py-0.5 text-[10px] font-semibold uppercase tracking-[0.1em]">
                    {note.tag}
                  </span>
                  <span className="label text-muted">{formatDate(note.date, locale)}</span>
                </div>
                <h3 className="mt-4 text-[19px] leading-[1.2] group-hover:underline group-hover:decoration-2 group-hover:underline-offset-4">
                  {note.title}
                </h3>
                <p className="mt-2 text-[14px] leading-relaxed text-muted">{note.excerpt}</p>
                <span className="mt-auto inline-flex items-center gap-2 pt-5 text-[14px] font-semibold">
                  {content.readLabel}
                  <ArrowRight className="transition-transform group-hover:translate-x-1" />
                </span>
              </div>
            </Link>
          ))}
        </div>
      </Container>
    </Section>
  );
}
