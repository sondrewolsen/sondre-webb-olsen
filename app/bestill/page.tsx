import type { Metadata } from "next";
import Image from "next/image";
import { BOOKING } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Bestill time",
  description:
    "Bestill time hos Sondre Webb Olsen i Sandvika (Limbra) eller på Liertoppen (Styrk Helse).",
};

export default function BestillPage() {
  return (
    <>
      <header className="page-hero">
        <div className="wrap">
          <span className="mono">Bestill time</span>
          <h1>Hvor ønsker du behandling?</h1>
          <p className="lead">
            Velg sted, så tar du deg videre til riktig timebestilling.
          </p>
        </div>
      </header>

      <section className="section" style={{ paddingBottom: 0 }}>
        <div className="wrap">
          <div className="article-hero-img" style={{ maxWidth: 720, marginBottom: 8 }}>
            <Image
              src="/images/behandlingsrom.jpg"
              alt="Illustrasjonsbilde: behandlingsrom"
              fill
              sizes="(max-width: 768px) 100vw, 680px"
            />
          </div>
        </div>
      </section>

      <section className="section">
        <div className="wrap">
          <div className="book-grid">
            <div className="loc-card brown">
              <span className="mono brown-text">Sandvika</span>
              <h3>{BOOKING.sandvika.clinic}</h3>
              <p>Muskelterapi og massasje</p>
              <a href={BOOKING.sandvika.internalHref} className="btn btn-brown">
                {BOOKING.sandvika.ctaLabel}
              </a>
              <a href={BOOKING.sandvika.profileUrl} className="secondary-link">
                Se profilen min hos Limbra →
              </a>
            </div>
            <div className="loc-card blue">
              <span className="mono blue-text">Liertoppen</span>
              <h3>{BOOKING.liertoppen.clinic}</h3>
              <p>Muskelterapi og massasje</p>
              <a href={BOOKING.liertoppen.internalHref} className="btn btn-blue">
                {BOOKING.liertoppen.ctaLabel}
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
