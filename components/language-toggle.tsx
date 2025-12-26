"use client"

import { useLanguage } from "./language-context"
import { motion } from "framer-motion"

export function LanguageToggle() {
    const { language, toggleLanguage } = useLanguage()

    return (
        <motion.button
            onClick={toggleLanguage}
            className="fixed top-6 right-6 z-50 flex items-center justify-center w-10 h-10 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white hover:bg-white/20 transition-colors"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
        >
            <span className="text-xs font-medium uppercase tracking-wider">
                {language}
            </span>
        </motion.button>
    )
}
