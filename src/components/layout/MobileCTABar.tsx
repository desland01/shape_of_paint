"use client";

import { useState, useEffect, useCallback } from "react";
import Link from "next/link";
import { Phone } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export function MobileCTABar() {
  const [isVisible, setIsVisible] = useState(false);
  const [isContactFormVisible, setIsContactFormVisible] = useState(false);

  const handleScroll = useCallback(() => {
    setIsVisible(window.scrollY > 200);
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [handleScroll]);

  useEffect(() => {
    const contactForm = document.getElementById("contact-form");
    if (!contactForm) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsContactFormVisible(entry.isIntersecting);
      },
      { threshold: 0 }
    );

    observer.observe(contactForm);
    return () => observer.disconnect();
  }, []);

  const shouldShow = isVisible && !isContactFormVisible;

  return (
    <AnimatePresence>
      {shouldShow && (
        <motion.div
          initial={{ y: "100%" }}
          animate={{ y: 0 }}
          exit={{ y: "100%" }}
          transition={{
            type: "spring",
            stiffness: 300,
            damping: 30,
          }}
          className="fixed bottom-0 left-0 right-0 z-40 border-t border-border-subtle bg-background/95 backdrop-blur-sm pb-[env(safe-area-inset-bottom)] md:hidden"
        >
          <div className="flex items-center gap-3 px-4 py-3">
            <a
              href="tel:6043537378"
              className="flex min-h-[48px] flex-1 items-center justify-center gap-2 rounded-[9px] border border-foreground/20 text-sm font-semibold uppercase tracking-[0.15em] text-foreground transition-colors duration-300"
              aria-label="Call 604-353-7378"
            >
              <Phone className="h-4 w-4" aria-hidden="true" />
              Call Now
            </a>
            <Link
              href="/contact#contact-form"
              className="flex min-h-[48px] flex-1 items-center justify-center rounded-[9px] border border-cta bg-cta text-sm font-semibold uppercase tracking-[0.15em] text-cta-foreground transition-[background-color,box-shadow,border-color] duration-[400ms] [transition-timing-function:cubic-bezier(0.25,0.46,0.45,0.94)] hover:border-cta-hover hover:bg-cta-hover hover:shadow-[0_12px_50px_-5px_rgb(192,164,135)]"
            >
              Get a Quote
            </Link>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
