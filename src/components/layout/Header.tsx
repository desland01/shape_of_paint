"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import { Menu, X, PaintBucket } from "lucide-react";
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

  const isTransparent = pathname === "/" && !scrolled;

  return (
    <header
      className={cn(
        "sticky top-0 z-50 w-full transition-all duration-300",
        isTransparent ? "bg-transparent" : "bg-background/95 backdrop-blur-sm"
      )}
    >
      <div className="mx-auto flex max-w-[1200px] items-center justify-between px-6 py-6 md:px-8">
        <Link href="/" className="flex items-center gap-2">
          <PaintBucket className="h-5 w-5 text-accent-gold" strokeWidth={1.5} />
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
                "text-xs font-medium uppercase tracking-[0.15em] transition-colors duration-300 hover:opacity-60",
                isTransparent ? "text-white/90" : "text-foreground"
              )}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <Link
          href="/contact/estimate"
          className={cn(
            "hidden md:inline-flex items-center px-5 py-2 text-xs font-medium uppercase tracking-widest min-h-[48px] transition-colors",
            isTransparent
              ? "border border-white text-white hover:bg-white/10"
              : "bg-foreground text-background hover:bg-foreground/90"
          )}
        >
          Free Estimate
        </Link>

        <a
          href={`tel:${siteConfig.phone.replace(/[^0-9+]/g, "")}`}
          className={cn(
            "mr-1 py-2 px-3 min-h-[48px] flex items-center text-sm font-medium transition-colors duration-300 md:hidden",
            isTransparent ? "text-white" : "text-foreground"
          )}
        >
          {siteConfig.phone}
        </a>

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

      <div className="mx-auto max-w-[1200px] px-6 md:px-8">
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
            <nav className="flex flex-col gap-1 px-6 py-6">
              {siteConfig.nav.map((item) => (
                <div key={item.href}>
                  <Link
                    href={item.href}
                    onClick={() => setIsOpen(false)}
                    className={cn(
                      "block py-3 text-sm font-medium uppercase tracking-[0.15em] text-foreground transition-opacity hover:opacity-60",
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
                      className="block py-3 pl-4 text-sm font-normal tracking-[0.1em] text-text-secondary transition-opacity hover:opacity-60"
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
