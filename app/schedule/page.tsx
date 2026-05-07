"use client"

import { useEffect, useState } from "react"
import { useSearchParams } from "next/navigation"
import { Teko } from "next/font/google"
import { Header } from "@/components/header"
import { SimpleCalButton } from "@/components/simple-cal-button"
import { Calendar } from "lucide-react"

const teko = Teko({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-teko",
})

export default function SchedulePage() {
  const searchParams = useSearchParams()
  const [isLoading, setIsLoading] = useState(true)

  // Get user data from URL params
  const firstName = searchParams.get("firstName") || ""
  const lastName = searchParams.get("lastName") || ""
  const email = searchParams.get("email") || ""

  useEffect(() => {
    // Simulate loading
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 1000)

    return () => clearTimeout(timer)
  }, [])

  return (
    <main className={`${teko.variable} font-sans min-h-screen bg-zinc-900`}>
      <Header />

      <div className="container mx-auto px-4 py-8">
        <div className="max-w-3xl mx-auto bg-zinc-900 rounded-lg overflow-hidden border border-zinc-800">
          {/* Header with branding */}
          <div className="p-4 border-b border-zinc-800 bg-black">
            <div className="flex items-center">
              <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center mr-3">
                <span className="font-teko text-black text-lg font-bold">AI</span>
              </div>
              <h1 className="font-teko text-2xl text-white">SCHEDULE YOUR CONSULTATION</h1>
            </div>
          </div>

          {/* Loading state */}
          {isLoading ? (
            <div className="h-[400px] bg-zinc-900 flex items-center justify-center">
              <div className="flex flex-col items-center">
                <div className="w-12 h-12 border-4 border-primary/30 border-t-primary rounded-full animate-spin mb-4"></div>
                <p className="text-zinc-400">Loading calendar options...</p>
              </div>
            </div>
          ) : (
            <div className="p-8 bg-zinc-900 text-center">
              <h2 className="font-teko text-3xl text-white mb-6">SELECT A TIME FOR YOUR DISCOVERY CALL</h2>
              <p className="text-zinc-300 mb-8">
                Click the button below to open our embedded calendar and select a time that works best for you.
              </p>

              <div className="flex justify-center">
                <SimpleCalButton
                  calLink="aiguy/discovery"
                  namespace="ai-strategy-call"
                  trackingInfo={{
                    service: "discovery-call",
                    price: "free",
                    source: "schedule-page",
                  }}
                  className="bg-primary hover:bg-primary/90 text-black font-teko text-xl px-8 py-6"
                >
                  SCHEDULE YOUR CALL
                </SimpleCalButton>
              </div>

              <div className="mt-8 p-4 bg-black rounded-lg border border-zinc-800">
                <div className="flex items-center justify-center mb-4">
                  <Calendar className="text-primary h-6 w-6 mr-2" />
                  <p className="text-zinc-300">15-minute discovery call</p>
                </div>
                <p className="text-zinc-400 text-sm">
                  This call will help us understand your needs and determine how we can best assist you with AI
                  automation.
                </p>
              </div>
            </div>
          )}

          {/* Footer with branding */}
          <div className="p-4 border-t border-zinc-800 bg-black">
            <div className="flex items-center justify-between">
              <p className="text-zinc-400 text-sm">Select a time that works for you</p>
              <p className="text-primary font-teko text-lg">THAT'S MY AI GUY</p>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}
