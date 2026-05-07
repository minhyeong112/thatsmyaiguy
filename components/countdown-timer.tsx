"use client"

import { useEffect, useState } from "react"

export function CountdownTimer() {
  const [days, setDays] = useState(5)
  const [hours, setHours] = useState(23)
  const [minutes, setMinutes] = useState(59)
  const [seconds, setSeconds] = useState(59)

  useEffect(() => {
    const timer = setInterval(() => {
      if (seconds > 0) {
        setSeconds(seconds - 1)
      } else {
        if (minutes > 0) {
          setMinutes(minutes - 1)
          setSeconds(59)
        } else {
          if (hours > 0) {
            setHours(hours - 1)
            setMinutes(59)
            setSeconds(59)
          } else {
            if (days > 0) {
              setDays(days - 1)
              setHours(23)
              setMinutes(59)
              setSeconds(59)
            } else {
              clearInterval(timer)
            }
          }
        }
      }
    }, 1000)

    return () => clearInterval(timer)
  }, [days, hours, minutes, seconds])

  return (
    <div className="text-center">
      <p className="text-white mb-2">Application Window Closes In:</p>
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
