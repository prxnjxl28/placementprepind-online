# PlacementPrep India (`placementprepind.online`) — Powered by AcePrep

SEO-optimized **Next.js 15 Static Site Generation (SSG)** website built for the Search Engine Optimization project on **`https://placementprepind.online`**, serving as the public search-discoverable portal for **AcePrep** (`https://aceprep-eight.vercel.app`).

## Why Next.js SSG (`output: "export"`)?
As documented in the AcePrep Milestone-1 report (Section 5), the authenticated live interview prototype runs on React 19 + Vite (CSR), where search-engine crawlability is limited. This site solves that architectural trade-off by pre-rendering **22+ fully static HTML pages** with:
- Unique per-page `<title>`, `<meta name="description">`, canonical URLs (`https://placementprepind.online/...`), Open Graph, and Twitter Cards
- Rich **JSON-LD Structured Data**: `EducationalOrganization`, `WebSite`, `SoftwareApplication`, `LearningResource`, `Article`, `ItemList`, `BreadcrumbList`, and `FAQPage`
- Automatic `sitemap.xml` and `robots.txt`
- 9 dedicated SEO landing pages for all built-in tracks (`/tracks/dsa/`, `/tracks/os/`, `/tracks/networks/`, `/tracks/dbms/`, `/tracks/web-dev/`, `/tracks/react/`, `/tracks/javascript/`, `/tracks/cybersecurity/`, `/tracks/hr/`)
- 5 long-form editorial Indian campus placement guides (`/guides/...`)
- Interactive zero-install Browser Voice & Text Mock Interview Simulator (`/mock-interview/`) using Web Speech API (`en-IN`), `SpeechSynthesis`, typed-answer fallback (WCAG 2.1 AA target), and instant 0–10 rubric preview
- Apache `.htaccess` (HTTPS redirect, non-www canonical redirect, GZIP compression, cache headers) for GoDaddy cPanel hosting

## Local Development & Build

```bash
npm install
npm run dev      # Local preview at http://localhost:3000
npm run build    # Exports full static site into ./out/
```

## Making `placementprepind.online` Live with GoDaddy

### Option A (Recommended — Free HTTPS/SSL + Global CDN): Vercel + GoDaddy DNS
1. Push this folder to a GitHub repository (e.g. `placementprepind-online`).
2. Import the repo in [Vercel](https://vercel.com) → Framework Preset: **Next.js** → Deploy.
3. In Vercel Project Settings → **Domains**, add `placementprepind.online` and `www.placementprepind.online`.
4. In **GoDaddy → My Products → DNS** for `placementprepind.online`:
   - Add/Edit **A Record**: Name `@`, Value `76.76.21.21` (or the exact IP shown by Vercel)
   - Add/Edit **CNAME Record**: Name `www`, Value `cname.vercel-dns.com`
5. Wait 5–30 minutes for DNS & free Let's Encrypt SSL provisioning.

### Option B (If you purchased GoDaddy Web Hosting / cPanel)
1. Run `npm run build` locally to generate the `out/` folder.
2. Zip the **contents** of `out/` (including `.htaccess`, `index.html`, `sitemap.xml`, `robots.txt`, and all folders).
3. In GoDaddy **cPanel → File Manager → `public_html/`**, upload and extract the ZIP directly inside `public_html/`.
4. Ensure SSL/HTTPS is enabled in GoDaddy cPanel.

## SEO Project Verification Checklist
1. Copy `.env.example` to `.env.local` and optionally add:
   - `NEXT_PUBLIC_GSC_VERIFICATION` (Google Search Console HTML tag token)
   - `NEXT_PUBLIC_GA_ID` (Google Analytics 4 Measurement ID)
2. Submit `https://placementprepind.online/sitemap.xml` in **Google Search Console**.
3. Validate structured data at [Google Rich Results Test](https://search.google.com/test/rich-results).
4. Audit Core Web Vitals & SEO score at [PageSpeed Insights](https://pagespeed.web.dev/).
