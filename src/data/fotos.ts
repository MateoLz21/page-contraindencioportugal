import type { ImageMetadata } from 'astro';
import heroExtintores from '../assets/fotos/hero-extintores.png';
import heroRedes from '../assets/fotos/hero-redes-de-agua.png';
import heroGabinetes from '../assets/fotos/hero-gabinetes.png';
import heroDeteccion from '../assets/fotos/hero-deteccion.png';
import heroSupresion from '../assets/fotos/hero-supresion.png';
import heroCapacitacion from '../assets/fotos/hero-capacitacion.png';
import heroEpp from '../assets/fotos/hero-epp.png';
import heroCamaras from '../assets/fotos/hero-camaras.png';
import proyectosMina from '../assets/fotos/proyectos-mina.jpg';
import brigadaMina from '../assets/fotos/brigada-mina.jpg';
import extintorPqs from '../assets/fotos/extintor-pqs.png';
import extintorCo2 from '../assets/fotos/extintor-co2.png';
import extintorAgua from '../assets/fotos/extintor-agua.png';
import extintorEspuma from '../assets/fotos/extintor-espuma.png';
import extintorAcetato from '../assets/fotos/extintor-acetato.png';

export interface Foto {
  src: ImageMetadata;
  alt: string;
  // Recorte con fondo transparente: se muestra entero sobre el panel en vez de llenarlo.
  recorte?: boolean;
}

// Lo que no figure aquí se muestra como marcador.

const extintores: Foto = { src: heroExtintores, alt: 'Dos extintores rojos de polvo químico seco clase ABC' };
const redes: Foto = { src: heroRedes, alt: 'Red de agua contra incendio con gabinete de manguera, válvulas, manómetros, rociador e hidrante' };
const gabinetes: Foto = { src: heroGabinetes, alt: 'Gabinetes contra incendio rojos con manguera enrollada, válvula y pitón' };
const deteccion: Foto = { src: heroDeteccion, alt: 'Paneles de alarma contra incendio, detectores de humo, estación manual, sirenas y luces estroboscópicas' };
const supresion: Foto = { src: heroSupresion, alt: 'Sistema de supresión de incendios para vehículos: cilindros de agente, boquillas de descarga, panel de control y actuador manual' };
const capacitacion: Foto = { src: heroCapacitacion, alt: 'Instructor con chaleco rojo explicando clases de fuego y uso de extintores en una capacitación contra incendios' };
const epp: Foto = { src: heroEpp, alt: 'Equipos de protección personal: casco, orejeras, respirador, guantes, lentes, chaleco reflectivo, botas de seguridad y arnés' };
const camaras: Foto = { src: heroCamaras, alt: 'Tres cámaras de seguridad blancas: tipo bala, domo y domo PTZ con soporte de pared' };

// Slides del hero de Inicio, por posición (0–5).
export const fotosHero: (Foto | undefined)[] = [
  extintores,
  redes,
  gabinetes,
  deteccion,
  supresion,
  camaras,
];

// Sección "Por qué Portugal" de Inicio.
export const fotoBrigada: Foto | undefined = {
  src: brigadaMina,
  alt: 'Dos brigadistas con chaleco rojo inspeccionan un gabinete contra incendios, extintores y una conexión siamesa en una mina a tajo abierto',
};

// Sección "Proyectos" de Inicio.
export const fotoProyectos: Foto | undefined = {
  src: proyectosMina,
  alt: 'Estación contra incendios en una planta minera al atardecer: gabinete con manguera, extintor, válvulas y tubería roja',
};

// Carrusel de extintores de Inicio, en el orden de `products` (site.ts).
export const fotosProductos: (Foto | undefined)[] = [
  { src: extintorPqs, alt: 'Extintor rojo de polvo químico seco (PQS) para fuegos clase A, B y C' },
  { src: extintorCo2, alt: 'Extintor rojo de dióxido de carbono (CO₂) con corneta negra, para fuegos clase B y C' },
  { src: extintorAgua, alt: 'Extintor rojo de agua presurizada para fuegos clase A' },
  { src: extintorEspuma, alt: 'Extintor rojo de espuma AFFF para fuegos clase A y B' },
  { src: extintorAcetato, alt: 'Extintor de acero inoxidable de acetato de potasio para fuegos clase K' },
];

// Acordeón "Nuestros servicios" de Inicio: foto de fondo de cada tarjeta, por slug.
export const fotosServicioTarjeta: Record<string, Foto> = {
  'deteccion-de-incendios': { ...deteccion, recorte: true },
  'redes-de-agua-contra-incendio': { ...redes, recorte: true },
  'extintores-inspeccion-y-recarga': { ...extintores, recorte: true },
  'capacitacion-contra-incendios': { ...capacitacion, recorte: true },
  'supresion-equipos-pesados': { ...supresion, recorte: true },
  'venta-de-extintores': { src: extintorCo2, alt: '', recorte: true },
  'camaras-de-seguridad': { ...camaras, recorte: true },
  'seguridad-industrial-y-epp': { ...epp, recorte: true },
};

// Hero de cada página de servicio, por slug.
export const fotosServicioHero: Record<string, Foto> = {
  'capacitacion-contra-incendios': capacitacion,
  'deteccion-de-incendios': deteccion,
  'extintores-inspeccion-y-recarga': extintores,
  'redes-de-agua-contra-incendio': redes,
  'supresion-equipos-pesados': supresion,
  'camaras-de-seguridad': camaras,
  'seguridad-industrial-y-epp': epp,
};

// Galería de cada página de servicio (3 fotos), por slug.
export const fotosServicioGaleria: Record<string, (Foto | undefined)[]> = {};
