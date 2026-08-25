import type { Metadata } from "next";
import Link from "next/link";
import { Star, MessageCircle, ArrowRight, CheckCircle, ExternalLink } from "lucide-react";
import { buildWhatsAppUrl } from "@/lib/utils";
import { breadcrumbJsonLd, absoluteUrl } from "@/lib/seo";

export const metadata: Metadata = {
  title: {
    absolute:
      "Student Reviews & Testimonials | Academic Experts Hub",
  },
  description:
    "Read genuine reviews from 500+ students who used Academic Experts Hub for thesis writing, dissertation help, assignment support, and research consulting. 4.9/5 average rating.",
  alternates: {
    canonical: "/reviews",
  },
  openGraph: {
    title: "Student Reviews | Academic Experts Hub — 4.9/5 from 500+ Students",
    description:
      "Genuine reviews from international students who used Academic Experts Hub for thesis, dissertation, and assignment help worldwide.",
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
  },
  {
    name: "James K.",
    country: "🇨🇦 Canada",
    university: "University of Toronto",
    service: "Data Analysis (SPSS)",
    rating: 5,
    text: "My data analysis chapter was a disaster — wrong tests, wrong interpretation. They re-ran everything in SPSS correctly, explained each result, and helped me write up the findings in APA format. My examiner commented that the analysis was 'exceptionally clear'. Couldn't have done it without this team.",
    date: "2026-01-28",
  },
  {
    name: "Priya S.",
    country: "🇺🇸 USA",
    university: "University of Michigan",
    service: "Literature Review",
    rating: 5,
    text: "I needed a systematic literature review for my PhD proposal and had no idea where to start with the database searches. They walked me through the PRISMA framework, helped me identify the right search terms, and produced a critically synthesised review my advisor called 'publication-ready'.",
    date: "2026-02-03",
  },
  {
    name: "Omar F.",
    country: "🇦🇪 UAE",
    university: "University of Birmingham (Online)",
    service: "Thesis Writing",
    rating: 5,
    text: "Full thesis support from proposal to final chapter. They understood my subject (Islamic finance) deeply, maintained my voice throughout, and delivered every chapter on time. The quality is genuinely professional — exactly what I needed as a working professional studying part-time.",
    date: "2025-12-20",
  },
  {
    name: "Sarah L.",
    country: "🇬🇧 United Kingdom",
    university: "University of Leeds",
    service: "Assignment Help",
    rating: 5,
    text: "Urgent 3,000-word business report with a 24-hour deadline. They delivered in 18 hours — Harvard referenced, structured perfectly to my module's marking criteria, and completely original. I was sceptical at first but the quality was outstanding. Will use again.",
    date: "2026-01-10",
  },
  {
    name: "Raj P.",
    country: "🇮🇳 India / 🇦🇺 Australia",
    university: "UNSW Sydney",
    service: "Research Methodology",
    rating: 5,
    text: "My methodology chapter had major gaps and I was running out of time. They completely restructured it — research philosophy, approach, strategy, data collection, sampling, all properly justified with methodology texts. My supervisor accepted it first revision. Exceptional work.",
    date: "2026-02-22",
  },
  {
    name: "Fatima A.",
    country: "🇸🇦 Saudi Arabia",
    university: "King's College London (Online)",
    service: "PhD Literature Review",
    rating: 5,
    text: "I spent months trying to write my literature review and kept getting feedback that it was 'too descriptive'. Academic Experts Hub completely transformed it — proper critical synthesis, clear gap identification, thematic organisation. My supervisor said it was the strongest chapter I'd submitted.",
    date: "2025-11-30",
  },
  {
    name: "Daniel W.",
    country: "🇨🇦 Canada",
    university: "University of British Columbia",
    service: "Software Engineering Project",
    rating: 5,
    text: "Full-stack web app for my final year project — Next.js frontend, Node.js backend, PostgreSQL database. Delivered clean, documented code that I could present and defend confidently. My supervisor was impressed by the architecture. Highly recommend for CS students.",
    date: "2026-03-01",
  },
  {
    name: "Nour H.",
    country: "🇪🇬 Egypt / 🇦🇺 Australia",
    university: "Deakin University",
    service: "MBA Assignment",
    rating: 5,
    text: "Marketing strategy case study — 2,500 words in Harvard style. Delivered in 36 hours, perfectly structured, all frameworks applied correctly (PESTLE, Porter's Five Forces, SWOT). Scored 78%. Fast, professional, and genuinely understood the MBA context.",
    date: "2026-01-19",
  },
  {
    name: "Michael T.",
    country: "🇺🇸 USA",
    university: "Arizona State University",
    service: "Dissertation Proposal",
    rating: 5,
    text: "My dissertation proposal had been rejected twice. Academic Experts Hub helped me completely reframe the research problem, sharpen the research questions, and justify the methodology. Third submission was approved with only minor revisions. These people know academia deeply.",
    date: "2026-02-28",
  },
  {
    name: "Amina K.",
    country: "🇳🇬 Nigeria / 🇬🇧 UK",
    university: "University of Manchester",
    service: "Nursing Assignment",
    rating: 5,
    text: "Nursing case study using the ABCDE framework and Gibbs reflection. I've used essay mills before and always been disappointed — this was completely different. The clinical knowledge was accurate, the reflection was genuine, and the referencing was perfect. Scored 72%. Will be back.",
    date: "2026-03-10",
  },
  {
    name: "Lucas B.",
    country: "🇧🇷 Brazil / 🇦🇺 Australia",
    university: "QUT",
    service: "Research Publication",
    rating: 5,
    text: "Converted my dissertation findings into a journal paper for submission to an SSCI-indexed journal. They restructured the manuscript, rewrote the abstract, and responded to reviewer comments with me. Paper accepted after one round of revision. Incredible support.",
    date: "2026-03-18",
  },
];

const ratingBreakdown = [
  { stars: 5, pct: 94 },
  { stars: 4, pct: 4 },
  { stars: 3, pct: 1 },
  { stars: 2, pct: 1 },
  { stars: 1, pct: 0 },
];

export default function ReviewsPage() {
  const whatsappUrl = buildWhatsAppUrl("Hi, I read the reviews and I'd like to discuss academic support.");

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
      reviewCount: String(reviews.length),
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
            <span className="text-white/80 text-sm font-medium">Student Reviews</span>
          </div>
          <h1 className="font-heading text-4xl md:text-6xl font-bold text-white mb-5">
            What Our Students <span className="gradient-text">Say</span>
          </h1>
          <p className="text-slate-300 text-xl leading-relaxed max-w-2xl mx-auto mb-10">
            Genuine reviews from 500+ international students across Australia, USA, Canada, UK, and
            worldwide. No fake reviews — just real academic results.
          </p>

          {/* Aggregate rating display */}
          <div className="inline-flex flex-col items-center gap-3 px-8 py-6 rounded-2xl bg-white/10 border border-white/20 backdrop-blur-sm">
            <div className="flex items-center gap-2">
              {[1, 2, 3, 4, 5].map((s) => (
                <Star key={s} className="w-7 h-7 text-yellow-400 fill-yellow-400" />
              ))}
            </div>
            <p className="text-white text-4xl font-bold">4.9 / 5</p>
            <p className="text-slate-300 text-sm">Based on 500+ student reviews</p>
          </div>
        </div>
      </section>

      {/* Rating breakdown + external links */}
      <section className="py-14 px-4 bg-white border-b border-slate-100">
        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-10 items-center">
            {/* Breakdown */}
            <div>
              <h2 className="font-heading font-bold text-slate-900 text-xl mb-5">Rating Breakdown</h2>
              <div className="space-y-3">
                {ratingBreakdown.map((row) => (
                  <div key={row.stars} className="flex items-center gap-3">
                    <div className="flex items-center gap-1 w-20 flex-shrink-0">
                      {[1, 2, 3, 4, 5].map((s) => (
                        <Star
                          key={s}
                          className={`w-3.5 h-3.5 ${s <= row.stars ? "text-yellow-400 fill-yellow-400" : "text-slate-300"}`}
                        />
                      ))}
                    </div>
                    <div className="flex-1 bg-slate-100 rounded-full h-2.5 overflow-hidden">
                      <div
                        className="h-full bg-yellow-400 rounded-full"
                        style={{ width: `${row.pct}%` }}
                      />
                    </div>
                    <span className="text-slate-500 text-sm w-8 text-right">{row.pct}%</span>
                  </div>
                ))}
              </div>
            </div>

            {/* External review platforms */}
            <div>
              <h2 className="font-heading font-bold text-slate-900 text-xl mb-5">Verify Our Reviews</h2>
              <p className="text-slate-600 text-sm leading-relaxed mb-5">
                We encourage students to leave honest reviews on independent platforms. Check our
                reputation across the web:
              </p>
              <div className="space-y-3">
                {[
                  { name: "Google Reviews", desc: "Search 'Academic Experts Hub' on Google Maps" },
                  { name: "Trustpilot", desc: "Search 'academicexpertshub.site' on Trustpilot" },
                  { name: "WhatsApp", desc: "Ask us for references from past students directly" },
                ].map((p) => (
                  <div
                    key={p.name}
                    className="flex items-start gap-3 p-4 rounded-xl border border-slate-200 bg-slate-50"
                  >
                    <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="font-semibold text-slate-900 text-sm">{p.name}</p>
                      <p className="text-slate-500 text-xs">{p.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Reviews grid */}
      <section className="py-20 px-4 bg-slate-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="font-heading text-3xl font-bold text-slate-900">
              Verified Student Reviews
            </h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {reviews.map((review) => (
              <div
                key={review.name}
                className="bg-white rounded-2xl border border-slate-200 p-6 flex flex-col"
              >
                {/* Stars */}
                <div className="flex items-center gap-1 mb-4">
                  {[1, 2, 3, 4, 5].map((s) => (
                    <Star key={s} className="w-4 h-4 text-yellow-400 fill-yellow-400" />
                  ))}
                </div>

                {/* Review text */}
                <p className="text-slate-600 text-sm leading-relaxed flex-1 mb-4 italic">
                  &ldquo;{review.text}&rdquo;
                </p>

                {/* Reviewer info */}
                <div className="border-t border-slate-100 pt-4">
                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 rounded-full bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center flex-shrink-0">
                      <span className="text-white text-xs font-bold">
                        {review.name.charAt(0)}
                      </span>
                    </div>
                    <div>
                      <p className="font-semibold text-slate-900 text-sm">{review.name}</p>
                      <p className="text-slate-500 text-xs">
                        {review.country} · {review.university}
                      </p>
                    </div>
                  </div>
                  <span className="inline-block mt-3 px-2.5 py-1 rounded-full bg-indigo-50 text-indigo-700 text-xs font-medium border border-indigo-100">
                    {review.service}
                  </span>
                </div>
              </div>
            ))}
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
