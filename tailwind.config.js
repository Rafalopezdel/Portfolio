/** Configuracion de Tailwind del portafolio.
 *
 *  Antes vivia en linea dentro de un <script> en cada HTML, junto al compilador
 *  JIT de 407 KB que se descargaba en cada visita. Ahora el CSS se compila aqui
 *  una sola vez (npm run build:css) y se sirve estatico.
 *
 *  ATENCION al bloque `content`: Tailwind solo genera las clases que encuentra
 *  escritas literalmente. `assets/js/*.js` esta en la lista porque main.js
 *  aniade clases en caliente (opacity-0, invisible, translate-y-4...) y sin
 *  escanearlo se purgarian y el toast y el boton de subir dejarian de animarse.
 */
module.exports = {
  darkMode: 'class',
  content: [
    './index.html',
    './projects/*.html',
    './assets/js/*.js',
  ],
  theme: {
    screens: {
      'sm': '640px',
      'md': '768px',
      'lg': '980px',  // 980 y no 1024: es el punto de quiebre del menu
      'xl': '1280px',
      '2xl': '1536px',
    },
    extend: {
      colors: {
        // Acento ADAPTATIVO: la variable cambia segun la superficie
        // (ver assets/css/custom.css). Azul sobre claro, cian sobre oscuro,
        // porque #2563EB sobre navy da 2,5:1 - prohibido por _spec/marca.md.
        primary: 'rgb(var(--acento) / <alpha-value>)',
        'primary-light': 'rgb(var(--acento-2) / <alpha-value>)',
        'primary-dark': '#1E3A8A',
        // FIJOS: fondos rellenos que llevan texto blanco encima.
        brand: '#2563EB',
        'brand-deep': '#1E3A8A',
        'brand-cyan': '#38BDF8',
        navy: '#0D1B2A',
        ink: '#64748B',
        mist: '#F3F4F6',
      },
      fontFamily: {
        heading: ['Montserrat', 'system-ui', 'sans-serif'],
        body: ['Inter', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
