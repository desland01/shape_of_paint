export const siteConfig = {
  name: "Shape of Paint",
  tagline: "Vancouver's Master Painters. Not the Fastest — the Best.",
  description:
    "House painters Vancouver homeowners trust with their biggest investment. 200+ five-star reviews. Interior, exterior & cabinet masters. 604-353-7378.",
  url: "https://shapeofpaint.com",
  phone: "604-353-7378",
  email: "hello@shapeofpaint.com",
  address: {
    street: "",
    city: "Vancouver",
    state: "BC",
    zip: "",
  },
  serviceArea: "Vancouver and the Lower Mainland",
  ownerName: "Gabe Penner",
  socialLinks: {
    instagram: "https://instagram.com/shapeofpaint",
    facebook: "https://facebook.com/shapeofpaint",
    youtube: "",
    google: "https://www.google.com/maps/place/Shape+of+Paint",
  },
  nav: [
    {
      label: "Services",
      href: "/services",
      children: [
        { label: "Interior Painting", href: "/services/interior" },
        { label: "Exterior Painting", href: "/services/exterior" },
        { label: "Cabinets", href: "/services/cabinets" },
        { label: "Portfolio", href: "/services/portfolio" },
      ],
    },
    {
      label: "About",
      href: "/about",
      children: [
        { label: "Our Story", href: "/about" },
        { label: "Testimonials", href: "/about/reviews" },
      ],
    },
    {
      label: "Contact",
      href: "/contact",
      children: [
        { label: "Contact Us", href: "/contact" },
        { label: "Free Estimate", href: "/contact#contact-form" },
      ],
    },
    { label: "Blog", href: "/blog" },
  ],
  services: [
    {
      title: "Interior Painting",
      description:
        "You pick the colours. We deliver walls, ceilings, trim, baseboards, fireplaces, and staircases with a finish so clean your designer will ask who did it.",
      href: "/services/interior",
      image: "/images/interior.webp",
    },
    {
      title: "Exterior Painting",
      description:
        "Most exterior paint jobs fail in 3 years because the prep was rushed. We coat siding, stucco, trim, soffits, and decks to handle Vancouver rain for a decade — not just a season.",
      href: "/services/exterior",
      image: "/images/exterior.webp",
    },
    {
      title: "Cabinet Painting",
      description:
        "Factory cabinets wish they looked this good. Hand-sprayed artisan finish — smoother, more durable, and true to colour. Your kitchen transforms in days, not months.",
      href: "/services/cabinets",
      image: "/images/cabinets.webp",
    },
  ],
  testimonials: [
    {
      quote:
        "As a designer, it's hard to find a team you trust with your vision and your client relationships. Shape of Paint is that team. Beautiful finish, complete care. I recommend them without hesitation.",
      author: "Gennein Derksen, 9andCo Design",
      rating: 5,
    },
    {
      quote:
        "Gabe is a true master painter. The results were honestly breathtaking — his team took our home to a new level. Trusted him so much I recommended him to paint my 90-year-old mom's home.",
      author: "Lori",
      rating: 5,
    },
    {
      quote:
        "Marvellous job. Walls, fireplaces, spindles up the stairs — he did it all during our major reno. We needed level 5 finish on our accent walls and he nailed it. Everything looks incredible.",
      author: "Sean",
      rating: 5,
    },
    {
      quote:
        "The kitchen looks like a brand new kitchen was installed. I still cannot believe they are my old cupboards. The quality is unbelievable. His eye for detail is incredible — top quality workmanship.",
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
        "Immaculate attention to detail and dedication to quality. Gabe is truly a master of his craft. We were completely satisfied with the finished job — the interior of our house looks stunning.",
      author: "Derek",
      rating: 5,
    },
  ],
  footerLinks: {
    links: [
      { label: "About Us", href: "/about" },
      { label: "Testimonials", href: "/about/reviews" },
      { label: "Blog", href: "/blog" },
      { label: "Portfolio", href: "/services/portfolio" },
      { label: "Google Reviews", href: "#" },
    ],
    recommendations: [
      { label: "Interior Painting", href: "/services/interior" },
      { label: "Exterior Painting", href: "/services/exterior" },
      { label: "Cabinets", href: "/services/cabinets" },
      { label: "Cost Calculator", href: "/tools/cost-calculator" },
      { label: "Free Estimate", href: "/contact#contact-form" },
      { label: "FAQ", href: "/contact/faq" },
      { label: "Contact", href: "/contact" },
    ],
    areas: [
      { label: "Surrey", href: "/areas/surrey" },
      { label: "Burnaby", href: "/areas/burnaby" },
      { label: "North Vancouver", href: "/areas/north-vancouver" },
      { label: "Coquitlam", href: "/areas/coquitlam" },
      { label: "Richmond", href: "/areas/richmond" },
      { label: "Langley", href: "/areas/langley" },
    ],
    legal: [
      { label: "Privacy Policy", href: "/privacy" },
      { label: "Terms of Service", href: "/terms" },
    ],
  },
} as const;

export type SiteConfig = typeof siteConfig;
