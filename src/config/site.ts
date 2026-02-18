export const siteConfig = {
  name: "Shape of Paint",
  tagline: "Vancouver's Trusted House Painters",
  description:
    "Professional house painters in Vancouver & the Lower Mainland. Interior, exterior & cabinet painting with master craftsmanship. Licensed, insured, and trusted by hundreds of homeowners. Call 604-353-7378 for your free estimate.",
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
    { label: "Home", href: "/" },
    {
      label: "About",
      href: "/about",
      children: [
        { label: "Our Story", href: "/about" },
        { label: "Testimonials", href: "/about/reviews" },
      ],
    },
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
      label: "Areas",
      href: "/areas/surrey",
      children: [
        { label: "Surrey", href: "/areas/surrey" },
        { label: "Burnaby", href: "/areas/burnaby" },
        { label: "North Vancouver", href: "/areas/north-vancouver" },
        { label: "Coquitlam", href: "/areas/coquitlam" },
        { label: "Richmond", href: "/areas/richmond" },
        { label: "West Vancouver", href: "/areas/west-vancouver" },
        { label: "Langley", href: "/areas/langley" },
        { label: "Delta", href: "/areas/delta" },
        { label: "New Westminster", href: "/areas/new-westminster" },
        { label: "Port Moody", href: "/areas/port-moody" },
        { label: "Port Coquitlam", href: "/areas/port-coquitlam" },
        { label: "Pitt Meadows", href: "/areas/pitt-meadows" },
      ],
    },
    { label: "Blog", href: "/blog" },
    { label: "FAQ", href: "/contact/faq" },
    {
      label: "Contact",
      href: "/contact",
      children: [
        { label: "Contact Us", href: "/contact" },
        { label: "Free Estimate", href: "/contact/estimate" },
      ],
    },
  ],
  services: [
    {
      title: "Interior Painting",
      description:
        "Walls, ceilings, trim, baseboards, fireplaces, and staircases — flawless finishes that transform every room. You pick the colours. We handle the rest.",
      href: "/services/interior",
      image: "/images/interior.jpg",
    },
    {
      title: "Exterior Painting",
      description:
        "Siding, stucco, trim, soffits, and decks — premium coatings built for Vancouver rain and BC weather. Your home stays protected for years.",
      href: "/services/exterior",
      image: "/images/exterior.jpg",
    },
    {
      title: "Cabinet Painting",
      description:
        "Fine-finish spray results that outperform factory cabinets. No renovation, no disruption, no compromise on quality.",
      href: "/services/cabinets",
      image: "/images/cabinets.jpg",
    },
  ],
  testimonials: [
    {
      quote:
        "As a Designer it can often be hard to find partnership that you can completely trust with not only your vision, but also with client relationships and communication. Shape of Paint is a company that you trust to do it right, to take complete care while producing a beautiful finish. I highly recommend this company! Great people and professional service.",
      author: "Gennein Derksen, 9andCo Design",
    },
    {
      quote:
        "Gabe is a true master painter. His knowledge is impressive and he knows what he is doing. He painted my house and the results were breathtaking, honestly breathtaking. His team took our house to a new level. Trusted him so much I recommended him to paint my 90 year old mom's home. He has taken such good care of her.",
      author: "Lori",
    },
    {
      quote:
        "Absolutely marvellous job painting our place. We had a major Reno and he did all the painting from walls to fireplaces, to spindles up the stairs. He listened to our needs and was very thorough in the whole process. We had some accent walls that we needed at level 5 paint and he did it. Everything looks so good! I would recommend him and his team to anyone.",
      author: "Sean",
    },
    {
      quote:
        "The kitchen looks like a new kitchen was installed. I still cannot believe they are my old cupboards. The quality is unbelievable. His eye for detail is incredible. His work is professional and I would highly recommend him to anyone, especially if you want a high end finish. It is definitely top quality workmanship.",
      author: "Marinda",
    },
    {
      quote:
        "We recently hired Gabe and his team to paint the exterior of our home. WOW! What an experience! Gabe has a passion for all things paint, is extremely knowledgeable and you can tell from the results he loves what he does. His energetic personality is contagious. We could not be happier with the results.",
      author: "Crystal",
    },
    {
      quote:
        "Gabe is an incredible painter with an immaculate attention to detail and dedication to quality. He truly is a master of his craft and we are so glad we hired him and his team to paint the interior of our house. We were completely satisfied with the finished job and the value for money that we received.",
      author: "Derek",
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
      { label: "Free Estimate", href: "/contact/estimate" },
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
