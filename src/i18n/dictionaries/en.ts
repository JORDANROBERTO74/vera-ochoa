export type Note = {
  slug: string;
  date: string;
  tag: string;
  title: string;
  excerpt: string;
  body: string[];
};

export const en = {
  meta: {
    title: "Vera Ochoa — Product designer",
    description:
      "Product designer in Madrid. Design systems, onboarding flows and interfaces that ship.",
    ogTagline: "Products people actually understand.",
  },
  nav: {
    brand: "Vera Ochoa",
    links: {
      home: "Home",
      about: "About",
      work: "Work",
      notes: "Notes",
    },
    cta: "Let's talk",
    localeLabel: "Language",
    openMenu: "Open menu",
    closeMenu: "Close menu",
    skip: "Skip to content",
  },
  hero: {
    eyebrow: "Product designer · Madrid · Open for projects",
    titleLead: "I'm ",
    name: "Vera Ochoa",
    titleMid: ", a product designer from ",
    city: "Madrid",
    intro:
      "Ten years turning messy product ideas into interfaces that ship. I work with small teams on design systems, onboarding flows and the screens nobody wants to redesign.",
    primaryCta: "Let's talk",
    secondaryCta: "See the work",
    portraitAlt: "Abstract geometric portrait of Vera Ochoa",
    badge: {
      label: "Based in",
      value: "Madrid, working remote",
    },
  },
  clients: {
    label: "Teams I have designed with",
    items: ["ALBURA", "MERIDIA", "OSTRA", "PALMAR", "TEMPLE", "VIRGA"],
  },
  services: {
    label: "Services",
    titleLead: "Five ways I can ",
    titleHighlight: "help you ship",
    intro:
      "Every engagement starts with a week of questions and ends with something a team can build without me.",
    items: [
      {
        title: "Product design",
        description:
          "From fuzzy idea to a flow an engineer can build. Discovery, states, edge cases and a handoff that survives contact with production.",
      },
      {
        title: "Design systems",
        description:
          "Tokens, components and the documentation that stops the same button existing in four sizes. Built for teams that ship weekly.",
      },
      {
        title: "UX research",
        description:
          "Six interviews beat a survey of six hundred. I run the sessions, synthesise the patterns and turn them into decisions.",
      },
      {
        title: "Prototyping",
        description:
          "Clickable when the question is whether the flow works, coded when the question is whether the interaction feels right.",
      },
      {
        title: "Design review",
        description:
          "A second pair of eyes on a screen you have stared at for three weeks: accessibility, hierarchy, copy, edge cases.",
      },
    ],
    ctaCard: {
      title: "Need something else?",
      description:
        "Audits, workshops, or a design partner for one quarter. Tell me the problem and we will find its shape.",
      button: "Get in touch",
    },
  },
  about: {
    label: "About",
    titleLead: "Who's behind all ",
    titleHighlight: "this work?",
    intro:
      "I'm Vera. I started building websites in a shared flat in Lavapiés and never stopped. I have been a designer inside product teams, a contractor for agencies and, since 2023, an independent designer for teams that need one good pair of hands.",
    facts: [
      {
        title: "Ten years shipping product",
        description:
          "Banks, healthcare, marketplaces and a few things that never launched. The failures taught me more.",
      },
      {
        title: "Forty products in production",
        description:
          "Not concepts. Screens real people used, complained about, and then used again.",
      },
    ],
    link: "Work with me",
    portraitAlt: "Abstract circular portrait of Vera Ochoa",
  },
  work: {
    label: "Selected work",
    titleLead: "Take a look at the ",
    titleHighlight: "recent work",
    items: [
      {
        client: "MERIDIA",
        tag: "Product design",
        title: "An onboarding that stopped losing people at step three",
        description:
          "Meridia's account opening had eleven screens and a 38% drop-off before verification. We cut it to six, moved identity checks to the end and rewrote every field label.",
        resultLabel: "Activation",
        resultValue: "+23%",
      },
      {
        client: "PALMAR",
        tag: "Design system",
        title: "One design system for six product teams",
        description:
          "Palmar had four shades of green and three button components. We built a token layer, a component library and documentation the teams actually read.",
        resultLabel: "Components",
        resultValue: "120",
      },
    ],
  },
  experience: {
    label: "Experience",
    titleLead: "Where I have ",
    titleHighlight: "been",
    intro:
      "A decade inside product teams, agencies and one very long freelance stretch.",
    link: "Ask for the full CV",
    items: [
      {
        period: "2023 — now",
        role: "Independent product designer",
        company: "Madrid",
        description:
          "Design systems and product work for teams of two to twenty. Usually hired when there is one designer and no process.",
      },
      {
        period: "2021 — 2023",
        role: "Lead product designer",
        company: "Meridia",
        description:
          "Owned the account area: onboarding, transfers, statements. Built the first design system and the hiring loop that replaced me.",
      },
      {
        period: "2018 — 2021",
        role: "Senior UI designer",
        company: "Ostra Studio",
        description:
          "Shipped marketing sites and product interfaces for fintech and health clients. Learned to defend a layout with evidence.",
      },
      {
        period: "2014 — 2018",
        role: "UI designer",
        company: "Palmar",
        description:
          "First design hire. Built the visual language of the product from a blank Figma file and a printed brand manual.",
      },
    ],
  },
  testimonial: {
    label: "Testimonial",
    quote:
      "Vera rewrote how our team talks about the product. We shipped the new onboarding in six weeks instead of the six months we had planned.",
    name: "Nadia Sanz",
    role: "Head of Product, Meridia",
    avatarAlt: "Abstract geometric portrait of Nadia Sanz",
  },
  notes: {
    label: "Notes",
    titleLead: "Things I keep ",
    titleHighlight: "writing down",
    intro:
      "Short pieces about process, systems and the parts of design that do not fit in a case study.",
    readLabel: "Read the note",
    backLabel: "All notes",
    endNote: "That is the note. If it raised a question, my inbox is open.",
    items: [
      {
        slug: "onboarding-audit",
        date: "2026-02-18",
        tag: "Process",
        title: "The onboarding audit I run before any redesign",
        excerpt:
          "Six screens, one spreadsheet, and the questions that tell you where people actually leave.",
        body: [
          "Before I move a single rectangle, I watch five people open an account. Not a moderated test with a script, just the screen and their hands on the keyboard.",
          "I keep one spreadsheet with four columns: the step, the number of people who reached it, the seconds they spent there and the exact words they said out loud. It takes two days and it settles most arguments about the roadmap.",
          "The pattern is almost never where the team expects. In Meridia the drop-off was not the document upload everyone blamed; it was the password rules on screen two, which nobody could satisfy on the first try.",
          "The audit ends with one sentence per screen: what the person is trying to do, what the screen asks instead, and what we would remove. If a screen cannot justify its place in that sentence, it does not survive the redesign.",
        ],
      },
      {
        slug: "design-tokens-are-a-contract",
        date: "2025-11-04",
        tag: "Systems",
        title: "Design tokens are a contract, not a palette",
        excerpt:
          "The moment a token becomes a suggestion, every team invents its own exception.",
        body: [
          "Every design system I have inherited had the same failure: tokens existed, but nobody agreed on what breaking them cost.",
          "A token is not a colour with a nice name. It is a promise that the space between two sections, the radius on a card and the weight of a heading will look the same in six teams and four products.",
          "The work that made the difference at Palmar was not the library. It was the review: a weekly thirty-minute session where anyone could propose a new token, and the answer was either a name or a reason why the existing one already covered it.",
          "Write the contract down. Name the exceptions. When a team needs a fifth shade of green, the conversation should be about the product, not about how the system is too rigid.",
        ],
      },
      {
        slug: "first-ten-minutes",
        date: "2025-09-12",
        tag: "Research",
        title: "What I ask in the first ten minutes of a research call",
        excerpt:
          "Nobody remembers your prototype. They remember how the conversation made them feel.",
        body: [
          "The first ten minutes decide whether the next forty are useful. I spend them proving that I am not there to grade the person on the other side of the call.",
          "Three questions do most of the work. What did you do yesterday? When was the last time this problem showed up? What did you do instead?",
          "That third question is the one people skip. The workaround is where the real product lives: the spreadsheet, the WhatsApp group, the note stuck to the monitor. Nobody designs a workaround because they enjoy it.",
          "I never ask whether someone would use a feature. I ask what they did last time they needed it. The answer is either a story or a polite fiction, and after a few calls you can tell them apart.",
        ],
      },
    ] as Note[],
  },
  contact: {
    label: "Contact",
    titleLead: "Have a product that needs ",
    titleHighlight: "fewer screens",
    intro:
      "Tell me what you are building and where it hurts. I answer within two working days.",
    button: "Send me an email",
    email: "hola@veraochoa.example",
    location: "Madrid · Remote, CET",
    availability: "Next opening: Q3 2026",
  },
  footer: {
    brand: "Vera Ochoa",
    blurb:
      "Product designer in Madrid. Design systems, onboarding flows and interfaces that ship.",
    menuLabel: "Sections",
    sections: [
      { label: "Home", href: "#home" },
      { label: "About", href: "#about" },
      { label: "Work", href: "#work" },
      { label: "Notes", href: "#notes" },
    ],
    note: "Designed and built by me. No templates, no page builders.",
    copyright: "© 2026 Vera Ochoa",
    email: "hola@veraochoa.example",
  },
  notFound: {
    title: "This page went to a workshop.",
    body: "The link you followed does not exist, or it moved somewhere better.",
    cta: "Back home",
  },
};

export type Dictionary = typeof en;
