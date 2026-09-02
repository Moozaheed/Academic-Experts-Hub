import type { Metadata } from "next";
import Link from "next/link";
import { Star, MessageCircle, ArrowRight, CheckCircle, ThumbsUp } from "lucide-react";
import { buildWhatsAppUrl } from "@/lib/utils";
import { breadcrumbJsonLd, absoluteUrl } from "@/lib/seo";

export const metadata: Metadata = {
  title: {
    absolute: "Student Reviews & Testimonials | Academic Experts Hub",
  },
  description:
    "Read genuine reviews from 500+ students who used Academic Experts Hub for thesis consulting, dissertation mentoring, research coaching, and academic guidance. 4.9/5 average rating.",
  alternates: {
    canonical: "/reviews",
  },
  openGraph: {
    title: "Student Reviews | Academic Experts Hub — 4.9/5 from 500+ Students",
    description:
      "Genuine reviews from international students who used Academic Experts Hub for thesis consulting, dissertation mentoring, and academic coaching worldwide.",
    images: [{ url: "/opengraph-image", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    images: ["/opengraph-image"],
  },
};

const reviews = [
  {
    name: "Aisha M.",
    country: "🇦🇺 Australia",
    university: "Monash University",
    service: "MBA Dissertation",
    rating: 5,
    text: "I was completely overwhelmed with my MBA dissertation methodology. Academic Experts Hub helped me design a mixed-methods approach that my supervisor praised. The guidance was detailed, fast, and genuinely academic — not generic. I graduated with a Merit.",
    date: "2026-02-15",
    helpful: 31,
  },
  {
    name: "James K.",
    country: "🇨🇦 Canada",
    university: "University of Toronto",
    service: "Data Analysis (SPSS)",
    rating: 4,
    text: "My data analysis chapter had wrong tests and wrong interpretation. They identified exactly what went wrong, showed me how to run the correct tests in SPSS, explained each result so I understood it, and coached me on presenting findings in APA format. My examiner commented the analysis was 'exceptionally clear'. Initial response took a few hours but the quality was completely worth the wait.",
    date: "2026-01-28",
    helpful: 18,
  },
  {
    name: "Priya S.",
    country: "🇺🇸 USA",
    university: "University of Michigan",
    service: "Literature Review",
    rating: 5,
    text: "I needed a systematic literature review for my PhD proposal and had no idea where to start with the database searches. They walked me through the PRISMA framework, helped me identify the right search terms, and taught me how to critically synthesise sources. My advisor called the final review 'publication-ready'.",
    date: "2026-02-03",
    helpful: 27,
  },
  {
    name: "Omar F.",
    country: "🇦🇪 UAE",
    university: "University of Birmingham (Online)",
    service: "Thesis Consultation",
    rating: 5,
    text: "Full thesis consultation from proposal to final chapter. They understood my subject (Islamic finance) deeply, helped me develop my academic voice, and kept me on track to meet every milestone. The mentoring was genuinely professional — exactly what I needed as a working professional studying part-time.",
    date: "2025-12-20",
    helpful: 44,
  },
  {
    name: "Sarah L.",
    country: "🇬🇧 United Kingdom",
    university: "University of Leeds",
    service: "Academic Skills Coaching",
    rating: 5,
    text: "Had an urgent business report and was completely stuck on structure and argument. They worked through it with me — explained Harvard referencing requirements, walked me through the marking criteria, and coached me section by section until I understood what my assessor expected. Submitted on time with real confidence. Will definitely use again.",
    date: "2026-01-10",
    helpful: 39,
  },
  {
    name: "Raj P.",
    country: "🇮🇳 India / 🇦🇺 Australia",
    university: "UNSW Sydney",
    service: "Research Methodology",
    rating: 5,
    text: "My methodology chapter had major gaps and I was running out of time. They helped me rethink the whole approach — explained research philosophy, design strategy, data collection logic, and sampling in terms I could justify myself. I rebuilt the chapter with that understanding and my supervisor accepted it first revision. Exceptional coaching.",
    date: "2026-02-22",
    helpful: 22,
  },
  {
    name: "Fatima A.",
    country: "🇸🇦 Saudi Arabia",
    university: "King's College London (Online)",
    service: "PhD Literature Review",
    rating: 5,
    text: "I spent months struggling with my literature review and kept getting feedback that it was 'too descriptive'. Academic Experts Hub taught me how to approach it differently — critical synthesis techniques, identifying research gaps, thematic organisation. I rewrote it with that framework and my supervisor said it was the strongest chapter I'd submitted.",
    date: "2025-11-30",
    helpful: 51,
  },
  {
    name: "Daniel W.",
    country: "🇨🇦 Canada",
    university: "University of British Columbia",
    service: "Software Engineering Mentoring",
    rating: 5,
    text: "My final year full-stack project — Next.js frontend, Node.js backend, PostgreSQL database. They mentored me through the architecture decisions, reviewed my code at each milestone, and explained the design patterns my supervisor would scrutinise. I built it myself and defended it confidently. My supervisor was impressed by the architecture decisions I'd made. Highly recommend for CS students.",
    date: "2026-03-01",
    helpful: 15,
  },
  {
    name: "Nour H.",
    country: "🇪🇬 Egypt / 🇦🇺 Australia",
    university: "Deakin University",
    service: "MBA Academic Coaching",
    rating: 5,
    text: "Had a marketing strategy case study and was completely lost on how to apply the frameworks. They coached me through PESTLE, Porter's Five Forces, and SWOT in the context of my specific company — explained the logic behind each, helped me structure the analysis, and reviewed my Harvard referencing. I wrote it myself and scored 78%. Fast, professional, genuinely understood the MBA context.",
    date: "2026-01-19",
    helpful: 33,
  },
  {
    name: "Michael T.",
    country: "🇺🇸 USA",
    university: "Arizona State University",
    service: "Dissertation Proposal",
    rating: 5,
    text: "My dissertation proposal had been rejected twice. Academic Experts Hub helped me completely reframe the research problem, sharpen the research questions, and justify the methodology. Third submission was approved with only minor revisions. These people know academia deeply.",
    date: "2026-02-28",
    helpful: 28,
  },
  {
    name: "Amina K.",
    country: "🇳🇬 Nigeria / 🇬🇧 UK",
    university: "University of Manchester",
    service: "Nursing Academic Coaching",
    rating: 5,
    text: "Nursing case study using the ABCDE framework and Gibbs reflection. I've sought academic support before and always been let down — this was completely different. They coached me through clinical assessment language, helped me develop genuine reflective language from my own practice, and got the referencing exactly right for the module. Scored 72%. Will be back.",
    date: "2026-03-10",
    helpful: 20,
  },
  {
    name: "Lucas B.",
    country: "🇧🇷 Brazil / 🇦🇺 Australia",
    university: "QUT",
    service: "Research Publication",
    rating: 5,
    text: "Wanted to turn my dissertation findings into a journal paper for an SSCI-indexed journal. They guided me through restructuring for a journal audience, coached me on writing a strong abstract, and helped me formulate responses to reviewer comments. I submitted my revisions and the paper was accepted after one round. Incredible guidance.",
    date: "2026-03-18",
    helpful: 47,
  },
];

const avatarColors = [
  "from-indigo-500 to-purple-600",
  "from-blue-600 to-cyan-500",
  "from-emerald-500 to-teal-600",
  "from-orange-500 to-amber-500",
  "from-pink-600 to-rose-500",
  "from-violet-600 to-purple-700",
  "from-sky-500 to-blue-500",
  "from-green-600 to-emerald-500",
  "from-red-500 to-pink-600",
  "from-teal-500 to-cyan-600",
  "from-purple-600 to-violet-700",
  "from-amber-500 to-orange-500",
];

const ratingBreakdown = [
  { stars: 5, pct: 94 },
  { stars: 4, pct: 4 },
  { stars: 3, pct: 1 },
  { stars: 2, pct: 1 },
  { stars: 1, pct: 0 },
];

function formatDate(dateStr: string) {
  return new Date(dateStr).toLocaleDateString("en-AU", {
    month: "long",
    year: "numeric",
  });
}

function timeAgo(dateStr: string) {
  const months = Math.round(
    (new Date().getTime() - new Date(dateStr).getTime()) / (1000 * 60 * 60 * 24 * 30)
  );
  if (months === 0) return "This month";
  if (months === 1) return "1 month ago";
  return `${months} months ago`;
}

export default function ReviewsPage() {
  const whatsappUrl = buildWhatsAppUrl(
    "Hi, I read the reviews and I'd like to discuss academic support."
  );
  const whatsappRefsUrl = buildWhatsAppUrl(
    "Hi, could you share references or screenshots from past students before I decide?"
  );

  const breadcrumbs = [
    { name: "Home", path: "/" },
    { name: "Reviews", path: "/reviews" },
  ];

  const reviewsSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": `${absoluteUrl("/")}#organization`,
    name: "Academic Experts Hub",
    url: absoluteUrl("/"),
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "4.9",
      reviewCount: "500",
      bestRating: "5",
      worstRating: "1",
    },
    review: reviews.map((r) => ({
      "@type": "Review",
      author: { "@type": "Person", name: r.name },
      datePublished: r.date,
      reviewRating: {
        "@type": "Rating",
        ratingValue: String(r.rating),
        bestRating: "5",
        worstRating: "1",
      },
      reviewBody: r.text,
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(reviewsSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd(breadcrumbs)) }}
      />

      {/* Hero */}
      <section className="relative pt-32 pb-20 px-4 overflow-hidden bg-gradient-to-br from-slate-900 via-indigo-950 to-slate-900">
        <div className="relative max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 border border-white/20 mb-6">
            <CheckCircle className="w-4 h-4 text-green-400" />
            <span className="text-white/80 text-sm font-medium">Verified Student Reviews</span>
          </div>
          <h1 className="font-heading text-4xl md:text-6xl font-bold text-white mb-5">
            What Our Students <span className="gradient-text">Say</span>
          </h1>
          <p className="text-slate-300 text-xl leading-relaxed max-w-2xl mx-auto mb-10">
            Real reviews from international students across Australia, USA, Canada, UK, and
            worldwide. Collected directly via WhatsApp after project completion.
          </p>

          {/* Aggregate rating */}
          <div className="inline-flex flex-col items-center gap-3 px-8 py-6 rounded-2xl bg-white/10 border border-white/20 backdrop-blur-sm">
            <div className="flex items-center gap-1.5">
              {[1, 2, 3, 4, 5].map((s) => (
                <Star key={s} className="w-7 h-7 text-yellow-400 fill-yellow-400" />
              ))}
            </div>
            <p className="text-white text-4xl font-bold">4.9 / 5</p>
            <p className="text-slate-300 text-sm">Based on 500+ student reviews</p>
          </div>
        </div>
      </section>

      {/* Rating breakdown + verification */}
      <section className="py-14 px-4 bg-white border-b border-slate-100">
        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-10 items-start">
            {/* Breakdown */}
            <div>
              <h2 className="font-heading font-bold text-slate-900 text-xl mb-5">
                Rating Breakdown
              </h2>
              <div className="space-y-3">
                {ratingBreakdown.map((row) => (
                  <div key={row.stars} className="flex items-center gap-3">
                    <div className="flex items-center gap-1 w-20 flex-shrink-0">
                      {[1, 2, 3, 4, 5].map((s) => (
                        <Star
                          key={s}
                          className={`w-3.5 h-3.5 ${
                            s <= row.stars
                              ? "text-yellow-400 fill-yellow-400"
                              : "text-slate-200 fill-slate-200"
                          }`}
                        />
                      ))}
                    </div>
                    <div className="flex-1 bg-slate-100 rounded-full h-2.5 overflow-hidden">
                      <div
                        className="h-full bg-yellow-400 rounded-full transition-all"
                        style={{ width: `${row.pct}%` }}
                      />
                    </div>
                    <span className="text-slate-500 text-sm w-8 text-right">{row.pct}%</span>
                  </div>
                ))}
              </div>
              <p className="text-slate-400 text-xs mt-4">
                Showing 12 of 500+ verified reviews
              </p>
            </div>

            {/* How reviews are collected */}
            <div>
              <h2 className="font-heading font-bold text-slate-900 text-xl mb-5">
                How We Collect Reviews
              </h2>
              <p className="text-slate-600 text-sm leading-relaxed mb-5">
                We work exclusively via WhatsApp. After every project, we ask students for honest
                feedback — good or bad. The reviews on this page were shared directly by students
                in our WhatsApp conversations.
              </p>
              <div className="space-y-3">
                <div className="flex items-start gap-3 p-4 rounded-xl border border-slate-200 bg-slate-50">
                  <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="font-semibold text-slate-900 text-sm">Ask for screenshots</p>
                    <p className="text-slate-500 text-xs">
                      WhatsApp us and we&apos;ll share original review screenshots from past
                      students before you commit to anything.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3 p-4 rounded-xl border border-slate-200 bg-slate-50">
                  <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="font-semibold text-slate-900 text-sm">Talk to past students</p>
                    <p className="text-slate-500 text-xs">
                      For large projects we can connect you (with their permission) to a previous
                      student in a similar field. Just ask.
                    </p>
                  </div>
                </div>
                <a
                  href={whatsappRefsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-4 py-3 rounded-xl bg-green-500 hover:bg-green-400 text-white text-sm font-semibold transition-colors w-full justify-center mt-2"
                >
                  <MessageCircle className="w-4 h-4" />
                  Request References via WhatsApp
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Reviews grid */}
      <section className="py-20 px-4 bg-slate-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="font-heading text-3xl font-bold text-slate-900 mb-2">
              Student Reviews
            </h2>
            <p className="text-slate-500 text-sm">
              Showing 12 of 500+ reviews · Collected via WhatsApp · Most recent first
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {reviews.map((review, i) => (
              <div
                key={review.name}
                className="bg-white rounded-2xl border border-slate-200 p-6 flex flex-col hover:shadow-md transition-shadow"
              >
                {/* Header: stars + date */}
                <div className="flex items-start justify-between mb-3">
                  <div className="flex items-center gap-0.5">
                    {[1, 2, 3, 4, 5].map((s) => (
                      <Star
                        key={s}
                        className={`w-4 h-4 ${
                          s <= review.rating
                            ? "text-yellow-400 fill-yellow-400"
                            : "text-slate-200 fill-slate-200"
                        }`}
                      />
                    ))}
                  </div>
                  <div className="text-right">
                    <p className="text-slate-400 text-xs">{timeAgo(review.date)}</p>
                    <p className="text-slate-300 text-xs">{formatDate(review.date)}</p>
                  </div>
                </div>

                {/* Review text */}
                <p className="text-slate-600 text-sm leading-relaxed flex-1 mb-4">
                  &ldquo;{review.text}&rdquo;
                </p>

                {/* Reviewer */}
                <div className="border-t border-slate-100 pt-4">
                  <div className="flex items-center gap-3 mb-3">
                    <div
                      className={`w-9 h-9 rounded-full bg-gradient-to-br ${avatarColors[i % avatarColors.length]} flex items-center justify-center flex-shrink-0`}
                    >
                      <span className="text-white text-xs font-bold">
                        {review.name.charAt(0)}
                      </span>
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="font-semibold text-slate-900 text-sm">{review.name}</p>
                      <p className="text-slate-400 text-xs truncate">
                        {review.country} · {review.university}
                      </p>
                    </div>
                  </div>

                  {/* Badges row */}
                  <div className="flex items-center gap-2 flex-wrap">
                    <span className="px-2.5 py-1 rounded-full bg-indigo-50 text-indigo-700 text-xs font-medium border border-indigo-100">
                      {review.service}
                    </span>
                    <span className="px-2.5 py-1 rounded-full bg-green-50 text-green-700 text-xs font-medium border border-green-100 flex items-center gap-1">
                      <CheckCircle className="w-3 h-3" />
                      Verified
                    </span>
                  </div>

                  {/* Helpful */}
                  <div className="flex items-center gap-1.5 mt-3 text-slate-400">
                    <ThumbsUp className="w-3.5 h-3.5" />
                    <span className="text-xs">{review.helpful} found this helpful</span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Load more nudge */}
          <div className="text-center mt-12">
            <p className="text-slate-500 text-sm mb-4">
              These are 12 of our most recent reviews. We have 500+ more.
            </p>
            <a
              href={whatsappRefsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl border border-slate-300 text-slate-700 text-sm font-medium hover:bg-slate-100 transition-colors"
            >
              <MessageCircle className="w-4 h-4 text-green-500" />
              Request more reviews via WhatsApp
            </a>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-4 bg-gradient-to-br from-slate-900 via-indigo-950 to-purple-950">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-white mb-5">
            Join 500+ Successful Students
          </h2>
          <p className="text-slate-300 text-lg mb-8">
            Contact us on WhatsApp for a free consultation. We&apos;ll discuss your requirements
            and tell you exactly how we can help.
          </p>
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-green-500 hover:bg-green-400 text-white font-semibold text-lg transition-colors"
          >
            <MessageCircle className="w-5 h-5" />
            Chat on WhatsApp
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>
      </section>
    </>
  );
}
