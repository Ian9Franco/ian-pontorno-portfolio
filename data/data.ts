export interface Project {
  id: string
  name: string
  description: string
  logo?: string
  technologies?: string[]
  url?: string
  readme?: string // <- agregamos esto
}

export const projects: Project[] = [
   {
    id: "produ-estudio",
    name: "Produ Estudio",
    description: "Corporate website for Produ Estudio, a specialist in high-quality garments for streetwear and basic brands. Showcases design, production, and packaging services, highlighting the company's expertise and value proposition.",
    url: "https://produ-estudio.vercel.app/",
    readme: "https://github.com/Ian9Franco/Produ-Estudio#",
    technologies: ["Next.js", "React", "Tailwind CSS", "Vercel"],
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
    id: "calculatorio",
    name: "Calculatorio",
    description: "A versatile calculator supporting basic operations and a scientific mode for advanced calculations.",
    url: "https://ian9franco.github.io/Calculadora/",
    readme: "https://github.com/Ian9Franco/Calculadora#readme",
    technologies: ["React", "JavaScript"],
  },
  {
    id: "calendarious",
    name: "Calendarious",
    description: "Manage and visualize recurring subscriptions with ease, helping users stay organized and up-to-date.",
    url: "https://calendarious.vercel.app/",
    readme: "https://github.com/Ian9Franco/Calendarious#readme",
    technologies: ["React", "Tailwind CSS", "Node.js", "Next.js", "Git"],
  },
 
];

export type Activity = {
  title: string
  subtitle: string
  description: string
  category: "certificate" | "career"
  date: string
  tags: string[]
  link?: string
}

export const activities: Activity[] =[
  {
    title: "Bachelor’s Degree in Software Engineering",
    subtitle: "Universidad Nacional de La Matanza – Buenos Aires, Argentina",
    description:
      "Ongoing degree focused on software engineering principles, programming, databases, and modern web technologies.",
    category: "career",
    date: "2023 – Present",
    tags: ["Software Engineering", "University", "Programming"],
  },
  {
    title: "Diploma in SAP ABAP Programming",
    subtitle: "Universidad Tecnológica Nacional – Argentina",
    description:
      "Specialized diploma in SAP ABAP development for enterprise software and business systems.",
    category: "career",
    date: "2025 – Ongoing",
    tags: ["SAP", "ABAP", "Enterprise Systems"],
  },
  {
    title: "JavaScript Development",
    subtitle: "Coderhouse",
    description:
      "Completed a certification in JavaScript development, covering fundamentals, ES6+, and modern web practices.",
    category: "certificate",
    date: "2022",
    tags: ["JavaScript", "Web Development"],
    link: "https://pub.coderhouse.com/legacy-certificates/6373a1a3c4d9d4000e070b52?lang=es",
  },
  {
    title: "Advanced Backend Development",
    subtitle: "Coderhouse",
    description:
      "Advanced backend programming skills, APIs, authentication, and scalable architectures.",
    category: "certificate",
    date: "2024",
    tags: ["Backend", "Node.js", "APIs"],
    link: "https://pub.coderhouse.com/legacy-certificates/66d87189766073d467a8da31?lang=es",
  },
  {
    title: "Java Development",
    subtitle: "Coderhouse",
    description:
      "Strong knowledge in object-oriented programming, Java fundamentals, and application building.",
    category: "certificate",
    date: "2024",
    tags: ["Java", "OOP", "Backend"],
    link: "https://pub.coderhouse.com/legacy-certificates/66b38a1b905b61e36ba4f45d?lang=es",
  },
  {
    title: "Data Analytics",
    subtitle: "Coderhouse",
    description:
      "Learned data manipulation, visualization, and insights extraction with modern analytics tools.",
    category: "certificate",
    date: "2024",
    tags: ["Data Analysis", "Analytics", "Business Intelligence"],
    link: "https://pub.coderhouse.com/legacy-certificates/65de2ef7565bd5b0a81ebd6b?lang=es",
  },
  {
    title: "Web Development",
    subtitle: "Coderhouse",
    description:
      "Covered the basics of frontend and backend web development, including HTML, CSS, and JavaScript.",
    category: "certificate",
    date: "2021",
    tags: ["HTML", "CSS", "JavaScript"],
    link: "https://pub.coderhouse.com/legacy-certificates/6262b0f67cfd37001912af74?lang=es",
  },
  {
    title: "Fundamentals of Artificial Intelligence",
    subtitle: "Coderhouse",
    description:
      "Introduction to AI concepts, machine learning fundamentals, and real-world applications.",
    category: "certificate",
    date: "2023",
    tags: ["AI", "Machine Learning", "Technology"],
    link: "https://pub.coderhouse.com/legacy-certificates/64cd8ee3c2e270215f453cf9?lang=es",
  },
]

export type Experience = {
  company: string
  role: string
  period: string
  description: string
  logo?: string
}

export const experiences: Experience[] = [
  {
    company: "Codere – Buenos Aires, Argentina",
    role: "IT Operations & Automation Specialist",
    period: "2019 – Present",
    description: `I designed and automated internal business applications using Python and modern web technologies, ensuring alignment with SAP-style workflows. My work involved integrating REST APIs and database systems to enable dynamic reporting, similar to SAP Fiori use cases. I supported AWS and Docker environments for enterprise application deployment, and built analytical dashboards with Power BI and Excel comparable to SAP Analytical apps. Additionally, I contributed to system documentation, process automation, and IT service management through tools like Jira and ServiceNow.`,
    logo: "/images/experience/codere.png",
  },
  {
    company: "Ilummi – Remote",
    role: "Front-End Developer",
    period: "2021 – 2025",
    description: `I developed responsive and scalable enterprise web applications using React and TypeScript, applying UI principles that are transferable to SAP UI5 and Fiori. I created advanced data visualizations and dashboards using Recharts and D3.js, with a focus on interactive and insightful user interfaces. My work included integrating APIs and databases such as MySQL, Firebase, and Supabase, mirroring SAP OData integration practices. I also implemented and maintained CI/CD pipelines through GitHub Actions and AWS, aligning with SAP BTP DevOps standards. Throughout these projects, I collaborated in Agile teams, emphasizing UI performance, accessibility, and modular architecture.`,
    logo: "/images/experience/illumi.png",
  },
];


export const contactLinks = {
  github: "https://github.com/Ian9Franco",
  linkedin: "https://www.linkedin.com/in/ian-franco-collada-pontorno-42675b225/",
  email: "ian9franco@gmail.com",
}
