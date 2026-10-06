# Bitácora de avance: web Portugal Contra Incendios

Cliente: Portugal Seguridad Industrial Minera E.I.R.L. (Arequipa)
Objetivo: presencia en Google. El cliente no edita contenido.
Hosting: cPanel (Apache + PHP, sin Node en servidor).

---

## Estado al 03/10/2026

Sitio estático en Astro con 11 páginas generadas: Inicio, 8 páginas de servicio, política de privacidad y 404.
`npm run build` pasa sin errores. Falta poner las fotos reales y cerrar los pendientes del final.

## Decisiones tomadas

| Tema | Decisión | Motivo |
|---|---|---|
| Stack | Astro 7 (salida estática) + CSS propio + JS vanilla | cPanel no corre Node; HTML ya renderizado es lo mejor para SEO |
| Tipografía | Poppins autoalojada (`@fontsource/poppins`) | Más rápido que Google Fonts |
| CMS | Ninguno | El cliente no edita contenido |
| Formulario | Ninguno; contacto por WhatsApp y teléfono | Así está en el diseño; no requiere backend |
| Slugs de servicio | Los largos del alcance (`scope_1.md`), no los cortos del diseño | Mejor para Google |
| Diseño | Se diseña primero en Claude Design y luego se implementa | Decisión de Mateo |

## Origen del diseño (Claude Design)

- Proyecto: `1fb1ad1e-df50-4c50-8021-c7ab709acca5`
- Archivos implementados: `Inicio Full Width.dc.html` y `Servicio.dc.html`
- Prompts de importación: `docs/prompt.txt` y `docs/prompt_servicios.txt`
- Para que Claude Code lea el proyecto hay que ejecutar `/design-login` en la sesión.
- El proyecto también contiene `uploads/scope_1.md` (alcance completo) y `uploads/prompt_claude_design.md` (brief original).

## Lo desarrollado

### Sesión 1: Inicio

- Header fijo con logo, menú, teléfono de emergencias y botón Cotizar. Menú desplegable en móvil.
- Hero con slider de 5 slides: autoplay de 6,5 s, pausa al pasar el mouse, swipe, barra de progreso y brasas animadas.
- Marquee de servicios, grilla de 8 servicios, "Por qué Portugal" con 4 cifras, carrusel de 5 extintores, calendario NTP 350.043, proyectos mineros, clientes, contacto, footer y botón flotante de WhatsApp.
- Animación de aparición al hacer scroll. Con "reducir movimiento" activo no hay autoplay ni animaciones.
- SEO: `title` y `description`, canonical, Open Graph, JSON-LD `LocalBusiness`, `sitemap-index.xml`, `robots.txt`.
- `public/.htaccess`: HTTPS forzado, sin `www`, compresión, caché, cabeceras de seguridad y página 404.
- Favicon, ícono táctil e imagen social (`og.jpg`) generados desde el logo.

### Sesión 2: páginas de servicio

- Plantilla única `src/pages/servicios/[slug].astro` que genera las 8 páginas.
- Secciones: hero con ruta de navegación, "Qué incluye", galería de 3 fotos, "Cómo trabajamos" (4 pasos), normativa, "Otros servicios" (carrusel) y contacto.
- El botón de WhatsApp de cada página abre el chat con el servicio ya escrito.
- Las 8 tarjetas de servicio de Inicio enlazan a su página.
- SEO por página: `title` y `description` propios, JSON-LD `Service` y `BreadcrumbList`.

URLs:

- `/servicios/deteccion-de-incendios/`
- `/servicios/redes-de-agua-contra-incendio/`
- `/servicios/extintores-inspeccion-y-recarga/`
- `/servicios/capacitacion-contra-incendios/`
- `/servicios/supresion-equipos-pesados/`
- `/servicios/venta-de-extintores/`
- `/servicios/camaras-de-seguridad/`
- `/servicios/seguridad-industrial-y-epp/`

### Cambios respecto al diseño

- Menú móvil desplegable (el diseño tenía el botón ☰ sin menú).
- Flechas del hero de Inicio movidas a la izquierda en escritorio y ocultas bajo 640 px, porque chocaban con el botón de WhatsApp y con los indicadores.
- Hero de Inicio con alto máximo de 1100 px.
- Página EPP: el diseño mostraba "Lista de productos por confirmar con el cliente" como texto visible; se cambió por "Equipos de protección personal y productos de seguridad para minería e industria."
- Los `title` y `description` de SEO los redactó Claude; el diseño no los traía.

## Estructura del proyecto

```
astro.config.mjs          dominio del sitio y sitemap
public/                   .htaccess, robots.txt, favicon, og.jpg
src/
  assets/                 logo (aquí irán las fotos)
  components/             Header, Hero, ImageSlot, Contacto, Footer, PageScripts
  data/site.ts            datos de la empresa y textos de Inicio
  data/servicios.ts       contenido y SEO de los 8 servicios
  layouts/Base.astro      <head>, SEO y JSON-LD
  pages/index.astro       Inicio
  pages/servicios/[slug].astro   plantilla de servicio
  pages/404.astro
  styles/global.css       todos los estilos
docs/                     prompts de Claude Design y esta bitácora
```

## Comandos

- `npm run dev`: ver el sitio en local.
- `npm run build`: genera `dist/`.
- Despliegue: subir el contenido de `dist/` a `public_html` (incluido `.htaccess`, que es un archivo oculto).

## Verificación hecha

- Build correcto.
- Capturas revisadas en escritorio (1440 px) y móvil (390 px): Inicio completo y la página de servicio "Extintores".
- Sin probar en vivo: autoplay y swipe del slider, menú móvil, carruseles. Las otras 7 páginas de servicio usan la misma plantilla pero no se capturaron una por una.

---

## Sesión 3 (05/10/2026): primeras fotos

- Creado `src/data/fotos.ts`: ahí se registra cada imagen (hero de Inicio por posición, hero y galería de servicio por slug). Lo que no esté registrado sigue como marcador.
- Conectada `src/assets/fotos/hero-extintores.png` en el slide 01 de Inicio y en el hero de `/servicios/extintores-inspeccion-y-recarga/`. Verificado con capturas en escritorio.
- Conectada `src/assets/fotos/hero-redes-de-agua.png` en el slide 02 de Inicio y en el hero de `/servicios/redes-de-agua-contra-incendio/`. Verificado con capturas en escritorio y móvil.
- Conectada `src/assets/fotos/hero-gabinetes.png` en el slide 03 de Inicio (gabinetes no tiene página de servicio propia). Verificado en escritorio y móvil.
- Conectada `src/assets/fotos/hero-deteccion.png` en el slide 04 de Inicio y en el hero de `/servicios/deteccion-de-incendios/`. Verificado en escritorio y móvil.
- Conectada `src/assets/fotos/hero-supresion.png` en el slide 05 de Inicio y en el hero de `/servicios/supresion-equipos-pesados/`. Verificado en escritorio y móvil.
- Hero de Inicio completo (5 de 5). Hero de servicio: 4 de 8; faltan capacitación, venta de extintores, cámaras y EPP.
- Fotos restantes: 35 de 44: 4 hero de servicio, 5 extintores del carrusel, brigada, mina y 24 de galería.
- Reemplazada la imagen de redes de agua por una nueva (gabinete, válvulas, rociador e hidrante); mismo archivo `hero-redes-de-agua.png`.
- Hero de Inicio: las imágenes apaisadas (slides 02 a 05) usan una caja más ancha (`.slide__img--wide`, se aplica sola cuando ancho/alto > 1,2) y se montan un poco sobre el panel rojo. Quedan cerca de 30 % más grandes en escritorio y 15 % en móvil. Verificado a 1440, 1100 y 390 px.
- Nueva página `/politica-de-privacidad/` (`src/pages/politica-de-privacidad.astro`), enlazada desde el footer. Es un borrador redactado por Claude según la Ley N.º 29733: falta revisión legal. Usa el correo `seguridadportugal@gmail.com` (definido en `src/data/site.ts`).
- Prueba en navegador real (Edge automatizado, escritorio 1440 px y móvil 390 px con táctil): 47 de 47 comprobaciones correctas. Cubrió slider (flechas, indicadores, autoplay, pausa, swipe), menú móvil, carruseles, animaciones de aparición, anclas del menú, enlaces internos de las 10 páginas, 404, movimiento reducido, ausencia de scroll horizontal y de errores de consola. Solo Edge/Chromium; no se probó Safari ni Firefox.
- Carrusel de extintores de Inicio: conectadas las 5 fotos (`extintor-pqs`, `extintor-co2`, `extintor-agua`, `extintor-espuma`, `extintor-acetato`, todas `.png` en `src/assets/fotos/`), registradas en `fotosProductos` de `src/data/fotos.ts`. Los originales venían con fondo claro opaco; Claude les quitó el fondo con un script (relleno desde los bordes sobre píxeles claros y sin color, conservando la sombra como negro translúcido). Verificado en escritorio y móvil.
- Fotos restantes: 30 de 44: 4 hero de servicio (capacitación, venta de extintores, cámaras, EPP), brigada, mina y 24 de galería. Brigada y mina aún no leen de `fotos.ts`.
- Sección "Nuestros servicios" de Inicio rediseñada según la nueva versión de `Inicio Full Width.dc.html` en Claude Design (variante `acordeon`, la que trae por defecto; la variante `lista` del mismo archivo no se implementó). Son 8 paneles oscuros: el activo se expande y muestra norma, título, descripción y "Ver servicio"; los demás muestran el título en vertical. En escritorio se abre al pasar el mouse o con el teclado; en táctil el primer toque abre y el segundo navega. Bajo 900 px los paneles se apilan. Estilos `.acc*` en `global.css`, lógica en `PageScripts.astro`. Probado en Edge automatizado (1440 y 390 px).
- El acordeón agrega 8 fotos de fondo nuevas (una por servicio, foto real a sangre, no recorte). Se registran en `fotosServicioTarjeta` de `src/data/fotos.ts`, por slug.
- Por decisión de Mateo, el acordeón reutiliza los recortes del hero en vez de fotos nuevas: detección, redes de agua, extintores y supresión usan su imagen de hero; venta de extintores usa el recorte del CO₂. Se marcan con `recorte: true` en `fotosServicioTarjeta` y se muestran enteros en una caja de tamaño fijo (`.acc__img--recorte`); el panel cerrado deja ver solo la franja central. Sin `recorte`, la foto llena el panel. Verificado en escritorio y móvil.
- Conectada `src/assets/fotos/hero-capacitacion.png` (instructor con pantalla) en el panel de capacitación del acordeón y en el hero de `/servicios/capacitacion-contra-incendios/`. Verificado en escritorio.
- Conectada `src/assets/fotos/hero-epp.png` en el panel de EPP del acordeón y en el hero de `/servicios/seguridad-industrial-y-epp/`. Verificado en escritorio y móvil.
- Acordeón: 7 de 8 paneles con imagen; solo cámaras sigue como marcador.
- Conectada `src/assets/fotos/proyectos-mina.jpg` (estación contra incendios en planta minera al atardecer) en la sección "Proyectos" de Inicio, registrada como `fotoProyectos`. `ImageSlot` acepta ahora `position` para elegir qué parte se conserva al recortar; aquí va en `30% center` para mantener el gabinete. Verificado en escritorio y móvil.
- Agregado un sexto slide al hero de Inicio: "06 · CÁMARAS — Cámaras de seguridad" (datos en `slides` de `src/data/site.ts`; el contador y los indicadores se ajustan solos). Textos redactados por Claude a partir de la página del servicio. Sin imagen todavía: muestra marcador. Su imagen se registra en la posición 6 de `fotosHero`.
- Conectada `src/assets/fotos/brigada-mina.jpg` (dos brigadistas inspeccionando gabinete y siamesa en mina a tajo abierto) en la sección "Por qué Portugal" de Inicio, registrada como `fotoBrigada`. El encuadre va por CSS (`.why__photo img`): 58 % en dos columnas, 70 % en una, para que los dos brigadistas salgan enteros. Verificado en escritorio y móvil.
- Inicio ya no tiene marcadores salvo el slide 06 (cámaras).
- Páginas de servicio: la sección "Otros servicios" ya no es un carrusel de tarjetas; usa el mismo acordeón de Inicio, con 7 paneles (se excluye el servicio de la página). El acordeón se movió a `src/components/ServiciosAcordeon.astro` (prop `excluir`), que usan Inicio y la plantilla de servicio. Se eliminaron los estilos `.others`/`.other`. Probado en las 8 páginas (7 paneles, sin el actual), hover, clic y toque en móvil.
- Botón flotante de WhatsApp: el texto "WA" del diseño se reemplazó por el ícono de WhatsApp (SVG en `Footer.astro`) sobre el verde de la marca (#25D366).
- **Libro de Reclamaciones virtual** (pedido por Mateo):
  - Página `/libro-de-reclamaciones/` (`src/pages/libro-de-reclamaciones.astro`) con la hoja de reclamación: datos del consumidor, bien contratado, detalle y pedido, reclamo o queja, menor de edad con apoderado, consentimiento.
  - Distintivo en el footer de todas las páginas (`src/components/LibroIcono.astro`). Es un SVG redibujado por Claude: el archivo entregado medía 60×48 px y se veía borroso.
  - Backend en PHP: `public/api/reclamo.php`. Valida, asigna número correlativo por año (`2026-000001`), guarda cada hoja como JSON en `api/_reclamos/<año>/` y envía correo al proveedor y copia al consumidor. La carpeta `_reclamos` tiene `.htaccess` que niega el acceso por web. Trampa oculta contra bots. Funciona también sin JavaScript.
  - Primer código de servidor del sitio: requiere PHP en el hosting (cPanel lo trae). Configuración al inicio de `reclamo.php`: correo del proveedor y remitente `no-responder@contraincendioportugal.com`.
  - Política de privacidad actualizada (secciones 2 y 3) para incluir los datos del Libro.
  - Probado en local con PHP 8.2 de XAMPP: validación, número correlativo, registro guardado, mensaje de éxito, escritorio y móvil. **No probado:** envío real de correo (en local no hay servidor de correo) ni el bloqueo de `_reclamos` por `.htaccess`; ambos solo se pueden verificar en el hosting.
  - Se agregó la regla global `[hidden] { display: none !important; }` en `global.css`.
- Conectada `src/assets/fotos/hero-camaras.png` (tres cámaras: bala, domo y PTZ) en el slide 06 del hero, el hero de `/servicios/camaras-de-seguridad/` y el panel de cámaras del acordeón. Verificado en escritorio (hero y acordeón) y móvil (hero).
- Inicio ya no tiene ningún marcador. Acordeón: 8 de 8 paneles con imagen.
- Fotos restantes: 25: hero de la página "Venta de extintores" y 24 de galería (3 por servicio).

---

## Siguiente sesión: fotos

Todas las imágenes son marcadores (cuadro punteado con texto). Total: 44.

### Inicio (12)

| Lugar | Cantidad | Tipo |
|---|---|---|
| Hero, una por slide | 5 | PNG recortado sin fondo: extintor rojo, válvula de hidrante, gabinete con manguera, detector o panel de alarma, camión minero |
| Carrusel de extintores | 5 | PNG recortado sin fondo: PQS, CO₂, agua presurizada, espuma, acetato de potasio |
| "Por qué Portugal" | 1 | Foto: brigada o técnicos en campo |
| Proyectos | 1 | Foto: operación minera o instalación en mina |

### Servicios (32)

Por cada uno de los 8 servicios: 1 imagen de hero (PNG recortado sin fondo) y 3 fotos de trabajo en campo para la galería.

### Cómo se conectan

1. Guardar las imágenes en `src/assets/fotos/` (Astro las optimiza a WebP al compilar).
2. El componente `ImageSlot` ya acepta la foto: se importa la imagen y se pasa en `src` junto con un `alt` descriptivo. Sin `src` muestra el marcador.
3. Registrar la imagen en `src/data/fotos.ts`. Hero de Inicio y páginas de servicio ya leen de ahí; falta conectar igual el carrusel de extintores, "Por qué Portugal" y Proyectos de Inicio.

Recomendaciones: recortes en PNG con transparencia, fotos en JPG, ancho mínimo de 1600 px, nombres descriptivos sin espacios (por ejemplo `extintor-pqs.png`, `extintores-galeria-1.jpg`).

## Pendientes

1. **Fotos**: las 44 de arriba. No publicar con marcadores.
2. **Dominio**: confirmado por Mateo el 05/10/2026: `https://contraincendioportugal.com` ("incendio" en singular). Configurado en `astro.config.mjs` y `public/robots.txt`.
3. **Política de privacidad**: publicada como borrador. Falta revisión legal y reemplazar el correo Gmail por uno del dominio cuando exista.
4. **Validar con el cliente**:
   - "personal certificado" y la entrega de "Certificado" (paso 04 de "Cómo trabajamos").
   - Lista real de productos de EPP; los ítems actuales son genéricos.
   - En cámaras y EPP la "normativa" muestra `CCTV` y `EPP`, que no son normas.
   - Cifras de Inicio: +20 años, 12 clientes corporativos, 8 líneas de servicio, 7 regiones.
5. **Texto corto en servicios**: unas 150 palabras por página. Para posicionar mejor conviene ampliar con preguntas frecuentes, sectores y proyectos relacionados (el alcance lo preveía; el diseño no lo incluye).
6. **Botón de WhatsApp**: resuelto, ya usa el ícono.
7. **Página listado `/servicios/`**: no existe; el menú "Servicios" lleva a la sección de Inicio.
8. **Probar en Safari (iPhone) y Firefox** antes de publicar; Edge/Chromium ya está probado.
9. **Después de publicar**: alta en Google Search Console (enviar `sitemap-index.xml`) y en Google Business Profile con la dirección de Cerro Colorado.
10. **Repositorio**: el proyecto no está en git todavía.
11. **Libro de Reclamaciones, al publicar**: crear la cuenta `no-responder@contraincendioportugal.com` en cPanel; enviar una reclamación de prueba y confirmar que llegan ambos correos; abrir `https://contraincendioportugal.com/api/_reclamos/contador-2026.txt` y confirmar que responde 403; confirmar con el cliente a qué correo deben llegar las reclamaciones. Validar el texto con su asesor legal. Las hojas quedan en el servidor: no borrar `api/_reclamos/` al volver a subir el sitio.
