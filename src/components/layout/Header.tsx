"use client";

import Link from "next/link";
import { useState, useEffect, useRef, useCallback } from "react";
import { usePathname } from "next/navigation";
import { Menu, X, Phone, ChevronDown } from "lucide-react";
import { siteConfig } from "@/config/site";
import { cn, scrollToElement } from "@/lib/utils";
import { motion, AnimatePresence } from "framer-motion";

type NavChild = {
  label: string;
  href: string;
};

export function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [openMobileDropdowns, setOpenMobileDropdowns] = useState<Record<string, boolean>>({});
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
      document.documentElement.style.setProperty("--header-h", `${entry.contentRect.height}px`);
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

  const toggleMobileDropdown = (label: string) => {
    setOpenMobileDropdowns((prev) => ({
      ...prev,
      [label]: !prev[label],
    }));
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

  const isGroveDropdown = (label: string) => label === "Services" || label === "Locations";

  const displayLabel = (label: string) => (label === "Locations" ? "Areas" : label);

  const normalizeChildren = (children?: readonly NavChild[]) => (children ?? []) as NavChild[];

  const serviceGroups = (children: NavChild[]) => {
    const interior: NavChild[] = [];
    const exterior: NavChild[] = [];
    const commercial: NavChild[] = [];
    const other: NavChild[] = [];

    children.forEach((child) => {
      const slug = child.label.toLowerCase();
      if (slug.includes("interior") || slug.includes("cabinet")) {
        interior.push(child);
        return;
      }
      if (slug.includes("exterior") || slug.includes("deck") || slug.includes("pressure") || slug.includes("wash") || slug.includes("siding")) {
        exterior.push(child);
        return;
      }
      if (slug.includes("commercial")) {
        commercial.push(child);
        return;
      }
      other.push(child);
    });

    const grouped = [] as { title: string; links: NavChild[] }[];
    if (interior.length) grouped.push({ title: "Interior Services", links: interior });
    if (exterior.length) grouped.push({ title: "Exterior Services", links: exterior });
    if (commercial.length) grouped.push({ title: "Commercial Services", links: commercial });
    if (other.length) {
      grouped.push({ title: "Additional Services", links: other });
    }

    return grouped.length ? grouped : [{ title: "Services", links: children }];
  };

  const renderChildLink = (child: NavChild) => {
    const hashIndex = child.href.indexOf("#");
    const childPath = hashIndex >= 0 ? child.href.slice(0, hashIndex) : child.href;
    const childHash = hashIndex >= 0 ? child.href.slice(hashIndex + 1) : null;

    return (
      <Link
        href={child.href}
        onClick={(e) => {
          if (childHash && (pathname === childPath || pathname.startsWith(childPath + "/"))) {
            e.preventDefault();
            window.history.pushState(null, "", child.href);
            setOpenDropdown(null);
            setOpenMobileDropdowns({});
            setIsOpen(false);
            scrollToElement(childHash);
          }
          if (!childHash) {
            setOpenDropdown(null);
            setOpenMobileDropdowns({});
            setIsOpen(false);
          }
        }}
        className="block rounded-md px-4 py-2 text-sm font-normal tracking-[0.08em] text-text-secondary transition-colors duration-200 hover:text-link-hover hover:bg-warm"
      >
        {child.label}
      </Link>
    );
  };

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
          <img
            src="/images/sop-horizontal.svg"
            className={cn(
              "h-8 w-auto md:h-10 transition-[filter] duration-300",
              isTransparent && "brightness-0 invert"
            )}
            alt=""
            aria-hidden="true"
          />
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          {siteConfig.nav.map((item) => {
            const hasChildren = !!item.children?.length;
            const showDropdown = isGroveDropdown(item.label) && hasChildren;
            const isDropdownOpen = openDropdown === item.label;

            if (!showDropdown) {
              return (
                <Link
                  key={item.label}
                  href={item.href}
                  className={cn(
                    "text-sm font-medium uppercase tracking-[0.12em] transition-colors duration-300 hover:text-link-hover",
                    isTransparent ? "text-white/90" : "text-foreground"
                  )}
                >
                  {item.label}
                </Link>
              );
            }

            return (
              <div
                key={item.label}
                className="relative"
                onMouseEnter={() => handleDropdownEnter(item.label)}
                onMouseLeave={handleDropdownLeave}
              >
                <Link
                  href={item.href}
                  className={cn(
                    "inline-flex items-center gap-1 text-sm font-medium uppercase tracking-[0.12em] transition-colors duration-300 hover:text-link-hover",
                    isTransparent ? "text-white/90" : "text-foreground"
                  )}
                  aria-haspopup="true"
                  aria-expanded={isDropdownOpen}
                >
                  {displayLabel(item.label)}
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
                      className={cn(
                        "absolute left-0 top-full pt-2",
                        item.label === "Services" ? "w-[640px]" : "w-72"
                      )}
                    >
                      <div
                        className="rounded-lg border border-border-subtle bg-background p-4 shadow-lg"
                        role="menu"
                        aria-label={`${item.label} submenu`}
                      >
                        {item.label === "Services" ? (
                          <div className="grid grid-cols-2 gap-6">
                            {serviceGroups(normalizeChildren(item.children)).map((group) => (
                              <div key={group.title}>
                                <p className="mb-2 text-xs font-semibold uppercase tracking-[0.14em] text-text-secondary">
                                  {group.title}
                                </p>
                                <div className="space-y-1">
                                  {group.links.map((child) => (
                                    <div key={child.href} onClick={() => setOpenDropdown(null)}>
                                      {renderChildLink(child)}
                                    </div>
                                  ))}
                                </div>
                              </div>
                            ))}
                          </div>
                        ) : (
                          <div className="space-y-1">
                            {normalizeChildren(item.children).map((child) => (
                              <div
                                key={child.href}
                                onClick={() => {
                                  setOpenDropdown(null);
                                }}
                              >
                                {renderChildLink(child)}
                              </div>
                            ))}
                          </div>
                        )}
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
              "inline-flex items-center px-5 py-2 text-sm font-semibold uppercase tracking-[0.12em] min-h-[48px] transition-colors",
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
                {siteConfig.nav.map((item) => {
                  const shouldDropdown = isGroveDropdown(item.label) && !!item.children?.length;

                  if (!shouldDropdown) {
                    return (
                      <Link
                        key={item.label}
                        href={item.href}
                        onClick={handleNavClick}
                        className={cn(
                          "block min-h-[48px] py-3.5 text-base font-medium uppercase tracking-[0.12em] text-foreground hover:text-link-hover transition-colors duration-300",
                          item.label === "Blog" && "text-base"
                        )}
                      >
                        {item.label}
                      </Link>
                    );
                  }

                  const isServices = item.label === "Services";
                  const isOpenMobile = !!openMobileDropdowns[item.label];
                  const items = normalizeChildren(item.children);

                  return (
                    <div key={item.label} className="border-b border-border-subtle pb-2">
                      <button
                        type="button"
                        onClick={() => toggleMobileDropdown(item.label)}
                        className="mb-1 flex w-full min-h-[48px] items-center justify-between px-0 py-1 text-left text-sm font-semibold uppercase tracking-[0.12em] text-foreground"
                        aria-expanded={isOpenMobile}
                        aria-controls={`${item.label.toLowerCase()}-mobile-nav`}
                      >
                        <span>{displayLabel(item.label)}</span>
                        <ChevronDown
                          className={cn("h-4 w-4 transition-transform duration-200", isOpenMobile && "rotate-180")}
                        />
                      </button>

                      <AnimatePresence>
                        {isOpenMobile && (
                          <motion.div
                            id={`${item.label.toLowerCase()}-mobile-nav`}
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: "auto", opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.2 }}
                            className="overflow-hidden"
                          >
                            <div className="pl-1 pt-1">
                              {isServices ? (
                                serviceGroups(items).map((group) => (
                                  <div key={group.title}>
                                    <p className="mb-2 mt-2 px-4 text-xs font-semibold uppercase tracking-[0.14em] text-text-secondary">
                                      {group.title}
                                    </p>
                                    <div className="space-y-1">
                                      {group.links.map((child) => {
                                        const hashIdx = child.href.indexOf("#");
                                        const childPath = hashIdx >= 0 ? child.href.slice(0, hashIdx) : child.href;
                                        const childHash = hashIdx >= 0 ? child.href.slice(hashIdx + 1) : null;

                                        return (
                                          <Link
                                            key={child.href}
                                            href={child.href}
                                            onClick={(e) => {
                                              handleNavClick();
                                              if (
                                                childHash &&
                                                (pathname === childPath || pathname.startsWith(childPath + "/"))
                                              ) {
                                                e.preventDefault();
                                                window.history.pushState(null, "", child.href);
                                                setTimeout(() => {
                                                  scrollToElement(childHash);
                                                }, 350);
                                              }
                                            }}
                                            className="block min-h-[48px] py-3.5 px-4 text-base font-normal tracking-[0.08em] text-text-secondary hover:text-link-hover transition-colors duration-300"
                                          >
                                            {child.label}
                                          </Link>
                                        );
                                      })}
                                    </div>
                                  </div>
                                ))
                              ) : (
                                <div className="space-y-1">
                                  {items.map((child) => {
                                    const hashIdx = child.href.indexOf("#");
                                    const childPath = hashIdx >= 0 ? child.href.slice(0, hashIdx) : child.href;
                                    const childHash = hashIdx >= 0 ? child.href.slice(hashIdx + 1) : null;

                                    return (
                                      <Link
                                        key={child.href}
                                        href={child.href}
                                        onClick={(e) => {
                                          handleNavClick();
                                          if (
                                            childHash &&
                                            (pathname === childPath || pathname.startsWith(childPath + "/"))
                                          ) {
                                            e.preventDefault();
                                            window.history.pushState(null, "", child.href);
                                            setTimeout(() => {
                                              scrollToElement(childHash);
                                            }, 350);
                                          }
                                        }}
                                        className="block min-h-[48px] py-3.5 px-4 text-base font-normal tracking-[0.08em] text-text-secondary hover:text-link-hover transition-colors duration-300"
                                      >
                                        {child.label}
                                      </Link>
                                    );
                                  })}
                                </div>
                              )}
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  );
                })}
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
                  className="mt-4 flex min-h-[48px] items-center justify-center rounded-[9px] border border-cta bg-cta text-sm font-semibold uppercase tracking-[0.12em] text-cta-foreground transition-[background-color,box-shadow,border-color] duration-[400ms] [transition-timing-function:cubic-bezier(0.25,0.46,0.45,0.94)] hover:border-cta-hover hover:bg-cta-hover hover:shadow-[0_12px_50px_-5px_rgb(192,164,135)]"
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
