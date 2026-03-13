import type { Metadata } from "next";
import Link from "next/link";
import { PageHero } from "@/components/sections/PageHero";
import { ContactCards } from "@/components/sections/ContactCards";
import { ContactForm } from "@/components/sections/ContactForm";
import { InstagramGrid } from "@/components/sections/InstagramGrid";
import { SectionWrapper } from "@/components/shared/SectionWrapper";
import { ViewportFitWrapper } from "@/components/shared/ViewportFitWrapper";
import { ScrollToHash } from "@/components/shared/ScrollToHash";
import { siteConfig } from "@/config/site";
import { generateBreadcrumbSchema } from "@/lib/schema";

export const metadata: Metadata = {
  title: "Vancouver Painting Estimate | Shape of Paint",
  description: "Get your Vancouver painting estimate in 24 hours. 400+ homes finished. Interior, exterior & cabinet specialists. 604-353-7378.",
};

const instagramImages = [
  { src: "/images/ig-1.webp", alt: "Vancouver home interior freshly painted by Shape of Paint" },
  { src: "/images/ig-2.webp", alt: "Kitchen cabinet spray finish in matte white" },
  { src: "/images/ig-3.webp", alt: "Exterior painting detail on Vancouver craftsman home" },
  { src: "/images/ig-4.webp", alt: "Hand-finished accent wall with designer colour palette" },
  { src: "/images/ig-5.webp", alt: "Cabinet door drying in spray booth - artisan finish process" },
  { src: "/images/ig-6.webp", alt: "Before and after interior painting transformation" },
];

export default function ContactPage() {
  const breadcrumbJsonLd = JSON.stringify(generateBreadcrumbSchema([
    { name: "Home", url: siteConfig.url },
    { name: "Contact", url: `${siteConfig.url}/contact` },
  ]));

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: breadcrumbJsonLd }} />
      <ScrollToHash />
      <PageHero
        heading="Tell Us About Your Project"
        description="You will get a fixed written quote, a clear start window, and prep standards defined before anything is scheduled. No surprises, no open-ended estimates."
        image="/images/contact-cta.webp"
        imageAlt="Get in touch with Shape of Paint"
      />

      <SectionWrapper className="py-10 md:py-14 lg:py-16">
        <div className="mx-auto max-w-content">
          <div className="grid gap-6 lg:grid-cols-2">
            {/* Process card */}
            <div className="rounded-[24px] border border-border-subtle bg-background p-6 md:p-8">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-text-muted">
                How It Works
              </p>
              <h2 className="mt-3 text-2xl font-normal leading-[1.2] md:text-3xl">
                Three steps to your firm quote
              </h2>
              <div className="mt-6 space-y-5">
                <div className="flex gap-4">
                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-warm text-sm font-semibold text-foreground">1</span>
                  <div>
                    <p className="font-medium text-foreground">Submit your project details</p>
                    <p className="mt-1 text-sm leading-relaxed text-text-secondary">Tell us about the rooms, surfaces, and timeline you have in mind.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-warm text-sm font-semibold text-foreground">2</span>
                  <div>
                    <p className="font-medium text-foreground">Get your firm quote in 48 hours</p>
                    <p className="mt-1 text-sm leading-relaxed text-text-secondary">Your quote is fixed. The price we send is the price you pay. No adjustments after the fact.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-warm text-sm font-semibold text-foreground">3</span>
                  <div>
                    <p className="font-medium text-foreground">Pick your start date</p>
                    <p className="mt-1 text-sm leading-relaxed text-text-secondary">You choose when the work begins. Your prep standards and daily schedule are written down before day one.</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Trust card */}
            <div className="rounded-[24px] border border-border-subtle bg-warm-light p-6 md:p-8">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-text-muted">
                Local Proof
              </p>
              <p className="mt-3 text-4xl font-normal leading-none text-foreground">4.9 / 5</p>
              <p className="mt-2 text-base leading-relaxed text-text-secondary">
                Google rating across 200+ homeowner reviews in Vancouver and the Lower Mainland.
              </p>
              <div className="mt-6 space-y-4">
                <blockquote className="border-l-2 border-brand-secondary pl-4 text-base italic leading-relaxed text-text-secondary">
                  "They quoted a number, stuck to it, and finished on the day they said they would. That never happens with contractors."
                </blockquote>
                <blockquote className="border-l-2 border-brand-secondary pl-4 text-base italic leading-relaxed text-text-secondary">
                  "The prep work was thorough and the final result was exactly what we discussed. No shortcuts."
                </blockquote>
              </div>
              <Link
                href="/reviews"
                className="mt-5 inline-flex min-h-[48px] items-center text-sm font-semibold uppercase tracking-[0.14em] text-foreground transition-colors duration-300 hover:text-link-hover"
              >
                Read All Reviews
              </Link>
            </div>
          </div>
        </div>
      </SectionWrapper>

      <SectionWrapper variant="warm-light" className="py-10 md:py-14 lg:py-16">
        <div className="mx-auto max-w-content rounded-[24px] border border-border-subtle bg-background p-6 md:p-8">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-text-muted">
            Planning First
          </p>
          <h2 className="mt-3 text-2xl font-normal leading-[1.2] md:text-3xl">
            Want a room-by-room number before booking?
          </h2>
          <p className="mt-3 text-base leading-relaxed text-text-secondary md:text-lg">
            Build your room-by-room number in 2 minutes. Then submit your project
            details here for a firm quote from our team.
          </p>
          <Link
            href="/tools/cost-calculator"
            className="mt-5 inline-flex min-h-[48px] items-center justify-center rounded-[9px] border border-foreground bg-foreground px-8 py-3 text-sm font-semibold uppercase tracking-[0.15em] text-white transition-[background-color,box-shadow,border-color] duration-[400ms] [transition-timing-function:cubic-bezier(0.25,0.46,0.45,0.94)] hover:border-cta-hover hover:bg-cta-hover hover:text-cta-hover-foreground hover:shadow-[0_12px_50px_-5px_rgb(192,164,135)]"
          >
            Open Cost Calculator
          </Link>
        </div>
      </SectionWrapper>

      <ViewportFitWrapper id="contact-form" className="bg-background">
        <div className="mx-auto h-full flex flex-col max-w-content px-4 md:px-8 py-8">
          <ContactForm />
        </div>
      </ViewportFitWrapper>

      <SectionWrapper variant="warm">
        <div className="mx-auto max-w-content">
          <p className="text-lg md:text-xl font-normal leading-relaxed text-text-secondary">
            Firm quotes -- no surprises. The price you see is the price you pay. No hidden fees, ever. Licensed, insured, and 400+ homes finished across Vancouver and the Lower Mainland. You pay a 30% deposit when the quote is accepted. The balance is due after your final walkthrough.
          </p>
        </div>
      </SectionWrapper>

      <ContactCards />

      <InstagramGrid
        instagramUrl={siteConfig.socialLinks.instagram}
        images={instagramImages}
      />
    </>
  );
}
