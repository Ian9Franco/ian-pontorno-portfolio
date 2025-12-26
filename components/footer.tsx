"use client"

import { motion } from "framer-motion"
import { useLanguage } from "./language-context"
import { dictionaries, contactLinks } from "@/data/dictionaries"

const AnimatedHeart = () => {
  return (
    <motion.span
      className="inline-block text-muted-foreground mx-1"
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
  const { language } = useLanguage()
  const t = dictionaries[language]

  return (
    <footer className="py-10 px-6">
      <div className="max-w-2xl mx-auto">
        {/* Title */}
        <motion.h2
          className="text-sm font-medium mb-6 text-white text-left"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          {t.footer.title}
        </motion.h2>

        {/* Links */}
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

        {/* Credits */}
        <motion.p
          className="text-xs text-muted-foreground text-left mt-10"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          © {new Date().getFullYear()} · Created with <AnimatedHeart /> by{" "}
          <span className="hover:text-foreground transition-colors duration-300 ease-in-out">
            Ian Franco Collada Pontorno
          </span>
          . {t.footer.rights}
        </motion.p>
      </div>
    </footer>
  )
}
