const ink = "var(--color-ink)";

export function NoteArt({ index, className }: { index: number; className?: string }) {
  const ground = ["var(--color-coral)", "var(--color-cobalt)", "var(--color-sun)"][index % 3];
  const accent = ["var(--color-sun)", "var(--color-mint)", "var(--color-coral)"][index % 3];

  return (
    <svg viewBox="0 0 320 180" className={className} aria-hidden="true" preserveAspectRatio="xMidYMid slice">
      <rect width="320" height="180" fill={ground} />
      <g stroke={ink} strokeWidth="5" fill="none" strokeLinecap="round">
        {index % 3 === 0 && (
          <>
            <circle cx="74" cy="90" r="42" fill="var(--color-paper)" />
            <circle cx="150" cy="90" r="42" fill={accent} />
            <circle cx="226" cy="90" r="42" fill="var(--color-paper)" />
            <line x1="262" y1="48" x2="292" y2="132" strokeWidth="8" />
          </>
        )}
        {index % 3 === 1 && (
          <>
            <rect x="38" y="94" width="34" height="56" rx="8" fill="var(--color-paper)" />
            <rect x="90" y="64" width="34" height="86" rx="8" fill="var(--color-paper)" />
            <rect x="142" y="36" width="34" height="114" rx="8" fill={accent} />
            <rect x="194" y="78" width="34" height="72" rx="8" fill="var(--color-paper)" />
            <rect x="246" y="52" width="34" height="98" rx="8" fill="var(--color-paper)" />
          </>
        )}
        {index % 3 === 2 && (
          <>
            <path d="M46 140c40 0 40-100 80-100s40 100 80 100 40-72 68-72" strokeWidth="9" />
            <circle cx="46" cy="140" r="11" fill="var(--color-paper)" />
            <circle cx="274" cy="68" r="11" fill={accent} />
            <rect x="118" y="24" width="44" height="44" rx="10" fill="var(--color-paper)" />
          </>
        )}
      </g>
    </svg>
  );
}
