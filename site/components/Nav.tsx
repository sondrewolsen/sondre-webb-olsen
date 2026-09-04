"use client";

import Link from "next/link";
import { useState } from "react";

export default function Nav() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="site-nav">
      <div className="wrap">
        <Link href="/" className="logo-block" onClick={() => setOpen(false)}>
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
          <button
            className="nav-hamburger"
            aria-label="Åpne meny"
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
          >
            <span />
            <span />
            <span />
          </button>
        </div>
      </div>
      <div className={`mobile-menu${open ? " open" : ""}`}>
        <Link href="/behandling" onClick={() => setOpen(false)}>
          Behandling
        </Link>
        <Link href="/om-meg" onClick={() => setOpen(false)}>
          Om meg
        </Link>
        <Link href="/artikler" onClick={() => setOpen(false)}>
          Artikler
        </Link>
        <Link href="/bestill" onClick={() => setOpen(false)}>
          Bestill time
        </Link>
      </div>
    </nav>
  );
}


