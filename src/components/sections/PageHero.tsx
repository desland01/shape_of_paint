"use client";

import { motion, useReducedMotion } from "framer-motion";
import { DecorativeIcon } from "@/components/shared/DecorativeIcon";

interface PageHeroProps {
  heading: string;
  description?: string;
}

export function PageHero({ heading, description }: PageHeroProps) {
  const prefersReducedMotion = useReducedMotion();

  return (
    <section className="bg-background py-16 text-center md:py-24">
      <div className="mx-auto max-w-[700px] px-6 md:px-8">
        <motion.div
          initial={prefersReducedMotion ? false : { opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <DecorativeIcon variant="leaf" className="mb-6" />
        </motion.div>
        <motion.div
          initial={prefersReducedMotion ? false : { opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
        >
          <h1 className="mb-4 text-4xl font-bold leading-tight md:text-5xl lg:text-6xl">
            {heading}
          </h1>
        </motion.div>
        {description && (
          <motion.div
            initial={prefersReducedMotion ? false : { opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
          >
            <p className="text-lg md:text-xl font-normal leading-relaxed text-text-secondary">
              {description}
            </p>
          </motion.div>
        )}
      </div>
    </section>
  );
}
