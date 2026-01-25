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

export const metadata: Metadata = {
  title: "Ian Pontorno | Growth Engineer & Marketing Technologist",
  description:
    "Growth Engineer and Software Developer building data-driven marketing systems. I combine paid media, automation, analytics, and custom web tools to scale acquisition, optimize performance, and turn marketing into engineering.",
keywords: [
  // Core positioning
  "Growth Engineer",
  "Marketing Engineer",
  "Marketing Technologist",
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

  openGraph: {
    title: "Ian Pontorno | Growth Engineer & Marketing Technologist",
    description:
      "I build systems that grow businesses. Paid media, automation, analytics, and custom software to scale marketing with engineering.",
    url: "https://ian-pontorno-portfolio.vercel.app/",
    siteName: "Ian Pontorno Portfolio",
    images: [
      {
        url: "/images/profile/hoverRect.png",
        width: 1200,
        height: 630,
        alt: "Growth Engineer & Marketing Technologist Portfolio",
      },
    ],
    locale: "en_US",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Growth Engineer & Marketing Technologist",
    description:
      "Software + Marketing + Automation. I turn growth into systems and code.",
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
      <body className={`font-sans ${inter.variable} antialiased`}>
        <LanguageProvider>
          <LanguageToggle />
          <Suspense fallback={null}>{children}</Suspense>
          <Analytics />
        </LanguageProvider>
      </body>
    </html>
  )
}
