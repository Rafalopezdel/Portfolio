# Bitácora

> Entrada nueva **arriba**. Formato en `CLAUDE.md §5`.

## 2026-09-01 — URL de LinkedIn sin tilde, y Search Console en marcha

- **Qué se hizo:** la URL de LinkedIn tenía tilde (`/in/rafael-lópez-delgado`), lo que la
  rompe al pegarla en formularios, correos y ATS que no normalizan Unicode. Rafael la cambió
  en LinkedIn a `/in/rafaellopezdelgado` y aquí se propagó a las **16 apariciones**:
  `index.html` (JSON-LD `sameAs`, iconos del hero, del footer y de la tarjeta de contacto),
  `README.md` y los dos HTML de `cv/`. Los PDF se **regeneraron** con `bash cv/generar.sh`
  (2 páginas, 305 y 302 KB, texto extraíble para los ATS) y se comprobó que tanto el texto
  visible como el `<a href>` incrustado apuntan a la URL nueva.
- **Google Search Console: verificado**, y el `sitemap.xml` procesado con las 5 URL
  detectadas. La verificación es por `<meta name="google-site-verification">` en el `<head>`
  de `index.html`: **si esa etiqueta desaparece, Google revoca la propiedad.**
- **Archivos tocados:** `index.html`, `README.md`, `cv/cv-es.html`, `cv/cv-en.html`,
  `assets/pdf/CV-…-{ES,EN}.pdf`.
- **¿Desplegado?:** sí. Respaldo en `backup-portfolio-2026-09-01-1135.tgz`. Verificado en
  vivo: la URL nueva en el HTML servido y en los dos PDF descargados del servidor.
- **Siguiente paso:** fase 2 — el kit de perfiles (LinkedIn, Get on Board, Torre, Workana),
  que vive en `C:\Rafaelpps\empleo\` y **no** en este repo, que es público. Pendiente
  también borrar `assets/js/tailwind.3.4.17.min.js` (407 KB), ya sin referencias.


## 2026-09-01 — Fase 1 de visibilidad: Tailwind compilado, SEO técnico y dos bugs

- **Qué se hizo:**
  - **Tailwind ya no se compila en el navegador.** Se pasó del Play CDN servido en local
    (**407 KB de compilador JIT en cada visita, en las 5 páginas**) a un CSS estático de
    **52 KB** (~10 KB con el gzip del `.htaccess`). Fuente: `tailwind.config.js` +
    `src/tailwind.css`; salida `assets/css/tailwind.css`, versionada. `deploy.sh` la
    **recompila en cada despliegue**, así que no existe el caso de subir el CSS viejo.
    Es el primer paso de build del proyecto; se planteó y se aprobó antes de hacerlo.
  - La `tailwind.config` que estaba **repetida en línea en los cinco HTML** pasa a un solo
    archivo. Las páginas de `projects/` no traían el `screens` con `lg: 980px`; ahora lo
    heredan, lo que solo mueve padding y una rejilla de dos columnas 44 px antes.
  - `robots.txt` y `sitemap.xml` (5 URL), monolingües en español a propósito.
  - **Decisión cerrada: el sitio es monolingüe para los buscadores.** No se sirve `/en/`
    aparte ni se pone `hreflang`. El conmutador ES/EN se queda como comodidad de interfaz.

- **Dos bugs encontrados de paso, los dos silenciosos:**
  1. **El menú móvil llevaba tiempo sin fondo.** Usaba `bg-slate-900/98` y
     `dark:bg-slate-950/98`, y **98 no está en la escala de opacidad de Tailwind**, así que
     nunca se generó la regla — con el CDN fallaba exactamente igual. Corregido a `/95`.
     Se auditaron los 25 modificadores de opacidad del sitio: eran los dos únicos rotos.
  2. **`deploy.sh` no sellaba `?v=` en las páginas de caso.** Recorría
     `projects/project*.html` y esos archivos no existen (se llaman `asistente-whatsapp.html`,
     `cafe-montelargo.html`, `gcpfm.html`, `jpr-academy.html`), así que llevaban meses
     congeladas en `?v=devD2`: con la caché de un mes, ningún cambio de `custom.css` ni de
     `translations.js` llegaba a quien ya las hubiera visitado. Patrón corregido a
     `projects/*.html`.

- **Cómo se verificó:** las 5 páginas comparadas en Chrome contra el sitio en vivo, en tema
  claro y oscuro y en los dos idiomas; auditoría de todas las clases del HTML contra el CSS
  compilado (los iconos que salen de `translations.js` son Font Awesome, ajenos al purgado);
  `verificar-traducciones.js` y `verificar-claves-html.js` en verde.

- **Archivos tocados:** `package.json`, `tailwind.config.js`, `src/tailwind.css`,
  `assets/css/tailwind.css`, `index.html`, `projects/*.html`, `deploy.sh`, `.gitignore`,
  `robots.txt`, `sitemap.xml`, `CLAUDE.md`, `docs/ARQUITECTURA.md`, `docs/DESPLIEGUE.md`.
  En `index.html` entra además el `<meta name="google-site-verification">`, que **no se borra**.
- **¿Desplegado?:** sí. Respaldo previo en `backup-portfolio-2026-09-01-1119.tgz`. Verificado
  en vivo: las 6 URL a 200, cero referencias al compilador viejo, y el meta de verificación
  de Search Console presente en el `<head>`.
- **Siguiente paso:** Rafael pulsa *Verificar* en Google Search Console (el meta ya está en
  vivo) y envía el sitemap; alta en Bing Webmaster Tools; y en la siguiente sesión borrar
  `assets/js/tailwind.3.4.17.min.js` (407 KB) del repo y del servidor — se deja un ciclo
  como seguro para quien tenga el HTML viejo en caché. Después, fase 2: el kit de perfiles.


## 2026-08-31 — Cierre: `script.js` eliminado y sesión cerrada

- **Qué se hizo:** borrado `script.js` del repo, del `INCLUIR` de `deploy.sh`, de las líneas
  comentadas de `index.html` y del servidor (devuelve 404, comprobado). Era un duplicado
  de funciones que ya viven en `assets/js/main.js`, estaba comentado en todos los HTML desde
  hacía meses y apuntaba al PDF de CV eliminado en la fase E. **Cero referencias vivas** —
  comprobado función por función antes de borrarlo. Queda en el historial de git.
- La regla 1 de `CLAUDE.md` ("no descomentes `script.js`") desaparece: ya no hay nada que
  descomentar. `CLAUDE.md` gana además una sección **§2 ESTADO** para que una sesión nueva
  sepa en dos minutos dónde está todo.
- **¿Desplegado?:** sí.

### Cómo quedó el portafolio

| Fase | Qué |
|---|---|
| A | Favicon, foto, metadatos, Open Graph · `assets/img` 10 MB → 832 KB |
| B | Montserrat + Inter, paleta de marca, acento adaptativo por superficie |
| C | Hero con prueba verificable, "Sobre mí", skills agrupados, currículum |
| D | Cuatro casos con plantilla común y nombres con significado |
| E | Hoja de vida en ES y EN, generada desde `cv/` |

**En producción:** `assets/img` 832 KB · `assets/pdf` 616 KB · `translations.js` 42 KB.

### 🔜 Siguiente sesión: visibilidad

El sitio está presentable; **no está siendo encontrado**. Nada de esto existe todavía:

- `sitemap.xml` y `robots.txt`.
- Alta en Google Search Console y en Bing Webmaster Tools.
- `hreflang` para las dos versiones de idioma (hoy Alpine cambia el texto sin cambiar la URL:
  **Google solo indexa la versión española**). Es la decisión técnica de más peso pendiente.
- Perfil de LinkedIn alineado con el nuevo posicionamiento y con los cuatro casos.
- Alta en plataformas de trabajo (Upwork, Torre, Get on Board…) y de empleo.

**⚠️ El problema de fondo del bilingüe:** el contenido en inglés **no tiene URL propia**, así
que para un buscador este sitio es monolingüe. Resolverlo pasa por servir `/en/` como página
aparte, y eso es un cambio de arquitectura, no un ajuste. Hay que decidirlo antes de tocar SEO.


## 2026-08-31 — Fase E: la hoja de vida

- **Qué se hizo:**
  - **El CV se genera, ya no se edita a mano.** La fuente vive en `cv/` (`cv-es.html`,
    `cv-en.html`, `cv.css`, `generar.sh`) y **no se despliega**. `bash cv/generar.sh` produce
    los dos PDF con Chrome en modo headless, respetando el CSS de impresión.
  - **De 3 páginas y 4 MB a 2 páginas y ~305 KB**, en español **e inglés**. Misma tipografía
    (Montserrat + Inter) y misma paleta que el sitio: quien vea los dos ve un solo sistema.
  - **Contenido alineado con el portafolio.** Fuera "+3 años de experiencia" (son cuatro) y
    fuera la lista de proyectos de curso. Dentro: los cuatro casos con sus cifras —25 mensajes
    a 12 pacientes, 9 de 10 pases Elite, el 2% de recargo eliminado, 192 CTA normalizadas— y
    los dominios en vivo.
  - **La experiencia describe el rol; los proyectos van en su propia sección.** Antes se
    repetían en los dos sitios y la segunda página quedaba medio vacía.
  - **El botón de descarga elige el idioma solo**, leyendo `localStorage.getItem('lang')`.
    Los dos botones (hero y "Sobre mí") quedan enganchados.
  - El PDF viejo, borrado del repo **y del servidor** (devuelve 404, comprobado).
    `assets/pdf/` en producción: **4,6 MB → 616 KB**.
- **Archivos tocados:** `cv/*` (nuevos), `assets/pdf/*`, `assets/js/main.js`,
  `docs/{ARQUITECTURA,CONTENIDO}.md`.
- **¿Desplegado?:** **sí**. Respaldo previo: `~/backup-portfolio-2026-08-31-1710.tgz`.

### Tres decisiones de diseño del CV que conviene no deshacer

1. **Una sola columna.** Los ATS parsean mal las maquetas a dos columnas. El CV más bonito
   que no pasa el filtro no sirve de nada.
2. **El texto tiene que ser extraíble.** `generar.sh` lo comprueba y falla si el PDF trae
   menos de 3.000 caracteres legibles o si se pasa de 2 páginas. Chrome incrusta las fuentes
   como Type3, que suena mal pero deja la capa de texto intacta: verificado, 5.491 caracteres
   en la versión ES.
3. **Las cifras del CV y las del portafolio son las mismas.** Si cambia una en
   `translations.js`, hay que cambiarla aquí. Un CV que contradice la web hace daño.

### Dato que hay que decidir

⚠️ **El nivel de inglés.** El CV viejo decía *"Inglés: Básico (en desarrollo)"*. Lo redacté
como **"lectura técnica y comunicación escrita; trabajo hoy con un cliente en Reino Unido.
Nivel conversacional en desarrollo"** — que es honesto y respaldado por GCPFM. **Si el nivel
real es distinto, hay que corregirlo**: es lo primero que se comprueba en una entrevista.

⬜ **`script.js` quedó roto** (apunta al PDF eliminado). No rompe nada porque está comentado
en todos los HTML, pero es código muerto que se sigue desplegando. Ver deuda 6 en
`ARQUITECTURA.md`.


## 2026-08-31 — Fase D: los cuatro proyectos

- **Qué se hizo:**
  - **Cuatro casos, no seis.** En el portafolio quedan: **Asistente de WhatsApp con IA**,
    **JPR Academy**, **Café Montelargo** y **GCPFM**. Cada uno prueba algo distinto —IA
    aplicada, plataforma con pagos y cupos, e-commerce headless, cliente internacional—.
  - **Fuera** CalendarioApp y Website Corporativa (proyectos de curso, superados por los
    reales) y `project5.html`, que además estaba roto: apuntaba a `webCorporativa1.png`,
    un archivo que nunca existió.
  - **Nutrexcol y lopezoft.co** pasan a una fila secundaria "Otros trabajos", como enlaces.
    Nutrexcol no es tarjeta: solo se maquetó, no se opera, y `casos.md` lo descarta como caso.
  - **Nombres de archivo con significado**: `projects/asistente-whatsapp.html`,
    `jpr-academy.html`, `cafe-montelargo.html`, `gcpfm.html`. Ya no hay que abrir
    `project3.html` para averiguar de qué proyecto habla.
  - **Una sola plantilla.** Las cuatro páginas viejas habían divergido (una tenía
    "Integraciones clave", otra "¿Por qué Divi?"), así que mantenerlas era mantener cuatro
    estructuras. Las nuevas son idénticas en forma: *El problema → Lo que construí →
    El resultado → Stack y galería → Enlace al sitio*. Esa estructura sale de
    `apps/lopezoft/_spec/casos.md` y es la que un reclutador puede leer en diagonal.
  - **Traducciones**: los bloques `project1..project4` se sustituyen por un único `casos`
    con los cuatro. De paso se eliminaron `projectDetail` y `common`, que quedaron
    huérfanos. **`translations.js`: 67 KB → 42,5 KB.**
- **Archivos tocados:** `index.html`, `assets/js/translations.js`,
  `projects/{asistente-whatsapp,jpr-academy,cafe-montelargo,gcpfm}.html` (nuevos),
  `projects/project{1..5}.html` (eliminados), `scripts/verificar-traducciones.js`.
- **¿Desplegado?:** **sí**. Las cinco páginas viejas **borradas también del servidor** y
  comprobado que devuelven 404. Respaldo previo: `~/backup-portfolio-2026-08-31-1350.tgz`.
- **Siguiente paso:** fase E — la hoja de vida.

### Reglas de privacidad aplicadas

- **La clínica odontológica no se nombra.** El caso se cuenta con cifras agregadas
  (25 mensajes a 12 pacientes en 7 días) y sin un solo dato de paciente. La página dice
  explícitamente que no hay demo pública porque opera sobre datos de salud.
- **El precio que paga Café Montelargo no aparece**, ni como cifra ni como rango.
- La captura de WhatsApp que se usa lleva el nombre del odontólogo difuminado en origen.

### Dos cosas que aparecieron

1. **`fa-user-headset` es un icono de Font Awesome Pro**, no de la versión gratuita: salía
   un cuadro vacío. Se cambió por `fa-headset`. Hay un chequeo rápido para esto en
   `docs/CONTENIDO.md` — mide si la clase tiene glifo antes de darla por buena.
2. **El verificador de traducciones marcaba como error un valor vacío legítimo.** Tres casos
   no tienen párrafo de cierre y su clave `cierre` está vacía **en los dos idiomas**, que es
   deliberado. Ahora solo avisa cuando está vacío en **una sola** rama, que es el fallo real.


## 2026-08-31 — Fase C: contenido

- **Qué se hizo (ES y EN en el mismo cambio):**
  - **Hero.** El subtítulo era una lista de tecnologías ("MERN Stack • WordPress • IA
    Solutions") y la bajada, relleno. Ahora: rol + una afirmación de lo que hace, y debajo
    una **franja "En producción hoy"** con los cuatro dominios vivos, enlazados. Un
    reclutador puede verificarlo de un clic, que es lo que hace la diferencia.
  - **CTA doble:** "Ver proyectos" (sólido) + "Descargar CV" (contorno) + "Contáctame" como
    enlace. El CV ya no está escondido a media página.
  - **Sobre mí reescrito.** Fuera el "+3 años" (son cuatro) y el texto genérico de perfil.
    Dentro: qué opera hoy, el ciclo completo que cubre, y G3 contado como ventaja —seis años
    dirigiendo una empresa— en vez de como "skills transferibles".
  - **Fuera el cumpleaños** (dato innecesario y vector de sesgo en selección) y **fuera la
    tarjeta de Intereses**. En su lugar, **"Qué construyo"**: IA aplicada, e-commerce
    headless, plataformas a medida y operación.
  - **Skills agrupados** por área (Frontend · Backend y datos · IA y automatización ·
    Infraestructura y CMS) en vez de una lista plana de 21 chips. Los profesionales, de 8 a 6.
  - **Currículum**: la entrada de Lopezoft ahora nombra los cuatro proyectos reales con sus
    cifras. Cursos y formación quedan en la columna secundaria.
- **Archivos tocados:** `assets/js/translations.js`, `index.html`, `assets/js/main.js`,
  `projects/project{1,2,3,4}.html`.
- **¿Desplegado?:** **sí**, verificado en vivo en español e inglés. Respaldo previo:
  `~/backup-portfolio-2026-08-31-1331.tgz`.
- **Siguiente paso:** fase D — los cuatro proyectos.

### Tres defectos que aparecieron por el camino y se corrigieron

1. **Tres claves de `projectDetail` faltaban en la rama `en`** (`keyIntegrations`,
   `allRightsReserved`, `viewMoreProjects`). En inglés esos textos salían **en blanco** en
   todas las páginas de proyecto. Era anterior a esta sesión.
2. **Dos contrastes se escaparon de la fase B**: `bg-primary text-white` en la insignia de
   años del currículum y en un botón de `project2`. Sobre superficie oscura eso es blanco
   sobre cian (1,9:1). Corregidos a `bg-brand`.
3. **Los emoji de bandera del selector de idioma no se dibujan en Windows.** El botón leía
   "GB EN" y "ES ES" en vez de mostrar una bandera. Sustituidos por un icono de globo + el
   código del idioma, que se ve igual en cualquier sistema.

⬜ **Asimetría que queda:** `project3.features.forms` (solo ES) y
`project3.features.diviModules` (solo EN). `project3` se retira en la fase D, así que se
resuelve sola. Hay un verificador de simetría ES/EN en `docs/CONTENIDO.md`.


## 2026-08-31 — Fase B: tipografía y paleta de marca

- **Qué se hizo:**
  - **Righteous + Work Sans → Montserrat + Inter**, en los 5 HTML, en `estilo.css` y en
    `custom.css`. Las fuentes se cargan ahora con `<link>` + `preconnect`; antes venían de un
    `@import` dentro de `estilo.css`, que obliga al navegador a descargar y parsear el CSS
    entero antes de siquiera pedirlas.
  - **Paleta teal → paleta de marca Lopezoft.** 28 colores literales sustituidos en
    `estilo.css`, variables de `custom.css` actualizadas y `tailwind.config` reescrito en los
    5 HTML.
  - **Acento adaptativo por superficie** con variables CSS (detalle en `ARQUITECTURA.md`).
    Evitó tener que editar a mano más de 300 usos de `primary` y, sobre todo, evita el caso
    prohibido por `marca.md`: azul #2563EB sobre navy, 2,5:1.
  - **Botones sólidos a color fijo** (`bg-brand`): sobre superficie oscura el acento es cian
    y blanco sobre cian es ilegible. De paso, el CTA dejó de ser un degradado y quedó sólido
    — se ve más serio.
  - **Versionado `?v=` de los assets propios**, sellado automáticamente por `deploy.sh`.
- **Archivos tocados:** `index.html`, `projects/project{1..5}.html`, `assets/css/custom.css`,
  `estilo.css`, `deploy.sh`, `docs/ARQUITECTURA.md`.
- **¿Desplegado?:** **sí**, verificado en vivo en claro y en oscuro. Respaldo previo:
  `~/backup-portfolio-2026-08-31-1300.tgz`.
- **Siguiente paso:** fase C — hero, "Sobre mí", skills y currículum.

### Dos cosas que costaron y no deben repetirse

1. 🔴 **El `.htaccess` cachea CSS/JS un mes.** Media hora perdida creyendo que las variables
   CSS no funcionaban: el navegador servía la hoja vieja. Por eso existe ahora el sellado
   `?v=` en `deploy.sh`. **Si un cambio de estilo "no se ve", sospecha de la caché antes que
   del CSS.**
2. ⚠️ **Un `sed` con retroreferencia generado desde Python perdió el ``** y habría borrado
   el nombre del archivo en vez de cambiarle la versión. Se detectó probándolo en un sandbox
   antes de usarlo. La versión final no usa retroreferencia: `?v=` solo aparece en los assets
   propios, así que basta con reescribir el valor.

### ⬜ Pendiente resuelto de la fase A

✅ **Las 40 imágenes huérfanas del servidor, borradas** (autorizado por Rafael el 2026-08-31).
`assets/img` en producción: **11 MB → 832 KB**.


## 2026-08-31 — Fase A: identidad visual, metadatos y peso

Primera de las cinco fases del rediseño (ver "Plan de rediseño" al final de este archivo).

- **Qué se hizo:**
  - **Favicon** generado desde el isotipo de Lopezoft: `.ico` multitamaño + 32/192 px +
    `apple-touch-icon` 180 px. Va sobre **teja navy con esquinas redondeadas**, no sobre
    blanco: la Z azul sobre fondo claro es ilegible a 16 px en la barra de pestañas.
  - **Metadatos completos**: `description`, `canonical`, `theme-color`, Open Graph,
    Twitter Card y JSON-LD `Person`. Antes no había ninguno — al compartir el enlace no
    salía previsualización.
  - **`og.jpg` 1200×630** compuesto con PIL: foto + Montserrat/Inter + paleta de marca.
  - **`<title>` coherente**: decía "Frontend Developer & Industrial Engineer" mientras todo
    el resto del sitio decía Full Stack.
  - **Foto del hero** sustituida por la de Lopezoft, reencuadrada para círculo (cara al 40%
    de la altura) y servida con `<picture>` WebP + JPG.
  - **`assets/img`: de ~10 MB a 832 KB.** 13 imágenes convertidas a WebP y **26 eliminadas
    por no tener ninguna referencia**, entre ellas `fondo.jpg` (3,6 MB).
  - **Tailwind con ruta relativa** en los 5 HTML. La ruta absoluta `/assets/js/…` rompía el
    espejo de GitHub Pages, que sirve desde `/Portfolio/`.
  - Corregido un **falso negativo en `deploy.sh`**: `curl | grep -q` cierra la tubería antes
    de tiempo y curl devuelve error 23 aunque la comprobación sea correcta.
- **Archivos tocados:** `index.html`, `projects/project{1..5}.html`, `assets/img/*`,
  `deploy.sh`, `docs/{ARQUITECTURA,DESPLIEGUE,CONTENIDO}.md`.
- **¿Desplegado?:** **sí**, verificado en vivo. Respaldo previo en el servidor:
  `~/backup-portfolio-2026-08-31-1242.tgz` (14 MB).
- **Siguiente paso:** fase B — tipografía (Montserrat + Inter) y paleta de marca.

⬜ **Pendiente de la fase A:** quedan **40 imágenes huérfanas en producción** (~7 MB). El
borrado remoto quedó bloqueado por el clasificador de permisos. Comando en
`docs/DESPLIEGUE.md`. No afecta al sitio: ningún HTML las referencia.

---

## Plan de rediseño (aprobado el 2026-08-31)

**Decisiones cerradas:**
- **Objetivo del sitio: ambos** — empleo y clientes. Titular con afirmación + prueba,
  CTA doble, CV visible. Proyectos contados como problema → solución → resultado.
- **Clínica dental: sin nombrar, con cifras.** Nada de datos de paciente. Si algún día llega
  el OK del odontólogo, se le añade el nombre.
- **Marca: sistema visual, no logo.** Montserrat + Inter y la paleta de Lopezoft; el isotipo
  solo como favicon. Sin logo de la empresa en el header — el sitio es personal.
- ⛔ **El precio que paga Café Montelargo no se publica nunca**, ni como cifra ni como rango
  (regla dura de `apps/lopezoft/_spec/casos.md`).

| Fase | Qué | Estado |
|---|---|---|
| **A** | Favicon, foto, metadatos, Open Graph, imágenes a WebP | ✅ 2026-08-31 |
| **B** | Montserrat + Inter y paleta de marca, en `index.html` **y** las 5 páginas de `projects/` (el `tailwind.config` está duplicado en cada una) | ✅ 2026-08-31 |
| **C** | Hero, "Sobre mí", skills agrupados, currículum reordenado. ES y EN en el mismo cambio | ✅ 2026-08-31 |
| **D** | Los 4 proyectos, con nombres de archivo con significado y una plantilla común. Fila secundaria con `lopezoft.co` y `nutrexcol.com` | ✅ 2026-08-31 |
| **E** | **Hoja de vida** regenerada desde `cv/`, en ES y EN, alineada con el portafolio | ✅ 2026-08-31 |

**Proyectos elegidos para la fase D** (de los 6 revisados): Asistente WhatsApp con IA,
JPR Academy, Café Montelargo y GCPFM. Fuera: CalendarioApp y Website Corporativa (proyectos
de curso / superados), y Nutrexcol como tarjeta (solo maquetación, subcontratado para una
agencia — `casos.md` lo descarta como caso).

## 2026-08-31 — documentación, despliegue reproducible y sincronía con producción

- **Qué se hizo:**
  - `CLAUDE.md` reescrito como índice esbelto con carga bajo demanda (antes eran 12,7 KB de
    historial y solución de problemas que se leían enteros cada sesión).
  - Creados `docs/ARQUITECTURA.md`, `docs/DESPLIEGUE.md`, `docs/CONTENIDO.md` y esta bitácora.
  - Creado `deploy.sh`: respaldo en el servidor + subida por `tar` sobre SSH + permisos +
    verificación en vivo. Con guardia que aborta si algún HTML vuelve a apuntar a
    `cdn.tailwindcss.com`.
  - **Repo sincronizado con producción.** El servidor estaba *por delante*: el arreglo de
    Tailwind del 2026-08-31 se hizo directamente sobre producción y nunca bajó al repo.
    Desplegar desde el repo habría revertido el arreglo y dejado el sitio sin estilos otra
    vez. Bajado `assets/js/tailwind.3.4.17.min.js` (407 KB, md5
    `7a614b9a197e532c00d09a23b0996b5f`) y actualizada la etiqueta `<script>` en los 5 HTML.
  - `CLAUDE.md` sacado de `.gitignore`: la documentación se versiona.
- **Archivos tocados:** `CLAUDE.md`, `.gitignore`, `deploy.sh`, `docs/*`, `index.html`,
  `projects/project{1,2,3,4}.html`, `assets/js/tailwind.3.4.17.min.js` (nuevo).
- **¿Desplegado?:** no. Solo cambios locales; producción ya tenía el arreglo de Tailwind.
- **Siguiente paso:** rediseño de contenido y proyectos (revisión con criterio de reclutador).

### Estado heredado que conviene recordar

- Producción y repo **coinciden hoy** en los 5 HTML y en el Tailwind local.
- `projects/project5.html` sigue huérfano en ambos.
- Deuda de rendimiento y SEO catalogada en `docs/ARQUITECTURA.md` §Deuda conocida.
