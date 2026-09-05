export type Project = {
    id: string
    name: string
    subtitle?: string
    badge?: string
    description: string
    logo?: string
    disciplineTags?: string[]
    technologies?: string[]
    url?: string
    readme?: string
    caseStudyUrl?: string
}

export type Activity = {
    title: string
    subtitle: string
    description: string
    category: "certificate" | "career"
    date: string
    tags: string[]
    link?: string
    certificateImage?: string
}

export type Experience = {
    company: string
    role: string
    period: string
    description: string
    logo?: string
    skills?: string[]
}

export type Dictionary = {
    hero: {
        greeting: string
        role: string
        biography: string[]
        links: {
            linkedin: string
            github: string
        }
        findMe: string
        or: string
        companyPrefix: string
    }
    workExperience: {
        title: string
    }
    selectedProjects: {
        title: string
        description: string
        moreTitle: string
    }
    activities: {
        title: string
    }
    footer: {
        title: string
        rights: string
    }
    projects: Project[]
    activitiesList: Activity[]
    experiences: Experience[]
}

const en: Dictionary = {
    hero: {
        greeting: "Ian Pontorno",
        role: "Full-Stack Developer & Growth Engineer",
        biography: [
            "I build web and desktop applications, automation tools, and data workflows. My background spans software development, IT operations, and performance marketing, connecting how a product works with the people and business processes it serves.",
            "At Fanger Design, I work in paid media and automation. Across my projects, I explore developer tools, creative experiences, local AI, and operational software."
        ],
        links: {
            linkedin: "LinkedIn",
            github: "GitHub"
        },
        findMe: "you can find me at",
        or: "or",
        companyPrefix: "in"
    },
    workExperience: {
        title: "Work Experience"
    },
    selectedProjects: {
        title: "Selected Projects",
        description: "A selection of products showing how I approach engineering, interaction design, automation, and practical problem solving.",
        moreTitle: "More work"
    },
    activities: {
        title: "Activities & Achievements"
    },
    footer: {
        title: "elsewhere",
        rights: "All rights reserved."
    },
    projects: [
        {
            id: "mim",
            name: "MIM — Minecraft Intelligent Manager",
            subtitle: "Desktop & Web Modding Platform",
            badge: "Current flagship",
            description: "A desktop and web ecosystem for managing Minecraft mods and modpacks. It combines file management, deterministic crash diagnostics, static bytecode inspection, NBT recovery, and cloud collaboration.",
            disciplineTags: [
                "Systems Engineering",
                "Applied AI",
                "Distributed Systems",
                "Security"
            ],
            url: "https://mim-hub.vercel.app/",
            readme: "https://github.com/Ian9Franco/MIM#readme",
            caseStudyUrl: "/projects/mim",
            technologies: [
                "Next.js 16",
                "React 19",
                "TypeScript",
                "Electron 42",
                "PostgreSQL",
                "Supabase Realtime",
                "IndexedDB",
                "Node.js"
            ]
        },
        {
            id: "smart-scan",
            name: "Smart Scan",
            subtitle: "Local AI & Semantic File Intelligence",
            badge: "Private project",
            description: "A local file explorer and asset-management project for designers and creatives, focused on semantic search, multimedia previews, format conversion, and non-destructive indexing.",
            disciplineTags: [
                "Applied AI",
                "Local ML",
                "Semantic Search",
                "Computer Vision"
            ],
            technologies: ["Local AI", "Semantic Search", "TypeScript", "Node.js", "Media Processing"]
        },
        {
            id: "plotter",
            name: "Plotter",
            description: "Plotter is a premium web platform for film discovery and review designed especially for film lovers.",
            url: "https://plotter-reviews.vercel.app/",
            readme: "https://github.com/Ian9Franco/plotter",
            technologies: ["Next.js", "React", "Tailwind CSS", "TypeScript", "Framer Motion"],
        },
        {
            id: "elseframe",
            name: "Elseframe Comics",
            subtitle: "Interactive Reader & Creative Tools",
            description: "A comic-reading and authoring platform connecting software with visual storytelling through guided panel navigation, dialogue editing, camera sequencing, and an interactive lore hub.",
            disciplineTags: ["Creative Tooling", "Interaction Design", "Web Platform"],
            url: "https://elseframe-comics.vercel.app/",
            readme: "https://github.com/Ian9Franco/ElseframeComics",
            technologies: ["Next.js 16", "React 19", "TypeScript", "Tailwind CSS v4", "Framer Motion", "Sharp"],
        },
        {
            id: "produ-estudio",
            name: "Produ Estudio",
            description: "Corporate website for Produ Estudio, a specialist in high-quality garments for streetwear and basic brands. Showcases design, production, and packaging services, highlighting the company's expertise and value proposition.",
            url: "https://produ-estudio.vercel.app/",
            readme: "https://github.com/Ian9Franco/Produ-Estudio#",
            technologies: ["Next.js", "React", "Tailwind CSS", "Vercel"],
        },
        {
            id: "web-sling-optimizer",
            name: "Web-Sling Optimizer",
            description: "E-commerce image optimization web app. Compresses assets, converts formats (WebP/AVIF), strips sensitive EXIF/GPS metadata, and adds custom watermarks to protect product catalogs.",
            url: "https://web-sling-optimizer.vercel.app/",
            readme: "https://github.com/Ian9Franco/Web-Sling-Optimizer",
            technologies: ["Next.js", "TypeScript", "Image Optimization", "EXIF Cleaner", "Tailwind CSS"]
        },
        {
            id: "q-sale",
            name: "Q-Sale",
            description: "Tactical Progressive Web App (PWA) to coordinate gaming sessions, track real-time availability and Discord voice status, and organize 5/5 squads for Rainbow Six Siege.",
            url: "https://q-sale.vercel.app/",
            readme: "https://github.com/Ian9Franco/q_sale",
            technologies: ["Next.js 16", "React", "TypeScript", "PWA", "Web Audio API"]
        },
        {
            id: "tormentica",
            name: "Tormentica",
            description: "Check the weather conditions based on your location before heading out, with a clean and interactive interface.",
            url: "https://ian9franco.github.io/tormentica/#/weather?lat=51.5073219&lon=-0.1276474",
            readme: "https://github.com/Ian9Franco/tormentica#readme",
            technologies: ["React", "JavaScript"],
        },
        {
            id: "netherious",
            name: "Netherious",
            description: "Private Minecraft server modpack for Netherious. Download Forge 1.20.1, modpacks, texture packs, and shader recommendations.",
            url: "https://netherious-ten.vercel.app/",
            readme: "https://github.com/Ian9Franco/netherious",
            technologies: ["Next.js 14 ", "TypeScript", "Tailwind CSS", "Framer Motion", "Lucide React", "Cloudflare r2", " Radix UI"],
        },
        {
            id: "conversorio",
            name: "Conversorio",
            description: "Convert between different currencies, calculate taxes in USD, and track subscription expenses effortlessly.",
            url: "https://conversorio.vercel.app/",
            readme: "https://github.com/Ian9Franco/conversorio#readme",
            technologies: ["React", "JavaScript", "JS"],
        },
    ],
    activitiesList: [
        {
            title: "Google Ads Display Certification",
            subtitle: "Google Skillshop",
            description: "Demonstrates proficiency in developing and optimizing effective Google Display campaigns, reaching users with relevant ads across the web.",
            category: "certificate",
            date: "2026",
            tags: ["Google Ads", "Digital Marketing", "Display Ads"],
            link: "https://skillshop.credential.net/e77ff40c-98e0-43ea-ae3b-4667bd3a94eb#acc.43ZFhbsn",
        },
        {
            title: "Diploma in SAP ABAP Programming",
            subtitle: "Universidad Tecnológica Nacional (UTN) – Argentina",
            description: "Specialized diploma completed in SAP ABAP development for enterprise software, custom reports, and business systems.",
            category: "certificate",
            date: "2025",
            tags: ["SAP", "ABAP", "Enterprise Systems"],
            link: "https://validator.centrodeelearning.com/validator/5ec3a92d-720f-49c5-af8f-1496682b0ba3",
        },
        {
            title: "Software Engineering Studies",
            subtitle: "Universidad Nacional de La Matanza – Buenos Aires, Argentina",
            description: "Ongoing university studies focused on software engineering, programming, databases, and systems.",
            category: "career",
            date: "2023 – Present",
            tags: ["Software Engineering", "University", "Programming"],
        },
        {
            title: "JavaScript Development",
            subtitle: "Coderhouse",
            description: "Completed a certification in JavaScript development, covering fundamentals, ES6+, and modern web practices.",
            category: "certificate",
            date: "2022",
            tags: ["JavaScript", "Web Development"],
            certificateImage: "/certificates/javascript-development-certificate.png",
        },
        {
            title: "Advanced Backend Development",
            subtitle: "Coderhouse",
            description: "Advanced backend programming skills, APIs, authentication, and scalable architectures.",
            category: "certificate",
            date: "2024",
            tags: ["Backend", "Node.js", "APIs"],
            certificateImage: "/certificates/advanced-backend-development-certificate.png",
        },
        {
            title: "Java Development",
            subtitle: "Coderhouse",
            description: "Strong knowledge in object-oriented programming, Java fundamentals, and application building.",
            category: "certificate",
            date: "2024",
            tags: ["Java", "OOP", "Backend"],
            certificateImage: "/certificates/java-development-certificate.png",
        },
        {
            title: "Data Analytics",
            subtitle: "Coderhouse",
            description: "Learned data manipulation, visualization, and insights extraction with modern analytics tools.",
            category: "certificate",
            date: "2024",
            tags: ["Data Analysis", "Analytics", "Business Intelligence"],
            certificateImage: "/certificates/data-analytics-certificate.png",
        },
        {
            title: "Web Development",
            subtitle: "Coderhouse",
            description: "Covered the basics of frontend and backend web development, including HTML, CSS, and JavaScript.",
            category: "certificate",
            date: "2021",
            tags: ["HTML", "CSS", "JavaScript"],
            certificateImage: "/certificates/web-development-certificate.png",
        },
        {
            title: "Fundamentals of Artificial Intelligence",
            subtitle: "Coderhouse",
            description: "Introduction to AI concepts, machine learning fundamentals, and real-world applications.",
            category: "certificate",
            date: "2023",
            tags: ["AI", "Machine Learning", "Technology"],
            certificateImage: "/certificates/fundamentals-of-artificial-intelligence-certificate.png",
        },
    ],
    experiences: [
        {
            company: "Fanger Design - Buenos Aires, Argentina",
            role: "Marketing Engineer (Paid Media & Automation)",
            period: "2025 - Present",
            description: "Detailed analysis and optimization of Meta Ads and Google Ads campaigns according to each client's objectives. Creation, updating, and adjustment of campaigns to improve performance and results. Management of daily digital operations including website updates and design improvements. Organization and maintenance of internal database information. Development of scripts and small automations for process optimization.",
            logo: "/images/experience/Fanger.png",
            skills: ["Digital Marketing", "WordPress", "Google Ads","Meta Ads", "Graphic Design", "Programming", "Python", "Databases", "Next.js", "Responsive Web Design", "Process Automation"]
        },
        {
            company: "Codere – Buenos Aires, Argentina",
            role: "IT Operations & Automation Specialist",
            period: "2019 – 2025",
            description: "I designed and automated internal business applications using Python and modern web technologies, ensuring alignment with SAP-style workflows. My work involved integrating REST APIs and database systems to enable dynamic reporting. I supported AWS and Docker environments for enterprise application deployment, and built analytical dashboards with Power BI and Excel. Additionally, I contributed to system documentation and process automation through tools like Jira and ServiceNow.",
            logo: "/images/experience/codere.png",
            skills: ["Python", "Automation", "REST APIs", "AWS", "Docker", "Power BI", "Excel", "Jira", "ServiceNow"]
        },
        {
            company: "Ilummi – Remote",
            role: "Front-End Developer",
            period: "2021 – 2025",
            description: "I developed responsive and scalable enterprise web applications using React and TypeScript. I created advanced data visualizations and dashboards using Recharts and D3.js. My work included integrating APIs and databases such as MySQL, Firebase, and Supabase. I also implemented and maintained CI/CD pipelines through GitHub Actions and AWS. Throughout these projects, I collaborated in Agile teams, emphasizing UI performance and accessibility.",
            logo: "/images/experience/illumi.png",
            skills: ["React", "TypeScript", "Recharts", "D3.js", "MySQL", "Firebase", "Supabase", "CI/CD", "GitHub Actions", "AWS"]
        },
    ]
}

const es: Dictionary = {
    hero: {
        greeting: "Ian Pontorno",
        role: "Full-Stack Developer & Growth Engineer",
        biography: [
            "Desarrollo aplicaciones web y de escritorio, herramientas de automatización y flujos de datos. Mi trayectoria combina desarrollo de software, operaciones de TI y marketing de resultados, conectando el funcionamiento de un producto con las personas y los procesos de negocio a los que sirve.",
            "En Fanger Design trabajo en paid media y automatización. En mis proyectos exploro herramientas para desarrolladores, experiencias creativas, IA local y software operativo."
        ],
        links: {
            linkedin: "LinkedIn",
            github: "GitHub"
        },
        findMe: "puedes encontrarme en",
        or: "o",
        companyPrefix: "en"
    },
    workExperience: {
        title: "Experiencia Laboral"
    },
    selectedProjects: {
        title: "Proyectos destacados",
        description: "Una selección de productos que muestra cómo trabajo con ingeniería, diseño de interacción, automatización y problemas concretos.",
        moreTitle: "Otros proyectos"
    },
    activities: {
        title: "Actividades y Logros"
    },
    footer: {
        title: "otros canales",
        rights: "Todos los derechos reservados."
    },
    projects: [
        {
            id: "mim",
            name: "MIM — Minecraft Intelligent Manager",
            subtitle: "Plataforma de modding para escritorio y web",
            badge: "Proyecto principal actual",
            description: "Un ecosistema de escritorio y web para gestionar mods y modpacks de Minecraft. Combina manejo de archivos, diagnóstico determinista de errores, inspección estática de bytecode, recuperación NBT y colaboración en la nube.",
            disciplineTags: [
                "Ingeniería de Sistemas",
                "IA Aplicada",
                "Sistemas Distribuidos",
                "Seguridad"
            ],
            url: "https://mim-hub.vercel.app/",
            readme: "https://github.com/Ian9Franco/MIM#readme",
            caseStudyUrl: "/projects/mim",
            technologies: [
                "Next.js 16",
                "React 19",
                "TypeScript",
                "Electron 42",
                "PostgreSQL",
                "Supabase Realtime",
                "IndexedDB",
                "Node.js"
            ]
        },
        {
            id: "smart-scan",
            name: "Smart Scan",
            subtitle: "IA Local e Inteligencia Semántica de Archivos",
            badge: "Proyecto privado",
            description: "Un explorador de archivos y gestor de recursos local para diseñadores y creativos, centrado en búsqueda semántica, previsualización multimedia, conversión de formatos e indexación no destructiva.",
            disciplineTags: [
                "IA Aplicada",
                "ML Local",
                "Búsqueda Semántica",
                "Computer Vision"
            ],
            technologies: ["IA Local", "Búsqueda Semántica", "TypeScript", "Node.js", "Procesamiento Media"]
        },
        {
            id: "plotter",
            name: "Plotter",
            description: "Plotter es una plataforma web premium de descubrimiento y crítica cinematográfica diseñada especialmente para cinéfilos",
            url: "https://plotter-reviews.vercel.app/",
            readme: "https://github.com/Ian9Franco/plotter",
            technologies: ["Next.js", "React", "Tailwind CSS", "TypeScript", "Framer Motion"],
        },
        {
            id: "elseframe",
            name: "Elseframe Comics",
            subtitle: "Lector interactivo y herramientas creativas",
            description: "Una plataforma de lectura y creación de cómics que conecta software y narrativa visual mediante navegación guiada por viñetas, edición de diálogos, secuencias de cámara y un espacio interactivo de lore.",
            disciplineTags: ["Herramientas creativas", "Diseño de interacción", "Plataforma web"],
            url: "https://elseframe-comics.vercel.app/",
            readme: "https://github.com/Ian9Franco/ElseframeComics",
            technologies: ["Next.js 16", "React 19", "TypeScript", "Tailwind CSS v4", "Framer Motion", "Sharp"],
        },
        {
            id: "produ-estudio",
            name: "Produ Estudio",
            description: "Sitio web corporativo para Produ Estudio, especialista en prendas de alta calidad para marcas de streetwear y básicos. Muestra servicios de diseño, producción y packaging, destacando la experiencia y propuesta de valor de la empresa.",
            url: "https://produ-estudio.vercel.app/",
            readme: "https://github.com/Ian9Franco/Produ-Estudio#",
            technologies: ["Next.js", "React", "Tailwind CSS", "Vercel"],
        },
        {
            id: "web-sling-optimizer",
            name: "Web-Sling Optimizer",
            description: "Optimizador web de imágenes pensado para e-commerce. Comprime archivos, convierte formatos (WebP/AVIF), limpia metadatos sensibles EXIF/GPS y permite añadir marcas de agua personalizadas.",
            url: "https://web-sling-optimizer.vercel.app/",
            readme: "https://github.com/Ian9Franco/Web-Sling-Optimizer",
            technologies: ["Next.js", "TypeScript", "Optimización de Imágenes", "Limpiador EXIF", "Tailwind CSS"]
        },
        {
            id: "q-sale",
            name: "Q-Sale",
            description: "Progressive Web App (PWA) táctica para coordinar partidas en tiempo real con amigos, consultar disponibilidad y estado de voz en Discord, y organizar escuadras de 5/5 para Rainbow Six Siege.",
            url: "https://q-sale.vercel.app/",
            readme: "https://github.com/Ian9Franco/q_sale",
            technologies: ["Next.js 16", "React", "TypeScript", "PWA", "Web Audio API"]
        },
        {
            id: "tormentica",
            name: "Tormentica",
            description: "Consulta las condiciones climáticas basadas en tu ubicación antes de salir, con una interfaz limpia e interactiva.",
            url: "https://ian9franco.github.io/tormentica/#/weather?lat=51.5073219&lon=-0.1276474",
            readme: "https://github.com/Ian9Franco/tormentica#readme",
            technologies: ["React", "JavaScript"],
        },
        {
            id: "netherious",
            name: "Netherious",
            description: "Modpack de servidor privado de Minecraft para Netherious. Descarga Forge 1.20.1, modpacks, paquetes de texturas y recomendaciones de shaders.",
            url: "https://netherious-ten.vercel.app/",
            readme: "https://github.com/Ian9Franco/netherious",
            technologies: ["Next.js 14 ", "TypeScript", "Tailwind CSS", "Framer Motion", "Lucide React", "Cloudflare r2", " Radix UI"],
        },
        {
            id: "conversorio",
            name: "Conversorio",
            description: "Convierte entre diferentes monedas, calcula impuestos en USD y rastrea gastos de suscripción sin esfuerzo.",
            url: "https://conversorio.vercel.app/",
            readme: "https://github.com/Ian9Franco/conversorio#readme",
            technologies: ["React", "JavaScript", "JS"],
        },
    ],
    activitiesList: [
        {
            title: "Certificación en Publicidad en Display de Google Ads",
            subtitle: "Google Skillshop",
            description: "Demuestra competencia en el desarrollo y la optimización de campañas de Display de Google efectivas, llegando a los usuarios con anuncios relevantes en la web.",
            category: "certificate",
            date: "2026",
            tags: ["Google Ads", "Marketing Digital", "Display Ads"],
            link: "https://skillshop.credential.net/e77ff40c-98e0-43ea-ae3b-4667bd3a94eb#acc.43ZFhbsn",
        },
        {
            title: "Diplomatura en Programación SAP ABAP",
            subtitle: "Universidad Tecnológica Nacional (UTN) – Argentina",
            description: "Diplomatura completada en desarrollo SAP ABAP para software empresarial, reportes custom y sistemas de negocios. Certificación oficial validada.",
            category: "certificate",
            date: "2025",
            tags: ["SAP", "ABAP", "Sistemas Empresariales"],
            link: "https://validator.centrodeelearning.com/validator/5ec3a92d-720f-49c5-af8f-1496682b0ba3",
        },
        {
            title: "Licenciatura en Ingeniería de Software",
            subtitle: "Universidad Nacional de La Matanza – Buenos Aires, Argentina",
            description: "Carrera en curso enfocada en principios de ingeniería de software, programación, bases de datos y tecnologías web modernas.",
            category: "career",
            date: "2023 – Presente",
            tags: ["Ingeniería de Software", "Universidad", "Programación"],
        },
        {
            title: "Desarrollo JavaScript",
            subtitle: "Coderhouse",
            description: "Certificación completada en desarrollo JavaScript, cubriendo fundamentos, ES6+ y prácticas web modernas.",
            category: "certificate",
            date: "2022",
            tags: ["JavaScript", "Desarrollo Web"],
            certificateImage: "/certificates/javascript-development-certificate.png",
        },
        {
            title: "Desarrollo Backend Avanzado",
            subtitle: "Coderhouse",
            description: "Habilidades avanzadas de programación backend, APIs, autenticación y arquitecturas escalables.",
            category: "certificate",
            date: "2024",
            tags: ["Backend", "Node.js", "APIs"],
            certificateImage: "/certificates/advanced-backend-development-certificate.png",
        },
        {
            title: "Desarrollo Java",
            subtitle: "Coderhouse",
            description: "Sólidos conocimientos en programación orientada a objetos, fundamentos de Java y construcción de aplicaciones.",
            category: "certificate",
            date: "2024",
            tags: ["Java", "OOP", "Backend"],
            certificateImage: "/certificates/java-development-certificate.png",
        },
        {
            title: "Data Analytics",
            subtitle: "Coderhouse",
            description: "Aprendizaje de manipulación de datos, visualización y extracción de insights con herramientas analíticas modernas.",
            category: "certificate",
            date: "2024",
            tags: ["Análisis de Datos", "Analytics", "Business Intelligence"],
            certificateImage: "/certificates/data-analytics-certificate.png",
        },
        {
            title: "Desarrollo Web",
            subtitle: "Coderhouse",
            description: "Conceptos básicos de desarrollo web frontend y backend, incluyendo HTML, CSS y JavaScript.",
            category: "certificate",
            date: "2021",
            tags: ["HTML", "CSS", "JavaScript"],
            certificateImage: "/certificates/web-development-certificate.png",
        },
        {
            title: "Fundamentos de Inteligencia Artificial",
            subtitle: "Coderhouse",
            description: "Introducción a conceptos de IA, fundamentos de aprendizaje automático y aplicaciones del mundo real.",
            category: "certificate",
            date: "2023",
            tags: ["IA", "Machine Learning", "Tecnología"],
            certificateImage: "/certificates/fundamentals-of-artificial-intelligence-certificate.png",
        },
    ],
    experiences: [
        {
            company: "Fanger Design - Buenos Aires, Argentina",
            role: "Ingeniero de Marketing (Paid Media & Automatización)",
            period: "2025 - Presente",
            description: "Análisis y optimización de campañas en Meta Ads y Google Ads según objetivos de cada cliente, evaluando métricas de rendimiento y detectando oportunidades de mejora. Creación, actualización y ajuste de campañas para mejorar performance y resultados. Gestión de la operación digital diaria: actualizaciones de sitios web, mejoras de diseño y contenido, carga y baja de productos según stock y requerimientos del cliente. Organización y mantenimiento de la información en la base de datos interna para asegurar consistencia y orden operativo. Desarrollo de scripts y pequeñas automatizaciones que optimizan procesos, reducen trabajo manual y mejoran la eficiencia general.",
            logo: "/images/experience/Fanger.png",
            skills: ["Marketing Digital", "WordPress", "Google Ads", "Meta Ads", "Diseño Gráfico", "Programación", "Python", "Bases de Datos", "Next.js", "Diseño Web Adaptable", "Automatización de Procesos"]
        },
        {
            company: "Codere – Buenos Aires, Argentina",
            role: "Especialista en Operaciones IT y Automatización",
            period: "2019 – 2025",
            description: "Diseñé y automaticé aplicaciones internas con Python y tecnologías web. Integré APIs REST y bases de datos para reportes dinámicos, di soporte a entornos de AWS y Docker, construí tableros con Power BI y Excel y contribuí a la documentación y automatización de procesos mediante Jira y ServiceNow.",
            logo: "/images/experience/codere.png",
            skills: ["Python", "Automatización", "REST APIs", "AWS", "Docker", "Power BI", "Excel", "Jira", "ServiceNow"]
        },
        {
            company: "Ilummi – Remoto",
            role: "Desarrollador Front-End",
            period: "2021 – 2025",
            description: "Desarrollé aplicaciones web empresariales con React y TypeScript, visualizaciones de datos con Recharts y D3.js e integraciones con MySQL, Firebase y Supabase. También trabajé con flujos de CI/CD mediante GitHub Actions y AWS, priorizando rendimiento, accesibilidad y arquitectura modular.",
            logo: "/images/experience/illumi.png",
            skills: ["React", "TypeScript", "Recharts", "D3.js", "MySQL", "Firebase", "Supabase", "CI/CD", "GitHub Actions", "AWS"]
        },
    ]
}

export const contactLinks = {
    email: "ian9franco@gmail.com",
    linkedin: "https://www.linkedin.com/in/ian-franco-collada-pontorno/",
    github: "https://github.com/Ian9Franco",
    instagram: "https://www.instagram.com/ian.franco._/"
}

export const dictionaries = { en, es }
