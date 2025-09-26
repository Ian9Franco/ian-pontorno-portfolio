"use client"

import { motion } from "framer-motion"
import { contactLinks } from "@/data/data"

// Componente del corazón animado
const AnimatedHeart = () => {
  return (
    <motion.span
      className="inline-block text-muted-foreground mx-1" // mismo tono que el texto
      animate={{
        scale: [1, 1.2, 1], // efecto de "latido"
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
    <footer className="py-10 px-6">
      <div className="max-w-2xl mx-auto">
        {/* Título */}
        <motion.h2
          className="text-sm font-medium mb-6 text-white text-left"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          elsewhere
        </motion.h2>

        {/* Links de contacto */}
        <motion.div
          className="flex flex-wrap gap-8 text-sm mb-6"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          viewport={{ once: true }}
        >
          <a
            href={`mailto:${contactLinks.email}?subject=Contact%20Regarding%20Opportunities&body=Hi%20Ian`}
            className="text-muted-foreground hover:text-foreground transition-colors duration-300 ease-in-out"
          >
            Email
          </a>
          <a
            href={contactLinks.github}
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-foreground transition-colors duration-300 ease-in-out"
          >
            GitHub
          </a>
          <a
            href={contactLinks.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-[#0A66C2] transition-colors duration-300 ease-in-out"
          >
            LinkedIn
          </a>
        </motion.div>

        {/* Créditos con más separación respecto a los links */}
        <motion.p
          className="text-xs text-muted-foreground text-left mt-10" // mt-10 = más separación
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          © 2025 · Created with <AnimatedHeart /> by{" "}
          <span className="hover:text-foreground transition-colors duration-300 ease-in-out">
            Ian Franco Collada Pontorno
          </span>
        </motion.p>
      </div>
    </footer>
  )
}
