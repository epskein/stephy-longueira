import type React from "react"
import "./globals.css"
import type { Metadata } from "next/types"
import ClientLayout from "./ClientLayout"

export const metadata: Metadata = {
  title: "Stephy Ongueira | DJ & Producer",
  description: "Official website of DJ Stephy Ongueira",
    generator: 'v0.dev'
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <title>Stephy Ongueira | DJ & Producer</title>
        <meta name="description" content="Official website of DJ Stephy Ongueira" />
      </head>
      <body className="min-h-screen bg-black">
        <ClientLayout>{children}</ClientLayout>
      </body>
    </html>
  )
}
