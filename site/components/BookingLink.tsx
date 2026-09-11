"use client";

import Link from "next/link";
import type { ReactNode } from "react";
import { trackBookingClick } from "@/lib/analytics";

interface BookingLinkProps {
  location: "sandvika" | "liertoppen";
  href: string;
  placement: string;
  className?: string;
  extraParams?: Record<string, string>;
  children: ReactNode;
}

// Wraps next/link so booking CTAs across the site (hero, booking cards,
// mobile sticky bar, footer, in-page CTAs) all fire the same GA4 event in
// one place. The click handler never calls preventDefault and never awaits
// anything — it fires the event and lets the browser/router continue the
// navigation exactly as it would without tracking.
export default function BookingLink({
  location,
  href,
  placement,
  className,
  extraParams,
  children,
}: BookingLinkProps) {
  return (
    <Link
      href={href}
      className={className}
      onClick={() => trackBookingClick(location, placement, extraParams)}
    >
      {children}
    </Link>
  );
}
