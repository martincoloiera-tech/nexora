export const NAV_LINKS = [
  { label: "Servicios", href: "#services" },
  { label: "Proceso", href: "#process" },
  { label: "Beneficios", href: "#benefits" },
  { label: "Casos", href: "#cases" },
  { label: "Nosotros", href: "#about" },
  { label: "FAQ", href: "#faq" },
] as const;

export const SERVICES = [
  {
    icon: "code",
    title: "Desarrollo Web",
    description:
      "Sitios y aplicaciones rápidas, escalables y a medida, construidas con tecnología moderna.",
  },
  {
    icon: "brain",
    title: "Inteligencia Artificial",
    description:
      "Asistentes, integraciones y modelos aplicados a procesos reales de tu negocio.",
  },
  {
    icon: "bolt",
    title: "Automatizaciones",
    description:
      "Flujos de trabajo que eliminan tareas repetitivas y conectan tus herramientas entre sí.",
  },
  {
    icon: "megaphone",
    title: "Marketing Digital",
    description:
      "Estrategia, contenido y performance orientados a captar y convertir la audiencia correcta.",
  },
] as const;

export const PROCESS_STEPS = [
  {
    number: "01",
    title: "Descubrimiento",
    description:
      "Entendemos tu negocio, tus objetivos y el problema real que queremos resolver.",
  },
  {
    number: "02",
    title: "Estrategia",
    description:
      "Definimos el enfoque, el alcance y las tecnologías más adecuadas para el proyecto.",
  },
  {
    number: "03",
    title: "Diseño y desarrollo",
    description:
      "Construimos en iteraciones cortas, con foco en calidad de código y experiencia de usuario.",
  },
  {
    number: "04",
    title: "Lanzamiento y mejora",
    description:
      "Publicamos, medimos resultados y optimizamos de forma continua junto a tu equipo.",
  },
] as const;

export const BENEFITS = [
  {
    icon: "target",
    title: "Foco en resultados",
    description: "Cada entregable está pensado para mover una métrica de negocio concreta.",
  },
  {
    icon: "shield",
    title: "Código sólido",
    description: "Buenas prácticas, tipado estricto y arquitectura pensada para escalar.",
  },
  {
    icon: "users",
    title: "Equipo cercano",
    description: "Comunicación directa, sin intermediarios ni procesos innecesarios.",
  },
  {
    icon: "check",
    title: "Entrega iterativa",
    description: "Avances visibles y frecuentes en lugar de un único gran lanzamiento.",
  },
] as const;

export const CASES = [
  {
    title: "E-commerce y retail",
    description: "Tiendas online rápidas, con checkout optimizado y foco en conversión.",
  },
  {
    title: "Plataformas SaaS",
    description: "Paneles y productos web con autenticación, pagos y lógica de negocio propia.",
  },
  {
    title: "Asistentes con IA",
    description: "Chatbots y copilots entrenados sobre datos y procesos específicos del cliente.",
  },
  {
    title: "Automatización de procesos",
    description: "Integraciones entre herramientas que eliminan trabajo manual repetitivo.",
  },
] as const;

export const FAQS = [
  {
    question: "¿Cómo empieza un proyecto con Nexora?",
    answer:
      "Con una primera conversación para entender tu objetivo, alcance y plazos. A partir de ahí armamos una propuesta concreta.",
  },
  {
    question: "¿Trabajan con presupuestos acotados?",
    answer:
      "Sí, adaptamos el alcance del proyecto al presupuesto disponible, priorizando lo que genera más impacto primero.",
  },
  {
    question: "¿Qué tecnologías utilizan?",
    answer:
      "Elegimos la tecnología según el problema: Next.js y React para producto web, e integraciones de IA según el caso de uso.",
  },
  {
    question: "¿Dan soporte después del lanzamiento?",
    answer:
      "Sí, ofrecemos acompañamiento posterior al lanzamiento para mejoras, mantenimiento y nuevas funcionalidades.",
  },
] as const;

export const CONTACT_EMAIL = "hola@nexora.com";
