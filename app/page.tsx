"use client"

import { Teko } from "next/font/google"
import { FaqAccordion } from "@/components/faq-accordion"
import { TestimonialsCarousel } from "@/components/projects-carousel"
import { HeroSection } from "@/components/hero-section"
import { AboutFounder } from "@/components/about-founder"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { useEffect } from "react"
import { ActiveProjectSpotlight } from "@/components/active-project-spotlight"
import Script from "next/script"

const teko = Teko({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-teko",
})

export default function Home() {
  useEffect(() => {
    const handleHashChange = () => {
      // Ensure we're in the browser environment
      if (typeof window === "undefined") return

      try {
        const hash = window.location.hash
        if (hash) {
          const id = hash.replace("#", "")
          const element = document.getElementById(id)
          if (element) {
            // Add a slight delay to ensure the page is fully loaded
            setTimeout(() => {
              try {
                const headerHeight = document.querySelector("header")?.offsetHeight || 0
                const elementPosition = element.getBoundingClientRect().top + window.pageYOffset
                window.scrollTo({
                  top: elementPosition - headerHeight,
                  behavior: "smooth",
                })
              } catch (scrollError) {
                console.error("Error during smooth scroll:", scrollError)
                // Fallback to simple scroll
                element.scrollIntoView()
              }
            }, 100)
          }
        }
      } catch (error) {
        console.error("Error handling hash change:", error)
      }
    }

    // Handle initial load
    handleHashChange()

    // Listen for hash changes
    if (typeof window !== "undefined") {
      window.addEventListener("hashchange", handleHashChange)
      return () => window.removeEventListener("hashchange", handleHashChange)
    }
  }, [])

  return (
    <main className={`${teko.variable} font-sans`}>
      <Header />
      <HeroSection />
      <ActiveProjectSpotlight />
      <AboutFounder />
      <TestimonialsCarousel />
      <FaqAccordion />
      <Footer />

      <Script
        id="ghl-chat-widget"
        src="https://widgets.leadconnectorhq.com/loader.js"
        data-resources-url="https://widgets.leadconnectorhq.com/chat-widget/loader.js"
        data-widget-id="69fb18245b108d5fa5ecd22a"
        data-source="WEB_USER"
        strategy="afterInteractive"
      />
    </main>
  )
}
