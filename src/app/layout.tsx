import type { Metadata, Viewport } from "next";
import "@fontsource-variable/fraunces/index.css";
import "@fontsource-variable/figtree/index.css";
import "./globals.css";
import "./sections.css";
import "./pages.css";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { ogImage, site } from "@/lib/site";

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: "Zivoo — Big questions. Little conversations.",
    template: "%s · Zivoo",
  },
  description: site.description,
  applicationName: "Zivoo",
  authors: [{ name: site.company }],
  openGraph: {
    type: "website",
    siteName: "Zivoo",
    title: "Zivoo — Big questions. Little conversations.",
    description: site.description,
    images: [ogImage],
    locale: "en_GB",
  },
  twitter: {
    card: "summary_large_image",
    title: "Zivoo — Big questions. Little conversations.",
    description: site.description,
    images: [ogImage.url],
  },
};

export const viewport: Viewport = {
  themeColor: "#FFF8EE",
  width: "device-width",
  initialScale: 1,
};

const orgJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: site.company,
  url: site.url,
  logo: `${site.url}/images/zivoo-logo-dark.png`,
  ...(site.contactEmail ? { email: site.contactEmail } : {}),
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en-GB" data-scroll-behavior="smooth">
      <body>
        <a href="#main" className="skip-link">
          Skip to content
        </a>
        <Header />
        <main id="main" tabIndex={-1}>
          {children}
        </main>
        <Footer />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(orgJsonLd) }} />
      </body>
    </html>
  );
}
