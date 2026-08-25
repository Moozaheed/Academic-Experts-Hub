import type { Metadata } from "next";
import Link from "next/link";
import { MessageCircle, CheckCircle, Clock, ArrowRight, FileText, BookOpen, BarChart3, Code2, Briefcase, Zap } from "lucide-react";
import { buildWhatsAppUrl } from "@/lib/utils";
import { faqJsonLd, breadcrumbJsonLd } from "@/lib/seo";

export const metadata: Metadata = {
  title: "Online Assignment Help for International Students",
  description:
    "Get expert online assignment help for essays, coursework, case studies, reports & all subjects. Fast WhatsApp response, deadline-guaranteed, available worldwide. Do my assignment — done right.",
  alternates: {
    canonical: "/assignment-help",
  },
  openGraph: {
    title: "Online Assignment Help for International Students | Academic Experts Hub",
    description:
      "Expert online assignment help for essays, coursework, case studies, reports & all subjects. Fast WhatsApp response, deadline-guaranteed, available worldwide.",
    images: [{ url: "/opengraph-image", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Online Assignment Help for International Students | Academic Experts Hub",
    description:
      "Expert online assignment help for essays, coursework, case studies & reports. WhatsApp-fast, deadline-guaranteed, worldwide.",
    images: ["/opengraph-image"],
  },
};

const assignmentTypes = [
  {
    icon: FileText,
    title: "Essay Writing Help",
    description: "Argumentative, analytical, reflective, and comparative essays across all subjects. Properly structured, well-cited, and tailored to your marking rubric.",
    tags: ["Argumentative Essays", "Analytical Essays", "Reflective Writing"],
    color: "text-orange-600",
    bg: "bg-orange-50",
    border: "border-orange-200",
  },
  {
    icon: BookOpen,
    title: "Coursework & Module Assignments",
    description: "Complete module assignments and coursework tasks for undergraduate and postgraduate programmes — all disciplines covered.",
    tags: ["Module Tasks", "Coursework", "Undergraduate & PG"],
    color: "text-blue-600",
    bg: "bg-blue-50",
    border: "border-blue-200",
  },
  {
    icon: Briefcase,
    title: "Business Reports & Case Studies",
    description: "Professional business reports, case study analysis, marketing plans, and strategic management assignments for MBA and business students.",
    tags: ["Business Reports", "Case Study", "MBA Assignments"],
    color: "text-purple-600",
    bg: "bg-purple-50",
    border: "border-purple-200",
  },
  {
    icon: BarChart3,
    title: "Data & Research Assignments",
    description: "Assignments involving data analysis, statistical reporting, SPSS/Python output interpretation, and research-based tasks.",
    tags: ["Data Analysis", "SPSS Help", "Research Tasks"],
    color: "text-green-600",
    bg: "bg-green-50",
    border: "border-green-200",
  },
  {
    icon: Code2,
    title: "IT & Engineering Assignments",
    description: "Programming assignments, software design tasks, system analysis, and engineering lab reports with full implementation and documentation.",
    tags: ["Programming", "System Design", "Lab Reports"],
    color: "text-indigo-600",
    bg: "bg-indigo-50",
    border: "border-indigo-200",
  },
  {
    icon: Zap,
    title: "Urgent Assignment Help",
    description: "Stuck with a tight deadline? We handle urgent and same-day assignments without compromising on quality or academic integrity.",
    tags: ["Same-Day Help", "Urgent Deadlines", "Fast Turnaround"],
    color: "text-red-600",
    bg: "bg-red-50",
    border: "border-red-200",
  },
];

const faqs = [
  {
    q: "Can you help with any type of assignment?",
    a: "Yes. We help with essays, reports, case studies, coursework, research assignments, data analysis tasks, business assignments, IT and engineering assignments, and more — across all university subjects and levels.",
  },
  {
    q: "How quickly can you complete my assignment?",
    a: "It depends on the complexity and length, but we regularly handle urgent deadlines including same-day and 24-hour turnarounds. Message us on WhatsApp with your deadline and we will confirm availability immediately.",
  },
  {
    q: "Is the assignment original and plagiarism-free?",
    a: "Every assignment is written from scratch and tailored to your specific brief, marking criteria, and institution standards. We run plagiarism checks before delivery.",
  },
  {
    q: "Do you follow my university's referencing style?",
    a: "Yes. We work with APA, Harvard, MLA, Chicago, Vancouver, and any other referencing style your institution requires. Just let us know when you get in touch.",
  },
  {
    q: "How do I get started?",
    a: "Simply send us a WhatsApp message with your assignment brief, subject, word count, deadline, and any marking criteria. We will respond within a few hours with a quote and timeline.",
  },
];

export default function AssignmentHelpPage() {
  const whatsappUrl = buildWhatsAppUrl("Hi, I need assignment help. Can you tell me more about your services?");

  const breadcrumbs = [
    { name: "Home", path: "/" },
    { name: "Assignment Help", path: "/assignment-help" },
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
            <span className="text-orange-400 text-sm font-medium">Online Assignment Help — Worldwide</span>
          </div>
          <h1 className="font-heading text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
            Expert <span className="text-orange-400">Assignment Help</span>
            <br />for International Students
          </h1>
          <p className="text-slate-300 text-lg md:text-xl leading-relaxed max-w-2xl mx-auto mb-10">
            Essays, coursework, case studies, reports, and more — done by professionals with real academic and industry experience. Deadline-guaranteed. WhatsApp-fast.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-4 bg-green-500 hover:bg-green-600 text-white font-semibold rounded-xl transition-colors"
            >
              <MessageCircle className="w-5 h-5" />
              Get Assignment Help Now
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
            {["500+ Students Helped", "All Subjects Covered", "Plagiarism-Free", "On-Time Delivery", "Available Worldwide"].map((t) => (
              <span key={t} className="flex items-center gap-1.5">
                <CheckCircle className="w-4 h-4 text-green-400" />
                {t}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Assignment Types */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              Assignment Help for Every Subject & Type
            </h2>
            <p className="text-slate-600 text-lg max-w-2xl mx-auto">
              Whether you need essay help, coursework support, or urgent deadline assistance — we cover it all.
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
            How to Get Assignment Help
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { step: "1", title: "Send Your Brief", desc: "WhatsApp us your assignment brief, subject, word count, deadline, and any marking criteria or rubric." },
              { step: "2", title: "Get a Quote", desc: "We review your requirements and send a quote with a clear timeline — usually within a few hours." },
              { step: "3", title: "Receive Your Work", desc: "Your completed, plagiarism-free assignment is delivered before your deadline, ready to submit." },
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
            Assignment Help — Frequently Asked Questions
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
          <p className="text-slate-600 font-semibold mb-5">Find country-specific assignment help:</p>
          <div className="flex flex-wrap justify-center gap-3">
            {[
              { label: "🇦🇺 Assignment Help Australia", href: "/assignment-help-australia" },
              { label: "🇺🇸 Assignment Help USA", href: "/assignment-help-usa" },
              { label: "🇨🇦 Assignment Help Canada", href: "/assignment-help-canada" },
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
            Need Assignment Help Right Now?
          </h2>
          <p className="text-slate-300 text-lg mb-8">
            Send your assignment details on WhatsApp and get a response within hours. Urgent deadlines welcome.
          </p>
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-4 bg-green-500 hover:bg-green-600 text-white font-bold rounded-xl transition-colors text-lg"
          >
            <MessageCircle className="w-5 h-5" />
            Get Help on WhatsApp
          </a>
        </div>
      </section>
    </>
  );
}
