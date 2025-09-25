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
  }

  // Logos coherentes con cada proyecto (pueden ser SVG o PNG)
const projectIcons: Record<string, string> = {
  tormentica: "/icons/weather-forecast.png",
  conversorio: "/icons/dinero.png",
  calculatorio: "/icons/calcular.png",
  calendarious: "/icons/calendario.png",
}


  return (
    <section className="py-10 px-6">
      <div className="max-w-2xl mx-auto">
        {/* Título alineado a la izquierda */}
        <motion.h2
          className="text-sm font-medium mb-12 text-white text-left" // <- Cambiado de text-center a text-left
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
                    width={24}
                    height={24}
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
