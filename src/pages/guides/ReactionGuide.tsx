import { Layout } from "@/components/layout/Layout";
import { AdPlaceholder } from "@/components/AdPlaceholder";
import { useSeo } from "@/hooks/useSeo";
import { useJsonLd } from "@/hooks/useJsonLd";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight, Zap, Target, Trophy, Brain, TrendingUp } from "lucide-react";

export default function ReactionGuide() {
  useSeo({
    title: "Reaction Time Test Guide - Improve Your Reflexes | CPS Checker",
    description: "Complete guide to improving reaction time. Learn scientific training methods, benchmarks, and proven techniques to increase your reflexes from 200ms to 100ms or faster.",
    url: "https://cpschecker.site/guides/reaction",
    image: "https://cpschecker.site/cps-score-og.png",
    keywords: "reaction time guide, improve reflexes, reaction test training, average reaction time",
  });

  useJsonLd({
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "Reaction Time Test Guide - Improve Your Reflexes",
    "description": "Complete guide to improving reaction time through scientific training methods.",
    "url": "https://cpschecker.site/guides/reaction",
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
              <li className="text-foreground font-medium">Reaction Time Guide</li>
            </ol>
          </nav>

          <h1 className="mb-4 text-4xl md:text-5xl font-black">
            Complete <span className="gradient-text">Reaction Time</span> Guide
          </h1>
          <p className="mb-8 text-lg text-muted-foreground">Reaction timing is built, not born. This guide skips the fluff and gives you practical routines, easy experiments, and a straightforward way to improve by a noticeable amount.
          </p>

          {/* Quick Start */}
          <div className="mb-12 rounded-xl border border-border/50 bg-card p-6 md:p-8">
            <h2 className="mb-4 text-2xl font-bold">Quick Start</h2>
            <p className="mb-6 text-muted-foreground">Understanding reaction time:</p>
            
            <div className="grid gap-6 md:grid-cols-3">
              <div>
                <div className="flex items-center gap-3 mb-3">
                  <Zap className="h-6 w-6 text-primary" />
                  <h3 className="font-bold">What is It?</h3>
                </div>
                <p className="text-sm text-muted-foreground">Time from stimulus appearance to response (typically measured in milliseconds).</p>
              </div>
              <div>
                <div className="flex items-center gap-3 mb-3">
                  <Target className="h-6 w-6 text-primary" />
                  <h3 className="font-bold">Benchmarks</h3>
                </div>
                <p className="text-sm text-muted-foreground">Untrained: 200-250ms | Trained: 150-200ms | Athletes: 100-150ms | Elite: &lt;100ms</p>
              </div>
              <div>
                <div className="flex items-center gap-3 mb-3">
                  <TrendingUp className="h-6 w-6 text-primary" />
                  <h3 className="font-bold">Improvement</h3>
                </div>
                <p className="text-sm text-muted-foreground">Improve 20-40ms in 8-12 weeks with consistent training.</p>
              </div>
            </div>

            <div className="mt-8">
              <Link to="/reaction-test">
                <Button size="lg" className="gap-2">
                  <Zap className="h-5 w-5" />
                  Start Reaction Test
                  <ArrowRight className="h-5 w-5" />
                </Button>
              </Link>
            </div>
          </div>

          {/* Content Sections */}
          <div className="space-y-12">
            {/* Understanding Reaction Time */}
            <section>
              <h2 className="mb-4 text-2xl font-bold flex items-center gap-2">
                <Brain className="h-7 w-7 text-primary" />
                Understanding Reaction Time
              </h2>
              <p className="mb-6 text-muted-foreground">Reaction time consists of three components:</p>
              
              <div className="space-y-4">
                <div className="rounded-lg border border-border/50 bg-card p-4">
                  <h3 className="font-bold mb-2">Perception Time</h3>
                  <p className="text-sm text-muted-foreground">The time your sensory system takes to detect the stimulus. Typically 30-100ms.</p>
                </div>
                
                <div className="rounded-lg border border-border/50 bg-card p-4">
                  <h3 className="font-bold mb-2">Decision Time</h3>
                  <p className="text-sm text-muted-foreground">The time your brain takes to process and decide how to respond. Typically 50-150ms.</p>
                </div>
                
                <div className="rounded-lg border border-border/50 bg-card p-4">
                  <h3 className="font-bold mb-2">Response Time</h3>
                  <p className="text-sm text-muted-foreground">The time muscles take to execute the action. Typically 20-50ms.</p>
                </div>
              </div>
            </section>

            {/* Benchmarks */}
            <section>
              <h2 className="mb-4 text-2xl font-bold">Reaction Time Benchmarks</h2>
              <p className="mb-6 text-muted-foreground">Where do you stand compared to average performers?</p>
              
              <div className="space-y-4">
                {[
                  { group: "Untrained Adults", time: "200-250ms", desc: "Average person without training" },
                  { group: "Regular Training", time: "150-200ms", desc: "4-8 weeks of consistent practice" },
                  { group: "Competitive Athletes", time: "100-150ms", desc: "Sports-specific training" },
                  { group: "Elite Professionals", time: "<100ms", desc: "Peak performance, peak condition" }
                ].map((item, idx) => (
                  <div key={idx} className="rounded-lg border border-border/50 bg-muted/30 p-4">
                    <div className="flex items-start justify-between">
                      <div>
                        <h3 className="font-bold text-lg">{item.group}</h3>
                        <p className="text-sm text-muted-foreground">{item.desc}</p>
                      </div>
                      <div className="text-right">
                        <div className="text-2xl font-bold text-primary">{item.time}</div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* Science of Improvement */}
            <section>
              <h2 className="mb-4 text-2xl font-bold flex items-center gap-2">
                <Brain className="h-7 w-7 text-primary" />
                The Science of Reaction Time Improvement
              </h2>
              
              <div className="space-y-4">
                <div className="rounded-lg border border-border/50 bg-card p-6">
                  <h3 className="font-bold text-lg mb-3">Neural Plasticity</h3>
                  <p className="text-sm text-muted-foreground">Your brain forms new neural pathways through repeated practice. The nervous system becomes more efficient at processing and responding to stimuli.</p>
                </div>

                <div className="rounded-lg border border-border/50 bg-card p-6">
                  <h3 className="font-bold text-lg mb-3">Muscle Memory Development</h3>
                  <p className="text-sm text-muted-foreground">Through repetition, your muscles learn to respond faster to signals. This automated response reduces conscious decision-making time.</p>
                </div>

                <div className="rounded-lg border border-border/50 bg-card p-6">
                  <h3 className="font-bold text-lg mb-3">Sensory Processing Improvement</h3>
                  <p className="text-sm text-muted-foreground">Training improves how quickly your brain processes visual, auditory, or tactile information. Neural pathways become more efficient with practice.</p>
                </div>

                <div className="rounded-lg border border-border/50 bg-card p-6">
                  <h3 className="font-bold text-lg mb-3">Attention Enhancement</h3>
                  <p className="text-sm text-muted-foreground">Focused training improves attention, reducing delays in stimulus detection and processing.</p>
                </div>
              </div>
            </section>

            {/* Training Methods */}
            <section>
              <h2 className="mb-4 text-2xl font-bold flex items-center gap-2">
                <Trophy className="h-7 w-7 text-primary" />
                Proven Training Methods
              </h2>
              
              <div className="space-y-4">
                {[
                  {
                    title: "Reaction Time Tests",
                    duration: "15-30 minutes daily",
                    frequency: "5-6 days/week",
                    improvement: "10-20ms per week initially",
                    desc: "Repetitive stimulus-response training strengthens neural pathways significantly."
                  },
                  {
                    title: "Physical Exercise",
                    duration: "30-60 minutes",
                    frequency: "4-5 times/week",
                    improvement: "5-10% faster in 8 weeks",
                    desc: "Aerobic exercise, strength training improves blood flow and cognitive function."
                  },
                  {
                    title: "Sports Training",
                    duration: "3-5 hours weekly",
                    frequency: "Sport-specific",
                    improvement: "15-30ms in 2-3 months",
                    desc: "Tennis, badminton, boxing dramatically improve reaction time."
                  },
                  {
                    title: "Cognitive Training",
                    duration: "20-30 minutes",
                    frequency: "Daily",
                    improvement: "5-15% gradually",
                    desc: "Chess, puzzles, action games enhance processing speed."
                  }
                ].map((method, idx) => (
                  <div key={idx} className="rounded-lg border border-border/50 bg-card p-6">
                    <div className="flex items-start justify-between mb-3">
                      <h3 className="font-bold text-lg">{method.title}</h3>
                      <span className="text-primary font-bold text-sm">{method.improvement}</span>
                    </div>
                    <p className="text-sm text-muted-foreground mb-3">{method.desc}</p>
                    <div className="flex gap-4 text-xs text-muted-foreground">
                      <span>📅 {method.duration}</span>
                      <span>🔄 {method.frequency}</span>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* 8-Week Program */}
            <section>
              <h2 className="mb-4 text-2xl font-bold">8-Week Reaction Time Improvement Program</h2>
              
              <div className="space-y-4">
                <div className="rounded-lg bg-card border border-border/50 p-6">
                  <h3 className="font-bold text-lg mb-3">Week 1-2: Baseline & Foundation</h3>
                  <ul className="space-y-2">
                    <li className="flex gap-3">
                      <span className="text-primary font-bold">→</span>
                      <span>Take reaction tests daily (3 attempts)</span>
                    </li>
                    <li className="flex gap-3">
                      <span className="text-primary font-bold">→</span>
                      <span>Light aerobic exercise 3x weekly</span>
                    </li>
                    <li className="flex gap-3">
                      <span className="text-primary font-bold">→</span>
                      <span>Establish baseline measurements</span>
                    </li>
                  </ul>
                </div>

                <div className="rounded-lg bg-card border border-border/50 p-6">
                  <h3 className="font-bold text-lg mb-3">Week 3-4: Focused Training</h3>
                  <ul className="space-y-2">
                    <li className="flex gap-3">
                      <span className="text-primary font-bold">→</span>
                      <span>Reaction test training 15 min daily</span>
                    </li>
                    <li className="flex gap-3">
                      <span className="text-primary font-bold">→</span>
                      <span>Increase exercise to 4x per week</span>
                    </li>
                    <li className="flex gap-3">
                      <span className="text-primary font-bold">→</span>
                      <span>Add cognitive training 15 min daily</span>
                    </li>
                  </ul>
                </div>

                <div className="rounded-lg bg-card border border-border/50 p-6">
                  <h3 className="font-bold text-lg mb-3">Week 5-6: Intensity Increase</h3>
                  <ul className="space-y-2">
                    <li className="flex gap-3">
                      <span className="text-primary font-bold">→</span>
                      <span>Extended reaction training 20-30 min</span>
                    </li>
                    <li className="flex gap-3">
                      <span className="text-primary font-bold">→</span>
                      <span>Sport-specific training if possible</span>
                    </li>
                    <li className="flex gap-3">
                      <span className="text-primary font-bold">→</span>
                      <span>Maintain high training volume</span>
                    </li>
                  </ul>
                </div>

                <div className="rounded-lg bg-card border border-border/50 p-6">
                  <h3 className="font-bold text-lg mb-3">Week 7-8: Optimization</h3>
                  <ul className="space-y-2">
                    <li className="flex gap-3">
                      <span className="text-primary font-bold">→</span>
                      <span>Maintain high training volume</span>
                    </li>
                    <li className="flex gap-3">
                      <span className="text-primary font-bold">→</span>
                      <span>Test improvements weekly</span>
                    </li>
                    <li className="flex gap-3">
                      <span className="text-primary font-bold">→</span>
                      <span>Refine technique based on results</span>
                    </li>
                  </ul>
                  <p className="mt-4 text-sm text-muted-foreground">Expected: 15-30ms improvement</p>
                </div>
              </div>
            </section>

            {/* Lifestyle Factors */}
            <section>
              <h2 className="mb-4 text-2xl font-bold">Critical Lifestyle Factors</h2>
              
              <div className="grid gap-4 md:grid-cols-2">
                {[
                  {
                    title: "Sleep Quality",
                    impact: "20-30% improvement",
                    desc: "7-9 hours nightly is essential. Sleep consolidates learning and neural adaptation."
                  },
                  {
                    title: "Caffeine",
                    impact: "5-10ms improvement",
                    desc: "100-200mg (1 cup) 20-30 min before testing provides optimal boost."
                  },
                  {
                    title: "Exercise",
                    impact: "5-10% improvement",
                    desc: "Regular aerobic activity improves blood flow to the brain."
                  },
                  {
                    title: "Meditation",
                    impact: "10-15% improvement",
                    desc: "10-20 minutes daily improves focus and attention significantly."
                  }
                ].map((factor, idx) => (
                  <div key={idx} className="rounded-lg border border-border/50 bg-card p-4">
                    <h3 className="font-bold mb-2">{factor.title}</h3>
                    <p className="text-sm text-muted-foreground mb-3">{factor.desc}</p>
                    <div className="text-primary font-bold text-sm">{factor.impact}</div>
                  </div>
                ))}
              </div>
            </section>

            {/* Factors You Can't Change */}
            <section>
              <h2 className="mb-4 text-2xl font-bold">Factors You Cannot Change</h2>
              
              <div className="rounded-lg border border-border/50 bg-card p-6 space-y-4">
                <div>
                  <h3 className="font-bold mb-2">Genetics</h3>
                  <p className="text-sm text-muted-foreground">Some inherent variation is genetic. You can't beat your theoretical maximum, but most people don't reach it.</p>
                </div>
                
                <div>
                  <h3 className="font-bold mb-2">Age</h3>
                  <p className="text-sm text-muted-foreground">Reaction time naturally declines with age. Training can offset this decline. Peak typically at 20-25 years.</p>
                </div>
              </div>
            </section>

            {/* Progress Tracking */}
            <section>
              <h2 className="mb-4 text-2xl font-bold">Measuring & Tracking Progress</h2>
              
              <div className="rounded-lg border border-border/50 bg-gradient-to-r from-primary/10 to-accent/10 p-6">
                <h3 className="font-bold text-lg mb-4">Weekly Testing Protocol</h3>
                <ul className="space-y-3">
                  <li className="flex gap-3">
                    <span className="text-primary font-bold">1.</span>
                    <span>Take 10 reaction tests under consistent conditions</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-primary font-bold">2.</span>
                    <span>Record your average time each week</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-primary font-bold">3.</span>
                    <span>Track improvements week-to-week</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-primary font-bold">4.</span>
                    <span>Celebrate milestones and improvements</span>
                  </li>
                </ul>

                <h3 className="font-bold text-lg mb-4 mt-6">Expected Progress Timeline</h3>
                <ul className="space-y-2 text-sm">
                  <li>• <strong>Week 1-4:</strong> Rapid improvements (15-30ms)</li>
                  <li>• <strong>Week 4-8:</strong> Continued improvement (5-15ms)</li>
                  <li>• <strong>Week 8-12:</strong> Slower improvement (2-5ms)</li>
                  <li>• <strong>Week 12+:</strong> Plateau phase (maintenance mode)</li>
                </ul>
              </div>
            </section>

            {/* Pro Tips */}
            <section>
              <h2 className="mb-4 text-2xl font-bold">Pro Tips for Best Results</h2>
              
              <div className="rounded-lg border border-border/50 bg-card p-6">
                <ul className="space-y-3">
                  <li className="flex gap-3">
                    <span className="text-primary font-bold">✓</span>
                    <span><strong>Test consistently:</strong> Same time, same conditions for accurate measurements</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-primary font-bold">✓</span>
                    <span><strong>Focus on consistency:</strong> Multiple smaller improvements compound to big results</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-primary font-bold">✓</span>
                    <span><strong>Maintain effort:</strong> After improvements slow, keep training to prevent regression</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-primary font-bold">✓</span>
                    <span><strong>Celebrate wins:</strong> Every millisecond improvement is an achievement</span>
                  </li>
                </ul>
              </div>
            </section>
          </div>

          {/* CTA */}
          <div className="mt-12 rounded-xl border border-border/50 bg-gradient-to-r from-primary/10 to-accent/10 p-8 text-center">
            <h2 className="mb-4 text-2xl font-bold">Ready to Improve Your Reaction Time?</h2>
            <p className="mb-6 text-muted-foreground">Start testing now and track your improvements with our reaction time test.</p>
            <Link to="/reaction-test">
              <Button size="lg" className="gap-2">
                <Zap className="h-5 w-5" />
                Take the Reaction Test
              </Button>
            </Link>
          </div>
        </div>
      </div>

      <AdPlaceholder size="leaderboard" />
    </Layout>
  );
}
