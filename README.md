PlacementPrep India (placementprepind.online)

Public, search-discoverable portal for AcePrep, the B.Tech CSE Final Year Capstone Project at Bennett University (batch 2023–2027).

Portal (this repo): https://placementprepind.online
AcePrep live prototype: https://aceprep-eight.vercel.app
AcePrep source repository: https://github.com/Arshit010/AcePrep
About the capstone

AcePrep: An Autonomous Voice-Based AI Mock Interview and Assessment Platform conducts a spoken technical or behavioural interview, adapts follow-up questions to the candidate's answers and resume, scores each answer against a fixed 0–10 rubric (technical accuracy, depth and trade-offs, communication structure), and returns a diagnostic report with the transcript.

It targets three gaps in interview practice: inconsistent peer feedback, the cost of expert mock interviews, and coding platforms that never test explaining answers aloud. It is built for Indian campus-placement preparation, is free to use, and supports a typed-answer fallback for accessibility. It supports SDG 4 (Target 4.4), SDG 8 (Target 8.6) and SDG 10 (Target 10.2).

Layer	AcePrep app (separate repo)
Frontend	React 19 + Vite (client-rendered SPA)
Backend	Node.js + Express 5, MongoDB (Mongoose)
AI and speech	Groq API (Llama 3.3 70B), ElevenLabs TTS, browser Web Speech API
Resume parsing	pdf-parse, mammoth, Tesseract.js
What this repo is

The AcePrep app is an authenticated, client-rendered SPA, so search engines can't crawl it well. This repo is the public front door: a Next.js 15 static site (output: "export") that pre-renders 22+ HTML pages and links visitors into the app.

Features
Unique per-page <title>, meta description, canonical URL (https://placementprepind.online/...), Open Graph and Twitter Card tags
JSON-LD structured data: EducationalOrganization, WebSite, SoftwareApplication, LearningResource, Article, ItemList, BreadcrumbList, FAQPage
Automatic sitemap.xml and robots.txt
9 SEO landing pages, one per AcePrep track: /tracks/dsa/, /os/, /networks/, /dbms/, /web-dev/, /react/, /javascript/, /cybersecurity/, /hr/
5 long-form Indian campus placement guides (/guides/...)
Zero-install browser mock interview simulator (/mock-interview/) using the Web Speech API (en-IN), SpeechSynthesis, a typed-answer fallback (WCAG 2.1 AA target) and an instant 0–10 rubric preview
Apache .htaccess (HTTPS redirect, non-www canonical, GZIP, cache headers) for cPanel hosting
Tech stack

Next.js 15 (static export), TypeScript, Tailwind CSS (PostCSS).

Local development
bash
npm install
npm run dev      # http://localhost:3000
npm run build    # static export to ./out/

Copy .env.example to .env.local and optionally set:

NEXT_PUBLIC_GSC_VERIFICATION: Google Search Console HTML-tag token
NEXT_PUBLIC_GA_ID: Google Analytics 4 Measurement ID
Deployment

Option A: Vercel + GoDaddy DNS (recommended; free HTTPS and CDN)

Import this repo in Vercel with the Next.js preset and deploy.
In Project Settings → Domains, add placementprepind.online and www.placementprepind.online.
In GoDaddy DNS, set an A record (@) to 76.76.21.21 (or the IP Vercel shows) and a CNAME (www) to cname.vercel-dns.com.
Wait 5–30 minutes for DNS and SSL.

Option B: GoDaddy cPanel hosting

Run npm run build.
Zip the contents of out/ (including .htaccess, index.html, sitemap.xml, robots.txt and all folders).
In cPanel File Manager, upload and extract into public_html/, and make sure SSL/HTTPS is enabled.
SEO verification checklist
Add the Search Console and GA4 values in .env.local.
Submit https://placementprepind.online/sitemap.xml in Google Search Console.
Validate structured data with the Rich Results Test.
Audit Core Web Vitals and SEO score on PageSpeed Insights.
Team
Member	Role
Arshit Anand	Project lead, full-stack developer
Pranjal Kumar	Requirements and research lead, presentation coordinator
Sumit Yadav	Feasibility, risk and quality lead

Capstone roadmap: Milestone 1 (Oct 2026, submitted), Milestone 2 (Dec 2026, in progress), Milestone 3 (Feb 2027), Milestone 4 (Apr–May 2027).
