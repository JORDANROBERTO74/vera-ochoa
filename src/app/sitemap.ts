import type { MetadataRoute } from "next";
import { site } from "@/config/site";
import { locales } from "@/i18n/config";
import { getDictionary } from "@/i18n/get-dictionary";

export default function sitemap(): MetadataRoute.Sitemap {
  const entries: MetadataRoute.Sitemap = [];

  for (const locale of locales) {
    entries.push({
      url: `${site.url}/${locale}`,
      lastModified: new Date(),
      changeFrequency: "weekly" as const,
      priority: locale === "en" ? 1 : 0.9,
      alternates: {
        languages: {
          en: `${site.url}/en`,
          es: `${site.url}/es`,
          "x-default": `${site.url}/en`,
        },
      },
    });
  }

  for (const note of getDictionary("en").notes.items) {
    for (const locale of locales) {
      entries.push({
        url: `${site.url}/${locale}/notes/${note.slug}`,
        lastModified: new Date(`${note.date}T12:00:00Z`),
        changeFrequency: "yearly" as const,
        priority: 0.6,
        alternates: {
          languages: {
            en: `${site.url}/en/notes/${note.slug}`,
            es: `${site.url}/es/notes/${note.slug}`,
            "x-default": `${site.url}/en/notes/${note.slug}`,
          },
        },
      });
    }
  }

  return entries;
}
