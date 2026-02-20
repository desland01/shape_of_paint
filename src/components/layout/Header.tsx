"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import { Menu, X, Phone } from "lucide-react";
import { siteConfig } from "@/config/site";
import { cn } from "@/lib/utils";
import { motion, AnimatePresence } from "framer-motion";

export function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, []);

  useEffect(() => {
    if (!isOpen) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setIsOpen(false);
    };
    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [isOpen]);

  const isTransparent = pathname === "/" && !scrolled;

  return (
    <header
      className={cn(
        "sticky top-0 z-50 w-full transition-all duration-300",
        isTransparent ? "bg-transparent" : "bg-background/95 backdrop-blur-sm"
      )}
    >
      <div className="mx-auto flex max-w-[1200px] items-center justify-between px-4 py-4 md:py-6 md:px-8">
        <Link href="/" className="flex items-center gap-2">
          <Image
            src="/images/logo-icon.png"
            width={50}
            height={50}
            className="h-10 w-auto md:h-[50px]"
            alt=""
            aria-hidden="true"
            unoptimized
            priority
          />
          <span
            className={cn(
              "text-sm font-medium uppercase tracking-[0.2em] transition-colors duration-300",
              isTransparent ? "text-white" : "text-foreground"
            )}
          >
            {siteConfig.name}
          </span>
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          {siteConfig.nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                "text-sm font-medium uppercase tracking-[0.15em] transition-colors duration-300 hover:text-link-hover",
                isTransparent ? "text-white/90" : "text-foreground"
              )}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="hidden md:flex items-center gap-4">
          <a
            href={`tel:${siteConfig.phone.replace(/[^0-9+]/g, "")}`}
            title={siteConfig.phone}
            aria-label={`Call us at ${siteConfig.phone}`}
            className={cn(
              "inline-flex items-center justify-center min-h-[48px] min-w-[48px] rounded-full transition-colors duration-300",
              isTransparent
                ? "text-white/80 hover:text-white hover:bg-white/10"
                : "text-text-secondary hover:text-foreground hover:bg-foreground/5"
            )}
          >
            <Phone className="h-[18px] w-[18px]" strokeWidth={1.5} />
          </a>
          <Link
            href="/contact#contact-form"
            className={cn(
              "inline-flex items-center px-5 py-2 text-sm font-semibold uppercase tracking-widest min-h-[48px] transition-colors",
              isTransparent
                ? "rounded-[9px] border border-white text-white hover:bg-white/10"
                : "rounded-[9px] border border-cta bg-cta text-cta-foreground transition-[background-color,box-shadow,border-color] duration-[400ms] [transition-timing-function:cubic-bezier(0.25,0.46,0.45,0.94)] hover:border-cta-hover hover:bg-cta-hover hover:shadow-[0_12px_50px_-5px_rgb(192,164,135)]"
            )}
          >
            Free Estimate
          </Link>
        </div>

        <button
          onClick={() => setIsOpen(!isOpen)}
          className="p-3 -mr-3 md:hidden"
          aria-label={isOpen ? "Close menu" : "Open menu"}
        >
          {isOpen ? (
            <X className={cn("h-6 w-6 transition-colors duration-300", isTransparent && "text-white")} />
          ) : (
            <Menu className={cn("h-6 w-6 transition-colors duration-300", isTransparent && "text-white")} />
          )}
        </button>
      </div>

      <div className="mx-auto max-w-[1200px] px-4 md:px-8">
        <div
          className={cn(
            "h-px bg-border-subtle transition-opacity duration-300",
            isTransparent && "opacity-0"
          )}
        />
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="overflow-hidden md:hidden"
          >
            <nav className="flex flex-col gap-1 px-4 py-6">
              {siteConfig.nav.map((item) => (
                <div key={item.href}>
                  <Link
                    href={item.href}
                    onClick={() => setIsOpen(false)}
                    className={cn(
                      "block min-h-[48px] py-3.5 text-base font-medium uppercase tracking-[0.15em] text-foreground hover:text-link-hover transition-colors duration-300",
                      "children" in item && "font-semibold"
                    )}
                  >
                    {item.label}
                  </Link>
                  {"children" in item && item.children?.map((child) => (
                    <Link
                      key={child.href}
                      href={child.href}
                      onClick={() => setIsOpen(false)}
                      className="block min-h-[48px] py-3.5 pl-4 text-base font-normal tracking-[0.1em] text-text-secondary hover:text-link-hover transition-colors duration-300"
                    >
                      {child.label}
                    </Link>
                  ))}
                </div>
              ))}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
