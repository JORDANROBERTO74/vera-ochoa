import Link from "next/link";
import { defaultLocale } from "@/i18n/config";
import { getDictionary } from "@/i18n/get-dictionary";

export default function NotFound() {
  const dict = getDictionary(defaultLocale).notFound;

  return (
    <main className="flex min-h-screen flex-col items-center justify-center px-6 text-center">
      <span className="label text-muted">404</span>
      <h1 className="mt-6 max-w-[560px] text-display">{dict.title}</h1>
      <p className="mt-5 max-w-md text-[16px] leading-relaxed text-muted">{dict.body}</p>
      <Link
        href={`/${defaultLocale}`}
        className="mt-9 inline-flex h-12 items-center rounded-xl border-[3px] border-ink bg-coral px-6 text-[15px] font-semibold text-ink shadow-hard transition-transform hover:-translate-y-0.5"
      >
        {dict.cta}
      </Link>
    </main>
  );
}
