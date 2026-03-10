import Link from "next/link";
import { Phone } from "lucide-react";
import { siteConfig } from "@/config/site";
import { SlideUp } from "@/components/ui/motion";
import { BrandLogos } from "@/components/sections/BrandLogos";

export function Footer() {
  return (
    <footer className="bg-background">
      <div className="mx-auto max-w-section px-4 pt-12 pb-24 md:px-8 md:py-16">
        <div className="grid gap-12 md:grid-cols-6 md:items-start">
          <SlideUp>
            <div className="flex flex-col gap-4">
              <Link href="/" className="block h-28 w-28 overflow-hidden md:h-40 md:w-40">
                <img
                  src="/images/sop-square.svg"
                  className="-mt-[20%] h-auto w-full"
                  alt={siteConfig.name}
                />
              </Link>
              <a
                href={`tel:${siteConfig.phone.replace(/[^0-9+]/g, "")}`}
                className="inline-flex min-h-[48px] items-center gap-2 py-2 text-sm font-medium uppercase tracking-[0.12em] text-foreground transition-colors duration-300 hover:text-link-hover"
                aria-label={`Call ${siteConfig.phone}`}
              >
                <Phone className="h-4 w-4" aria-hidden="true" />
                Call Now
              </a>
            </div>
          </SlideUp>

          <SlideUp delay={0.1}>
            <div>
              <h5 className="mb-4 text-3xl md:text-4xl font-normal tracking-[1px]">
                Company
              </h5>
              <ul className="flex flex-col gap-1">
                {siteConfig.footerLinks.links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="inline-flex min-h-[48px] items-center text-base font-normal text-text-secondary tracking-[0.15em] hover:text-link-hover transition-colors duration-300"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </SlideUp>

          <SlideUp delay={0.1}>
            <div>
              <h5 className="mb-4 text-3xl md:text-4xl font-normal tracking-[1px]">
                Services
              </h5>
              <ul className="flex flex-col gap-1">
                {siteConfig.footerLinks.recommendations.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="inline-flex min-h-[48px] items-center text-base font-normal text-text-secondary tracking-[0.15em] hover:text-link-hover transition-colors duration-300"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </SlideUp>

          <SlideUp delay={0.15}>
            <div>
              <h5 className="mb-4 text-3xl md:text-4xl font-normal tracking-[1px]">
                Guides
              </h5>
              <ul className="flex flex-col gap-1">
                {siteConfig.footerLinks.guides.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="inline-flex min-h-[48px] items-center text-base font-normal text-text-secondary tracking-[0.15em] hover:text-link-hover transition-colors duration-300"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </SlideUp>

          <SlideUp delay={0.25}>
            <div>
              <h5 className="mb-4 text-3xl md:text-4xl font-normal tracking-[1px]">
                Service Areas
              </h5>
              <ul className="flex flex-col gap-1">
                {siteConfig.footerLinks.areas.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="inline-flex min-h-[48px] items-center text-base font-normal text-text-secondary tracking-[0.15em] hover:text-link-hover transition-colors duration-300"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </SlideUp>

          <SlideUp delay={0.35}>
            <div>
              <h5 className="mb-4 text-3xl md:text-4xl font-normal tracking-[1px]">
                Legal
              </h5>
              <ul className="flex flex-col gap-1">
                {siteConfig.footerLinks.legal.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="inline-flex min-h-[48px] items-center text-base font-normal text-text-secondary tracking-[0.15em] hover:text-link-hover transition-colors duration-300"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </SlideUp>
        </div>

      </div>

      <div className="border-t border-border-subtle py-8 text-center">
        <div className="mb-6">
          <BrandLogos variant="footer" />
        </div>
        <p className="text-xs font-normal text-text-muted">
          &copy; {new Date().getFullYear()} {siteConfig.name}
        </p>
      </div>
    </footer>
  );
}
