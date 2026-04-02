import { Layout } from "@/components/layout/Layout";
import { AdPlaceholder } from "@/components/AdPlaceholder";
import { useSeo } from "@/hooks/useSeo";
import { useJsonLd } from "@/hooks/useJsonLd";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight, MousePointerClick, Target, Trophy, Zap, BarChart3, Lightbulb } from "lucide-react";

export default function CPSGuide() {
  useSeo({
    title: "Complete CPS Test Guide - Improve Your Clicking Speed | CPS Checker",
    description: "Learn everything about CPS testing: what it measures, benchmarks by skill level, proven training methods, techniques, and tips to improve your clicks per second performance.",
    url: "https://cpschecker.site/guides/cps",
    image: "https://cpschecker.site/cps-score-og.png",
    keywords: "CPS guide, how to improve CPS, clicking speed guide, CPS benchmarks, CPS training",
  });

  useJsonLd({
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "Complete CPS Test Guide - Improve Your Clicking Speed",
    "description": "Learn everything about CPS testing and how to improve your clicking speed.",
    "url": "https://cpschecker.site/guides/cps",
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
              <li className="text-foreground font-medium">CPS Test Guide</li>
            </ol>
          </nav>

          <h1 className="mb-4 text-4xl md:text-5xl font-black">
            Complete <span className="gradient-text">CPS Test</span> Guide
          </h1>
          <p className="mb-8 text-lg text-muted-foreground">Let's keep this simple: you’re here to click faster and feel confident doing it. This guide walks you through practical drills, real-life examples, and the small habits that give the biggest improvements.</p>

          {/* Quick Start */}
          <div className="mb-12 rounded-xl border border-border/50 bg-card p-6 md:p-8">
            <h2 className="mb-4 text-2xl font-bold">Quick Start</h2>
            <p className="mb-6 text-muted-foreground">New to CPS testing? Here's what you need to know:</p>
            
            <div className="grid gap-6 md:grid-cols-3">
              <div>
                <div className="flex items-center gap-3 mb-3">
                  <MousePointerClick className="h-6 w-6 text-primary" />
                  <h3 className="font-bold">What is CPS?</h3>
                </div>
                <p className="text-sm text-muted-foreground">Clicks Per Second - measures how many times you can click your mouse in one second.</p>
              </div>
              <div>
                <div className="flex items-center gap-3 mb-3">
                  <Target className="h-6 w-6 text-primary" />
                  <h3 className="font-bold">Average CPS</h3>
                </div>
                <p className="text-sm text-muted-foreground">Casual: 4-6 CPS | Regular: 6-8 CPS | Competitive: 8-12 CPS | Pro: 12+ CPS</p>
              </div>
              <div>
                <div className="flex items-center gap-3 mb-3">
                  <Zap className="h-6 w-6 text-primary" />
                  <h3 className="font-bold">Improvement Rate</h3>
                </div>
                <p className="text-sm text-muted-foreground">Expect 1-2 CPS improvement per week with consistent daily practice.</p>
              </div>
            </div>

            <div className="mt-8">
              <Link to="/cps-test">
                <Button size="lg" className="gap-2">
                  <MousePointerClick className="h-5 w-5" />
                  Start Your CPS Test
                  <ArrowRight className="h-5 w-5" />
                </Button>
              </Link>
            </div>
          </div>

          {/* Content Sections */}
          <div className="space-y-12">
            {/* CPS Benchmarks */}
            <section>
              <h2 className="mb-4 text-2xl font-bold flex items-center gap-2">
                <BarChart3 className="h-7 w-7 text-primary" />
                CPS Benchmarks by Skill Level
              </h2>
              <p className="mb-6 text-muted-foreground">Understanding what's normal for your level helps set realistic goals.</p>
              
              <div className="space-y-4">
                {[
                  { level: "Casual Gamers", cps: "4-6 CPS", description: "Non-competitive gaming, not focused on speed" },
                  { level: "Intermediate Players", cps: "6-8 CPS", description: "Regular gamers with some competitive experience" },
                  { level: "Advanced Gamers", cps: "8-12 CPS", description: "Competitive players with tournament experience" },
                  { level: "Professional Players", cps: "12-15+ CPS", description: "Esports professionals and peak performers" }
                ].map((item, idx) => (
                  <div key={idx} className="rounded-lg border border-border/50 bg-muted/30 p-4">
                    <div className="flex items-start justify-between">
                      <div>
                        <h3 className="font-bold text-lg">{item.level}</h3>
                        <p className="text-sm text-muted-foreground">{item.description}</p>
                      </div>
                      <div className="text-right">
                        <div className="text-2xl font-bold text-primary">{item.cps}</div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* Factors Affecting CPS */}
            <section>
              <h2 className="mb-4 text-2xl font-bold flex items-center gap-2">
                <Lightbulb className="h-7 w-7 text-primary" />
                Factors That Affect Your CPS
              </h2>
              
              <div className="grid gap-4 md:grid-cols-2">
                {[
                  { title: "Mouse Type", desc: "Gaming mice provide better response time and reliability." },
                  { title: "Hand Position", desc: "Proper ergonomics improve both speed and consistency." },
                  { title: "Practice Level", desc: "Regular training increases muscle memory and speed." },
                  { title: "Fatigue", desc: "Physical fatigue significantly reduces CPS performance." }
                ].map((item, idx) => (
                  <div key={idx} className="rounded-lg border border-border/50 bg-card p-4">
                    <h3 className="font-bold mb-2">{item.title}</h3>
                    <p className="text-sm text-muted-foreground">{item.desc}</p>
                  </div>
                ))}
              </div>
            </section>

            {/* Training Tips */}
            <section>
              <h2 className="mb-4 text-2xl font-bold flex items-center gap-2">
                <Trophy className="h-7 w-7 text-primary" />
                How to Improve Your CPS
              </h2>
              
              <div className="space-y-4">
                <div className="rounded-lg bg-card border border-border/50 p-6">
                  <h3 className="font-bold text-lg mb-3">Week 1-2: Foundation</h3>
                  <ul className="space-y-2">
                    <li className="flex gap-3">
                      <span className="text-primary font-bold">→</span>
                      <span>Practice 15-30 minutes daily</span>
                    </li>
                    <li className="flex gap-3">
                      <span className="text-primary font-bold">→</span>
                      <span>Focus on clicking consistency</span>
                    </li>
                    <li className="flex gap-3">
                      <span className="text-primary font-bold">→</span>
                      <span>Build proper clicking habit</span>
                    </li>
                  </ul>
                  <p className="mt-4 text-sm text-muted-foreground">Expected improvement: 1-2 CPS</p>
                </div>

                <div className="rounded-lg bg-card border border-border/50 p-6">
                  <h3 className="font-bold text-lg mb-3">Week 3-8: Development</h3>
                  <ul className="space-y-2">
                    <li className="flex gap-3">
                      <span className="text-primary font-bold">→</span>
                      <span>Increase practice duration to 30-45 min</span>
                    </li>
                    <li className="flex gap-3">
                      <span className="text-primary font-bold">→</span>
                      <span>Gradually push speed limits</span>
                    </li>
                    <li className="flex gap-3">
                      <span className="text-primary font-bold">→</span>
                      <span>Build muscle memory</span>
                    </li>
                  </ul>
                  <p className="mt-4 text-sm text-muted-foreground">Expected improvement: 3-5 CPS</p>
                </div>

                <div className="rounded-lg bg-card border border-border/50 p-6">
                  <h3 className="font-bold text-lg mb-3">Month 3+: Optimization</h3>
                  <ul className="space-y-2">
                    <li className="flex gap-3">
                      <span className="text-primary font-bold">→</span>
                      <span>Maintain practice consistency</span>
                    </li>
                    <li className="flex gap-3">
                      <span className="text-primary font-bold">→</span>
                      <span>Focus on technique refinement</span>
                    </li>
                    <li className="flex gap-3">
                      <span className="text-primary font-bold">→</span>
                      <span>Compete and challenge yourself</span>
                    </li>
                  </ul>
                  <p className="mt-4 text-sm text-muted-foreground">Expected improvement: 2-4 CPS additional</p>
                </div>
              </div>
            </section>

            {/* Common Mistakes */}
            <section>
              <h2 className="mb-4 text-2xl font-bold">Common Mistakes to Avoid</h2>
              
              <div className="grid gap-4">
                {[
                  { mistake: "Gripping too hard", fix: "Keep your hand and fingers relaxed" },
                  { mistake: "Poor posture", fix: "Maintain proper ergonomic position" },
                  { mistake: "Overtraining", fix: "Take breaks every 15-20 minutes" },
                  { mistake: "Wrong mouse", fix: "Use a gaming mouse with low latency" }
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

            {/* Equipment Tips */}
            <section>
              <h2 className="mb-4 text-2xl font-bold">Equipment Tips for Better CPS</h2>
              
              <div className="rounded-lg border border-border/50 bg-card p-6">
                <ul className="space-y-3">
                  <li className="flex gap-3">
                    <span className="text-primary font-bold">1.</span>
                    <div>
                      <p className="font-bold">Use a Gaming Mouse</p>
                      <p className="text-sm text-muted-foreground">Gaming mice have lower latency and better tracking than standard mice.</p>
                    </div>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-primary font-bold">2.</span>
                    <div>
                      <p className="font-bold">Proper Mouse Pad</p>
                      <p className="text-sm text-muted-foreground">A quality mouse pad ensures consistent surface for reliable clicking.</p>
                    </div>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-primary font-bold">3.</span>
                    <div>
                      <p className="font-bold">Keyboard Height</p>
                      <p className="text-sm text-muted-foreground">Adjust chair height so arms are parallel to the ground.</p>
                    </div>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-primary font-bold">4.</span>
                    <div>
                      <p className="font-bold">Monitor Position</p>
                      <p className="text-sm text-muted-foreground">Position monitor at eye level to maintain proper posture.</p>
                    </div>
                  </li>
                </ul>
              </div>
            </section>

            {/* Tips for Max CPS */}
            <section>
              <h2 className="mb-4 text-2xl font-bold">Quick Tips to Maximize Your CPS</h2>
              
              <div className="rounded-lg border border-border/50 bg-gradient-to-r from-primary/10 to-primary/5 p-6">
                <ul className="space-y-2">
                  <li className="flex gap-3">
                    <span className="text-primary">•</span>
                    <span>Warm up your hand before testing with slow clicks</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-primary">•</span>
                    <span>Stay hydrated - dehydration reduces performance</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-primary">•</span>
                    <span>Test at consistent times when you're mentally fresh</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-primary">•</span>
                    <span>Get adequate sleep - fatigue reduces peak performance</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-primary">•</span>
                    <span>Stay relaxed - tension reduces clicking speed</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-primary">•</span>
                    <span>Track your best scores to identify patterns</span>
                  </li>
                </ul>
              </div>
            </section>
          </div>

          {/* CTA */}
          <div className="mt-12 rounded-xl border border-border/50 bg-gradient-to-r from-primary/10 to-accent/10 p-8 text-center">
            <h2 className="mb-4 text-2xl font-bold">Ready to Test Your CPS?</h2>
            <p className="mb-6 text-muted-foreground">Start testing now and track your improvement over time with our free CPS test.</p>
            <Link to="/cps-test">
              <Button size="lg" className="gap-2">
                <MousePointerClick className="h-5 w-5" />
                Take the CPS Test
              </Button>
            </Link>
          </div>
        </div>
      </div>

      <AdPlaceholder size="leaderboard" />
    </Layout>
  );
}
