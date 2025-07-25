import type React from "react"
import "./globals.css"
import type { Metadata } from "next/types"
import ClientLayout from "./ClientLayout"

export const metadata: Metadata = {
  title: "Stephy Longueira | DJ & Producer",
  description: "Official website of DJ Stephy Longueira",
    generator: 'v0.dev'
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <title>Stephy Longueira | DJ & Producer</title>
        <meta name="description" content="Official website of DJ Stephy Longueira" />
      </head>
      <body className="min-h-screen bg-black">
        <ClientLayout>{children}</ClientLayout>
      </body>
    </html>
  )
}
