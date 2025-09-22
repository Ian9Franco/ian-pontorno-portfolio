"use client"

import { motion } from "framer-motion"
import { contactLinks } from "@/data/data"

const AnimatedHeart = () => {
  return (
    <motion.span
      className="inline-block text-red-500 mx-1"
      animate={{
        scale: [1, 1.2, 1],
      }}
      transition={{
        duration: 1,
        repeat: Number.POSITIVE_INFINITY,
        ease: "easeInOut",
      }}
      style={{
        fontFamily: "monospace",
        imageRendering: "pixelated",
      }}
    >
      ♥
    </motion.span>
  )
}

export function Footer() {
  return (
    <footer className="py-20 px-6">
      <div className="max-w-4xl mx-auto">
        <motion.h2
          className="text-sm font-medium mb-12 text-white text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          elsewhere
        </motion.h2>

        <motion.div
          className="flex flex-wrap gap-8 text-sm"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          viewport={{ once: true }}
        >
          <a
            href={`mailto:${contactLinks.email}?subject=Contact%20Regarding%20Opportunities&body=Hi%20Ian,%0D%0A%0D%0AI’m%20reaching%20out%20to%20get%20in%20touch%20regarding%20potential%20opportunities.%0D%0A%0D%0ABest%20regards,%0D%0A[Your%20Name]`}
            className="text-muted-foreground hover:text-foreground transition-colors"
            onClick={(e) => {
              if (typeof window !== "undefined" && !window.navigator.userAgent.includes("Mobi")) {
                e.preventDefault()
                window.open(
                  `https://mail.google.com/mail/?view=cm&to=${contactLinks.email}&su=Contact%20Regarding%20Opportunities&body=Hi%20Ian,%0D%0A%0D%0AI’m%20reaching%20out%20to%20get%20in%20touch%20regarding%20potential%20opportunities.%0D%0A%0D%0ABest%20regards,%0D%0A[Your%20Name]`,
                  "_blank",
                  "noopener,noreferrer"
                )
              }
            }}
          >
            Email
          </a>




          <a
            href={contactLinks.github}
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-foreground transition-colors"
          >
            GitHub
          </a>
          <a
            href={contactLinks.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-foreground transition-colors"
          >
            LinkedIn
          </a>
        </motion.div>

        <motion.p
          className="text-xs text-muted-foreground mt-12 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          hecho con <AnimatedHeart /> por © 2024 Ian Franco Collada Pontorno
        </motion.p>
      </div>
    </footer>
  )
}
