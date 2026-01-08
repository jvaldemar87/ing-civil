export const translations = {
    es: {
        // Navigation
        'nav.home': 'Inicio',
        'nav.projects': 'Proyectos',
        'nav.cv': 'Currículum',
        'nav.contact': 'Contacto',

        // Hero
        'hero.title': 'Ingeniería Civil de Infraestructura Pesada',
        'hero.subtitle': '40+ años de excelencia en proyectos hidráulicos y ferroviarios',
        'hero.cta': 'Ver Proyectos',

        // Projects
        'projects.title': 'Proyectos Destacados',
        'projects.all': 'Todos los Proyectos',
        'projects.filter': 'Filtrar por:',
        'projects.category.all': 'Todos',
        'projects.category.hydraulic': 'Hidráulico',
        'projects.category.railroad': 'Ferroviario',
        'projects.category.roads': 'Carreteras',
        'projects.category.buildings': 'Edificación',
        'projects.category.advisory': 'Asesoría',

        // Project Details
        'project.challenge': 'El Desafío',
        'project.solution': 'Solución Técnica',
        'project.results': 'Resultados',
        'project.datasheet': 'Ficha Técnica',
        'project.client': 'Cliente',
        'project.period': 'Período',
        'project.location': 'Ubicación',
        'project.role': 'Rol',
        'project.metrics': 'Métricas Clave',

        // Contact
        'contact.title': 'Contacto',
        'contact.whatsapp': 'Contactar por WhatsApp',
        'contact.email': 'Enviar Email',
        'contact.download': 'Descargar CV',

        // CV
        'cv.education': 'Formación Académica',
        'cv.experience': 'Experiencia Profesional',
        'cv.skills': 'Habilidades y Software',
        'cv.philosophy': 'Filosofía Profesional',
        'cv.vision': 'Visión',
        'cv.goals': 'Metas',

        // Footer
        'footer.rights': 'Todos los derechos reservados',
        'footer.language': 'Idioma',
    },
    en: {
        // Navigation
        'nav.home': 'Home',
        'nav.projects': 'Projects',
        'nav.cv': 'Resume',
        'nav.contact': 'Contact',

        // Hero
        'hero.title': 'Heavy Infrastructure Civil Engineering',
        'hero.subtitle': '40+ years of excellence in hydraulic and railroad projects',
        'hero.cta': 'View Projects',

        // Projects
        'projects.title': 'Featured Projects',
        'projects.all': 'All Projects',
        'projects.filter': 'Filter by:',
        'projects.category.all': 'All',
        'projects.category.hydraulic': 'Hydraulic',
        'projects.category.railroad': 'Railroad',
        'projects.category.roads': 'Roads',
        'projects.category.buildings': 'Buildings',
        'projects.category.advisory': 'Advisory',

        // Project Details
        'project.challenge': 'The Challenge',
        'project.solution': 'Technical Solution',
        'project.results': 'Results',
        'project.datasheet': 'Technical Datasheet',
        'project.client': 'Client',
        'project.period': 'Period',
        'project.location': 'Location',
        'project.role': 'Role',
        'project.metrics': 'Key Metrics',

        // Contact
        'contact.title': 'Contact',
        'contact.whatsapp': 'Contact via WhatsApp',
        'contact.email': 'Send Email',
        'contact.download': 'Download Resume',

        // CV
        'cv.education': 'Education',
        'cv.experience': 'Professional Experience',
        'cv.skills': 'Skills & Software',
        'cv.philosophy': 'Professional Philosophy',
        'cv.vision': 'Vision',
        'cv.goals': 'Goals',

        // Footer
        'footer.rights': 'All rights reserved',
        'footer.language': 'Language',
    },
} as const;

export type TranslationKey = keyof typeof translations.es;
export type Locale = keyof typeof translations;

export function t(locale: Locale, key: TranslationKey): string {
    return translations[locale][key] || key;
}
