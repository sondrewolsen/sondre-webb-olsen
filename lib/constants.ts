export const SITE_URL = "https://sondrewebbolsen.no"; // update once the domain is live

export const BOOKING = {
  sandvika: {
    label: "Sandvika",
    clinic: "Limbra Sandvika",
    ctaLabel: "Bestill time i Sandvika",
    internalHref: "/bestill/sandvika",
    destinationUrl:
      "https://onlinebooking.solvitjournal.no/limbra_sandvika/10108/book-available",
    profileUrl: "https://limbra.no/terapeuter/sondre-webb-olsen/",
  },
  liertoppen: {
    label: "Liertoppen",
    clinic: "Styrk Helse Kiropraktorsenter",
    ctaLabel: "Bestill time på Liertoppen",
    internalHref: "/bestill/liertoppen",
    destinationUrl: "https://timebestilling.aspit.no/#/p2179/services/10/appointment",
  },
} as const;
