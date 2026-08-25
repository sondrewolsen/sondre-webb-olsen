"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { BOOKING } from "@/lib/constants";

// Hidden on /bestill since that page already shows both options inline —
// a floating duplicate there would be redundant.
export default function MobileSticky() {
  const pathname = usePathname();
  if (pathname === "/bestill") return null;

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
