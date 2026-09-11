"use client";

import Script from "next/script";
import { usePathname } from "next/navigation";
import { useEffect } from "react";
import { GA_MEASUREMENT_ID, CONSENT_STORAGE_KEY, gtagPageview } from "@/lib/analytics";

// Sets Google Consent Mode defaults (everything denied) before gtag.js itself
// loads, so no analytics cookies are set until the visitor actively grants
// consent via the banner. Runs as early as possible (beforeInteractive) so
// the default is in place before any other script could call gtag.
//
// If the visitor already made a choice on a previous visit (stored in
// localStorage), that choice is re-applied immediately here too, so
// returning visitors who already said "Godta" aren't treated as denied
// while React hydrates.
const CONSENT_INIT_SCRIPT = `
  window.dataLayer = window.dataLayer || [];
  function gtag(){ window.dataLayer.push(arguments); }
  window.gtag = gtag;
  gtag('consent', 'default', {
    'analytics_storage': 'denied',
    'ad_storage': 'denied',
    'ad_user_data': 'denied',
    'ad_personalization': 'denied',
    'wait_for_update': 500
  });
  try {
    var stored = window.localStorage.getItem('${CONSENT_STORAGE_KEY}');
    if (stored === 'granted') {
      gtag('consent', 'update', { 'analytics_storage': 'granted' });
    }
  } catch (e) {}
`;

function GAPageviewTracker() {
  const pathname = usePathname();

  useEffect(() => {
    gtagPageview(pathname);
  }, [pathname]);

  return null;
}

export default function GoogleAnalytics() {
  return (
    <>
      <Script id="ga-consent-init" strategy="beforeInteractive">
        {CONSENT_INIT_SCRIPT}
      </Script>
      <Script
        id="ga-src"
        strategy="afterInteractive"
        src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`}
      />
      <Script id="ga-init" strategy="afterInteractive">
        {`
          window.gtag('js', new Date());
          window.gtag('config', '${GA_MEASUREMENT_ID}', { send_page_view: false });
        `}
      </Script>
      <GAPageviewTracker />
    </>
  );
}
