"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, X, PaintBucket } from "lucide-react";
import { siteConfig } from "@/config/site";
import { cn } from "@/lib/utils";
import { motion, AnimatePresence } from "framer-motion";

export function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="relative z-50 w-full bg-background">
      <div className="mx-auto flex max-w-[1200px] items-center justify-between px-6 py-6 md:px-8">
        <Link href="/" className="flex items-center gap-2">
          <PaintBucket className="h-5 w-5 text-accent-gold" strokeWidth={1.5} />
          <span className="text-sm font-medium uppercase tracking-[0.2em] text-foreground">
            {siteConfig.name}
          </span>
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          {siteConfig.nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-xs font-medium uppercase tracking-[0.15em] text-foreground transition-opacity hover:opacity-60"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden"
          aria-label={isOpen ? "Close menu" : "Open menu"}
        >
          {isOpen ? (
            <X className="h-6 w-6" />
          ) : (
            <Menu className="h-6 w-6" />
          )}
        </button>
      </div>

      <div className="mx-auto max-w-[1200px] px-6 md:px-8">
        <div className="h-px bg-border-subtle" />
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
                      className="block py-2 pl-4 text-xs font-normal tracking-[0.1em] text-text-secondary transition-opacity hover:opacity-60"
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
