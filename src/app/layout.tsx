import type { Metadata, Viewport } from "next";
import { figtree, fraunces } from "./fonts";
import "./globals.css";
import "./sections.css";
import "./pages.css";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { JsonLd } from "@/components/JsonLd";
import { founderLd, ldGraph, organizationLd, websiteLd } from "@/lib/seo";
import { ogImage, site } from "@/lib/site";

const defaultTitle = "Zivoo | Screen-free learning toy for children";

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: { default: defaultTitle, template: "%s · Zivoo" },
  description: site.description,
  applicationName: "Zivoo",
  authors: [{ name: site.company, url: site.url }],
  creator: site.company,
  publisher: site.company,
  category: "Education",
  alternates: {
    types: { "application/rss+xml": [{ url: "/feed.xml", title: "Zivoo: guides for parents" }] },
  },
  formatDetection: { telephone: false, address: false, email: false },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1, "max-video-preview": -1 },
  },
  openGraph: {
    type: "website",
    siteName: "Zivoo",
    title: defaultTitle,
    description: site.description,
    images: [ogImage],
    locale: "en_GB",
  },
  twitter: {
    card: "summary_large_image",
    title: defaultTitle,
    description: site.description,
    images: [ogImage.url],
  },
  ...(process.env.GOOGLE_SITE_VERIFICATION || process.env.BING_SITE_VERIFICATION
    ? {
        verification: {
          ...(process.env.GOOGLE_SITE_VERIFICATION ? { google: process.env.GOOGLE_SITE_VERIFICATION } : {}),
          ...(process.env.BING_SITE_VERIFICATION ? { other: { "msvalidate.01": process.env.BING_SITE_VERIFICATION } } : {}),
        },
      }
    : {}),
};

export const viewport: Viewport = {
  themeColor: "#FFF8EE",
  colorScheme: "light",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en-GB" data-scroll-behavior="smooth" className={`${fraunces.variable} ${figtree.variable}`}>
      <body>
        <a href="#main" className="skip-link">
          Skip to content
        </a>
        <Header />
        <main id="main" tabIndex={-1}>
          {children}
        </main>
        <Footer />
        <JsonLd data={ldGraph(organizationLd, founderLd, websiteLd)} />
      </body>
    </html>
  );
}
