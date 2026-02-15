// Place any global data in this file.
// You can import this data from anywhere in your site by using the `import` keyword.

export const SITE_TITLE = 'Harsh Gadodia';
export const SITE_DESCRIPTION = 'Personal website of Harsh Gadodia. Sharing thoughts on technology, management, and personal experiences.';
export const TRANSITION_API = true;

// Navigation links used across the site
export const NAV_LINKS = [
  { href: "/", label: "About" },
  { href: "/bookshelf", label: "Bookshelf" },
  { href: "/concepts", label: "Concepts" },
  { href: "/links", label: "Links" },
  { href: "/quotes", label: "Quotes" },
] as const;