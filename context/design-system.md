# Design System

## Brand Colors

| Token | Hex | Usage |
|-------|-----|-------|
| Indigo / Accent | `#6366F1` | Primary CTAs, gradient start, links |
| Purple / Accent | `#8B5CF6` | Gradient end, secondary accent |
| Purple dark | `#9333ea` | Favicon gradient end |
| Navy 900 | `#0F172A` | Page backgrounds, dark sections |
| Navy 800 | `#1E293B` | Dark card backgrounds |
| Slate 900 | `#0F172A` | Body text on light backgrounds |
| White | `#ffffff` | Content section backgrounds |

Tailwind custom colors (in `tailwind.config.ts`):
```ts
colors: {
  navy: { 900: "#0F172A", 800: "#1E293B", 700: "#334155", 600: "#475569" },
  accent: { DEFAULT: "#6366F1", dark: "#4F46E5", light: "#818CF8", purple: "#8B5CF6" },
}
```

## Typography

| Role | Font | Weights |
|------|------|---------|
| Body text | Inter (Google Fonts) | 300–900 |
| Headings (h1–h6) | Outfit (Google Fonts) | 300–900 |

Applied in `globals.css`:
```css
body { font-family: 'Inter', system-ui, sans-serif; }
h1, h2, h3, h4, h5, h6 { font-family: 'Outfit', 'Inter', sans-serif; }
```

In Tailwind, use `font-sans` (Inter) and `font-heading` (Outfit) classes.

Google Fonts loaded via `<link>` in `app/layout.tsx` `<head>`, with `preconnect` links for performance.

## Gradients

| Name | Value | Usage |
|------|-------|-------|
| Brand gradient | `135deg, #6366F1 → #8B5CF6` | Buttons, icons, CTAs |
| Hero background | `from-slate-900 via-indigo-950 to-slate-900` | Dark hero sections |
| Card light | `from-indigo-50 to-purple-50` | CTA boxes on white backgrounds |
| Dark CTA | `from-slate-900 to-indigo-950` | Sidebar widgets |
| OG/favicon | `135deg, #6366f1 → #9333ea` | Meta images |

## Shadows

```ts
boxShadow: {
  glass: "0 8px 32px 0 rgba(31, 38, 135, 0.37)",
  "glass-lg": "0 25px 50px -12px rgba(0, 0, 0, 0.4)",
  glow: "0 0 40px rgba(99, 102, 241, 0.3)",
  "glow-lg": "0 0 80px rgba(99, 102, 241, 0.4)",
}
```

Use `shadow-glow` on primary CTA buttons for brand effect.

## Animations

| Class | Duration | Effect |
|-------|----------|--------|
| `animate-pulse-slow` | 3s | Slow pulse |
| `animate-scroll-left` | 30s | Horizontal marquee (trust badges) |
| `animate-float` | 6s | Vertical float (-20px) |

Framer Motion is used for interactive animations (fade in, slide up on scroll). Most components are `"use client"` because of this.

## CSS Utilities (globals.css)

| Class | Effect |
|-------|--------|
| `.glass` | Dark frosted glass: rgba(255,255,255,0.05) + blur(10px) |
| `.glass-light` | Light frosted glass: rgba(255,255,255,0.8) + blur(10px) |
| `.glass-card` | Card variant: rgba(255,255,255,0.03) + blur(20px) |
| `.gradient-text` | Indigo→Purple gradient text fill |
| `.gradient-text-light` | Lighter variant (#818CF8→#A78BFA) |
| `.gradient-border` | ::before pseudo-element gradient border |
| `.mesh-bg` | Dark navy with radial indigo/purple gradients |
| `.section-padding` | `py-20 px-4 md:px-8 lg:px-16` |
| `.container-custom` | `max-w-7xl mx-auto` |
| `.scrollbar-hide` | Hides scrollbars (used on trust badge marquee) |

## Layout Patterns

**Section spacing**: `py-14` to `py-20` (56–80px vertical padding)  
**Content width**: `max-w-3xl` (prose), `max-w-5xl` (medium), `max-w-6xl` or `max-w-7xl` (full-width)  
**Horizontal padding**: `px-4 sm:px-6 lg:px-8` on all sections  
**Navbar height**: `pt-32` on hero sections (accounts for fixed navbar)

## Border Radius

Buttons and cards: `rounded-xl` (12px) or `rounded-2xl` (16px)  
Small pills/badges: `rounded-full`  
Icon containers: `rounded-xl`

## Button Styles

```tsx
// Primary CTA (WhatsApp green)
"inline-flex items-center gap-2 px-8 py-4 bg-green-500 hover:bg-green-600 text-white font-semibold rounded-xl transition-colors"

// Primary CTA (brand gradient)
"inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-gradient-to-r from-indigo-500 to-purple-600 text-white font-semibold hover:opacity-90 transition-opacity shadow-glow"

// Secondary / Ghost
"inline-flex items-center gap-2 px-8 py-4 bg-white/10 hover:bg-white/20 text-white font-semibold rounded-xl transition-colors border border-white/20"
```

## Icon Library

Lucide React (`lucide-react`) — all icons. Typical sizes: `w-4 h-4` (inline), `w-5 h-5` (buttons), `w-6 h-6` (cards), `w-8 h-8` (feature icons), `w-10 h-10` (section accents).
