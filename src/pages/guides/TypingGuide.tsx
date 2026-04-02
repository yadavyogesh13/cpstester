import { Layout } from "@/components/layout/Layout";
import { AdPlaceholder } from "@/components/AdPlaceholder";
import { useSeo } from "@/hooks/useSeo";
import { useJsonLd } from "@/hooks/useJsonLd";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight, Keyboard, Target, Trophy, Zap, Briefcase, Lightbulb } from "lucide-react";

export default function TypingGuide() {
  useSeo({
    title: "Typing Speed Test Guide - Improve Your WPM & Typing Skills | CPS Checker",
    description: "Complete guide to typing speed testing. Learn WPM benchmarks, professional standards, improvement techniques, and proven methods to increase your typing speed and accuracy.",
    url: "https://cpschecker.site/guides/typing",
    image: "https://cpschecker.site/cps-score-og.png",
    keywords: "typing speed guide, WPM guide, improve typing speed, typing test tutorial, WPM benchmarks",
  });

  useJsonLd({
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "Typing Speed Test Guide - Improve Your WPM & Typing Skills",
    "description": "Complete guide to improving typing speed and accuracy.",
    "url": "https://cpschecker.site/guides/typing",
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
              <li className="text-foreground font-medium">Typing Test Guide</li>
            </ol>
          </nav>

          <h1 className="mb-4 text-4xl md:text-5xl font-black">
            Complete <span className="gradient-text">Typing Speed</span> Guide
          </h1>
          <p className="mb-8 text-lg text-muted-foreground">If you’ve ever typed an email faster than your friend, you’re already in the game. This guide is for everyone—from slow typer to keyboard ninja—so you can improve without pain.
          </p>

          {/* Quick Start */}
          <div className="mb-12 rounded-xl border border-border/50 bg-card p-6 md:p-8">
            <h2 className="mb-4 text-2xl font-bold">Quick Start</h2>
            <p className="mb-6 text-muted-foreground">Everything you need to know about typing speed testing:</p>
            
            <div className="grid gap-6 md:grid-cols-3">
              <div>
                <div className="flex items-center gap-3 mb-3">
                  <Keyboard className="h-6 w-6 text-primary" />
                  <h3 className="font-bold">Typing Metrics</h3>
                </div>
                <p className="text-sm text-muted-foreground">WPM (Words Per Minute) and CPM (Characters Per Minute) are standard measurements.</p>
              </div>
              <div>
                <div className="flex items-center gap-3 mb-3">
                  <Target className="h-6 w-6 text-primary" />
                  <h3 className="font-bold">Average WPM</h3>
                </div>
                <p className="text-sm text-muted-foreground">Casual: 40-50 WPM | Professional: 60-80 WPM | Expert: 80+ WPM</p>
              </div>
              <div>
                <div className="flex items-center gap-3 mb-3">
                  <Zap className="h-6 w-6 text-primary" />
                  <h3 className="font-bold">Accuracy First</h3>
                </div>
                <p className="text-sm text-muted-foreground">Speed without accuracy is counterproductive. Aim for 95%+ accuracy.</p>
              </div>
            </div>

            <div className="mt-8">
              <Link to="/typing-test">
                <Button size="lg" className="gap-2">
                  <Keyboard className="h-5 w-5" />
                  Start Typing Test
                  <ArrowRight className="h-5 w-5" />
                </Button>
              </Link>
            </div>
          </div>

          {/* Content Sections */}
          <div className="space-y-12">
            {/* WPM Benchmarks */}
            <section>
              <h2 className="mb-4 text-2xl font-bold flex items-center gap-2">
                <Briefcase className="h-7 w-7 text-primary" />
                WPM Benchmarks by Profession
              </h2>
              <p className="mb-6 text-muted-foreground">Different professions have different typing speed requirements.</p>
              
              <div className="space-y-4">
                {[
                  { role: "Administrative", wpm: "60-70 WPM", desc: "Data entry, email, document management" },
                  { role: "Customer Service", wpm: "65-75 WPM", desc: "Quick responses, multitasking" },
                  { role: "Legal Assistant", wpm: "70-80 WPM", desc: "High accuracy required, legal documents" },
                  { role: "Journalist", wpm: "70-85 WPM", desc: "Meeting deadlines, article writing" },
                  { role: "Data Entry", wpm: "70-95 WPM", desc: "Speed and accuracy critical" },
                  { role: "Developer", wpm: "60-75 WPM", desc: "Code includes special characters" }
                ].map((item, idx) => (
                  <div key={idx} className="rounded-lg border border-border/50 bg-muted/30 p-4">
                    <div className="flex items-start justify-between">
                      <div>
                        <h3 className="font-bold text-lg">{item.role}</h3>
                        <p className="text-sm text-muted-foreground">{item.desc}</p>
                      </div>
                      <div className="text-right">
                        <div className="text-xl font-bold text-primary">{item.wpm}</div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* Understanding Typing Metrics */}
            <section>
              <h2 className="mb-4 text-2xl font-bold flex items-center gap-2">
                <Lightbulb className="h-7 w-7 text-primary" />
                Understanding Typing Metrics
              </h2>
              
              <div className="space-y-4">
                <div className="rounded-lg border border-border/50 bg-card p-4">
                  <h3 className="font-bold text-lg mb-2">WPM (Words Per Minute)</h3>
                  <p className="text-muted-foreground">Average speed metric. One word equals 5 characters.</p>
                  <p className="text-sm text-muted-foreground mt-2">Formula: Total characters typed ÷ 5 ÷ minutes</p>
                </div>
                
                <div className="rounded-lg border border-border/50 bg-card p-4">
                  <h3 className="font-bold text-lg mb-2">CPM (Characters Per Minute)</h3>
                  <p className="text-muted-foreground">Raw typing speed without the 5-character conversion.</p>
                  <p className="text-sm text-muted-foreground mt-2">Formula: Total characters typed ÷ minutes</p>
                </div>
                
                <div className="rounded-lg border border-border/50 bg-card p-4">
                  <h3 className="font-bold text-lg mb-2">Accuracy</h3>
                  <p className="text-muted-foreground">Percentage of correct characters. Accuracy matters more than speed.</p>
                  <p className="text-sm text-muted-foreground mt-2">Professional standard: 95%+ accuracy</p>
                </div>
              </div>
            </section>

            {/* Age-Based Benchmarks */}
            <section>
              <h2 className="mb-4 text-2xl font-bold">Typing Speed by Age Group</h2>
              
              <div className="grid gap-4 md:grid-cols-2">
                {[
                  { age: "Students (13-18)", wpm: "40-60 WPM", note: "Still developing typing skills" },
                  { age: "Young Adults (19-30)", wpm: "60-75 WPM", note: "Peak typing performance" },
                  { age: "Adults (31-50)", wpm: "55-70 WPM", note: "Strong professional level" },
                  { age: "Older Adults (50+)", wpm: "45-60 WPM", note: "Experience compensates" }
                ].map((item, idx) => (
                  <div key={idx} className="rounded-lg border border-border/50 bg-muted/30 p-4">
                    <div className="flex justify-between items-start mb-2">
                      <h3 className="font-bold">{item.age}</h3>
                      <span className="text-primary font-bold">{item.wpm}</span>
                    </div>
                    <p className="text-sm text-muted-foreground">{item.note}</p>
                  </div>
                ))}
              </div>
            </section>

            {/* Improvement Program */}
            <section>
              <h2 className="mb-4 text-2xl font-bold flex items-center gap-2">
                <Trophy className="h-7 w-7 text-primary" />
                8-Week Typing Speed Improvement Program
              </h2>
              
              <div className="space-y-4">
                <div className="rounded-lg bg-card border border-border/50 p-6">
                  <h3 className="font-bold text-lg mb-3">Week 1-2: Foundation</h3>
                  <ul className="space-y-2">
                    <li className="flex gap-3">
                      <span className="text-primary font-bold">→</span>
                      <span>Focus on accuracy, not speed</span>
                    </li>
                    <li className="flex gap-3">
                      <span className="text-primary font-bold">→</span>
                      <span>Learn proper finger positioning</span>
                    </li>
                    <li className="flex gap-3">
                      <span className="text-primary font-bold">→</span>
                      <span>Practice 15-20 minutes daily</span>
                    </li>
                  </ul>
                  <p className="mt-4 text-sm text-muted-foreground">Expected: Baseline establishment</p>
                </div>

                <div className="rounded-lg bg-card border border-border/50 p-6">
                  <h3 className="font-bold text-lg mb-3">Week 3-4: Building Speed</h3>
                  <ul className="space-y-2">
                    <li className="flex gap-3">
                      <span className="text-primary font-bold">→</span>
                      <span>Increase daily practice to 25-30 minutes</span>
                    </li>
                    <li className="flex gap-3">
                      <span className="text-primary font-bold">→</span>
                      <span>Begin to increase typing pace</span>
                    </li>
                    <li className="flex gap-3">
                      <span className="text-primary font-bold">→</span>
                      <span>Stop looking at keyboard</span>
                    </li>
                  </ul>
                  <p className="mt-4 text-sm text-muted-foreground">Expected: 5-10 WPM gain</p>
                </div>

                <div className="rounded-lg bg-card border border-border/50 p-6">
                  <h3 className="font-bold text-lg mb-3">Week 5-8: Proficiency</h3>
                  <ul className="space-y-2">
                    <li className="flex gap-3">
                      <span className="text-primary font-bold">→</span>
                      <span>Continue 30+ minute daily sessions</span>
                    </li>
                    <li className="flex gap-3">
                      <span className="text-primary font-bold">→</span>
                      <span>Build muscle memory and automaticity</span>
                    </li>
                    <li className="flex gap-3">
                      <span className="text-primary font-bold">→</span>
                      <span>Maintain 95%+ accuracy</span>
                    </li>
                  </ul>
                  <p className="mt-4 text-sm text-muted-foreground">Expected: 10-20 WPM additional gain</p>
                </div>
              </div>
            </section>

            {/* Proper Technique */}
            <section>
              <h2 className="mb-4 text-2xl font-bold">Proper Typing Technique</h2>
              
              <div className="rounded-lg border border-border/50 bg-card p-6">
                <div className="space-y-4">
                  <div>
                    <h3 className="font-bold mb-2">Hand Position</h3>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                      <li>• Place fingers on home row (ASDF JKL;)</li>
                      <li>• Keep wrists straight and elevated</li>
                      <li>• Maintain relaxed shoulders</li>
                      <li>• Use all 10 fingers, not just a few</li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="font-bold mb-2">Body Position</h3>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                      <li>• Sit up straight against chair back</li>
                      <li>• Monitor at eye level, 20-30 inches away</li>
                      <li>• Feet flat on floor</li>
                      <li>• Arms parallel to ground at elbows</li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="font-bold mb-2">Key Habits</h3>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                      <li>• Look at screen, not keyboard</li>
                      <li>• Type naturally without rushing</li>
                      <li>• Use keyboard shortcuts efficiently</li>
                      <li>• Take breaks every 30 minutes</li>
                    </ul>
                  </div>
                </div>
              </div>
            </section>

            {/* Common Mistakes */}
            <section>
              <h2 className="mb-4 text-2xl font-bold">Common Typing Mistakes to Avoid</h2>
              
              <div className="grid gap-4">
                {[
                  { mistake: "Speed before accuracy", fix: "Focus on accuracy first, speed follows naturally" },
                  { mistake: "Looking at keyboard", fix: "Touch typing requires not looking at keys" },
                  { mistake: "Poor posture", fix: "Proper posture prevents fatigue and injury" },
                  { mistake: "Wrong finger position", fix: "Home row typing is the foundation" },
                  { mistake: "No breaks", fix: "Take 5-minute breaks every 25-30 minutes" }
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

            {/* Pro Tips */}
            <section>
              <h2 className="mb-4 text-2xl font-bold">Pro Tips for Maximum Typing Speed</h2>
              
              <div className="rounded-lg border border-border/50 bg-gradient-to-r from-primary/10 to-accent/10 p-6">
                <ul className="space-y-3">
                  <li className="flex gap-3">
                    <span className="text-primary">•</span>
                    <span><strong>Type daily:</strong> Consistency beats intensity. 20 minutes daily is better than 2 hours weekly.</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-primary">•</span>
                    <span><strong>Quality keyboard:</strong> A good mechanical keyboard improves feedback and responsiveness.</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-primary">•</span>
                    <span><strong>Eliminate distractions:</strong> Focus improves learning and muscle memory development.</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-primary">•</span>
                    <span><strong>Warm up:</strong> Start with slow typing to warm up and establish rhythm.</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-primary">•</span>
                    <span><strong>Learn keyboard shortcuts:</strong> Speed gains come from technique and muscle memory.</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-primary">•</span>
                    <span><strong>Test weekly:</strong> Track progress to stay motivated and identify improvement areas.</span>
                  </li>
                </ul>
              </div>
            </section>
          </div>

          {/* CTA */}
          <div className="mt-12 rounded-xl border border-border/50 bg-gradient-to-r from-primary/10 to-accent/10 p-8 text-center">
            <h2 className="mb-4 text-2xl font-bold">Ready to Improve Your Typing?</h2>
            <p className="mb-6 text-muted-foreground">Test your current WPM and track your progress with our comprehensive typing test.</p>
            <Link to="/typing-test">
              <Button size="lg" className="gap-2">
                <Keyboard className="h-5 w-5" />
                Take the Typing Test
              </Button>
            </Link>
          </div>
        </div>
      </div>

      <AdPlaceholder size="leaderboard" />
    </Layout>
  );
}
