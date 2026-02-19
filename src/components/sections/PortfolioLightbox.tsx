"use client";

import Lightbox, { type Slide } from "yet-another-react-lightbox";

interface PortfolioLightboxProps {
  open: boolean;
  index: number;
  slides: Slide[];
  onClose: () => void;
  onView: (index: number) => void;
}

export function PortfolioLightbox({
  open,
  index,
  slides,
  onClose,
  onView,
}: PortfolioLightboxProps) {
  return (
    <Lightbox
      open={open}
      close={onClose}
      index={index}
      slides={slides}
      on={{
        view: ({ index: currentIndex }) => onView(currentIndex),
      }}
      carousel={{
        finite: slides.length <= 1,
        preload: 2,
        padding: "16px",
        spacing: "12px",
        imageFit: "contain",
      }}
      controller={{
        aria: true,
        closeOnBackdropClick: true,
        closeOnPullDown: true,
      }}
      animation={{
        fade: 250,
        swipe: 500,
      }}
      styles={{
        container: {
          backgroundColor: "rgba(0, 0, 0, 0.88)",
        },
      }}
    />
  );
}
