import Link from "next/link";
import { PaintBucket } from "lucide-react";
import { siteConfig } from "@/config/site";

export function Footer() {
  return (
    <footer className="bg-background">
      <div className="mx-auto max-w-[1200px] px-6 py-12 md:px-8 md:py-16">
        <div className="grid gap-12 md:grid-cols-5">
          <div className="flex flex-col gap-4">
            <Link href="/" className="flex items-center gap-2">
              <PaintBucket
                className="h-4 w-4 text-accent-gold"
                strokeWidth={1.5}
              />
              <span className="text-xs font-medium uppercase tracking-[0.2em]">
                {siteConfig.name}
              </span>
            </Link>
            <a
              href={`tel:${siteConfig.phone.replace(/[^0-9+]/g, "")}`}
              className="text-base font-normal text-foreground"
            >
              {siteConfig.phone}
            </a>
          </div>

          <div>
            <h5 className="mb-4 text-xs font-semibold uppercase tracking-[0.15em]">
              Company
            </h5>
            <ul className="flex flex-col gap-3">
              {siteConfig.footerLinks.links.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm font-normal text-text-secondary transition-opacity hover:opacity-60"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h5 className="mb-4 text-xs font-semibold uppercase tracking-[0.15em]">
              Services
            </h5>
            <ul className="flex flex-col gap-3">
              {siteConfig.footerLinks.recommendations.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm font-normal text-text-secondary transition-opacity hover:opacity-60"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h5 className="mb-4 text-xs font-semibold uppercase tracking-[0.15em]">
              Service Areas
            </h5>
            <ul className="flex flex-col gap-3">
              {siteConfig.footerLinks.areas.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm font-normal text-text-secondary transition-opacity hover:opacity-60"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h5 className="mb-4 text-xs font-semibold uppercase tracking-[0.15em]">
              Legal
            </h5>
            <ul className="flex flex-col gap-3">
              {siteConfig.footerLinks.legal.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm font-normal text-text-secondary transition-opacity hover:opacity-60"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
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
