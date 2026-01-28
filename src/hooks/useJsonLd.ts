import { useEffect } from "react";

/**
 * Hook to inject JSON-LD structured data into page head
 * Useful for page-specific schema markup (FAQPage, Article, Tool, etc)
 */
export function useJsonLd(schema: Record<string, any>) {
  useEffect(() => {
    // Create script element
    const script = document.createElement("script");
    script.type = "application/ld+json";
    script.textContent = JSON.stringify(schema);

    // Append to head
    document.head.appendChild(script);

    // Cleanup on unmount
    return () => {
      document.head.removeChild(script);
    };
  }, [schema]);
}
