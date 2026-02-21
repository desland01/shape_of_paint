"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect, useRef, useCallback } from "react";
import { usePathname } from "next/navigation";
import { Menu, X, Phone, ChevronDown } from "lucide-react";
import { siteConfig } from "@/config/site";
import { cn, scrollToElement } from "@/lib/utils";
import { motion, AnimatePresence } from "framer-motion";

export function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const pathname = usePathname();
  const headerRef = useRef<HTMLElement>(null);
  const closeTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, []);

  useEffect(() => {
    const el = headerRef.current;
    if (!el) return;
    const observer = new ResizeObserver(([entry]) => {
      document.documentElement.style.setProperty(
        "--header-h",
        `${entry.contentRect.height}px`
      );
    });
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!isOpen) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setIsOpen(false);
    };
    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [isOpen]);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  const handleNavClick = () => {
    document.body.style.overflow = '';
    setIsOpen(false);
  };

  const handleDropdownEnter = useCallback((label: string) => {
    if (closeTimeoutRef.current) {
      clearTimeout(closeTimeoutRef.current);
      closeTimeoutRef.current = null;
    }
    setOpenDropdown(label);
  }, []);

  const handleDropdownLeave = useCallback(() => {
    closeTimeoutRef.current = setTimeout(() => {
      setOpenDropdown(null);
    }, 150);
  }, []);

  useEffect(() => {
    return () => {
      if (closeTimeoutRef.current) {
        clearTimeout(closeTimeoutRef.current);
      }
    };
  }, []);

  const isTransparent = pathname === "/" && !scrolled;

  return (
    <header
      ref={headerRef}
      className={cn(
        "sticky top-0 z-50 w-full transition-all duration-300",
        isTransparent ? "bg-transparent" : "bg-background/95 backdrop-blur-sm"
      )}
    >
      <div className="mx-auto flex max-w-[1440px] items-center justify-between px-4 py-4 md:py-6 md:px-8">
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
          {siteConfig.nav.map((item) => {
            const hasChildren = "children" in item && item.children && item.children.length > 0;
            const isDropdownOpen = openDropdown === item.label;

            if (!hasChildren) {
              return (
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
              );
            }

            return (
              <div
                key={item.href}
                className="relative"
                onMouseEnter={() => handleDropdownEnter(item.label)}
                onMouseLeave={handleDropdownLeave}
              >
                <Link
                  href={item.href}
                  className={cn(
                    "inline-flex items-center gap-1 text-sm font-medium uppercase tracking-[0.15em] transition-colors duration-300 hover:text-link-hover",
                    isTransparent ? "text-white/90" : "text-foreground"
                  )}
                  aria-haspopup="true"
                  aria-expanded={isDropdownOpen}
                >
                  {item.label}
                  <ChevronDown
                    className={cn(
                      "h-3 w-3 transition-transform duration-200",
                      isDropdownOpen && "rotate-180"
                    )}
                  />
                </Link>

                <AnimatePresence>
                  {isDropdownOpen && (
                    <motion.div
                      initial={{ opacity: 0, y: 8 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 8 }}
                      transition={{ duration: 0.2, ease: [0.25, 0.46, 0.45, 0.94] }}
                      className="absolute left-0 top-full pt-2"
                    >
                      <div
                        className="min-w-[200px] rounded-lg border border-border-subtle bg-background p-2 shadow-lg"
                        role="menu"
                        aria-label={`${item.label} submenu`}
                      >
                        {item.children?.map((child) => {
                          const hashIndex = child.href.indexOf("#");
                          const childPath = hashIndex >= 0 ? child.href.slice(0, hashIndex) : child.href;
                          const childHash = hashIndex >= 0 ? child.href.slice(hashIndex + 1) : null;
                          return (
                            <Link
                              key={child.href}
                              href={child.href}
                              role="menuitem"
                              onClick={childHash ? (e) => {
                                if (pathname === childPath || pathname.startsWith(childPath + "/")) {
                                  e.preventDefault();
                                  window.history.pushState(null, "", child.href);
                                  setOpenDropdown(null);
                                  scrollToElement(childHash);
                                }
                              } : undefined}
                              className="block min-h-[48px] rounded-md px-4 py-3 text-xs font-medium uppercase tracking-[0.12em] text-foreground transition-colors duration-200 hover:bg-warm hover:text-link-hover"
                            >
                              {child.label}
                            </Link>
                          );
                        })}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
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
            onClick={(e) => {
              if (pathname === "/contact" || pathname.startsWith("/contact/")) {
                e.preventDefault();
                window.history.pushState(null, "", "/contact#contact-form");
                scrollToElement("contact-form");
              }
            }}
            className={cn(
              "inline-flex items-center px-5 py-2 text-sm font-semibold uppercase tracking-widest min-h-[48px] transition-colors",
              isTransparent
                ? "rounded-[9px] border border-white text-white hover:bg-white/10"
                : "rounded-[9px] border border-cta bg-cta text-cta-foreground transition-[background-color,box-shadow,border-color] duration-[400ms] [transition-timing-function:cubic-bezier(0.25,0.46,0.45,0.94)] hover:border-cta-hover hover:bg-cta-hover hover:shadow-[0_12px_50px_-5px_rgb(192,164,135)]"
            )}
          >
            Book Your Estimate
          </Link>
        </div>

        <button
          onClick={() => setIsOpen(!isOpen)}
          className="min-h-[48px] min-w-[48px] flex items-center justify-center -mr-3 md:hidden"
          aria-label={isOpen ? "Close menu" : "Open menu"}
          aria-expanded={isOpen}
        >
          {isOpen ? (
            <X className={cn("h-6 w-6 transition-colors duration-300", isTransparent && "text-white")} />
          ) : (
            <Menu className={cn("h-6 w-6 transition-colors duration-300", isTransparent && "text-white")} />
          )}
        </button>
      </div>

      <div className="mx-auto max-w-[1440px] px-4 md:px-8">
        <div
          className={cn(
            "h-px bg-border-subtle transition-opacity duration-300",
            isTransparent && "opacity-0"
          )}
        />
      </div>

      <AnimatePresence>
        {isOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className="fixed inset-0 z-40 bg-black/40 md:hidden"
              onClick={() => setIsOpen(false)}
              aria-hidden="true"
            />
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className="fixed left-0 right-0 z-50 overflow-y-auto bg-background md:hidden"
              style={{ top: "var(--header-h)", maxHeight: "calc(100dvh - var(--header-h))" }}
            >
            <nav className="flex flex-col gap-1 px-4 py-6">
              {siteConfig.nav.map((item) => (
                <div key={item.href}>
                  <Link
                    href={item.href}
                    onClick={handleNavClick}
                    className={cn(
                      "block min-h-[48px] py-3.5 text-base font-medium uppercase tracking-[0.15em] text-foreground hover:text-link-hover transition-colors duration-300",
                      "children" in item && "font-semibold"
                    )}
                  >
                    {item.label}
                  </Link>
                  {"children" in item && item.children?.map((child) => {
                    const hashIdx = child.href.indexOf("#");
                    const cPath = hashIdx >= 0 ? child.href.slice(0, hashIdx) : child.href;
                    const cHash = hashIdx >= 0 ? child.href.slice(hashIdx + 1) : null;
                    return (
                      <Link
                        key={child.href}
                        href={child.href}
                        onClick={(e) => {
                          handleNavClick();
                          if (cHash && (pathname === cPath || pathname.startsWith(cPath + "/"))) {
                            e.preventDefault();
                            window.history.pushState(null, "", child.href);
                            setTimeout(() => {
                              scrollToElement(cHash);
                            }, 350);
                          }
                        }}
                        className="block min-h-[48px] py-3.5 pl-4 text-base font-normal tracking-[0.1em] text-text-secondary hover:text-link-hover transition-colors duration-300"
                      >
                        {child.label}
                      </Link>
                    );
                  })}
                </div>
              ))}
              <Link
                href="/contact#contact-form"
                onClick={(e) => {
                  handleNavClick();
                  if (pathname === "/contact" || pathname.startsWith("/contact/")) {
                    e.preventDefault();
                    window.history.pushState(null, "", "/contact#contact-form");
                    setTimeout(() => {
                      scrollToElement("contact-form");
                    }, 350);
                  }
                }}
                className="mt-4 flex min-h-[48px] items-center justify-center rounded-[9px] border border-cta bg-cta text-sm font-semibold uppercase tracking-[0.15em] text-cta-foreground transition-[background-color,box-shadow,border-color] duration-[400ms] [transition-timing-function:cubic-bezier(0.25,0.46,0.45,0.94)] hover:border-cta-hover hover:bg-cta-hover hover:shadow-[0_12px_50px_-5px_rgb(192,164,135)]"
              >
                Book Your Estimate
              </Link>
            </nav>
          </motion.div>
          </>
        )}
      </AnimatePresence>
    </header>
  );
}
