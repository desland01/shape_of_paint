import type { Metadata } from "next";
import Link from "next/link";
import { PageHero } from "@/components/sections/PageHero";
import { FeatureSection } from "@/components/sections/FeatureSection";
import { ContactCTA } from "@/components/sections/ContactCTA";
import { SectionWrapper } from "@/components/shared/SectionWrapper";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  title: "Painters Coquitlam BC | Interior & Exterior | Shape of Paint",
  description:
    "Professional painters in Coquitlam, BC. Interior & exterior painting for Burke Mountain, Westwood Plateau & Maillardville. Free estimate.",
  alternates: {
    canonical: `${siteConfig.url}/areas/coquitlam`,
  },
  openGraph: {
    title: "Painters Coquitlam BC | Interior & Exterior | Shape of Paint",
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
      />

      <SectionWrapper>
        <div className="max-w-3xl">
          <h2 className="mb-6 text-3xl font-bold">
            Interior & Exterior Painting Services in Coquitlam
          </h2>
          <div className="space-y-4 text-lg font-normal leading-relaxed text-muted-foreground">
            <p>
              Coquitlam is one of the Lower Mainland's fastest-growing communities. Your home
              deserves painters who understand the unique challenges of this diverse city. Whether
              you live in a brand-new Burke Mountain build or an established home near Lafarge Lake,
              our painters are ready to transform your space.
            </p>
            <p>
              We handle interior painting that brings your vision to life. Think fresh walls, crisp
              trim, perfectly painted ceilings, and detailed baseboards. We also paint fireplaces,
              staircases, and every surface that matters. You pick the colours. We handle the
              craftsmanship.
            </p>
            <p>
              Our exterior painting protects your investment against Vancouver's rain and BC
              weather. Siding, stucco, trim, soffits, decks — we use premium coatings that last
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
        description="We know Coquitlam's unique mix of new builds and established homes. We handle everything from state-of-the-art finishes in Burke Mountain new construction to carefully restoring heritage details in Maillardville. Whether your home sits on a quiet street near Austin Heights or overlooks the Evergreen Extension SkyTrain corridor, we bring the same level of precision and care to every project. We understand what matters to Coquitlam homeowners: quality craftsmanship, reliable timelines, and painters you can trust in your home."
        ctaText="Get Your Free Estimate"
        ctaHref="/contact/estimate"
        image="/images/interior.jpg"
        imageAlt="Professional interior painting in Coquitlam home"
        reversed={false}
      />

      <SectionWrapper variant="warm">
        <div className="max-w-3xl">
          <h2 className="mb-8 text-3xl font-bold">Coquitlam Neighbourhoods We Serve</h2>
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
          <h2 className="mb-6 text-3xl font-bold">Explore Our Painting Services</h2>
          <p className="space-y-4 text-lg font-normal leading-relaxed text-muted-foreground">
            Shape of Paint specializes in three core services for Coquitlam homes:{" "}
            <Link
              href="/services/interior"
              className="font-semibold text-foreground transition-opacity hover:opacity-70"
            >
              interior painting
            </Link>
            {" that transforms every room,"}
            <Link
              href="/services/exterior"
              className="font-semibold text-foreground transition-opacity hover:opacity-70"
            >
              {" exterior painting"}
            </Link>
            {" that protects your investment, and"}
            <Link
              href="/services/cabinets"
              className="font-semibold text-foreground transition-opacity hover:opacity-70"
            >
              {" cabinet painting"}
            </Link>
            {" that gives kitchens and bathrooms a brand-new look without the renovation cost."}
            {" Each service reflects our commitment to quality finishes and reliable craftsmanship."}
          </p>
        </div>
      </SectionWrapper>

      <ContactCTA
        heading="Ready to transform your Coquitlam home?"
        description="Get a free, no-obligation estimate from Shape of Paint. We'll visit your home, listen to your vision, and show you exactly what's possible."
        ctaText="Get Your Free Estimate"
        ctaHref="/contact/estimate"
        image="/images/exterior.jpg"
        imageAlt="Exterior painting in Coquitlam BC"
      />
    </>
  );
}
