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
    title: "Cabinet Painting vs. Replacing: Which Saves You More in Vancouver?",
    href: "/blog/cabinet-painting-vs-replacing",
    date: "2026-02-18",
    excerpt:
      "Compare cabinet painting vs replacing costs in Vancouver. Painting saves $10K–$24K over full replacement. Learn which option is right for your kitchen.",
    category: "Cabinet Painting",
    readingTime: "6 min read",
    image: "/images/blog/cabinet-painting-vs-replacing.jpg",
    imageAlt: "Side-by-side comparison of painted cabinets vs new cabinet installation",
  },
  {
    title: "Kitchen Cabinet Painting Cost in Vancouver (2026 Guide)",
    href: "/blog/kitchen-cabinet-painting-cost-vancouver",
    date: "2026-02-17",
    excerpt:
      "Kitchen cabinet painting in Vancouver costs $3,500 to $7,000 for a typical kitchen. Get a full 2026 cost breakdown by cabinet count, finish type, and prep work.",
    category: "Cabinet Painting",
    readingTime: "7 min read",
    image: "/images/blog/kitchen-cabinet-cost.jpg",
    imageAlt: "Freshly painted white kitchen cabinets in a Vancouver home",
  },
  {
    title: "Spray vs. Brush: Why Spray-Finished Cabinets Look Better",
    href: "/blog/spray-vs-brush-cabinet-painting",
    date: "2026-02-16",
    excerpt:
      "Spray finishing delivers a factory-smooth result that brushwork can't match. Learn why professional spray painting is the gold standard for kitchen cabinets.",
    category: "Cabinet Painting",
    readingTime: "6 min read",
    image: "/images/blog/spray-vs-brush.jpg",
    imageAlt: "Close-up of spray-finished cabinet door showing smooth, even finish",
  },
  {
    title: "How to Choose the Best Paint for Kitchen Cabinets",
    href: "/blog/best-paint-kitchen-cabinets",
    date: "2026-02-15",
    excerpt:
      "Compare Benjamin Moore Advance vs Sherwin-Williams Emerald Urethane for kitchen cabinets. Plus primer options, sheen recommendations, and what actually lasts.",
    category: "Cabinet Painting",
    readingTime: "7 min read",
    image: "/images/blog/best-paint-cabinets.jpg",
    imageAlt: "Professional paint cans and supplies for cabinet painting project",
  },
  {
    title: "Cabinet Refinishing vs. Refacing: What's the Difference?",
    href: "/blog/cabinet-refinishing-vs-refacing",
    date: "2026-02-14",
    excerpt:
      "Refinishing keeps your existing doors and paints them. Refacing replaces the door fronts. One costs half as much. Learn which approach makes sense for your kitchen.",
    category: "Cabinet Painting",
    readingTime: "6 min read",
    image: "/images/blog/refinishing-vs-refacing.jpg",
    imageAlt: "Before and after cabinet refinishing transformation",
  },
  {
    title: "Interior Painting Cost in Vancouver: What to Expect in 2026",
    href: "/blog/interior-painting-cost-vancouver",
    date: "2026-02-13",
    excerpt:
      "Interior painting costs $3–$6 per square foot for walls and $4–$8 with ceilings and trim. A typical 1,500 sq ft Vancouver home runs $2,000 to $5,000.",
    category: "Interior Painting",
    readingTime: "9 min read",
    image: "/images/blog/interior-cost.jpg",
    imageAlt: "Professional painter cutting in along ceiling line in a Vancouver living room",
  },
  {
    title: "How to Choose the Right Interior Paint Colours for Vancouver Homes",
    href: "/blog/interior-paint-colours-vancouver",
    date: "2026-02-12",
    excerpt:
      "Vancouver's overcast light changes how colours read on your walls. Learn which undertones work in north-facing rooms, how to test samples, and the colours homeowners love most.",
    category: "Interior Painting",
    readingTime: "7 min read",
    image: "/images/blog/interior-colours.jpg",
    imageAlt: "Paint colour fan deck spread across a table with natural Vancouver light",
  },
  {
    title: "Level 5 Drywall Finish: Why It Matters for Your Vancouver Home",
    href: "/blog/level-5-finish-vancouver",
    date: "2026-02-11",
    excerpt:
      "A Level 5 finish eliminates joint banding and surface imperfections that show up under raking light. Learn when you need it and what it costs in Vancouver.",
    category: "Interior Painting",
    readingTime: "8 min read",
    image: "/images/blog/level-5-finish.jpg",
    imageAlt: "Smooth Level 5 drywall finish ready for premium paint application",
  },
  {
    title: "Low-VOC Paint Options for Vancouver Families",
    href: "/blog/low-voc-paint-vancouver",
    date: "2026-02-10",
    excerpt:
      "Low-VOC and zero-VOC paints eliminate harmful fumes without sacrificing durability. Compare the best options from Benjamin Moore, Sherwin-Williams, and more.",
    category: "Interior Painting",
    readingTime: "6 min read",
    image: "/images/blog/low-voc-paint.jpg",
    imageAlt: "Family safely enjoying a freshly painted nursery with low-VOC paint",
  },
  {
    title: "How to Prepare Your Home for Interior Painting",
    href: "/blog/prepare-home-interior-painting",
    date: "2026-02-09",
    excerpt:
      "Proper prep makes the difference between a paint job that lasts 3 years and one that lasts 10. Here's exactly what to do before your painting crew arrives.",
    category: "Interior Painting",
    readingTime: "7 min read",
    image: "/images/blog/prepare-interior.jpg",
    imageAlt: "Room prepared for painting with furniture moved and surfaces taped",
  },
  {
    title: "How Much Does It Cost to Paint a House Exterior in Vancouver?",
    href: "/blog/exterior-painting-cost-vancouver",
    date: "2026-02-08",
    excerpt:
      "Exterior house painting in Vancouver costs $5,000 to $20,000 depending on size, siding type, and prep work needed. Get accurate 2026 pricing for your home.",
    category: "Exterior Painting",
    readingTime: "7 min read",
    image: "/images/blog/exterior-cost.jpg",
    imageAlt: "Professional painters on scaffolding painting a Vancouver home exterior",
  },
  {
    title: "Best Exterior Paint for Vancouver's Rain and Moisture",
    href: "/blog/best-exterior-paint-vancouver-weather",
    date: "2026-02-07",
    excerpt:
      "Vancouver gets 166 rain days a year. The wrong exterior paint fails in 3 years. Learn which products actually stand up to BC's coastal moisture.",
    category: "Exterior Painting",
    readingTime: "7 min read",
    image: "/images/blog/exterior-paint-weather.jpg",
    imageAlt: "Well-maintained painted home exterior withstanding Vancouver rain",
  },
  {
    title: "When Is the Best Time to Paint Your House Exterior in BC?",
    href: "/blog/best-time-exterior-painting-bc",
    date: "2026-02-06",
    excerpt:
      "The ideal window for exterior painting in BC is May through September. But timing depends on more than temperature. Learn the factors that determine your best start date.",
    category: "Exterior Painting",
    readingTime: "6 min read",
    image: "/images/blog/best-time-exterior.jpg",
    imageAlt: "Sunny day exterior painting in progress during BC's dry season",
  },
  {
    title: "Stucco vs. Siding: Exterior Painting Differences in Vancouver",
    href: "/blog/stucco-vs-siding-painting-vancouver",
    date: "2026-02-05",
    excerpt:
      "Stucco and siding require different prep, primers, and application techniques. Learn how painting approach changes based on your home's cladding material.",
    category: "Exterior Painting",
    readingTime: "9 min read",
    image: "/images/blog/stucco-vs-siding.jpg",
    imageAlt: "Split view showing stucco and siding exterior painting techniques",
  },
  {
    title: "How to Spot Exterior Paint Failure Before It's Too Late",
    href: "/blog/exterior-paint-failure-signs",
    date: "2026-02-04",
    excerpt:
      "Peeling, chalking, blistering, and alligatoring are signs your exterior paint is failing. Catch these early and save thousands on repairs. Here's what to look for.",
    category: "Exterior Painting",
    readingTime: "8 min read",
    image: "/images/blog/paint-failure-signs.jpg",
    imageAlt: "Close-up of peeling exterior paint showing signs of paint failure",
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
