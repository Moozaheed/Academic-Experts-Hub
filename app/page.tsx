import type { Metadata } from "next";
import Hero from "@/components/home/Hero";
import TrustBadges from "@/components/home/TrustBadges";
import Services from "@/components/home/Services";
import Stats from "@/components/home/Stats";
import Testimonials from "@/components/home/Testimonials";
import BlogPreview from "@/components/home/BlogPreview";
import CTASection from "@/components/home/CTASection";
import ContactForm from "@/components/home/ContactForm";

export const metadata: Metadata = {
  title: "Thesis & Dissertation Help for International Students | Academic Experts Hub",
  description:
    "Get expert thesis writing, dissertation help, research methodology, and data analysis support — delivered by professionals with real engineering & consulting experience. Worldwide, WhatsApp-fast.",
};

export default function HomePage() {
  return (
    <>
      <Hero />
      <TrustBadges />
      <Services />
      <Stats />
      <Testimonials />
      <BlogPreview />
      <CTASection />
      <ContactForm />
    </>
  );
}
