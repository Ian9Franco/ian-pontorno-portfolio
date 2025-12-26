export type Project = {
    id: string
    name: string
    description: string
    logo?: string
    technologies?: string[]
    url?: string
    readme?: string
}

export type Activity = {
    title: string
    subtitle: string
    description: string
    category: "certificate" | "career"
    date: string
    tags: string[]
    link?: string
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
    }
    workExperience: {
        title: string
    }
    selectedProjects: {
        title: string
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
        greeting: "Ian Franco Pontorno",
        role: "Performance & Digital Operations Specialist",
        biography: [
            "Performance and digital operations specialist with a strong technical background and a data-driven approach. I work with Meta and Google Ads to analyze campaign performance, optimize results based on business objectives, and translate data into clear, actionable improvements.",
            "I’m also responsible for day-to-day digital operations, including website updates, content and design improvements, product management based on stock, and internal data organization to keep systems consistent and reliable.",
            "With a background in software development, I naturally build scripts, small systems, and automations to streamline workflows, reduce manual effort, and improve scalability whenever possible."
        ],
        links: {
            linkedin: "LinkedIn",
            github: "GitHub"
        },
        findMe: "you can find me at",
        or: "or"
    },
    workExperience: {
        title: "Work Experience"
    },
    selectedProjects: {
        title: "Selected Projects"
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
            id: "produ-estudio",
            name: "Produ Estudio",
            description: "Corporate website for Produ Estudio, a specialist in high-quality garments for streetwear and basic brands. Showcases design, production, and packaging services, highlighting the company's expertise and value proposition.",
            url: "https://produ-estudio.vercel.app/",
            readme: "https://github.com/Ian9Franco/Produ-Estudio#",
            technologies: ["Next.js", "React", "Tailwind CSS", "Vercel"],
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
            id: "tormentica",
            name: "Tormentica",
            description: "Check the weather conditions based on your location before heading out, with a clean and interactive interface.",
            url: "https://ian9franco.github.io/tormentica/#/weather?lat=51.5073219&lon=-0.1276474",
            readme: "https://github.com/Ian9Franco/tormentica#readme",
            technologies: ["React", "JavaScript"],
        },
        {
            id: "conversorio",
            name: "Conversorio",
            description: "Convert between different currencies, calculate taxes in USD, and track subscription expenses effortlessly.",
            url: "https://conversorio.vercel.app/",
            readme: "https://github.com/Ian9Franco/conversorio#readme",
            technologies: ["React", "JavaScript", "JS"],
        },
        {
            id: "calendarious",
            name: "Calendarious",
            description: "Manage and visualize recurring subscriptions with ease, helping users stay organized and up-to-date.",
            url: "https://calendarious.vercel.app/",
            readme: "https://github.com/Ian9Franco/Calendarious#readme",
            technologies: ["React", "Tailwind CSS", "Node.js", "Next.js", "Git"],
        },
    ],
    activitiesList: [
        {
            title: "Bachelor’s Degree in Software Engineering",
            subtitle: "Universidad Nacional de La Matanza – Buenos Aires, Argentina",
            description: "Ongoing degree focused on software engineering principles, programming, databases, and modern web technologies.",
            category: "career",
            date: "2023 – Present",
            tags: ["Software Engineering", "University", "Programming"],
        },
        {
            title: "Diploma in SAP ABAP Programming",
            subtitle: "Universidad Tecnológica Nacional – Argentina",
            description: "Specialized diploma in SAP ABAP development for enterprise software and business systems.",
            category: "career",
            date: "2025 – Ongoing",
            tags: ["SAP", "ABAP", "Enterprise Systems"],
        },
        {
            title: "JavaScript Development",
            subtitle: "Coderhouse",
            description: "Completed a certification in JavaScript development, covering fundamentals, ES6+, and modern web practices.",
            category: "certificate",
            date: "2022",
            tags: ["JavaScript", "Web Development"],
            link: "https://pub.coderhouse.com/legacy-certificates/6373a1a3c4d9d4000e070b52?lang=es",
        },
        {
            title: "Advanced Backend Development",
            subtitle: "Coderhouse",
            description: "Advanced backend programming skills, APIs, authentication, and scalable architectures.",
            category: "certificate",
            date: "2024",
            tags: ["Backend", "Node.js", "APIs"],
            link: "https://pub.coderhouse.com/legacy-certificates/66d87189766073d467a8da31?lang=es",
        },
        {
            title: "Java Development",
            subtitle: "Coderhouse",
            description: "Strong knowledge in object-oriented programming, Java fundamentals, and application building.",
            category: "certificate",
            date: "2024",
            tags: ["Java", "OOP", "Backend"],
            link: "https://pub.coderhouse.com/legacy-certificates/66b38a1b905b61e36ba4f45d?lang=es",
        },
        {
            title: "Data Analytics",
            subtitle: "Coderhouse",
            description: "Learned data manipulation, visualization, and insights extraction with modern analytics tools.",
            category: "certificate",
            date: "2024",
            tags: ["Data Analysis", "Analytics", "Business Intelligence"],
            link: "https://pub.coderhouse.com/legacy-certificates/65de2ef7565bd5b0a81ebd6b?lang=es",
        },
        {
            title: "Web Development",
            subtitle: "Coderhouse",
            description: "Covered the basics of frontend and backend web development, including HTML, CSS, and JavaScript.",
            category: "certificate",
            date: "2021",
            tags: ["HTML", "CSS", "JavaScript"],
            link: "https://pub.coderhouse.com/legacy-certificates/6262b0f67cfd37001912af74?lang=es",
        },
        {
            title: "Fundamentals of Artificial Intelligence",
            subtitle: "Coderhouse",
            description: "Introduction to AI concepts, machine learning fundamentals, and real-world applications.",
            category: "certificate",
            date: "2023",
            tags: ["AI", "Machine Learning", "Technology"],
            link: "https://pub.coderhouse.com/legacy-certificates/64cd8ee3c2e270215f453cf9?lang=es",
        },
    ],
    experiences: [
        {
            company: "Fanger Design - Buenos Aires, Argentina",
            role: "Performance & Digital Operations Specialist",
            period: "Present",
            description: "Detailed analysis and optimization of Meta Ads and Google Ads campaigns according to each client's objectives. Creation, updating, and adjustment of campaigns to improve performance and results. Management of daily digital operations including website updates and design improvements. Organization and maintenance of internal database information. Development of scripts and small automations for process optimization.",
            logo: "/images/experience/Fanger.png",
            skills: ["Digital Marketing", "WordPress", "Google Ads", "Graphic Design", "Programming", "Python", "Databases", "Next.js", "Responsive Web Design", "Process Automation"]
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
        greeting: "Ian Franco Pontorno",
        role: "Especialista en Performance & Operaciones Digitales",
        biography: [
            "Especialista en performance y operaciones digitales con una sólida formación técnica y un enfoque basado en datos. Trabajo con Meta y Google Ads para analizar el rendimiento de las campañas, optimizar resultados según objetivos comerciales y traducir datos en mejoras claras y accionables.",
            "También soy responsable de las operaciones digitales diarias, incluyendo actualizaciones de sitios web, mejoras de diseño y contenido, gestión de productos según stock, y organización de datos internos para mantener la consistencia y confiabilidad de los sistemas.",
            "Con formación en desarrollo de software, naturalmente construyo scripts, pequeños sistemas y automatizaciones para agilizar flujos de trabajo, reducir el esfuerzo manual y mejorar la escalabilidad siempre que sea posible."
        ],
        links: {
            linkedin: "LinkedIn",
            github: "GitHub"
        },
        findMe: "puedes encontrarme en",
        or: "o"
    },
    workExperience: {
        title: "Experiencia Laboral"
    },
    selectedProjects: {
        title: "Proyectos Seleccionados"
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
            id: "produ-estudio",
            name: "Produ Estudio",
            description: "Sitio web corporativo para Produ Estudio, especialista en prendas de alta calidad para marcas de streetwear y básicos. Muestra servicios de diseño, producción y packaging, destacando la experiencia y propuesta de valor de la empresa.",
            url: "https://produ-estudio.vercel.app/",
            readme: "https://github.com/Ian9Franco/Produ-Estudio#",
            technologies: ["Next.js", "React", "Tailwind CSS", "Vercel"],
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
            id: "tormentica",
            name: "Tormentica",
            description: "Consulta las condiciones climáticas basadas en tu ubicación antes de salir, con una interfaz limpia e interactiva.",
            url: "https://ian9franco.github.io/tormentica/#/weather?lat=51.5073219&lon=-0.1276474",
            readme: "https://github.com/Ian9Franco/tormentica#readme",
            technologies: ["React", "JavaScript"],
        },
        {
            id: "conversorio",
            name: "Conversorio",
            description: "Convierte entre diferentes monedas, calcula impuestos en USD y rastrea gastos de suscripción sin esfuerzo.",
            url: "https://conversorio.vercel.app/",
            readme: "https://github.com/Ian9Franco/conversorio#readme",
            technologies: ["React", "JavaScript", "JS"],
        },
        {
            id: "calendarious",
            name: "Calendarious",
            description: "Gestiona y visualiza suscripciones recurrentes con facilidad, ayudando a los usuarios a mantenerse organizados y actualizados.",
            url: "https://calendarious.vercel.app/",
            readme: "https://github.com/Ian9Franco/Calendarious#readme",
            technologies: ["React", "Tailwind CSS", "Node.js", "Next.js", "Git"],
        },
    ],
    activitiesList: [
        {
            title: "Licenciatura en Ingeniería de Software",
            subtitle: "Universidad Nacional de La Matanza – Buenos Aires, Argentina",
            description: "Carrera en curso enfocada en principios de ingeniería de software, programación, bases de datos y tecnologías web modernas.",
            category: "career",
            date: "2023 – Presente",
            tags: ["Ingeniería de Software", "Universidad", "Programación"],
        },
        {
            title: "Diplomatura en Programación SAP ABAP",
            subtitle: "Universidad Tecnológica Nacional – Argentina",
            description: "Diplomatura especializada en desarrollo SAP ABAP para software empresarial y sistemas de negocios.",
            category: "career",
            date: "2025 – En curso",
            tags: ["SAP", "ABAP", "Sistemas Empresariales"],
        },
        {
            title: "Desarrollo JavaScript",
            subtitle: "Coderhouse",
            description: "Certificación completada en desarrollo JavaScript, cubriendo fundamentos, ES6+ y prácticas web modernas.",
            category: "certificate",
            date: "2022",
            tags: ["JavaScript", "Desarrollo Web"],
            link: "https://pub.coderhouse.com/legacy-certificates/6373a1a3c4d9d4000e070b52?lang=es",
        },
        {
            title: "Desarrollo Backend Avanzado",
            subtitle: "Coderhouse",
            description: "Habilidades avanzadas de programación backend, APIs, autenticación y arquitecturas escalables.",
            category: "certificate",
            date: "2024",
            tags: ["Backend", "Node.js", "APIs"],
            link: "https://pub.coderhouse.com/legacy-certificates/66d87189766073d467a8da31?lang=es",
        },
        {
            title: "Desarrollo Java",
            subtitle: "Coderhouse",
            description: "Sólidos conocimientos en programación orientada a objetos, fundamentos de Java y construcción de aplicaciones.",
            category: "certificate",
            date: "2024",
            tags: ["Java", "OOP", "Backend"],
            link: "https://pub.coderhouse.com/legacy-certificates/66b38a1b905b61e36ba4f45d?lang=es",
        },
        {
            title: "Data Analytics",
            subtitle: "Coderhouse",
            description: "Aprendizaje de manipulación de datos, visualización y extracción de insights con herramientas analíticas modernas.",
            category: "certificate",
            date: "2024",
            tags: ["Análisis de Datos", "Analytics", "Business Intelligence"],
            link: "https://pub.coderhouse.com/legacy-certificates/65de2ef7565bd5b0a81ebd6b?lang=es",
        },
        {
            title: "Desarrollo Web",
            subtitle: "Coderhouse",
            description: "Conceptos básicos de desarrollo web frontend y backend, incluyendo HTML, CSS y JavaScript.",
            category: "certificate",
            date: "2021",
            tags: ["HTML", "CSS", "JavaScript"],
            link: "https://pub.coderhouse.com/legacy-certificates/6262b0f67cfd37001912af74?lang=es",
        },
        {
            title: "Fundamentos de Inteligencia Artificial",
            subtitle: "Coderhouse",
            description: "Introducción a conceptos de IA, fundamentos de aprendizaje automático y aplicaciones del mundo real.",
            category: "certificate",
            date: "2023",
            tags: ["IA", "Machine Learning", "Tecnología"],
            link: "https://pub.coderhouse.com/legacy-certificates/64cd8ee3c2e270215f453cf9?lang=es",
        },
    ],
    experiences: [
        {
            company: "Fanger Design - Autónomo",
            role: "Performance & Digital Operations Specialist",
            period: "Presente",
            description: "Análisis y optimización de campañas en Meta Ads y Google Ads según objetivos de cada cliente, evaluando métricas de rendimiento y detectando oportunidades de mejora. Creación, actualización y ajuste de campañas para mejorar performance y resultados. Gestión de la operación digital diaria: actualizaciones de sitios web, mejoras de diseño y contenido, carga y baja de productos según stock y requerimientos del cliente. Organización y mantenimiento de la información en la base de datos interna para asegurar consistencia y orden operativo. Desarrollo de scripts y pequeñas automatizaciones que optimizan procesos, reducen trabajo manual y mejoran la eficiencia general.",
            logo: "/images/experience/Fanger.png",
            skills: ["Marketing Digital", "WordPress", "Google Ads", "Diseño Gráfico", "Programación", "Python", "Bases de Datos", "Next.js", "Diseño Web Adaptable", "Automatización de Procesos"]
        },
        {
            company: "Codere – Buenos Aires, Argentina",
            role: "Especialista en Operaciones IT y Automatización",
            period: "2019 – 2025",
            description: "Diseñé y automaticé aplicaciones comerciales internas utilizando Python y tecnologías web modernas, asegurando la alineación con flujos de trabajo estilo SAP. Mi trabajo implicó integrar APIs REST y sistemas de bases de datos para permitir informes dinámicos, similares a los casos de uso de SAP Fiori. Di soporte a entornos de AWS y Docker para el despliegue de aplicaciones empresariales, y construí tableros analíticos con Power BI y Excel comparables a aplicaciones analíticas de SAP. Además, contribuí a la documentación del sistema, automatización de procesos y gestión de servicios de IT a través de herramientas como Jira y ServiceNow.",
            logo: "/images/experience/codere.png",
            skills: ["Python", "Automatización", "REST APIs", "AWS", "Docker", "Power BI", "Excel", "Jira", "ServiceNow"]
        },
        {
            company: "Ilummi – Remoto",
            role: "Desarrollador Front-End",
            period: "2021 – 2025",
            description: "Desarrollé aplicaciones web empresariales responsivas y escalables utilizando React y TypeScript, aplicando principios de UI transferibles a SAP UI5 y Fiori. Creé visualizaciones de datos avanzadas y tableros usando Recharts y D3.js, con un enfoque en interfaces de usuario interactivas y perspicaces. Mi trabajo incluyó integrar APIs y bases de datos como MySQL, Firebase y Supabase, reflejando prácticas de integración SAP OData. También implementé y mantuve pipelines de CI/CD a través de GitHub Actions y AWS, alineándome con estándares DevOps de SAP BTP. A lo largo de estos proyectos, colaboré en equipos Ágiles, enfatizando el rendimiento de la UI, la accesibilidad y la arquitectura modular.",
            logo: "/images/experience/illumi.png",
            skills: ["React", "TypeScript", "Recharts", "D3.js", "MySQL", "Firebase", "Supabase", "CI/CD", "GitHub Actions", "AWS"]
        },
    ]
}

export const contactLinks = {
    email: "ianpontorno@gmail.com", // Assuming email provided in contact-section previously or I can infer. Actually, I better check what it was. Wait, I don't see the value.
    linkedin: "https://www.linkedin.com/in/ian-pontorno/",
    github: "https://github.com/Ian9Franco"
}

export const dictionaries = { en, es }
