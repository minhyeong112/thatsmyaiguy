import type React from "react"
import type { Metadata } from "next"
import { Anton, Inter } from "next/font/google"
import "./globals.css"
import { ErrorBoundary } from "@/components/error-boundary"

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" })
const anton = Anton({ subsets: ["latin"], weight: "400", variable: "--font-anton" })

const wrenchIcon =
  "data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><text y='0.9em' font-size='90'>🔧</text></svg>"

export const metadata: Metadata = {
  title: "That's My AI Guy - AI Automation & Business Systems",
  description: "AI automation, private assistant setup, and practical workflow systems for business owners.",
  icons: {
    icon: [{ url: wrenchIcon }],
    apple: "/apple-touch-icon.png",
  },
  manifest: "/manifest.json",
  generator: "v0.app",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${inter.variable} ${anton.variable}`}>
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Teko:wght@300;400;500;600;700&display=swap"
          rel="stylesheet"
        />
        <link rel="icon" href={wrenchIcon} />
      </head>
      <body className={inter.className}>
        <ErrorBoundary>{children}</ErrorBoundary>
      </body>
    </html>
  )
}
