"use client";

import { motion } from "framer-motion";
import { ArrowRight, MessageCircle } from "lucide-react";
import { buildWhatsAppUrl } from "@/lib/utils";

export default function CTASection() {
  return (
    <section className="relative py-24 px-4 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-indigo-950 to-purple-950" />
      <div className="absolute inset-0 opacity-20"
        style={{
          backgroundImage:
            "radial-gradient(circle at 20% 50%, rgba(99,102,241,0.5) 0, transparent 50%), radial-gradient(circle at 80% 20%, rgba(139,92,246,0.5) 0, transparent 50%), radial-gradient(circle at 50% 100%, rgba(99,102,241,0.3) 0, transparent 40%)",
        }}
      />
      {/* Grid */}
      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,1) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      {/* Content */}
      <div className="relative z-10 max-w-3xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 border border-white/20 backdrop-blur-sm mb-6">
            <div className="w-1.5 h-1.5 rounded-full bg-indigo-400 animate-pulse" />
            <span className="text-white/80 text-sm font-medium">Free Initial Consultation</span>
          </div>

          <h2 className="font-heading text-4xl md:text-6xl font-bold text-white mb-5 leading-tight">
            Ready to Excel{" "}
            <span className="gradient-text-light">Academically?</span>
          </h2>

          <p className="text-slate-300 text-xl leading-relaxed mb-10 max-w-2xl mx-auto">
            Book your free consultation today and get expert guidance for your academic success.
            Our team responds within hours on WhatsApp.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href={buildWhatsAppUrl(
                "Hi, I'd like to book a free consultation for academic support."
              )}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-8 py-4 rounded-xl bg-gradient-to-r from-indigo-500 to-purple-600 text-white font-semibold text-lg hover:opacity-90 transition-all duration-200 shadow-glow hover:shadow-glow-lg group"
            >
              Book Free Consultation
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>
            <a
              href="https://wa.me/8801879388418"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-8 py-4 rounded-xl border border-white/30 text-white font-semibold text-lg hover:bg-white/10 transition-all duration-200"
            >
              <MessageCircle className="w-5 h-5 text-green-400" />
              Chat on WhatsApp
            </a>
          </div>

          <p className="text-slate-400 text-sm mt-8">
            WhatsApp only &mdash; no Zoom or Meet calls. Fast, direct, and confidential.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
