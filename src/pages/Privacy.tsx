import { Layout } from "@/components/layout/Layout";

export default function Privacy() {
  return (
    <Layout>
      <div className="container py-12 md:py-16">
        <div className="mx-auto max-w-3xl">
          {/* Breadcrumb */}
          <nav className="mb-6 text-sm" aria-label="Breadcrumb">
            <ol className="flex items-center gap-2">
              <li><a href="/" className="text-muted-foreground hover:text-primary">Home</a></li>
              <li className="text-muted-foreground">/</li>
              <li className="text-foreground font-medium">Privacy Policy</li>
            </ol>
          </nav>

          <h1 className="mb-8 text-4xl font-black">
            <span className="gradient-text">Privacy</span> Policy
          </h1>

          <p className="mb-6 text-sm text-muted-foreground">Last updated: January 2026</p>

          <div className="prose prose-lg max-w-none space-y-6 text-muted-foreground">
            <p>
              At cpschecker.site, we are committed to protecting your privacy and ensuring transparency about 
              how we handle information. This Privacy Policy explains our practices regarding data collection, 
              use, and protection when you use our website.
            </p>

            <h2 className="text-2xl font-bold text-foreground">Information We Collect</h2>
            <p>
              cpschecker.site is designed with privacy in mind. We minimize data collection to only what is 
              necessary for the functionality of our services:
            </p>
            <ul className="list-disc space-y-2 pl-6">
              <li><strong>Test Results:</strong> Your test scores and history are stored locally on your 
              device using browser localStorage. This data never leaves your device and is not transmitted 
              to our servers.</li>
              <li><strong>Cookie Preferences:</strong> We store your cookie consent preferences locally 
              to remember your choices.</li>
              <li><strong>Aggregated Analytics:</strong> We may use privacy-respecting analytics to 
              understand how our website is used in aggregate, without identifying individual users.</li>
            </ul>

            <h2 className="text-2xl font-bold text-foreground">Cookies and Similar Technologies</h2>
            <p>
              We use cookies to enhance your experience on our website:
            </p>
            <ul className="list-disc space-y-2 pl-6">
              <li><strong>Essential Cookies:</strong> Required for the basic functionality of the website.</li>
              <li><strong>Analytics Cookies:</strong> Help us understand how visitors interact with our 
              website (with your consent).</li>
              <li><strong>Advertising Cookies:</strong> Used by our advertising partners to show relevant 
              ads (with your consent).</li>
            </ul>
            <p>
              You can manage your cookie preferences at any time through your browser settings or by 
              clearing your browser data.
            </p>

            <h2 className="text-2xl font-bold text-foreground">Third-Party Services</h2>
            <p>
              We may use the following third-party services:
            </p>
            <ul className="list-disc space-y-2 pl-6">
              <li><strong>Google AdSense:</strong> We display advertisements through Google AdSense. 
              Google may use cookies to personalize ads based on your browsing history. You can learn 
              more about Google's privacy practices at their Privacy Policy.</li>
              <li><strong>Analytics Services:</strong> We may use analytics services to understand website 
              usage patterns. These services collect anonymized data about page views and user interactions.</li>
            </ul>

            <h2 className="text-2xl font-bold text-foreground">Data Storage and Security</h2>
            <p>
              Your test results are stored locally in your browser's localStorage. This means:
            </p>
            <ul className="list-disc space-y-2 pl-6">
              <li>Your data stays on your device</li>
              <li>Clearing your browser data will remove your saved results</li>
              <li>We cannot access or recover your test history</li>
              <li>Your data is not shared with third parties</li>
            </ul>

            <h2 className="text-2xl font-bold text-foreground">Your Rights</h2>
            <p>
              You have the right to:
            </p>
            <ul className="list-disc space-y-2 pl-6">
              <li>Access your locally stored data through your browser's developer tools</li>
              <li>Delete your data by clearing your browser's localStorage</li>
              <li>Opt out of non-essential cookies through our cookie consent banner</li>
              <li>Use browser settings or extensions to block cookies and tracking</li>
            </ul>

            <h2 className="text-2xl font-bold text-foreground">Children's Privacy</h2>
            <p>
              Our services are intended for general audiences. We do not knowingly collect personal 
              information from children under 13. If you believe a child has provided us with personal 
              information, please contact us so we can address the situation.
            </p>

            <h2 className="text-2xl font-bold text-foreground">Changes to This Policy</h2>
            <p>
              We may update this Privacy Policy from time to time. We will notify you of any changes by 
              posting the new Privacy Policy on this page and updating the "Last updated" date.
            </p>

            <h2 className="text-2xl font-bold text-foreground">Contact Us</h2>
            <p>
              If you have any questions about this Privacy Policy, please contact us at:
            </p>
            <p>
              <a href="mailto:yadavyogesh0913@gmail.com" className="text-primary hover:underline">
                yadavyogesh0913@gmail.com
              </a>
            </p>
          </div>
        </div>
      </div>
    </Layout>
  );
}
