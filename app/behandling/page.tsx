import type { Metadata } from "next";
import Image from "next/image";
import { BOOKING } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Behandling",
  description:
    "Hva kan du forvente av en behandling hos Sondre Webb Olsen? Kartlegging, behandling, råd og oppfølging.",
};

export default function BehandlingPage() {
  return (
    <>
      <header className="page-hero">
        <div className="wrap">
          <span className="mono">Behandling</span>
          <h1>Hva kan du forvente?</h1>
          <p className="lead">
            En kort oversikt over hvordan en behandling hos meg vanligvis
            foregår – fra første samtale til eventuell oppfølging.
          </p>
        </div>
      </header>

      <section className="section" style={{ paddingBottom: 0 }}>
        <div className="wrap" style={{ maxWidth: 720 }}>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12, marginBottom: 8 }}>
            <div className="photo-frame wide" style={{ maxWidth: "none" }}>
              <Image
                src="/images/naerbilde-behandling.jpg"
                alt="Illustrasjonsbilde: nærbilde av manuell behandling"
                fill
                sizes="(max-width: 768px) 50vw, 340px"
              />
            </div>
            <div className="photo-frame wide" style={{ maxWidth: "none" }}>
              <Image
                src="/images/kne-bein-behandling.jpg"
                alt="Illustrasjonsbilde: behandling av kne og bein"
                fill
                sizes="(max-width: 768px) 50vw, 340px"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="wrap" style={{ maxWidth: 720 }}>
          <h2 style={{ fontSize: 22, marginBottom: 12 }}>1. Kartlegging</h2>
          <p style={{ color: "#5B534B", marginBottom: 16 }}>
            Vi starter alltid med en kort samtale. Jeg spør gjerne om:
          </p>
          <ul className="fit-list" style={{ marginBottom: 16 }}>
            <li>Hva du kjenner, og hvor</li>
            <li>Når plagen startet</li>
            <li>Hva som gjør den bedre eller verre</li>
            <li>Arbeid og aktivitet i hverdagen</li>
            <li>Trening og fysisk aktivitet</li>
            <li>Hva du ønsker hjelp til</li>
          </ul>
          <p style={{ color: "#5B534B" }}>
            Målet er å forstå problemet godt nok til å tilpasse behandlingen
            til deg, ikke å stille en medisinsk diagnose.
          </p>
        </div>
      </section>

      <section className="section" style={{ paddingTop: 0 }}>
        <div className="wrap" style={{ maxWidth: 720 }}>
          <h2 style={{ fontSize: 22, marginBottom: 12 }}>2. Behandling</h2>
          <p style={{ color: "#5B534B", marginBottom: 16 }}>
            Behandlingen tilpasses individuelt ut fra det vi finner i
            kartleggingen. Avhengig av problemstillingen kan den bestå av
            teknikker som:
          </p>
          <ul className="fit-list" style={{ marginBottom: 16 }}>
            <li>Massasje</li>
            <li>Dypere bløtvevsbehandling</li>
            <li>Triggerpunktbehandling</li>
            <li>Bevegelighets- og mobilitetsarbeid</li>
            <li>Dry needling, når det er relevant og avtalt</li>
          </ul>
          <p style={{ color: "#5B534B" }}>
            Ikke alle teknikker brukes ved hver behandling – hva som er
            aktuelt varierer fra gang til gang.
          </p>
        </div>
      </section>

      <section className="section" style={{ paddingTop: 0 }}>
        <div className="wrap" style={{ maxWidth: 720 }}>
          <h2 style={{ fontSize: 22, marginBottom: 12 }}>3. Råd og aktivitet</h2>
          <p style={{ color: "#5B534B", marginBottom: 16 }}>
            Når det er relevant, kan behandlingen også inkludere:
          </p>
          <ul className="fit-list">
            <li>Råd om bevegelse og hverdagsaktivitet</li>
            <li>Justeringer av øvelser</li>
            <li>Enkle øvelser å ta med hjem</li>
            <li>Vurdering av treningsbelastning</li>
            <li>Gradvis retur til aktivitet</li>
          </ul>
        </div>
      </section>

      <section className="section" style={{ paddingTop: 0 }}>
        <div className="wrap" style={{ maxWidth: 720 }}>
          <h2 style={{ fontSize: 22, marginBottom: 12 }}>4. Oppfølging</h2>
          <p style={{ color: "#5B534B" }}>
            Behovet for oppfølging varierer fra person til person. Noen har
            nytte av enkeltstående behandlinger ved behov, mens andre
            foretrekker tettere oppfølging i en periode. Vi avtaler dette
            underveis, ut fra hvordan plagen utvikler seg.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="wrap">
          <div className="cta-inline">
            <p>Klar for å bestille time?</p>
            <div className="cta-row">
              <a href={BOOKING.sandvika.internalHref} className="btn btn-brown">
                Sandvika
              </a>
              <a href={BOOKING.liertoppen.internalHref} className="btn btn-blue">
                Liertoppen
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
