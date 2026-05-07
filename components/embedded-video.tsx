"use client"

import { useState } from "react"
import Image from "next/image"
import { Play } from "lucide-react"

export function EmbeddedVideo() {
  const [isPlaying, setIsPlaying] = useState(false)
  const loomEmbedUrl =
    "https://www.loom.com/embed/129d875ee7e048adae966b2c300f9b8e?hide_owner=true&hide_share=true&hide_title=true&hideEmbedTopBar=true"

  const handlePlayClick = () => {
    setIsPlaying(true)
  }

  return (
    <section className="bg-black pb-10">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto relative">
          {/* Video container with aspect ratio */}
          <div className="relative pt-[56.25%] bg-zinc-900 rounded-lg overflow-hidden border border-zinc-800">
            {!isPlaying ? (
              // Custom thumbnail with play button
              <div className="absolute inset-0 cursor-pointer" onClick={handlePlayClick}>
                <Image src="/video-thumbnail.png" alt="Email Automation Video" fill className="object-cover" priority />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-20 h-20 rounded-full bg-primary/80 flex items-center justify-center transition-transform hover:scale-110">
                    <Play className="h-10 w-10 text-black" fill="black" />
                  </div>
                </div>
              </div>
            ) : (
              // Loom embed
              <iframe
                src={loomEmbedUrl}
                className="absolute top-0 left-0 w-full h-full border-0"
                frameBorder="0"
                allowFullScreen
                title="That's My AI Guy Introduction Video"
              ></iframe>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
