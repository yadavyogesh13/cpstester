import { useState, useCallback, useRef } from "react";
import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { AdPlaceholder } from "@/components/AdPlaceholder";
import { useTestHistory } from "@/hooks/useLocalStorage";
import { useJsonLd } from "@/hooks/useJsonLd";
import { Zap, RotateCcw, Trophy, Clock, Target } from "lucide-react";

type TestState = "waiting" | "ready" | "tooEarly" | "result";

export default function ReactionTest() {
  const [testState, setTestState] = useState<TestState>("waiting");
  const [reactionTime, setReactionTime] = useState(0);
  const [attempts, setAttempts] = useState<number[]>([]);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);
  const startTimeRef = useRef<number>(0);
  const { addResult, getBestScore } = useTestHistory();

  // Add Tool schema for SEO
  useJsonLd({
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    "name": "Reaction Time Test",
    "description": "Measure your reflexes in milliseconds. Train to react faster in competitive games.",
    "url": "https://cpschecker.site/reaction-test",
    "applicationCategory": "UtilityApplication",
    "offers": {
      "@type": "Offer",
      "price": "0",
      "priceCurrency": "USD"
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.7",
      "ratingCount": "890"
    }
  });

  const bestScore = getBestScore("reaction");

  const startWaiting = useCallback(() => {
    setTestState("waiting");
    const randomDelay = Math.random() * 4000 + 1000; // 1-5 seconds

    timeoutRef.current = setTimeout(() => {
      setTestState("ready");
      startTimeRef.current = Date.now();
    }, randomDelay);
  }, []);

  const handleClick = useCallback(() => {
    if (testState === "waiting") {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
      setTestState("tooEarly");
    } else if (testState === "ready") {
      const time = Date.now() - startTimeRef.current;
      setReactionTime(time);
      setAttempts((prev) => [...prev, time]);
      setTestState("result");

      addResult({
        type: "reaction",
        score: time,
        duration: 0,
        details: { attempt: attempts.length + 1 },
      });
    } else if (testState === "tooEarly" || testState === "result") {
      startWaiting();
    }
  }, [testState, attempts.length, addResult, startWaiting]);

  const resetTest = useCallback(() => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
    setTestState("waiting");
    setReactionTime(0);
    setAttempts([]);
    startWaiting();
  }, [startWaiting]);

  const averageTime = attempts.length > 0 
    ? Math.round(attempts.reduce((a, b) => a + b, 0) / attempts.length)
    : 0;

  const bestAttempt = attempts.length > 0 ? Math.min(...attempts) : 0;

  const getReactionRating = (ms: number) => {
    if (ms <= 150) return { label: "Lightning Fast!", color: "text-yellow-500", bg: "bg-yellow-500/10" };
    if (ms <= 200) return { label: "Excellent!", color: "text-purple-500", bg: "bg-purple-500/10" };
    if (ms <= 250) return { label: "Great!", color: "text-primary", bg: "bg-primary/10" };
    if (ms <= 350) return { label: "Average", color: "text-accent", bg: "bg-accent/10" };
    return { label: "Keep Practicing", color: "text-muted-foreground", bg: "bg-muted" };
  };

  const rating = getReactionRating(reactionTime);

  return (
    <Layout>
      <div className="container py-8 md:py-12">
        {/* Breadcrumb */}
        <nav className="mb-6 text-sm" aria-label="Breadcrumb">
          <ol className="flex items-center gap-2">
            <li><a href="/" className="text-muted-foreground hover:text-primary">Home</a></li>
            <li className="text-muted-foreground">/</li>
            <li className="text-foreground font-medium">Reaction Test</li>
          </ol>
        </nav>

        <div className="mx-auto max-w-4xl">
          <div className="mb-8 text-center">
            <h1 className="mb-4 text-3xl font-black md:text-4xl">
              <span className="gradient-text">Reaction Time</span> Test
            </h1>
            <p className="text-muted-foreground">
              Test your reflexes. Wait for green, then click as fast as you can!
            </p>
          </div>

          {/* Test Area */}
          <div
            className={`mx-auto flex min-h-[350px] cursor-pointer flex-col items-center justify-center rounded-2xl border-2 p-8 select-none transition-all md:min-h-[400px] ${
              testState === "waiting" 
                ? "border-destructive/50 bg-destructive/10" 
                : testState === "ready"
                ? "border-accent bg-accent/20 glow-accent"
                : testState === "tooEarly"
                ? "border-warning/50 bg-warning/10"
                : "border-primary/50 bg-card"
            }`}
            onClick={handleClick}
            role="button"
            tabIndex={0}
            aria-label="Reaction test area"
            onKeyDown={(e) => {
              if (e.code === "Space" || e.code === "Enter") {
                e.preventDefault();
                handleClick();
              }
            }}
          >
            {testState === "waiting" && (
              <div className="text-center fade-in">
                <div className="mx-auto mb-4 h-20 w-20 rounded-full bg-destructive/20 flex items-center justify-center">
                  <Clock className="h-10 w-10 text-destructive" />
                </div>
                <p className="text-2xl font-bold text-destructive">Wait for Green...</p>
                <p className="mt-2 text-muted-foreground">Don't click yet!</p>
              </div>
            )}

            {testState === "ready" && (
              <div className="text-center fade-in">
                <div className="mx-auto mb-4 h-20 w-20 rounded-full bg-accent/30 flex items-center justify-center animate-pulse">
                  <Zap className="h-10 w-10 text-accent" />
                </div>
                <p className="text-2xl font-bold text-accent">CLICK NOW!</p>
              </div>
            )}

            {testState === "tooEarly" && (
              <div className="text-center fade-in">
                <div className="mx-auto mb-4 h-20 w-20 rounded-full bg-warning/20 flex items-center justify-center">
                  <span className="text-4xl">😅</span>
                </div>
                <p className="text-2xl font-bold text-warning">Too Early!</p>
                <p className="mt-2 text-muted-foreground">Click to try again</p>
              </div>
            )}

            {testState === "result" && (
              <div className="text-center fade-in">
                <div className="mb-2 text-6xl font-black gradient-text md:text-7xl">
                  {reactionTime}
                </div>
                <p className="mb-4 text-xl font-bold">milliseconds</p>
                <p className={`text-lg font-semibold ${rating.color}`}>
                  {rating.label}
                </p>
                <p className="mt-4 text-sm text-muted-foreground">Click to try again</p>
              </div>
            )}
          </div>

          {/* Stats & Actions */}
          {attempts.length > 0 && (
            <div className="mt-8 slide-up">
              {/* Stats Grid */}
              <div className="mb-6 grid grid-cols-2 gap-4 md:grid-cols-4">
                <div className="stat-card text-center">
                  <Target className="mx-auto mb-2 h-5 w-5 text-primary" />
                  <div className="text-2xl font-bold">{attempts.length}</div>
                  <div className="text-xs text-muted-foreground">Attempts</div>
                </div>
                <div className="stat-card text-center">
                  <Clock className="mx-auto mb-2 h-5 w-5 text-primary" />
                  <div className="text-2xl font-bold">{averageTime}ms</div>
                  <div className="text-xs text-muted-foreground">Average</div>
                </div>
                <div className="stat-card text-center">
                  <Zap className="mx-auto mb-2 h-5 w-5 text-accent" />
                  <div className="text-2xl font-bold">{bestAttempt}ms</div>
                  <div className="text-xs text-muted-foreground">Best This Session</div>
                </div>
                <div className="stat-card text-center">
                  <Trophy className="mx-auto mb-2 h-5 w-5 text-warning" />
                  <div className="text-2xl font-bold">{bestScore || "-"}ms</div>
                  <div className="text-xs text-muted-foreground">All-Time Best</div>
                </div>
              </div>

              <div className="flex justify-center">
                <Button variant="outline" onClick={resetTest}>
                  <RotateCcw className="mr-2 h-4 w-4" />
                  Reset Stats
                </Button>
              </div>
            </div>
          )}

          {attempts.length === 0 && testState !== "waiting" && (
            <div className="mt-8 flex justify-center">
              <Button variant="hero" onClick={startWaiting}>
                <Zap className="mr-2 h-5 w-5" />
                Start Test
              </Button>
            </div>
          )}

          {/* Initial Start Button */}
          {attempts.length === 0 && testState === "waiting" && timeoutRef.current === null && (
            <div className="mt-8 flex justify-center">
              <Button variant="hero" onClick={startWaiting}>
                <Zap className="mr-2 h-5 w-5" />
                Start Test
              </Button>
            </div>
          )}

          {/* Ad Space */}
          {/* <div className="mt-12 flex justify-center">
            <AdPlaceholder size="rectangle" />
          </div> */}

          {/* Content Section */}
          <section className="mt-12">
            <h2 className="mb-4 text-2xl font-bold">Understanding Reaction Time</h2>
            <div className="space-y-4 text-muted-foreground">
              <p>
                Reaction time is the interval between receiving a stimulus and responding to it. 
                For most humans, the average visual reaction time is around 250 milliseconds. 
                Professional gamers and athletes often have reaction times below 200ms.
              </p>
              <h3 className="text-lg font-semibold text-foreground">Reaction Time Benchmarks</h3>
              <ul className="grid gap-2 md:grid-cols-2">
                <li className="flex items-center gap-2">
                  <span className="h-3 w-3 rounded-full bg-yellow-500"></span>
                  <span>Under 150ms: Lightning Fast</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="h-3 w-3 rounded-full bg-purple-500"></span>
                  <span>150-200ms: Excellent</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="h-3 w-3 rounded-full bg-primary"></span>
                  <span>200-250ms: Great</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="h-3 w-3 rounded-full bg-accent"></span>
                  <span>250-350ms: Average</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="h-3 w-3 rounded-full bg-muted-foreground"></span>
                  <span>350ms+: Keep Practicing</span>
                </li>
              </ul>
            </div>
          </section>
        </div>
      </div>
    </Layout>
  );
}
