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
  description: "Expert interior painting in Vancouver. Walls, ceilings, trim, baseboards, fireplaces & staircases. Clean, smooth finishes by licensed painters. Free estimate.",
};

const instagramImages = [
  { src: "/images/ig-1.webp", alt: "Shape of Paint project 1" },
  { src: "/images/ig-2.webp", alt: "Shape of Paint project 2" },
  { src: "/images/ig-3.webp", alt: "Shape of Paint project 3" },
  { src: "/images/ig-4.webp", alt: "Shape of Paint project 4" },
  { src: "/images/ig-5.webp", alt: "Shape of Paint project 5" },
  { src: "/images/ig-6.webp", alt: "Shape of Paint project 6" },
];

export default function InteriorPaintingPage() {
  const serviceJsonLd = JSON.stringify(
    generateServiceSchema({
      name: "Interior Painting",
      description:
        "Expert interior painting in Vancouver. Walls, ceilings, trim, baseboards, fireplaces and staircases with clean, lasting finishes.",
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
        description="Walls, ceilings, trim, baseboards, fireplaces, and staircases. Clean, smooth finishes that make every room in your Vancouver home look its best."
        image="/images/interior.webp"
        imageAlt="Professional interior painting in progress"
      />

      <SectionWrapper>
        <div className="md:max-w-[70%]">
          <h2 className="mb-8 text-3xl font-normal leading-[1.2] md:text-4xl">How Your Interior Painting Project Works</h2>
          <ol className="space-y-4 text-lg font-normal leading-relaxed text-text-secondary">
            <li>1. Colour consultation — We visit your home, discuss your vision, and help you choose colours that work with your space and natural light.</li>
            <li>2. Full surface protection — Your furniture, floors, and fixtures are covered and sealed before any prep work begins. Your home stays clean.</li>
            <li>3. Thorough preparation — Every surface is cleaned, sanded, patched, caulked, and primed. This is where 90% of a great paint job happens.</li>
            <li>4. Precision application — Brush, roller, or spray — our team applies professional-grade coatings with the right technique for each surface.</li>
            <li>5. Walkthrough and cleanup — We review every detail together before we leave. Your home goes back to normal — with a finish that looks great.</li>
          </ol>
        </div>
      </SectionWrapper>

      <FeatureSection
        eyebrow="Vancouver Interior Painters"
        heading="Results you'll notice the moment you walk in"
        description="Whether it's one accent wall or your whole home, our team delivers clean lines and smooth surfaces. Colours that look as good on the wall as they did on the swatch. The kind of work you notice the moment you walk in. Vancouver homeowners and designers trust us with their most detailed interior projects."
        ctaText="Get Your Free Estimate"
        ctaHref="/contact#contact-form"
        image="/images/interior-work.webp"
        imageAlt="Interior painting project by Shape of Paint"
      />

      <SectionWrapper variant="warm">
        <div className="md:max-w-[70%]">
          <h2 className="mb-8 text-3xl font-normal leading-[1.2] md:text-4xl">
            Interior Painting Services We Offer
          </h2>
          <ul className="space-y-3 text-lg font-normal leading-relaxed text-text-secondary">
            <li>Walls and ceilings — Smooth, uniform finishes in every room of your home. Eggshell, satin, matte — we help you pick the right sheen for each room.</li>
            <li>Trim and baseboards — Crisp, clean lines that frame your spaces and make the whole room look finished.</li>
            <li>Fireplaces — Transformative finishes that turn your fireplace into a focal point. Brick, stone, or mantel — we handle it.</li>
            <li>Staircases and railings — Detailed work on spindles, risers, and handrails that many painters overlook.</li>
            <li>Kitchens and bathrooms — Moisture-resistant finishes built to handle Vancouver humidity without peeling or bubbling.</li>
            <li>Bedrooms and living areas — Colours and textures tailored to how you actually live in each room.</li>
            <li>Accent walls and level 5 finishes — Bold statements with the smoothest finish available. No imperfections.</li>
          </ul>
        </div>
      </SectionWrapper>

      <SectionWrapper>
        <div className="md:max-w-[70%]">
          <h2 className="mb-4 text-3xl font-normal leading-[1.2] md:text-4xl">Explore Our Other Services</h2>
          <p className="text-lg md:text-xl font-normal leading-relaxed text-text-secondary">
            Looking for more than interior work? We also specialize in{" "}
            <Link href="/services/exterior" className="font-medium text-foreground hover:text-link-hover transition-colors duration-300">
              exterior painting in Vancouver
            </Link>{" "}
            — siding, stucco, trim, and decks built to withstand BC weather. Need a kitchen refresh? Our{" "}
            <Link href="/services/cabinets" className="font-medium text-foreground hover:text-link-hover transition-colors duration-300">
              cabinet painting services
            </Link>{" "}
            deliver a designer-quality spray finish that outperforms factory replacements.
          </p>
          <p className="mt-5 text-lg md:text-xl font-normal leading-relaxed text-text-secondary">
            If you want a quick ballpark before booking, try our{" "}
            <Link
              href="/tools/cost-calculator"
              className="font-medium text-foreground hover:text-link-hover transition-colors duration-300"
            >
              interior painting cost calculator
            </Link>
            .
          </p>
        </div>
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
