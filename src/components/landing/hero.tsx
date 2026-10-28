import Link from "next/link";
import type { Dictionary } from "@/i18n/dictionaries/en";
import { Container, Highlight, Label, Section } from "@/components/kit";
import { ButtonLink } from "@/components/button";
import { ArrowRight, Mail } from "@/components/icons";
import { Portrait } from "@/components/art/portrait";

export function Hero({ content }: { content: Dictionary["hero"] }) {
  return (
    <Section id="home" className="overflow-hidden pb-section pt-32 sm:pt-40">
      <div
        aria-hidden="true"
        className="dot-paper absolute inset-x-0 top-0 -z-10 h-[420px] opacity-70"
        style={{
          maskImage: "linear-gradient(to bottom, black, transparent)",
          WebkitMaskImage: "linear-gradient(to bottom, black, transparent)",
        }}
      />

      <Container>
        <div className="grid items-center gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:gap-16">
          <div>
            <Label className="text-muted">{content.eyebrow}</Label>

            <h1 className="mt-5 text-display">
              {content.titleLead}
              <Highlight>{content.name}</Highlight>
              {content.titleMid}
              <Highlight tone="cobalt">{content.city}</Highlight>
            </h1>

            <p className="mt-7 max-w-[520px] text-[17px] leading-relaxed text-muted">
              {content.intro}
            </p>

            <div className="mt-9 flex flex-col gap-4 sm:flex-row sm:items-center">
              <ButtonLink href="#contact" variant="ink" size="lg" className="shrink-0 justify-center whitespace-nowrap">
                <Mail />
                {content.primaryCta}
              </ButtonLink>
              <Link
                href="#work"
                className="group inline-flex h-14 shrink-0 items-center justify-center gap-2 whitespace-nowrap rounded-xl border-[3px] border-ink px-7 text-base font-semibold transition-colors hover:bg-sun"
              >
                {content.secondaryCta}
                <ArrowRight className="transition-transform group-hover:translate-x-1" />
              </Link>
            </div>
          </div>

          <div className="relative mx-auto w-full max-w-[420px] lg:mx-0 lg:ml-auto">
            <div className="aspect-square rotate-2 overflow-hidden rounded-[2rem] border-[3px] border-ink shadow-hard-lg">
              <Portrait className="h-full w-full" />
            </div>

            <div className="absolute -bottom-6 -left-3 -rotate-3 rounded-2xl border-[3px] border-ink bg-mint px-4 py-2.5 shadow-hard sm:-left-6">
              <span className="label text-ink/60">{content.badge.label}</span>
              <p className="m-0 mt-1 text-sm font-semibold">{content.badge.value}</p>
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
}
