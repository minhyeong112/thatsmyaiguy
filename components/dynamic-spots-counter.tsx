"use client"

import { useEffect, useState } from "react"

export function DynamicSpotsCounter() {
  const [spotsLeft, setSpotsLeft] = useState(3)
  const [currentMonth, setCurrentMonth] = useState("")
  const [currentYear, setCurrentYear] = useState("")

  useEffect(() => {
    // Get current date
    const now = new Date()
    const currentDay = now.getDate()

    // Format month name
    const monthNames = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ]
    setCurrentMonth(monthNames[now.getMonth()])
    setCurrentYear(now.getFullYear().toString())

    // Calculate which week of the month we're in (roughly)
    const weekOfMonth = Math.ceil(currentDay / 7)

    // Set spots based on week of month
    if (weekOfMonth === 1) {
      setSpotsLeft(3)
    } else if (weekOfMonth === 2) {
      setSpotsLeft(2)
    } else {
      setSpotsLeft(1)
    }
  }, [])

  return (
    <span className="text-primary font-bold">
      only {spotsLeft} {spotsLeft === 1 ? "spot" : "spots"} left for {currentMonth} {currentYear}
    </span>
  )
}
