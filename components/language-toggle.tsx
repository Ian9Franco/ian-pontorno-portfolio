"use client"

import { useLanguage } from "./language-context"
import { Globe } from "lucide-react"
import styles from "./language-toggle.module.css"

export function LanguageToggle() {
  const { language, toggleLanguage } = useLanguage()
  return (
    <nav aria-label={language === "es" ? "Idioma del sitio" : "Site language"}>
      <button type="button" onClick={toggleLanguage}
        aria-label={language === "es" ? "Switch to English" : "Cambiar a español"}
        className={styles.toggle}>
        <Globe size={14} aria-hidden="true" />
        <span className={language === "es" ? styles.active : undefined}>ES</span>
        <span className={styles.divider} aria-hidden="true" />
        <span className={language === "en" ? styles.active : undefined}>EN</span>
      </button>
    </nav>
  )
}
