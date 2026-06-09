"use client";

import { useState, type FormEvent } from "react";
import { motion } from "framer-motion";
import { Send, CheckCircle, MessageCircle } from "lucide-react";
import { cn, buildWhatsAppUrl } from "@/lib/utils";

type ServiceType =
  | ""
  | "thesis"
  | "methodology"
  | "data-analysis"
  | "literature"
  | "academic-writing"
  | "software"
  | "business"
  | "publication"
  | "other";

interface FormState {
  name: string;
  email: string;
  whatsapp: string;
  service: ServiceType;
  message: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  service?: string;
  message?: string;
}

const serviceLabels: Record<string, string> = {
  thesis: "Thesis & Dissertation Writing",
  methodology: "Research Methodology",
  "data-analysis": "Data Analysis (SPSS, R, Python)",
  literature: "Literature Review",
  "academic-writing": "Academic Writing",
  software: "Software Engineering Projects",
  business: "Business Studies",
  publication: "Research Publication Support",
  other: "Other / Not Sure",
};

function validate(form: FormState): FormErrors {
  const errors: FormErrors = {};
  if (!form.name.trim()) errors.name = "Please enter your name.";
  if (!form.email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email))
    errors.email = "Please enter a valid email address.";
  if (!form.service) errors.service = "Please select a service.";
  if (!form.message.trim() || form.message.trim().length < 20)
    errors.message = "Please describe your needs (at least 20 characters).";
  return errors;
}

export default function ContactForm() {
  const [form, setForm] = useState<FormState>({
    name: "",
    email: "",
    whatsapp: "",
    service: "",
    message: "",
  });
  const [errors, setErrors] = useState<FormErrors>({});
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    if (errors[name as keyof FormErrors]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    const newErrors = validate(form);
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    const serviceName = serviceLabels[form.service] || form.service;
    const message = `Hi, I found Academic Experts Hub and need academic support.

Name: ${form.name}
Email: ${form.email}${form.whatsapp ? `\nWhatsApp: ${form.whatsapp}` : ""}
Service Needed: ${serviceName}

Message:
${form.message}`;

    window.open(buildWhatsAppUrl(message), "_blank", "noopener,noreferrer");
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="max-w-xl mx-auto text-center py-16 px-4">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.4 }}
        >
          <div className="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center mx-auto mb-5">
            <CheckCircle className="w-8 h-8 text-green-600" />
          </div>
          <h3 className="font-heading text-2xl font-bold text-slate-900 mb-3">
            Opening WhatsApp
          </h3>
          <p className="text-slate-500 mb-6">
            Your inquiry has been prepared. Complete your message on WhatsApp and we&apos;ll
            respond within a few hours.
          </p>
          <button
            onClick={() => setSubmitted(false)}
            className="text-indigo-600 font-medium hover:underline text-sm"
          >
            Submit another inquiry
          </button>
        </motion.div>
      </div>
    );
  }

  return (
    <section className="section-padding bg-slate-50">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-indigo-50 border border-indigo-100 mb-4">
            <span className="text-indigo-600 text-sm font-semibold">Quick Inquiry</span>
          </div>
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-slate-900 mb-4">
            Tell Us What You Need
          </h2>
          <p className="text-slate-500 text-lg max-w-xl mx-auto">
            Fill out the form and we&apos;ll direct your inquiry to WhatsApp for a faster, more
            personal response.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="max-w-2xl mx-auto"
        >
          <div className="bg-white rounded-3xl border border-slate-200 shadow-sm p-8 md:p-10">
            <form onSubmit={handleSubmit} className="space-y-6" noValidate>
              {/* Name + Email */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-semibold text-slate-700 mb-1.5"
                  >
                    Full Name <span className="text-rose-500">*</span>
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    placeholder="Your full name"
                    className={cn(
                      "w-full px-4 py-3 rounded-xl border bg-white text-slate-900 placeholder-slate-400 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500/30 transition-all duration-200",
                      errors.name ? "border-rose-400 bg-rose-50/30" : "border-slate-200 hover:border-slate-300 focus:border-indigo-400"
                    )}
                  />
                  {errors.name && (
                    <p className="mt-1.5 text-xs text-rose-600">{errors.name}</p>
                  )}
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-semibold text-slate-700 mb-1.5"
                  >
                    Email Address <span className="text-rose-500">*</span>
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                    placeholder="you@university.edu"
                    className={cn(
                      "w-full px-4 py-3 rounded-xl border bg-white text-slate-900 placeholder-slate-400 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500/30 transition-all duration-200",
                      errors.email ? "border-rose-400 bg-rose-50/30" : "border-slate-200 hover:border-slate-300 focus:border-indigo-400"
                    )}
                  />
                  {errors.email && (
                    <p className="mt-1.5 text-xs text-rose-600">{errors.email}</p>
                  )}
                </div>
              </div>

              {/* WhatsApp + Service */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label
                    htmlFor="whatsapp"
                    className="block text-sm font-semibold text-slate-700 mb-1.5"
                  >
                    WhatsApp Number
                    <span className="text-slate-400 font-normal ml-1">(optional)</span>
                  </label>
                  <input
                    type="tel"
                    id="whatsapp"
                    name="whatsapp"
                    value={form.whatsapp}
                    onChange={handleChange}
                    placeholder="+1 234 567 8900"
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 hover:border-slate-300 focus:border-indigo-400 bg-white text-slate-900 placeholder-slate-400 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500/30 transition-all duration-200"
                  />
                </div>

                <div>
                  <label
                    htmlFor="service"
                    className="block text-sm font-semibold text-slate-700 mb-1.5"
                  >
                    Service Type <span className="text-rose-500">*</span>
                  </label>
                  <select
                    id="service"
                    name="service"
                    value={form.service}
                    onChange={handleChange}
                    className={cn(
                      "w-full px-4 py-3 rounded-xl border bg-white text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500/30 transition-all duration-200 cursor-pointer",
                      form.service ? "text-slate-900" : "text-slate-400",
                      errors.service ? "border-rose-400 bg-rose-50/30" : "border-slate-200 hover:border-slate-300 focus:border-indigo-400"
                    )}
                  >
                    <option value="" disabled>Select a service</option>
                    {Object.entries(serviceLabels).map(([value, label]) => (
                      <option key={value} value={value}>
                        {label}
                      </option>
                    ))}
                  </select>
                  {errors.service && (
                    <p className="mt-1.5 text-xs text-rose-600">{errors.service}</p>
                  )}
                </div>
              </div>

              {/* Message */}
              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-semibold text-slate-700 mb-1.5"
                >
                  Tell Us About Your Project <span className="text-rose-500">*</span>
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  value={form.message}
                  onChange={handleChange}
                  placeholder="Describe your academic project, subject area, deadline, word count requirements, or any specific instructions..."
                  className={cn(
                    "w-full px-4 py-3 rounded-xl border bg-white text-slate-900 placeholder-slate-400 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500/30 transition-all duration-200 resize-none",
                    errors.message ? "border-rose-400 bg-rose-50/30" : "border-slate-200 hover:border-slate-300 focus:border-indigo-400"
                  )}
                />
                {errors.message && (
                  <p className="mt-1.5 text-xs text-rose-600">{errors.message}</p>
                )}
              </div>

              {/* Submit */}
              <button
                type="submit"
                className="w-full flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-gradient-to-r from-indigo-500 to-purple-600 text-white font-semibold hover:opacity-90 transition-opacity shadow-glow group"
              >
                <MessageCircle className="w-4 h-4" />
                Send via WhatsApp
                <Send className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>

              <p className="text-slate-400 text-xs text-center">
                Clicking &ldquo;Send&rdquo; will open WhatsApp with your message pre-filled.
                Your data is not stored on our servers.
              </p>
            </form>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
