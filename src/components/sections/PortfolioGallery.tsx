"use client";

import Image from "next/image";
import { useState } from "react";
import { DecorativeIcon } from "@/components/shared/DecorativeIcon";
import { Eyebrow } from "@/components/shared/Eyebrow";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";
import { SlideUp, ScaleIn } from "@/components/ui/motion";

interface GalleryImage {
  src: string;
  alt: string;
}

interface PortfolioGalleryProps {
  eyebrow: string;
  heading: string;
  subtitle?: string;
  images: GalleryImage[];
}

export function PortfolioGallery({
  eyebrow,
  heading,
  subtitle,
  images,
}: PortfolioGalleryProps) {
  const [selectedImage, setSelectedImage] = useState<GalleryImage | null>(null);

  return (
    <>
      <section className="bg-background py-16 md:py-24 lg:py-32">
        <div className="mx-auto max-w-[1200px] px-6 text-center md:px-8">
          <SlideUp>
            <DecorativeIcon variant="leaf" className="mb-6" />
          </SlideUp>
          <SlideUp delay={0.1}>
            <Eyebrow className="mb-4">{eyebrow}</Eyebrow>
          </SlideUp>
          <SlideUp delay={0.15}>
            <h2 className="mb-4 text-3xl font-semibold md:text-4xl lg:text-5xl">{heading}</h2>
          </SlideUp>
          {subtitle && (
            <SlideUp delay={0.2}>
              <p className="mx-auto mb-12 max-w-[600px] text-lg font-normal leading-relaxed text-text-secondary">
                {subtitle}
              </p>
            </SlideUp>
          )}

          <div className="grid grid-cols-2 gap-[3px] md:grid-cols-4">
            {images.map((img, i) => (
              <ScaleIn key={i} delay={i * 0.06}>
                <button
                  onClick={() => setSelectedImage(img)}
                  className="relative aspect-square w-full overflow-hidden cursor-pointer"
                >
                  <Image
                    src={img.src}
                    alt={img.alt}
                    fill
                    className="object-cover transition-transform duration-500 hover:scale-[1.05]"
                    sizes="(max-width: 768px) 50vw, 25vw"
                  />
                </button>
              </ScaleIn>
            ))}
          </div>
        </div>
      </section>

      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-black/80 p-4"
            onClick={() => setSelectedImage(null)}
          >
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute right-4 top-4 p-2 min-h-[48px] min-w-[48px] flex items-center justify-center text-white"
              aria-label="Close lightbox"
            >
              <X className="h-8 w-8" />
            </button>
            <motion.div
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.9 }}
              className="relative max-h-[80vh] max-w-[90vw]"
              onClick={(e) => e.stopPropagation()}
            >
              <Image
                src={selectedImage.src}
                alt={selectedImage.alt}
                width={1200}
                height={800}
                className="max-h-[80vh] w-auto object-contain"
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
