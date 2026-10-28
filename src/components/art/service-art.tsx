type Props = { kind: "product" | "systems" | "research" | "prototype" | "review"; className?: string };

const ink = "var(--color-ink)";
const paper = "var(--color-paper)";

export function ServiceArt({ kind, className }: Props) {
  return (
    <svg viewBox="0 0 320 200" className={className} aria-hidden="true">
      <rect width="320" height="200" fill="var(--color-sun)" />
      <g stroke={ink} strokeWidth="5" strokeLinejoin="round" strokeLinecap="round">
        {kind === "product" && (
          <>
            <rect x="26" y="30" width="268" height="140" rx="14" fill={paper} />
            <line x1="26" y1="56" x2="294" y2="56" />
            <circle cx="45" cy="43" r="5" fill="var(--color-coral)" stroke="none" />
            <circle cx="60" cy="43" r="5" fill="var(--color-ink)" stroke="none" />
            <rect x="44" y="72" width="118" height="52" rx="8" fill="var(--color-coral)" />
            <line x1="44" y1="140" x2="150" y2="140" strokeWidth="7" />
            <line x1="44" y1="156" x2="118" y2="156" strokeWidth="7" />
            <rect x="182" y="72" width="94" height="84" rx="8" fill="var(--color-cobalt)" />
            <circle cx="229" cy="104" r="14" fill="var(--color-mint)" />
            <line x1="198" y1="134" x2="258" y2="134" stroke="var(--color-paper)" strokeWidth="6" />
          </>
        )}

        {kind === "systems" && (
          <>
            {[0, 1, 2].map((row) =>
              [0, 1, 2].map((col) => {
                const filled = row === 0 && col === 1;
                const accent = row === 1 && col === 2;
                return (
                  <rect
                    key={`${row}-${col}`}
                    x={62 + col * 66}
                    y={30 + row * 46}
                    width="50"
                    height="34"
                    rx="8"
                    fill={filled ? "var(--color-coral)" : accent ? "var(--color-cobalt)" : paper}
                  />
                );
              })
            )}
            <path d="M86 158h148" strokeWidth="5" strokeDasharray="10 8" />
          </>
        )}

        {kind === "research" && (
          <>
            <rect x="34" y="34" width="150" height="66" rx="16" fill={paper} />
            <path d="M60 100v22l24-22" fill={paper} />
            <line x1="58" y1="58" x2="160" y2="58" strokeWidth="6" />
            <line x1="58" y1="76" x2="126" y2="76" strokeWidth="6" />
            <rect x="150" y="108" width="136" height="58" rx="14" fill="var(--color-cobalt)" />
            <line x1="172" y1="128" x2="262" y2="128" stroke="var(--color-paper)" strokeWidth="6" />
            <line x1="172" y1="146" x2="228" y2="146" stroke="var(--color-paper)" strokeWidth="6" />
            <circle cx="268" cy="46" r="20" fill="var(--color-mint)" />
          </>
        )}

        {kind === "prototype" && (
          <>
            <rect x="52" y="42" width="150" height="100" rx="10" fill={paper} strokeDasharray="12 9" />
            <rect x="96" y="58" width="150" height="100" rx="10" fill="var(--color-mint)" />
            <rect x="116" y="78" width="62" height="10" rx="5" fill={ink} stroke="none" />
            <rect x="116" y="98" width="106" height="8" rx="4" fill={ink} stroke="none" opacity="0.35" />
            <rect x="116" y="114" width="84" height="8" rx="4" fill={ink} stroke="none" opacity="0.35" />
            <path d="M232 148l30 12-13 6-6 13Z" fill="var(--color-coral)" strokeWidth="4" />
          </>
        )}

        {kind === "review" && (
          <>
            <rect x="34" y="42" width="252" height="116" rx="12" fill={paper} />
            <line x1="34" y1="68" x2="286" y2="68" />
            <rect x="52" y="84" width="90" height="54" rx="8" fill="var(--color-coral)" />
            <line x1="158" y1="92" x2="266" y2="92" strokeWidth="6" />
            <line x1="158" y1="110" x2="236" y2="110" strokeWidth="6" />
            <line x1="158" y1="128" x2="252" y2="128" strokeWidth="6" />
            <circle cx="238" cy="142" r="34" fill="var(--color-sun)" fillOpacity="0.55" />
            <circle cx="238" cy="142" r="34" fill="none" />
            <line x1="264" y1="168" x2="288" y2="192" strokeWidth="8" />
          </>
        )}
      </g>
    </svg>
  );
}
