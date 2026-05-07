"use client"

import { useEffect, useState } from "react"
import { Users, Clock, TrendingUp } from "lucide-react"

export function ClientCounter() {
  const [clients, setClients] = useState(0)
  const [days, setDays] = useState(0)
  const [growth, setGrowth] = useState(0)

  useEffect(() => {
    const clientInterval = setInterval(() => {
      setClients((prev) => (prev < 47 ? prev + 1 : prev))
    }, 50)

    const daysInterval = setInterval(() => {
      setDays((prev) => (prev < 60 ? prev + 1 : prev))
    }, 50)

    const growthInterval = setInterval(() => {
      setGrowth((prev) => (prev < 10 ? prev + 0.1 : prev))
    }, 50)

    return () => {
      clearInterval(clientInterval)
      clearInterval(daysInterval)
      clearInterval(growthInterval)
    }
  }, [])

  return (
    <section className="bg-zinc-900 py-10">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="flex items-center justify-center">
            <Users className="text-primary h-10 w-10 mr-4" />
            <div>
              <p className="font-teko text-4xl text-white">{clients}+</p>
              <p className="text-zinc-400">Businesses Automated</p>
            </div>
          </div>
          <div className="flex items-center justify-center">
            <Clock className="text-primary h-10 w-10 mr-4" />
            <div>
              <p className="font-teko text-4xl text-white">{days}</p>
              <p className="text-zinc-400">Days to Results</p>
            </div>
          </div>
          <div className="flex items-center justify-center">
            <TrendingUp className="text-primary h-10 w-10 mr-4" />
            <div>
              <p className="font-teko text-4xl text-white">{growth.toFixed(1)}%+</p>
              <p className="text-zinc-400">Average Sales Growth</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
