"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { useLanguage } from "./language-context"
import { dictionaries } from "@/data/dictionaries"
import { Tag } from "./tag"
import { fira } from "../lib/utils"

export function WorkExperience() {
  const { language } = useLanguage()
  const t = dictionaries[language]
  const experiences = t.experiences

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
          {t.workExperience.title}
        </motion.h2>

        <div className="space-y-12">
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
                <div className="w-12 h-12 rounded-lg flex items-center justify-center relative overflow-hidden bg-white/5">
                  <Image
                    src={exp.logo || "/placeholder.svg"}
                    alt={`${exp.company} logo`}
                    fill
                    className="object-contain"
                  />
                </div>
              </div>

              <div className="flex-1">
                <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between mb-2">
                  <h3 className="font-medium text-white text-sm text-shadow-sm">{exp.role}</h3>
                  <span className={`${fira.className} text-xs text-gray-400 sm:ml-4`}>
                    {exp.period}
                  </span>
                </div>
                <p className="text-xs text-gray-400 mb-3">{exp.company}</p>
                <p className="text-sm text-gray-300 leading-relaxed mb-4 text-shadow-sm">{exp.description}</p>

                {/* Skills tags */}
                {exp.skills && (
                  <div className="flex flex-wrap gap-2">
                    {exp.skills.map((skill) => (
                      <Tag key={skill}>{skill}</Tag>
                    ))}
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
