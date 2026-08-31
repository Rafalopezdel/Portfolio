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
INCLUIR=(index.html estilo.css script.js .htaccess assets projects)

cd "$AQUI"

for f in "${INCLUIR[@]}"; do
  [[ -e "$f" ]] || { echo "ERROR: falta '$f' en $AQUI"; exit 1; }
done

# Guardia: el diseño entero depende de que Tailwind se sirva desde el propio subdominio.
if grep -rq 'cdn\.tailwindcss\.com' index.html projects/; then
  echo "ERROR: algún HTML apunta a cdn.tailwindcss.com."
  echo "       El DNS de Claro no lo resuelve y el sitio queda SIN ESTILOS."
  echo "       Debe apuntar a /assets/js/tailwind.3.4.17.min.js — ver CLAUDE.md regla 3."
  grep -rn 'cdn\.tailwindcss\.com' index.html projects/
  exit 1
fi
[[ -f assets/js/tailwind.3.4.17.min.js ]] || { echo "ERROR: falta assets/js/tailwind.3.4.17.min.js"; exit 1; }

if [[ "${1:-}" == "--dry-run" ]]; then
  echo "==> Se subiría a $SRV:$DOCROOT"
  tar czf - "${INCLUIR[@]}" | tar tzf - | sed 's/^/    /'
  echo
  echo "(simulación: no se ha tocado nada)"
  exit 0
fi

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
curl -sS -o /dev/null -w "    tailwind local      : %{http_code}  %{size_download} b\n" "$URL/assets/js/tailwind.3.4.17.min.js" -m 60
curl -sS -o /dev/null -w "    translations.js     : %{http_code}  %{size_download} b\n" "$URL/assets/js/translations.js" -m 30
# Sin tubería a `grep -q`: cerraría el flujo antes de tiempo y curl daría un error 23 espurio.
if [[ "$(curl -sS -m 30 "$URL/" | grep -c 'tailwind.3.4.17.min.js')" != "0" ]]; then
  echo "    ✅ el HTML en vivo apunta al Tailwind local"
else
  echo "    ❌ el HTML en vivo NO apunta al Tailwind local — revisar"
fi

echo
echo "LISTO. Para revertir a lo que había antes de este despliegue:"
echo "  ssh $SRV \"cd '$DOCROOT' && tar xzf '$BAK'\""
echo
echo "Recuerda: anota la sesión en docs/BITACORA.md."
