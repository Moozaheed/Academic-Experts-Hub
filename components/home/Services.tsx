"use client";

import { motion } from "framer-motion";
import {
  BookOpen,
  FlaskConical,
  BarChart3,
  Search,
  FileText,
  Code2,
  Briefcase,
  Award,
  ArrowRight,
} from "lucide-react";
import { buildWhatsAppUrl } from "@/lib/utils";

const services = [
  {
    icon: BookOpen,
    title: "Thesis & Dissertation Writing",
    description:
      "Comprehensive thesis support from proposal through final defense. We cover structure, argumentation, academic style, and examiner-focused presentation.",
    tags: ["Proposal Writing", "Chapter Development", "Defense Preparation"],
    color: "from-blue-500/10 to-indigo-500/5",
    iconBg: "bg-blue-500/10",
    iconColor: "text-blue-500",
    borderColor: "border-blue-500/10",
    href: "/services#thesis",
  },
  {
    icon: FlaskConical,
    title: "Research Methodology",
    description:
      "Expert guidance on quantitative, qualitative, and mixed methods research design. We help you select, justify, and execute your methodology with scholarly rigor.",
    tags: ["Quantitative", "Qualitative", "Mixed Methods"],
    color: "from-purple-500/10 to-violet-500/5",
    iconBg: "bg-purple-500/10",
    iconColor: "text-purple-500",
    borderColor: "border-purple-500/10",
    href: "/services#methodology",
  },
  {
    icon: BarChart3,
    title: "Data Analysis",
    description:
      "Rigorous statistical analysis using SPSS, R, and Python. From descriptive statistics and hypothesis testing to regression models and machine learning.",
    tags: ["SPSS", "R", "Python", "Statistical Analysis"],
    color: "from-cyan-500/10 to-sky-500/5",
    iconBg: "bg-cyan-500/10",
    iconColor: "text-cyan-500",
    borderColor: "border-cyan-500/10",
    href: "/services#data-analysis",
  },
  {
    icon: Search,
    title: "Literature Review",
    description:
      "Comprehensive scholarly literature reviews that identify research gaps, synthesize existing knowledge, and position your work within the academic field.",
    tags: ["Systematic Review", "Thematic Analysis", "Citation Management"],
    color: "from-emerald-500/10 to-teal-500/5",
    iconBg: "bg-emerald-500/10",
    iconColor: "text-emerald-500",
    borderColor: "border-emerald-500/10",
    href: "/services#literature",
  },
  {
    icon: FileText,
    title: "Academic Writing",
    description:
      "Professional essays, reports, case studies, and assignments across all disciplines. Research-backed, properly cited, and delivered to your institution's standards.",
    tags: ["Essays", "Reports", "Case Studies"],
    color: "from-orange-500/10 to-amber-500/5",
    iconBg: "bg-orange-500/10",
    iconColor: "text-orange-500",
    borderColor: "border-orange-500/10",
    href: "/services#academic-writing",
  },
  {
    icon: Code2,
    title: "Software Engineering Projects",
    description:
      "Full-stack web applications, machine learning projects, and AI systems. Complete implementation from architecture to deployment for final year projects.",
    tags: ["Full-Stack", "Machine Learning", "AI Projects"],
    color: "from-indigo-500/10 to-blue-500/5",
    iconBg: "bg-indigo-500/10",
    iconColor: "text-indigo-500",
    borderColor: "border-indigo-500/10",
    href: "/services#software",
  },
  {
    icon: Briefcase,
    title: "Business Studies",
    description:
      "MBA dissertations, marketing analysis, financial modeling, and strategic business case studies. Industry-informed, practically relevant academic work.",
    tags: ["MBA", "Marketing", "Finance"],
    color: "from-rose-500/10 to-pink-500/5",
    iconBg: "bg-rose-500/10",
    iconColor: "text-rose-500",
    borderColor: "border-rose-500/10",
    href: "/services#business",
  },
  {
    icon: Award,
    title: "Research Publication Support",
    description:
      "Guidance on preparing research for journal submission. From manuscript structuring and academic English editing to journal selection and reviewer response.",
    tags: ["Journal Papers", "Academic English", "Peer Review"],
    color: "from-violet-500/10 to-purple-500/5",
    iconBg: "bg-violet-500/10",
    iconColor: "text-violet-500",
    borderColor: "border-violet-500/10",
    href: "/services#publication",
  },
];

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08 } },
};

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] },
  },
};

export default function Services() {
  return (
    <section className="section-padding bg-white">
      <div className="container-custom">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-indigo-50 border border-indigo-100 mb-4">
            <span className="text-indigo-600 text-sm font-semibold">What We Offer</span>
          </div>
          <h2 className="font-heading text-3xl md:text-5xl font-bold text-slate-900 mb-4">
            Comprehensive Academic Support
          </h2>
          <p className="text-slate-500 text-lg max-w-2xl mx-auto leading-relaxed">
            From undergraduate assignments to doctoral dissertations, our expert team delivers
            research-backed, professionally-crafted academic support across all disciplines.
          </p>
        </motion.div>

        {/* Service grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5"
        >
          {services.map((service) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={service.title}
                variants={cardVariants}
                whileHover={{ y: -6, transition: { duration: 0.2 } }}
                className={`group relative p-6 rounded-2xl bg-gradient-to-br ${service.color} border ${service.borderColor} hover:shadow-xl hover:shadow-slate-200/60 transition-all duration-300 cursor-default`}
              >
                <div
                  className={`w-11 h-11 rounded-xl ${service.iconBg} flex items-center justify-center mb-4`}
                >
                  <Icon className={`w-5 h-5 ${service.iconColor}`} />
                </div>

                <h3 className="font-heading font-semibold text-slate-900 text-base mb-2 leading-snug">
                  {service.title}
                </h3>

                <p className="text-slate-600 text-sm leading-relaxed mb-4">
                  {service.description}
                </p>

                <div className="flex flex-wrap gap-1.5 mb-4">
                  {service.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2.5 py-1 rounded-full bg-white/70 text-slate-600 text-xs font-medium border border-slate-200/80"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <a
                  href={buildWhatsAppUrl(`Hi, I need help with: ${service.title}`)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`inline-flex items-center gap-1.5 text-sm font-semibold ${service.iconColor} hover:gap-2.5 transition-all duration-200`}
                >
                  Get Help
                  <ArrowRight className="w-3.5 h-3.5" />
                </a>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-center mt-14"
        >
          <p className="text-slate-500 mb-5">
            Don&apos;t see your specific need listed? We cover all academic disciplines.
          </p>
          <a
            href={buildWhatsAppUrl("Hi, I have a custom academic project I need help with.")}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl bg-gradient-to-r from-indigo-500 to-purple-600 text-white font-semibold hover:opacity-90 transition-opacity shadow-glow"
          >
            Discuss Your Requirements
            <ArrowRight className="w-4 h-4" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
