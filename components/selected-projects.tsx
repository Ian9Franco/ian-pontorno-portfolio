"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { useLanguage } from "./language-context"
import { dictionaries } from "@/data/dictionaries"

export function SelectedProjects() {
  const { language } = useLanguage()
  const t = dictionaries[language]
  const projects = t.projects

  // Note: These colors/icons/sizes maps are visual data, not text content, so they can remain hardcoded or moved to a config.
  // We keep them here for now as they match IDs.
  const projectColors: Record<string, string> = {
    tormentica: "#3AB0FF",
    conversorio: "#FFC300",
    calculatorio: "#28A745",
    calendarious: "#6C63FF",
    "produ-estudio": "#FFFFFF",
    netherious: "#FF0000",
  }

  const projectIcons: Record<string, string> = {
    tormentica: "/images/projects/weather-forecast.png",
    conversorio: "/images/projects/dinero.png",
    calculatorio: "/images/projects/calcular.png",
    calendarious: "/images/projects/calendario.png",
    "produ-estudio": "/images/projects/produ-estudio.png",
    netherious: "/images/projects/netherious.png",
  }

  const logoSizes: Record<string, number> = {
    netherious: 50,
    "produ-estudio": 24,
    tormentica: 24,
    conversorio: 24,
    calculatorio: 24,
    calendarious: 24,
  }

  return (
    <section className="py-10 px-6">
      <div className="max-w-2xl mx-auto">
        {/* Title aligned left */}
        <motion.h2
          className="text-sm font-medium mb-12 text-white text-left"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          {t.selectedProjects.title}
        </motion.h2>

        <div className="space-y-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              className="space-y-3"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center gap-3">
                <div
                  className="w-8 h-8 rounded flex-shrink-0 flex items-center justify-center"
                  style={{ backgroundColor: projectColors[project.id] || "#888" }}
                >
                  <Image
                    src={projectIcons[project.id] || "/placeholder-logo.png"}
                    alt={`${project.name} icon`}
                    width={logoSizes[project.id] || 24}
                    height={logoSizes[project.id] || 24}
                  />
                </div>
                <a
                  href={project.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-medium text-white text-base hover:text-gray-300 transition-colors"
                >
                  {project.name}
                </a>
              </div>

              <p className="text-sm text-gray-300 leading-relaxed">{project.description}</p>

              {project.technologies && (
                <div className="flex items-center justify-between">
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <span key={tech} className="text-xs text-gray-400">
                        {tech}
                      </span>
                    ))}
                  </div>

                  {project.readme && (
                    <a
                      href={project.readme}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="ml-2 flex items-center justify-center"
                    >
                      <Image
                        src="/icons/readme.png"
                        alt="Readme icon"
                        width={20}
                        height={20}
                      />
                    </a>
                  )}
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
