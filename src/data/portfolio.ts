export const personalInfo = {
  name: "Angel Zavaleta",
  fullName: "Angel Josue Zavaleta Utrera",
  title: "Full Stack Developer",
  subtitle: "Software Architect",
  email: "angel21zavaleta@gmail.com",
  phone: "+52 981 256 0780",
  location: "Querétaro, México",
  github: "https://github.com/Angel-Zavaleta",
  linkedin:
    "https://linkedin.com/in/angel-josue-zavaleta-utrera-592a2a28b",
  summary:
    "Ingeniero de software con 3 años construyendo aplicaciones full-stack y arquitecturas de microservicios para el gobierno federal mexicano y consultoría privada. Del modelo de datos al despliegue: React, Node/Bun, PHP/Laravel y Python — con la seguridad y la identidad (OAuth 2.0, SSO, RBAC, JWT) como parte del ADN de cada sistema.",
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
          "Plataforma offline-first para captura casa por casa con turnado automático a dependencias. La construí desde cero aplicando principios SOLID y una arquitectura de microservicios mantenible. Autenticación SSO con Llave MX, RBAC y aislamiento de datos por institución.",
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
        name: "Digitalización inteligente de documentos con IA",
        client: "Instituto federal",
        description:
          "Pipeline de OCR e IA (4 modelos en cadena) para digitalizar expedientes extensos. Reduje la tasa de fallo de 29% a 0% y construí la sincronización de usuarios y roles con Llave MX (OAuth 2.0 + PKCE). Diseño orientado a la resiliencia: reintentos, colas y monitoreo.",
        stack: [
          "Python",
          "FastAPI",
          "Celery",
          "Redis",
          "Llave MX",
          "Docker",
        ],
      },
      {
        name: "Sistema nacional de gestión de reuniones",
        client: "Dependencia federal",
        description:
          "Plataforma nacional con apps offline-first, SSO con Llave MX y RBAC por territorio. Tablero con mapas interactivos y generación automática de reportes. Arquitectura de microservicios enfocada en la mantenibilidad y las pruebas.",
        stack: [
          "React 18",
          "Bun/Elysia",
          "PostgreSQL 16",
          "Llave MX",
          "Kubernetes",
          "Docker",
        ],
      },
      {
        name: "MVP de gestión de incidencias y alertas",
        client: "Organismo federal",
        description:
          "MVP de un servicio de autenticación y autorización centralizado, desarrollado bajo controles ISO/IEC 27001. SSO con Llave MX y JWT RS256, RBAC granular y bitácora de auditoría. Optimicé el flujo de login de 8s a 500ms (−93%).",
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
    title: "Comanda AI",
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
    image: "/projects/cero-teclado.png",
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
      "Diseño de arquitecturas de microservicios, sistemas distribuidos y pipelines de datos con Docker, CI/CD y monitoreo.",
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
      "Puesta en producción con Docker, Nginx, SSL y CI/CD, más soporte técnico y mejora continua.",
  },
];

export const skills = {
  backend: [
    "Python",
    "FastAPI",
    "PHP/Laravel",
    "Node.js",
    "Bun/Elysia",
    "Express",
  ],
  frontend: [
    "React",
    "Vue.js",
    "TypeScript",
    "Tailwind CSS",
    "Inertia.js",
    "PWA",
  ],
  databases: ["PostgreSQL", "MySQL", "Redis", "Prisma", "Drizzle ORM"],
  infra: [
    "Docker",
    "Kubernetes",
    "Nginx",
    "GitHub Actions",
    "Prometheus",
    "Grafana",
  ],
  "identidad & seguridad": [
    "OAuth 2.0",
    "OpenID Connect",
    "SSO / Llave MX",
    "JWT (RS256)",
    "RBAC",
    "2FA",
    "OWASP",
    "ISO 27001",
  ],
};
