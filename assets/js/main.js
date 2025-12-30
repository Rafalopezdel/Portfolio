/**
 * MAIN.JS - Portfolio Rafael López
 * Core application logic
 */

// ========================================
// STATE MANAGEMENT
// ========================================
const AppState = {
  theme: localStorage.getItem('theme') || null,
  lang: localStorage.getItem('lang') || 'es',
  menuVisible: false,

  /**
   * Initialize theme
   * Respects system preference if no saved preference
   */
  initTheme() {
    if (this.theme) {
      this.setTheme(this.theme);
    } else {
      // Detect system preference
      const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
      this.setTheme(prefersDark ? 'dark' : 'light');
    }
  },

  /**
   * Set theme and persist to localStorage
   * @param {string} theme - 'light' or 'dark'
   */
  setTheme(theme) {
    this.theme = theme;
    localStorage.setItem('theme', theme);
    document.documentElement.setAttribute('data-theme', theme);

    // Update dark mode class for Tailwind
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  },

  /**
   * Toggle between light and dark theme
   */
  toggleTheme() {
    const newTheme = this.theme === 'light' ? 'dark' : 'light';
    this.setTheme(newTheme);
  },

  /**
   * Set language and persist to localStorage
   * @param {string} lang - 'es' or 'en'
   */
  setLang(lang) {
    this.lang = lang;
    localStorage.setItem('lang', lang);
    document.documentElement.setAttribute('lang', lang);
    this.updatePageLanguage();
  },

  /**
   * Toggle between Spanish and English
   */
  toggleLang() {
    const newLang = this.lang === 'es' ? 'en' : 'es';
    this.setLang(newLang);
  },

  /**
   * Update all page content with selected language
   * This is a fallback for elements not using Alpine.js
   */
  updatePageLanguage() {
    // This function will be expanded when we refactor the HTML
    // For now, we'll handle it via Alpine.js x-text directives
    console.log(`Language changed to: ${this.lang}`);
  },

  /**
   * Initialize app state
   */
  init() {
    this.initTheme();
    this.setLang(this.lang);

    // Listen for system theme changes
    window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', (e) => {
      // Only auto-switch if user hasn't manually set a preference
      if (!localStorage.getItem('theme')) {
        this.setTheme(e.matches ? 'dark' : 'light');
      }
    });
  }
};

// ========================================
// MENU MANAGEMENT
// ========================================

/**
 * Toggle mobile menu visibility
 */
function mostrarOcultarMenu() {
  const nav = document.getElementById("nav");
  if (AppState.menuVisible) {
    nav.classList.remove("responsive");
    AppState.menuVisible = false;
  } else {
    nav.classList.add("responsive");
    AppState.menuVisible = true;
  }
}

/**
 * Close menu after selecting an option
 */
function seleccionar() {
  const nav = document.getElementById("nav");
  nav.classList.remove("responsive");
  AppState.menuVisible = false;
}

// ========================================
// CV DOWNLOAD
// ========================================

/**
 * Download CV when button is clicked
 */
function initCVDownload() {
  const downloadButton = document.getElementById('descargarCV');
  if (downloadButton) {
    downloadButton.addEventListener('click', function () {
      const enlace = document.createElement('a');
      enlace.href = 'assets/pdf/HojaDeVidaRafaelLopez2025.pdf';
      enlace.download = 'HojaDeVidaRafaelLopez2025.pdf';
      enlace.target = '_blank';
      enlace.click();
    });
  }
}

// ========================================
// SKILLS ANIMATION
// ========================================

/**
 * Animate skills when scrolled into view
 * Legacy function - will be replaced by AOS in Phase 4
 */
function efectoHabilidades() {
  const skills = document.getElementById("skills");
  if (!skills) return;

  const distancia_skills = window.innerHeight - skills.getBoundingClientRect().top;
  if (distancia_skills >= 300) {
    const habilidades = document.getElementsByClassName("skills__progreso");
    if (habilidades.length > 0) {
      habilidades[0]?.classList.add("javascript");
      habilidades[1]?.classList.add("htmlcss");
      habilidades[2]?.classList.add("angular");
      habilidades[3]?.classList.add("react");
      habilidades[4]?.classList.add("nodejs");
      habilidades[5]?.classList.add("comunicacion");
      habilidades[6]?.classList.add("trabajo");
      habilidades[7]?.classList.add("creatividad");
      habilidades[8]?.classList.add("dedicacion");
      habilidades[9]?.classList.add("logic");
    }
  }
}

// Attach scroll listener for skills animation
window.addEventListener('scroll', efectoHabilidades);

// ========================================
// CONTACT FORM
// ========================================

/**
 * Show toast notification
 */
function mostrarToast() {
  const toast = document.getElementById("toast");
  if (toast) {
    toast.classList.remove("opacity-0", "invisible", "translate-y-4");
    toast.classList.add("opacity-100", "visible", "translate-y-0");

    setTimeout(() => {
      toast.classList.add("opacity-0", "invisible", "translate-y-4");
      toast.classList.remove("opacity-100", "visible", "translate-y-0");
    }, 4000);
  }
}

/**
 * Initialize contact form submission
 */
function initContactForm() {
  const form = document.getElementById("formularioContacto");

  if (form) {
    form.addEventListener("submit", function (e) {
      e.preventDefault();

      // Get current language from localStorage (Alpine.js manages this)
      const currentLang = localStorage.getItem('lang') || 'es';
      const toastMessages = {
        es: "✅ Mensaje enviado correctamente.",
        en: "✅ Message sent successfully."
      };

      // Send form data using Fetch API
      fetch(form.action, {
        method: "POST",
        body: new FormData(form),
        headers: {
          'Accept': 'application/json'
        }
      })
      .then(response => {
        if (response.ok) {
          form.reset();

          // Update toast message based on current language
          const toast = document.getElementById("toast");
          if (toast) {
            toast.textContent = toastMessages[currentLang];
          }

          mostrarToast();
        } else {
          const errorMessages = {
            es: "Hubo un error al enviar el mensaje.",
            en: "There was an error sending the message."
          };
          alert(errorMessages[currentLang]);
        }
      })
      .catch(error => {
        const errorMessages = {
          es: "Error al enviar el mensaje. Intenta de nuevo más tarde.",
          en: "Error sending message. Please try again later."
        };
        alert(errorMessages[currentLang]);
      });
    });
  }
}

// ========================================
// SMOOTH SCROLL
// ========================================

/**
 * Smooth scroll to section with offset for fixed header
 * @param {string} targetId - ID of target element
 */
function smoothScrollTo(targetId) {
  const target = document.querySelector(targetId);
  if (target) {
    const headerOffset = 90; // Height of fixed header (increased for new header)
    const elementPosition = target.getBoundingClientRect().top;
    const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

    window.scrollTo({
      top: offsetPosition,
      behavior: "smooth"
    });
  }
}

/**
 * Enhanced smooth scroll for all anchor links
 * Handles the offset for fixed header automatically
 */
function enhancedSmoothScroll() {
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      const href = this.getAttribute('href');

      // Only prevent default for anchor links (not just #)
      if (href && href !== '#') {
        e.preventDefault();
        smoothScrollTo(href);
      }
    });
  });
}

/**
 * Initialize smooth scroll for all navigation links
 */
function initSmoothScroll() {
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      const href = this.getAttribute('href');

      // Only prevent default for anchor links (not #)
      if (href && href !== '#') {
        e.preventDefault();
        smoothScrollTo(href);

        // Close mobile menu if open
        seleccionar();
      }
    });
  });
}

// ========================================
// ACTIVE SECTION HIGHLIGHT
// ========================================

/**
 * Highlight active section in navigation
 * Updates the activeSection in Alpine.js state
 */
function updateActiveNavLink() {
  const sections = document.querySelectorAll('section[id]');

  // Create throttled scroll handler for better performance
  let ticking = false;

  window.addEventListener('scroll', () => {
    if (!ticking) {
      window.requestAnimationFrame(() => {
        let current = 'inicio'; // Default to inicio
        const scrollPosition = window.pageYOffset + 150;

        sections.forEach(section => {
          const sectionTop = section.offsetTop;
          const sectionHeight = section.clientHeight;

          if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
            current = section.getAttribute('id');
          }
        });

        // Dispatch custom event to update Alpine.js state
        document.dispatchEvent(new CustomEvent('activeSection', {
          detail: { section: current }
        }));

        ticking = false;
      });

      ticking = true;
    }
  });
}

/**
 * Initialize active section tracking with Alpine.js
 */
function initActiveSectionTracking() {
  // Listen for custom event from scroll handler
  document.addEventListener('activeSection', (e) => {
    // Update all elements with x-data that have activeSection
    const body = document.querySelector('body');
    if (body && body.__x) {
      // Update Alpine.js reactive state
      const header = document.querySelector('header');
      if (header && header.__x) {
        header.__x.$data.activeSection = e.detail.section;
      }
    }
  });
}

// ========================================
// SCROLL TO TOP BUTTON
// ========================================

/**
 * Show/hide scroll to top button based on scroll position
 */
function initScrollToTop() {
  const scrollButton = document.getElementById('backToTop');

  if (scrollButton) {
    window.addEventListener('scroll', () => {
      if (window.pageYOffset > 300) {
        scrollButton.classList.remove('opacity-0', 'invisible');
        scrollButton.classList.add('opacity-100', 'visible');
      } else {
        scrollButton.classList.add('opacity-0', 'invisible');
        scrollButton.classList.remove('opacity-100', 'visible');
      }
    });
  }
}

// ========================================
// GLOBAL FUNCTIONS FOR ALPINE.JS
// ========================================

/**
 * Make functions available globally for Alpine.js
 */
window.AppState = AppState;
window.toggleTheme = () => AppState.toggleTheme();
window.toggleLang = () => AppState.toggleLang();
window.mostrarOcultarMenu = mostrarOcultarMenu;
window.seleccionar = seleccionar;
window.translations = translations; // From translations.js

// ========================================
// INITIALIZATION
// ========================================

/**
 * Initialize app when DOM is ready
 */
document.addEventListener('DOMContentLoaded', function() {
  // COMMENTED OUT: AppState.init() conflicts with Alpine.js
  // Alpine.js now handles theme and language state
  // AppState.init();

  // Initialize all features
  initCVDownload();
  initContactForm();
  enhancedSmoothScroll(); // Use enhanced version
  updateActiveNavLink();
  initActiveSectionTracking();
  initScrollToTop();

  console.log('Portfolio app initialized successfully!');
  // Get state from Alpine.js instead of AppState
  console.log(`Theme: ${localStorage.getItem('theme') || 'light'}`);
  console.log(`Language: ${localStorage.getItem('lang') || 'es'}`);
});

// ========================================
// EXPORTS (for potential module use)
// ========================================
if (typeof module !== 'undefined' && module.exports) {
  module.exports = {
    AppState,
    mostrarOcultarMenu,
    seleccionar,
    mostrarToast
  };
}
