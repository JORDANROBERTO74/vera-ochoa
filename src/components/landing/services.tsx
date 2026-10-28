import Link from "next/link";
import type { Dictionary } from "@/i18n/dictionaries/en";
import { Container, Heading2, Label, Section } from "@/components/kit";
import { buttonClass } from "@/components/button";
import { ServiceArt } from "@/components/art/service-art";

const kinds = ["product", "systems", "research", "prototype", "review"] as const;

export function Services({ content }: { content: Dictionary["services"] }) {
  return (
    <Section id="services" className="py-section">
      <Container>
        <div className="mx-auto max-w-[720px] text-center">
          <Label className="text-muted">{content.label}</Label>
          <Heading2 lead={content.titleLead} highlight={content.titleHighlight} className="mt-4" />
          <p className="mx-auto mt-5 max-w-[560px] text-[16px] leading-relaxed text-muted">
            {content.intro}
          </p>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {content.items.map((item, index) => (
            <article
              key={item.title}
              className="group flex flex-col overflow-hidden rounded-block border-[3px] border-ink bg-paper transition-all duration-200 hover:-translate-y-1 hover:shadow-hard"
            >
              <div className="overflow-hidden border-b-[3px] border-ink">
                <ServiceArt kind={kinds[index]} className="aspect-[8/5] w-full transition-transform duration-500 group-hover:scale-105" />
              </div>
              <div className="flex flex-1 flex-col p-6">
                <h3 className="m-0 text-xl leading-tight">{item.title}</h3>
                <p className="mt-3 text-[15px] leading-relaxed text-muted">{item.description}</p>
              </div>
            </article>
          ))}

          <div className="relative flex flex-col justify-center overflow-hidden rounded-block border-[3px] border-ink bg-coral p-7 text-center shadow-hard">
            <div aria-hidden="true" className="absolute -right-8 -top-8 h-24 w-24 rounded-full border-[3px] border-ink bg-sun" />
            <div aria-hidden="true" className="absolute -bottom-10 -left-6 h-20 w-20 rotate-12 rounded-xl border-[3px] border-ink bg-cobalt" />
            <h3 className="relative m-0 text-2xl leading-tight">{content.ctaCard.title}</h3>
            <p className="relative mx-auto mt-3 max-w-[280px] text-[15px] leading-relaxed text-ink/80">
              {content.ctaCard.description}
            </p>
            <Link
              href="#contact"
              className={buttonClass("ink", "md") + " relative mx-auto mt-6"}
            >
              {content.ctaCard.button}
            </Link>
          </div>
        </div>
      </Container>
    </Section>
  );
}
