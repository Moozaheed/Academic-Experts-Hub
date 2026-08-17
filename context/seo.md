# SEO Implementation

## Metadata Architecture

### Title System (Next.js Metadata API)
The root layout defines a title template. Individual pages provide only the `%s` portion.

```ts
// app/layout.tsx — root
export const metadata: Metadata = {
  title: {
    default: "Site Name | Tagline",     // used on pages with no title
    template: "%s | Site Name",          // wraps every page title
  },
};

// Any page
export const metadata: Metadata = {
  title: "Page Title",  // renders as "Page Title | Site Name"
};

// Blog posts — bypass template entirely
export const metadata: Metadata = {
  title: { absolute: "Post Title | Blog Name" },
};
```

### Canonical URLs
Every page must declare its own canonical:
```ts
alternates: { canonical: "/about" }  // relative, metadataBase resolves it
```
`metadataBase` is set once in the root layout:
```ts
metadataBase: new URL("https://www.yourdomain.com")
```

### Open Graph + Twitter Images
```ts
openGraph: {
  images: [{ url: "/opengraph-image", width: 1200, height: 630, alt: "..." }]
}
twitter: {
  card: "summary_large_image",
  images: ["/opengraph-image"]
}
```
For blog posts, use per-post OG images:
```ts
images: [{ url: `/blog/${post.slug}/opengraph-image`, width: 1200, height: 630 }]
```

---

## Dynamic OG Images (next/og)

Each route that needs a unique OG image gets an `opengraph-image.tsx` file using Next.js `ImageResponse`.

```
app/opengraph-image.tsx          → /opengraph-image (root OG)
app/blog/[slug]/opengraph-image.tsx  → per-post OG
```

The shared template lives in `lib/og-template.tsx` and is imported by each image route. Pattern:

```tsx
// app/opengraph-image.tsx
import { ImageResponse } from "next/og";
export const runtime = "edge";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function Image() {
  return new ImageResponse(<OgTemplate title="..." />, { ...size });
}
```

---

## Favicon System

| File | Size | Purpose |
|------|------|---------|
| `app/icon.tsx` | 32×32 | Browser tab favicon |
| `app/apple-icon.tsx` | 180×180 | iOS home screen |

Both use `ImageResponse` with a monogram ("AH") on the brand gradient (`#6366f1 → #9333ea`).

---

## Structured Data (JSON-LD)

All JSON-LD generators live in `lib/seo.ts`. Inject with `<script type="application/ld+json">` inside the page component (not in `<head>`; Next.js handles placement).

### Schemas in use

| Schema Type | Where Used | Generator |
|-------------|-----------|-----------|
| `ProfessionalService` | Root layout (global) | `organizationJsonLd()` |
| `FAQPage` | Assignment-help, Contact, Services | `faqJsonLd(faqs)` |
| `ItemList` of `Service` | Services page | `servicesJsonLd(services)` |
| `BreadcrumbList` | Blog posts, Assignment-help | `breadcrumbJsonLd(items)` |
| `BlogPosting` | Blog post pages | `blogPostingJsonLd(post)` |

### Injection pattern
```tsx
// In page component return, before sections
<script
  type="application/ld+json"
  dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaObject) }}
/>
```

---

## Sitemap

`app/sitemap.ts` exports a function returning all URLs with priorities:

| Page | Priority | Change Freq |
|------|----------|-------------|
| `/` | 1.0 | weekly |
| `/assignment-help` | 0.95 | weekly |
| `/services` | 0.9 | monthly |
| `/about` | 0.8 | monthly |
| `/contact` | 0.8 | monthly |
| `/blog` | 0.85 | daily |
| `/blog/[slug]` | 0.75 | monthly |

---

## Robots.txt

`app/robots.ts` generates robots.txt:
```ts
export default function robots(): MetadataRoute.Robots {
  return {
    rules: { userAgent: "*", allow: "/" },
    sitemap: `${SITE_URL}/sitemap.xml`,
  };
}
```

---

## Keyword Strategy

Primary cluster (transactional, 150k+/mo combined):
- `assignment help`, `online assignment help`, `do my assignment`, `university assignment help`

Secondary clusters:
- `thesis writing help`, `dissertation help`, `PhD dissertation help`
- `research methodology help`, `data analysis help`
- `essay writing help`, `coursework help`, `literature review writing service`

Landing pages mapped to clusters:
- `/assignment-help` → assignment help cluster (dedicated landing page)
- `/` → thesis/dissertation cluster (hero H1 focus)
- `/services` → all services overview
- `/blog/*` → long-tail informational keywords

---

## Google Search Console

Verify ownership by adding `google-site-verification` meta tag in layout metadata:
```ts
verification: {
  google: "YOUR_VERIFICATION_CODE_HERE",
}
```

---

## Analytics

Add to root layout body:
```tsx
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";

// At end of <body>:
<Analytics />
<SpeedInsights />
```

Install packages:
```bash
npm install @vercel/analytics @vercel/speed-insights
```
