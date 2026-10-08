import Link from "next/link";
import type { ReactNode } from "react";
import { site } from "@/lib/site";

export function Container({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <div
      className={`mx-auto w-full max-w-[80rem] px-5 min-[2560px]:max-w-[110rem] sm:px-8 ${className}`}
    >
      {children}
    </div>
  );
}

export function Section({
  children,
  tone = "canvas",
  className = "",
  id,
}: {
  children: ReactNode;
  tone?: "canvas" | "paper" | "dark";
  className?: string;
  id?: string;
}) {
  const tones = {
    canvas: "bg-canvas text-ink",
    paper: "bg-paper text-ink",
    dark: "stripe-dark roof-texture",
  } as const;
  return (
    <section id={id} className={`${tones[tone]} py-12 sm:py-16 lg:py-20 ${className}`}>
      {children}
    </section>
  );
}

export function Kicker({ children, light = false }: { children: ReactNode; light?: boolean }) {
  return <p className={`kicker ${light ? "kicker-light" : ""}`}>{children}</p>;
}

export function SectionHeading({
  kicker,
  title,
  lede,
  light = false,
  className = "",
}: {
  kicker?: string;
  title: string;
  lede?: string;
  light?: boolean;
  className?: string;
}) {
  return (
    <div className={`max-w-3xl ${className}`}>
      {kicker ? <Kicker light={light}>{kicker}</Kicker> : null}
      <h2
        className={`mt-4 font-display text-3xl leading-tight sm:text-4xl lg:text-[2.75rem] ${
          light ? "text-paper" : "text-ink"
        }`}
      >
        {title}
      </h2>
      {lede ? (
        <p className={`mt-4 text-lg leading-relaxed ${light ? "text-copper-mist" : "text-slate-mid"}`}>
          {lede}
        </p>
      ) : null}
    </div>
  );
}

const buttonBase =
  "inline-flex min-h-12 items-center justify-center gap-2 rounded-[2px] px-6 py-3 text-base font-semibold tracking-tight transition-colors duration-150";

const buttonVariants = {
  copper: "bg-copper text-white hover:bg-copper-deep",
  outline: "border border-ink text-ink hover:bg-ink hover:text-paper",
  "outline-light": "border border-paper/60 text-paper hover:bg-paper hover:text-ink",
} as const;

export function ButtonLink({
  href,
  variant = "copper",
  children,
  className = "",
}: {
  href: string;
  variant?: keyof typeof buttonVariants;
  children: ReactNode;
  className?: string;
}) {
  return (
    <Link href={href} className={`${buttonBase} ${buttonVariants[variant]} ${className}`}>
      {children}
    </Link>
  );
}

/** A course of hanging tiles used as a seam between sections. */
export function TileCourse({ flip = false }: { flip?: boolean }) {
  return <div aria-hidden="true" className={`tile-course ${flip ? "tile-course-flip" : ""}`} />;
}

/** Small, honest label used wherever content is demonstration material. */
export function DemoNote({ children }: { children: ReactNode }) {
  return (
    <p className="flex w-fit max-w-3xl items-start gap-2 border-l-2 border-copper bg-[#f7ede4] px-3 py-2 text-left text-[0.8rem] font-medium leading-snug text-ink-soft">
      <span className="mt-[0.15rem] shrink-0 text-[0.65rem] font-bold uppercase tracking-[0.14em] text-copper-deep">
        Demo
      </span>
      <span>{children}</span>
    </p>
  );
}

export function CheckItem({ children }: { children: ReactNode }) {
  return (
    <li className="flex gap-3 text-[1.02rem] leading-relaxed">
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
        className="mt-1.5 h-4 w-4 shrink-0 text-copper"
      >
        <path d="m4.5 12.5 5 5 10-11" />
      </svg>
      <span>{children}</span>
    </li>
  );
}

/**
 * The contact email with a soft break opportunity after the @ so it wraps
 * cleanly in narrow columns without tearing the domain apart.
 */
export function EmailText() {
  const [local, domain] = site.email.split("@");
  return (
    <>
      {local}@
      <wbr />
      {domain}
    </>
  );
}
