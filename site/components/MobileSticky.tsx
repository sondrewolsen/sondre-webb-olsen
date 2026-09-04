"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { BOOKING } from "@/lib/constants";

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
      <Link href={BOOKING.sandvika.internalHref} className="btn btn-brown">
        Sandvika
      </Link>
      <Link href={BOOKING.liertoppen.internalHref} className="btn btn-blue">
        Liertoppen
      </Link>
    </div>
  );
}

