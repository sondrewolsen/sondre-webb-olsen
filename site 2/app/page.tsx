import Link from "next/link";
import Image from "next/image";
import { BOOKING, SITE_URL } from "@/lib/constants";
import { articles } from "@/content/articles";
import BookingCards from "@/components/BookingCards";

const personJsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Sondre Webb Olsen",
  jobTitle: "Muskelterapeut",
  url: SITE_URL,
  image: `${SITE_URL}/images/portrait.jpg`,
  worksFor: [
    { "@type": "Organization", name: "Limbra Sandvika" },
    { "@type": "Organization", name: "Styrk Helse Kiropraktorsenter" },
  ],
};

export default function HomePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
      />
      <header className="hero">
        <div className="hero-row">
          <div className="hero-text-col">
            <span className="mono">
              Muskelterapi · Idrettsvitenskap · Trening
            </span>
            <h1 style={{ marginTop: 16 }}>Målrettet muskelterapi for en aktiv hverdag</h1>
            <p className="lead">
              Målrettet muskelterapi for muskelspenninger, smerter og
              treningsrelaterte plager – med bakgrunn fra idrettsvitenskap,
              behandling og flere års erfaring innen trening og coaching.
            </p>
            <div className="cta-row">
              <Link href={BOOKING.sandvika.internalHref} className="btn btn-brown">
                {BOOKING.sandvika.ctaLabel} <small>Limbra</small>
              </Link>
              <Link href={BOOKING.liertoppen.internalHref} className="btn btn-blue">
                {BOOKING.liertoppen.ctaLabel} <small>Styrk Helse</small>
              </Link>
            </div>
            <Link href="/behandling" className="hero-more-link">
              Se hva du kan forvente →
            </Link>
          </div>
          <div className="hero-photo-full">
            <Image
              src="/images/portrait.jpg"
              alt="Sondre Webb Olsen, muskelterapeut"
              fill
              sizes="(max-width: 900px) 100vw, 55vw"
              quality={95}
              priority
            />
          </div>
        </div>
      </header>

      <div className="trust">
        <div className="wrap">
          <span className="trust-row trust-item">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#6E5342" strokeWidth="1.8"><path d="M22 10L12 5 2 10l10 5 10-5Z"/><path d="M6 12v5c0 1.5 3 3 6 3s6-1.5 6-3v-5"/></svg>
            Bachelor i idrettsvitenskap
          </span>
          <span className="trust-row trust-item">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#6E5342" strokeWidth="1.8"><circle cx="12" cy="8" r="4"/><path d="M4 21c0-4 4-6 8-6s8 2 8 6"/></svg>
            Utdannet massasjeterapeut
          </span>
          <span className="trust-row trust-item">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#6E5342" strokeWidth="1.8"><path d="M6 7h2m8 0h2M8 7v10m8-10v10M6 9h12M6 15h12"/></svg>
            Flere års coaching-erfaring
          </span>
          <span className="trust-row trust-item">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#6E5342" strokeWidth="1.8"><path d="M20.8 4.6a5 5 0 0 0-7.1 0L12 6.3l-1.7-1.7a5 5 0 1 0-7.1 7.1L12 20.3l8.8-8.7a5 5 0 0 0 0-6.9Z"/></svg>
            Klinisk tilnærming med trening i fokus
          </span>
        </div>
      </div>

      <section className="section">
        <div className="wrap">
          <div className="section-head">
            <span className="mono">Hva jeg jobber med</span>
            <h2>Vanlige plager</h2>
          </div>
          <div className="treat-grid">
            <div className="treat-card">
              <span className="n">01</span>
              <h3>Nakke &amp; skuldre</h3>
              <p>Stivhet og ubehag knyttet til arbeid, trening eller hverdagen.</p>
            </div>
            <div className="treat-card">
              <span className="n">02</span>
              <h3>Spenningshodepine</h3>
              <p>
                Plager der spenninger og ømhet i nakke, skuldre og øvre rygg kan
                være en del av bildet.
              </p>
            </div>
            <div className="treat-card">
              <span className="n">03</span>
              <h3>Treningsrelaterte plager</h3>
              <p>
                Plager og muskelspenninger knyttet til styrketrening, løping,
                CrossFit, HYROX og annen fysisk aktivitet.
              </p>
            </div>
            <div className="treat-card">
              <span className="n">04</span>
              <h3>Rygg &amp; hofte</h3>
              <p>Stivhet og redusert bevegelighet i rygg og hofte.</p>
            </div>
            <div className="treat-card">
              <span className="n">05</span>
              <h3>Restitusjon</h3>
              <p>
                For deg som trener jevnlig og ønsker hjelp til å håndtere
                belastning og restitusjon.
              </p>
            </div>
            <div className="treat-card">
              <span className="n">06</span>
              <h3>Retur til trening</h3>
              <p>
                Veiledning og tilpasning på veien tilbake til trening etter en
                periode med smerter, skade eller redusert belastning.
              </p>
            </div>
          </div>
          <div style={{ marginTop: 20 }}>
            <Link href="/behandling" className="btn btn-outline">
              Se alle behandlinger jeg tilbyr →
            </Link>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="wrap">
          <div className="differentiator">
            <Image
              src="/images/behandling.jpg"
              alt="Illustrasjonsbilde: manuell behandling av rygg"
              fill
              sizes="1080px"
            />
            <div className="content">
              <h2>Mer enn bare massasje.</h2>
              <p>
                Behandlingen tilpasses deg, plagene dine og aktivitetsnivået
                ditt. Med bakgrunn fra både behandling, idrettsvitenskap og
                trening ser jeg ikke bare på hvor du kjenner ubehag, men også
                hvordan kroppen brukes i hverdagen og på trening.
              </p>
              <Link href="/behandling">Se hva du kan forvente →</Link>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="wrap">
          <div className="section-head">
            <span className="mono">Første gang?</span>
            <h2>Hva kan du forvente?</h2>
          </div>
          <div className="steps-grid">
            <div className="step-card">
              <span className="n">Kartlegging</span>
              <h3>Vi starter med en prat</h3>
              <p>
                Kort samtale om plagene dine, aktivitetsnivå, trening og hva
                du ønsker hjelp med.
              </p>
            </div>
            <div className="step-card">
              <span className="n">Behandling</span>
              <h3>Tilpasset deg</h3>
              <p>
                Behandlingen tilpasses problemstillingen og kan bestå av
                ulike manuelle teknikker, arbeid med muskulatur og
                bevegelighet.
              </p>
            </div>
            <div className="step-card">
              <span className="n">Veien videre</span>
              <h3>Råd når det er aktuelt</h3>
              <p>
                Ved behov får du råd om aktivitet, enkle øvelser eller
                hvordan du kan tilpasse treningen videre.
              </p>
            </div>
          </div>
          <div style={{ marginTop: 24 }}>
            <Link href="/behandling" className="btn btn-outline">
              Les mer om behandlingen →
            </Link>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="wrap">
          <div className="section-head">
            <span className="mono">Bestill behandling</span>
            <h2>Hvor ønsker du behandling?</h2>
          </div>
          <BookingCards />
        </div>
      </section>

      <section className="section">
        <div className="wrap">
          <div className="section-head">
            <span className="mono">Om meg</span>
            <h2>Behandling og trening – i kombinasjon</h2>
          </div>
          <div className="about-preview">
            <div className="photo-frame wide">
              <Image
                src="/images/trening-bevegelse.jpg"
                alt="Illustrasjonsbilde: trening og bevegelse"
                fill
                sizes="(max-width: 768px) 180px, 320px"
              />
            </div>
            <div>
              <p>
                Med bachelor i idrettsvitenskap, utdanning som
                massasjeterapeut og flere års erfaring fra trening og
                coaching har jeg med meg både behandlingsrommet og
                treningsgulvet inn i måten jeg jobber på.
              </p>
              <p>
                Målet er å tilpasse behandlingen til deg, hverdagen din og
                aktivitetene du ønsker å kunne gjøre.
              </p>
              <Link href="/om-meg" className="btn btn-dark">
                Les mer om meg
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="wrap">
          <div className="section-head">
            <span className="mono">Passer dette for deg?</span>
            <h2>Muskelterapi kan være aktuelt hvis du...</h2>
          </div>
          <ul className="fit-list">
            <li>trener regelmessig og opplever muskulære plager</li>
            <li>har en stiv eller øm nakke, rygg eller skulder</li>
            <li>ønsker målrettet behandling fremfor ren velværemassasje</li>
            <li>ønsker hjelp til å tilpasse trening rundt en plage</li>
            <li>vil kombinere behandling med en aktiv tilnærming</li>
          </ul>
        </div>
      </section>

      <section className="section">
        <div className="wrap">
          <div
            className="section-head"
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "flex-end",
              maxWidth: "none",
              flexWrap: "wrap",
              gap: 16,
            }}
          >
            <div>
              <span className="mono">Artikler</span>
              <h2>Nyttig lesning</h2>
            </div>
            <Link href="/artikler" className="mono" style={{ color: "#6E5342" }}>
              Se alle artikler →
            </Link>
          </div>
          <div className="article-grid">
            {articles.map((article) => (
              <div className="article-card" key={article.slug}>
                <div className="article-thumb">
                  {article.image && (
                    <Image
                      src={article.image.src}
                      alt={article.image.alt}
                      fill
                      sizes="(max-width: 768px) 100vw, 360px"
                    />
                  )}
                </div>
                <div className="body">
                  <span className="mono">
                    {article.category} · {article.readTime}
                  </span>
                  <h3>{article.title}</h3>
                  <p className="desc">{article.description}</p>
                  <Link
                    href={`/artikler/${article.slug}`}
                    className="read-link"
                  >
                    Les artikkelen →
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
