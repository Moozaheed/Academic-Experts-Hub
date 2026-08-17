# Content Strategy

## Site Purpose

An academic consulting service website targeting international university students who need professional help with thesis writing, dissertation, research, and assignments. All services are delivered remotely via WhatsApp. No physical location. No Zoom calls.

## Target Audience

- International students at UK, US, Canadian, Australian, UAE, and Saudi universities
- Postgraduate students (Masters, PhD, MBA) needing thesis/dissertation support
- Undergraduate students needing assignment help
- Students studying in English as a second language
- Students in STEM, business, technology, and humanities

## Primary Services

1. **Assignment Help** — essays, coursework, case studies, reports (highest search volume)
2. **Thesis Writing** — structure, chapter writing, full thesis support
3. **Dissertation Help** — from proposal to final submission
4. **Research Methodology** — quantitative, qualitative, mixed methods
5. **Data Analysis** — SPSS, Python, R, statistical interpretation
6. **Literature Review** — systematic review, thematic synthesis
7. **Software Engineering Projects** — full-stack, ML, data science projects

## Keyword Priority

### Tier 1 — High Volume, Transactional
- `assignment help` (~150k/mo)
- `online assignment help`
- `do my assignment`
- `university assignment help`
- `assignment writing service`

### Tier 2 — High Intent, Academic
- `thesis writing help`
- `dissertation help`
- `PhD dissertation help`
- `MBA dissertation help`
- `research methodology help`

### Tier 3 — Long-tail, Informational (blog targets)
- `how to write a thesis introduction`
- `research methodology guide`
- `quantitative vs qualitative research`
- `SPSS data analysis tutorial`
- `literature review structure`

## Content Pages

### Landing Pages (SEO-driven)
- `/` — Home: thesis/dissertation focus, all services
- `/assignment-help` — Dedicated high-volume landing page
- `/services` — Full services overview
- `/about` — Founder story, credibility building
- `/contact` — WhatsApp-primary contact

### Blog (`/blog`)
- **Category: Thesis Development** — thesis introduction, chapter structure, proposal writing
- **Category: Research Methodology** — method selection, research design, validity
- **Category: Data Analysis** — SPSS, Python, statistical tests, interpretation
- **Category: Dissertation Help** — timeline, chapter guides, literature review
- **Category: Academic Writing** — citations, referencing, academic style

### Blog Post Data Structure
```ts
{
  slug: "url-friendly-slug",
  title: "Full Post Title for H1 and SEO",
  excerpt: "150-160 char summary used for meta description and card preview",
  category: "One of the 5 categories above",
  content: `
    Intro paragraph...

    ## Section Heading

    Body paragraph...

    ### Sub-heading

    More content...
  `,
  readTime: 8,        // minutes, calculated from word count (200 wpm)
  date: "2025-11-15", // ISO date string
  author: "Author Name",
}
```

Blog content uses `## ` and `### ` prefix for headings, double newline for paragraphs. No other markdown is supported by the current renderer.

## CTA Strategy

Every page has multiple WhatsApp CTA points:
1. **Hero CTA** — primary action, immediately visible
2. **Mid-page CTA** — catches users still deciding (CTASection component)
3. **Post-content CTA** — in blog articles, after reading (generates interest)
4. **Sidebar CTA** — on blog post pages (always visible while reading)
5. **Floating button** — always visible, low friction

Pre-filled WhatsApp messages are service-specific to reduce friction.

## Trust Signals

Used throughout the site:
- "500+ Students Helped"
- "30+ Countries"
- "98% Success Rate"
- "3+ Years Experience"
- "Plagiarism-Free"
- "On-Time Delivery"
- "Available Worldwide"
- "24/7 Availability"

## Page Metadata Guidelines

- **Title**: 50-60 chars, keyword-first, no site name (template adds it)
- **Description**: 150-160 chars, includes primary keyword and a clear value proposition
- **Keywords**: Not used by Google but kept for documentation purposes
- **OG title**: Can be slightly longer than title tag, includes site name
- **Canonical**: Always set, relative path

## Blog Writing Guidelines

- Each post targets one informational keyword cluster
- Posts are 800–2000 words (6–12 min read)
- Every post ends with a "Need Expert Support?" CTA block
- Author shown as site founder/consultant
- Categories map to service areas for internal linking opportunities
