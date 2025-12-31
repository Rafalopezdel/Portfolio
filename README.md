# 🌐 Portfolio Web - Rafael López

[![Live Demo](https://img.shields.io/badge/demo-online-green.svg)](https://rafalopezdel.github.io/Portfolio/)
[![GitHub Pages](https://img.shields.io/badge/hosted-GitHub%20Pages-blue.svg)](https://pages.github.com/)
[![License](https://img.shields.io/badge/license-MIT-blue.svg)](LICENSE)

> Portfolio personal moderno construido con Alpine.js y Tailwind CSS. Sitio bilingüe (Español/Inglés) con modo claro/oscuro, diseño responsive y animaciones suaves.

## ✨ Características

- 🌍 **Bilingüe**: Español e Inglés con cambio dinámico
- 🌓 **Modo Claro/Oscuro**: Persistente con localStorage
- 📱 **Totalmente Responsive**: Funciona en móvil, tablet y desktop
- ⚡ **Sin Build Process**: HTML, CSS y JS puro
- 🎨 **Animaciones Suaves**: AOS (Animate On Scroll)
- 📧 **Formulario Funcional**: Integrado con FormSubmit.co
- 🚀 **Carga Rápida**: Todas las dependencias via CDN

## 🚀 Tecnologías

### Frontend
- **[Alpine.js 3.13.3](https://alpinejs.dev/)** - Framework reactivo ligero
- **[Tailwind CSS 3.x](https://tailwindcss.com/)** - Framework CSS utility-first
- **HTML5** - Estructura semántica
- **JavaScript (Vanilla)** - Lógica de negocio

### Librerías
- **[Font Awesome 6.1.2](https://fontawesome.com/)** - Iconos
- **[AOS 2.3.1](https://michalsnik.github.io/aos/)** - Animaciones on scroll
- **[Google Fonts](https://fonts.google.com/)** - Tipografías (Righteous, Work Sans)

### Servicios
- **[GitHub Pages](https://pages.github.com/)** - Hosting estático
- **[FormSubmit.co](https://formsubmit.co/)** - Servicio de formularios

## 🎯 Funcionalidades

### Navegación
- ✅ Menú desktop con smooth scroll
- ✅ Menú móvil hamburguesa animado
- ✅ Indicador de sección activa
- ✅ Scroll suave a secciones

### Interactividad
- ✅ Toggle de idioma (🇪🇸/🇬🇧) con traducciones en tiempo real
- ✅ Toggle de tema (🌙/☀️) con persistencia
- ✅ Formulario de contacto funcional
- ✅ Descarga de CV en PDF
- ✅ Animaciones al hacer scroll

### Proyectos Destacados
1. **Asistente WhatsApp Dental** - Chatbot con IA Claude + Firebase
2. **PlayJavaScriptApp** - Juego interactivo con Vanilla JS
3. **AuthApp** - Sistema de autenticación con Angular + Nest
4. **CalendarioApp** - Calendario MERN Stack
5. **Website Corporativa** - Sitio empresarial con React

## 📁 Estructura del Proyecto

```
Portfolio/
├── index.html              # Página principal
├── assets/
│   ├── css/
│   │   └── custom.css      # Estilos personalizados
│   ├── js/
│   │   ├── translations.js # Traducciones ES/EN
│   │   ├── main.js         # Lógica principal
│   │   └── animations.js   # Configuración AOS
│   ├── img/                # Imágenes y screenshots
│   └── pdf/                # CV descargable
├── projects/               # Páginas de proyectos
│   ├── project1.html
│   ├── project2.html
│   └── ...
├── estilo.css             # Estilos legacy
└── README.md              # Este archivo
```

## 🛠️ Instalación y Uso

### Opción 1: Abrir Directamente
```bash
# Clonar el repositorio
git clone https://github.com/Rafalopezdel/Portfolio.git

# Entrar al directorio
cd Portfolio

# Abrir en navegador
# Windows
start index.html

# macOS
open index.html

# Linux
xdg-open index.html
```

### Opción 2: Con Servidor Local (Recomendado)
```bash
# Con Python
python -m http.server 8000

# Con Node.js
npx serve

# Luego abrir http://localhost:8000
```

## 🎨 Personalización

### Cambiar Colores
Edita la configuración de Tailwind en `index.html`:
```javascript
tailwind.config = {
    theme: {
        extend: {
            colors: {
                primary: '#1CB698',        // Tu color primario
                'primary-light': '#10B981',
                'primary-dark': '#059669',
            }
        }
    }
}
```

### Agregar Traducciones
Edita `assets/js/translations.js`:
```javascript
window.translations = {
    es: {
        nuevaSeccion: {
            titulo: "Título en Español",
            descripcion: "Descripción..."
        }
    },
    en: {
        nuevaSeccion: {
            titulo: "Title in English",
            descripcion: "Description..."
        }
    }
};
```

Usa en HTML:
```html
<h2 x-text="translations[lang].nuevaSeccion.titulo">Título en Español</h2>
```

### Agregar Proyecto
1. Crea `projects/projectN.html` copiando la estructura de un proyecto existente
2. Agrega imágenes a `assets/img/`
3. Agrega traducciones a `translations.js` bajo `projectN`
4. Agrega una tarjeta en la sección `#portfolio` de `index.html`

## 🌐 Despliegue

El sitio está configurado para desplegarse automáticamente en GitHub Pages:

1. **Push a main**: Cualquier cambio en la rama `main` se despliega automáticamente
2. **URL en vivo**: https://rafalopezdel.github.io/Portfolio/
3. **Configuración**: GitHub Pages → Source: main branch → root directory

### Deploy Manual
```bash
git add .
git commit -m "Update portfolio"
git push origin main
# Espera 1-2 minutos y el sitio se actualizará
```

## 📧 Contacto

- **Email**: [rafalopezdel@gmail.com](mailto:rafalopezdel@gmail.com)
- **LinkedIn**: [rafael-lópez-delgado](https://www.linkedin.com/in/rafael-lópez-delgado)
- **GitHub**: [@Rafalopezdel](https://github.com/Rafalopezdel)
- **Website**: [rafalopezdel.github.io/Portfolio](https://rafalopezdel.github.io/Portfolio/)

## 🤝 Contribuciones

Las contribuciones son bienvenidas. Si encuentras un bug o tienes una sugerencia:

1. Fork el proyecto
2. Crea una rama para tu feature (`git checkout -b feature/AmazingFeature`)
3. Commit tus cambios (`git commit -m 'Add some AmazingFeature'`)
4. Push a la rama (`git push origin feature/AmazingFeature`)
5. Abre un Pull Request

## 📝 Notas Técnicas

### Alpine.js
- El estado global (`lang` y `theme`) se maneja en `<body x-data>`
- Los componentes acceden al estado directamente (no se usa `$root`)
- Las traducciones se cargan antes de Alpine.js para evitar errores

### Tailwind CSS
- Breakpoint personalizado: `lg: 980px` (en lugar de 1024px)
- Modo oscuro con clase: `darkMode: 'class'`
- Colores personalizados definidos en `theme.extend.colors`

### Compatibilidad
- ✅ Chrome/Edge (últimas versiones)
- ✅ Firefox (últimas versiones)
- ✅ Safari (últimas versiones)
- ✅ Mobile browsers (iOS Safari, Chrome Mobile)

## 📄 Licencia

Este proyecto está bajo la Licencia MIT. Ver archivo `LICENSE` para más detalles.

---

⭐ **Si te gusta este proyecto, dale una estrella en GitHub!**

Hecho con ❤️ y ☕ por [Rafael López](https://github.com/Rafalopezdel)
