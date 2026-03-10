import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { FeatureSection } from "@/components/sections/FeatureSection";
import { PageHero } from "@/components/sections/PageHero";
import { SectionWrapper } from "@/components/shared/SectionWrapper";
import { SlideUp, StaggerContainer } from "@/components/ui/motion";
import {
  CITY_CONTENT,
  CITY_SLUGS,
  INDEXABLE_SERVICE_SLUGS,
  SERVICE_CONTENT,
  SERVICE_KEYWORD_OWNERSHIP,
  SUPPORT_SERVICE_SLUGS,
  getCityPath,
  getCityServicePath,
  getVancouverServicePath,
  isCitySlug,
} from "@/config/local-seo";
import { siteConfig } from "@/config/site";
import {
  generateBreadcrumbSchema,
  generateFAQSchema,
  generateLocationHubSchema,
} from "@/lib/schema";

interface CityPageProps {
  params: Promise<{ city: string }>;
}

export function generateStaticParams() {
  return CITY_SLUGS.map((city) => ({ city }));
}

export async function generateMetadata({ params }: CityPageProps): Promise<Metadata> {
  const { city } = await params;

  if (!isCitySlug(city)) {
    return {};
  }

  const cityData = CITY_CONTENT[city];

  return {
    title: `House Painters ${cityData.name} BC | Interior, Exterior, Cabinets, Decorative Finishes`,
    description:
      `House painters in ${cityData.name}, BC for interior painting, exterior painting, cabinet painting, Venetian plaster decorative finishes, deck and fence staining, and custom millwork feature walls.`,
    alternates: {
      canonical: `${siteConfig.url}${getCityPath(city)}`,
    },
  };
}

function buildCityFaq(cityName: string) {
  return [
    {
      question: `What painting services are available in ${cityName}?`,
      answer:
        `We provide interior painting, exterior painting, cabinet painting, decorative finishes, deck and fence staining, and custom millwork feature wall finishing in ${cityName}.`,
    },
    {
      question: `How much does painting cost in ${cityName}?`,
      answer:
        `Interior scopes in ${cityName} usually start around $3 to $8 per square foot, while exterior scopes are often $4 to $12 per square foot. Final pricing depends on prep level, access, and material system selection.`,
    },
    {
      question: `Do you handle Venetian plaster and decorative finishes in ${cityName}?`,
      answer:
        "Yes. Decorative finishes are available for feature walls and custom interior scopes with sample-board approval before full production.",
    },
    {
      question: `Can you restore outdoor wood surfaces in ${cityName}?`,
      answer:
        "Yes. We handle deck and fence staining with wash prep, moisture checks, and penetrating stain systems selected for local weather cycles.",
    },
    {
      question: `How does your process reduce project risk in ${cityName}?`,
      answer:
        "Every project starts with a structured walkthrough, written prep standards, and product mapping per surface. Daily communication and final punch-list reviews keep schedule and finish quality aligned.",
    },
  ];
}

export default async function CityPage({ params }: CityPageProps) {
  const { city } = await params;

  if (!isCitySlug(city)) {
    notFound();
  }

  const cityData = CITY_CONTENT[city];
  const isVancouver = city === "vancouver";
  const faqItems = buildCityFaq(cityData.name);

  const breadcrumbJsonLd = JSON.stringify(
    generateBreadcrumbSchema([
      { name: "Home", url: siteConfig.url },
      { name: "Locations", url: `${siteConfig.url}/locations` },
      { name: cityData.name, url: `${siteConfig.url}${getCityPath(city)}` },
    ])
  );

  const locationHubJsonLd = JSON.stringify(
    generateLocationHubSchema({
      city: cityData.name,
      url: `${siteConfig.url}${getCityPath(city)}`,
      serviceSlugs: [...INDEXABLE_SERVICE_SLUGS],
    })
  );

  const faqJsonLd = JSON.stringify(generateFAQSchema(faqItems));

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: breadcrumbJsonLd }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: locationHubJsonLd }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: faqJsonLd }} />

      <PageHero
        heading={`House Painters in ${cityData.name}, BC`}
        description={`If you need house painters in ${cityData.name}, start with a prep-first team that handles interior painting, exterior painting, cabinet painting, decorative finishes, deck and fence staining, and custom millwork feature walls with clear scheduling and clean site control.`}
        image={cityData.heroImage}
        imageAlt={cityData.heroAlt}
        ctaText="Book Your Free Estimate"
        ctaHref="/contact#contact-form"
      />

      <SectionWrapper className="bg-gradient-to-b from-background via-warm-light to-background">
        <div className="mx-auto max-w-content">
          <SlideUp>
            <h2 className="mb-5 text-3xl font-normal leading-[1.2] md:text-4xl">
              Choosing the right painter in {cityData.name}
            </h2>
          </SlideUp>
          <SlideUp delay={0.05}>
            <p className="mb-4 rounded-2xl border border-border-subtle bg-white/80 p-6 text-lg font-normal leading-relaxed text-text-secondary shadow-[0_20px_50px_-40px_rgba(32,42,68,0.55)]">
              The best results in {cityData.name} come from teams that control prep standards, define products by substrate, and communicate scope daily. That approach protects timeline certainty and finish quality at the same time.
            </p>
          </SlideUp>
          <SlideUp delay={0.1}>
            <p className="text-lg font-normal leading-relaxed text-text-secondary">
              {cityData.summary}
            </p>
          </SlideUp>
        </div>
      </SectionWrapper>

      <SectionWrapper variant="warm">
        <div className="mx-auto max-w-content">
          <h2 className="mb-6 text-3xl font-normal leading-[1.2] md:text-4xl">
            Service spokes in {cityData.name}
          </h2>
          <StaggerContainer className="grid gap-6 md:grid-cols-2 xl:grid-cols-3" staggerChildren={0.08}>
            {INDEXABLE_SERVICE_SLUGS.map((serviceSlug) => {
              const service = SERVICE_CONTENT[serviceSlug];
              const keyword =
                city === "vancouver"
                  ? SERVICE_KEYWORD_OWNERSHIP.vancouver[serviceSlug].primary
                  : `${service.keywordPlan?.primary ?? service.shortName} ${cityData.name.toLowerCase()}`;

              return (
                <SlideUp key={serviceSlug}>
                  <article className="group h-full rounded-2xl border border-border-subtle bg-background p-6 transition-all duration-500 hover:-translate-y-1 hover:border-foreground/30 hover:shadow-[0_20px_40px_-30px_rgba(32,42,68,0.55)]">
                    <p className="mb-3 inline-flex rounded-full bg-warm px-3 py-1 text-xs font-semibold uppercase tracking-[0.16em] text-foreground">
                      {keyword}
                    </p>
                    <h3 className="mb-3 text-2xl font-normal leading-[1.2]">{service.name}</h3>
                    <p className="mb-4 text-base leading-relaxed text-text-secondary">{service.summary}</p>
                    <Link
                      href={getCityServicePath(city, serviceSlug)}
                      className="inline-flex min-h-[48px] items-center text-sm font-medium uppercase tracking-[0.12em] text-foreground transition-colors duration-300 hover:text-link-hover"
                    >
                      View {service.name}
                    </Link>
                  </article>
                </SlideUp>
              );
            })}
          </StaggerContainer>
        </div>
      </SectionWrapper>

      <SectionWrapper>
        <div className="mx-auto grid max-w-content gap-8 lg:grid-cols-[1.25fr_0.75fr]">
          <div>
            <h2 className="mb-6 text-3xl font-normal leading-[1.2] md:text-4xl">
              Neighbourhood coverage in {cityData.name}
            </h2>
            <p className="mb-5 text-lg font-normal leading-relaxed text-text-secondary">
              We regularly service {cityData.neighborhoods.join(", ")}. Nearby neighbourhoods are usually scheduled through the same local crew and project manager.
            </p>
            <div className="flex flex-wrap gap-2">
              {cityData.neighborhoods.map((neighborhood) => (
                <span
                  key={neighborhood}
                  className="rounded-full border border-border-subtle bg-warm-light px-4 py-2 text-sm font-medium text-foreground"
                >
                  {neighborhood}
                </span>
              ))}
            </div>
          </div>

          <div className="rounded-2xl border border-border-subtle bg-warm-light p-6">
            <h3 className="mb-4 text-2xl font-normal leading-[1.2]">Support capabilities</h3>
            <p className="mb-4 text-base leading-relaxed text-text-secondary">
              We do not publish separate city spokes for low-demand terms. These capabilities are integrated into project scopes where they improve outcome quality.
            </p>
            <ul className="space-y-3 text-base leading-relaxed text-text-secondary">
              {SUPPORT_SERVICE_SLUGS.map((supportService) => (
                <li key={supportService}>
                  <span className="font-medium text-foreground">{SERVICE_CONTENT[supportService].name}:</span>{" "}
                  {SERVICE_CONTENT[supportService].summary}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </SectionWrapper>

      {!isVancouver && (
        <SectionWrapper variant="warm-light">
          <div className="mx-auto max-w-content rounded-2xl border border-border-subtle bg-background p-8 shadow-[0_20px_50px_-40px_rgba(32,42,68,0.55)]">
            <h2 className="mb-4 text-3xl font-normal leading-[1.2] md:text-4xl">
              Vancouver painting guides
            </h2>
            <p className="mb-4 text-lg font-normal leading-relaxed text-text-secondary">
              Our Vancouver guides cover detailed process standards, before-and-after examples, and everything you need to make an informed decision.
            </p>
            <ul className="space-y-3 text-lg leading-relaxed text-text-secondary">
              {INDEXABLE_SERVICE_SLUGS.map((serviceSlug) => (
                <li key={serviceSlug}>
                  <Link
                    href={getVancouverServicePath(serviceSlug)}
                    className="font-medium text-foreground transition-colors duration-300 hover:text-link-hover"
                  >
                    {SERVICE_CONTENT[serviceSlug].name} in Vancouver
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </SectionWrapper>
      )}

      <SectionWrapper variant="warm-light">
        <div className="mx-auto max-w-content">
          <h2 className="mb-8 text-3xl font-normal leading-[1.2] md:text-4xl">
            FAQs for {cityData.name} homeowners
          </h2>
          <div className="divide-y divide-border-subtle rounded-2xl border border-border-subtle bg-background px-6 md:px-8">
            {faqItems.map((item) => (
              <div key={item.question} className="py-8">
                <h3 className="mb-3 text-xl font-medium text-foreground">{item.question}</h3>
                <p className="text-lg font-normal leading-relaxed text-text-secondary">{item.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </SectionWrapper>

      <FeatureSection
        eyebrow={`${cityData.name} Painting Team`}
        heading={`Ready to plan your ${cityData.name} project?`}
        description="Book a walkthrough and get a clear scope with start dates, prep standards, and fixed pricing. We respond quickly and keep communication simple from day one."
        ctaText="Request Your Estimate"
        ctaHref="/contact#contact-form"
        image="/images/about-team.webp"
        imageAlt="Shape of Paint team preparing a project"
      />
    </>
  );
}
