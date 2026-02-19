import type { Metadata } from "next";
import { PageHero } from "@/components/sections/PageHero";
import { ContactCards } from "@/components/sections/ContactCards";
import { ContactForm } from "@/components/sections/ContactForm";
import { InstagramGrid } from "@/components/sections/InstagramGrid";
import { SectionWrapper } from "@/components/shared/SectionWrapper";
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

      <div id="contact-form">
        <SectionWrapper>
          <div className="mx-auto max-w-[600px]">
            <ContactForm />
          </div>
        </SectionWrapper>
      </div>

      <SectionWrapper variant="warm">
        <div className="mx-auto max-w-[700px]">
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
