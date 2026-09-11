import { BOOKING } from "@/lib/constants";
import BookingLink from "@/components/BookingLink";

interface BookingCardsProps {
  placement?: string;
}

export default function BookingCards({ placement = "booking_section" }: BookingCardsProps) {
  return (
    <div className="book-grid">
      <div className="loc-card brown">
        <span className="mono brown-text">Sandvika</span>
        <h3>{BOOKING.sandvika.clinic}</h3>
        <p className="loc-address">
          <a href={BOOKING.sandvika.mapsUrl} target="_blank" rel="noreferrer">
            {BOOKING.sandvika.address}
          </a>
        </p>
        <p className="loc-service">Muskelterapi / massasje</p>
        {BOOKING.sandvika.note && <p className="loc-note">{BOOKING.sandvika.note}</p>}
        <p className="loc-days">Vanlige behandlingsdager: {BOOKING.sandvika.days}</p>
        <BookingLink
          location="sandvika"
          href={BOOKING.sandvika.internalHref}
          placement={placement}
          className="btn btn-brown"
        >
          {BOOKING.sandvika.ctaLabel}
        </BookingLink>
        <div className="loc-links">
          <a href={BOOKING.sandvika.mapsUrl} target="_blank" rel="noreferrer" className="secondary-link">
            Se i kart →
          </a>
          <a href={BOOKING.sandvika.profileUrl} target="_blank" rel="noreferrer" className="secondary-link">
            Se profilen min hos Limbra →
          </a>
        </div>
      </div>

      <div className="loc-card blue">
        <span className="mono blue-text">Liertoppen</span>
        <h3>{BOOKING.liertoppen.clinic}</h3>
        <p className="loc-address">
          <a href={BOOKING.liertoppen.mapsUrl} target="_blank" rel="noreferrer">
            {BOOKING.liertoppen.address}
          </a>
        </p>
        <p className="loc-service">Muskelterapi / massasje</p>
        <p className="loc-days">Vanlige behandlingsdager: {BOOKING.liertoppen.days}</p>
        <BookingLink
          location="liertoppen"
          href={BOOKING.liertoppen.internalHref}
          placement={placement}
          className="btn btn-blue"
        >
          {BOOKING.liertoppen.ctaLabel}
        </BookingLink>
        <div className="loc-links">
          <a href={BOOKING.liertoppen.mapsUrl} target="_blank" rel="noreferrer" className="secondary-link">
            Se i kart →
          </a>
        </div>
      </div>
    </div>
  );
}
