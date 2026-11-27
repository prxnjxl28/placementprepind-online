
"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import Link from "next/link";
import {
  Mic,
  MicOff,
  Volume2,
  VolumeX,
  Keyboard,
  Sparkles,
  CheckCircle2,
  ArrowRight,
  ArrowUpRight,
  RotateCcw,
  Eye,
  FileText,
} from "lucide-react";
import { INTERVIEW_TRACKS, type TrackQuestion } from "@/data/tracks";
import { SITE_CONFIG } from "@/lib/site";
import { trackEvent } from "@/lib/analytics";

interface EvaluationResult {
  accuracy: number;
  depth: number;
  structure: number;
  overall: number;
  matchedConcepts: string[];
  missedConcepts: string[];
  strengths: string[];
  improvements: string[];
  wordCount: number;
}

interface SpeechRecognitionAlternativeLike {
  transcript: string;
}

interface SpeechRecognitionResultLike {
  isFinal: boolean;
  0: SpeechRecognitionAlternativeLike;
}

interface SpeechRecognitionEventLike {
  resultIndex: number;
  results: ArrayLike<SpeechRecognitionResultLike>;
}

interface SpeechRecognitionLike {
  continuous: boolean;
  interimResults: boolean;
  lang: string;
  onresult: ((event: SpeechRecognitionEventLike) => void) | null;
  onerror: ((event: { error: string }) => void) | null;
  onend: (() => void) | null;
  start: () => void;
  stop: () => void;
}

function evaluateAnswer(
  answer: string,
  question: TrackQuestion,
  isHrTrack: boolean
): EvaluationResult {
  const clean = answer.trim();
  const lower = clean.toLowerCase();
  const words = clean.split(/\s+/).filter(Boolean);
  const wordCount = words.length;

  const matchedConcepts = question.keyConcepts.filter((concept) => {
    const tokens = concept
      .toLowerCase()
      .replace(/[^a-z0-9\s+]/g, " ")
      .split(/\s+/)
      .filter((t) => t.length > 2);

    if (tokens.length === 0) return lower.includes(concept.toLowerCase());

    return tokens.some((tok) => lower.includes(tok));
  });

  const missedConcepts = question.keyConcepts.filter(
    (c) => !matchedConcepts.includes(c)
  );

  const conceptRatio =
    question.keyConcepts.length > 0
      ? matchedConcepts.length / question.keyConcepts.length
      : 0;

  const reasoningMarkers = [
    "because",
    "trade-off",
    "tradeoff",
    "however",
    "whereas",
    "instead",
    "complexity",
    "o(",
    "edge case",
    "scale",
    "latency",
    "memory",
    "mitigat",
    "result",
    "metric",
    "impact",
    "situation",
    "action",
  ];

  const reasoningHits = reasoningMarkers.filter((m) =>
    lower.includes(m)
  ).length;

  const structureMarkers = [
    "first",
    "second",
    "finally",
    "for example",
    "example",
    "step",
    "summary",
    "situation",
    "task",
    "action",
    "result",
    "in practice",
  ];

  const structureHits = structureMarkers.filter((m) =>
    lower.includes(m)
  ).length;

  const lengthFactor =
    wordCount >= 45 ? 1 : wordCount >= 25 ? 0.78 : wordCount >= 12 ? 0.52 : 0.25;

  const accuracy = Math.min(
    10,
    Math.max(
      1,
      Math.round((conceptRatio * 7.5 + lengthFactor * 2.5) * 10) / 10
    )
  );

  const depth = Math.min(
    10,
    Math.max(
      1,
      Math.round(
        (Math.min(1, reasoningHits / 4) * 5.5 +
          conceptRatio * 2.5 +
          lengthFactor * 2) *
          10
      ) / 10
    )
  );

  const structure = Math.min(
    10,
    Math.max(
      1,
      Math.round(
        (Math.min(1, structureHits / 3) * 4.5 +
          (wordCount >= 35 && wordCount <= 220 ? 3.5 : 2) +
          (clean.includes(".") || clean.includes(",") ? 2 : 0.8)) *
          10
      ) / 10
    )
  );

  const overall = Math.round(((accuracy + depth + structure) / 3) * 10) / 10;

  const strengths: string[] = [];
  const improvements: string[] = [];

  if (matchedConcepts.length >= 2) {
    strengths.push(
      `Covered ${matchedConcepts.length} of ${question.keyConcepts.length} core concepts (${matchedConcepts.slice(0, 3).join(", ")}).`
    );
  }

  if (reasoningHits >= 2) {
    strengths.push("Good use of causal reasoning and trade-off language.");
  }

  if (wordCount >= 40) {
    strengths.push(
      `Substantive spoken/typed length (${wordCount} words) with clear detail.`
    );
  }

  if (strengths.length === 0) {
    strengths.push(
      "Direct, concise opening attempt — expand with one concrete example to boost depth."
    );
  }

  if (missedConcepts.length > 0) {
    improvements.push(
      `Explicitly weave in missing key concepts: ${missedConcepts.slice(0, 3).join(", ")}.`
    );
  }

  if (isHrTrack && !lower.includes("result") && !lower.includes("impact")) {
    improvements.push(
      "Close your STAR answer with a measurable Result (metrics, test count, or user outcome)."
    );
  } else if (reasoningHits < 2) {
    improvements.push(
      "Explain WHY your approach works and mention one trade-off or edge case."
    );
  }

  if (wordCount < 35) {
    improvements.push(
      "Aim for a 60–90 second spoken explanation (~60–130 words) using headline -> mechanism -> example."
    );
  }

  return {
    accuracy,
    depth,
    structure,
    overall,
    matchedConcepts,
    missedConcepts,
    strengths,
    improvements,
    wordCount,
  };
}

export function MockInterviewSimulator({
  initialTrackSlug = "dsa",
  compact = false,
}: {
  initialTrackSlug?: string;
  compact?: boolean;
}) {
  const [selectedSlug, setSelectedSlug] = useState(initialTrackSlug);
  const [questionIndex, setQuestionIndex] = useState(0);
  const [mode, setMode] = useState<"voice" | "text">("voice");
  const [resumeSkill, setResumeSkill] = useState("React, Node.js, MongoDB");
  const [answer, setAnswer] = useState("");
  const [interimText, setInterimText] = useState("");
  const [isListening, setIsListening] = useState(false);
  const [isSpeaking, setIsSpeaking] = useState(false);
  const [speechSupported, setSpeechSupported] = useState(true);
  const [statusMessage, setStatusMessage] = useState<string | null>(null);
  const [evaluation, setEvaluation] = useState<EvaluationResult | null>(null);
  const [showFollowUp, setShowFollowUp] = useState(false);
  const [focusEvents, setFocusEvents] = useState({
    tabBlur: 0,
    paste: 0,
  });

  const recognitionRef = useRef<SpeechRecognitionLike | null>(null);
  const shouldRestartRef = useRef(false);
  const hasTrackedInterviewStartRef = useRef(false);

  const track = useMemo(
    () =>
      INTERVIEW_TRACKS.find((t) => t.slug === selectedSlug) ||
      INTERVIEW_TRACKS[0],
    [selectedSlug]
  );

  const question = track.questions[questionIndex % track.questions.length];

  const trackInterviewStart = (inputMode: "voice" | "text") => {
    if (hasTrackedInterviewStartRef.current) return;

    trackEvent("start_mock_interview", {
      track_name: track.name,
      track_slug: track.slug,
      input_mode: inputMode,
      simulator_type: compact ? "homepage_demo" : "full_simulator",
    });

    hasTrackedInterviewStartRef.current = true;
  };

  useEffect(() => {
    const win = window as unknown as {
      SpeechRecognition?: new () => SpeechRecognitionLike;
      webkitSpeechRecognition?: new () => SpeechRecognitionLike;
    };

    if (!win.SpeechRecognition && !win.webkitSpeechRecognition) {
      setSpeechSupported(false);
      setMode("text");
    }
  }, []);

  useEffect(() => {
    const handleVisibility = () => {
      if (document.hidden) {
        setFocusEvents((prev) => ({
          ...prev,
          tabBlur: prev.tabBlur + 1,
        }));
      }
    };

    document.addEventListener("visibilitychange", handleVisibility);

    return () => {
      document.removeEventListener("visibilitychange", handleVisibility);
      shouldRestartRef.current = false;
      recognitionRef.current?.stop();

      if (typeof window !== "undefined" && "speechSynthesis" in window) {
        window.speechSynthesis.cancel();
      }
    };
  }, []);

  const stopListening = () => {
    shouldRestartRef.current = false;
    recognitionRef.current?.stop();
    setIsListening(false);
    setInterimText("");
  };

  const startListening = () => {
    const win = window as unknown as {
      SpeechRecognition?: new () => SpeechRecognitionLike;
      webkitSpeechRecognition?: new () => SpeechRecognitionLike;
    };

    const SpeechCtor = win.SpeechRecognition || win.webkitSpeechRecognition;

    if (!SpeechCtor) {
      setSpeechSupported(false);
      setMode("text");
      setStatusMessage(
        "Speech recognition is not supported in this browser — switched to typed-answer mode."
      );
      return;
    }

    setStatusMessage(null);

    const recognition = new SpeechCtor();
    recognition.continuous = true;
    recognition.interimResults = true;
    recognition.lang = "en-IN";

    recognition.onresult = (event) => {
      let finalChunk = "";
      let liveChunk = "";

      for (let i = event.resultIndex; i < event.results.length; i++) {
        const chunk = event.results[i][0]?.transcript || "";

        if (event.results[i].isFinal) {
          finalChunk += `${chunk} `;
        } else {
          liveChunk += chunk;
        }
      }

      if (finalChunk.trim()) {
        setAnswer((prev) => `${prev}${prev ? " " : ""}${finalChunk.trim()}`);
      }

      setInterimText(liveChunk);
    };

    recognition.onerror = (err) => {
      if (err.error === "not-allowed") {
        shouldRestartRef.current = false;
        setIsListening(false);
        setStatusMessage(
          "Microphone permission denied — you can continue right away in Typed-Answer Mode."
        );
        setMode("text");
      }
    };

    recognition.onend = () => {
      if (shouldRestartRef.current) {
        try {
          recognition.start();
        } catch {
          setIsListening(false);
        }
      } else {
        setIsListening(false);
      }
    };

    recognitionRef.current = recognition;
    shouldRestartRef.current = true;

    try {
      recognition.start();
      setIsListening(true);
      trackInterviewStart("voice");
    } catch {
      shouldRestartRef.current = false;
      setIsListening(false);
      setStatusMessage(
        "Could not start microphone recording. Please try again or use Typed Mode."
      );
    }
  };

  const speakText = (text: string) => {
    if (
      typeof window === "undefined" ||
      !("speechSynthesis" in window)
    ) {
      setStatusMessage(
        "Browser speech synthesis is unavailable on this device."
      );
      return;
    }

    if (isSpeaking) {
      window.speechSynthesis.cancel();
      setIsSpeaking(false);
      return;
    }

    window.speechSynthesis.cancel();

    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = "en-IN";
    utterance.rate = 0.98;
    utterance.onend = () => setIsSpeaking(false);
    utterance.onerror = () => setIsSpeaking(false);

    setIsSpeaking(true);
    window.speechSynthesis.speak(utterance);
  };

  const handleTrackChange = (slug: string) => {
    stopListening();
    hasTrackedInterviewStartRef.current = false;
    setSelectedSlug(slug);
    setQuestionIndex(0);
    setAnswer("");
    setEvaluation(null);
    setShowFollowUp(false);
  };

  const handleNextQuestion = () => {
    stopListening();
    setQuestionIndex((i) => (i + 1) % track.questions.length);
    setAnswer("");
    setEvaluation(null);
    setShowFollowUp(false);
  };

  const handleScore = () => {
    stopListening();

    const combined = `${answer} ${interimText}`.trim();

    if (combined.length < 8) {
      setStatusMessage(
        "Speak or type at least a short explanation before scoring."
      );
      return;
    }

    setStatusMessage(null);
    setAnswer(combined);
    setInterimText("");
    setEvaluation(evaluateAnswer(combined, question, track.slug === "hr"));
    setShowFollowUp(true);

  };

  const primarySkill = resumeSkill.split(",")[0]?.trim();

  const resumeAwareFollowUp = primarySkill
    ? `${question.adaptiveFollowUp} (Resume probe: how does this apply to your ${primarySkill} project?)`
    : question.adaptiveFollowUp;

  return (
    <div className="rounded-3xl border border-border bg-white p-5 shadow-card sm:p-8">
      <div className="flex flex-wrap items-center justify-between gap-3 border-b border-border pb-5">
        <div>
          <span className="inline-flex items-center gap-1.5 rounded-full bg-brand-50 px-3 py-1 font-mono text-xs font-semibold text-brand-800">
            <Sparkles className="h-3.5 w-3.5" aria-hidden="true" />
            INTERACTIVE BROWSER DEMO • ZERO INSTALL
          </span>

          <h3 className="mt-2 text-xl font-extrabold text-ink sm:text-2xl">
            Try a Spoken or Typed Mock Interview Right Now
          </h3>
        </div>

        <div
          className="inline-flex rounded-xl border border-border bg-canvas p-1"
          role="group"
          aria-label="Answer input mode"
        >
          <button
            type="button"
            onClick={() => setMode("voice")}
            disabled={!speechSupported}
            className={`inline-flex items-center gap-1.5 rounded-lg px-3 py-1.5 text-xs font-semibold transition-colors ${
              mode === "voice"
                ? "bg-brand-700 text-white"
                : "text-ink-muted hover:text-ink disabled:opacity-40"
            }`}
          >
            <Mic className="h-3.5 w-3.5" aria-hidden="true" />
            Voice Mode
          </button>

          <button
            type="button"
            onClick={() => {
              stopListening();
              setMode("text");
            }}
            className={`inline-flex items-center gap-1.5 rounded-lg px-3 py-1.5 text-xs font-semibold transition-colors ${
              mode === "text"
                ? "bg-brand-700 text-white"
                : "text-ink-muted hover:text-ink"
            }`}
          >
            <Keyboard className="h-3.5 w-3.5" aria-hidden="true" />
            Typed Mode
          </button>
        </div>
      </div>

      <div className="mt-5 grid gap-4 sm:grid-cols-2">
        <div>
          <label
            htmlFor="sim-track"
            className="block text-xs font-bold uppercase tracking-wider text-ink-subtle"
          >
            1. Select Placement Track (9 Built-In)
          </label>

          <select
            id="sim-track"
            value={selectedSlug}
            onChange={(e) => handleTrackChange(e.target.value)}
            className="mt-1.5 w-full rounded-xl border border-border bg-canvas px-3.5 py-2.5 text-sm font-semibold text-ink"
          >
            {INTERVIEW_TRACKS.map((t) => (
              <option key={t.slug} value={t.slug}>
                {t.name} ({t.category})
              </option>
            ))}
          </select>
        </div>

        <div>
          <label
            htmlFor="sim-resume"
            className="block text-xs font-bold uppercase tracking-wider text-ink-subtle"
          >
            2. Resume Skill Context (Optional)
          </label>

          <div className="relative mt-1.5">
            <FileText
              className="pointer-events-none absolute left-3 top-3 h-4 w-4 text-ink-subtle"
              aria-hidden="true"
            />

            <input
              id="sim-resume"
              type="text"
              value={resumeSkill}
              onChange={(e) => setResumeSkill(e.target.value)}
              placeholder="e.g. React, Node.js, MongoDB, AWS"
              className="w-full rounded-xl border border-border bg-canvas py-2.5 pl-9 pr-3.5 text-sm text-ink"
            />
          </div>
        </div>
      </div>

      <div className="mt-5 rounded-2xl border border-brand-200 bg-brand-50/60 p-5">
        <div className="flex flex-wrap items-center justify-between gap-2">
          <div className="flex items-center gap-2">
            <span className="rounded-md bg-brand-700 px-2.5 py-0.5 font-mono text-xs font-semibold text-white">
              {track.shortName}
            </span>

            <span className="rounded-md bg-white px-2.5 py-0.5 font-mono text-xs font-semibold text-ink-muted ring-1 ring-border">
              {question.difficulty}
            </span>

            <span className="font-mono text-xs text-ink-subtle">
              Q{(questionIndex % track.questions.length) + 1} /{" "}
              {track.questions.length}
            </span>
          </div>

          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={() => speakText(question.question)}
              className="inline-flex items-center gap-1.5 rounded-lg border border-brand-200 bg-white px-3 py-1.5 text-xs font-semibold text-brand-800 hover:bg-brand-50"
            >
              {isSpeaking ? (
                <>
                  <VolumeX className="h-3.5 w-3.5" aria-hidden="true" />
                  Stop Audio
                </>
              ) : (
                <>
                  <Volume2 className="h-3.5 w-3.5" aria-hidden="true" />
                  Read Aloud
                </>
              )}
            </button>

            <button
              type="button"
              onClick={handleNextQuestion}
              className="inline-flex items-center gap-1 rounded-lg border border-border bg-white px-3 py-1.5 text-xs font-semibold text-ink-muted hover:text-ink"
            >
              Next Question
              <ArrowRight className="h-3.5 w-3.5" aria-hidden="true" />
            </button>
          </div>
        </div>

        <p className="mt-3 text-base font-bold leading-snug text-ink sm:text-lg">
          &ldquo;{question.question}&rdquo;
        </p>
      </div>

      <div className="mt-5">
        <div className="flex flex-wrap items-center justify-between gap-2">
          <label
            htmlFor="sim-answer"
            className="text-xs font-bold uppercase tracking-wider text-ink-subtle"
          >
            Your Answer Transcript{" "}
            {mode === "voice"
              ? "(Live Speech-to-Text + Editable)"
              : "(Typed Accessibility Mode)"}
          </label>

          <span
            className="inline-flex items-center gap-1.5 font-mono text-[11px] text-ink-subtle"
            title="Informational session telemetry (FR9) — never punitive"
          >
            <Eye className="h-3.5 w-3.5" aria-hidden="true" />
            Focus log (info only): {focusEvents.tabBlur} blurs •{" "}
            {focusEvents.paste} pastes
          </span>
        </div>

        <textarea
          id="sim-answer"
          rows={compact ? 4 : 5}
          value={answer + (interimText ? ` ${interimText}` : "")}
          onChange={(e) => {
            const value = e.target.value;

            if (value.trim()) {
              trackInterviewStart("text");
            }

            setInterimText("");
            setAnswer(value);
          }}
          onPaste={() =>
            setFocusEvents((prev) => ({
              ...prev,
              paste: prev.paste + 1,
            }))
          }
          placeholder={
            mode === "voice"
              ? "Click 'Start Speaking' below and explain your answer aloud — or type directly here..."
              : "Type your structured answer here (explain core concept, trade-offs, and an example)..."
          }
          className="mt-2 w-full rounded-2xl border border-border bg-canvas p-4 text-sm leading-relaxed text-ink placeholder:text-ink-subtle"
        />

        {statusMessage && (
          <p className="mt-2 text-xs font-medium text-saffron-700" role="status">
            {statusMessage}
          </p>
        )}

        <div className="mt-4 flex flex-wrap items-center gap-3">
          {mode === "voice" && speechSupported && (
            <button
              type="button"
              onClick={isListening ? stopListening : startListening}
              className={`inline-flex items-center gap-2 rounded-xl px-4 py-2.5 text-sm font-bold shadow-sm transition-colors ${
                isListening
                  ? "bg-red-600 text-white hover:bg-red-700"
                  : "bg-ink text-white hover:bg-slate-800"
              }`}
            >
              {isListening ? (
                <>
                  <MicOff className="h-4 w-4" aria-hidden="true" />
                  Stop Recording
                </>
              ) : (
                <>
                  <Mic className="h-4 w-4" aria-hidden="true" />
                  Start Speaking (en-IN)
                </>
              )}
            </button>
          )}

          <button
            type="button"
            onClick={handleScore}
            className="inline-flex items-center gap-2 rounded-xl bg-brand-700 px-5 py-2.5 text-sm font-bold text-white shadow-sm transition-colors hover:bg-brand-800"
          >
            <CheckCircle2 className="h-4 w-4" aria-hidden="true" />
            Evaluate Against 0–10 Rubric
          </button>

          <button
            type="button"
            onClick={() => {
              stopListening();
              setAnswer("");
              setInterimText("");
              setEvaluation(null);
              setShowFollowUp(false);
              hasTrackedInterviewStartRef.current = false;
            }}
            className="inline-flex items-center gap-1.5 rounded-xl border border-border bg-white px-3.5 py-2.5 text-sm font-semibold text-ink-muted hover:text-ink"
          >
            <RotateCcw className="h-4 w-4" aria-hidden="true" />
            Reset
          </button>
        </div>
      </div>

      {evaluation && (
        <div className="mt-6 space-y-5 rounded-2xl border border-border bg-canvas p-5">
          <div className="flex flex-wrap items-center justify-between gap-3">
            <div>
              <h4 className="text-base font-extrabold text-ink">
                Instant Diagnostic Rubric Preview
              </h4>

              <p className="text-xs text-ink-subtle">
                Formative coaching estimate ({evaluation.wordCount} words).
                Launch AcePrep for full Groq Llama 3.3 70B evaluation.
              </p>
            </div>

            <div className="rounded-xl bg-brand-700 px-4 py-2 text-center text-white">
              <div className="font-mono text-xl font-extrabold">
                {evaluation.overall}/10
              </div>

              <div className="text-[10px] font-semibold uppercase tracking-wider text-brand-100">
                Composite
              </div>
            </div>
          </div>

          <div className="grid gap-3 sm:grid-cols-3">
            {[
              {
                label:
                  track.slug === "hr"
                    ? "STAR Structure"
                    : "Technical Accuracy",
                score: evaluation.accuracy,
              },
              {
                label: "Depth & Trade-Offs",
                score: evaluation.depth,
              },
              {
                label: "Communication Structure",
                score: evaluation.structure,
              },
            ].map((item) => (
              <div
                key={item.label}
                className="rounded-xl border border-border bg-white p-3.5"
              >
                <div className="flex items-center justify-between text-xs font-bold text-ink-muted">
                  <span>{item.label}</span>
                  <span className="font-mono text-sm text-brand-800">
                    {item.score}/10
                  </span>
                </div>

                <div className="mt-2 h-2 overflow-hidden rounded-full bg-brand-50">
                  <div
                    className="h-full rounded-full bg-brand-600 transition-all"
                    style={{ width: `${item.score * 10}%` }}
                  />
                </div>
              </div>
            ))}
          </div>

          <div className="grid gap-4 md:grid-cols-2">
            <div className="rounded-xl border border-border bg-white p-4">
              <h5 className="text-xs font-bold uppercase tracking-wider text-brand-800">
                Strengths Detected
              </h5>

              <ul className="mt-2 space-y-1.5 text-xs leading-relaxed text-ink-muted">
                {evaluation.strengths.map((s, idx) => (
                  <li key={idx}>• {s}</li>
                ))}
              </ul>
            </div>

            <div className="rounded-xl border border-border bg-white p-4">
              <h5 className="text-xs font-bold uppercase tracking-wider text-saffron-700">
                Actionable Improvements
              </h5>

              <ul className="mt-2 space-y-1.5 text-xs leading-relaxed text-ink-muted">
                {evaluation.improvements.map((s, idx) => (
                  <li key={idx}>• {s}</li>
                ))}
              </ul>
            </div>
          </div>

          {showFollowUp && (
            <div className="rounded-xl border border-saffron-500/40 bg-saffron-50 p-4">
              <div className="font-mono text-[11px] font-bold uppercase tracking-wider text-saffron-700">
                Adaptive Follow-Up Probe
              </div>

              <p className="mt-1 text-sm font-bold text-ink">
                {resumeAwareFollowUp}
              </p>

              <p className="mt-2 text-xs leading-relaxed text-ink-muted">
                <strong>Model Answer Structure:</strong>{" "}
                {question.sampleOutline}
              </p>
            </div>
          )}

          <div className="flex flex-wrap items-center justify-between gap-3 border-t border-border pt-4">
            <Link
              href={`/tracks/${track.slug}/`}
              className="text-xs font-bold text-brand-700 hover:underline"
            >
              Explore full {track.shortName} question bank &amp; syllabus →
            </Link>

            <a
              href={SITE_CONFIG.appUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 rounded-xl bg-ink px-4 py-2 text-xs font-bold text-white hover:bg-slate-800"
            >
              Run Full 5-Question AI Interview on AcePrep
              <ArrowUpRight className="h-3.5 w-3.5" aria-hidden="true" />
            </a>
          </div>
        </div>
      )}
    </div>
  );
}
