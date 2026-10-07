"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { navLinks, site } from "@/lib/site";
import { Wordmark } from "./logo";
import { IconClose, IconMenu, IconPhone } from "./icons";

export function SiteHeader() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  // Close the drawer when focus moves on (link clicks) or Escape is pressed,
  // and hold page scroll while it is open.
  useEffect(() => {
    function onKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") setOpen(false);
    }
    document.addEventListener("keydown", onKeyDown);
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      <a
        href="#main"
        className="sr-only-focusable z-[60] bg-ink px-4 py-2 text-sm font-semibold text-paper"
      >
        Skip to main content
      </a>
      <header className="sticky top-0 z-50 border-b border-line bg-canvas/95 backdrop-blur-sm">
        <div className="mx-auto flex w-full max-w-[80rem] items-center justify-between gap-2 px-4 py-3 min-[2560px]:max-w-[110rem] sm:gap-4 sm:px-8">
          <Link href="/" aria-label={`${site.name} — home`} className="shrink-0">
            <Wordmark />
          </Link>

          <nav aria-label="Primary" className="hidden lg:block">
            <ul className="flex items-center gap-5 xl:gap-7">
              {navLinks.map((link) => {
                const active = pathname === link.href;
                return (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      aria-current={active ? "page" : undefined}
                      className={`relative inline-flex min-h-11 items-center whitespace-nowrap text-[0.95rem] font-medium tracking-tight transition-colors hover:text-copper-deep ${
                        active ? "text-copper-deep" : "text-ink-soft"
                      }`}
                    >
                      {link.label}
                      <span
                        aria-hidden="true"
                        className={`absolute inset-x-0 -bottom-0.5 h-[2px] bg-copper transition-transform duration-150 ${
                          active ? "scale-x-100" : "scale-x-0"
                        }`}
                      />
                    </Link>
                  </li>
                );
              })}
            </ul>
          </nav>

          <div className="flex items-center gap-1.5 sm:gap-3">
            <a
              href={site.phoneHref}
              className="hidden min-h-11 items-center gap-2 whitespace-nowrap rounded-[2px] border border-line-strong px-4 text-sm font-semibold tracking-tight text-ink transition-colors hover:border-ink md:inline-flex"
            >
              <IconPhone className="h-4 w-4 text-copper" />
              {site.phoneDisplay}
            </a>
            <Link
              href="/contact#quote"
              className="hidden min-h-11 items-center whitespace-nowrap rounded-[2px] bg-copper px-5 py-2.5 text-sm font-semibold tracking-tight text-white transition-colors hover:bg-copper-deep sm:inline-flex"
            >
              Get a free quote
            </Link>

            <a
              href={site.phoneHref}
              aria-label={`Call ${site.name} on ${site.phoneDisplay}`}
              className="inline-flex h-11 w-11 items-center justify-center rounded-[2px] bg-copper text-white sm:h-12 sm:w-12 sm:hidden"
            >
              <IconPhone className="h-5 w-5" />
            </a>
            <button
              type="button"
              onClick={() => setOpen((v) => !v)}
              aria-expanded={open}
              aria-controls="mobile-menu"
              aria-label={open ? "Close menu" : "Open menu"}
              className="inline-flex h-11 w-11 items-center justify-center rounded-[2px] border border-line-strong text-ink sm:h-12 sm:w-12 lg:hidden"
            >
              {open ? <IconClose className="h-5 w-5" /> : <IconMenu className="h-5 w-5" />}
            </button>
          </div>
        </div>

        <div
          id="mobile-menu"
          hidden={!open}
          className="border-t border-line bg-ink text-paper lg:hidden"
        >
          <nav aria-label="Mobile" className="mx-auto w-full max-w-[80rem] px-5 py-4 min-[2560px]:max-w-[110rem] sm:px-8">
            <ul className="divide-y divide-white/10">
              {navLinks.map((link) => {
                const active = pathname === link.href;
                return (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      onClick={() => setOpen(false)}
                      aria-current={active ? "page" : undefined}
                      className={`flex min-h-14 items-center justify-between py-3 text-lg font-medium tracking-tight ${
                        active ? "text-copper-mist" : "text-paper"
                      }`}
                    >
                      {link.label}
                      <span aria-hidden="true" className="text-copper-mist">
                        →
                      </span>
                    </Link>
                  </li>
                );
              })}
            </ul>
            <div className="mt-5 flex flex-col gap-3 pb-2">
              <Link
                href="/contact#quote"
                onClick={() => setOpen(false)}
                className="flex min-h-12 items-center justify-center rounded-[2px] bg-copper px-5 py-3 text-base font-semibold text-white"
              >
                Get a free quote
              </Link>
              <a
                href={site.phoneHref}
                className="flex min-h-12 items-center justify-center gap-2 rounded-[2px] border border-white/40 px-5 py-3 text-base font-semibold text-paper"
              >
                <IconPhone className="h-4 w-4" />
                Call {site.phoneDisplay}
              </a>
            </div>
          </nav>
        </div>
      </header>
    </>
  );
}
