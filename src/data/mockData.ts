import type { Center, Lab } from '../types';

export const researchCenters: Center[] = [
  {
    id: 'c1',
    name: 'Centro de Aguas y Saneamiento Ambiental',
    description: 'Centro dedicado al estudio y mejora de la calidad del agua y los sistemas de saneamiento.',
    logo: 'droplet',
    history: 'Funciona en la UMSS apoyando proyectos de investigación y consultoría en temas de agua potable, aguas residuales y saneamiento básico.',
    mission: 'Generar estudios y propuestas que mejoren la gestión del agua y el saneamiento en la región.',
    usefulInfo: 'Realiza análisis básicos de calidad de agua y apoyo a proyectos locales.',
    publications: [],
    contact: {
      phone: '+591 4 0000001',
      email: 'aguas.saneamiento@umss.edu.bo',
      address: 'Campus central UMSS, Cochabamba'
    },
    popularity: 80
  },
  {
    id: 'c2',
    name: 'Centro de Alimentos y Productos Naturales',
    description: 'Investiga la calidad, procesamiento y aprovechamiento de alimentos y productos naturales.',
    logo: 'utensils',
    history: 'Trabaja con productores y proyectos de valor agregado a alimentos bolivianos.',
    mission: 'Apoyar la seguridad alimentaria y el desarrollo de productos con valor nutricional y comercial.',
    usefulInfo: 'Ofrece análisis básicos de alimentos y asesoramiento técnico.',
    publications: [],
    contact: {
      phone: '+591 4 0000002',
      email: 'alimentos.naturales@umss.edu.bo',
      address: 'Facultad de Ciencias y Tecnología, UMSS'
    },
    popularity: 75
  },
  {
    id: 'c3',
    name: 'Centro de Biodiversidad y Genética',
    description: 'Centro orientado al estudio de la biodiversidad boliviana y sus recursos genéticos.',
    logo: 'leaf',
    history: 'Desarrolla proyectos relacionados con especies nativas y conservación.',
    mission: 'Contribuir al conocimiento y uso responsable de la biodiversidad del país.',
    usefulInfo: 'Participa en inventarios biológicos y apoyo a tesis de grado.',
    publications: [],
    contact: {
      phone: '+591 4 0000003',
      email: 'biodiversidad.genetica@umss.edu.bo',
      address: 'Campus UMSS, Cochabamba'
    },
    popularity: 78
  },
  {
    id: 'c4',
    name: 'Centro de Biotecnología',
    description: 'Aplica herramientas de biotecnología en agricultura, salud y medio ambiente.',
    logo: 'microscope',
    history: 'Integra a docentes y estudiantes de distintas áreas biológicas y de ingeniería.',
    mission: 'Desarrollar proyectos biotecnológicos aplicados a necesidades locales.',
    usefulInfo: 'Dispone de laboratorios para prácticas y proyectos de investigación.',
    publications: [],
    contact: {
      phone: '+591 4 0000004',
      email: 'biotecnologia@umss.edu.bo',
      address: 'Facultad de Ciencias y Tecnología, UMSS'
    },
    popularity: 82
  },
  {
    id: 'c5',
    name: 'Centro de Mejoramiento de la Enseñanza de la Matemática e Informática',
    description: 'Mejora la enseñanza de la matemática y la informática en distintos niveles educativos.',
    logo: 'calculator',
    history: 'Realiza talleres, cursos y apoyo a docentes en metodologías activas.',
    mission: 'Fortalecer las competencias docentes y el aprendizaje de estudiantes en matemática e informática.',
    usefulInfo: 'Organiza cursos cortos, seminarios y materiales de apoyo.',
    publications: [],
    contact: {
      phone: '+591 4 0000005',
      email: 'cemei@umss.edu.bo',
      address: 'UMSS, Cochabamba'
    },
    popularity: 77
  },
  {
    id: 'c6',
    name: 'Centro de Tecnología Agroindustrial',
    description: 'Apoya proyectos de transformación y tecnología aplicada a productos agropecuarios.',
    logo: 'factory',
    history: 'Trabaja con productores y pequeñas empresas en procesos agroindustriales.',
    mission: 'Mejorar procesos de producción y transformación de productos agropecuarios.',
    usefulInfo: 'Brinda asesoría básica y acompaña proyectos piloto.',
    publications: [],
    contact: {
      phone: '+591 4 0000006',
      email: 'tec.agroindustrial@umss.edu.bo',
      address: 'Campus UMSS, Cochabamba'
    },
    popularity: 74
  },
  {
    id: 'c7',
    name: 'Centro Universitario de Investigaciones en Energías',
    description: 'Investiga y desarrolla soluciones en energías convencionales y alternativas.',
    logo: 'bolt',
    history: 'Incluye proyectos de energía solar, eficiencia energética y redes eléctricas.',
    mission: 'Contribuir a un uso más eficiente y sostenible de la energía en Bolivia.',
    usefulInfo: 'Realiza mediciones básicas y apoyo a proyectos de energías renovables.',
    publications: [],
    contact: {
      phone: '+591 4 0000007',
      email: 'energias@umss.edu.bo',
      address: 'Facultad de Ingeniería Eléctrica, UMSS'
    },
    popularity: 81
  },
  {
    id: 'c8',
    name: 'Laboratorio de Geotecnia',
    description: 'Centro/laboratorio para ensayos de suelos y materiales de construcción.',
    logo: 'mountain',
    history: 'Apoya proyectos de ingeniería civil relacionados con mecánica de suelos.',
    mission: 'Brindar soporte básico a estudios de estabilidad y diseño de obras civiles.',
    usefulInfo: 'Realiza ensayos básicos de caracterización de suelos.',
    publications: [],
    contact: {
      phone: '+591 4 0000008',
      email: 'lab.geotecnia@umss.edu.bo',
      address: 'Facultad de Ingeniería Civil, UMSS'
    },
    popularity: 70
  },
  {
    id: 'c9',
    name: 'Laboratorio de Hidráulica',
    description: 'Centro utilizado para prácticas y estudios de flujo de agua en canales y tuberías.',
    logo: 'tornado',
    history: 'Sirve de apoyo a cursos de hidráulica e hidrología.',
    mission: 'Permitir experimentos básicos sobre comportamiento del agua en diferentes condiciones.',
    usefulInfo: 'Cuenta con módulos didácticos y equipos de medición.',
    publications: [],
    contact: {
      phone: '+591 4 0000009',
      email: 'lab.hidraulica@umss.edu.bo',
      address: 'Facultad de Ingeniería Civil, UMSS'
    },
    popularity: 72
  },
  {
    id: 'c10',
    name: 'Programa de Desarrollo de Tecnologías de Fabricación',
    description: 'Programa/centro orientado a procesos de manufactura y tecnologías de producción.',
    logo: 'factory',
    history: 'Apoya trabajos en mecanizado, diseño de procesos y prototipado.',
    mission: 'Mejorar las capacidades de fabricación en entornos industriales y académicos.',
    usefulInfo: 'Dispone de equipamiento básico para prácticas de fabricación.',
    publications: [],
    contact: {
      phone: '+591 4 0000010',
      email: 'fabricacion@umss.edu.bo',
      address: 'Facultad de Ingeniería Mecánica, UMSS'
    },
    popularity: 74
  },
  {
    id: 'c11',
    name: 'Programa Elektro',
    description: 'Programa relacionado con proyectos en ingeniería eléctrica y electrónica.',
    logo: 'zap',
    history: 'Incluye proyectos de automatización, control y sistemas eléctricos.',
    mission: 'Apoyar el desarrollo de soluciones eléctricas y electrónicas de aplicación práctica.',
    usefulInfo: 'Acompaña proyectos de estudiantes y convenios con instituciones.',
    publications: [],
    contact: {
      phone: '+591 4 0000011',
      email: 'elektro@umss.edu.bo',
      address: 'Facultad de Ingeniería Eléctrica, UMSS'
    },
    popularity: 76
  },
 
  {
    id: 'c13',
    name: 'Incubadora de Empresas de Base Tecnológica',
    description: 'Apoya a estudiantes y egresados en el desarrollo de emprendimientos tecnológicos.',
    logo: 'rocket',
    history: 'Acompaña ideas de negocio desde el prototipo hasta la validación inicial.',
    mission: 'Fomentar el emprendimiento de base tecnológica dentro de la comunidad universitaria.',
    usefulInfo: 'Ofrece mentorías, espacios de trabajo y talleres básicos.',
    publications: [],
    contact: {
      phone: '+591 4 0000013',
      email: 'incubadora.tecnologica@umss.edu.bo',
      address: 'Campus central UMSS'
    },
    popularity: 79
  },
  {
    id: 'c14',
    name: 'Centro de Investigación en Tecnología Aplicada',
    description: 'Proyectos de tecnología aplicada en software, hardware y procesos.',
    logo: 'cpu',
    history: 'Integra docentes y estudiantes de ingeniería para resolver problemas prácticos.',
    mission: 'Transformar ideas en soluciones tecnológicas útiles para instituciones y empresas.',
    usefulInfo: 'Apoya proyectos integradores y trabajos de grado.',
    publications: [],
    contact: {
      phone: '+591 4 0000014',
      email: 'cita@umss.edu.bo',
      address: 'Facultad de Ciencias y Tecnología, UMSS'
    },
    popularity: 83
  }
];

export const laboratories: Lab[] = [
  {
    id: 'l1',
    name: 'Laboratorio de Geotecnia',
    description: 'Laboratorio para ensayos de suelos y materiales de construcción.',
    logo: 'mountain',
    history: 'Apoya proyectos de ingeniería civil relacionados con mecánica de suelos.',
    mission: 'Brindar soporte básico a estudios de estabilidad y diseño de obras civiles.',
    usefulInfo: 'Realiza ensayos básicos de caracterización de suelos.',
    publications: [],
    contact: {
      phone: '+591 4 0000101',
      email: 'lab.geotecnia@umss.edu.bo',
      address: 'Facultad de Ingeniería Civil, UMSS'
    },
    popularity: 70
  },
  {
    id: 'l2',
    name: 'Laboratorio de Hidráulica',
    description: 'Laboratorio utilizado para prácticas y estudios de flujo de agua en canales y tuberías.',
    logo: 'tornado',
    history: 'Sirve de apoyo a cursos de hidráulica e hidrología.',
    mission: 'Permitir experimentos básicos sobre comportamiento del agua en diferentes condiciones.',
    usefulInfo: 'Cuenta con módulos didácticos y equipos de medición.',
    publications: [],
    contact: {
      phone: '+591 4 0000102',
      email: 'lab.hidraulica@umss.edu.bo',
      address: 'Facultad de Ingeniería Civil, UMSS'
    },
    popularity: 72
  },
  {
    id: 'l3',
    name: 'Programa de Desarrollo de Tecnologías de Fabricación',
    description: 'Programa orientado a procesos de manufactura y tecnologías de producción.',
    logo: 'factory',
    history: 'Apoya trabajos en mecanizado, diseño de procesos y prototipado.',
    mission: 'Mejorar las capacidades de fabricación en entornos industriales y académicos.',
    usefulInfo: 'Dispone de equipamiento básico para prácticas de fabricación.',
    publications: [],
    contact: {
      phone: '+591 4 0000103',
      email: 'fabricacion@umss.edu.bo',
      address: 'Facultad de Ingeniería Mecánica, UMSS'
    },
    popularity: 74
  },
  {
    id: 'l4',
    name: 'Programa Elektro',
    description: 'Programa relacionado con proyectos en ingeniería eléctrica y electrónica.',
    logo: 'zap',
    history: 'Incluye proyectos de automatización, control y sistemas eléctricos.',
    mission: 'Apoyar el desarrollo de soluciones eléctricas y electrónicas de aplicación práctica.',
    usefulInfo: 'Acompaña proyectos de estudiantes y convenios con instituciones.',
    publications: [],
    contact: {
      phone: '+591 4 0000104',
      email: 'elektro@umss.edu.bo',
      address: 'Facultad de Ingeniería Eléctrica, UMSS'
    },
    popularity: 76
  }
];