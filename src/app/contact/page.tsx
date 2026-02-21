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

export const metadata: Metadata = {
  title: "Vancouver Painting Estimate | Shape of Paint",
  description: "Get your Vancouver painting estimate in 24 hours. 400+ homes finished. Interior, exterior & cabinet specialists. 604-353-7378.",
};

const instagramImages = [
  { src: "/images/ig-1.webp", alt: "Vancouver home interior freshly painted by Shape of Paint" },
  { src: "/images/ig-2.webp", alt: "Kitchen cabinet spray finish in matte white" },
  { src: "/images/ig-3.webp", alt: "Exterior painting detail on Vancouver craftsman home" },
  { src: "/images/ig-4.webp", alt: "Hand-finished accent wall with designer colour palette" },
  { src: "/images/ig-5.webp", alt: "Cabinet door drying in spray booth — artisan finish process" },
  { src: "/images/ig-6.webp", alt: "Before and after interior painting transformation" },
];

export default function ContactPage() {
  return (
    <>
      <ScrollToHash />
      <PageHero
        heading="Get Your Vancouver Painting Estimate"
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
            Build your room-by-room number in 2 minutes. Then submit your project
            details here for a firm quote from our team.
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
            Firm quotes — no surprises. The price we quote is the price you pay. No hidden fees, ever. We are licensed, insured, and have finished 400+ homes across Vancouver and the Lower Mainland. You pay a 30% deposit when the quote is accepted. The balance is due after your final walkthrough. We accept credit, e-transfer, or cash.
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
