import type { ImageMetadata } from 'astro';

export const site = {
  name: 'Portugal Contra Incendios',
  legalName: 'Portugal Seguridad Industrial Minera E.I.R.L.',
  ruc: '20600361172',
  phone: '+51932481153',
  phoneDisplay: '+51 932 481 153',
  whatsapp: 'https://wa.me/51932481153',
  email: 'info@contraincendioportugal.com',
  address: {
    street: 'Urb. 12 de Octubre H-18',
    district: 'Cerro Colorado',
    city: 'Arequipa',
    country: 'PE',
  },
  title: 'Recarga de extintores y sistemas contra incendios en Arequipa | Portugal',
  description:
    'Recarga y venta de extintores, redes de agua, detección de incendios, supresión en equipos pesados y capacitación de brigadas en Arequipa. Más de 20 años en minería e industria bajo normas NFPA y NTP.',
};

// Redes sociales: las que tengan `url` vacía no se muestran.
export const redes = {
  facebook: { nombre: 'Facebook', url: '' },
  instagram: { nombre: 'Instagram', url: '' },
  tiktok: { nombre: 'TikTok', url: 'https://www.tiktok.com/@contraincendioportugal' },
};

export const slides = [
  { tag: '01 · EXTINTORES', t1: 'Recarga y mantenimiento', t2: 'de extintores', body: 'Inspección mensual, recarga anual y prueba hidrostática cada 5 años. Tarjeta de inspección al día para Defensa Civil y tu aseguradora.', norm: 'NTP 350.043 · NFPA 10', cta: 'Cotizar recarga', ph: 'Foto recortada: extintor rojo (PNG sin fondo)', bg: '#B71C1C' },
  { tag: '02 · REDES DE AGUA', t1: 'Redes de agua', t2: 'siempre listas', body: 'Bombas, gabinetes, hidrantes y calibración de la red contra incendio para industria y minería.', norm: 'NFPA 14 · NFPA 20', cta: 'Cotizar red de agua', ph: 'Foto recortada: válvula de hidrante', bg: '#C62828' },
  { tag: '03 · GABINETES', t1: 'Gabinetes y', t2: 'mangueras', body: 'Instalación y mantenimiento de gabinetes contra incendio con manguera, válvula y señalización.', norm: 'NFPA 14', cta: 'Cotizar gabinetes', ph: 'Foto recortada: gabinete con manguera', bg: '#A51A1A' },
  { tag: '04 · DETECCIÓN', t1: 'Detecta el fuego', t2: 'antes que nadie', body: 'Paneles, detectores, estaciones manuales, sirenas y estrobos instalados y probados.', norm: 'NFPA 72', cta: 'Cotizar detección', ph: 'Foto recortada: detector / panel de alarma', bg: '#B71C1C' },
  { tag: '05 · SUPRESIÓN VEHICULAR', t1: 'Supresión en', t2: 'equipos pesados', body: 'Sistemas manuales y automáticos en camiones de acarreo, maquinaria y talleres mineros.', norm: 'NFPA 17 · NFPA 122', cta: 'Cotizar supresión', ph: 'Foto recortada: camión minero / sistema de supresión', bg: '#9E1717' },
  { tag: '06 · CÁMARAS', t1: 'Cámaras de', t2: 'seguridad', body: 'Instalación y mantenimiento de cámaras de seguridad para urbanizaciones, plantas industriales y operaciones mineras.', norm: 'CCTV', cta: 'Cotizar cámaras', ph: 'Foto recortada: cámara de seguridad', bg: '#B71C1C' },
];

export const marqueeWords = ['Extintores', 'Redes de agua', 'Hidrantes', 'Detección', 'Supresión vehicular', 'Capacitación', 'Cámaras de seguridad', 'EPP'];

export const services = [
  { title: 'Detección de incendios', desc: 'Paneles, detectores, estaciones manuales, sirenas y estrobos.', norm: 'NFPA 72' },
  { title: 'Redes de agua contra incendio', desc: 'Bombas, gabinetes, hidrantes y calibración de la red.', norm: 'NFPA 14 · NFPA 20' },
  { title: 'Inspección y recarga de extintores', desc: 'Inspección mensual, recarga anual, prueba hidrostática cada 5 años.', norm: 'NTP 350.043 · NFPA 10' },
  { title: 'Capacitación contra incendios', desc: 'Uso de extintores, práctica con fuego real y brigadistas.', norm: 'NFPA 600' },
  { title: 'Supresión en equipos pesados', desc: 'Sistemas manuales y automáticos en camiones de acarreo y talleres.', norm: 'NFPA 17 · NFPA 122' },
  { title: 'Venta de extintores', desc: 'Extintores nacionales e importados.', norm: 'NTP 350.043' },
  { title: 'Cámaras de seguridad', desc: 'Instalación y mantenimiento: vecinal, industrial y minero.', norm: 'CCTV' },
  { title: 'Seguridad industrial y EPP', desc: 'Productos de seguridad minera y protección personal.', norm: 'EPP' },
];

export const stats = [
  { v: '+20', l: 'años de experiencia' },
  { v: '12', l: 'clientes corporativos' },
  { v: '8', l: 'líneas de servicio' },
  { v: '7', l: 'regiones' },
];

export const products = [
  { name: 'PQS', classes: 'A · B · C', use: 'Polvo químico seco. Oficinas, almacenes, talleres y vehículos.' },
  { name: 'CO₂', classes: 'B · C', use: 'Tableros eléctricos, servidores y equipos electrónicos. No deja residuo.' },
  { name: 'Agua presurizada', classes: 'A', use: 'Sólidos comunes: madera, papel, cartón y textiles.' },
  { name: 'Espuma', classes: 'A · B', use: 'Líquidos inflamables: grifos, almacenes de combustible y talleres.' },
  { name: 'Acetato de potasio', classes: 'K', use: 'Cocinas industriales y comerciales con aceites y grasas.' },
];

export const steps = [
  { when: 'CADA MES', t: 'Inspección', d: 'Presión del manómetro, precinto, manguera, ubicación y tarjeta al día.', accent: false },
  { when: 'CADA AÑO', t: 'Recarga y mantenimiento', d: 'Recarga del agente extintor y mantenimiento del equipo y del sistema.', accent: false },
  { when: 'CADA 5 AÑOS', t: 'Prueba hidrostática', d: 'Ensayo de presión del cilindro para verificar que sigue siendo seguro.', accent: true },
];

export const projects = [
  { op: 'Mina El Brocal', place: 'Cerro de Pasco', service: 'Instalación de sistemas contra incendios' },
  { op: 'Mina Shougang', place: 'Marcona, Ica', service: 'Mantenimiento, recarga e instalación de sistemas contra incendio' },
  { op: 'Mina Cerro Verde', place: 'Arequipa', service: 'Mantenimiento de hidrantes' },
];

// Sin `logo` se muestra el nombre. Para poner un logo: guardarlo en src/assets/clientes/,
// importarlo arriba y asignarlo, por ejemplo { nombre: 'Minera Antapaccay', logo: antapaccay }.
export const clients: { nombre: string; logo?: ImageMetadata }[] = [
  { nombre: 'Sociedad Minera Cerro Verde' },
  { nombre: 'Anglo American Quellaveco' },
  { nombre: 'Minera Antapaccay' },
  { nombre: 'Fluor Daniel' },
  { nombre: 'Stracon – GyM' },
  { nombre: 'Arca Continental Lindley' },
  { nombre: 'Inkabor' },
  { nombre: 'Bosch Casa' },
  { nombre: 'Inca Alpaca' },
  { nombre: 'SERMEDI' },
  { nombre: 'LIVIT' },
  { nombre: 'Carmen Inmuebles' },
];
