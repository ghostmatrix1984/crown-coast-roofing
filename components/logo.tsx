import { site } from "@/lib/site";

/**
 * Brand mark: a crown set over a gable, above two courses of hanging tiles.
 * Drawn inline so it stays crisp at any size and inherits currentColor.
 */
export function LogoMark({ className = "h-9 w-9" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 40 40"
      fill="none"
      aria-hidden="true"
      focusable="false"
      className={className}
    >
      {/* crown */}
      <path
        d="M14 9.5 17 6l3 3.5L23 6l3 3.5"
        stroke="currentColor"
        strokeWidth={2.2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      {/* gable */}
      <path
        d="M4 26 20 13l16 13"
        stroke="currentColor"
        strokeWidth={2.6}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      {/* tile courses */}
      <path
        d="M5 30.5a3.75 3.75 0 0 0 7.5 0 3.75 3.75 0 0 0 7.5 0 3.75 3.75 0 0 0 7.5 0 3.75 3.75 0 0 0 7.5 0"
        stroke="currentColor"
        strokeWidth={1.8}
        strokeLinecap="round"
        opacity={0.55}
      />
      <path
        d="M5 35.5a3.75 3.75 0 0 0 7.5 0 3.75 3.75 0 0 0 7.5 0 3.75 3.75 0 0 0 7.5 0 3.75 3.75 0 0 0 7.5 0"
        stroke="currentColor"
        strokeWidth={1.8}
        strokeLinecap="round"
        opacity={0.3}
      />
    </svg>
  );
}

export function Wordmark({ tone = "dark" }: { tone?: "dark" | "light" }) {
  return (
    <span className="flex items-center gap-2">
      <LogoMark
        className={
          tone === "light"
            ? "h-7 w-7 text-copper-mist sm:h-9 sm:w-9"
            : "h-7 w-7 text-copper sm:h-9 sm:w-9"
        }
      />
      <span className="leading-none">
        <span
          className={`block font-display text-[0.95rem] font-semibold tracking-tight sm:text-xl ${
            tone === "light" ? "text-paper" : "text-ink"
          }`}
        >
          {site.name}
        </span>
        <span
          className={`mt-1 block text-[0.62rem] font-semibold uppercase tracking-[0.14em] sm:text-[0.68rem] sm:tracking-[0.16em] ${
            tone === "light" ? "text-copper-mist" : "text-slate-mid"
          }`}
        >
          East Kent roofers
        </span>
      </span>
    </span>
  );
}
