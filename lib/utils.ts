import { clsx, type ClassValue } from 'clsx'
import { twMerge } from 'tailwind-merge'
import { Inter, Fira_Code } from "next/font/google"


export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}
export const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  variable: "--font-inter",
})

export const fira = Fira_Code({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-fira",
})