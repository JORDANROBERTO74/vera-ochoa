import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Bricolage_Grotesque, Onest } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import { isLocale, locales } from "@/i18n/config";
import { site } from "@/config/site";
import "../globals.css";

const bricolage = Bricolage_Grotesque({
  subsets: ["latin"],
  variable: "--font-bricolage",
  display: "swap",
});

const onest = Onest({
  subsets: ["latin"],
  variable: "--font-onest",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
};

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export default async function LocaleLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}>) {
  const { locale } = await params;

  if (!isLocale(locale)) {
    notFound();
  }

  return (
    <html lang={locale} className={`${bricolage.variable} ${onest.variable}`}>
      <body className="bg-paper font-sans text-ink antialiased">
        {children}
        {process.env.NODE_ENV === "production" && <Analytics />}
      </body>
    </html>
  );
}
