"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import { useLanguage } from "./language-context"
import { dictionaries } from "@/data/dictionaries"
import { Tag } from "./tag"
import { fira } from "../lib/utils"

export function SelectedProjects() {
  const { language } = useLanguage()
  const t = dictionaries[language]
  const projects = t.projects

  const projectColors: Record<string, string> = {
    mim: "#4F46E5",
    "smart-scan": "#064E3B",
    "web-sling-optimizer": "#083344",
    "q-sale": "#831843",
    tormentica: "#3AB0FF",
    conversorio: "#FFC300",
    calculatorio: "#28A745",
    plotter: "#FFFFFF",
    "produ-estudio": "#FFFFFF",
    theboyz: "#1b4332",
    elseframe: "#1b4332",
    netherious: "#FF0000",
  }

  const projectIcons: Record<string, string> = {
    mim: "/images/projects/mim.png",
    "smart-scan": "/images/projects/smartscan.png",
    "web-sling-optimizer": "/images/projects/websling.png",
    "q-sale": "/images/projects/qsale.png",
    tormentica: "/images/projects/weather-forecast.png",
    conversorio: "/images/projects/dinero.png",
    calculatorio: "/images/projects/calcular.png",
    plotter: "/images/projects/plotter.png",
    "produ-estudio": "/images/projects/produ-estudio.png",
    theboyz: "/images/projects/elseframe.webp",
    elseframe: "/images/projects/elseframe.webp",
    netherious: "/images/projects/netherious.png",
  }

  const logoSizes: Record<string, number> = {
    mim: 32,
    "smart-scan": 32,
    "web-sling-optimizer": 32,
    "q-sale": 32,
    netherious: 50,
    "produ-estudio": 32,
    theboyz: 32,
    elseframe: 32,
    tormentica: 24,
    conversorio: 24,
    calculatorio: 24,
    plotter: 32,
  }

  return (
    <section id="selected-projects" className="py-10 px-6">
      <div className="max-w-2xl mx-auto">
        {/* Title aligned left */}
        <motion.h2
          id="selected-projects-heading"
          className="text-sm font-medium mb-12 text-white text-left"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          {t.selectedProjects.title}
        </motion.h2>

        <div className="space-y-10">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              className="space-y-3.5 group rounded-xl p-4 -mx-4 transition-all duration-300 hover:bg-white/[0.02] border border-transparent hover:border-white/[0.06]"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.08 }}
              viewport={{ once: true }}
            >
              {/* Header: Logo, Title, Subtitle, Badge */}
              <div className="flex items-start gap-3.5">
                <div
                  className="w-9 h-9 rounded-lg flex-shrink-0 flex items-center justify-center overflow-hidden mt-0.5 shadow-md"
                  style={{ backgroundColor: projectColors[project.id] || "#888" }}
                >
                  <Image
                    src={projectIcons[project.id] || "/placeholder-logo.png"}
                    alt={`${project.name} icon`}
                    width={logoSizes[project.id] || 32}
                    height={logoSizes[project.id] || 32}
                    className="w-full h-full object-cover rounded-lg"
                  />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex flex-wrap items-center gap-2">
                    {project.caseStudyUrl ? (
                      <Link
                        href={project.caseStudyUrl}
                        className="font-medium text-white text-base hover:text-indigo-400 transition-colors text-shadow-sm inline-flex items-center gap-1.5"
                      >
                        <span>{project.name}</span>
                      </Link>
                    ) : (
                      <a
                        href={project.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="font-medium text-white text-base hover:text-gray-300 transition-colors text-shadow-sm"
                      >
                        {project.name}
                      </a>
                    )}

                    {project.badge && (
                      <span className="text-[10px] font-mono tracking-tight uppercase px-2 py-0.5 rounded-full bg-indigo-500/15 text-indigo-300 border border-indigo-500/30">
                        {project.badge}
                      </span>
                    )}
                  </div>

                  {project.subtitle && (
                    <p className="${fira.className} text-xs text-indigo-300/80 font-medium tracking-tight mt-0.5">
                      {project.subtitle}
                    </p>
                  )}
                </div>
              </div>

              {/* Discipline Tags */}
              {project.disciplineTags && project.disciplineTags.length > 0 && (
                <div className="flex flex-wrap items-center gap-1.5 pt-0.5">
                  {project.disciplineTags.map((discipline) => (
                    <span
                      key={discipline}
                      className="${fira.className} text-[10px] font-medium tracking-tight px-2 py-0.5 rounded-md bg-white/[0.04] text-neutral-300 border border-white/[0.08]"
                    >
                      {discipline}
                    </span>
                  ))}
                </div>
              )}

              {/* Description */}
              <p className="text-sm text-gray-300 leading-relaxed text-shadow-sm">
                {project.description}
              </p>

              {/* Technologies */}
              {project.technologies && (
                <div className="flex flex-wrap gap-1.5 pt-1">
                  {project.technologies.map((tech) => (
                    <Tag key={tech}>
                      {tech}
                    </Tag>
                  ))}
                </div>
              )}

              {/* Action Buttons */}
              <div className="flex flex-wrap items-center gap-2.5 pt-2">
                {project.caseStudyUrl && (
                  <Link
                    href={project.caseStudyUrl}
                    className="inline-flex items-center gap-1.5 text-xs font-medium px-3 py-1.5 rounded-lg bg-indigo-600/20 hover:bg-indigo-600/30 text-indigo-300 border border-indigo-500/35 transition-all shadow-sm"
                  >
                    <span>{language === "es" ? "Arquitectura & Deep Dive →" : "Architecture & Deep Dive →"}</span>
                  </Link>
                )}

                {project.url && (
                  <a
                    href={project.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs font-medium px-3 py-1.5 rounded-lg bg-white/[0.05] hover:bg-white/[0.1] text-gray-200 border border-white/[0.1] transition-all"
                  >
                    <span>
                      {project.id === "mim"
                        ? (language === "es" ? "MIM Hub (Live PWA) ↗" : "MIM Hub (Live PWA) ↗")
                        : (language === "es" ? "Visitar Web ↗" : "Live Demo ↗")}
                    </span>
                  </a>
                )}

                {project.readme && (
                  <a
                    href={project.readme}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs font-medium px-3 py-1.5 rounded-lg bg-white/[0.05] hover:bg-white/[0.1] text-gray-300 hover:text-white border border-white/[0.1] transition-all"
                  >
                    <Image
                      src="/icons/readme.png"
                      alt="GitHub icon"
                      width={14}
                      height={14}
                      className="opacity-80"
                    />
                    <span>GitHub</span>
                  </a>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
