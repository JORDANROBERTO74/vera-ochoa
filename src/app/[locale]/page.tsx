import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getDictionary } from "@/i18n/get-dictionary";
import { isLocale, type Locale } from "@/i18n/config";
import { constructMetadata } from "@/lib/seo";
import { Navigation } from "@/components/landing/navigation";
import { Hero } from "@/components/landing/hero";
import { ClientStrip } from "@/components/landing/client-strip";
import { Services } from "@/components/landing/services";
import { About } from "@/components/landing/about";
import { Work } from "@/components/landing/work";
import { Experience } from "@/components/landing/experience";
import { Testimonial } from "@/components/landing/testimonial";
import { Notes } from "@/components/landing/notes";
import { Contact } from "@/components/landing/contact";
import { Footer } from "@/components/landing/footer";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  if (!isLocale(locale)) return {};

  const dict = getDictionary(locale as Locale);
  return constructMetadata({
    locale: locale as Locale,
    title: dict.meta.title,
    description: dict.meta.description,
  });
}

export default async function Page({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!isLocale(locale)) {
    notFound();
  }

  const dict = getDictionary(locale as Locale);

  return (
    <div className="flex min-h-screen flex-col">
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[100] focus:rounded-lg focus:bg-ink focus:px-4 focus:py-2 focus:text-sm focus:text-paper"
      >
        {dict.nav.skip}
      </a>

      <Navigation content={dict.nav} locale={locale as Locale} />

      <main id="main" className="flex-1">
        <Hero content={dict.hero} />
        <ClientStrip content={dict.clients} />
        <Services content={dict.services} />
        <About content={dict.about} />
        <Work content={dict.work} />
        <Experience content={dict.experience} />
        <Testimonial content={dict.testimonial} />
        <Notes content={dict.notes} locale={locale as Locale} />
        <Contact content={dict.contact} />
      </main>

      <Footer content={dict.footer} nav={dict.nav} locale={locale as Locale} />
    </div>
  );
}
