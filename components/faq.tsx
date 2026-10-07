import type { Faq } from "@/lib/content";

/**
 * FAQ accordion built on native <details>/<summary>: keyboard accessible and
 * functional without JavaScript.
 */
export function FaqList({ faqs }: { faqs: readonly Faq[] }) {
  return (
    <div className="divide-y divide-line border-y border-line">
      {faqs.map((faq) => (
        <details key={faq.q} className="group">
          <summary className="flex min-h-14 items-center justify-between gap-6 py-5 text-left">
            <span className="font-display text-lg leading-snug sm:text-xl">{faq.q}</span>
            <span
              aria-hidden="true"
              className="faq-sign flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-line-strong text-lg leading-none text-copper-deep"
            >
              +
            </span>
          </summary>
          <p className="max-w-3xl pb-6 pr-12 leading-relaxed text-slate-mid">{faq.a}</p>
        </details>
      ))}
    </div>
  );
}
