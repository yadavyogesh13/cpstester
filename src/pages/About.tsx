import { Layout } from "@/components/layout/Layout";
import { AdPlaceholder } from "@/components/AdPlaceholder";
import { Target, Users, Zap, Shield, Heart, Award } from "lucide-react";

export default function About() {
  return (
    <Layout>
      <div className="container py-12 md:py-16">
        <div className="mx-auto max-w-3xl">
          {/* Breadcrumb */}
          <nav className="mb-6 text-sm" aria-label="Breadcrumb">
            <ol className="flex items-center gap-2">
              <li><a href="/" className="text-muted-foreground hover:text-primary">Home</a></li>
              <li className="text-muted-foreground">/</li>
              <li className="text-foreground font-medium">About Us</li>
            </ol>
          </nav>

          <h1 className="mb-8 text-4xl font-black">
            About <span className="gradient-text">cpschecker.site</span>
          </h1>

          <div className="prose prose-lg max-w-none space-y-6 text-muted-foreground">
            <p className="text-xl leading-relaxed">
              Welcome to cpschecker.site, your trusted destination for accurate speed and performance testing tools. 
              We've built a comprehensive suite of tests designed to help gamers, typists, and anyone curious 
              about their abilities measure and improve their skills.
            </p>

            <h2 className="text-2xl font-bold text-foreground">Our Mission</h2>
            <p>
              Our mission is to provide the most accurate, user-friendly, and accessible speed testing tools 
              on the internet. We believe that everyone should have access to professional-grade testing 
              equipment without any barriers. That's why all our tools are completely free to use, with no 
              registration required.
            </p>

            <div className="grid gap-6 py-8 md:grid-cols-2">
              <div className="rounded-xl border border-border/50 bg-card p-6">
                <Target className="mb-4 h-8 w-8 text-primary" />
                <h3 className="mb-2 text-lg font-bold text-foreground">Precision First</h3>
                <p className="text-sm">
                  Our testing algorithms are designed for accuracy, giving you reliable results you can trust.
                </p>
              </div>
              <div className="rounded-xl border border-border/50 bg-card p-6">
                <Users className="mb-4 h-8 w-8 text-primary" />
                <h3 className="mb-2 text-lg font-bold text-foreground">Community Driven</h3>
                <p className="text-sm">
                  Built with feedback from gamers and typists worldwide to meet real-world needs.
                </p>
              </div>
              <div className="rounded-xl border border-border/50 bg-card p-6">
                <Shield className="mb-4 h-8 w-8 text-primary" />
                <h3 className="mb-2 text-lg font-bold text-foreground">Privacy Focused</h3>
                <p className="text-sm">
                  Your data stays on your device. We don't collect personal information or track users.
                </p>
              </div>
              <div className="rounded-xl border border-border/50 bg-card p-6">
                <Zap className="mb-4 h-8 w-8 text-primary" />
                <h3 className="mb-2 text-lg font-bold text-foreground">Lightning Fast</h3>
                <p className="text-sm">
                  Optimized for performance, our tools load instantly and work smoothly on any device.
                </p>
              </div>
            </div>

            <h2 className="text-2xl font-bold text-foreground">What We Offer</h2>
            <p>
              cpschecker.site provides a comprehensive suite of testing tools including:
            </p>
            <ul className="list-disc space-y-2 pl-6">
              <li><strong>CPS Test:</strong> Measure your clicks per second with multiple timer options (1s, 5s, 10s, 30s, 60s)</li>
              <li><strong>Typing Speed Test:</strong> Calculate your WPM, CPM, and accuracy with real passages</li>
              <li><strong>Spacebar Test:</strong> Test your spacebar clicking speed and endurance</li>
              <li><strong>Reaction Time Test:</strong> Measure your reflexes in milliseconds</li>
            </ul>

            <h2 className="text-2xl font-bold text-foreground">Why Choose Us?</h2>
            <p>
              Unlike other testing sites that are cluttered with ads and slow to load, cpschecker.site is designed 
              with user experience as the top priority. We use modern web technologies to ensure fast load times 
              and smooth performance across all devices. Our tests work equally well on desktop computers, 
              tablets, and mobile phones.
            </p>
            <p>
              All test results are stored locally on your device, allowing you to track your progress over time 
              without creating an account or sharing any personal information. Your privacy is important to us, 
              and we're committed to maintaining a transparent and trustworthy platform.
            </p>

            <h2 className="text-2xl font-bold text-foreground">Our Commitment</h2>
            <p>
              We're committed to continuously improving our tools based on user feedback and the latest research 
              in human-computer interaction. Whether you're a competitive gamer looking to gain an edge, a 
              professional typist wanting to track your speed, or simply curious about your abilities, 
              cpschecker.site is here to help you measure and improve.
            </p>

            <div className="mt-8 flex items-center gap-4 rounded-xl border border-primary/20 bg-primary/5 p-6">
              <Heart className="h-12 w-12 text-primary flex-shrink-0" />
              <div>
                <h3 className="font-bold text-foreground">Thank You</h3>
                <p className="text-sm">
                  Thank you for choosing cpschecker.site. We appreciate your support and look forward to helping 
                  you achieve your performance goals.
                </p>
              </div>
            </div>
          </div>

          {/* Ad Space */}
          {/* <div className="mt-12 flex justify-center">
            <AdPlaceholder size="rectangle" />
          </div> */}
        </div>
      </div>
    </Layout>
  );
}
