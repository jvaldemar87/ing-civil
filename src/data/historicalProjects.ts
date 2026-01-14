export interface HistoricalProject {
    id: string;
    titulo: {
        es: string;
        en: string;
    };
    cliente: string;
    descripcion: {
        es: string;
        en: string;
    };
    periodo: string;
    añoInicio: number;
    añoFin: number | null;
    decada: string;
    tipo: 'hidraulico' | 'ferroviario' | 'carreteras' | 'edificacion' | 'general';
    ubicacion?: {
        es: string;
        en: string;
    };
    tags: {
        es: string[];
        en: string[];
    };
}

export const historicalProjects: HistoricalProject[] = [
    {
        id: 'tren-maya-tramo-3-2025',
        titulo: {
            es: 'Tren Maya Tramo 3: Kalkini – Izamal',
            en: 'Mayan Train Section 3: Kalkini – Izamal'
        },
        cliente: 'SEDENA - FONATUR Tren Maya',
        descripcion: {
            es: 'Tramo # 3 de Tren Maya. Kalkini – Izamal.',
            en: 'Mayan Train Section #3. Kalkini – Izamal.'
        },
        periodo: '2025 – Actual',
        añoInicio: 2025,
        añoFin: null,
        decada: '2020s',
        tipo: 'ferroviario',
        ubicacion: {
            es: 'Yucatán, México',
            en: 'Yucatan, Mexico'
        },
        tags: {
            es: ['Tren Maya', 'Ferroviario', 'En Curso'],
            en: ['Mayan Train', 'Railway', 'Ongoing']
        }
    },
    {
        id: 'asipona-puerto-chiapas-2024',
        titulo: {
            es: 'Ampliación ASIPONA Puerto Chiapas',
            en: 'ASIPONA Puerto Chiapas Expansion'
        },
        cliente: 'ASIPONA - Puerto Chiapas',
        descripcion: {
            es: 'Ampliación de vías y Patio de Maniobras dentro de ASIPONA, Puerto Chiapas.',
            en: 'Track expansion and Maneuvering Yard within ASIPONA, Puerto Chiapas.'
        },
        periodo: '2024-2025',
        añoInicio: 2024,
        añoFin: 2025,
        decada: '2020s',
        tipo: 'ferroviario',
        ubicacion: {
            es: 'Chiapas, México',
            en: 'Chiapas, Mexico'
        },
        tags: {
            es: ['Puerto', 'Ferroviario', 'Infraestructura'],
            en: ['Port', 'Railway', 'Infrastructure']
        }
    },
    {
        id: 'espuela-pesqueria-2023',
        titulo: {
            es: 'Vías Espuela de Acceso Zona Industrial Pesquería',
            en: 'Industrial Zone Access Spur Tracks Pesquería'
        },
        cliente: 'COFENOR',
        descripcion: {
            es: 'SERVICIOS TÉCNICOS PROFESIONALES en obra, Construcción de Vías para Espuela de Acceso a la Zona Industrial en Pesquería, Estado de Nuevo León.',
            en: 'PROFESSIONAL TECHNICAL SERVICES for construction of Spur Access Tracks to the Industrial Zone in Pesquería, Nuevo León State.'
        },
        periodo: '2023-2024',
        añoInicio: 2023,
        añoFin: 2024,
        decada: '2020s',
        tipo: 'ferroviario',
        ubicacion: {
            es: 'Nuevo León, México',
            en: 'Nuevo Leon, Mexico'
        },
        tags: {
            es: ['Ferroviario', 'Servicios Técnicos', 'Industrial'],
            en: ['Railway', 'Technical Services', 'Industrial']
        }
    },
    {
        id: 'linea-z-medias-aguas-2022',
        titulo: {
            es: 'Línea Z - Tramo Medias Aguas a Ubero',
            en: 'Z-Line - Medias Aguas to Ubero Section'
        },
        cliente: 'CONSORCIO FIT RECSA-URALES',
        descripcion: {
            es: 'CONSTRUCCION. Corrección de 56 km de Curvatura, pendiente y rehabilitación de 146.3 km de Vía Férrea. Así como la conexión al Puerto de Salina Cruz en la línea Z. Tramo 4.1 de Medias Aguas a Ubero.',
            en: 'CONSTRUCTION. Correction of 56 km of curvature, gradient and rehabilitation of 146.3 km of Railway Track. As well as connection to the Port of Salina Cruz on Z-line. Section 4.1 from Medias Aguas to Ubero.'
        },
        periodo: '2022-2023',
        añoInicio: 2022,
        añoFin: 2023,
        decada: '2020s',
        tipo: 'ferroviario',
        ubicacion: {
            es: 'Oaxaca, México',
            en: 'Oaxaca, Mexico'
        },
        tags: {
            es: ['Ferroviario', 'Rehabilitación', 'Puerto'],
            en: ['Railway', 'Rehabilitation', 'Port']
        }
    },
    {
        id: 'presa-la-villita-2021',
        titulo: {
            es: 'Aireadores Presa Hidroeléctrica La Villita',
            en: 'Aerators La Villita Hydroelectric Dam'
        },
        cliente: 'Cliente no especificado',
        descripcion: {
            es: 'SERVICIOS TÉCNICOS PROFESIONALES en obra Construcción de Aireadores en Túnel 2 y 3 de la Presa Hidroeléctrica La Villita, en el Estado de Michoacán',
            en: 'PROFESSIONAL TECHNICAL SERVICES for construction of Aerators in Tunnel 2 and 3 of La Villita Hydroelectric Dam, in Michoacán State'
        },
        periodo: '2021-2022',
        añoInicio: 2021,
        añoFin: 2022,
        decada: '2020s',
        tipo: 'hidraulico',
        ubicacion: {
            es: 'Michoacán, México',
            en: 'Michoacan, Mexico'
        },
        tags: {
            es: ['Hidráulico', 'Presa', 'Servicios Técnicos'],
            en: ['Hydraulic', 'Dam', 'Technical Services']
        }
    },
    {
        id: 'siuna-rosita-nicaragua-2012',
        titulo: {
            es: 'Carretera Siuna – Rosita Nicaragua',
            en: 'Siuna – Rosita Highway Nicaragua'
        },
        cliente: 'Consorcio internacional TPFGE e HYTSA',
        descripcion: {
            es: 'SUPERVISION de las obras, Mejoramiento del Camino a Siuna – Rosita Región Autónoma de la Costa Caribe Norte de Nicaragua. 76 km de concreto hidráulico.',
            en: 'SUPERVISION of works, Road Improvement to Siuna – Rosita, Autonomous Region of the North Caribbean Coast of Nicaragua. 76 km of hydraulic concrete.'
        },
        periodo: '2012-2021',
        añoInicio: 2012,
        añoFin: 2021,
        decada: '2010s',
        tipo: 'carreteras',
        ubicacion: {
            es: 'Nicaragua',
            en: 'Nicaragua'
        },
        tags: {
            es: ['Concreto Hidráulico', 'Supervisión', 'Internacional'],
            en: ['Hydraulic Concrete', 'Supervision', 'International']
        }
    },
    {
        id: 'rosita-sasha-nicaragua-2012',
        titulo: {
            es: 'Camino Rosita – Sasha Nicaragua',
            en: 'Rosita – Sasha Road Nicaragua'
        },
        cliente: 'Constructora Meco Costa Rica',
        descripcion: {
            es: 'CONSTRUCCION. Mejoramiento del Camino a Rosita – Sasha en Región Autónoma de la Costa Caribe Norte de Nicaragua. 20 km de concreto hidráulico.',
            en: 'CONSTRUCTION. Road Improvement to Rosita – Sasha in Autonomous Region of the North Caribbean Coast of Nicaragua. 20 km of hydraulic concrete.'
        },
        periodo: '2012-2021',
        añoInicio: 2012,
        añoFin: 2021,
        decada: '2010s',
        tipo: 'carreteras',
        ubicacion: {
            es: 'Nicaragua',
            en: 'Nicaragua'
        },
        tags: {
            es: ['Concreto Hidráulico', 'Construcción', 'Internacional'],
            en: ['Hydraulic Concrete', 'Construction', 'International']
        }
    },
    {
        id: 'el-rama-kukra-nicaragua-2012',
        titulo: {
            es: 'Carretera El Rama – Kukra Hill – Laguna de Perlas',
            en: 'El Rama – Kukra Hill – Pearl Lagoon Highway'
        },
        cliente: 'Constructora Santa Fe de Costa Rica',
        descripcion: {
            es: 'CONSTRUCCION. Mejoramiento y Rehabilitación de carretera Carretera El Rama – Kukra Hill – Laguna de Perlas. En Nicaragua. 53 km de concreto hidráulico.',
            en: 'CONSTRUCTION. Highway improvement and rehabilitation El Rama – Kukra Hill – Pearl Lagoon. In Nicaragua. 53 km of hydraulic concrete.'
        },
        periodo: '2012-2021',
        añoInicio: 2012,
        añoFin: 2021,
        decada: '2010s',
        tipo: 'carreteras',
        ubicacion: {
            es: 'Nicaragua',
            en: 'Nicaragua'
        },
        tags: {
            es: ['Concreto Hidráulico', 'Construcción', 'Corredor'],
            en: ['Hydraulic Concrete', 'Construction', 'Corridor']
        }
    },
    {
        id: 'nejapa-puerto-sandino-2012',
        titulo: {
            es: 'Carretera Nejapa – Puerto Sandino Nicaragua',
            en: 'Nejapa – Puerto Sandino Highway Nicaragua'
        },
        cliente: 'Consorcio CEMEX-MECO-LLANSA',
        descripcion: {
            es: 'CONSTRUCCION. Mejoramiento y Rehabilitación de carretera Carretera Nejapa – Desviación Puerto Sandino. En Nicaragua. 32 km de concreto hidráulico.',
            en: 'CONSTRUCTION. Highway improvement and rehabilitation Nejapa – Puerto Sandino Bypass. In Nicaragua. 32 km of hydraulic concrete.'
        },
        periodo: '2012-2021',
        añoInicio: 2012,
        añoFin: 2021,
        decada: '2010s',
        tipo: 'carreteras',
        ubicacion: {
            es: 'Nicaragua',
            en: 'Nicaragua'
        },
        tags: {
            es: ['Concreto Hidráulico', 'Construcción', 'Internacional'],
            en: ['Hydraulic Concrete', 'Construction', 'International']
        }
    },
    {
        id: 'libramiento-matamoros-2009',
        titulo: {
            es: 'Libramiento Ferroviario Matamoros-Brownsville',
            en: 'Railway Bypass Matamoros-Brownsville'
        },
        cliente: 'Secretaría de Comunicaciones y Transportes',
        descripcion: {
            es: 'SERVICIOS TÉCNICOS PROFESIONALES en Libramiento Ferroviario Matamoros - Brownsville. En el Estado de Tamaulipas.',
            en: 'PROFESSIONAL TECHNICAL SERVICES for Railway Bypass Matamoros - Brownsville. In Tamaulipas State.'
        },
        periodo: '2009-2011',
        añoInicio: 2009,
        añoFin: 2011,
        decada: '2000s',
        tipo: 'ferroviario',
        ubicacion: {
            es: 'Tamaulipas, México',
            en: 'Tamaulipas, Mexico'
        },
        tags: {
            es: ['Ferroviario', 'Consultoría', 'SCT'],
            en: ['Railway', 'Consulting', 'SCT']
        }
    },
    {
        id: 'capsa-concursos-2007',
        titulo: {
            es: 'Concursos y Proyectos CAPSA',
            en: 'CAPSA Tenders and Projects'
        },
        cliente: 'Constructora CAPSA del Papaloapan',
        descripcion: {
            es: 'ELABORACIÓN DE CONCURSOS, PRESUPUESTO Y PROYECTOS a Constructora CAPSA del Papaloapan, Municipio de Tuxtepec Oax.',
            en: 'PREPARATION OF TENDERS, BUDGETS AND PROJECTS for CAPSA Construction Company of Papaloapan, Tuxtepec Municipality Oax.'
        },
        periodo: '2007-2009',
        añoInicio: 2007,
        añoFin: 2009,
        decada: '2000s',
        tipo: 'general',
        ubicacion: {
            es: 'Oaxaca, México',
            en: 'Oaxaca, Mexico'
        },
        tags: {
            es: ['Consultoría', 'Presupuesto', 'Proyectos'],
            en: ['Consulting', 'Budgeting', 'Projects']
        }
    },
    {
        id: 'chedraui-tuxtepec-2006',
        titulo: {
            es: 'Centro Comercial Chedraui Tuxtepec',
            en: 'Chedraui Shopping Center Tuxtepec'
        },
        cliente: 'Constructora Cabrera',
        descripcion: {
            es: 'DIRECCIÓN DE CONSTRUCCIÓN, de Plataforma de Terracerías para construcción de Centro comercial CHEDRAUI, Municipio de Tuxtepec, Oax.',
            en: 'CONSTRUCTION MANAGEMENT, of Earthworks Platform for construction of CHHEDRAUI Shopping Center, Tuxtepec Municipality, Oax.'
        },
        periodo: '2006-2007',
        añoInicio: 2006,
        añoFin: 2007,
        decada: '2000s',
        tipo: 'edificacion',
        ubicacion: {
            es: 'Oaxaca, México',
            en: 'Oaxaca, Mexico'
        },
        tags: {
            es: ['Edificación', 'Terracerías', 'Comercial'],
            en: ['Building', 'Earthworks', 'Commercial']
        }
    },
    {
        id: 'cerro-caballo-2005',
        titulo: {
            es: 'Apertura Camino Cerro Caballo',
            en: 'Cerro Caballo Road Opening'
        },
        cliente: 'Gobierno del Estado de Oaxaca',
        descripcion: {
            es: 'DISEÑO Y CONSTRUCCIÓN de Apertura de caminos para comunidad del Cerro Caballo, Municipio de Jacatepec, Oax.',
            en: 'DESIGN AND CONSTRUCTION of Road Opening for Cerro Caballo community, Jacatepec Municipality, Oax.'
        },
        periodo: '2005-2006',
        añoInicio: 2005,
        añoFin: 2006,
        decada: '2000s',
        tipo: 'carreteras',
        ubicacion: {
            es: 'Oaxaca, México',
            en: 'Oaxaca, Mexico'
        },
        tags: {
            es: ['Caminos Rurales', 'Diseño', 'Construcción'],
            en: ['Rural Roads', 'Design', 'Construction']
        }
    },
    {
        id: 'el-porvenir-2005',
        titulo: {
            es: 'Apertura Camino El Porvenir',
            en: 'El Porvenir Road Opening'
        },
        cliente: 'Gobierno del Estado de Oaxaca',
        descripcion: {
            es: 'DISEÑO Y CONSTRUCCIÓN de Apertura de caminos para comunidad del Porvenir, Municipio de Jacatepec, Oax.',
            en: 'DESIGN AND CONSTRUCTION of Road Opening for El Porvenir community, Jacatepec Municipality, Oax.'
        },
        periodo: '2005-2006',
        añoInicio: 2005,
        añoFin: 2006,
        decada: '2000s',
        tipo: 'carreteras',
        ubicacion: {
            es: 'Oaxaca, México',
            en: 'Oaxaca, Mexico'
        },
        tags: {
            es: ['Caminos Rurales', 'Diseño', 'Construcción'],
            en: ['Rural Roads', 'Design', 'Construction']
        }
    },
    {
        id: 'farmacia-albatros-2004',
        titulo: {
            es: 'Edificio Farmacia Albatros',
            en: 'Albatros Pharmacy Building'
        },
        cliente: 'Particular',
        descripcion: {
            es: 'DISEÑO Y CONSTRUCCIÓN de Edificio para Farmacia Albatros de Tuxtepec, en la ciudad de Tuxtepec, Oax.',
            en: 'DESIGN AND CONSTRUCTION of Building for Albatros Pharmacy of Tuxtepec, in Tuxtepec city, Oax.'
        },
        periodo: '2004-2005',
        añoInicio: 2004,
        añoFin: 2005,
        decada: '2000s',
        tipo: 'edificacion',
        ubicacion: {
            es: 'Oaxaca, México',
            en: 'Oaxaca, Mexico'
        },
        tags: {
            es: ['Edificación', 'Diseño', 'Comercial'],
            en: ['Building', 'Design', 'Commercial']
        }
    },
    {
        id: 'conjunto-habitacional-juchitan-2003',
        titulo: {
            es: 'Conjunto Habitacional Juchitán',
            en: 'Juchitán Housing Complex'
        },
        cliente: 'Gobierno del Estado de Oaxaca',
        descripcion: {
            es: 'SUPERVISION de la Construcción de conjunto habitacional para el magisterio, en Juchitán, Oax.',
            en: 'SUPERVISION of Housing Complex Construction for teachers, in Juchitán, Oax.'
        },
        periodo: '2003-2004',
        añoInicio: 2003,
        añoFin: 2004,
        decada: '2000s',
        tipo: 'edificacion',
        ubicacion: {
            es: 'Oaxaca, México',
            en: 'Oaxaca, Mexico'
        },
        tags: {
            es: ['Vivienda', 'Supervisión', 'Social'],
            en: ['Housing', 'Supervision', 'Social']
        }
    },
    {
        id: 'viviendas-tuxtepec-2003',
        titulo: {
            es: 'Viviendas Particulares Tuxtepec',
            en: 'Private Housing Tuxtepec'
        },
        cliente: 'Gobierno del Estado de Oaxaca',
        descripcion: {
            es: 'Diseño y construcción de viviendas particulares, en la ciudad de Tuxtepec, Oax.',
            en: 'Design and construction of private housing, in Tuxtepec city, Oax.'
        },
        periodo: '2003-2004',
        añoInicio: 2003,
        añoFin: 2004,
        decada: '2000s',
        tipo: 'edificacion',
        ubicacion: {
            es: 'Oaxaca, México',
            en: 'Oaxaca, Mexico'
        },
        tags: {
            es: ['Vivienda', 'Diseño', 'Residencial'],
            en: ['Housing', 'Design', 'Residential']
        }
    },
    {
        id: 'auditorias-zacatecas-durango-2001',
        titulo: {
            es: 'Auditorías Carretera Zacatecas-Durango',
            en: 'Zacatecas-Durango Highway Audits'
        },
        cliente: 'Gobierno del Estado de Oaxaca',
        descripcion: {
            es: 'AUDITORIAS a las obras de Ampliación y Modernización del km 16+000 al km 134+660 del tramo carretero Rancho Grande, Zacatecas a Cuencame, Durango.',
            en: 'AUDITS to the works of Expansion and Modernization from km 16+000 to km 134+660 of the highway section Rancho Grande, Zacatecas to Cuencame, Durango.'
        },
        periodo: '2001-2002',
        añoInicio: 2001,
        añoFin: 2002,
        decada: '2000s',
        tipo: 'carreteras',
        ubicacion: {
            es: 'Zacatecas/Durango, México',
            en: 'Zacatecas/Durango, Mexico'
        },
        tags: {
            es: ['Auditoría', 'Carreteras', 'Supervisión'],
            en: ['Audit', 'Highways', 'Supervision']
        }
    },
    {
        id: 'boulevard-tuxtepec-2001',
        titulo: {
            es: 'Boulevard Benito Juárez Tuxtepec',
            en: 'Benito Juárez Boulevard Tuxtepec'
        },
        cliente: 'Gobierno del Estado de Oaxaca',
        descripcion: {
            es: 'CONSTRUCCION. de 3 km del Boulevard de cuatro carriles del acceso a la ciudad de Benmérito Juárez. en Tuxtepec, Edo. De Oaxaca. a base de concreto hidráulico y base estabilizada con cemento',
            en: 'CONSTRUCTION. of 3 km of four-lane Boulevard accessing Benemérito Juárez city. in Tuxtepec, Oaxaca State. based on hydraulic concrete and cement-stabilized base'
        },
        periodo: '2001-2002',
        añoInicio: 2001,
        añoFin: 2002,
        decada: '2000s',
        tipo: 'carreteras',
        ubicacion: {
            es: 'Oaxaca, México',
            en: 'Oaxaca, Mexico'
        },
        tags: {
            es: ['Concreto Hidráulico', 'Boulevard', 'Urbano'],
            en: ['Hydraulic Concrete', 'Boulevard', 'Urban']
        }
    },
    {
        id: 'muro-las-palmas-2000',
        titulo: {
            es: 'Muro de Contención Las Palmas',
            en: 'Las Palmas Retaining Wall'
        },
        cliente: 'Gobierno del Estado de Oaxaca',
        descripcion: {
            es: 'DISEÑO Y CONSTRUCCIÓN de Muro de Contención a base de concreto reforzado y Contrafuertes; para evitar desplazamiento de la plataforma de Terracerías; con casas Habitación ya construidas; en el fraccionamiento. Las Palmas, en Tuxtepec, Edo. De Oaxaca.',
            en: 'DESIGN AND CONSTRUCTION of Retaining Wall based on reinforced concrete and Buttresses; to prevent displacement of the Earthworks platform; with Housing already built; in Las Palmas subdivision, in Tuxtepec, Oaxaca State.'
        },
        periodo: '2000-2001',
        añoInicio: 2000,
        añoFin: 2001,
        decada: '2000s',
        tipo: 'general',
        ubicacion: {
            es: 'Oaxaca, México',
            en: 'Oaxaca, Mexico'
        },
        tags: {
            es: ['Muro de Contención', 'Concreto Reforzado', 'Estabilización'],
            en: ['Retaining Wall', 'Reinforced Concrete', 'Stabilization']
        }
    },
    {
        id: 'muro-usila-1997',
        titulo: {
            es: 'Muro de Contención Usila',
            en: 'Usila Retaining Wall'
        },
        cliente: 'Gobierno del Estado de Oaxaca',
        descripcion: {
            es: 'Diseño y Construcción de 1.5 km. De muro de contención a base de concreto reforzado y contrafuertes. Sobre la margen izquierda del Río en el Municipio de Usila en el Edo. De Oaxaca. México',
            en: 'Design and Construction of 1.5 km. Retaining wall based on reinforced concrete and buttresses. On the left bank of the River in Usila Municipality in Oaxaca State. Mexico'
        },
        periodo: '1997-1999',
        añoInicio: 1997,
        añoFin: 1999,
        decada: '1990s',
        tipo: 'general',
        ubicacion: {
            es: 'Oaxaca, México',
            en: 'Oaxaca, Mexico'
        },
        tags: {
            es: ['Muro de Contención', 'Protección Fluvial', 'Concreto Reforzado'],
            en: ['Retaining Wall', 'River Protection', 'Reinforced Concrete']
        }
    },
    {
        id: 'presa-huites-1994',
        titulo: {
            es: 'Presa Hidroeléctrica Huites',
            en: 'Huites Hydroelectric Dam'
        },
        cliente: 'Comisión Nacional del Agua (CNA) y CFE',
        descripcion: {
            es: 'Construcción de Presa Hidroeléctrica Huites en Choix, Sinaloa México. Presa a base de concretos post enfriados, debido al gran tamaño de los volúmenes de concreto masivo, su volumen de cortina y vertedor superó los 3 millones de M3, única en su género en méxico y el mundo en esa época por los procedimientos de colocación de concretos.',
            en: 'Construction of Huites Hydroelectric Dam in Choix, Sinaloa Mexico. Dam based on post-cooled concrete, due to the large size of massive concrete volumes, its curtain and spillway volume exceeded 3 million M3, unique of its kind in Mexico and the world at that time for concrete placement procedures.'
        },
        periodo: '1994-1995',
        añoInicio: 1994,
        añoFin: 1995,
        decada: '1990s',
        tipo: 'hidraulico',
        ubicacion: {
            es: 'Sinaloa, México',
            en: 'Sinaloa, Mexico'
        },
        tags: {
            es: ['Presa', 'Concreto Post-Enfriado', 'Hidroeléctrica'],
            en: ['Dam', 'Post-Cooled Concrete', 'Hydroelectric']
        }
    },
    {
        id: 'central-petacalco-1990',
        titulo: {
            es: 'Central Termoeléctrica Petacalco',
            en: 'Petacalco Thermoelectric Plant'
        },
        cliente: 'Comisión Federal de Electricidad',
        descripcion: {
            es: 'Construcción de Canales de Toma y Descarga con escollera, y Cárcamo de Bombeo, de Central Termoeléctrica de Petacalco, en el Estado de Guerrero.',
            en: 'Construction of Intake and Discharge Channels with riprap, and Pumping Station, of Petacalco Thermoelectric Plant, in Guerrero State.'
        },
        periodo: '1990-1993',
        añoInicio: 1990,
        añoFin: 1993,
        decada: '1990s',
        tipo: 'hidraulico',
        ubicacion: {
            es: 'Guerrero, México',
            en: 'Guerrero, Mexico'
        },
        tags: {
            es: ['Termoeléctrica', 'CFE', 'Hidráulico'],
            en: ['Thermoelectric', 'CFE', 'Hydraulic']
        }
    },
    {
        id: 'grupo-modelo-1988',
        titulo: {
            es: 'Planta Grupo Modelo',
            en: 'Grupo Modelo Plant'
        },
        cliente: 'Grupo Modelo de México',
        descripcion: {
            es: 'Construcción de terracerías, cimentación y Edificios para la instalación de cuatro líneas de Envasado de Cervezas. Planta de tratamiento de aguas residuales.',
            en: 'Construction of earthworks, foundation and Buildings for the installation of four Beer Bottling lines. Wastewater treatment plant.'
        },
        periodo: '1988-1989',
        añoInicio: 1988,
        añoFin: 1989,
        decada: '1980s',
        tipo: 'edificacion',
        ubicacion: {
            es: 'México',
            en: 'Mexico'
        },
        tags: {
            es: ['Industrial', 'Edificación', 'Tratamiento de Aguas'],
            en: ['Industrial', 'Building', 'Wastewater Treatment']
        }
    },
    {
        id: 'presa-cerro-de-oro-1984',
        titulo: {
            es: 'Presa Cerro de Oro',
            en: 'Cerro de Oro Dam'
        },
        cliente: 'Comisión Nacional del Agua (CNA)',
        descripcion: {
            es: 'Construcción de Cortina y Obra de Control y Excedencias de la Presa Cerro de Oro, en el Estado de Oaxaca. Inclusive montaje de grúas de Pórtico y compuertas.',
            en: 'Construction of Dam and Control and Spillway Works of Cerro de Oro Dam, in Oaxaca State. Including assembly of Gantry cranes and gates.'
        },
        periodo: '1984-1987',
        añoInicio: 1984,
        añoFin: 1987,
        decada: '1980s',
        tipo: 'hidraulico',
        ubicacion: {
            es: 'Oaxaca, México',
            en: 'Oaxaca, Mexico'
        },
        tags: {
            es: ['Presa', 'CNA', 'Control Hidráulico'],
            en: ['Dam', 'CNA', 'Hydraulic Control']
        }
    }
];

// Helper function to get projects by decade
export function getProjectsByDecade() {
    const decades = {
        '2020s': [] as HistoricalProject[],
        '2010s': [] as HistoricalProject[],
        '2000s': [] as HistoricalProject[],
        '1990s': [] as HistoricalProject[],
        '1980s': [] as HistoricalProject[],
    };

    historicalProjects.forEach(project => {
        decades[project.decada as keyof typeof decades].push(project);
    });

    return decades;
}

// Helper function to get project by id
export function getProjectById(id: string) {
    return historicalProjects.find(project => project.id === id);
}
