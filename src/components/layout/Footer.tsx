import { Link } from "react-router-dom";
import { Zap } from "lucide-react";

const toolLinks = [
  { path: "/cps-test", label: "CPS Test" },
  { path: "/typing-test", label: "Typing Test" },
  { path: "/spacebar-test", label: "Spacebar Test" },
  { path: "/reaction-test", label: "Reaction Test" },
];

const legalLinks = [
  { path: "/privacy-policy", label: "Privacy Policy" },
  { path: "/terms", label: "Terms of Service" },
  { path: "/disclaimer", label: "Disclaimer" },
];

const companyLinks = [
  { path: "/about", label: "About Us" },
  { path: "/contact", label: "Contact" },
];

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-border/50 bg-card/50">
      <div className="container py-12">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div className="lg:col-span-1">
            <Link to="/" className="flex items-center gap-2 text-lg font-bold">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg gradient-bg-primary">
                {/* <Zap className="h-4 w-4 text-primary-foreground" /> */}
                <img src="/cps-score-og.png" alt="CPSScore Logo" className="h-5 w-5" />
              </div>
              <span className="gradient-text">CPSScore</span>
              <span className="text-muted-foreground">.com</span>
            </Link>
            <p className="mt-4 text-sm text-muted-foreground">
              The most accurate online tool for testing your clicks per second, typing speed, and reaction time. Improve your gaming performance today.
            </p>
          </div>

          {/* Tools */}
          <div>
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-foreground">
              Tools
            </h3>
            <ul className="space-y-3">
              {toolLinks.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-sm text-muted-foreground transition-colors hover:text-primary"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-foreground">
              Company
            </h3>
            <ul className="space-y-3">
              {companyLinks.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-sm text-muted-foreground transition-colors hover:text-primary"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-foreground">
              Legal
            </h3>
            <ul className="space-y-3">
              {legalLinks.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-sm text-muted-foreground transition-colors hover:text-primary"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-border/50 pt-8 md:flex-row">
          <p className="text-sm text-muted-foreground">
            © {currentYear} cpschecker.site. All rights reserved.
          </p>
          <p className="text-xs text-muted-foreground">
            Made with precision for gamers worldwide
          </p>
        </div>
      </div>
    </footer>
  );
}
