# Deployment

## Platform: Vercel (Fluid Compute)

Deployed on Vercel using Fluid Compute (the default). No special runtime configuration needed for Next.js App Router.

**Do NOT set** `output: "standalone"` in `next.config.ts` — it breaks Vercel deployments. Vercel handles its own build output format.

---

## GitHub → Vercel Auto-Deploy

1. Push to GitHub `main` branch
2. Vercel detects the push via webhook
3. Vercel builds and deploys automatically
4. No manual `vercel --prod` needed

Setup: In Vercel Dashboard → Project → Settings → Git → connect to GitHub repository.

---

## `next.config.ts`

Key configuration:

```ts
const nextConfig: NextConfig = {
  compress: true,
  images: {
    formats: ["image/avif", "image/webp"],
    minimumCacheTTL: 31536000,
  },
  experimental: {
    optimizePackageImports: ["lucide-react", "framer-motion"],
  },
  async headers() { ... }
};
```

---

## Caching Headers

Set in `next.config.ts` `headers()`:

| Route | Cache-Control | Notes |
|-------|--------------|-------|
| `/_next/static/:path*` | `public, max-age=31536000, immutable` | JS/CSS bundles, 1yr immutable |
| `/fonts/:path*` | `public, max-age=31536000, immutable` | Self-hosted fonts |
| `/(sitemap.xml\|robots.txt)` | `public, max-age=86400, stale-while-revalidate=3600` | Crawlers refresh daily |
| `(.*)` (all pages) | `public, s-maxage=60, stale-while-revalidate=86400` | CDN fresh 60s, stale 1 day |

---

## Security Headers

Applied on all `(.*)` routes alongside cache headers:

| Header | Value |
|--------|-------|
| `X-Content-Type-Options` | `nosniff` |
| `X-Frame-Options` | `DENY` |
| `X-XSS-Protection` | `1; mode=block` |
| `Referrer-Policy` | `strict-origin-when-cross-origin` |
| `Permissions-Policy` | Blocks camera, microphone, geolocation, payment, USB |
| `Content-Security-Policy` | (see below) |

### CSP
```
default-src 'self'
script-src 'self' 'unsafe-inline' 'unsafe-eval' https://va.vercel-scripts.com https://cdn.vercel-insights.com
style-src 'self' 'unsafe-inline' https://fonts.googleapis.com
font-src 'self' https://fonts.gstatic.com
img-src 'self' data: blob: https:
connect-src 'self' https://vitals.vercel-insights.com https://va.vercel-scripts.com
frame-ancestors 'none'
base-uri 'self'
form-action 'self' https://wa.me
```

`unsafe-inline` and `unsafe-eval` are required for Next.js hydration scripts and Framer Motion.

---

## Custom Domain

1. Buy domain on Namecheap (or any registrar)
2. In Namecheap: set Nameservers to Vercel's:
   - `ns1.vercel-dns.com`
   - `ns2.vercel-dns.com`
3. In Vercel Dashboard: Project → Settings → Domains → add your domain
4. Vercel automatically provisions SSL via Let's Encrypt

Primary domain: `www.yourdomain.com` (redirect `yourdomain.com` → `www.yourdomain.com` in Vercel)

---

## Analytics

```tsx
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";
```

Placed at the end of `<body>` in `app/layout.tsx`. Enabled automatically on Vercel after adding the imports and installing the packages.

---

## Build Requirements

- Node.js 24.x (Vercel default)
- `npm install` before build
- No environment variables required (all data is static)
- Build command: `next build` (Vercel default)
- Output directory: `.next` (Vercel default)

---

## Key Files to Never Commit

- `.env` (none needed, but if added)
- `academic-experts-hub-*.json` — Google service account credentials
- Any API keys

These are in `.gitignore`.
