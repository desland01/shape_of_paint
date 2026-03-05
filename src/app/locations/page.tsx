import type { Metadata } from "next";
import Link from "next/link";
import { FeatureSection } from "@/components/sections/FeatureSection";
import { PageHero } from "@/components/sections/PageHero";
import { SectionWrapper } from "@/components/shared/SectionWrapper";
import { SlideUp, StaggerContainer } from "@/components/ui/motion";
import {
  CITY_CONTENT,
  CITY_SLUGS,
  INDEXABLE_SERVICE_SLUGS,
  SERVICE_CONTENT,
  getCityPath,
} from "@/config/local-seo";
import { siteConfig } from "@/config/site";
import { generateBreadcrumbSchema } from "@/lib/schema";

export const metadata: Metadata = {
  title: "Painting Service Locations",
  description:
    "Explore Shape of Paint service locations across Vancouver and the Lower Mainland. Browse each city hub and its interior, exterior, cabinet, decorative finish, deck staining, and millwork spokes.",
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
        description="Browse every city we serve across Metro Vancouver and the Lower Mainland. Each hub includes six dedicated service spokes aligned to real local demand."
        image="/images/exterior.webp"
        imageAlt="Shape of Paint service area across Metro Vancouver"
      />

      <SectionWrapper className="bg-gradient-to-b from-background via-warm-light to-background">
        <div className="mx-auto max-w-content">
          <SlideUp>
            <h2 className="mb-4 text-3xl font-normal leading-[1.2] md:text-4xl">Indexed service spokes</h2>
          </SlideUp>
          <SlideUp delay={0.05}>
            <p className="mb-6 text-lg font-normal leading-relaxed text-text-secondary">
              City hubs include these six indexable spokes. Support services stay inside project pages to keep local intent pages focused and non-cannibalizing.
            </p>
          </SlideUp>
          <div className="flex flex-wrap gap-2">
            {INDEXABLE_SERVICE_SLUGS.map((service) => (
              <span
                key={service}
                className="rounded-full border border-border-subtle bg-background px-4 py-2 text-sm font-medium text-foreground"
              >
                {SERVICE_CONTENT[service].name}
              </span>
            ))}
          </div>
        </div>
      </SectionWrapper>

      <SectionWrapper>
        <div className="mx-auto max-w-content">
          <h2 className="mb-6 text-3xl font-normal leading-[1.2] md:text-4xl">City hubs</h2>
          <p className="mb-8 text-lg font-normal leading-relaxed text-text-secondary">
            Start with your city hub to compare local service pages, process detail, and next steps.
          </p>
          <StaggerContainer className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3" staggerChildren={0.06}>
            {CITY_SLUGS.map((city) => (
              <SlideUp key={city}>
                <Link
                  href={getCityPath(city)}
                  className="group inline-flex min-h-[48px] w-full items-center justify-between rounded-2xl border border-border-subtle bg-warm-light px-5 py-4 text-base font-medium text-foreground transition-all duration-300 hover:-translate-y-0.5 hover:border-foreground/30 hover:bg-background hover:text-link-hover"
                >
                  <span>{CITY_CONTENT[city].name}</span>
                  <span aria-hidden="true" className="transition-transform duration-300 group-hover:translate-x-1">→</span>
                </Link>
              </SlideUp>
            ))}
          </StaggerContainer>
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
