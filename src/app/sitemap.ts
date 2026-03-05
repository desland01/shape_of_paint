import type { MetadataRoute } from "next";
import {
  CITY_SLUGS,
  INDEXABLE_SERVICE_SLUGS,
  getCityPath,
  getCityServicePath,
} from "@/config/local-seo";
import { siteConfig } from "@/config/site";

const blogSlugs = [
  "cabinet-painting-vs-replacing",
  "kitchen-cabinet-painting-cost-vancouver",
  "spray-vs-brush-cabinet-painting",
  "best-paint-kitchen-cabinets",
  "cabinet-refinishing-vs-refacing",
  "interior-painting-cost-vancouver",
  "interior-paint-colours-vancouver",
  "level-5-finish-vancouver",
  "low-voc-paint-vancouver",
  "prepare-home-interior-painting",
  "exterior-painting-cost-vancouver",
  "best-exterior-paint-vancouver-weather",
  "best-time-exterior-painting-bc",
  "stucco-vs-siding-painting-vancouver",
  "exterior-paint-failure-signs",
] as const;

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = siteConfig.url || "https://example.com";
  const now = new Date();

  const staticPages: MetadataRoute.Sitemap = [
    { url: baseUrl, lastModified: now, changeFrequency: "weekly", priority: 1.0 },
    { url: `${baseUrl}/about`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${baseUrl}/about/reviews`, lastModified: now, changeFrequency: "monthly", priority: 0.5 },
    { url: `${baseUrl}/contact`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${baseUrl}/contact/faq`, lastModified: now, changeFrequency: "monthly", priority: 0.6 },
    { url: `${baseUrl}/portfolio`, lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: `${baseUrl}/locations`, lastModified: now, changeFrequency: "weekly", priority: 0.8 },
    { url: `${baseUrl}/tools/cost-calculator`, lastModified: now, changeFrequency: "weekly", priority: 0.7 },
    { url: `${baseUrl}/blog`, lastModified: now, changeFrequency: "weekly", priority: 0.6 },
    { url: `${baseUrl}/privacy`, lastModified: now, changeFrequency: "yearly", priority: 0.2 },
    { url: `${baseUrl}/terms`, lastModified: now, changeFrequency: "yearly", priority: 0.2 },
  ];

  const cityHubs: MetadataRoute.Sitemap = CITY_SLUGS.map((city) => ({
    url: `${baseUrl}${getCityPath(city)}`,
    lastModified: now,
    changeFrequency: "monthly",
    priority: city === "vancouver" ? 0.95 : 0.75,
  }));

  const citySpokes: MetadataRoute.Sitemap = CITY_SLUGS.flatMap((city) =>
    INDEXABLE_SERVICE_SLUGS.map((service) => ({
      url: `${baseUrl}${getCityServicePath(city, service)}`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: city === "vancouver" ? 0.9 : 0.7,
    }))
  );

  const blogPages: MetadataRoute.Sitemap = blogSlugs.map((slug) => ({
    url: `${baseUrl}/blog/${slug}`,
    lastModified: now,
    changeFrequency: "monthly",
    priority: 0.5,
  }));

  return [...staticPages, ...cityHubs, ...citySpokes, ...blogPages];
}
