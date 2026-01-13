export interface FeaturedProject {
    id: string;
    cliente: string;
    titulo: {
        es: string;
        en: string;
    };
    descripcion: {
        es: string;
        en: string;
    };
    periodo: string;
    ubicacion: {
        es: string;
        en: string;
    };
    tipo: 'ferroviario' | 'carreteras' | 'hidraulico';
    longitud?: string;
    tags: {
        es: string[];
        en: string[];
    };
}

export const featuredProjects: FeaturedProject[] = [
    {
        id: 'tren-maya-tramo-3',
        cliente: 'SEDENA - FONATUR Tren Maya',
        titulo: {
            es: 'Tren Maya Tramo 3: Kalkini – Izamal',
            en: 'Mayan Train Section 3: Kalkini – Izamal'
        },
        descripcion: {
            es: 'Construcción de infraestructura ferroviaria para el proyecto turístico más ambicioso de México',
            en: 'Railway infrastructure construction for Mexico\'s most ambitious tourism project'
        },
        periodo: '2025 – Actual',
        ubicacion: {
            es: 'Yucatán, México',
            en: 'Yucatan, Mexico'
        },
        tipo: 'ferroviario',
        tags: {
            es: ['Tren Maya', 'Ferroviario', 'En Curso'],
            en: ['Mayan Train', 'Railway', 'Ongoing']
        }
    },
    {
        id: 'linea-z-medias-aguas',
        cliente: 'CONSORCIO FIT RECSA-URALES',
        titulo: {
            es: 'Línea Z - Tramo Medias Aguas a Ubero',
            en: 'Z-Line - Medias Aguas to Ubero Section'
        },
        descripcion: {
            es: 'Corrección de curvatura, pendiente y rehabilitación de vía férrea con conexión al Puerto de Salina Cruz',
            en: 'Curvature correction, gradient adjustment and railway rehabilitation with connection to Salina Cruz Port'
        },
        periodo: '2022-2023',
        ubicacion: {
            es: 'Oaxaca, México',
            en: 'Oaxaca, Mexico'
        },
        longitud: '146.3 km',
        tipo: 'ferroviario',
        tags: {
            es: ['Ferroviario', 'Rehabilitación', 'Puerto'],
            en: ['Railway', 'Rehabilitation', 'Port']
        }
    },
    {
        id: 'libramiento-matamoros',
        cliente: 'Secretaría de Comunicaciones y Transportes',
        titulo: {
            es: 'Libramiento Ferroviario Matamoros-Brownsville',
            en: 'Railway Bypass Matamoros-Brownsville'
        },
        descripcion: {
            es: 'Servicios técnicos profesionales para el desarrollo de infraestructura ferroviaria fronteriza',
            en: 'Professional technical services for cross-border railway infrastructure development'
        },
        periodo: '2009-2011',
        ubicacion: {
            es: 'Tamaulipas, México',
            en: 'Tamaulipas, Mexico'
        },
        tipo: 'ferroviario',
        tags: {
            es: ['Ferroviario', 'Consultoría', 'SCT'],
            en: ['Railway', 'Consulting', 'SCT']
        }
    },
    {
        id: 'nicaragua-carreteras',
        cliente: 'Consorcio CEMEX-MECO-LLANSA',
        titulo: {
            es: 'Carretera Nejapa – Puerto Sandino',
            en: 'Nejapa – Puerto Sandino Highway'
        },
        descripcion: {
            es: 'Construcción, mejoramiento y rehabilitación de carretera con pavimento de concreto hidráulico',
            en: 'Construction, improvement and rehabilitation of highway with hydraulic concrete pavement'
        },
        periodo: '2012-2021',
        ubicacion: {
            es: 'Nicaragua',
            en: 'Nicaragua'
        },
        longitud: '32 km',
        tipo: 'carreteras',
        tags: {
            es: ['Concreto Hidráulico', 'Construcción', 'Internacional'],
            en: ['Hydraulic Concrete', 'Construction', 'International']
        }
    },
    {
        id: 'el-rama-kukra',
        cliente: 'Constructora Santa Fe de Costa Rica',
        titulo: {
            es: 'Carretera El Rama – Kukra Hill – Laguna de Perlas',
            en: 'El Rama – Kukra Hill – Pearl Lagoon Highway'
        },
        descripcion: {
            es: 'Mejoramiento y rehabilitación de corredor vial estratégico con pavimento de concreto hidráulico',
            en: 'Improvement and rehabilitation of strategic road corridor with hydraulic concrete pavement'
        },
        periodo: '2012-2021',
        ubicacion: {
            es: 'Nicaragua',
            en: 'Nicaragua'
        },
        longitud: '53 km',
        tipo: 'carreteras',
        tags: {
            es: ['Concreto Hidráulico', 'Construcción', 'Corredor'],
            en: ['Hydraulic Concrete', 'Construction', 'Corridor']
        }
    }
];
