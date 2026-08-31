# Portfolio — Rafael López

Sitio personal estático, bilingüe (ES/EN), con modo claro/oscuro.
**En producción:** https://portfoliorafael.lopezoft.co/

## Stack

Sin build. HTML + CSS + JS servidos tal cual.

- **Alpine.js 3.13.3** — reactividad (idioma, tema, menú)
- **Tailwind CSS 3.4.17** — servido desde el propio dominio, **no desde el CDN**
  (`assets/js/tailwind.3.4.17.min.js`; ver `docs/DESPLIEGUE.md`)
- **Font Awesome 6.1.2** · **AOS 2.3.1** · Google Fonts (Righteous, Work Sans)
- **FormSubmit.co** — formulario de contacto, sin backend

## Desarrollo

```bash
python -m http.server 8000   # http://localhost:8000
# o: npx serve
```

Abrir `index.html` con `file://` también funciona, pero el formulario no.

## Despliegue

```bash
bash deploy.sh --dry-run   # qué se subiría
bash deploy.sh             # respalda, sube y verifica en vivo
```

Va a `portfoliorafael.lopezoft.co` (hosting compartido de GoDaddy).
`https://rafalopezdel.github.io/Portfolio/` es un espejo secundario que se actualiza con
`git push origin main`.

## Documentación

| Archivo | Para qué |
|---|---|
| `CLAUDE.md` | Índice de entrada: reglas duras y qué leer según la tarea |
| `docs/ARQUITECTURA.md` | Estructura, patrones de Alpine, trampas, deuda técnica |
| `docs/DESPLIEGUE.md` | Servidor, despliegue, verificación, reversión |
| `docs/CONTENIDO.md` | Traducciones, proyectos, imágenes, CV, metadatos |
| `docs/BITACORA.md` | Qué se hizo en cada sesión |

## Contacto

- **Email:** rafalopezdel@gmail.com
- **LinkedIn:** https://www.linkedin.com/in/rafael-lópez-delgado
- **GitHub:** https://github.com/Rafalopezdel
