import { create } from 'zustand';

type Language = 'en' | 'es';

interface AppState {
  language: Language;
  setLanguage: (lang: Language) => void;
  toggleLanguage: () => void;
}

export const useStore = create<AppState>((set) => ({
  language: 'en',
  setLanguage: (lang) => set({ language: lang }),
  toggleLanguage: () => set((state) => ({ 
    language: state.language === 'en' ? 'es' : 'en' 
  })),
}));

export const content = {
  en: {
    nav: {
      home: "Home",
      about: "About",
      experience: "Experience",
      contact: "Contact",
      resume: "Curriculum",
    },
    hero: {
      greeting: "Hello, I'm",
      role: "Analyst & Entrepreneur",
      tagline: "Focused on learning, building and compounding.",
      bio: "Double Degree student in Finance & Accounting + Business Administration (GPA 8.62/10). Combining finance, accounting, and business analysis with entrepreneurship and digital projects.",
      cta_primary: "View Experience",
      cta_secondary: "Contact Me",
      cta_email: "Email",
      cta_linkedin: "LinkedIn",
      cta_resume: "CV",
      stat_1: "Years Education",
      stat_1_val: "4+",
      stat_2: "Projects",
      stat_2_val: "10+",
    },
    about: {
      title: "About Me",
      description: "I am a final-year student in a Double Degree in Finance & Accounting and Business Administration at the University of Málaga. My academic path has given me a solid foundation in finance, accounting, valuation, and business analysis. Beyond academics, I have a strong entrepreneurial mindset. I enjoy building things from scratch, experimenting, and learning by doing.",
      curiosity_title: "Curiosity & Mindset",
      curiosity_text: "Curiosity is one of my defining traits. I constantly seek to understand how things work, whether in finance, business models, technology, or productivity systems. I actively read, experiment, and reflect, applying what I learn to my academic work and personal projects.",
      certifications: "Certifications",
      education: "Education",
      skills: "Skills",
    },
    experience: {
      title: "Experience",
      subtitle: "My professional journey in Finance, Entrepreneurship, and Digital Projects.",
      jobs: [
        {
          role: "Freelance Content Creator",
          company: "Self-Employed",
          date: "2024 - Present",
          description: "Editing and post-production of short-form content (Reels/TikTok/Shorts) for brands. Optimized retention strategies (hooks, pacing) achieving over 300,000 total views. Developed storytelling and creative skills."
        },
        {
          role: "Web Project Manager",
          company: "Freelance",
          date: "2023",
          description: "Design and deployment of websites using WordPress and Elementor. Handled basic SEO, performance optimization, and analytics setup (GA4 & Search Console) for personal projects and clients."
        },
        {
          role: "Accounting Intern",
          company: "GYV Asesores",
          date: "July 2022",
          description: "Managed accounting of invoices (journal entries), reviewed account reconciliations at closing, and provided operational support to clients using a3 (Wolters Kluwer) and Excel."
        },
        {
          role: "Finance & Investment Analysis",
          company: "Independent",
          date: "Ongoing",
          description: "Independent analysis of companies and markets. Focus on financial statement analysis (IFRS & US GAAP), valuation fundamentals (DCF, multiples), and macro/market context analysis."
        }
      ],
      education: [
        {
          degree: "Double Degree in Finance & Accounting + Business Administration",
          school: "University of Málaga",
          date: "2021 - 2026",
          details: "GPA: 8.62/10. Highlights: Honors in Financial Mathematics & Management Accounting II. Grades ≥9/10 in Corporate Finance, Financial Systems, and Econometrics."
        },
        {
          degree: "Erasmus Exchange",
          school: "Vysoká škola ekonomická v Praze (VSE)",
          date: "2024 - 2025",
          details: "International business exposure and advanced economic studies in Prague."
        }
      ]
    },
    contact: {
      title: "Get in Touch",
      subtitle: "Open for opportunities in M&A, Transactions, and Financial Analysis.",
      form: {
        name: "Your Name",
        email: "Email Address",
        message: "Message",
        submit: "Send Message",
        sending: "Sending...",
      },
      info: {
        email: "Email",
        phone: "Phone",
        linkedin: "LinkedIn",
        resume: "Resume"
      }
    }
  },
  es: {
    nav: {
      home: "Inicio",
      about: "Sobre mí",
      experience: "Experiencia",
      contact: "Contacto",
      resume: "Currículum",
    },
    hero: {
      greeting: "Hola, soy",
      role: "Analista y Emprendedor",
      tagline: "Centrado en aprender, construir y capitalizar.",
      bio: "Estudiante de Doble Grado en Finanzas y Contabilidad + ADE (Nota media 8.62/10). Combinando finanzas, contabilidad y análisis de negocios con emprendimiento y proyectos digitales.",
      cta_primary: "Ver Experiencia",
      cta_secondary: "Contactar",
      cta_email: "Correo",
      cta_linkedin: "LinkedIn",
      cta_resume: "CV",
      stat_1: "Años Formación",
      stat_1_val: "4+",
      stat_2: "Proyectos",
      stat_2_val: "10+",
    },
    about: {
      title: "Sobre Mí",
      description: "Soy estudiante de último curso del Doble Grado en Finanzas y Contabilidad y Administración de Empresas en la Universidad de Málaga. Mi trayectoria académica me ha dado una base sólida en finanzas, contabilidad, valoración y análisis de negocios. Más allá de lo académico, tengo una fuerte mentalidad emprendedora. Disfruto construyendo cosas desde cero, experimentando y aprendiendo haciendo.",
      curiosity_title: "Curiosidad y Mentalidad",
      curiosity_text: "La curiosidad es uno de mis rasgos definitorios. Busco constantemente entender cómo funcionan las cosas, ya sea en finanzas, modelos de negocio, tecnología o sistemas de productividad. Leo, experimento y reflexiono activamente, aplicando lo que aprendo a mi trabajo académico y proyectos personales.",
      certifications: "Certificaciones",
      education: "Educación",
      skills: "Habilidades",
    },
    experience: {
      title: "Experiencia",
      subtitle: "Mi trayectoria profesional en Finanzas, Emprendimiento y Proyectos Digitales.",
      jobs: [
        {
          role: "Creador de Contenido Freelance",
          company: "Autónomo",
          date: "2024 - Actualidad",
          description: "Edición y postproducción de contenido de formato corto (Reels/TikTok/Shorts) para marcas. Optimización de retención (ganchos, ritmo) logrando más de 300,000 vistas totales. Desarrollo de storytelling y habilidades creativas."
        },
        {
          role: "Gestor de Proyectos Web",
          company: "Freelance",
          date: "2023",
          description: "Diseño y despliegue de sitios web usando WordPress y Elementor. Manejo de SEO básico, optimización de rendimiento y configuración de análisis (GA4 y Search Console) para clientes."
        },
        {
          role: "Becario de Contabilidad",
          company: "GYV Asesores",
          date: "Julio 2022",
          description: "Gestión contable de facturas (asientos), revisión de conciliaciones al cierre y soporte operativo directo a clientes usando a3 (Wolters Kluwer) y Excel."
        },
        {
          role: "Análisis Financiero y de Inversiones",
          company: "Independiente",
          date: "En curso",
          description: "Análisis independiente de empresas y mercados. Enfoque en análisis de estados financieros (IFRS y US GAAP), fundamentos de valoración (DCF, múltiplos) y análisis de contexto macro/mercado."
        }
      ],
      education: [
        {
          degree: "Doble Grado en Finanzas y Contabilidad + ADE",
          school: "Universidad de Málaga",
          date: "2021 - 2026",
          details: "Nota media: 8.62/10. Destacados: Matrícula de Honor en Matemática Financiera y Contabilidad de Gestión II. Notas ≥9/10 en Finanzas Corporativas, Sistemas Financieros y Econometría."
        },
        {
          degree: "Intercambio Erasmus",
          school: "Vysoká škola ekonomická v Praze (VSE)",
          date: "2024 - 2025",
          details: "Exposición a negocios internacionales y estudios económicos avanzados en Praga."
        }
      ]
    },
    contact: {
      title: "Contactar",
      subtitle: "Abierto a oportunidades en M&A, Transacciones y Análisis Financiero.",
      form: {
        name: "Tu Nombre",
        email: "Correo Electrónico",
        message: "Mensaje",
        submit: "Enviar Mensaje",
        sending: "Enviando...",
      },
      info: {
        email: "Correo",
        phone: "Teléfono",
        linkedin: "LinkedIn",
        resume: "Currículum"
      }
    }
  }
};
