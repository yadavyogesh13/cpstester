import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Mail, MessageSquare, Clock, Send } from "lucide-react";
import { useSeo } from "@/hooks/useSeo";
import { useJsonLd } from "@/hooks/useJsonLd";
import { useState } from "react";

export default function Contact() {
  useSeo({
    title: "Contact CPS Checker – Feedback, Support & Partnerships",
    description: "Get in touch with CPS Checker team for feedback, bug reports, suggestions, and partnership inquiries. We respond within 24-48 hours.",
    url: "https://cpschecker.site/contact",
    image: "https://cpschecker.site/cps-score-og.png",
    keywords: "contact us, customer support, feedback, bug report"
  });

  useJsonLd({
    "@context": "https://schema.org",
    "@type": "ContactPage",
    "name": "Contact CPS Checker",
    "description": "Contact form and support information for CPS Checker",
    "url": "https://cpschecker.site/contact",
    "contactPoint": {
      "@type": "ContactPoint",
      "contactType": "Customer Support",
      "email": "yadavyogesh0913@gmail.com",
      "availableLanguage": "en"
    }
  });

  const [submitted, setSubmitted] = useState(false);

  return (
    <Layout>
      <div className="container py-12 md:py-16">
        <div className="mx-auto max-w-3xl">

          {/* Breadcrumb */}
          <nav className="mb-6 text-sm">
            <ol className="flex items-center gap-2">
              <li>
                <a href="/" className="text-muted-foreground hover:text-primary">
                  Home
                </a>
              </li>
              <li className="text-muted-foreground">/</li>
              <li className="text-foreground font-medium">Contact</li>
            </ol>
          </nav>

          {/* Heading */}
          <h1 className="mb-6 text-4xl font-black text-foreground">
            <span className="text-primary">Contact</span> Us
          </h1>

          {/* Intro */}
          <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
            We'd love to hear from you! Send us your feedback, questions, or ideas.
          </p>

          {/* Info Cards */}
          <div className="grid gap-6 md:grid-cols-2 mb-10">
            <div className="rounded-xl border border-border bg-card p-6">
              <Mail className="mb-4 h-8 w-8 text-primary" />
              <h3 className="font-bold text-lg text-foreground mb-2">Email Us</h3>
              <p className="text-sm text-muted-foreground mb-2">
                Send us an email anytime:
              </p>
              <a
                href="mailto:yadavyogesh0913@gmail.com"
                className="text-primary font-medium break-all"
              >
                yadavyogesh0913@gmail.com
              </a>
            </div>

            <div className="rounded-xl border border-border bg-card p-6">
              <Clock className="mb-4 h-8 w-8 text-primary" />
              <h3 className="font-bold text-lg text-foreground mb-2">
                Response Time
              </h3>
              <p className="text-sm text-muted-foreground">
                We usually reply within 24–48 hours.
              </p>
            </div>
          </div>

          {/* FORM */}
          <div className="rounded-xl border border-primary/20 bg-background p-8 shadow-sm">
            <MessageSquare className="mx-auto mb-4 h-12 w-12 text-primary" />

            <h3 className="text-xl font-bold text-center text-foreground mb-6">
              Send Us a Message
            </h3>

            {submitted && (
              <p className="text-green-600 text-center mb-4 font-medium">
                ✅ Message sent successfully!
              </p>
            )}

            <form
              action="https://formspree.io/f/mldwawgn"
              method="POST"
              onSubmit={() => setSubmitted(true)}
              className="space-y-5"
            >
              {/* Name */}
              <div>
                <label className="block text-sm font-medium text-foreground mb-1">
                  Name
                </label>
                <input
                  type="text"
                  name="name"
                  required
                  placeholder="Enter your name"
                  className="w-full rounded-lg border border-border bg-background px-3 py-2 text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                />
              </div>

              {/* Email */}
              <div>
                <label className="block text-sm font-medium text-foreground mb-1">
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  required
                  placeholder="Enter your email"
                  className="w-full rounded-lg border border-border bg-background px-3 py-2 text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                />
              </div>

              {/* Subject */}
              <div>
                <label className="block text-sm font-medium text-foreground mb-1">
                  Subject
                </label>
                <input
                  type="text"
                  name="subject"
                  placeholder="Enter subject"
                  className="w-full rounded-lg border border-border bg-background px-3 py-2 text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                />
              </div>

              {/* Message */}
              <div>
                <label className="block text-sm font-medium text-foreground mb-1">
                  Message
                </label>
                <textarea
                  name="message"
                  rows={4}
                  required
                  placeholder="Write your message..."
                  className="w-full rounded-lg border border-border bg-background px-3 py-2 text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                ></textarea>
              </div>

              {/* Spam Protection */}
              <input type="text" name="_gotcha" style={{ display: "none" }} />

              {/* Submit */}
              <Button type="submit" className="w-full text-base font-semibold">
                <Send className="mr-2 h-5 w-5" />
                Send Message
              </Button>
            </form>
          </div>

          {/* Footer Note */}
          <p className="mt-10 text-center text-sm text-muted-foreground">
            Thank you for using cpschecker.site ❤️
          </p>

        </div>
      </div>
    </Layout>
  );
}