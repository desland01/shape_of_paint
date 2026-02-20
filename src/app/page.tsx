import type { Metadata } from "next";
import Link from "next/link";
import { Hero } from "@/components/sections/Hero";
import { FounderQuote } from "@/components/sections/FounderQuote";
import { VideoTestimonial } from "@/components/sections/VideoTestimonial";
import { ServicesGrid } from "@/components/sections/ServicesGrid";
import { CTABanner } from "@/components/sections/CTABanner";
import { FeatureSection } from "@/components/sections/FeatureSection";
import { PortfolioGallery } from "@/components/sections/PortfolioGallery";
import { Testimonials } from "@/components/sections/Testimonials";
import { InstagramGrid } from "@/components/sections/InstagramGrid";
import { NewsletterSignup } from "@/components/sections/NewsletterSignup";
import Image from "next/image";
import { SlideUp, StaggerContainer } from "@/components/ui/motion";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  title: "House Painters Vancouver BC | Shape of Paint",
  description: "Professional house painters in Vancouver & the Lower Mainland. Interior, exterior & cabinet painting. Licensed, insured. Get your free estimate.",
};

const heroImages = [
  {
    src: "/images/hero-1.webp",
    alt: "Beautiful interior painting by Shape of Paint",
  },
  {
    src: "/images/hero-2.webp",
    alt: "Kitchen cabinet refinishing",
  },
  {
    src: "/images/hero-3.webp",
    alt: "Elegant entryway painting",
  },
];

const galleryImages = [
  { src: "/images/interior-portfolio-1.webp", alt: "Bright living room with designer paint finish" },
  { src: "/images/cabinet-portfolio-5.webp", alt: "Staircase railing with hand-stained dark handrail and crisp white spindles" },
  { src: "/images/exterior-portfolio-1.webp", alt: "Exterior home painting — classic Vancouver craftsman" },
  { src: "/images/interior-portfolio-3.webp", alt: "Elegant hallway with hand-finished walls" },
  { src: "/images/exterior-portfolio-2.webp", alt: "Modern exterior with fresh trim paint" },
  { src: "/images/interior-portfolio-2.webp", alt: "Modern bathroom with crisp white walls" },
  { src: "/images/cabinet-portfolio-1.webp", alt: "Kitchen transformation — cabinet refinishing" },
  { src: "/images/cabinet-portfolio-4.webp", alt: "Spray-finished kitchen cabinets in matte white" },
];

const instagramImages = [
  { src: "/images/ig-1.webp", alt: "Shape of Paint Instagram post 1" },
  { src: "/images/ig-2.webp", alt: "Shape of Paint Instagram post 2" },
  { src: "/images/ig-3.webp", alt: "Shape of Paint Instagram post 3" },
  { src: "/images/ig-4.webp", alt: "Shape of Paint Instagram post 4" },
  { src: "/images/ig-5.webp", alt: "Shape of Paint Instagram post 5" },
  { src: "/images/ig-6.webp", alt: "Shape of Paint Instagram post 6" },
];

export default function HomePage() {
  return (
    <>
      <Hero
        eyebrow="Vancouver's Trusted House Painters"
        headline="Vancouver house painters who care about the finish as much as you do"
        ctaText="Get Your Free Estimate"
        ctaHref="/contact#contact-form"
        images={heroImages}
      />

      <FounderQuote
        quote="Every homeowner deserves painters who show up on time, protect your floors, and do work you're proud of. That's not a tagline. It's how we've built our name — one Vancouver home at a time."
        author="Gabe Penner, Founder"
      />

      <VideoTestimonial
        eyebrow="Featured Project"
        heading="Elevating a West Coast fireplace with hand-applied Marmorino plaster"
        videoId="8lwJrnkJRXc"
      />

      <ServicesGrid services={[...siteConfig.services]} />

      <CTABanner
        headline="Every project begins with a conversation"
        ctaText="Get Your Free Estimate"
        ctaHref="/contact#contact-form"
      />

      <FeatureSection
        eyebrow="Design Expertise"
        heading="More than painters — finishing specialists"
        description="Interior, exterior, cabinets, or custom finishes — our team brings years of hands-on experience to every surface we touch. We work with designers and specialty trades so you get honest advice, not guesswork. Finishes that look better and last longer than you expected."
        ctaText="See Our Interior Work"
        ctaHref="/services/interior"
        image="/images/design-services.webp"
        imageAlt="Shape of Paint design consulting"
      />

      {/* Cost Calculator — Premium Tool Invitation */}
      <section className="relative overflow-hidden bg-warm-light py-16 md:py-24 lg:py-32">
        {/* Decorative background blobs */}
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute -left-16 top-16 h-64 w-64 rounded-full bg-accent-gold/8 blur-3xl" />
          <div className="absolute -right-16 bottom-10 h-72 w-72 rounded-full bg-accent-sage/12 blur-3xl" />
        </div>

        <div className="relative mx-auto max-w-[1200px] px-4 md:px-8">
          {/* Main card */}
          <div className="relative overflow-hidden rounded-3xl border border-border-subtle bg-background shadow-[0_36px_100px_-54px_rgba(0,0,0,0.25)]">
            {/* Top accent gradient bar */}
            <div className="pointer-events-none absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-accent-gold via-brand-secondary to-accent-sage" />

            {/* Inner glow blobs */}
            <div className="pointer-events-none absolute -right-24 -top-24 h-56 w-56 rounded-full bg-accent-gold/10 blur-3xl" />
            <div className="pointer-events-none absolute -left-16 bottom-0 h-48 w-48 rounded-full bg-accent-sage/15 blur-3xl" />

            <div className="grid lg:grid-cols-[1fr_0.85fr]">
              {/* Left content column */}
              <div className="relative px-7 py-10 md:px-10 md:py-12 lg:px-12 lg:py-14">
                <SlideUp>
                  <p className="inline-flex items-center gap-2 rounded-full border border-accent-gold/25 bg-accent-gold/8 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.2em] text-accent-gold">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M2 20h.01" /><path d="M7 20v-4" /><path d="M12 20v-8" /><path d="M17 20V8" /><path d="M22 4v16" /></svg>
                    Free Planning Tool
                  </p>
                </SlideUp>

                <SlideUp delay={0.05}>
                  <h2 className="mt-5 max-w-[20ch] text-4xl font-normal leading-[1.12] md:text-5xl lg:text-5xl">
                    Build a room-by-room painting investment in minutes
                  </h2>
                </SlideUp>

                <SlideUp delay={0.1}>
                  <p className="mt-4 max-w-[52ch] text-lg leading-relaxed text-text-secondary">
                    Start with dimensions and surfaces, choose your material tier, and
                    walk into your estimate call with a clear planning number.
                  </p>
                </SlideUp>

                {/* Benefits list with checkmark icons */}
                <StaggerContainer delay={0.15} staggerChildren={0.08} className="mt-8 space-y-3">
                  {[
                    "Walls, ceilings, trim, doors, crown, and wainscoting costs",
                    "Material gallons separated by wall/ceiling and trim coatings",
                    "Clear total you can compare before your on-site estimate",
                  ].map((text) => (
                    <SlideUp key={text}>
                      <div className="flex items-start gap-3">
                        <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-accent-gold/12">
                          <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className="text-accent-gold" aria-hidden="true"><polyline points="20 6 9 17 4 12" /></svg>
                        </span>
                        <p className="text-lg leading-relaxed text-text-secondary">{text}</p>
                      </div>
                    </SlideUp>
                  ))}
                </StaggerContainer>

                {/* Inline meta badges */}
                <SlideUp delay={0.35}>
                  <div className="mt-6 flex flex-wrap gap-2.5 text-xs font-semibold uppercase tracking-[0.14em] text-text-muted">
                    <span className="rounded-full border border-border-subtle bg-warm px-4 py-2">
                      2-minute setup
                    </span>
                    <span className="rounded-full border border-border-subtle bg-warm px-4 py-2">
                      Room-by-room scope
                    </span>
                    <span className="rounded-full border border-border-subtle bg-warm px-4 py-2">
                      Materials + labor
                    </span>
                  </div>
                </SlideUp>

                {/* CTA cluster */}
                <SlideUp delay={0.4}>
                  <div className="mt-8 flex flex-wrap items-center gap-4">
                    <Link
                      href="/tools/cost-calculator"
                      className="inline-flex min-h-[48px] items-center justify-center rounded-[9px] border border-cta bg-cta px-8 py-3 text-sm font-semibold uppercase tracking-[0.18em] text-cta-foreground transition-[background-color,box-shadow,border-color] duration-[400ms] [transition-timing-function:cubic-bezier(0.25,0.46,0.45,0.94)] hover:border-cta-hover hover:bg-cta-hover hover:text-foreground hover:shadow-[0_12px_50px_-5px_rgb(192,164,135)]"
                    >
                      Try The Cost Calculator
                    </Link>
                    <Link
                      href="/contact#contact-form"
                      className="inline-flex min-h-[48px] items-center text-sm font-semibold uppercase tracking-[0.14em] text-foreground underline decoration-border-subtle underline-offset-4 transition-colors hover:text-link-hover"
                    >
                      Prefer a firm quote?
                    </Link>
                  </div>
                </SlideUp>

                {/* Trust micro-copy */}
                <SlideUp delay={0.45}>
                  <p className="mt-5 text-xs uppercase tracking-[0.14em] text-text-muted">
                    Built on our production-rate estimating model
                  </p>
                </SlideUp>
              </div>

              {/* Right image column — visual anchor */}
              <SlideUp delay={0.15} className="relative hidden lg:block">
                <div className="relative h-full min-h-[480px]">
                  {/* Primary image */}
                  <Image
                    src="/images/interior-portfolio-1.webp"
                    alt="Bright living room with designer paint finish by Shape of Paint"
                    fill
                    sizes="(min-width: 1024px) 45vw, 0px"
                    className="object-cover"
                  />
                  {/* Warm gradient overlay from left for text-to-image blend */}
                  <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-background/60 via-transparent to-transparent" />

                  {/* Floating accent card over image */}
                  <div className="absolute bottom-8 left-6 right-6 rounded-2xl border border-white/20 bg-foreground/70 px-5 py-4 backdrop-blur-md">
                    <div className="flex items-center gap-3">
                      <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-accent-gold/20">
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-accent-gold" aria-hidden="true"><path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" /></svg>
                      </span>
                      <div>
                        <p className="text-sm font-semibold text-white/90">Plan your investment</p>
                        <p className="text-xs leading-snug text-white/60">Know your numbers before the first brush stroke</p>
                      </div>
                    </div>
                  </div>
                </div>
              </SlideUp>

              {/* Mobile image — shown below CTA on small screens */}
              <SlideUp delay={0.2} className="relative lg:hidden">
                <div className="relative mx-5 mb-8 overflow-hidden rounded-2xl">
                  <div className="relative aspect-[16/9]">
                    <Image
                      src="/images/interior-portfolio-1.webp"
                      alt="Bright living room with designer paint finish by Shape of Paint"
                      fill
                      sizes="(max-width: 1023px) 90vw, 0px"
                      className="object-cover"
                    />
                  </div>
                </div>
              </SlideUp>
            </div>
          </div>
        </div>
      </section>

      <PortfolioGallery
        eyebrow="Our Work"
        heading="The details speak for themselves"
        subtitle="Meticulously prepared surfaces. Carefully chosen colours. Long-lasting finishes. See what master craftsmanship looks like in real Vancouver homes."
        images={galleryImages}
      />

      <FeatureSection
        eyebrow="Cabinet Painting"
        heading="Your kitchen, reimagined — without a full renovation"
        description="Spray-finished cabinet painting gives your kitchen a smooth, factory-quality feel at a fraction of the replacement cost. Most projects wrap in 5–7 days with minimal disruption to your daily routine."
        ctaText="Explore Cabinet Refinishing"
        ctaHref="/contact#contact-form"
        image="/images/cabinet-finish.webp"
        imageAlt="Cabinet spray finish by Shape of Paint"
        reversed
      />

      <Testimonials
        heading="Heard from homeowners we've worked with"
        testimonials={[...siteConfig.testimonials]}
      />

      <FeatureSection
        heading="Let's talk about what your home could feel like"
        description="Reach out and we'll get back to you within 2 business days with a firm quote. No surprises, no hidden fees. The price we quote is the price you pay."
        ctaText="Get Your Free Estimate"
        ctaHref="/contact#contact-form"
        image="/images/about-team.webp"
        imageAlt="Contact Shape of Paint"
      />

      <CTABanner
        headline="47 families on the North Shore trusted us with their homes last year. Yours could be next."
        ctaText="Get Your Free Estimate"
        ctaHref="/contact#contact-form"
      />

      <InstagramGrid
        instagramUrl={siteConfig.socialLinks.instagram}
        images={instagramImages}
      />

      <NewsletterSignup />
    </>
  );
}
