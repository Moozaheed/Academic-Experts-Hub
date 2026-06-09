import type { Metadata } from "next";
import {
  CheckCircle,
  Code2,
  BrainCircuit,
  GraduationCap,
  Microscope,
  Building2,
  Globe,
  Users,
  Award,
  MessageCircle,
  ArrowRight,
  Target,
  Heart,
  Zap,
} from "lucide-react";
import { buildWhatsAppUrl } from "@/lib/utils";

export const metadata: Metadata = {
  title: "About Us | Academic Experts Hub",
  description:
    "Learn about Academic Experts Hub — built by a Software Engineer with 3+ years of professional experience to provide premium academic consulting for international students.",
};

const values = [
  {
    icon: Target,
    title: "Precision-Driven",
    description:
      "Every deliverable is crafted with the precision of professional engineering — structured, evidence-based, and aligned with academic standards.",
    color: "text-blue-600",
    bg: "bg-blue-50",
  },
  {
    icon: Heart,
    title: "Student-Centered",
    description:
      "We treat every student's academic goals as our own. Your success is our success — we are invested in the outcome, not just the output.",
    color: "text-rose-600",
    bg: "bg-rose-50",
  },
  {
    icon: Award,
    title: "Quality First",
    description:
      "We never sacrifice quality for speed. Every submission is reviewed, refined, and validated against the highest academic standards.",
    color: "text-indigo-600",
    bg: "bg-indigo-50",
  },
  {
    icon: Zap,
    title: "Responsiveness",
    description:
      "Academic deadlines are non-negotiable. We are responsive, reliable, and consistently deliver on time — without exception.",
    color: "text-amber-600",
    bg: "bg-amber-50",
  },
];

const expertise = [
  { icon: Code2, label: "Full-Stack Development", sub: "React, Next.js, Node.js, Python" },
  { icon: BrainCircuit, label: "Machine Learning & AI", sub: "PyTorch, scikit-learn, NLP" },
  { icon: GraduationCap, label: "Thesis & Dissertation", sub: "All disciplines and degree levels" },
  { icon: Microscope, label: "Research Methodology", sub: "Quantitative, qualitative, mixed" },
  { icon: Building2, label: "Enterprise Software", sub: "Architecture, APIs, databases" },
  { icon: Globe, label: "Academic Consulting", sub: "International students worldwide" },
];

const stats = [
  { value: "500+", label: "Students Helped" },
  { value: "30+", label: "Countries" },
  { value: "98%", label: "Success Rate" },
  { value: "3+", label: "Years Experience" },
];

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative pt-32 pb-20 px-4 overflow-hidden bg-gradient-to-br from-slate-900 via-indigo-950 to-slate-900">
        <div
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage:
              "radial-gradient(circle at 30% 50%, rgba(99,102,241,0.5) 0, transparent 50%), radial-gradient(circle at 70% 20%, rgba(139,92,246,0.4) 0, transparent 50%)",
          }}
        />
        <div className="relative max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 border border-white/20 mb-6">
            <span className="text-white/80 text-sm font-medium">Our Story</span>
          </div>
          <h1 className="font-heading text-4xl md:text-6xl font-bold text-white mb-5">
            About <span className="gradient-text">Academic Experts Hub</span>
          </h1>
          <p className="text-slate-300 text-xl leading-relaxed max-w-2xl mx-auto">
            Founded by a Software Engineer who understood the gap between what students need and
            what generic tutoring services deliver.
          </p>
        </div>
      </section>

      {/* Stats bar */}
      <section className="bg-white border-b border-slate-100">
        <div className="max-w-5xl mx-auto px-4 py-10">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map((stat) => (
              <div key={stat.label} className="text-center">
                <p className="font-heading text-3xl md:text-4xl font-bold text-slate-900 mb-1">
                  {stat.value}
                </p>
                <p className="text-slate-500 text-sm">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission section */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <div>
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-indigo-50 border border-indigo-100 mb-5">
                <span className="text-indigo-600 text-sm font-semibold">Our Mission</span>
              </div>
              <h2 className="font-heading text-3xl md:text-4xl font-bold text-slate-900 mb-5">
                Bridging Professional Expertise and Academic Excellence
              </h2>
              <p className="text-slate-600 text-lg leading-relaxed mb-5">
                Academic Experts Hub was established with a clear purpose: to bring the
                standards and discipline of professional engineering into academic consulting.
                Too many students receive support from tutors who know theory but have never
                delivered in the real world.
              </p>
              <p className="text-slate-500 leading-relaxed mb-5">
                Our founder noticed that international students — particularly in STEM,
                business, and technology disciplines — needed guidance that combined academic
                rigor with genuine industry expertise. Writing a literature review is different
                from writing one that reflects how practitioners actually solve problems. Data
                analysis is different when you understand the business context behind the numbers.
              </p>
              <p className="text-slate-500 leading-relaxed">
                We built Academic Experts Hub to close that gap. Every consultant on our team
                brings professional experience alongside academic knowledge. The result is
                support that is both theoretically grounded and practically relevant.
              </p>
            </div>

            <div className="space-y-5">
              <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200">
                <h3 className="font-heading font-semibold text-slate-900 text-lg mb-3">
                  Why International Students Choose Us
                </h3>
                <ul className="space-y-3">
                  {[
                    "We understand the pressure of studying in a second language and adapt accordingly",
                    "Our team has supported students from UK, US, Canada, Australia, UAE, and 25+ other countries",
                    "We are familiar with the requirements of major international institutions",
                    "Every project is handled with strict confidentiality",
                    "WhatsApp communication makes access simple and barrier-free",
                    "Fast response times that respect urgent academic deadlines",
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                      <span className="text-slate-600 text-sm">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="p-6 rounded-2xl bg-gradient-to-br from-indigo-50 to-purple-50 border border-indigo-100">
                <div className="flex items-center gap-3 mb-3">
                  <Users className="w-5 h-5 text-indigo-600" />
                  <h3 className="font-heading font-semibold text-slate-900">
                    Communication Policy
                  </h3>
                </div>
                <p className="text-slate-600 text-sm leading-relaxed">
                  We operate exclusively via WhatsApp. This deliberate choice keeps
                  communication direct, fast, and accessible from anywhere in the world —
                  no scheduling Zoom calls, no email queues, no delays. Reach us at any hour
                  and get a personal response from our team.
                </p>
                <a
                  href="https://wa.me/8801570205739"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 mt-4 text-indigo-600 font-semibold text-sm"
                >
                  +880 1879 388 418
                  <ArrowRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-14">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-indigo-50 border border-indigo-100 mb-4">
              <span className="text-indigo-600 text-sm font-semibold">What Drives Us</span>
            </div>
            <h2 className="font-heading text-3xl md:text-5xl font-bold text-slate-900">
              Our Core Values
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value) => {
              const Icon = value.icon;
              return (
                <div
                  key={value.title}
                  className="p-7 rounded-2xl bg-white border border-slate-200 hover:border-indigo-200 hover:shadow-lg transition-all duration-300"
                >
                  <div
                    className={`w-11 h-11 rounded-xl ${value.bg} flex items-center justify-center mb-4`}
                  >
                    <Icon className={`w-5 h-5 ${value.color}`} />
                  </div>
                  <h3 className="font-heading font-bold text-slate-900 text-lg mb-2">
                    {value.title}
                  </h3>
                  <p className="text-slate-500 text-sm leading-relaxed">{value.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative py-20 px-4 overflow-hidden bg-gradient-to-br from-slate-900 via-indigo-950 to-purple-950">
        <div className="relative max-w-2xl mx-auto text-center">
          <h2 className="font-heading text-3xl md:text-5xl font-bold text-white mb-5">
            Work With Us
          </h2>
          <p className="text-slate-300 text-lg mb-8">
            Join hundreds of international students who have trusted Academic Experts Hub
            with their most important academic work.
          </p>
          <a
            href={buildWhatsAppUrl(
              "Hi, I've read about Academic Experts Hub and would like to discuss my academic project."
            )}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-gradient-to-r from-indigo-500 to-purple-600 text-white font-semibold text-lg hover:opacity-90 transition-opacity shadow-glow"
          >
            <MessageCircle className="w-5 h-5" />
            Book Free Consultation
          </a>
        </div>
      </section>
    </>
  );
}
