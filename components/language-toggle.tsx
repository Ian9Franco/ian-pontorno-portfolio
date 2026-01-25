"use client"

import { useLanguage } from "./language-context"
import { motion, AnimatePresence } from "framer-motion"
import { Globe } from "lucide-react"

export function LanguageToggle() {
    const { language, toggleLanguage } = useLanguage()

    return (
        <motion.button
            onClick={toggleLanguage}
            className="fixed top-6 right-6 z-50 flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 backdrop-blur-xl border border-white/10 text-white/80 hover:text-white hover:bg-white/10 hover:border-white/20 transition-all duration-300 group shadow-lg"
            whileHover={{ scale: 1.02, y: -2 }}
            whileTap={{ scale: 0.98 }}
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
        >
            <Globe className="w-4 h-4 transition-transform duration-500 group-hover:rotate-180 text-white/60 group-hover:text-white" />

            <div className="relative overflow-hidden flex items-center h-4 min-w-[20px]">
                <AnimatePresence mode="wait">
                    <motion.span
                        key={language}
                        initial={{ y: 20, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        exit={{ y: -20, opacity: 0 }}
                        transition={{ duration: 0.3, ease: "easeOut" }}
                        className="text-[10px] font-bold uppercase tracking-[0.2em]"
                    >
                        {language}
                    </motion.span>
                </AnimatePresence>
            </div>

            <div className="w-1 h-1 rounded-full bg-white/20 group-hover:bg-white transition-colors duration-300" />
        </motion.button>
    )
}
