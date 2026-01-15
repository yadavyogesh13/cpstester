import { Layout } from "@/components/layout/Layout";

export default function Disclaimer() {
  return (
    <Layout>
      <div className="container py-12 md:py-16">
        <div className="mx-auto max-w-3xl">
          {/* Breadcrumb */}
          <nav className="mb-6 text-sm" aria-label="Breadcrumb">
            <ol className="flex items-center gap-2">
              <li><a href="/" className="text-muted-foreground hover:text-primary">Home</a></li>
              <li className="text-muted-foreground">/</li>
              <li className="text-foreground font-medium">Disclaimer</li>
            </ol>
          </nav>

          <h1 className="mb-8 text-4xl font-black">
            <span className="gradient-text">Disclaimer</span>
          </h1>

          <p className="mb-6 text-sm text-muted-foreground">Last updated: January 2026</p>

          <div className="prose prose-lg max-w-none space-y-6 text-muted-foreground">
            <p>
              The information provided by cpsscore.com ("we," "us," or "our") on our website is for general 
              informational and entertainment purposes only. All information on the site is provided in 
              good faith; however, we make no representation or warranty of any kind, express or implied, 
              regarding the accuracy, adequacy, validity, reliability, availability, or completeness of 
              any information on the site.
            </p>

            <h2 className="text-2xl font-bold text-foreground">Test Results Disclaimer</h2>
            <p>
              The test results provided by cpsscore.com (including but not limited to CPS scores, typing 
              speeds, reaction times, and other measurements) are for personal entertainment and tracking 
              purposes only. These results:
            </p>
            <ul className="list-disc space-y-2 pl-6">
              <li>Should not be considered as professional or scientific measurements</li>
              <li>May vary based on your device, browser, internet connection, and other factors</li>
              <li>Are not guaranteed to be accurate or consistent across different sessions</li>
              <li>Should not be used for competitive rankings outside of personal use</li>
              <li>May differ from results obtained using professional testing equipment</li>
            </ul>

            <h2 className="text-2xl font-bold text-foreground">No Professional Advice</h2>
            <p>
              The site cannot and does not contain professional advice. The information is provided for 
              general informational and educational purposes only and is not a substitute for professional 
              advice. Accordingly, before taking any actions based upon such information, we encourage you 
              to consult with the appropriate professionals.
            </p>

            <h2 className="text-2xl font-bold text-foreground">Health Disclaimer</h2>
            <p>
              Excessive clicking or typing can potentially lead to repetitive strain injuries (RSI) or 
              other physical discomfort. We recommend:
            </p>
            <ul className="list-disc space-y-2 pl-6">
              <li>Taking regular breaks during extended testing sessions</li>
              <li>Maintaining proper posture and hand positioning</li>
              <li>Stopping immediately if you experience any pain or discomfort</li>
              <li>Consulting a healthcare professional if you have concerns about physical strain</li>
            </ul>

            <h2 className="text-2xl font-bold text-foreground">External Links Disclaimer</h2>
            <p>
              The site may contain (or you may be sent through the site) links to other websites or content 
              belonging to or originating from third parties. Such external links are not investigated, 
              monitored, or checked for accuracy, adequacy, validity, reliability, availability, or 
              completeness by us.
            </p>

            <h2 className="text-2xl font-bold text-foreground">Errors and Omissions Disclaimer</h2>
            <p>
              While we have made every attempt to ensure that the information contained in this site has 
              been obtained from reliable sources, cpsscore.com is not responsible for any errors or 
              omissions or for the results obtained from the use of this information. All information in 
              this site is provided "as is," with no guarantee of completeness, accuracy, timeliness, or 
              of the results obtained from the use of this information.
            </p>

            <h2 className="text-2xl font-bold text-foreground">Fair Use Disclaimer</h2>
            <p>
              This site may contain copyrighted material, the use of which has not always been specifically 
              authorized by the copyright owner. We are making such material available for criticism, 
              comment, news reporting, teaching, scholarship, or research. We believe this constitutes a 
              "fair use" of any such copyrighted material as provided for in applicable copyright law.
            </p>

            <h2 className="text-2xl font-bold text-foreground">Affiliate Disclaimer</h2>
            <p>
              This site may contain links to affiliate websites, and we may receive an affiliate commission 
              for any purchases made by you on the affiliate website using such links.
            </p>

            <h2 className="text-2xl font-bold text-foreground">Contact Us</h2>
            <p>
              If you have any questions about this Disclaimer, please contact us at:
            </p>
            <p>
              <a href="mailto:legal@cpsscore.com" className="text-primary hover:underline">
                legal@cpsscore.com
              </a>
            </p>
          </div>
        </div>
      </div>
    </Layout>
  );
}
