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
    },
    hero: {
      greeting: "Hello, I'm",
      role: "Finance & Accounting Specialist",
      tagline: "Aspiring Analyst in M&A, Transactions, and Valuation.",
      cta_primary: "View Experience",
      cta_secondary: "Contact Me",
      stat_1: "Years Education",
      stat_1_val: "4+",
      stat_2: "Projects",
      stat_2_val: "10+",
    },
    about: {
      title: "About Me",
      description: "I am a driven Finance & Accounting student with a global perspective. Currently completing my double degree at the University of Málaga and broadening my horizons at VSE Prague. My passion lies in financial analysis, valuation, and M&A.",
      certifications: "Certifications",
      education: "Education",
      skills: "Skills",
    },
    experience: {
      title: "Experience",
      subtitle: "My professional journey so far.",
      jobs: [
        {
          role: "Freelance Content Creator",
          company: "Self-Employed",
          date: "2024 - Present",
          description: "Video editing for brands, achieving over 300k views through engaging storytelling and technical precision."
        },
        {
          role: "Web Project Manager",
          company: "Freelance",
          date: "2023",
          description: "Managed WordPress and Elementor projects, optimizing SEO and site performance for various clients."
        },
        {
          role: "Accounting Intern",
          company: "GYV Asesores",
          date: "July 2022",
          description: "Handled accounting, invoice registration, and provided direct client support in a fast-paced environment."
        }
      ],
      education: [
        {
          degree: "Double Degree in Finance & Accounting + Business Administration",
          school: "University of Málaga",
          date: "2021 - 2026",
          details: "GPA 8.62/10. Focused on corporate finance, accounting principles, and business strategy."
        },
        {
          degree: "Erasmus Program",
          school: "VSE Prague",
          date: "2024 - 2025",
          details: "International business exposure and advanced economic studies."
        }
      ]
    },
    contact: {
      title: "Get in Touch",
      subtitle: "Open for opportunities in M&A and Financial Analysis.",
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
    },
    hero: {
      greeting: "Hola, soy",
      role: "Especialista en Finanzas y Contabilidad",
      tagline: "Aspirante a Analista en M&A, Transacciones y Valoración.",
      cta_primary: "Ver Experiencia",
      cta_secondary: "Contactar",
      stat_1: "Años Formación",
      stat_1_val: "4+",
      stat_2: "Proyectos",
      stat_2_val: "10+",
    },
    about: {
      title: "Sobre Mí",
      description: "Soy un estudiante apasionado de Finanzas y Contabilidad con perspectiva global. Actualmente completo mi doble grado en la Universidad de Málaga y amplío horizontes en VSE Praga. Mi pasión reside en el análisis financiero, valoración y M&A.",
      certifications: "Certificaciones",
      education: "Educación",
      skills: "Habilidades",
    },
    experience: {
      title: "Experiencia",
      subtitle: "Mi trayectoria profesional hasta ahora.",
      jobs: [
        {
          role: "Creador de Contenido Freelance",
          company: "Autónomo",
          date: "2024 - Actualidad",
          description: "Edición de video para marcas, logrando más de 300k visualizaciones mediante narrativa atractiva y precisión técnica."
        },
        {
          role: "Gestor de Proyectos Web",
          company: "Freelance",
          date: "2023",
          description: "Gestión de proyectos en WordPress y Elementor, optimizando SEO y rendimiento para varios clientes."
        },
        {
          role: "Becario de Contabilidad",
          company: "GYV Asesores",
          date: "Julio 2022",
          description: "Gestión contable, registro de facturas y soporte directo al cliente en un entorno dinámico."
        }
      ],
      education: [
        {
          degree: "Doble Grado en Finanzas y Contabilidad + ADE",
          school: "Universidad de Málaga",
          date: "2021 - 2026",
          details: "Nota media 8.62/10. Enfocado en finanzas corporativas, principios contables y estrategia empresarial."
        },
        {
          degree: "Programa Erasmus",
          school: "VSE Praga",
          date: "2024 - 2025",
          details: "Exposición a negocios internacionales y estudios económicos avanzados."
        }
      ]
    },
    contact: {
      title: "Contactar",
      subtitle: "Abierto a oportunidades en M&A y Análisis Financiero.",
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
