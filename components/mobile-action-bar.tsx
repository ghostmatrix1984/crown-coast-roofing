import Link from "next/link";
import { site } from "@/lib/site";
import { IconPhone } from "./icons";

/**
 * Persistent mobile action bar — the two things a visitor with a leaking roof
 * actually wants: call now, or ask for a quote.
 */
export function MobileActionBar() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-40 border-t border-line bg-paper/97 pb-[env(safe-area-inset-bottom)] backdrop-blur md:hidden">
      <div className="grid grid-cols-2 gap-2 p-2">
        <a
          href={site.phoneHref}
          className="inline-flex min-h-12 items-center justify-center gap-2 rounded-[2px] border border-ink px-3 text-[0.95rem] font-semibold tracking-tight text-ink"
        >
          <IconPhone className="h-4 w-4" />
          Call now
        </a>
        <Link
          href="/contact#quote"
          className="inline-flex min-h-12 items-center justify-center rounded-[2px] bg-copper px-3 text-[0.95rem] font-semibold tracking-tight text-white"
        >
          Free quote
        </Link>
      </div>
    </div>
  );
}
