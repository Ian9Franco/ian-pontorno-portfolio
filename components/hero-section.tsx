"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { useState } from "react"

export function HeroSection() {
  const [isHovered, setIsHovered] = useState(false)

return (
  <section
    className="py-10 px-6"
    onMouseEnter={() => setIsHovered(true)}
    onMouseLeave={() => setIsHovered(false)}
  >
    <div className="max-w-2xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        {/* Header row */}
        <div className="flex items-start gap-6 mb-6">
          {/* Image container */}
          <div className="flex-shrink-0 relative w-40 h-40 cursor-pointer">
            <motion.div
              className="relative w-full h-full rounded-full overflow-hidden bg-transparent"
              style={{
                boxShadow: `
                  0 0 0 1px rgba(255, 255, 255, 0.1),
                  0 0 20px rgba(0, 0, 0, 0.3),
                  inset 0 0 20px rgba(0, 0, 0, 0.2)
                `,
              }}
              animate={isHovered ? { scale: 1.06 } : { scale: [1, 1.035, 1] }}
              transition={
                isHovered
                  ? { duration: 0.28, ease: "easeOut" }
                  : {
                      duration: 2.6,
                      repeat: Infinity,
                      repeatType: "loop",
                      ease: "easeInOut",
                    }
              }
            >
              {/* Default image */}
              <motion.div
                className="absolute inset-0"
                animate={{ opacity: isHovered ? 0 : 1 }}
                transition={{ duration: 0.28 }}
              >
                <Image
                  src="/images/profile/defaultRect.png"
                  alt="Ian Franco Pontorno"
                  fill
                  className="object-cover rounded-full"
                  priority
                />
              </motion.div>

              {/* Hover image */}
              <motion.div
                className="absolute inset-0"
                animate={{ opacity: isHovered ? 1 : 0 }}
                transition={{ duration: 0.28 }}
              >
                <Image
                  src="/images/profile/hoverRect.png"
                  alt="Ian Franco Pontorno (hover)"
                  fill
                  className="object-cover rounded-full"
                  priority
                />
              </motion.div>

              {/* Radial overlay */}
              <div
                className="absolute inset-0 rounded-full z-10 pointer-events-none"
                style={{
                  background:
                    "radial-gradient(circle at center, transparent 45%, rgba(0,0,0,0.1) 65%, rgba(0,0,0,0.4) 85%, rgba(0,0,0,0.8) 95%, rgba(0,0,0,1) 100%)",
                }}
              />
            </motion.div>

            {/* Greeting bubble */}
            <motion.div
              className="absolute -top-4 -right-6 z-20 w-[192px] h-[192px] pointer-events-none"
              initial={{ opacity: 0, scale: 0.8, y: 10 }}
              animate={{
                opacity: isHovered ? 1 : 0,
                scale: isHovered ? 1 : 0.8,
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

          {/* Text info */}
            <div className="flex-1 pt-12 pl-4">
              <h1 className="text-xl font-bold text-white mb-1">
                Ian Franco Pontorno
              </h1>

              <p className="text-gray-400 text-sm font-medium">
                Performance & Digital Operations Specialist
              </p>

             <div className="mt-0.5 text-xs text-gray-500">
              <span className="mr-1">en</span>
                <a
                  href="https://www.linkedin.com/company/fanger-design/about/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="
                    text-gray-500
                    hover:text-yellow-400
                    transition-colors
                    duration-300
                    ease-in-out
                  "
                >@fanger
                </a>
              </div>

            </div>

        </div>

        {/* Description */}
        <motion.div
          className="space-y-4 mb-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <p className="text-gray-300 text-sm leading-relaxed">
            Performance and digital operations specialist with a strong technical
            background and a data-driven approach. I work with Meta and Google Ads
            to analyze campaign performance, optimize results based on business
            objectives, and translate data into clear, actionable improvements.
          </p>

          <p className="text-gray-300 text-sm leading-relaxed">
            I’m also responsible for day-to-day digital operations, including
            website updates, content and design improvements, product management
            based on stock, and internal data organization to keep systems
            consistent and reliable.
          </p>

          <p className="text-gray-300 text-sm leading-relaxed">
            With a background in software development, I naturally build scripts,
            small systems, and automations to streamline workflows, reduce manual
            effort, and improve scalability whenever possible.
          </p>
        </motion.div>

        {/* Links */}
        <motion.p
          className="text-gray-400 text-sm text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          you can find me at{" "}
          <a
            href="https://www.linkedin.com/in/ian-franco-collada-pontorno/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-[#0A66C2] transition-colors"
          >
            LinkedIn
          </a>{" "}
          or{" "}
          <a
            href="https://github.com/Ian9Franco"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-gray-400 transition-colors"
          >
            GitHub
          </a>
        </motion.p>
      </motion.div>
    </div>
  </section>
)
}