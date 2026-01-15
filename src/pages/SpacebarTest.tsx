import { useState, useCallback, useRef, useEffect } from "react";
import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { AdPlaceholder } from "@/components/AdPlaceholder";
import { useTestHistory } from "@/hooks/useLocalStorage";
import { Space, RotateCcw, Trophy, Clock, Zap } from "lucide-react";

const DURATION_OPTIONS = [5, 10, 30];

type TestState = "idle" | "running" | "finished";

export default function SpacebarTest() {
  const [duration, setDuration] = useState(10);
  const [testState, setTestState] = useState<TestState>("idle");
  const [hits, setHits] = useState(0);
  const [timeLeft, setTimeLeft] = useState(duration);
  const [sps, setSps] = useState(0);
  const timerRef = useRef<NodeJS.Timeout | null>(null);
  const startTimeRef = useRef<number>(0);
  const { addResult, getBestScore } = useTestHistory();

  const bestScore = getBestScore("spacebar");

  useEffect(() => {
    setTimeLeft(duration);
  }, [duration]);

  const startTest = useCallback(() => {
    setTestState("running");
    setHits(1);
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

  const handleSpacebar = useCallback((e: KeyboardEvent | React.KeyboardEvent) => {
    if (e.code === "Space") {
      e.preventDefault();
      if (testState === "idle") {
        startTest();
      } else if (testState === "running") {
        setHits((prev) => prev + 1);
      }
    }
  }, [testState, startTest]);

  const handleClick = useCallback(() => {
    if (testState === "idle") {
      startTest();
    } else if (testState === "running") {
      setHits((prev) => prev + 1);
    }
  }, [testState, startTest]);

  useEffect(() => {
    window.addEventListener("keydown", handleSpacebar);
    return () => window.removeEventListener("keydown", handleSpacebar);
  }, [handleSpacebar]);

  const resetTest = useCallback(() => {
    if (timerRef.current) {
      clearInterval(timerRef.current);
    }
    setTestState("idle");
    setHits(0);
    setTimeLeft(duration);
    setSps(0);
  }, [duration]);

  useEffect(() => {
    if (testState === "finished") {
      const finalSps = hits / duration;
      setSps(finalSps);
      addResult({
        type: "spacebar",
        score: parseFloat(finalSps.toFixed(2)),
        duration,
        details: { hits },
      });
    }
  }, [testState, hits, duration, addResult]);

  const getScoreRating = (sps: number) => {
    if (sps >= 12) return { label: "Legendary", color: "text-yellow-500" };
    if (sps >= 9) return { label: "Expert", color: "text-purple-500" };
    if (sps >= 6) return { label: "Good", color: "text-primary" };
    if (sps >= 4) return { label: "Average", color: "text-accent" };
    return { label: "Beginner", color: "text-muted-foreground" };
  };

  const rating = getScoreRating(sps);

  return (
    <Layout>
      <div className="container py-8 md:py-12">
        {/* Breadcrumb */}
        <nav className="mb-6 text-sm" aria-label="Breadcrumb">
          <ol className="flex items-center gap-2">
            <li><a href="/" className="text-muted-foreground hover:text-primary">Home</a></li>
            <li className="text-muted-foreground">/</li>
            <li className="text-foreground font-medium">Spacebar Test</li>
          </ol>
        </nav>

        <div className="mx-auto max-w-4xl">
          <div className="mb-8 text-center">
            <h1 className="mb-4 text-3xl font-black md:text-4xl">
              <span className="gradient-text">Spacebar</span> Speed Test
            </h1>
            <p className="text-muted-foreground">
              Test how fast you can hit the spacebar. Press SPACE or click to start.
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
            tabIndex={0}
            role="button"
            aria-label={testState === "idle" ? "Press spacebar to start test" : "Spacebar test area"}
          >
            {testState === "idle" && (
              <div className="text-center fade-in">
                <div className="mx-auto mb-4 flex h-20 w-40 items-center justify-center rounded-xl border-2 border-primary bg-primary/10 animate-bounce-subtle">
                  <span className="text-lg font-bold text-primary">SPACE</span>
                </div>
                <p className="text-xl font-bold">Press SPACE to Start</p>
                <p className="mt-2 text-sm text-muted-foreground">
                  {duration} second test
                </p>
              </div>
            )}

            {testState === "running" && (
              <div className="text-center">
                <div className="mb-4 font-mono text-6xl font-black text-primary glow-text-primary count-animation" key={hits}>
                  {hits}
                </div>
                <p className="text-lg text-muted-foreground">hits</p>
                <div className="mt-6 flex items-center justify-center gap-2 text-2xl font-bold">
                  <Clock className="h-6 w-6 text-primary" />
                  <span className="font-mono">{timeLeft.toFixed(1)}s</span>
                </div>
                <div className="mx-auto mt-6 flex h-16 w-32 items-center justify-center rounded-xl border-2 border-primary bg-primary/20 pulse-ring">
                  <span className="font-bold text-primary">SPACE</span>
                </div>
              </div>
            )}

            {testState === "finished" && (
              <div className="text-center fade-in">
                <div className="mb-2 text-6xl font-black gradient-text md:text-7xl">
                  {sps.toFixed(2)}
                </div>
                <p className="mb-4 text-xl font-bold">SPS (Spacebar Per Second)</p>
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
                  <Space className="mx-auto mb-2 h-5 w-5 text-primary" />
                  <div className="text-2xl font-bold">{hits}</div>
                  <div className="text-xs text-muted-foreground">Total Hits</div>
                </div>
                <div className="stat-card text-center">
                  <Clock className="mx-auto mb-2 h-5 w-5 text-primary" />
                  <div className="text-2xl font-bold">{duration}s</div>
                  <div className="text-xs text-muted-foreground">Duration</div>
                </div>
                <div className="stat-card text-center">
                  <Zap className="mx-auto mb-2 h-5 w-5 text-primary" />
                  <div className="text-2xl font-bold">{sps.toFixed(2)}</div>
                  <div className="text-xs text-muted-foreground">SPS</div>
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
            <h2 className="mb-4 text-2xl font-bold">Spacebar Speed Test Guide</h2>
            <div className="space-y-4 text-muted-foreground">
              <p>
                The spacebar test measures how quickly you can repeatedly press the spacebar key. 
                This is useful for games that require rapid spacebar input, such as jumping in 
                platformers or performing special actions.
              </p>
              <p>
                To improve your spacebar speed, practice regularly and find a comfortable hand 
                position. Some players prefer using their thumb, while others use multiple fingers 
                for alternating presses.
              </p>
            </div>
          </section>
        </div>
      </div>
    </Layout>
  );
}
