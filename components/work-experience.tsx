"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { experiences } from "../data/data"
import { fira } from "../lib/utils" // <- import desde projects.ts

export function WorkExperience() {
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
      latest experience
    </motion.h2>

    <div className="space-y-8">
      {experiences.map((exp, index) => (
        <motion.div
          key={index}
          className="flex gap-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: index * 0.1 }}
          viewport={{ once: true }}
        >
          <div className="flex-shrink-0">
            <div className="w-12 h-12 rounded-lg flex items-center justify-center relative overflow-hidden">
              <Image
                src={exp.logo || "/placeholder.svg"}
                alt={`${exp.company} logo`}
                fill
                className="object-contain"
              />
            </div>
          </div>

          <div className="flex-1">
            <div className="flex items-start justify-between mb-1">
              <h3 className="font-medium text-white text-sm">{exp.role}</h3>
              <span className={`${fira.className} text-xs text-gray-400 ml-4`}>
  {exp.period}
</span>
            </div>
            <p className="text-xs text-gray-400 mb-3">{exp.company}</p>
            <p className="text-sm text-gray-300 leading-relaxed">{exp.description}</p>
          </div>
        </motion.div>
      ))}
    </div>
  </div>
</section>

  )
}
