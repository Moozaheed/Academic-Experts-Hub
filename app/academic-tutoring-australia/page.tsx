import type { Metadata } from "next";
import {
  MessageCircle,
  CheckCircle,
  ArrowRight,
  Clock,
  Star,
  Users,
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
      "Academic Tutoring & Consulting Australia | Expert Student Mentoring | Academic Experts Hub",
  },
  description:
    "Top-rated academic tutoring & consultation for Australian university students. Thesis mentoring, dissertation guidance, research methodology & SPSS data analysis. APA/Harvard referencing support. WhatsApp-fast.",
  alternates: {
    canonical: "/academic-tutoring-australia",
  },
  keywords: [
    "academic tutoring australia",
    "university tutoring australia",
    "thesis consultation australia",
    "dissertation mentoring australia",
    "research methodology australia",
    "data analysis tutoring australia",
    "academic coaching australia",
    "statistics tutoring australia",
  ],
  openGraph: {
    title: "Academic Tutoring & Consulting Australia | Academic Experts Hub",
    description:
      "Expert academic tutoring and thesis consultation for Australian university students. All subjects, APA/Harvard referencing. WhatsApp-fast response.",
    images: [{ url: "/opengraph-image", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Academic Tutoring & Consulting Australia | Academic Experts Hub",
    description:
      "Top-rated academic tutoring for Australian students. Thesis, dissertation, research methodology & data analysis coaching.",
    images: ["/opengraph-image"],
  },
};

const faqs = [
  {
    q: "Do you tutor students from Australian universities?",
    a: "Yes. We work with students from all major Australian universities including the University of Melbourne, ANU, University of Sydney, Monash University, UNSW, UQ, UWA, QUT, RMIT, Deakin, La Trobe, and all other institutions across Australia.",
  },
  {
    q: "Do you provide guidance on APA and Harvard referencing?",
    a: "Absolutely. We are experienced with APA 7th edition, Harvard referencing, and all other citation styles commonly required by Australian institutions. Just let us know your university's preferred format.",
  },
  {
    q: "Can you assist with urgent academic deadlines?",
    a: "Yes. We regularly handle urgent schedules for Australian students. Message us on WhatsApp immediately for fast response — we'll confirm mentor availability within the hour.",
  },
  {
    q: "Is your academic consulting legal and confidential?",
    a: "Yes. We provide 1-on-1 academic tutoring, research coaching, and editing guidance — adhering to ethical educational standards. All consultations and student information are treated with strict confidentiality.",
  },
  {
    q: "What subject areas do you cover for Australian students?",
    a: "Coursework and essay coaching, literature reviews, research methodology, data analysis (SPSS, R, Python), engineering project mentoring, and thesis or dissertation guidance — across undergraduate, Masters, and PhD levels.",
  },
  {
    q: "How much does academic consulting cost in Australia?",
    a: "Pricing depends on the subject, scope, complexity, and timeline. We offer transparent pricing with no hidden fees. Contact us via WhatsApp with your project requirements for a free initial quote.",
  },
];

const australianUniversities = [
  "University of Melbourne",
  "Australian National University",
  "University of Sydney",
  "Monash University",
  "UNSW Sydney",
  "University of Queensland",
  "University of Western Australia",
  "University of Adelaide",
  "QUT",
  "RMIT University",
  "Deakin University",
  "La Trobe University",
];

const services = [
  {
    icon: FileText,
    title: "Coursework & Essay Coaching",
    desc: "1-on-1 tutoring on argument structuring, critical analysis, scholarly tone, and referencing standards for Australian university coursework.",
    color: "text-orange-600",
    bg: "bg-orange-50",
    border: "border-orange-100",
  },
  {
    icon: GraduationCap,
    title: "Thesis & Dissertation Mentoring",
    desc: "Full thesis and dissertation consultation for Masters and PhD students at Australian universities — from proposal development to final defense preparation.",
    color: "text-indigo-600",
    bg: "bg-indigo-50",
    border: "border-indigo-100",
  },
  {
    icon: BarChart3,
    title: "Data Analysis & Statistics (SPSS/R)",
    desc: "Statistical tutoring for Australian research students — SPSS, R, Python, hypothesis testing, and interpretation of empirical findings to scholarly standard.",
    color: "text-green-600",
    bg: "bg-green-50",
    border: "border-green-100",
  },
  {
    icon: BookOpen,
    title: "Literature Review Consultation",
    desc: "Guidance on structuring systematic and narrative literature reviews for all disciplines according to Australian academic standards.",
    color: "text-purple-600",
    bg: "bg-purple-50",
    border: "border-purple-100",
  },
];

export default function AssignmentHelpAustraliaPage() {
  const whatsappUrl = buildWhatsAppUrl(
    "Hi, I'm an Australian university student looking for academic consulting and tutoring. Can you tell me more?"
  );

  const breadcrumbs = [
    { name: "Home", path: "/" },
    { name: "Services", path: "/services" },
    { name: "Australia", path: "/academic-tutoring-australia" },
  ];

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Academic Tutoring & Consulting Australia",
    description:
      "Expert online academic tutoring and consulting for students at Australian universities. Thesis mentoring, dissertation support, data analysis tutoring, and research coaching.",
    provider: { "@id": `${absoluteUrl("/")}#organization` },
    areaServed: { "@type": "Country", name: "Australia" },
    url: absoluteUrl("/academic-tutoring-australia"),
    serviceType: "Academic Consulting and Tutoring",
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
      <section className="bg-gradient-to-br from-slate-900 via-indigo-950 to-slate-900 pt-32 pb-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-indigo-500/10 border border-indigo-500/20 mb-6">
            <span className="text-indigo-300 text-sm font-medium">
              🇦🇺 Academic Tutoring &amp; Consulting — Australia
            </span>
          </div>
          <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
            Expert <span className="gradient-text">Academic Mentoring</span>
            <br />for Australian Students
          </h1>
          <p className="text-slate-300 text-lg md:text-xl leading-relaxed max-w-2xl mx-auto mb-10">
            Professional academic tutoring and consulting for students across all Australian universities —
            the same kind of expert guidance you&apos;d get from a private tutor or academic supervisor.
            Coursework coaching, thesis mentoring, dissertation guidance, data analysis and more,
            with APA/Harvard referencing support, complete confidentiality, and deadline-aware scheduling.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-10">
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
          <div className="flex flex-wrap justify-center gap-6 text-slate-400 text-sm">
            {[
              "All Australian Universities",
              "APA & Harvard Referencing",
              "100% Original Guidance",
              "Responsive, Deadline-Aware Support",
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

      {/* Trust stats */}
      <section className="bg-white border-b border-slate-100">
        <div className="max-w-4xl mx-auto px-4 py-10">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            {[
              { value: "500+", label: "Students Guided" },
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
              Academic Support Services for Australian Students
            </h2>
            <p className="text-slate-600 text-lg max-w-2xl mx-auto">
              From undergraduate coursework coaching to PhD dissertation mentoring — we support every stage of your Australian
              academic journey.
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

      {/* Universities we cover */}
      <section className="py-16 bg-slate-50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-heading text-2xl md:text-3xl font-bold text-slate-900 mb-4">
            Australian Universities We Support
          </h2>
          <p className="text-slate-600 mb-10">
            We&apos;ve supported students from every major Australian institution to build research skills and academic confidence.
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            {australianUniversities.map((uni) => (
              <span
                key={uni}
                className="px-4 py-2 bg-white rounded-full border border-slate-200 text-slate-700 text-sm font-medium"
              >
                {uni}
              </span>
            ))}
            <span className="px-4 py-2 bg-indigo-50 rounded-full border border-indigo-200 text-indigo-700 text-sm font-medium">
              + All Other Australian Universities
            </span>
          </div>
        </div>
      </section>

      {/* Why choose us */}
      <section className="py-20 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="font-heading text-3xl md:text-4xl font-bold text-slate-900 mb-6">
                Why Australian Students Choose Us
              </h2>
              <ul className="space-y-4">
                {[
                  "Deep familiarity with Australian university assessment standards and marking rubrics",
                  "APA 7th, Harvard, APA 6th, and all citation styles used across Australian universities",
                  "Experience with trimester, semester, and year-long Australian academic structures",
                  "International student specialists — personalized guidance tailored to English-language academic conventions",
                  "WhatsApp-based communication — direct 1-on-1 consultation without long email delays",
                  "100% original academic coaching and ethical scholarship assured on every consultation",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                    <span className="text-slate-600">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-gradient-to-br from-indigo-50 to-purple-50 rounded-2xl p-8 border border-indigo-100">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center">
                  <Star className="w-6 h-6 text-white" />
                </div>
                <div>
                  <p className="font-bold text-slate-900">Trusted by 500+ Students</p>
                  <p className="text-slate-500 text-sm">Across 30+ countries</p>
                </div>
              </div>
              <blockquote className="text-slate-600 italic leading-relaxed mb-6">
                &ldquo;I was an international student at Monash struggling with my MBA dissertation.
                Academic Experts Hub guided me through the entire process — from methodology to
                final submission. I passed with distinction.&rdquo;
              </blockquote>
              <p className="text-slate-500 text-sm font-medium">— MBA Student, Monash University</p>
            </div>
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-heading text-3xl font-bold text-slate-900 mb-12">
            How Academic Consulting Works
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                step: "1",
                title: "Message Us on WhatsApp",
                desc: "Send your subject, topic, research questions, and specific areas where you need guidance or tutoring.",
              },
              {
                step: "2",
                title: "Get a Free Consultation & Quote",
                desc: "We review your requirements and provide clear consultation pricing and timeline — usually within a few hours.",
              },
              {
                step: "3",
                title: "Receive 1-on-1 Expert Mentoring",
                desc: "Get detailed academic feedback, step-by-step coaching, and worked examples so you understand the material fully and submit your own confident, original work.",
              },
            ].map((s) => (
              <div key={s.step} className="flex flex-col items-center">
                <div className="w-12 h-12 rounded-full bg-indigo-600 text-white font-bold text-lg flex items-center justify-center mb-4">
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
            Academic Tutoring Australia — FAQ
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
      <section className="py-20 bg-gradient-to-br from-slate-900 to-indigo-950">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <Clock className="w-10 h-10 text-indigo-400 mx-auto mb-4" />
          <h2 className="font-heading text-3xl font-bold text-white mb-4">
            Need Academic Guidance in Australia?
          </h2>
          <p className="text-slate-300 text-lg mb-8">
            Connect directly with an academic consultant on WhatsApp. Get fast, personalized coaching tailored to Australian university standards.
          </p>
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-4 bg-green-500 hover:bg-green-600 text-white font-bold rounded-xl transition-colors text-lg"
          >
            <MessageCircle className="w-5 h-5" />
            Get Expert Guidance on WhatsApp
          </a>
        </div>
      </section>
    </>
  );
}
