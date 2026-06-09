import type { Metadata, Viewport } from "next";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import WhatsAppButton from "@/components/layout/WhatsAppButton";

export const metadata: Metadata = {
  title: {
    default: "Academic Experts Hub | Professional Academic Consulting",
    template: "%s | Academic Experts Hub",
  },
  description:
    "Expert academic consulting for international students. Professional help with thesis writing, dissertations, research methodology, data analysis, and software engineering projects.",
  keywords: [
    "academic consulting",
    "thesis writing help",
    "dissertation support",
    "research methodology",
    "data analysis help",
    "academic writing services",
    "PhD support",
    "MBA dissertation",
    "software engineering projects",
    "international students",
  ],
  authors: [{ name: "G. M. Mozahed", url: "https://academicexpertshub.com" }],
  creator: "Academic Experts Hub",
  publisher: "Academic Experts Hub",
  metadataBase: new URL("https://academicexpertshub.com"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://academicexpertshub.com",
    siteName: "Academic Experts Hub",
    title: "Academic Experts Hub | Professional Academic Consulting",
    description:
      "Expert guidance for dissertations, thesis, research projects, and academic assignments — delivered by industry professionals.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Academic Experts Hub",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Academic Experts Hub | Professional Academic Consulting",
    description:
      "Expert guidance for dissertations, thesis, research projects, and academic assignments — delivered by industry professionals.",
    images: ["/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#0F172A",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&family=Outfit:wght@300;400;500;600;700;800;900&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="min-h-screen bg-white text-slate-900 antialiased">
        <Navbar />
        <main>{children}</main>
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  );
}
