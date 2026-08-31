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

## 2. ESTADO (2026-08-31)

El portafolio está **rediseñado y en producción**. Se cerraron cinco fases: identidad visual,
tipografía y paleta de marca, contenido, los cuatro casos y la hoja de vida. Detalle en
`docs/BITACORA.md`.

| | |
|---|---|
| Posicionamiento | Full Stack Developer que **construye y opera** — IA aplicada, e-commerce headless, plataformas |
| Público | **Empleo y clientes a la vez**: afirmación + prueba, CTA doble, CV visible |
| Casos publicados | Asistente WhatsApp con IA · JPR Academy · Café Montelargo · GCPFM |
| Hoja de vida | `cv/` → `assets/pdf/CV-…-{ES,EN}.pdf`. **Se genera, no se edita** |
| Peso en producción | `assets/img` 832 KB · `assets/pdf` 616 KB · `translations.js` 42 KB |

**Lo siguiente, aún sin empezar:** visibilidad — SEO, LinkedIn, plataformas de empleo y de
trabajo freelance. Nada de eso está hecho todavía: el sitio no tiene `sitemap.xml` ni
`robots.txt`, y no está dado de alta en Search Console.

⛔ **Dos reglas de contenido heredadas de `apps/lopezoft/_spec/casos.md`, no negociables:**
la clínica odontológica **no se nombra** y no aparece ningún dato de paciente; el precio que
paga Café Montelargo **no se publica** en ningún sitio, ni como cifra ni como rango.

## 3. LAS REGLAS QUE ROMPEN EL SITIO

1. ⛔ **`AppState.init()` en `assets/js/main.js` está comentado a propósito.** Competía con
   Alpine.js por el estado. Alpine (`<body x-data>`) es la única fuente de verdad.
   *(El antiguo `script.js`, que borraba las clases de Tailwind y hacía desaparecer el menú,
   se eliminó el 2026-08-31. Está en el historial de git si alguna vez hace falta mirarlo.)*
2. ⛔ **Tailwind se sirve desde `/assets/js/tailwind.3.4.17.min.js`, NO desde
   `cdn.tailwindcss.com`.** El DNS de Claro Colombia devuelve `Query refused` para ese host y
   el sitio carga **sin estilos** para media Colombia. Volver al CDN tumba el diseño en
   silencio (el `curl` sigue dando 200). Ver `docs/DESPLIEGUE.md`, trampa 1.
3. ⚠️ **Nada de `$root` ni de getters en scopes hijos** con Alpine. Acceso directo:
   `translations[lang].nav.home`. Ver `docs/ARQUITECTURA.md`.
4. ⚠️ **El menú móvil necesita `display: block !important`** para vencer al `estilo.css`
   heredado. Si lo quitas, el menú deja de verse.

## 4. DESPLEGAR

```bash
bash deploy.sh          # sube a portfoliorafael.lopezoft.co (con respaldo previo y verificación)
bash deploy.sh --dry-run  # muestra qué subiría, sin tocar nada
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
- **Sin build:** HTML/CSS/JS servidos tal cual. Cualquier propuesta de build es una decisión,
  no un detalle de implementación: se plantea antes de hacerla.
