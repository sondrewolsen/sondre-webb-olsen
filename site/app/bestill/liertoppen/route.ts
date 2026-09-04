import { NextResponse } from "next/server";
import { BOOKING } from "@/lib/constants";

// GET /bestill/liertoppen
// Server-side redirect to the external Styrk Helse booking calendar.
//
// TODO before launch: report a "booking_click_liertoppen" event to your
// analytics provider here before redirecting — see the note in
// /app/bestill/sandvika/route.ts for details.
export async function GET() {
  return NextResponse.redirect(BOOKING.liertoppen.destinationUrl, {
    status: 302,
  });
}
