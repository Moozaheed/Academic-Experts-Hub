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
      "Assignment Help Australia, USA & Canada | Thesis & Dissertation Writing | Academic Experts Hub",
  },
  description:
    "Expert assignment help for students in Australia, USA & Canada. Thesis writing, dissertation support, research methodology & data analysis — delivered by professionals. WhatsApp-fast, worldwide.",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Assignment Help Australia, USA & Canada | Academic Experts Hub",
    description:
      "Expert assignment help, thesis writing & dissertation support for international students in Australia, USA, Canada and worldwide. WhatsApp-fast response.",
    images: [{ url: "/opengraph-image", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Assignment Help Australia, USA & Canada | Academic Experts Hub",
    description:
      "Thesis writing, dissertation help & assignment support for students in Australia, USA & Canada. WhatsApp-fast.",
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
