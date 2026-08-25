import Link from "next/link";

export default function Nav() {
  return (
    <nav className="site-nav">
      <div className="wrap">
        <Link href="/" className="logo-block">
          <span className="logo">SONDRE&nbsp;WEBB&nbsp;OLSEN</span>
          <span className="logo-tagline">Muskelterapi · Idrettsvitenskap · Trening</span>
        </Link>
        <div className="navlinks">
          <Link href="/behandling">Behandling</Link>
          <Link href="/om-meg">Om meg</Link>
          <Link href="/artikler">Artikler</Link>
          <Link href="/bestill" className="nav-book">
            Bestill
          </Link>
        </div>
      </div>
    </nav>
  );
}

