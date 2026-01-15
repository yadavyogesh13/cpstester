import { useState, useCallback, useRef, useEffect } from "react";
import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { AdPlaceholder } from "@/components/AdPlaceholder";
import { useTestHistory } from "@/hooks/useLocalStorage";
import { MousePointerClick, RotateCcw, Trophy, Clock, Zap, TrendingUp } from "lucide-react";

const DURATION_OPTIONS = [1, 5, 10, 30, 60];

type TestState = "idle" | "running" | "finished";

export default function CPSTest() {
  const [duration, setDuration] = useState(5);
  const [testState, setTestState] = useState<TestState>("idle");
  const [clicks, setClicks] = useState(0);
  const [timeLeft, setTimeLeft] = useState(duration);
  const [cps, setCps] = useState(0);
  const timerRef = useRef<NodeJS.Timeout | null>(null);
  const startTimeRef = useRef<number>(0);
  const { addResult, getBestScore } = useTestHistory();

  const bestScore = getBestScore("cps");

  useEffect(() => {
    setTimeLeft(duration);
  }, [duration]);

  const startTest = useCallback(() => {
    setTestState("running");
    setClicks(1);
    setTimeLeft(duration);
    startTimeRef.current = Date.now();

    timerRef.current = setInterval(() => {
      const elapsed = (Date.now() - startTimeRef.current) / 1000;
      const remaining = Math.max(0, duration - elapsed);
      setTimeLeft(remaining);

      if (remaining <= 0) {
        clearInterval(timerRef.current!);
        setTestState("finished");
      }
    }, 50);
  }, [duration]);

  const handleClick = useCallback(() => {
    if (testState === "idle") {
      startTest();
    } else if (testState === "running") {
      setClicks((prev) => prev + 1);
    }
  }, [testState, startTest]);

  const resetTest = useCallback(() => {
    if (timerRef.current) {
      clearInterval(timerRef.current);
    }
    setTestState("idle");
    setClicks(0);
    setTimeLeft(duration);
    setCps(0);
  }, [duration]);

  useEffect(() => {
    if (testState === "finished") {
      const finalCps = clicks / duration;
      setCps(finalCps);
      addResult({
        type: "cps",
        score: parseFloat(finalCps.toFixed(2)),
        duration,
        details: { clicks },
      });
    }
  }, [testState, clicks, duration, addResult]);

  const getScoreRating = (cps: number) => {
    if (cps >= 14) return { label: "Legendary", color: "text-yellow-500" };
    if (cps >= 11) return { label: "Expert", color: "text-purple-500" };
    if (cps >= 8) return { label: "Advanced", color: "text-primary" };
    if (cps >= 6) return { label: "Average", color: "text-accent" };
    return { label: "Beginner", color: "text-muted-foreground" };
  };

  const rating = getScoreRating(cps);

  return (
    <Layout>
      <div className="container py-8 md:py-12">
        {/* Breadcrumb */}
        <nav className="mb-6 text-sm" aria-label="Breadcrumb">
          <ol className="flex items-center gap-2">
            <li><a href="/" className="text-muted-foreground hover:text-primary">Home</a></li>
            <li className="text-muted-foreground">/</li>
            <li className="text-foreground font-medium">CPS Test</li>
          </ol>
        </nav>

        <div className="mx-auto max-w-4xl">
          <div className="mb-8 text-center">
            <h1 className="mb-4 text-3xl font-black md:text-4xl">
              <span className="gradient-text">CPS Test</span> - Click Speed Test
            </h1>
            <p className="text-muted-foreground">
              Measure your clicks per second. Click the area below to start the test.
            </p>
          </div>

          {/* Duration Selector */}
          <div className="mb-6 flex flex-wrap justify-center gap-2">
            {DURATION_OPTIONS.map((d) => (
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

          {/* Test Area */}
          <div
            className={`test-area mx-auto flex min-h-[300px] cursor-pointer flex-col items-center justify-center p-8 select-none transition-all md:min-h-[350px] ${
              testState === "running" ? "glow-primary" : ""
            }`}
            onClick={handleClick}
            onContextMenu={(e) => e.preventDefault()}
            role="button"
            tabIndex={0}
            aria-label={testState === "idle" ? "Click to start CPS test" : "Click area"}
            onKeyDown={(e) => {
              if (e.code === "Space" || e.code === "Enter") {
                e.preventDefault();
                handleClick();
              }
            }}
          >
            {testState === "idle" && (
              <div className="text-center fade-in">
                <MousePointerClick className="mx-auto mb-4 h-16 w-16 text-primary animate-bounce-subtle" />
                <p className="text-xl font-bold">Click Here to Start</p>
                <p className="mt-2 text-sm text-muted-foreground">
                  {duration} second test
                </p>
              </div>
            )}

            {testState === "running" && (
              <div className="text-center">
                <div className="mb-4 font-mono text-6xl font-black text-primary glow-text-primary count-animation" key={clicks}>
                  {clicks}
                </div>
                <p className="text-lg text-muted-foreground">clicks</p>
                <div className="mt-6 flex items-center justify-center gap-2 text-2xl font-bold">
                  <Clock className="h-6 w-6 text-primary" />
                  <span className="font-mono">{timeLeft.toFixed(1)}s</span>
                </div>
              </div>
            )}

            {testState === "finished" && (
              <div className="text-center fade-in">
                <div className="mb-2 text-6xl font-black gradient-text md:text-7xl">
                  {cps.toFixed(2)}
                </div>
                <p className="mb-4 text-xl font-bold">CPS</p>
                <p className={`text-lg font-semibold ${rating.color}`}>
                  {rating.label}
                </p>
              </div>
            )}
          </div>

          {/* Results & Actions */}
          {testState === "finished" && (
            <div className="mt-8 slide-up">
              {/* Stats Grid */}
              <div className="mb-6 grid grid-cols-2 gap-4 md:grid-cols-4">
                <div className="stat-card text-center">
                  <MousePointerClick className="mx-auto mb-2 h-5 w-5 text-primary" />
                  <div className="text-2xl font-bold">{clicks}</div>
                  <div className="text-xs text-muted-foreground">Total Clicks</div>
                </div>
                <div className="stat-card text-center">
                  <Clock className="mx-auto mb-2 h-5 w-5 text-primary" />
                  <div className="text-2xl font-bold">{duration}s</div>
                  <div className="text-xs text-muted-foreground">Duration</div>
                </div>
                <div className="stat-card text-center">
                  <Zap className="mx-auto mb-2 h-5 w-5 text-primary" />
                  <div className="text-2xl font-bold">{cps.toFixed(2)}</div>
                  <div className="text-xs text-muted-foreground">CPS</div>
                </div>
                <div className="stat-card text-center">
                  <Trophy className="mx-auto mb-2 h-5 w-5 text-warning" />
                  <div className="text-2xl font-bold">{bestScore?.toFixed(2) || "-"}</div>
                  <div className="text-xs text-muted-foreground">Best Score</div>
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

          {/* Ad Space */}
          {/* <div className="mt-12 flex justify-center">
            <AdPlaceholder size="rectangle" />
          </div> */}

          {/* Content Section */}
          <section className="mt-12">
            <h2 className="mb-4 text-2xl font-bold">How to Use the CPS Test</h2>
            <div className="space-y-4 text-muted-foreground">
              <p>
                The CPS (Clicks Per Second) test measures how fast you can click your mouse button. 
                Simply select your preferred test duration, click the test area to begin, and click 
                as fast as you can until the timer runs out.
              </p>
              <h3 className="text-lg font-semibold text-foreground">CPS Score Rankings</h3>
              <ul className="grid gap-2 md:grid-cols-2">
                <li className="flex items-center gap-2">
                  <span className="h-3 w-3 rounded-full bg-muted-foreground"></span>
                  <span>1-5 CPS: Beginner</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="h-3 w-3 rounded-full bg-accent"></span>
                  <span>6-7 CPS: Average</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="h-3 w-3 rounded-full bg-primary"></span>
                  <span>8-10 CPS: Advanced</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="h-3 w-3 rounded-full bg-purple-500"></span>
                  <span>11-13 CPS: Expert</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="h-3 w-3 rounded-full bg-yellow-500"></span>
                  <span>14+ CPS: Legendary</span>
                </li>
              </ul>
            </div>
          </section>
        </div>
      </div>
    </Layout>
  );
}
