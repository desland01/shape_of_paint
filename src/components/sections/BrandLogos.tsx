import Image from "next/image";
import { siteConfig } from "@/config/site";
import { SlideUp, StaggerContainer } from "@/components/ui/motion";
import { cn } from "@/lib/utils";

interface BrandLogosProps {
  variant?: "full" | "compact" | "footer";
  filter?: string[];
  heading?: string;
  subtitle?: string;
}

type Brand = {
  name: string;
  logo: string;
  category: string;
  services: readonly string[];
  description: string;
  logoScale?: number;
};

const getBrands = (filter?: string[]): Brand[] => {
  const allBrands = [...siteConfig.brands] as Brand[];
  if (!filter || filter.length === 0) return allBrands;
  return allBrands.filter((brand) =>
    brand.services.some((service) => filter.includes(service))
  );
};

const LogoImage = ({
  src,
  alt,
  size = "md",
  scale,
  loading,
}: {
  src: string;
  alt: string;
  size?: "sm" | "md" | "lg";
  scale?: number;
  loading?: "lazy" | "eager";
}) => {
  const sizeClasses = {
    sm: "h-6 max-w-[100px] md:h-7 md:max-w-[120px]",
    md: "h-8 max-w-[120px] md:h-10 md:max-w-[140px]",
    lg: "h-10 max-w-[140px] md:h-12 md:max-w-[160px]",
  };

  const scaleStyle = scale && scale !== 1 ? { transform: `scale(${scale})` } : undefined;
  const isSvg = src.endsWith(".svg");

  if (isSvg) {
    return (
      <img
        src={src}
        alt={alt}
        className={cn("w-auto object-contain", sizeClasses[size])}
        style={scaleStyle}
        loading={loading ?? "lazy"}
      />
    );
  }

  return (
    <Image
      src={src}
      alt={alt}
      width={160}
      height={56}
      className={cn("w-auto object-contain", sizeClasses[size])}
      style={scaleStyle}
    />
  );
};

export const BrandLogos = ({
  variant = "full",
  filter,
  heading,
  subtitle,
}: BrandLogosProps) => {
  const brands = getBrands(filter);

  if (brands.length === 0) return null;

  if (variant === "footer") {
    return (
      <div className="flex flex-wrap items-center justify-center gap-6">
        {brands.map((brand) => (
          <div key={brand.name} className="opacity-70 grayscale">
            <LogoImage
              src={brand.logo}
              alt={brand.name}
              size="sm"
              scale={brand.logoScale}
            />
          </div>
        ))}
      </div>
    );
  }

  if (variant === "compact") {
    return (
      <section className="py-12 md:py-16">
        <div className="mx-auto max-w-[1200px] px-6 md:px-8">
          {heading && (
            <SlideUp>
              <h2 className="mb-8 text-center font-cormorant text-2xl font-normal text-foreground md:mb-10">
                {heading}
              </h2>
            </SlideUp>
          )}
          <StaggerContainer
            className="flex flex-wrap items-center justify-center gap-6 md:gap-8"
            staggerChildren={0.08}
          >
            {brands.map((brand) => (
              <SlideUp key={brand.name}>
                <div
                  className={cn(
                    "grayscale brightness-75 opacity-60",
                    "transition-all duration-[400ms] [transition-timing-function:cubic-bezier(0.25,0.46,0.45,0.94)]",
                    "hover:grayscale-0 hover:brightness-100 hover:opacity-100"
                  )}
                >
                  <LogoImage
                    src={brand.logo}
                    alt={brand.name}
                    size="md"
                    scale={brand.logoScale}
                  />
                </div>
              </SlideUp>
            ))}
          </StaggerContainer>
        </div>
      </section>
    );
  }

  // Full variant (default)
  return (
    <section className="bg-warm py-16 md:py-24 lg:py-32">
      <div className="mx-auto max-w-[1200px] px-6 md:px-8">
        <div className="mb-10 text-center md:mb-14">
          <SlideUp>
            <p className="mb-3 text-xs font-medium uppercase tracking-widest text-text-muted">
              Premium Materials
            </p>
          </SlideUp>
          <SlideUp delay={0.1}>
            <h2 className="font-cormorant text-3xl font-normal leading-tight text-foreground md:text-4xl lg:text-5xl">
              {heading ?? "The Brands Behind the Finish"}
            </h2>
          </SlideUp>
          {subtitle && (
            <SlideUp delay={0.15}>
              <p className="mx-auto mt-4 max-w-2xl text-lg text-text-secondary">
                {subtitle}
              </p>
            </SlideUp>
          )}
        </div>

        <StaggerContainer
          className="flex flex-wrap items-center justify-center gap-8 md:gap-12"
          staggerChildren={0.08}
        >
          {brands.map((brand) => (
            <SlideUp key={brand.name}>
              <div
                className={cn(
                  "grayscale brightness-75 opacity-60",
                  "transition-all duration-[400ms] [transition-timing-function:cubic-bezier(0.25,0.46,0.45,0.94)]",
                  "hover:grayscale-0 hover:brightness-100 hover:opacity-100"
                )}
              >
                <LogoImage
                  src={brand.logo}
                  alt={brand.name}
                  size="lg"
                  scale={brand.logoScale}
                />
              </div>
            </SlideUp>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
};
