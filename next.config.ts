import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      { source: "/interiors", destination: "/services/interior", permanent: true },
      { source: "/exteriors", destination: "/services/exterior", permanent: true },
      { source: "/cabinets", destination: "/services/cabinets", permanent: true },
      { source: "/custom", destination: "/services", permanent: true },
      { source: "/faux-finishes", destination: "/services", permanent: true },
      { source: "/staining", destination: "/services", permanent: true },
      { source: "/design", destination: "/services", permanent: true },
      { source: "/spray-finishes", destination: "/services", permanent: true },
      { source: "/testimonials", destination: "/about/reviews", permanent: true },
      { source: "/faq", destination: "/contact/faq", permanent: true },
      { source: "/privacy-policy", destination: "/privacy", permanent: true },
      { source: "/hello", destination: "/contact/estimate", permanent: true },
      { source: "/cabinetprojectscope", destination: "/services/cabinets", permanent: true },
    ];
  },
};

export default nextConfig;
