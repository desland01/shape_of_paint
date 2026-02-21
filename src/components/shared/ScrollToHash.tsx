"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";
import { scrollToElement } from "@/lib/utils";

function scrollToHash() {
  const hash = window.location.hash;
  if (!hash) return;
  const id = hash.replace("#", "");
  scrollToElement(id);
}

export function ScrollToHash() {
  const pathname = usePathname();

  useEffect(() => {
    // Delay to allow layout to settle after navigation
    const timeout = setTimeout(scrollToHash, 300);
    return () => clearTimeout(timeout);
  }, [pathname]); // Re-run when pathname changes

  useEffect(() => {
    // Handle same-page hash changes (e.g., clicking #contact-form while on /contact)
    window.addEventListener("hashchange", scrollToHash);
    return () => window.removeEventListener("hashchange", scrollToHash);
  }, []);

  return null;
}
