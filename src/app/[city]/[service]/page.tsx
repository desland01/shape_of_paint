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
  PRIMARY_CITY_SLUG,
  SERVICE_CONTENT,
  SERVICE_KEYWORD_OWNERSHIP,
  getCityPath,
  getCityServicePath,
  getVancouverServicePath,
  isCitySlug,
  isIndexableServiceSlug,
} from "@/config/local-seo";
import { siteConfig } from "@/config/site";
import {
  generateBreadcrumbSchema,
  generateFAQSchema,
  generateLocationServiceSchema,
} from "@/lib/schema";

interface CityServicePageProps {
  params: Promise<{ city: string; service: string }>;
}

export function generateStaticParams() {
  return CITY_SLUGS.flatMap((city) =>
    INDEXABLE_SERVICE_SLUGS.map((service) => ({ city, service }))
  );
}

function buildPrimaryKeyword(city: string, service: (typeof INDEXABLE_SERVICE_SLUGS)[number]) {
  if (city === PRIMARY_CITY_SLUG) {
    return SERVICE_KEYWORD_OWNERSHIP.vancouver[service].primary;
  }

  const serviceKeyword = SERVICE_CONTENT[service].keywordPlan?.primary ?? SERVICE_CONTENT[service].shortName;
  return `${serviceKeyword} ${city}`;
}

export async function generateMetadata({
  params,
}: CityServicePageProps): Promise<Metadata> {
  const { city, service } = await params;

  if (!isCitySlug(city) || !isIndexableServiceSlug(service)) {
    return {};
  }

  const cityData = CITY_CONTENT[city];
  const serviceData = SERVICE_CONTENT[service];
  const primaryKeyword = buildPrimaryKeyword(cityData.name.toLowerCase(), service);

  return {
    title: `${serviceData.name} ${cityData.name} BC | ${primaryKeyword}`,
    description:
      `${serviceData.name} in ${cityData.name}, BC with prep-first execution, premium product systems, and clear schedules from walkthrough to final handoff.`,
    alternates: {
      canonical: `${siteConfig.url}${getCityServicePath(city, service)}`,
    },
  };
}

function buildServiceFaq(cityName: string, serviceName: string) {
  return [
    {
      question: `How much does ${serviceName.toLowerCase()} cost in ${cityName}?`,
      answer:
        `Final pricing depends on prep level, surface condition, and project size. We provide a fixed quote after the walkthrough so scope and timeline are clear before scheduling.`,
    },
    {
      question: `How long does ${serviceName.toLowerCase()} take in ${cityName}?`,
      answer:
        "Most scopes run between 2 and 10 days depending on substrate repairs and weather constraints. Each estimate includes a staged plan with milestone dates.",
    },
    {
      question: `Do you help with product and colour decisions for ${serviceName.toLowerCase()}?`,
      answer:
        "Yes. We align primer, topcoat, and sheen to substrate condition, usage pattern, and long-term maintenance goals before production starts.",
    },
    {
      question: `What quality controls are used for ${serviceName.toLowerCase()} in ${cityName}?`,
      answer:
        "We use written prep standards, daily communication, and final punch-list walkthroughs. That structure keeps line quality, finish consistency, and site cleanliness predictable.",
    },
  ];
}

export default async function CityServicePage({ params }: CityServicePageProps) {
  const { city, service } = await params;

  if (!isCitySlug(city) || !isIndexableServiceSlug(service)) {
    notFound();
  }

  const cityData = CITY_CONTENT[city];
  const serviceData = SERVICE_CONTENT[service];
  const isPrimaryMoneyPage = city === PRIMARY_CITY_SLUG;
  const faqItems = buildServiceFaq(cityData.name, serviceData.name);

  const primaryKeyword = buildPrimaryKeyword(cityData.name.toLowerCase(), service);
  const localizedAnswer = serviceData.answerBlock.replace("Metro Vancouver", cityData.name);
  const pageUrl = `${siteConfig.url}${getCityServicePath(city, service)}`;

  const breadcrumbJsonLd = JSON.stringify(
    generateBreadcrumbSchema([
      { name: "Home", url: siteConfig.url },
      { name: "Locations", url: `${siteConfig.url}/locations` },
      { name: cityData.name, url: `${siteConfig.url}${getCityPath(city)}` },
      { name: serviceData.name, url: pageUrl },
    ])
  );

  const serviceJsonLd = JSON.stringify(
    generateLocationServiceSchema({
      city: cityData.name,
      serviceSlug: service,
      description: `${serviceData.name} in ${cityData.name}, BC delivered with prep-first execution and premium finish standards.`,
      url: pageUrl,
    })
  );

  const faqJsonLd = JSON.stringify(generateFAQSchema(faqItems));

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: breadcrumbJsonLd }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: serviceJsonLd }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: faqJsonLd }} />

      <PageHero
        heading={`${serviceData.name} in ${cityData.name}, BC`}
        description={`If you need ${primaryKeyword}, choose a prep-first team. We define scope by substrate, map product systems before production, and run a controlled schedule from setup to final walkthrough.`}
        image={serviceData.heroImage}
        imageAlt={serviceData.heroAlt}
        ctaText="Book Your Free Estimate"
        ctaHref="/contact#contact-form"
      />

      <SectionWrapper className="bg-gradient-to-b from-background via-warm-light to-background">
        <div className="mx-auto max-w-content">
          <SlideUp>
            <h2 className="mb-5 text-3xl font-normal leading-[1.2] md:text-4xl">
              Answer first: what matters most for {serviceData.shortName}
            </h2>
          </SlideUp>
          <SlideUp delay={0.05}>
            <p className="rounded-2xl border border-border-subtle bg-white/80 p-6 text-lg font-normal leading-relaxed text-text-secondary shadow-[0_20px_50px_-40px_rgba(32,42,68,0.55)]">
              {localizedAnswer}
            </p>
          </SlideUp>
        </div>
      </SectionWrapper>

      <SectionWrapper>
        <div className="mx-auto max-w-content">
          <h2 className="mb-6 text-3xl font-normal leading-[1.2] md:text-4xl">
            How we execute {serviceData.shortName} in {cityData.name}
          </h2>
          <StaggerContainer className="grid gap-6 md:grid-cols-3" staggerChildren={0.08}>
            {serviceData.processSteps.map((step, index) => (
              <SlideUp key={step}>
                <article className="h-full rounded-2xl border border-border-subtle bg-warm-light p-6">
                  <p className="mb-3 text-sm font-semibold uppercase tracking-[0.18em] text-text-secondary">
                    Step {index + 1}
                  </p>
                  <p className="text-base leading-relaxed text-foreground">{step}</p>
                </article>
              </SlideUp>
            ))}
          </StaggerContainer>
        </div>
      </SectionWrapper>

      <FeatureSection
        eyebrow={`${cityData.name} ${serviceData.name}`}
        heading="Premium finish standards with clear communication"
        description={`${serviceData.summary} We focus on prep detail, line quality, and clean site management so the finish holds up and the project experience stays structured from day one.`}
        ctaText="Request Your Estimate"
        ctaHref="/contact#contact-form"
        image={serviceData.image}
        imageAlt={serviceData.imageAlt}
      />

      <SectionWrapper variant="warm">
        <div className="mx-auto grid max-w-content gap-8 lg:grid-cols-[1.1fr_0.9fr]">
          <div>
            <h2 className="mb-5 text-3xl font-normal leading-[1.2] md:text-4xl">
              Product systems we use for {serviceData.shortName}
            </h2>
            <p className="mb-5 text-lg font-normal leading-relaxed text-text-secondary">
              Product selection is matched to your substrate and usage pattern. This keeps colour stability, adhesion, and cleanability aligned with real project conditions.
            </p>
            <div className="flex flex-wrap gap-2">
              {serviceData.brands.map((brand) => (
                <span
                  key={brand}
                  className="rounded-full border border-border-subtle bg-background px-4 py-2 text-sm font-medium text-foreground"
                >
                  {brand}
                </span>
              ))}
            </div>
          </div>

          <div className="rounded-2xl border border-border-subtle bg-background p-6">
            <h3 className="mb-4 text-2xl font-normal leading-[1.2]">Explore more</h3>
            <p className="mb-4 text-base leading-relaxed text-text-secondary">
              Explore related painting services in {cityData.name} and our detailed Vancouver guides.
            </p>
            <ul className="space-y-3 text-base leading-relaxed text-text-secondary">
              <li>
                <Link
                  href={getCityPath(city)}
                  className="inline-flex min-h-[48px] items-center font-medium text-foreground transition-colors duration-300 hover:text-link-hover"
                >
                  Back to {cityData.name} location hub
                </Link>
              </li>
              {!isPrimaryMoneyPage && (
                <li>
                  <Link
                    href={getVancouverServicePath(service)}
                    className="inline-flex min-h-[48px] items-center font-medium text-foreground transition-colors duration-300 hover:text-link-hover"
                  >
                    View {serviceData.name.toLowerCase()} in Vancouver
                  </Link>
                </li>
              )}
              {INDEXABLE_SERVICE_SLUGS.filter((item) => item !== service).slice(0, 2).map((otherService) => (
                <li key={otherService}>
                  <Link
                    href={getCityServicePath(city, otherService)}
                    className="inline-flex min-h-[48px] items-center font-medium text-foreground transition-colors duration-300 hover:text-link-hover"
                  >
                    {SERVICE_CONTENT[otherService].name} in {cityData.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </SectionWrapper>

      <SectionWrapper variant="warm-light">
        <div className="mx-auto max-w-content">
          <h2 className="mb-8 text-3xl font-normal leading-[1.2] md:text-4xl">
            FAQs: {serviceData.name} in {cityData.name}
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
    </>
  );
}
