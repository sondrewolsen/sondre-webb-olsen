import type { MetadataRoute } from "next";
import { articles } from "@/content/articles";
import { SITE_URL } from "@/lib/constants";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes = ["", "/behandling", "/om-meg", "/artikler", "/bestill"].map(
    (path) => ({
      url: `${SITE_URL}${path}`,
      lastModified: new Date(),
    })
  );

  const articleRoutes = articles.map((article) => ({
    url: `${SITE_URL}/artikler/${article.slug}`,
    lastModified: new Date(),
  }));

  return [...staticRoutes, ...articleRoutes];
}
