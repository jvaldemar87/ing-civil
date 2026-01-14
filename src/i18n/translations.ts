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
        'projects.timeline': 'Línea Temporal de Proyectos',
        'projects.timeline.subtitle': 'Cuatro décadas de excelencia en infraestructura pesada',
        'projects.decade.nav': 'Navegación por Década',
        'projects.total': 'proyectos',
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
        'contact.page.title': 'Contacto Profesional',
        'contact.page.subtitle': 'Canales de comunicación directa',
        'contact.whatsapp.main': 'Línea Principal',
        'contact.whatsapp.supervision': 'Supervisión de Obra',
        'contact.whatsapp.management': 'Gestión de Proyectos',
        'contact.email.institutional': 'Correo Institucional',
        'contact.email.technical': 'Consultas Técnicas',
        'contact.message.whatsapp.general': 'Hola, deseo solicitar información sobre sus servicios profesionales.',
        'contact.message.whatsapp.supervision': 'Hola, me interesa su servicio de supervisión de obra.',
        'contact.message.whatsapp.management': 'Hola, requiero información sobre gestión de proyectos.',
        'contact.message.email.subject.general': 'Consulta - Servicios Profesionales',
        'contact.message.email.subject.technical': 'Consulta Técnica - Ingeniería',
        'contact.message.email.body': 'Estimado Ingeniero,\n\nMe pongo en contacto para solicitar información sobre sus servicios profesionales.',

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
        'projects.timeline': 'Projects Timeline',
        'projects.timeline.subtitle': 'Four decades of excellence in heavy infrastructure',
        'projects.decade.nav': 'Navigate by Decade',
        'projects.total': 'projects',
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
        'contact.page.title': 'Professional Contact',
        'contact.page.subtitle': 'Direct communication channels',
        'contact.whatsapp.main': 'Main Line',
        'contact.whatsapp.supervision': 'Construction Supervision',
        'contact.whatsapp.management': 'Project Management',
        'contact.email.institutional': 'Institutional Email',
        'contact.email.technical': 'Technical Inquiries',
        'contact.message.whatsapp.general': 'Hello, I would like information about your professional services.',
        'contact.message.whatsapp.supervision': 'Hello, I am interested in your construction supervision service.',
        'contact.message.whatsapp.management': 'Hello, I need information about project management.',
        'contact.message.email.subject.general': 'Inquiry - Professional Services',
        'contact.message.email.subject.technical': 'Technical Inquiry - Engineering',
        'contact.message.email.body': 'Dear Engineer,\n\nI am contacting you to request information about your professional services.',

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
