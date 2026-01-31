import { Layout } from "@/components/layout/Layout";
import { AdPlaceholder } from "@/components/AdPlaceholder";
import { Button } from "@/components/ui/button";
import { Mail, MessageSquare, Clock, Send } from "lucide-react";
import { useSeo } from "@/hooks/useSeo";

export default function Contact() {
  useSeo({
    title: "Contact – CPS Checker",
    description: "Contact the CPS Checker team for feedback, bug reports, and partnership inquiries. We're happy to help.",
    url: "https://cpschecker.site/contact",
    image: "https://cpschecker.site/cps-score-og.png",
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
              <li className="text-foreground font-medium">Contact</li>
            </ol>
          </nav>

          <h1 className="mb-8 text-4xl font-black">
            <span className="gradient-text">Contact</span> Us
          </h1>

          <div className="prose prose-lg max-w-none space-y-6 text-muted-foreground">
            <p className="text-xl leading-relaxed">
              We'd love to hear from you! Whether you have feedback, suggestions, questions, or just want 
              to say hello, don't hesitate to reach out. Our team is dedicated to providing the best 
              experience possible.
            </p>

            <div className="grid gap-6 py-8 md:grid-cols-2">
              <div className="rounded-xl border border-border/50 bg-card p-6">
                <Mail className="mb-4 h-8 w-8 text-primary" />
                <h3 className="mb-2 text-lg font-bold text-foreground">Email Us</h3>
                <p className="mb-4 text-sm">
                  Send us an email and we'll get back to you as soon as possible.
                </p>
                <a 
                  href="mailto:yadavyogesh0913@gmail.com" 
                  className="text-primary hover:underline font-medium"
                >
                  yadavyogesh0913@gmail.com
                </a>
              </div>
              <div className="rounded-xl border border-border/50 bg-card p-6">
                <Clock className="mb-4 h-8 w-8 text-primary" />
                <h3 className="mb-2 text-lg font-bold text-foreground">Response Time</h3>
                <p className="text-sm">
                  We typically respond to all inquiries within 24-48 hours during business days. 
                  Thank you for your patience.
                </p>
              </div>
            </div>

            <h2 className="text-2xl font-bold text-foreground">Get in Touch</h2>
            <p>
              We welcome all types of feedback and inquiries:
            </p>
            <ul className="list-disc space-y-2 pl-6">
              <li><strong>Feature Requests:</strong> Have an idea for a new test or feature? We'd love to hear it!</li>
              <li><strong>Bug Reports:</strong> Found something not working correctly? Please let us know so we can fix it.</li>
              <li><strong>General Feedback:</strong> Tell us what you like or what could be improved.</li>
              <li><strong>Partnership Inquiries:</strong> Interested in collaborating? Reach out!</li>
              <li><strong>Press & Media:</strong> For press inquiries, please include "PRESS" in your subject line.</li>
            </ul>

            <div className="mt-8 rounded-xl border border-primary/20 bg-primary/5 p-8 text-center">
              <MessageSquare className="mx-auto mb-4 h-12 w-12 text-primary" />
              <h3 className="mb-4 text-xl font-bold text-foreground">Send Us a Message</h3>
              <p className="mb-6 text-sm">
                Click the button below to compose an email to our team.
              </p>
              <Button variant="hero" asChild>
                <a href="mailto:yadavyogesh0913@gmail.com?subject=cpschecker.site%20Inquiry">
                  <Send className="mr-2 h-5 w-5" />
                  Send Email
                </a>
              </Button>
            </div>

            <h2 className="text-2xl font-bold text-foreground">Before You Contact Us</h2>
            <p>
              To help us serve you better, please consider the following when reaching out:
            </p>
            <ul className="list-disc space-y-2 pl-6">
              <li>Check if your question is answered in our FAQ section</li>
              <li>Include as much detail as possible about any issues you're experiencing</li>
              <li>Let us know which browser and device you're using if reporting a bug</li>
              <li>Use a clear and descriptive subject line for faster response</li>
            </ul>

            <p className="mt-8 text-center text-sm">
              Thank you for using cpschecker.site. We appreciate your support and feedback!
            </p>
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
