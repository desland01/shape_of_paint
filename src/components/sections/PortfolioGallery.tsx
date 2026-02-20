"use client";

import dynamic from "next/dynamic";
import Image from "next/image";
import { useMemo, useState } from "react";
import type { Slide } from "yet-another-react-lightbox";
import { DecorativeIcon } from "@/components/shared/DecorativeIcon";
import { Eyebrow } from "@/components/shared/Eyebrow";
import { ScrollZoom, SlideUp } from "@/components/ui/motion";

interface GalleryImage {
  src: string;
  alt: string;
}

interface PortfolioGalleryProps {
  eyebrow: string;
  heading: string;
  subtitle?: string;
  images: GalleryImage[];
  /** Number of leading images to mark as priority (LCP optimization). */
  priorityCount?: number;
}

const PortfolioLightbox = dynamic(
  () =>
    import("./PortfolioLightbox").then(
      (module) => module.PortfolioLightbox
    ),
  { ssr: false }
);

export function PortfolioGallery({
  eyebrow,
  heading,
  subtitle,
  images,
  priorityCount = 0,
}: PortfolioGalleryProps) {
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  const slides = useMemo<Slide[]>(
    () => images.map((image) => ({ src: image.src, alt: image.alt })),
    [images]
  );

  const galleryColumns = useMemo(() => {
    const columns: Array<Array<{ image: GalleryImage; index: number }>> = [];

    for (let i = 0; i < images.length; i += 2) {
      const columnItems = images.slice(i, i + 2).map((image, offset) => ({
        image,
        index: i + offset,
      }));

      if (columnItems.length > 0) {
        columns.push(columnItems);
      }
    }

    return columns;
  }, [images]);

  const openLightboxAt = (index: number) => {
    setCurrentIndex(index);
    setIsLightboxOpen(true);
  };

  return (
    <>
      <section className="bg-background pt-16 md:pt-24 lg:pt-32">
        <div className="mx-auto mb-12 max-w-[1440px] px-4 text-center md:px-8">
          <SlideUp>
            <DecorativeIcon variant="leaf" className="mb-6" />
          </SlideUp>
          <SlideUp delay={0.1}>
            <Eyebrow className="mb-4">{eyebrow}</Eyebrow>
          </SlideUp>
          <SlideUp delay={0.15}>
            <h2 className="mb-4 text-5xl font-normal leading-[1.2] md:text-6xl lg:text-[72px]">
              {heading}
            </h2>
          </SlideUp>
          {subtitle && (
            <SlideUp delay={0.2}>
              <p className="mx-auto mb-0 max-w-[600px] text-xl md:text-2xl font-normal leading-relaxed text-text-secondary">
                {subtitle}
              </p>
            </SlideUp>
          )}
        </div>

        {images.length <= 2 ? (
          <div className="mx-auto grid max-w-[1000px] grid-cols-2 gap-5 px-0 md:px-0">
            {images.map((image, index) => (
              <ScrollZoom
                key={`${image.src}-${index}`}
                className="aspect-[4/5] w-full transition-shadow duration-700 hover:shadow-[0_50px_80px_-50px_rgba(222,150,125,1)]"
              >
                <button
                  type="button"
                  onClick={() => openLightboxAt(index)}
                  className="group relative h-full w-full cursor-pointer"
                  aria-label={`View ${image.alt}`}
                >
                  <Image
                    src={image.src}
                    alt={image.alt}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                    sizes="(max-width: 768px) 50vw, 400px"
                    {...(index < priorityCount
                      ? { priority: true, fetchPriority: "high" as const }
                      : {})}
                  />
                </button>
              </ScrollZoom>
            ))}
          </div>
        ) : (
          <div className="grid grid-cols-2 gap-5 px-0 md:grid-cols-4 md:px-0">
            {galleryColumns.map((column, colIndex) => {
              const isOdd = colIndex % 2 === 1;
              const aspects = isOdd
                ? ["aspect-square", "aspect-[4/5]"]
                : ["aspect-[4/5]", "aspect-square"];

              return (
                <div
                  key={`col-${colIndex}`}
                  className={`flex flex-col gap-5${isOdd ? " md:mt-[50px]" : ""}`}
                >
                  {column.map(({ image, index }, itemIndex) => (
                    <ScrollZoom
                      key={`${image.src}-${index}`}
                      className={`${aspects[itemIndex] ?? "aspect-square"} w-full transition-shadow duration-700 hover:shadow-[0_50px_80px_-50px_rgba(222,150,125,1)]`}
                    >
                      <button
                        type="button"
                        onClick={() => openLightboxAt(index)}
                        className="group relative h-full w-full cursor-pointer"
                        aria-label={`View ${image.alt}`}
                      >
                        <Image
                          src={image.src}
                          alt={image.alt}
                          fill
                          className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                          sizes="(max-width: 768px) 50vw, 25vw"
                          {...(index < priorityCount
                            ? { priority: true, fetchPriority: "high" as const }
                            : {})}
                        />
                      </button>
                    </ScrollZoom>
                  ))}
                </div>
              );
            })}
          </div>
        )}
      </section>

      <PortfolioLightbox
        open={isLightboxOpen}
        index={currentIndex}
        slides={slides}
        onClose={() => setIsLightboxOpen(false)}
        onView={setCurrentIndex}
      />
    </>
  );
}
