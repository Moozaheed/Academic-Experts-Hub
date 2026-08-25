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
  title: {
    absolute:
      "Academic Tutoring & Consulting | Thesis & Dissertation Mentoring | Academic Experts Hub",
  },
  description:
    "Professional academic consulting & tutoring for university students. Thesis mentoring, dissertation support, research methodology & data analysis — delivered by professionals. WhatsApp-fast, worldwide.",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Academic Tutoring & Consulting | Academic Experts Hub",
    description:
      "Expert academic tutoring, thesis consultation & dissertation support for international students in Australia, USA, Canada and worldwide. WhatsApp-fast response.",
    images: [{ url: "/opengraph-image", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Academic Tutoring & Consulting | Academic Experts Hub",
    description:
      "Thesis consultation, dissertation mentoring & academic support for students in Australia, USA & Canada. WhatsApp-fast.",
    images: ["/opengraph-image"],
  },
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
