"use client"

import type React from "react"

import { Button } from "@/components/ui/button"
import type { ButtonProps } from "@/components/ui/button"

interface BasicCalButtonProps extends ButtonProps {
  calLink: string
  children: React.ReactNode
}

export function BasicCalButton({ calLink, children, className, ...props }: BasicCalButtonProps) {
  return (
    <Button className={className} data-cal-link={calLink} {...props}>
      {children}
    </Button>
  )
}
