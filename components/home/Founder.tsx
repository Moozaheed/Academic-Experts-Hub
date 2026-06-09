"use client";

import { motion } from "framer-motion";
import {
  Code2,
  BrainCircuit,
  GraduationCap,
  Microscope,
  Building2,
  CheckCircle,
  MessageCircle,
} from "lucide-react";
import { buildWhatsAppUrl } from "@/lib/utils";

const expertiseTags = [
  { icon: Code2, label: "Full-Stack Development" },
  { icon: BrainCircuit, label: "Machine Learning" },
  { icon: GraduationCap, label: "Thesis Mentoring" },
  { icon: Microscope, label: "Research Guidance" },
  { icon: Building2, label: "Enterprise Software" },
];

const founderBadges = [
  "Software Engineer",
  "3+ Years Experience",
  "AI & ML Expert",
  "Academic Consultant",
];

const achievements = [
  "Delivered enterprise software solutions for professional clients",
  "Mentored students across UK, USA, UAE, Canada, and Australia",
  "Expert in React, Next.js, Python, ML, and data engineering",
  "Published research guidance across multiple academic disciplines",
];

export default function Founder() {
  return (
    <section className="section-padding bg-white">
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left: content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-indigo-50 border border-indigo-100 mb-6">
              <span className="text-indigo-600 text-sm font-semibold">Our Leadership</span>
            </div>

            <h2 className="font-heading text-3xl md:text-5xl font-bold text-slate-900 mb-6 leading-tight">
              Built by{" "}
              <span className="gradient-text">Industry</span>{" "}
              Professionals
            </h2>

            <p className="text-slate-600 text-lg leading-relaxed mb-6">
              Academic Experts Hub is led by a Software Engineer with more than 3 years of
              professional experience delivering technology solutions and supporting students
              across various academic disciplines. Every service we offer is grounded in
              real industry expertise — not theoretical knowledge alone.
            </p>

            <p className="text-slate-500 leading-relaxed mb-8">
              Unlike conventional tutoring services, our approach integrates professional
              engineering practices into academic support: structured problem-solving, systematic
              research, evidence-based analysis, and clear technical communication.
            </p>

            <div className="space-y-3 mb-8">
              {achievements.map((item) => (
                <div key={item} className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                  <span className="text-slate-600 text-sm">{item}</span>
                </div>
              ))}
            </div>

            <a
              href={buildWhatsAppUrl("Hi G. M. Mozahed, I'd like to discuss my academic project with you.")}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-indigo-500 to-purple-600 text-white font-semibold hover:opacity-90 transition-opacity shadow-glow"
            >
              <MessageCircle className="w-4 h-4" />
              Chat Directly on WhatsApp
            </a>
          </motion.div>

          {/* Right: founder card */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="flex justify-center lg:justify-end"
          >
            <div className="relative w-full max-w-sm">
              {/* Glow */}
              <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/20 to-purple-600/20 rounded-3xl blur-2xl" />

              {/* Card */}
              <div className="relative bg-white rounded-3xl border border-slate-200 shadow-xl overflow-hidden">
                {/* Header strip */}
                <div className="h-24 bg-gradient-to-br from-slate-900 via-indigo-950 to-purple-950 relative overflow-hidden">
                  <div className="absolute inset-0 opacity-30"
                    style={{
                      backgroundImage:
                        "radial-gradient(circle at 20% 50%, rgba(99,102,241,0.5) 0, transparent 50%), radial-gradient(circle at 80% 20%, rgba(139,92,246,0.5) 0, transparent 50%)",
                    }}
                  />
                </div>

                {/* Avatar */}
                <div className="flex justify-center -mt-12 px-8">
                  <div className="w-24 h-24 rounded-2xl bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center border-4 border-white shadow-lg">
                    <span className="font-heading text-3xl font-bold text-white select-none">SA</span>
                  </div>
                </div>

                {/* Info */}
                <div className="px-8 pb-8 pt-4 text-center">
                  <h3 className="font-heading text-xl font-bold text-slate-900 mb-1">
                    G. M. Mozahed
                  </h3>
                  <p className="text-indigo-600 font-medium text-sm mb-4">
                    Founder &amp; Lead Consultant
                  </p>

                  {/* Badges */}
                  <div className="flex flex-wrap justify-center gap-2 mb-6">
                    {founderBadges.map((badge) => (
                      <span
                        key={badge}
                        className="px-3 py-1 rounded-full bg-slate-100 text-slate-600 text-xs font-medium"
                      >
                        {badge}
                      </span>
                    ))}
                  </div>

                  {/* Expertise */}
                  <div className="space-y-2.5">
                    <p className="text-slate-500 text-xs font-semibold uppercase tracking-wider mb-3">
                      Areas of Expertise
                    </p>
                    {expertiseTags.map((item) => {
                      const Icon = item.icon;
                      return (
                        <div
                          key={item.label}
                          className="flex items-center gap-3 px-4 py-2.5 rounded-xl bg-slate-50 border border-slate-100"
                        >
                          <Icon className="w-4 h-4 text-indigo-500 flex-shrink-0" />
                          <span className="text-slate-700 text-sm font-medium">{item.label}</span>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
