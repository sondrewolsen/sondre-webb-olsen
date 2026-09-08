import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { articles, upcomingArticles } from "@/content/articles";

export const metadata: Metadata = {
  title: "Artikler",
  description:
    "Praktiske og evidensinformerte artikler om massasje, muskelterapi, trening og restitusjon.",
};

export default function ArtiklerPage() {
  return (
    <>
      <header className="page-hero">
        <div className="wrap">
          <span className="mono">Artikler</span>
          <h1>Praktisk kunnskap om trening, muskler og behandling</h1>
          <p className="lead">
            Korte, praktiske artikler om massasje, muskelterapi, restitusjon
            og trening – uten unødvendig fagsjargong.
          </p>
        </div>
      </header>

      <section className="section">
        <div className="wrap">
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
                  <Link href={`/artikler/${article.slug}`} className="read-link">
                    Les artikkelen →
                  </Link>
                </div>
              </div>
            ))}
          </div>

          <div className="section-head" style={{ marginTop: 56 }}>
            <span className="mono">Kommer snart</span>
            <h2>Flere artikler er på vei</h2>
          </div>
          <div className="soon-grid">
            {upcomingArticles.map((title) => (
              <div className="soon-item" key={title}>
                {title}
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
