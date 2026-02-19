import type { Metadata } from "next";
import Link from "next/link";
import { PageHero } from "@/components/sections/PageHero";
import { FeatureSection } from "@/components/sections/FeatureSection";
import { SectionWrapper } from "@/components/shared/SectionWrapper";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  title: "Painters Coquitlam BC | Shape of Paint",
  description:
    "Professional painters in Coquitlam, BC. Interior & exterior painting for Burke Mountain, Westwood Plateau & Maillardville. Free estimate.",
  alternates: {
    canonical: `${siteConfig.url}/areas/coquitlam`,
  },
  openGraph: {
    title: "Painters Coquitlam BC | Shape of Paint",
    description:
      "Professional painters in Coquitlam, BC. Interior & exterior painting for Burke Mountain, Westwood Plateau & Maillardville. Free estimate.",
    url: `${siteConfig.url}/areas/coquitlam`,
    type: "website",
  },
};

export default function CoquitlamAreaPage() {
  return (
    <>
      <PageHero
        heading="House Painters in Coquitlam, BC"
        description="Trusted painters serving Burke Mountain, Westwood Plateau, Maillardville, and every neighbourhood in Coquitlam. Interior, exterior, and cabinet painting."
        image="/images/exterior-portfolio-2.webp"
        imageAlt="House painters in Coquitlam"
      />

      <SectionWrapper>
        <div className="max-w-3xl">
          <h2 className="mb-6 text-3xl font-normal leading-[1.2]">
            New Construction to Established Character Homes
          </h2>
          <div className="space-y-4 text-lg font-normal leading-relaxed text-muted-foreground">
            <p>
              As painters in Coquitlam, we know this is one of the Lower Mainland's fastest-growing
              communities. Your home deserves painters who understand the unique challenges of this
              diverse city. Whether you live in a brand-new Burke Mountain build or an established
              home near Lafarge Lake, our team is ready to transform your space.
            </p>
            <p>
              We handle interior painting that brings your vision to life. Think fresh walls, crisp
              trim, perfectly painted ceilings, and detailed baseboards. We also paint fireplaces,
              staircases, and every surface that matters. You pick the colours. We handle the
              craftsmanship.
            </p>
            <p>
              Our exterior painting protects your investment against Vancouver's rain and BC
              weather. Siding, stucco, trim, soffits, decks — we use professional-grade coatings that last
              for years. Your Coquitlam home stays beautiful and protected.
            </p>
            <p>
              From new builds in Westwood Plateau to heritage homes in Maillardville, we've painted
              every type of property across Coquitlam. Every project gets our full attention. Every
              homeowner gets results they're proud to show off.
            </p>
          </div>
        </div>
      </SectionWrapper>

      <FeatureSection
        eyebrow="Coquitlam Painters"
        heading="Local Expertise for Your Neighbourhood"
        description="We know Coquitlam's mix of new builds and older homes. We handle fresh finishes in Burke Mountain new construction and careful restoration in Maillardville. Whether your home sits near Austin Heights or overlooks the Evergreen SkyTrain corridor, we bring the same care to every project. Quality work, reliable timelines, and painters you can trust in your home."
        ctaText="Get Your Free Estimate"
        ctaHref="/contact/estimate"
        image="/images/interior.webp"
        imageAlt="Professional interior painting in Coquitlam home"
        reversed={false}
      />

      <SectionWrapper variant="warm">
        <div className="max-w-3xl">
          <h2 className="mb-8 text-3xl font-normal leading-[1.2]">Coquitlam Neighbourhoods We Serve</h2>
          <div className="space-y-4 text-lg font-normal leading-relaxed text-muted-foreground">
            <p className="mb-4">
              Shape of Paint serves all of Coquitlam. We've painted homes in every neighbourhood:
            </p>
            <ul className="space-y-2 pl-6">
              <li>• Burke Mountain — new builds and modern homes</li>
              <li>• Westwood Plateau — growing community with contemporary properties</li>
              <li>• Maillardville — established neighbourhood with heritage character</li>
              <li>• Austin Heights — mix of family homes and townhouses</li>
              <li>• Ranch Park — spacious family properties</li>
              <li>• Town Centre — diverse residential and mixed-use areas</li>
            </ul>
            <p className="mt-6">
              Plus, we serve the areas surrounding Lafarge Lake, Coquitlam Centre, and the rapid
              growth along the Evergreen Extension SkyTrain corridor. No matter your address in
              Coquitlam, we're here to help.
            </p>
          </div>
        </div>
      </SectionWrapper>

      <SectionWrapper>
        <div className="max-w-3xl">
          <h2 className="mb-6 text-3xl font-normal leading-[1.2]">Explore Our Painting Services</h2>
          <p className="space-y-4 text-lg font-normal leading-relaxed text-muted-foreground">
            Shape of Paint specializes in three core services for Coquitlam homes:{" "}
            <Link
              href="/services/interior"
              className="font-medium text-foreground hover:text-link-hover transition-colors duration-300"
            >
              interior painting
            </Link>
            {" that transforms every room,"}
            <Link
              href="/services/exterior"
              className="font-medium text-foreground hover:text-link-hover transition-colors duration-300"
            >
              {" exterior painting"}
            </Link>
            {" that protects your investment, and"}
            <Link
              href="/services/cabinets"
              className="font-medium text-foreground hover:text-link-hover transition-colors duration-300"
            >
              {" cabinet painting"}
            </Link>
            {" that gives kitchens and bathrooms a brand-new look without the renovation cost."}
            {" Each service reflects our commitment to quality finishes and reliable craftsmanship."}
          </p>
        </div>
      </SectionWrapper>

      <FeatureSection
        heading="Ready to transform your Coquitlam home?"
        description="Get a free, no-obligation estimate from Shape of Paint. We'll visit your home, listen to your vision, and show you exactly what's possible."
        ctaText="Get Your Free Estimate"
        ctaHref="/contact/estimate"
        image="/images/exterior.webp"
        imageAlt="Exterior painting in Coquitlam BC"
      />
    </>
  );
}
