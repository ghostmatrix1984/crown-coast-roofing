/**
 * Line icons drawn to one visual system (24×24, 1.6 stroke, round caps).
 * Kept in-house rather than pulled from an icon package so the set stays
 * small, consistent and roofing-relevant.
 */

type IconProps = { className?: string };

function Svg({ className, children }: IconProps & { children: React.ReactNode }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.6}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      focusable="false"
      className={className ?? "h-6 w-6"}
    >
      {children}
    </svg>
  );
}

export function IconRepair(p: IconProps) {
  return (
    <Svg {...p}>
      <path d="M3 10.5 12 3l9 7.5" />
      <path d="M5.5 12.5v7h13v-7" />
      <path d="M9 19.5v-4.5h4.5l3.2-3.2" />
    </Svg>
  );
}

export function IconNewRoof(p: IconProps) {
  return (
    <Svg {...p}>
      <path d="M2.5 11 12 3.5 21.5 11" />
      <path d="M6 20.5h12" />
      <path d="M8 20.5v-4l4-3 4 3v4" />
    </Svg>
  );
}

export function IconSlate(p: IconProps) {
  return (
    <Svg {...p}>
      <path d="M4 6h16" />
      <path d="M4 6v5.5c0 1 0.8 1.8 1.8 1.8h12.4c1 0 1.8-0.8 1.8-1.8V6" />
      <path d="M7 13.3V17c0 1.1 0.9 2 2 2h6c1.1 0 2-0.9 2-2v-3.7" />
    </Svg>
  );
}

export function IconFlat(p: IconProps) {
  return (
    <Svg {...p}>
      <path d="M3 10h18" />
      <path d="M5 10v9h14v-9" />
      <path d="M3 10l1.5-3h15L21 10" />
      <path d="M8 14h8" />
    </Svg>
  );
}

export function IconChimney(p: IconProps) {
  return (
    <Svg {...p}>
      <path d="M3 12 12 5l9 7" />
      <path d="M14 8.5V4h3.5v7" />
      <path d="M5.5 12v8h13v-8" />
      <path d="M5.5 12.8c2 0.9 4 0.9 6 0s4-0.9 6 0" />
    </Svg>
  );
}

export function IconGutter(p: IconProps) {
  return (
    <Svg {...p}>
      <path d="M3 8.5h18" />
      <path d="M4.5 8.5V12h15V8.5" />
      <path d="M7 12v3.5c0 1.7 1.3 3 3 3h1.5" />
      <path d="M13 12v2.5" />
      <path d="M17.5 12v3.5" />
    </Svg>
  );
}

export function IconStorm(p: IconProps) {
  return (
    <Svg {...p}>
      <path d="M7 15.5a4 4 0 0 1 0.6-7.96 5.2 5.2 0 0 1 9.8 1.2A3.4 3.4 0 0 1 17 15.5" />
      <path d="M12.5 12.5 10 17h3l-1.5 3.5" />
      <path d="M4 18.5h3" />
      <path d="M17.5 18.5H20" />
    </Svg>
  );
}

export function IconPhone(p: IconProps) {
  return (
    <Svg {...p}>
      <path d="M6.5 3.5h3l1.5 4-2 1.5a12 12 0 0 0 6 6l1.5-2 4 1.5v3a2 2 0 0 1-2.2 2A16.5 16.5 0 0 1 4.5 5.7a2 2 0 0 1 2-2.2Z" />
    </Svg>
  );
}

export function IconMail(p: IconProps) {
  return (
    <Svg {...p}>
      <rect x="3" y="5.5" width="18" height="13" rx="1" />
      <path d="m3.5 7 8.5 6.5L20.5 7" />
    </Svg>
  );
}

export function IconArrowRight(p: IconProps) {
  return (
    <Svg {...p}>
      <path d="M4 12h15" />
      <path d="m13 6 6 6-6 6" />
    </Svg>
  );
}

export function IconCheck(p: IconProps) {
  return (
    <Svg {...p}>
      <path d="m4.5 12.5 5 5 10-11" />
    </Svg>
  );
}

export function IconCamera(p: IconProps) {
  return (
    <Svg {...p}>
      <path d="M4 8h3.5l1.7-2.5h5.6L16.5 8H20a1 1 0 0 1 1 1v9a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V9a1 1 0 0 1 1-1Z" />
      <circle cx="12" cy="13.5" r="3.5" />
    </Svg>
  );
}

export function IconShield(p: IconProps) {
  return (
    <Svg {...p}>
      <path d="M12 3.5 19 6v5.5c0 4.4-2.9 7.6-7 9-4.1-1.4-7-4.6-7-9V6Z" />
      <path d="m8.8 12 2.3 2.3 4.2-4.6" />
    </Svg>
  );
}

export function IconClock(p: IconProps) {
  return (
    <Svg {...p}>
      <circle cx="12" cy="12" r="8.5" />
      <path d="M12 7.5V12l3 2" />
    </Svg>
  );
}

export function IconPin(p: IconProps) {
  return (
    <Svg {...p}>
      <path d="M12 21s6.5-5.4 6.5-10.2A6.5 6.5 0 0 0 5.5 10.8C5.5 15.6 12 21 12 21Z" />
      <circle cx="12" cy="10.5" r="2.4" />
    </Svg>
  );
}

export function IconMenu(p: IconProps) {
  return (
    <Svg {...p}>
      <path d="M4 7h16" />
      <path d="M4 12h16" />
      <path d="M4 17h16" />
    </Svg>
  );
}

export function IconClose(p: IconProps) {
  return (
    <Svg {...p}>
      <path d="m6 6 12 12" />
      <path d="m18 6-12 12" />
    </Svg>
  );
}

export const serviceIcons = {
  repair: IconRepair,
  newroof: IconNewRoof,
  slate: IconSlate,
  flat: IconFlat,
  chimney: IconChimney,
  gutter: IconGutter,
  storm: IconStorm,
} as const;
