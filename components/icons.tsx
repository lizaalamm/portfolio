import type { SVGProps } from "react";

type BaseProps = SVGProps<SVGSVGElement> & { size?: number };

function Svg({ size = 18, children, strokeWidth = 1.6, ...rest }: BaseProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      focusable="false"
      {...rest}
    >
      {children}
    </svg>
  );
}

/* ── Skill group icons ───────────────────────────────────────────────────── */
export const IconCode = (p: BaseProps) => (
  <Svg {...p}>
    <path d="m9 18-6-6 6-6" />
    <path d="m15 6 6 6-6 6" />
  </Svg>
);

export const IconLayers = (p: BaseProps) => (
  <Svg {...p}>
    <path d="m12 2 9 5-9 5-9-5 9-5Z" />
    <path d="m3 12 9 5 9-5" />
    <path d="m3 17 9 5 9-5" />
  </Svg>
);

export const IconServer = (p: BaseProps) => (
  <Svg {...p}>
    <rect x="3" y="3" width="18" height="7" rx="2" />
    <rect x="3" y="14" width="18" height="7" rx="2" />
    <path d="M7 6.5h.01M7 17.5h.01" />
  </Svg>
);

export const IconDatabase = (p: BaseProps) => (
  <Svg {...p}>
    <ellipse cx="12" cy="5.5" rx="8" ry="3" />
    <path d="M4 5.5v13c0 1.7 3.6 3 8 3s8-1.3 8-3v-13" />
    <path d="M4 12c0 1.7 3.6 3 8 3s8-1.3 8-3" />
  </Svg>
);

export const IconSparkles = (p: BaseProps) => (
  <Svg {...p}>
    <path d="M12 3v4M12 17v4M5.5 5.5l2.5 2.5M16 16l2.5 2.5M3 12h4M17 12h4M5.5 18.5 8 16M16 8l2.5-2.5" />
    <circle cx="12" cy="12" r="2.4" />
  </Svg>
);

export const IconShield = (p: BaseProps) => (
  <Svg {...p}>
    <path d="M12 3l7 3v5.5c0 4.4-2.9 8.1-7 9.5-4.1-1.4-7-5.1-7-9.5V6l7-3Z" />
    <path d="m9 12 2 2 4-4" />
  </Svg>
);

export const IconTerminal = (p: BaseProps) => (
  <Svg {...p}>
    <rect x="2.5" y="4" width="19" height="16" rx="2.5" />
    <path d="m7 10 2 2-2 2M12.5 14h4" />
  </Svg>
);

/* ── UI icons ────────────────────────────────────────────────────────────── */
export const IconArrowDown = (p: BaseProps) => (
  <Svg {...p}>
    <path d="M12 5v14" />
    <path d="m6 13 6 6 6-6" />
  </Svg>
);

export const IconArrowRight = (p: BaseProps) => (
  <Svg {...p}>
    <path d="M5 12h14" />
    <path d="m13 6 6 6-6 6" />
  </Svg>
);

export const IconArrowUpRight = (p: BaseProps) => (
  <Svg {...p}>
    <path d="M7 17 17 7" />
    <path d="M8 7h9v9" />
  </Svg>
);

export const IconMapPin = (p: BaseProps) => (
  <Svg {...p}>
    <path d="M12 21s7-5.7 7-11a7 7 0 1 0-14 0c0 5.3 7 11 7 11Z" />
    <circle cx="12" cy="10" r="2.5" />
  </Svg>
);

export const IconMail = (p: BaseProps) => (
  <Svg {...p}>
    <rect x="3" y="5" width="18" height="14" rx="2.5" />
    <path d="m4 7 8 6 8-6" />
  </Svg>
);

export const IconGithub = ({ size = 18, ...rest }: BaseProps) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...rest}>
    <path d="M12 2C6.475 2 2 6.475 2 12c0 4.42 2.865 8.166 6.839 9.489.5.092.682-.217.682-.482 0-.237-.008-.866-.013-1.7-2.782.603-3.369-1.342-3.369-1.342-.454-1.155-1.11-1.463-1.11-1.463-.908-.62.068-.608.068-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.831.091-.654.349-1.087.635-1.338-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.03-2.683-.104-.253-.446-1.272.098-2.65 0 0 .84-.269 2.75 1.025A9.58 9.58 0 0 1 12 6.844c.85.004 1.705.115 2.504.337 1.909-1.294 2.748-1.025 2.748-1.025.545 1.378.203 2.397.1 2.65.64.699 1.03 1.592 1.03 2.683 0 3.842-2.339 4.687-4.566 4.935.359.31.678.918.678 1.852 0 1.337-.012 2.416-.012 2.744 0 .267.18.579.688.481C19.138 20.163 22 16.418 22 12c0-5.525-4.475-10-10-10Z" />
  </svg>
);

export const IconLinkedin = ({ size = 18, ...rest }: BaseProps) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...rest}>
    <path d="M4.98 3.5a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5ZM3 9h4v12H3V9Zm7 0h3.8v1.7h.06c.53-.95 1.83-1.95 3.77-1.95 3.4 0 4.37 2.1 4.37 5.2V21h-4v-5.6c0-1.4-.5-2.35-1.75-2.35-1.06 0-1.7.71-1.98 1.4-.1.24-.13.58-.13.92V21h-4V9Z" />
  </svg>
);

export const IconDownload = (p: BaseProps) => (
  <Svg {...p}>
    <path d="M12 3v12" />
    <path d="m7 11 5 5 5-5" />
    <path d="M4 20h16" />
  </Svg>
);

export const IconBriefcase = (p: BaseProps) => (
  <Svg {...p}>
    <rect x="2.5" y="7" width="19" height="13" rx="2.5" />
    <path d="M9 7V5.5A1.5 1.5 0 0 1 10.5 4h3A1.5 1.5 0 0 1 15 5.5V7" />
    <path d="M2.5 12.5h19" />
  </Svg>
);

export const IconClock = (p: BaseProps) => (
  <Svg {...p}>
    <circle cx="12" cy="12" r="9" />
    <path d="M12 7.5V12l3 2" />
  </Svg>
);

export const IconGlobe = (p: BaseProps) => (
  <Svg {...p}>
    <circle cx="12" cy="12" r="9" />
    <path d="M3.5 9h17M3.5 15h17" />
    <path d="M12 3c2.5 2.6 3.7 5.6 3.7 9S14.5 18.4 12 21c-2.5-2.6-3.7-5.6-3.7-9S9.5 5.6 12 3Z" />
  </Svg>
);

export const IconZap = (p: BaseProps) => (
  <Svg {...p}>
    <path d="M13 2 4.5 13.5H11l-1 8.5L19 10.5h-6.5L13 2Z" />
  </Svg>
);

export const IconChevron = (p: BaseProps) => (
  <Svg {...p}>
    <path d="m6 9 6 6 6-6" />
  </Svg>
);

export const IconPlus = (p: BaseProps) => (
  <Svg {...p}>
    <path d="M12 5v14M5 12h14" />
  </Svg>
);

export const IconCheck = (p: BaseProps) => (
  <Svg {...p}>
    <path d="m5 13 4 4L19 7" />
  </Svg>
);

export const IconCopy = (p: BaseProps) => (
  <Svg {...p}>
    <rect x="9" y="9" width="11" height="11" rx="2" />
    <path d="M15 9V6a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v7a2 2 0 0 0 2 2h3" />
  </Svg>
);

export const IconMenu = (p: BaseProps) => (
  <Svg {...p}>
    <path d="M4 7h16M4 12h16M4 17h16" />
  </Svg>
);

export const IconClose = (p: BaseProps) => (
  <Svg {...p}>
    <path d="M6 6l12 12M18 6 6 18" />
  </Svg>
);

export const IconFlow = (p: BaseProps) => (
  <Svg {...p}>
    <rect x="3" y="3" width="6" height="6" rx="1.5" />
    <rect x="15" y="15" width="6" height="6" rx="1.5" />
    <path d="M6 9v4a2 2 0 0 0 2 2h7" />
    <path d="M18 10.5V4.5" />
  </Svg>
);
