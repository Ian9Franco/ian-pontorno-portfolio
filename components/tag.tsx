"use client"

import { useState } from "react"
import { fira } from "../lib/utils"

const hoverColors = [
    "hover:bg-blue-500/20 hover:text-blue-300 hover:border-blue-500/50",
    "hover:bg-indigo-500/20 hover:text-indigo-300 hover:border-indigo-500/50",
    "hover:bg-yellow-500/20 hover:text-yellow-300 hover:border-yellow-500/50",
    "hover:bg-cyan-500/20 hover:text-cyan-300 hover:border-cyan-500/50",
    "hover:bg-emerald-500/20 hover:text-emerald-300 hover:border-emerald-500/50",
    "hover:bg-rose-500/20 hover:text-rose-300 hover:border-rose-500/50",
    "hover:bg-orange-500/20 hover:text-orange-300 hover:border-orange-500/50",
    "hover:bg-purple-500/20 hover:text-purple-300 hover:border-purple-500/50",
    "hover:bg-teal-500/20 hover:text-teal-300 hover:border-teal-500/50",
    "hover:bg-lime-500/20 hover:text-lime-300 hover:border-lime-500/50",
]

interface TagProps {
    children: React.ReactNode
    className?: string
}

export function Tag({ children, className = "" }: TagProps) {
    const [hoverColor, setHoverColor] = useState("")

    const handleMouseEnter = () => {
        const randomColor = hoverColors[Math.floor(Math.random() * hoverColors.length)]
        setHoverColor(randomColor)
    }

    return (
        <span
            onMouseEnter={handleMouseEnter}
            className={`${fira.className} text-[10px] text-gray-400 px-2 py-0.5 bg-white/5 rounded border border-white/10 transition-all duration-300 cursor-default shadow-sm ${hoverColor} ${className}`}
        >
            {children}
        </span>
    )
}
