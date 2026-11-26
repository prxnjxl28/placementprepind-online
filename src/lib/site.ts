import type { Metadata } from "next";

export const SITE_CONFIG = {
  name: "PlacementPrep India",
  poweredBy: "AcePrep",
  fullBrand: "PlacementPrep India — Powered by AcePrep",
  tagline: "Free Autonomous Voice-Based AI Mock Interviews for Indian Campus Placements",
  url: (process.env.NEXT_PUBLIC_SITE_URL || "https://www.placementprepind.online").replace(/\/$/, ""),
  domain: "placementprepind.online",
  appUrl: "https://aceprep-eight.vercel.app",
  repoUrl: "https://github.com/Arshit010/AcePrep",
  locale: "en_IN",
  language: "en-IN",
  description:
    "Practice spoken technical and HR mock interviews free on PlacementPrep India, powered by AcePrep. Adaptive resume-aware AI follow-ups, 9 CS & HR tracks, and a transparent 0–10 scoring rubric built for Indian campus placements.",
  keywords: [
    "placement preparation India",
    "AI mock interview India",
    "campus placement mock interview",
    "voice AI mock interview free",
    "AcePrep mock interview",
    "technical interview practice India",
    "DSA mock interview",
    "HR STAR method interview practice",
    "resume based mock interview",
    "B.Tech placement preparation",
  ],
  team: [
    {
      name: "Arshit Anand",
      enrollment: "e23cseu0649",
      role: "Project Lead & Full-Stack Developer",
      contribution: "Architecture, prototype implementation, technology selection",
    },
    {
      name: "Pranjal Kumar",
      enrollment: "e23cseu0636",
      role: "Requirements & Research Lead",
      contribution: "Problem statement, SDG mapping, literature review, gap analysis, stakeholder & requirements analysis",
    },
    {
      name: "Sumit Yadav",
      enrollment: "e23cseu0812",
      role: "Feasibility, Risk & Quality Lead",
      contribution: "Economic, legal & operational feasibility, risk register, test & validation plan, timeline & KPIs",
    },
  ],
} as const;

export function absoluteUrl(path = "/"): string {
  const cleanPath = path.startsWith("/") ? path : `/${path}`;
  const withTrailing = cleanPath === "/" ? "/" : cleanPath.endsWith("/") ? cleanPath : `${cleanPath}/`;
  return `${SITE_CONFIG.url}${withTrailing}`;
}

export function buildPageMetadata({
  title,
  description,
  path = "/",
  keywords = [],
  type = "website",
  publishedTime,
}: {
  title: string;
  description: string;
  path?: string;
  keywords?: string[];
  type?: "website" | "article";
  publishedTime?: string;
}): Metadata {
  const canonical = absoluteUrl(path);
  const fullTitle = title.includes("PlacementPrep India")
    ? title
    : `${title} | PlacementPrep India`;

  return {
    title: fullTitle,
    description,
    keywords: [...SITE_CONFIG.keywords, ...keywords],
    alternates: {
      canonical,
    },
    openGraph: {
      title: fullTitle,
      description,
      url: canonical,
      siteName: SITE_CONFIG.fullBrand,
      locale: SITE_CONFIG.locale,
      type,
      ...(publishedTime ? { publishedTime } : {}),
      images: [
        {
          url: `${SITE_CONFIG.url}/og-image.svg`,
          width: 1200,
          height: 630,
          alt: `${SITE_CONFIG.name} — Voice-Based AI Mock Interview Platform powered by AcePrep`,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: fullTitle,
      description,
      images: [`${SITE_CONFIG.url}/og-image.svg`],
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
}

export function getOrganizationJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "EducationalOrganization",
    name: SITE_CONFIG.name,
    alternateName: "AcePrep",
    url: SITE_CONFIG.url,
    logo: `${SITE_CONFIG.url}/icon.svg`,
    description: SITE_CONFIG.description,
    sameAs: [SITE_CONFIG.appUrl, SITE_CONFIG.repoUrl],
    areaServed: {
      "@type": "Country",
      name: "India",
    },
  };
}

export function getWebsiteJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: SITE_CONFIG.name,
    alternateName: SITE_CONFIG.fullBrand,
    url: SITE_CONFIG.url,
    inLanguage: "en-IN",
    description: SITE_CONFIG.description,
  };
}

export function getSoftwareApplicationJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: "PlacementPrep India (Powered by AcePrep)",
    applicationCategory: "EducationalApplication",
    operatingSystem: "Web Browser (Chrome, Safari, Android, iOS, Desktop)",
    url: SITE_CONFIG.url,
    installUrl: SITE_CONFIG.appUrl,
    offers: {
      "@type": "Offer",
      price: "0",
      priceCurrency: "INR",
    },
    featureList: [
      "Autonomous voice-based AI mock interviews using Browser Web Speech API",
      "9 built-in technical and HR placement tracks (DSA, OS, Networks, DBMS, Web Dev, React, JavaScript, Cybersecurity, HR)",
      "Resume-aware adaptive follow-up questions with PDF, DOCX, and OCR image parsing",
      "Transparent 0-10 rubric scoring on Accuracy, Depth, and Communication Structure",
      "Typed-answer accessibility fallback mode (WCAG 2.1 Level AA target)",
      "Privacy-first architecture aligned with India's DPDP Act 2023",
    ],
  };
}

export function getBreadcrumbJsonLd(items: Array<{ name: string; path: string }>) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, idx) => ({
      "@type": "ListItem",
      position: idx + 1,
      name: item.name,
      item: absoluteUrl(item.path),
    })),
  };
}

export function getFaqJsonLd(faqs: Array<{ question: string; answer: string }>) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };
}
