"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { useState } from "react"

export function HeroSection() {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <section className="min-h-[60vh] flex flex-col items-center justify-center px-6 pt-4">
      <div className="max-w-2xl mx-auto text-center">
        {/* Hover sobre todo el bloque */}
        <motion.div
            className="flex items-center justify-center gap-6 mb-2 cursor-pointer"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            whileTap={{ scale: 0.95 }} // feedback de tap
          >
            <motion.div
              className="relative w-48 h-48 flex-shrink-0 rounded-3xl overflow-hidden bg-transparent p-1"
              animate={{
                scale: isHovered ? 1.05 : [1, 1.02, 1], // pulso en mobile
              }}
              transition={{
                duration: 1,
                repeat: Infinity,
                repeatType: "loop",
                ease: "easeInOut",
              }}
            >
              <Image
                src={isHovered ? "/images/profile/ian-hover.png" : "/images/profile/ian-default.png"}
                alt="Ian Franco Pontorno"
                fill
                className="object-contain transition-all duration-300"
                priority
              />
            </motion.div>

            <div className="text-left">
              <h1 className="text-2xl font-bold text-white mb-0">Ian Franco Pontorno</h1>
              <p className="text-gray-400 text-sm font-medium">Software Engineer and Designer</p>
            </div>
          </motion.div>





       <motion.div
          className="space-y-4 mt-6 max-w-xl text-left"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <p className="text-gray-300 text-sm font-normal leading-relaxed">
            Software Engineer with 3+ years of experience building modern web applications using Python, JavaScript, Node.js, HTML/CSS, and databases like MongoDB & SQL.
            Skilled in Git, SAP/ABAP, and integrating cloud services.
          </p>

          <p className="text-gray-300 text-sm font-normal leading-relaxed">
            In my free time, I try my best to create fun and useful web applications that I actually use along with a
            small number of other users.
          </p>
        </motion.div>



        <motion.p
          className="text-gray-400 text-sm font-normal mt-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          you can find me at{" "}
          <a
            href="https://linkedin.com/in/ianfranco"
            className="text-white underline hover:text-gray-300 transition-colors"
          >
            LinkedIn
          </a>{" "}
          or{" "}
          <a href="https://github.com/ianfranco" className="text-white underline hover:text-gray-300 transition-colors">
            GitHub
          </a>
        </motion.p>
      </div>
    </section>
  )
}
