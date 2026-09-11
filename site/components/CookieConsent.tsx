"use client";

import { useEffect, useState } from "react";
import { CONSENT_STORAGE_KEY, updateAnalyticsConsent } from "@/lib/analytics";

export default function CookieConsent() {
  // null = not decided yet whether to show anything (avoids a flash on
  // first paint before we've checked localStorage). false/true once known.
  const [visible, setVisible] = useState<boolean | null>(null);

  useEffect(() => {
    try {
      const stored = window.localStorage.getItem(CONSENT_STORAGE_KEY);
      setVisible(stored !== "granted" && stored !== "denied");
    } catch {
      // localStorage unavailable (e.g. blocked) — show the banner, but
      // don't let this ever throw and break the rest of the page.
      setVisible(true);
    }
  }, []);

  function choose(granted: boolean) {
    try {
      window.localStorage.setItem(CONSENT_STORAGE_KEY, granted ? "granted" : "denied");
    } catch {
      // ignore — the consent update below still applies for this session
    }
    updateAnalyticsConsent(granted);
    setVisible(false);
  }

  if (!visible) return null;

  return (
    <div className="cookie-banner">
      <div className="cookie-banner-inner">
        <p>
          Vi bruker analyseverktøy for å forstå hvordan nettsiden brukes, slik at vi
          kan forbedre den. Vi bruker ikke markedsførings- eller
          annonsesporing. Du kan når som helst endre valget ditt.
        </p>
        <div className="cookie-banner-actions">
          <button className="btn btn-outline" onClick={() => choose(false)}>
            Kun nødvendige
          </button>
          <button className="btn btn-brown" onClick={() => choose(true)}>
            Godta
          </button>
        </div>
      </div>
    </div>
  );
}
