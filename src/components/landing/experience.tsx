import Link from "next/link";
import type { Dictionary } from "@/i18n/dictionaries/en";
import { Container, Heading2, Label, Section } from "@/components/kit";
import { ArrowRight } from "@/components/icons";

export function Experience({ content }: { content: Dictionary["experience"] }) {
  return (
    <Section id="experience" className="bg-ink py-section text-paper">
      <Container>
        <div className="grid gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:gap-16">
          <div className="self-start lg:sticky lg:top-28">
            <Label className="text-sun">{content.label}</Label>
            <Heading2
              lead={content.titleLead}
              highlight={content.titleHighlight}
              tone="coral"
              className="mt-4 text-paper"
            />
            <p className="mt-6 max-w-[380px] text-[16px] leading-relaxed text-paper/65">
              {content.intro}
            </p>
            <Link
              href="#contact"
              className="mt-8 inline-flex items-center gap-2 border-b-[3px] border-paper/40 pb-1 text-[15px] font-semibold text-paper transition-colors hover:border-paper"
            >
              {content.link}
              <ArrowRight />
            </Link>
          </div>

          <ul className="list-none space-y-5 p-0">
            {content.items.map((item) => (
              <li
                key={item.period}
                className="rounded-[1.5rem] border-[3px] border-ink bg-paper p-6 text-ink shadow-hard sm:p-7"
              >
                <div className="flex items-center justify-between gap-4">
                  <span className="label text-muted">{item.period}</span>
                  <span className="rounded-full border-[3px] border-ink bg-sun px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.1em]">
                    {item.company}
                  </span>
                </div>
                <h3 className="mt-4 text-[22px] leading-tight">{item.role}</h3>
                <p className="mt-2 text-[15px] leading-relaxed text-muted">{item.description}</p>
              </li>
            ))}
          </ul>
        </div>
      </Container>
    </Section>
  );
}
