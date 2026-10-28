const ink = "var(--color-ink)";
const paper = "var(--color-paper)";

export function ProjectArt({ kind, className }: { kind: "meridia" | "palmar"; className?: string }) {
  return (
    <svg viewBox="0 0 360 300" className={className} aria-hidden="true" preserveAspectRatio="xMidYMid slice">
      <rect width="360" height="300" fill={kind === "meridia" ? "var(--color-cobalt)" : "var(--color-mint)"} />

      {kind === "meridia" ? (
        <g stroke={ink} strokeWidth="5" strokeLinejoin="round">
          <rect x="112" y="24" width="136" height="252" rx="22" fill={paper} />
          <rect x="152" y="38" width="56" height="9" rx="4.5" fill={ink} stroke="none" />
          <rect x="128" y="66" width="104" height="34" rx="8" fill="var(--color-sun)" />
          <rect x="128" y="110" width="104" height="10" rx="5" fill={ink} stroke="none" opacity="0.25" />
          <rect x="128" y="128" width="72" height="10" rx="5" fill={ink} stroke="none" opacity="0.25" />
          <rect x="128" y="152" width="104" height="46" rx="8" fill="var(--color-coral)" />
          <rect x="128" y="208" width="104" height="10" rx="5" fill={ink} stroke="none" opacity="0.25" />
          <rect x="128" y="226" width="60" height="10" rx="5" fill={ink} stroke="none" opacity="0.25" />
          <rect x="128" y="248" width="104" height="16" rx="8" fill={ink} />
          <circle cx="66" cy="92" r="22" fill="var(--color-mint)" />
          <circle cx="296" cy="212" r="26" fill="var(--color-sun)" />
        </g>
      ) : (
        <g stroke={ink} strokeWidth="5" strokeLinejoin="round">
          <rect x="34" y="42" width="292" height="86" rx="12" fill={paper} />
          <rect x="52" y="60" width="70" height="26" rx="13" fill="var(--color-coral)" />
          <rect x="136" y="60" width="70" height="26" rx="13" fill={paper} />
          <rect x="220" y="60" width="70" height="26" rx="13" fill={ink} />
          <rect x="52" y="98" width="104" height="12" rx="6" fill={ink} stroke="none" opacity="0.2" />
          <rect x="34" y="150" width="292" height="108" rx="12" fill={paper} />
          {[0, 1, 2, 3].map((col) => (
            <rect
              key={col}
              x={54 + col * 68}
              y={170}
              width="48"
              height="48"
              rx="10"
              fill={["var(--color-cobalt)", "var(--color-sun)", "var(--color-mint)", "var(--color-coral)"][col]}
            />
          ))}
          <rect x="54" y="230" width="216" height="10" rx="5" fill={ink} stroke="none" opacity="0.2" />
        </g>
      )}
    </svg>
  );
}
