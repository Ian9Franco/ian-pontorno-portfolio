import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "MIM Case Study | Ian Pontorno",
  description:
    "How MIM evolved into a desktop and web platform for modpack management, crash diagnostics, safe file recovery, and cloud collaboration.",
  alternates: {
    canonical: "/projects/mim",
  },
  openGraph: {
    title: "MIM — Engineering Case Study",
    description:
      "Product evolution, architecture decisions, validation, and lessons from Ian Pontorno's current flagship project.",
    url: "/projects/mim",
    type: "article",
  },
}

export default function MimCaseStudyLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return children
}
