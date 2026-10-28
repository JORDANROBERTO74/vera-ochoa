import type { HTMLAttributes, ReactNode } from "react";

function join(...classes: (string | undefined | false)[]) {
  return classes.filter(Boolean).join(" ");
}

export function Container({ className, children, ...props }: HTMLAttributes<HTMLDivElement>) {
  return (
    <div className={join("mx-auto w-full max-w-[1200px] px-5 sm:px-8", className)} {...props}>
      {children}
    </div>
  );
}

export function Section({ className, children, ...props }: HTMLAttributes<HTMLElement>) {
  return (
    <section className={join("relative", className)} {...props}>
      {children}
    </section>
  );
}

export function Label({ className, children }: { className?: string; children: ReactNode }) {
  return <p className={join("m-0 label", className)}>{children}</p>;
}

const tones = {
  coral: "bg-coral",
  cobalt: "bg-cobalt text-paper",
  sun: "bg-sun",
  mint: "bg-mint",
  paper: "bg-paper",
} as const;

export function Highlight({
  children,
  tone = "coral",
}: {
  children: ReactNode;
  tone?: keyof typeof tones;
}) {
  return (
    <span
      className={join(
        "inline-block -rotate-1 rounded-xl border-[3px] border-ink px-2.5 py-0.5 align-baseline",
        tones[tone]
      )}
    >
      {children}
    </span>
  );
}

export function Heading2({
  lead,
  highlight,
  tone = "coral",
  className,
}: {
  lead: string;
  highlight: string;
  tone?: keyof typeof tones;
  className?: string;
}) {
  return (
    <h2 className={join("m-0 text-section text-balance", className)}>
      {lead}
      <Highlight tone={tone}>{highlight}</Highlight>
    </h2>
  );
}
