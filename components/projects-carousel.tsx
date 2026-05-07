"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { ChevronLeft, ChevronRight } from "lucide-react"
import Image from "next/image"

const testimonialImages = [
  "/images/testimonial-1.jpeg",
  "/images/testimonial-2.jpeg",
  "/images/testimonial-3.jpeg",
  "/images/testimonial-4.jpeg",
  "/images/testimonial-5.jpeg",
  "/images/testimonial-6.jpeg",
]

export function TestimonialsCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonialImages.length)
    }, 5000)

    return () => clearInterval(interval)
  }, [])

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonialImages.length)
  }

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonialImages.length) % testimonialImages.length)
  }

  return (
    <section className="py-20 bg-gradient-to-b from-zinc-900 to-black" id="testimonials">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <div className="flex flex-col items-center justify-center mb-4">
            <Image
              src="/testimonials-logo.png"
              alt="Testimonials"
              width={96}
              height={96}
              className="animate-bounce mb-4"
            />
            <h2 className="font-teko text-5xl md:text-6xl text-white tracking-tight">TESTIMONIALS</h2>
          </div>
          <p className="text-zinc-300 max-w-2xl mx-auto">
            Don&apos;t just take our word for it. Here&apos;s what our clients are saying about working with us:
          </p>
          <div className="h-1 w-20 bg-primary mx-auto mt-6"></div>
        </div>

        <div className="relative max-w-4xl mx-auto">
          <div className="relative aspect-[16/9] rounded-2xl overflow-hidden bg-zinc-900 border border-zinc-800">
            <Image
              src={testimonialImages[currentIndex] || "/placeholder.svg"}
              alt={`Testimonial ${currentIndex + 1}`}
              fill
              className="object-contain"
              priority={currentIndex === 0}
            />
          </div>

          <div className="flex justify-center mt-8 gap-4">
            <Button
              variant="outline"
              size="icon"
              className="rounded-full border-primary text-primary hover:bg-primary/10 bg-transparent"
              onClick={prevSlide}
            >
              <ChevronLeft className="h-5 w-5" />
            </Button>
            <Button
              variant="outline"
              size="icon"
              className="rounded-full border-primary text-primary hover:bg-primary/10 bg-transparent"
              onClick={nextSlide}
            >
              <ChevronRight className="h-5 w-5" />
            </Button>
          </div>

          <div className="flex justify-center mt-4 gap-2">
            {testimonialImages.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`h-2 rounded-full transition-all duration-300 ${
                  index === currentIndex ? "w-8 bg-primary" : "w-2 bg-zinc-600 hover:bg-zinc-500"
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
