"use client";

import { motion } from "framer-motion";
import { ArrowRight, MessageCircle, CheckCircle, Star, Users, Award } from "lucide-react";
import { buildWhatsAppUrl } from "@/lib/utils";

const floatingCards = [
  {
    icon: CheckCircle,
    label: "500+ Students",
    sublabel: "Successfully Guided",
    color: "from-green-500/20 to-emerald-500/10",
    border: "border-green-500/20",
    iconColor: "text-green-400",
    position: "top-20 right-8 md:top-24 md:right-12",
    delay: 0.8,
  },
  {
    icon: Star,
    label: "98% Success Rate",
    sublabel: "Satisfied Students",
    color: "from-yellow-500/20 to-amber-500/10",
    border: "border-yellow-500/20",
    iconColor: "text-yellow-400",
    position: "bottom-28 right-8 md:bottom-32 md:right-12",
    delay: 1.0,
  },
  {
    icon: Award,
    label: "3+ Years",
    sublabel: "Industry Experience",
    color: "from-indigo-500/20 to-purple-500/10",
    border: "border-indigo-500/20",
    iconColor: "text-indigo-400",
    position: "top-40 left-4 md:top-48 md:left-8",
    delay: 1.2,
  },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] },
  },
};

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden mesh-bg">
      {/* Animated gradient background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-indigo-600/20 rounded-full blur-3xl animate-float" />
        <div
          className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-600/20 rounded-full blur-3xl animate-float"
          style={{ animationDelay: "3s" }}
        />
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-indigo-900/10 rounded-full blur-3xl"
        />
        {/* Grid overlay */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.8) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.8) 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />
      </div>

      {/* Floating cards */}
      {floatingCards.map((card) => {
        const Icon = card.icon;
        return (
          <motion.div
            key={card.label}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: card.delay, duration: 0.5 }}
            className={`absolute ${card.position} hidden lg:flex items-center gap-3 px-4 py-3 rounded-2xl bg-gradient-to-br ${card.color} backdrop-blur-xl border ${card.border} shadow-glass z-10`}
          >
            <div
              className={`w-9 h-9 rounded-xl bg-white/10 flex items-center justify-center flex-shrink-0`}
            >
              <Icon className={`w-5 h-5 ${card.iconColor}`} />
            </div>
            <div>
              <p className="text-white font-semibold text-sm leading-tight">{card.label}</p>
              <p className="text-slate-400 text-xs">{card.sublabel}</p>
            </div>
          </motion.div>
        );
      })}

      {/* Main content */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="relative z-10 max-w-4xl mx-auto px-4 text-center pt-28 pb-20"
      >
        {/* Badge */}
        <motion.div variants={itemVariants} className="inline-flex items-center gap-2 mb-6">
          <div className="flex items-center gap-2 px-4 py-1.5 rounded-full bg-indigo-500/10 border border-indigo-500/20 backdrop-blur-sm">
            <div className="w-1.5 h-1.5 rounded-full bg-indigo-400 animate-pulse" />
            <span className="text-indigo-300 text-sm font-medium">
              Professional Academic Consulting
            </span>
          </div>
        </motion.div>

        {/* Headline */}
        <motion.h1
          variants={itemVariants}
          className="font-heading text-4xl md:text-6xl lg:text-7xl font-bold text-white leading-tight mb-6"
        >
          Academic Excellence,
          <br />
          <span className="gradient-text">Professionally Delivered</span>
        </motion.h1>

        {/* Sub headline */}
        <motion.p
          variants={itemVariants}
          className="text-slate-300 text-lg md:text-xl leading-relaxed max-w-2xl mx-auto mb-10"
        >
          Expert guidance for dissertations, thesis, research projects, and academic assignments
          — delivered by industry professionals with real-world engineering and consulting
          experience.
        </motion.p>

        {/* CTAs */}
        <motion.div
          variants={itemVariants}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <a
            href={buildWhatsAppUrl(
              "Hi, I'd like to book a free consultation for academic support."
            )}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-7 py-3.5 rounded-xl bg-gradient-to-r from-indigo-500 to-purple-600 text-white font-semibold hover:opacity-90 transition-all duration-200 shadow-glow hover:shadow-glow-lg group"
          >
            Book Free Consultation
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </a>
          <a
            href="https://wa.me/8801570205739"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-7 py-3.5 rounded-xl border border-white/20 text-white font-semibold hover:bg-white/5 transition-all duration-200 backdrop-blur-sm"
          >
            <MessageCircle className="w-4 h-4 text-green-400" />
            Chat on WhatsApp
          </a>
        </motion.div>

        {/* Trust row */}
        <motion.div
          variants={itemVariants}
          className="mt-12 flex flex-wrap items-center justify-center gap-x-8 gap-y-4"
        >
          {[
            { icon: Users, text: "500+ Students Helped" },
            { icon: Star, text: "98% Success Rate" },
            { icon: CheckCircle, text: "Plagiarism-Free Guarantee" },
          ].map((item) => {
            const Icon = item.icon;
            return (
              <div key={item.text} className="flex items-center gap-2 text-slate-400 text-sm">
                <Icon className="w-4 h-4 text-indigo-400" />
                <span>{item.text}</span>
              </div>
            );
          })}
        </motion.div>
      </motion.div>
    </section>
  );
}
