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
      subtitle: "Full Stack Developer",
      claim: "Construyo y opero plataformas en producción: asistentes con IA sobre WhatsApp, e-commerce headless y sistemas de formación.",
      liveLabel: "En producción hoy",
      viewProjects: "Ver proyectos",
      downloadCV: "Descargar CV",
      contactMe: "Contáctame",
      scroll: "Desliza"
    },

    // About Section
    about: {
      title: "Sobre Mí",
      intro: "Full Stack Developer y fundador de Lopezoft.",
      description: "Llevo cuatro años construyendo aplicaciones web y, sobre todo, manteniéndolas vivas después de entregarlas. Hoy opero un asistente con IA que agenda citas médicas todos los días, una tienda que se salió de Shopify y una plataforma de formación con control de cupos y pagos.\n\nTrabajo el ciclo completo: Next.js y React en el frontend, Node y PostgreSQL en el backend, y la infraestructura que lo sostiene —despliegues, respaldos, certificados y la lectura de registros que descubre lo que está fallando en silencio—. Esa última parte es la que separa entregar software de operarlo.\n\nAntes de programar fundé y dirigí una empresa de distribución con operación en cinco ciudades. Por eso una conversación conmigo empieza por el problema del negocio y no por el framework.",
      personalDataTitle: "Datos de contacto",
      phone: "Teléfono",
      email: "Email",
      website: "Sitio web",
      address: "Ubicación",
      position: "Cargo",
      positionValue: "Full Stack Developer",
      buildTitle: "Qué construyo",
      build: {
        ai: {
          title: "IA aplicada",
          text: "Asistentes que ejecutan acciones reales sobre los sistemas que el cliente ya usa, no que solo conversan."
        },
        ecommerce: {
          title: "E-commerce headless",
          text: "Tiendas propias con pasarela local, sin comisión por venta ni dependencia de plataforma."
        },
        platforms: {
          title: "Plataformas a medida",
          text: "Membresías, cupos, pagos y contenido protegido, con panel para que el cliente lo administre solo."
        },
        ops: {
          title: "Operación",
          text: "Despliegue, respaldos, SSL y monitoreo. Lo que hace que un sistema siga funcionando en el mes seis."
        }
      },
      downloadCV: "Descargar CV"
    },

    // Skills Section
    skills: {
      title: "Skills",
      technical: "Stack técnico",
      professional: "Cómo trabajo",
      groups: {
        frontend: "Frontend",
        backend: "Backend y datos",
        ai: "IA y automatización",
        infra: "Infraestructura y CMS"
      },
      list: {
        problemSolving: "Resolución de problemas",
        codeReview: "Code review y documentación",
        agile: "Metodologías ágiles",
        technicalComm: "Comunicación técnica",
        projectMgmt: "Gestión de proyectos",
        processOpt: "Optimización de procesos"
      }
    },

    // Curriculum Section
    curriculum: {
      title: "Curriculum",
      education: "Formación",
      experience: "Experiencia",
      items: {
        reactCourse: {
          title: "React de Cero a Experto",
          institution: "Udemy",
          year: "2025",
          description: "Context API, MERN, Hooks, Firestore, JWT, testing, autenticación, despliegues y CRUD."
        },
        angularCourse: {
          title: "Angular de Cero a Experto",
          institution: "Udemy",
          year: "2022",
          description: "Signals, componentes, directivas, servicios, JWT, autenticación, despliegues y MongoDB."
        },
        webCourse: {
          title: "HTML, CSS y JavaScript",
          institution: "Udemy",
          year: "2021",
          description: "Maquetación, responsive, SASS, Flexbox, CSS Grid, Bootstrap, JavaScript y jQuery."
        },
        university: {
          title: "Ingeniería Industrial",
          institution: "Universidad Tecnológica de Pereira",
          year: "2009 - 2014",
          description: "Optimización de procesos, gestión de proyectos y análisis de datos aplicados a la productividad de organizaciones. Es la formación que hoy uso para entender el negocio antes de escribir código."
        },
        lopezoft: {
          title: "Full Stack Developer · Fundador",
          institution: "Lopezoft",
          year: "2022 - Presente",
          description: "Construyo y opero las plataformas de los clientes de la empresa, de principio a fin: producto, código, despliegue e infraestructura.\n\n• Asistente de WhatsApp con IA para una clínica odontológica, integrado a Dentalink: agenda, modifica y cancela citas reales. En operación diaria durante todo 2026. Auditando sus registros encontré 25 mensajes a 12 pacientes que se perdían en silencio, y lo corregí con reintentos, alertas y recuperación automática.\n• JPR Academy (jprdesigntraining.com): plataforma de formación en Next.js 15 + Payload CMS + PostgreSQL, con control de cupos por cohorte, pagos con Wompi y video protegido. Vendió 9 de los 10 pases Elite de su primera cohorte.\n• Café Montelargo: migración de Shopify a e-commerce headless propio (Next.js + WooCommerce vía WPGraphQL + Wompi + n8n). Eliminó la comisión por venta y el recargo del 2% de la pasarela externa.\n• GCPFM (Reino Unido): mantenimiento de un WordPress de 28 páginas por REST API, automatizado con scripts propios en Python.\n\nStack: Next.js, React, Angular, Node.js, TypeScript, PostgreSQL, MongoDB, Firebase, WordPress headless, Tailwind CSS, Docker, n8n."
        },
        g3: {
          title: "Fundador y Gerente General",
          institution: "G3 Seguridad",
          year: "2016 - 2022",
          description: "Fundé y dirigí una empresa de distribución de hardware de seguridad electrónica con operación en cinco ciudades.\n\nSeis años negociando con proveedores, coordinando logística y respondiendo por una nómina enseñan a leer un problema de negocio antes de proponer una solución técnica. Es la razón por la que hoy una conversación conmigo empieza por lo que le cuesta dinero al cliente, y no por el framework."
        },
        servientrega: {
          title: "Analista de procesos (practicante)",
          institution: "Servientrega S.A.",
          year: "2014 - 2015",
          description: "Estudio de tiempos y movimientos en logística. Desarrollé un algoritmo que medía tiempo y esfuerzo de entrega por zona para implementar pago por productividad."
        }
      }
    },

    portfolio: {
      title: "PORTFOLIO",
      intro: "Cuatro sistemas en producción. Cada uno prueba algo distinto.",
      verCaso: "Ver el caso",
      otrosTitle: "Otros trabajos",
      otros: {
        lopezoft: {
          title: "Lopezoft",
          text: "El sitio de mi empresa. Next.js, con diseño, contenido e infraestructura propios."
        },
        nutrexcol: {
          title: "Nutrexcol",
          text: "Maquetación del sitio corporativo en WordPress, para una agencia."
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
    // ========================================
    // CASOS — páginas de detalle de los 4 proyectos
    // ========================================
    casos: {
      etiquetas: {
        problema: "El problema",
        solucion: "Lo que construí",
        resultado: "El resultado",
        stack: "Stack",
        galeria: "Cómo se ve",
        enlaces: "Enlaces",
        verSitio: "Ver el sitio en vivo",
        privado: "Proyecto privado de cliente",
        privadoNota: "No hay demo pública: el sistema opera sobre datos de salud de pacientes reales. Puedo enseñarlo en una llamada.",
        volver: "Volver al portafolio",
        derechos: "Todos los derechos reservados.",
        masProyectos: "Ver más proyectos",
        grupos: {
          frontend: "Frontend",
          backend: "Backend y datos",
          backend2: "Persistencia",
          ai: "Integraciones",
          infra: "Infraestructura"
        }
      },

      whatsapp: {
        title: "Asistente de WhatsApp con IA",
        subtitle: "Agenda citas reales en el sistema de una clínica odontológica, conversando en lenguaje natural",
        tech: "Claude AI · WhatsApp Business API · Firebase",
        card: "Un asistente que no toma recados: escribe en la agenda real de la clínica.",
        problema: "Una clínica agenda por WhatsApp. Cada cita entra como un mensaje que alguien tiene que leer, buscar en el sistema, cuadrar con la agenda y responder. Fuera de horario no contesta nadie — y el paciente que no recibe respuesta llama a otra clínica.",
        solucion: [
          {
            icon: "fa-comments",
            title: "Conversación con acciones reales",
            text: "Busca al paciente, lo registra si es nuevo, agenda, modifica y cancela. No toma recados: escribe en la agenda real respetando duración de cita, sillón disponible y horario de atención."
          },
          {
            icon: "fa-plug",
            title: "Integrado con el sistema que ya usaban",
            text: "Se conecta a Dentalink, el software de gestión de la clínica. No hubo que cambiar la forma en que el equipo trabaja."
          },
          {
            icon: "fa-brain",
            title: "Memoria de pacientes recurrentes",
            text: "Reconoce a quien ya escribió antes y retoma el contexto. Soporta imágenes, audio, video y documentos en los dos sentidos."
          },
          {
            icon: "fa-bell",
            title: "Recordatorio automático",
            text: "El día antes de la cita, con botones de confirmar o cancelar. Menos ausencias sin aviso."
          },
          {
            icon: "fa-headset",
            title: "Traspaso a una persona",
            text: "Cuando hace falta, un panel web permite que el equipo tome la conversación sin que el paciente note el cambio."
          },
          {
            icon: "fa-triangle-exclamation",
            title: "Qué pasa cuando falla",
            text: "Si la IA falla, el sistema avisa al paciente, escala a un humano y alerta al técnico por WhatsApp. No se queda callado."
          }
        ],
        resultado: {
          intro: "En operación durante todo 2026, con uso diario. Pero lo que vale la pena contar no es que funcione, sino lo que apareció al auditar sus registros de producción: tres fallas que no dejaban rastro.",
          puntos: [
            "Recordatorios que no salieron. Una consulta a la agenda se demoró de más, el sistema entendió «no hay citas mañana» y nadie recibió aviso ese domingo.",
            "Mensajes que WhatsApp aceptaba y luego descartaba: 25 mensajes no entregados a 12 pacientes en 7 días, mientras el panel los mostraba como enviados. Un paciente viajó a una cita cancelada porque los avisos nunca llegaron.",
            "Imágenes que fallaban en silencio, incluida la que se envió como prueba."
          ],
          cierre: "Las tres se corrigieron: reintentos automáticos ante fallas de red, alerta al administrador cuando un recordatorio no sale, recuperación que reintenta sola una hora más tarde, marca en rojo en el panel con el motivo real, y aviso al agente antes de escribir si la ventana de WhatsApp ya se cerró.",
          frase: "La parte difícil de la IA aplicada no es conversar. Es qué pasa cuando falla — y para enterarte de eso hay que estar leyendo los registros."
        }
      },

      jpr: {
        title: "JPR Academy",
        subtitle: "Plataforma de formación con cupos limitados, pagos y video protegido",
        tech: "Next.js · Payload CMS · PostgreSQL",
        card: "Vender cupos contados es un problema de inventario, no de diseño.",
        problema: "Vender mentorías y cursos con cupos limitados por tipo de pase es un problema de inventario, no de diseño. Cada cohorte tiene plazas contadas, hay pases con distintos niveles de acceso, y hay que cobrar en pesos y en dólares. Con una plantilla o una pasarela genérica eso se administra a mano — y a mano se sobrevende.",
        solucion: [
          {
            icon: "fa-ticket",
            title: "Control de cupo por cohorte y por pase",
            text: "Cada tipo de pase tiene su precio, su cupo y su nivel de acceso. El acceso de cada alumno se congela en el momento de pagar."
          },
          {
            icon: "fa-credit-card",
            title: "Pagos con verificación de firma",
            text: "Wompi para pesos colombianos, con validación de la firma en el webhook. Un pago no se da por bueno porque lo diga el navegador."
          },
          {
            icon: "fa-lock",
            title: "Área de miembros cerrada",
            text: "Clases en vivo, grabaciones permanentes, material extendido y comunidad privada. Cada bloque se ve o no según el pase que compró el alumno."
          },
          {
            icon: "fa-arrow-up-right-dots",
            title: "Mejora de pase en autoservicio",
            text: "Quien entró con el pase básico paga solo la diferencia y su acceso sube solo, sin que nadie toque el panel de administración."
          },
          {
            icon: "fa-video",
            title: "Video protegido",
            text: "Las grabaciones se sirven desde Bunny Stream: no se pueden descargar ni compartir por enlace directo."
          },
          {
            icon: "fa-shield-halved",
            title: "Operación incluida",
            text: "Correos transaccionales, respaldo diario de la base de datos, SSL renovado solo y agenda 1a1 con Cal.com."
          }
        ],
        resultado: {
          intro: "En producción en jprdesigntraining.com desde 2026.",
          puntos: [
            "9 de los 10 pases Elite de la primera cohorte de Dirección Visual, vendidos. Cifra autorizada por el cliente.",
            "Se detectó y corrigió un error de sobreventa antes de que costara dinero: el sistema habría vendido una plaza Elite que ya no existía. Un panel manual no habría avisado.",
            "La mejora de pase dejó de ser un trámite manual —acordarse de cambiar la versión y tres permisos, conciliar una transferencia— y pasó a ser una compra que se registra sola.",
            "Un cambio pedido por el cliente el 30 de julio se desplegó y verificó en producción ese mismo día."
          ],
          cierre: "",
          frase: "Le vendió 9 de 10 cupos de su primera cohorte con una plataforma propia, sin comisión por venta y sin sobrevender ni un puesto."
        }
      },

      cafe: {
        title: "Café Montelargo",
        subtitle: "Salir de Shopify sin perder el dominio, el correo ni el control del catálogo",
        tech: "Next.js · WordPress headless · Wompi",
        card: "Migración a e-commerce propio, sin comisión por venta.",
        problema: "La tienda vivía en Shopify. Shopify Payments no opera en Colombia, así que cada venta pagaba el plan mensual, la comisión de la pasarela local y, encima, un recargo adicional del 2% por usar una pasarela externa. Además, el catálogo y los pedidos quedaban dentro de una plataforma de la que salir cuesta trabajo.",
        solucion: [
          {
            icon: "fa-store",
            title: "Frontend propio, CMS conocido",
            text: "La tienda es un Next.js propio; el catálogo se administra desde WordPress headless. El cliente edita con una herramienta que ya conocía y el visitante nunca ve WordPress."
          },
          {
            icon: "fa-money-bill-transfer",
            title: "Pagos locales, total recalculado en el servidor",
            text: "Wompi con Nequi, PSE, botón Bancolombia y tarjetas. El total se vuelve a calcular desde el catálogo en el servidor: no se confía en lo que llega del navegador."
          },
          {
            icon: "fa-database",
            title: "PostgreSQL como fuente de verdad",
            text: "Los pedidos viven en una base propia, con espejo hacia WooCommerce para que el dueño consulte pedidos y administre sus cupones sin pedirle nada a nadie."
          },
          {
            icon: "fa-robot",
            title: "Cinco automatizaciones en producción",
            text: "Confirmación de pedido, aviso al administrador, bienvenida con cupón, recuperación de carrito abandonado y recompra a los 30 días. Corren solas en n8n."
          },
          {
            icon: "fa-rotate",
            title: "Rescate de pagos sin webhook",
            text: "Si un webhook de la pasarela nunca llega, un proceso de conciliación recupera el pedido contra la API de la pasarela. Un pago aprobado no se pierde."
          },
          {
            icon: "fa-shield-halved",
            title: "Operación incluida",
            text: "Respaldo diario de la base de datos a almacenamiento externo y SSL automático."
          }
        ],
        resultado: {
          intro: "En producción en cafemontelargo.com.",
          puntos: [
            "Migración completada a infraestructura propia, sin comisión por venta y sin perder el dominio ni el correo en el proceso.",
            "Dejó de pagar el plan de Shopify y el recargo del 2% sobre cada venta, para siempre.",
            "El cliente administra sus cupones y consulta sus pedidos por su cuenta. Menos dependencia del proveedor es mejor servicio.",
            "Cinco automatizaciones de venta corriendo sin intervención."
          ],
          cierre: "",
          frase: "Se salió de Shopify y dejó de pagar comisión por vender, sin perder el dominio, el correo ni el control de su catálogo."
        }
      },

      gcpfm: {
        title: "GCP Facilities Management",
        subtitle: "Mantenimiento y automatización de un WordPress corporativo de 28 páginas, en Reino Unido",
        tech: "WordPress · Divi · REST API · Python",
        card: "Cambios masivos por API en un sitio sin acceso a servidor.",
        problema: "Un sitio corporativo de 28 páginas en WordPress con Divi, y una restricción incómoda: no hay acceso a servidor, ni a cPanel, ni a DNS. Solo credenciales de WordPress. Con una lista de cambios que tocaba casi todas las páginas, hacerlo a mano una por una no era viable.",
        solucion: [
          {
            icon: "fa-code",
            title: "Todo por la REST API",
            text: "Sin SSH ni WP-CLI disponibles, los cambios se aplican con scripts propios en Python contra la REST API de WordPress. Reproducibles y reversibles."
          },
          {
            icon: "fa-check-double",
            title: "Verificador antes de dar nada por bueno",
            text: "192 llamadas a la acción normalizadas en las 28 páginas. Ningún cambio se registra como aceptado si el verificador devuelve un solo fallo."
          },
          {
            icon: "fa-anchor",
            title: "Anclas de sección en 24 páginas",
            text: "Navegación interna coherente en todo el sitio, generada por script en vez de a mano."
          },
          {
            icon: "fa-envelope",
            title: "Dos formularios, no uno",
            text: "El sitio tenía dos formularios de contacto distintos: uno vive en el Theme Builder de Divi y solo se edita a mano. Encontrarlo fue la mitad del trabajo; los dos entregan ya en el buzón correcto."
          },
          {
            icon: "fa-bolt",
            title: "Parpadeo de cabecera diagnosticado",
            text: "La cabecera parpadeaba al cargar en todas las páginas. La causa era el Critical CSS de Divi, no el tema ni el contenido. Verificado en las 28 páginas."
          },
          {
            icon: "fa-globe",
            title: "Cliente internacional",
            text: "Proyecto en inglés, con el cliente en Reino Unido y comunicación asíncrona."
          }
        ],
        resultado: {
          intro: "Tres tareas cerradas y verificadas en producción durante 2026.",
          puntos: [
            "192 llamadas a la acción normalizadas en 28 páginas, con verificación automática de cero fallos.",
            "Los dos formularios de contacto entregando en el buzón correcto.",
            "Parpadeo de cabecera eliminado y verificado página por página.",
            "Los cambios masivos dejaron de ser trabajo manual: hoy son un script que se puede volver a correr."
          ],
          cierre: "",
          frase: "Sin acceso al servidor, la API del propio WordPress fue suficiente para convertir 28 ediciones manuales en un script verificable."
        }
      }
    },
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
      subtitle: "Full Stack Developer",
      claim: "I build and operate production platforms: AI assistants on WhatsApp, headless e-commerce and training systems.",
      liveLabel: "Live in production",
      viewProjects: "View projects",
      downloadCV: "Download CV",
      contactMe: "Contact me",
      scroll: "Scroll"
    },

    // About Section
    about: {
      title: "About Me",
      intro: "Full Stack Developer and founder of Lopezoft.",
      description: "I have spent four years building web applications and, above all, keeping them alive after delivery. Today I operate an AI assistant that books medical appointments every day, a store that moved off Shopify, and a training platform with seat control and payments.\n\nI work the full cycle: Next.js and React on the front end, Node and PostgreSQL on the back end, and the infrastructure that holds it up —deployments, backups, certificates, and the log reading that uncovers what is failing silently—. That last part is what separates shipping software from operating it.\n\nBefore programming I founded and ran a distribution company operating in five cities. That is why a conversation with me starts with the business problem, not with the framework.",
      personalDataTitle: "Contact details",
      phone: "Phone",
      email: "Email",
      website: "Website",
      address: "Location",
      position: "Role",
      positionValue: "Full Stack Developer",
      buildTitle: "What I build",
      build: {
        ai: {
          title: "Applied AI",
          text: "Assistants that take real actions on the systems the client already uses, not just chat."
        },
        ecommerce: {
          title: "Headless e-commerce",
          text: "Own storefronts with local payment gateways, no per-sale commission and no platform lock-in."
        },
        platforms: {
          title: "Custom platforms",
          text: "Memberships, seat limits, payments and gated content, with an admin panel the client runs alone."
        },
        ops: {
          title: "Operations",
          text: "Deployment, backups, SSL and monitoring. What keeps a system working in month six."
        }
      },
      downloadCV: "Download CV"
    },

    // Skills Section
    skills: {
      title: "Skills",
      technical: "Tech stack",
      professional: "How I work",
      groups: {
        frontend: "Frontend",
        backend: "Backend & data",
        ai: "AI & automation",
        infra: "Infrastructure & CMS"
      },
      list: {
        problemSolving: "Problem solving",
        codeReview: "Code review & documentation",
        agile: "Agile methodologies",
        technicalComm: "Technical communication",
        projectMgmt: "Project management",
        processOpt: "Process optimization"
      }
    },

    // Curriculum Section
    curriculum: {
      title: "Resume",
      education: "Education",
      experience: "Experience",
      items: {
        reactCourse: {
          title: "React from Zero to Expert",
          institution: "Udemy",
          year: "2025",
          description: "Context API, MERN, Hooks, Firestore, JWT, testing, authentication, deployments and CRUD."
        },
        angularCourse: {
          title: "Angular from Zero to Expert",
          institution: "Udemy",
          year: "2022",
          description: "Signals, components, directives, services, JWT, authentication, deployments and MongoDB."
        },
        webCourse: {
          title: "HTML, CSS and JavaScript",
          institution: "Udemy",
          year: "2021",
          description: "Layout, responsive design, SASS, Flexbox, CSS Grid, Bootstrap, JavaScript and jQuery."
        },
        university: {
          title: "Industrial Engineering",
          institution: "Universidad Tecnológica de Pereira",
          year: "2009 - 2014",
          description: "Process optimization, project management and data analysis applied to organizational productivity. It is the training I use today to understand the business before writing code."
        },
        lopezoft: {
          title: "Full Stack Developer · Founder",
          institution: "Lopezoft",
          year: "2022 - Present",
          description: "I build and operate the platforms of the company's clients end to end: product, code, deployment and infrastructure.\n\n• WhatsApp AI assistant for a dental clinic, integrated with Dentalink: it books, reschedules and cancels real appointments. In daily operation throughout 2026. Auditing its logs I found 25 messages to 12 patients being lost silently, and fixed it with retries, alerts and automatic recovery.\n• JPR Academy (jprdesigntraining.com): training platform on Next.js 15 + Payload CMS + PostgreSQL, with per-cohort seat control, Wompi payments and protected video. It sold 9 of the 10 Elite passes in its first cohort.\n• Café Montelargo: migration from Shopify to an owned headless storefront (Next.js + WooCommerce via WPGraphQL + Wompi + n8n). Removed the per-sale commission and the 2% external-gateway surcharge.\n• GCPFM (United Kingdom): maintenance of a 28-page WordPress site through its REST API, automated with custom Python scripts.\n\nStack: Next.js, React, Angular, Node.js, TypeScript, PostgreSQL, MongoDB, Firebase, headless WordPress, Tailwind CSS, Docker, n8n."
        },
        g3: {
          title: "Founder and General Manager",
          institution: "G3 Security",
          year: "2016 - 2022",
          description: "I founded and ran an electronic security hardware distribution company operating in five cities.\n\nSix years negotiating with suppliers, coordinating logistics and answering for a payroll teach you to read a business problem before proposing a technical solution. That is why a conversation with me starts with what is costing the client money, not with the framework."
        },
        servientrega: {
          title: "Process analyst (intern)",
          institution: "Servientrega S.A.",
          year: "2014 - 2015",
          description: "Time and motion study in logistics. I developed an algorithm measuring delivery time and effort per zone to implement productivity-based pay."
        }
      }
    },

    portfolio: {
      title: "PORTFOLIO",
      intro: "Four systems in production. Each one proves something different.",
      verCaso: "View the case",
      otrosTitle: "Other work",
      otros: {
        lopezoft: {
          title: "Lopezoft",
          text: "My company's site. Next.js, with in-house design, content and infrastructure."
        },
        nutrexcol: {
          title: "Nutrexcol",
          text: "Front-end build of the corporate WordPress site, for an agency."
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
    // ========================================
    // CASOS — project detail pages
    // ========================================
    casos: {
      etiquetas: {
        problema: "The problem",
        solucion: "What I built",
        resultado: "The result",
        stack: "Stack",
        galeria: "How it looks",
        enlaces: "Links",
        verSitio: "View the live site",
        privado: "Private client project",
        privadoNota: "There is no public demo: the system operates on real patient health data. I can walk you through it on a call.",
        volver: "Back to portfolio",
        derechos: "All rights reserved.",
        masProyectos: "View more projects",
        grupos: {
          frontend: "Frontend",
          backend: "Backend & data",
          backend2: "Persistence",
          ai: "Integrations",
          infra: "Infrastructure"
        }
      },

      whatsapp: {
        title: "WhatsApp AI Assistant",
        subtitle: "Books real appointments in a dental clinic's system, in natural conversation",
        tech: "Claude AI · WhatsApp Business API · Firebase",
        card: "An assistant that does not take messages: it writes into the clinic's real calendar.",
        problema: "A clinic books appointments over WhatsApp. Every booking arrives as a message someone has to read, look up in the system, fit into the calendar and answer. Outside business hours nobody replies — and the patient who gets no answer calls another clinic.",
        solucion: [
          {
            icon: "fa-comments",
            title: "Conversation with real actions",
            text: "It finds the patient, registers them if new, books, reschedules and cancels. It does not take messages: it writes into the real calendar, respecting appointment length, chair availability and opening hours."
          },
          {
            icon: "fa-plug",
            title: "Integrated with the system they already used",
            text: "It connects to Dentalink, the clinic's management software. Nobody had to change how the team works."
          },
          {
            icon: "fa-brain",
            title: "Memory of returning patients",
            text: "It recognises anyone who has written before and picks up the context. Images, audio, video and documents work in both directions."
          },
          {
            icon: "fa-bell",
            title: "Automatic reminder",
            text: "Sent the day before the appointment, with confirm or cancel buttons. Fewer silent no-shows."
          },
          {
            icon: "fa-headset",
            title: "Handoff to a person",
            text: "When needed, a web panel lets the team take over the conversation without the patient noticing the switch."
          },
          {
            icon: "fa-triangle-exclamation",
            title: "What happens when it fails",
            text: "If the AI fails, the system tells the patient, escalates to a human and alerts the engineer over WhatsApp. It never just goes quiet."
          }
        ],
        resultado: {
          intro: "In operation throughout 2026, in daily use. But the part worth telling is not that it works — it is what showed up when I audited its production logs: three failures that left no trace.",
          puntos: [
            "Reminders that never went out. A calendar query took too long, the system read it as \"no appointments tomorrow\", and nobody was notified that Sunday.",
            "Messages WhatsApp accepted and then dropped: 25 messages undelivered to 12 patients in 7 days, while the panel showed them as sent. One patient travelled to a cancelled appointment because the notices never arrived.",
            "Images failing silently, including the one sent as a test."
          ],
          cierre: "All three were fixed: automatic retries on network failures, an alert to the administrator when a reminder does not go out, recovery that retries on its own an hour later, a red flag in the panel with the real reason a message failed, and a warning to the agent before writing if the WhatsApp window has already closed.",
          frase: "The hard part of applied AI is not the conversation. It is what happens when it fails — and to find that out, someone has to be reading the logs."
        }
      },

      jpr: {
        title: "JPR Academy",
        subtitle: "Training platform with limited seats, payments and protected video",
        tech: "Next.js · Payload CMS · PostgreSQL",
        card: "Selling counted seats is an inventory problem, not a design one.",
        problema: "Selling mentorships and courses with seats limited per pass type is an inventory problem, not a design one. Every cohort has a fixed number of places, passes carry different access levels, and payments come in both pesos and dollars. With a template or a generic gateway that is managed by hand — and by hand, you oversell.",
        solucion: [
          {
            icon: "fa-ticket",
            title: "Seat control per cohort and per pass",
            text: "Each pass type has its own price, seat count and access level. A student's access is frozen at the moment they pay."
          },
          {
            icon: "fa-credit-card",
            title: "Payments with signature verification",
            text: "Wompi for Colombian pesos, with webhook signature validation. A payment is not trusted because the browser says so."
          },
          {
            icon: "fa-lock",
            title: "Gated members area",
            text: "Live classes, permanent recordings, extended material and a private community. Each block is visible or not depending on the pass the student bought."
          },
          {
            icon: "fa-arrow-up-right-dots",
            title: "Self-service pass upgrade",
            text: "Anyone who joined on the basic pass pays only the difference and their access lifts itself, with nobody touching the admin panel."
          },
          {
            icon: "fa-video",
            title: "Protected video",
            text: "Recordings are served through Bunny Stream: they cannot be downloaded or shared by direct link."
          },
          {
            icon: "fa-shield-halved",
            title: "Operations included",
            text: "Transactional email, daily database backups, auto-renewed SSL and 1-to-1 scheduling through Cal.com."
          }
        ],
        resultado: {
          intro: "Live at jprdesigntraining.com since 2026.",
          puntos: [
            "9 of the 10 Elite passes in the first Visual Direction cohort, sold. Figure authorised by the client.",
            "An overselling bug was caught and fixed before it cost money: the system would have sold an Elite seat that no longer existed. A manual panel would not have flagged it.",
            "Pass upgrades stopped being a manual errand —remembering to change the version and three permissions, reconciling a transfer— and became a purchase that records itself.",
            "A change requested by the client on 30 July was deployed and verified in production the same day."
          ],
          cierre: "",
          frase: "It sold 9 of 10 seats in its first cohort on an owned platform, with no per-sale commission and without overselling a single place."
        }
      },

      cafe: {
        title: "Café Montelargo",
        subtitle: "Leaving Shopify without losing the domain, the email or control of the catalogue",
        tech: "Next.js · Headless WordPress · Wompi",
        card: "Migration to an owned storefront, with no per-sale commission.",
        problema: "The store lived on Shopify. Shopify Payments does not operate in Colombia, so every sale paid the monthly plan, the local gateway commission and, on top of that, an extra 2% surcharge for using an external gateway. The catalogue and the orders were also locked inside a platform that is hard to leave.",
        solucion: [
          {
            icon: "fa-store",
            title: "Own front end, familiar CMS",
            text: "The store is an owned Next.js app; the catalogue is managed from headless WordPress. The client edits with a tool they already knew, and the visitor never sees WordPress."
          },
          {
            icon: "fa-money-bill-transfer",
            title: "Local payments, total recalculated server-side",
            text: "Wompi with Nequi, PSE, the Bancolombia button and cards. The total is recomputed from the catalogue on the server: what arrives from the browser is never trusted."
          },
          {
            icon: "fa-database",
            title: "PostgreSQL as the source of truth",
            text: "Orders live in an owned database, mirrored to WooCommerce so the owner can look up orders and manage their own coupons without asking anyone."
          },
          {
            icon: "fa-robot",
            title: "Five automations in production",
            text: "Order confirmation, admin notification, welcome email with coupon, abandoned-cart recovery and a 30-day repurchase nudge. They run on their own in n8n."
          },
          {
            icon: "fa-rotate",
            title: "Payment rescue without a webhook",
            text: "If a gateway webhook never arrives, a reconciliation process recovers the order against the gateway API. An approved payment does not get lost."
          },
          {
            icon: "fa-shield-halved",
            title: "Operations included",
            text: "Daily database backups to external storage and automatic SSL."
          }
        ],
        resultado: {
          intro: "Live at cafemontelargo.com.",
          puntos: [
            "Migration completed onto owned infrastructure, with no per-sale commission and without losing the domain or the email in the process.",
            "The monthly Shopify plan and the 2% surcharge on every sale are gone, permanently.",
            "The client manages their own coupons and looks up their own orders. Less dependence on the provider is better service.",
            "Five sales automations running without intervention."
          ],
          cierre: "",
          frase: "They left Shopify and stopped paying a commission to sell, without losing the domain, the email or control of their catalogue."
        }
      },

      gcpfm: {
        title: "GCP Facilities Management",
        subtitle: "Maintaining and automating a 28-page corporate WordPress site in the United Kingdom",
        tech: "WordPress · Divi · REST API · Python",
        card: "Bulk changes through the API on a site with no server access.",
        problema: "A 28-page corporate WordPress site running Divi, with an awkward constraint: no server access, no cPanel, no DNS. WordPress credentials and nothing else. With a change list touching almost every page, doing it by hand one page at a time was not viable.",
        solucion: [
          {
            icon: "fa-code",
            title: "Everything through the REST API",
            text: "With no SSH or WP-CLI available, changes are applied by custom Python scripts against the WordPress REST API. Reproducible and reversible."
          },
          {
            icon: "fa-check-double",
            title: "A verifier before anything counts as done",
            text: "192 calls to action normalised across the 28 pages. No change is recorded as accepted while the verifier returns a single failure."
          },
          {
            icon: "fa-anchor",
            title: "Section anchors on 24 pages",
            text: "Consistent in-page navigation across the whole site, generated by script rather than by hand."
          },
          {
            icon: "fa-envelope",
            title: "Two forms, not one",
            text: "The site had two different contact forms: one lives inside Divi's Theme Builder and can only be edited by hand. Finding it was half the job; both now deliver to the right inbox."
          },
          {
            icon: "fa-bolt",
            title: "Header flicker diagnosed",
            text: "The header flickered on load across every page. The cause was Divi's Critical CSS, not the theme or the content. Verified on all 28 pages."
          },
          {
            icon: "fa-globe",
            title: "International client",
            text: "Project run in English, with the client in the United Kingdom and asynchronous communication."
          }
        ],
        resultado: {
          intro: "Three pieces of work closed and verified in production during 2026.",
          puntos: [
            "192 calls to action normalised across 28 pages, with automated zero-failure verification.",
            "Both contact forms delivering to the correct inbox.",
            "Header flicker removed and verified page by page.",
            "Bulk changes stopped being manual work: today they are a script that can be run again."
          ],
          cierre: "",
          frase: "With no server access, the site's own WordPress API was enough to turn 28 manual edits into a verifiable script."
        }
      }
    },
  }
};

// Make translations available globally for Alpine.js
window.translations = translations;

// Export for use in other files
if (typeof module !== 'undefined' && module.exports) {
  module.exports = translations;
}
