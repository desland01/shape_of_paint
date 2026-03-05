import {
  CITY_CONTENT,
  SERVICE_CONTENT,
  SERVICE_SLUGS,
  getCityServicePath,
  type ServiceSlug,
} from "@/config/local-seo";
import { siteConfig } from "@/config/site";

export function generateLocalBusinessSchema() {
  const reviewCount = String(siteConfig.googleBusiness.reviewCount);
  const ratingValue = String(siteConfig.googleBusiness.rating);

  return {
    "@context": "https://schema.org",
    "@type": "HousePainter",
    "@id": `${siteConfig.url}/#business`,
    name: siteConfig.name,
    description: siteConfig.description,
    url: siteConfig.url,
    telephone: "+1-604-353-7378",
    email: siteConfig.email,
    priceRange: "$$$",
    address: {
      "@type": "PostalAddress",
      streetAddress: siteConfig.address.street,
      addressLocality: siteConfig.address.city,
      addressRegion: siteConfig.address.state,
      postalCode: siteConfig.address.zip,
      addressCountry: "CA",
    },
    areaServed: Object.values(CITY_CONTENT).map((city) => ({
      "@type": "City",
      name: city.name,
    })),
    sameAs: [
      siteConfig.socialLinks.instagram,
      siteConfig.socialLinks.facebook,
      siteConfig.socialLinks.youtube,
      siteConfig.socialLinks.google,
    ].filter(Boolean),
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue,
      bestRating: "5",
      ratingCount: reviewCount,
      reviewCount,
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: siteConfig.googleBusiness.coordinates.latitude,
      longitude: siteConfig.googleBusiness.coordinates.longitude,
    },
    hasMap: siteConfig.socialLinks.google,
    identifier: [
      {
        "@type": "PropertyValue",
        name: "Google Place ID",
        value: siteConfig.googleBusiness.placeId,
      },
      {
        "@type": "PropertyValue",
        name: "Google CID",
        value: siteConfig.googleBusiness.cid,
      },
      {
        "@type": "PropertyValue",
        name: "Google Business Profile ID",
        value: siteConfig.googleBusiness.businessProfileId,
      },
      {
        "@type": "PropertyValue",
        name: "Knowledge Graph ID",
        value: siteConfig.googleBusiness.kgId,
      },
    ],
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        opens: "07:00",
        closes: "18:00",
      },
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: "Saturday",
        opens: "08:00",
        closes: "16:00",
      },
    ],
    image: `${siteConfig.url}/images/logo-icon.png`,
    knowsAbout: [
      "Benjamin Moore paints",
      "C2 Paint artisan colours",
      "Meoded decorative plasters",
      "Metropolis Italian decorative paints",
      "Novacolor decorative finishes",
      "Renner wood coatings",
      "ALCEA industrial coatings",
      "Livos plant-based wood oils",
      "Italian plaster application",
      "HVLP spray finishing",
      "Decorative wall finishes",
      "Cabinet refinishing",
    ],
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Painting Services",
      itemListElement: SERVICE_SLUGS.map((serviceSlug) => ({
        "@type": "OfferCatalog",
        name: SERVICE_CONTENT[serviceSlug].name,
        itemListElement: [
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: SERVICE_CONTENT[serviceSlug].name,
              url: `${siteConfig.url}${getCityServicePath("vancouver", serviceSlug)}`,
            },
          },
        ],
      })),
    },
  };
}

export function generateServiceSchema(service: {
  name: string;
  description: string;
  url: string;
  areaServed?: string | string[];
  brand?: readonly string[];
}) {
  const areaServed = service.areaServed
    ? Array.isArray(service.areaServed)
      ? service.areaServed.map((city) => ({ "@type": "City" as const, name: city }))
      : { "@type": "City" as const, name: service.areaServed }
    : { "@type": "City" as const, name: siteConfig.serviceArea };

  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name: service.name,
    description: service.description,
    url: service.url,
    provider: {
      "@type": "LocalBusiness",
      name: siteConfig.name,
      url: siteConfig.url,
    },
    areaServed,
    ...(service.brand && service.brand.length > 0 && {
      brand: service.brand.map((name) => ({
        "@type": "Brand" as const,
        name,
      })),
    }),
  };
}

export function generateLocationHubSchema(location: {
  city: string;
  url: string;
  serviceSlugs: ServiceSlug[];
}) {
  return {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: `House Painters in ${location.city}`,
    url: location.url,
    about: {
      "@type": "LocalBusiness",
      name: siteConfig.name,
      areaServed: {
        "@type": "City",
        name: location.city,
      },
    },
    mainEntity: {
      "@type": "ItemList",
      itemListElement: location.serviceSlugs.map((serviceSlug, index) => ({
        "@type": "ListItem",
        position: index + 1,
        name: SERVICE_CONTENT[serviceSlug].name,
        url: `${location.url}/${serviceSlug}`,
      })),
    },
  };
}

export function generateLocationServiceSchema(service: {
  city: string;
  serviceSlug: ServiceSlug;
  description: string;
  url: string;
}) {
  return generateServiceSchema({
    name: `${SERVICE_CONTENT[service.serviceSlug].name} in ${service.city}`,
    description: service.description,
    url: service.url,
    areaServed: service.city,
    brand: SERVICE_CONTENT[service.serviceSlug].brands,
  });
}

export function generateFAQSchema(items: { question: string; answer: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };
}

export function generateArticleSchema(article: {
  title: string;
  description: string;
  url: string;
  datePublished: string;
  dateModified: string;
  image?: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: article.title,
    description: article.description,
    url: article.url,
    datePublished: article.datePublished,
    dateModified: article.dateModified,
    ...(article.image && { image: article.image }),
    author: {
      "@type": "Organization",
      name: siteConfig.name,
      url: siteConfig.url,
    },
    publisher: {
      "@type": "Organization",
      name: siteConfig.name,
      url: siteConfig.url,
    },
  };
}

export function generateBreadcrumbSchema(
  items: { name: string; url: string }[]
) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: item.name,
      item: item.url,
    })),
  };
}

export function generateHowToSchema(howTo: {
  name: string;
  description: string;
  steps: { name: string; text: string; image?: string }[];
  url: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "HowTo",
    name: howTo.name,
    description: howTo.description,
    step: howTo.steps.map((step) => ({
      "@type": "HowToStep",
      name: step.name,
      text: step.text,
      ...(step.image && { image: step.image }),
    })),
    url: howTo.url,
  };
}
