# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a personal portfolio website built with Alpine.js and Tailwind CSS. It's a static site hosted on GitHub Pages at https://rafalopezdel.github.io/Portfolio/. The site supports bilingual content (Spanish/English) and showcases projects, skills, and professional experience.

## Current State

### ✅ Fully Working Features
- ✅ **Desktop Navigation**: Menu with smooth scroll and active section highlighting
- ✅ **Mobile Navigation**: Hamburger menu with slide-down animation
- ✅ **Theme Toggle**: Light/Dark mode with localStorage persistence and reactive icons (🌙/☀️)
- ✅ **Language Toggle**: Spanish/English switching with full page translation
- ✅ **Responsive Design**: Works on all screen sizes (mobile, tablet, desktop)
- ✅ **Translations**: All content translates dynamically using Alpine.js
- ✅ **Forms**: Contact form with FormSubmit.co integration
- ✅ **Animations**: AOS (Animate On Scroll) for smooth entrance effects

### 🎯 Key Solutions Implemented

**Problem 1**: Menu and translations not working
- **Solution**: Simplified Alpine.js architecture - removed complex nested scopes, use `lang` and `theme` directly from `<body>` scope
- **Pattern**: `translations[lang].nav.home` (simple and direct)

**Problem 2**: Theme/Language icons not changing
- **Solution**: Use `:class` for dynamic icons instead of `x-show`
- **Example**: `<i :class="theme === 'dark' ? 'fa-sun' : 'fa-moon'"></i>`

**Problem 3**: Mobile menu not displaying
- **Solution**: Force `display: block !important` to override legacy CSS
- **Reason**: Old `estilo.css` had CSS rules hiding the nav
- **Fix**: Added inline styles with `!important` on both menu container and `<nav>`

## Development Commands

This is a static HTML/CSS/JS site with no build process. To develop:

```bash
# Open the main page in a browser
start index.html  # Windows
open index.html   # macOS
xdg-open index.html  # Linux

# Or use a local server (recommended for testing)
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
- **estilo.css** - Legacy BEM styles (⚠️ Contains CSS that can interfere with Alpine.js)
- **assets/css/custom.css** - Additional custom styles
- Tailwind CSS via CDN with custom config inline

**JavaScript**:
- **assets/js/translations.js** - Bilingual translation object (es/en) - MUST LOAD FIRST
- **assets/js/main.js** - Core app logic (⚠️ AppState.init() is commented out to avoid conflicts)
- **assets/js/animations.js** - AOS initialization and custom animations
- **script.js** - ⚠️ COMMENTED OUT (legacy code that interferes with Alpine.js)

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
3. <script src="tailwind.js CDN"></script>
```

**Body Scope (`<body x-data>`)** - The ONLY source of truth:
```javascript
{
    theme: localStorage.getItem('theme') || 'light',
    lang: localStorage.getItem('lang') || 'es',
    toggleTheme() { /* switches light/dark */ },
    toggleLang() { /* switches es/en */ }
}
```

**Header Scope (`<header x-data>`)** - Minimal, only menu-specific state:
```javascript
{
    scrolled: false,
    activeSection: 'inicio',
    menuOpen: false
}
```

**Key Pattern**:
- ✅ Access `lang` and `theme` **directly** from body scope (no getters, no $root)
- ✅ Use `:class` for dynamic icons/content instead of `x-show`
- ✅ Use `translations[lang].section.key` for all translations

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
- **AppState**: ⚠️ `AppState.init()` is **commented out** (Alpine.js handles state)
- **Menu Functions**: Legacy `mostrarOcultarMenu()`, `seleccionar()` are **not used**
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

Each project page in `projects/` directory follows a **simple, working pattern**:
```html
<html x-data="{ theme: localStorage.getItem('theme') || 'light', lang: localStorage.getItem('lang') || 'es' }">
```

Features:
- Single scope at `<html>` level
- Direct access to `lang` and `theme` (no $root, no getters)
- Buttons: `@click="lang = lang === 'es' ? 'en' : 'es'; localStorage.setItem('lang', lang)"`
- Icons: `:class="theme === 'dark' ? 'fa-sun' : 'fa-moon'"`

Current projects:
- project1.html - Asistente WhatsApp Dental (Claude AI + Firebase)
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
3. All functionality has been migrated to Alpine.js
4. **DO NOT uncomment** unless refactored to avoid class deletion

### ⚠️ Why AppState.init() is Commented Out
In `main.js`, the line `AppState.init()` is commented out because:
1. It was competing with Alpine.js for state management
2. Alpine.js (in `<body x-data>`) is now the single source of truth
3. The form handler and other utilities in main.js still work, just not AppState initialization

### Alpine.js Best Practices (Lessons Learned)

**✅ DO:**
1. Keep it simple - use direct property access: `translations[lang].nav.home`
2. Use `:class` for dynamic icons/content instead of multiple `x-show`
3. Access `lang` and `theme` directly from body scope (they're available everywhere)
4. Use inline expressions in buttons: `@click="lang = lang === 'es' ? 'en' : 'es'"`
5. Follow the project pages pattern - it's proven to work perfectly

**❌ DON'T:**
1. Use `$root` - it's not needed in this simple architecture
2. Create getters in child scopes - they become stale and non-reactive
3. Use optional chaining (`?.`) unnecessarily - if translations load first, it's not needed
4. Overcomplicate with nested scopes - keep state at body level

### Mobile Menu Implementation

The mobile menu requires **force-showing with inline styles** to override legacy CSS:

```html
<!-- Menu container -->
<div x-show="menuOpen"
     :style="menuOpen ? 'display: block !important;' : 'display: none;'"
     class="lg:hidden ...">

    <!-- Nav element -->
    <nav style="display: block !important;" class="...">
        <!-- Menu items -->
    </nav>
</div>
```

**Why `!important` is needed:**
- Legacy `estilo.css` has CSS rules that set `nav { display: none }` in certain contexts
- The `!important` overrides these legacy rules
- Without it, the menu div shows but the nav inside stays hidden

**Button toggle:**
```html
<button @click="menuOpen = !menuOpen">
    <i :class="menuOpen ? 'fa-times' : 'fa-bars'"></i>
</button>
```

## Troubleshooting

### Problem: Translations not updating when language changes
**Cause**: Using getters or `$root` instead of direct access
**Fix**: Change `translations?.[lang]?.nav?.home` to `translations[lang].nav.home`

### Problem: Icons not changing (theme/language buttons)
**Cause**: Using `x-show` with multiple elements instead of `:class`
**Fix**:
```html
<!-- ❌ Don't do this -->
<i x-show="theme === 'light'" class="fa-moon"></i>
<i x-show="theme === 'dark'" class="fa-sun"></i>

<!-- ✅ Do this instead -->
<i :class="theme === 'dark' ? 'fa-sun' : 'fa-moon'"></i>
```

### Problem: Mobile menu doesn't show
**Cause**: Legacy CSS hiding the nav element
**Fix**: Add `style="display: block !important;"` to the `<nav>` element inside the mobile menu

### Problem: Menu appears then disappears
**Cause**: `script.js` is not commented out
**Fix**: Ensure `<!-- <script src="script.js"></script> -->` in index.html

## Adding New Projects

To add a new project:

1. Create `projects/projectN.html` following the existing template structure
2. Copy the Alpine.js setup from any existing project page (simple, single scope)
3. Add project images to `assets/img/`
4. Add translations to `assets/js/translations.js` under `project{N}` key
5. Add a new project card in `index.html` within the `#portfolio` section

## Form Handling

The contact form uses FormSubmit.co as a third-party email service:
- No server-side code required
- Form action: `https://formsubmit.co/{email}`
- Language-aware success/error messages using `localStorage.getItem('lang')`

## Deployment

The site is deployed to GitHub Pages:
- **URL**: https://rafalopezdel.github.io/Portfolio/
- **Branch**: main
- Any push to main automatically updates the live site

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
- Toggle via buttons updates both `lang` variable and `localStorage`
- No need for `toggleLang()` function - inline expressions work better

## Performance Notes

- All dependencies loaded via CDN (no build step)
- Alpine.js with `defer` ensures DOM is ready before initialization
- `translations.js` loaded without `defer` to ensure it's available when Alpine.js starts
- AOS animations only initialize after DOM content loaded
