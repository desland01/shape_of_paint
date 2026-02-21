export type BlogCategory = "Interior Painting" | "Exterior Painting" | "Cabinet Painting" | "Expert Advice";

export interface BlogPost {
  title: string;
  href: string;
  date: string;
  excerpt: string;
  category: BlogCategory;
  readingTime: string;
  image: string;
  imageAlt: string;
}

export const blogPosts: BlogPost[] = [
  {
    title: "Cabinet Painting vs. Replacing: Why a Master Spray Finish Beats Factory Every Time",
    href: "/blog/cabinet-painting-vs-replacing",
    date: "2026-02-18",
    excerpt:
      "New factory cabinets come with 1 finish option. A master spray finish gives you 3,500. Here's why Vancouver homeowners are keeping their boxes.",
    category: "Cabinet Painting",
    readingTime: "6 min read",
    image: "/images/cabinets.webp",
    imageAlt: "Freshly painted kitchen cabinets by Shape of Paint",
  },
  {
    title: "Kitchen Cabinet Painting Cost in Vancouver (2026 Guide)",
    href: "/blog/kitchen-cabinet-painting-cost-vancouver",
    date: "2026-02-17",
    excerpt:
      "A 30-door kitchen vs. a 12-door galley? Completely different investment. The 2026 breakdown by cabinet count, finish type, and prep work.",
    category: "Cabinet Painting",
    readingTime: "7 min read",
    image: "/images/cabinet-finish.webp",
    imageAlt: "Spray-finished kitchen cabinets in a Vancouver home",
  },
  {
    title: "Spray vs. Brush: Why Spray-Finished Cabinets Look Better",
    href: "/blog/spray-vs-brush-cabinet-painting",
    date: "2026-02-16",
    excerpt:
      "Factory finishes hide flaws with texture. A professional spray finish has zero. Side-by-side, the difference is obvious. Here's why spray wins.",
    category: "Cabinet Painting",
    readingTime: "6 min read",
    image: "/images/portfolio-1.webp",
    imageAlt: "Close-up of spray-finished cabinet door showing smooth finish",
  },
  {
    title: "How to Choose the Best Paint for Kitchen Cabinets",
    href: "/blog/best-paint-kitchen-cabinets",
    date: "2026-02-15",
    excerpt:
      "We tested 6 cabinet paints over 18 months. Only 2 survived daily kitchen abuse without chipping. The winner might surprise you.",
    category: "Cabinet Painting",
    readingTime: "7 min read",
    image: "/images/portfolio-2.webp",
    imageAlt: "Professional cabinet painting project by Shape of Paint",
  },
  {
    title: "Cabinet Refinishing vs. Refacing: What's the Difference?",
    href: "/blog/cabinet-refinishing-vs-refacing",
    date: "2026-02-14",
    excerpt:
      "Refinishing preserves your solid wood doors. Refacing swaps them for veneer. One delivers a superior finish. The other replaces quality with compromise.",
    category: "Cabinet Painting",
    readingTime: "6 min read",
    image: "/images/portfolio-3.webp",
    imageAlt: "Cabinet refinishing transformation by Shape of Paint",
  },
  {
    title: "Interior Painting Cost in Vancouver: What to Expect in 2026",
    href: "/blog/interior-painting-cost-vancouver",
    date: "2026-02-13",
    excerpt:
      "A 1,500 sq ft Vancouver home has 4 price tiers for interior painting. Most homeowners pick tier 2. Here's the full 2026 breakdown.",
    category: "Interior Painting",
    readingTime: "9 min read",
    image: "/images/interior.webp",
    imageAlt: "Professional interior painting in a Vancouver living room",
  },
  {
    title: "How to Choose the Right Interior Paint Colours for Vancouver Homes",
    href: "/blog/interior-paint-colours-vancouver",
    date: "2026-02-12",
    excerpt:
      "That grey you loved at the store? It turns purple on a north-facing Vancouver wall. 3 undertone rules that prevent a $2,000 mistake.",
    category: "Interior Painting",
    readingTime: "7 min read",
    image: "/images/design-services.webp",
    imageAlt: "Interior paint colour selection for a Vancouver home",
  },
  {
    title: "Level 5 Drywall Finish: Why It Matters for Your Vancouver Home",
    href: "/blog/level-5-finish-vancouver",
    date: "2026-02-11",
    excerpt:
      "Turn on a lamp next to your wall. See those lines? That's joint banding. A Level 5 finish makes it disappear. Most painters never mention it.",
    category: "Interior Painting",
    readingTime: "8 min read",
    image: "/images/interior-work.webp",
    imageAlt: "Smooth wall finish ready for premium paint application",
  },
  {
    title: "Low-VOC Paint Options for Vancouver Families",
    href: "/blog/low-voc-paint-vancouver",
    date: "2026-02-10",
    excerpt:
      "Your kids breathe paint fumes for 72 hours after a room is finished. Zero-VOC stops that without losing durability. The 3 best options for Vancouver families.",
    category: "Interior Painting",
    readingTime: "6 min read",
    image: "/images/portfolio-4.webp",
    imageAlt: "Freshly painted room using low-VOC paint products",
  },
  {
    title: "How to Prepare Your Home for Interior Painting",
    href: "/blog/prepare-home-interior-painting",
    date: "2026-02-09",
    excerpt:
      "90% of paint failures start before the first coat. 7 things to do the night before your crew arrives. Number 4 alone prevents peeling.",
    category: "Interior Painting",
    readingTime: "7 min read",
    image: "/images/portfolio-5.webp",
    imageAlt: "Room prepared for professional interior painting",
  },
  {
    title: "How Much Does It Cost to Paint a House Exterior in Vancouver?",
    href: "/blog/exterior-painting-cost-vancouver",
    date: "2026-02-08",
    excerpt:
      "A 2-storey Vancouver home with cedar siding vs. stucco bungalow? Completely different investment. The 2026 exterior painting cost guide by home type.",
    category: "Exterior Painting",
    readingTime: "7 min read",
    image: "/images/exterior.webp",
    imageAlt: "Professional exterior house painting in Vancouver",
  },
  {
    title: "Best Exterior Paint for Vancouver's Rain and Moisture",
    href: "/blog/best-exterior-paint-vancouver-weather",
    date: "2026-02-07",
    excerpt:
      "166 rain days a year. Most exterior paint gives up by year 3. One formula laughs at Vancouver weather. Here's what we use and why.",
    category: "Exterior Painting",
    readingTime: "7 min read",
    image: "/images/hero-1.webp",
    imageAlt: "Well-maintained painted home exterior in Vancouver",
  },
  {
    title: "When Is the Best Time to Paint Your House Exterior in BC?",
    href: "/blog/best-time-exterior-painting-bc",
    date: "2026-02-06",
    excerpt:
      "Paint applied below 10°C never cures properly. BC gives you a 5-month window. Miss it and you wait a full year. Here's how to time it right.",
    category: "Exterior Painting",
    readingTime: "6 min read",
    image: "/images/hero-3.webp",
    imageAlt: "Exterior painting in progress during BC's dry season",
  },
  {
    title: "Stucco vs. Siding: Exterior Painting Differences in Vancouver",
    href: "/blog/stucco-vs-siding-painting-vancouver",
    date: "2026-02-05",
    excerpt:
      "Use the wrong primer on stucco and it peels in 8 months. Siding needs a completely different approach. Your cladding type dictates everything.",
    category: "Exterior Painting",
    readingTime: "9 min read",
    image: "/images/portfolio-6.webp",
    imageAlt: "Exterior painting techniques on Vancouver home",
  },
  {
    title: "How to Spot Exterior Paint Failure Before It's Too Late",
    href: "/blog/exterior-paint-failure-signs",
    date: "2026-02-04",
    excerpt:
      "By the time paint peels, the damage underneath is 6 months old. 4 early warning signs most homeowners miss. Spot them now or repaint the whole wall later.",
    category: "Exterior Painting",
    readingTime: "8 min read",
    image: "/images/portfolio-7.webp",
    imageAlt: "Exterior paint inspection on a Vancouver home",
  },
];

export function getBlogPostsByCategory(category: BlogCategory): BlogPost[] {
  return blogPosts.filter((post) => post.category === category);
}

export function formatBlogDate(dateString: string): string {
  return new Date(dateString).toLocaleDateString("en-CA", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}
