import type { Metadata } from "next";
import { PageHero } from "@/components/sections/PageHero";
import { FAQ } from "@/components/sections/FAQ";
import { InstagramGrid } from "@/components/sections/InstagramGrid";
import { siteConfig } from "@/config/site";
import { generateFAQSchema } from "@/lib/schema";

export const metadata: Metadata = {
  title: "Painting FAQ - Vancouver Painters",
  description: "Frequently asked questions about Shape of Paint. Quoting, payment, licensing, service areas and more. Vancouver & Lower Mainland house painters.",
};

const instagramImages = [
  { src: "/images/ig-1.webp", alt: "Shape of Paint project 1" },
  { src: "/images/ig-2.webp", alt: "Shape of Paint project 2" },
  { src: "/images/ig-3.webp", alt: "Shape of Paint project 3" },
  { src: "/images/ig-4.webp", alt: "Shape of Paint project 4" },
  { src: "/images/ig-5.webp", alt: "Shape of Paint project 5" },
  { src: "/images/ig-6.webp", alt: "Shape of Paint project 6" },
];

const faqItems = [
  {
    question: "Are you licensed and insured?",
    answer:
      "Yes — fully licensed and insured with general liability and workers' compensation coverage. We carry the right protections so you never have to worry. We also hold industry-recognized certifications and update them regularly.",
  },
  {
    question: "How do you ensure a clean and organized project site?",
    answer:
      "Daily checklists and standard operating procedures. Our crew sets up protective barriers, covers floors and furniture, and cleans up every day — not just at the end. If your family is living in the home during the project, we minimize disruption and keep every room we're not working in untouched.",
  },
  {
    question: "Do you provide estimates or firm quotes?",
    answer:
      "Firm quotes only. The price we give you is the price you pay — period. The only exceptions are popcorn ceiling removal and specialty services priced on time + materials, which we'll explain upfront before any work starts.",
  },
  {
    question: "When do you take payment?",
    answer:
      "30% deposit when you accept the quote. The rest is due only after the job is done and you're 100% happy with the results. We accept cash, credit, or e-transfer.",
  },
  {
    question: "What areas do you serve?",
    answer:
      "Vancouver and the entire Lower Mainland — including Burnaby, North Vancouver, West Vancouver, Coquitlam, Port Moody, Surrey, New Westminster, Langley, Richmond, and surrounding communities.",
  },
  {
    question: "What services do you offer?",
    answer:
      "Interior painting, exterior painting, cabinet painting and refinishing, spray finishes, staining, faux finishes, and custom projects. We also work alongside interior designers and specialty trades to deliver complex finishing projects.",
  },
];

export default function FAQPage() {
  const faqJsonLd = JSON.stringify(generateFAQSchema(faqItems));

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{__html: faqJsonLd}} />
      <PageHero heading="Frequently Asked Questions" />

      <FAQ
        heading="Common questions from Vancouver homeowners"
        items={faqItems}
      />

      <InstagramGrid
        instagramUrl={siteConfig.socialLinks.instagram}
        images={instagramImages}
      />
    </>
  );
}
