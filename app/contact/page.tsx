import type { Metadata } from "next";
import {
  MessageCircle,
  Clock,
  Globe,
  ShieldCheck,
  ArrowRight,
  CheckCircle,
} from "lucide-react";
import ContactForm from "@/components/home/ContactForm";
import { buildWhatsAppUrl } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Contact | Academic Experts Hub",
  description:
    "Get in touch with Academic Experts Hub for academic consulting, thesis help, research support, and software engineering projects. Contact us via WhatsApp for a fast response.",
};

const contactFaqs = [
  {
    q: "How quickly do you respond?",
    a: "We respond to WhatsApp messages within a few hours, typically faster. Urgent requests are flagged and prioritized.",
  },
  {
    q: "Do you offer a free consultation?",
    a: "Yes. Your first consultation is completely free. We discuss your requirements, assess the scope, and provide a transparent quote before any commitment.",
  },
  {
    q: "How is payment handled?",
    a: "Payment terms are discussed during the consultation. We offer flexible arrangements including milestone-based payments for larger projects.",
  },
  {
    q: "Can you work to very tight deadlines?",
    a: "We regularly work with urgent deadlines. Please message us via WhatsApp immediately for urgent requests so we can assess availability.",
  },
  {
    q: "Is my project kept confidential?",
    a: "Absolutely. All client projects are handled with complete confidentiality. We do not share, publish, or reference client work without explicit permission.",
  },
  {
    q: "Do you work with students from all countries?",
    a: "Yes. We have supported students from 30+ countries including UK, USA, Canada, Australia, UAE, India, Saudi Arabia, and many more.",
  },
];

export default function ContactPage() {
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
        <div className="relative max-w-3xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 border border-white/20 mb-6">
            <span className="text-white/80 text-sm font-medium">Get in Touch</span>
          </div>
          <h1 className="font-heading text-4xl md:text-6xl font-bold text-white mb-5">
            Let&apos;s Talk About{" "}
            <span className="gradient-text">Your Project</span>
          </h1>
          <p className="text-slate-300 text-xl leading-relaxed">
            Reach out via WhatsApp or use the form below. We respond quickly and our initial
            consultation is always free.
          </p>
        </div>
      </section>

      {/* Contact info cards */}
      <section className="py-14 px-4 bg-white">
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-16">
            <div className="p-6 rounded-2xl bg-green-50 border border-green-100 text-center">
              <div className="w-12 h-12 rounded-xl bg-green-100 flex items-center justify-center mx-auto mb-4">
                <MessageCircle className="w-6 h-6 text-green-600" />
              </div>
              <h3 className="font-heading font-semibold text-slate-900 mb-2">WhatsApp</h3>
              <p className="text-slate-500 text-sm mb-3">
                Primary and preferred contact channel
              </p>
              <a
                href="https://wa.me/8801570205739"
                target="_blank"
                rel="noopener noreferrer"
                className="text-green-600 font-semibold text-sm hover:underline"
              >
                +880 1570 205 739
              </a>
            </div>

            <div className="p-6 rounded-2xl bg-indigo-50 border border-indigo-100 text-center">
              <div className="w-12 h-12 rounded-xl bg-indigo-100 flex items-center justify-center mx-auto mb-4">
                <Clock className="w-6 h-6 text-indigo-600" />
              </div>
              <h3 className="font-heading font-semibold text-slate-900 mb-2">Response Time</h3>
              <p className="text-slate-500 text-sm mb-3">
                Typical response within a few hours
              </p>
              <span className="text-indigo-600 font-semibold text-sm">24/7 Availability</span>
            </div>

            <div className="p-6 rounded-2xl bg-purple-50 border border-purple-100 text-center">
              <div className="w-12 h-12 rounded-xl bg-purple-100 flex items-center justify-center mx-auto mb-4">
                <Globe className="w-6 h-6 text-purple-600" />
              </div>
              <h3 className="font-heading font-semibold text-slate-900 mb-2">Serving</h3>
              <p className="text-slate-500 text-sm mb-3">Students from around the world</p>
              <span className="text-purple-600 font-semibold text-sm">30+ Countries</span>
            </div>
          </div>

          {/* WhatsApp CTA */}
          <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-slate-900 to-indigo-950 p-8 md:p-12 mb-16">
            <div
              className="absolute inset-0 opacity-20"
              style={{
                backgroundImage:
                  "radial-gradient(circle at 80% 50%, rgba(99,102,241,0.8) 0, transparent 50%)",
              }}
            />
            <div className="relative grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <div>
                <h2 className="font-heading text-2xl md:text-3xl font-bold text-white mb-4">
                  WhatsApp is Our Primary Channel
                </h2>
                <p className="text-slate-300 leading-relaxed mb-6">
                  We deliberately operate via WhatsApp — it&apos;s faster, more personal, and
                  accessible from anywhere in the world. No scheduling Zoom calls or waiting for
                  email replies. Direct, fast, and always personal.
                </p>
                <a
                  href={buildWhatsAppUrl(
                    "Hi, I'd like to discuss academic support for my project."
                  )}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl bg-green-500 hover:bg-green-400 transition-colors text-white font-semibold"
                >
                  <MessageCircle className="w-5 h-5" />
                  Open WhatsApp
                  <ArrowRight className="w-4 h-4" />
                </a>
              </div>
              <div className="space-y-3">
                {[
                  "No Zoom or Meet calls — WhatsApp only",
                  "Messages received and actioned around the clock",
                  "Secure and private one-to-one communication",
                  "Send documents, drafts, and files directly",
                  "Quick voice messages for complex explanations",
                ].map((item) => (
                  <div key={item} className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0" />
                    <span className="text-slate-300 text-sm">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Form */}
      <ContactForm />

      {/* FAQ */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-indigo-50 border border-indigo-100 mb-4">
              <span className="text-indigo-600 text-sm font-semibold">Common Questions</span>
            </div>
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-slate-900">
              Frequently Asked Questions
            </h2>
          </div>

          <div className="space-y-4">
            {contactFaqs.map((faq) => (
              <div
                key={faq.q}
                className="p-6 rounded-2xl bg-slate-50 border border-slate-200"
              >
                <div className="flex items-start gap-3">
                  <ShieldCheck className="w-5 h-5 text-indigo-500 flex-shrink-0 mt-0.5" />
                  <div>
                    <h3 className="font-semibold text-slate-900 mb-2">{faq.q}</h3>
                    <p className="text-slate-500 text-sm leading-relaxed">{faq.a}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
