# Bitácora

> Entrada nueva **arriba**. Formato en `CLAUDE.md §4`.

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
