import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { BrandLogos } from "@/components/sections/BrandLogos";
import { FeatureSection } from "@/components/sections/FeatureSection";
import { InstagramGrid } from "@/components/sections/InstagramGrid";
import { PageHero } from "@/components/sections/PageHero";
import { Testimonials } from "@/components/sections/Testimonials";
import { DecorativeIcon } from "@/components/shared/DecorativeIcon";
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
  type IndexableServiceSlug,
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

const instagramImages = [
  { src: "/images/ig-1.webp", alt: "Vancouver home interior freshly painted by Shape of Paint" },
  { src: "/images/ig-2.webp", alt: "Kitchen cabinet spray finish in matte white" },
  { src: "/images/ig-3.webp", alt: "Exterior painting detail on Vancouver craftsman home" },
  { src: "/images/ig-4.webp", alt: "Hand-finished accent wall with designer colour palette" },
  { src: "/images/ig-5.webp", alt: "Cabinet door drying in spray booth - artisan finish process" },
  { src: "/images/ig-6.webp", alt: "Before and after interior painting transformation" },
] as const;

const PROCESS_CARD_LABELS = ["Prep", "Coat plan", "Final review"] as const;

const SERVICE_BRAND_LOGO_FILTERS: Record<IndexableServiceSlug, string[]> = {
  "interior-painting": ["interior"],
  "exterior-painting": ["exterior"],
  "cabinet-painting": ["cabinets"],
  "decorative-finishes": ["interior"],
  "deck-fence-staining": ["exterior"],
  "custom-millwork-feature-walls": ["interior"],
};

const FEATURED_TESTIMONIAL_INDEX: Partial<Record<IndexableServiceSlug, number>> = {
  "interior-painting": 5,
  "exterior-painting": 4,
  "cabinet-painting": 3,
  "decorative-finishes": 0,
  "deck-fence-staining": 4,
  "custom-millwork-feature-walls": 2,
};

export function generateStaticParams() {
  return CITY_SLUGS.flatMap((city) =>
    INDEXABLE_SERVICE_SLUGS.map((service) => ({ city, service }))
  );
}

function buildPrimaryKeyword(city: string, service: IndexableServiceSlug) {
  if (city === PRIMARY_CITY_SLUG) {
    return SERVICE_KEYWORD_OWNERSHIP.vancouver[service].primary;
  }

  const serviceKeyword = SERVICE_CONTENT[service].keywordPlan?.primary ?? SERVICE_CONTENT[service].shortName;
  return `${serviceKeyword} ${city}`;
}

function getOrderedTestimonials(service: IndexableServiceSlug) {
  const featuredIndex = FEATURED_TESTIMONIAL_INDEX[service];

  if (featuredIndex === undefined) {
    return [...siteConfig.testimonials];
  }

  const featured = siteConfig.testimonials[featuredIndex];

  return [
    featured,
    ...siteConfig.testimonials.filter((_, index) => index !== featuredIndex),
  ];
}

function getFeatureCtaText(service: IndexableServiceSlug) {
  switch (service) {
    case "cabinet-painting":
      return "See Cabinet Work";
    case "decorative-finishes":
      return "See Finish Details";
    case "deck-fence-staining":
      return "See Exterior Work";
    default:
      return "See Recent Projects";
  }
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

  const localizedAnswer = serviceData.answerBlock.replace("Metro Vancouver", cityData.name);
  const pageUrl = `${siteConfig.url}${getCityServicePath(city, service)}`;
  const testimonials = getOrderedTestimonials(service);
  const brandLogoFilter = SERVICE_BRAND_LOGO_FILTERS[service];
  const neighborhoodsPreview = cityData.neighborhoods.slice(0, 4).join(" • ");
  const featureImageAspect =
    service === "cabinet-painting" ||
    service === "decorative-finishes" ||
    service === "custom-millwork-feature-walls"
      ? "square"
      : "landscape";
  const relatedServiceCards = INDEXABLE_SERVICE_SLUGS.filter((item) => item !== service)
    .slice(0, isPrimaryMoneyPage ? 3 : 2)
    .map((relatedService) => ({
      kicker: "Related service",
      title: SERVICE_CONTENT[relatedService].name,
      description: `See how ${SERVICE_CONTENT[relatedService].shortName} fits into the same ${cityData.name} project plan.`,
      href: getCityServicePath(city, relatedService),
      image: SERVICE_CONTENT[relatedService].image,
      imageAlt: SERVICE_CONTENT[relatedService].imageAlt,
    }));
  const linkCards = [
    {
      kicker: "Location hub",
      title: `${cityData.name} painting guide`,
      description: `Start with the full scope across ${cityData.name} neighbourhoods and service types.`,
      href: getCityPath(city),
      image: cityData.heroImage,
      imageAlt: cityData.heroAlt,
    },
    ...(!isPrimaryMoneyPage
      ? [
          {
            kicker: "Primary guide",
            title: `${serviceData.name} in Vancouver`,
            description: "See our main market page, broader proof, and the full Vancouver guide.",
            href: getVancouverServicePath(service),
            image: serviceData.image,
            imageAlt: serviceData.imageAlt,
          },
        ]
      : []),
    ...relatedServiceCards,
  ];
  const testimonialHeading = isPrimaryMoneyPage
    ? `${siteConfig.googleBusiness.reviewCount} Google reviews from Vancouver homeowners`
    : `Homeowners across ${cityData.name} call us when the finish needs to feel right the first time`;

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
        description={`If you need ${serviceData.shortName} in ${cityData.name}, choose a prep-first team. We define scope by substrate, map product systems before production, and run a controlled schedule from setup to final walkthrough.`}
        image={serviceData.heroImage}
        imageAlt={serviceData.heroAlt}
        ctaText="Book Your Free Estimate"
        ctaHref="/contact#contact-form"
      />

      <SectionWrapper className="relative overflow-hidden bg-gradient-to-b from-background via-warm-light to-background">
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute -left-24 top-10 h-64 w-64 rounded-full bg-accent-gold/10 blur-3xl" />
          <div className="absolute right-0 top-1/2 h-72 w-72 -translate-y-1/2 rounded-full bg-brand-secondary/20 blur-3xl" />
        </div>

        <div className="relative mx-auto grid max-w-[1200px] gap-8 lg:grid-cols-[1.15fr_0.85fr]">
          <div>
            <SlideUp>
              <DecorativeIcon variant="leaf" className="mb-5 justify-start" size={72} />
            </SlideUp>
            <SlideUp delay={0.05}>
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-text-muted">
                {cityData.name} • {serviceData.name}
              </p>
            </SlideUp>
            <SlideUp delay={0.1}>
              <h2 className="mt-4 text-3xl font-normal leading-[1.15] md:text-4xl lg:text-5xl">
                What good {serviceData.shortName} looks like in {cityData.name}
              </h2>
            </SlideUp>
            <SlideUp delay={0.15}>
              <p className="mt-4 text-lg font-normal leading-relaxed text-text-secondary md:text-xl">
                {serviceData.introLead}
              </p>
            </SlideUp>
            {serviceData.cityOverrides?.[city]?.localChallenge && (
              <SlideUp delay={0.17}>
                <p className="mt-4 text-lg font-normal leading-relaxed text-text-secondary">
                  {serviceData.cityOverrides[city]!.localChallenge}
                </p>
              </SlideUp>
            )}
            <SlideUp delay={0.2}>
              <p className="mt-6 rounded-[28px] border border-border-subtle bg-background/90 p-6 text-lg font-normal leading-relaxed text-text-secondary shadow-[0_30px_80px_-55px_rgba(32,42,68,0.65)] md:p-8">
                {localizedAnswer}
              </p>
            </SlideUp>
            {serviceData.cityOverrides?.[city]?.pricingContext && (
              <SlideUp delay={0.25}>
                <p className="mt-4 text-base font-normal leading-relaxed text-text-secondary">
                  {serviceData.cityOverrides[city]!.pricingContext}
                </p>
              </SlideUp>
            )}
          </div>

          <StaggerContainer
            className="grid gap-4 sm:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2"
            staggerChildren={0.08}
          >
            <SlideUp>
              <article className="h-full rounded-[28px] border border-border-subtle bg-white/80 p-6 shadow-[0_25px_70px_-55px_rgba(32,42,68,0.75)] backdrop-blur-sm">
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-text-muted">
                  Local proof
                </p>
                <p className="mt-4 text-5xl font-normal leading-none text-foreground">
                  {siteConfig.googleBusiness.rating.toFixed(1)}
                </p>
                <p className="mt-2 text-base leading-relaxed text-text-secondary">
                  Google rating across {siteConfig.googleBusiness.reviewCount} homeowner reviews.
                </p>
                <p className="mt-5 text-base leading-relaxed text-text-secondary">
                  Firm quotes, prep-first execution, and daily communication from first walkthrough
                  to final handoff.
                </p>
              </article>
            </SlideUp>

            <SlideUp>
              <article className="h-full rounded-[28px] border border-border-subtle bg-white/70 p-6 shadow-[0_25px_70px_-55px_rgba(32,42,68,0.75)] backdrop-blur-sm">
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-text-muted">
                  Where we work
                </p>
                <p className="mt-4 text-xl font-normal leading-relaxed text-foreground">
                  {neighborhoodsPreview}
                </p>
                <p className="mt-4 text-base leading-relaxed text-text-secondary">
                  Every area has different light, moisture, and wear. That local context changes how
                  we plan {serviceData.shortName} from the start.
                </p>
                <Link
                  href={getCityPath(city)}
                  className="mt-5 inline-flex min-h-[48px] items-center text-sm font-semibold uppercase tracking-[0.14em] text-foreground transition-colors duration-300 hover:text-link-hover"
                >
                  View the {cityData.name} hub
                </Link>
              </article>
            </SlideUp>
          </StaggerContainer>
        </div>
      </SectionWrapper>

      <FeatureSection
        eyebrow={`${cityData.name} ${serviceData.name}`}
        heading="Premium finish standards with a calmer project experience"
        description={`${serviceData.summary} In ${cityData.name}, that means better prep detail, clearer schedules, and finish decisions made before work starts so the result still feels right when the room is quiet.`}
        ctaText={getFeatureCtaText(service)}
        ctaHref="/portfolio"
        image={serviceData.image}
        imageAlt={serviceData.imageAlt}
        imageAspect={featureImageAspect}
        reversed={!isPrimaryMoneyPage}
      />

      <SectionWrapper variant="warm" className="relative overflow-hidden">
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute -right-20 top-0 h-56 w-56 rounded-full bg-accent-gold/10 blur-3xl" />
          <div className="absolute -left-20 bottom-0 h-64 w-64 rounded-full bg-background/35 blur-3xl" />
        </div>

        <div className="relative mx-auto grid max-w-[1200px] gap-10 xl:grid-cols-[1.05fr_0.95fr]">
          <div>
            <SlideUp>
              <h2 className="mb-5 text-3xl font-normal leading-[1.15] md:text-4xl lg:text-5xl">
                How we plan and deliver {serviceData.shortName} in {cityData.name}
              </h2>
            </SlideUp>
            <SlideUp delay={0.05}>
              <p className="max-w-[58ch] text-lg font-normal leading-relaxed text-text-secondary md:text-xl">
                {serviceData.summary} Every stage is written down before work begins. That keeps
                the finish clean, the timing clear, and the handoff much less stressful for the
                homeowner.
              </p>
            </SlideUp>

            <StaggerContainer className="mt-8 grid gap-5 md:grid-cols-3 xl:grid-cols-1" staggerChildren={0.08}>
              {serviceData.processSteps.map((step, index) => (
                <SlideUp key={step}>
                  <article className="group h-full rounded-[28px] border border-border-subtle/70 bg-background/90 p-6 shadow-[0_20px_60px_-45px_rgba(32,42,68,0.7)] transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_30px_70px_-45px_rgba(32,42,68,0.75)]">
                    <p className="text-sm font-semibold uppercase tracking-[0.18em] text-text-secondary">
                      {PROCESS_CARD_LABELS[index] ?? `Step ${index + 1}`}
                    </p>
                    <p className="mt-3 text-5xl font-normal leading-none text-foreground/20">
                      0{index + 1}
                    </p>
                    <p className="mt-4 text-lg leading-relaxed text-foreground">{step}</p>
                  </article>
                </SlideUp>
              ))}
            </StaggerContainer>
          </div>

          <div className="grid gap-5">
            <SlideUp>
              <article className="rounded-[28px] border border-border-subtle bg-background p-7 shadow-[0_20px_60px_-45px_rgba(32,42,68,0.7)]">
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-text-muted">
                  Materials and finish control
                </p>
                <h3 className="mt-4 text-2xl font-normal leading-[1.2] text-foreground">
                  Product systems matched before the first coat
                </h3>
                <p className="mt-4 text-lg leading-relaxed text-text-secondary">
                  Product selection follows substrate condition, wear pattern, and maintenance
                  goals. That is how we keep adhesion, colour depth, and cleanability aligned with
                  the way the space is actually used.
                </p>
                <div className="mt-5 flex flex-wrap gap-2.5">
                  {serviceData.brands.map((brand) => (
                    <span
                      key={brand}
                      className="rounded-full border border-border-subtle bg-warm-light px-4 py-2 text-sm font-medium text-foreground"
                    >
                      {brand}
                    </span>
                  ))}
                </div>
              </article>
            </SlideUp>

            <SlideUp delay={0.08}>
              <article className="rounded-[28px] border border-white/10 bg-foreground p-7 text-white shadow-[0_30px_80px_-50px_rgba(32,42,68,0.9)]">
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-white/60">
                  Local planning note
                </p>
                <p className="mt-4 text-2xl font-normal leading-[1.3] text-white">
                  {cityData.summary}
                </p>
                <p className="mt-5 text-base leading-relaxed text-white/75">
                  That local context changes how we schedule work, how we prepare surfaces, and
                  what we flag during the walkthrough before your quote is finalized.
                </p>
              </article>
            </SlideUp>
          </div>
        </div>
      </SectionWrapper>

      <SectionWrapper className="bg-background">
        <div className="mx-auto max-w-[1200px]">
          <SlideUp>
            <h2 className="text-3xl font-normal leading-[1.15] md:text-4xl lg:text-5xl">
              See how the rest of the scope connects
            </h2>
          </SlideUp>
          <SlideUp delay={0.05}>
            <p className="mt-4 max-w-[60ch] text-lg font-normal leading-relaxed text-text-secondary md:text-xl">
              Most painting scopes overlap. These linked guides help you compare the full plan,
              from your local service page to related finishes and the broader city hub.
            </p>
          </SlideUp>

          <StaggerContainer className="mt-8 grid gap-6 md:grid-cols-2 xl:grid-cols-4" staggerChildren={0.08}>
            {linkCards.map((card) => (
              <SlideUp key={card.href}>
                <Link
                  href={card.href}
                  className="group block h-full overflow-hidden rounded-[28px] border border-border-subtle bg-warm-light shadow-[0_20px_60px_-45px_rgba(32,42,68,0.65)] transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_30px_80px_-45px_rgba(32,42,68,0.8)]"
                >
                  <div className="relative aspect-[4/5] overflow-hidden">
                    <Image
                      src={card.image}
                      alt={card.imageAlt}
                      fill
                      sizes="(max-width: 767px) 100vw, (max-width: 1279px) 50vw, 25vw"
                      className="object-cover transition-transform duration-700 group-hover:scale-[1.04]"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/35 to-transparent" />
                    <div className="absolute inset-x-0 bottom-0 p-5">
                      <p className="text-xs font-semibold uppercase tracking-[0.18em] text-white/65">
                        {card.kicker}
                      </p>
                      <h3 className="mt-2 text-2xl font-normal leading-[1.15] text-white">
                        {card.title}
                      </h3>
                      <p className="mt-2 text-sm leading-relaxed text-white/80">
                        {card.description}
                      </p>
                      <span className="mt-4 inline-flex min-h-[48px] items-center text-sm font-semibold uppercase tracking-[0.14em] text-white">
                        Explore page
                      </span>
                    </div>
                  </div>
                </Link>
              </SlideUp>
            ))}
          </StaggerContainer>
        </div>
      </SectionWrapper>

      <Testimonials eyebrow={`${cityData.name} Homeowners`} heading={testimonialHeading} testimonials={testimonials} />

      <BrandLogos
        variant="compact"
        filter={brandLogoFilter}
        heading={`Materials we specify for ${serviceData.shortName}`}
      />

      <SectionWrapper variant="warm-light">
        <div className="mx-auto max-w-[1200px]">
          <SlideUp>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-text-muted">FAQs</p>
          </SlideUp>
          <SlideUp delay={0.05}>
            <h2 className="mt-4 text-3xl font-normal leading-[1.15] md:text-4xl lg:text-5xl">
              {serviceData.name} in {cityData.name}: common questions
            </h2>
          </SlideUp>
          <SlideUp delay={0.1}>
            <p className="mt-4 max-w-[58ch] text-lg font-normal leading-relaxed text-text-secondary md:text-xl">
              These are the questions we usually answer before a project is booked, priced, and
              placed on the calendar.
            </p>
          </SlideUp>

          <div className="mt-8 divide-y divide-border-subtle rounded-[28px] border border-border-subtle bg-background px-6 md:px-8">
            {faqItems.map((item) => (
              <div key={item.question} className="py-8">
                <h3 className="mb-3 text-xl font-medium text-foreground">{item.question}</h3>
                <p className="text-lg font-normal leading-relaxed text-text-secondary">{item.answer}</p>
              </div>
            ))}
          </div>

          <SlideUp delay={0.15}>
            <div className="mt-8 rounded-[28px] border border-border-subtle bg-background p-6 shadow-[0_20px_60px_-45px_rgba(32,42,68,0.65)] md:p-8">
              <h3 className="text-2xl font-normal leading-[1.2] text-foreground">
                Ready to plan the exact scope for your home?
              </h3>
              <p className="mt-3 max-w-[52ch] text-lg font-normal leading-relaxed text-text-secondary">
                Book a walkthrough and get a firm quote, start dates, and written prep standards
                before anything is scheduled.
              </p>
              {serviceData.cityOverrides?.[city]?.seasonalTip && (
                <p className="mt-3 text-base font-normal leading-relaxed text-text-secondary">
                  {serviceData.cityOverrides[city]!.seasonalTip}
                </p>
              )}
              <div className="mt-6 flex flex-wrap items-center gap-4">
                <Link
                  href="/contact#contact-form"
                  className="inline-flex min-h-[48px] items-center justify-center rounded-[9px] border border-cta bg-cta px-8 py-3 text-sm font-semibold uppercase tracking-[0.18em] text-cta-foreground transition-[background-color,box-shadow,border-color] duration-[400ms] [transition-timing-function:cubic-bezier(0.25,0.46,0.45,0.94)] hover:border-cta-hover hover:bg-cta-hover hover:text-cta-hover-foreground hover:shadow-[0_12px_50px_-5px_rgb(192,164,135)]"
                >
                  Request Your Estimate
                </Link>
                <Link
                  href={`tel:${siteConfig.phone}`}
                  className="inline-flex min-h-[48px] items-center text-sm font-semibold uppercase tracking-[0.14em] text-foreground transition-colors duration-300 hover:text-link-hover"
                >
                  Call {siteConfig.phone}
                </Link>
              </div>
            </div>
          </SlideUp>
        </div>
      </SectionWrapper>

      <InstagramGrid instagramUrl={siteConfig.socialLinks.instagram} images={[...instagramImages]} />
    </>
  );
}
