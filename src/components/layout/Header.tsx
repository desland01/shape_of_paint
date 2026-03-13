"use client";

import Link from "next/link";
import { useState, useEffect, useRef, useCallback } from "react";
import { usePathname } from "next/navigation";
import { Menu, X, Phone, ChevronDown, ChevronRight } from "lucide-react";
import { siteConfig, megaMenuLocations } from "@/config/site";
import { cn, scrollToElement } from "@/lib/utils";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";

type NavChild = {
  label: string;
  href: string;
  group?: string;
  description?: string;
};

type NavItem = {
  label: string;
  href: string;
  variant?: "mega";
  children?: readonly NavChild[];
};

export function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [openMobileDropdowns, setOpenMobileDropdowns] = useState<Record<string, boolean>>({});
  const pathname = usePathname();
  const shouldReduceMotion = useReducedMotion();
  const instantTransition = { duration: 0 };
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
    if (!isOpen && !openDropdown) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setIsOpen(false);
        setOpenDropdown(null);
      }
    };
    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, openDropdown]);

  useEffect(() => {
    if (!openDropdown) return;
    const handleClickOutside = (e: MouseEvent) => {
      if (headerRef.current && !headerRef.current.contains(e.target as Node)) {
        setOpenDropdown(null);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [openDropdown]);

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
    if (typeof document !== 'undefined') {
      // eslint-disable-next-line react-hooks/immutability
      document.body.style.overflow = '';
    }
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

  const normalizeChildren = (children?: readonly NavChild[]) => (children ?? []) as NavChild[];

  const getMenuGroups = (children: NavChild[]) => {
    const groups = new Map<string, NavChild[]>();
    const ungrouped: NavChild[] = [];

    children.forEach((child) => {
      if (child.group) {
        const existing = groups.get(child.group) || [];
        existing.push(child);
        groups.set(child.group, existing);
      } else {
        ungrouped.push(child);
      }
    });

    if (groups.size === 0) return [{ title: "", links: children }];

    const result = Array.from(groups.entries()).map(([title, links]) => ({ title, links }));
    if (ungrouped.length) result.push({ title: "", links: ungrouped });
    return result;
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
        className="type-small block rounded-md px-4 py-2 text-text-secondary transition-colors duration-200 hover:bg-warm hover:text-link-hover"
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
              "h-16 w-auto md:h-20 transition-[filter] duration-300",
              isTransparent && "brightness-0 invert"
            )}
            alt=""
            aria-hidden="true"
          />
        </Link>

        <nav className="hidden items-center gap-8 lg:flex">
          {(siteConfig.nav as unknown as NavItem[]).map((item) => {
            const hasChildren = !!item.children?.length;
            const isDropdownOpen = openDropdown === item.label;

            /* --- Mega menu trigger (panel renders outside nav) --- */
            if (item.variant === "mega") {
              return (
                <div
                  key={item.label}
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
                    {item.label}
                    <ChevronDown
                      className={cn(
                        "h-3 w-3 transition-transform duration-200",
                        isDropdownOpen && "rotate-180"
                      )}
                    />
                  </Link>
                </div>
              );
            }

            /* --- Regular dropdown (FAQ, Paint Guides) --- */
            if (hasChildren) {
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
                    {item.label}
                    <ChevronDown
                      className={cn(
                        "h-3 w-3 transition-transform duration-200",
                        isDropdownOpen && "rotate-180"
                      )}
                    />
                  </Link>

                  <AnimatePresence>
                    {isDropdownOpen && (() => {
                      const groups = getMenuGroups(normalizeChildren(item.children));
                      const colCount = groups.length;
                      const dropdownWidth = colCount >= 3 ? "w-[780px]" : colCount === 2 ? "w-[520px]" : "w-72";
                      return (
                        <motion.div
                          initial={{ opacity: 0, y: 8 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: 8 }}
                          transition={shouldReduceMotion ? instantTransition : { duration: 0.2, ease: [0.25, 0.46, 0.45, 0.94] }}
                          className={cn("absolute left-0 top-full pt-2", dropdownWidth)}
                        >
                          <div
                            className="rounded-lg border border-border-subtle bg-background p-4 shadow-lg"
                            role="menu"
                            aria-label={`${item.label} submenu`}
                          >
                            <div className={`grid gap-6 ${colCount >= 3 ? "grid-cols-3" : colCount === 2 ? "grid-cols-2" : "grid-cols-1"}`}>
                              {groups.map((group) => (
                                <div key={group.title || "default"}>
                                  {group.title && (
                                    <p className="caption mb-2 font-semibold uppercase text-text-secondary">
                                      {group.title}
                                    </p>
                                  )}
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
                          </div>
                        </motion.div>
                      );
                    })()}
                  </AnimatePresence>
                </div>
              );
            }

            /* --- Plain link (no children) --- */
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
          })}
        </nav>

        <div className="hidden lg:flex items-center gap-4">
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
          className="min-h-[48px] min-w-[48px] flex items-center justify-center -mr-3 lg:hidden"
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

      {/* Mega-menu panel */}
      <AnimatePresence>
        {openDropdown === "Painting Services" && (() => {
          const megaItem = (siteConfig.nav as unknown as NavItem[]).find(
            (item) => item.variant === "mega"
          );
          if (!megaItem?.children) return null;
          const children = [...megaItem.children] as NavChild[];
          const interiorServices = children.filter((c) => c.group === "Interior Services");
          const exteriorServices = children.filter((c) => c.group === "Exterior Services");

          return (
            <motion.div
              initial={{ opacity: 0, y: -4 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -4 }}
              transition={shouldReduceMotion ? instantTransition : { duration: 0.2, ease: [0.25, 0.46, 0.45, 0.94] }}
              className="absolute left-0 right-0 z-40 hidden lg:block"
              onMouseEnter={() => handleDropdownEnter("Painting Services")}
              onMouseLeave={handleDropdownLeave}
            >
              <div className="bg-background shadow-lg">
                <div className="mx-auto grid max-w-[1440px] grid-cols-[1fr_1fr_1fr_280px] gap-0 px-4 py-8 md:px-8">
                  {/* Col 1: Interior Services */}
                  <div className="pr-6">
                    <p className="type-body-lg mb-4 font-heading font-semibold leading-[1.08] text-foreground">
                      Interior Services
                    </p>
                    <div className="space-y-1">
                      {interiorServices.map((child) => (
                        <Link
                          key={child.href}
                          href={child.href}
                          onClick={() => setOpenDropdown(null)}
                          className="group/link flex items-start gap-3 rounded-md px-3 py-3 transition-colors duration-200 hover:bg-warm"
                        >
                          <div className="flex-1">
                            <span className="type-body-lg font-heading font-semibold leading-[1.08] text-foreground transition-colors duration-200 group-hover/link:text-link-hover">
                              {child.label}
                            </span>
                            {child.description && (
                              <span className="type-small mt-1.5 block font-medium leading-[1.65] text-text-secondary">
                                {child.description}
                              </span>
                            )}
                          </div>
                          <ChevronRight className="mt-1 h-4 w-4 shrink-0 text-text-muted transition-transform duration-200 group-hover/link:translate-x-0.5" />
                        </Link>
                      ))}
                    </div>
                  </div>

                  {/* Col 2: Exterior Services */}
                  <div className="border-l border-border-subtle px-6">
                    <p className="type-body-lg mb-4 font-heading font-semibold leading-[1.08] text-foreground">
                      Exterior Services
                    </p>
                    <div className="space-y-1">
                      {exteriorServices.map((child) => (
                        <Link
                          key={child.href}
                          href={child.href}
                          onClick={() => setOpenDropdown(null)}
                          className="group/link flex items-start gap-3 rounded-md px-3 py-3 transition-colors duration-200 hover:bg-warm"
                        >
                          <div className="flex-1">
                            <span className="type-body-lg font-heading font-semibold leading-[1.08] text-foreground transition-colors duration-200 group-hover/link:text-link-hover">
                              {child.label}
                            </span>
                            {child.description && (
                              <span className="type-small mt-1.5 block font-medium leading-[1.65] text-text-secondary">
                                {child.description}
                              </span>
                            )}
                          </div>
                          <ChevronRight className="mt-1 h-4 w-4 shrink-0 text-text-muted transition-transform duration-200 group-hover/link:translate-x-0.5" />
                        </Link>
                      ))}
                    </div>
                  </div>

                  {/* Col 3: Where We Work */}
                  <div className="border-l border-border-subtle px-6">
                    <p className="type-body-lg mb-4 font-heading font-semibold leading-[1.08] text-foreground">
                      Where We Work
                    </p>
                    <div className="space-y-1">
                      {megaMenuLocations.map((loc) => (
                        <Link
                          key={loc.href}
                          href={loc.href}
                          onClick={() => setOpenDropdown(null)}
                          className="type-body block rounded-md px-3 py-2 text-text-secondary transition-colors duration-200 hover:bg-warm hover:text-link-hover"
                        >
                          {loc.label}
                        </Link>
                      ))}
                      <Link
                        href="/locations"
                        onClick={() => setOpenDropdown(null)}
                        className="type-body mt-2 inline-flex items-center gap-1 px-3 py-2 font-semibold text-foreground transition-colors duration-200 hover:text-link-hover"
                      >
                        View All Areas
                        <ChevronRight className="h-3.5 w-3.5" />
                      </Link>
                    </div>
                  </div>

                  {/* Col 4: Calculator CTA */}
                  <div className="rounded-lg bg-[#202A44] px-6 py-6">
                    <p className="kicker text-white/60">
                      Helpful Resources
                    </p>
                    <h3 className="type-h3 mt-2 font-heading leading-[1.08] text-white">
                      Painting Cost Calculator
                    </h3>
                    <p className="type-small mt-2 max-w-[22ch] text-white/72">
                      Get a room-by-room estimate in under 2 minutes. No email required.
                    </p>
                    <Link
                      href="/tools/cost-calculator"
                      onClick={() => setOpenDropdown(null)}
                      className="mt-4 inline-flex items-center rounded-[9px] border border-cta bg-cta px-5 py-2.5 text-sm font-semibold uppercase tracking-[0.12em] text-cta-foreground transition-[background-color,box-shadow,border-color] duration-[400ms] [transition-timing-function:cubic-bezier(0.25,0.46,0.45,0.94)] hover:border-cta-hover hover:bg-cta-hover hover:shadow-[0_12px_50px_-5px_rgb(192,164,135)]"
                    >
                      Try the Calculator
                    </Link>
                    <Link
                      href="/paint-guides"
                      onClick={() => setOpenDropdown(null)}
                      className="type-small mt-3 inline-flex items-center gap-1 font-semibold text-white/70 transition-colors duration-200 hover:text-white"
                    >
                      Paint Guides
                      <ChevronRight className="h-3.5 w-3.5" />
                    </Link>
                  </div>
                </div>
              </div>
            </motion.div>
          );
        })()}
      </AnimatePresence>

      <AnimatePresence>
        {isOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={shouldReduceMotion ? instantTransition : { duration: 0.3, ease: "easeInOut" }}
              className="fixed inset-0 z-40 bg-black/40 lg:hidden"
              onClick={() => setIsOpen(false)}
              aria-hidden="true"
            />
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={shouldReduceMotion ? instantTransition : { duration: 0.3, ease: "easeInOut" }}
              className="fixed left-0 right-0 z-50 overflow-y-auto bg-background lg:hidden"
              style={{ top: "var(--header-h)", maxHeight: "calc(100dvh - var(--header-h))" }}
            >
              <nav className="flex flex-col gap-1 px-4 py-6">
                {(siteConfig.nav as unknown as NavItem[]).map((item) => {
                  const shouldDropdown = !!item.children?.length;

                  if (!shouldDropdown) {
                    return (
                      <Link
                        key={item.label}
                        href={item.href}
                        onClick={handleNavClick}
                        className="block min-h-[48px] py-3.5 text-base font-medium uppercase tracking-[0.12em] text-foreground hover:text-link-hover transition-colors duration-300"
                      >
                        {item.label}
                      </Link>
                    );
                  }

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
                        <span>{item.label}</span>
                        <ChevronDown
                          className={cn("h-4 w-4 transition-transform duration-200", isOpenMobile && "rotate-180")}
                        />
                      </button>

                      <AnimatePresence>
                        {isOpenMobile && item.variant === "mega" && (
                          <motion.div
                            id={`${item.label.toLowerCase()}-mobile-nav`}
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: "auto", opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={shouldReduceMotion ? instantTransition : { duration: 0.2 }}
                            className="overflow-hidden"
                          >
                            <div className="pl-1 pt-1">
                              {getMenuGroups(items).map((group) => (
                                <div key={group.title || "default"}>
                                  {group.title && (
                                    <p className="mb-2 mt-2 px-4 text-xs font-semibold uppercase tracking-[0.14em] text-text-secondary">
                                      {group.title}
                                    </p>
                                  )}
                                  <div className="space-y-1">
                                    {group.links.map((child) => (
                                      <Link
                                        key={child.href}
                                        href={child.href}
                                        onClick={handleNavClick}
                                        className="block px-4 py-3.5 min-h-[48px]"
                                      >
                                        <span className="block text-base font-normal tracking-[0.08em] text-foreground">
                                          {child.label}
                                        </span>
                                        {child.description && (
                                          <span className="mt-0.5 block text-sm leading-snug text-text-secondary">
                                            {child.description}
                                          </span>
                                        )}
                                      </Link>
                                    ))}
                                  </div>
                                </div>
                              ))}
                              {/* Where We Work */}
                              <div className="mt-2">
                                <p className="mb-2 mt-2 px-4 text-xs font-semibold uppercase tracking-[0.14em] text-text-secondary">
                                  Where We Work
                                </p>
                                <div className="space-y-1">
                                  {megaMenuLocations.map((loc) => (
                                    <Link
                                      key={loc.href}
                                      href={loc.href}
                                      onClick={handleNavClick}
                                      className="block min-h-[48px] py-3.5 px-4 text-base font-normal tracking-[0.08em] text-text-secondary hover:text-link-hover transition-colors duration-300"
                                    >
                                      {loc.label}
                                    </Link>
                                  ))}
                                </div>
                              </div>
                              {/* Cost Calculator CTA */}
                              <Link
                                href="/tools/cost-calculator"
                                onClick={handleNavClick}
                                className="mt-3 block min-h-[48px] py-3.5 px-4 text-base font-medium tracking-[0.08em] text-foreground hover:text-link-hover transition-colors duration-300"
                              >
                                Painting Cost Calculator
                              </Link>
                              <Link
                                href="/paint-guides"
                                onClick={handleNavClick}
                                className="block min-h-[48px] py-3.5 px-4 text-base font-medium tracking-[0.08em] text-foreground hover:text-link-hover transition-colors duration-300"
                              >
                                Paint Guides
                              </Link>
                            </div>
                          </motion.div>
                        )}
                        {isOpenMobile && item.variant !== "mega" && (
                          <motion.div
                            id={`${item.label.toLowerCase()}-mobile-nav`}
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: "auto", opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={shouldReduceMotion ? instantTransition : { duration: 0.2 }}
                            className="overflow-hidden"
                          >
                            <div className="pl-1 pt-1">
                              {getMenuGroups(items).map((group) => (
                                <div key={group.title || "default"}>
                                  {group.title && (
                                    <p className="mb-2 mt-2 px-4 text-xs font-semibold uppercase tracking-[0.14em] text-text-secondary">
                                      {group.title}
                                    </p>
                                  )}
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
                              ))}
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
