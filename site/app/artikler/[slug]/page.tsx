import type { Metadata } from "next";
import Image from "next/image";
import { notFound } from "next/navigation";
import { articles } from "@/content/articles";
import { BOOKING, SITE_URL } from "@/lib/constants";

interface Props {
  params: { slug: string };
}

export function generateStaticParams() {
  return articles.map((article) => ({ slug: article.slug }));
}

export function generateMetadata({ params }: Props): Metadata {
  const article = articles.find((a) => a.slug === params.slug);
  if (!article) return {};
  return {
    title: article.title,
    description: article.description,
  };
}

export default function ArticlePage({ params }: Props) {
  const article = articles.find((a) => a.slug === params.slug);
  if (!article) notFound();

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: article.title,
    description: article.description,
    inLanguage: "nb-NO",
    author: { "@type": "Person", name: "Sondre Webb Olsen" },
    ...(article.image && {
      image: `${SITE_URL}${article.image.src}`,
    }),
    url: `${SITE_URL}/artikler/${article.slug}`,
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <header className="page-hero">
        <div className="wrap">
          <span className="mono">
            {article.category} · {article.readTime} lesetid
          </span>
          <h1>{article.title}</h1>
        </div>
      </header>

      <section className="section">
        <div className="wrap prose-article">
          {article.image && (
            <div className="article-hero-img">
              <Image
                src={article.image.src}
                alt={article.image.alt}
                fill
                sizes="(max-width: 768px) 100vw, 680px"
                priority
              />
            </div>
          )}
          {article.body.map((block, i) => {
            if (block.type === "p") return <p key={i}>{block.text}</p>;
            if (block.type === "h2") return <h2 key={i}>{block.text}</h2>;
            if (block.type === "ul")
              return (
                <ul key={i}>
                  {block.items.map((item, j) => (
                    <li key={j}>{item}</li>
                  ))}
                </ul>
              );
            return null;
          })}

          <div className="cta-inline">
            <p>Vil du snakke om dette med noen?</p>
            <div className="cta-row">
              <a href={BOOKING.sandvika.internalHref} className="btn btn-brown">
                Sandvika
              </a>
              <a href={BOOKING.liertoppen.internalHref} className="btn btn-blue">
                Liertoppen
              </a>
            </div>
          </div>

          <p className="disclaimer">
            Informasjonen på denne siden er generell og erstatter ikke
            individuell medisinsk vurdering. Ved akutte, alvorlige eller
            vedvarende symptomer bør du kontakte relevant helsepersonell.
          </p>
        </div>
      </section>
    </>
  );
}
