import type { Dictionary } from "@/i18n/dictionaries/en";
import { Container } from "@/components/kit";
import { Asterisk } from "@/components/icons";

export function ClientStrip({ content }: { content: Dictionary["clients"] }) {
  const row = [...content.items, ...content.items];

  return (
    <div className="py-6">
      <Container>
        <p className="m-0 text-center label text-muted">{content.label}</p>
      </Container>

      <div className="relative -mx-[6vw] mt-6 -rotate-2 border-y-[3px] border-ink bg-ink py-4">
        <div className="marquee-track flex w-max items-center gap-10">
          {[0, 1].map((copy) => (
            <div key={copy} className="flex items-center gap-10" aria-hidden={copy === 1 ? "true" : undefined}>
              {row.map((name, index) => (
                <span key={`${copy}-${name}-${index}`} className="flex items-center gap-10">
                  <span className="whitespace-nowrap font-display text-xl font-bold tracking-tight text-paper">
                    {name}
                  </span>
                  <Asterisk className="h-4 w-4 shrink-0 text-coral" />
                </span>
              ))}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
