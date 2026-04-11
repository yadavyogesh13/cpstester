import { useState, useCallback, useRef, useEffect, useMemo } from "react";
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
  const { addResult, clearHistory, getByType, getBestScore } = useTestHistory();

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
    title: "CPS Test (Clicks Per Second) – Free Online Click Speed Test | CPS Checker",
    description: "Measure your clicks per second with a free online CPS Test. Compare CPS scores, improve clicking speed, and train with 1s, 5s, 10s, 30s, or 60s durations.",
    url: "https://cpschecker.site/cps-test",
    image: "https://cpschecker.site/assets/cps-score-og.png",
    keywords: "free online cps test, cps checker, click speed test, clicks per second, click speed challenge, online cps checker, improve cps",
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

  const cpsHistory = useMemo(() => getByType("cps"), [getByType]);
  const leaderboard = useMemo(
    () => [...cpsHistory].sort((a, b) => b.score - a.score).slice(0, 10),
    [cpsHistory]
  );
  const recentRecords = useMemo(() => cpsHistory.slice(0, 10), [cpsHistory]);
  const graphPoints = useMemo(() => [...recentRecords].reverse(), [recentRecords]);

  // SEO-ready FAQ snippet for rich results
  useJsonLd({
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "What is a good CPS score?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "In our system, 1-5 is beginner, 6-7 is solid, 8-10 is advanced, 11-13 expert, 14+ legendary."
        }
      },
      {
        "@type": "Question",
        "name": "How does CPS Checker store results without a server?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Results are saved in browser localStorage on your device only, no backend server is used."
        }
      },
      {
        "@type": "Question",
        "name": "Can I improve my CPS with this tool?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, use the built-in practice recommendations and repeat 3-4 rounds while tracking score swings."
        }
      }
    ]
  });

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
            <h1 className="mb-4 text-3xl font-black leading-tight tracking-tight text-center md:text-5xl">
              <span className="gradient-text">CPS Test</span> - Improve Click Speed with Data-Driven Training
            </h1>
            <p className="mx-auto max-w-3xl text-sm leading-relaxed text-muted-foreground md:text-base">
              This page is optimized for photography gamers, competitive FPS, and keyboard/mouse speed training.
              We use structured data and real-time results to help you rank for keywords like “cps test”, “click speed test”, and “mouse click rate”.
            </p>
            <div className="mt-4 rounded-xl border border-border/50 bg-gradient-to-r from-primary/10 via-secondary/10 to-accent/10 p-4 text-left text-xs text-muted-foreground shadow-sm md:text-sm">
              <strong className="text-foreground">SEO-Friendly Snapshot:</strong>
              <ul className="mt-2 space-y-1 pl-4">
                <li>• Fast loading interactive click meter (1s, 5s, 10s, 30s, 60s).</li>
                <li>• Result tracking in browser localStorage (no backend, privacy-safe).</li>
                <li>• Clear intent for search engines: CPS accuracy, tips, rating bands, and progression.</li>
              </ul>
            </div>
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
            className={`test-area mx-auto flex min-h-[300px] w-full max-w-3xl cursor-pointer flex-col items-center justify-center rounded-2xl border border-border/50 bg-white/80 p-6 shadow-lg shadow-black/10 backdrop-blur-sm transition-all duration-300 ease-out md:min-h-[350px] ${
              testState === "running" ? "glow-primary scale-[1.01]" : "hover:shadow-xl"
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

          <section className="mt-12 rounded-xl border border-border/50 bg-card p-6">
            <h2 className="mb-4 text-2xl font-bold">Your CPS History</h2>
            <p className="mb-6 text-muted-foreground">Everything is stored in your browser via localStorage, so the data is private to you and available immediately.</p>

            <div className="mb-8 lg:flex lg:gap-8">
              <div className="flex-1">
                <h3 className="mb-2 text-lg font-semibold">Leaderboard (Top 10 CPS)</h3>
                <ol className="space-y-2">
                  {leaderboard.length === 0 ? (
                    <li className="text-muted-foreground">No CPS records yet. Perform a test to start the leaderboard.</li>
                  ) : (
                    leaderboard.map((item, index) => (
                      <li key={item.id} className="flex justify-between rounded-md border border-border/50 px-3 py-2">
                        <span>{index + 1}. {item.score.toFixed(2)} CPS</span>
                        <span className="text-xs text-muted-foreground">{new Date(item.timestamp).toLocaleString()}</span>
                      </li>
                    ))
                  )}
                </ol>
              </div>

              <div className="mt-6 lg:mt-0 flex-1">
                <h3 className="mb-2 text-lg font-semibold">Recent 10 Records</h3>
                <div className="overflow-x-auto">
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="text-left text-muted-foreground">
                        <th className="pb-2">When</th>
                        <th className="pb-2">Duration</th>
                        <th className="pb-2">CPS</th>
                      </tr>
                    </thead>
                    <tbody>
                      {recentRecords.length === 0 ? (
                        <tr><td colSpan={3} className="py-2 text-muted-foreground">No records yet.</td></tr>
                      ) : (
                        recentRecords.map((item) => (
                          <tr key={item.id} className="border-t border-border/50">
                            <td className="py-2 text-muted-foreground">{new Date(item.timestamp).toLocaleTimeString()}</td>
                            <td className="py-2">{item.duration}s</td>
                            <td className="py-2 font-semibold">{item.score.toFixed(2)}</td>
                          </tr>
                        ))
                      )}
                    </tbody>
                  </table>
                </div>

                <div className="mt-4 flex justify-end">
                  <Button variant="outline" onClick={clearHistory} disabled={cpsHistory.length === 0}>
                    Clear History
                  </Button>
                </div>
              </div>
            </div>

            <div>
              <h3 className="mb-2 text-lg font-semibold">Trend Visual</h3>
              <div className="flex items-end gap-2 h-36">
                {graphPoints.length === 0 ? (
                  <p className="text-muted-foreground">Run a few tests to get your personal trend chart.</p>
                ) : (
                  graphPoints.map((item) => {
                    const barHeight = Math.max(6, Math.min(100, (item.score / 20) * 100));
                    return (
                      <div key={item.id} className="relative w-full max-w-[40px] text-center">
                        <div className="mx-auto h-full w-5 rounded-md bg-primary/70" style={{ height: `${barHeight}%` }} title={`${item.score.toFixed(2)} CPS`} />
                        <div className="absolute -bottom-6 left-0 right-0 text-[10px] text-muted-foreground">{new Date(item.timestamp).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}</div>
                      </div>
                    );
                  })
                )}
              </div>
              <p className="mt-2 text-xs text-muted-foreground">The bars show your last 10 CPS scores (oldest on left, newest on right).</p>
            </div>
          </section>

        </div>
      </div>
    </Layout>
  );
}
