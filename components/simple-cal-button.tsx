"use client"

import type React from "react"
import { Button } from "@/components/ui/button"
import type { ButtonProps } from "@/components/ui/button"

interface SimpleCalButtonProps extends ButtonProps {
  calLink: string
  namespace: string
  trackingInfo?: {
    service: string
    price: string
    source: string
  }
  children: React.ReactNode
}

export function SimpleCalButton({
  calLink,
  namespace,
  trackingInfo,
  children,
  className,
  ...props
}: SimpleCalButtonProps) {
  const handleClick = () => {
    try {
      // Track the click if tracking info is provided
      if (trackingInfo) {
        fetch("/api/track-click", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(trackingInfo),
        }).catch((err) => {
          console.error("Error tracking click:", err)
          // Don't prevent the main action if tracking fails
        })
      }

      if (typeof window !== "undefined") {
        window.open(`https://cal.com/${calLink}`, "_blank", "noopener,noreferrer")
      }
    } catch (error) {
      console.error("Error in Cal button click handler:", error)
      // Fallback: try to navigate directly
      if (typeof window !== "undefined") {
        window.location.href = `https://cal.com/${calLink}`
      }
    }
  }

  return (
    <Button className={className} onClick={handleClick} {...props}>
      {children}
    </Button>
  )
}
