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
  title: "Assignment Help, Thesis & Dissertation Writing",
  description:
    "Expert assignment help, thesis writing, dissertation support, research methodology & data analysis for international students. Fast WhatsApp response. Available worldwide.",
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
