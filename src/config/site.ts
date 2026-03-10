import {
  CITY_CONTENT,
  CITY_SLUGS,
  INDEXABLE_SERVICE_SLUGS,
  PRIMARY_CITY_SLUG,
  SERVICE_CONTENT,
  getCityPath,
  getCityServicePath,
  getVancouverServicePath,
  type CitySlug,
  type IndexableServiceSlug,
} from "@/config/local-seo";

const PRIMARY_SERVICES = [...INDEXABLE_SERVICE_SLUGS] as const satisfies readonly IndexableServiceSlug[];

const NAV_LOCATION_SLUGS = [
  "burnaby",
  "north-vancouver",
  "coquitlam",
  "surrey",
  "richmond",
  "langley",
] as const satisfies CitySlug[];

export const megaMenuLocations = [
  { label: CITY_CONTENT[PRIMARY_CITY_SLUG].name, href: getCityPath(PRIMARY_CITY_SLUG) },
  ...NAV_LOCATION_SLUGS.map((slug) => ({
    label: CITY_CONTENT[slug].name,
    href: getCityPath(slug),
  })),
] as const;

const GOOGLE_MAPS_URL = "https://www.google.com/maps?cid=9497625668518470323";

export const siteConfig = {
  name: "Shape of Paint",
  tagline: "Vancouver's Master Painters. Not the Fastest. The Best.",
  description:
    "House painters Vancouver homeowners trust with their biggest investment. Interior, exterior, and cabinet masters. 604-353-7378.",
  url: "https://shapeofpaint.com",
  phone: "604-353-7378",
  email: "hello@shapeofpaint.com",
  address: {
    street: "4860 207 St #6",
    city: "Langley",
    state: "BC",
    zip: "V3A 2E3",
  },
  serviceArea: "Vancouver and the Lower Mainland",
  ownerName: "Gabe Penner",
  googleBusiness: {
    placeId: "ChIJL5SpffoFzEERs-KsITIYzoM",
    cid: "9497625668518470323",
    businessProfileId: "286926383742558330",
    kgId: "/g/11ssk3wccp",
    categories: ["Painter", "Painting"],
    rating: 4.8,
    reviewCount: 48,
    coordinates: {
      latitude: 49.0910658,
      longitude: -122.6491605,
    },
  },
  socialLinks: {
    instagram: "https://instagram.com/shapeofpaint",
    facebook: "https://facebook.com/shapeofpaint",
    youtube: "",
    google: GOOGLE_MAPS_URL,
  },
  nav: [
    {
      label: "Painting Services",
      href: getCityPath(PRIMARY_CITY_SLUG),
      variant: "mega",
      children: [
        { label: SERVICE_CONTENT["interior-painting"].name, description: SERVICE_CONTENT["interior-painting"].summary, href: getVancouverServicePath("interior-painting"), group: "Interior Services" },
        { label: SERVICE_CONTENT["cabinet-painting"].name, description: SERVICE_CONTENT["cabinet-painting"].summary, href: getVancouverServicePath("cabinet-painting"), group: "Interior Services" },
        { label: SERVICE_CONTENT["custom-millwork-feature-walls"].name, description: SERVICE_CONTENT["custom-millwork-feature-walls"].summary, href: getVancouverServicePath("custom-millwork-feature-walls"), group: "Interior Services" },
        { label: SERVICE_CONTENT["exterior-painting"].name, description: SERVICE_CONTENT["exterior-painting"].summary, href: getVancouverServicePath("exterior-painting"), group: "Exterior Services" },
        { label: SERVICE_CONTENT["deck-fence-staining"].name, description: SERVICE_CONTENT["deck-fence-staining"].summary, href: getVancouverServicePath("deck-fence-staining"), group: "Exterior Services" },
        { label: SERVICE_CONTENT["decorative-finishes"].name, description: SERVICE_CONTENT["decorative-finishes"].summary, href: getVancouverServicePath("decorative-finishes"), group: "Exterior Services" },
      ],
    },
    { label: "Portfolio", href: "/portfolio" },
    { label: "Reviews", href: "/reviews" },
    {
      label: "FAQ",
      href: "/faq",
      children: [
        { label: "Interior Painting FAQ", href: "/faq/interior-painting", group: "Service FAQs" },
        { label: "Exterior Painting FAQ", href: "/faq/exterior-painting", group: "Service FAQs" },
        { label: "Cabinet Painting FAQ", href: "/faq/cabinet-painting", group: "Service FAQs" },
        { label: "Pricing & Estimates", href: "/faq/pricing-estimates", group: "General FAQs" },
        { label: "Process & Timeline", href: "/faq/process-timeline", group: "General FAQs" },
        { label: "Paint & Materials", href: "/faq/paint-materials", group: "General FAQs" },
      ],
    },
    {
      label: "Paint Guides",
      href: "/paint-guides",
      children: [
        { label: "Cabinet Painting vs. Replacing", href: "/paint-guides/cabinet-painting-vs-replacing", group: "Cabinet Guides" },
        { label: "Cabinet Painting Cost", href: "/paint-guides/kitchen-cabinet-painting-cost-vancouver", group: "Cabinet Guides" },
        { label: "Spray vs. Brush", href: "/paint-guides/spray-vs-brush-cabinet-painting", group: "Cabinet Guides" },
        { label: "Interior Painting Cost", href: "/paint-guides/interior-painting-cost-vancouver", group: "Interior Guides" },
        { label: "Choosing Interior Colours", href: "/paint-guides/interior-paint-colours-vancouver", group: "Interior Guides" },
        { label: "Exterior Painting Cost", href: "/paint-guides/exterior-painting-cost-vancouver", group: "Exterior Guides" },
        { label: "Best Paint for Rain", href: "/paint-guides/best-exterior-paint-vancouver-weather", group: "Exterior Guides" },
        { label: "View All Guides", href: "/paint-guides", group: "Exterior Guides" },
      ],
    },
  ],
  services: PRIMARY_SERVICES.map((service) => ({
    title: SERVICE_CONTENT[service].name,
    description: SERVICE_CONTENT[service].summary,
    href: getVancouverServicePath(service),
    image: SERVICE_CONTENT[service].heroImage,
  })),
  testimonials: [
    {
      quote:
        "As a designer, it's hard to find a team you trust with your vision and your client relationships. Shape of Paint is that team. Beautiful finish, complete care. I recommend them without hesitation.",
      author: "Gennein Derksen, 9andCo Design",
      rating: 5,
    },
    {
      quote:
        "Gabe is a true master painter. The results were honestly breathtaking - his team took our home to a new level. Trusted him so much I recommended him to paint my 90-year-old mom's home.",
      author: "Lori",
      rating: 5,
    },
    {
      quote:
        "Marvellous job. Walls, fireplaces, spindles up the stairs - he did it all during our major reno. We needed level 5 finish on our accent walls and he nailed it. Everything looks incredible.",
      author: "Sean",
      rating: 5,
    },
    {
      quote:
        "The kitchen looks like a brand new kitchen was installed. I still cannot believe they are my old cupboards. The quality is unbelievable. His eye for detail is incredible - top quality workmanship.",
      author: "Marinda",
      rating: 5,
    },
    {
      quote:
        "Gabe has a passion for all things paint. Extremely knowledgeable and you can tell from the results he loves what he does. We could not be happier with the exterior of our home.",
      author: "Crystal",
      rating: 5,
    },
    {
      quote:
        "Immaculate attention to detail and dedication to quality. Gabe is truly a master of his craft. We were completely satisfied with the finished job - the interior of our house looks stunning.",
      author: "Derek",
      rating: 5,
    },
  ],
  brands: [
    {
      name: "C2 Paint",
      logo: "/images/brands/C2-Circle.svg",
      category: "artisan",
      services: ["interior"],
      description: "Handcrafted colour with over 500 curated hues",
      logoScale: 1.5,
    },
    {
      name: "Renner",
      logo: "/images/brands/Renner-Vert.svg",
      category: "italian",
      services: ["cabinets"],
      description: "Italian wood coatings for professional spray finishing",
    },
    {
      name: "ALCEA",
      logo: "/images/brands/alcea.svg",
      category: "italian",
      services: ["cabinets"],
      description: "Italian industrial coatings for furniture and cabinetry",
      logoScale: 2,
    },
    {
      name: "Livos",
      logo: "/images/brands/livos.svg",
      category: "natural",
      services: ["interior", "cabinets"],
      description: "Natural plant-based oils and finishes from Germany",
      logoScale: 1.75,
    },
    {
      name: "Novocolor",
      logo: "/images/brands/novocolor.svg",
      category: "italian",
      services: ["interior", "exterior"],
      description: "Italian precision colour-matching and tinting technology",
    },
    {
      name: "Metropolis",
      logo: "/images/brands/METROLPOLIS.svg",
      category: "artisan",
      services: ["interior", "exterior"],
      description: "Premium architectural paints and decorative finishes",
      logoScale: 1.5,
    },
  ],
  footerLinks: {
    links: [
      { label: "About Us", href: "/about" },
      { label: "Contact", href: "/contact" },
      { label: "Reviews", href: "/reviews" },
      { label: "Portfolio", href: "/portfolio" },
      { label: "Google Reviews", href: GOOGLE_MAPS_URL },
    ],
    recommendations: [
      ...PRIMARY_SERVICES.map((service) => ({
        label: SERVICE_CONTENT[service].name,
        href: getVancouverServicePath(service),
      })),
      { label: "Cost Calculator", href: "/tools/cost-calculator" },
      { label: "Free Estimate", href: "/contact#contact-form" },
      { label: "FAQ", href: "/faq" },
    ],
    guides: [
      { label: "Paint Guides", href: "/paint-guides" },
      { label: "Cabinet Painting Cost", href: "/paint-guides/kitchen-cabinet-painting-cost-vancouver" },
      { label: "Interior Painting Cost", href: "/paint-guides/interior-painting-cost-vancouver" },
      { label: "Exterior Painting Cost", href: "/paint-guides/exterior-painting-cost-vancouver" },
    ],
    areas: CITY_SLUGS.filter((city) => city !== PRIMARY_CITY_SLUG).map((city) => ({
      label: CITY_CONTENT[city].name,
      href: getCityPath(city),
    })),
    legal: [
      { label: "Privacy Policy", href: "/privacy" },
      { label: "Terms of Service", href: "/terms" },
    ],
  },
  seo: {
    primaryCity: PRIMARY_CITY_SLUG,
    cities: CITY_SLUGS,
    services: PRIMARY_SERVICES,
    getCityPath,
    getCityServicePath,
  },
} as const;

export type SiteConfig = typeof siteConfig;
