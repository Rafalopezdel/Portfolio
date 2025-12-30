/**
 * ANIMATIONS.JS - Portfolio Rafael López
 * AOS (Animate On Scroll) configuration and custom animations
 */

// ========================================
// AOS CONFIGURATION
// ========================================

/**
 * Initialize AOS with custom configuration
 */
function initAOS() {
  // Check if AOS is loaded
  if (typeof AOS !== 'undefined') {
    AOS.init({
      // Animation duration
      duration: 800,

      // Easing function
      easing: 'ease-out-cubic',

      // Whether animation should happen only once
      once: true,

      // Whether elements should animate out while scrolling past them
      mirror: false,

      // Offset (in px) from the original trigger point
      offset: 120,

      // Delay for animations
      delay: 0,

      // Anchor placement
      anchorPlacement: 'top-bottom',

      // Disable on mobile devices (optional)
      disable: false,

      // Throttle delay on resize
      throttleDelay: 99,

      // Settings that can be overridden on per-element basis
      startEvent: 'DOMContentLoaded',
    });

    console.log('AOS initialized successfully!');
  } else {
    console.warn('AOS library not loaded. Animations will not work.');
  }
}

// ========================================
// CUSTOM ANIMATIONS
// ========================================

/**
 * Custom fade in animation for hero elements
 */
function animateHeroElements() {
  const heroElements = document.querySelectorAll('.hero-animate');

  heroElements.forEach((element, index) => {
    setTimeout(() => {
      element.classList.add('fade-in');
    }, index * 150); // Stagger animation by 150ms
  });
}

/**
 * Skill tags animation
 * Animates skill tags with a stagger effect
 */
function animateSkillTags() {
  const skillTags = document.querySelectorAll('.skill-tag');

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry, index) => {
      if (entry.isIntersecting) {
        setTimeout(() => {
          entry.target.classList.add('skill-visible');
        }, index * 50); // Stagger by 50ms
      }
    });
  }, {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
  });

  skillTags.forEach(tag => observer.observe(tag));
}

/**
 * Portfolio cards hover effect enhancement
 */
function enhancePortfolioCards() {
  const portfolioCards = document.querySelectorAll('.portfolio__proyecto');

  portfolioCards.forEach(card => {
    card.addEventListener('mouseenter', function() {
      this.style.transform = 'translateY(-10px) scale(1.02)';
    });

    card.addEventListener('mouseleave', function() {
      this.style.transform = 'translateY(0) scale(1)';
    });
  });
}

/**
 * Parallax effect for background elements
 */
function initParallax() {
  const parallaxElements = document.querySelectorAll('[data-parallax]');

  if (parallaxElements.length > 0) {
    window.addEventListener('scroll', () => {
      const scrolled = window.pageYOffset;

      parallaxElements.forEach(element => {
        const speed = element.dataset.parallax || 0.5;
        const yPos = -(scrolled * speed);
        element.style.transform = `translateY(${yPos}px)`;
      });
    });
  }
}

/**
 * Typing effect for hero subtitle
 * @param {string} elementId - ID of the element to apply typing effect
 * @param {string} text - Text to type
 * @param {number} speed - Typing speed in milliseconds
 */
function typingEffect(elementId, text, speed = 100) {
  const element = document.getElementById(elementId);
  if (!element) return;

  let index = 0;
  element.textContent = '';

  function type() {
    if (index < text.length) {
      element.textContent += text.charAt(index);
      index++;
      setTimeout(type, speed);
    }
  }

  // Start typing after a short delay
  setTimeout(type, 500);
}

/**
 * Counter animation for statistics
 * @param {HTMLElement} element - Element to animate
 * @param {number} target - Target number
 * @param {number} duration - Animation duration in ms
 */
function animateCounter(element, target, duration = 2000) {
  let start = 0;
  const increment = target / (duration / 16); // 60fps
  const timer = setInterval(() => {
    start += increment;
    element.textContent = Math.floor(start);

    if (start >= target) {
      element.textContent = target;
      clearInterval(timer);
    }
  }, 16);
}

/**
 * Scroll reveal animation for elements
 */
function initScrollReveal() {
  const revealElements = document.querySelectorAll('.reveal');

  const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('revealed');
        revealObserver.unobserve(entry.target);
      }
    });
  }, {
    threshold: 0.15,
    rootMargin: '0px 0px -50px 0px'
  });

  revealElements.forEach(element => revealObserver.observe(element));
}

/**
 * Navbar scroll effect
 * Changes navbar appearance on scroll
 */
function initNavbarScroll() {
  const navbar = document.querySelector('.menu');

  if (navbar) {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
      } else {
        navbar.classList.remove('scrolled');
      }
    });
  }
}

/**
 * Image lazy loading with blur effect
 */
function initLazyLoadImages() {
  const lazyImages = document.querySelectorAll('img[data-src]');

  const imageObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const img = entry.target;
        img.src = img.dataset.src;
        img.classList.add('loaded');
        imageObserver.unobserve(img);
      }
    });
  });

  lazyImages.forEach(img => imageObserver.observe(img));
}

/**
 * Cursor trail effect (optional, for premium feel)
 */
function initCursorTrail() {
  const cursor = document.createElement('div');
  cursor.classList.add('custom-cursor');
  document.body.appendChild(cursor);

  let mouseX = 0, mouseY = 0;
  let cursorX = 0, cursorY = 0;

  document.addEventListener('mousemove', (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;
  });

  function animateCursor() {
    const speed = 0.2;
    cursorX += (mouseX - cursorX) * speed;
    cursorY += (mouseY - cursorY) * speed;

    cursor.style.transform = `translate(${cursorX}px, ${cursorY}px)`;
    requestAnimationFrame(animateCursor);
  }

  animateCursor();
}

/**
 * Button ripple effect
 */
function initButtonRipple() {
  const buttons = document.querySelectorAll('button, .btn');

  buttons.forEach(button => {
    button.addEventListener('click', function(e) {
      const ripple = document.createElement('span');
      ripple.classList.add('ripple');

      const rect = this.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      ripple.style.left = `${x}px`;
      ripple.style.top = `${y}px`;

      this.appendChild(ripple);

      setTimeout(() => ripple.remove(), 600);
    });
  });
}

// ========================================
// INITIALIZATION
// ========================================

/**
 * Initialize all animations when DOM is ready
 */
document.addEventListener('DOMContentLoaded', function() {
  // Initialize AOS
  initAOS();

  // Initialize custom animations
  animateHeroElements();
  animateSkillTags();
  enhancePortfolioCards();
  initParallax();
  initScrollReveal();
  initNavbarScroll();
  initLazyLoadImages();
  initButtonRipple();

  // Optional: Cursor trail (uncomment to enable)
  // initCursorTrail();

  console.log('All animations initialized!');
});

// ========================================
// REFRESH AOS ON DYNAMIC CONTENT
// ========================================

/**
 * Refresh AOS when language changes or content updates
 */
function refreshAnimations() {
  if (typeof AOS !== 'undefined') {
    AOS.refresh();
  }
}

// Listen for language changes
document.addEventListener('languageChanged', refreshAnimations);

// ========================================
// EXPORTS
// ========================================
window.refreshAnimations = refreshAnimations;
window.animateCounter = animateCounter;
window.typingEffect = typingEffect;
