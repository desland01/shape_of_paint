import Link from "next/link";
import Image from "next/image";
import { siteConfig } from "@/config/site";
import { SlideUp } from "@/components/ui/motion";

export function Footer() {
  return (
    <footer className="bg-background">
      <div className="mx-auto max-w-[1200px] px-6 pt-12 pb-24 md:px-8 md:py-16">
        <div className="grid gap-12 md:grid-cols-5">
          <SlideUp>
            <div className="flex flex-col gap-4">
              <Link href="/" className="flex items-center gap-2">
                <Image
                  src="/images/logo-icon.png"
                  width={80}
                  height={80}
                  className="h-20 w-auto"
                  alt=""
                  aria-hidden="true"
                  unoptimized
                />
                <span className="text-sm font-medium uppercase tracking-[0.2em]">
                  {siteConfig.name}
                </span>
              </Link>
              <a
                href={`tel:${siteConfig.phone.replace(/[^0-9+]/g, "")}`}
                className="inline-block py-2 text-base font-normal text-foreground"
              >
                {siteConfig.phone}
              </a>
            </div>
          </SlideUp>

          <SlideUp delay={0.1}>
            <div>
              <h5 className="mb-4 text-2xl md:text-3xl font-normal tracking-[1px]">
                Company
              </h5>
              <ul className="flex flex-col gap-1">
                {siteConfig.footerLinks.links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="inline-block py-2 text-base font-normal text-text-secondary tracking-[0.15em] hover:text-link-hover transition-colors duration-300"
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
              <h5 className="mb-4 text-2xl md:text-3xl font-normal tracking-[1px]">
                Services
              </h5>
              <ul className="flex flex-col gap-1">
                {siteConfig.footerLinks.recommendations.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="inline-block py-2 text-base font-normal text-text-secondary tracking-[0.15em] hover:text-link-hover transition-colors duration-300"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </SlideUp>

          <SlideUp delay={0.2}>
            <div>
              <h5 className="mb-4 text-2xl md:text-3xl font-normal tracking-[1px]">
                Service Areas
              </h5>
              <ul className="flex flex-col gap-1">
                {siteConfig.footerLinks.areas.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="inline-block py-2 text-base font-normal text-text-secondary tracking-[0.15em] hover:text-link-hover transition-colors duration-300"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </SlideUp>

          <SlideUp delay={0.3}>
            <div>
              <h5 className="mb-4 text-2xl md:text-3xl font-normal tracking-[1px]">
                Legal
              </h5>
              <ul className="flex flex-col gap-1">
                {siteConfig.footerLinks.legal.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="inline-block py-2 text-base font-normal text-text-secondary tracking-[0.15em] hover:text-link-hover transition-colors duration-300"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </SlideUp>
        </div>

        <div className="mt-12 border-t border-border-subtle pt-8 text-center">
          <p className="text-xs font-normal text-text-muted">
            &copy; {new Date().getFullYear()} {siteConfig.name}
          </p>
        </div>
      </div>
    </footer>
  );
}
