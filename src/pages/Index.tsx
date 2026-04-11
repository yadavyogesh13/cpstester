import { Link } from "react-router-dom";
import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { AdPlaceholder } from "@/components/AdPlaceholder";
import { useJsonLd } from "@/hooks/useJsonLd";
import { useSeo } from "@/hooks/useSeo";
import { 
  MousePointerClick, 
  Keyboard, 
  Space, 
  Zap, 
  Target, 
  TrendingUp,
  Clock,
  Award,
  BarChart3,
  ArrowRight
} from "lucide-react";

const tools = [
  {
    path: "/cps-test",
    icon: MousePointerClick,
    title: "CPS Test",
    description: "Measure your clicks per second with precision timing. Test with 1s, 5s, 10s, or custom durations.",
    color: "primary",
  },
  {
    path: "/typing-test",
    icon: Keyboard,
    title: "Typing Speed Test",
    description: "Calculate your WPM, CPM, and accuracy. Improve your typing skills with real-time feedback.",
    color: "accent",
  },
  {
    path: "/spacebar-test",
    icon: Space,
    title: "Spacebar Test",
    description: "How fast can you hit the spacebar? Test your spacebar clicking speed and endurance.",
    color: "primary",
  },
  {
    path: "/reaction-test",
    icon: Zap,
    title: "Reaction Time Test",
    description: "Measure your reflexes in milliseconds. Train to react faster in competitive games.",
    color: "warning",
  },
];

const features = [
  {
    icon: Target,
    title: "Precise Measurements",
    description: "Accurate timing algorithms ensure your scores reflect your true performance.",
  },
  {
    icon: Clock,
    title: "Multiple Durations",
    description: "Test yourself with various time intervals from 1 second to 60 seconds.",
  },
  {
    icon: BarChart3,
    title: "Track Progress",
    description: "View your history and watch your skills improve over time with detailed stats.",
  },
  {
    icon: Award,
    title: "Personal Records",
    description: "Beat your best scores and challenge yourself to reach new heights.",
  },
];

export default function Index() {
  // Add WebSite and FAQPage schema for SEO
  useJsonLd({
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "CPS Checker",
    "url": "https://cpschecker.site",
    "potentialAction": {
      "@type": "SearchAction",
      "target": "https://cpschecker.site/search?q={query}",
      "query-input": "required name=query"
    }
  });

  useJsonLd({
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": "https://cpschecker.site/"
      }
    ]
  });

  useJsonLd({
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "What is a CPS test?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "A CPS (Clicks Per Second) test is a tool that measures how many times you can click your mouse button within a specific time frame. This metric is crucial for gamers, especially those playing competitive games like Minecraft PvP."
        }
      },
      {
        "@type": "Question",
        "name": "How do I improve my CPS?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "You can improve your CPS by practicing regularly, experimenting with different clicking techniques, using a gaming mouse, maintaining good posture, and taking breaks to prevent fatigue."
        }
      },
      {
        "@type": "Question",
        "name": "What is a normal CPS score?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "The average person clicks at a rate of 6-7 CPS. Experienced gamers can achieve 10-12 CPS with regular clicking. Advanced techniques can push this to 12-14 CPS (jitter clicking) or 15-25 CPS (butterfly clicking)."
        }
      },
      {
        "@type": "Question",
        "name": "What tools does CPS Checker offer?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "CPS Checker offers CPS Test, Typing Speed Test, Spacebar Speed Test, and Reaction Time Test - all free, no registration required."
        }
      }
    ]
  });

  // Page-level SEO meta tags
  useSeo({
    title: "CPS Checker – Free Online Click Speed Test, Reaction Time, Typing & Spacebar Tools",
    description: "CPS Checker is a free online click speed test platform with CPS tests, spacebar speed tests, reaction time tests, and typing tests. Measure your clicks per second, improve reflexes, and track your progress.",
    url: "https://cpschecker.site/",
    image: "https://cpschecker.site/cps-score-og.png",
    keywords: "cps checker, click speed test, cps test, clicks per second, spacebar speed test, reaction time test, typing test, free online speed test"
  });
  return (
    <Layout>
      {/* Hero Section */}
      <section className="gradient-bg-hero py-16 md:py-24">
        <div className="container">
          <div className="mx-auto max-w-3xl text-center slide-up">
            <h1 className="mb-6 text-4xl font-black tracking-tight md:text-5xl lg:text-6xl">
              Test Your <span className="gradient-text">Speed</span> &{" "}
              <span className="gradient-text">Reflexes</span>
            </h1>
            <p className="mb-8 text-lg text-muted-foreground md:text-xl">
              We built CPS Checker for people who want a quick, honest snapshot of how fast their hands really are.
              No sign-up, no gimmicks—just real tools for mouse clicks, typing pace, and reaction timing.
              It’s like a friendly training partner that’s always available.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button variant="hero" asChild>
                <Link to="/cps-test">
                  <MousePointerClick className="mr-2 h-5 w-5" />
                  Start CPS Test
                </Link>
              </Button>
              <Button variant="outline" size="xl" asChild>
                <Link to="/typing-test">
                  <Keyboard className="mr-2 h-5 w-5" />
                  Typing Test
                </Link>
              </Button>
            </div>
            <p className="mt-6 text-sm text-muted-foreground">
              If you prefer guided practice, check our <a href="/guides/cps" className="text-primary hover:underline">CPS guide</a>, <a href="/guides/typing" className="text-primary hover:underline">Typing guide</a>, and <a href="/guides/reaction" className="text-primary hover:underline">Reaction guide</a>.
            </p>
            
            {/* Quick Stats */}
            <div className="mt-12 grid grid-cols-3 gap-4 rounded-xl border border-border/50 bg-background/50 p-6 backdrop-blur-sm">
              <div>
                <div className="text-2xl font-bold text-primary">15+</div>
                <div className="text-xs text-muted-foreground">Years Combined Experience</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-primary">100%</div>
                <div className="text-xs text-muted-foreground">Free & No Registration</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-primary">4</div>
                <div className="text-xs text-muted-foreground">Speed Testing Tools</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Ad Space */}
      {/* <section className="py-6">
        <div className="container flex justify-center">
          <AdPlaceholder size="leaderboard" />
        </div>
      </section> */}

      {/* Tools Grid */}
      <section className="py-16">
        <div className="container">
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-3xl font-bold">Performance Testing Tools</h2>
            <p className="mx-auto max-w-2xl text-muted-foreground">
              Whether you're a competitive gamer, typist, or just curious about your abilities, 
              our suite of tools helps you measure and improve your speed and accuracy.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            {tools.map((tool) => (
              <Link key={tool.path} to={tool.path} className="tool-card group block">
                <div className="mb-4 flex items-center gap-4">
                  <div className={`flex h-12 w-12 items-center justify-center rounded-xl ${
                    tool.color === "primary" ? "bg-primary/10 text-primary" :
                    tool.color === "accent" ? "bg-accent/10 text-accent" :
                    "bg-warning/10 text-warning"
                  }`}>
                    <tool.icon className="h-6 w-6" />
                  </div>
                  <h3 className="text-xl font-bold group-hover:text-primary transition-colors">
                    {tool.title}
                  </h3>
                </div>
                <p className="text-muted-foreground">{tool.description}</p>
                <div className="mt-4 flex items-center text-sm font-medium text-primary">
                  Start Test
                  <TrendingUp className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="border-y border-border/50 bg-muted/30 py-16">
        <div className="container">
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-3xl font-bold">Why Choose cpschecker.site?</h2>
            <p className="mx-auto max-w-2xl text-muted-foreground">
              Built for accuracy and designed for gamers. Our tools provide the precision 
              you need to track your progress and improve your performance.
            </p>
          </div>

          <div className="mb-12 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {features.map((feature) => (
              <div key={feature.title} className="text-center">
                <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-primary/10">
                  <feature.icon className="h-7 w-7 text-primary" />
                </div>
                <h3 className="mb-2 font-bold">{feature.title}</h3>
                <p className="text-sm text-muted-foreground">{feature.description}</p>
              </div>
            ))}
          </div>

          <div className="rounded-2xl border border-primary/20  p-8 shadow-sm">
            <h3 className="mb-4 text-2xl font-bold text-foreground">Free Tips to Improve Your CPS, SPS, and Reaction</h3>
            <ul className="list-decimal space-y-2 pl-6 text-muted-foreground">
              <li>Warm up with 3–5 rounds of low-duration tests (1s, 5s) before aiming for a record.</li>
              <li>Use consistent hand position and try different clicking methods (regular, jitter, butterfly).</li>
              <li>Take short breaks every 3–5 minutes to avoid fatigue and keep accuracy high.</li>
              <li>Compare your scores on multiple devices to find the best mouse and keyboard settings.</li>
              <li>Track your progress in history and repeat the same test to measure improvement.</li>
            </ul>
            <p className="mt-4 text-sm text-muted-foreground">Add these techniques to your routing and game training for faster results.</p>
          </div>
        </div>
      </section>

      {/* Guides Section */}
      <section className="py-16">
        <div className="container">
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-3xl font-bold">Comprehensive Guides</h2>
            <p className="mx-auto max-w-2xl text-muted-foreground">
              Learn How to Master Each Test With Our Detailed Guides and Training Methods
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {[
              {
                title: "CPS Test Guide",
                desc: "Learn benchmarks, techniques, and training methods to improve your clicking speed.",
                icon: MousePointerClick,
                link: "/guides/cps"
              },
              {
                title: "Typing Guide",
                desc: "Master WPM, CPM, and accuracy with our comprehensive typing speed guide.",
                icon: Keyboard,
                link: "/guides/typing"
              },
              {
                title: "Spacebar Guide",
                desc: "Discover spacebar clicking techniques and training programs.",
                icon: Space,
                link: "/guides/spacebar"
              },
              {
                title: "Reaction Guide",
                desc: "Improve your reflexes with scientific training methods and techniques.",
                icon: Zap,
                link: "/guides/reaction"
              }
            ].map((guide, idx) => (
              <Link key={idx} to={guide.link} className="group">
                <div className="relative h-full rounded-xl border border-border/50 bg-card p-6 transition-all hover:border-primary/50 hover:shadow-md">
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                    <guide.icon className="h-6 w-6" />
                  </div>
                  <h3 className="mb-2 font-bold group-hover:text-primary transition-colors">{guide.title}</h3>
                  <p className="text-sm text-muted-foreground">{guide.desc}</p>
                  <div className="mt-4 flex items-center text-xs font-medium text-primary">
                    Read Guide
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Content Section for SEO */}
      <section className="py-16">
        <div className="container">
          <div className="mx-auto max-w-3xl">
            <h2 className="mb-6 text-2xl font-bold">What is a CPS Test?</h2>
            <div className="prose prose-muted max-w-none space-y-4 text-muted-foreground">
              <p>
                A CPS (Clicks Per Second) test is a tool that measures how many times you can click 
                your mouse button within a specific time frame. This metric is crucial for gamers, 
                especially those playing competitive games like Minecraft PvP, where click speed 
                can determine the outcome of battles.
              </p>
              <p>
                The average person clicks at a rate of 6-7 CPS, while experienced gamers can achieve 
                10-12 CPS using regular clicking techniques. Advanced techniques like jitter clicking 
                can push this to 12-14 CPS, and butterfly clicking can reach 15-25 CPS.
              </p>
              <h3 className="mt-8 text-xl font-bold text-foreground">How to Improve Your CPS</h3>
              <ul className="list-disc space-y-2 pl-6">
                <li>Practice regularly with our CPS test tool</li>
                <li>Experiment with different clicking techniques</li>
                <li>Use a gaming mouse with a responsive click mechanism</li>
                <li>Maintain good posture and hand positioning</li>
                <li>Take breaks to prevent fatigue and strain</li>
              </ul>
              <h3 className="mt-8 text-xl font-bold text-foreground">Typing Speed Matters Too</h3>
              <p>
                Beyond clicking, typing speed is essential for productivity and gaming communication. 
                Our typing test measures Words Per Minute (WPM), Characters Per Minute (CPM), and 
                accuracy. The average typing speed is around 40 WPM, while professional typists 
                often exceed 80 WPM.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="border-y border-border/50 bg-muted/30 py-16">
        <div className="container">
          <div className="mx-auto max-w-3xl">
            <h2 className="mb-12 text-center text-3xl font-bold">Frequently Asked Questions</h2>
            
            <div className="space-y-6">
              {[
                {
                  q: "What is CPS and why does it matter?",
                  a: "CPS stands for Clicks Per Second. It measures how many times you can click your mouse in one second. It matters because it's a key metric for gamers, especially in competitive gaming where clicking speed can determine victory or defeat."
                },
                {
                  q: "How can I improve my typing speed?",
                  a: "Improve typing speed through consistent daily practice (20-30 minutes), focusing on accuracy first, using proper finger positioning, taking regular breaks, and using online typing tools like our Typing Test to track progress. Most people see improvement of 10-20 WPM within 8 weeks of consistent practice."
                },
                {
                  q: "What's the average reaction time?",
                  a: "The average untrained reaction time is 200-250 milliseconds. Trained individuals can achieve 150-200ms, athletes 100-150ms, and elite professionals under 100ms. Reaction time can be improved through consistent practice with reaction time tests."
                },
                {
                  q: "Is spacebar clicking bad for your hands?",
                  a: "Spacebar clicking itself isn't harmful if done with proper technique and reasonable duration. The risks come from poor posture, excessive force, extended sessions without breaks, and incorrect technique. Take breaks, maintain good posture, warm up properly, and stop if you experience pain."
                },
                {
                  q: "Do you track my personal data?",
                  a: "No. All tests and scores are stored locally on your device. We don't collect personal information, track users, or send data to external servers. Your privacy is our priority."
                }
              ].map((faq, idx) => (
                <div key={idx} className="rounded-lg border border-border/50 bg-card p-6">
                  <h3 className="mb-3 font-bold text-lg">{faq.q}</h3>
                  <p className="text-muted-foreground">{faq.a}</p>
                </div>
              ))}
            </div>

            <div className="mt-8 text-center">
              <Link to="/faq">
                <Button variant="outline">View All FAQs</Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Bottom Ad Space */}
      {/* <section className="py-6">
        <div className="container flex justify-center">
          <AdPlaceholder size="banner" />
        </div>
      </section> */}
    </Layout>
  );
}
