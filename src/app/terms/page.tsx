import type { Metadata } from "next";
import { PageHero } from "@/components/sections/PageHero";
import { SectionWrapper } from "@/components/shared/SectionWrapper";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  title: "Terms of Service | Shape of Paint",
  description:
    "Terms of service for Shape of Paint. Read our terms and conditions for painting services in Vancouver and the Lower Mainland.",
};

export default function TermsPage() {
  return (
    <>
      <PageHero heading="Terms of Service" />

      <SectionWrapper>
        <div className="mx-auto max-w-[800px] space-y-8 text-lg md:text-xl font-normal leading-relaxed text-text-secondary">
          <p>Last updated: February 2026</p>

          <div>
            <h2 className="mb-3 text-2xl font-normal leading-[1.2] text-foreground md:text-3xl">
              Services
            </h2>
            <p>
              Shape of Paint provides residential and commercial painting
              services in Vancouver and the Lower Mainland, including interior
              painting, exterior painting, and cabinet refinishing. All work is
              performed by licensed and insured professionals.
            </p>
          </div>

          <div>
            <h2 className="mb-3 text-2xl font-normal leading-[1.2] text-foreground md:text-3xl">
              Estimates and Pricing
            </h2>
            <p>
              Estimates are provided free of charge based on an in-person or
              virtual assessment of your project. Written quotes are valid for 30
              days from the date of issue. The final price reflects the scope
              agreed upon — no surprise charges. Any changes to the scope of work
              will be discussed and approved before additional costs are
              incurred.
            </p>
          </div>

          <div>
            <h2 className="mb-3 text-2xl font-normal leading-[1.2] text-foreground md:text-3xl">
              Scheduling and Access
            </h2>
            <p>
              We will provide a start date and estimated timeline for your
              project. Reasonable access to the work area is required during
              scheduled hours. We will communicate any schedule changes as early
              as possible.
            </p>
          </div>

          <div>
            <h2 className="mb-3 text-2xl font-normal leading-[1.2] text-foreground md:text-3xl">
              Payment Terms
            </h2>
            <p>
              Payment terms are outlined in your project agreement. We typically
              require a deposit to secure your date, with the balance due upon
              completion and your satisfaction with the work.
            </p>
          </div>

          <div>
            <h2 className="mb-3 text-2xl font-normal leading-[1.2] text-foreground md:text-3xl">
              Warranty
            </h2>
            <p>
              We stand behind our work. Specific warranty terms are included in
              your project agreement and vary by service type. If you notice an
              issue with our workmanship, contact us and we will make it right.
            </p>
          </div>

          <div>
            <h2 className="mb-3 text-2xl font-normal leading-[1.2] text-foreground md:text-3xl">
              Limitation of Liability
            </h2>
            <p>
              Shape of Paint carries general liability and workers&apos;
              compensation insurance. Our liability is limited to the value of
              the contracted services. We are not responsible for pre-existing
              conditions, concealed defects, or damage caused by third parties.
            </p>
          </div>

          <div>
            <h2 className="mb-3 text-2xl font-normal leading-[1.2] text-foreground md:text-3xl">
              Contact
            </h2>
            <p>
              Questions about these terms? Reach us at{" "}
              <a
                href={`mailto:${siteConfig.email}`}
                className="font-medium text-foreground hover:text-link-hover transition-colors duration-300"
              >
                {siteConfig.email}
              </a>{" "}
              or call{" "}
              <a
                href={`tel:${siteConfig.phone}`}
                className="font-medium text-foreground hover:text-link-hover transition-colors duration-300"
              >
                {siteConfig.phone}
              </a>
              .
            </p>
          </div>
        </div>
      </SectionWrapper>
    </>
  );
}
