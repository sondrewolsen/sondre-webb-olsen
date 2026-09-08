import type { Metadata } from "next";
import Image from "next/image";
import BookingCards from "@/components/BookingCards";

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
          <BookingCards />
        </div>
      </section>
    </>
  );
}
