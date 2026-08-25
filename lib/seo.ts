import type { BlogPost } from "@/lib/blog-data";

export const SITE_URL = "https://www.academicexpertshub.site";
export const SITE_NAME = "Academic Experts Hub";
export const WHATSAPP_NUMBER = "+966597879394";

export function absoluteUrl(path: string): string {
  return new URL(path, SITE_URL).toString();
}

export function organizationJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": ["ProfessionalService", "EducationalOrganization"],
    "@id": `${SITE_URL}/#organization`,
    name: SITE_NAME,
    url: SITE_URL,
    description:
      "Professional academic consulting for international students — thesis and dissertation writing, research methodology, data analysis, literature review, academic writing, and software engineering project support. Serving students in Australia, USA, Canada, UK, UAE, and worldwide.",
    areaServed: [
      { "@type": "Country", name: "Australia" },
      { "@type": "Country", name: "United States" },
      { "@type": "Country", name: "Canada" },
      { "@type": "Country", name: "United Kingdom" },
      { "@type": "Country", name: "United Arab Emirates" },
    ],
    priceRange: "$$",
    telephone: WHATSAPP_NUMBER,
    contactPoint: {
      "@type": "ContactPoint",
      telephone: WHATSAPP_NUMBER,
      contactType: "customer service",
      availableLanguage: ["English"],
      areaServed: "Worldwide",
    },
    knowsAbout: [
      "Thesis Consultation",
      "Dissertation Mentoring",
      "Research Methodology",
      "Data Analysis",
      "Literature Review",
      "Academic Proofreading",
      "Academic Tutoring",
      "Software Engineering Projects",
      "Business Studies",
      "Research Publication Support",
    ],
    sameAs: [],
  };
}

export function aggregateRatingJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": `${SITE_URL}/#organization`,
    name: SITE_NAME,
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "4.9",
      reviewCount: "500",
      bestRating: "5",
      worstRating: "1",
    },
  };
}

export function webSiteJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${SITE_URL}/#website`,
    url: SITE_URL,
    name: SITE_NAME,
    description: "Expert academic consulting: thesis consultation, dissertation mentoring, academic tutoring, research methodology, and data analysis for international students in Australia, USA, Canada, and worldwide.",
    publisher: { "@id": `${SITE_URL}/#organization` },
  };
}

export function faqJsonLd(faqs: { q: string; a: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.q,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.a,
      },
    })),
  };
}

export function servicesJsonLd(
  services: { id: string; title: string; description: string }[]
) {
  return {
    "@context": "https://schema.org",
    "@type": "ItemList",
    itemListElement: services.map((service, index) => ({
      "@type": "ListItem",
      position: index + 1,
      item: {
        "@type": "Service",
        name: service.title,
        description: service.description,
        url: absoluteUrl(`/services#${service.id}`),
        provider: {
          "@id": `${SITE_URL}/#organization`,
        },
        areaServed: "Worldwide",
      },
    })),
  };
}

export function breadcrumbJsonLd(items: { name: string; path: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: absoluteUrl(item.path),
    })),
  };
}

export function blogPostingJsonLd(post: BlogPost) {
  return {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: post.excerpt,
    datePublished: post.date,
    dateModified: post.date,
    author: {
      "@type": "Person",
      name: post.author,
    },
    publisher: {
      "@id": `${SITE_URL}/#organization`,
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": absoluteUrl(`/blog/${post.slug}`),
    },
    image: absoluteUrl(`/blog/${post.slug}/opengraph-image`),
    articleSection: post.category,
    timeRequired: `PT${post.readTime}M`,
  };
}
