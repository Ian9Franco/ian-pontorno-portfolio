"use client"

import { motion, AnimatePresence } from "framer-motion"
import { useEffect, useState, useRef } from "react"
import { Eye, ExternalLink, X } from "lucide-react"
import { useLanguage } from "./language-context"
import { dictionaries, Activity } from "@/data/dictionaries"
import { fira } from "../lib/utils"
import { Tag } from "./tag"

export function ActivitiesAchievements() {
  const { language } = useLanguage()
  const t = dictionaries[language]
  const activities = t.activitiesList

  const [offset, setOffset] = useState(0)
  const [isHovered, setIsHovered] = useState(false)
  const [isDragging, setIsDragging] = useState(false)
  const [direction, setDirection] = useState(1)
  const [selectedImage, setSelectedImage] = useState<string | null>(null)
  const [rotation, setRotation] = useState({ rotateX: 0, rotateY: 0 })

  // Handle ESC key and prevent body scroll when modal is open
  useEffect(() => {
    if (!selectedImage) return

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setSelectedImage(null)
      }
    }

    window.addEventListener("keydown", handleKeyDown)
    const originalOverflow = document.body.style.overflow
    document.body.style.overflow = "hidden"

    return () => {
      window.removeEventListener("keydown", handleKeyDown)
      document.body.style.overflow = originalOverflow
    }
  }, [selectedImage])

  const cardWidth = 320
  const gap = 24
  // We utilize the dictionary to get the length.
  const totalWidth = (cardWidth + gap) * activities.length

  useEffect(() => {
    let animationFrame: number

    const animate = () => {
      if (!isHovered && !isDragging) {
        setOffset((prev) => {
          let next = prev
          let speed = 0

          if (direction === -1) {
            // Movement left
            const leftLimit = 0
            const fastSpeed = 60
            const minSpeed = 1
            const slowZone = 100

            const distanceToLeft = prev - leftLimit

            if (distanceToLeft > slowZone) {
              speed = fastSpeed
            } else {
              const t = distanceToLeft / slowZone
              speed = minSpeed + (fastSpeed - minSpeed) * t
            }

            next = prev - speed

            if (next <= leftLimit) {
              next = leftLimit
              setDirection(1)
            }
          } else {
            // Movement right
            const slowSpeed = 0.8
            next = prev + slowSpeed

            if (next >= totalWidth) {
              next = totalWidth
              setDirection(-1)
            }
          }

          return next
        })
      }

      animationFrame = requestAnimationFrame(animate)
    }

    animationFrame = requestAnimationFrame(animate)
    return () => { cancelAnimationFrame(animationFrame) }
  }, [isHovered, isDragging, totalWidth, direction]) // Depend on totalWidth which depends on activities

  const categoryColors: Record<Activity["category"], string> = {
    certificate: "bg-violet-500/20 text-violet-300 border-violet-500/30",
    career: "bg-yellow-500/20 text-yellow-300 border-yellow-500/30",
  }

  const categoryLabels: Record<Activity["category"], Record<"en" | "es", string>> = {
    certificate: { en: "certificate", es: "certificado" },
    career: { en: "career", es: "carrera" },
  }

  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const el = containerRef.current
    if (!el) return

    const handleNativeWheel = (e: WheelEvent) => {
      // Prevent the page from scrolling vertically
      e.preventDefault()
      
      setOffset((prev) => {
        let next = prev + e.deltaY * 0.8 + e.deltaX * 0.8
        if (next < 0) next = 0
        if (next > totalWidth) next = totalWidth
        return next
      })
    }

    // Add non-passive event listener so preventDefault works
    el.addEventListener("wheel", handleNativeWheel, { passive: false })
    return () => { el.removeEventListener("wheel", handleNativeWheel) }
  }, [totalWidth])

  return (
    <section id="activities" className="py-20 overflow-hidden relative">
      <motion.h2
        id="activities-heading"
        className="text-sm font-medium mb-12 text-white text-center"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        {t.activities.title}
      </motion.h2>

      {/* Side gradients */}
      <div className="absolute left-0 top-0 w-16 h-full bg-gradient-to-r from-background via-background/80 to-transparent z-10 pointer-events-none hidden md:block" />
      <div className="absolute right-0 top-0 w-16 h-full bg-gradient-to-l from-background via-background/80 to-transparent z-10 pointer-events-none hidden md:block" />

      <div className="flex gap-6 px-6 z-20" ref={containerRef}>
        <motion.div 
          className="flex gap-6 cursor-grab active:cursor-grabbing" 
          style={{ x: -offset, touchAction: "pan-y" }}
          onHoverStart={() => { setIsHovered(true) }}
          onHoverEnd={() => { setIsHovered(false) }}
          onPanStart={() => { setIsDragging(true) }}
          onPanEnd={() => { setIsDragging(false) }}
          onPan={(e, info) => {
            setOffset((prev) => {
              let next = prev - info.delta.x;
              if (next < 0) next = 0;
              if (next > totalWidth) next = totalWidth;
              return next;
            });
          }}
        >
          {/* Triplicate for loop effect */}
          {[...activities, ...activities, ...activities].map((activity, index) => (
            <motion.div
              key={`${activity.title}-${index}`}
              className={`flex-shrink-0 w-[85vw] sm:w-80 bg-[#0D0D0D] rounded-lg p-4 sm:p-6 border border-[#1A1A1A] text-[10px] sm:text-base transition-all duration-300 ease-out hover:scale-105 hover:shadow-lg hover:border-[#333] ${
                activity.certificateImage ? "cursor-pointer" : ""
              }`}
              onClick={() => {
                if (!isDragging && activity.certificateImage) {
                  setSelectedImage(activity.certificateImage)
                }
              }}
            >
              {/* Category and date */}
              <div className="flex items-center justify-between mb-2">
                <span
                  className={`text-xs font-medium px-2 py-1 rounded-full border ${categoryColors[activity.category]}`}
                >
                  {categoryLabels[activity.category]?.[language] || activity.category}
                </span>
                <span className={`${fira.className} text-xs font-light text-gray-400`}>
                  {activity.date}
                </span>
              </div>

              {/* Title and subtitle */}
              <h3 className="font-medium text-white mb-1 text-sm sm:text-base break-words">
                {activity.title}
              </h3>
              <p className={`${fira.className} text-gray-300 mb-3 text-xs sm:text-sm break-words`}>
                {activity.subtitle}
              </p>

              {/* Description */}
              <div className={`${fira.className} text-gray-400 font-light leading-relaxed mb-4 text-[12px] sm:text-[13px] drop-shadow-sm`}>
                {activity.description.split(/\n/).map((line, i) => (
                  line.length > 0 ? (
                    <p key={i} className="mb-2 break-words">
                      {line.trim()}{line.trim().endsWith('.') ? '' : '.'}
                    </p>
                  ) : null
                ))}
              </div>

              {/* Tags */}
              <div className="flex flex-wrap gap-2 mb-4">
                {activity.tags.map((tag) => (
                  <Tag key={tag} className="text-[11px] px-2 py-1">
                    {tag}
                  </Tag>
                ))}
              </div>

              {/* Certificate & Validation links */}
              {(activity.certificateImage || activity.link) && (
                <div className="flex flex-wrap items-center gap-3 mt-1">
                  {activity.certificateImage && (
                    <button
                      type="button"
                      onClick={(e) => {
                        e.stopPropagation()
                        setSelectedImage(activity.certificateImage!)
                      }}
                      className="text-xs text-violet-400 hover:text-violet-300 hover:underline flex items-center gap-1.5 cursor-pointer font-medium group"
                    >
                      <Eye className="w-3.5 h-3.5 transition-transform group-hover:scale-110" />
                      {language === "es" ? "Ver Certificado" : "View Certificate"}
                    </button>
                  )}
                  {activity.link && (
                    <a
                      href={activity.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xs text-blue-400 hover:text-blue-300 hover:underline flex items-center gap-1.5 group"
                      onClick={(e) => e.stopPropagation()}
                    >
                      <ExternalLink className="w-3.5 h-3.5 transition-transform group-hover:scale-110" />
                      {language === "es" ? "Ver Validación" : "View Accreditation"}
                    </a>
                  )}
                </div>
              )}
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Modal for certificate image */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 bg-black/85 backdrop-blur-sm flex items-center justify-center z-50 cursor-pointer p-4"
            onClick={() => setSelectedImage(null)}
          >
            <motion.div
              initial={{ scale: 0.92, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.92, opacity: 0 }}
              transition={{ type: "spring", stiffness: 280, damping: 25 }}
              className="relative max-h-[90vh] max-w-[90vw] flex items-center justify-center"
              onClick={(e) => e.stopPropagation()}
            >
              <motion.img
                src={selectedImage}
                alt="Certificate"
                className="max-h-[85vh] max-w-[90vw] rounded-xl shadow-2xl object-contain border border-white/10"
                animate={{
                  scale: 1,
                  rotateX: rotation.rotateX,
                  rotateY: rotation.rotateY,
                }}
                whileHover={{ scale: 0.98 }}
                transition={{ type: "spring", stiffness: 200, damping: 15 }}
                onMouseMove={(e) => {
                  const rect = e.currentTarget.getBoundingClientRect()
                  const rotateX = ((e.clientY - rect.top) / rect.height - 0.5) * 10
                  const rotateY = ((e.clientX - rect.left) / rect.width - 0.5) * 10
                  setRotation({ rotateX: -rotateX, rotateY })
                }}
                onMouseLeave={() => { setRotation({ rotateX: 0, rotateY: 0 }) }}
              />
              <button
                type="button"
                className="absolute -top-3 -right-3 sm:top-3 sm:right-3 text-white/80 hover:text-white bg-black/70 hover:bg-black/90 p-2 rounded-full border border-white/20 transition-all cursor-pointer backdrop-blur-sm shadow-md"
                onClick={() => setSelectedImage(null)}
                aria-label="Close certificate preview"
              >
                <X className="w-5 h-5" />
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}
