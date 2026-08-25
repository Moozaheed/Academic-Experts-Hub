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
      "Assignment Help Australia | Expert Academic Support for Australian Students | Academic Experts Hub",
  },
  description:
    "Top-rated online assignment help for Australian students. Essays, coursework, thesis, dissertation, research & data analysis — APA/Harvard referenced, deadline-guaranteed. WhatsApp-fast. All Australian universities covered.",
  alternates: {
    canonical: "/assignment-help-australia",
  },
  keywords: [
    "assignment help australia",
    "online assignment help australia",
    "university assignment help australia",
    "do my assignment australia",
    "essay help australia",
    "thesis help australia",
    "dissertation help australia",
    "assignment writing service australia",
    "academic help australia",
    "homework help australia",
  ],
  openGraph: {
    title: "Assignment Help Australia | Expert Academic Support | Academic Experts Hub",
    description:
      "Expert online assignment help for Australian university students. All subjects, all levels, APA/Harvard referencing. WhatsApp-fast, deadline-guaranteed.",
    images: [{ url: "/opengraph-image", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Assignment Help Australia | Academic Experts Hub",
    description:
      "Top-rated assignment help for Australian students. Thesis, essays, coursework, data analysis — done by experts.",
    images: ["/opengraph-image"],
  },
};

const faqs = [
  {
    q: "Do you help students from Australian universities?",
    a: "Yes. We work with students from all major Australian universities including the University of Melbourne, ANU, University of Sydney, Monash University, UNSW, UQ, UWA, QUT, RMIT, Deakin, La Trobe, and all other institutions across Australia.",
  },
  {
    q: "Do you use APA and Harvard referencing as required by Australian universities?",
    a: "Absolutely. We are experienced with APA 7th edition, Harvard referencing, and all other citation styles commonly required by Australian institutions. Just let us know your university's preferred style.",
  },
  {
    q: "Can you meet tight Australian university deadlines?",
    a: "Yes. We regularly handle urgent turnarounds for Australian students, including same-day and 24-hour assignments. Message us on WhatsApp immediately for urgent requests — we'll confirm availability within the hour.",
  },
  {
    q: "Is your assignment help legal and confidential?",
    a: "Our service is completely confidential. We provide academic guidance, model answers, and writing support — the same type of help you'd receive from a private tutor. All client information is treated with strict confidentiality.",
  },
  {
    q: "What types of assignments do you help with in Australia?",
    a: "Essays, coursework, case studies, business reports, literature reviews, research projects, data analysis assignments, SPSS/Python tasks, IT and engineering assignments, and thesis or dissertation support — all disciplines, all levels from undergraduate to PhD.",
  },
  {
    q: "How much does assignment help cost in Australia?",
    a: "Pricing depends on the subject, length, complexity, and deadline. We offer competitive, transparent pricing with no hidden fees. Contact us via WhatsApp with your assignment brief and we'll send a quote — first consultation is always free.",
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
    title: "Essay Writing Help",
    desc: "Argumentative, analytical, critical, and reflective essays for all Australian university subjects and programmes.",
    color: "text-orange-600",
    bg: "bg-orange-50",
    border: "border-orange-100",
  },
  {
    icon: GraduationCap,
    title: "Thesis & Dissertation",
    desc: "Full thesis and dissertation support for Masters and PhD students at Australian universities — proposal to final submission.",
    color: "text-indigo-600",
    bg: "bg-indigo-50",
    border: "border-indigo-100",
  },
  {
    icon: BarChart3,
    title: "Data Analysis (SPSS/R)",
    desc: "Statistical analysis for Australian research students — SPSS, R, Python, and interpretation of results to publication standard.",
    color: "text-green-600",
    bg: "bg-green-50",
    border: "border-green-100",
  },
  {
    icon: BookOpen,
    title: "Literature Review",
    desc: "Systematic and narrative literature reviews for all disciplines, structured to Australian academic standards.",
    color: "text-purple-600",
    bg: "bg-purple-50",
    border: "border-purple-100",
  },
];

export default function AssignmentHelpAustraliaPage() {
  const whatsappUrl = buildWhatsAppUrl(
    "Hi, I'm an Australian student and I need assignment help. Can you tell me more?"
  );

  const breadcrumbs = [
    { name: "Home", path: "/" },
    { name: "Assignment Help", path: "/assignment-help" },
    { name: "Australia", path: "/assignment-help-australia" },
  ];

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Assignment Help Australia",
    description:
      "Expert online assignment help for students at Australian universities. Thesis writing, dissertation support, essay help, data analysis, and all academic subjects.",
    provider: { "@id": `${absoluteUrl("/")}#organization` },
    areaServed: { "@type": "Country", name: "Australia" },
    url: absoluteUrl("/assignment-help-australia"),
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
      <section className="bg-gradient-to-br from-slate-900 via-indigo-950 to-slate-900 pt-32 pb-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-indigo-500/10 border border-indigo-500/20 mb-6">
            <span className="text-indigo-300 text-sm font-medium">
              🇦🇺 Assignment Help — Australia
            </span>
          </div>
          <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
            Expert <span className="gradient-text">Assignment Help</span>
            <br />for Australian Students
          </h1>
          <p className="text-slate-300 text-lg md:text-xl leading-relaxed max-w-2xl mx-auto mb-10">
            Professional assignment help for students across all Australian universities. Essays,
            coursework, thesis, dissertation, data analysis and more — APA/Harvard referenced,
            plagiarism-free, deadline-guaranteed.
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
              "All Australian Universities",
              "APA & Harvard Referencing",
              "Plagiarism-Free",
              "Deadline Guaranteed",
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
              { value: "500+", label: "Students Helped" },
              { value: "30+", label: "Countries Served" },
              { value: "98%", label: "On-Time Delivery" },
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
              Academic Help Services for Australian Students
            </h2>
            <p className="text-slate-600 text-lg max-w-2xl mx-auto">
              From first-year essays to PhD dissertations — we cover every stage of your Australian
              university journey.
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
            We've helped students from every major Australian institution meet their deadlines and
            achieve academic success.
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
                  "APA 7th, Harvard, APA 6th, and all other referencing styles used in Australian institutions",
                  "Experience with trimester, semester, and year-long programme structures",
                  "International student specialists — we understand the unique pressures of studying abroad",
                  "WhatsApp-based communication — no Zoom calls, no email queues, just fast direct support",
                  "Plagiarism-free guarantee with Turnitin-safe delivery on every assignment",
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
                "I was an international student at Monash struggling with my MBA dissertation.
                Academic Experts Hub guided me through the entire process — from methodology to
                final submission. I passed with distinction."
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
            How to Get Assignment Help in Australia
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                step: "1",
                title: "Message Us on WhatsApp",
                desc: "Send your assignment brief, subject, word count, deadline, and any rubric or marking criteria.",
              },
              {
                step: "2",
                title: "Get a Free Quote",
                desc: "We review your requirements and send a transparent quote — usually within a few hours.",
              },
              {
                step: "3",
                title: "Receive Your Work",
                desc: "Your completed, plagiarism-free assignment is delivered before your deadline.",
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
            Assignment Help Australia — FAQ
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
            Need Assignment Help in Australia Right Now?
          </h2>
          <p className="text-slate-300 text-lg mb-8">
            Send your assignment details on WhatsApp and get a response within hours. Urgent
            Australian university deadlines welcome.
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
