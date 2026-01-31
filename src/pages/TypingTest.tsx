import { useState, useCallback, useRef, useEffect } from "react";
import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { AdPlaceholder } from "@/components/AdPlaceholder";
import { useTestHistory } from "@/hooks/useLocalStorage";
import { useJsonLd } from "@/hooks/useJsonLd";
import { useSeo } from "@/hooks/useSeo";
import { Keyboard, RotateCcw, Trophy, Clock, Target, Zap, Type } from "lucide-react";

const SAMPLE_TEXTS = [
  "The quick brown fox jumps over the lazy dog. This pangram contains every letter of the alphabet at least once. Typing practice helps improve speed and accuracy over time.",
  "Programming is the art of telling a computer what to do. Every line of code represents a small step toward solving a larger problem. Practice makes perfect in coding.",
  "Gaming requires quick reflexes and precise movements. Professional players train for hours each day to maintain their competitive edge in tournaments around the world.",
  "Technology advances rapidly, changing how we work and live. Staying updated with the latest developments is essential for success in the modern digital economy.",
  "Words flow like water through a river, carrying meaning from mind to mind. The art of communication shapes our understanding of the world around us.",
];

const DURATIONS = [30, 60, 120];

type TestState = "idle" | "running" | "finished";

export default function TypingTest() {
  const [duration, setDuration] = useState(60);
  const [testState, setTestState] = useState<TestState>("idle");
  const [sampleText, setSampleText] = useState("");
  const [typedText, setTypedText] = useState("");
  const [timeLeft, setTimeLeft] = useState(duration);
  const [startTime, setStartTime] = useState(0);
  const [stats, setStats] = useState({ wpm: 0, cpm: 0, accuracy: 0, errors: 0 });
  const inputRef = useRef<HTMLInputElement>(null);
  const timerRef = useRef<NodeJS.Timeout | null>(null);
  const { addResult, getBestScore } = useTestHistory();

  const bestScore = getBestScore("typing");

  // Add Tool schema for SEO
  useJsonLd({
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    "name": "Typing Speed Test",
    "description": "Calculate your WPM, CPM, and accuracy. Improve your typing skills with real-time feedback.",
    "url": "https://cpschecker.site/typing-test",
    "applicationCategory": "UtilityApplication",
    "offers": {
      "@type": "Offer",
      "price": "0",
      "priceCurrency": "USD"
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.7",
      "ratingCount": "980"
    }
  });

  // Page-level SEO meta tags
  useSeo({
    title: "Typing Test – WPM & Accuracy | CPS Checker",
    description: "Measure your typing speed with our WPM and accuracy test. Improve typing skills with real-time feedback and progress tracking.",
    url: "https://cpschecker.site/typing-test",
    image: "https://cpschecker.site/cps-score-og.png",
    keywords: "typing test, wpm test, typing speed test"
  });

  const getRandomText = () => {
    return SAMPLE_TEXTS[Math.floor(Math.random() * SAMPLE_TEXTS.length)];
  };

  useEffect(() => {
    setSampleText(getRandomText());
    setTimeLeft(duration);
  }, [duration]);

  const startTest = useCallback(() => {
    setTestState("running");
    setStartTime(Date.now());
    setTypedText("");
    inputRef.current?.focus();

    timerRef.current = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev <= 1) {
          clearInterval(timerRef.current!);
          setTestState("finished");
          return 0;
        }
        return prev - 1;
      });
    }, 1000);
  }, []);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (testState === "idle") {
      startTest();
    }

    const value = e.target.value;
    setTypedText(value);

    // Check if completed
    if (value === sampleText) {
      clearInterval(timerRef.current!);
      setTestState("finished");
    }
  };

  const resetTest = useCallback(() => {
    if (timerRef.current) {
      clearInterval(timerRef.current);
    }
    setTestState("idle");
    setTypedText("");
    setTimeLeft(duration);
    setStats({ wpm: 0, cpm: 0, accuracy: 0, errors: 0 });
    setSampleText(getRandomText());
  }, [duration]);

  useEffect(() => {
    if (testState === "finished") {
      const elapsedMinutes = (Date.now() - startTime) / 60000;
      const words = typedText.trim().split(/\s+/).filter(Boolean).length;
      const characters = typedText.length;

      let correctChars = 0;
      for (let i = 0; i < typedText.length; i++) {
        if (typedText[i] === sampleText[i]) {
          correctChars++;
        }
      }

      const accuracy = typedText.length > 0 
        ? Math.round((correctChars / typedText.length) * 100) 
        : 0;
      const wpm = Math.round(words / elapsedMinutes) || 0;
      const cpm = Math.round(characters / elapsedMinutes) || 0;
      const errors = typedText.length - correctChars;

      setStats({ wpm, cpm, accuracy, errors });

      addResult({
        type: "typing",
        score: wpm,
        duration: Math.round(elapsedMinutes * 60),
        details: { cpm, accuracy, errors },
      });
    }
  }, [testState, typedText, sampleText, startTime, addResult]);

  const renderText = () => {
    return sampleText.split("").map((char, index) => {
      let className = "text-muted-foreground";
      if (index < typedText.length) {
        className = typedText[index] === char 
          ? "text-accent" 
          : "text-destructive bg-destructive/20";
      } else if (index === typedText.length) {
        className = "bg-primary/30 text-foreground";
      }
      return (
        <span key={index} className={className}>
          {char}
        </span>
      );
    });
  };

  const getWpmRating = (wpm: number) => {
    if (wpm >= 80) return { label: "Professional", color: "text-yellow-500" };
    if (wpm >= 60) return { label: "Fast", color: "text-purple-500" };
    if (wpm >= 40) return { label: "Average", color: "text-primary" };
    if (wpm >= 25) return { label: "Developing", color: "text-accent" };
    return { label: "Beginner", color: "text-muted-foreground" };
  };

  const rating = getWpmRating(stats.wpm);

  return (
    <Layout>
      <div className="container py-8 md:py-12">
        {/* Breadcrumb */}
        <nav className="mb-6 text-sm" aria-label="Breadcrumb">
          <ol className="flex items-center gap-2">
            <li><a href="/" className="text-muted-foreground hover:text-primary">Home</a></li>
            <li className="text-muted-foreground">/</li>
            <li className="text-foreground font-medium">Typing Test</li>
          </ol>
        </nav>

        <div className="mx-auto max-w-4xl">
          <div className="mb-8 text-center">
            <h1 className="mb-4 text-3xl font-black md:text-4xl">
              <span className="gradient-text">Typing Speed</span> Test
            </h1>
            <p className="text-muted-foreground">
              Test your typing speed and accuracy. Start typing to begin the test.
            </p>
          </div>

          {/* Duration Selector */}
          <div className="mb-6 flex flex-wrap justify-center gap-2">
            {DURATIONS.map((d) => (
              <Button
                key={d}
                variant={duration === d ? "default" : "outline"}
                size="sm"
                onClick={() => {
                  if (testState === "idle") {
                    setDuration(d);
                    setTimeLeft(d);
                  }
                }}
                disabled={testState !== "idle"}
              >
                {d}s
              </Button>
            ))}
          </div>

          {/* Timer */}
          <div className="mb-4 flex items-center justify-center gap-2 text-2xl font-bold">
            <Clock className="h-6 w-6 text-primary" />
            <span className="font-mono">{timeLeft}s</span>
          </div>

          {/* Text Display */}
          <div className="test-area mb-4 p-6">
            <p className="font-mono text-lg leading-relaxed tracking-wide">
              {renderText()}
            </p>
          </div>

          {/* Input Area */}
          <input
            ref={inputRef}
            type="text"
            value={typedText}
            onChange={handleInputChange}
            disabled={testState === "finished"}
            className="w-full rounded-xl border-2 border-primary/30 bg-card p-4 font-mono text-lg outline-none transition-all focus:border-primary focus:ring-2 focus:ring-primary/20 disabled:opacity-50"
            placeholder={testState === "idle" ? "Start typing here..." : ""}
            autoComplete="off"
            autoCorrect="off"
            autoCapitalize="off"
            spellCheck={false}
          />

          {/* Results */}
          {testState === "finished" && (
            <div className="mt-8 slide-up">
              <div className="mb-6 text-center">
                <div className="mb-2 text-6xl font-black gradient-text">{stats.wpm}</div>
                <p className="text-xl font-bold">WPM</p>
                <p className={`mt-2 text-lg font-semibold ${rating.color}`}>
                  {rating.label}
                </p>
              </div>

              {/* Stats Grid */}
              <div className="mb-6 grid grid-cols-2 gap-4 md:grid-cols-4">
                <div className="stat-card text-center">
                  <Type className="mx-auto mb-2 h-5 w-5 text-primary" />
                  <div className="text-2xl font-bold">{stats.wpm}</div>
                  <div className="text-xs text-muted-foreground">WPM</div>
                </div>
                <div className="stat-card text-center">
                  <Keyboard className="mx-auto mb-2 h-5 w-5 text-primary" />
                  <div className="text-2xl font-bold">{stats.cpm}</div>
                  <div className="text-xs text-muted-foreground">CPM</div>
                </div>
                <div className="stat-card text-center">
                  <Target className="mx-auto mb-2 h-5 w-5 text-accent" />
                  <div className="text-2xl font-bold">{stats.accuracy}%</div>
                  <div className="text-xs text-muted-foreground">Accuracy</div>
                </div>
                <div className="stat-card text-center">
                  <Trophy className="mx-auto mb-2 h-5 w-5 text-warning" />
                  <div className="text-2xl font-bold">{bestScore || "-"}</div>
                  <div className="text-xs text-muted-foreground">Best WPM</div>
                </div>
              </div>

              <div className="flex justify-center">
                <Button variant="hero" onClick={resetTest}>
                  <RotateCcw className="mr-2 h-5 w-5" />
                  Try Again
                </Button>
              </div>
            </div>
          )}

          {testState === "idle" && (
            <div className="mt-4 text-center">
              <Button variant="outline" onClick={resetTest}>
                <RotateCcw className="mr-2 h-4 w-4" />
                New Text
              </Button>
            </div>
          )}

          {/* Ad Space */}
          {/* <div className="mt-12 flex justify-center">
            <AdPlaceholder size="rectangle" />
          </div> */}

          {/* Content Section */}
          <section className="mt-12">
            <h2 className="mb-4 text-2xl font-bold">About the Typing Speed Test</h2>
            <div className="space-y-4 text-muted-foreground">
              <p>
                Our typing speed test measures your Words Per Minute (WPM), Characters Per Minute (CPM), 
                and typing accuracy. Regular practice can significantly improve your typing speed and 
                reduce errors.
              </p>
              <h3 className="text-lg font-semibold text-foreground">Typing Speed Benchmarks</h3>
              <ul className="grid gap-2 md:grid-cols-2">
                <li className="flex items-center gap-2">
                  <span className="h-3 w-3 rounded-full bg-muted-foreground"></span>
                  <span>Under 25 WPM: Beginner</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="h-3 w-3 rounded-full bg-accent"></span>
                  <span>25-39 WPM: Developing</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="h-3 w-3 rounded-full bg-primary"></span>
                  <span>40-59 WPM: Average</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="h-3 w-3 rounded-full bg-purple-500"></span>
                  <span>60-79 WPM: Fast</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="h-3 w-3 rounded-full bg-yellow-500"></span>
                  <span>80+ WPM: Professional</span>
                </li>
              </ul>
            </div>
          </section>
        </div>
      </div>
    </Layout>
  );
}
