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
  title: "Academic Experts Hub | Professional Academic Consulting",
  description:
    "Expert guidance for dissertations, thesis, research projects, and academic assignments — delivered by industry professionals with real-world software engineering and consulting experience.",
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
