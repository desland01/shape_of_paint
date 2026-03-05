export const PRIMARY_CITY_SLUG = "vancouver" as const;

export const CITY_CONTENT = {
  vancouver: {
    name: "Vancouver",
    summary:
      "From heritage homes in Kitsilano to modern builds on the West Side, Vancouver projects need detailed prep, tight scheduling, and premium coatings that hold through wet winters.",
    neighborhoods: [
      "Kitsilano",
      "Mount Pleasant",
      "Dunbar",
      "Kerrisdale",
      "Shaughnessy",
      "Point Grey",
    ],
    heroImage: "/images/exterior-portfolio-2.webp",
    heroAlt: "Vancouver home painted by Shape of Paint",
  },
  burnaby: {
    name: "Burnaby",
    summary:
      "Burnaby homes range from high-rise condos to older detached homes. Our process adapts to each property style without cutting prep or finish quality.",
    neighborhoods: ["Brentwood", "Burnaby Heights", "Metrotown", "Edmonds"],
    heroImage: "/images/exterior-portfolio-1.webp",
    heroAlt: "Burnaby exterior painting project",
  },
  "north-vancouver": {
    name: "North Vancouver",
    summary:
      "North Vancouver projects face moisture and shade from the mountains. We prioritize substrate prep and coating selection to protect finishes longer.",
    neighborhoods: ["Lower Lonsdale", "Lynn Valley", "Edgemont", "Deep Cove"],
    heroImage: "/images/exterior-portfolio-5.webp",
    heroAlt: "North Vancouver house painting project",
  },
  "west-vancouver": {
    name: "West Vancouver",
    summary:
      "West Vancouver homes often combine complex architecture with coastal exposure. We use a disciplined process to protect high-value surfaces and details.",
    neighborhoods: ["Dundarave", "Ambleside", "Caulfeild", "British Properties"],
    heroImage: "/images/exterior-portfolio-4.webp",
    heroAlt: "West Vancouver luxury exterior painting",
  },
  coquitlam: {
    name: "Coquitlam",
    summary:
      "Coquitlam homes need practical timelines and durable coatings for family use. We keep sites organized and deliver crisp finishes that last.",
    neighborhoods: ["Burke Mountain", "Westwood Plateau", "Maillardville", "Austin Heights"],
    heroImage: "/images/exterior-portfolio-3.webp",
    heroAlt: "Coquitlam home painting project",
  },
  "port-moody": {
    name: "Port Moody",
    summary:
      "Port Moody properties are exposed to marine moisture and tree cover. Our prep-first process helps prevent early peeling and uneven wear.",
    neighborhoods: ["Heritage Mountain", "Newport Village", "Glenayre", "College Park"],
    heroImage: "/images/exterior-portfolio-8.webp",
    heroAlt: "Port Moody painting project",
  },
  surrey: {
    name: "Surrey",
    summary:
      "Surrey projects often involve larger footprints and multi-phase timelines. We coordinate clearly so work moves without delays or surprises.",
    neighborhoods: ["South Surrey", "Cloverdale", "Fleetwood", "Newton"],
    heroImage: "/images/exterior-portfolio-6.webp",
    heroAlt: "Surrey house painting project",
  },
  "new-westminster": {
    name: "New Westminster",
    summary:
      "New Westminster includes heritage homes and dense urban properties. We handle both with precise prep, clean execution, and minimal disruption.",
    neighborhoods: ["Queen's Park", "Sapperton", "Uptown", "Downtown"],
    heroImage: "/images/exterior-portfolio-7.webp",
    heroAlt: "New Westminster painting project",
  },
  langley: {
    name: "Langley",
    summary:
      "Langley homeowners value durable finishes and practical planning. Our teams deliver room-by-room clarity and long-term coating performance.",
    neighborhoods: ["Willoughby", "Walnut Grove", "Brookswood", "Fort Langley"],
    heroImage: "/images/exterior-portfolio-4.webp",
    heroAlt: "Langley house painting project",
  },
  richmond: {
    name: "Richmond",
    summary:
      "Richmond properties near water and open exposure demand reliable coating systems. We choose products and prep methods for those exact conditions.",
    neighborhoods: ["Steveston", "Terra Nova", "Seafair", "Brighouse"],
    heroImage: "/images/exterior-portfolio-5.webp",
    heroAlt: "Richmond painting project",
  },
  delta: {
    name: "Delta",
    summary:
      "Delta homes see strong wind and rain exposure. Our prep and product choices are built for that reality, not just short-term curb appeal.",
    neighborhoods: ["Ladner", "Tsawwassen", "North Delta", "Sunshine Hills"],
    heroImage: "/images/exterior-portfolio-2.webp",
    heroAlt: "Delta exterior painting project",
  },
  "pitt-meadows": {
    name: "Pitt Meadows",
    summary:
      "Pitt Meadows homes benefit from careful moisture management and maintenance planning. We deliver coatings engineered for local weather swings.",
    neighborhoods: ["Central Pitt Meadows", "North Bonson", "Harris Road", "Meadowtown"],
    heroImage: "/images/exterior-portfolio-7.webp",
    heroAlt: "Pitt Meadows house painting project",
  },
  "port-coquitlam": {
    name: "Port Coquitlam",
    summary:
      "Port Coquitlam projects need high durability for busy family homes. Our process focuses on detailed prep and finishes that stay clean and stable.",
    neighborhoods: ["Citadel", "Mary Hill", "Riverwood", "Lincoln Park"],
    heroImage: "/images/exterior-portfolio-6.webp",
    heroAlt: "Port Coquitlam painting project",
  },
} as const;

export const INDEXABLE_SERVICE_SLUGS = [
  "interior-painting",
  "exterior-painting",
  "cabinet-painting",
  "decorative-finishes",
  "deck-fence-staining",
  "custom-millwork-feature-walls",
] as const;

export const SUPPORT_SERVICE_SLUGS = [
  "spray-finishes",
  "design-services",
] as const;

export type CitySlug = keyof typeof CITY_CONTENT;
export type IndexableServiceSlug = (typeof INDEXABLE_SERVICE_SLUGS)[number];
export type SupportServiceSlug = (typeof SUPPORT_SERVICE_SLUGS)[number];
export type ServiceSlug = IndexableServiceSlug | SupportServiceSlug;

type ServiceKeywordPlan = {
  primary: string;
  secondary: readonly string[];
};

type ServiceContentItem = {
  name: string;
  shortName: string;
  summary: string;
  introLead: string;
  answerBlock: string;
  processSteps: readonly [string, string, string];
  heroImage: string;
  heroAlt: string;
  image: string;
  imageAlt: string;
  brands: readonly string[];
  indexable: boolean;
  keywordPlan?: ServiceKeywordPlan;
};

export const SERVICE_CONTENT: Record<ServiceSlug, ServiceContentItem> = {
  "interior-painting": {
    name: "Interior Painting",
    shortName: "interior painting",
    summary:
      "Walls, ceilings, trim, and detail surfaces finished with clear prep standards, clean lines, and product systems chosen for long-term performance.",
    introLead:
      "Interior painting projects need full surface prep, room protection, and line quality that still looks clean years later.",
    answerBlock:
      "For homeowners looking for interior painting in Metro Vancouver, the best results come from prep-first execution and product selection matched to each room.",
    processSteps: [
      "Protect floors and furnishings, repair surface defects, and map each room sequence before paint starts.",
      "Prime where needed, then apply premium coatings with controlled dry times for uniform sheen.",
      "Complete punch-list walkthroughs room by room so every edge, corner, and finish line is verified.",
    ],
    heroImage: "/images/interior.webp",
    heroAlt: "Interior painting service by Shape of Paint",
    image: "/images/interior-work.webp",
    imageAlt: "Interior painting detail by Shape of Paint",
    brands: ["Benjamin Moore", "C2 Paint", "Novocolor"],
    indexable: true,
    keywordPlan: {
      primary: "interior painting",
      secondary: [
        "interior house painting",
        "home interior painters",
      ],
    },
  },
  "exterior-painting": {
    name: "Exterior Painting",
    shortName: "exterior painting",
    summary:
      "Siding, stucco, trim, and decks coated with prep-driven systems built for Lower Mainland rain, UV, and seasonal temperature shifts.",
    introLead:
      "Exterior painting needs moisture-aware prep and coatings that are selected for Lower Mainland weather exposure.",
    answerBlock:
      "If you need exterior painting in Metro Vancouver, long coating life comes from substrate repairs, moisture control, and disciplined application windows.",
    processSteps: [
      "Inspect siding and trim, remediate peeling areas, and complete targeted repairs before coating starts.",
      "Match primer and topcoat systems to substrate type, solar exposure, and local moisture risk.",
      "Sequence elevation work by weather window and complete a final adhesion and coverage walkthrough.",
    ],
    heroImage: "/images/exterior.webp",
    heroAlt: "Exterior painting service by Shape of Paint",
    image: "/images/exterior-portfolio-3.webp",
    imageAlt: "Exterior painting detail by Shape of Paint",
    brands: ["Benjamin Moore", "Novocolor", "Metropolis"],
    indexable: true,
    keywordPlan: {
      primary: "exterior painting",
      secondary: [
        "exterior house painting",
        "stucco painting",
      ],
    },
  },
  "cabinet-painting": {
    name: "Cabinet Painting",
    shortName: "cabinet painting",
    summary:
      "Kitchen and bathroom cabinets refinished with a controlled spray process for smooth, durable surfaces that outperform rushed brush-and-roll work.",
    introLead:
      "Cabinet painting requires degreasing, abrasion, and controlled spray finishing to avoid premature failure.",
    answerBlock:
      "Homeowners comparing cabinet painting options should prioritize prep detail and spray-process control over quick cosmetic paintovers.",
    processSteps: [
      "Remove and label doors and drawers, then degrease, abrade, and repair every cabinet component.",
      "Apply adhesion-promoting primer and spray-grade coatings in controlled conditions for a smooth factory-style finish.",
      "Reinstall hardware with alignment checks and complete a final cure and care walkthrough.",
    ],
    heroImage: "/images/cabinets.webp",
    heroAlt: "Cabinet painting service by Shape of Paint",
    image: "/images/cabinet-finish.webp",
    imageAlt: "Cabinet spray finish by Shape of Paint",
    brands: ["Renner", "ALCEA", "Livos"],
    indexable: true,
    keywordPlan: {
      primary: "cabinet painting",
      secondary: [
        "cabinet refinishing",
        "cabinet refacing",
        "kitchen cabinet painting",
      ],
    },
  },
  "decorative-finishes": {
    name: "Decorative Finishes",
    shortName: "decorative finishes",
    summary:
      "Feature walls and artisan decorative systems including Venetian plaster, texture layering, and custom finish development for high-character interiors.",
    introLead:
      "Decorative finishes are detail-driven installations that need planning, sample approval, and careful execution.",
    answerBlock:
      "For decorative finishes in Metro Vancouver, Venetian plaster and artisan texture systems perform best when the substrate and sheen strategy are defined before application.",
    processSteps: [
      "Build sample boards and agree on texture, movement, and sheen before full installation.",
      "Prepare substrate for specialty materials, then apply layered finish systems with controlled trowel and tool technique.",
      "Refine transitions, lighting response, and edge detail during final artisan walkthroughs.",
    ],
    heroImage: "/images/custom-project.webp",
    heroAlt: "Decorative finish installation by Shape of Paint",
    image: "/images/design-services.webp",
    imageAlt: "Venetian plaster decorative finish detail",
    brands: ["Novocolor", "Metropolis", "Meoded"],
    indexable: true,
    keywordPlan: {
      primary: "venetian plaster",
      secondary: [
        "decorative wall finishes",
        "artisan wall finishes",
      ],
    },
  },
  "deck-fence-staining": {
    name: "Deck & Fence Staining",
    shortName: "deck and fence staining",
    summary:
      "Deck and fence staining with wash prep, moisture checks, and penetration-focused product systems that preserve wood and stabilize colour.",
    introLead:
      "Deck and fence staining projects succeed when moisture levels, prep timing, and penetration depth are controlled.",
    answerBlock:
      "For deck and fence staining in Metro Vancouver, coating life depends on wash prep, dry-time discipline, and stain systems selected for local rain cycles.",
    processSteps: [
      "Wash and prep wood surfaces, then confirm moisture content before stain application begins.",
      "Select penetrating stain systems based on wood age, grain condition, and UV exposure.",
      "Apply even coats, back-brush for penetration, and complete maintenance scheduling guidance at closeout.",
    ],
    heroImage: "/images/exterior-portfolio-6.webp",
    heroAlt: "Deck and fence staining project by Shape of Paint",
    image: "/images/exterior-portfolio-2.webp",
    imageAlt: "Stained outdoor wood surface by Shape of Paint",
    brands: ["Benjamin Moore", "Livos", "Renner"],
    indexable: true,
    keywordPlan: {
      primary: "deck staining",
      secondary: [
        "fence staining",
        "wood staining",
      ],
    },
  },
  "custom-millwork-feature-walls": {
    name: "Custom Millwork & Feature Walls",
    shortName: "custom millwork and feature wall finishing",
    summary:
      "Wainscotting, board-and-batten, shiplap, and feature-wall finishing with detailed joinery prep and high-contrast paint systems.",
    introLead:
      "Custom millwork and feature wall projects need clean carpentry transitions, precise caulking, and durable finish systems.",
    answerBlock:
      "For custom millwork and feature walls in Metro Vancouver, long-term quality comes from joinery prep, edge discipline, and finish sequencing.",
    processSteps: [
      "Audit existing trim or new millwork conditions, then fill, sand, and caulk for seamless transitions.",
      "Prime and finish each profile with product systems matched to traffic level and light exposure.",
      "Run detail-level final checks on lines, corners, and texture consistency before handoff.",
    ],
    heroImage: "/images/custom-project.webp",
    heroAlt: "Custom millwork feature wall painting by Shape of Paint",
    image: "/images/interior-portfolio-5.webp",
    imageAlt: "Feature wall detail by Shape of Paint",
    brands: ["C2 Paint", "Benjamin Moore", "Metropolis"],
    indexable: true,
    keywordPlan: {
      primary: "custom millwork",
      secondary: [
        "wainscoting",
        "board and batten",
        "feature wall painting",
      ],
    },
  },
  "spray-finishes": {
    name: "Spray Finishes",
    shortName: "spray finishes",
    summary:
      "Support service for spray-grade application quality across cabinetry, trim, doors, and selected architectural surfaces.",
    introLead:
      "Spray finishes are used inside core project scopes when clients need a controlled factory-style surface profile.",
    answerBlock:
      "Spray finishing is handled as a technical method inside core services where it improves smoothness, durability, and consistency.",
    processSteps: [
      "Stage equipment, masking, and environmental controls for overspray containment.",
      "Apply spray-grade coatings at calibrated pressure and fan settings for uniform coverage.",
      "Complete cure monitoring and touch-up control before reinstall and handoff.",
    ],
    heroImage: "/images/cabinet-portfolio-4.webp",
    heroAlt: "Spray finish application by Shape of Paint",
    image: "/images/cabinet-portfolio-6.webp",
    imageAlt: "Spray-finished cabinet surface",
    brands: ["Renner", "ALCEA", "Benjamin Moore"],
    indexable: false,
  },
  "design-services": {
    name: "Design Services",
    shortName: "design services",
    summary:
      "Support service for concept development, finish coordination, and colour planning within core painting and finishing engagements.",
    introLead:
      "Design services are delivered as part of scoped projects when finish planning needs deeper direction before production.",
    answerBlock:
      "Design support is included where it improves project certainty, finish coordination, and homeowner decision speed.",
    processSteps: [
      "Review project goals, visual references, and lighting conditions before final finish selection.",
      "Build practical palettes and material combinations aligned with architecture and lifestyle needs.",
      "Finalize production-ready specs so execution teams can deliver the intended look without guesswork.",
    ],
    heroImage: "/images/design-services.webp",
    heroAlt: "Design planning session by Shape of Paint",
    image: "/images/custom-project.webp",
    imageAlt: "Custom design finish concept",
    brands: ["C2 Paint", "Novocolor", "Metropolis"],
    indexable: false,
  },
} as const;

export const CITY_SLUGS = Object.keys(CITY_CONTENT) as CitySlug[];
export const SERVICE_SLUGS = [
  ...INDEXABLE_SERVICE_SLUGS,
  ...SUPPORT_SERVICE_SLUGS,
] as const;

export const SERVICE_KEYWORD_OWNERSHIP = {
  homepage: ["house painters vancouver", "painters vancouver"],
  vancouver: {
    "interior-painting": {
      primary: "interior painting vancouver",
      secondary: [
        "interior house painting vancouver",
        "vancouver interior painting",
      ],
    },
    "exterior-painting": {
      primary: "exterior painting vancouver",
      secondary: [
        "exterior house painting vancouver",
        "exterior home painting vancouver",
        "stucco painting vancouver",
      ],
    },
    "cabinet-painting": {
      primary: "cabinet painting vancouver",
      secondary: [
        "cabinet refacing vancouver",
        "cabinet refinishing vancouver",
        "kitchen cabinet painting vancouver",
      ],
    },
    "decorative-finishes": {
      primary: "venetian plaster vancouver",
      secondary: [
        "decorative finishes vancouver",
        "venetian plaster walls",
      ],
    },
    "deck-fence-staining": {
      primary: "deck staining vancouver",
      secondary: [
        "fence staining vancouver",
        "wood staining vancouver",
      ],
    },
    "custom-millwork-feature-walls": {
      primary: "custom millwork vancouver",
      secondary: [
        "wainscoting vancouver",
        "board and batten vancouver",
        "feature wall painting vancouver",
      ],
    },
  },
  nonVancouverPattern:
    "{service keyword} {city}",
} as const;

export function isCitySlug(value: string): value is CitySlug {
  return value in CITY_CONTENT;
}

export function isServiceSlug(value: string): value is ServiceSlug {
  return value in SERVICE_CONTENT;
}

export function isIndexableServiceSlug(
  value: string
): value is IndexableServiceSlug {
  return (INDEXABLE_SERVICE_SLUGS as readonly string[]).includes(value);
}

export function getCityPath(city: CitySlug): string {
  return `/${city}`;
}

export function getCityServicePath(city: CitySlug, service: IndexableServiceSlug): string {
  return `/${city}/${service}`;
}

export function getVancouverServicePath(service: IndexableServiceSlug): string {
  return getCityServicePath(PRIMARY_CITY_SLUG, service);
}

export function getServiceLabel(service: ServiceSlug): string {
  return SERVICE_CONTENT[service].name;
}
