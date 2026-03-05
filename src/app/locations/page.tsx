import type { Metadata } from "next";
import Link from "next/link";
import { FeatureSection } from "@/components/sections/FeatureSection";
import { PageHero } from "@/components/sections/PageHero";
import { SectionWrapper } from "@/components/shared/SectionWrapper";
import { CITY_CONTENT, CITY_SLUGS, getCityPath } from "@/config/local-seo";
import { siteConfig } from "@/config/site";
import { generateBreadcrumbSchema } from "@/lib/schema";

export const metadata: Metadata = {
  title: "Painting Service Locations",
  description:
    "Explore all Shape of Paint service locations across Vancouver and the Lower Mainland. Browse city hubs and service-specific pages.",
  alternates: {
    canonical: `${siteConfig.url}/locations`,
  },
};

export default function LocationsPage() {
  const breadcrumbJsonLd = JSON.stringify(
    generateBreadcrumbSchema([
      { name: "Home", url: siteConfig.url },
      { name: "Locations", url: `${siteConfig.url}/locations` },
    ])
  );

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: breadcrumbJsonLd }} />

      <PageHero
        heading="Painting Locations"
        description="Browse every city we serve across Metro Vancouver and the Lower Mainland. Each location includes dedicated service spokes for interior, exterior, and cabinet painting."
        image="/images/exterior.webp"
        imageAlt="Shape of Paint service area across Metro Vancouver"
      />

      <SectionWrapper>
        <div className="mx-auto max-w-content">
          <h2 className="mb-6 text-3xl font-normal leading-[1.2] md:text-4xl">
            City hubs
          </h2>
          <p className="mb-8 text-lg font-normal leading-relaxed text-text-secondary">
            Start with your city hub to compare local service pages, process details, and next steps.
          </p>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {CITY_SLUGS.map((city) => (
              <Link
                key={city}
                href={getCityPath(city)}
                className="inline-flex min-h-[48px] items-center justify-between rounded-sm border border-border-subtle px-5 py-4 text-base font-medium text-foreground transition-colors duration-300 hover:bg-warm hover:text-link-hover"
              >
                <span>{CITY_CONTENT[city].name}</span>
                <span aria-hidden="true">→</span>
              </Link>
            ))}
          </div>
        </div>
      </SectionWrapper>

      <FeatureSection
        heading="Need a firm quote first?"
        description="Tell us your city, scope, and timeline. We will schedule a walkthrough and provide a clear estimate with prep standards and completion targets."
        ctaText="Request Your Estimate"
        ctaHref="/contact#contact-form"
        image="/images/about-team.webp"
        imageAlt="Shape of Paint team during a site walkthrough"
      />
    </>
  );
}
