export const personalInfo = {
  name: "Angel Zavaleta",
  fullName: "Angel Josue Zavaleta Utrera",
  title: "Full Stack Developer",
  subtitle: "Software Architect",
  email: "angel21zavaleta@gmail.com",
  phone: "+52 981 256 0780",
  location: "Remoto · México",
  github: "https://github.com/Angel-Zavaleta",
  linkedin:
    "https://linkedin.com/in/angel-josue-zavaleta-utrera-592a2a28b",
  summary:
    "Ingeniero de software con 3 años construyendo aplicaciones full-stack y arquitecturas de microservicios para el sector público federal y la consultoría privada. Del modelo de datos al despliegue: React, Node/Bun, PHP/Laravel y Python — con la seguridad y la identidad (OAuth 2.0, SSO, RBAC, JWT) como parte del ADN de cada sistema.",
};

export const experiences = [
  {
    company: "INFOTEC",
    companyFull: "Prestador de Servicios Profesionales · Sector público federal",
    role: "Ingeniero de Software",
    period: "Dic. 2025 – Actualidad",
    location: "Remoto, México",
    projects: [
      {
        name: "Plataforma de captura de datos en campo · En producción",
        client: "Dependencia federal",
        description:
          "Plataforma offline-first para captura y seguimiento de casos en campo, con enrutamiento automático a las áreas correspondientes. La diseñé y desarrollé de extremo a extremo, aplicando principios SOLID y una arquitectura de microservicios mantenible. Autenticación SSO con Llave MX, RBAC y aislamiento de datos por institución.",
        stack: [
          "React 18",
          "Bun/Elysia",
          "PostgreSQL 16",
          "Llave MX",
          "RBAC",
          "Docker",
        ],
      },
      {
        name: "Digitalización de expedientes con IA",
        client: "Instituto federal",
        description:
          "Automatiza la digitalización de expedientes extensos que antes se capturaban a mano. Diseñé la arquitectura, el modelo de base de datos y el gateway que orquesta 4 modelos de IA, más la tolerancia a fallos, la optimización y una cola virtual de procesamiento (estilo Ticketmaster), el panel administrativo y el despliegue en servidor. Trabajo colaborativo; front en React/Mantine a partir de diseños en Figma. Elevé la confiabilidad del pipeline de 29% de fallos a 0%.",
        stack: [
          "Python",
          "FastAPI",
          "Celery",
          "Redis",
          "React/Mantine",
          "Llave MX",
          "RBAC",
          "Figma",
        ],
      },
      {
        name: "Sistema nacional de gestión de reuniones",
        client: "Dependencia federal",
        description:
          "Plataforma nacional para el registro y seguimiento de reuniones institucionales. Desarrollé la API y la PWA de registro (offline-first), integradas a un backoffice de concentrado web, con SSO Llave MX y RBAC. Resolví diversas incidencias del cliente. Proyecto de 5 colaboradores, próximo a salir a producción.",
        stack: [
          "React",
          "Bun/Elysia",
          "PostgreSQL 16",
          "Llave MX",
          "RBAC",
          "Docker",
        ],
      },
      {
        name: "MVP de servicio de autenticación y autorización",
        client: "Organismo federal",
        description:
          "Servicio de autenticación y autorización centralizado (MVP) desarrollado bajo controles ISO/IEC 27001. SSO con Llave MX y JWT RS256, RBAC granular y bitácora de auditoría. Optimicé el flujo de login de 8s a 500ms (−93%).",
        stack: [
          "Laravel 12",
          "Llave MX",
          "JWT RS256",
          "PostgreSQL 16",
          "ISO 27001",
        ],
      },
    ],
  },
  {
    company: "SYA Consultores",
    companyFull: "",
    role: "Consultor Desarrollador Full Stack",
    period: "Nov. – Dic. 2025",
    location: "Remoto, Mérida",
    projects: [
      {
        name: "NexFiscal — Plataforma SaaS Multi-Tenant",
        client: "Despachos contables",
        description:
          "Plataforma SaaS fiscal con aislamiento de datos por cliente (multi-tenant), autenticación dual con 2FA y RBAC de 5 niveles. Construida siguiendo principios SOLID, con pruebas automatizadas (TDD) y una arquitectura limpia y mantenible.",
        stack: [
          "Laravel 12",
          "Vue.js 3",
          "PostgreSQL 16",
          "2FA",
          "RBAC",
          "Docker",
        ],
      },
    ],
  },
  {
    company: "Gobierno de Campeche",
    companyFull: "Secretaría de Modernización Administrativa",
    role: "Analista Especializado",
    period: "Oct. 2023 – Nov. 2025",
    location: "Campeche, México",
    projects: [
      {
        name: "Sistema de Participación Ciudadana · En producción",
        client: "Gobierno del Estado",
        description:
          "Primer sistema estatal de participación ciudadana con 2,000+ sesiones concurrentes. Procesamiento asíncrono que redujo los tiempos de respuesta 70% y optimización de consultas que bajó la latencia 50%.",
        stack: ["Laravel 10", "Vue.js 3", "MySQL", "Redis"],
      },
    ],
  },
];

export const projects = [
  {
    title: "OrderFlow",
    subtitle: "Pedidos por WhatsApp con IA conversacional",
    description:
      "Chatbot conversacional (WhatsApp/Messenger) que automatiza pedidos de restaurante con dictado por voz (Gemini AI) y tablero en tiempo real. Construido con una arquitectura limpia y modular.",
    stack: [
      "React 19",
      "TypeScript",
      "Node.js",
      "PostgreSQL",
      "Socket.IO",
      "Docker",
      "Gemini AI",
    ],
    github: "https://github.com/Angel-Zavaleta/restaurante-pwa",
    image: "/projects/orderflow.png",
  },
];

export const services = [
  {
    icon: "shield",
    title: "Identidad y Accesos (IAM)",
    description:
      "Autenticación y autorización robusta: inicio de sesión único (SSO) con OAuth 2.0 / OpenID Connect, RBAC, JWT, 2FA y cumplimiento OWASP / ISO 27001.",
  },
  {
    icon: "layout",
    title: "Aplicaciones Web Full-Stack",
    description:
      "Desarrollo de aplicaciones web completas con React, Laravel o Node.js. Desde landing pages hasta plataformas SaaS complejas.",
  },
  {
    icon: "server",
    title: "Arquitectura de Software",
    description:
      "Diseño de arquitecturas de microservicios y sistemas distribuidos aplicando principios SOLID, con Docker y monitoreo.",
  },
  {
    icon: "smartphone",
    title: "PWAs Offline-First",
    description:
      "Aplicaciones que funcionan sin internet con sincronización automática. Ideales para trabajo en campo y zonas con conectividad intermitente.",
  },
  {
    icon: "database",
    title: "Integración y Automatización",
    description:
      "Conexión con APIs gubernamentales y de terceros (SAT, WhatsApp Business) y automatización de procesos manuales.",
  },
  {
    icon: "cloud",
    title: "Despliegue y Mantenimiento",
    description:
      "Acompaño el ciclo completo, del alta de requerimientos a la puesta en producción con Docker, Nginx y SSL, más soporte técnico y mejora continua.",
  },
];

export const skills = {
  Backend: [
    "Python",
    "FastAPI",
    "PHP/Laravel",
    "Node.js",
    "Bun/Elysia",
    "Express",
  ],
  Frontend: [
    "React",
    "Vue.js",
    "TypeScript",
    "Tailwind CSS",
    "Mantine",
    "PWA",
  ],
  "Bases de datos": ["PostgreSQL", "MySQL", "Redis", "Drizzle ORM", "Prisma"],
  Infraestructura: ["Docker", "Nginx", "Git / GitLab", "Prometheus", "Grafana"],
  "Identidad & Seguridad": [
    "OAuth 2.0",
    "OpenID Connect",
    "SSO / Llave MX",
    "JWT (RS256)",
    "RBAC",
    "2FA",
    "OWASP",
    "ISO 27001",
  ],
  "IA & Herramientas": [
    "Claude",
    "GitHub Copilot",
    "OpenCode",
    "Agentes de IA",
    "Figma",
  ],
};
