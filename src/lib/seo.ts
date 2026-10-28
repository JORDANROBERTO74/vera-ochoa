import type { Metadata } from "next";
import { site } from "@/config/site";
import type { Locale } from "@/i18n/config";

export function constructMetadata({
  locale,
  title,
  description,
  path = "",
}: {
  locale: Locale;
  title: string;
  description: string;
  path?: string;
}): Metadata {
  const url = `${site.url}/${locale}${path}`;

  return {
    metadataBase: new URL(site.url),
    title,
    description,
    alternates: {
      canonical: url,
      languages: {
        en: `${site.url}/en${path}`,
        es: `${site.url}/es${path}`,
        "x-default": `${site.url}/en${path}`,
      },
    },
    openGraph: {
      title,
      description,
      url,
      siteName: site.name,
      locale: locale === "es" ? "es_ES" : "en_US",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
    },
    icons: {
      icon: [{ url: "/icon.svg", type: "image/svg+xml" }],
    },
  };
}
