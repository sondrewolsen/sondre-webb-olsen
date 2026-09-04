export const SITE_URL = "https://sondrewebbolsen.no"; // update once the domain is live

export const BOOKING = {
  sandvika: {
    label: "Sandvika",
    clinic: "Limbra Sandvika",
    address: "Rådmann Halmrasts vei 4, 1337 Sandvika",
    note: "Kort gangavstand fra Sandvika stasjon",
    days: "tirsdag og torsdag",
    ctaLabel: "Bestill time i Sandvika",
    internalHref: "/bestill/sandvika",
    destinationUrl:
      "https://onlinebooking.solvitjournal.no/limbra_sandvika/10108/book-available",
    profileUrl: "https://limbra.no/terapeuter/sondre-webb-olsen/",
    mapsUrl:
      "https://www.google.com/maps/search/?api=1&query=Limbra+Sandvika%2C+R%C3%A5dmann+Halmrasts+vei+4%2C+1337+Sandvika",
  },
  liertoppen: {
    label: "Liertoppen",
    clinic: "Styrk Helse Kiropraktorsenter",
    address: "Vestre Kjennervei 2, 3420 Lierskogen",
    days: "mandag, onsdag og fredag",
    ctaLabel: "Bestill time på Liertoppen",
    internalHref: "/bestill/liertoppen",
    destinationUrl: "https://timebestilling.aspit.no/#/p2179/services/10/appointment",
    mapsUrl:
      "https://www.google.com/maps/search/?api=1&query=Styrk+Helse+Kiropraktorsenter%2C+Vestre+Kjennervei+2%2C+3420+Lierskogen",
  },
} as const;

