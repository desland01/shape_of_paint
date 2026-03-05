import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { FeatureSection } from "@/components/sections/FeatureSection";
import { PageHero } from "@/components/sections/PageHero";
import { SectionWrapper } from "@/components/shared/SectionWrapper";
import {
  CITY_CONTENT,
  CITY_SLUGS,
  PRIMARY_CITY_SLUG,
  SERVICE_CONTENT,
  SERVICE_SLUGS,
  getCityPath,
  getCityServicePath,
  getVancouverServicePath,
  isCitySlug,
  isServiceSlug,
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
    SERVICE_SLUGS.map((service) => ({ city, service }))
  );
}

export async function generateMetadata({
  params,
}: CityServicePageProps): Promise<Metadata> {
  const { city, service } = await params;

  if (!isCitySlug(city) || !isServiceSlug(service)) {
    return {};
  }

  const cityData = CITY_CONTENT[city];
  const serviceData = SERVICE_CONTENT[service];

  return {
    title: `${serviceData.name} ${cityData.name} BC`,
    description: `${serviceData.name} in ${cityData.name}, BC. Prep-first execution, premium materials, and clear timelines from consultation to final walkthrough.`,
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
        `Final pricing depends on surface condition, access, and total scope. We provide a firm quote after a walkthrough so you can compare options before scheduling your ${serviceName.toLowerCase()} project.`,
    },
    {
      question: `How long does ${serviceName.toLowerCase()} take in ${cityName}?`,
      answer:
        "Most projects run between 2 and 10 days depending on prep needs and weather exposure. We provide a staged schedule with milestones before we begin.",
    },
    {
      question: `Do you help with product and colour selection for ${serviceName.toLowerCase()}?`,
      answer:
        "Yes. We recommend product systems based on substrate, use pattern, and durability targets. We also guide colour and sheen decisions so the finish matches the space and lighting.",
    },
    {
      question: `Is your ${serviceName.toLowerCase()} process different from standard painting crews?`,
      answer:
        "Yes. We run a prep-first process, define products per surface, and complete a final walkthrough checklist before closeout. That structure is why our projects stay cleaner and hold up longer.",
    },
  ];
}

export default async function CityServicePage({ params }: CityServicePageProps) {
  const { city, service } = await params;

  if (!isCitySlug(city) || !isServiceSlug(service)) {
    notFound();
  }

  const cityData = CITY_CONTENT[city];
  const serviceData = SERVICE_CONTENT[service];
  const isPrimaryMoneyPage = city === PRIMARY_CITY_SLUG;

  const faqItems = buildServiceFaq(cityData.name, serviceData.name);

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
        description={`If you need ${serviceData.shortName} in ${cityData.name}, choose a prep-first team. We set the scope, define products for each surface, and deliver a finish designed to hold.`}
        image={serviceData.heroImage}
        imageAlt={serviceData.heroAlt}
        ctaText="Book Your Free Estimate"
        ctaHref="/contact#contact-form"
      />

      <SectionWrapper>
        <div className="mx-auto max-w-content">
          <h2 className="mb-6 text-3xl font-normal leading-[1.2] md:text-4xl">
            How we execute {serviceData.shortName} projects in {cityData.name}
          </h2>
          <ol className="space-y-4 text-lg font-normal leading-relaxed text-text-secondary">
            <li>
              1. Scope and prep planning: We assess each substrate, identify repairs, and map prep standards before production starts.
            </li>
            <li>
              2. Product system selection: Primer and topcoat choices are matched to surface conditions, use patterns, and moisture exposure.
            </li>
            <li>
              3. Controlled production: We run clean protection, maintain daily communication, and close with a full walkthrough checklist.
            </li>
          </ol>
        </div>
      </SectionWrapper>

      <FeatureSection
        eyebrow={`${cityData.name} ${serviceData.name}`}
        heading="Premium finish standards, no rushed shortcuts"
        description={`${serviceData.summary} Our crews focus on prep detail, line quality, and clean site management so the finished work still looks intentional years later.`}
        ctaText="Request Your Estimate"
        ctaHref="/contact#contact-form"
        image={serviceData.image}
        imageAlt={serviceData.imageAlt}
      />

      <SectionWrapper variant="warm">
        <div className="mx-auto max-w-content">
          <h2 className="mb-6 text-3xl font-normal leading-[1.2] md:text-4xl">
            Local links and service paths
          </h2>
          <p className="mb-4 text-lg font-normal leading-relaxed text-text-secondary">
            You are currently on the {cityData.name} {serviceData.name.toLowerCase()} page.
            Use these links to navigate the local hub and related spokes.
          </p>
          <ul className="space-y-2 text-lg font-normal leading-relaxed text-text-secondary">
            <li>
              <Link
                href={getCityPath(city)}
                className="font-medium text-foreground transition-colors duration-300 hover:text-link-hover"
              >
                Back to {cityData.name} location hub
              </Link>
            </li>
            {!isPrimaryMoneyPage && (
              <li>
                <Link
                  href={getVancouverServicePath(service)}
                  className="font-medium text-foreground transition-colors duration-300 hover:text-link-hover"
                >
                  View primary Vancouver {serviceData.name.toLowerCase()} money page
                </Link>
              </li>
            )}
            {SERVICE_SLUGS.filter((item) => item !== service).map((otherService) => (
              <li key={otherService}>
                <Link
                  href={getCityServicePath(city, otherService)}
                  className="font-medium text-foreground transition-colors duration-300 hover:text-link-hover"
                >
                  {SERVICE_CONTENT[otherService].name} in {cityData.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </SectionWrapper>

      <SectionWrapper>
        <div className="mx-auto max-w-content">
          <h2 className="mb-8 text-3xl font-normal leading-[1.2] md:text-4xl">
            FAQs: {serviceData.name} in {cityData.name}
          </h2>
          <div className="divide-y divide-border-subtle">
            {faqItems.map((item, i) => (
              <div key={item.question} className={i === 0 ? "pb-8" : "py-8"}>
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
