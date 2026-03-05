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

export const SERVICE_CONTENT = {
  "interior-painting": {
    name: "Interior Painting",
    shortName: "interior painting",
    summary:
      "Walls, ceilings, trim, and detail surfaces finished with clear prep standards, clean lines, and product systems chosen for long-term performance.",
    heroImage: "/images/interior.webp",
    heroAlt: "Interior painting service by Shape of Paint",
    image: "/images/interior-work.webp",
    imageAlt: "Interior painting detail by Shape of Paint",
    brands: ["Benjamin Moore", "C2 Paint", "Novocolor"],
  },
  "exterior-painting": {
    name: "Exterior Painting",
    shortName: "exterior painting",
    summary:
      "Siding, stucco, trim, and decks coated with prep-driven systems built for Lower Mainland rain, UV, and seasonal temperature shifts.",
    heroImage: "/images/exterior.webp",
    heroAlt: "Exterior painting service by Shape of Paint",
    image: "/images/exterior-portfolio-3.webp",
    imageAlt: "Exterior painting detail by Shape of Paint",
    brands: ["Benjamin Moore", "Novocolor", "Metropolis"],
  },
  "cabinet-painting": {
    name: "Cabinet Painting",
    shortName: "cabinet painting",
    summary:
      "Kitchen and bathroom cabinets refinished with a controlled spray process for smooth, durable surfaces that outperform rushed brush-and-roll work.",
    heroImage: "/images/cabinets.webp",
    heroAlt: "Cabinet painting service by Shape of Paint",
    image: "/images/cabinet-finish.webp",
    imageAlt: "Cabinet spray finish by Shape of Paint",
    brands: ["Renner", "ALCEA", "Livos"],
  },
} as const;

export type CitySlug = keyof typeof CITY_CONTENT;
export type ServiceSlug = keyof typeof SERVICE_CONTENT;

export const CITY_SLUGS = Object.keys(CITY_CONTENT) as CitySlug[];
export const SERVICE_SLUGS = Object.keys(SERVICE_CONTENT) as ServiceSlug[];

export function isCitySlug(value: string): value is CitySlug {
  return value in CITY_CONTENT;
}

export function isServiceSlug(value: string): value is ServiceSlug {
  return value in SERVICE_CONTENT;
}

export function getCityPath(city: CitySlug): string {
  return `/${city}`;
}

export function getCityServicePath(city: CitySlug, service: ServiceSlug): string {
  return `/${city}/${service}`;
}

export function getVancouverServicePath(service: ServiceSlug): string {
  return getCityServicePath(PRIMARY_CITY_SLUG, service);
}

export function getServiceLabel(service: ServiceSlug): string {
  return SERVICE_CONTENT[service].name;
}
