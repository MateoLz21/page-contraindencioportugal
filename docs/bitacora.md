# Bitácora de avance: web Portugal Contra Incendios

Cliente: Portugal Seguridad Industrial Minera E.I.R.L. (Arequipa)
Objetivo: presencia en Google. El cliente no edita contenido.
Hosting: cPanel (Apache + PHP, sin Node en servidor).

---

## Estado al 18/10/2026

**Publicado** en https://contraincendioportugal.com (Mateo subió el zip el 18/10/2026).
Sitio estático en Astro: Inicio, 8 páginas de servicio, política de privacidad, Libro de Reclamaciones y 404 (12 páginas).
Batería de pruebas en Edge: 49 de 49. Próximo paso: **retroalimentación del cliente** (Mateo la espera el 19/10/2026).

Para volver a publicar: `npm run empaquetar` → subir `portugal-web-hosting.zip` a `public_html` → Extraer encima → borrar el zip.

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

### Paquete para el hosting (05/10/2026)

- Galería de las páginas de servicio: se oculta mientras el servicio no tenga fotos en `fotosServicioGaleria`; aparece sola al registrar la primera.
- Hero de `/servicios/venta-de-extintores/`: usa el recorte del extintor de CO₂ (el mismo de su panel del acordeón), provisional hasta tener otra imagen.
- Con esto no queda ningún marcador visible en el sitio. Imágenes que aún faltan y pedirá Mateo al cliente: 24 de galería (3 por servicio) y, opcional, una propia para el hero de venta de extintores.
- Batería completa en Edge automatizado sobre el build final: 49 de 49 (incluye rastreo de las 11 páginas sin enlaces rotos ni marcadores). Sin probar: Safari, Firefox y todo lo que depende del hosting.
- Paquete: `portugal-web-hosting.zip` en la raíz del proyecto (6,8 MB, ignorado por git). Es el contenido de `dist/` sin 6 PNG originales que Astro deja en `_astro/` y ninguna página usa. Para regenerarlo: `npm run build` y luego `tar -a -cf portugal-web-hosting.zip --exclude="_astro/hero-*.png" -C dist .` (el `tar` de Windows).

#### Correo: Zoho Mail (decisión de Mateo, 05/10/2026)

- Los correos corporativos van por Zoho Mail; no se usan los buzones del hosting.
- Por eso `reclamo.php` ya no usa `mail()`: envía por SMTP autenticado de Zoho con PHPMailer 7.1.1 (copiado en `public/api/lib/phpmailer/`, sin Composer).
- Credenciales en `api/config.php`, que **no** está en el repositorio ni en el zip: se crea a mano en el hosting a partir de `api/config.ejemplo.php`. Define servidor SMTP, cuenta, contraseña de aplicación, remitente y buzón destino. Protegido por `api/.htaccess`.
- Sin `config.php`, o si Zoho no responde, la hoja se guarda igual y el visitante ve su número; solo falla el correo (queda en el log de errores de PHP).
- Probado en local contra un servidor SMTP falso: autenticación, dos envíos (empresa y consumidor), cabeceras y tildes correctas; también sin configuración y con el servidor caído. **No probado contra Zoho real** (faltan cuenta y contraseña).
- Pendiente de Mateo: direcciones corporativas definitivas (remitente y destino del Libro; la política de privacidad aún muestra `seguridadportugal@gmail.com`, en `src/data/site.ts`).

#### Pasos para publicar en cPanel

1. Activar el certificado SSL del dominio (AutoSSL) antes de subir: el `.htaccess` redirige todo a HTTPS.
2. MultiPHP Manager: PHP 8.1 o superior.
3. Correo en Zoho, no en cPanel: en Zoho crear la cuenta que enviará (por ejemplo `reclamos@`) y generar una contraseña de aplicación. En cPanel → Enrutamiento de correo: "Intercambiador de correo remoto". En el DNS: registros MX, SPF y DKIM que indica Zoho.
4. Administrador de archivos → `public_html` → subir `portugal-web-hosting.zip` → Extraer → borrar el zip. Activar "mostrar archivos ocultos" para ver `.htaccess`.
5. Crear `public_html/api/config.php` copiando `config.ejemplo.php` y completar cuenta, contraseña de aplicación, remitente y destino.
5b. Comprobar: el sitio carga con candado; `http://` y `www.` redirigen; una URL inexistente muestra la página 404; `/api/_reclamos/.htaccess` responde 403.
6. Enviar una reclamación de prueba y confirmar que llegan los dos correos; luego abrir `/api/_reclamos/contador-2026.txt` y confirmar 403.
7. En actualizaciones posteriores: no borrar `public_html/api/_reclamos/` (hojas de reclamación) ni `public_html/api/config.php` (credenciales). Extraer el zip encima no los toca. Si los correos no salen, revisar que el hosting permita conexiones salientes al puerto 465 o 587.
8. Google Search Console: verificar el dominio y enviar `sitemap-index.xml`. Google Business Profile.

## Sesión 4 (18/10/2026): galería y logo nuevo

- **Galería** en Inicio (`#galeria`, entre Proyectos y Clientes) con las 8 fotos de campo que entregó Mateo, en `src/assets/galeria/` (convertidas de PNG a JPG). Datos y pies de foto en `src/data/galeria.ts`; componente `src/components/Galeria.astro`. Mosaico en columnas (3 en escritorio, 2 en móvil) que respeta la proporción de cada foto; el borde inferior queda desparejo porque las proporciones no permiten columnas iguales sin recortar. Visor a pantalla completa con flechas, teclado, deslizar y Esc; sin JavaScript el enlace abre la foto grande. Enlace "Galería" agregado al menú.
- Para que entren seis enlaces, el menú usa separación variable y entre 1100 y 1279 px se oculta el teléfono de emergencias del header (sigue en el menú móvil, el botón Cotizar y el pie).
- **Logo nuevo**: Mateo dijo que lo entregaría; se tomó `Downloads/PORTUGAL LOGO.jpg.jpeg` (guardado ese día). Venía con el tablero de "transparencia" pintado; Claude lo quitó por script. Se pierde el filete blanco entre la llama y la P (queda transparente; sobre fondo blanco no se nota). Archivos: `src/assets/logo-portugal.png` (completo) y `src/assets/logo-isotipo.png` (solo la P). El header usa la P junto al texto PORTUGAL / CONTRA INCENDIOS; también regenerados `favicon.png`, `favicon.ico` (nuevo), `apple-touch-icon.png` y `og.jpg` (logo completo sobre blanco). Se borró `logo-recorte.jpg`; el medallón original sigue en `src/assets/` sin uso.
- Mateo entregó después el logo con transparencia real (`Downloads/Logotipo Portugal Seguridad contra incendios.png`). Reemplaza al anterior en `logo-portugal.png`, `logo-isotipo.png`, favicons, ícono táctil y `og.jpg`; recupera el filete blanco entre llama y P.
- Novena foto en la galería: `cilindros-supresion-motor.jpg` (dos cilindros de supresión junto al motor de un equipo minero).
- Empaquetado ahora con `npm run empaquetar` (build + `scripts/empaquetar.mjs`), que quita de `dist/_astro/` toda imagen original que ninguna página usa. Zip: 12,3 MB.
- Batería completa: 49 de 49. Galería y visor probados en 1440, 1100 y 390 px.
- Para revisar con el cliente: varias fotos muestran la marca ANSUL (el alcance pide mostrar marcas solo si son distribuidores o instaladores autorizados); la polera de una foto trae un segundo teléfono, 997 023 976, que no figura en el sitio; pies de foto redactados por Claude.

## Sesión 5 (18/10/2026): redes, clientes, sin "Emergencias 24/7"

- **Redes sociales**: botones redondos con ícono en el pie de todas las páginas y en el bloque de datos de Contacto (`src/components/Redes.astro`). Enlaces en `redes` de `src/data/site.ts`; las que tienen `url` vacía no se muestran. TikTok: `https://www.tiktok.com/@contraincendioportugal`. **Faltan los enlaces de Facebook e Instagram** (Mateo no los dio). También van al JSON-LD como `sameAs`.
- **Sin "Emergencias 24/7"** (pedido de Mateo): se quitó el bloque de teléfono del header; en el menú móvil el enlace quedó como "Llamar · +51 932 481 153". El teléfono sigue en Cotizar, Contacto y WhatsApp.
- **Clientes**: carrusel continuo de derecha a izquierda (45 s por vuelta, se pausa con el mouse; con movimiento reducido queda fijo). Por ahora con nombres. `clients` en `site.ts` acepta `logo` opcional por cliente: al asignarlo se muestra el logo en gris y en color al pasar el mouse.
- Batería: 49 de 49. Zip regenerado.
- Correo de contacto: `info@contraincendioportugal.com` (pedido de Mateo). Reemplaza a `seguridadportugal@gmail.com` en `site.email`: aparece en el bloque de Contacto (fila propia, enlace mailto), en la política de privacidad y en el JSON-LD. También es el `destino` de ejemplo del Libro de Reclamaciones en `config.ejemplo.php` (el `config.php` real del hosting se llena a mano).
- Botón "Cotizar" del header: ya no lleva a #contacto; abre WhatsApp en pestaña nueva con "Hola, quisiera una cotización" (en las páginas de servicio, "…de <servicio>"). Prop `waHref` en `Header.astro`. El enlace "Contacto" del menú sigue llevando a la sección.
- **Error al subir (cPanel: "End-of-central-directory signature not found")**: `scripts/empaquetar.mjs` llamaba a `tar` sin ruta y Node tomaba el de Git (GNU), que ignora `-a` y generaba un .tar con nombre .zip. Corregido: usa `%SystemRoot%System32	ar.exe` con `--format=zip`, guarda las entradas sin prefijo `./` y aborta si el archivo no empieza con la firma de zip. Verificado con `unzip -t` (Info-ZIP, el mismo que usa cPanel) y extrayendo.
- Imagen de supresión reemplazada por una nueva (dos cilindros sobre base roja, mangueras y módulo de control), mismo archivo `hero-supresion.png`: cambia en slide 05, hero de `/servicios/supresion-equipos-pesados/` y panel del acordeón. Verificado en los tres.

---

## Imágenes

Registro central en `src/data/fotos.ts` (hero, acordeón, carrusel, Proyectos, Por qué Portugal) y `src/data/galeria.ts` (galería). Sin imagen registrada se ve un marcador; hoy no queda ninguno visible.

Faltan:
- **Galerías de las páginas de servicio** (3 por servicio, 24 en total). La sección está oculta mientras no haya fotos; varias de la galería de Inicio servirían (supresión y capacitación).
- **Hero propio de "Venta de extintores"** (hoy usa el recorte del CO₂).
- **Logos de clientes** para el carrusel (`clients` en `site.ts`, campo `logo`).

Recortes de producto: PNG con transparencia real. Fotos: JPG. Si llegan con fondo claro liso se puede quitar por script (como los 5 extintores del carrusel).

## Pendientes

### Esperando de Mateo o del cliente
1. **Retroalimentación del cliente** sobre el sitio publicado.
2. Enlaces de **Facebook e Instagram** (los botones aparecen solos al poner la `url` en `redes` de `site.ts`).
3. Logos de clientes; fotos para galerías de servicio.
4. Validar textos y datos:
   - "Personal certificado" y la entrega de "Certificado" (paso 04 de "Cómo trabajamos").
   - Lista real de productos de EPP (los ítems actuales son genéricos).
   - "Normativa" `CCTV` y `EPP` en cámaras y EPP: no son normas.
   - Cifras de Inicio: +20 años, 12 clientes corporativos, 8 líneas de servicio, 7 regiones.
   - Permiso para nombrar clientes y minas.
   - Marca **ANSUL** visible en fotos de la galería (el alcance pide mostrar marcas solo si son distribuidores o instaladores autorizados).
   - Segundo teléfono **997 023 976** que aparece en la polera de una foto: ¿se agrega al sitio?
   - Textos legales (política de privacidad, Libro de Reclamaciones) con su asesor.

### En el hosting (no verificado por Claude)
5. Libro de Reclamaciones: crear `api/config.php` con la cuenta de Zoho y contraseña de aplicación; enviar reclamación de prueba y confirmar los dos correos; confirmar que `/api/_reclamos/contador-2026.txt` responde 403. No borrar `api/_reclamos/` ni `api/config.php` al volver a subir.
6. Comprobar HTTPS, redirección de `www` y `http`, página 404.
7. Google Search Console (enviar `sitemap-index.xml`) y Google Business Profile.
8. Probar en Safari (iPhone) y Firefox.

### Mejoras opcionales
9. Ampliar texto de las páginas de servicio (~150 palabras): preguntas frecuentes, sectores, proyectos.
10. Página listado `/servicios/` (hoy el menú lleva a la sección de Inicio).
11. Botones "Cotizar" del hero y de productos: hoy van a Contacto; podrían abrir WhatsApp como el del header.

### Repositorio
12. Hay un solo commit ("Desarrollo web MVP terminado"); todo lo posterior (Zoho, galería, logo, redes, clientes, correo, empaquetado) está **sin commit**.
