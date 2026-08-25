import type { Metadata, Viewport } from "next";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import WhatsAppButton from "@/components/layout/WhatsAppButton";
import { SITE_NAME, SITE_URL, organizationJsonLd, webSiteJsonLd, aggregateRatingJsonLd } from "@/lib/seo";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";

export const metadata: Metadata = {
  title: {
    default: "Academic Experts Hub | Professional Academic Consulting",
    template: "%s | Academic Experts Hub",
  },
  description:
    "Expert academic consulting for international students. Professional help with thesis writing, dissertation help, research methodology, data analysis, literature reviews, and software engineering projects.",
  keywords: [
    "assignment help",
    "online assignment help",
    "thesis writing help",
    "dissertation help",
    "do my assignment",
    "university assignment help",
    "coursework help",
    "essay writing help",
    "research methodology help",
    "data analysis help for students",
    "literature review writing service",
    "PhD dissertation help",
    "MBA dissertation help",
    "assignment help for international students",
    "software engineering project help",
    "academic consulting",
  ],
  authors: [{ name: "G. M. Mozahed", url: SITE_URL }],
  creator: SITE_NAME,
  publisher: SITE_NAME,
  metadataBase: new URL(SITE_URL),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: SITE_URL,
    siteName: SITE_NAME,
    title: "Academic Experts Hub | Professional Academic Consulting",
    description:
      "Expert guidance for dissertations, thesis, research projects, and academic assignments — delivered by industry professionals.",
    images: [
      {
        url: `${SITE_URL}/opengraph-image`,
        width: 1200,
        height: 630,
        alt: "Academic Experts Hub — Professional Academic Consulting",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Academic Experts Hub | Professional Academic Consulting",
    description:
      "Expert guidance for dissertations, thesis, research projects, and academic assignments — delivered by industry professionals.",
    images: [`${SITE_URL}/opengraph-image`],
  },
  verification: {
    google: "baRVOLiPV4thExBm3LCJVHB3JGhU2n9_e5JFk9z6L20",
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
    <html lang="en" className="scroll-smooth" suppressHydrationWarning>
      <head>
        {/* Google tag (gtag.js) */}
        <script
          async
          src="https://www.googletagmanager.com/gtag/js?id=AW-18396048869"
        />
        <script
          dangerouslySetInnerHTML={{
            __html: `window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'AW-18396048869');`,
          }}
        />
        {/* Google Tag Manager */}
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);})(window,document,'script','dataLayer','GTM-N9TR2NCD');`,
          }}
        />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&family=Outfit:wght@300;400;500;600;700;800;900&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="min-h-screen bg-white text-slate-900 antialiased" suppressHydrationWarning>
        {/* Google Tag Manager (noscript) */}
        <noscript
          dangerouslySetInnerHTML={{
            __html: `<iframe src="https://www.googletagmanager.com/ns.html?id=GTM-N9TR2NCD" height="0" width="0" style="display:none;visibility:hidden"></iframe>`,
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd()) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(webSiteJsonLd()) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(aggregateRatingJsonLd()) }}
        />
        <Navbar />
        <main>{children}</main>
        <Footer />
        <WhatsAppButton />
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
