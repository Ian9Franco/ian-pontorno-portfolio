"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import { useLanguage } from "./language-context"
import { dictionaries, Project } from "@/data/dictionaries"
import { Tag } from "./tag"
import { fira } from "../lib/utils"

const featuredProjectIds = ["mim", "elseframe", "smart-scan"]

const projectColors: Record<string, string> = {
  mim: "#4F46E5",
  "smart-scan": "#064E3B",
  "web-sling-optimizer": "#083344",
  "q-sale": "#831843",
  tormentica: "#3AB0FF",
  conversorio: "#FFC300",
  plotter: "#FFFFFF",
  "produ-estudio": "#FFFFFF",
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
  plotter: "/images/projects/plotter.png",
  "produ-estudio": "/images/projects/produ-estudio.png",
  elseframe: "/images/projects/elseframe.webp",
  netherious: "/images/projects/netherious.png",
}

function ProjectIcon({ project }: { project: Project }) {
  return (
    <div
      className="w-11 h-11 rounded-xl flex-shrink-0 flex items-center justify-center overflow-hidden shadow-md"
      style={{ backgroundColor: projectColors[project.id] || "#888" }}
    >
      <Image
        src={projectIcons[project.id] || "/placeholder-logo.png"}
        alt={`${project.name} icon`}
        width={44}
        height={44}
        className="w-full h-full object-cover rounded-xl"
      />
    </div>
  )
}

export function SelectedProjects() {
  const { language } = useLanguage()
  const t = dictionaries[language]
  const featuredProjects = featuredProjectIds
    .map((id) => t.projects.find((project) => project.id === id))
    .filter((project): project is Project => Boolean(project))
  const otherProjects = t.projects.filter(
    (project) => !featuredProjectIds.includes(project.id),
  )

  return (
    <section id="selected-projects" className="py-12 px-6">
      <div className="max-w-4xl mx-auto">
        <motion.div
          className="mb-10"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45 }}
          viewport={{ once: true }}
        >
          <h2 id="selected-projects-heading" className="text-xl font-semibold text-white">
            {t.selectedProjects.title}
          </h2>
          <p className="mt-2 text-sm text-neutral-400 max-w-2xl">
            {t.selectedProjects.description}
          </p>
        </motion.div>

        <div className="space-y-6">
          {featuredProjects.map((project, index) => (
            <motion.article
              key={project.id}
              className="rounded-2xl p-5 sm:p-6 bg-white/[0.02] border border-white/[0.08] hover:border-white/[0.16] transition-colors"
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45, delay: index * 0.06 }}
              viewport={{ once: true }}
            >
              <div className="flex items-start gap-4">
                <ProjectIcon project={project} />
                <div className="flex-1 min-w-0">
                  <div className="flex flex-wrap items-center gap-2">
                    <h3 className="font-semibold text-white text-lg">{project.name}</h3>
                    {project.badge && (
                      <span className="text-[10px] font-mono uppercase px-2 py-0.5 rounded-full bg-indigo-500/15 text-indigo-300 border border-indigo-500/30">
                        {project.badge}
                      </span>
                    )}
                  </div>
                  {project.subtitle && (
                    <p className={`${fira.className} text-xs text-indigo-300/80 mt-1`}>
                      {project.subtitle}
                    </p>
                  )}
                </div>
              </div>

              <p className="mt-4 text-[15px] text-gray-300 leading-relaxed">
                {project.description}
              </p>

              {project.disciplineTags && (
                <div className="flex flex-wrap gap-1.5 mt-4">
                  {project.disciplineTags.map((discipline) => (
                    <span
                      key={discipline}
                      className={`${fira.className} text-[10px] px-2 py-0.5 rounded-md bg-white/[0.04] text-neutral-300 border border-white/[0.08]`}
                    >
                      {discipline}
                    </span>
                  ))}
                </div>
              )}

              {project.technologies && (
                <div className="flex flex-wrap gap-1.5 mt-3">
                  {project.technologies.slice(0, 6).map((tech) => (
                    <Tag key={tech}>{tech}</Tag>
                  ))}
                </div>
              )}

              <div className="flex flex-wrap items-center gap-2.5 mt-5">
                {project.caseStudyUrl && (
                  <Link
                    href={project.caseStudyUrl}
                    className="inline-flex text-xs font-medium px-3 py-2 rounded-lg bg-indigo-600/20 hover:bg-indigo-600/30 text-indigo-300 border border-indigo-500/35 transition-colors"
                  >
                    {language === "es" ? "Ver caso de estudio →" : "View case study →"}
                  </Link>
                )}
                {project.url && (
                  <a
                    href={project.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex text-xs font-medium px-3 py-2 rounded-lg bg-white/[0.05] hover:bg-white/[0.1] text-gray-200 border border-white/[0.1] transition-colors"
                  >
                    {language === "es" ? "Abrir proyecto ↗" : "Open project ↗"}
                  </a>
                )}
                {project.readme && (
                  <a
                    href={project.readme}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex text-xs font-medium px-3 py-2 rounded-lg text-gray-400 hover:text-white transition-colors"
                  >
                    GitHub ↗
                  </a>
                )}
              </div>
            </motion.article>
          ))}
        </div>

        <div className="mt-14">
          <h3 className="text-sm font-medium text-white mb-5">
            {t.selectedProjects.moreTitle}
          </h3>
          <div className="grid sm:grid-cols-2 gap-3">
            {otherProjects.map((project) => (
              <article
                key={project.id}
                className="rounded-xl p-4 bg-white/[0.015] border border-white/[0.06] hover:border-white/[0.14] transition-colors"
              >
                <div className="flex items-center gap-3">
                  <ProjectIcon project={project} />
                  <div className="min-w-0">
                    <h4 className="text-sm font-medium text-white truncate">{project.name}</h4>
                    <p className="text-xs text-neutral-400 mt-1 line-clamp-2 leading-relaxed">
                      {project.description}
                    </p>
                  </div>
                </div>
                <div className="flex gap-3 mt-3 text-xs">
                  {project.url && (
                    <a href={project.url} target="_blank" rel="noopener noreferrer" className="text-neutral-400 hover:text-white">
                      {language === "es" ? "Proyecto ↗" : "Project ↗"}
                    </a>
                  )}
                  {project.readme && (
                    <a href={project.readme} target="_blank" rel="noopener noreferrer" className="text-neutral-500 hover:text-white">
                      GitHub ↗
                    </a>
                  )}
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
