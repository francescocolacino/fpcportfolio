interface IconProps {
  className?: string;
}

/** Sole stilizzato: disco con raggi sottili. */
export function Sun({ className, rays = 12 }: IconProps & { rays?: number }) {
  const lines = Array.from({ length: rays }, (_, i) => {
    const a = (i / rays) * Math.PI * 2;
    return (
      <line
        key={i}
        x1={50 + Math.cos(a) * 24}
        y1={50 + Math.sin(a) * 24}
        x2={50 + Math.cos(a) * 44}
        y2={50 + Math.sin(a) * 44}
      />
    );
  });
  return (
    <svg className={className} viewBox="0 0 100 100" aria-hidden="true" focusable="false">
      <circle cx="50" cy="50" r="15" fill="currentColor" />
      <g stroke="currentColor" strokeWidth="3" strokeLinecap="round">
        {lines}
      </g>
    </svg>
  );
}

/** Raggiera sottile senza disco centrale. */
export function Sunburst({ className, rays = 28 }: IconProps & { rays?: number }) {
  const lines = Array.from({ length: rays }, (_, i) => {
    const a = (i / rays) * Math.PI * 2;
    const inner = i % 2 === 0 ? 18 : 26;
    return (
      <line
        key={i}
        x1={100 + Math.cos(a) * inner}
        y1={100 + Math.sin(a) * inner}
        x2={100 + Math.cos(a) * 96}
        y2={100 + Math.sin(a) * 96}
      />
    );
  });
  return (
    <svg className={className} viewBox="0 0 200 200" aria-hidden="true" focusable="false">
      <circle cx="100" cy="100" r="11" fill="currentColor" />
      <g stroke="currentColor" strokeWidth="1.6" strokeLinecap="round">
        {lines}
      </g>
    </svg>
  );
}

/** Stellina a quattro punte. */
export function Sparkle({ className }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 24 24" aria-hidden="true" focusable="false">
      <path
        fill="currentColor"
        d="M12 0c.6 5.6 2.4 8.4 12 12-9.6 3.6-11.4 6.4-12 12-.6-5.6-2.4-8.4-12-12C9.6 8.4 11.4 5.6 12 0z"
      />
    </svg>
  );
}

/** Mezzo sole all'orizzonte, come nelle intestazioni del riferimento. */
export function Sunrise({ className }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 40 22" aria-hidden="true" focusable="false">
      <path d="M8 20a12 12 0 0 1 24 0z" fill="currentColor" />
      <g stroke="currentColor" strokeWidth="1.6" strokeLinecap="round">
        <line x1="20" y1="1" x2="20" y2="5" />
        <line x1="6.5" y1="6.5" x2="9.3" y2="9.3" />
        <line x1="33.5" y1="6.5" x2="30.7" y2="9.3" />
        <line x1="1" y1="20" x2="5" y2="20" />
        <line x1="35" y1="20" x2="39" y2="20" />
      </g>
    </svg>
  );
}

export function ArrowRight({ className }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 24 24" aria-hidden="true" focusable="false">
      <path d="M4 12h15m-6-6 6 6-6 6" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function ArrowUpRight({ className }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 24 24" aria-hidden="true" focusable="false">
      <path d="M7 17 17 7M8 7h9v9" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function Download({ className }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 24 24" aria-hidden="true" focusable="false">
      <path d="M12 4v11m-5-5 5 5 5-5M5 20h14" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function Pin({ className }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 24 24" aria-hidden="true" focusable="false">
      <path d="M12 21s-7-6.2-7-11.5a7 7 0 0 1 14 0C19 14.8 12 21 12 21z" fill="none" stroke="currentColor" strokeWidth="2" />
      <circle cx="12" cy="9.5" r="2.5" fill="currentColor" />
    </svg>
  );
}

export function Mail({ className }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 24 24" aria-hidden="true" focusable="false">
      <rect x="3" y="5" width="18" height="14" rx="2.5" fill="none" stroke="currentColor" strokeWidth="2" />
      <path d="m4 7 8 6 8-6" fill="none" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" />
    </svg>
  );
}

export function Phone({ className }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 24 24" aria-hidden="true" focusable="false">
      <path
        d="M6.6 3.5h2.6l1.4 4-1.9 1.3a11 11 0 0 0 6.5 6.5l1.3-1.9 4 1.4v2.6a2 2 0 0 1-2.2 2A16.5 16.5 0 0 1 4.6 5.7a2 2 0 0 1 2-2.2z"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function Close({ className }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 24 24" aria-hidden="true" focusable="false">
      <path d="M6 6l12 12M18 6 6 18" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" />
    </svg>
  );
}
