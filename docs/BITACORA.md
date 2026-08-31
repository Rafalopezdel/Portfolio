# Bitácora

> Entrada nueva **arriba**. Formato en `CLAUDE.md §4`.

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
| **C** | Hero, "Sobre mí", skills en chips, currículum reordenado. ES y EN en el mismo cambio | ⬜ |
| **D** | Los 4 proyectos: 3 páginas nuevas (JPR Academy, Café Montelargo, GCPFM), reescritura del asistente, retiro de CalendarioApp y Website Corporativa, borrado de `project5.html` del repo y del servidor. Fila secundaria con `lopezoft.co` y `nutrexcol.com` | ⬜ |
| **E** | **Hoja de vida**: regenerar el CV en PDF para que concuerde con el portafolio (mismo posicionamiento, mismos proyectos, mismas cifras) y sustituir el de 4 MB | ⬜ |

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
