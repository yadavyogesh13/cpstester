import { Layout } from "@/components/layout/Layout";
import { AdPlaceholder } from "@/components/AdPlaceholder";
import { useSeo } from "@/hooks/useSeo";
import { useJsonLd } from "@/hooks/useJsonLd";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight, Space, Target, Trophy, Zap, Shield, Lightbulb } from "lucide-react";

export default function SpacebarGuide() {
  useSeo({
    title: "Spacebar Clicking Speed Guide - Improve Your Spacebar CPS | CPS Checker",
    description: "Master spacebar clicking with techniques, training methods, and tips. Learn proper form, benchmarks, and how to increase your spacebar clicks per second.",
    url: "https://cpschecker.site/guides/spacebar",
    image: "https://cpschecker.site/cps-score-og.png",
    keywords: "spacebar test guide, spacebar clicking, spacebar CPS, improve spacebar speed",
  });

  useJsonLd({
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "Spacebar Clicking Speed Guide - Improve Your Spacebar CPS",
    "description": "Complete guide to improving spacebar clicking speed.",
    "url": "https://cpschecker.site/guides/spacebar",
    "author": {
      "@type": "Organization",
      "name": "CPS Checker",
      "url": "https://cpschecker.site"
    }
  });

  return (
    <Layout>
      <div className="container py-12 md:py-16">
        <div className="mx-auto max-w-4xl">
          {/* Breadcrumb */}
          <nav className="mb-6 text-sm" aria-label="Breadcrumb">
            <ol className="flex items-center gap-2">
              <li><Link to="/" className="text-muted-foreground hover:text-primary">Home</Link></li>
              <li className="text-muted-foreground">/</li>
              <li><Link to="/guides" className="text-muted-foreground hover:text-primary">Guides</Link></li>
              <li className="text-muted-foreground">/</li>
              <li className="text-foreground font-medium">Spacebar Guide</li>
            </ol>
          </nav>

          <h1 className="mb-4 text-4xl md:text-5xl font-black">
            Complete <span className="gradient-text">Spacebar Clicking</span> Guide
          </h1>
          <p className="mb-8 text-lg text-muted-foreground">Spacebar clicking is one of those quirky challenges that is surprisingly fun once you get the rhythm. This page gives you real practice routines, a plan, and the feel of someone talking to you at eye level.
          </p>

          {/* Quick Start */}
          <div className="mb-12 rounded-xl border border-border/50 bg-card p-6 md:p-8">
            <h2 className="mb-4 text-2xl font-bold">Quick Start</h2>
            <p className="mb-6 text-muted-foreground">Everything about spacebar clicking speed:</p>
            
            <div className="grid gap-6 md:grid-cols-3">
              <div>
                <div className="flex items-center gap-3 mb-3">
                  <Space className="h-6 w-6 text-primary" />
                  <h3 className="font-bold">What is It?</h3>
                </div>
                <p className="text-sm text-muted-foreground">Spacebar clicks per second (CPS) - how fast you can press the spacebar.</p>
              </div>
              <div>
                <div className="flex items-center gap-3 mb-3">
                  <Target className="h-6 w-6 text-primary" />
                  <h3 className="font-bold">Speed Ranges</h3>
                </div>
                <p className="text-sm text-muted-foreground">Casual: 5-8 CPS | Regular: 8-12 CPS | Advanced: 12-15 CPS | Elite: 15+ CPS</p>
              </div>
              <div>
                <div className="flex items-center gap-3 mb-3">
                  <Zap className="h-6 w-6 text-primary" />
                  <h3 className="font-bold">Improvement</h3>
                </div>
                <p className="text-sm text-muted-foreground">Expect 1-2 CPS gain per week with consistent daily training.</p>
              </div>
            </div>

            <div className="mt-8">
              <Link to="/spacebar-test">
                <Button size="lg" className="gap-2">
                  <Space className="h-5 w-5" />
                  Start Spacebar Test
                  <ArrowRight className="h-5 w-5" />
                </Button>
              </Link>
            </div>
          </div>

          {/* Content Sections */}
          <div className="space-y-12">
            {/* Spacebar Speed Benchmarks */}
            <section>
              <h2 className="mb-4 text-2xl font-bold">Spacebar Speed Benchmarks</h2>
              <p className="mb-6 text-muted-foreground">Understanding speed levels helps set realistic and achievable goals.</p>
              
              <div className="space-y-4">
                {[
                  { level: "Casual Users", cps: "5-8 CPS", desc: "Normal keyboard users without specific training" },
                  { level: "Regular Clickers", cps: "8-12 CPS", desc: "Regular practice and some training experience" },
                  { level: "Advanced Players", cps: "12-15 CPS", desc: "Dedicated training and muscle memory development" },
                  { level: "Elite Competitors", cps: "15+ CPS", desc: "Peak performance, competitive level clicking" }
                ].map((item, idx) => (
                  <div key={idx} className="rounded-lg border border-border/50 bg-muted/30 p-4">
                    <div className="flex items-start justify-between">
                      <div>
                        <h3 className="font-bold text-lg">{item.level}</h3>
                        <p className="text-sm text-muted-foreground">{item.desc}</p>
                      </div>
                      <div className="text-right">
                        <div className="text-2xl font-bold text-primary">{item.cps}</div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* Clicking Techniques */}
            <section>
              <h2 className="mb-4 text-2xl font-bold flex items-center gap-2">
                <Lightbulb className="h-7 w-7 text-primary" />
                Spacebar Clicking Techniques
              </h2>
              
              <div className="space-y-4">
                <div className="rounded-lg border border-border/50 bg-card p-6">
                  <h3 className="font-bold text-lg mb-3">Technique 1: Thumb Clicking (Fastest)</h3>
                  <p className="text-sm text-muted-foreground mb-3">Place your thumb on spacebar and use primarily thumb movement with wrist assist for recovery.</p>
                  <ul className="space-y-2 text-sm">
                    <li>✓ Highest speed potential</li>
                    <li>✓ Least effort required</li>
                    <li>✓ Best for sustained clicking</li>
                    <li>✓ Most consistent results</li>
                  </ul>
                </div>

                <div className="rounded-lg border border-border/50 bg-card p-6">
                  <h3 className="font-bold text-lg mb-3">Technique 2: Finger Clicking (Alternating)</h3>
                  <p className="text-sm text-muted-foreground mb-3">Use fingers to alternate pressing and releasing for macro-like repetitive pattern.</p>
                  <ul className="space-y-2 text-sm">
                    <li>✓ Medium-high speed</li>
                    <li>✓ Reduced single-finger fatigue</li>
                    <li>✓ Good control and consistency</li>
                    <li>✓ Extended session capability</li>
                  </ul>
                </div>

                <div className="rounded-lg border border-border/50 bg-card p-6">
                  <h3 className="font-bold text-lg mb-3">Technique 3: Hybrid (Best for Endurance)</h3>
                  <p className="text-sm text-muted-foreground mb-3">Combine thumb and finger movements, alternating between techniques to reduce fatigue.</p>
                  <ul className="space-y-2 text-sm">
                    <li>✓ Prevents muscle fatigue</li>
                    <li>✓ Longest sustainable sessions</li>
                    <li>✓ Balanced speed and endurance</li>
                    <li>✓ Reduced injury risk</li>
                  </ul>
                </div>
              </div>
            </section>

            {/* Training Program */}
            <section>
              <h2 className="mb-4 text-2xl font-bold flex items-center gap-2">
                <Trophy className="h-7 w-7 text-primary" />
                8-Week Training Program
              </h2>
              
              <div className="space-y-4">
                <div className="rounded-lg bg-card border border-border/50 p-6">
                  <h3 className="font-bold text-lg mb-3">Week 1: Foundation</h3>
                  <ul className="space-y-2">
                    <li className="flex gap-3">
                      <span className="text-primary font-bold">→</span>
                      <span>5-minute daily sessions</span>
                    </li>
                    <li className="flex gap-3">
                      <span className="text-primary font-bold">→</span>
                      <span>Focus on form and consistency</span>
                    </li>
                    <li className="flex gap-3">
                      <span className="text-primary font-bold">→</span>
                      <span>Establish baseline measurements</span>
                    </li>
                  </ul>
                </div>

                <div className="rounded-lg bg-card border border-border/50 p-6">
                  <h3 className="font-bold text-lg mb-3">Week 2-3: Building Endurance</h3>
                  <ul className="space-y-2">
                    <li className="flex gap-3">
                      <span className="text-primary font-bold">→</span>
                      <span>Two 10-minute sessions daily</span>
                    </li>
                    <li className="flex gap-3">
                      <span className="text-primary font-bold">→</span>
                      <span>Gradually increase speed</span>
                    </li>
                    <li className="flex gap-3">
                      <span className="text-primary font-bold">→</span>
                      <span>Goal: 8-10 CPS</span>
                    </li>
                  </ul>
                </div>

                <div className="rounded-lg bg-card border border-border/50 p-6">
                  <h3 className="font-bold text-lg mb-3">Week 4-6: Speed Development</h3>
                  <ul className="space-y-2">
                    <li className="flex gap-3">
                      <span className="text-primary font-bold">→</span>
                      <span>15-20 minute daily sessions</span>
                    </li>
                    <li className="flex gap-3">
                      <span className="text-primary font-bold">→</span>
                      <span>Push speed boundaries</span>
                    </li>
                    <li className="flex gap-3">
                      <span className="text-primary font-bold">→</span>
                      <span>Goal: 10-12 CPS</span>
                    </li>
                  </ul>
                </div>

                <div className="rounded-lg bg-card border border-border/50 p-6">
                  <h3 className="font-bold text-lg mb-3">Week 7-8: Optimization</h3>
                  <ul className="space-y-2">
                    <li className="flex gap-3">
                      <span className="text-primary font-bold">→</span>
                      <span>Varied practice sessions</span>
                    </li>
                    <li className="flex gap-3">
                      <span className="text-primary font-bold">→</span>
                      <span>Short speed bursts and long endurance</span>
                    </li>
                    <li className="flex gap-3">
                      <span className="text-primary font-bold">→</span>
                      <span>Goal: Peak performance consistency</span>
                    </li>
                  </ul>
                </div>
              </div>
            </section>

            {/* Proper Setup */}
            <section>
              <h2 className="mb-4 text-2xl font-bold">Proper Setup and Form</h2>
              
              <div className="rounded-lg border border-border/50 bg-card p-6">
                <div className="space-y-6">
                  <div>
                    <h3 className="font-bold text-lg mb-3">Step 1: Posture</h3>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                      <li>• Sit at proper height (elbows at desk level)</li>
                      <li>• Keep feet flat on floor</li>
                      <li>• Back straight and supported by chair</li>
                      <li>• Shoulders relaxed, not tensed</li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="font-bold text-lg mb-3">Step 2: Hand Position</h3>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                      <li>• Rest hand naturally on keyboard</li>
                      <li>• Position thumb or fingers on spacebar</li>
                      <li>• Keep other fingers ready for support</li>
                      <li>• Maintain slightly elevated wrist</li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="font-bold text-lg mb-3">Step 3: Warm-Up</h3>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                      <li>• Start with slow, controlled clicks</li>
                      <li>• Focus on smooth motion</li>
                      <li>• Gradually increase speed</li>
                      <li>• Take time to find your rhythm</li>
                    </ul>
                  </div>
                </div>
              </div>
            </section>

            {/* Common Mistakes */}
            <section>
              <h2 className="mb-4 text-2xl font-bold">Common Mistakes to Avoid</h2>
              
              <div className="grid gap-4">
                {[
                  { mistake: "Gripping too hard", fix: "Keep fingers and hand relaxed for faster recovery" },
                  { mistake: "Poor posture", fix: "Maintain ergonomic position to prevent fatigue" },
                  { mistake: "Overtraining", fix: "Take breaks every 10-15 minutes to prevent strain" },
                  { mistake: "Hitting edge of key", fix: "Practice hitting spacebar center for reliable clicks" },
                  { mistake: "Changing technique mid-session", fix: "Master one technique before experimenting" }
                ].map((item, idx) => (
                  <div key={idx} className="flex gap-4 rounded-lg border border-border/50 bg-muted/30 p-4">
                    <div className="min-w-fit">
                      <span className="text-red-500 font-bold text-xl">✕</span>
                    </div>
                    <div className="flex-1">
                      <p className="font-bold text-red-600 mb-1">{item.mistake}</p>
                      <p className="text-sm text-muted-foreground"><span className="text-green-600 font-bold">✓</span> {item.fix}</p>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* Health & Safety */}
            <section>
              <h2 className="mb-4 text-2xl font-bold flex items-center gap-2">
                <Shield className="h-7 w-7 text-primary" />
                Health & Safety
              </h2>
              
              <div className="rounded-lg border border-border/50 bg-gradient-to-r from-primary/10 to-accent/10 p-6">
                <h3 className="font-bold text-lg mb-4">Preventing Injury</h3>
                <ul className="space-y-3">
                  <li className="flex gap-3">
                    <span className="text-primary">•</span>
                    <span><strong>Warm up:</strong> Always warm up before intense sessions to prepare muscles.</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-primary">•</span>
                    <span><strong>Take breaks:</strong> 1-2 minute break every 10 minutes of clicking.</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-primary">•</span>
                    <span><strong>Stretch regularly:</strong> Stretch hands and wrists throughout the day.</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-primary">•</span>
                    <span><strong>Stop on pain:</strong> Persistent pain is a warning sign - consult healthcare provider.</span>
                  </li>
                </ul>

                <h3 className="font-bold text-lg mb-4 mt-6">Warning Signs to Watch</h3>
                <ul className="space-y-2 text-sm">
                  <li>• Persistent pain during or after clicking</li>
                  <li>• Numbness or tingling in fingers</li>
                  <li>• Swelling or inflammation</li>
                  <li>• Reduced grip strength</li>
                </ul>
              </div>
            </section>

            {/* Pro Tips */}
            <section>
              <h2 className="mb-4 text-2xl font-bold">Pro Tips for Maximum Speed</h2>
              
              <div className="rounded-lg border border-border/50 bg-card p-6">
                <ul className="space-y-3">
                  <li className="flex gap-3">
                    <span className="text-primary font-bold">1</span>
                    <div>
                      <p className="font-bold">Choose Quality Keyboard</p>
                      <p className="text-sm text-muted-foreground">Gaming or mechanical keyboards provide better response times.</p>
                    </div>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-primary font-bold">2</span>
                    <div>
                      <p className="font-bold">Test Consistently</p>
                      <p className="text-sm text-muted-foreground">Test at same time each day for consistent measurements.</p>
                    </div>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-primary font-bold">3</span>
                    <div>
                      <p className="font-bold">Track Progress</p>
                      <p className="text-sm text-muted-foreground">Record scores to identify improvement and stay motivated.</p>
                    </div>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-primary font-bold">4</span>
                    <div>
                      <p className="font-bold">Find Your Rhythm</p>
                      <p className="text-sm text-muted-foreground">Develop a natural clicking rhythm rather than random clicking.</p>
                    </div>
                  </li>
                </ul>
              </div>
            </section>
          </div>

          {/* CTA */}
          <div className="mt-12 rounded-xl border border-border/50 bg-gradient-to-r from-primary/10 to-accent/10 p-8 text-center">
            <h2 className="mb-4 text-2xl font-bold">Ready to Test Your Spacebar Speed?</h2>
            <p className="mb-6 text-muted-foreground">Start testing now and track your improvement with our spacebar test.</p>
            <Link to="/spacebar-test">
              <Button size="lg" className="gap-2">
                <Space className="h-5 w-5" />
                Take the Spacebar Test
              </Button>
            </Link>
          </div>
        </div>
      </div>

      <AdPlaceholder size="leaderboard" />
    </Layout>
  );
}
