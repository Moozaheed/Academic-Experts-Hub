import type { Metadata } from "next";
import {
  MessageCircle,
  CheckCircle,
  ArrowRight,
  Clock,
  Star,
  GraduationCap,
  FileText,
  BookOpen,
  BarChart3,
} from "lucide-react";
import { buildWhatsAppUrl } from "@/lib/utils";
import { faqJsonLd, breadcrumbJsonLd, absoluteUrl } from "@/lib/seo";

export const metadata: Metadata = {
  title: {
    absolute:
      "Assignment Help USA | Expert Academic Support for US College & University Students | Academic Experts Hub",
  },
  description:
    "Top-rated academic tutoring & consulting for US college and university students. Thesis mentoring, dissertation guidance, research methodology & data analysis — APA/MLA/Chicago referencing support. WhatsApp-fast, available nationwide.",
  alternates: {
    canonical: "/assignment-help-usa",
  },
  keywords: [
    "assignment help usa",
    "online assignment help usa",
    "college assignment help",
    "student mentoring usa",
    "thesis help usa",
    "dissertation help usa",
    "academic consulting usa",
    "academic help usa",
    "essay help usa",
    "academic tutoring usa",
  ],
  openGraph: {
    title: "Assignment Help USA | Expert Academic Support | Academic Experts Hub",
    description:
      "Expert academic tutoring and consulting for US college and university students. All subjects, all levels, APA/MLA/Chicago referencing support. WhatsApp-fast, available nationwide.",
    images: [{ url: "/opengraph-image", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Assignment Help USA | Academic Experts Hub",
    description:
      "Top-rated academic tutoring for US students. Thesis consultation, coursework coaching, research methodology & data analysis mentoring — WhatsApp-fast.",
    images: ["/opengraph-image"],
  },
};

const faqs = [
  {
    q: "Do you help students from US universities and colleges?",
    a: "Yes. We work with students from all types of US institutions — Ivy League universities, state universities, community colleges, and private colleges — including schools like Harvard, MIT, Stanford, UCLA, University of Michigan, NYU, Columbia, and hundreds more.",
  },
  {
    q: "Do you follow APA, MLA, and Chicago citation styles used in US universities?",
    a: "Absolutely. We are experienced with APA 7th edition, MLA 9th edition, Chicago/Turabian, and all other citation styles required by US institutions. Just specify your required style when you contact us.",
  },
  {
    q: "Can you handle urgent US university assignment deadlines?",
    a: "Yes. We regularly assist US students with tight timelines across all time zones, including same-day and urgent mentoring sessions. Message us on WhatsApp immediately for urgent requests — we'll confirm mentor availability right away.",
  },
  {
    q: "What types of US college assignments do you help with?",
    a: "We provide coaching and mentoring on essays, term papers, research papers, case study analysis, business reports, literature reviews, capstone projects, thesis, dissertations, data analysis, SPSS, and coding projects — all subjects, all levels from undergraduate to PhD.",
  },
  {
    q: "Do you help with graduate school thesis and dissertation writing?",
    a: "Yes. We provide comprehensive Masters and PhD dissertation mentoring for US graduate students — from proposal development and chapter review to data analysis coaching, defense preparation, and revision guidance.",
  },
  {
    q: "How much does assignment help cost for US students?",
    a: "Pricing depends on the subject, length, complexity, and deadline. We price competitively in USD and offer transparent quotes with no hidden fees. Contact us via WhatsApp for a free quote.",
  },
];

const usUniversities = [
  "Harvard University",
  "MIT",
  "Stanford University",
  "University of Michigan",
  "UCLA",
  "NYU",
  "Columbia University",
  "University of Texas",
  "Penn State",
  "Boston University",
  "University of Florida",
  "Arizona State University",
];

const services = [
  {
    icon: FileText,
    title: "Essay & Research Paper Help",
    desc: "Term papers, research papers, argumentative essays, and critical analyses for all US college and university subjects.",
    color: "text-blue-600",
    bg: "bg-blue-50",
    border: "border-blue-100",
  },
  {
    icon: GraduationCap,
    title: "Thesis & Dissertation (Graduate)",
    desc: "Full Masters and PhD dissertation support for US graduate students — from proposal to defense preparation.",
    color: "text-indigo-600",
    bg: "bg-indigo-50",
    border: "border-indigo-100",
  },
  {
    icon: BarChart3,
    title: "Data Analysis (SPSS/R/Python)",
    desc: "Statistical analysis for US research students — SPSS, R, Python, SAS, and results interpretation.",
    color: "text-green-600",
    bg: "bg-green-50",
    border: "border-green-100",
  },
  {
    icon: BookOpen,
    title: "Capstone & Literature Review",
    desc: "Capstone projects, systematic literature reviews, and annotated bibliographies for all US programmes.",
    color: "text-purple-600",
    bg: "bg-purple-50",
    border: "border-purple-100",
  },
];

export default function AssignmentHelpUSAPage() {
  const whatsappUrl = buildWhatsAppUrl(
    "Hi, I'm a US student looking for academic tutoring and consulting. Can you tell me more?"
  );

  const breadcrumbs = [
    { name: "Home", path: "/" },
    { name: "Assignment Help", path: "/assignment-help" },
    { name: "USA", path: "/assignment-help-usa" },
  ];

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Academic Tutoring & Consulting USA",
    description:
      "Expert online academic tutoring and consulting for students at US colleges and universities. Thesis consulting, dissertation mentoring, essay coaching, data analysis support, and all academic subjects.",
    provider: { "@id": `${absoluteUrl("/")}#organization` },
    areaServed: { "@type": "Country", name: "United States" },
    url: absoluteUrl("/assignment-help-usa"),
    serviceType: "Academic Consulting",
    audience: {
      "@type": "EducationalAudience",
      educationalRole: "student",
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd(faqs)) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(breadcrumbJsonLd(breadcrumbs)),
        }}
      />

      {/* Hero */}
      <section className="bg-gradient-to-br from-slate-900 via-blue-950 to-slate-900 pt-32 pb-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/20 mb-6">
            <span className="text-blue-300 text-sm font-medium">
              🇺🇸 Assignment Help — USA
            </span>
          </div>
          <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
            Expert <span className="gradient-text">Assignment Help</span>
            <br />for US Students
          </h1>
          <p className="text-slate-300 text-lg md:text-xl leading-relaxed max-w-2xl mx-auto mb-10">
            Professional academic tutoring and consulting for college and university students across
            the United States — the same expert guidance you&apos;d get from a private tutor or academic
            supervisor. Coursework coaching, thesis mentoring, dissertation guidance, data analysis
            and more, with APA/MLA/Chicago referencing support and deadline-aware scheduling.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-10">
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-4 bg-green-500 hover:bg-green-600 text-white font-semibold rounded-xl transition-colors"
            >
              <MessageCircle className="w-5 h-5" />
              Get Help Now — Free Quote
            </a>
            <a
              href="/services"
              className="inline-flex items-center gap-2 px-8 py-4 bg-white/10 hover:bg-white/20 text-white font-semibold rounded-xl transition-colors border border-white/20"
            >
              View All Services
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>
          <div className="flex flex-wrap justify-center gap-6 text-slate-400 text-sm">
            {[
              "All US Universities & Colleges",
              "APA / MLA / Chicago",
              "100% Original Guidance",
              "Deadline-Aware Scheduling",
              "WhatsApp-Fast Response",
            ].map((t) => (
              <span key={t} className="flex items-center gap-1.5">
                <CheckCircle className="w-4 h-4 text-green-400" />
                {t}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="bg-white border-b border-slate-100">
        <div className="max-w-4xl mx-auto px-4 py-10">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            {[
              { value: "500+", label: "Students Helped" },
              { value: "30+", label: "Countries Served" },
              { value: "98%", label: "Satisfaction Rate" },
              { value: "3+", label: "Years Experience" },
            ].map((s) => (
              <div key={s.label}>
                <p className="font-heading text-3xl font-bold text-slate-900">{s.value}</p>
                <p className="text-slate-500 text-sm mt-1">{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              Academic Help Services for US Students
            </h2>
            <p className="text-slate-600 text-lg max-w-2xl mx-auto">
              From first-year coursework to doctoral dissertations — expert guidance and mentoring at every level.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            {services.map((s) => (
              <div key={s.title} className={`p-7 rounded-2xl border ${s.border} ${s.bg}`}>
                <s.icon className={`w-8 h-8 ${s.color} mb-4`} />
                <h3 className="font-heading text-xl font-bold text-slate-900 mb-2">{s.title}</h3>
                <p className="text-slate-600 leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-10">
            <a
              href="/services"
              className="inline-flex items-center gap-2 text-indigo-600 font-semibold hover:underline"
            >
              View all services <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      </section>

      {/* Universities */}
      <section className="py-16 bg-slate-50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-heading text-2xl md:text-3xl font-bold text-slate-900 mb-4">
            US Universities & Colleges We Support
          </h2>
          <p className="text-slate-600 mb-10">
            We've helped students from across the US academic landscape — Ivy League, state
            universities, private colleges, and community colleges.
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            {usUniversities.map((uni) => (
              <span
                key={uni}
                className="px-4 py-2 bg-white rounded-full border border-slate-200 text-slate-700 text-sm font-medium"
              >
                {uni}
              </span>
            ))}
            <span className="px-4 py-2 bg-blue-50 rounded-full border border-blue-200 text-blue-700 text-sm font-medium">
              + All Other US Institutions
            </span>
          </div>
        </div>
      </section>

      {/* Why us */}
      <section className="py-20 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="font-heading text-3xl md:text-4xl font-bold text-slate-900 mb-6">
                Why US Students Choose Academic Experts Hub
              </h2>
              <ul className="space-y-4">
                {[
                  "Deep familiarity with US university academic standards, grading rubrics, and assessment styles",
                  "APA 7th, MLA 9th, Chicago/Turabian, and all other US citation styles",
                  "Understand the US semester and quarter system — experienced with tight mid-term and final deadlines",
                  "Graduate school specialists: comprehensive Masters and PhD dissertation support",
                  "WhatsApp-based communication — available across US time zones, fast and personal",
                  "100% original academic coaching and ethical scholarship — every consultation, without exception",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                    <span className="text-slate-600">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl p-8 border border-blue-100">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center">
                  <Star className="w-6 h-6 text-white" />
                </div>
                <div>
                  <p className="font-bold text-slate-900">Trusted by 500+ Students</p>
                  <p className="text-slate-500 text-sm">Including US grad students</p>
                </div>
              </div>
              <blockquote className="text-slate-600 italic leading-relaxed mb-6">
                "As an international student at a US university, I struggled with the research paper
                format and referencing. Academic Experts Hub helped me understand the structure and
                guided me to an A grade."
              </blockquote>
              <p className="text-slate-500 text-sm font-medium">— Graduate Student, US University</p>
            </div>
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-heading text-3xl font-bold text-slate-900 mb-12">
            How to Get Assignment Help in the USA
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                step: "1",
                title: "Message Us on WhatsApp",
                desc: "Tell us about your subject, research area, key academic questions, and timeline — the more detail you share, the more targeted your mentoring session.",
              },
              {
                step: "2",
                title: "Get a Free Quote",
                desc: "We review your requirements and send a transparent USD quote — usually within a few hours.",
              },
              {
                step: "3",
                title: "Receive Expert Mentoring",
                desc: "Get detailed academic feedback, step-by-step coaching, and worked examples so you fully understand the material and submit confident, original work by your deadline.",
              },
            ].map((s) => (
              <div key={s.step} className="flex flex-col items-center">
                <div className="w-12 h-12 rounded-full bg-blue-600 text-white font-bold text-lg flex items-center justify-center mb-4">
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
            Start Now — Free Consultation
          </a>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-heading text-3xl font-bold text-slate-900 text-center mb-12">
            Assignment Help USA — FAQ
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

      {/* CTA */}
      <section className="py-20 bg-gradient-to-br from-slate-900 to-blue-950">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <Clock className="w-10 h-10 text-blue-400 mx-auto mb-4" />
          <h2 className="font-heading text-3xl font-bold text-white mb-4">
            Need Assignment Help in the USA Right Now?
          </h2>
          <p className="text-slate-300 text-lg mb-8">
            Send your assignment details on WhatsApp and get a response within hours. US university
            deadlines — any time zone.
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
