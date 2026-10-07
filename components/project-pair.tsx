import Image from "next/image";
import type { Project } from "@/lib/content";

/**
 * Case-study imagery as a labelled side-by-side pair.
 *
 * The two photographs are labelled factually — what each picture actually
 * shows — rather than implying a single-property before/after transformation,
 * because these demonstration pairings may show different properties.
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
      <div className="grid grid-cols-2 gap-px border border-line bg-line-strong">
        {panels.map((panel) => (
          <div key={panel.src} className="relative aspect-[4/3] w-full overflow-hidden bg-slate-deep">
            <Image
              src={panel.src}
              alt={panel.alt}
              fill
              sizes="(max-width: 640px) 50vw, (max-width: 1024px) 50vw, 560px"
              className="object-cover"
            />
            <span
              className={`absolute bottom-0 left-0 px-2.5 py-1 text-[0.68rem] font-bold uppercase tracking-[0.12em] ${
                panel.tone === "copper" ? "bg-copper/95 text-white" : "bg-ink/85 text-paper"
              }`}
            >
              {panel.label}
            </span>
          </div>
        ))}
      </div>
      <figcaption className="mt-3 text-[0.85rem] leading-relaxed text-slate-mid">
        {project.pairNote}
      </figcaption>
    </figure>
  );
}
