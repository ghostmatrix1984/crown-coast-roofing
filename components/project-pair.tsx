import Image from "next/image";
import type { Project } from "@/lib/content";

/**
 * Case-study imagery as a labelled before/after pair.
 *
 * The two photographs are labelled factually — what each picture actually
 * shows — rather than implying a single-property transformation, because these
 * demonstration pairings may show different properties. Panels stack on small
 * screens so each photograph stays large enough to read.
 */
export function ProjectPair({ project }: { project: Project }) {
  const panels = [
    {
      src: project.beforeImage,
      alt: project.beforeAlt,
      label: project.beforeLabel,
      tone: "ink" as const,
    },
    {
      src: project.afterImage,
      alt: project.afterAlt,
      label: project.afterLabel,
      tone: "copper" as const,
    },
  ];

  return (
    <figure className="m-0">
      <div className="grid gap-px border border-line bg-line-strong sm:grid-cols-2">
        {panels.map((panel) => (
          <div key={panel.src} className="relative aspect-[3/2] w-full overflow-hidden bg-[#e4dccf]">
            <Image
              src={panel.src}
              alt={panel.alt}
              fill
              loading="eager"
              sizes="(max-width: 640px) 100vw, 50vw"
              className="object-cover"
            />
            <span
              className={`absolute left-0 top-0 px-3 py-1.5 text-[0.72rem] font-bold uppercase tracking-[0.14em] ${
                panel.tone === "copper" ? "bg-copper text-white" : "bg-ink text-paper"
              }`}
            >
              {panel.label}
            </span>
          </div>
        ))}
      </div>
      <figcaption className="mt-3 text-[0.88rem] leading-relaxed text-slate-mid">
        {project.pairNote}
      </figcaption>
    </figure>
  );
}
