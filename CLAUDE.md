# CLAUDE.md — Portfolio de Rafael López

Sitio estático personal. **En producción:** https://portfoliorafael.lopezoft.co/
Repositorio: `https://github.com/Rafalopezdel/Portfolio` (rama `main`).

## 1. PROTOCOLO DE INICIO (bootstrap mínimo)

Lee **solo** esto al empezar:

1. Este archivo.
2. La entrada más reciente de `docs/BITACORA.md` (qué pasó la última sesión).

**NO leas de oficio** los demás `.md` ni `index.html` entero (100 KB). Se cargan bajo demanda:

| Si la tarea es… | Lee además |
|---|---|
| Tocar HTML/CSS/JS, entender Alpine, el menú, el tema o el idioma | `docs/ARQUITECTURA.md` |
| Subir cambios al servidor, verificar en vivo, revertir | `docs/DESPLIEGUE.md` |
| Añadir/editar un proyecto, traducciones, imágenes, CV, metadatos | `docs/CONTENIDO.md` |
| Tocar la hoja de vida | `cv/` + `docs/CONTENIDO.md` §CV. **El PDF se genera con `bash cv/generar.sh`, no se edita** |
| Comprobar que no se rompieron las traducciones | `node scripts/verificar-traducciones.js` y `node scripts/verificar-claves-html.js` |
| Algo del servidor compartido que no esté en `docs/DESPLIEGUE.md` | `C:\Rafael\Lopezoft-Shared` (`CLAUDE.md` + `RUNBOOK.md`) |
| Marca, colores, tipografía, casos de cliente, foto del equipo | `C:\Rafael\apps\lopezoft` (`_spec/marca.md`, `_spec/casos.md`) |

Después del bootstrap: confirma en **3 líneas** (estado, siguiente paso, dudas) y espera instrucciones.

**Para localizar algo en `index.html` usa `grep -n`, nunca lo leas completo.** Mapa de
secciones y números de línea aproximados en `docs/ARQUITECTURA.md`.

## 2. ESTADO (2026-09-01)

El portafolio está **rediseñado y en producción**. Se cerraron cinco fases: identidad visual,
tipografía y paleta de marca, contenido, los cuatro casos y la hoja de vida. Detalle en
`docs/BITACORA.md`.

| | |
|---|---|
| Posicionamiento | Full Stack Developer que **construye y opera** — IA aplicada, e-commerce headless, plataformas |
| Público | **Empleo y clientes a la vez**: afirmación + prueba, CTA doble, CV visible |
| Casos publicados | Asistente WhatsApp con IA · JPR Academy · Café Montelargo · GCPFM |
| Hoja de vida | `cv/` → `assets/pdf/CV-…-{ES,EN}.pdf`. **Se genera, no se edita** |
| Peso en producción | `assets/img` 832 KB · `assets/pdf` 616 KB · `translations.js` 42 KB · `tailwind.css` 52 KB |

**En marcha: visibilidad.** El 2026-09-01 se compiló el CSS (407 KB de compilador JIT fuera,
52 KB estáticos dentro) y se añadieron `robots.txt` y `sitemap.xml`. Decisión tomada: el sitio
es **monolingüe en español** para los buscadores — el conmutador ES/EN no cambia la URL y se
queda así; no habrá `/en/` ni `hreflang` mientras el mercado objetivo sea Colombia y remoto en
español.

**Pendiente:** alta en Google Search Console y Bing (la hace Rafael, necesita su cuenta),
perfil de LinkedIn alineado con este posicionamiento, y alta en plataformas de empleo y
freelance. La estrategia de empleo **no vive en este repo** — es público y ahí no van cifras
de salario ni tácticas de negociación.

⛔ **Dos reglas de contenido heredadas de `apps/lopezoft/_spec/casos.md`, no negociables:**
la clínica odontológica **no se nombra** y no aparece ningún dato de paciente; el precio que
paga Café Montelargo **no se publica** en ningún sitio, ni como cifra ni como rango.

## 3. LAS REGLAS QUE ROMPEN EL SITIO

1. ⛔ **`AppState.init()` en `assets/js/main.js` está comentado a propósito.** Competía con
   Alpine.js por el estado. Alpine (`<body x-data>`) es la única fuente de verdad.
   *(El antiguo `script.js`, que borraba las clases de Tailwind y hacía desaparecer el menú,
   se eliminó el 2026-08-31. Está en el historial de git si alguna vez hace falta mirarlo.)*
2. ⛔ **El CSS de Tailwind se compila; NUNCA se vuelve al CDN.** Hoy se sirve
   `/assets/css/tailwind.css`, generado por `npm run build:css` desde `tailwind.config.js`
   y `src/tailwind.css`. `cdn.tailwindcss.com` está prohibido: el DNS de Claro Colombia
   devuelve `Query refused` y el sitio carga **sin estilos** para media Colombia, con el
   `curl` dando 200 tan tranquilo. `deploy.sh` lo bloquea. Ver `docs/DESPLIEGUE.md`, trampa 1.
   **No edites `assets/css/tailwind.css` a mano**: se regenera en cada despliegue.
3. ⚠️ **Nada de `$root` ni de getters en scopes hijos** con Alpine. Acceso directo:
   `translations[lang].nav.home`. Ver `docs/ARQUITECTURA.md`.
4. ⚠️ **El menú móvil necesita `display: block !important`** para vencer al `estilo.css`
   heredado. Si lo quitas, el menú deja de verse.

## 4. DESPLEGAR

```bash
npm install               # una sola vez: instala el compilador de Tailwind
bash deploy.sh            # compila el CSS, respalda, sube y verifica
bash deploy.sh --dry-run  # muestra qué subiría, sin tocar nada
npm run watch:css         # mientras se trabaja: recompila al guardar
```

Todo lo demás (datos del servidor, verificación, reversión) está en `docs/DESPLIEGUE.md`.
**El repositorio es la fuente de verdad: nunca editar archivos directamente en el servidor.**

## 5. PROTOCOLO DE CIERRE

```
¿Hubo cambios sustantivos?
├── NO  → no anotar nada.
└── SÍ  → añade una entrada al inicio de `docs/BITACORA.md`:

       ## AAAA-MM-DD — <título>
       - **Qué se hizo:** ...
       - **Archivos tocados:** [...]
       - **¿Desplegado?:** sí / no
       - **Siguiente paso:** ...

¿Cambió la arquitectura o apareció una trampa nueva? → `docs/ARQUITECTURA.md`.
¿Cambió algo del despliegue o del servidor?          → `docs/DESPLIEGUE.md`
                                                       (y avisar a `Lopezoft-Shared`).
```

## 6. CONVENCIONES

- **Idioma:** prosa en español; nombres técnicos, código y commits en inglés cuando aplique.
- **Fechas absolutas** (`2026-08-31`), nunca "la semana pasada".
- **Commits:** `tipo: descripción corta`.
- **Nada de secretos en el repo.** Las llaves SSH viven en `~/.ssh/`.
- **Casi sin build:** lo único que se compila es el CSS de Tailwind (`npm run build:css`,
  lo corre `deploy.sh` solo). El resto —HTML, `custom.css`, `estilo.css`, el JS— se sirve tal
  cual. Cualquier build **nuevo** (bundler, transpilación, framework) es una decisión, no un
  detalle de implementación: se plantea antes de hacerla.
