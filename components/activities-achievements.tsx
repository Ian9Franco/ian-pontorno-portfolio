"use client"

import { AnimatePresence, motion } from "framer-motion"
import { useEffect, useState } from "react"
import Image from "next/image"
import { ExternalLink, X } from "lucide-react"
import { useLanguage } from "./language-context"
import { dictionaries, Activity } from "@/data/dictionaries"
import { fira } from "../lib/utils"

const categoryColors: Record<Activity["category"], string> = {
  certificate: "bg-violet-500/15 text-violet-300 border-violet-500/25",
  career: "bg-yellow-500/15 text-yellow-300 border-yellow-500/25",
}

export function ActivitiesAchievements() {
  const { language } = useLanguage()
  const t = dictionaries[language]
  const [selectedImage, setSelectedImage] = useState<string | null>(null)

  useEffect(() => {
    if (!selectedImage) return
    const close = (event: KeyboardEvent) => {
      if (event.key === "Escape") setSelectedImage(null)
    }
    window.addEventListener("keydown", close)
    return () => window.removeEventListener("keydown", close)
  }, [selectedImage])

  return (
    <section id="activities" className="py-14 px-6">
      <div className="max-w-4xl mx-auto">
        <div className="mb-8">
          <h2 id="activities-heading" className="text-xl font-semibold text-white">
            {t.activities.title}
          </h2>
          <p className="mt-2 text-sm text-neutral-400">
            {language === "es"
              ? "Formación y certificaciones que complementan mi experiencia práctica."
              : "Education and certifications that complement my practical experience."}
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
          {t.activitiesList.map((activity) => (
            <article
              key={activity.title}
              className="rounded-xl p-4 bg-white/[0.02] border border-white/[0.07] flex flex-col"
            >
              <div className="flex items-center justify-between gap-3">
                <span className={`text-[10px] uppercase px-2 py-0.5 rounded-full border ${categoryColors[activity.category]}`}>
                  {activity.category === "career"
                    ? language === "es" ? "estudios" : "studies"
                    : language === "es" ? "certificado" : "certificate"}
                </span>
                <span className={`${fira.className} text-[11px] text-neutral-500`}>
                  {activity.date}
                </span>
              </div>
              <h3 className="text-sm font-medium text-white mt-4">{activity.title}</h3>
              <p className="text-xs text-neutral-400 mt-1">{activity.subtitle}</p>
              <p className="text-xs text-neutral-500 leading-relaxed mt-3 flex-1">
                {activity.description}
              </p>
              {(activity.link || activity.certificateImage) && (
                <div className="flex gap-3 mt-4 text-xs">
                  {activity.link && (
                    <a
                      href={activity.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 text-violet-300 hover:text-violet-200"
                    >
                      {language === "es" ? "Ver credencial" : "View credential"}
                      <ExternalLink className="w-3 h-3" aria-hidden="true" />
                    </a>
                  )}
                  {activity.certificateImage && (
                    <button
                      type="button"
                      onClick={() => setSelectedImage(activity.certificateImage || null)}
                      className="text-neutral-400 hover:text-white"
                    >
                      {language === "es" ? "Ver certificado" : "View certificate"}
                    </button>
                  )}
                </div>
              )}
            </article>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {selectedImage && (
          <motion.div
            className="fixed inset-0 z-[100] bg-black/85 p-6 flex items-center justify-center"
            role="dialog"
            aria-modal="true"
            aria-label={language === "es" ? "Vista del certificado" : "Certificate preview"}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedImage(null)}
          >
            <button
              type="button"
              onClick={() => setSelectedImage(null)}
              className="absolute top-5 right-5 p-2 rounded-full bg-white/10 text-white hover:bg-white/20"
              aria-label={language === "es" ? "Cerrar" : "Close"}
            >
              <X className="w-5 h-5" />
            </button>
            <div className="relative w-full max-w-5xl h-[80vh]" onClick={(event) => event.stopPropagation()}>
              <Image src={selectedImage} alt="" fill className="object-contain" sizes="100vw" />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}
