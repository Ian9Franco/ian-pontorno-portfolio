import type { MetadataRoute } from "next"

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = [
    { path: "", priority: 1 },
    { path: "/projects/mim", priority: 0.8 },
  ]

  return routes.map(({ path, priority }) => (
    {
      url: `https://ian-pontorno-portfolio.vercel.app${path}`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority,
    }
  ))
}
