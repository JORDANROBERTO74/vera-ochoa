import Link from "next/link";
import type { Dictionary } from "@/i18n/dictionaries/en";
import { Container, Heading2, Label, Section } from "@/components/kit";
import { ArrowRight } from "@/components/icons";
import { Portrait } from "@/components/art/portrait";

export function About({ content }: { content: Dictionary["about"] }) {
  return (
    <Section id="about" className="bg-sun py-section">
      <Container>
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <div className="mx-auto aspect-square w-full max-w-[440px] overflow-hidden rounded-full border-[3px] border-ink shadow-hard-lg lg:mx-0">
            <Portrait variant="about" className="h-full w-full" />
          </div>

          <div>
            <Label className="text-ink/60">{content.label}</Label>
            <Heading2
              lead={content.titleLead}
              highlight={content.titleHighlight}
              tone="mint"
              className="mt-4"
            />
            <p className="mt-6 max-w-[520px] text-[16px] leading-relaxed text-ink/75">
              {content.intro}
            </p>

            <ul className="mt-8 list-none space-y-5 p-0">
              {content.facts.map((fact, index) => (
                <li key={fact.title} className="flex gap-4">
                  <span
                    aria-hidden="true"
                    className={
                      "mt-1 h-5 w-5 shrink-0 rounded-md border-[3px] border-ink " +
                      (index === 0 ? "bg-cobalt" : "bg-coral")
                    }
                  />
                  <div>
                    <h3 className="m-0 text-[17px] leading-tight">{fact.title}</h3>
                    <p className="mt-1.5 text-[14px] leading-relaxed text-ink/70">
                      {fact.description}
                    </p>
                  </div>
                </li>
              ))}
            </ul>

            <Link
              href="#contact"
              className="mt-8 inline-flex items-center gap-2 border-b-[3px] border-ink pb-1 text-[15px] font-semibold transition-opacity hover:opacity-60"
            >
              {content.link}
              <ArrowRight />
            </Link>
          </div>
        </div>
      </Container>
    </Section>
  );
}
