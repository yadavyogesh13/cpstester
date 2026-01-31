import { useEffect } from "react";

/**
 * Hook to inject JSON-LD structured data into page head
 * Useful for page-specific schema markup (FAQPage, Article, Tool, etc)
 */
export function useJsonLd(schema: Record<string, any>) {
  // Stringify schema once so effect only runs when content changes
  const schemaStr = JSON.stringify(schema);

  useEffect(() => {
    // If an identical script already exists, don't add another
    const existing = Array.from(document.head.querySelectorAll('script[type="application/ld+json"]')).find(
      (s) => s.textContent === schemaStr
    );
    if (existing) return;

    const script = document.createElement("script");
    script.type = "application/ld+json";
    script.textContent = schemaStr;

    document.head.appendChild(script);

    // Cleanup: remove script we added
    return () => {
      if (script.parentNode) script.parentNode.removeChild(script);
    };
  }, [schemaStr]);
}
