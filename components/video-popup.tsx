"use client"

import { useState, useEffect } from "react"
import { X } from "lucide-react"

export function VideoPopup() {
  const [isVisible, setIsVisible] = useState(true)
  const [videoSrc, setVideoSrc] = useState(
    "https://www.loom.com/embed/129d875ee7e048adae966b2c300f9b8e?hide_owner=true&hide_share=true&hide_title=true&hideEmbedTopBar=true",
  )

  const closeVideo = () => {
    setIsVisible(false)

    // Reset the video by updating the src after a short delay
    setTimeout(() => {
      setVideoSrc("")
      setTimeout(() => {
        setVideoSrc(
          "https://www.loom.com/embed/129d875ee7e048adae966b2c300f9b8e?hide_owner=true&hide_share=true&hide_title=true&hideEmbedTopBar=true",
        )
      }, 100)
    }, 300)
  }

  // Show video again when navigating between pages
  useEffect(() => {
    setIsVisible(true)
  }, [])

  if (!isVisible) return null

  return (
    <>
      {/* Overlay background */}
      <div className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center">
        {/* Video container */}
        <div className="relative w-[90%] max-w-4xl mx-auto">
          {/* Video aspect ratio container */}
          <div className="relative pt-[56.25%] bg-black rounded-lg overflow-hidden">
            <button
              onClick={closeVideo}
              className="absolute top-3 right-3 bg-red-600 hover:bg-red-700 text-white w-8 h-8 rounded-full flex items-center justify-center z-10"
              aria-label="Close video"
            >
              <X className="h-5 w-5" />
            </button>

            {videoSrc && (
              <iframe
                src={videoSrc}
                className="absolute top-0 left-0 w-full h-full border-0"
                frameBorder="0"
                allowFullScreen
                title="That's My AI Guy Introduction Video"
              ></iframe>
            )}
          </div>

          {/* Close instruction */}
          <p className="text-white text-center mt-4 text-sm">
            Click the X button to close this video and continue to the website
          </p>
        </div>
      </div>
    </>
  )
}
