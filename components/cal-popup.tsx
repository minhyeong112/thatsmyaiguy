"use client"

import { X } from "lucide-react"
import { Button } from "@/components/ui/button"

interface CalPopupProps {
  isOpen: boolean
  onClose: () => void
  firstName?: string
  lastName?: string
  email?: string
}

export function CalPopup({ isOpen, onClose, firstName, lastName, email }: CalPopupProps) {
  if (!isOpen) return null

  const handleScheduleClick = () => {
    const calLink = "aiguy/discovery"
    window.open(`https://cal.com/${calLink}`, "_blank", "noopener,noreferrer")
    onClose() // Close the popup after opening the link
  }

  return (
    <>
      {/* Overlay background */}
      <div className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center">
        {/* Calendar container */}
        <div className="relative w-[95%] max-w-md mx-auto bg-zinc-900 rounded-lg overflow-hidden border border-zinc-800">
          {/* Header with branding */}
          <div className="flex justify-between items-center p-4 border-b border-zinc-800 bg-black">
            <div className="flex items-center">
              <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center mr-3">
                <span className="font-teko text-black text-lg font-bold">AI</span>
              </div>
              <h3 className="font-teko text-xl text-white">SCHEDULE CONSULTATION</h3>
            </div>
            <Button
              onClick={onClose}
              variant="ghost"
              size="icon"
              className="text-zinc-400 hover:text-white hover:bg-zinc-800"
              aria-label="Close calendar"
            >
              <X className="h-5 w-5" />
            </Button>
          </div>

          <div className="p-8 text-center">
            <div className="mb-6">
              <h4 className="font-teko text-2xl text-white mb-2">Ready to Transform Your Business?</h4>
              <p className="text-zinc-400">Click below to schedule your AI strategy consultation</p>
            </div>

            <Button
              onClick={handleScheduleClick}
              className="w-full bg-primary hover:bg-primary/90 text-black font-teko text-lg py-6"
            >
              SCHEDULE NOW
            </Button>
          </div>

          {/* Footer with branding */}
          <div className="p-4 border-t border-zinc-800 bg-black">
            <div className="flex items-center justify-center">
              <p className="text-primary font-teko text-lg">THAT'S MY AI GUY</p>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
