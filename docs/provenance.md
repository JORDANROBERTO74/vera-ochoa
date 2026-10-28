# Vera Ochoa — Provenance & Compliance Ledger

This ledger records the origin and transformation of the **Vera Ochoa** portfolio.

## 1. Project Background

- **Original Working Directory:** `E:\Projects\landing\next\paperfolio-portfolio-template`
- **Archived source:** `E:\Projects\landing\next\_archive\paperfolio-portfolio-template.zip`
- **Rebuilt Project Name:** `vera-ochoa`
- **Final Repository:** `https://github.com/JORDANROBERTO74/vera-ochoa`
- **Live Production URL:** `https://veraochoa.vercel.app`
- **Mode:** Change pass — the nine-section architecture and the neo-brutalist language were kept; identity, copy, artwork, stack and configuration were replaced.

## 2. Third-Party Content Removed

### Personal data

The footer shipped a real person's contact details and an authorship credit:

- `nikhil@helpinggeeks.com`
- `+91-9000057810`
- "Made by Nikhil - Powered by V0"

All three were removed. The site now uses the reserved `.example` TLD (`hola@veraochoa.example`), so no real mailbox is implied.

### Brand attributions

- **"Lily Woods, VP of Design at Google"** — a testimonial attributed to a real company with an invented quote. Replaced by a fictional person at a fictional company (Nadia Sanz, Head of Product, Meridia).
- **v0.app** — the README, the `metadata.generator` field and `public/icon.svg` (the v0 logo used as favicon) all referenced the v0 platform. Removed and replaced with an original mark.
- **"Paperfolio X"**, the template's brand, and **"John Carter"**, the placeholder persona. Gone.

### Placeholder copy

Every paragraph, service, experience entry, article and footer link was lorem ipsum. All of it was rewritten for a fictional product designer in Madrid, in both English and Spanish.

### Asset inventory (39 files removed)

The template shipped 39 image files under `public/`, all of them from the original template pack:

- 2 illustrated portraits (`design-mode/63407fbdc2d4ac5270385fd4_home-he.png`, `images/633b277fc2e3697bb14c6a4f-frances.png`), one of them named after a person.
- 14 illustrations (`about-me.svg`, `web-design.svg`, `ui-ux-design.svg`, `product-design.svg`, `user-research.svg`, `motion-graphics.svg`, `get-in-touch.svg`, `studio-logo.svg`, `studio-workspace.svg`, `venture-logo.svg`, `venture-workspace.svg`, `article-design-tools.png`, `article-font-sizes.png`, `article-exercises.png`).
- 6 client logos (`logos/application.svg`, `business.svg`, `company.svg`, `startup.svg`, `venture.svg`, `agency.svg`).
- 4 small company icons (`agency.png`, `company.png`, `busines.png`, `startup.png`).
- Assorted decoration and placeholders: `quote-icon.jpg`, `633b1c81e34cfb82b85454eb-quote-s.png`, `newsletter-icon.jpg`, `newsletter-icon.png`, `footer-logo.jpeg`, `footer-logo.jpg`, the five `placeholder-*` files, `icon.svg` and `cartoon-avatar-man-with-beard-yellow-shirt.jpg`.

None of them appears in this repository or its history. `public/` is now empty by design: the favicon is `src/app/icon.svg` and every illustration is a React SVG component.

## 3. Brand & Identity

- **Persona:** Vera Ochoa, product designer, Madrid. Fictional.
- **Positioning:** product design, design systems and onboarding for small product teams.
- **Palette:** ink `#101010`, paper `#fcfaf4`, coral `#ff6a3d`, cobalt `#2d3fe0`, sun `#ffc93c`, mint `#b9f2d6`.
- **Typography:** Bricolage Grotesque for display, Onest for text, both self-hosted through `next/font/google`.
- **Locale strategy:** typed bilingual copy (`en`, `es`) on `/[locale]` routes, negotiated from `Accept-Language` and persisted in the `vera.locale` cookie.

## 4. Code Removed

- **`components/ui/`** — the template carried only `button.tsx` and `input.tsx`, both built on shadcn conventions. Replaced by a local `button.tsx` with three variants and no dependency on `class-variance-authority` or Radix Slot.
- **`theme-provider.tsx`** — imported `next-themes` and was never mounted.
- **`newsletter-signup.tsx`** — a component that returned `null`.
- **`styles/globals.css`** — a duplicate token file that nothing imported.
- **`components.json`** — shadcn CLI configuration with no CLI in the project.

### Dependencies

`package.json` declared 58 packages. The landing only used `next`, `react`, `react-dom`, `lucide-react`, `@radix-ui/react-slot`, `class-variance-authority`, `clsx` and `tailwind-merge`; 50 were unused (27 Radix packages, Recharts, Zod, React Hook Form, Embla, cmdk, sonner, vaul, date-fns, input-otp, react-day-picker, react-resizable-panels, tailwindcss-animate, autoprefixer and the rest).

The rebuilt project has six runtime dependencies: `next`, `react`, `react-dom`, `@vercel/analytics`, `clsx` and `tailwind-merge`. Icons are inline SVG, the carousel became a CSS scroll-snap strip, and the form became a `mailto:` action.

### Build escape hatches

`next.config.mjs` shipped `typescript.ignoreBuildErrors`, `eslint.ignoreDuringBuilds` and `images.unoptimized`; `tsconfig.json` had no `typecheck` script, and there was **no ESLint dependency and no ESLint configuration file**, so the `lint` script could not run. All three flags were removed, `@types/react` was upgraded from 18 to 19 to match React, and a flat ESLint config plus a `typecheck` script were added.

## 5. What Replaced the Images

Every illustration is an original SVG component in `src/components/art/`:

- `portrait.tsx` — three variants (hero, about, avatar) built from a medallion, a head, a hair cut clipped to the skull and a shoulder shape. No facial features and no real person.
- `service-art.tsx` — five product vignettes (browser, component grid, conversation, prototype frames, review lens).
- `project-art.tsx` — two case-study covers (mobile onboarding, component library).
- `note-art.tsx` — three abstract editorial headers.

All of them use the same palette tokens as the rest of the site, so a colour change propagates without touching an image.

## 6. Content

- Nine sections: hero, client strip, services, about, work, experience, testimonial, notes, contact, plus navigation and footer.
- Three notes with real bodies (four paragraphs each) in both languages, each with its own route, metadata and sitemap entry.
- Metrics, clients and testimonies are fictional. Client wordmarks (ALBURA, MERIDIA, OSTRA, PALMAR, TEMPLE, VIRGA) are invented names rendered as text, not reproduced logos.

## 7. Architectural Verification

- Next.js 16.4.3 App Router with Turbopack; React 19.3; strict TypeScript.
- `/en`, `/es` and the six note pages are statically generated; `/` returns `307` to the negotiated locale.
- A `[locale]/[...rest]` catch-all renders the styled 404.
- `pnpm typecheck`, `pnpm lint` and `pnpm build` complete without errors or warnings.
- `robots.txt`, a multilingual `sitemap.xml` covering notes, `hreflang` alternates and a generated 1200×630 OpenGraph card are in place.
- Motion is CSS-only and disabled under `prefers-reduced-motion`; the page renders complete with JavaScript disabled, except for the mobile menu.
