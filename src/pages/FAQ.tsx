import { Layout } from "@/components/layout/Layout";
import { AdPlaceholder } from "@/components/AdPlaceholder";
import { useSeo } from "@/hooks/useSeo";
import { useJsonLd } from "@/hooks/useJsonLd";
import { faqData } from "@/data/blogData";
import { useState } from "react";
import { ChevronDown } from "lucide-react";

export default function FAQ() {
  const [expandedId, setExpandedId] = useState<string>("1");

  useSeo({
    title: "FAQ - CPS Checker | Frequently Asked Questions",
    description: "Get answers to common questions about CPS tests, typing tests, reaction time testing, and how to improve your skills with our tools.",
    url: "https://cpschecker.site/faq",
    image: "https://cpschecker.site/cps-score-og.png",
  });

  useJsonLd({
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqData.map(item => ({
      "@type": "Question",
      "name": item.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": item.answer
      }
    }))
  });

  return (
    <Layout>
      <div className="container py-12 md:py-16">
        <div className="mx-auto max-w-3xl">
          {/* Breadcrumb */}
          <nav className="mb-6 text-sm" aria-label="Breadcrumb">
            <ol className="flex items-center gap-2">
              <li><a href="/" className="text-muted-foreground hover:text-primary">Home</a></li>
              <li className="text-muted-foreground">/</li>
              <li className="text-foreground font-medium">FAQ</li>
            </ol>
          </nav>

          <h1 className="mb-4 text-4xl font-black">
            Frequently Asked <span className="gradient-text">Questions</span>
          </h1>
          <p className="mb-12 text-lg text-muted-foreground">
            Find answers to common questions about our speed testing tools and how to improve your skills.
          </p>

          {/* FAQ Items */}
          <div className="space-y-4">
            {faqData.map((item) => (
              <div
                key={item.id}
                className="rounded-lg border border-border/50 bg-card overflow-hidden transition-all hover:border-primary/50"
              >
                <button
                  onClick={() => setExpandedId(expandedId === item.id ? "" : item.id)}
                  className="flex w-full items-center justify-between px-6 py-4 text-left hover:bg-muted/50 transition-colors"
                  aria-expanded={expandedId === item.id}
                >
                  <span className="font-bold text-lg">{item.question}</span>
                  <ChevronDown
                    className={`h-5 w-5 transition-transform text-primary ${
                      expandedId === item.id ? "rotate-180" : ""
                    }`}
                  />
                </button>

                {expandedId === item.id && (
                  <div className="border-t border-border/50 px-6 py-4 bg-muted/30">
                    <p className="text-muted-foreground leading-relaxed">{item.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Contact */}
          <div className="mt-12 rounded-xl border border-border/50 bg-gradient-to-r from-primary/10 to-accent/10 p-8 text-center">
            <h2 className="mb-4 text-2xl font-bold">Didn't Find Your Answer?</h2>
            <p className="mb-6 text-muted-foreground">
              Check out our comprehensive guides or reach out on social media for more help.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a href="/guides/cps" className="inline-block px-6 py-2 rounded-lg bg-primary text-primary-foreground font-medium hover:bg-primary/90 transition-colors">
                View Guides
              </a>
              <a href="/about" className="inline-block px-6 py-2 rounded-lg border border-primary text-primary font-medium hover:bg-primary/10 transition-colors">
                About Us
              </a>
            </div>
          </div>
        </div>
      </div>

      <AdPlaceholder size="leaderboard" />
    </Layout>
  );
}
