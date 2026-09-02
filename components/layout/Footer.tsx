import Link from "next/link";
import { MessageCircle, MapPin } from "lucide-react";
import Logo from "@/components/layout/Logo";

const serviceLinks = [
  { label: "Academic Tutoring & Coaching", href: "/services" },
  { label: "Thesis & Dissertation Consulting", href: "/services#thesis" },
  { label: "Research Methodology", href: "/services#methodology" },
  { label: "Data Analysis & Statistics", href: "/services#data-analysis" },
  { label: "Literature Review Mentoring", href: "/services#literature" },
  { label: "Software Engineering Research & Project Mentoring", href: "/services#software" },
];

const quickLinks = [
  { label: "About Us", href: "/about" },
  { label: "Our Services", href: "/services" },
  { label: "Blog", href: "/blog" },
  { label: "Contact", href: "/contact" },
];

const countryLinks = [
  { label: "Academic Tutoring Australia", href: "/academic-tutoring-australia" },
  { label: "Academic Tutoring USA", href: "/academic-tutoring-usa" },
  { label: "Academic Tutoring Canada", href: "/academic-tutoring-canada" },
  { label: "Academic Tutoring UK", href: "/academic-tutoring" },
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
            <div className="mb-4">
              <Logo />
            </div>
            <p className="text-slate-400 text-sm leading-relaxed mb-6">
              Expert academic consulting for international students. From thesis consultation to data analysis, we provide professional-grade guidance that drives academic success.
            </p>
            <div className="flex flex-col gap-3">
              <a
                href="https://wa.me/966597879394"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-sm text-slate-300 hover:text-white transition-colors group"
              >
                <div className="w-8 h-8 rounded-lg bg-green-500/10 border border-green-500/20 flex items-center justify-center group-hover:bg-green-500/20 transition-colors">
                  <MessageCircle className="w-4 h-4 text-green-400" />
                </div>
                <span>+966 59 787 9394</span>
              </a>
              <div className="flex items-center gap-2 text-sm text-slate-400">
                <div className="w-8 h-8 rounded-lg bg-white/5 flex items-center justify-center">
                  <MapPin className="w-4 h-4 text-slate-500" />
                </div>
                <span>Available Worldwide</span>
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
            <h3 className="font-heading font-semibold text-white mt-6 mb-4">Countries We Serve</h3>
            <ul className="flex flex-col gap-2">
              {countryLinks.map((link) => (
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
              href="https://wa.me/966597879394?text=Hi%2C%20I%20need%20academic%20support."
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
        <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-16 py-5 flex items-center justify-center">
          <p className="text-slate-500 text-xs text-center">
            Beautifully crafted with{" "}
            <a
              href="https://www.linkedin.com/company/craftsmenit"
              target="_blank"
              rel="noopener noreferrer"
              className="text-indigo-400 hover:text-indigo-300 transition-colors"
            >
              Craftsmen.it
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
