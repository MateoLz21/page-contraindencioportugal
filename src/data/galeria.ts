import type { ImageMetadata } from 'astro';
import tecnicoFlota from '../assets/galeria/tecnico-flota-camiones.jpg';
import instalacionSupresion from '../assets/galeria/instalacion-supresion-camion.jpg';
import cilindroAnsul from '../assets/galeria/cilindro-supresion-ansul.jpg';
import moduloCheckfire from '../assets/galeria/modulo-control-checkfire.jpg';
import supresionCamion from '../assets/galeria/supresion-camion-minero.jpg';
import tecnicoPlataforma from '../assets/galeria/tecnico-plataforma-minera.jpg';
import capacitacion from '../assets/galeria/capacitacion-extintores.jpg';
import unidadBomberos from '../assets/galeria/unidad-bomberos-mina.jpg';
import cilindrosMotor from '../assets/galeria/cilindros-supresion-motor.jpg';

export interface FotoGaleria {
  src: ImageMetadata;
  // Texto alternativo y pie de foto.
  titulo: string;
}

// El orden es el de la cuadrícula y el del visor.
export const galeria: FotoGaleria[] = [
  { src: tecnicoFlota, titulo: 'Técnico de Portugal frente a una flota de camiones mineros' },
  { src: instalacionSupresion, titulo: 'Instalación de un cilindro de supresión en un camión' },
  { src: moduloCheckfire, titulo: 'Módulo de control de supresión en la cabina de un camión, con instrucciones en caso de incendio' },
  { src: cilindroAnsul, titulo: 'Cilindro de supresión con su etiqueta de mantenimiento semestral' },
  { src: capacitacion, titulo: 'Capacitación en uso de extintores para personal de una operación minera' },
  { src: tecnicoPlataforma, titulo: 'Cilindros de supresión instalados en la plataforma de un equipo minero' },
  { src: cilindrosMotor, titulo: 'Cilindros de supresión y su red de mangueras junto al motor de un equipo minero' },
  { src: supresionCamion, titulo: 'Sistema de supresión en la plataforma de un camión minero' },
  { src: unidadBomberos, titulo: 'Técnico junto a la unidad de bomberos de una operación minera' },
];
