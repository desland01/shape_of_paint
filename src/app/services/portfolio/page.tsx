import type { Metadata } from "next";
import { PageHero } from "@/components/sections/PageHero";
import { PortfolioGallery } from "@/components/sections/PortfolioGallery";
import { ContactCTA } from "@/components/sections/ContactCTA";
import { InstagramGrid } from "@/components/sections/InstagramGrid";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  title: "Our Work",
  description:
    "See interior, exterior, and cabinet painting projects by Shape of Paint. Before & after transformations across Vancouver homes. Get inspired for your project.",
};

const instagramImages = [
  { src: "/images/ig-1.jpg", alt: "Shape of Paint project 1" },
  { src: "/images/ig-2.jpg", alt: "Shape of Paint project 2" },
  { src: "/images/ig-3.jpg", alt: "Shape of Paint project 3" },
  { src: "/images/ig-4.jpg", alt: "Shape of Paint project 4" },
  { src: "/images/ig-5.jpg", alt: "Shape of Paint project 5" },
  { src: "/images/ig-6.jpg", alt: "Shape of Paint project 6" },
];

const interiorImages = [
  { src: "/images/interior-portfolio-1.jpg", alt: "Living room interior painting in Vancouver" },
  { src: "/images/interior-portfolio-2.jpg", alt: "Bedroom accent wall painting" },
  { src: "/images/interior-portfolio-3.jpg", alt: "Kitchen walls and trim painting" },
  { src: "/images/interior-portfolio-4.jpg", alt: "Hallway and staircase painting project" },
  { src: "/images/interior-portfolio-5.jpg", alt: "Bathroom interior painting with moisture-resistant finish" },
  { src: "/images/interior-portfolio-6.jpg", alt: "Open concept living area repaint" },
  { src: "/images/interior-portfolio-7.jpg", alt: "Ceiling and crown moulding painting" },
  { src: "/images/interior-portfolio-8.jpg", alt: "Level 5 finish accent wall" },
];

const exteriorImages = [
  { src: "/images/exterior-portfolio-1.jpg", alt: "Vancouver home exterior painting" },
  { src: "/images/exterior-portfolio-2.jpg", alt: "Stucco exterior repaint in Burnaby" },
  { src: "/images/exterior-portfolio-3.jpg", alt: "Cedar siding restoration and painting" },
  { src: "/images/exterior-portfolio-4.jpg", alt: "Front door and trim exterior painting" },
  { src: "/images/exterior-portfolio-5.jpg", alt: "Deck staining and sealing project" },
  { src: "/images/exterior-portfolio-6.jpg", alt: "Multi-colour exterior scheme" },
  { src: "/images/exterior-portfolio-7.jpg", alt: "Soffit and fascia painting" },
  { src: "/images/exterior-portfolio-8.jpg", alt: "Complete home exterior transformation" },
];

const cabinetImages = [
  { src: "/images/cabinet-portfolio-1.jpg", alt: "White kitchen cabinet spray finish" },
  { src: "/images/cabinet-portfolio-2.jpg", alt: "Before and after kitchen cabinet painting" },
  { src: "/images/cabinet-portfolio-3.jpg", alt: "Bathroom vanity cabinet refinishing" },
  { src: "/images/cabinet-portfolio-4.jpg", alt: "Grey kitchen cabinets with new hardware" },
  { src: "/images/cabinet-portfolio-5.jpg", alt: "Oak cabinet staining project" },
  { src: "/images/cabinet-portfolio-6.jpg", alt: "Island cabinet painting" },
  { src: "/images/cabinet-portfolio-7.jpg", alt: "Laundry room cabinet refinishing" },
  { src: "/images/cabinet-portfolio-8.jpg", alt: "Custom colour cabinet spray finish" },
];

export default function PortfolioPage() {
  return (
    <>
      <PageHero
        heading="Our Work"
        description="Every project tells a story. Browse interior, exterior, and cabinet painting transformations across Vancouver and the Lower Mainland."
      />

      <PortfolioGallery
        eyebrow="Portfolio"
        heading="Interior Painting"
        subtitle="Walls, ceilings, trim, and specialty finishes across Vancouver homes."
        images={interiorImages}
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

      <ContactCTA
        heading="Ready to transform your space?"
        description="Whether it's a single room or a complete exterior, we'd love to show you what's possible. Get your free estimate and join the portfolio."
        ctaText="Get Your Free Estimate"
        ctaHref="/contact/estimate"
        image="/images/contact-cta.jpg"
        imageAlt="Shape of Paint team at work"
      />

      <InstagramGrid
        instagramUrl={siteConfig.socialLinks.instagram}
        images={instagramImages}
      />
    </>
  );
}
