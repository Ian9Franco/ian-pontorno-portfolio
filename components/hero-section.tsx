"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { useState } from "react"

export function HeroSection() {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <section className="min-h-[60vh] flex flex-col items-center justify-center px-6 pt-4">
      <div className="max-w-2xl mx-auto text-center">
        <motion.div
          className="cursor-pointer"
          initial={{ opacity: 0, scale: 0.98 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.45 }}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          whileTap={{ scale: 0.96 }}
        >
          <div className="flex items-center justify-center gap-6 mb-2 relative">
            {/* Contenedor de la imagen: pulse (idle) + override en hover */}
            <div className="relative w-48 h-48 flex-shrink-0">
              <motion.div
                className="relative w-full h-full rounded-3xl overflow-hidden bg-transparent p-1"
                style={{
                  WebkitMaskImage: `radial-gradient(circle at top, rgba(0,0,0,1) 80%, rgba(0,0,0,0) 100%)`,
                  WebkitMaskRepeat: "no-repeat",
                  WebkitMaskSize: "cover",
                  maskImage: `radial-gradient(circle at top, rgba(0,0,0,1) 80%, rgba(0,0,0,0) 100%)`,
                  maskRepeat: "no-repeat",
                  maskSize: "cover",
                }}
                animate={isHovered ? { scale: 1.06 } : { scale: [1, 1.035, 1] }}
                transition={
                  isHovered
                    ? { duration: 0.28, ease: "easeOut" }
                    : { duration: 2.6, repeat: Number.POSITIVE_INFINITY, repeatType: "loop", ease: "easeInOut" }
                }
                whileHover={{ boxShadow: "0 24px 40px rgba(0,0,0,0.28)" }}
              >
                {/* Cross-fade entre las dos imágenes */}
                <motion.div
                  className="absolute inset-0"
                  animate={{ opacity: isHovered ? 0 : 1 }}
                  transition={{ duration: 0.28 }}
                >
                  <Image
                    src="/images/profile/defaultRect.png"
                    alt="Ian Franco Pontorno"
                    fill
                    className="object-contain"
                    priority
                  />
                </motion.div>

                <motion.div
                  className="absolute inset-0"
                  animate={{ opacity: isHovered ? 1 : 0 }}
                  transition={{ duration: 0.28 }}
                >
                  <Image
                    src="/images/profile/hoverRect.png"
                    alt="Ian Franco Pontorno (hover)"
                    fill
                    className="object-contain"
                    priority
                  />
                </motion.div>
              </motion.div>

             {/* Bubble de saludo por encima de todo */}
           <motion.div
            className="absolute -top-4 right-[-0.25rem] sm:right-[-0.75rem] z-20 w-32 h-32 pointer-events-none"
            initial={{ opacity: 0, scale: 0.8, y: 10 }}
            animate={{
              opacity: isHovered ? 1 : 0,
              scale: isHovered ? 1.5 : 0.8,
              y: isHovered ? 0 : 10,
            }}
            transition={{ duration: 0.3, ease: "easeOut" }}
          >
            <Image
              src="/images/profile/hi!.png"
              alt="Hi greeting bubble"
              fill
              className="object-contain"
            />
          </motion.div>




            </div>

            {/* Texto al lado de la imagen */}
            <div className="text-left">
              <h1 className="text-2xl font-bold text-white mb-0">Ian Franco Pontorno</h1>
              <p className="text-gray-400 text-sm font-medium">Software Engineer and Designer</p>
            </div>
          </div>

          {/* Descripción */}
          <motion.div
            className="space-y-4 mt-6 max-w-xl text-left"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <p className="text-gray-300 text-sm font-normal leading-relaxed">
              Software Engineer with 3+ years of experience building modern web applications using Python, JavaScript,
              Node.js, HTML/CSS, and databases like MongoDB & SQL. Skilled in Git, SAP/ABAP, and integrating cloud
              services.
            </p>

            <p className="text-gray-300 text-sm font-normal leading-relaxed">
              In my free time, I try my best to create fun and useful web applications that I actually use along with a
              small number of other users.
            </p>
          </motion.div>

          {/* Links */}
          <motion.p
            className="text-gray-400 text-sm font-normal mt-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            you can find me at{" "}
            <a
              href="https://www.linkedin.com/in/ian-franco-collada-pontorno/"
              className="text-white underline hover:text-gray-300 transition-colors"
            >
              LinkedIn
            </a>{" "}
            or{" "}
            <a
              href="https://github.com/Ian9Franco"
              className="text-white underline hover:text-gray-300 transition-colors"
            >
              GitHub
            </a>
          </motion.p>
        </motion.div>
      </div>
    </section>
  )
}
