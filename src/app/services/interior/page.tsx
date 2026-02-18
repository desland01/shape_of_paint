import type { Metadata } from "next";
import Link from "next/link";
import { PageHero } from "@/components/sections/PageHero";
import { FeatureSection } from "@/components/sections/FeatureSection";
import { Testimonials } from "@/components/sections/Testimonials";
import { InstagramGrid } from "@/components/sections/InstagramGrid";
import { SectionWrapper } from "@/components/shared/SectionWrapper";
import { siteConfig } from "@/config/site";
import { generateServiceSchema, generateBreadcrumbSchema } from "@/lib/schema";

export const metadata: Metadata = {
  title: "Interior Painting Vancouver BC",
  description: "Expert interior painting in Vancouver. Walls, ceilings, trim, baseboards, fireplaces & staircases. Flawless finishes by licensed painters. Free estimate.",
};

const instagramImages = [
  { src: "/images/ig-1.jpg", alt: "Shape of Paint project 1" },
  { src: "/images/ig-2.jpg", alt: "Shape of Paint project 2" },
  { src: "/images/ig-3.jpg", alt: "Shape of Paint project 3" },
  { src: "/images/ig-4.jpg", alt: "Shape of Paint project 4" },
  { src: "/images/ig-5.jpg", alt: "Shape of Paint project 5" },
  { src: "/images/ig-6.jpg", alt: "Shape of Paint project 6" },
];

export default function InteriorPaintingPage() {
  const serviceJsonLd = JSON.stringify(
    generateServiceSchema({
      name: "Interior Painting",
      description:
        "Expert interior painting in Vancouver. Walls, ceilings, trim, baseboards, fireplaces and staircases with flawless finishes.",
      url: `${siteConfig.url}/services/interior`,
    })
  );
  const breadcrumbJsonLd = JSON.stringify(
    generateBreadcrumbSchema([
      { name: "Home", url: siteConfig.url },
      { name: "Services", url: `${siteConfig.url}/services` },
      { name: "Interior Painting", url: `${siteConfig.url}/services/interior` },
    ])
  );

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: serviceJsonLd }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: breadcrumbJsonLd }} />
      <PageHero
        heading="Interior Painting in Vancouver"
        description="Walls, ceilings, trim, baseboards, fireplaces, and staircases — flawless finishes that elevate every room in your Vancouver home."
      />

      <SectionWrapper>
        <h2 className="mb-8 text-3xl font-semibold md:text-4xl">How Your Interior Painting Project Works</h2>
        <ol className="space-y-4 text-lg font-normal leading-relaxed text-text-secondary">
          <li>1. Free colour consultation — We visit your home, discuss your vision, and help you choose colours that work with your space and light.</li>
          <li>2. Full surface protection — Your furniture, floors, and fixtures are covered and sealed before any prep work begins. Your home stays clean.</li>
          <li>3. Meticulous preparation — Every surface is cleaned, sanded, patched, caulked, and primed. This is where 90% of a great paint job happens.</li>
          <li>4. Precision application — Brush, roller, or spray — our team applies premium paints with the technique each surface demands. No shortcuts.</li>
          <li>5. Walkthrough and cleanup — We don't leave until you're 100% satisfied. Your home goes back to normal, but better.</li>
        </ol>
      </SectionWrapper>

      <FeatureSection
        eyebrow="Vancouver Interior Painters"
        heading="Results you'll notice the moment you walk in"
        description="Whether it's a single accent wall or a full-home repaint, our team delivers the kind of finish that changes how a room feels. Clean lines. Smooth surfaces. Colours that look as good in person as they did on the swatch. Vancouver homeowners and designers trust us with their most detailed interior projects."
        ctaText="Get Your Free Estimate"
        ctaHref="/contact/estimate"
        image="/images/interior-work.jpg"
        imageAlt="Interior painting project by Shape of Paint"
      />

      <SectionWrapper variant="warm">
        <h2 className="mb-8 text-3xl font-semibold md:text-4xl">
          Interior Painting Services We Offer
        </h2>
        <ul className="space-y-3 text-lg font-normal leading-relaxed text-text-secondary">
          <li>Walls and ceilings — Smooth, uniform finishes in every room of your home. Eggshell, satin, matte — your call.</li>
          <li>Trim and baseboards — Crisp, clean lines that frame your spaces and make the whole room look finished.</li>
          <li>Fireplaces — Transformative finishes that turn your fireplace into a focal point. Brick, stone, or mantel — we handle it.</li>
          <li>Staircases and railings — Detailed work on spindles, risers, and handrails that most painters avoid.</li>
          <li>Kitchens and bathrooms — Moisture-resistant finishes built to handle Vancouver humidity without peeling or bubbling.</li>
          <li>Bedrooms and living areas — Colours and textures tailored to how you actually live in each room.</li>
          <li>Accent walls and level 5 finishes — Bold statements with the smoothest finish available. No imperfections.</li>
        </ul>
      </SectionWrapper>

      <SectionWrapper>
        <h2 className="mb-4 text-3xl font-semibold md:text-4xl">Explore Our Other Services</h2>
        <p className="text-lg md:text-xl font-normal leading-relaxed text-text-secondary">
          Looking for more than interior work? We also specialize in{" "}
          <Link href="/services/exterior" className="font-semibold text-foreground transition-opacity hover:opacity-70">
            exterior painting in Vancouver
          </Link>{" "}
          — siding, stucco, trim, and decks built to withstand BC weather. Need a kitchen refresh? Our{" "}
          <Link href="/services/cabinets" className="font-semibold text-foreground transition-opacity hover:opacity-70">
            cabinet painting services
          </Link>{" "}
          deliver a designer-quality spray finish that outperforms factory replacements.
        </p>
      </SectionWrapper>

      <Testimonials
        heading="What Vancouver homeowners say about our interior painting"
        testimonials={[...siteConfig.testimonials]}
      />

      <InstagramGrid
        instagramUrl={siteConfig.socialLinks.instagram}
        images={instagramImages}
      />
    </>
  );
}
