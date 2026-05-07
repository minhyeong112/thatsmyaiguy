"use client"

import { useEffect, useState } from "react"

export function FridayCountdown() {
  const [days, setDays] = useState(0)
  const [hours, setHours] = useState(0)
  const [minutes, setMinutes] = useState(0)
  const [seconds, setSeconds] = useState(0)
  const [weekEndingText, setWeekEndingText] = useState("")

  useEffect(() => {
    const calculateTimeUntilFriday = () => {
      const now = new Date()

      // Get the day of the week (0 = Sunday, 1 = Monday, ..., 5 = Friday)
      const dayOfWeek = now.getDay()

      // Calculate days until next Friday (5 - current day)
      // If today is Friday, we want to show time until end of day (5 PM)
      let daysUntilFriday
      const targetHour = 17 // 5 PM

      if (dayOfWeek === 5) {
        // It's Friday
        if (now.getHours() >= targetHour) {
          // After 5 PM on Friday, show countdown to next Friday
          daysUntilFriday = 7
        } else {
          // Before 5 PM on Friday, show countdown to 5 PM today
          daysUntilFriday = 0
        }
      } else if (dayOfWeek === 6) {
        // It's Saturday, next Friday is 6 days away
        daysUntilFriday = 6
      } else {
        // It's Sunday through Thursday
        daysUntilFriday = 5 - dayOfWeek
      }

      // Create target date (next Friday at 5 PM)
      const targetDate = new Date(now)
      targetDate.setDate(now.getDate() + daysUntilFriday)
      targetDate.setHours(targetHour, 0, 0, 0)

      // Format the week ending date
      const options: Intl.DateTimeFormatOptions = {
        weekday: "long",
        month: "long",
        day: "numeric",
        year: "numeric",
      }
      setWeekEndingText(targetDate.toLocaleDateString("en-US", options))

      // Calculate time difference
      const timeDiff = targetDate.getTime() - now.getTime()

      // Convert to days, hours, minutes, seconds
      const days = Math.floor(timeDiff / (1000 * 60 * 60 * 24))
      const hours = Math.floor((timeDiff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
      const minutes = Math.floor((timeDiff % (1000 * 60 * 60)) / (1000 * 60))
      const seconds = Math.floor((timeDiff % (1000 * 60)) / 1000)

      return { days, hours, minutes, seconds }
    }

    // Initial calculation
    const { days, hours, minutes, seconds } = calculateTimeUntilFriday()
    setDays(days)
    setHours(hours)
    setMinutes(minutes)
    setSeconds(seconds)

    // Update every second
    const timer = setInterval(() => {
      const { days, hours, minutes, seconds } = calculateTimeUntilFriday()
      setDays(days)
      setHours(hours)
      setMinutes(minutes)
      setSeconds(seconds)
    }, 1000)

    return () => clearInterval(timer)
  }, [])

  return (
    <div className="text-center">
      <p className="text-white mb-2">Weekly Application Window Closes {weekEndingText} at 5 PM:</p>
      <div className="flex justify-center gap-4">
        <div className="bg-black p-3 rounded-lg w-20">
          <div className="font-teko text-4xl text-primary">{days}</div>
          <div className="text-xs text-zinc-400">DAYS</div>
        </div>
        <div className="bg-black p-3 rounded-lg w-20">
          <div className="font-teko text-4xl text-primary">{hours}</div>
          <div className="text-xs text-zinc-400">HOURS</div>
        </div>
        <div className="bg-black p-3 rounded-lg w-20">
          <div className="font-teko text-4xl text-primary">{minutes}</div>
          <div className="text-xs text-zinc-400">MINUTES</div>
        </div>
        <div className="bg-black p-3 rounded-lg w-20">
          <div className="font-teko text-4xl text-primary">{seconds}</div>
          <div className="text-xs text-zinc-400">SECONDS</div>
        </div>
      </div>
    </div>
  )
}
