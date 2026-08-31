#!/usr/bin/env bash
# Genera los PDF de la hoja de vida a partir de cv-es.html y cv-en.html.
#
#   bash cv/generar.sh
#
# Por qué Chrome y no una librería de PDF: el CV comparte tipografía y paleta con
# el sitio, y Chrome respeta el CSS de impresión tal cual. El texto queda
# extraíble (comprobado), que es lo que necesitan los ATS de las empresas.
#
# ⚠️ Necesita red: las fuentes vienen de Google Fonts. Sin conexión, Chrome cae a
#    las del sistema y el PDF sale con otra tipografía — revísalo antes de subirlo.

set -euo pipefail

AQUI="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
RAIZ="$(cd "$AQUI/.." && pwd)"
CHROME="${CHROME:-/c/Program Files/Google/Chrome/Application/chrome.exe}"

[[ -x "$CHROME" ]] || { echo "ERROR: no encuentro Chrome en '$CHROME'. Exporta CHROME=..."; exit 1; }

generar() {
  local idioma="$1" salida="$2"
  local fuente_win destino_win
  fuente_win="$(cygpath -w "$AQUI/cv-$idioma.html")"
  destino_win="$(cygpath -w "$RAIZ/assets/pdf/$salida")"

  "$CHROME" --headless=new --disable-gpu --no-pdf-header-footer \
            --virtual-time-budget=10000 \
            --print-to-pdf="$destino_win" \
            "file:///${fuente_win//\\//}" 2>&1 | tail -1

  python -c "
import fitz, os, sys
f = r'$destino_win'
d = fitz.open(f)
texto = sum(len(p.get_text().strip()) for p in d)
print(f'    $salida: {d.page_count} páginas · {os.path.getsize(f)//1024} KB · {texto} caracteres extraíbles')
if d.page_count > 2: print('    ⚠️  más de 2 páginas: un CV de 3 no se lee entero'); sys.exit(1)
if texto < 3000: print('    ⚠️  poco texto extraíble: los ATS no podrán leerlo'); sys.exit(1)
"
}

echo "==> Generando los PDF"
generar es "CV-Rafael-Lopez-Full-Stack-Developer-ES.pdf"
generar en "CV-Rafael-Lopez-Full-Stack-Developer-EN.pdf"

echo
echo "LISTO. Los PDF están en assets/pdf/ — commitéalos y despliega con deploy.sh."
