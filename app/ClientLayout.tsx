"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { ThemeProvider } from "@/components/theme-provider"

export default function ClientLayout({ children }: { children: React.ReactNode }) {
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    // Simulate loading time or wait for resources
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 1500)

    return () => clearTimeout(timer)
  }, [])

  return (
    <ThemeProvider attribute="class" defaultTheme="dark" enableSystem>
      <div
        className={`transition-all duration-1000 ease-out ${
          isLoading ? "scale-105 blur-md opacity-0" : "scale-100 blur-0 opacity-100"
        }`}
      >
        {children}
      </div>
    </ThemeProvider>
  )
}
