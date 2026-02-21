import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function scrollToElement(id: string) {
  const el = document.getElementById(id);
  if (!el) return;
  const headerHeight = parseInt(
    getComputedStyle(document.documentElement).getPropertyValue("--header-h") || "72",
    10
  );
  const top = el.getBoundingClientRect().top + window.scrollY - headerHeight;
  window.scrollTo({ top, behavior: "smooth" });
}
