export interface Servicio {
  slug: string;
  short: string;
  title: string;
  t1: string;
  t2: string;
  norms: string[];
  lead: string;
  incH1: string;
  incH2: string;
  incP: string;
  items: [string, string][];
  heroPh: string;
  ctaH: string;
  seoTitle: string;
  seoDescription: string;
}

// El orden define el número de servicio (01–08) y coincide con las tarjetas de Inicio.
export const servicios: Servicio[] = [
  {
    slug: 'deteccion-de-incendios', short: 'Detección', title: 'Detección de incendios', t1: 'Detecta el fuego', t2: 'antes que nadie', norms: ['NFPA 72'],
    lead: 'Diseño, instalación y mantenimiento de sistemas de detección y alarma contra incendios.',
    incH1: 'Un sistema que', incH2: 'avisa a tiempo', incP: 'Instalamos y probamos cada componente del sistema de detección y alarma.',
    items: [['Paneles de control', 'Instalación, programación y mantenimiento del panel de alarma.'], ['Detectores', 'Detectores de humo y temperatura según el riesgo del ambiente.'], ['Estaciones manuales', 'Pulsadores de alarma ubicados en rutas de evacuación.'], ['Sirenas y estrobos', 'Señalización audible y visual para toda la instalación.'], ['Pruebas y mantenimiento', 'Pruebas periódicas del sistema completo.']],
    heroPh: 'Foto recortada: detector / panel de alarma', ctaH: '¿Tu sistema de alarma está al día?',
    seoTitle: 'Sistemas de detección y alarma contra incendios en Arequipa | Portugal',
    seoDescription: 'Instalación y mantenimiento de sistemas de detección y alarma contra incendios en Arequipa: paneles, detectores, estaciones manuales, sirenas y estrobos bajo NFPA 72.',
  },
  {
    slug: 'redes-de-agua-contra-incendio', short: 'Redes de agua', title: 'Redes de agua contra incendio', t1: 'Redes de agua', t2: 'siempre listas', norms: ['NFPA 14', 'NFPA 20'],
    lead: 'Bombas, gabinetes, hidrantes y calibración de la red contra incendio para industria y minería.',
    incH1: 'Toda la red,', incH2: 'de la bomba al hidrante', incP: 'Instalación y mantenimiento de cada parte de la red de agua contra incendio.',
    items: [['Bombas contra incendio', 'Instalación, mantenimiento y pruebas de bombas.'], ['Gabinetes', 'Gabinetes con manguera, válvula y señalización.'], ['Hidrantes', 'Instalación y mantenimiento de hidrantes.'], ['Calibración de la red', 'Verificación de presiones y caudales de la red.']],
    heroPh: 'Foto recortada: válvula de hidrante', ctaH: '¿Tu red de agua responde?',
    seoTitle: 'Redes de agua contra incendio en Arequipa: bombas, gabinetes e hidrantes | Portugal',
    seoDescription: 'Instalación y mantenimiento de redes de agua contra incendio para industria y minería: bombas, gabinetes, hidrantes y calibración de la red bajo NFPA 14 y NFPA 20.',
  },
  {
    slug: 'extintores-inspeccion-y-recarga', short: 'Extintores', title: 'Inspección y recarga de extintores', t1: 'Recarga y mantenimiento', t2: 'de extintores', norms: ['NTP 350.043', 'NFPA 10'],
    lead: 'Inspección mensual, recarga anual y prueba hidrostática cada 5 años. Tarjeta de inspección al día para Defensa Civil y tu aseguradora.',
    incH1: 'El calendario', incH2: 'completo de tu extintor', incP: 'Nosotros llevamos el calendario de cada equipo según NTP 350.043.',
    items: [['Inspección mensual', 'Presión del manómetro, precinto, manguera, ubicación y tarjeta al día.'], ['Recarga anual', 'Recarga del agente extintor y mantenimiento del equipo.'], ['Prueba hidrostática', 'Ensayo de presión del cilindro cada 5 años.'], ['Tarjeta de inspección', 'Registro al día para Defensa Civil y aseguradoras.']],
    heroPh: 'Foto recortada: extintor rojo (PNG sin fondo)', ctaH: '¿Tus extintores vencen pronto?',
    seoTitle: 'Recarga y mantenimiento de extintores en Arequipa | Portugal',
    seoDescription: 'Recarga de extintores en Arequipa: inspección mensual, recarga anual y prueba hidrostática cada 5 años según NTP 350.043 y NFPA 10. Tarjeta al día para Defensa Civil.',
  },
  {
    slug: 'capacitacion-contra-incendios', short: 'Capacitación', title: 'Capacitación contra incendios', t1: 'Tu brigada,', t2: 'preparada con fuego real', norms: ['NFPA 600'],
    lead: 'Inducción en uso de extintores, práctica con fuego real y formación de brigadistas.',
    incH1: 'Teoría y', incH2: 'práctica con fuego real', incP: 'Cursos para personal y brigadas en tu propia instalación.',
    items: [['Inducción en uso de extintores', 'Clases de fuego, tipos de extintor y técnica de uso.'], ['Práctica con fuego real', 'Ejercicios controlados de extinción.'], ['Formación de brigadistas', 'Preparación de la brigada contra incendios.']],
    heroPh: 'Foto: práctica de extinción con fuego real', ctaH: '¿Tu brigada está lista?',
    seoTitle: 'Capacitación contra incendios y formación de brigadas en Arequipa | Portugal',
    seoDescription: 'Capacitación contra incendios en Arequipa: uso de extintores, práctica con fuego real y formación de brigadistas para empresas, industria y minería.',
  },
  {
    slug: 'supresion-equipos-pesados', short: 'Supresión vehicular', title: 'Supresión en equipos pesados', t1: 'Supresión en', t2: 'equipos pesados', norms: ['NFPA 17', 'NFPA 122'],
    lead: 'Sistemas manuales y automáticos en camiones de acarreo, maquinaria y talleres mineros.',
    incH1: 'Protección para', incH2: 'la flota minera', incP: 'Instalación y mantenimiento de sistemas de supresión vehicular.',
    items: [['Sistemas automáticos', 'Detección y descarga automática en el compartimiento del motor.'], ['Sistemas manuales', 'Accionamiento manual desde la cabina y el exterior.'], ['Camiones de acarreo', 'Sistemas para equipos de mina.'], ['Talleres', 'Protección en talleres de mantenimiento.']],
    heroPh: 'Foto recortada: camión minero / sistema de supresión', ctaH: '¿Tu flota está protegida?',
    seoTitle: 'Sistemas de supresión de incendios en equipos pesados mineros | Portugal',
    seoDescription: 'Instalación y mantenimiento de sistemas de supresión de incendios, manuales y automáticos, en camiones de acarreo, maquinaria y talleres mineros en todo el Perú.',
  },
  {
    slug: 'venta-de-extintores', short: 'Venta de extintores', title: 'Venta de extintores', t1: 'Venta de', t2: 'extintores', norms: ['NTP 350.043'],
    lead: 'Extintores nacionales e importados para cada clase de fuego.',
    incH1: 'Un extintor para', incH2: 'cada clase de fuego', incP: 'Te ayudamos a elegir el agente según el riesgo de cada ambiente.',
    items: [['PQS · A B C', 'Polvo químico seco. Oficinas, almacenes, talleres y vehículos.'], ['CO₂ · B C', 'Tableros eléctricos, servidores y equipos electrónicos.'], ['Agua presurizada · A', 'Sólidos comunes: madera, papel, cartón y textiles.'], ['Espuma · A B', 'Líquidos inflamables: grifos y almacenes de combustible.'], ['Acetato de potasio · K', 'Cocinas industriales y comerciales.']],
    heroPh: 'Foto recortada: línea de extintores', ctaH: '¿Qué extintor necesitas?',
    seoTitle: 'Venta de extintores en Arequipa: PQS, CO₂, agua, espuma y clase K | Portugal',
    seoDescription: 'Venta de extintores nacionales e importados en Arequipa: PQS, CO₂, agua presurizada, espuma y acetato de potasio. Te ayudamos a elegir según la clase de fuego.',
  },
  {
    slug: 'camaras-de-seguridad', short: 'Cámaras', title: 'Cámaras de seguridad', t1: 'Cámaras de', t2: 'seguridad', norms: ['CCTV'],
    lead: 'Instalación y mantenimiento de cámaras de seguridad: vecinal, industrial y minero.',
    incH1: 'Vigilancia', incH2: 'para cada entorno', incP: 'Instalación y mantenimiento de sistemas CCTV.',
    items: [['Vecinal', 'Cámaras para urbanizaciones y juntas vecinales.'], ['Industrial', 'Vigilancia de plantas, almacenes y accesos.'], ['Minero', 'Sistemas para operaciones mineras.'], ['Mantenimiento', 'Revisión y mantenimiento de equipos instalados.']],
    heroPh: 'Foto recortada: cámara de seguridad', ctaH: '¿Necesitas vigilancia?',
    seoTitle: 'Instalación de cámaras de seguridad en Arequipa | Portugal',
    seoDescription: 'Instalación y mantenimiento de cámaras de seguridad (CCTV) en Arequipa para urbanizaciones, plantas industriales y operaciones mineras.',
  },
  {
    slug: 'seguridad-industrial-y-epp', short: 'EPP', title: 'Seguridad industrial minera y EPP', t1: 'Seguridad industrial', t2: 'y EPP', norms: ['EPP'],
    lead: 'Productos de seguridad minera y equipos de protección personal.',
    incH1: 'Protección', incH2: 'personal completa', incP: 'Equipos de protección personal y productos de seguridad para minería e industria.',
    items: [['Protección de cabeza', 'Cascos de seguridad.'], ['Protección de manos', 'Guantes según tipo de trabajo.'], ['Protección visual', 'Lentes de seguridad.'], ['Seguridad minera', 'Productos de seguridad industrial minera.']],
    heroPh: 'Foto recortada: casco, guantes, lentes', ctaH: '¿Equipas a tu personal?',
    seoTitle: 'Equipos de protección personal (EPP) y seguridad minera en Arequipa | Portugal',
    seoDescription: 'Venta de equipos de protección personal y productos de seguridad industrial minera en Arequipa: cascos, guantes, lentes de seguridad y más.',
  },
];

export const servicioHref = (slug: string) => `/servicios/${slug}/`;

export const process = [
  { t: 'Visita técnica', d: 'Evaluamos tu instalación y el riesgo de cada ambiente.' },
  { t: 'Propuesta', d: 'Cotización con alcance, normas aplicables y cronograma.' },
  { t: 'Ejecución', d: 'Instalación o mantenimiento por personal certificado.' },
  { t: 'Certificado', d: 'Documentación para Defensa Civil, auditorías y aseguradoras.' },
];
