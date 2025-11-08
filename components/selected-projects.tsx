"use client"

import { motion } from "framer-motion"
import { projects } from "@/data/data"
import Image from "next/image"

export function SelectedProjects() {
  // Colores de fondo para cada proyecto
  const projectColors: Record<string, string> = {
    tormentica: "#3AB0FF",
    conversorio: "#FFC300",
    calculatorio: "#28A745",
    calendarious: "#6C63FF",
    "produ-estudio": "#FFFFFF", // Fondo blanco
    netherious: "#FF0000",    // Fondo rojo
  }

  // Logos coherentes con cada proyecto (pueden ser SVG o PNG)
  const projectIcons: Record<string, string> = {
    tormentica: "/images/projects/weather-forecast.png",
    conversorio: "/images/projects/dinero.png",
    calculatorio: "/images/projects/calcular.png",
    calendarious: "/images/projects/calendario.png",
    "produ-estudio": "/images/projects/produ-estudio.png",
    netherious: "/images/projects/netherious.png",
  }

  // Tamaño del logo (Netherious más grande)
  const logoSizes: Record<string, number> = {
    netherious:50,
    "produ-estudio": 24,
    tormentica: 24,
    conversorio: 24,
    calculatorio: 24,
    calendarious: 24,
  }

  return (
    <section className="py-10 px-6">
      <div className="max-w-2xl mx-auto">
        {/* Título alineado a la izquierda */}
        <motion.h2
          className="text-sm font-medium mb-12 text-white text-left"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          selected projects
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
                    src={projectIcons[project.id]}
                    alt={`${project.name} icon`}
                    width={logoSizes[project.id]}
                    height={logoSizes[project.id]}
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
