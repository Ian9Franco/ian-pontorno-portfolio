import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import { Suspense } from "react"
import "./globals.css"

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  variable: "--font-inter",
})

export const metadata: Metadata = {
  title: "Ian Franco Collada Pontorno - Software Developer Portfolio",
  description:
    "Software Developer specialized in Frontend, Backend, Fullstack, SAP, and ABAP. Passionate about building scalable and modern web applications.",
  keywords: [
    "Software Developer",
    "Frontend Developer",
    "Backend Developer",
    "Fullstack Developer",
    "SAP Consultant",
    "ABAP",
    "Portfolio",
    "React",
    "Next.js",
    "Web Development",
    "Ian Franco Collada Pontorno",
  ],
  authors: [{ name: "Ian Franco Collada Pontorno" }],
  generator: "Next.js",
  openGraph: {
    title: "Ian Franco Collada Pontorno - Software Developer Portfolio",
    description:
      "Software Developer specialized in Frontend, Backend, Fullstack, SAP, and ABAP. Passionate about building scalable and modern web applications.",
    url: "https://ian-pontorno-portfolio.vercel.app/",
    siteName: "Ian Franco Collada Pontorno Portfolio",
    images: [
      {
        url: "/images/profile/hoverRect.png",
        width: 1200,
        height: 630,
        alt: "Ian Franco Collada Pontorno Portfolio Preview",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Ian Franco Collada Pontorno - Software Developer Portfolio",
    description:
      "Software Developer specialized in Frontend, Backend, Fullstack, SAP, and ABAP. Passionate about building scalable and modern web applications.",
    creator: "@ian_franco_collada", // opcional, si no tenés cuenta Twitter, puede omitirse
    site: "https://www.linkedin.com/in/ian-franco-collada-pontorno-42675b225/",
    images: ["/images/profile/hoverRect.png"],
  },
  metadataBase: new URL("https://ian-pontorno-portfolio.vercel.app/"),
}


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="dark">
      <body className={`font-sans ${inter.variable} antialiased`}>
        <Suspense fallback={null}>{children}</Suspense>
        <Analytics />
      </body>
    </html>
  )
}
