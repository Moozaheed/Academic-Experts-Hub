# Component Catalog

All components use `"use client"` unless they are purely static layout (Footer, some cards).  
Most animated components rely on Framer Motion `motion.*` elements.

## Layout Components (`components/layout/`)

### Navbar (`Navbar.tsx`)
- Sticky, transparent → solid on scroll
- Mobile hamburger menu with slide-in drawer
- Links: Home, Services, About, Blog, Contact
- "Get Help" CTA button (WhatsApp link)

### Footer (`Footer.tsx`)
- 4-column grid: Brand/tagline | Services | Pages | Contact
- Service links include: Assignment Help, Thesis Writing, Dissertation Help, Research Methodology, Data Analysis, Literature Review
- Bottom bar: copyright + "Available Worldwide"
- All WhatsApp links via `buildWhatsAppUrl()`

### WhatsAppButton (`WhatsAppButton.tsx`)
- Fixed floating button, bottom-right corner
- Appears after user scrolls past hero
- Green circle with MessageCircle icon
- Links to WhatsApp with generic message

---

## Home Page Components (`components/home/`)

### Hero (`Hero.tsx`)
- Full-height section (`min-h-screen`)
- Background: `mesh-bg` + radial gradient overlays
- Animated H1 (Framer Motion fade+slide)
- Two CTAs: WhatsApp (green) + "View Services" (ghost)
- Trust indicators below CTAs (stats: 500+ students, 30+ countries, etc.)

### TrustBadges (`TrustBadges.tsx`)
- Horizontal scrolling strip using `animate-scroll-left`
- Duplicated list for seamless loop
- Badges: platform names, certifications, trust signals

### Services (`Services.tsx`)
- Grid of service cards: 2 cols mobile, 3 cols desktop
- Each card: icon, title, description, tag list, WhatsApp CTA
- Service IDs match the anchor links on `/services` page
- Cards: Assignment Help, Thesis Writing, Dissertation Help, Research Methodology, Data Analysis, Literature Review, Software Engineering

### Stats (`Stats.tsx`)
- 4-column stat counter grid
- Numbers animate on scroll into view (Framer Motion + counter hook)
- Stats: 500+, 30+, 98%, 3+

### Testimonials (`Testimonials.tsx`)
- ⚠ Currently removed from home page (testimonials section hidden)
- Component exists but not rendered in `app/page.tsx`

### BlogPreview (`BlogPreview.tsx`)
- Shows latest 3 blog posts
- Card layout: category badge, title, excerpt, read time
- Links to `/blog/[slug]`

### CTASection (`CTASection.tsx`)
- Mid-page banner with gradient background
- Headline + WhatsApp CTA button
- Used between sections to break up content

### ContactForm (`ContactForm.tsx`)
- WhatsApp-linked form — does NOT submit to a backend
- Fields: name, email, subject, message
- On submit: opens WhatsApp with pre-filled message containing form data
- `"use client"` for state management

### Founder (`Founder.tsx`)
- Founder/about card with avatar, name, credentials
- Brief bio and a "Book Consultation" WhatsApp CTA

---

## Blog Components (`components/blog/`)

### BlogCard (`BlogCard.tsx`)
Props: `post: BlogPost`  
- Card with category badge, title, excerpt, date, read time
- Links to `/blog/[slug]`

### CategoryFilter (`CategoryFilter.tsx`)
`"use client"` — interactive  
- Pill-style filter buttons for blog categories
- On click, filters the visible blog cards
- Receives `posts` and renders `BlogCard` per match
- Categories derived from `blogPosts` data

---

## Home Page Assembly (`app/page.tsx`)

```tsx
<Hero />
<TrustBadges />
<Services />
<Stats />
<CTASection />
<BlogPreview />
<Founder />
```

(Testimonials excluded)

---

## Page Structure Pattern

Every top-level page follows this structure:
```tsx
export const metadata: Metadata = { ... }  // server-side

export default function PageName() {
  return (
    <>
      {/* JSON-LD scripts first */}
      <script type="application/ld+json" ... />

      {/* Hero section — dark gradient, pt-32 for navbar clearance */}
      <section className="relative pt-32 pb-20 px-4 bg-gradient-to-br from-slate-900 ...">

      {/* Content sections — alternating white / slate-50 */}
      <section className="py-20 bg-white">
      <section className="py-20 bg-slate-50">

      {/* Final CTA — dark gradient */}
      <section className="py-20 bg-gradient-to-br from-slate-900 ...">
    </>
  )
}
```
