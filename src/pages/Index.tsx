import { Link } from "react-router-dom";
import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { AdPlaceholder } from "@/components/AdPlaceholder";
import { 
  MousePointerClick, 
  Keyboard, 
  Space, 
  Zap, 
  Target, 
  TrendingUp,
  Clock,
  Award,
  BarChart3
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
              The most accurate online tools for measuring clicks per second, typing speed, 
              and reaction time. Improve your gaming performance with real-time feedback 
              and detailed statistics.
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

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
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

      {/* Bottom Ad Space */}
      {/* <section className="py-6">
        <div className="container flex justify-center">
          <AdPlaceholder size="banner" />
        </div>
      </section> */}
    </Layout>
  );
}
