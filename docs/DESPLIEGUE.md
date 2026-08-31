# Despliegue

> **Cómo sube este sitio a producción y qué te va a engañar.**
> Verificado el **2026-08-31** con acceso SSH real.
> Fuente del conocimiento del servidor: `C:\Rafael\Lopezoft-Shared` (`CLAUDE.md`, `RUNBOOK.md`,
> `INVENTARIO.md`). **Aquí solo está lo que afecta a este portafolio.** Lo demás se consulta allí.

## Dónde vive

| | |
|---|---|
| URL | `https://portfoliorafael.lopezoft.co/` |
| Hosting | **GoDaddy, hosting compartido (cPanel)** — no es el VPS de Lopezoft |
| Alias SSH | `lopezoft-shared` (en `~/.ssh/config`) → `ml626rp8pwgz@132.148.176.146:22` |
| Llave | `~/.ssh/lopezoft_shared_ed25519` — **fuera del repo, a propósito** |
| Docroot | `/home/ml626rp8pwgz/public_html/portfoliorafael` |
| Repo GitHub | `https://github.com/Rafalopezdel/Portfolio` (rama `main`) |

⚠️ **El nombre de la carpeta NO lleva el sufijo del dominio.** Es `portfoliorafael`, no
`portfoliorafael.lopezoft.co`. Adivinarlo hace perder tiempo.

✅ **Es un subdominio con docroot propio**, así que **no hereda** el `.htaccess` de
`public_html` (que alcanza a ~12 dominios de clientes). Lo que se toque aquí no afecta a
nadie más. Esa es la razón por la que este despliegue es seguro y el de la raíz no lo sería.

## Desplegar

```bash
bash deploy.sh --dry-run   # qué se subiría
bash deploy.sh             # respalda en el servidor, sube, ajusta permisos y verifica
```

Qué hace, en orden:

1. **Guardias previas.** Aborta si algún HTML apunta a `cdn.tailwindcss.com` o si falta el
   Tailwind local (ver Trampa 1).
2. **Sella `?v=<fecha+hora>`** en `custom.css`, `estilo.css`, `translations.js`, `main.js` y
   `animations.js`. Sin esto, el `.htaccess` cachea CSS y JS **un mes** y quien ya visitó
   el sitio no vería el cambio en 30 días (Trampa 4). **Deja el cambio escrito en los HTML
   del repo: hay que commitearlo.**
3. **Respaldo en el servidor:** `~/backup-portfolio-AAAA-MM-DD-HHMM.tgz` con el sitio actual.
4. **Sube** `index.html`, `estilo.css`, `.htaccess`, `assets/` y `projects/` por `tar`
   sobre SSH. **No sube** `docs/`, `cv/`, `scripts/`, `README.md`, `CLAUDE.md`, `deploy.sh`,
   `.git/` ni los `*.old.*`.
5. **Permisos:** directorios `755`, archivos `644`. (Lo que había estaba en `666`/`777`.)
6. **Verifica en vivo** que el HTML servido apunta al Tailwind local.

**Es aditivo: no borra en el servidor lo que borres en el repo.** Tras un despliegue que
elimina archivos, hay que limpiarlos a mano. Para ver qué sobra en producción:

```bash
ssh lopezoft-shared 'ls ~/public_html/portfoliorafael/assets/img' | sort > /tmp/srv.txt
ls assets/img | sort > /tmp/loc.txt
comm -23 /tmp/srv.txt /tmp/loc.txt        # lo que está en el servidor y ya no en el repo
```

Y para borrarlo (hazlo **después** de un `deploy.sh`, que deja respaldo completo):

```bash
ssh lopezoft-shared "cd ~/public_html/portfoliorafael/assets/img && rm -f $(comm -23 /tmp/srv.txt /tmp/loc.txt | tr '
' ' ')"
```

⚠️ **Pendiente al 2026-08-31:** quedan **40 imágenes huérfanas** en producción (~7 MB) tras
la fase A. No se sirven a nadie —ningún HTML las referencia—, pero ocupan espacio.
Respaldo previo: `~/backup-portfolio-2026-08-31-1242.tgz`.

### Revertir

El propio script imprime la orden al terminar:

```bash
ssh lopezoft-shared "cd /home/ml626rp8pwgz/public_html/portfoliorafael && tar xzf ~/backup-portfolio-AAAA-MM-DD-HHMM.tgz"
```

### GitHub Pages

`https://rafalopezdel.github.io/Portfolio/` es un **espejo secundario**, no la producción.
Se actualiza solo al hacer `git push origin main`. La URL que se pone en el CV y en LinkedIn
es la del dominio propio.

## Reglas duras

1. 🔴 **El repositorio es la fuente de verdad. Nunca editar en el servidor.**
   El 2026-08-31 el servidor estuvo un tiempo *por delante* del repo (el arreglo de Tailwind
   se hizo directamente sobre producción). Un despliegue desde el repo habría revertido el
   arreglo y tumbado el diseño otra vez. Ya está sincronizado; que no vuelva a pasar.
2. ⛔ **No tocar el `.htaccess` de `public_html/` (la raíz).** Alcanza a ~12 dominios de
   clientes. Nada de lo que necesita este portafolio está ahí.
3. ⚠️ **La cuenta de cPanel es la llave maestra** de los sitios y los buzones de clientes que
   no son de Lopezoft. No existe usuario limitado en hosting compartido.
4. ⛔ **No hacer intentos de autenticación a ciegas.** cPHulk bloquea la IP tras varios
   fallos, y con ella el cPanel y el FTP. Para ver si el puerto responde sin autenticar:
   `curl -s --connect-timeout 8 telnet://132.148.176.146:22`
5. ⚠️ **Sin `rsync` en la máquina local** (Git Bash de Windows no lo trae). Por eso el script
   usa `tar` sobre SSH. En el servidor sí existe.

## Trampas

### 1. 🔴 Un CDN de terceros es un punto único de fallo, y falla en silencio

`portfoliorafael` cargó **sin estilos** porque todo el diseño colgaba de
`https://cdn.tailwindcss.com` y **el DNS de Claro Colombia devuelve `Query refused`** para ese
host. Desde el servidor resuelve; desde la máquina de Rafael, no. Ni el `curl` ni los logs lo
delatan: los archivos propios devuelven `200` y todo parece sano.

```bash
nslookup cdn.tailwindcss.com           # Query refused
nslookup cdn.tailwindcss.com 8.8.8.8   # resuelve
```

**Regla:** lo que sea crítico para el render se sirve **desde el propio subdominio**.
Hoy: `assets/js/tailwind.3.4.17.min.js` (407 KB, `md5 7a614b9a197e532c00d09a23b0996b5f`).
Si un día "carga pero sin estilos", comprueba **cada host externo del `<head>`** con el
resolutor local, no solo con `curl` desde el servidor.

⬜ **Pendiente sano:** compilar el CSS con la CLI de Tailwind y dejar un `.css` estático de
pocos KB en vez de 407 KB de compilador corriendo en cada visita.

### 2. ⚠️ `ErrorDocument` no hace nada en este hosting

GoDaddy devuelve siempre un cuerpo de 13 bytes, da igual la ruta o la sintaxis. El
`ErrorDocument 404 /index.html` del `.htaccess` **nunca ha funcionado** y se mantiene por
inercia. Comprobado el 2026-08-31.

Y un docroot **sin `index.html`** responde `403`, no `404`.

### 3. ⚠️ Verifica el cuerpo, no el código

Costumbre heredada de la raíz del servidor, donde cualquier ruta inexistente devuelve
`200 OK` con el `index.html` dentro. Este subdominio tiene docroot propio y no sufre esa
regla, pero el hábito vale igual:

```bash
curl -s https://portfoliorafael.lopezoft.co/RUTA | head -c 200
```

### 4. 🔴 El `.htaccess` cachea CSS y JS un mes

```apache
ExpiresByType text/css        "access plus 1 month"
ExpiresByType application/javascript "access plus 1 month"
```

Un cambio de estilos **no lo ve** quien ya visitó el sitio, hasta 30 días después. Y no da
ningún síntoma: el `curl` trae el CSS nuevo, el navegador usa el viejo de su caché.
Costó media hora en la fase B creyendo que el CSS estaba mal.

**Por eso `deploy.sh` sella `?v=` automáticamente.** Si algún día se añade otro asset propio,
hay que darle su `?v=` a mano la primera vez; a partir de ahí el script lo mantiene.

Para comprobar qué versión hay en vivo:

```bash
curl -sS https://portfoliorafael.lopezoft.co/ | grep -o '?v=[0-9]*' | sort -u
```

### 5. ⚠️ Si sale `Shell access is not enabled on your account!`

**No es la llave.** La autenticación funcionó; el shell está en `noshell`. El interruptor
maestro vive en el **panel de GoDaddy**, no en cPanel:
Hosting web → Administrar → Configuración → **Acceso SSH**.
Mientras esté apagado, **SFTP sí funciona** para leer y descargar.

## Comprobación rápida de salud

```bash
curl -sS -o /dev/null -w "%{http_code} %{size_download}\n" https://portfoliorafael.lopezoft.co/
curl -sS https://portfoliorafael.lopezoft.co/ | grep -c 'tailwind.3.4.17.min.js'   # debe dar 1
ssh lopezoft-shared 'ls -la ~/public_html/portfoliorafael'
```
