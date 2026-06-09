import Link from "next/link";
import { GraduationCap, MessageCircle, Mail, MapPin, Phone } from "lucide-react";

const serviceLinks = [
  { label: "Thesis & Dissertation Writing", href: "/services#thesis" },
  { label: "Research Methodology", href: "/services#methodology" },
  { label: "Data Analysis", href: "/services#data-analysis" },
  { label: "Literature Review", href: "/services#literature" },
  { label: "Software Engineering Projects", href: "/services#software" },
  { label: "Academic Writing", href: "/services#academic-writing" },
];

const quickLinks = [
  { label: "About Us", href: "/about" },
  { label: "Our Services", href: "/services" },
  { label: "Blog", href: "/blog" },
  { label: "Contact", href: "/contact" },
];

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-950 border-t border-white/5">
      {/* Main footer */}
      <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-16 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand column */}
          <div className="lg:col-span-1">
            <Link href="/" className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center flex-shrink-0">
                <GraduationCap className="w-4 h-4 text-white" />
              </div>
              <span className="font-heading font-bold text-lg text-white">
                Academic <span className="gradient-text">Experts</span> Hub
              </span>
            </Link>
            <p className="text-slate-400 text-sm leading-relaxed mb-6">
              Expert academic guidance for international students. From thesis writing to data analysis, we deliver professional-grade support that drives academic success.
            </p>
            <div className="flex flex-col gap-3">
              <a
                href="https://wa.me/8801879388418"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-sm text-slate-300 hover:text-white transition-colors group"
              >
                <div className="w-8 h-8 rounded-lg bg-green-500/10 border border-green-500/20 flex items-center justify-center group-hover:bg-green-500/20 transition-colors">
                  <MessageCircle className="w-4 h-4 text-green-400" />
                </div>
                <span>+880 1879 388 418</span>
              </a>
              <div className="flex items-center gap-2 text-sm text-slate-400">
                <div className="w-8 h-8 rounded-lg bg-white/5 flex items-center justify-center">
                  <MapPin className="w-4 h-4 text-slate-500" />
                </div>
                <span>Bangladesh · Available Worldwide</span>
              </div>
            </div>
          </div>

          {/* Services column */}
          <div>
            <h3 className="font-heading font-semibold text-white mb-4">Our Services</h3>
            <ul className="flex flex-col gap-2">
              {serviceLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-slate-400 hover:text-white transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick links */}
          <div>
            <h3 className="font-heading font-semibold text-white mb-4">Quick Links</h3>
            <ul className="flex flex-col gap-2">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-slate-400 hover:text-white transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact / CTA */}
          <div>
            <h3 className="font-heading font-semibold text-white mb-4">Get Expert Help</h3>
            <p className="text-slate-400 text-sm mb-5 leading-relaxed">
              Ready to achieve academic excellence? Reach out via WhatsApp for a free consultation.
            </p>
            <a
              href="https://wa.me/8801879388418?text=Hi%2C%20I%20need%20academic%20support."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-gradient-to-r from-indigo-500 to-purple-600 text-white text-sm font-semibold hover:opacity-90 transition-opacity"
            >
              <MessageCircle className="w-4 h-4" />
              Chat on WhatsApp
            </a>
            <p className="text-slate-500 text-xs mt-4 leading-relaxed">
              WhatsApp is our primary communication channel. We respond within a few hours.
            </p>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/5">
        <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-16 py-5 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-slate-500 text-xs">
            &copy; {currentYear} Academic Experts Hub. All rights reserved.
          </p>
          <div className="flex items-center gap-4">
            <span className="text-slate-600 text-xs">Privacy Policy</span>
            <span className="text-slate-600 text-xs">Terms of Service</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
