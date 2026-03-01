// Place any global data in this file.
// You can import this data from anywhere in your site by using the `import` keyword.

export const SITE_TITLE = "Harsh Gadodia";
export const SITE_DESCRIPTION =
  "Personal website of Harsh Gadodia. Sharing thoughts on technology, management, and personal experiences.";
export const GITHUB_URL = "https://github.com/haxgad";
export const LINKEDIN_URL = "https://www.linkedin.com/in/harsh-gadodia";
export const GA_MEASUREMENT_ID = "G-X7KZWL055S";

// Navigation links used across the site
export const NAV_LINKS = [
  { href: "/", label: "About" },
  { href: "/bookshelf", label: "Bookshelf" },
  { href: "/concepts", label: "Concepts" },
  { href: "/links", label: "Links" },
  { href: "/quotes", label: "Quotes" },
] as const;
