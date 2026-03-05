import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { FeatureSection } from "@/components/sections/FeatureSection";
import { PageHero } from "@/components/sections/PageHero";
import { SectionWrapper } from "@/components/shared/SectionWrapper";
import {
  CITY_CONTENT,
  CITY_SLUGS,
  SERVICE_CONTENT,
  SERVICE_SLUGS,
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
    title: `House Painters ${cityData.name} BC`,
    description: `House painters in ${cityData.name}, BC. Interior, exterior, and cabinet painting with prep-first execution, clear timelines, and premium finishes.`,
    alternates: {
      canonical: `${siteConfig.url}${getCityPath(city)}`,
    },
  };
}

function buildCityFaq(cityName: string) {
  return [
    {
      question: `How much does house painting cost in ${cityName}?`,
      answer:
        `Interior projects in ${cityName} usually range from $3 to $8 per square foot, while exterior scopes are often $4 to $12 per square foot. We provide a firm quote after an on-site walkthrough so the full scope is clear before work starts.`,
    },
    {
      question: `Do you provide both interior and exterior painting in ${cityName}?`,
      answer:
        "Yes. We handle interior rooms, trim, and detail surfaces, plus exterior siding, stucco, trim, and decks. Cabinet refinishing is also available with a controlled spray process for a smooth finish.",
    },
    {
      question: `How long does a typical painting project take in ${cityName}?`,
      answer:
        "Most interior phases run 2 to 7 days depending on scope. Exterior timelines depend on weather windows and substrate condition. Every estimate includes a staged schedule with start and completion targets.",
    },
    {
      question: `What makes your process different from other painters in ${cityName}?`,
      answer:
        "We spend more time on prep, define products per surface, and close each project with a detailed walkthrough. That process is what gives homeowners cleaner lines, better durability, and fewer callbacks.",
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
      serviceSlugs: [...SERVICE_SLUGS],
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
        description={`If you need house painters in ${cityData.name}, start with process. We scope each surface, prep for the local climate, and deliver interior, exterior, and cabinet finishes that hold up.`}
        image={cityData.heroImage}
        imageAlt={cityData.heroAlt}
        ctaText="Book Your Free Estimate"
        ctaHref="/contact#contact-form"
      />

      <SectionWrapper>
        <div className="mx-auto max-w-content">
          <h2 className="mb-6 text-3xl font-normal leading-[1.2] md:text-4xl">
            Local team. Structured process. Lasting finish.
          </h2>
          <p className="mb-4 text-lg font-normal leading-relaxed text-text-secondary">
            {cityData.summary}
          </p>
          <p className="text-lg font-normal leading-relaxed text-text-secondary">
            Your project starts with a clear walkthrough, a written scope, and product recommendations tied to your actual surfaces. No vague allowances. No rushed prep. Just clear communication and execution that respects your home.
          </p>
        </div>
      </SectionWrapper>

      <SectionWrapper variant="warm">
        <div className="mx-auto max-w-content">
          <h2 className="mb-6 text-3xl font-normal leading-[1.2] md:text-4xl">
            Services in {cityData.name}
          </h2>
          <div className="grid gap-6 md:grid-cols-3">
            {SERVICE_SLUGS.map((serviceSlug) => {
              const service = SERVICE_CONTENT[serviceSlug];
              return (
                <article key={serviceSlug} className="rounded-sm border border-border-subtle bg-background p-6">
                  <h3 className="mb-3 text-2xl font-normal leading-[1.2]">{service.name}</h3>
                  <p className="mb-4 text-base leading-relaxed text-text-secondary">{service.summary}</p>
                  <Link
                    href={getCityServicePath(city, serviceSlug)}
                    className="inline-flex min-h-[48px] items-center text-sm font-medium uppercase tracking-[0.12em] text-foreground transition-colors duration-300 hover:text-link-hover"
                  >
                    View {service.name}
                  </Link>
                </article>
              );
            })}
          </div>
        </div>
      </SectionWrapper>

      <SectionWrapper>
        <div className="mx-auto max-w-content">
          <h2 className="mb-6 text-3xl font-normal leading-[1.2] md:text-4xl">
            Neighbourhoods We Regularly Serve
          </h2>
          <p className="mb-4 text-lg font-normal leading-relaxed text-text-secondary">
            We service projects across {cityData.name}, including {cityData.neighborhoods.join(", ")}. If your neighbourhood is nearby, we can usually schedule a walkthrough quickly.
          </p>
          {!isVancouver && (
            <p className="text-lg font-normal leading-relaxed text-text-secondary">
              For homeowners comparing options across cities, our Vancouver service pages remain the primary money pages for each service intent. Use them for deeper process proof and service-specific detail:
            </p>
          )}
          {!isVancouver && (
            <ul className="mt-4 space-y-2 text-lg font-normal leading-relaxed text-text-secondary">
              {SERVICE_SLUGS.map((serviceSlug) => (
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
          )}
        </div>
      </SectionWrapper>

      <SectionWrapper variant="warm-light">
        <div className="mx-auto max-w-content">
          <h2 className="mb-8 text-3xl font-normal leading-[1.2] md:text-4xl">
            FAQs for {cityData.name} Homeowners
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
