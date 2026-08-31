#!/usr/bin/env node
/**
 * Comprueba que las ramas `es` y `en` de translations.js tienen la MISMA forma.
 *
 * Por qué existe: una clave que está en `es` y no en `en` no da ningún error.
 * Simplemente deja el texto en blanco al cambiar de idioma. El 2026-08-31 había
 * tres así en `projectDetail`, invisibles en las cuatro páginas de proyecto.
 *
 *   node scripts/verificar-traducciones.js
 *
 * Sale con código 1 si hay desajustes, para poder encadenarlo en un hook.
 */
global.window = {};
require(process.cwd() + '/assets/js/translations.js');
const t = global.window.translations;

if (!t || !t.es || !t.en) {
  console.error('ERROR: window.translations no expone las ramas es/en.');
  process.exit(1);
}

const rutas = (obj, prefijo = '') =>
  Object.keys(obj)
    .flatMap((k) => {
      const v = obj[k];
      const ruta = prefijo ? `${prefijo}.${k}` : k;
      return v && typeof v === 'object' && !Array.isArray(v) ? rutas(v, ruta) : [ruta];
    })
    .sort();

const es = rutas(t.es);
const en = rutas(t.en);
const soloEs = es.filter((k) => !en.includes(k));
const soloEn = en.filter((k) => !es.includes(k));

// Un valor vacío es tan invisible como una clave que falta.
const vacios = es.filter((k) => {
  const v = k.split('.').reduce((o, p) => (o == null ? o : o[p]), t.es);
  return typeof v === 'string' && v.trim() === '';
});

if (soloEs.length) console.log('SOLO EN ES:\n  ' + soloEs.join('\n  '));
if (soloEn.length) console.log('SOLO EN EN:\n  ' + soloEn.join('\n  '));
if (vacios.length) console.log('VALORES VACÍOS:\n  ' + vacios.join('\n  '));

if (!soloEs.length && !soloEn.length && !vacios.length) {
  console.log(`OK · las dos ramas son simétricas (${es.length} claves)`);
  process.exit(0);
}
process.exit(1);
