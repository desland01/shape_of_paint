"use client";

import { SlideUp } from "@/components/ui/motion";

const COLOR_PALETTES = [
  {
    name: "West Coast Calm",
    colors: ["#2E5B6E", "#6B9BAD", "#B8D4DA", "#E8E4DE", "#FFFFFF"],
    rooms: "Living rooms, bedrooms",
  },
  {
    name: "Modern Neutral",
    colors: ["#3D3D3D", "#7A7A6E", "#B8B2A6", "#E3DDD4", "#F5F3EF"],
    rooms: "Open plans, kitchens",
  },
  {
    name: "Heritage Classic",
    colors: ["#2B3A42", "#5C6E5C", "#8FA38A", "#D4C9B8", "#FAF8F5"],
    rooms: "Dining rooms, offices",
  },
  {
    name: "Bold & Refined",
    colors: ["#1C2B3A", "#2A4D5E", "#C9A227", "#E8E0D0", "#FDFCFA"],
    rooms: "Accent walls, cabinets",
  },
];

const BULLET_ITEMS = [
  "12 designer-curated palettes for Vancouver homes",
  "Interior & exterior finish recommendations",
  "Room-by-room colour pairing suggestions",
  "Tips for natural light & Pacific Northwest conditions",
];

const CheckIcon = () => (
  <span
    className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full"
    style={{ backgroundColor: "rgba(201, 194, 182, 0.2)" }}
    aria-hidden="true"
  >
    <svg
      width="14"
      height="14"
      viewBox="0 0 14 14"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M3 7.5L5.5 10L11 4"
        stroke="#C9C2B6"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  </span>
);

export function ColorGuide() {
  return (
    <section
      className="relative overflow-hidden py-16 md:py-24 lg:py-32"
      style={{ backgroundColor: "#202A44" }}
      aria-labelledby="color-guide-heading"
    >
      {/* Watermark */}
      <div
        className="pointer-events-none absolute inset-0 flex select-none items-center justify-center"
        aria-hidden="true"
      >
        <span
          className="font-heading whitespace-nowrap text-[16vw] font-semibold leading-none tracking-tight"
          style={{ color: "rgba(255, 255, 255, 0.025)" }}
        >
          Colour
        </span>
      </div>

      <div className="relative mx-auto grid max-w-[1440px] grid-cols-1 items-center gap-12 px-6 md:gap-16 md:px-8 lg:grid-cols-2">
        {/* Left column: text + form */}
        <div>
          <SlideUp>
            <p
              className="text-xs font-semibold uppercase tracking-[0.14em]"
              style={{ color: "#C9C2B6" }}
            >
              Free Download
            </p>
          </SlideUp>

          <SlideUp delay={0.05}>
            <h2
              id="color-guide-heading"
              className="font-heading mt-5 text-4xl font-normal leading-[1.08] text-white md:text-5xl lg:text-6xl"
            >
              Vancouver Homeowner&apos;s Colour Guide
            </h2>
          </SlideUp>

          <SlideUp delay={0.1}>
            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-white/70">
              Not sure where to start? Our curated guide features trending
              palettes for Vancouver homes, tips on choosing the right finish,
              and room-by-room inspiration from our portfolio.
            </p>
          </SlideUp>

          <SlideUp delay={0.15}>
            <ul className="mt-8 space-y-3" role="list">
              {BULLET_ITEMS.map((item) => (
                <li key={item} className="flex items-start gap-3 text-white/70">
                  <CheckIcon />
                  <span className="text-base leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>
          </SlideUp>

          <SlideUp delay={0.2}>
            <form
              className="mt-10 flex max-w-lg flex-col gap-3 sm:flex-row"
              onSubmit={(e) => e.preventDefault()}
              aria-label="Download colour guide"
            >
              <label htmlFor="color-guide-email" className="sr-only">
                Email address
              </label>
              <input
                id="color-guide-email"
                type="email"
                placeholder="Enter your email"
                className="flex-1 rounded-[9px] bg-white/10 px-5 py-4 text-base text-white transition-colors placeholder:text-white/40 focus:bg-white/15 focus:outline-none"
                autoComplete="email"
              />
              <button
                type="submit"
                className="whitespace-nowrap rounded-[9px] px-7 py-4 text-sm font-semibold uppercase tracking-[0.12em] transition-colors"
                style={{
                  backgroundColor: "#C9C2B6",
                  color: "#202A44",
                }}
                onMouseEnter={(e) =>
                  (e.currentTarget.style.backgroundColor = "#D2956F")
                }
                onMouseLeave={(e) =>
                  (e.currentTarget.style.backgroundColor = "#C9C2B6")
                }
              >
                Get the Guide
              </button>
            </form>
            <p className="mt-3 text-sm text-white/30">
              Free -- no spam, unsubscribe anytime.
            </p>
          </SlideUp>
        </div>

        {/* Right column: palette cards */}
        <div className="space-y-4">
          {COLOR_PALETTES.map((palette, index) => (
            <SlideUp key={palette.name} delay={0.1 * index}>
              <div className="rounded-lg bg-white/5 p-6 transition-colors hover:bg-white/[0.07]">
                <div className="mb-3 flex items-center justify-between">
                  <h3 className="font-heading text-xl font-semibold text-white">
                    {palette.name}
                  </h3>
                  <span className="text-sm text-white/40">{palette.rooms}</span>
                </div>
                <div className="flex h-14 gap-1.5 overflow-hidden rounded">
                  {palette.colors.map((color) => (
                    <div
                      key={color}
                      className="flex-1 transition-transform hover:scale-y-110"
                      style={{ backgroundColor: color }}
                      role="img"
                      aria-label={`Colour swatch ${color}`}
                    />
                  ))}
                </div>
              </div>
            </SlideUp>
          ))}
        </div>
      </div>
    </section>
  );
}
