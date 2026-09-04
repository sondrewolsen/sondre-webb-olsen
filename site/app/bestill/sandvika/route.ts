import { NextResponse } from "next/server";
import { BOOKING } from "@/lib/constants";

// GET /bestill/sandvika
// Server-side redirect to the external Limbra booking calendar.
//
// TODO before launch: report a "booking_click_sandvika" event to your
// analytics provider (e.g. an Umami/Plausible events API call) here,
// before issuing the redirect, so clicks are captured even though the
// destination is off-site. Keep this fast — don't block the redirect
// on a slow network call; fire-and-forget or use `waitUntil` if your
// hosting platform supports it.
export async function GET() {
  return NextResponse.redirect(BOOKING.sandvika.destinationUrl, {
    status: 302,
  });
}
