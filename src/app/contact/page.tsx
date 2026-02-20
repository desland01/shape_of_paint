import type { Metadata } from "next";
import Link from "next/link";
import { PageHero } from "@/components/sections/PageHero";
import { ContactCards } from "@/components/sections/ContactCards";
import { ContactForm } from "@/components/sections/ContactForm";
import { InstagramGrid } from "@/components/sections/InstagramGrid";
import { SectionWrapper } from "@/components/shared/SectionWrapper";
import { ViewportFitWrapper } from "@/components/shared/ViewportFitWrapper";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  title: "Contact Vancouver Painters",
  description: "Contact Shape of Paint for professional painting services. Request a quote for interior or exterior painting across Vancouver and the Lower Mainland. Call 604-353-7378.",
};

const instagramImages = [
  { src: "/images/ig-1.webp", alt: "Shape of Paint project 1" },
  { src: "/images/ig-2.webp", alt: "Shape of Paint project 2" },
  { src: "/images/ig-3.webp", alt: "Shape of Paint project 3" },
  { src: "/images/ig-4.webp", alt: "Shape of Paint project 4" },
  { src: "/images/ig-5.webp", alt: "Shape of Paint project 5" },
  { src: "/images/ig-6.webp", alt: "Shape of Paint project 6" },
];

export default function ContactPage() {
  return (
    <>
      <PageHero
        heading="Get Your Free Estimate"
        image="/images/contact-cta.webp"
        imageAlt="Get in touch with Shape of Paint"
      />

      <SectionWrapper variant="warm-light" className="py-10 md:py-14 lg:py-16">
        <div className="mx-auto max-w-content rounded-[24px] border border-border-subtle bg-background p-6 md:p-8">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-text-muted">
            Planning First
          </p>
          <h2 className="mt-3 text-2xl font-normal leading-[1.2] md:text-3xl">
            Want a room-by-room number before booking?
          </h2>
          <p className="mt-3 text-base leading-relaxed text-text-secondary md:text-lg">
            Use our interior cost calculator to build a quick planning estimate, then
            submit your project details here for a firm quote.
          </p>
          <Link
            href="/tools/cost-calculator"
            className="mt-5 inline-flex min-h-[48px] items-center justify-center rounded-[9px] border border-foreground bg-foreground px-8 py-3 text-sm font-semibold uppercase tracking-[0.15em] text-white transition-[background-color,box-shadow,border-color] duration-[400ms] [transition-timing-function:cubic-bezier(0.25,0.46,0.45,0.94)] hover:border-cta-hover hover:bg-cta-hover hover:text-foreground hover:shadow-[0_12px_50px_-5px_rgb(192,164,135)]"
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
            Firm quotes — no surprises. The price we give is the price you pay. No hidden fees. Shape of Paint is licensed and insured, serving 400+ homes across Vancouver and the Lower Mainland. A 30% deposit is collected when the quote is accepted, with the balance due upon final walkthrough. We accept cash, credit, or e-transfer.
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
