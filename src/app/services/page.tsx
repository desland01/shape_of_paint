import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { PageHero } from "@/components/sections/PageHero";
import { ContactCTA } from "@/components/sections/ContactCTA";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  title: "Painting Services Vancouver BC | Shape of Paint",
  description:
    "Interior, exterior & cabinet painting in Vancouver. Licensed, insured house painters delivering flawless finishes across the Lower Mainland. Free estimates.",
};

export default function ServicesPage() {
  return (
    <>
      <PageHero
        heading="Painting Services in Vancouver"
        description="Interior, exterior, and cabinet painting — every project finished with the care your home deserves."
      />

      <section className="bg-background py-16 md:py-24">
        <div className="mx-auto max-w-[1200px] px-6 md:px-8">
          <div className="grid gap-12 md:grid-cols-3 md:gap-8">
            {siteConfig.services.map((service) => (
              <Link key={service.title} href={service.href} className="group">
                <div className="relative mb-6 aspect-[4/3] overflow-hidden">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                </div>
                <h2 className="mb-3 text-2xl font-semibold md:text-3xl">
                  {service.title}
                </h2>
                <p className="mb-4 text-lg font-normal leading-relaxed text-text-secondary">
                  {service.description}
                </p>
                <span className="text-sm font-medium uppercase tracking-[0.15em] text-foreground transition-opacity group-hover:opacity-60">
                  Learn More
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <ContactCTA
        heading="Not sure which service you need?"
        description="Tell us about your project and we'll recommend the right approach — no pressure, no obligation. Most estimates take less than 24 hours."
        ctaText="Get Your Free Estimate"
        ctaHref="/contact/estimate"
        image="/images/about-team.jpg"
        imageAlt="Shape of Paint team at work in Vancouver"
      />
    </>
  );
}
