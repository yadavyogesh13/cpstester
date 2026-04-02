import { useEffect } from "react";
import { SITE_URL, DEFAULT_TITLE, DEFAULT_DESCRIPTION, DEFAULT_IMAGE } from "@/lib/seo";

type SEOOptions = {
  title?: string;
  description?: string;
  image?: string;
  url?: string;
  keywords?: string;
  noindex?: boolean;
  type?: string;
  locale?: string;
  twitterCard?: string;
  author?: string;
};

function setOrCreateMeta(nameOrProp: { name?: string; prop?: string }, content: string) {
  const selector = nameOrProp.name ? `meta[name=\"${nameOrProp.name}\"]` : `meta[property=\"${nameOrProp.prop}\"]`;
  let el = document.head.querySelector(selector) as HTMLMetaElement | null;
  if (!el) {
    el = document.createElement("meta");
    if (nameOrProp.name) el.setAttribute("name", nameOrProp.name);
    if (nameOrProp.prop) el.setAttribute("property", nameOrProp.prop);
    document.head.appendChild(el);
  }
  el.setAttribute("content", content);
}

export function useSeo(options: SEOOptions = {}) {
  useEffect(() => {
    const title = options.title || DEFAULT_TITLE;
    const description = options.description || DEFAULT_DESCRIPTION;
    const image = options.image || DEFAULT_IMAGE;
    const url = options.url || SITE_URL;

    // Title
    document.title = title;

    // Basic meta
    setOrCreateMeta({ name: "description" }, description);
    if (options.keywords) setOrCreateMeta({ name: "keywords" }, options.keywords);
    setOrCreateMeta({ name: "robots" }, options.noindex ? "noindex, nofollow" : "index, follow" );

    // Canonical
    let canonical = document.head.querySelector("link[rel=\"canonical\"]") as HTMLLinkElement | null;
    if (!canonical) {
      canonical = document.createElement("link");
      canonical.rel = "canonical";
      document.head.appendChild(canonical);
    }
    canonical.href = options.url || SITE_URL;

    // Open Graph
    setOrCreateMeta({ prop: "og:type" }, options.type || "website");
    setOrCreateMeta({ prop: "og:site_name" }, "CPS Checker");
    setOrCreateMeta({ prop: "og:title" }, title);
    setOrCreateMeta({ prop: "og:description" }, description);
    setOrCreateMeta({ prop: "og:image" }, image);
    setOrCreateMeta({ prop: "og:url" }, url);
    setOrCreateMeta({ prop: "og:locale" }, options.locale || "en_US");

    // Twitter
    setOrCreateMeta({ name: "twitter:card" }, options.twitterCard || "summary_large_image");
    setOrCreateMeta({ name: "twitter:site" }, "@cpschecker");
    setOrCreateMeta({ name: "twitter:title" }, title);
    setOrCreateMeta({ name: "twitter:description" }, description);
    setOrCreateMeta({ name: "twitter:image" }, image);

    // Additional metadata
    if (options.author) setOrCreateMeta({ name: "author" }, options.author);

    // Clean-up is not necessary for meta updates because we want the last set values to persist
  }, [options.title, options.description, options.image, options.url, options.keywords, options.noindex, options.type, options.locale, options.twitterCard, options.author]);
}
