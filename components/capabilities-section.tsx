"use client"

import { useLanguage } from "./language-context"

const content = {
  en: {
    title: "What I work on",
    description:
      "Capabilities developed across products, operations, and marketing work.",
    items: [
      {
        title: "Web & desktop products",
        body: "Interfaces, APIs, application workflows, and desktop integration with TypeScript, React, Next.js, Node.js, and Electron.",
      },
      {
        title: "Data & automation",
        body: "Process automation, integrations, ETL, and reporting with Python, SQL, REST APIs, and Power BI.",
      },
      {
        title: "Applied AI",
        body: "Local indexing, embeddings, semantic search, and explanation features with local workflows and model APIs.",
      },
      {
        title: "Growth engineering",
        body: "Paid media, tracking, conversion funnels, analytics, and marketing automation with Meta Ads and Google Ads.",
      },
    ],
  },
  es: {
    title: "En qué trabajo",
    description:
      "Capacidades desarrolladas entre productos, operaciones y trabajo de marketing.",
    items: [
      {
        title: "Productos web y desktop",
        body: "Interfaces, APIs, flujos de aplicación e integración con escritorio mediante TypeScript, React, Next.js, Node.js y Electron.",
      },
      {
        title: "Datos y automatización",
        body: "Automatización de procesos, integraciones, ETL y reportes con Python, SQL, REST APIs y Power BI.",
      },
      {
        title: "IA aplicada",
        body: "Indexación local, embeddings, búsqueda semántica y funciones de explicación mediante flujos locales y APIs de modelos.",
      },
      {
        title: "Growth engineering",
        body: "Paid media, tracking, embudos de conversión, analítica y automatización de marketing con Meta Ads y Google Ads.",
      },
    ],
  },
}

export function CapabilitiesSection() {
  const { language } = useLanguage()
  const t = content[language]

  return (
    <section id="capabilities" className="py-12 px-6">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-xl font-semibold text-white">{t.title}</h2>
        <p className="mt-2 text-sm text-neutral-400">{t.description}</p>
        <div className="grid sm:grid-cols-2 gap-3 mt-8">
          {t.items.map((item) => (
            <article key={item.title} className="p-5 rounded-xl border border-white/[0.07] bg-white/[0.02]">
              <h3 className="text-sm font-medium text-white">{item.title}</h3>
              <p className="text-sm text-neutral-400 leading-relaxed mt-2">{item.body}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
