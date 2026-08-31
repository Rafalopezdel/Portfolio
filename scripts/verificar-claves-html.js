#!/usr/bin/env node
/**
 * Comprueba que toda clave `translations[lang].algo.otro` usada en los HTML
 * existe de verdad en translations.js.
 *
 * Por qué existe: si borras una clave y te dejas el `x-text` que la usaba, el
 * elemento se queda vacío en silencio. Alpine no avisa.
 *
 *   node scripts/verificar-claves-html.js
 *
 * Sale con código 1 si falta alguna.
 */
const fs = require('fs');
const path = require('path');

global.window = {};
require(process.cwd() + '/assets/js/translations.js');
const es = global.window.translations.es;

const archivos = ['index.html'].concat(
  fs.existsSync('projects')
    ? fs.readdirSync('projects').filter((f) => f.endsWith('.html')).map((f) => path.join('projects', f))
    : []
);

let fallos = 0;
for (const archivo of archivos) {
  const html = fs.readFileSync(archivo, 'utf8');
  const usadas = [...html.matchAll(/translations\[lang\]\??\.?([A-Za-z0-9_.?]+)/g)]
    .map((m) => m[1].replace(/\?/g, '').replace(/\.$/, ''));

  const faltan = [...new Set(usadas)].filter((ruta) => {
    const v = ruta.split('.').reduce((o, p) => (o == null ? o : o[p]), es);
    return v === undefined;
  });

  if (faltan.length) {
    fallos += faltan.length;
    console.log(`${archivo}:\n  ` + faltan.join('\n  '));
  }
}

if (!fallos) {
  console.log(`OK · todas las claves existen (${archivos.length} archivos revisados)`);
  process.exit(0);
}
process.exit(1);
