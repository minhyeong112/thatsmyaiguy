"use client"

import type React from "react"
import { Button } from "@/components/ui/button"
import type { ButtonProps } from "@/components/ui/button"

interface SimpleCalLinkProps extends ButtonProps {
  calLink: string
  children: React.ReactNode
}

export function SimpleCalLink({ calLink, children, className, ...props }: SimpleCalLinkProps) {
  const handleClick = () => {
    // Open Cal.com link directly in a new tab
    window.open(`https://cal.com/${calLink}`, "_blank")
  }

  return (
    <Button className={className} onClick={handleClick} {...props}>
      {children}
    </Button>
  )
}
