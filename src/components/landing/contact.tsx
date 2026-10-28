import type { Dictionary } from "@/i18n/dictionaries/en";
import { Container, Heading2, Label, Section } from "@/components/kit";
import { Mail } from "@/components/icons";

export function Contact({ content }: { content: Dictionary["contact"] }) {
  const href = `mailto:${content.email}`;

  return (
    <Section id="contact" className="pb-section">
      <Container>
        <div className="relative overflow-hidden rounded-block border-[3px] border-ink bg-coral px-6 py-12 text-center shadow-hard sm:px-10 sm:py-16">
          <div aria-hidden="true" className="absolute -left-10 -top-10 h-32 w-32 rounded-full border-[3px] border-ink bg-sun" />
          <div aria-hidden="true" className="absolute -bottom-12 -right-6 h-28 w-28 rotate-12 rounded-2xl border-[3px] border-ink bg-cobalt" />

          <Label className="relative text-ink/60">{content.label}</Label>
          <Heading2
            lead={content.titleLead}
            highlight={content.titleHighlight}
            tone="paper"
            className="relative mx-auto mt-5 max-w-[720px]"
          />
          <p className="relative mx-auto mt-5 max-w-[460px] text-[16px] leading-relaxed text-ink/80">
            {content.intro}
          </p>

          <div className="relative mt-9 flex flex-col items-center gap-5">
            <a
              href={href}
              className="inline-flex h-14 items-center gap-3 rounded-xl border-[3px] border-ink bg-ink px-7 text-base font-semibold text-paper transition-transform hover:-translate-y-0.5"
            >
              <Mail className="h-5 w-5" />
              {content.button}
            </a>
            <p className="m-0 text-[13px] font-medium text-ink/70">
              {content.location} · {content.availability}
            </p>
          </div>
        </div>
      </Container>
    </Section>
  );
}
