/** A single link node inside a rich paragraph. */
export interface RichLink {
  text: string;
  href: string;
  external?: boolean;
}

/**
 * A paragraph that may contain inline links alongside plain text segments.
 * When type is "rich", render segments rather than the paragraph as a plain string.
 */
export interface RichParagraph {
  type: "rich";
  segments: (string | RichLink)[];
}

export interface GuideSection {
  heading: string;
  /**
   * Array of paragraphs. Each item is either:
   * - a plain string (rendered as-is), or
   * - a RichParagraph object (rendered with inline anchor links).
   */
  paragraphs: (string | RichParagraph)[];
  bullets?: string[];
}

export interface GuideData {
  slug: string;
  title: string;
  shortTitle: string;
  seoTitle: string;
  seoDescription: string;
  keywords: string[];
  category: string;
  readingTime: string;
  publishedAt: string;
  updatedAt: string;
  excerpt: string;
  keyTakeaways: string[];
  sections: GuideSection[];
  relatedTrackSlugs: string[];
}

export const PREP_GUIDES: GuideData[] = [
  {
    slug: "indian-campus-placement-interview-guide-2026",
    title: "Complete Indian Campus Placement Technical & HR Interview Guide (2026–2027)",
    shortTitle: "Campus Placement Complete Guide",
    seoTitle: "Indian Campus Placement Interview Guide 2026–27 | PlacementPrep India",
    seoDescription:
      "A step-by-step campus placement interview roadmap for B.Tech students in India: online coding tests, spoken DSA, OS/DBMS/CN fundamentals, resume grilling, and HR STAR rounds.",
    keywords: [
      "Indian campus placement guide",
      "B.Tech placement preparation roadmap",
      "how to crack campus placement interviews",
      "software fresher interview rounds India",
    ],
    category: "Placement Roadmap",
    readingTime: "4 min read",
    publishedAt: "2026-10-18",
    updatedAt: "2026-11-20",
    excerpt:
      "Understand every stage of Indian campus hiring — from resume screening and online tests to spoken technical rounds and HR bar-raisers — and build a weekly practice loop that works.",
    keyTakeaways: [
      "Campus hiring tests four distinct skills: resume credibility, written coding speed, spoken technical trade-off reasoning, and structured behavioural storytelling.",
      "Most students over-index on silent coding puzzles while neglecting spoken explanation — the exact 'modality gap' where interviews are won or lost.",
      "Short, repeatable 5-question spoken mocks with explicit 0–10 rubric feedback outperform occasional uncalibrated peer mocks.",
    ],
    sections: [
      {
        heading: "1. The Anatomy of Indian Campus Placement Hiring",
        paragraphs: [
          "Whether you are interviewing with product giants (Amazon, Microsoft, Flipkart, Atlassian), fintechs (Razorpay, Groww, CRED), or premium service tracks (TCS Prime/Digital, Infosys SP), campus hiring follows a remarkably consistent funnel: resume shortlisting, an online coding/aptitude test, one or two spoken technical interviews, and an HR or hiring-manager round.",
          "Online coding platforms prepare you well for Round 1 (written auto-graded test cases). However, once you enter Round 2, the game changes completely: interviewers evaluate how you think aloud under mild pressure, how you justify design trade-offs, and whether you actually understand the systems listed on your resume.",
        ],
      },
      {
        heading: "2. The Core CS Pillars You Cannot Skip",
        paragraphs: [
          "Across Indian engineering placements, technical rounds pull from nine repeatable domains: Data Structures & Algorithms (DSA), Operating Systems (OS), Computer Networks (CN), Database Management Systems (DBMS), Web Development, React, JavaScript, Cybersecurity, and HR/Behavioural.",
        ],
        bullets: [
          "DSA: Always start with a brute-force baseline, state its time/space complexity, identify the bottleneck, and walk through an example aloud before optimizing.",
          "OS & DBMS: Focus on mental models over rote definitions — e.g., why threads share heap memory, how Write-Ahead Logging guarantees durability, and when B+ tree indexes slow down writes.",
          "Networks & Security: Master the full URL-to-render lifecycle, TCP vs UDP trade-offs, HTTPS/TLS key exchange, and OWASP Top 10 mitigations like bcrypt, HttpOnly cookies, and CSRF defense.",
        ],
      },
      {
        heading: "3. Preparing for Resume-Based Deep Dives",
        paragraphs: [
          "Anything written on your one-page resume is fair game. If you built a MERN or Next.js capstone project, expect questions such as 'Why MongoDB instead of PostgreSQL?', 'How do you handle API outages?', and 'What metric improved because of your design?'",
          "Upload your PDF, DOCX, or scanned resume into AcePrep before practicing so the AI generates targeted follow-ups tied directly to your own tech stack and projects.",
        ],
      },
      {
        heading: "4. Building a Weekly Spoken Practice Loop",
        paragraphs: [
          "Interview fluency is a motor and cognitive skill improved primarily by repetition with honest feedback. Instead of cramming 100 passive articles the night before Day 1, schedule three 15-minute spoken mock interviews per week across your weakest tracks.",
          "Review your transcript and rubric sub-scores (Accuracy, Depth, Communication Structure) after every session, then re-attempt the same domain a few days later to verify measurable score improvement.",
          {
            type: "rich",
            segments: [
              "Students preparing for campus placements should also understand how search engines discover and evaluate useful online resources. Explore practical SEO insights from ",
              {
                text: "SEOna Labs",
                href: "https://seonalabs.com",
                external: true,
              },
              " and consult ",
              {
                text: "Google\u2019s SEO Starter Guide",
                href: "https://developers.google.com/search/docs/fundamentals/seo-starter-guide",
                external: true,
              },
              " to learn how high-quality content can be structured for better search visibility.",
            ],
          },
        ],
      },
    ],
    relatedTrackSlugs: ["dsa", "os", "dbms", "hr"],
  },
  {
    slug: "star-method-behavioural-interview-examples",
    title: "Mastering the STAR Method for Freshers & Campus HR Rounds",
    shortTitle: "STAR Method HR Guide",
    seoTitle: "STAR Method Behavioural Interview Examples for Freshers | PlacementPrep India",
    seoDescription:
      "Learn how to structure crisp 90-second HR and behavioural answers using the STAR method (Situation, Task, Action, Result) with real B.Tech campus placement examples.",
    keywords: [
      "STAR method interview examples",
      "behavioural interview for freshers India",
      "campus HR interview tips",
      "how to answer tell me about a time",
    ],
    category: "HR & Communication",
    readingTime: "6 min read",
    publishedAt: "2026-10-22",
    updatedAt: "2026-11-20",
    excerpt:
      "Stop rambling in HR and hiring-manager rounds. Use the 15-15-50-20 STAR pacing rule to turn college projects, hackathons, and team conflicts into high-scoring stories.",
    keyTakeaways: [
      "Allocate 50% of your speaking time to Action ('what I specifically did') — not background setup.",
      "Replace vague 'we built' language with clear personal ownership ('I designed the retry layer while my teammate owned OCR parsing').",
      "Close every story with a concrete Result: latency numbers, test counts, user feedback, or what you changed in your workflow.",
    ],
    sections: [
      {
        heading: "Why Freshers Lose Points in Behavioural Rounds",
        paragraphs: [
          "Most final-year students assume HR rounds are casual formalities. In reality, hiring managers use behavioural questions to evaluate ownership, teamwork under deadlines, and coachability — especially when two candidates have identical coding scores.",
          "Unstructured answers usually spend two minutes explaining the college project backstory and only ten seconds on the actual engineering decision.",
        ],
      },
      {
        heading: "The 15-15-50-20 STAR Pacing Formula",
        paragraphs: [
          "Aim for 90 to 120 seconds total per spoken story:",
        ],
        bullets: [
          "Situation (15%): Two crisp sentences setting context and stakes.",
          "Task (15%): Your specific responsibility or constraint (deadline, latency target, team disagreement).",
          "Action (50%): Step-by-step decisions YOU took, trade-offs you weighed, and how you unblocked execution.",
          "Result (20%): Quantified outcome (e.g., cut response latency under 600ms, passed 121 automated tests, delivered Milestone-1 on time) plus one honest reflection.",
        ],
      },
      {
        heading: "Build a 5-Story Bank Before Placement Season",
        paragraphs: [
          "You do not need 50 memorized scripts. Prepare five versatile, authentic stories from your capstone project, internships, clubs, or hackathons: (1) Hardest technical bug, (2) Team conflict or uneven workload, (3) Failure or missed estimate, (4) Learning a new stack rapidly, and (5) Cutting scope or prioritizing under pressure.",
        ],
      },
    ],
    relatedTrackSlugs: ["hr", "web-dev"],
  },
  {
    slug: "how-to-explain-dsa-solutions-aloud",
    title: "Bridging the Modality Gap: How to Think Aloud in DSA Interviews",
    shortTitle: "How to Explain DSA Aloud",
    seoTitle: "How to Explain DSA Solutions Aloud in Interviews | PlacementPrep India",
    seoDescription:
      "Close the modality gap between LeetCode and live interviews. Learn a 5-step spoken framework to articulate DSA logic, edge cases, and Big-O trade-offs clearly.",
    keywords: [
      "how to explain DSA solutions aloud",
      "think aloud coding interview",
      "DSA communication structure",
      "modality gap technical interviews",
    ],
    category: "DSA & Problem Solving",
    readingTime: "6 min read",
    publishedAt: "2026-10-28",
    updatedAt: "2026-11-20",
    excerpt:
      "Solving a medium graph problem silently at 2 AM is completely different from narrating your invariants while an interviewer probes edge cases. Master the 5-step spoken DSA protocol.",
    keyTakeaways: [
      "Silence makes interviewers assume you are stuck — narrate your hypotheses even while thinking.",
      "Always state a brute-force solution first; it proves you understand the problem and gives you a baseline to optimize.",
      "Explicitly name edge cases (empty inputs, duplicates, negative weights, integer overflow) before the interviewer asks.",
    ],
    sections: [
      {
        heading: "What Is the Modality Gap?",
        paragraphs: [
          "In our research for AcePrep, we identified three major barriers for campus candidates: the Feedback Gap, the Access Gap, and the Modality Gap. Coding platforms train silent typing against hidden test suites, yet live hiring screens evaluate spoken reasoning, trade-off justification, and composure under follow-up probing.",
        ],
      },
      {
        heading: "The 5-Step Spoken DSA Framework",
        paragraphs: [
          "Use this repeatable structure in every technical interview and voice mock session:",
        ],
        bullets: [
          "Step 1 — Clarify & Restate: Confirm input constraints, mutability, sortedness, and return format.",
          "Step 2 — Brute-Force Anchor: State the naive approach in 15 seconds along with its exact time and space complexity.",
          "Step 3 — Spot the Bottleneck: Explain which repeated work (e.g., linear scan inside a loop) you can eliminate with a hash map, two pointers, heap, or DP state.",
          "Step 4 — Dry-Run on a Small Example: Trace 3–4 elements aloud, highlighting the invariant that keeps the algorithm correct.",
          "Step 5 — Edge Cases & Trade-Offs: Proactively state boundary inputs and whether an alternative structure trades memory for speed.",
        ],
      },
    ],
    relatedTrackSlugs: ["dsa", "javascript", "os"],
  },
  {
    slug: "resume-based-interview-questions-guide",
    title: "How to Prepare for Resume-Based Project Grilling in Tech Interviews",
    shortTitle: "Resume Project Grilling Guide",
    seoTitle: "Resume-Based Project Interview Questions Guide | PlacementPrep India",
    seoDescription:
      "Prepare for deep-dive technical questions on your B.Tech projects. Learn how to defend architecture choices, database trade-offs, security, and scalability aloud.",
    keywords: [
      "resume based interview questions",
      "project interview questions B.Tech",
      "how to explain final year project in interview",
      "MERN stack project interview questions",
    ],
    category: "Resume & Projects",
    readingTime: "7 min read",
    publishedAt: "2026-11-03",
    updatedAt: "2026-11-20",
    excerpt:
      "Your resume projects are the highest-leverage part of any fresher interview because you control the script — if you prepare for the 'Why did you choose X over Y?' follow-ups.",
    keyTakeaways: [
      "For every library or database on your resume, prepare a 2-sentence trade-off justification (choice, alternative considered, and mitigation).",
      "Know your system's failure modes: what happens if an API times out, cookies fail on Safari, or an uploaded file is malformed?",
      "Use resume-aware AI mocks to practice answering project-specific follow-ups before facing real recruiters.",
    ],
    sections: [
      {
        heading: "The Five Questions Recruiters Always Ask About Your Project",
        paragraphs: [
          "No matter what tech stack you built with, experienced interviewers almost always drill into five areas:",
        ],
        bullets: [
          "Architecture overview: Draw or describe the data flow from browser to database in 45 seconds.",
          "Technology trade-offs: Why React + Vite vs Next.js? Why MongoDB vs PostgreSQL? Why Node.js vs FastAPI?",
          "Failure & resilience: What breaks first under 10x traffic or a third-party API outage?",
          "Security & privacy: How are passwords hashed, tokens refreshed, inputs validated, and user data protected?",
          "Measurement: What concrete metric did you actually measure (latency, test coverage, cost per request)?",
        ],
      },
      {
        heading: "Turn Your Resume Into a Custom Mock Interview",
        paragraphs: [
          "AcePrep's resume ingestion pipeline parses PDF, DOCX, and scanned image resumes (via pdf-parse, mammoth, and Tesseract.js in server memory — never written to disk), confirms your extracted skills with you, and weaves project-specific follow-ups straight into your spoken mock interview.",
        ],
      },
    ],
    relatedTrackSlugs: ["web-dev", "dbms", "react", "cybersecurity"],
  },
  {
    slug: "voice-ai-mock-interviews-vs-coding-practice",
    title: "Voice AI Mock Interviews vs. Coding Practice & Peer Mocks: What Works Best?",
    shortTitle: "AI Mocks vs Coding & Peers",
    seoTitle: "Voice AI Mock Interviews vs LeetCode & Peer Mocks | PlacementPrep India",
    seoDescription:
      "Compare voice-based AI mock interviews, coding platforms, peer matching, and paid expert coaching for Indian campus placements across cost, rubric transparency, and availability.",
    keywords: [
      "AI mock interview vs peer mock",
      "best free mock interview platform India",
      "AcePrep vs Pramp vs LeetCode",
      "spoken interview practice online",
    ],
    category: "Interview Strategy",
    readingTime: "5 min read",
    publishedAt: "2026-11-10",
    updatedAt: "2026-11-20",
    excerpt:
      "Each interview prep tool solves a different slice of the hiring funnel. Here is how to combine coding platforms with free rubric-driven spoken AI mocks without paying hundreds of dollars.",
    keyTakeaways: [
      "Coding platforms (LeetCode/HackerRank) build algorithmic muscle but do not test spoken trade-offs or follow-up probing.",
      "Human expert coaching is high quality but costs tens to hundreds of US dollars per session — out of reach for most Indian students.",
      "Rubric-driven voice AI mock interviews fill the middle ground: 24/7 availability, resume-aware follow-ups, and transparent 0–10 diagnostics at near-zero cost.",
    ],
    sections: [
      {
        heading: "Why No Single Tool Replaces Everything",
        paragraphs: [
          "Effective placement preparation combines written problem solving with spoken rehearsal. Coding platforms sharpen your implementation speed for online tests, while peer mocks give you social realism — if you can find a reliable partner who gives honest feedback.",
        ],
      },
      {
        heading: "Where Autonomous Voice AI Mocks Shine",
        paragraphs: [
          "General-purpose chat assistants can hold a conversation, but they lack a fixed scoring rubric, structured JSON diagnostics, resume parsing, and session transcripts unless you engineer all that scaffolding yourself.",
          "PlacementPrep India (powered by AcePrep) brings those pieces together specifically for Indian campus placements: 9 CS and HR tracks, continuous browser speech recognition with typed-answer accessibility fallback, adaptive follow-ups, and a transparent 0–10 rubric you can track across sessions.",
        ],
      },
    ],
    relatedTrackSlugs: ["dsa", "hr", "networks"],
  },
];

export function getGuideBySlug(slug: string): GuideData | undefined {
  return PREP_GUIDES.find((guide) => guide.slug === slug);
}
