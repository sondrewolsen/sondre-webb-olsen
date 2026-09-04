import type { Metadata } from "next";
import Image from "next/image";
import BookingCards from "@/components/BookingCards";

export const metadata: Metadata = {
  title: "Om meg",
  description:
    "Sondre Webb Olsen har bakgrunn fra idrettsvitenskap, massasjeterapi og flere års erfaring som coach innen CrossFit, functional fitness og HYROX.",
};

export default function OmMegPage() {
  return (
    <>
      <header className="page-hero">
        <div className="wrap">
          <span className="mono">Om meg</span>
          <h1>Sondre Webb Olsen</h1>
          <p className="lead">
            Muskelterapeut med bakgrunn fra idrettsvitenskap, behandling og
            flere års erfaring innen trening og coaching.
          </p>
        </div>
      </header>

      <section className="section">
        <div className="wrap">
          <div className="about-preview">
            <div className="photo-frame" style={{ maxWidth: 220 }}>
              <Image
                src="/images/portrait.jpg"
                alt="Sondre Webb Olsen, muskelterapeut"
                fill
                sizes="220px"
                quality={95}
              />
            </div>
            <div>
              <span className="mono" style={{ display: "block", marginBottom: 10 }}>
                Min bakgrunn
              </span>
              <p>
                Jeg har en bachelorgrad i idrettsvitenskap og utdanning som
                massasjeterapeut, i tillegg til bakgrunn som personlig
                trener. Gjennom flere år som coach innen CrossFit og
                functional fitness, og med erfaring fra HYROX-coaching, har
                jeg jobbet tett med aktive mennesker – og med folk som først
                og fremst vil bli kvitt hverdagsplager i nakke, skuldre og
                rygg.
              </p>
              <p>
                Jeg har også erfaring med rehabilitering og gradvis retur
                til trening etter perioder med smerte eller redusert
                belastning.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="section" style={{ paddingTop: 0 }}>
        <div className="wrap" style={{ maxWidth: 720 }}>
          <h2 style={{ fontSize: 22, marginBottom: 12 }}>
            Fra treningsgulvet til behandlingsrommet
          </h2>
          <p style={{ color: "#5B534B" }}>
            Det som kjennetegner måten jeg jobber på, er at jeg forsøker å
            forene to perspektiver: behandlingsrommet og treningsgulvet. Jeg
            forstår hvordan muskulære plager kan oppstå og utvikle seg – men
            også hvordan trening, belastning og bevegelse henger sammen med
            dette. Det gjør at jeg ikke bare ser på hvor det gjør vondt, men
            også på hva som skjer i hverdagen og på trening rundt plagen.
          </p>
        </div>
      </section>

      <section className="section" style={{ paddingTop: 0 }}>
        <div className="wrap" style={{ maxWidth: 720 }}>
          <h2 style={{ fontSize: 22, marginBottom: 12 }}>Hvordan jeg jobber</h2>
          <p style={{ color: "#5B534B" }}>
            Behandlingen tilpasses den enkelte. Noen ønsker først og fremst
            målrettet muskelbehandling, mens andre har mer nytte av at
            behandling kombineres med råd om trening og bevegelse. Jeg
            legger vekt på en tilnærming som er klinisk og funksjonell,
            fremfor en generell velværemassasje.
          </p>
        </div>
      </section>

      <section className="section" style={{ paddingTop: 0 }}>
        <div className="wrap about-preview">
          <div>
            <h2 style={{ fontSize: 22, marginBottom: 12 }}>Trening og coaching</h2>
            <p style={{ color: "#5B534B" }}>
              Ved siden av behandling coacher jeg innen functional fitness og
              HYROX-relatert trening hos Oslo Training Club. Denne erfaringen
              gir meg praktisk innsikt i treningsteknikk, øvelsesutvalg og
              hvordan belastning bygges opp over tid – noe som er nyttig når
              treningsrelaterte plager skal vurderes og følges opp.
            </p>
          </div>
          <div className="photo-frame wide" style={{ order: -1 }}>
            <Image
              src="/images/styrketrening.jpg"
              alt="Illustrasjonsbilde: styrketrening"
              fill
              sizes="(max-width: 768px) 100vw, 320px"
            />
          </div>
        </div>
      </section>

      <section className="section">
        <div className="wrap">
          <div className="section-head">
            <span className="mono">Hvor finner du meg?</span>
            <h2>Behandling og trening</h2>
          </div>
          <BookingCards />
          <p style={{ marginTop: 20, fontSize: 13.5, color: "#5B534B" }}>
            Jeg coacher også functional fitness og HYROX-trening hos{" "}
            <strong>Oslo Training Club</strong>.
          </p>
        </div>
      </section>
    </>
  );
}
