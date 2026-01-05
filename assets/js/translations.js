/**
 * TRANSLATIONS.JS - Portfolio Rafael López
 * Multi-language support (Spanish/English)
 */

const translations = {
  // ========================================
  // SPANISH TRANSLATIONS
  // ========================================
  es: {
    // Navigation
    nav: {
      home: "INICIO",
      about: "SOBRE MI",
      skills: "SKILLS",
      curriculum: "CURRICULUM",
      portfolio: "PORTFOLIO",
      contact: "CONTACTO"
    },

    // Hero Section
    hero: {
      title: "RAFAEL LÓPEZ",
      subtitle: "Full Stack Developer | MERN Stack • WordPress • IA Solutions",
      tagline: "Creando experiencias web modernas e inteligentes con IA",
      viewProjects: "Ver Proyectos",
      contactMe: "Contáctame",
      scroll: "Desliza"
    },

    // About Section
    about: {
      title: "Sobre Mí",
      intro: "Hola, soy Rafael López.",
      description: "Full Stack Developer con +3 años de experiencia construyendo aplicaciones web modernas y escalables. Especializado en MERN Stack (MongoDB, Express, React, Node.js), WordPress, y desarrollo de soluciones inteligentes con IA.\n\nMi experiencia incluye desde la creación de sitios corporativos en WordPress hasta sistemas complejos como chatbots con Claude AI integrados a WhatsApp Business API, automatizando procesos empresariales y mejorando la experiencia de usuarios finales.\n\nMi formación en Ingeniería Industrial me aporta una perspectiva única: no solo desarrollo código limpio y eficiente, sino que optimizo procesos, resuelvo problemas de negocio y mejoro la productividad mediante soluciones tecnológicas innovadoras.",
      personalDataTitle: "Datos Personales",
      birthday: "Cumpleaños",
      phone: "Teléfono",
      email: "Email",
      website: "Website",
      address: "Dirección",
      position: "Cargo",
      positionValue: "Full Stack Developer",
      interestsTitle: "Intereses",
      interests: {
        music: "MUSICA",
        games: "JUEGOS",
        travel: "VIAJAR",
        sports: "DEPORTE",
        books: "LIBROS",
        meditation: "MEDITACIÓN"
      },
      downloadCV: "Descargar CV"
    },

    // Skills Section
    skills: {
      title: "Skills",
      levels: {
        basic: "Básico",
        novice: "Novato",
        intermediate: "Intermedio",
        advanced: "Avanzado",
        expert: "Experto"
      },
      technical: "Technical Skills",
      professional: "Professional Skills",
      list: {
        javascript: "Javascript",
        htmlcss: "HTML & CSS",
        angular: "Angular",
        react: "React",
        nodejs: "NodeJS",
        problemSolving: "Resolución de Problemas",
        codeReview: "Code Review & Documentación",
        agile: "Metodologías Ágiles",
        technicalComm: "Comunicación Técnica",
        projectMgmt: "Gestión de Proyectos",
        processOpt: "Optimización de Procesos",
        adaptability: "Adaptabilidad",
        continuousLearning: "Aprendizaje Continuo"
      }
    },

    // Curriculum Section
    curriculum: {
      title: "Curriculum",
      education: "Educación",
      experience: "Experiencia de trabajo",
      items: {
        reactCourse: {
          title: "Curso React de Cero a Experto",
          institution: "Udemy",
          year: "2025",
          description: "React de cero a experto: Context API, MERN, Hooks, Firestore, JWT, Testing, Autenticaciones, Despliegues, CRUD, Logs, MUI, Multiple Routers y mucho más. Con la capacidad de desenvolverme eficientemente con el Framework siguiendo los estándares para comprender código de otros desarrolladores y optimizar el propio."
        },
        angularCourse: {
          title: "Curso Angular de Cero a Experto",
          institution: "Udemy",
          year: "2022",
          description: "Angular de cero a experto: Signals, componentes, directivas, servicios, mapas, JWT, autenticación, despliegues, mongo, Git, GitHub y mucho más. Con la capacidad de desenvolverme eficientemente con el Framework siguiendo los estándares para comprender código de otros desarrolladores y optimizar el propio."
        },
        webCourse: {
          title: "Curso HTML, CSS y JavaScript",
          institution: "Udemy",
          year: "2021",
          description: "Master en HTML, CSS3, Maquetación web, Responsive Web Design, SASS, LESS, Flexbox, CSS Grid, Bootstrap, Javascript, JQuery desde cero con más de 40 horas de videos estudiados, con la capacidad de maquetar diferentes diseños web y darle su respectiva funcionalidad."
        },
        university: {
          title: "Ingenieria Industrial",
          institution: "Universidad Tecnologica de Pereira",
          year: "2009 - 2014",
          description: "Por mi formación académica, puedo desempeñarme como un profesional capaz de investigar, innovar y optimizar procesos de producción y servicios, buscando altos rendimientos económicos, financieros y sociales, así como mejorar la productividad, calidad y competitividad en las organizaciones."
        },
        lopezoft: {
          title: "Full Stack Developer",
          institution: "Lopezoft Soluciones Informáticas",
          year: "2022 - Presente",
          description: "Desarrollo aplicaciones web full-stack para clientes de diversos sectores utilizando tecnologías modernas y siguiendo mejores prácticas de la industria.\n\n• Implementé chatbot inteligente con Claude AI integrado a WhatsApp Business API y Dentalink, automatizando gestión de citas dentales y reduciendo carga operativa del personal administrativo\n• Desarrollé 5+ sitios web corporativos con WordPress/Divi y React/Tailwind CSS, optimizados para SEO y rendimiento\n• Construí sistema de autenticación JWT en Angular/Nest con guards, renovación de tokens y manejo seguro de sesiones\n• Creé aplicación colaborativa MERN Stack (calendario de eventos) con CRUD completo, Redux Toolkit y persistencia en MongoDB Atlas\n• Trabajo con metodologías ágiles, Git/GitHub para control de versiones, y despliegue en Firebase y GitHub Pages\n\nStack: React, Angular, Node.js, Express, MongoDB, Firebase, TypeScript, WordPress, Tailwind CSS"
        },
        g3: {
          title: "Gerente General",
          institution: "G3 Seguridad",
          year: "2016 - 2022",
          description: "Fundé y dirigí empresa de distribución de hardware de seguridad electrónica con operaciones en 5 ciudades a nivel nacional.\n\n• Lideré equipos multidisciplinarios en ventas, logística y operaciones, desarrollando habilidades de gestión que hoy aplico en proyectos de desarrollo de software\n• Optimicé procesos comerciales y operativos, reduciendo tiempos de entrega y mejorando satisfacción del cliente mediante análisis de datos y automatización\n• Gestioné proyectos complejos desde la planificación hasta la ejecución, coordinando recursos y resolviendo problemas críticos bajo presión\n• Negocié con proveedores y clientes, fortaleciendo capacidades de comunicación técnica y toma de decisiones estratégicas\n\nSkills transferibles: Gestión de proyectos, liderazgo, optimización de procesos, resolución de problemas, pensamiento analítico"
        },
        servientrega: {
          title: "Analista - Practicante",
          institution: "Servientrega S.A.",
          year: "2014 - 2015",
          description: "Estudio de tiempos y movimientos en el área de logística con el objetivo de implementar pagos por productividad en la entrega de mercancías desarrollando un algoritmo que mide el tiempo y esfuerzo de entrega por zona regional determinada."
        }
      }
    },

    // Portfolio Section
    portfolio: {
      title: "PORTFOLIO",
      projects: {
        whatsappBot: {
          title: "Asistente WhatsApp Dental",
          tech: "Claude AI - Firebase",
          description: "Chatbot inteligente para clínica dental con integración a Dentalink"
        },
        calendarApp: {
          title: "CalendarioApp",
          tech: "MERN Stack",
          description: "Aplicación de calendario colaborativo con autenticación y gestión de eventos"
        },
        wordpressDivi: {
          title: "Sitio Corporativo Divi",
          tech: "WordPress - Divi",
          description: "Página web corporativa profesional desarrollada con WordPress y Divi Builder"
        },
        webCorporativa: {
          title: "Website Corporativa",
          tech: "React",
          description: "Sitio web corporativo moderno desarrollado con React y Tailwind CSS"
        },
        authApp: {
          title: "AuthApp",
          tech: "Angular - Nest",
          description: "Sistema de autenticación robusto con JWT y guards de protección"
        },
        playJavaScript: {
          title: "PlayJavaScriptApp",
          tech: "Javascript",
          description: "Aplicación interactiva para practicar conceptos de JavaScript vanilla"
        },
        gifExpertApp: {
          title: "GifExpertApp",
          tech: "React",
          description: "Buscador de GIFs animados con integración a la API de Giphy"
        }
      }
    },

    // Contact Section
    contact: {
      title: "CONTACTO",
      form: {
        name: "Tú Nombre",
        phone: "Número telefónico",
        email: "Dirección de correo",
        subject: "Tema",
        message: "Mensaje",
        send: "Enviar Mensaje"
      },
      info: {
        location: "CC Fiducentro Local Verde 33",
        call: "Llamanos: (+57) 300 6436473",
        email: "Email: rafalopezdel@gmail.com"
      },
      toast: "✅ Mensaje enviado correctamente."
    },

    // Common
    common: {
      loading: "Cargando...",
      error: "Hubo un error",
      success: "Éxito"
    },

    // Project Detail Pages
    projectDetail: {
      backToPortfolio: "Volver al Portfolio",
      projectOverview: "Descripción del Proyecto",
      screenshots: "Capturas de Pantalla",
      siteShowcase: "Muestra del Sitio",
      keyFeatures: "Características Principales",
      techStack: "Stack Tecnológico",
      technicalHighlights: "Aspectos Técnicos Destacados",
      componentStructure: "Estructura de Componentes",
      websiteStructure: "Estructura del Sitio Web",
      viewLiveSite: "Ver Sitio en Vivo",
      visitSite: "Visitar Sitio",
      projectLinks: "Enlaces del Proyecto",
      viewOnGitHub: "Ver en GitHub",
      liveDemo: "Demo en Vivo",
      whyDivi: "¿Por qué Divi Builder?",
      developmentWorkflow: "Flujo de Desarrollo",
      keyIntegrations: "Integraciones Clave",
      allRightsReserved: "Todos los derechos reservados.",
      viewMoreProjects: "Ver Más Proyectos"
    },

    // Project 1: WhatsApp Assistant
    project1: {
      title: "Asistente WhatsApp Dental",
      subtitle: "Chatbot inteligente con IA Claude para gestión automatizada de citas dentales",
      overview: {
        title: "Descripción del Proyecto",
        p1: "Sistema avanzado de chatbot desarrollado con Claude AI que funciona como asistente virtual para una clínica dental, integrado directamente con WhatsApp Business API y el sistema de gestión Dentalink.",
        p2: "El bot utiliza la capacidad de function calling de Claude AI para realizar operaciones específicas como consultar disponibilidad de citas, crear pacientes, modificar reservas y responder preguntas frecuentes de manera natural y contextual.",
        p3: "Construido sobre Firebase Cloud Functions para garantizar escalabilidad y disponibilidad 24/7, con Firestore como base de datos para mantener el historial de conversaciones y el estado de cada sesión."
      },
      integrations: {
        title: "Integraciones Clave",
        whatsapp: {
          title: "WhatsApp Business API",
          desc: "Conexión directa con Meta para enviar y recibir mensajes de forma oficial"
        },
        dentalink: {
          title: "API Dentalink",
          desc: "Integración completa con el sistema de gestión dental para consultas y reservas"
        },
        claude: {
          title: "Claude AI API",
          desc: "Motor de inteligencia artificial con capacidad de function calling para entender intenciones"
        },
        firebase: {
          title: "Firebase Cloud Functions",
          desc: "Arquitectura serverless que escala automáticamente según la demanda"
        },
        firestore: {
          title: "Firestore Database",
          desc: "Base de datos NoSQL en tiempo real para gestionar sesiones y logs"
        },
        storage: {
          title: "Firebase Storage",
          desc: "Almacenamiento de archivos adjuntos y respaldos de conversaciones"
        }
      },
      features: {
        title: "Características Principales",
        memory: {
          title: "Memoria Persistente",
          desc: "Reconoce a los usuarios que regresan y los saluda por su nombre, manteniendo el contexto entre conversaciones"
        },
        logging: {
          title: "Registro de Conversaciones",
          desc: "Almacena todo el historial de mensajes en Firestore para análisis y mejora continua"
        },
        buffer: {
          title: "Buffer de Mensajes",
          desc: "Sistema de cola que procesa mensajes en orden y evita pérdidas durante picos de tráfico"
        },
        integration: {
          title: "Integración de Datos",
          desc: "Conexión bidireccional con Dentalink para consultar y actualizar información de pacientes y citas"
        },
        appointments: {
          title: "Gestión de Citas",
          desc: "Permite agendar, modificar y cancelar citas directamente desde WhatsApp de forma conversacional"
        },
        raceCondition: {
          title: "Prevención de Condiciones de Carrera",
          desc: "Implementa locks para evitar procesamiento simultáneo de mensajes del mismo usuario"
        },
        humanTransfer: {
          title: "Sistema de Transferencia",
          desc: "Derivación inteligente a operadores humanos cuando la situación lo requiere"
        },
        aiAssistant: {
          title: "Asistente Personal",
          desc: "Responde preguntas sobre servicios, horarios, ubicación y políticas de la clínica"
        }
      },
      highlights: {
        title: "Aspectos Técnicos Destacados",
        serverless: "Arquitectura Serverless: Uso de Firebase Cloud Functions para escalabilidad automática sin gestión de infraestructura",
        functionCalling: "AI Function Calling: Claude AI ejecuta funciones específicas como consultar citas, crear pacientes o modificar reservas",
        raceCondition: "Prevención de Race Condition: Sistema de bloqueos para evitar citas duplicadas cuando múltiples mensajes llegan simultáneamente",
        buffer: "Buffer Inteligente: Solo mantiene los últimos 10 mensajes en memoria para optimización de costos, historial completo en Firestore",
        logging: "Logging Completo: Todas las interacciones registradas para auditorías de calidad y mejora continua del entrenamiento"
      }
    },

    // Project 2: CalendarApp
    project2: {
      title: "CalendarioApp",
      subtitle: "Calendario colaborativo con autenticación",
      overview: {
        title: "Descripción del Proyecto",
        p1: "Aplicación web full-stack que permite a los usuarios gestionar sus eventos y citas de manera eficiente. El sistema implementa autenticación segura con JWT y ofrece una experiencia colaborativa moderna donde múltiples usuarios pueden crear, ver y gestionar eventos en tiempo real.",
        p2: "La interfaz fue desarrollada con React utilizando hooks modernos (useState, useEffect, useContext) para la gestión de estado y optimización de la experiencia de usuario. Se integró Redux Toolkit para el manejo de estado global, permitiendo sincronización fluida entre componentes y actualizaciones en tiempo real.",
        p3: "El backend fue construido con Node.js y Express, implementando rutas RESTful para todas las operaciones CRUD. La autenticación se maneja con JWT (JSON Web Tokens), asegurando que solo usuarios autenticados puedan acceder a sus calendarios. Los datos se almacenan en MongoDB Atlas, ofreciendo escalabilidad y disponibilidad en la nube."
      },
      features: {
        title: "Características Principales",
        auth: {
          title: "Autenticación Segura",
          desc: "Sistema de login y registro basado en JWT con encriptación de contraseñas y rutas protegidas"
        },
        crud: {
          title: "CRUD Completo de Eventos",
          desc: "Crear, leer, actualizar y eliminar eventos con validación en tiempo real y sincronización instantánea con la base de datos"
        },
        collaborative: {
          title: "Calendario Colaborativo",
          desc: "Múltiples usuarios pueden ver y gestionar eventos, cada uno con su propio espacio de trabajo y permisos"
        },
        interface: {
          title: "Interfaz Interactiva",
          desc: "Calendario intuitivo con diferentes vistas (mensual, semanal, diaria) y creación de eventos mediante click y arrastre"
        },
        responsive: {
          title: "Diseño Responsive",
          desc: "Experiencia optimizada para escritorio, tablets y dispositivos móviles con layout adaptativo"
        },
        persistence: {
          title: "Persistencia en la Nube",
          desc: "Eventos almacenados en MongoDB Atlas, accesibles desde cualquier dispositivo con sincronización automática"
        }
      },
      techStack: {
        title: "Stack Tecnológico",
        frontend: {
          title: "Frontend",
          items: {
            react: "React 18 - UI basada en componentes con hooks modernos",
            redux: "Redux Toolkit - Gestión de estado global y lógica de negocio",
            reactBigCalendar: "React-Big-Calendar - Calendario visual interactivo",
            axios: "Axios - Comunicación HTTP con backend",
            sweetalert2: "SweetAlert2 - Alertas y notificaciones mejoradas para el usuario"
          }
        },
        backend: {
          title: "Backend",
          items: {
            node: "Node.js - Entorno de ejecución JavaScript",
            express: "Express.js - Servidor web ligero y flexible",
            jwt: "JWT - Autenticación basada en tokens",
            bcrypt: "Bcrypt - Hashing de contraseñas y seguridad",
            mongoose: "Mongoose - ODM de MongoDB con schemas"
          }
        },
        tools: {
          title: "Herramientas y Otros",
          items: {
            vite: "Vite - Herramienta de compilación rápida para desarrollo",
            postman: "Postman - Pruebas y documentación de API",
            git: "Git & GitHub - Control de versiones y colaboración",
            npm: "NPM - Gestión de paquetes y dependencias"
          }
        },
        database: {
          title: "Base de Datos",
          items: {
            mongodb: "MongoDB Atlas - Base de datos NoSQL en la nube",
            mongoose: "Mongoose - Modelado de objetos para MongoDB",
            cloudBackup: "Cloud Backup - Respaldos automáticos y alta disponibilidad",
            indexing: "Indexing - Optimización de consultas para mejor rendimiento"
          }
        }
      },
      highlights: {
        title: "Aspectos Técnicos Destacados",
        mernStack: "Stack MERN Completo: Desarrollo full con MongoDB, Express, React y Node.js en un solo proyecto",
        jwt: "Autenticación JWT: Implementación segura con expiración de tokens y renovación automática",
        redux: "Estado Centralizado: Redux Toolkit para flujo de aplicación predecible y debugging fácil",
        restApi: "API RESTful: Backend siguiendo mejores prácticas con rutas apropiadas y métodos HTTP",
        responsive: "100% Responsive: Diseño mobile-first que se adapta a cualquier tamaño de pantalla",
        cloudDatabase: "MongoDB Atlas: Base de datos en la nube con escalabilidad automática y disponibilidad garantizada"
      },
      links: {
        github: "Ver en GitHub",
        demo: "Demo en Vivo"
      }
    },

    // Project 3: WordPress Divi
    project3: {
      title: "Sitio Web Corporativo",
      subtitle: "Sitio empresarial profesional con WordPress y Divi",
      overview: {
        title: "Descripción del Proyecto",
        p1: "Este sitio web corporativo fue construido usando WordPress como sistema de gestión de contenido y Divi Builder como constructor visual de páginas, creando una presencia en línea profesional para un negocio moderno. El sitio presenta un diseño limpio y contemporáneo que refleja la identidad de marca de la empresa mientras proporciona una experiencia de usuario intuitiva en todos los dispositivos.",
        p2: "Aprovechando la poderosa interfaz de arrastrar y soltar de Divi, el sitio web fue creado con layouts personalizados, animaciones y elementos interactivos que atraen a los visitantes y comunican efectivamente los servicios, valores y experiencia de la empresa.",
        p3: "El proyecto incluye funcionalidad empresarial integral como escaparates de servicios, perfiles de equipo, testimonios de clientes, formularios de contacto, integración de blog y total responsividad móvil—todo optimizado para rendimiento y visibilidad en motores de búsqueda."
      },
      features: {
        title: "Características Principales",
        customDesign: {
          title: "Diseño Personalizado con Divi",
          desc: "Layouts completamente personalizados usando el editor visual de Divi Builder sin necesidad de código para actualizaciones de contenido"
        },
        responsive: {
          title: "Totalmente Responsive",
          desc: "Experiencia de visualización optimizada en todos los dispositivos - escritorio, tablet y móvil con personalizaciones específicas por dispositivo"
        },
        seo: {
          title: "Optimización SEO",
          desc: "Datos estructurados, meta tags y permalinks amigables con SEO integrados con el plugin Yoast SEO"
        },
        performance: {
          title: "Optimizado para Rendimiento",
          desc: "Tiempos de carga rápidos con optimización de imágenes, caché y minificación de código para mejor experiencia de usuario"
        },
        forms: {
          title: "Formularios de Contacto",
          desc: "Formularios de contacto integrados con protección anti-spam y notificaciones por email usando Contact Form 7"
        },
        security: {
          title: "Seguridad y Mantenimiento",
          desc: "Actualizaciones regulares, certificado SSL, protección contra malware y copias de seguridad automáticas para tranquilidad"
        }
      },
      structure: {
        title: "Estructura del Sitio Web",
        home: {
          title: "Página de Inicio",
          desc: "Sección hero dinámica, servicios destacados, testimonios y llamados a la acción"
        },
        about: {
          title: "Sobre Nosotros",
          desc: "Historia de la empresa, misión, valores y perfiles de miembros del equipo"
        },
        services: {
          title: "Servicios",
          desc: "Ofertas de servicios detalladas con descripciones y beneficios"
        },
        portfolio: {
          title: "Tarjetas de Empleados",
          desc: "Perfiles digitales de empleados accesibles mediante URL única o código QR"
        },
        blog: {
          title: "Blog",
          desc: "Perspectivas de la industria, noticias de la empresa y contenido educativo"
        },
        contact: {
          title: "Contacto",
          desc: "Formularios de contacto, mapa de ubicación e información empresarial"
        }
      },
      techStack: {
        title: "Stack Tecnológico",
        platform: {
          title: "Plataforma Principal",
          items: {
            wordpress: "WordPress 6.x - Sistema de gestión de contenido",
            php: "PHP 8.x - Lenguaje del lado del servidor",
            mysql: "MySQL - Gestión de base de datos",
            server: "Apache/Nginx - Servidor web"
          }
        },
        design: {
          title: "Herramientas de Diseño",
          items: {
            divi: "Divi Builder - Constructor visual de páginas",
            theme: "Divi Theme - Tema premium de WordPress",
            css: "Custom CSS - Estilos adicionales",
            fonts: "Google Fonts - Tipografía"
          }
        },
        plugins: {
          title: "Plugins Esenciales",
          items: {
            yoast: "Yoast SEO - Optimización de búsqueda",
            cf7: "Contact Form 7 - Formularios de contacto",
            rocket: "WP Rocket - Caché y rendimiento",
            wordfence: "Wordfence - Protección de seguridad"
          }
        },
        hosting: {
          title: "Hosting y Optimización",
          items: {
            ssl: "SSL Certificate - Encriptación HTTPS",
            cdn: "CDN Integration - Entrega global rápida",
            images: "Image Optimization - Formato WebP",
            backups: "Automated Backups - Respaldos diarios"
          }
        }
      },
      highlights: {
        title: "Aspectos Técnicos Destacados",
        visual: "Personalización Visual: Divi Builder permite edición de arrastrar y soltar con vista previa en vivo y sin necesidad de conocimientos de código",
        mobile: "Diseño Mobile-First: Breakpoints responsivos aseguran visualización perfecta en todos los tamaños de pantalla con optimizaciones específicas por dispositivo",
        performance: "Optimizado para Rendimiento: Lazy loading de imágenes, minificación de código y caché del navegador logran tiempos de carga rápidos",
        seo: "Mejores Prácticas SEO: Datos estructurados, sitemaps XML, meta descripciones y permalinks optimizados mejoran el ranking en búsquedas",
        security: "Seguridad Reforzada: Actualizaciones regulares, escaneo de malware, protección de firewall y medidas de seguridad de inicio de sesión",
        content: "Gestión de Contenido: Dashboard de WordPress fácil de usar permite a usuarios no técnicos actualizar contenido de forma independiente",
        analytics: "Integración de Analytics: Google Analytics y Tag Manager proporcionan información sobre comportamiento de visitantes y rendimiento del sitio"
      },
      whyDivi: {
        title: "¿Por qué Divi Builder?",
        visual: {
          title: "Edición Visual",
          desc: "Ver cambios en tiempo real mientras construyes con la interfaz intuitiva del editor visual"
        },
        modules: {
          title: "46+ Módulos",
          desc: "Extensa biblioteca de módulos de contenido pre-construidos para cualquier necesidad de diseño"
        },
        speed: {
          title: "Desarrollo Rápido",
          desc: "Layouts y plantillas prediseñadas aceleran el tiempo de desarrollo del sitio"
        }
      },
      visitNutrexcol: "Visitar Nutrexcol.com"
    },

    // Project 4: React Corporate
    project4: {
      title: "Sitio Web Corporativo",
      subtitle: "Sitio empresarial moderno con React y Tailwind CSS",
      overview: {
        title: "Descripción del Proyecto",
        p1: "Sitio web corporativo moderno desarrollado para Lopezoft, empresa de servicios tecnológicos. El sitio fue construido con React 18 utilizando componentes funcionales modernos y hooks para óptima gestión de estado y ciclo de vida. Tailwind CSS fue elegido como framework de estilos por su enfoque utility-first que permite desarrollo rápido y fácil personalización.",
        p2: "El proyecto implementa una arquitectura modular con componentes reutilizables (Header, Hero, Services, Portfolio, Contact, Footer) que siguen principios de código limpio y separación de responsabilidades. Cada componente es independiente y puede ser fácilmente mantenido o modificado sin afectar el resto de la aplicación.",
        p3: "Se utilizó Vite como herramienta de compilación, ofreciendo hot module reload instantáneo y desarrollo ultra-rápido. El resultado es un sitio web moderno, profesional y de alto rendimiento optimizado para SEO y accesibilidad."
      },
      features: {
        title: "Características Principales",
        components: {
          title: "Arquitectura de Componentes",
          desc: "Componentes modulares de React con elementos UI reutilizables y clara separación de responsabilidades"
        },
        tailwind: {
          title: "Estilizado con Tailwind",
          desc: "Framework CSS utility-first que proporciona sistema de diseño consistente y desarrollo rápido"
        },
        routing: {
          title: "Enrutamiento del Lado del Cliente",
          desc: "React Router v6 para navegación suave entre páginas sin recargas completas"
        },
        responsive: {
          title: "Diseño Mobile-First",
          desc: "Layout completamente responsive con el sistema de breakpoints de Tailwind asegurando visualización perfecta en todos los dispositivos"
        },
        performance: {
          title: "Rendimiento Ultra-Rápido",
          desc: "Herramienta de compilación Vite proporciona HMR instantáneo en desarrollo y builds de producción optimizados"
        },
        animations: {
          title: "Animaciones Suaves",
          desc: "Transiciones y transformaciones CSS para interacciones de usuario pulidas y micro-animaciones"
        }
      },
      componentStructure: {
        header: {
          title: "Header/Navbar",
          desc: "Navegación sticky con resaltado de link activo y menú hamburguesa móvil"
        },
        hero: {
          title: "Sección Hero",
          desc: "Sección de aterrizaje atractiva con fondos degradados y botones de llamada a la acción"
        },
        services: {
          title: "Grid de Servicios",
          desc: "Componentes de tarjeta reutilizables mostrando servicios con íconos y descripciones"
        },
        about: {
          title: "Sección Sobre Nosotros",
          desc: "Información de la empresa con miembros del equipo, misión y muestra de valores"
        },
        contact: {
          title: "Formulario de Contacto",
          desc: "Componente de formulario controlado con validación y manejo de envío"
        },
        footer: {
          title: "Footer",
          desc: "Footer multi-columna con enlaces, redes sociales e información de copyright"
        }
      },
      techStack: {
        title: "Stack Tecnológico",
        core: {
          title: "Framework Principal",
          items: {
            react: "React 18 - React más reciente con características concurrentes",
            hooks: "React Hooks - useState, useEffect, hooks personalizados",
            router: "React Router v6 - Enrutamiento del lado del cliente",
            jsx: "JSX - Sintaxis JavaScript XML"
          }
        },
        styling: {
          title: "Sistema de Estilos",
          items: {
            tailwind: "Tailwind CSS - Framework utility-first",
            postcss: "PostCSS - Procesamiento de CSS",
            autoprefixer: "Autoprefixer - Compatibilidad con navegadores",
            animations: "Custom Animations - Transiciones CSS"
          }
        },
        tools: {
          title: "Herramientas de Desarrollo",
          items: {
            vite: "Vite - Herramienta de compilación rápida y servidor dev",
            eslint: "ESLint - Calidad y estándares de código",
            prettier: "Prettier - Formateo de código",
            git: "Git - Control de versiones"
          }
        },
        libraries: {
          title: "Bibliotecas Adicionales",
          items: {
            fontawesome: "Font Awesome - Biblioteca de íconos",
            reacticons: "React Icons - Íconos adicionales",
            formik: "Formik - Gestión de formularios (opcional)",
            axios: "Axios - Peticiones HTTP (si es necesario)"
          }
        }
      },
      highlights: {
        title: "Aspectos Técnicos Destacados",
        patterns: "Patrones Modernos de React: Componentes funcionales, hooks y abstracciones de hooks personalizados para lógica reutilizable",
        composition: "Composición de Componentes: Jerarquía de componentes bien estructurada con props drilling y patrones de composición",
        utilities: "Utilidades Tailwind: Enfoque utility-first permite desarrollo rápido con tokens de diseño consistentes",
        breakpoints: "Breakpoints Responsivos: Diseño mobile-first con sistema de breakpoints sm, md, lg, xl de Tailwind",
        splitting: "Code Splitting: React.lazy() y Suspense para tamaños de bundle optimizados y cargas iniciales más rápidas",
        vite: "Optimización de Build con Vite: HMR ultra-rápido en desarrollo y builds de producción optimizados con tree-shaking",
        seo: "Amigable con SEO: Estructura HTML semántica, gestión de meta tags y jerarquía apropiada de encabezados"
      },
      workflow: {
        fast: {
          title: "Desarrollo Rápido",
          desc: "Inicio instantáneo del servidor y HMR de Vite proporcionan feedback inmediato durante el desarrollo"
        },
        modular: {
          title: "Componentes Modulares",
          desc: "Cada componente es autocontenido haciendo que la base de código sea fácil de mantener y escalar"
        },
        optimized: {
          title: "Build Optimizado",
          desc: "Los builds de producción están optimizados con minificación, tree-shaking y chunking"
        }
      },
      visitLopezoft: "Visitar Lopezoft.co"
    }
  },

  // ========================================
  // ENGLISH TRANSLATIONS
  // ========================================
  en: {
    // Navigation
    nav: {
      home: "HOME",
      about: "ABOUT ME",
      skills: "SKILLS",
      curriculum: "RESUME",
      portfolio: "PORTFOLIO",
      contact: "CONTACT"
    },

    // Hero Section
    hero: {
      title: "RAFAEL LÓPEZ",
      subtitle: "Full Stack Developer | MERN Stack • WordPress • AI Solutions",
      tagline: "Creating modern and intelligent web experiences with AI",
      viewProjects: "View Projects",
      contactMe: "Contact Me",
      scroll: "Scroll"
    },

    // About Section
    about: {
      title: "About Me",
      intro: "Hello, I'm Rafael López.",
      description: "Full Stack Developer with +3 years of experience building modern and scalable web applications. Specialized in MERN Stack (MongoDB, Express, React, Node.js), WordPress, and developing intelligent solutions with AI.\n\nMy experience ranges from creating corporate websites in WordPress to complex systems like chatbots with Claude AI integrated with WhatsApp Business API, automating business processes and improving end-user experience.\n\nMy background in Industrial Engineering gives me a unique perspective: I not only develop clean and efficient code, but also optimize processes, solve business problems, and improve productivity through innovative technological solutions.",
      personalDataTitle: "Personal Information",
      birthday: "Birthday",
      phone: "Phone",
      email: "Email",
      website: "Website",
      address: "Address",
      position: "Position",
      positionValue: "Full Stack Developer",
      interestsTitle: "Interests",
      interests: {
        music: "MUSIC",
        games: "GAMING",
        travel: "TRAVEL",
        sports: "SPORTS",
        books: "BOOKS",
        meditation: "MEDITATION"
      },
      downloadCV: "Download CV"
    },

    // Skills Section
    skills: {
      title: "Skills",
      levels: {
        basic: "Basic",
        novice: "Novice",
        intermediate: "Intermediate",
        advanced: "Advanced",
        expert: "Expert"
      },
      technical: "Technical Skills",
      professional: "Professional Skills",
      list: {
        javascript: "Javascript",
        htmlcss: "HTML & CSS",
        angular: "Angular",
        react: "React",
        nodejs: "NodeJS",
        problemSolving: "Problem Solving",
        codeReview: "Code Review & Documentation",
        agile: "Agile/Scrum Methodologies",
        technicalComm: "Technical Communication",
        projectMgmt: "Project Management",
        processOpt: "Process Optimization",
        adaptability: "Adaptability",
        continuousLearning: "Continuous Learning"
      }
    },

    // Curriculum Section
    curriculum: {
      title: "Resume",
      education: "Education",
      experience: "Work Experience",
      items: {
        reactCourse: {
          title: "React Zero to Expert Course",
          institution: "Udemy",
          year: "2025",
          description: "React from zero to expert: Context API, MERN, Hooks, Firestore, JWT, Testing, Authentication, Deployments, CRUD, Logs, MUI, Multiple Routers and much more. With the ability to efficiently work with the Framework following standards to understand code from other developers and optimize my own."
        },
        angularCourse: {
          title: "Angular Zero to Expert Course",
          institution: "Udemy",
          year: "2022",
          description: "Angular from zero to expert: Signals, components, directives, services, maps, JWT, authentication, deployments, mongo, Git, GitHub and much more. With the ability to efficiently work with the Framework following standards to understand code from other developers and optimize my own."
        },
        webCourse: {
          title: "HTML, CSS and JavaScript Course",
          institution: "Udemy",
          year: "2021",
          description: "Master in HTML, CSS3, Web Layout, Responsive Web Design, SASS, LESS, Flexbox, CSS Grid, Bootstrap, Javascript, JQuery from scratch with more than 40 hours of studied videos, with the ability to layout different web designs and give them their respective functionality."
        },
        university: {
          title: "Industrial Engineering",
          institution: "Universidad Tecnologica de Pereira",
          year: "2009 - 2014",
          description: "Through my academic training, I can perform as a professional capable of researching, innovating, and optimizing production and service processes, seeking high economic, financial, and social returns, as well as improving productivity, quality, and competitiveness in organizations."
        },
        lopezoft: {
          title: "Full Stack Developer",
          institution: "Lopezoft IT Solutions",
          year: "2022 - Present",
          description: "Develop full-stack web applications for clients across various industries using modern technologies and following industry best practices.\n\n• Implemented intelligent chatbot with Claude AI integrated with WhatsApp Business API and Dentalink, automating dental appointment management and reducing administrative staff workload\n• Developed 5+ corporate websites with WordPress/Divi and React/Tailwind CSS, optimized for SEO and performance\n• Built JWT authentication system in Angular/Nest with guards, token renewal, and secure session management\n• Created collaborative MERN Stack application (event calendar) with full CRUD, Redux Toolkit, and MongoDB Atlas persistence\n• Work with Agile methodologies, Git/GitHub for version control, and deployment on Firebase and GitHub Pages\n\nStack: React, Angular, Node.js, Express, MongoDB, Firebase, TypeScript, WordPress, Tailwind CSS"
        },
        g3: {
          title: "General Manager",
          institution: "G3 Security",
          year: "2016 - 2022",
          description: "Founded and managed electronic security hardware distribution company with operations in 5 cities nationwide.\n\n• Led multidisciplinary teams in sales, logistics, and operations, developing management skills that I now apply to software development projects\n• Optimized commercial and operational processes, reducing delivery times and improving customer satisfaction through data analysis and automation\n• Managed complex projects from planning to execution, coordinating resources and solving critical problems under pressure\n• Negotiated with suppliers and clients, strengthening technical communication and strategic decision-making capabilities\n\nTransferable skills: Project management, leadership, process optimization, problem-solving, analytical thinking"
        },
        servientrega: {
          title: "Analyst - Intern",
          institution: "Servientrega S.A.",
          year: "2014 - 2015",
          description: "Time and motion study in the logistics area with the objective of implementing productivity-based payments in merchandise delivery by developing an algorithm that measures the time and effort of delivery by determined regional zone."
        }
      }
    },

    // Portfolio Section
    portfolio: {
      title: "PORTFOLIO",
      projects: {
        whatsappBot: {
          title: "Dental WhatsApp Assistant",
          tech: "Claude AI - Firebase",
          description: "Intelligent chatbot for dental clinic with Dentalink integration"
        },
        calendarApp: {
          title: "Calendar App",
          tech: "MERN Stack",
          description: "Collaborative calendar application with authentication and event management"
        },
        wordpressDivi: {
          title: "Divi Corporate Site",
          tech: "WordPress - Divi",
          description: "Professional corporate website developed with WordPress and Divi Builder"
        },
        webCorporativa: {
          title: "Corporate Website",
          tech: "React",
          description: "Modern corporate website developed with React and Tailwind CSS"
        },
        authApp: {
          title: "Auth App",
          tech: "Angular - Nest",
          description: "Robust authentication system with JWT and protection guards"
        },
        playJavaScript: {
          title: "Play JavaScript App",
          tech: "Javascript",
          description: "Interactive application to practice vanilla JavaScript concepts"
        },
        gifExpertApp: {
          title: "Gif Expert App",
          tech: "React",
          description: "Animated GIF search engine with Giphy API integration"
        }
      }
    },

    // Contact Section
    contact: {
      title: "CONTACT",
      form: {
        name: "Your Name",
        phone: "Phone Number",
        email: "Email Address",
        subject: "Subject",
        message: "Message",
        send: "Send Message"
      },
      info: {
        location: "CC Fiducentro Local Verde 33",
        call: "Call us: (+57) 300 6436473",
        email: "Email: rafalopezdel@gmail.com"
      },
      toast: "✅ Message sent successfully."
    },

    // Common
    common: {
      loading: "Loading...",
      error: "There was an error",
      success: "Success"
    },

    // Project Detail Pages
    projectDetail: {
      backToPortfolio: "Back to Portfolio",
      projectOverview: "Project Overview",
      screenshots: "Screenshots",
      siteShowcase: "Site Showcase",
      keyFeatures: "Key Features",
      techStack: "Technology Stack",
      technicalHighlights: "Technical Highlights",
      componentStructure: "Component Structure",
      websiteStructure: "Website Structure",
      viewLiveSite: "View Live Site",
      visitSite: "Visit Site",
      projectLinks: "Project Links",
      viewOnGitHub: "View on GitHub",
      liveDemo: "Live Demo",
      whyDivi: "Why Divi Builder?",
      developmentWorkflow: "Development Workflow"
    },

    // Project 1: WhatsApp Dental Assistant
    project1: {
      title: "Dental WhatsApp Assistant",
      subtitle: "Intelligent chatbot with Claude AI for automated dental appointment management",
      overview: {
        title: "Project Overview",
        p1: "Advanced chatbot system developed with Claude AI that integrates with WhatsApp Business API to provide a complete dental appointment management experience. The bot communicates naturally with patients, accesses the clinic's CRM in real time, and performs automated operations on the Dentalink platform.",
        p2: "The bot uses Claude AI's function calling capability to execute specific functions such as checking available appointments, creating new appointments, and retrieving patient information from Dentalink. All interactions are logged in Firestore for auditing and continuous improvement.",
        p3: "Built on Firebase Cloud Functions with serverless architecture, ensuring high availability and automatic scalability based on demand. The system implements conversation buffer to optimize costs and maintain conversational context."
      },
      integrations: {
        title: "Key Integrations",
        whatsapp: {
          title: "WhatsApp Business API",
          desc: "Direct connection with Meta to send and receive messages in real time. Handles text, images, and interactive buttons."
        },
        dentalink: {
          title: "Dentalink API",
          desc: "Complete integration with dental management platform for appointment queries, creation of new appointments, and real-time agenda verification."
        },
        claude: {
          title: "Claude AI API",
          desc: "Advanced AI engine with function calling to execute specific actions. Allows for natural conversations with intelligent decision making."
        },
        firebase: {
          title: "Firebase Cloud Functions",
          desc: "Serverless backend that processes messages and orchestrates all integrations. Automatic scalability and high availability."
        },
        firestore: {
          title: "Cloud Firestore",
          desc: "NoSQL database to store conversation history, user buffer, and interaction logs for analysis and improvement."
        },
        storage: {
          title: "Cloud Storage",
          desc: "Storage of multimedia files (images, PDFs) sent through WhatsApp for patient documentation and records."
        }
      },
      features: {
        title: "Key Features",
        memory: {
          title: "Persistent Memory",
          desc: "Recognizes returning users and maintains conversational context across multiple interactions. Provides personalized experience based on history."
        },
        logging: {
          title: "Conversation Logging",
          desc: "Stores complete conversation history in Firestore for quality auditing, training improvement, and regulatory compliance."
        },
        buffer: {
          title: "Conversation Buffer",
          desc: "Optimizes costs by maintaining only relevant context in memory while storing complete history in database."
        },
        integration: {
          title: "Real-time Dentalink Integration",
          desc: "Accesses CRM directly to query available appointments, create new appointments, and verify patient information instantly."
        },
        appointments: {
          title: "Automated Appointment Management",
          desc: "Allows patients to check availability, schedule, reschedule, and cancel appointments without human intervention."
        },
        raceCondition: {
          title: "Race Condition Handling",
          desc: "Implements locks to prevent duplicate appointments when multiple messages arrive simultaneously from the same user."
        },
        humanTransfer: {
          title: "Human Agent Transfer",
          desc: "Detects when patients need human attention and smoothly transfers conversation to clinic staff."
        },
        aiAssistant: {
          title: "Intelligent Dental Assistant",
          desc: "Answers common questions about dental procedures, clinic services, costs, and operation hours with updated information."
        }
      },
      highlights: {
        title: "Technical Highlights",
        serverless: "Serverless Architecture: Firebase Cloud Functions for automatic scalability and zero infrastructure maintenance",
        functionCalling: "AI Function Calling: Claude AI executes specific functions (query_agenda, create_appointment) based on conversational context",
        raceCondition: "Race Condition Prevention: Locking system to avoid duplicate appointments when users send multiple messages quickly",
        buffer: "Smart Buffer: Only maintains the last 10 messages in memory for cost optimization, complete history in Firestore",
        logging: "Complete Logging: All interactions recorded for quality audits and continuous training improvement"
      }
    },

    // Project 2: CalendarApp
    project2: {
      title: "CalendarApp",
      subtitle: "Collaborative calendar with authentication",
      overview: {
        title: "Project Overview",
        p1: "Full-stack web application that allows users to efficiently manage their events and appointments. The system implements secure authentication with JWT and offers a modern collaborative experience where multiple users can create, view, and manage events in real time.",
        p2: "The interface was developed with React using modern hooks (useState, useEffect, useContext) for state management and user experience optimization. Redux Toolkit was integrated for global state management, enabling fluid synchronization between components and real-time updates.",
        p3: "The backend was built with Node.js and Express, implementing RESTful routes for all CRUD operations. Authentication is handled with JWT (JSON Web Tokens), ensuring that only authenticated users can access their calendars. Data is stored in MongoDB Atlas, offering scalability and availability in the cloud."
      },
      features: {
        title: "Key Features",
        auth: {
          title: "Secure Authentication",
          desc: "JWT-based login and registration system with password encryption and protected routes"
        },
        crud: {
          title: "Complete Event CRUD",
          desc: "Create, read, update, and delete events with real-time validation and instant database synchronization"
        },
        collaborative: {
          title: "Collaborative Calendar",
          desc: "Multiple users can view and manage events, each with their own workspace and permissions"
        },
        interface: {
          title: "Interactive Interface",
          desc: "Intuitive calendar with different views (monthly, weekly, daily) and click-and-drag event creation"
        },
        responsive: {
          title: "Responsive Design",
          desc: "Optimized experience for desktops, tablets, and mobile devices with adaptive layout"
        },
        persistence: {
          title: "Cloud Persistence",
          desc: "Events stored in MongoDB Atlas, accessible from any device with automatic synchronization"
        }
      },
      techStack: {
        title: "Technology Stack",
        frontend: {
          title: "Frontend",
          items: {
            react: "React 18 - Component-based UI with modern hooks",
            redux: "Redux Toolkit - Global state management and business logic",
            reactBigCalendar: "React-Big-Calendar - Interactive visual calendar",
            axios: "Axios - HTTP communication with backend",
            sweetalert2: "SweetAlert2 - Enhanced user alerts and notifications"
          }
        },
        backend: {
          title: "Backend",
          items: {
            node: "Node.js - JavaScript runtime environment",
            express: "Express.js - Lightweight and flexible web server",
            jwt: "JWT - Token-based authentication",
            bcrypt: "Bcrypt - Password hashing and security",
            mongoose: "Mongoose - MongoDB ODM with schemas"
          }
        },
        tools: {
          title: "Tools and Others",
          items: {
            vite: "Vite - Fast build tool for development",
            postman: "Postman - API testing and documentation",
            git: "Git & GitHub - Version control and collaboration",
            npm: "NPM - Package and dependency management"
          }
        },
        database: {
          title: "Database",
          items: {
            mongodb: "MongoDB Atlas - NoSQL cloud database",
            mongoose: "Mongoose - Object modeling for MongoDB",
            cloudBackup: "Cloud Backup - Automatic backups and high availability",
            indexing: "Indexing - Query optimization for better performance"
          }
        }
      },
      highlights: {
        title: "Technical Highlights",
        mernStack: "Complete MERN Stack: Full development with MongoDB, Express, React, and Node.js in a single project",
        jwt: "JWT Authentication: Secure implementation with token expiration and automatic renewal",
        redux: "Centralized State: Redux Toolkit for predictable application flow and easy debugging",
        restApi: "RESTful API: Backend following best practices with proper routes and HTTP methods",
        responsive: "100% Responsive: Mobile-first design adapting to any screen size",
        cloudDatabase: "MongoDB Atlas: Cloud database with automatic scalability and guaranteed availability"
      },
      links: {
        github: "View on GitHub",
        demo: "Live Demo"
      }
    },

    // Project 3: WordPress + Divi Corporate Site
    project3: {
      title: "Corporate Website",
      subtitle: "Professional business site with WordPress and Divi",
      overview: {
        title: "Project Overview",
        p1: "Professional corporate website developed for Nutrexcol, a company in the nutritional supplements sector. The site was built using WordPress as a CMS and Divi Builder as the main design tool, allowing for flexible visual creation without the need to write code for layouts.",
        p2: "The project implemented a completely custom design aligned with the company's visual identity, including specific sections for products, services, company information, and contact. Divi's advanced modules were used to create attractive interactive elements such as image carousels, accordions, call-to-action buttons, and optimized forms.",
        p3: "Special emphasis was placed on SEO optimization with Yoast SEO, site loading speed with cache plugins and image optimization, and security with Wordfence. The result is a fast, secure, and professional website that effectively represents the brand in the digital environment."
      },
      features: {
        title: "Key Features",
        customDesign: {
          title: "Custom Design",
          desc: "Completely personalized visual identity aligned with brand, unique colors, typography, and layouts"
        },
        diviModules: {
          title: "Advanced Divi Modules",
          desc: "Use of 46+ native modules (carousels, galleries, forms, buttons) for rich interactive experience"
        },
        seo: {
          title: "SEO Optimization",
          desc: "Implementation of Yoast SEO with meta tags, sitemaps, structured data, and readability optimization"
        },
        performance: {
          title: "Speed and Performance",
          desc: "Optimized with WP Rocket (cache), Smush (images), and lazy loading for fast load times"
        },
        responsive: {
          title: "Mobile Responsive",
          desc: "Fluid design perfectly adapting to all devices (desktop, tablet, mobile) with specific adjustments"
        },
        security: {
          title: "Security",
          desc: "Protection with Wordfence (firewall), SSL certificate, automatic backups, and malware monitoring"
        }
      },
      structure: {
        title: "Website Structure",
        home: {
          title: "Home",
          desc: "Hero section with call-to-action, featured product showcases, company benefits, and customer testimonials"
        },
        about: {
          title: "About Us",
          desc: "Company history, mission and vision, team, and certifications"
        },
        services: {
          title: "Services",
          desc: "Detailed description of services offered with icons, benefits, and inquiry forms"
        },
        portfolio: {
          title: "Employee Cards",
          desc: "Digital employee profiles accessible via unique URL or QR code"
        },
        blog: {
          title: "Blog",
          desc: "Articles about health, nutrition, and wellness with category organization and comments"
        },
        contact: {
          title: "Contact",
          desc: "Contact form, map, address, phone, email, and links to social media"
        }
      },
      techStack: {
        title: "Technology Stack",
        platform: {
          title: "Core Platform",
          items: {
            wordpress: "WordPress 6.x - Content management system",
            php: "PHP 8.x - Server-side language",
            mysql: "MySQL - Database management",
            server: "Apache/Nginx - Web server"
          }
        },
        design: {
          title: "Design Tools",
          items: {
            divi: "Divi Builder - Visual page builder",
            theme: "Divi Theme - Premium WordPress theme",
            css: "Custom CSS - Additional styling",
            fonts: "Google Fonts - Typography"
          }
        },
        plugins: {
          title: "Essential Plugins",
          items: {
            yoast: "Yoast SEO - Search optimization",
            cf7: "Contact Form 7 - Contact forms",
            rocket: "WP Rocket - Caching & performance",
            wordfence: "Wordfence - Security protection"
          }
        },
        hosting: {
          title: "Hosting & Optimization",
          items: {
            ssl: "SSL Certificate - HTTPS encryption",
            cdn: "CDN Integration - Fast global delivery",
            images: "Image Optimization - WebP format",
            backups: "Automated Backups - Daily snapshots"
          }
        }
      },
      highlights: {
        title: "Technical Highlights",
        visual: "Visual Customization: Divi Builder allows drag-and-drop editing with live preview and no coding knowledge required",
        mobile: "Mobile-First Design: Responsive breakpoints ensure perfect display on all screen sizes with device-specific optimizations",
        performance: "Performance Optimized: Image lazy loading, code minification, and browser caching achieve fast load times",
        seo: "SEO Best Practices: Structured data, XML sitemaps, meta descriptions, and optimized permalinks improve search rankings",
        security: "Security Hardened: Regular updates, malware scanning, firewall protection, and login security measures",
        content: "Content Management: Easy-to-use WordPress dashboard allows non-technical users to update content independently",
        analytics: "Analytics Integration: Google Analytics and Tag Manager provide insights into visitor behavior and site performance"
      },
      whyDivi: {
        title: "Why Divi Builder?",
        visual: {
          title: "Visual Editing",
          desc: "Build and modify the site in real-time seeing exactly how it will look, without writing code"
        },
        modules: {
          title: "46+ Modules",
          desc: "Pre-built components (buttons, forms, galleries, testimonials) ready to use and customize"
        },
        speed: {
          title: "Fast Development",
          desc: "Create professional websites 3x faster compared to developing from scratch with code"
        }
      },
      visitNutrexcol: "Visit Nutrexcol.com"
    },

    // Project 4: React Corporate Website
    project4: {
      title: "Corporate Website",
      subtitle: "Modern business site with React and Tailwind CSS",
      overview: {
        title: "Project Overview",
        p1: "Modern corporate website developed for Lopezoft, a technology services company. The site was built with React 18 using modern functional components and hooks for optimal state and lifecycle management. Tailwind CSS was chosen as the styling framework for its utility-first approach that enables rapid development and easy customization.",
        p2: "The project implements a modular architecture with reusable components (Header, Hero, Services, Portfolio, Contact, Footer) that follow clean code principles and separation of concerns. Each component is independent and can be easily maintained or modified without affecting the rest of the application.",
        p3: "Vite was used as the build tool, offering instant hot module reload and ultra-fast development. The result is a modern, professional, and high-performance website optimized for SEO and accessibility."
      },
      features: {
        title: "Key Features",
        components: {
          title: "Component Architecture",
          desc: "Modular React components with reusable UI elements and clean separation of concerns"
        },
        tailwind: {
          title: "Tailwind Styling",
          desc: "Utility-first CSS framework providing consistent design system and rapid development"
        },
        routing: {
          title: "Client-Side Routing",
          desc: "React Router v6 for smooth navigation between pages without full page reloads"
        },
        responsive: {
          title: "Mobile-First Design",
          desc: "Fully responsive layout with Tailwind's breakpoint system ensuring perfect display on all devices"
        },
        performance: {
          title: "Lightning-Fast Performance",
          desc: "Vite build tool provides instant HMR in development and optimized production builds"
        },
        animations: {
          title: "Smooth Animations",
          desc: "CSS transitions and transforms for polished user interactions and micro-animations"
        }
      },
      componentStructure: {
        header: {
          title: "Header/Navbar",
          desc: "Sticky navigation with active link highlighting and mobile hamburger menu"
        },
        hero: {
          title: "Hero Section",
          desc: "Engaging landing section with gradient backgrounds and call-to-action buttons"
        },
        services: {
          title: "Services Grid",
          desc: "Reusable card components displaying services with icons and descriptions"
        },
        about: {
          title: "About Section",
          desc: "Company information with team members, mission, and values showcase"
        },
        contact: {
          title: "Contact Form",
          desc: "Controlled form component with validation and submission handling"
        },
        footer: {
          title: "Footer",
          desc: "Multi-column footer with links, social media, and copyright information"
        }
      },
      techStack: {
        title: "Technology Stack",
        core: {
          title: "Core Framework",
          items: {
            react: "React 18 - Latest React with concurrent features",
            hooks: "React Hooks - useState, useEffect, custom hooks",
            router: "React Router v6 - Client-side routing",
            jsx: "JSX - JavaScript XML syntax"
          }
        },
        styling: {
          title: "Styling System",
          items: {
            tailwind: "Tailwind CSS - Utility-first framework",
            postcss: "PostCSS - CSS processing",
            autoprefixer: "Autoprefixer - Browser compatibility",
            animations: "Custom Animations - CSS transitions"
          }
        },
        tools: {
          title: "Development Tools",
          items: {
            vite: "Vite - Fast build tool and dev server",
            eslint: "ESLint - Code quality and standards",
            prettier: "Prettier - Code formatting",
            git: "Git - Version control"
          }
        },
        libraries: {
          title: "Additional Libraries",
          items: {
            fontawesome: "Font Awesome - Icon library",
            reacticons: "React Icons - Additional icons",
            formik: "Formik - Form management (optional)",
            axios: "Axios - HTTP requests (if needed)"
          }
        }
      },
      highlights: {
        title: "Technical Highlights",
        patterns: "Modern React Patterns: Functional components, hooks, and custom hook abstractions for reusable logic",
        composition: "Component Composition: Well-structured component hierarchy with props drilling and composition patterns",
        utilities: "Tailwind Utilities: Utility-first approach enables rapid development with consistent design tokens",
        breakpoints: "Responsive Breakpoints: Mobile-first design with Tailwind's sm, md, lg, xl breakpoint system",
        splitting: "Code Splitting: React.lazy() and Suspense for optimized bundle sizes and faster initial loads",
        vite: "Vite Build Optimization: Lightning-fast HMR in development and optimized production builds with tree-shaking",
        seo: "SEO-Friendly: Semantic HTML structure, meta tags management, and proper heading hierarchy"
      },
      workflow: {
        fast: {
          title: "Fast Development",
          desc: "Vite's instant server start and HMR provide immediate feedback during development"
        },
        modular: {
          title: "Modular Components",
          desc: "Each component is self-contained making the codebase easy to maintain and scale"
        },
        optimized: {
          title: "Optimized Build",
          desc: "Production builds are optimized with minification, tree-shaking, and chunking"
        }
      },
      visitLopezoft: "Visit Lopezoft.co"
    }
  }
};

// Make translations available globally for Alpine.js
window.translations = translations;

// Export for use in other files
if (typeof module !== 'undefined' && module.exports) {
  module.exports = translations;
}
