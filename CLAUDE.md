# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a personal portfolio website being migrated to a modern stack with Alpine.js and Tailwind CSS. It's a static site hosted on GitHub Pages at https://rafalopezdel.github.io/Portfolio/. The site supports bilingual content (Spanish/English) and showcases projects, skills, and professional experience.

## Current State & Known Issues

### ⚠️ Active Problem
**Issue**: Menu rendering and Alpine.js scope errors
- **Symptoms**: Menu content appears briefly then disappears, or shows Alpine.js expression errors
- **Root Cause**: Timing issues between `translations.js` loading and Alpine.js initialization
- **Affected Areas**:
  - Desktop navigation menu (items using `translations[lang].nav.*`)
  - Theme toggle button (missing icon)
  - Language toggle button (translations not updating across page)
  - Mobile hamburger menu (may not deploy on click)

### Current Implementation Status
✅ **Working**:
- Alpine.js loaded with `defer` in `<head>`
- `translations.js` loaded before Alpine.js (no defer)
- `window.translations` object properly exposed
- Header has reactive getters: `get lang()`, `get theme()`, `get translations()`
- Desktop and mobile toggle buttons use inline expressions to modify `$root.lang` and `$root.theme`
- Tailwind custom breakpoint `lg: 980px` configured

⚠️ **Needs Verification**:
- Menu content rendering consistently
- Theme icon display (sol/luna)
- Language changes propagating to entire page
- Mobile menu deployment on hamburger click

## Development Commands

This is a static HTML/CSS/JS site with no build process. To develop:

```bash
# Open the main page in a browser
start index.html  # Windows
open index.html   # macOS
xdg-open index.html  # Linux

# Or use a local server (if you have one installed)
python -m http.server 8000
# or
npx serve
```

## Architecture

### Technology Stack
- **Frontend Framework**: Alpine.js 3.13.3 (reactive components)
- **CSS Framework**: Tailwind CSS 3.x (CDN)
- **Icons**: Font Awesome 6.1.2
- **Fonts**: Google Fonts (Righteous, Work Sans)
- **Animation**: AOS (Animate On Scroll) 2.3.1

### File Structure

**HTML**:
- **index.html** - Main entry point with Alpine.js components and Tailwind classes
- **projects/** - Individual project detail pages (project1-5.html)

**CSS**:
- **estilo.css** - Legacy BEM styles (being phased out)
- **assets/css/** - Modern component styles (if any)
- Tailwind CSS via CDN with custom config inline

**JavaScript**:
- **assets/js/translations.js** - Bilingual translation object (es/en) - MUST LOAD FIRST
- **assets/js/main.js** - Core app logic, state management, event handlers
- **assets/js/animations.js** - AOS initialization and custom animations
- **script.js** - COMMENTED OUT (legacy code that interferes with Alpine.js)

**Assets**:
- **assets/img/** - Project screenshots and images
- **assets/pdf/** - CV PDF file for download

### Tailwind Configuration

Custom configuration in `<head>` of index.html:
```javascript
tailwind.config = {
    darkMode: 'class',
    theme: {
        screens: {
            'lg': '980px',  // CUSTOM: Changed from default 1024px for menu breakpoint
            // Other breakpoints: sm: 640px, md: 768px, xl: 1280px, 2xl: 1536px
        },
        extend: {
            colors: {
                primary: '#1CB698',        // Teal accent
                'primary-light': '#10B981',
                'primary-dark': '#059669',
            }
        }
    }
}
```

### Alpine.js Architecture

**Critical Script Loading Order** (in `<head>`):
```html
1. <script src="assets/js/translations.js"></script>           <!-- NO defer -->
2. <script defer src="alpine.js CDN"></script>                 <!-- WITH defer -->
3. Tailwind CSS CDN
```

**Body Scope (`<body x-data>`)**:
```javascript
{
    theme: localStorage.getItem('theme') || 'light',
    lang: localStorage.getItem('lang') || 'es',
    toggleTheme() { /* switches light/dark */ },
    toggleLang() { /* switches es/en */ }
}
```

**Header Scope (`<header x-data>`)**:
```javascript
{
    scrolled: false,
    activeSection: 'inicio',
    menuOpen: false,
    get lang() { return $root.lang; },              // Reactive getter
    get theme() { return $root.theme; },            // Reactive getter
    get translations() { return window.translations; }
}
```

**Key Pattern**: Header uses **getters** to access parent scope reactively, avoiding stale copies.

### JavaScript Modules (assets/js/)

**1. translations.js** - Bilingual Content
```javascript
const translations = {
    es: { nav: {...}, hero: {...}, ... },
    en: { nav: {...}, hero: {...}, ... }
};
window.translations = translations;  // CRITICAL: Expose globally for Alpine.js
```

**2. main.js** - Core Logic
- **AppState**: Theme and language state management
- **Menu Functions**: `mostrarOcultarMenu()`, `seleccionar()` (exposed globally)
- **CV Download**: Event listener on `#descargarCV`
- **Skills Animation**: `efectoHabilidades()` scroll-triggered
- **Contact Form**: FormSubmit.co integration with fetch API
- **Toast Notifications**: `mostrarToast()` for success messages
- **Smooth Scroll**: Enhanced navigation with header offset (90px)
- **Active Section**: Updates `activeSection` based on scroll position

**3. animations.js** - AOS Configuration
- Initializes Animate On Scroll library
- Duration: 1000ms, Easing: ease-in-out
- Offset: 120px, Once: false (repeats)

### Project Pages

Each project page in `projects/` directory:
- References parent stylesheet: `../estilo.css`
- Uses `javascript:history.back()` for navigation
- Two-column layout with images and descriptions
- Links to GitHub repos and live demos

Current projects:
- project1.html - GifExpertApp (React) - Currently commented out in main portfolio
- project2.html - PlayJavaScriptApp (Vanilla JavaScript)
- project3.html - AuthApp (Angular + Nest)
- project4.html - CalendarioApp (MERN Stack)
- project5.html - Website Corporativa (React)

## External Dependencies

All dependencies are loaded via CDN (no package.json):
- **Alpine.js** 3.13.3 - Reactive framework
- **Tailwind CSS** 3.x - Utility-first CSS
- **Font Awesome** 6.1.2 - Icons
- **AOS** 2.3.1 - Scroll animations
- **Google Fonts**: 'Righteous' (headings), 'Work Sans' (body)

## Critical Implementation Notes

### ⚠️ Why script.js is Commented Out
The legacy `script.js` file is **commented out** in index.html because:
1. Function `seleccionar()` uses `document.getElementById("nav").classList = ""` which **deletes ALL classes**
2. This removes Tailwind classes like `hidden lg:flex`, making the menu disappear
3. All functionality has been migrated to `assets/js/main.js`
4. **DO NOT uncomment** unless refactored to avoid class deletion

### Alpine.js Scope Best Practices
1. **Avoid copying values** from `$root` to child scopes - they become stale
2. **Use getters** instead: `get lang() { return $root.lang; }`
3. **Access via getter**: `translations[lang].nav.home` (not `translations[$root.lang]`)
4. **Modify $root directly** in buttons: `@click="$root.lang = 'en'"`

### Troubleshooting Menu Issues

**Problem**: Menu appears then disappears
- **Cause**: `script.js` is not commented out
- **Fix**: Ensure `<!-- <script src="script.js"></script> -->` in index.html

**Problem**: "Cannot read properties of undefined (reading 'nav')"
- **Cause**: `translations[lang]` is undefined - `lang` is not accessible in scope
- **Fix**: Check that header x-data has `get lang() { return $root.lang; }`

**Problem**: Theme/Language buttons empty or not working
- **Cause**: Getters not defined or trying to call `$root.toggleTheme()`
- **Fix**: Use inline expressions: `@click="$root.theme = $root.theme === 'light' ? 'dark' : 'light'; ..."`

**Problem**: Hamburger menu doesn't deploy
- **Cause**: Missing `menuOpen` in header scope or `x-show` directive issues
- **Fix**: Verify header has `menuOpen: false` and menu div has `x-show="menuOpen"`

## Adding New Projects

To add a new project:

1. Create `projects/projectN.html` following the existing template structure
2. Add project images to `assets/img/` (typically 4 screenshots named `projectName1.jpg` through `projectName4.jpg`)
3. Add a new `.proyecto` div in `index.html` within the `#portfolio` section
4. Update the project count in the portfolio section if displaying a counter

## Form Handling

The contact form uses FormSubmit.co as a third-party email service. To change the recipient email, update the form action URL in `index.html` and the fetch URL in `script.js`. No server-side code is required.

## Deployment

The site is deployed to GitHub Pages. Any push to the main branch will automatically update the live site at https://rafalopezdel.github.io/Portfolio/.

## Content Language & Translations

The site is **bilingual** (Spanish/English) using Alpine.js for dynamic content switching.

### Translation Structure
All translatable content is in `assets/js/translations.js`:
```javascript
window.translations = {
    es: {
        nav: { home: "INICIO", about: "SOBRE MI", ... },
        hero: { title: "...", subtitle: "..." },
        // ... more sections
    },
    en: {
        nav: { home: "HOME", about: "ABOUT ME", ... },
        hero: { title: "...", subtitle: "..." },
        // ... more sections
    }
};
```

### Adding New Translatable Content
1. Add to `translations.js` under both `es` and `en` objects
2. Use in HTML: `<span x-text="translations[lang].section.key">Fallback Text</span>`
3. Fallback text shows before Alpine.js loads

### Language Persistence
- Stored in `localStorage.getItem('lang')`
- Default: `'es'` (Spanish)
- Toggle via buttons updates both `$root.lang` and `localStorage`
