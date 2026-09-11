// GA4 setup. Loaded via components/GoogleAnalytics.tsx (script tags + consent
// defaults) and components/CookieConsent.tsx (the banner that grants/denies
// analytics_storage). Every call here is defensive — if gtag hasn't loaded
// yet (or the visitor has JS analytics blocked), these are silent no-ops
// rather than throwing, so nothing here can ever break navigation.

export const GA_MEASUREMENT_ID = "G-KNJXYZRDKJ";

export const CONSENT_STORAGE_KEY = "cookie-consent"; // "granted" | "denied"

declare global {
  interface Window {
    dataLayer: unknown[];
    gtag: (...args: unknown[]) => void;
  }
}

export function gtagPageview(url: string) {
  if (typeof window === "undefined" || typeof window.gtag !== "function") return;
  window.gtag("config", GA_MEASUREMENT_ID, { page_path: url });
}

export function gtagEvent(name: string, params?: Record<string, string>) {
  if (typeof window === "undefined" || typeof window.gtag !== "function") return;
  window.gtag("event", name, params);
}

export function updateAnalyticsConsent(granted: boolean) {
  if (typeof window === "undefined" || typeof window.gtag !== "function") return;
  window.gtag("consent", "update", {
    analytics_storage: granted ? "granted" : "denied",
  });
}

type BookingLocation = "sandvika" | "liertoppen";

// Fires booking_sandvika_click / booking_liertoppen_click with a `location`
// and `placement` parameter, per the site's tracking spec. Never blocks or
// delays navigation — the caller should not preventDefault or await this.
export function trackBookingClick(
  location: BookingLocation,
  placement: string,
  extraParams?: Record<string, string>
) {
  gtagEvent(`booking_${location}_click`, {
    location,
    placement,
    ...extraParams,
  });
}
