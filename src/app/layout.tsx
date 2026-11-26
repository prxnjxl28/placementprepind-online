
import type { Metadata, Viewport } from "next";
import Script from "next/script";
import "./globals.css";

import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { JsonLd } from "@/components/JsonLd";

import {
  SITE_CONFIG,
  getSiteJsonLd,
} from "@/lib/site";

const gscVerification = process.env.NEXT_PUBLIC_GSC_VERIFICATION;
const gaId = process.env.NEXT_PUBLIC_GA_ID;

export const viewport: Viewport = {
  themeColor: "#0D7A5F",
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL(SITE_CONFIG.url),

  title: {
    default:
      "PlacementPrep India — Free Voice AI Mock Interviews | Powered by AcePrep",
    template: "%s",
  },

  description: SITE_CONFIG.description,
  keywords: [...SITE_CONFIG.keywords],

  authors: [
    {
      name: "AcePrep Capstone Team (Arshit Anand, Pranjal Kumar, Sumit Yadav)",
    },
  ],

  creator: "PlacementPrep India (Powered by AcePrep)",
  publisher: "PlacementPrep India",

  icons: {
    icon: [{ url: "/icon.svg", type: "image/svg+xml" }],
    shortcut: "/icon.svg",
  },

  ...(gscVerification
    ? {
        verification: {
          google: gscVerification,
        },
      }
    : {}),

  openGraph: {
    type: "website",
    locale: SITE_CONFIG.locale,
    url: SITE_CONFIG.url,
    siteName: SITE_CONFIG.fullBrand,
    title:
      "PlacementPrep India — Free Voice AI Mock Interviews | Powered by AcePrep",
    description: SITE_CONFIG.description,
    images: [
      {
        url: "/og-image.svg",
        width: 1200,
        height: 630,
        alt: "PlacementPrep India — Voice-Based AI Mock Interview Platform powered by AcePrep",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title:
      "PlacementPrep India — Free Voice AI Mock Interviews | Powered by AcePrep",
    description: SITE_CONFIG.description,
    images: ["/og-image.svg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en-IN">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />

        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />

        <link
          href="https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@400;500;600&family=Plus+Jakarta+Sans:wght@400;500;600;700;800&display=swap"
          rel="stylesheet"
        />

        <JsonLd data={getSiteJsonLd()} />
      </head>

      <body className="min-h-screen bg-canvas font-sans text-ink antialiased">
        <a href="#main-content" className="skip-link">
          Skip to main content
        </a>

        <Navbar />

        <main id="main-content">{children}</main>

        <Footer />

        {gaId && (
          <>
            <Script
              src={`https://www.googletagmanager.com/gtag/js?id=${gaId}`}
              strategy="afterInteractive"
            />

            <Script id="ga4-init" strategy="afterInteractive">
              {`window.dataLayer = window.dataLayer || []; function gtag(){dataLayer.push(arguments);} gtag('js', new Date()); gtag('config', '${gaId}');`}
            </Script>
          </>
        )}
      </body>
    </html>
  );
}
