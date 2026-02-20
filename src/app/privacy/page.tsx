import type { Metadata } from "next";
import { PageHero } from "@/components/sections/PageHero";
import { SectionWrapper } from "@/components/shared/SectionWrapper";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  title: "Privacy Policy | Shape of Paint",
  description:
    "Privacy policy for Shape of Paint. Learn how we collect, use, and protect your personal information.",
};

export default function PrivacyPage() {
  return (
    <>
      <PageHero heading="Privacy Policy" />

      <SectionWrapper>
        <div className="mx-auto max-w-content space-y-8 text-lg md:text-xl font-normal leading-relaxed text-text-secondary">
          <p>Last updated: February 2026</p>

          <div>
            <h2 className="mb-3 text-2xl font-normal leading-[1.2] text-foreground md:text-3xl">
              Information We Collect
            </h2>
            <p>
              When you request an estimate, fill out our contact form, or
              communicate with us by phone or email, we may collect your name,
              email address, phone number, property address, and project details.
              We only collect information that you voluntarily provide.
            </p>
          </div>

          <div>
            <h2 className="mb-3 text-2xl font-normal leading-[1.2] text-foreground md:text-3xl">
              How We Use Your Information
            </h2>
            <p>
              We use the information you provide to respond to your inquiry,
              prepare estimates, schedule work, and communicate about your
              project. We do not sell, rent, or share your personal information
              with third parties for marketing purposes.
            </p>
          </div>

          <div>
            <h2 className="mb-3 text-2xl font-normal leading-[1.2] text-foreground md:text-3xl">
              Cookies and Analytics
            </h2>
            <p>
              Our website may use cookies and analytics tools to understand how
              visitors use our site. This data helps us improve your experience.
              You can disable cookies in your browser settings at any time.
            </p>
          </div>

          <div>
            <h2 className="mb-3 text-2xl font-normal leading-[1.2] text-foreground md:text-3xl">
              Data Security
            </h2>
            <p>
              We take reasonable measures to protect your personal information
              from unauthorized access, use, or disclosure. However, no method
              of transmission over the internet is 100% secure.
            </p>
          </div>

          <div>
            <h2 className="mb-3 text-2xl font-normal leading-[1.2] text-foreground md:text-3xl">
              Your Rights
            </h2>
            <p>
              You may request access to, correction of, or deletion of your
              personal information at any time by contacting us at{" "}
              <a
                href={`mailto:${siteConfig.email}`}
                className="font-medium text-foreground hover:text-link-hover transition-colors duration-300"
              >
                {siteConfig.email}
              </a>{" "}
              or calling{" "}
              <a
                href={`tel:${siteConfig.phone}`}
                className="font-medium text-foreground hover:text-link-hover transition-colors duration-300"
              >
                {siteConfig.phone}
              </a>
              .
            </p>
          </div>

          <div>
            <h2 className="mb-3 text-2xl font-normal leading-[1.2] text-foreground md:text-3xl">
              Changes to This Policy
            </h2>
            <p>
              We may update this privacy policy from time to time. Any changes
              will be posted on this page with a revised date.
            </p>
          </div>
        </div>
      </SectionWrapper>
    </>
  );
}
