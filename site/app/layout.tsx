import type { Metadata } from "next";
import { Space_Grotesk, Inter, IBM_Plex_Mono } from "next/font/google";
import "./globals.css";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import MobileSticky from "@/components/MobileSticky";
import { SITE_URL } from "@/lib/constants";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  variable: "--font-display",
});
const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-body",
});
const plexMono = IBM_Plex_Mono({
  subsets: ["latin"],
  weight: ["500"],
  variable: "--font-mono",
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Sondre Webb Olsen — Muskelterapeut",
    template: "%s — Sondre Webb Olsen",
  },
  description:
    "Målrettet muskelterapi i Sandvika og på Liertoppen. Bakgrunn fra idrettsvitenskap, behandling og trening.",
  openGraph: {
    type: "website",
    locale: "nb_NO",
    siteName: "Sondre Webb Olsen",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="no">
      <body
        className={`${spaceGrotesk.variable} ${inter.variable} ${plexMono.variable}`}
      >
        <Nav />
        {children}
        <Footer />
        <MobileSticky />
      </body>
    </html>
  );
}
