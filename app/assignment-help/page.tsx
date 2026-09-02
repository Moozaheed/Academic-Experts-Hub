import type { Metadata } from "next";
import Link from "next/link";
import { MessageCircle, CheckCircle, Clock, ArrowRight, FileText, BookOpen, BarChart3, Code2, Briefcase, Zap } from "lucide-react";
import { buildWhatsAppUrl } from "@/lib/utils";
import { faqJsonLd, breadcrumbJsonLd } from "@/lib/seo";

export const metadata: Metadata = {
  title: "Academic Tutoring & Expert Consulting UK | Academic Experts Hub",
  description:
    "Expert academic tutoring and consulting for international students — essays, coursework, research, data analysis and more. 1-on-1 coaching via WhatsApp. Deadline-aware, available worldwide.",
  alternates: {
    canonical: "/assignment-help",
  },
  openGraph: {
    title: "Academic Tutoring & Expert Consulting UK | Academic Experts Hub",
    description:
      "Expert academic tutoring and consulting for international students. 1-on-1 coaching on essays, coursework, research, and data analysis. WhatsApp-fast, available worldwide.",
    images: [{ url: "/opengraph-image", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Academic Tutoring & Expert Consulting UK | Academic Experts Hub",
    description:
      "Expert academic tutoring for international students — essays, coursework, research & data analysis. 1-on-1 WhatsApp coaching, worldwide.",
    images: ["/opengraph-image"],
  },
};

const assignmentTypes = [
  {
    icon: FileText,
    title: "Essay & Writing Coaching",
    description: "Expert coaching on argument structure, critical analysis, scholarly tone, and referencing for argumentative, analytical, and reflective essays across all subjects.",
    tags: ["Argumentative Essays", "Analytical Essays", "Reflective Writing"],
    color: "text-orange-600",
    bg: "bg-orange-50",
    border: "border-orange-200",
  },
  {
    icon: BookOpen,
    title: "Coursework & Module Tutoring",
    description: "Personalised guidance on module tasks and coursework for undergraduate and postgraduate students — all disciplines, all levels, tailored to your marking rubric.",
    tags: ["Module Tasks", "Coursework Guidance", "Undergraduate & PG"],
    color: "text-blue-600",
    bg: "bg-blue-50",
    border: "border-blue-200",
  },
  {
    icon: Briefcase,
    title: "Business Studies Mentoring",
    description: "Expert tutoring on business report structures, case study analysis frameworks, and strategic management concepts for MBA and business students.",
    tags: ["Business Reports", "Case Study Analysis", "MBA Mentoring"],
    color: "text-purple-600",
    bg: "bg-purple-50",
    border: "border-purple-200",
  },
  {
    icon: BarChart3,
    title: "Data Analysis & Research Tutoring",
    description: "Step-by-step coaching on data analysis, statistical interpretation, SPSS/Python usage, and research design for empirical and quantitative work.",
    tags: ["Data Analysis", "SPSS Tutoring", "Research Methodology"],
    color: "text-green-600",
    bg: "bg-green-50",
    border: "border-green-200",
  },
  {
    icon: Code2,
    title: "IT & Engineering Project Coaching",
    description: "Technical mentoring on programming concepts, software design, system analysis, and engineering documentation to help you build and understand your own projects.",
    tags: ["Programming Guidance", "System Design", "Engineering Projects"],
    color: "text-indigo-600",
    bg: "bg-indigo-50",
    border: "border-indigo-200",
  },
  {
    icon: Zap,
    title: "Urgent Academic Support",
    description: "Expert guidance available for tight deadlines. Same-day consultation slots often available — reach out via WhatsApp for fast mentor allocation.",
    tags: ["Same-Day Guidance", "Urgent Deadlines", "Fast Response"],
    color: "text-red-600",
    bg: "bg-red-50",
    border: "border-red-200",
  },
];

const faqs = [
  {
    q: "What academic subjects and topics can you tutor?",
    a: "We offer tutoring and coaching across all major academic subjects — essays, coursework analysis, research methodology, data analysis, literature reviews, business studies, case study frameworks, IT and engineering projects — at undergraduate, Masters, and PhD level.",
  },
  {
    q: "Can you help with urgent academic deadlines?",
    a: "Yes. We regularly assist students with tight timelines. Reach out via WhatsApp with your deadline and we will confirm mentor availability quickly — same-day consultation slots are often available.",
  },
  {
    q: "Is your academic consulting ethical and confidential?",
    a: "Yes. We provide 1-on-1 academic tutoring, research coaching, and expert feedback — fully adhering to ethical educational standards. All consultations and student information are treated with strict confidentiality.",
  },
  {
    q: "Do you follow my university's referencing style?",
    a: "Yes. We work with APA, Harvard, MLA, Chicago, Vancouver, and any other referencing style your institution requires. Just let us know when you get in touch.",
  },
  {
    q: "How do I get started?",
    a: "Simply send us a WhatsApp message with your subject, topic, specific questions, and deadline. We will respond within a few hours with a tailored consultation plan and pricing.",
  },
];

export default function AssignmentHelpPage() {
  const whatsappUrl = buildWhatsAppUrl("Hi, I'm a university student looking for academic tutoring and consulting. Can you tell me more about your services?");

  const breadcrumbs = [
    { name: "Home", path: "/" },
    { name: "Academic Tutoring", path: "/assignment-help" },
  ];

  const faqSchema = faqJsonLd(faqs);
  const breadcrumbSchema = breadcrumbJsonLd(breadcrumbs);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      {/* Hero */}
      <section className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 pt-32 pb-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-orange-500/10 border border-orange-500/20 mb-6">
            <span className="text-orange-400 text-sm font-medium">Academic Tutoring &amp; Consulting — Worldwide</span>
          </div>
          <h1 className="font-heading text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
            Expert <span className="text-orange-400">Academic Coaching</span>
            <br />&amp; Academic Skills Support for International Students
          </h1>
          <p className="text-slate-300 text-lg md:text-xl leading-relaxed max-w-2xl mx-auto mb-10">
            Professional academic tutoring and consulting — the same expert guidance you&apos;d get
            from a private tutor or academic supervisor. 1-on-1 coaching on essays, coursework,
            research, and data analysis, via WhatsApp. Deadline-aware, available worldwide.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-4 bg-green-500 hover:bg-green-600 text-white font-semibold rounded-xl transition-colors"
            >
              <MessageCircle className="w-5 h-5" />
              Book Free Consultation
            </a>
            <a
              href="/services"
              className="inline-flex items-center gap-2 px-8 py-4 bg-white/10 hover:bg-white/20 text-white font-semibold rounded-xl transition-colors border border-white/20"
            >
              View All Services
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>
          {/* Trust signals */}
          <div className="flex flex-wrap justify-center gap-6 mt-10 text-slate-400 text-sm">
            {["500+ Students Mentored", "All Subjects Covered", "100% Original Guidance", "Deadline-Aware Scheduling", "Available Worldwide"].map((t) => (
              <span key={t} className="flex items-center gap-1.5">
                <CheckCircle className="w-4 h-4 text-green-400" />
                {t}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Tutoring types */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              Academic Tutoring for Every Subject &amp; Assignment Type
            </h2>
            <p className="text-slate-600 text-lg max-w-2xl mx-auto">
              Whether you need essay coaching, coursework guidance, or urgent mentoring for a tight deadline — we cover every academic need.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {assignmentTypes.map((type) => (
              <div key={type.title} className={`p-6 rounded-2xl border ${type.border} ${type.bg}`}>
                <type.icon className={`w-8 h-8 ${type.color} mb-4`} />
                <h3 className="font-heading text-lg font-bold text-slate-900 mb-2">{type.title}</h3>
                <p className="text-slate-600 text-sm leading-relaxed mb-4">{type.description}</p>
                <div className="flex flex-wrap gap-2">
                  {type.tags.map((tag) => (
                    <span key={tag} className="text-xs px-2.5 py-1 bg-white rounded-full text-slate-600 border border-slate-200">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-slate-900 mb-12">
            How Academic Consulting Works
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { step: "1", title: "Share Your Academic Need", desc: "WhatsApp us your subject, topic, specific questions, and deadline — the more detail you share, the more targeted your mentoring session." },
              { step: "2", title: "Get a Free Consultation & Quote", desc: "We review your requirements and offer clear consultation pricing and a timeline — usually within a few hours." },
              { step: "3", title: "Receive Expert 1-on-1 Mentoring", desc: "Get detailed academic feedback, step-by-step coaching, and worked examples so you fully understand the material and submit confident, original work." },
            ].map((s) => (
              <div key={s.step} className="flex flex-col items-center">
                <div className="w-12 h-12 rounded-full bg-orange-500 text-white font-bold text-lg flex items-center justify-center mb-4">
                  {s.step}
                </div>
                <h3 className="font-heading font-bold text-slate-900 mb-2">{s.title}</h3>
                <p className="text-slate-600 text-sm leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 mt-12 px-8 py-4 bg-green-500 hover:bg-green-600 text-white font-semibold rounded-xl transition-colors"
          >
            <MessageCircle className="w-5 h-5" />
            Start Now on WhatsApp
          </a>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-slate-900 text-center mb-12">
            Academic Consulting — Frequently Asked Questions
          </h2>
          <div className="space-y-6">
            {faqs.map((faq) => (
              <div key={faq.q} className="border border-slate-200 rounded-xl p-6">
                <h3 className="font-heading font-bold text-slate-900 mb-2">{faq.q}</h3>
                <p className="text-slate-600 leading-relaxed">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Country-specific links */}
      <section className="py-12 bg-slate-50 border-t border-slate-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-slate-600 font-semibold mb-5">Find expert academic tutoring by country:</p>
          <div className="flex flex-wrap justify-center gap-3">
            {[
              { label: "🇦🇺 Academic Tutoring Australia", href: "/assignment-help-australia" },
              { label: "🇺🇸 Academic Tutoring USA", href: "/assignment-help-usa" },
              { label: "🇨🇦 Academic Tutoring Canada", href: "/assignment-help-canada" },
            ].map((c) => (
              <Link
                key={c.href}
                href={c.href}
                className="px-5 py-2.5 rounded-full bg-white border border-slate-200 text-slate-700 text-sm font-medium hover:border-indigo-300 hover:text-indigo-700 transition-colors"
              >
                {c.label}
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-br from-slate-900 to-slate-800">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Clock className="w-10 h-10 text-orange-400 mx-auto mb-4" />
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-white mb-4">
            Need Academic Guidance Right Now?
          </h2>
          <p className="text-slate-300 text-lg mb-8">
            Connect with an academic consultant on WhatsApp and get a response within hours. Urgent deadlines welcome.
          </p>
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-4 bg-green-500 hover:bg-green-600 text-white font-bold rounded-xl transition-colors text-lg"
          >
            <MessageCircle className="w-5 h-5" />
            Get Guidance on WhatsApp
          </a>
        </div>
      </section>
    </>
  );
}
