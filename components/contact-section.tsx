"use client"

import { motion } from "framer-motion"
import { contactLinks } from "@/data/data"
import { Github, Linkedin, Mail } from "lucide-react"

export function ContactSection() {
  const socialLinks = [
    {
      name: "GitHub",
      url: contactLinks.github,
      icon: Github,
      label: "@Ian9Franco",
    },
    {
      name: "LinkedIn",
      url: contactLinks.linkedin,
      icon: Linkedin,
      label: "Ian Franco Collada Pontorno",
    },
    {
      name: "Email",
      url: `mailto:${contactLinks.email}`,
      icon: Mail,
      label: contactLinks.email,
    },
  ]

  return (
    <section className="py-20 px-6">
      <div className="max-w-4xl mx-auto text-center">
        <motion.h2
          className="text-4xl lg:text-5xl font-bold mb-8 text-balance"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          Conectemos
        </motion.h2>

        <motion.p
          className="text-xl text-muted-foreground mb-12 text-pretty"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          viewport={{ once: true }}
        >
          ¿Tienes un proyecto en mente? Me encantaría escuchar sobre él y ver cómo podemos trabajar juntos.
        </motion.p>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-6"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          {socialLinks.map((link, index) => (
            <motion.a
              key={link.name}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group bg-card border border-border rounded-xl p-6 hover:border-primary/50 transition-all duration-300"
              whileHover={{
                scale: 1.05,
                y: -5,
              }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
            >
              <link.icon className="w-8 h-8 text-primary mx-auto mb-4 group-hover:scale-110 transition-transform duration-300" />
              <h3 className="text-lg font-semibold mb-2">{link.name}</h3>
              <p className="text-muted-foreground text-sm">{link.label}</p>
            </motion.a>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
