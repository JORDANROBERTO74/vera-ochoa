import type { Dictionary } from "@/i18n/dictionaries/en";
import { Container, Heading2, Label, Section } from "@/components/kit";
import { ProjectArt } from "@/components/art/project-art";
import { cn } from "@/lib/utils";

export function Work({ content }: { content: Dictionary["work"] }) {
  return (
    <Section id="work" className="py-section">
      <Container>
        <div className="mx-auto max-w-[720px] text-center">
          <Label className="text-muted">{content.label}</Label>
          <Heading2
            lead={content.titleLead}
            highlight={content.titleHighlight}
            tone="sun"
            className="mt-4"
          />
        </div>

        <div className="mt-12 space-y-8">
          {content.items.map((project, index) => (
            <article
              key={project.title}
              className="grid overflow-hidden rounded-block border-[3px] border-ink bg-paper transition-shadow duration-200 hover:shadow-hard-lg md:grid-cols-2"
            >
              <div className={cn("p-7 md:p-10", index === 1 && "md:order-2")}>
                <div className="flex items-center justify-between gap-4">
                  <span className="font-display text-lg font-bold tracking-[0.08em]">
                    {project.client}
                  </span>
                  <span className="rounded-full border-[3px] border-ink bg-paper px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.1em]">
                    {project.tag}
                  </span>
                </div>

                <h3 className="mt-6 text-[26px] leading-[1.15]">{project.title}</h3>
                <p className="mt-4 text-[15px] leading-relaxed text-muted">{project.description}</p>

                <div className="mt-7 inline-flex items-center gap-3 rounded-xl border-[3px] border-ink bg-mint px-4 py-2.5">
                  <span className="label text-ink/60">{project.resultLabel}</span>
                  <span className="font-display text-xl font-bold">{project.resultValue}</span>
                </div>
              </div>

              <div
                className={cn(
                  "min-h-[260px] border-t-[3px] border-ink md:border-t-0",
                  index === 1 ? "md:order-1 md:border-r-[3px]" : "md:border-l-[3px]"
                )}
              >
                <ProjectArt
                  kind={index === 0 ? "meridia" : "palmar"}
                  className="h-full w-full object-cover"
                />
              </div>
            </article>
          ))}
        </div>
      </Container>
    </Section>
  );
}
