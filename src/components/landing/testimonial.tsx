import type { Dictionary } from "@/i18n/dictionaries/en";
import { Container, Label, Section } from "@/components/kit";
import { Portrait } from "@/components/art/portrait";

export function Testimonial({ content }: { content: Dictionary["testimonial"] }) {
  return (
    <Section id="testimonial" className="pb-section pt-0">
      <Container>
        <div className="grid items-center gap-8 rounded-block border-[3px] border-ink bg-cobalt p-7 text-paper shadow-hard md:grid-cols-[1fr_240px] md:p-10 lg:grid-cols-[1fr_260px] lg:p-12">
          <div>
            <Label className="text-mint">{content.label}</Label>
            <blockquote className="m-0 mt-5 font-display text-[22px] leading-[1.25] font-semibold sm:text-[28px] lg:text-[32px]">
              &ldquo;{content.quote}&rdquo;
            </blockquote>
            <div className="mt-7 flex items-center gap-3">
              <span aria-hidden="true" className="h-[3px] w-8 rounded bg-mint" />
              <div>
                <p className="m-0 text-[15px] font-semibold">{content.name}</p>
                <p className="m-0 text-[13px] text-paper/70">{content.role}</p>
              </div>
            </div>
          </div>

          <div className="mx-auto aspect-square w-full max-w-[240px] rotate-3 overflow-hidden rounded-full border-[3px] border-ink shadow-hard">
            <Portrait variant="avatar" className="h-full w-full" />
          </div>
        </div>
      </Container>
    </Section>
  );
}
