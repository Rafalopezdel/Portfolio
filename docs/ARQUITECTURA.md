# Arquitectura

> Cómo está construido el sitio y qué te va a engañar si no lo sabes.
> Verificado el **2026-08-31**.

## Stack

Sin build, sin `package.json`. Todo se sirve tal cual.

| Capa | Qué |
|---|---|
| Reactividad | **Alpine.js 3.13.3** (CDN jsDelivr, con `defer`) |
| CSS | **Tailwind 3.4.17 — Play CDN servido en local** (`assets/js/tailwind.3.4.17.min.js`, 407 KB) |
| Iconos | Font Awesome 6.1.2 (cdnjs) |
| Animación | AOS 2.3.1 (unpkg) |
| Tipografía | Google Fonts: **Righteous** (títulos) + **Work Sans** (cuerpo) |
| Formulario | FormSubmit.co (sin backend) |

## Mapa de archivos

```
index.html            ← 1.393 líneas / 100 KB. TODA la página. Usar grep -n, no leerlo entero
estilo.css            ← BEM heredado. ⚠️ tiene reglas que ocultan <nav>
script.js             ← COMENTADO en el HTML. No descomentar (regla 1 de CLAUDE.md)
.htaccess             ← gzip, caché, forzar HTTPS, cabeceras de seguridad
projects/project1..5.html
assets/
  css/custom.css      ← variables y overrides
  js/translations.js  ← ES/EN. 67 KB. Se carga SIN defer (debe existir antes que Alpine)
  js/main.js          ← formulario, CV, scroll, toast. AppState.init() COMENTADO
  js/animations.js    ← configuración de AOS
  js/tailwind.3.4.17.min.js
  img/                ← ~10 MB. Ver "Deuda conocida"
  pdf/CV_Rafael_Lopez_Full_Stack_Developer_2026.pdf (4 MB)
```

### Secciones de `index.html` (línea aproximada)

| Línea | Sección |
|---|---|
| 1–65 | `<head>`: CDNs, `tailwind.config`, `<title>` |
| 66–115 | `<body x-data>` — estado global (`theme`, `lang`) |
| 116–279 | Header: nav desktop + menú móvil + toggles |
| 280 | `#inicio` (hero: foto, nombre, subtítulo, redes, CTAs) |
| 393 | `#sobremi` (descripción, datos personales, intereses, botón CV) |
| 533 | `#skills` (barras técnicas y profesionales) |
| 703 | `#curriculum` (educación + experiencia) |
| 908 | `#portfolio` (4 tarjetas de proyecto) |
| 1096 | `#contacto` (formulario FormSubmit) |
| 1355+ | Botón "arriba" + toast |

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

## Las trampas de este proyecto

1. **`estilo.css` heredado oculta el `<nav>`.** Por eso el menú móvil lleva
   `style="display: block !important;"` en el contenedor **y** en el `<nav>`. Quitarlo
   deja el menú invisible aunque `menuOpen` sea `true`.
2. **Breakpoint `lg` personalizado: 980 px**, no 1024. Está en `tailwind.config` dentro de
   `index.html`. Es el punto donde el menú pasa de hamburguesa a horizontal.
3. **`translations.js` va sin `defer`; Alpine con `defer`.** Invertirlo hace que Alpine
   arranque sin traducciones y la página aparezca con los textos de respaldo.
4. **`tailwind.config` está inline en cada HTML.** Si cambias un color o un breakpoint hay
   que cambiarlo en `index.html` **y en las 5 páginas de `projects/`**.
5. **Tailwind Play CDN no es para producción** — lo dice él mismo por consola. Compila el
   CSS en cada carga (407 KB de compilador). Ver "Deuda conocida".

## Deuda conocida (actualizado 2026-08-31, tras la fase A)

| # | Qué | Impacto |
|---|---|---|
| 1 | **Tailwind Play CDN** (407 KB de compilador en cada visita) en vez de un `.css` compilado de pocos KB | Rendimiento y aviso por consola. Es la deuda más grande que queda |
| 2 | **`projects/project5.html` es huérfano y está roto**: ningún enlace apunta a él, no tiene traducciones, y sus `<img>` apuntan a `webCorporativa{1,2,3}.png`, que **no existen** (solo hay `.webp`) | Página muerta indexable. Se retira en la fase D |
| 3 | **CV en PDF de 4 MB** | Descarga pesada innecesaria. Se rehace en la fase E |
| 4 | Traducciones sin usar en `translations.js`: `authApp`, `playJavaScript`, `gifExpertApp` | Ruido |
| 5 | `estilo.old.css` y `script.old.js` en disco (ignorados por git) | Confusión |
| 6 | **Reglas muertas en `estilo.css`**: `.inicio` y `.contacto` (con sus `background-image`) ya no se aplican — el HTML usa Tailwind. Apuntan a imágenes borradas | Código muerto. Revisar en la fase B |
| 7 | **`deploy.sh` es aditivo**: no borra en el servidor lo que se borra en el repo | Quedan 40 imágenes muertas en producción (~7 MB). No se sirven a nadie, pero ocupan. Comando de limpieza en `DESPLIEGUE.md` |

### Resuelto en la fase A (2026-08-31)

- ✅ Favicon completo (`.ico` + 32/192 px + apple-touch-icon), generado desde el isotipo de
  Lopezoft sobre teja navy — la Z azul sobre blanco desaparecía a 16 px.
- ✅ `<meta name="description">`, canonical, `theme-color`, Open Graph, Twitter Card y
  datos estructurados `Person` (JSON-LD).
- ✅ `og.jpg` 1200×630 compuesto (foto + Montserrat/Inter + paleta de marca).
- ✅ `<title>` coherente: ya no dice "Frontend Developer & Industrial Engineer".
- ✅ Foto del hero sustituida por la de Lopezoft, con `<picture>` WebP + JPG de respaldo.
- ✅ **`assets/img` de ~10 MB a 832 KB**: 13 imágenes a WebP y 26 sin uso eliminadas.
- ✅ Tailwind con **ruta relativa** en los 5 HTML — la ruta absoluta rompía el espejo de
  GitHub Pages, que sirve desde `/Portfolio/`.
