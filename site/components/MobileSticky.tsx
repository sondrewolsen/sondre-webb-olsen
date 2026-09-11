"use client";

import { usePathname } from "next/navigation";
import { useState } from "react";
import { BOOKING } from "@/lib/constants";
import BookingLink from "@/components/BookingLink";

// Hidden on /bestill since that page already shows both options inline —
// a floating duplicate there would be redundant.
//
// Collapsed by default to a single slim "Bestill time" button to keep the
// bar compact on mobile (especially with Safari's bottom UI eating into
// the viewport). Tapping it reveals the two location choices in place.
export default function MobileSticky() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  if (pathname === "/bestill") return null;

  if (!open) {
    return (
      <div className="mobile-sticky">
        <button className="btn btn-dark" onClick={() => setOpen(true)}>
          Bestill time
        </button>
      </div>
    );
  }

  return (
    <div className="mobile-sticky">
      <BookingLink
        location="sandvika"
        href={BOOKING.sandvika.internalHref}
        placement="mobile_sticky"
        className="btn btn-brown"
      >
        Sandvika
      </BookingLink>
      <BookingLink
        location="liertoppen"
        href={BOOKING.liertoppen.internalHref}
        placement="mobile_sticky"
        className="btn btn-blue"
      >
        Liertoppen
      </BookingLink>
    </div>
  );
}


