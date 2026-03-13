import path from "node:path";
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  turbopack: {
    root: path.join(__dirname),
  },
  experimental: {
    viewTransition: true,
  },
  async redirects() {
    return [
      { source: "/interiors", destination: "/vancouver/interior-painting", permanent: true },
      { source: "/exteriors", destination: "/vancouver/exterior-painting", permanent: true },
      { source: "/cabinets", destination: "/vancouver/cabinet-painting", permanent: true },
      { source: "/custom", destination: "/vancouver/decorative-finishes", permanent: true },
      { source: "/faux-finishes", destination: "/vancouver/decorative-finishes", permanent: true },
      { source: "/staining", destination: "/vancouver/deck-fence-staining", permanent: true },
      { source: "/design", destination: "/vancouver/decorative-finishes", permanent: true },
      { source: "/spray-finishes", destination: "/vancouver/cabinet-painting", permanent: true },
      { source: "/testimonials", destination: "/reviews", permanent: true },
      { source: "/privacy-policy", destination: "/privacy", permanent: true },
      { source: "/hello", destination: "/contact/estimate", permanent: true },
      { source: "/cabinetprojectscope", destination: "/vancouver/cabinet-painting", permanent: true },
    ];
  },
};

export default nextConfig;
