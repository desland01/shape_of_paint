import type { Metadata } from "next";
import { PageHero } from "@/components/sections/PageHero";
import { PortfolioGallery } from "@/components/sections/PortfolioGallery";
import { FeatureSection } from "@/components/sections/FeatureSection";
import { InstagramGrid } from "@/components/sections/InstagramGrid";
import { siteConfig } from "@/config/site";
import { generateBreadcrumbSchema } from "@/lib/schema";

export const metadata: Metadata = {
  title: "Our Work",
  description:
    "See interior, exterior, and cabinet painting projects by Shape of Paint. Before & after transformations across Vancouver homes. Get inspired for your project.",
};

const instagramImages = [
  { src: "/images/ig-1.webp", alt: "Vancouver home interior freshly painted by Shape of Paint" },
  { src: "/images/ig-2.webp", alt: "Kitchen cabinet spray finish in matte white" },
  { src: "/images/ig-3.webp", alt: "Exterior painting detail on Vancouver craftsman home" },
  { src: "/images/ig-4.webp", alt: "Hand-finished accent wall with designer colour palette" },
  { src: "/images/ig-5.webp", alt: "Cabinet door drying in spray booth — artisan finish process" },
  { src: "/images/ig-6.webp", alt: "Before and after interior painting transformation" },
];

const interiorImages = [
  { src: "/images/interior-portfolio-1.webp", alt: "Living room with white linen sofa, leather club chairs, and reclaimed timber door frame" },
  { src: "/images/interior-portfolio-2.webp", alt: "Vaulted ceiling room with arched window and bubble glass chandelier" },
  { src: "/images/interior-portfolio-3.webp", alt: "Bedroom with dark charcoal accent wall, black nightstand, and brass sconce" },
  { src: "/images/interior-portfolio-4.webp", alt: "Fireplace with white board-and-batten paneling, reclaimed wood mantel, and concrete surround" },
  { src: "/images/interior-portfolio-5.webp", alt: "Cascading glass globe pendant chandelier in double-height stairwell" },
  { src: "/images/interior-portfolio-7.webp", alt: "Herringbone tile shower niche with built-in shelving" },
  { src: "/images/interior-portfolio-8.webp", alt: "Rustic reclaimed wood sideboard with pampas grass and woven wall art" },
  { src: "/images/interior.webp", alt: "Curved staircase with white painted spindles and barn doors to home office" },
  { src: "/images/cabinet-portfolio-7.webp", alt: "White French doors with crystal doorknobs opening into dining room" },
  { src: "/images/portfolio-2.webp", alt: "Dark painted vanity on ornate black-and-white patterned tile floor" },
  { src: "/images/portfolio-5.webp", alt: "Reclaimed wood beam with matte black steel bracket detail" },
  { src: "/images/cabinet-portfolio-5.webp", alt: "Staircase with dark stained handrail, white painted spindles and treads" },
];

const exteriorImages = [
  { src: "/images/exterior-portfolio-1.webp", alt: "Luxury home facade with dual black garage doors and stone-and-stucco finish" },
  { src: "/images/exterior-portfolio-2.webp", alt: "Custom painted garage door with decorative interlocking circle pattern" },
];

const cabinetImages = [
  { src: "/images/interior-portfolio-6.webp", alt: "Laundry room with white shaker cabinets, butcher block counter, and iron cage pendant" },
  { src: "/images/cabinet-portfolio-8.webp", alt: "Home office with floor-to-ceiling white built-in cabinets and open shelving" },
  { src: "/images/cabinet-1.webp", alt: "Knurled matte black cabinet knob detail on white shaker door" },
  { src: "/images/cabinet-2.webp", alt: "Kitchen with grey painted island, white perimeter cabinets, and stainless steel appliances" },
  { src: "/images/cabinet-3.webp", alt: "White kitchen island drawers pulled open showing dovetail construction" },
  { src: "/images/cabinet-4.webp", alt: "Kitchen with dark glass-front island and white traditional perimeter cabinetry" },
  { src: "/images/cabinet-5.webp", alt: "White glass-front upper cabinet with crown moulding and ceramic dishware" },
  { src: "/images/cabinet-6.webp", alt: "White shaker island with matte black bar pulls and dome pendant lights" },
  { src: "/images/cabinet-7.webp", alt: "White kitchen cabinets with oil-rubbed bronze hardware and arabesque tile backsplash" },
  { src: "/images/portfolio-3.webp", alt: "White shaker kitchen with woven leather counter stools and rustic metal pendants" },
];

export default function PortfolioPage() {
  const breadcrumbJsonLd = JSON.stringify(generateBreadcrumbSchema([
    { name: "Home", url: siteConfig.url },
    { name: "Services", url: `${siteConfig.url}/services` },
    { name: "Portfolio", url: `${siteConfig.url}/services/portfolio` },
  ]));

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: breadcrumbJsonLd }} />
      <PageHero
        heading="Our Work"
        description="Every project tells a story. Browse interior, exterior, and cabinet painting transformations across Vancouver and the Lower Mainland."
      />

      <PortfolioGallery
        eyebrow="Portfolio"
        heading="Interior Painting"
        subtitle="Walls, ceilings, trim, and specialty finishes across Vancouver homes."
        images={interiorImages}
        priorityCount={4}
      />

      <PortfolioGallery
        eyebrow="Portfolio"
        heading="Exterior Painting"
        subtitle="Siding, stucco, trim, and deck projects built to last through BC weather."
        images={exteriorImages}
      />

      <PortfolioGallery
        eyebrow="Portfolio"
        heading="Cabinet Painting"
        subtitle="HVLP spray-finished kitchen and bathroom cabinets."
        images={cabinetImages}
      />

      <FeatureSection
        heading="Ready to transform your space?"
        description="Whether it's a single room or a complete exterior, we'd love to show you what's possible. Get your free estimate and join the portfolio."
        ctaText="Start Your Project"
        ctaHref="/contact#contact-form"
        image="/images/contact-cta.webp"
        imageAlt="Shape of Paint team at work"
      />

      <InstagramGrid
        instagramUrl={siteConfig.socialLinks.instagram}
        images={instagramImages}
      />
    </>
  );
}
