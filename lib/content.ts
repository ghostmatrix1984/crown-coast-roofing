/**
 * Page content for Crown & Coast Roofing.
 *
 * All copy is demonstration content for a fictional business. Structured here
 * (rather than hard-coded in components) so a CMS or database can replace this
 * module later without touching the UI.
 */

export type Service = {
  slug: string;
  name: string;
  shortName: string;
  summary: string;
  icon: "repair" | "newroof" | "slate" | "flat" | "chimney" | "gutter" | "storm";
  image: string;
  imageAlt: string;
  /** Tailwind object-position value, e.g. "50% 82%", for tight crops. */
  imagePosition?: string;
  intro: string[];
  includes: string[];
  warningSigns: string[];
  faqs: { q: string; a: string }[];
};

export const services: Service[] = [
  {
    slug: "roof-repairs-leak-detection",
    name: "Roof repairs & leak detection",
    shortName: "Roof repairs & leaks",
    summary:
      "Leaks traced to their cause, slipped tiles and failed flashings fixed — with photographs of what we found.",
    icon: "repair",
    image: "/images/service-repairs.jpg",
    imageAlt: "Roof stripped back for repair on a stone cottage, with new timbers and underlay exposed",
    intro: [
      "Most roof leaks are not where the stain appears. Water travels along rafters, battens and ceilings before it shows itself indoors, which is why we trace a leak from the inside out and the top down before lifting a single tile.",
      "Once we have found the cause, most repairs are straightforward: replacing broken or slipped tiles and slates, re-bedding ridges, renewing lead flashings, resealing verges, or clearing and re-aligning gutters that have been pushing water back into the eaves. You get photographs of the fault, the repair and the finished work.",
    ],
    includes: [
      "Leak tracing from the inside out, with photographs of the cause",
      "Replacement of broken, slipped or missing tiles and slates",
      "Ridge and hip re-bedding and repointing",
      "Valley, abutment and flashing repairs",
      "Verge and bargeboard repairs on wind-exposed elevations",
      "Emergency make-safe work, with the permanent repair priced afterwards",
    ],
    warningSigns: [
      "Brown stains or paint bubbling on ceilings, often away from the actual leak",
      "Damp or black spotting in loft corners, around a chimney breast or in a bay",
      "Tiles or slates in the gutter, or visible gaps in the roof slope after wind",
      "A musty smell in the loft or a cold spot on a bedroom ceiling",
      "Water tracking down a chimney breast or around a roof window after driving rain",
    ],
    faqs: [
      {
        q: "How quickly can you deal with a leak?",
        a: "Active leaks are treated as urgent. We aim to make the roof watertight quickly — often with a temporary repair or sheeting in bad weather — then price the permanent repair in writing once the roof is dry enough to inspect properly.",
      },
      {
        q: "Will a repair fix the problem permanently?",
        a: "If the rest of the roof has life left in it, yes. We only recommend a repair when it will hold. If a repair would be money spent twice, we will say so and show you why.",
      },
      {
        q: "Can you find a leak without taking the roof apart?",
        a: "Usually. We start inside the loft with a torch and moisture readings, then inspect the slopes, ridges, valleys, flashings and penetrations above the stain. Most causes are visible from the roof or the loft without any demolition.",
      },
    ],
  },
  {
    slug: "new-roofs-roof-replacement",
    name: "New roofs & complete roof replacement",
    shortName: "New roofs & re-roofs",
    summary:
      "Complete re-roofs in slate or tile: stripped, ventilated, insulated and detailed to current standards.",
    icon: "newroof",
    image: "/images/service-new-roof.jpg",
    imageAlt: "Roofer fixing a new clay pantile onto the battens of a new roof",
    intro: [
      "A re-roof is a once-in-a-generation job, so it is worth doing in the right order: scaffold and weather protection first, then strip, then inspect and replace any soft or split timber, then battens, underlay, ventilation, tiling and all the finishing details at the ridges, verges and abutments.",
      "We specify the covering for the building, not for the price sheet. Kentish peg tiles and plain tiles on older homes, natural slate where the house calls for it, and good quality interlocking tiles where they suit the pitch and the street. Your written quote itemises the work so you can see exactly what you are paying for.",
    ],
    includes: [
      "Scaffolding, edge protection and waste removal arranged as part of the job",
      "Full strip and inspection, with timber replacement priced before it happens",
      "Breathable underlay, counter-battens and treated battens to current practice",
      "Natural slate, plain tile, peg tile and concrete or clay interlocking tile roofs",
      "Dry ridge, dry verge and modern ventilation detailing",
      "Loft insulation topped up while the roof is open, where access allows",
    ],
    warningSigns: [
      "The roof has needed repeated repairs in different places within a couple of winters",
      "Tiles are pitted, delaminating or losing their surface and cannot be matched",
      "Ridge tiles are cracking and the bedding is crumbling across long runs",
      "Daylight visible through the boards into the loft",
      "The roof covering is at the end of its service life and you are planning to stay long-term",
    ],
    faqs: [
      {
        q: "How long does a re-roof take?",
        a: "Most house re-roofs run from about a week to two or three weeks on site, depending on size, access, weather and how much timber needs replacing. We agree a programme with you before we start and tell you straight away if the weather changes it.",
      },
      {
        q: "Can we stay in the house while the roof is being replaced?",
        a: "Almost always yes. We work so the house is made weatherproof at the end of every working day, and we sheet lofts and protect landing areas to keep dust down.",
      },
      {
        q: "What happens to the old tiles and rubbish?",
        a: "All waste is removed and disposed of properly as part of the quoted price. Reclaimed tiles and slates are set aside for you if you want to keep them.",
      },
    ],
  },
  {
    slug: "pitched-tiled-slate-roofing",
    name: "Pitched, tiled & slate roofing",
    shortName: "Pitched, tiled & slate",
    summary:
      "Kentish peg tiles, plain tiles and natural slate — laid, matched and fixed for the pitch and exposure.",
    icon: "slate",
    image: "/images/service-slate.jpg",
    imageAlt: "Detail of a natural slate roof with a slate-hung gable and dressed ridge",
    intro: [
      "East Kent is full of pitched roofs that need a sympathetic hand: peg tile and plain tile roofs on cottages and terraces, natural slate on Victorian and Edwardian homes, and modern interlocking tiles on later estates. Each behaves differently in wind and rain, and each is detailed differently at the ridges, verges and valleys.",
      "Whether we are repairing a handful of storm-lost tiles or re-covering a whole slope, matching matters. We source tiles and slates that sit properly with what is already on the roof, including reclaimed stock for older properties, and we fix to the exposure of the site rather than to a generic rule of thumb.",
    ],
    includes: [
      "Natural slate roofing and repairs, including reclaimed slate matching",
      "Kentish peg tile and plain tile work on period and listed-adjacent homes",
      "Concrete and clay interlocking tile roofing on modern properties",
      "Correct nailing and clipping for pitch and exposure — seafront and hilltop included",
      "Hip, ridge and bonnet hip detailing, dry or traditional as the building needs",
      "Lead and dry valleys, abutments and stepped flashings",
    ],
    warningSigns: [
      "Individual tiles or slates lifting, rattling or missing after easterly or southerly winds",
      "Ridge or hip lines that are visibly uneven, cracked or losing mortar",
      "Patches of moss and lichen holding moisture and lifting tiles out of plane",
      "Matching tiles that keep being replaced with the wrong profile or colour",
      "No visible fixings on slate roofs laid to a low pitch or on exposed plots",
    ],
    faqs: [
      {
        q: "Can you match my existing tiles or slates?",
        a: "Often exactly, and always closely. We work with reclaimed Kentish peg tiles, plain tiles and natural slates from stockists across the South East, and we set out a sample against your roof before ordering so you can see the match in daylight.",
      },
      {
        q: "Do you work on period and conservation-area properties?",
        a: "Yes. We will follow the existing detail on period homes, and where planning permission or listed building consent is likely to be needed we will tell you honestly at the start rather than after the scaffold goes up.",
      },
    ],
  },
  {
    slug: "flat-roofing",
    name: "Flat roofing",
    shortName: "Flat roofing",
    summary:
      "EPDM, GRP and high-performance felt for garages, bays and extensions — drained, trimmed and insulated properly.",
    icon: "flat",
    image: "/images/service-flat-roof.jpg",
    imageAlt: "Finished membrane flat roof with parapet coping and clean edge detail, seen from above",
    imagePosition: "50% 82%",
    intro: [
      "Flat roofs fail at the details, not in the middle. Where a covering meets a wall, a doorway, a parapet or a gutter, that is where water gets in — which is why we spend our time on upstands, falls, trims and outlets rather than on the felt itself.",
      "We supply and fit single-ply EPDM, GRP fibreglass and modern reinforced felt systems, and we will recommend the one that suits the size, the use and the budget of your roof. Every flat roof we cover gets the correct falls to drainage, and insulation upgraded where the construction allows.",
    ],
    includes: [
      "EPDM single-ply, GRP fibreglass and high-performance felt systems",
      "Garage roofs, bay roofs, porches, dormers, kitchen extensions and outbuildings",
      "Tapered insulation and falls to outlets where the build-up allows",
      "Upstands, trims, edge details and abutment flashings done properly",
      "Parapet, copings and box gutter work alongside flat roof renewal",
      "Old covering stripped and disposed of, with decking inspected and replaced where soft",
    ],
    warningSigns: [
      "A flat roof that ponds water for days after rain",
      "Blisters, splits or lifted seams in felt, or a fibreglass surface that has cracked",
      "Water staining on the ceiling of a bay, garage or single-storey room below",
      "A heavy, spongy feel underfoot when the roof is inspected from above",
      "Cold bridging and condensation in the room below in winter",
    ],
    faqs: [
      {
        q: "Which flat roof covering is best?",
        a: "It depends on the roof. EPDM is excellent on larger, simpler roofs; GRP gives a hard, seamless finish on smaller roofs with plenty of detail; modern felt is quick, tidy and economical. We quote at least one alternative so you can compare like for like.",
      },
      {
        q: "How long does a flat roof replacement take?",
        a: "Most garage and bay roofs are one to three days on site, and larger extension roofs a little longer. Weather matters — we will not lay a system in conditions that compromise it.",
      },
      {
        q: "Can a flat roof be insulated at the same time?",
        a: "Yes, where the build-up allows. Adding insulation while the covering is off is the cheapest moment to do it and can make the room below noticeably warmer.",
      },
    ],
  },
  {
    slug: "chimney-repairs-leadwork",
    name: "Chimney repairs & leadwork",
    shortName: "Chimneys & leadwork",
    summary:
      "Stacks, flaunchings and pots repointed and rebuilt, with new lead dressed to keep the joint watertight.",
    icon: "chimney",
    image: "/images/service-chimney.jpg",
    imageAlt: "Brick chimney stack with new stepped lead flashings dressed into the tile courses",
    intro: [
      "A chimney is the most exposed part of the building and the most common cause of a persistent leak. Rain finds the flaunching, the mortar joints, the pot seating and — nine times out of ten — the lead flashing where the stack meets the roof covering.",
      "We repoint and rebuild stacks in the right mortar, renew flaunchings and pots, and dress new lead flashings so water is shed away from the joint rather than into it. We also take on soot doors, cowlings and disused flues that need making permanently weatherproof.",
    ],
    includes: [
      "Stack repointing and partial or full rebuilds in lime or cement mortar to suit",
      "Flaunching renewal and replacement chimney pots and cowls",
      "Step and cover flashings, lead soakers and secret gutters dressed on site",
      "Chase work to brickwork or stone, with lead wedges and copper clips",
      "Disused flues capped and ventilated, soot doors made good",
      "Bird guards and nest clearance where a stack is blocked or noisy",
    ],
    warningSigns: [
      "Damp patches on chimney breasts or in the loft beside the stack",
      "Mortar missing from stack joints, or flaunching cracked around the pots",
      "Lead flashing lifted, split, or pulled away from the chase",
      "Water tracking past a disused flue after rain or snow",
      "Debris, soot or nesting material in the hearth or on the hearth opening",
    ],
    faqs: [
      {
        q: "Does flashing really need to be lead?",
        a: "Lead remains the standard material for good reason: it dresses into details other materials cannot and it lasts for decades. Alternatives exist and we fit them where lead is unsuitable, but on a traditional Kentish roof, properly dressed lead is the right answer.",
      },
      {
        q: "My chimney is disused — can you just make it watertight?",
        a: "Yes. The usual approach is a ventilated capping, a renewed flaunching and a check of the flashings, so the stack stays sound and dry without the cost of a rebuild.",
      },
    ],
  },
  {
    slug: "fascias-soffits-guttering",
    name: "Fascias, soffits & guttering",
    shortName: "Fascias, soffits & gutters",
    summary:
      "Timber repairs and full roofline replacement, plus gutters cleared, re-aligned and renewed.",
    icon: "gutter",
    image: "/images/service-gutters.jpg",
    imageAlt: "Lead valley and parapet gutter with a cast-iron downpipe on a slate roof",
    intro: [
      "Water damage at the eaves is slow and expensive. Fascias that hold moisture, soffits that are never ventilated and gutters that pitch the wrong way all push water back into the roof timbers — usually unnoticed until the boards rot.",
      "We repair and decorate traditional timber rooflines and fit full replacement roofline systems in low-maintenance uPVC or aluminium. Gutters are re-aligned to proper falls on the way through, because a straight-looking gutter that holds water is still a failed gutter.",
    ],
    includes: [
      "Timber fascia and soffit repair, splicing and decoration",
      "Full uPVC or aluminium roofline replacement with ventilation to the eaves",
      "Bargeboards, eaves boards, dry verges and eaves felt repairs",
      "Gutter clearance, re-alignment to correct falls and new running outlets",
      "uPVC, cast iron effect and half-round or ogee guttering systems",
      "Downpipe replacement and rainwater diverted away from the walls",
    ],
    warningSigns: [
      "Paint peeling or timber softening along the eaves line",
      "Gutters overflowing in light rain, or holding standing water along runs",
      "Black staining or algae on the fascias below the drip line",
      "Birds or wasps in the eaves — often a gap where soffits have come away",
      "Ceiling stains at the edges of upstairs rooms after wind-blown rain",
    ],
    faqs: [
      {
        q: "Should rotten fascias be repaired or replaced?",
        a: "If the timber is sound in most of the run, repairing and painting is sensible value. Where the board has softened along its length, replacing it — usually with a longer-lasting material — is cheaper over the following decade.",
      },
      {
        q: "Do you clear gutters on their own as a small job?",
        a: "Yes, and we will look over the roofline and the first course of tiles while we are up there and tell you what we see, at no extra cost.",
      },
    ],
  },
  {
    slug: "storm-emergency-roof-repairs",
    name: "Storm & emergency roof repairs",
    shortName: "Storm & emergency",
    summary:
      "After a gale we make the roof safe first, then price the permanent repair in daylight.",
    icon: "storm",
    image: "/images/service-storm.jpg",
    imageAlt: "Broken, moss-covered tiles stripped from a roof during repair work",
    intro: [
      "Storm damage rewards speed. The priority is not the quote — it is stopping water getting into the house. We answer emergency calls across our area, make the roof safe, sheet or temporarily repair the damage, and come back to price the permanent repair once everything is dry and visible.",
      "If the damage is insurance work, we photograph the fault before and after and write the repair up clearly so you have something concrete to send to your insurer. We do not act as loss adjusters and we do not ask you to sign anything over.",
    ],
    includes: [
      "Same-day make-safe visits across the coverage area where diaries allow",
      "Sheeting, tarpaulins and temporary repairs to stop water ingress",
      "Photographic record of the damage before any work is done",
      "Permanent repairs to tiles, slates, ridges, verges, flashings and flat roofs",
      "Clear, written repair descriptions suitable for an insurance claim",
      "Follow-up inspection after the next dry spell if temporary work was needed",
    ],
    warningSigns: [
      "Missing tiles or slates visible from the ground after high winds",
      "Ridge or verge detail displaced after an easterly or south-westerly gale",
      "A ceiling stain that appears within hours of a heavy storm",
      "Guttering or fascia hanging loose after wind or falling debris",
      "A chimney pot or flashing displaced, with debris in the gutter below",
    ],
    faqs: [
      {
        q: "What counts as an emergency?",
        a: "Water getting into the house, a roof covering stripped back by wind, a stack or ridge in a dangerous state, or anything that will get worse with the next rainfall. If you are unsure, call — we would rather talk it through than leave you guessing.",
      },
      {
        q: "Can you help with an insurance claim?",
        a: "We can give you clear photographs and a written description of the damage and the repair, which is what most insurers ask for. Your policy and your insurer decide what is covered.",
      },
      {
        q: "Is a temporary repair ever enough?",
        a: "Sometimes a small temporary repair is all a roof needs if the covering is otherwise sound. Where it is not, we explain why and give you options before you commit to anything.",
      },
    ],
  },
];

export function getService(slug: string): Service | undefined {
  return services.find((s) => s.slug === slug);
}

/* ----------------------------- projects ---------------------------- */

export type Project = {
  slug: string;
  title: string;
  location: string;
  service: string;
  summary: string;
  details: string[];
  beforeImage: string;
  beforeAlt: string;
  beforeLabel: string;
  afterImage: string;
  afterAlt: string;
  afterLabel: string;
  pairNote: string;
};

/**
 * Demonstration case studies. These are illustrative pairings using licensed
 * stock photography, not genuine Crown & Coast projects. The two photographs
 * in each pair are labelled factually (what each picture actually shows) and
 * every pair carries an honest note, because they may show different
 * properties — see lib/image-credits.ts for sources.
 */
export const projects: Project[] = [
  {
    slug: "interwar-semi-re-roof",
    title: "Interwar semi re-roofed, slope by slope",
    location: "Cheriton, Folkestone",
    service: "New roofs & roof replacement",
    summary:
      "A tired interwar semi roof stripped back to the rafters, timbers made good and re-tiled in stages so the house stayed watertight through the whole job.",
    details: [
      "Scaffold and edge protection up before any strip-out began",
      "Split battens and a soft section of sarking replaced and priced before the work",
      "Breathable underlay, counter-battens and the new tiling laid to the exposure of the plot",
      "Ridge and verge finished with dry detail, loft insulation topped up while the roof was open",
    ],
    beforeImage: "/images/project-reroof-during.jpg",
    beforeAlt:
      "Roofers stripping and re-tiling the slope of an interwar semi, with scaffold in place",
    beforeLabel: "Stripping & re-tiling",
    afterImage: "/images/project-reroof-after.jpg",
    afterAlt: "A finished plain-tile roof with clean lines and rooflights after re-tiling",
    afterLabel: "Tiling completed",
    pairNote:
      "Demonstration pairing showing a re-roof mid-work and completed tiling. Illustrative imagery, not a documented Crown & Coast project.",
  },
  {
    slug: "failed-pantiles-replaced",
    title: "Failed pantiles stripped and replaced",
    location: "Hythe",
    service: "Roof repairs & leak detection",
    summary:
      "Delaminating pantiles and repeated leaks around a valley. Rather than a full re-roof, the failed section was stripped, re-laid in matched tiles and the details renewed.",
    details: [
      "Leak traced from the loft to a worn valley and a run of delaminating tiles",
      "Failed tiles removed and matched replacements sourced from reclaimed stock",
      "Valley renewed in lead and the surrounding courses re-laid",
      "Photographs before, during and after for the owner's records",
    ],
    beforeImage: "/images/project-tiles-before.jpg",
    beforeAlt: "Broken and delaminating pantiles stripped off the roof, ready for the skip",
    beforeLabel: "Failed tiles out",
    afterImage: "/images/project-tiles-after.jpg",
    afterAlt: "New pantiles laid over fresh underlay on a re-laid section of roof",
    afterLabel: "New tiles laid",
    pairNote:
      "Illustrative pairing showing the stages of this kind of work — the two photographs may show different properties.",
  },
  {
    slug: "chimney-leadwork-renewal",
    title: "Chimney stack repointed with new lead flashings",
    location: "Walmer, Deal",
    service: "Chimney repairs & leadwork",
    summary:
      "A persistent leak beside a chimney breast turned out to be failed step flashings and a crumbling flaunching rather than a problem with the roof covering itself.",
    details: [
      "Stack repointed to the upper courses and flaunching renewed around the pots",
      "New lead step flashings and soakers dressed into the tile courses",
      "Access from a cherry picker rather than a full scaffold, saving the customer money",
      "Loft checked from the inside at the follow-up visit — bone dry",
    ],
    beforeImage: "/images/project-chimney-before.jpg",
    beforeAlt: "Contractor working from a cherry picker at a weathered brick chimney stack",
    beforeLabel: "Stack before work",
    afterImage: "/images/project-chimney-after.jpg",
    afterAlt: "Chimney stack with new stepped lead flashings dressed at the roof junction",
    afterLabel: "New lead flashings",
    pairNote:
      "Illustrative pairing showing chimney work in progress and finished leadwork — the two photographs may show different properties.",
  },
];

/* --------------------------- testimonials -------------------------- */

/**
 * DEMO CONTENT — fictional testimonials, written for visual demonstration
 * only. They are not real reviews and must not be presented as such.
 */
export const testimonials = [
  {
    quote:
      "We had water coming through the bedroom ceiling and two other roofers wanted to replace the whole roof. Crown & Coast found three slipped tiles and a failed flashing, showed us the photos, and fixed it in a morning. That was two winters ago and it has been dry since.",
    name: "Helen Marsh",
    area: "Sandgate",
  },
  {
    quote:
      "The re-roof was managed properly from start to finish — scaffold up when they said, everything tidied at the end of each day, and the loft insulated while the roof was off. The written quote was itemised, so there were no surprises.",
    name: "David Osei",
    area: "Kearsney, Dover",
  },
  {
    quote:
      "Called after a gale ripped tiles off the back slope. They came out the same afternoon, sheeted it, then came back to match the tiles properly. Straightforward people who explain what they are doing.",
    name: "Jo Tappenden",
    area: "Walmer",
  },
];

/* -------------------------- process & trust ------------------------ */

export const processSteps = [
  {
    step: "01",
    title: "Inspect",
    body: "We visit, look at the roof properly — inside and out — and photograph what we find. No ladder-and-guess quotes.",
  },
  {
    step: "02",
    title: "Written quote",
    body: "An itemised quote by email or post: the work, the materials, the price and how long it should take. Free, and yours to keep.",
  },
  {
    step: "03",
    title: "Schedule",
    body: "We agree a start date that works around you and order materials so the job runs to programme. Scaffolding is arranged for you.",
  },
  {
    step: "04",
    title: "Complete & sign-off",
    body: "The work is finished, the site is cleared, and we walk you through the photographs. Everything is left tidy and watertight.",
  },
] as const;

export const whyUs = [
  {
    title: "One roofer, start to finish",
    body: "The person who inspects your roof quotes it and works on it — no subcontractors you have never met.",
  },
  {
    title: "Repair before replace",
    body: "If a repair will hold, we say so. If it will not, we show you why before you commit to anything.",
  },
  {
    title: "Itemised written quotes",
    body: "Work and materials line by line, fixed price once agreed — easy to compare against anyone else.",
  },
  {
    title: "Photographs of the work",
    body: "Before, during and after — for your records, and exactly what an insurer asks for on a claim.",
  },
  {
    title: "Care around your home",
    body: "Scaffold boarded at windows, lofts sheeted, everything cleaned down and cleared at the end.",
  },
  {
    title: "Local and accountable",
    body: "A short round of East Kent towns — we answer the phone ourselves, and we are still here next winter.",
  },
] as const;

/* ------------------------------- FAQs ------------------------------ */

export const homeFaqs = [
  {
    q: "How much does a new roof cost?",
    a: "It depends on the size of the roof, the covering you want and the condition of the timbers underneath — and anyone quoting before they have looked is guessing. Our quotes are free and itemised so you can see where the money goes: covering, timbers, scaffold, waste and detailing.",
  },
  {
    q: "Is the quote really free, and is there any obligation?",
    a: "Free, in writing, with no obligation and no pressure. We would rather you compared us properly against another roofer than felt hurried into anything.",
  },
  {
    q: "Which areas do you cover?",
    a: "Folkestone, Hythe, Dover, Deal and the surrounding East Kent villages, roughly the CT13 to CT21 postcode districts. If you are not sure whether you are in range, ask — we will tell you honestly.",
  },
  {
    q: "How quickly can you deal with a leak or storm damage?",
    a: "Water coming in is treated as urgent. We make the roof safe first — sheeting or a temporary repair — then price the permanent repair in writing once we can see the damage properly.",
  },
  {
    q: "What guarantee do you give?",
    a: "Guarantee terms are set out in writing with your quote, including what is covered and for how long, so you know exactly where you stand before work starts.",
  },
  {
    q: "What if you find more damage once the roof is open?",
    a: "Work pauses. We show you photographs of what we have found, price it separately, and only continue once you have said yes. No open-ended extras on the final invoice.",
  },
  {
    q: "Do you work on older and period properties?",
    a: "Often. Kentish peg tiles, plain tiles, slate and traditional lead detail are bread and butter around here. Where planning permission or listed building consent is likely to be needed we will flag it at the start.",
  },
  {
    q: "When are you available?",
    a: "Weekdays and Saturday mornings for planned work and inspections, with storm emergencies handled outside those hours. Current demo hours are listed on the contact page.",
  },
] as const;

export type Faq = { q: string; a: string };
