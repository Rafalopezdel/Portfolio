# Arquitectura

> Cómo está construido el sitio y qué te va a engañar si no lo sabes.
> Verificado el **2026-08-31**.

## Stack

Casi sin build. Lo **único** que se compila es el CSS de Tailwind
(`npm run build:css`); el resto del HTML, CSS y JS se sirve tal cual.

| Capa | Qué |
|---|---|
| Reactividad | **Alpine.js 3.13.3** (CDN jsDelivr, con `defer`) |
| CSS | **Tailwind 3.4.17 compilado** → `assets/css/tailwind.css` (~52 KB, ~10 KB con gzip) |
| Iconos | Font Awesome 6.1.2 (cdnjs) |
| Animación | AOS 2.3.1 (unpkg) |
| Tipografía | Google Fonts: **Righteous** (títulos) + **Work Sans** (cuerpo) |
| Formulario | FormSubmit.co (sin backend) |

## Mapa de archivos

```
index.html            ← 1.393 líneas / 100 KB. TODA la página. Usar grep -n, no leerlo entero
estilo.css            ← BEM heredado. ⚠️ tiene reglas que ocultan <nav>
.htaccess             ← gzip, caché, forzar HTTPS, cabeceras de seguridad
cv/                   ← FUENTE del CV (html + css + generar.sh). NO se despliega
projects/asistente-whatsapp.html · jpr-academy.html
                      cafe-montelargo.html · gcpfm.html   ← misma plantilla, distinto contenido
assets/
  css/custom.css      ← variables y overrides
  js/translations.js  ← ES/EN. 42 KB. Se carga SIN defer (debe existir antes que Alpine)
  js/main.js          ← formulario, CV, scroll, toast. AppState.init() COMENTADO
  js/animations.js    ← configuración de AOS
  js/tailwind.3.4.17.min.js
  img/                ← ~10 MB. Ver "Deuda conocida"
  pdf/CV-Rafael-Lopez-Full-Stack-Developer-{ES,EN}.pdf  ← generados desde cv/
```

### Secciones de `index.html` (línea aproximada)

| Línea | Sección |
|---|---|
| 1–129 | `<head>`: metadatos, favicon, Open Graph, JSON-LD, `tailwind.config` |
| 131 | `<body x-data>` — estado global (`theme`, `lang`) |
| 157 | Header: nav de escritorio + menú móvil + selectores |
| 344 | `#inicio` — hero: foto, afirmación, franja «En producción hoy», CTAs |
| 490 | `#sobremi` — descripción, datos de contacto, «Qué construyo», botón CV |
| 655 | `#skills` — stack agrupado por área + «Cómo trabajo» |
| 764 | `#curriculum` — experiencia (izquierda) + formación (derecha) |
| 969 | `#portfolio` — 4 tarjetas de caso + «Otros trabajos» |
| 1141 | `#contacto` — formulario FormSubmit |
| 1319 | Pie, botón «arriba» y toast |

**Los números se mueven al editar.** Confirma siempre con
`grep -n 'id="portfolio"' index.html` antes de fiarte de la tabla.

## Cómo funciona Alpine aquí

**Un solo scope real, en `<body>`:**

```js
{ theme: localStorage.getItem('theme') || 'light',
  lang:  localStorage.getItem('lang')  || 'es',
  toggleTheme() {...}, toggleLang() {...} }
```

El `<header>` tiene un scope propio **mínimo**: `{ scrolled, activeSection, menuOpen }`.
Nada más. Las páginas de `projects/` llevan un único scope en `<html>` con `theme` y `lang`.

### Patrones que funcionan

```html
<!-- Traducir: acceso directo, con texto de respaldo dentro -->
<span x-text="translations[lang].nav.home">INICIO</span>

<!-- Iconos dinámicos: :class, NUNCA dos elementos con x-show -->
<i :class="theme === 'dark' ? 'fa-sun' : 'fa-moon'"></i>

<!-- Toggle en línea, sin función -->
<button @click="lang = lang === 'es' ? 'en' : 'es'; localStorage.setItem('lang', lang)">
```

### Lo que rompe

| ❌ | Por qué |
|---|---|
| `$root.lang` | Innecesario aquí y frágil |
| Getters en scopes hijos | Se quedan obsoletos: dejan de ser reactivos |
| Dos `<i x-show>` para un icono | El icono no cambia. Usar `:class` |
| `translations?.[lang]?.nav?.home` | Encadenamiento opcional que oculta errores reales. `translations.js` se carga primero, no hace falta |
| Scopes anidados con estado | El estado vive en `<body>` y punto |

## Sistema visual (fase B, 2026-08-31)

Tipografía y paleta salen de `apps/lopezoft/_spec/marca.md`. **No se improvisan.**

| | |
|---|---|
| Titulares | **Montserrat** 600/700 (`font-heading`) |
| Cuerpo | **Inter** 400/500/600/700 (`font-body`) |
| Carga | `<link>` con `preconnect` en el `<head>` de cada HTML — **no** un `@import` dentro del CSS, que bloquea el render |

### El acento cambia según la superficie, no según el tema

La regla de marca es dura: **`#2563EB` sobre navy da 2,5:1 y no se usa.** Sobre fondo oscuro
el acento es el cian `#38BDF8` (8,12:1). Como el sitio mezcla secciones claras, oscuras y
que cambian con el tema, los tokens `primary` y `primary-light` **leen variables CSS**:

```js
// tailwind.config (los 5 HTML)
primary:         'rgb(var(--acento) / <alpha-value>)',
'primary-light': 'rgb(var(--acento-2) / <alpha-value>)',
```

```css
/* assets/css/custom.css */
:root                       { --acento: 37 99 235;  --acento-2: 56 189 248; }   /* claro */
.dark, [data-theme="dark"]  { --acento: 56 189 248; --acento-2: 125 211 252; }  /* oscuro */
.surface-dark               { --acento: 56 189 248; --acento-2: 125 211 252; }  /* SIEMPRE oscura */
```

**`.surface-dark`** marca lo que es oscuro pase lo que pase con el tema: el `<header>`, el
hero `#inicio`, el `<footer>` de la portada, y en las páginas de proyecto el header y el hero.
Sin esa clase, en modo claro el acento saldría azul sobre navy — el caso prohibido.

### Los tokens FIJOS son para fondos rellenos

`brand` (#2563EB), `brand-deep` (#1E3A8A) y `brand-cyan` (#38BDF8) **no** cambian.

⚠️ **Un fondo relleno con texto blanco encima nunca usa `primary`.** Sobre superficie oscura
`primary` es cian, y blanco sobre cian da 1,9:1. Por eso los botones sólidos (CTA del hero,
"Descargar CV", "Enviar mensaje", los de las páginas de proyecto) usan `bg-brand
hover:bg-brand-deep text-white` — blanco sobre `#2563EB` da 5,17:1 en cualquier fondo.

### Versionado de assets (`?v=`)

El `.htaccess` cachea CSS y JS **un mes**. Sin versionar, quien ya visitó el sitio seguiría
viendo los estilos viejos 30 días después de desplegar. **`deploy.sh` sella `?v=<fecha+hora>`
automáticamente antes de subir** y deja el cambio escrito en los HTML del repo: hay que
commitearlo junto al resto. Pasó de verdad durante la fase B.

## Las trampas de este proyecto

1. **`estilo.css` heredado oculta el `<nav>`.** Por eso el menú móvil lleva
   `style="display: block !important;"` en el contenedor **y** en el `<nav>`. Quitarlo
   deja el menú invisible aunque `menuOpen` sea `true`.
2. **Breakpoint `lg` personalizado: 980 px**, no 1024. Está en `tailwind.config` dentro de
   `index.html`. Es el punto donde el menú pasa de hamburguesa a horizontal.
3. **`translations.js` va sin `defer`; Alpine con `defer`.** Invertirlo hace que Alpine
   arranque sin traducciones y la página aparezca con los textos de respaldo.
4. **El CSS de Tailwind se COMPILA; no se edita `assets/css/tailwind.css`.** La fuente son
   `tailwind.config.js` y `src/tailwind.css`, y la salida la regenera `npm run build:css`
   (que `deploy.sh` ejecuta solo antes de subir). Editar la salida a mano se pierde en el
   siguiente despliegue, sin aviso.
5. **Una clase que no esté escrita literalmente en el HTML o el JS, no existe.** El `content`
   de `tailwind.config.js` incluye `assets/js/*.js` justamente porque `main.js` añade
   `opacity-0`, `invisible` y `translate-y-*` en caliente. Si algún día se construye un
   nombre de clase concatenando (`'bg-' + color`), Tailwind lo purga y el elemento sale
   sin estilo **sin ningún error por consola**. Para eso está `safelist`.
6. **Los modificadores de opacidad solo valen si están en la escala de Tailwind**
   (0, 5, 10, … 95, 100). `bg-slate-900/98` no genera nada — pasó de verdad: el menú móvil
   estuvo sin fondo. Con el CDN fallaba igual, solo que nadie lo veía venir. Si hace falta
   un valor fuera de escala, la sintaxis es `bg-slate-900/[.98]`.
7. **El orden en el `<head>` es `tailwind.css` → `custom.css` → `estilo.css`.** `custom.css`
   define el acento adaptativo y pisa utilidades de Tailwind a propósito; invertirlo lo rompe.

## Deuda conocida (revisada 2026-08-31, tras la fase D)

| # | Qué | Impacto |
|---|---|---|
| 1 | **`assets/js/tailwind.3.4.17.min.js` (407 KB) sigue en el repo y en el servidor**, ya sin referencias | Se deja un ciclo de despliegue como seguro: quien tenga el HTML viejo en caché aún lo pide, y un 404 ahí le dejaría la página sin estilos. Borrar en la siguiente sesión |
| 3 | **Reglas muertas en `estilo.css`** (`.inicio`, `.contacto` y su tipografía) — el HTML usa Tailwind y esos selectores ya no casan con nada | Código muerto: 16 KB que se descargan y no pintan nada. Se puede borrar el archivo entero tras comprobar selector por selector |
| 4 | `estilo.old.css` y `script.old.js` en disco (ignorados por git, no se despliegan) | Confusión al abrir la carpeta |
| 5 | **`deploy.sh` es aditivo**: no borra en el servidor lo que se borra en el repo | Hay que limpiar a mano tras retirar archivos. Receta en `DESPLIEGUE.md` |

### Resuelto

- ✅ **Fase A** — favicon, metadatos, Open Graph, foto, `assets/img` de 10 MB a 832 KB.
- ✅ **Fase B** — tipografía y paleta de marca; acento adaptativo por superficie.
- ✅ **Fase C** — hero, "Sobre mí", skills agrupados, currículum.
- ✅ **Fase D** — cuatro casos con plantilla común y nombres con significado;
  `translations.js` de 67 KB a 42 KB; las 5 páginas viejas borradas del repo **y** del
  servidor (devuelven 404, comprobado).
- ✅ Las 40 imágenes huérfanas del servidor, borradas (2026-08-31).
- ✅ `projects/project5.html`, huérfano **y** roto, retirado.
- ✅ Traducciones muertas (`authApp`, `playJavaScript`, `gifExpertApp`, `projectDetail`,
  `common`), eliminadas.
- ✅ **Fase E** — hoja de vida regenerada: de 3 páginas y 4 MB a 2 páginas y ~305 KB, en
  español e inglés, con la misma tipografía y paleta que el sitio.
- ✅ **`script.js` eliminado** del repo, del `INCLUIR` de `deploy.sh` y del servidor
  (2026-08-31). Era un duplicado comentado de funciones que ya viven en `main.js`.

