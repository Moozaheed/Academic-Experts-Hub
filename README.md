# Academic Experts Hub

A professional academic consulting website for international students. Built with Next.js 15 App Router, TypeScript, and Tailwind CSS. Deployed on Vercel.

## Tech Stack

- **Framework**: Next.js 15 App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS + custom utilities
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Analytics**: Vercel Analytics + Speed Insights
- **Deployment**: Vercel (Fluid Compute)

## Project Structure

```
app/                    # Next.js pages (App Router)
├── layout.tsx          # Root layout — metadata, fonts, analytics
├── page.tsx            # Home page
├── globals.css         # Global styles + Tailwind base
├── icon.tsx            # Favicon (32×32, dynamic ImageResponse)
├── apple-icon.tsx      # Apple touch icon (180×180)
├── opengraph-image.tsx # Root OG image (1200×630)
├── robots.ts           # robots.txt
├── sitemap.ts          # sitemap.xml
├── about/page.tsx
├── contact/page.tsx
├── services/page.tsx
├── assignment-help/page.tsx
└── blog/
    ├── page.tsx
    └── [slug]/
        ├── page.tsx
        └── opengraph-image.tsx

components/
├── layout/             # Navbar, Footer, WhatsAppButton
├── home/               # Hero, Services, Stats, BlogPreview, etc.
└── blog/               # BlogCard, CategoryFilter

lib/
├── seo.ts              # SITE_URL, SITE_NAME, all JSON-LD generators
├── utils.ts            # cn(), formatDate(), buildWhatsAppUrl()
├── blog-data.ts        # Static blog post data
└── og-template.tsx     # Shared OG image template

context/                # AI context files (see below)
```

## Getting Started

```bash
npm install
npm run dev         # http://localhost:3000
npm run build
npm run start
```

## Key Design Decisions

**No database or CMS** — all blog posts and service data are TypeScript objects in `lib/`. Add content by editing those files.

**WhatsApp as the only CTA** — every button opens WhatsApp with a pre-filled message. Use `buildWhatsAppUrl(message)` from `lib/utils.ts`.

**Centralized SEO config** — change the domain or WhatsApp number in one place (`lib/seo.ts`). Never hardcode URLs.

**Client components for animations** — almost every component is `"use client"` because of Framer Motion. Next.js still SSRs the initial HTML.

## Deployment

Push to `main` → Vercel auto-deploys. No manual steps needed.

For a new Vercel project:
1. Import from GitHub in Vercel dashboard
2. Add your domain in Settings → Domains
3. Point your domain's nameservers to Vercel (`ns1.vercel-dns.com`, `ns2.vercel-dns.com`)

## Context Files

The `context/` folder contains AI-readable documentation for rebuilding or extending this site:

| File | Contents |
|------|----------|
| `context/architecture.md` | Tech stack, directory structure, key decisions |
| `context/design-system.md` | Colors, fonts, gradients, CSS utilities, component patterns |
| `context/components.md` | Every component with props and purpose |
| `context/seo.md` | Metadata API usage, JSON-LD schemas, sitemap, robots |
| `context/content-strategy.md` | Target audience, keywords, blog structure, CTA strategy |
| `context/patterns.md` | WhatsApp CTA pattern, static data pattern, animation pattern |
| `context/deployment.md` | Vercel config, caching headers, security headers, domain setup |
