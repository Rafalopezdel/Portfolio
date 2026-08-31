# Contenido

> Cómo se edita lo que la gente ve. Traducciones, proyectos, imágenes, CV y metadatos.

## Traducciones (`assets/js/translations.js`)

Objeto único con dos ramas, `es` y `en`, **con la misma forma exacta**. 67 KB.
Se expone como `window.translations` al final del archivo — sin esa línea, Alpine no lo ve.

```js
window.translations = {
  es: { nav: {...}, hero: {...}, about: {...}, skills: {...},
        curriculum: {...}, portfolio: {...}, contact: {...},
        projectDetail: {...}, project1: {...}, …, project4: {...} },
  en: { …lo mismo… }
};
```

En el HTML, siempre con texto de respaldo dentro de la etiqueta (es lo que se ve mientras
Alpine arranca, y lo que ven los buscadores):

```html
<h2 x-text="translations[lang].portfolio.title">PORTFOLIO</h2>
```

**Regla:** toda clave nueva se añade **en las dos ramas** en el mismo commit. Una clave que
existe en `es` y no en `en` deja el texto en blanco al cambiar de idioma, sin error visible.

**Dos comprobaciones que evitan textos en blanco.** Pásalas siempre que toques
`translations.js` — un desajuste no da error, solo deja el texto vacío en la página.

Los scripts viven en `scripts/`:

```bash
node scripts/verificar-traducciones.js   # las ramas es/en tienen la misma forma
node scripts/verificar-claves-html.js    # toda clave usada en el HTML existe
```

La primera encontró el 2026-08-31 que `projectDetail.keyIntegrations`,
`allRightsReserved` y `viewMoreProjects` **no existían en inglés**: esos textos salían en
blanco en las cuatro páginas de proyecto y nadie lo había notado.

## Añadir o cambiar un proyecto

Desde la fase D hay **cuatro casos** y todos comparten la misma estructura:

```
El problema  →  Lo que construí  →  El resultado  →  Stack y galería  →  Enlace al sitio
```

Esa forma viene de `apps/lopezoft/_spec/casos.md` y no es decorativa: es la que permite
leer el caso en diagonal y quedarse con la cifra. **Si añades un caso, respétala.**

| Archivo | Clave en `translations.js` |
|---|---|
| `projects/asistente-whatsapp.html` | `casos.whatsapp` |
| `projects/jpr-academy.html` | `casos.jpr` |
| `projects/cafe-montelargo.html` | `casos.cafe` |
| `projects/gcpfm.html` | `casos.gcpfm` |

**Los nombres de archivo llevan el nombre del proyecto, no un número.** Antes eran
`project1.html`…`project5.html` y había que abrirlos para saber de qué hablaban.

Un caso vive en **tres sitios**:

1. **La página** `projects/<slug>.html`. Cópiala de una existente: las cuatro son idénticas
   salvo el `slug`, los chips del hero, el stack, la galería y el enlace.
2. **Los textos** en `translations.js` → `casos.<clave>`, en `es` **y** en `en`:
   `title`, `subtitle`, `tech`, `card`, `problema`, `solucion[]`, `resultado{}`.
3. **La tarjeta** en `index.html`, sección `#portfolio`. Lee de `casos.<clave>` — no
   dupliques los textos.

Y la imagen en `assets/img/` (WebP, ver más abajo).

### Cuántos casos

**Cuatro.** El reclutador juzga por el más débil que ve: un quinto proyecto flojo baja el
promedio de los cuatro buenos. Lo que no llegue a caso va a la fila **"Otros trabajos"**
como enlace (`portfolio.otros` en `translations.js`).

### ⚠️ Font Awesome: la versión gratuita no tiene todos los iconos

Los iconos de `casos.<clave>.solucion[].icon` se pintan con `:class`. Si eliges uno que
solo existe en Font Awesome **Pro**, no da error: sale un **cuadro vacío**. Pasó con
`fa-user-headset` en la fase D. Compruébalo en la consola del navegador:

```js
const p = document.createElement('i'); document.body.appendChild(p);
p.className = 'fa-solid fa-el-icono-que-quieras';
getComputedStyle(p, '::before').content;   // '"\uXXXX"' = existe · 'none' = no existe
```

## Imágenes

Van en `assets/img/`. Hoy la carpeta pesa ~10 MB y todo es JPG/PNG sin optimizar.

- **Convertir a WebP** lo que se añada (calidad 80 suele bastar) y dejar el JPG solo si hace
  falta compatibilidad.
- Ancho útil máximo: **1600 px** para capturas de proyecto; **512 px** para la foto de perfil
  (se muestra a 224 px, pero en pantallas Retina se piden 2×).
- Nombrar por proyecto: `whatsappAsistant.jpg`, `webCorporativaW1.jpg`…

Los pesos pesados de hoy: `fondo.jpg` (3,6 MB), `fondo1.png` (1,2 MB), `foto_fondoGris.png`
(797 KB), `hero.png` (402 KB). **Comprobar si siguen usándose antes de optimizarlos:**

```bash
grep -rn "fondo.jpg" index.html projects/ assets/css/ estilo.css
```

## CV (hoja de vida)

**El PDF no se edita: se genera.** La fuente vive en `cv/` y **no se despliega**
(`deploy.sh` sube una lista explícita de archivos y `cv/` no está en ella).

```
cv/
  cv-es.html      ← contenido en español
  cv-en.html      ← contenido en inglés
  cv.css          ← estilos de impresión A4, misma paleta y tipografía que el sitio
  generar.sh      ← produce los dos PDF en assets/pdf/
```

```bash
bash cv/generar.sh
```

Salida: `assets/pdf/CV-Rafael-Lopez-Full-Stack-Developer-{ES,EN}.pdf`.
El botón de descarga elige el idioma solo, leyendo `localStorage.getItem('lang')`
(ver `assets/js/main.js`). Hay dos botones —hero y "Sobre mí"— y los dos se enganchan.

### Tres cosas que no se negocian en el CV

1. **Una sola columna.** Los ATS que usan las empresas para filtrar CV parsean mal las
   maquetas a dos columnas: se comen media hoja. El diseño es de una columna a propósito.
2. **Máximo 2 páginas** y **el texto tiene que ser extraíble**. `generar.sh` comprueba las
   dos cosas y falla si no se cumplen — si el PDF sale con el texto rasterizado, ningún
   filtro automático puede leerlo y el CV no llega a manos humanas.
3. **Las mismas cifras que el portafolio.** Si cambia un número en `translations.js`
   (`casos.*.resultado`), cambia también aquí. Un CV que dice algo distinto de la web es
   peor que no tener web.

⚠️ **`generar.sh` necesita red**: las fuentes vienen de Google Fonts. Sin conexión, Chrome
cae a las del sistema y el PDF sale con otra tipografía sin avisar. Míralo antes de subirlo.

## Formulario de contacto

`#formularioContacto` en `index.html`, enviado a **FormSubmit.co** con `fetch` desde
`assets/js/main.js`. Sin backend. Los mensajes de éxito y error se eligen leyendo
`localStorage.getItem('lang')` (no pasan por Alpine).

## Metadatos y SEO

Puestos en la **fase A (2026-08-31)**. Viven en el `<head>` de `index.html` y, en versión
reducida, en cada página de `projects/`.

| Qué | Dónde |
|---|---|
| `<title>`, `description`, `canonical`, `theme-color` | `index.html`, arriba del `<head>` |
| Favicon: `.ico` + 32 px + 192 px + `apple-touch-icon` | `assets/img/favicon*` |
| Open Graph + Twitter Card | `index.html` y las 5 páginas de proyecto |
| Datos estructurados `Person` (JSON-LD) | al final del `<head>` de `index.html` |

**Dos reglas al tocarlos:**

1. ⚠️ **`og:image` debe ser URL absoluta.** Con ruta relativa, ninguna red social la resuelve.
   Hoy: `https://portfoliorafael.lopezoft.co/assets/img/og.jpg` (1200×630, 65 KB).
2. ⚠️ **Las rutas de favicon van relativas** (`assets/img/…` en la raíz, `../assets/img/…` en
   `projects/`). Con ruta absoluta se rompe el espejo de GitHub Pages, que sirve desde
   `/Portfolio/`. Lo mismo vale para el `<script>` de Tailwind.

**Regenerar la imagen Open Graph o los favicon:** los genera un script de PIL a partir del
isotipo de Lopezoft (`apps/lopezoft/apps/web/public/img/icono-512.png`) y de
`.../public/img/equipo/rafael.jpg`. El isotipo va sobre **teja navy `#0D1B2A` con esquinas
redondeadas y la Z en el degradado sobre oscuro** (`#3B82F6 → #38BDF8 → #7DD3FC`): la Z azul
sobre blanco es ilegible a 16 px. Ver la entrada de la fase A en `BITACORA.md`.

## Imágenes: formato

Todo lo que se muestra va en **WebP** (calidad 82, ancho máximo 1600 px), con JPG de
respaldo solo para la foto de perfil vía `<picture>`. En la fase A esto llevó `assets/img`
de ~10 MB a 832 KB.

## Imágenes de los proyectos (preparadas 2026-08-31, para la fase D)

| Archivo | Proyecto | Origen |
|---|---|---|
| `jprAcademy1.webp` | JPR Academy | Captura del sitio en vivo, reutilizada de `apps/lopezoft/apps/web/public/img/casos/` |
| `cafeMontelargo1.webp` | Café Montelargo | Ídem |
| `whatsappChat.webp` | Asistente WhatsApp | Ídem. **Conversación real con el nombre del odontólogo ya difuminado.** Retrato 560×1192: va en la galería del detalle, no en la tarjeta |
| `gcpfm1.webp` | GCPFM | **Captura propia** de `https://gcpfm.co.uk` (2026-08-31). El hero es un slider: hay que esperar a que termine la transición o salen dos diapositivas superpuestas |
| `whatsappAsistant.webp` | Asistente WhatsApp | La que ya estaba: composición apaisada, sirve para la tarjeta |

⛔ **Reglas de privacidad que aplican a estas imágenes** (de `apps/lopezoft/_spec/casos.md`):

- **Ningún nombre, teléfono ni detalle de cita de un paciente.** La captura de WhatsApp vale
  porque el nombre del odontólogo está difuminado y el interlocutor es un número de prueba.
  Si algún día se sustituye, hay que volver a comprobarlo pixel a pixel.
- **El precio que paga Café Montelargo no aparece en ningún sitio**, ni en imagen ni en texto.

