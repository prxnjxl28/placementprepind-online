export const COMPARISON_ROWS = [
  {
    dimension: "Spoken interaction",
    leetcode: "No",
    peer: "Yes (human)",
    expert: "Yes (human)",
    consumerAi: "Varies by product",
    generalAi: "Yes, unstructured",
    aceprep: "Yes, structured voice + captions",
  },
  {
    dimension: "Adaptive follow-up questions",
    leetcode: "No",
    peer: "Yes (human)",
    expert: "Yes (human)",
    consumerAi: "Often",
    generalAi: "Yes",
    aceprep: "Yes, with topic & difficulty control",
  },
  {
    dimension: "Fixed scoring rubric",
    leetcode: "Test cases only",
    peer: "Rarely",
    expert: "Yes (human)",
    consumerAi: "Varies",
    generalAi: "No",
    aceprep: "Yes, schema-validated 0–10 scores",
  },
  {
    dimension: "Resume-aware questions",
    leetcode: "No",
    peer: "No",
    expert: "Manual",
    consumerAi: "Often",
    generalAi: "Manual paste",
    aceprep: "PDF, DOCX & OCR image parsing",
  },
  {
    dimension: "Technical domain tracks",
    leetcode: "Coding only",
    peer: "Limited",
    expert: "Yes",
    consumerAi: "Limited",
    generalAi: "On request",
    aceprep: "9 built-in CS & HR tracks",
  },
  {
    dimension: "Integrity / focus logging",
    leetcode: "Some",
    peer: "No",
    expert: "No",
    consumerAi: "Rare",
    generalAi: "No",
    aceprep: "Tab-switch, blur & paste summary",
  },
  {
    dimension: "Cost per session",
    leetcode: "Subscription",
    peer: "Free or low",
    expert: "High ($$–$$$)",
    consumerAi: "Subscription",
    generalAi: "Subscription",
    aceprep: "Free for students (<$0.011 measured compute)",
  },
  {
    dimension: "Availability",
    leetcode: "24/7",
    peer: "Scheduled",
    expert: "Booked",
    consumerAi: "24/7",
    generalAi: "24/7",
    aceprep: "24/7 zero-install browser",
  },
  {
    dimension: "Text-only accessibility mode",
    leetcode: "n/a",
    peer: "No",
    expert: "No",
    consumerAi: "Varies",
    generalAi: "Yes",
    aceprep: "Yes (WCAG 2.1 AA target)",
  },
] as const;

export const RUBRIC_DIMENSIONS = [
  {
    name: "Technical Accuracy",
    hrVariant: "STAR Structure (for HR Track)",
    scale: "0 – 10",
    weight: "Core Factual & Conceptual Correctness",
    description:
      "Evaluates whether core definitions, algorithmic complexity, protocols, or security mechanisms are factually sound without conceptual misconceptions. On the HR track, this dimension grades adherence to Situation, Task, Action, and Result.",
    anchors: {
      low: "0–3: Major conceptual errors, guessed definitions, or off-topic answer lacking core principles.",
      medium: "4–7: Fundamentally correct concept with minor imprecisions, missing edge cases, or partial STAR elements.",
      high: "8–10: Accurate, crisp explanation with precise terminology, correct complexity/protocol details, or complete quantified STAR arc.",
    },
  },
  {
    name: "Depth & Trade-Off Reasoning",
    hrVariant: "Ownership & Reflection (for HR Track)",
    scale: "0 – 10",
    weight: "Engineering Judgment & Follow-Up Handling",
    description:
      "Measures whether the candidate goes beyond textbook definitions to justify engineering trade-offs, handle edge cases, and respond thoughtfully to adaptive follow-up probing.",
    anchors: {
      low: "0–3: Surface-level one-liner; cannot justify why an approach works or breaks under constraints.",
      medium: "4–7: Mentions one trade-off or example, handles basic follow-up with moderate detail.",
      high: "8–10: Compares alternatives clearly (e.g., time vs space, consistency vs latency, security vs UX) and handles probing with poise.",
    },
  },
  {
    name: "Communication Structure",
    hrVariant: "Clarity, Pacing & Conciseness",
    scale: "0 – 10",
    weight: "Spoken Delivery & Logical Flow",
    description:
      "Assesses how cleanly the answer is organized aloud: clear framing, logical progression, minimal rambling, and explicit signposting that makes it easy for an interviewer to follow.",
    anchors: {
      low: "0–3: Disorganized, repetitive, or overly fragmented without a clear conclusion.",
      medium: "4–7: Understandable flow with minor detours or slightly rushed wrap-up.",
      high: "8–10: Structured top-down delivery (headline -> reasoning -> example -> trade-off) with confident, concise phrasing.",
    },
  },
] as const;

export const TECH_STACK = [
  {
    layer: "Public SEO Website (placementprepind.online)",
    choice: "Next.js 15 Static Site Generation (SSG)",
    why: "Pre-renders semantic HTML, per-page metadata, sitemap.xml, and JSON-LD structured data for full Googlebot crawlability and high Core Web Vitals — solving the SPA SEO trade-off noted in Milestone-1.",
  },
  {
    layer: "Live Interview App (aceprep-eight.vercel.app)",
    choice: "React 19 + Vite SPA",
    why: "Fast builds and reactive single-page architecture tailored to continuous live voice capture, audio playback, and interactive diagnostic reports.",
  },
  {
    layer: "Application Backend",
    choice: "Node.js + Express 5",
    why: "Unified JavaScript/TypeScript stack with non-blocking I/O for concurrent LLM and TTS calls, protected by bcrypt, JWT HttpOnly cookies, CSRF guard, Helmet, and rate limits.",
  },
  {
    layer: "Database",
    choice: "MongoDB + Mongoose",
    why: "Fits nested interview documents (questions, answers, rubric sub-scores, transcripts, focus events) naturally, enforced via strict Mongoose schema validation.",
  },
  {
    layer: "LLM Inference",
    choice: "Groq API (Llama 3.3 70B & GPT-OSS)",
    why: "Ultra-low latency (380–680 ms measured prototype range; ~520 ms mean) and near-zero per-interview cost (~$0.0024 LLM compute for 5 questions).",
  },
  {
    layer: "Voice Synthesis & Capture",
    choice: "ElevenLabs Flash v2.5 + Browser Web Speech API",
    why: "Natural low-latency neural voice with caching and free browser SpeechSynthesis fallback; browser SpeechRecognition with automatic silence restart keeps server audio storage at zero.",
  },
  {
    layer: "Resume Parsing & OCR",
    choice: "pdf-parse, mammoth, Tesseract.js",
    why: "Parses PDF, DOCX, and scanned image resumes directly in backend memory without per-document cloud AI fees or writing raw files to disk.",
  },
] as const;

export const DATA_FLOW_TABLE = [
  {
    data: "Microphone audio",
    whereItGoes: "Captured in browser; Web Speech API may send audio to the browser vendor's speech service",
    storedByAcePrep: "No — zero audio is ever stored by AcePrep",
  },
  {
    data: "Transcript text",
    whereItGoes: "Sent to backend, then to LLM provider (Groq) for rubric scoring and follow-up generation",
    storedByAcePrep: "Yes, inside the signed-in user's account; deletable anytime on user request",
  },
  {
    data: "Resume files",
    whereItGoes: "Parsed in backend server memory; extracted text sent to LLM to generate project-specific questions",
    storedByAcePrep: "Raw file is never written to disk; extracted text (max 20,000 chars) & skills profile stored in user account",
  },
  {
    data: "Webcam preview",
    whereItGoes: "Rendered strictly locally inside the user's browser",
    storedByAcePrep: "No — never recorded or transmitted over the network",
  },
  {
    data: "Focus & integrity events",
    whereItGoes: "Tab switch, window blur, and paste timestamps sent to backend",
    storedByAcePrep: "Yes, stored as informational (non-punitive) session metadata",
  },
] as const;

export const SDG_ALIGNMENT = [
  {
    sdg: "SDG 4 — Target 4.4",
    title: "Skills Relevant for Employment",
    contribution:
      "Converts theoretical CS knowledge (DSA, OS, DBMS, Networks, Web, Security) into spoken, interview-ready competence backed by rubric diagnostics pointing to exact conceptual gaps.",
    evidence: "Pre/post rubric score gains measured across sessions in the Milestone-4 user study.",
  },
  {
    sdg: "SDG 8 — Target 8.6",
    title: "Decent Work & Youth Employment",
    contribution:
      "Helps graduates clear campus hiring screens by lowering interview anxiety through repeatable, low-stakes spoken mock rehearsals available 24/7.",
    evidence: "Pre/post participant self-reported interview confidence surveys.",
  },
  {
    sdg: "SDG 10 — Target 10.2",
    title: "Social & Economic Inclusion",
    contribution:
      "Replaces expensive expert coaching ($50–$200/session) with a zero-install browser tool that runs on low-end devices and includes full typed-answer accessibility mode.",
    evidence: "Zero-install mobile browser compatibility matrix and text-mode completion rate.",
  },
] as const;

export const ROADMAP_MILESTONES = [
  {
    milestone: "Milestone-1",
    date: "18 Oct 2026",
    status: "Completed",
    deliverables:
      "Project proposal, requirements & MoSCoW specification, competitive gap analysis, feasibility & 10-item risk register, and working live prototype with 121 automated tests.",
  },
  {
    milestone: "Milestone-2",
    date: "Dec 2026",
    status: "In Progress",
    deliverables:
      "Student requirements survey, hardened mobile speech continuity, OCR & TTS pipelines, published Rubric v1 with 30-answer human-rater calibration set (target r ≥ 0.7), and latency/cost instrumentation.",
  },
  {
    milestone: "Milestone-3",
    date: "Feb 2027",
    status: "Planned",
    deliverables:
      "Isolated code sandbox (or documented scope checkpoint), cohort analytics dashboard, expanded proctoring telemetry, and closed pilot beta.",
  },
  {
    milestone: "Milestone-4",
    date: "Apr – May 2027",
    status: "Planned",
    deliverables:
      "OWASP Top 10 security & WCAG 2.1 AA accessibility review, 15+ participant pilot learning-benefit study (SUS ≥ 68), final defence, and public deployment.",
  },
] as const;

export const HOME_FAQS = [
  {
    question: "What is PlacementPrep India and how is it related to AcePrep?",
    answer:
      "PlacementPrep India (placementprepind.online) is the public placement-preparation hub and SEO portal powered by AcePrep — an autonomous voice-based AI mock interview and rubric-driven assessment platform developed as a B.Tech CSE final-year capstone project for Indian campus placements.",
  },
  {
    question: "Is PlacementPrep India / AcePrep free for Indian college students?",
    answer:
      "Yes. AcePrep is engineered to run directly in your browser at near-zero compute cost (~US$0.007–$0.011 measured per 5-question interview in prototype logs), replacing paid expert mock sessions with free, 24/7 spoken practice.",
  },
  {
    question: "Can I practice mock interviews without a microphone or on a mobile browser?",
    answer:
      "Yes. Both the interactive simulator here and the full AcePrep platform support continuous browser speech recognition (Chrome & Safari on desktop/mobile) plus a full keyboard-only typed-answer mode targeting WCAG 2.1 Level AA accessibility.",
  },
  {
    question: "How does resume-aware mock interviewing work, and is my resume stored safely?",
    answer:
      "AcePrep parses PDF, DOCX, and scanned image resumes directly in server memory without ever writing your raw file to disk. Extracted skills are shown to you for confirmation before generating project-specific follow-up questions, aligned with India's DPDP Act 2023 principles.",
  },
  {
    question: "How does the 0–10 scoring rubric evaluate my answers?",
    answer:
      "Every answer receives schema-validated sub-scores from 0 to 10 across Technical Accuracy (or STAR Structure for HR), Depth & Trade-Off Reasoning, and Communication Structure — along with strengths, weaknesses, suggested practice topics, and a full transcript.",
  },
  {
    question: "Does AcePrep record my microphone audio or webcam video?",
    answer:
      "No. Microphone audio is processed for live transcription and never stored by AcePrep. The optional webcam preview runs strictly locally in your browser and is never recorded or transmitted.",
  },
] as const;
