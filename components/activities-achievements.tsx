"use client"

import { motion } from "framer-motion"
import { useEffect, useState } from "react"
import { activities } from "../data/data"

export type Activity = {
  title: string
  subtitle: string
  description: string
  category: "certificate" | "career"
  date: string
  tags: string[]
  link?: string
}

export function ActivitiesAchievements() {
  const [offset, setOffset] = useState(0)
  const [isHovered, setIsHovered] = useState(false)
  const [direction, setDirection] = useState(1)
  const [selectedImage, setSelectedImage] = useState<string | null>(null)
  const [rotation, setRotation] = useState({ rotateX: 0, rotateY: 0 })

  const cardWidth = 320
  const gap = 24
  const totalWidth = (cardWidth + gap) * activities.length

  useEffect(() => {
    let animationFrame: number

    const animate = () => {
        if (!isHovered) {
          setOffset((prev) => {
            // más rápido en la ida, más lento en la vuelta
            const speed = direction === 1 ? 30 : 0.8  
            let next = prev + speed * direction
            if (next >= totalWidth) setDirection(-1)
            if (next <= 0) setDirection(1)
            return next
          })
        }

        animationFrame = requestAnimationFrame(animate)
      }


    animationFrame = requestAnimationFrame(animate)
    return () => cancelAnimationFrame(animationFrame)
  }, [isHovered, totalWidth, direction])

  const categoryColors: Record<Activity["category"], string> = {
    certificate: "bg-violet-500/20 text-violet-300 border-violet-500/30",
    career: "bg-yellow-500/20 text-yellow-300 border-yellow-500/30",
  }

  return (
    <section className="py-20 overflow-hidden relative">
      <motion.h2
        className="text-sm font-medium mb-12 text-white text-center"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        activities & achievements
      </motion.h2>

      {/* Gradientes laterales */}
      <div className="absolute left-0 top-0 w-32 h-full bg-gradient-to-r from-background via-background/80 to-transparent z-10 pointer-events-none" />
      <div className="absolute right-0 top-0 w-32 h-full bg-gradient-to-l from-background via-background/80 to-transparent z-10 pointer-events-none" />

      <div className="flex gap-6 px-6 z-20">
        <motion.div className="flex gap-6" style={{ x: -offset }}>
          {[...activities, ...activities, ...activities].map((activity, index) => (
            <motion.div
                  key={`${activity.title}-${index}`}
                  className="flex-shrink-0 w-[85vw] sm:w-80 bg-card rounded-lg p-4 sm:p-6 border border-border cursor-pointer text-[10px] sm:text-base"
                  onMouseEnter={() => setIsHovered(true)}
                  onMouseLeave={() => setIsHovered(false)}
                  whileHover={{ scale: 1.05, boxShadow: "0 20px 40px rgba(0,0,0,0.3)" }}
                  transition={{ duration: 0.2 }}
                >         {/* Categoría y fecha */}
                          <div className="flex items-center justify-between mb-2">
                      <span
                        className={`text-xs font-medium px-2 py-1 rounded-full border ${categoryColors[activity.category]}`}
                      >
                        {activity.category}
                      </span>
                      <span className="text-xs font-light text-gray-400">{activity.date}</span>
                    </div>

           
                    {/* Título y subtítulo */}
                    <h3 className="font-medium text-white mb-1 text-sm sm:text-base break-words">
                      {activity.title}
                    </h3>
                    <p className="text-gray-300 mb-3 text-xs sm:text-sm break-words">{activity.subtitle}</p>

                    {/* Descripción dividida en párrafos */}
                    <div className="text-gray-400 leading-relaxed mb-4 text-xs sm:text-sm">
                      {activity.description.split(/\. |\n/).map((line, i) => (
                        <p key={i} className="mb-2 break-words">
                          {line.trim()}.
                        </p>
                      ))}
                    </div>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {activity.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-xs text-muted-foreground px-2 py-1 bg-background rounded break-words"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                {/* Accesos a certificados */}
                {activity.category === "certificate" && (
                  <div className="flex gap-4">
                    {activity.link && (
                      <a
                        href={activity.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-xs text-blue-400 hover:underline break-words"
                      >
                        View Online
                      </a>
                    )}
                    <button
                      onClick={() =>
                        setSelectedImage(
                          `/certificates/${activity.title.toLowerCase().replace(/\s+/g, "-")}-certificate.png`
                        )
                      }
                      className="text-xs text-green-400 hover:underline break-words"
                    >
                      Open
                    </button>
                  </div>
                )}
              </motion.div>

          ))}
        </motion.div>
      </div>

      {/* Modal para imagen */}
      {selectedImage && (
        <div
          className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 cursor-pointer"
          onClick={() => setSelectedImage(null)}
        >
          <motion.img
            src={selectedImage}
            alt="Certificate"
            className="max-h-[90vh] max-w-[90vw] object-contain"
            onClick={(e) => e.stopPropagation()}
            animate={{
              scale: 1,
              rotateX: rotation.rotateX,
              rotateY: rotation.rotateY,
            }}
            whileHover={{ scale: 0.97 }}
            transition={{ type: "spring", stiffness: 200, damping: 15 }}
            onMouseMove={(e) => {
              const rect = e.currentTarget.getBoundingClientRect()
              const rotateX = ((e.clientY - rect.top) / rect.height - 0.5) * 10
              const rotateY = ((e.clientX - rect.left) / rect.width - 0.5) * 10
              setRotation({ rotateX: -rotateX, rotateY })
            }}
            onMouseLeave={() => setRotation({ rotateX: 0, rotateY: 0 })}
          />
          <button
            className="absolute top-4 right-4 text-white text-lg font-bold"
            onClick={() => setSelectedImage(null)}
          >
            ✕
          </button>
        </div>
      )}
    </section>
  )
}
