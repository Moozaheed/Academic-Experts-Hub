# Key Patterns

## WhatsApp CTA Pattern

All contact actions open WhatsApp — there is no email form, booking system, or live chat widget.

### Utility function (`lib/utils.ts`)
```ts
export function buildWhatsAppUrl(message?: string): string {
  const base = "https://wa.me/966597879394";
  if (!message) return base;
  return `${base}?text=${encodeURIComponent(message)}`;
}
```

### Usage across the site
Every service and page has its own pre-filled message:
```tsx
// Generic
buildWhatsAppUrl("Hi, I need academic support.")

// Service-specific
buildWhatsAppUrl("Hi, I need help with my thesis. Can we discuss my project?")
buildWhatsAppUrl("Hi, I need assignment help. Can you tell me more about your services?")

// Blog post article footer
buildWhatsAppUrl(`Hi, I read your article on "${post.title}" and I'd like to discuss academic support.`)

// Contact form — builds message from form fields
const message = `Name: ${name}\nEmail: ${email}\nSubject: ${subject}\n\nMessage: ${message}`;
buildWhatsAppUrl(message)
```

The floating WhatsApp button (bottom-right) uses a minimal generic message.

---

## Static Data Pattern

No database. No CMS. No API calls. All content lives in TypeScript files.

### Blog posts (`lib/blog-data.ts`)
```ts
export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  content: string;    // markdown-like text with ## and ### headings
  readTime: number;
  date: string;       // ISO date string
  author: string;
}

export const blogPosts: BlogPost[] = [ ... ];

export function getBlogPost(slug: string): BlogPost | undefined {
  return blogPosts.find((p) => p.slug === slug);
}
```

### Blog content rendering
Blog content is plain text with `## ` and `### ` heading prefixes. The blog post page splits on `\n\n` and renders each block:
```tsx
const contentSections = post.content.trim().split("\n\n").filter(Boolean);

contentSections.map((section, i) => {
  if (section.startsWith("## ")) return <h2>{section.replace("## ", "")}</h2>;
  if (section.startsWith("### ")) return <h3>{section.replace("### ", "")}</h3>;
  return <p>{section}</p>;
})
```

### Services data
Service data is defined inline in `app/services/page.tsx` and `components/home/Services.tsx` as local arrays. To add or remove a service, edit both files.

---

## Centralized SEO Config (`lib/seo.ts`)

Never hardcode site URL, site name, or WhatsApp number anywhere. Import from `lib/seo.ts`:

```ts
export const SITE_URL = "https://www.yourdomain.com";
export const SITE_NAME = "Your Site Name";
export const WHATSAPP_NUMBER = "+1234567890";
```

To change domain: edit one line (`SITE_URL`). Everything else updates automatically — sitemap, canonical URLs, OG images, JSON-LD `@id` references.

---

## JSON-LD Injection Pattern

Inject structured data as `<script>` tags at the top of the page component JSX (before the first `<section>`), not in `<head>`:

```tsx
export default function Page() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaObject) }}
      />
      <section>...</section>
    </>
  );
}
```

Next.js automatically moves these to the correct position in the rendered HTML.

---

## Client Component Pattern

Components that use Framer Motion must be `"use client"`. Next.js still SSRs the initial HTML; Framer Motion hydrates on the client:

```tsx
"use client";
import { motion } from "framer-motion";

export default function AnimatedSection() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      ...
    </motion.div>
  );
}
```

Common animation pattern — staggered children:
```tsx
const container = { hidden: {}, show: { transition: { staggerChildren: 0.1 } } };
const item = { hidden: { opacity: 0, y: 20 }, show: { opacity: 1, y: 0 } };

<motion.div variants={container} initial="hidden" animate="show">
  {items.map(i => <motion.div key={i} variants={item}>{i}</motion.div>)}
</motion.div>
```

---

## Image / Icon Pattern

No `<img>` tags for content. All images are:
- `next/image` for external/uploaded images
- SVG icons from Lucide React
- `ImageResponse` from `next/og` for OG images and favicons

For placeholder avatars (author cards), use colored `div` with initials:
```tsx
<div className="w-12 h-12 rounded-xl bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center">
  <span className="font-bold text-white">SA</span>
</div>
```

---

## Hydration Safety

Browser extensions (password managers, color pickers) inject attributes into `<html>` and `<body>`, causing React hydration warnings. Suppress them:

```tsx
<html lang="en" suppressHydrationWarning>
<body suppressHydrationWarning>
```

---

## Section Color Alternation

Sections alternate between white and light gray to create visual separation without dividers:
```
Hero:         dark gradient (slate-900 → indigo-950)
Section 1:    bg-white
Section 2:    bg-slate-50
Section 3:    bg-white
Final CTA:    dark gradient
```
