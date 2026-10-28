type Props = { className?: string; variant?: "hero" | "about" | "avatar" };

export function Portrait({ variant = "hero", className }: Props) {
  const ground =
    variant === "hero" ? "var(--color-sun)" : variant === "about" ? "var(--color-cobalt)" : "var(--color-mint)";
  const shoulder =
    variant === "hero" ? "var(--color-coral)" : variant === "about" ? "var(--color-mint)" : "var(--color-sun)";
  const accent = variant === "about" ? "var(--color-sun)" : "var(--color-coral)";
  const clipId = `head-${variant}`;

  return (
    <svg viewBox="0 0 400 400" className={className} aria-hidden="true" preserveAspectRatio="xMidYMid slice">
      <defs>
        <clipPath id={clipId}>
          <rect x="141" y="96" width="118" height="146" rx="59" />
        </clipPath>
      </defs>

      <rect width="400" height="400" fill={ground} />
      <circle cx="200" cy="200" r="142" fill="var(--color-paper)" stroke="var(--color-ink)" strokeWidth="8" />

      <path
        d="M94 400c0-66 47-114 106-114s106 48 106 114Z"
        fill={shoulder}
        stroke="var(--color-ink)"
        strokeWidth="8"
      />
      <rect x="182" y="222" width="36" height="56" fill="var(--color-paper)" stroke="var(--color-ink)" strokeWidth="7" />

      <rect
        x="141"
        y="96"
        width="118"
        height="146"
        rx="59"
        fill="var(--color-paper)"
        stroke="var(--color-ink)"
        strokeWidth="8"
      />
      <g clipPath={`url(#${clipId})`}>
        <rect x="141" y="96" width="118" height="52" fill="var(--color-ink)" />
      </g>
      <path d="M141 148h118" stroke="var(--color-ink)" strokeWidth="0" />

      <circle cx="200" cy="78" r="20" fill="var(--color-ink)" />

      <circle cx="322" cy="86" r="27" fill={accent} stroke="var(--color-ink)" strokeWidth="6" />
      <rect
        x="46"
        y="248"
        width="36"
        height="36"
        rx="8"
        fill="var(--color-mint)"
        stroke="var(--color-ink)"
        strokeWidth="6"
        transform="rotate(-14 64 266)"
      />
    </svg>
  );
}
