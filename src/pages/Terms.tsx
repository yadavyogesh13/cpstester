import { Layout } from "@/components/layout/Layout";

export default function Terms() {
  return (
    <Layout>
      <div className="container py-12 md:py-16">
        <div className="mx-auto max-w-3xl">
          {/* Breadcrumb */}
          <nav className="mb-6 text-sm" aria-label="Breadcrumb">
            <ol className="flex items-center gap-2">
              <li><a href="/" className="text-muted-foreground hover:text-primary">Home</a></li>
              <li className="text-muted-foreground">/</li>
              <li className="text-foreground font-medium">Terms of Service</li>
            </ol>
          </nav>

          <h1 className="mb-8 text-4xl font-black">
            <span className="gradient-text">Terms</span> of Service
          </h1>

          <p className="mb-6 text-sm text-muted-foreground">Last updated: January 2026</p>

          <div className="prose prose-lg max-w-none space-y-6 text-muted-foreground">
            <p>
              Welcome to cpsscore.com. By accessing and using our website, you agree to be bound by these 
              Terms of Service. Please read them carefully before using our services.
            </p>

            <h2 className="text-2xl font-bold text-foreground">1. Acceptance of Terms</h2>
            <p>
              By accessing or using cpsscore.com, you agree to be bound by these Terms of Service and all 
              applicable laws and regulations. If you do not agree with any of these terms, you are 
              prohibited from using or accessing this site.
            </p>

            <h2 className="text-2xl font-bold text-foreground">2. Use License</h2>
            <p>
              Permission is granted to temporarily access and use the materials (tests and tools) on 
              cpsscore.com for personal, non-commercial use only. This license does not include:
            </p>
            <ul className="list-disc space-y-2 pl-6">
              <li>Modifying or copying our materials</li>
              <li>Using the materials for commercial purposes</li>
              <li>Attempting to reverse engineer any software on the website</li>
              <li>Removing any copyright or proprietary notations</li>
              <li>Transferring the materials to another person</li>
            </ul>

            <h2 className="text-2xl font-bold text-foreground">3. Disclaimer</h2>
            <p>
              The materials on cpsscore.com are provided on an "as is" basis. cpsscore.com makes no warranties, 
              expressed or implied, and hereby disclaims and negates all other warranties including, without 
              limitation:
            </p>
            <ul className="list-disc space-y-2 pl-6">
              <li>Implied warranties of merchantability or fitness for a particular purpose</li>
              <li>Warranty of non-infringement of intellectual property</li>
              <li>Warranty regarding the accuracy, reliability, or completeness of test results</li>
            </ul>

            <h2 className="text-2xl font-bold text-foreground">4. Limitations</h2>
            <p>
              In no event shall cpsscore.com or its suppliers be liable for any damages (including, without 
              limitation, damages for loss of data or profit, or due to business interruption) arising out 
              of the use or inability to use the materials on cpsscore.com, even if cpsscore.com or an authorized 
              representative has been notified orally or in writing of the possibility of such damage.
            </p>

            <h2 className="text-2xl font-bold text-foreground">5. Accuracy of Materials</h2>
            <p>
              The materials appearing on cpsscore.com could include technical, typographical, or photographic 
              errors. cpsscore.com does not warrant that any of the materials on its website are accurate, 
              complete, or current. Test results are provided for entertainment and personal tracking purposes 
              only and should not be considered definitive measurements of ability.
            </p>

            <h2 className="text-2xl font-bold text-foreground">6. Links</h2>
            <p>
              cpsscore.com has not reviewed all of the sites linked to its website and is not responsible for 
              the contents of any such linked site. The inclusion of any link does not imply endorsement by 
              cpsscore.com. Use of any such linked website is at the user's own risk.
            </p>

            <h2 className="text-2xl font-bold text-foreground">7. User Conduct</h2>
            <p>
              You agree not to:
            </p>
            <ul className="list-disc space-y-2 pl-6">
              <li>Use automated systems or bots to interact with our tests</li>
              <li>Attempt to manipulate test results or gaming scores</li>
              <li>Interfere with or disrupt the website or servers</li>
              <li>Use the website for any unlawful purpose</li>
              <li>Attempt to gain unauthorized access to any portion of the website</li>
            </ul>

            <h2 className="text-2xl font-bold text-foreground">8. Modifications</h2>
            <p>
              cpsscore.com may revise these Terms of Service at any time without notice. By using this website, 
              you are agreeing to be bound by the then-current version of these Terms of Service.
            </p>

            <h2 className="text-2xl font-bold text-foreground">9. Governing Law</h2>
            <p>
              These terms and conditions are governed by and construed in accordance with applicable laws, 
              and you irrevocably submit to the exclusive jurisdiction of the courts in that location.
            </p>

            <h2 className="text-2xl font-bold text-foreground">10. Contact Information</h2>
            <p>
              If you have any questions about these Terms of Service, please contact us at:
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
