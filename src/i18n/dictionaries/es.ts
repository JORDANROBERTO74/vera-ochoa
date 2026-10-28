import type { Dictionary, Note } from "./en";

export const es: Dictionary = {
  meta: {
    title: "Vera Ochoa — Diseñadora de producto",
    description:
      "Diseñadora de producto en Madrid. Sistemas de diseño, onboardings e interfaces que se lanzan.",
    ogTagline: "Productos que la gente entiende.",
  },
  nav: {
    brand: "Vera Ochoa",
    links: {
      home: "Inicio",
      about: "Sobre mí",
      work: "Trabajo",
      notes: "Notas",
    },
    cta: "Hablemos",
    localeLabel: "Idioma",
    openMenu: "Abrir menú",
    closeMenu: "Cerrar menú",
    skip: "Saltar al contenido",
  },
  hero: {
    eyebrow: "Diseñadora de producto · Madrid · Abierta a proyectos",
    titleLead: "Soy ",
    name: "Vera Ochoa",
    titleMid: ", diseñadora de producto en ",
    city: "Madrid",
    intro:
      "Diez años convirtiendo ideas de producto difusas en interfaces que se lanzan. Trabajo con equipos pequeños en sistemas de diseño, onboardings y las pantallas que nadie quiere rediseñar.",
    primaryCta: "Hablemos",
    secondaryCta: "Ver el trabajo",
    portraitAlt: "Retrato geométrico abstracto de Vera Ochoa",
    badge: {
      label: "Base",
      value: "Madrid, en remoto",
    },
  },
  clients: {
    label: "Equipos con los que he diseñado",
    items: ["ALBURA", "MERIDIA", "OSTRA", "PALMAR", "TEMPLE", "VIRGA"],
  },
  services: {
    label: "Servicios",
    titleLead: "Cinco formas de ",
    titleHighlight: "ayudarte a lanzar",
    intro:
      "Cada proyecto empieza con una semana de preguntas y termina con algo que el equipo puede construir sin mí.",
    items: [
      {
        title: "Diseño de producto",
        description:
          "De la idea difusa a un flujo que una ingeniera puede construir. Descubrimiento, estados, casos límite y un traspaso que sobrevive al contacto con producción.",
      },
      {
        title: "Sistemas de diseño",
        description:
          "Tokens, componentes y la documentación que evita que el mismo botón exista en cuatro tamaños. Pensado para equipos que publican cada semana.",
      },
      {
        title: "Investigación",
        description:
          "Seis entrevistas valen más que una encuesta de seiscientas. Hago las sesiones, sintetizo los patrones y los convierto en decisiones.",
      },
      {
        title: "Prototipado",
        description:
          "Clicable cuando la pregunta es si el flujo funciona; en código cuando la pregunta es si la interacción se siente bien.",
      },
      {
        title: "Revisión de diseño",
        description:
          "Otros ojos sobre una pantalla que llevas tres semanas mirando: accesibilidad, jerarquía, textos y casos límite.",
      },
    ],
    ctaCard: {
      title: "¿Necesitas otra cosa?",
      description:
        "Auditorías, talleres o un socio de diseño durante un trimestre. Cuéntame el problema y le buscamos forma.",
      button: "Escríbeme",
    },
  },
  about: {
    label: "Sobre mí",
    titleLead: "¿Quién hay detrás de ",
    titleHighlight: "todo esto?",
    intro:
      "Soy Vera. Empecé haciendo webs en un piso compartido en Lavapiés y no paré. He sido diseñadora dentro de equipos de producto, colaboradora de agencias y, desde 2023, diseñadora independiente para equipos que necesitan un par de manos buenas.",
    facts: [
      {
        title: "Diez años lanzando producto",
        description:
          "Banca, salud, marketplaces y unas cuantas cosas que nunca salieron. Los fracasos me enseñaron más.",
      },
      {
        title: "Cuarenta productos en producción",
        description:
          "No conceptos. Pantallas que gente real usó, se quejó y volvió a usar.",
      },
    ],
    link: "Trabaja conmigo",
    portraitAlt: "Retrato circular abstracto de Vera Ochoa",
  },
  work: {
    label: "Trabajo seleccionado",
    titleLead: "Un vistazo al ",
    titleHighlight: "trabajo reciente",
    items: [
      {
        client: "MERIDIA",
        tag: "Diseño de producto",
        title: "Un onboarding que dejó de perder gente en el paso tres",
        description:
          "El alta de cuenta de Meridia tenía once pantallas y un 38 % de abandono antes de la verificación. Lo dejamos en seis, movimos la comprobación de identidad al final y reescribimos cada etiqueta.",
        resultLabel: "Activación",
        resultValue: "+23 %",
      },
      {
        client: "PALMAR",
        tag: "Sistema de diseño",
        title: "Un sistema de diseño para seis equipos de producto",
        description:
          "Palmar tenía cuatro verdes y tres componentes de botón. Construimos una capa de tokens, una librería de componentes y documentación que los equipos sí leen.",
        resultLabel: "Componentes",
        resultValue: "120",
      },
    ],
  },
  experience: {
    label: "Experiencia",
    titleLead: "Por dónde he ",
    titleHighlight: "pasado",
    intro:
      "Una década dentro de equipos de producto, agencias y un freelance muy largo.",
    link: "Pide el CV completo",
    items: [
      {
        period: "2023 — hoy",
        role: "Diseñadora de producto independiente",
        company: "Madrid",
        description:
          "Sistemas de diseño y producto para equipos de dos a veinte personas. Normalmente me contratan cuando hay una sola diseñadora y ningún proceso.",
      },
      {
        period: "2021 — 2023",
        role: "Lead product designer",
        company: "Meridia",
        description:
          "Responsable del área de cuenta: onboarding, transferencias, extractos. Construí el primer sistema de diseño y el proceso de contratación que me sustituyó.",
      },
      {
        period: "2018 — 2021",
        role: "Diseñadora UI senior",
        company: "Ostra Studio",
        description:
          "Webs e interfaces de producto para clientes de fintech y salud. Aprendí a defender un layout con evidencia.",
      },
      {
        period: "2014 — 2018",
        role: "Diseñadora UI",
        company: "Palmar",
        description:
          "Primera contratación de diseño. Construí el lenguaje visual del producto desde un Figma vacío y un manual de marca impreso.",
      },
    ],
  },
  testimonial: {
    label: "Testimonio",
    quote:
      "Vera cambió cómo habla nuestro equipo del producto. Lanzamos el nuevo onboarding en seis semanas en vez de los seis meses que teníamos planeados.",
    name: "Nadia Sanz",
    role: "Head of Product, Meridia",
    avatarAlt: "Retrato geométrico abstracto de Nadia Sanz",
  },
  notes: {
    label: "Notas",
    titleLead: "Cosas que voy ",
    titleHighlight: "apuntando",
    intro:
      "Textos cortos sobre proceso, sistemas y la parte del diseño que no cabe en un caso de estudio.",
    readLabel: "Leer la nota",
    backLabel: "Todas las notas",
    endNote: "Eso es la nota. Si te ha dejado una pregunta, mi bandeja está abierta.",
    items: [
      {
        slug: "onboarding-audit",
        date: "2026-02-18",
        tag: "Proceso",
        title: "La auditoría de onboarding que hago antes de cualquier rediseño",
        excerpt:
          "Seis pantallas, una hoja de cálculo y las preguntas que te dicen dónde abandona la gente.",
        body: [
          "Antes de mover un solo rectángulo, veo a cinco personas abrirse una cuenta. No es un test moderado con guion: solo la pantalla y sus manos en el teclado.",
          "Llevo una hoja con cuatro columnas: el paso, cuántas personas llegaron, los segundos que pasaron ahí y las palabras exactas que dijeron en voz alta. Son dos días y resuelven casi todas las discusiones sobre el roadmap.",
          "El patrón casi nunca está donde el equipo cree. En Meridia el abandono no era la subida de documentos que todos culpaban; eran las reglas de contraseña de la pantalla dos, que nadie podía cumplir a la primera.",
          "La auditoría termina con una frase por pantalla: qué intenta hacer la persona, qué le pide la pantalla en su lugar y qué quitaríamos. Si una pantalla no justifica su sitio en esa frase, no sobrevive al rediseño.",
        ],
      },
      {
        slug: "design-tokens-are-a-contract",
        date: "2025-11-04",
        tag: "Sistemas",
        title: "Los tokens son un contrato, no una paleta",
        excerpt:
          "En el momento en que un token es una sugerencia, cada equipo inventa su propia excepción.",
        body: [
          "Todos los sistemas de diseño que he heredado fallaban igual: los tokens existían, pero nadie había acordado cuánto costaba romperlos.",
          "Un token no es un color con nombre bonito. Es la promesa de que el espacio entre secciones, el radio de una tarjeta y el peso de un titular se verán igual en seis equipos y cuatro productos.",
          "Lo que cambió las cosas en Palmar no fue la librería. Fue la revisión: media hora semanal en la que cualquiera podía proponer un token nuevo, y la respuesta era un nombre o la razón por la que el existente ya lo cubría.",
          "Escribe el contrato. Nombra las excepciones. Cuando un equipo necesita un quinto verde, la conversación debería ser sobre el producto, no sobre lo rígido que es el sistema.",
        ],
      },
      {
        slug: "first-ten-minutes",
        date: "2025-09-12",
        tag: "Investigación",
        title: "Qué pregunto en los primeros diez minutos de una entrevista",
        excerpt:
          "Nadie recuerda tu prototipo. Recuerdan cómo les hizo sentir la conversación.",
        body: [
          "Los primeros diez minutos deciden si los siguientes cuarenta sirven. Los dedico a demostrar que no estoy ahí para puntuar a la persona al otro lado.",
          "Tres preguntas hacen casi todo el trabajo. ¿Qué hiciste ayer? ¿Cuándo apareció este problema por última vez? ¿Qué hiciste en su lugar?",
          "La tercera es la que la gente se salta. El apaño es donde vive el producto real: la hoja de cálculo, el grupo de WhatsApp, el post-it pegado al monitor. Nadie diseña un apaño porque le guste.",
          "Nunca pregunto si alguien usaría una función. Pregunto qué hizo la última vez que la necesitó. La respuesta es una historia o una ficción educada, y a las pocas llamadas sabes distinguirlas.",
        ],
      },
    ] as Note[],
  },
  contact: {
    label: "Contacto",
    titleLead: "¿Tienes un producto que necesita ",
    titleHighlight: "menos pantallas",
    intro:
      "Cuéntame qué estás construyendo y dónde duele. Respondo en dos días laborables.",
    button: "Escríbeme",
    email: "hola@veraochoa.example",
    location: "Madrid · Remoto, CET",
    availability: "Próximo hueco: Q3 2026",
  },
  footer: {
    brand: "Vera Ochoa",
    blurb:
      "Diseñadora de producto en Madrid. Sistemas de diseño, onboardings e interfaces que se lanzan.",
    menuLabel: "Secciones",
    sections: [
      { label: "Inicio", href: "#home" },
      { label: "Sobre mí", href: "#about" },
      { label: "Trabajo", href: "#work" },
      { label: "Notas", href: "#notes" },
    ],
    note: "Diseñado y construido por mí. Sin plantillas, sin page builders.",
    copyright: "© 2026 Vera Ochoa",
    email: "hola@veraochoa.example",
  },
  notFound: {
    title: "Esta página se fue a un taller.",
    body: "El enlace que seguiste no existe o se mudó a un sitio mejor.",
    cta: "Volver al inicio",
  },
};
