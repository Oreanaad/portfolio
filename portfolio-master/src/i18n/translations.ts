export type Lang = 'en' | 'es'

export const LANGS: Lang[] = ['en', 'es']

/** Project copy is keyed by id; titles and URLs are shared, not translated. */
export const PROJECT_IDS = [
  'limplus',
  'denticlick',
  'elpasajedental',
  'clientespasaje',
  'copiloto',
  'libreria',
] as const

export type ProjectId = (typeof PROJECT_IDS)[number]

const en = {
  nav: {
    about: 'About me',
    experience: 'Experience',
    projects: 'Projects',
    contact: 'Contact',
  },
  a11y: {
    skip: 'Skip to content',
    openMenu: 'Open menu',
    closeMenu: 'Close menu',
    toLight: 'Switch to light theme',
    toDark: 'Switch to dark theme',
    language: 'Change language',
    linkedin: 'LinkedIn profile',
    instagram: 'Thunderskills on Instagram',
    github: 'GitHub profile',
    openIn: (title: string) => `Open ${title} in a new tab`,
    showDetails: (title: string) => `Show details about ${title}`,
    hideDetails: (title: string) => `Hide details about ${title}`,
    onWeb: 'Available on web',
    onMobile: 'Available on mobile',
  },
  about: {
    greeting: "Hi! I'm Oreana,",
    roles: ['Full Stack Developer', 'Team Lead', 'Systems Engineer'],
    intro:
      'Systems Engineer and web developer working across front end and back end with React, Node.js and Genexus. 4 years building software for international projects, coordinating remote teams and turning manual workflows into automated ones.',
    masters: "Currently studying a Master's in Biomedical Engineering.",
    availability: 'Available remotely · Spanish (native), English (C2), French (A2)',
    resume: 'resume',
  },
  skills: {
    titlePre: 'my',
    titleMid: 'Ex',
    titlePost: 'perience',
    intro1:
      'Systems Engineer and web developer with 4 years building front-end and back-end software with React, Node.js and Genexus. I have worked on international projects, coordinated remote teams and led multinational meetings, and I like turning slow manual processes into automated ones.',
    intro2:
      "I am currently studying a Master's in Biomedical Engineering, which pairs with the rehabilitation games I built during my internship at Kawatek. Along the way I have also picked up Agile and Scrum practices, design work with the Adobe suite, and architectural drafting with AutoCAD.",
    labelExperience: 'EXPERIENCE',
    labelSkills: 'Skills',
    labelTimeline: 'TIMELINE',
  },
  experience: [
    {
      company: 'EME Solutions',
      role: 'Full Stack Developer',
      period: '2025 — Present',
      location: 'Remote',
      stack: ['TypeScript', 'React', 'Node.js', 'Genexus', 'SQL'],
      highlights: [
        'Design and build web applications with Genexus and React, keeping the UI responsive and the experience consistent across platforms.',
        'Own the full software development lifecycle, from requirements gathering and architecture design through to deployment and maintenance.',
        'Integrated third-party APIs and optimised back-end processes, improving application performance and response times by 20%.',
        'Work with cross-functional teams in Agile sprints, contributing to code reviews, documentation and continuous improvement practices.',
      ],
    },
    {
      company: 'Kawatek',
      role: 'Software Development Intern',
      location: 'Internship',
      stack: ['Game development', 'Rehabilitation tech'],
      highlights: [
        'Developed games designed for patient rehabilitation, turning clinical exercises into guided, interactive sessions.',
        'Worked on the interaction and feedback loop so patients could follow their own progress through each exercise.',
      ],
    },
  ],
  timeline: [
    { year: '2020', title: 'Systems Engineering', detail: 'Started at Universidad Bicentenaria de Aragua' },
    { year: '2023', title: 'Web Development diploma', detail: 'JavaScript, HTML, CSS and Node.js' },
    { year: '2023', title: 'Software Development Intern', detail: 'Kawatek — games for patient rehabilitation' },
    { year: '2024', title: 'Neural Networks with Python', detail: 'Universidad Central de Venezuela' },
    { year: '2024', title: 'Systems Engineer', detail: 'Graduated from Universidad Bicentenaria de Aragua' },
    { year: '2025', title: 'Biomedical Engineering diploma', detail: 'Universidad Simón Bolívar' },
    { year: '2025', title: 'Full Stack Developer', detail: 'EME Solutions, remote — Genexus, React, Node.js' },
    { year: 'Now', title: "Master's in Biomedical Engineering", detail: 'In progress' },
  ],
  projects: {
    limplus: {
      category: 'Professional website',
      sector: 'Cleaning services',
      short: 'Website for a wholesale cleaning products supplier.',
      detail:
        'Professional website for a cleaning services and supplies company. Modern design, contact form and a service catalogue laid out to turn visits into enquiries.',
      alt: 'Limplus cleaning products website home page',
    },
    denticlick: {
      category: 'Web platform',
      sector: 'Dental care',
      short: 'Practice management platform for a dental clinic.',
      detail:
        'Web platform for a dental clinic covering online appointments, clinical history, services and the medical team. Designed to build trust and increase consultations.',
      alt: 'Denticlick dental clinic platform home page',
    },
    elpasajedental: {
      category: 'Professional website',
      sector: 'Dental care',
      short: 'Website and appointment system for a dental supplier.',
      detail:
        'Professional website for a dental clinic and supplier in Tucumán. Modern design, appointment system and a product catalogue built to attract new patients.',
      alt: 'El Pasaje Dental website home page',
    },
    clientespasaje: {
      category: 'CRM',
      sector: 'Client management',
      short: 'Real-time CRM dashboard for a client portfolio.',
      detail:
        'Real-time client management system. View, filter and organise an entire portfolio from one centralised panel, with live metrics on reach and contactability.',
      alt: 'Clientes Pasaje CRM dashboard showing aggregate metrics',
    },
    copiloto: {
      category: 'AI & automation',
      sector: 'Aviation',
      short: 'AI assistant for pilots and aviation students.',
      detail:
        'Intelligent assistant specialised in aviation. Answers technical questions on flight concepts, meteorology, navigation and procedures, plus sector regulations, in real time.',
      alt: 'Copiloto aviation AI assistant interface',
    },
    libreria: {
      category: 'Ecommerce',
      sector: 'Online bookstore',
      short: 'Online bookstore template with catalogue and cart.',
      detail:
        'Online store template for a bookstore. Product catalogue, shopping cart and a layout optimised to drive sales from day one.',
      alt: 'Online bookstore ecommerce home page',
    },
  },
  contact: {
    heading: 'Get in touch',
    reachMe: 'Or reach me via :',
    name: 'Name',
    company: 'Company',
    email: 'Email',
    message: 'Message',
    send: 'Send',
    sending: 'Sending...',
    sent: 'Sent',
    retry: 'Try Again',
    success: 'Thanks! Your message is on its way.',
    error: 'Something went wrong. You can also email me directly at oreanadev@gmail.com',
  },
}

/** Same shape as `en`; TypeScript enforces it via the Translation type below. */
const es: typeof en = {
  nav: {
    about: 'Sobre mí',
    experience: 'Experiencia',
    projects: 'Proyectos',
    contact: 'Contacto',
  },
  a11y: {
    skip: 'Saltar al contenido',
    openMenu: 'Abrir menú',
    closeMenu: 'Cerrar menú',
    toLight: 'Cambiar a tema claro',
    toDark: 'Cambiar a tema oscuro',
    language: 'Cambiar idioma',
    linkedin: 'Perfil de LinkedIn',
    instagram: 'Thunderskills en Instagram',
    github: 'Perfil de GitHub',
    openIn: (title: string) => `Abrir ${title} en una pestaña nueva`,
    showDetails: (title: string) => `Ver detalles de ${title}`,
    hideDetails: (title: string) => `Ocultar detalles de ${title}`,
    onWeb: 'Disponible en web',
    onMobile: 'Disponible en móvil',
  },
  about: {
    greeting: '¡Hola! Soy Oreana,',
    roles: ['Desarrolladora Full Stack', 'Líder de equipo', 'Ingeniera en Sistemas'],
    intro:
      'Ingeniera en Sistemas y desarrolladora web en front end y back end con React, Node.js y Genexus. 4 años construyendo software para proyectos internacionales, coordinando equipos remotos y convirtiendo procesos manuales en flujos automatizados.',
    masters: 'Actualmente cursando la Maestría en Ingeniería Biomédica.',
    availability: 'Disponible en remoto · Español (nativo), Inglés (C2), Francés (A2)',
    resume: 'cv',
  },
  skills: {
    titlePre: 'mi',
    titleMid: 'Ex',
    titlePost: 'periencia',
    intro1:
      'Ingeniera en Sistemas y desarrolladora web con 4 años construyendo software de front end y back end con React, Node.js y Genexus. He trabajado en proyectos internacionales, coordinado equipos remotos y dirigido reuniones multinacionales, y disfruto convertir procesos manuales lentos en flujos automatizados.',
    intro2:
      'Actualmente curso la Maestría en Ingeniería Biomédica, que se complementa con los juegos de rehabilitación que desarrollé durante mi pasantía en Kawatek. En el camino también sumé prácticas de Agile y Scrum, diseño con la suite de Adobe y dibujo arquitectónico con AutoCAD.',
    labelExperience: 'EXPERIENCIA',
    labelSkills: 'Skills',
    labelTimeline: 'TRAYECTORIA',
  },
  experience: [
    {
      company: 'EME Solutions',
      role: 'Desarrolladora Full Stack',
      period: '2025 — Actualidad',
      location: 'Remoto',
      stack: ['TypeScript', 'React', 'Node.js', 'Genexus', 'SQL'],
      highlights: [
        'Diseño y construyo aplicaciones web con Genexus y React, con una interfaz adaptable y una experiencia consistente en todas las plataformas.',
        'Gestiono el ciclo completo de desarrollo, desde el relevamiento de requisitos y el diseño de arquitectura hasta la implementación y el mantenimiento.',
        'Integré APIs de terceros y optimicé procesos de back end, mejorando el rendimiento y los tiempos de respuesta en un 20%.',
        'Trabajo con equipos multidisciplinarios en sprints ágiles, aportando en revisiones de código, documentación y prácticas de mejora continua.',
      ],
    },
    {
      company: 'Kawatek',
      role: 'Pasante de Desarrollo de Software',
      location: 'Pasantía',
      stack: ['Desarrollo de juegos', 'Tecnología de rehabilitación'],
      highlights: [
        'Desarrollé juegos pensados para la rehabilitación de pacientes, convirtiendo ejercicios clínicos en sesiones guiadas e interactivas.',
        'Trabajé en la interacción y la retroalimentación para que cada paciente pudiera seguir su propio progreso en cada ejercicio.',
      ],
    },
  ],
  timeline: [
    { year: '2020', title: 'Ingeniería en Sistemas', detail: 'Inicio en la Universidad Bicentenaria de Aragua' },
    { year: '2023', title: 'Diplomado en Desarrollo Web', detail: 'JavaScript, HTML, CSS y Node.js' },
    { year: '2023', title: 'Pasante de Desarrollo de Software', detail: 'Kawatek — juegos para rehabilitación de pacientes' },
    { year: '2024', title: 'Redes Neuronales con Python', detail: 'Universidad Central de Venezuela' },
    { year: '2024', title: 'Ingeniera en Sistemas', detail: 'Graduada de la Universidad Bicentenaria de Aragua' },
    { year: '2025', title: 'Diplomado en Ingeniería Biomédica', detail: 'Universidad Simón Bolívar' },
    { year: '2025', title: 'Desarrolladora Full Stack', detail: 'EME Solutions, remoto — Genexus, React, Node.js' },
    { year: 'Hoy', title: 'Maestría en Ingeniería Biomédica', detail: 'En curso' },
  ],
  projects: {
    limplus: {
      category: 'Web profesional',
      sector: 'Servicios de limpieza',
      short: 'Web para una distribuidora mayorista de productos de limpieza.',
      detail:
        'Sitio web profesional para una empresa de servicios e insumos de limpieza. Diseño moderno, formulario de contacto y un catálogo de servicios pensado para convertir visitas en consultas.',
      alt: 'Página principal del sitio de productos de limpieza Limplus',
    },
    denticlick: {
      category: 'Plataforma web',
      sector: 'Salud dental',
      short: 'Plataforma de gestión para una clínica dental.',
      detail:
        'Plataforma web para una clínica dental con turnos online, historia clínica, servicios y equipo médico. Diseñada para generar confianza y aumentar las consultas.',
      alt: 'Página principal de la plataforma dental Denticlick',
    },
    elpasajedental: {
      category: 'Web profesional',
      sector: 'Salud dental',
      short: 'Web y sistema de turnos para una distribuidora odontológica.',
      detail:
        'Sitio web profesional para una clínica y distribuidora odontológica en Tucumán. Diseño moderno, sistema de turnos y catálogo de productos para atraer nuevos pacientes.',
      alt: 'Página principal del sitio El Pasaje Dental',
    },
    clientespasaje: {
      category: 'CRM',
      sector: 'Gestión de clientes',
      short: 'Panel CRM en tiempo real para una cartera de clientes.',
      detail:
        'Sistema de gestión de clientes en tiempo real. Permite visualizar, filtrar y organizar toda la cartera desde un panel centralizado, con métricas en vivo de alcance y contactabilidad.',
      alt: 'Panel CRM de Clientes Pasaje con métricas agregadas',
    },
    copiloto: {
      category: 'IA y automatización',
      sector: 'Aviación',
      short: 'Asistente de IA para pilotos y estudiantes de aviación.',
      detail:
        'Asistente inteligente especializado en aviación. Responde en tiempo real consultas técnicas sobre conceptos de vuelo, meteorología, navegación y procedimientos, además de normativa del sector.',
      alt: 'Interfaz del asistente de aviación Copiloto',
    },
    libreria: {
      category: 'Ecommerce',
      sector: 'Librería online',
      short: 'Template de tienda online con catálogo y carrito.',
      detail:
        'Template de tienda online para una librería. Catálogo de productos, carrito de compras y un diseño optimizado para vender desde el primer día.',
      alt: 'Página principal del ecommerce de librería',
    },
  },
  contact: {
    heading: 'Hablemos',
    reachMe: 'O escribime a :',
    name: 'Nombre',
    company: 'Empresa',
    email: 'Email',
    message: 'Mensaje',
    send: 'Enviar',
    sending: 'Enviando...',
    sent: 'Enviado',
    retry: 'Reintentar',
    success: '¡Gracias! Tu mensaje ya está en camino.',
    error: 'Algo salió mal. También podés escribirme directo a oreanadev@gmail.com',
  },
}

export type Translation = typeof en

export const translations: Record<Lang, Translation> = { en, es }
