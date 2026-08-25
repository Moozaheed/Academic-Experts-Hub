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
      "Assignment Help Canada | Expert Academic Support for Canadian University Students | Academic Experts Hub",
  },
  description:
    "Top-rated online assignment help for Canadian university students. Essays, coursework, thesis, dissertation, research & data analysis — APA/MLA referenced, deadline-guaranteed. All Canadian universities covered.",
  alternates: {
    canonical: "/assignment-help-canada",
  },
  keywords: [
    "assignment help canada",
    "online assignment help canada",
    "university assignment help canada",
    "do my assignment canada",
    "essay help canada",
    "thesis help canada",
    "dissertation help canada",
    "assignment writing service canada",
    "academic help canada",
    "homework help canada",
  ],
  openGraph: {
    title: "Assignment Help Canada | Expert Academic Support | Academic Experts Hub",
    description:
      "Expert online assignment help for Canadian university students. All subjects, all levels, APA/MLA referencing. WhatsApp-fast, deadline-guaranteed.",
    images: [{ url: "/opengraph-image", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Assignment Help Canada | Academic Experts Hub",
    description:
      "Top-rated assignment help for Canadian students. Thesis, essays, coursework, data analysis — done by experts.",
    images: ["/opengraph-image"],
  },
};

const faqs = [
  {
    q: "Do you help students from Canadian universities?",
    a: "Yes. We work with students from all major Canadian institutions including University of Toronto, UBC, McGill, University of Alberta, Queen's University, McMaster, Dalhousie, University of Waterloo, Western University, and all other universities and colleges across Canada.",
  },
  {
    q: "Do you use APA and MLA referencing as required by Canadian universities?",
    a: "Absolutely. We are experienced with APA 7th edition, MLA 9th edition, Chicago, and all other citation formats used by Canadian institutions. We follow your specific university or professor's guidelines exactly.",
  },
  {
    q: "Can you meet tight Canadian university deadlines?",
    a: "Yes. We regularly handle urgent turnarounds for Canadian students including same-day and 24-hour assignments. Message us on WhatsApp immediately for urgent requests — we'll confirm availability right away.",
  },
  {
    q: "Do you work with both English and bilingual Canadian institutions?",
    a: "Our primary service is in English, covering all English-language Canadian institutions. We support students at bilingual universities including University of Ottawa who are completing English-language assignments.",
  },
  {
    q: "What types of assignments do you help with in Canada?",
    a: "Essays, term papers, coursework, case studies, business reports, literature reviews, capstone projects, thesis, dissertations, data analysis assignments, SPSS/R tasks, and engineering or IT projects — all subjects, all levels from undergraduate to PhD.",
  },
  {
    q: "How much does assignment help cost for Canadian students?",
    a: "Pricing is flexible and depends on subject, length, complexity, and deadline. We provide transparent CAD/USD quotes with no hidden fees. Contact us via WhatsApp for a free, no-obligation quote.",
  },
];

const canadianUniversities = [
  "University of Toronto",
  "University of British Columbia",
  "McGill University",
  "University of Alberta",
  "Queen's University",
  "McMaster University",
  "University of Waterloo",
  "Western University",
  "Dalhousie University",
  "Simon Fraser University",
  "University of Calgary",
  "Carleton University",
];

const services = [
  {
    icon: FileText,
    title: "Essay & Term Paper Help",
    desc: "Research papers, argumentative essays, critical analyses, and reflective writing for all Canadian university subjects and faculties.",
    color: "text-red-600",
    bg: "bg-red-50",
    border: "border-red-100",
  },
  {
    icon: GraduationCap,
    title: "Thesis & Dissertation",
    desc: "Full Masters and PhD dissertation support for Canadian graduate students — proposal development to final defence preparation.",
    color: "text-indigo-600",
    bg: "bg-indigo-50",
    border: "border-indigo-100",
  },
  {
    icon: BarChart3,
    title: "Data Analysis (SPSS/R/Python)",
    desc: "Statistical analysis for Canadian research students — SPSS, R, Python, and publication-quality results reporting.",
    color: "text-green-600",
    bg: "bg-green-50",
    border: "border-green-100",
  },
  {
    icon: BookOpen,
    title: "Literature Review & Capstone",
    desc: "Systematic and narrative literature reviews, annotated bibliographies, and capstone projects for Canadian programmes.",
    color: "text-purple-600",
    bg: "bg-purple-50",
    border: "border-purple-100",
  },
];

export default function AssignmentHelpCanadaPage() {
  const whatsappUrl = buildWhatsAppUrl(
    "Hi, I'm a Canadian student and I need assignment help. Can you tell me more?"
  );

  const breadcrumbs = [
    { name: "Home", path: "/" },
    { name: "Assignment Help", path: "/assignment-help" },
    { name: "Canada", path: "/assignment-help-canada" },
  ];

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Assignment Help Canada",
    description:
      "Expert online assignment help for students at Canadian universities. Thesis writing, dissertation support, essay help, data analysis, and all academic subjects.",
    provider: { "@id": `${absoluteUrl("/")}#organization` },
    areaServed: { "@type": "Country", name: "Canada" },
    url: absoluteUrl("/assignment-help-canada"),
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
      <section className="bg-gradient-to-br from-slate-900 via-red-950 to-slate-900 pt-32 pb-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-red-500/10 border border-red-500/20 mb-6">
            <span className="text-red-300 text-sm font-medium">
              🇨🇦 Assignment Help — Canada
            </span>
          </div>
          <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
            Expert <span className="gradient-text">Assignment Help</span>
            <br />for Canadian Students
          </h1>
          <p className="text-slate-300 text-lg md:text-xl leading-relaxed max-w-2xl mx-auto mb-10">
            Professional academic support for university students across Canada. Essays, term papers,
            thesis, dissertation, data analysis — APA/MLA referenced, plagiarism-free,
            deadline-guaranteed.
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
              "All Canadian Universities",
              "APA & MLA Referencing",
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

      {/* Stats */}
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
              Academic Help Services for Canadian Students
            </h2>
            <p className="text-slate-600 text-lg max-w-2xl mx-auto">
              From first-year essays to doctoral research — expert support at every level.
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
            Canadian Universities We Support
          </h2>
          <p className="text-slate-600 mb-10">
            We've helped students from every major Canadian university and college meet their
            deadlines and achieve academic success.
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            {canadianUniversities.map((uni) => (
              <span
                key={uni}
                className="px-4 py-2 bg-white rounded-full border border-slate-200 text-slate-700 text-sm font-medium"
              >
                {uni}
              </span>
            ))}
            <span className="px-4 py-2 bg-red-50 rounded-full border border-red-200 text-red-700 text-sm font-medium">
              + All Other Canadian Institutions
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
                Why Canadian Students Choose Academic Experts Hub
              </h2>
              <ul className="space-y-4">
                {[
                  "Deep familiarity with Canadian university standards, grading criteria, and academic conventions",
                  "APA 7th, MLA 9th, Chicago, and all other styles used in Canadian institutions",
                  "Experienced with Canadian semester systems and familiar with Fall/Winter/Summer academic cycles",
                  "International student specialists — we understand the challenges of studying in Canada from abroad",
                  "WhatsApp-based communication — fast, direct, and accessible from Eastern to Pacific time zones",
                  "Plagiarism-free work with Turnitin-safe delivery — every time, without exception",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                    <span className="text-slate-600">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-gradient-to-br from-red-50 to-orange-50 rounded-2xl p-8 border border-red-100">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-red-500 to-orange-600 flex items-center justify-center">
                  <Star className="w-6 h-6 text-white" />
                </div>
                <div>
                  <p className="font-bold text-slate-900">Trusted by 500+ Students</p>
                  <p className="text-slate-500 text-sm">Including Canadian university students</p>
                </div>
              </div>
              <blockquote className="text-slate-600 italic leading-relaxed mb-6">
                "I was an international student at UBC struggling with my research thesis. Academic
                Experts Hub helped me develop my methodology and guided me through the data analysis.
                I passed with distinction — couldn't have done it without them."
              </blockquote>
              <p className="text-slate-500 text-sm font-medium">— Masters Student, UBC</p>
            </div>
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-heading text-3xl font-bold text-slate-900 mb-12">
            How to Get Assignment Help in Canada
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                step: "1",
                title: "Message Us on WhatsApp",
                desc: "Send your assignment instructions, subject, word count, deadline, and any grading criteria.",
              },
              {
                step: "2",
                title: "Get a Free Quote",
                desc: "We review your requirements and send a transparent quote — usually within a few hours.",
              },
              {
                step: "3",
                title: "Receive Your Work",
                desc: "Your completed, plagiarism-free assignment arrives before your deadline, ready to submit.",
              },
            ].map((s) => (
              <div key={s.step} className="flex flex-col items-center">
                <div className="w-12 h-12 rounded-full bg-red-600 text-white font-bold text-lg flex items-center justify-center mb-4">
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
            Assignment Help Canada — FAQ
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
      <section className="py-20 bg-gradient-to-br from-slate-900 to-red-950">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <Clock className="w-10 h-10 text-red-400 mx-auto mb-4" />
          <h2 className="font-heading text-3xl font-bold text-white mb-4">
            Need Assignment Help in Canada Right Now?
          </h2>
          <p className="text-slate-300 text-lg mb-8">
            Send your assignment details on WhatsApp and get a response within hours. Canadian
            university deadlines — any time zone.
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
