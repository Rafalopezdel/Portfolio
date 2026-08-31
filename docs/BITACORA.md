# Bitácora

> Entrada nueva **arriba**. Formato en `CLAUDE.md §4`.

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
| **B** | Montserrat + Inter y paleta de marca, en `index.html` **y** las 5 páginas de `projects/` (el `tailwind.config` está duplicado en cada una) | ⬜ |
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
