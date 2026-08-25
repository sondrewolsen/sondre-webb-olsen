import Link from "next/link";
import { BOOKING } from "@/lib/constants";

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="site-footer">
      <div className="wrap">
        <div className="footer-grid">
          <div>
            <h4>Sondre Webb Olsen</h4>
            <p>Muskelterapi · Idrettsvitenskap · Trening</p>
          </div>
          <div>
            <h4>Behandling</h4>
            <Link href={BOOKING.sandvika.internalHref}>Sandvika – Limbra</Link>
            <Link href={BOOKING.liertoppen.internalHref}>
              Liertoppen – Styrk Helse
            </Link>
          </div>
          <div>
            <h4>Nettside</h4>
            <Link href="/om-meg">Om meg</Link>
            <Link href="/behandling">Behandling</Link>
            <Link href="/artikler">Artikler</Link>
            <Link href="/bestill">Bestill time</Link>
          </div>
        </div>
        <div className="footer-bottom">
          <span className="mono">© {year} Sondre Webb Olsen</span>
        </div>
        <p className="disclaimer">
          Informasjonen på denne nettsiden er generell og erstatter ikke
          individuell medisinsk vurdering. Ved akutte, alvorlige eller
          vedvarende symptomer bør du kontakte relevant helsepersonell.
        </p>
      </div>
    </footer>
  );
}
