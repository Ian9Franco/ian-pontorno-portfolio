import type { Metadata } from "next"
import { Inter, Fira_Code } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import { Suspense } from "react"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import { LanguageProvider } from "@/components/language-context"
import { LanguageToggle } from "@/components/language-toggle"

// Inter → global (todo el sitio)
const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  variable: "--font-inter",
})

// Fira Code → solo para fechas/lugares
const fira = Fira_Code({
  subsets: ["latin"],
  weight: ["400"], // Regular 400 solamente
  variable: "--font-fira",
})

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Ian Franco Collada Pontorno",
  alternateName: "Ian Pontorno",
  url: "https://ian-pontorno-portfolio.vercel.app",
  jobTitle: "Full-Stack Developer & Growth Engineer",
  description:
    "Full-stack developer and growth engineer building web and desktop applications, automation tools, and data workflows.",
  knowsAbout: [
    "Growth Engineering",
    "Marketing Automation",
    "Meta Ads",
    "Google Ads",
    "Next.js",
    "TypeScript",
    "Python",
    "Data Analytics",
    "Software Development",
  ],
  sameAs: [
    "https://www.linkedin.com/in/ian-franco-collada-pontorno/",
    "https://github.com/Ian9Franco",
  ],
  worksFor: {
    "@type": "Organization",
    name: "Fanger Design",
    url: "https://www.linkedin.com/company/fanger-design/about/",
  },
  alumniOf: [
    {
      "@type": "EducationalOrganization",
      name: "Universidad Nacional de La Matanza",
    },
    {
      "@type": "EducationalOrganization",
      name: "Universidad Tecnológica Nacional",
    },
  ],
  address: {
    "@type": "PostalAddress",
    addressLocality: "Buenos Aires",
    addressCountry: "AR",
  },
  image: "https://ian-pontorno-portfolio.vercel.app/images/profile/hoverRect.png",
  datePublished: "2025-01-01",
  dateModified: new Date().toISOString().split("T")[0],
}

export const metadata: Metadata = {
  title: "Ian Pontorno | Full-Stack Developer & Growth Engineer",
  description:
    "Full-stack developer and growth engineer building web and desktop products, automation tools, and data workflows. Based in Buenos Aires, Argentina.",
  keywords: [
    // Core positioning
    "Growth Engineer",
    "Marketing Engineer",
    "Performance Marketing",
    "Marketing Automation",
    "Growth Systems",

    // Paid media
    "Paid Media",
    "Meta Ads",
    "Google Ads",
    "Conversion Funnels",
    "Analytics",
    "ROAS Optimization",

    // Development
    "Software Developer",
    "Full Stack Developer",
    "React",
    "Next.js",
    "TypeScript",
    "Python",
    "APIs",
    "Automation",
    "Dashboards",

    // Data
    "Data Analysis",
    "Data Engineering",
    "ETL",
    "Tracking",
    "Process Optimization",

    // Tools / platforms (low priority)
    "WordPress",
    "CMS Development",
    "SAP",
    "ERP Systems",

    // Personal
    "Ian Franco Collada Pontorno",
    "Portfolio",
  ],

  authors: [{ name: "Ian Franco Collada Pontorno" }],
  generator: "Next.js",

  alternates: {
    canonical: "https://ian-pontorno-portfolio.vercel.app",
  },

  openGraph: {
    title: "Ian Pontorno | Full-Stack Developer & Growth Engineer",
    description:
      "Web and desktop products, automation tools, data workflows, and growth systems built by Ian Pontorno.",
    url: "https://ian-pontorno-portfolio.vercel.app/",
    siteName: "Ian Pontorno Portfolio",
    images: [
      {
        url: "/images/profile/hoverRect.png",
        width: 1200,
        height: 630,
        alt: "Ian Pontorno — Full-Stack Developer & Growth Engineer",
      },
    ],
    locale: "en_US",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Ian Pontorno | Full-Stack Developer & Growth Engineer",
    description:
      "Web and desktop products, automation tools, data workflows, and growth systems.",
    images: ["/images/profile/hoverRect.png"],
  },

  metadataBase: new URL("https://ian-pontorno-portfolio.vercel.app/"),
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="dark">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className={`font-sans ${inter.variable} antialiased`}>
        <a
          href="#hero"
          className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-[9999] focus:px-4 focus:py-2 focus:bg-white focus:text-black focus:rounded focus:font-medium"
        >
          Skip to content
        </a>
        <LanguageProvider>
          <LanguageToggle />
          <Suspense fallback={null}>{children}</Suspense>
          <Analytics />
        </LanguageProvider>
      </body>
    </html>
  )
}
