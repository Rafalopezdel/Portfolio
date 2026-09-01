#!/usr/bin/env bash
# Despliegue de portfoliorafael.lopezoft.co
#
#   bash deploy.sh            → respalda, sube y verifica
#   bash deploy.sh --dry-run  → solo lista lo que subiría
#
# Contexto y reversión: docs/DESPLIEGUE.md

set -euo pipefail

SRV="lopezoft-shared"
DOCROOT="/home/ml626rp8pwgz/public_html/portfoliorafael"
STAMP="$(date +%Y-%m-%d-%H%M)"
BAK="/home/ml626rp8pwgz/backup-portfolio-$STAMP.tgz"
AQUI="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
URL="https://portfoliorafael.lopezoft.co"

# Lo que ES el sitio. Todo lo demás (docs, .git, README, *.old) se queda en el repo.
INCLUIR=(index.html estilo.css .htaccess robots.txt sitemap.xml assets projects)

cd "$AQUI"

for f in "${INCLUIR[@]}"; do
  [[ -e "$f" ]] || { echo "ERROR: falta '$f' en $AQUI"; exit 1; }
done

# Guardia: nada de CDN de Tailwind. El DNS de Claro Colombia no resuelve ese host
# y el sitio se sirve SIN ESTILOS, con el curl devolviendo 200 tan tranquilo.
if grep -rq 'cdn\.tailwindcss\.com' index.html projects/; then
  echo "ERROR: algún HTML apunta a cdn.tailwindcss.com."
  echo "       El DNS de Claro no lo resuelve y el sitio queda SIN ESTILOS."
  echo "       El CSS se compila aquí y se sirve desde /assets/css/tailwind.css."
  grep -rn 'cdn\.tailwindcss\.com' index.html projects/
  exit 1
fi

# El CSS se recompila SIEMPRE antes de subir. Asi no puede darse el caso de
# haber escrito una clase nueva en el HTML y desplegar el CSS viejo, que se
# manifestaria como un elemento sin estilo y sin ningun error a la vista.
command -v npx >/dev/null || { echo "ERROR: hace falta Node para compilar el CSS (npm install)"; exit 1; }
[[ -d node_modules/tailwindcss ]] || { echo "ERROR: falta node_modules — ejecuta 'npm install'"; exit 1; }
echo "==> Compilando Tailwind"
npm run --silent build:css
[[ -s assets/css/tailwind.css ]] || { echo "ERROR: assets/css/tailwind.css salio vacio"; exit 1; }
echo "    assets/css/tailwind.css: $(wc -c < assets/css/tailwind.css) b"

# El .htaccess cachea CSS y JS UN MES. Sin sellar la version, quien ya visito el
# sitio sigue viendo los estilos viejos durante 30 dias despues de desplegar.
# `?v=` solo aparece en los assets propios (custom.css, estilo.css, translations.js,
# main.js, animations.js): por eso basta con reescribir el valor, sin retroreferencia.
sellar_version() {
  local stamp="$1"
  local n=0
  for f in index.html projects/*.html; do
    [[ -f "$f" ]] || continue
    sed -i "s/?v=[0-9A-Za-z]*/?v=${stamp}/g" "$f"
    n=$((n+1))
  done
  echo "    $n archivos sellados con ?v=$stamp"
}

if [[ "${1:-}" == "--dry-run" ]]; then
  echo "==> Se subiría a $SRV:$DOCROOT"
  tar czf - "${INCLUIR[@]}" | tar tzf - | sed 's/^/    /'
  echo
  echo "(simulación: no se ha tocado nada)"
  exit 0
fi

echo "==> 0. Sellando la versión de los assets propios"
sellar_version "$(date +%Y%m%d%H%M)"
echo "    (queda escrito en los HTML del repo: commitéalo junto al resto)"

echo
echo "==> 1. Respaldo del sitio actual en el servidor"
ssh "$SRV" "cd '$DOCROOT' && tar czf '$BAK' . && ls -la '$BAK'"

echo
echo "==> 2. Subiendo"
tar czf - "${INCLUIR[@]}" | ssh "$SRV" "tar xzf - -C '$DOCROOT'"
echo "    subido: ${INCLUIR[*]}"

echo
echo "==> 3. Permisos"
ssh "$SRV" "cd '$DOCROOT' && find . -type d -exec chmod 755 {} + && find . -type f -exec chmod 644 {} +"

echo
echo "==> 4. Verificación en vivo (se mira el CUERPO, no solo el código)"
curl -sS -o /dev/null -w "    index.html          : %{http_code}  %{size_download} b\n" "$URL/" -m 30
curl -sS -o /dev/null -w "    tailwind.css        : %{http_code}  %{size_download} b\n" "$URL/assets/css/tailwind.css" -m 30
curl -sS -o /dev/null -w "    sitemap.xml         : %{http_code}  %{size_download} b\n" "$URL/sitemap.xml" -m 30
curl -sS -o /dev/null -w "    robots.txt          : %{http_code}  %{size_download} b\n" "$URL/robots.txt" -m 30
curl -sS -o /dev/null -w "    translations.js     : %{http_code}  %{size_download} b\n" "$URL/assets/js/translations.js" -m 30
# Sin tubería a `grep -q`: cerraría el flujo antes de tiempo y curl daría un error 23 espurio.
if [[ "$(curl -sS -m 30 "$URL/" | grep -c 'assets/css/tailwind.css')" != "0" ]]; then
  echo "    ✅ el HTML en vivo apunta al Tailwind compilado"
else
  echo "    ❌ el HTML en vivo NO apunta al Tailwind compilado — revisar"
fi

echo
echo "LISTO. Para revertir a lo que había antes de este despliegue:"
echo "  ssh $SRV \"cd '$DOCROOT' && tar xzf '$BAK'\""
echo
echo "Recuerda: anota la sesión en docs/BITACORA.md."
