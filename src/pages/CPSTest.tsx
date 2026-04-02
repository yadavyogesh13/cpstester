import { useState, useCallback, useRef, useEffect } from "react";
import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { AdPlaceholder } from "@/components/AdPlaceholder";
import { useTestHistory } from "@/hooks/useLocalStorage";
import { useJsonLd } from "@/hooks/useJsonLd";
import { useSeo } from "@/hooks/useSeo";
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

  // Add Tool schema for SEO
  useJsonLd({
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    "name": "CPS Test",
    "description": "Measure your clicks per second with precision timing. Test with 1s, 5s, 10s, 30s, or 60s durations.",
    "url": "https://cpschecker.site/cps-test",
    "applicationCategory": "UtilityApplication",
    "offers": {
      "@type": "Offer",
      "price": "0",
      "priceCurrency": "USD"
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.8",
      "ratingCount": "1200"
    }
  });

  // Page-level SEO meta tags
  useSeo({
    title: "CPS Test (Clicks Per Second) – Free Click Speed Test | CPS Checker",
    description: "Test your clicking speed with our free CPS Test. Measure clicks per second in 1s, 5s, 10s, 30s, or 60s and improve your mouse speed.",
    url: "https://cpschecker.site/cps-test",
    image: "https://cpschecker.site/assets/cps-score-og.png",
    keywords: "click per second test, cps test, click speed test, clicks per second, cps checker, clicking speed test, improve cps",
    type: "WebPage",
    locale: "en_US",
    twitterCard: "summary_large_image",
    author: "CPS Checker"
  });

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
              <span className="gradient-text">CPS Test</span> - Measure Your Click Speed (Clicks Per Second)
            </h1>
            <p className="text-muted-foreground">
              The CPS Test (Clicks Per Second Test) measures how fast you can click your mouse.
              CPS Checker helps gamers and professionals test click speed using accurate timers
              across 1, 5, 10, 30, and 60 second durations.
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
          <section className="mt-12 space-y-10">
            <article>
              <h2 className="mb-4 text-2xl font-bold">What is CPS (Clicks Per Second)?</h2>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  CPS is an easy way to measure how fast your fingers work with a mouse. It is simply how many times you can press the click button in one second, and it’s a great way to tune your hand speed for games like Minecraft, FPS titles, or any fast-action hobby.
                </p>
                <p>
                  Imagine you are playing a quick Minecraft PvP match. If you can click 10 times in one second, that’s 10 CPS. If your opponent is at 7 CPS, you have a big edge in burst damage. Here we turn that same idea into a safe, controlled test so you can track progress and avoid noisy estimates from random games.
                </p>
                <p>
                  If you are a complete novice, 4-6 CPS is normal. If you’ve done this before and have good form, 8-12 CPS is a solid target. For people who practice consistently, 14+ CPS is the place where you genuinely feel speed improvements on the keyboard and mouse.
                </p>
              </div>
            </article>

            <article>
              <h2 className="mb-4 text-2xl font-bold">How to Use the CPS Tool (Step-by-Step)</h2>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  We built this page so the flow is simple and reliable. Whether this is your first test or your hundredth, you’ll know exactly what to do.
                </p>
                <ol className="list-decimal space-y-3 pl-6">
                  <li>
                    <strong>Choose your duration:</strong> Pick 1, 5, 10, 30, or 60 seconds. Shorter tests are great for quick practice; longer tests are better for seeing consistency.
                  </li>
                  <li>
                    <strong>Get your hand ready:</strong> Put your mouse in a comfortable position, relax your arm, and keep your wrist straight. If you can, do a couple of easy warm-up clicks first.
                  </li>
                  <li>
                    <strong>Click the test area:</strong> Tap once and the timer starts. Then tap as fast as you can while staying controlled.
                  </li>
                  <li>
                    <strong>Watch the timer:</strong> A 30-second countdown is on the screen. If you are in the 60-second mode, think of it as a sprint with an endurance finish.
                  </li>
                  <li>
                    <strong>Finish and read your score:</strong> When time is up, your CPS appears together with your total clicks and rating (Beginner, Average, Advanced, Expert, Legendary).
                  </li>
                  <li>
                    <strong>Save your best score:</strong> We store your highest CPS for this device. Try to beat your record each time and note what helped that day.
                  </li>
                  <li>
                    <strong>Repeat with purpose:</strong> Do 3 rounds, take notes on hand position, and adjust if your score varies a lot. This is where real improvement comes from.
                  </li>
                </ol>
              </div>
            </article>

            <article>
              <h2 className="mb-4 text-2xl font-bold">Noisy Data, Fast Wins, and Real Progress</h2>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  Your score will jump around from attempt to attempt, and that is okay. A single test might be unusually high or low, so track a short series to find your true baseline. We have the history feature to help you do exactly that.
                </p>
                <p>
                  Pro tip: use the same setup for each session (same chair, desk, mouse settings). If you swap mouse or keyboard, your movement patterns reset. Consistency makes it easier to see real progress, not just small daily noise.
                </p>
              </div>
            </article>

            <article>
              <h2 className="mb-4 text-2xl font-bold">Friendly CPS Ratings (What Your Score Means)</h2>
              <div className="grid gap-3 md:grid-cols-2">
                {[
                  { label: "1-5 CPS", detail: "Good place to start, practice focus on comfort and rhythm." },
                  { label: "6-7 CPS", detail: "Solid speed for casual play. You’re building a good base." },
                  { label: "8-10 CPS", detail: "Advanced player range. Keep consistency and prevent fatigue." },
                  { label: "11-13 CPS", detail: "Expert speed. This is where training starts paying off in games." },
                  { label: "14+ CPS", detail: "Legendary club. You’re moving faster than most people in your environment." }
                ].map((item) => (
                  <div key={item.label} className="rounded-lg border border-border/50 bg-muted/20 p-5">
                    <p className="font-semibold text-primary">{item.label}</p>
                    <p className="text-sm text-muted-foreground">{item.detail}</p>
                  </div>
                ))}
              </div>
            </article>

            <article>
              <h2 className="mb-4 text-2xl font-bold">Tips That Actually Work to Improve Your CPS</h2>
              <div className="space-y-4 text-muted-foreground">
                <ul className="list-disc space-y-3 pl-6">
                  <li><strong>Warm up first:</strong> Start with 10 seconds at a comfortable pace before pushing your max score. A warm hand is usually 1-2 CPS better than a cold hand.</li>
                  <li><strong>Find your clicking style:</strong> Try regular clicks, jitter, butterfly, and even middle-finger style. Use the one that feels least tiring while still fast.</li>
                  <li><strong>Adjust settings:</strong> Make sure mouse sensitivity (DPI) and OS click settings are smooth. A cheap mouse can sometimes feel sluggish; a responsive model makes a difference.</li>
                  <li><strong>Stay relaxed:</strong> If your wrist is tense, your speed drops fast. Keep your arm loose and use brief bursts of intense clicks followed by a short break.</li>
                  <li><strong>Rest your hands:</strong> After 2-3 tests, take a 1-2 minute break and shake out your fingers. This keeps your muscles responsive on the next attempt.</li>
                  <li><strong>Compare results:</strong> Use our <a href="/guides/cps" className="text-primary hover:underline">CPS guide</a> and <a href="/blog" className="text-primary hover:underline">blog</a> for extra drills and technique experiments.</li>
                </ul>
              </div>
            </article>

            <article>
              <h2 className="mb-4 text-2xl font-bold">Common Mistakes People Make</h2>
              <div className="space-y-4 text-muted-foreground">
                <ul className="list-disc space-y-2 pl-6">
                  <li><strong>Rushing the first 5 seconds:</strong> You often get shaky. Build into your top speed.</li>
                  <li><strong>Using a different mouse each time:</strong> Keep it consistent during training phases.</li>
                  <li><strong>Ignoring posture:</strong> Leaning forward damages throughput; hands cramp faster.</li>
                  <li><strong>Skipping the cooldown:</strong> Long sessions without breaks cause strain and lower long-term progress.</li>
                </ul>
              </div>
            </article>

            <article>
              <h2 className="mb-4 text-2xl font-bold">A Simple Weekly Practice Plan</h2>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  If you want something practical, follow this weekly plan and notice the difference over two weeks.
                </p>
                <ul className="list-disc space-y-3 pl-6">
                  <li><strong>Day 1:</strong> 3 rounds 10s + 3 rounds 30s. Record your best and average CPS.</li>
                  <li><strong>Day 2:</strong> 5 rounds 10s with a slow warm-up first, then 2 rounds 60s for stamina.</li>
                  <li><strong>Day 3:</strong> Light rest, watch a quick guide video (or read <a href="/guides/cps" className="text-primary hover:underline">our CPS guide</a>).</li>
                  <li><strong>Day 4:</strong> Work on your weakest point (if consistency is low, do more 30s rounds).</li>
                  <li><strong>Day 5:</strong> “Challenge day”: try to beat your personal best, then note what felt different.</li>
                  <li><strong>Day 6:</strong> Recovery day with 1-2 gentle practice sessions, focus on form not speed.</li>
                  <li><strong>Day 7:</strong> Reflect and plan next week. Write down one small improvement to try next time.</li>
                </ul>
              </div>
            </article>

            <article>
              <h2 className="mb-4 text-2xl font-bold">Final Thoughts</h2>
              <div className="space-y-3 text-muted-foreground">
                <p>
                  Think of this as training your hand reflexes, not just smashing the mouse. Small, consistent steps usually win over short bursts of random effort.
                </p>
                <p>
                  Check the <a href="/faq" className="text-primary hover:underline">FAQ page</a> for quick answers, the <a href="/blog" className="text-primary hover:underline">blog</a> for long-form tips, and the <a href="/guides/cps" className="text-primary hover:underline">CPS guide</a> if you want an advanced routine.
                </p>
                <p>
                  Have fun with it, and don’t forget to reward yourself when you hit a new personal best. Click smart, stay safe, and keep improving.
                </p>
              </div>
            </article>
          </section>
        </div>
      </div>
    </Layout>
  );
}
