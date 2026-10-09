/**
 * Photography credits for demo imagery.
 *
 * Every image on this site comes from Wikimedia Commons. Images are resized
 * for the web; hero-kent-roofs.jpg is cropped at the left edge to remove a
 * signboard, project-chimney-before.jpg is cropped to the chimney work,
 * project-tiles-after.jpg and others are used as framed, and
 * service-flat-roof.jpg is trimmed to remove a ladder and an embossed
 * manufacturer mark. Attribution is rendered in the site footer and recorded
 * in public/images/CREDITS.md. Replace these with the customer's own owned or
 * licensed photography before any commercial launch.
 */
export type ImageCredit = {
  file: string;
  title: string;
  author: string;
  license: string;
  licenseUrl: string;
  sourceUrl: string;
};

export const imageCredits: ImageCredit[] = [
  {
    file: "hero-kent-roofs.jpg",
    title: "Brick cottages Goodnestone Dover Kent England 1",
    author: "Acabashi",
    license: "CC BY-SA 4.0",
    licenseUrl: "https://creativecommons.org/licenses/by-sa/4.0",
    sourceUrl:
      "https://commons.wikimedia.org/wiki/File:Brick_cottages_Goodnestone_Dover_Kent_England_1.jpg",
  },
  {
    file: "service-repairs.jpg",
    title: "Roofing 002",
    author: "Jeuwre",
    license: "CC0",
    licenseUrl: "https://creativecommons.org/publicdomain/zero/1.0/",
    sourceUrl: "https://commons.wikimedia.org/wiki/File:Roofing_002.jpg",
  },
  {
    file: "service-new-roof.jpg",
    title: "Roof construction — Smaack",
    author: "Smaack",
    license: "CC BY-SA 4.0",
    licenseUrl: "https://creativecommons.org/licenses/by-sa/4.0",
    sourceUrl: "https://commons.wikimedia.org/wiki/File:Roof_construction_-_Smaack_-_20151012.jpg",
  },
  {
    file: "service-slate.jpg",
    title: "Barn conversion rooflights",
    author: "JagMan77",
    license: "CC BY-SA 4.0",
    licenseUrl: "https://creativecommons.org/licenses/by-sa/4.0",
    sourceUrl: "https://commons.wikimedia.org/wiki/File:Barn_conversion_rooflights.jpg",
  },
  {
    file: "service-flat-roof.jpg",
    title: "FinishedEPDMcoveredRoof",
    author: "KVDP",
    license: "Public domain",
    licenseUrl: "https://commons.wikimedia.org/wiki/File:FinishedEPDMcoveredRoof.jpg",
    sourceUrl: "https://commons.wikimedia.org/wiki/File:FinishedEPDMcoveredRoof.jpg",
  },
  {
    file: "service-chimney.jpg",
    title: "Lead flashing around a chimney stack, Trimingham",
    author: "Kolforn",
    license: "CC BY-SA 4.0",
    licenseUrl: "https://creativecommons.org/licenses/by-sa/4.0",
    sourceUrl:
      "https://commons.wikimedia.org/wiki/File:-2020-02-28_Lead_flashing_around_a_chimney_stack,_Trimingham.JPG",
  },
  {
    file: "service-gutters.jpg",
    title: "Chéneau, bande d'égout et noue en plomb",
    author: "Le plombier du désert",
    license: "CC BY-SA 3.0",
    licenseUrl: "https://creativecommons.org/licenses/by-sa/3.0",
    sourceUrl:
      "https://commons.wikimedia.org/wiki/File:Ch%C3%A9neau,_bande_d%27%C3%A9gout_et_noue_en_plomb..JPG",
  },
  {
    file: "service-storm.jpg",
    title: "Broken black roof tiles 2",
    author: "W.carter",
    license: "CC0",
    licenseUrl: "https://creativecommons.org/publicdomain/zero/1.0/",
    sourceUrl: "https://commons.wikimedia.org/wiki/File:Broken_black_roof_tiles_2.jpg",
  },
  {
    file: "about-kent-homes.jpg",
    title: "Barn roof and chimneys at at Monkton Kent England",
    author: "Acabashi",
    license: "CC BY-SA 4.0",
    licenseUrl: "https://creativecommons.org/licenses/by-sa/4.0",
    sourceUrl:
      "https://commons.wikimedia.org/wiki/File:Barn_roof_and_chimneys_at_at_Monkton_Kent_England.jpg",
  },
  {
    file: "areas-kent-roofs.jpg",
    title: "Denmark Street, Folkestone (geograph.org.uk 4586013)",
    author: "Chris Whippet",
    license: "CC BY-SA 2.0",
    licenseUrl: "https://creativecommons.org/licenses/by-sa/2.0",
    sourceUrl:
      "https://commons.wikimedia.org/wiki/File:Denmark_Street,_Folkestone_-_geograph.org.uk_-_4586013.jpg",
  },
  {
    file: "project-reroof-during.jpg",
    title: "Roof being repaired, Sycamore Avenue, Leymoor (geograph.org.uk 7103459)",
    author: "habiloid",
    license: "CC BY-SA 2.0",
    licenseUrl: "https://creativecommons.org/licenses/by-sa/2.0",
    sourceUrl:
      "https://commons.wikimedia.org/wiki/File:Roof_being_repaired,_Sycamore_Avenue,_Leymoor_-_geograph.org.uk_-_7103459.jpg",
  },
  {
    file: "project-reroof-after.jpg",
    title: "Roofing 001",
    author: "Jeuwre",
    license: "CC0",
    licenseUrl: "https://creativecommons.org/publicdomain/zero/1.0/",
    sourceUrl: "https://commons.wikimedia.org/wiki/File:Roofing_001.jpg",
  },
  {
    file: "project-tiles-before.jpg",
    title: "Broken red and black roof tiles 2",
    author: "W.carter",
    license: "CC0",
    licenseUrl: "https://creativecommons.org/publicdomain/zero/1.0/",
    sourceUrl: "https://commons.wikimedia.org/wiki/File:Broken_red_and_black_roof_tiles_2.jpg",
  },
  {
    file: "project-tiles-after.jpg",
    title: "Roof tiles packed in crate 1",
    author: "W.carter",
    license: "CC0",
    licenseUrl: "https://creativecommons.org/publicdomain/zero/1.0/",
    sourceUrl: "https://commons.wikimedia.org/wiki/File:Roof_tiles_packed_in_crate_1.jpg",
  },
  {
    file: "project-chimney-before.jpg",
    title: "Trumpington, repointing a chimney stack (geograph.org.uk 3448103)",
    author: "John Sutton",
    license: "CC BY-SA 2.0",
    licenseUrl: "https://creativecommons.org/licenses/by-sa/2.0",
    sourceUrl:
      "https://commons.wikimedia.org/wiki/File:Trumpington,_repointing_a_chimney_stack_-_geograph.org.uk_-_3448103.jpg",
  },
  {
    file: "project-chimney-after.jpg",
    title: "Lead flashing around a chimney stack, Trimingham",
    author: "Kolforn",
    license: "CC BY-SA 4.0",
    licenseUrl: "https://creativecommons.org/licenses/by-sa/4.0",
    sourceUrl:
      "https://commons.wikimedia.org/wiki/File:-2020-02-28_Lead_flashing_around_a_chimney_stack,_Trimingham.JPG",
  },
];
