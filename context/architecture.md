# Project Architecture

## Tech Stack

| Layer | Technology | Version |
|-------|-----------|---------|
| Framework | Next.js App Router | ^15.x |
| Language | TypeScript | ^5.x |
| Styling | Tailwind CSS | ^3.x |
| Animations | Framer Motion | ^11.x |
| Icons | Lucide React | ^0.460.x |
| UI Primitives | Radix UI | various |
| Analytics | @vercel/analytics + @vercel/speed-insights | latest |
| Deployment | Vercel (Fluid Compute) | - |
| Node.js | 24.x (Vercel default) | - |

## Directory Structure

```
/
├── app/                          # Next.js App Router pages
│   ├── layout.tsx                # Root layout — metadata, fonts, analytics
│   ├── page.tsx                  # Home page
│   ├── globals.css               # Global styles, Tailwind base
│   ├── icon.tsx                  # Favicon (32×32) — dynamic ImageResponse
│   ├── apple-icon.tsx            # Apple touch icon (180×180)
│   ├── opengraph-image.tsx       # Root OG image (1200×630)
│   ├── twitter-image.tsx         # Root Twitter card image
│   ├── robots.ts                 # robots.txt generator
│   ├── sitemap.ts                # sitemap.xml generator
│   ├── about/page.tsx
│   ├── contact/page.tsx
│   ├── services/page.tsx
│   ├── assignment-help/page.tsx  # High-volume keyword landing page
│   └── blog/
│       ├── page.tsx              # Blog listing (client component — filter UI)
│       ├── layout.tsx            # Blog layout wrapper
│       └── [slug]/
│           ├── page.tsx          # Blog post page
│           └── opengraph-image.tsx  # Per-post dynamic OG image
│
├── components/
│   ├── layout/
│   │   ├── Navbar.tsx            # Sticky nav, mobile menu
│   │   ├── Footer.tsx            # 4-column footer, service links
│   │   └── WhatsAppButton.tsx    # Fixed floating WhatsApp CTA
│   ├── home/
│   │   ├── Hero.tsx              # Full-height hero with animated H1
│   │   ├── TrustBadges.tsx       # Horizontal scrolling trust strip
│   │   ├── Services.tsx          # Service cards grid
│   │   ├── Stats.tsx             # Animated counter stats
│   │   ├── Testimonials.tsx      # Testimonial cards
│   │   ├── BlogPreview.tsx       # Latest 3 blog posts preview
│   │   ├── CTASection.tsx        # Mid-page CTA banner
│   │   ├── ContactForm.tsx       # WhatsApp-linked contact form
│   │   └── Founder.tsx           # Founder/about section
│   └── blog/
│       ├── BlogCard.tsx          # Blog post card component
│       └── CategoryFilter.tsx    # Client-side category filter
│
├── lib/
│   ├── seo.ts                    # SITE_URL, SITE_NAME, all JSON-LD generators
│   ├── utils.ts                  # cn(), formatDate(), buildWhatsAppUrl()
│   ├── blog-data.ts              # Static blog post data (TypeScript)
│   └── og-template.tsx           # Shared OG image template component
│
├── next.config.ts                # Cache headers, CSP, image config
├── tailwind.config.ts            # Custom colors, fonts, animations
└── context/                      # AI context files (this folder)
```

## Key Architectural Decisions

### All Data is Static
No database, no CMS, no external API calls. All blog posts and service data live in TypeScript files (`lib/blog-data.ts`, inline in page files). This means:
- Zero cold-start latency for data
- 100% statically generated pages
- No env vars needed for content

### WhatsApp as Primary CTA
There is no traditional contact form submission. All CTAs link to `https://wa.me/{number}?text={encoded_message}`. The `buildWhatsAppUrl()` utility in `lib/utils.ts` handles this. Every service has its own pre-filled WhatsApp message.

### Client Components for Animations
Almost all components use `"use client"` because they use framer-motion for animations. This is intentional — Next.js still SSRs the initial HTML, framer-motion hydrates on the client. The trade-off (slightly larger JS bundle) is acceptable for the visual quality.

### Centralized SEO Config
All site-wide SEO constants and JSON-LD schema generators live in `lib/seo.ts`. Never hardcode URLs — always use `SITE_URL` from there.
