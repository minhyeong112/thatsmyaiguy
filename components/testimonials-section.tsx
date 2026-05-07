"use client"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ChevronLeft, ChevronRight, Quote } from "lucide-react"
import { DynamicSpotsCounter } from "@/components/dynamic-spots-counter"

const testimonials = [
  {
    name: "Sarah J.",
    position: "CEO, Technology Sector",
    quote:
      "Working with Miguel transformed our business. His Brand & Website Launch service had us up and running in just 2 days, and the AI chatbot he implemented increased our sales by 15% in just 6 weeks. Worth every penny!",
    results: "15% sales increase in 6 weeks",
  },
  {
    name: "David C.",
    position: "Founder, Financial Services",
    quote:
      "The CRM setup and management service has been a game-changer for our business. Our lead conversion is up 22% and our team saves 20+ hours per week. Miguel's expertise in AI automation is unmatched.",
    results: "22% increase in lead conversion",
  },
  {
    name: "Jennifer M.",
    position: "Marketing Director",
    quote:
      "We combined the Brand & Website Launch with the Custom Chat Bot service and saved $1,000. The ROI has been 4x our investment already. The website looks professional and the chatbot handles 80% of customer inquiries automatically.",
    results: "400% ROI in first month",
  },
  {
    name: "Michael T.",
    position: "Operations Manager",
    quote:
      "Miguel's custom AI automation consulting helped us identify and automate our inventory management process. The solution he implemented saved us $50K in the first quarter alone. Highly recommended!",
    results: "$50K cost savings in first quarter",
  },
  {
    name: "Anonymous Client",
    position: "Private Individual",
    quote:
      "Miguel built a custom AI tool that automatically takes down harassing posts about me on social media. My stress levels have dropped dramatically, and I can finally focus on my business again. I can't thank Miguel enough for giving me my peace of mind back.",
    results: "90% reduction in online harassment",
  },
]

export function TestimonialsSection() {
  const [currentIndex, setCurrentIndex] = useState(0)

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 2 >= testimonials.length ? 0 : prevIndex + 2))
  }

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 2 < 0 ? Math.max(0, testimonials.length - 2) : prevIndex - 2))
  }

  const visibleTestimonials = testimonials.slice(currentIndex, currentIndex + 2)

  return (
    <section className="py-20 bg-black">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-teko text-5xl md:text-6xl text-white mb-4">CLIENT SUCCESS STORIES</h2>
          <p className="text-zinc-400 max-w-2xl mx-auto">
            Don't just take our word for it. Here's what our clients are saying about working with us:
          </p>
          <div className="h-1 w-20 bg-primary mx-auto mt-6"></div>
        </div>

        <div className="relative">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {visibleTestimonials.map((testimonial, index) => (
              <Card
                key={index}
                className="bg-zinc-900 border-zinc-800 hover:border-primary transition-all duration-300"
              >
                <CardContent className="p-8">
                  <div className="flex flex-col h-full">
                    <div className="mb-6">
                      <Quote className="text-primary h-12 w-12 opacity-50" />
                    </div>

                    <p className="text-white text-lg italic mb-8">"{testimonial.quote}"</p>

                    <div className="mt-auto">
                      <div>
                        <p className="text-white font-bold">{testimonial.name}</p>
                        <p className="text-zinc-400">{testimonial.position}</p>
                      </div>

                      <div className="mt-4 bg-black p-3 rounded-lg">
                        <p className="text-primary font-bold">Results: {testimonial.results}</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="flex justify-center mt-8 gap-4">
            <Button
              variant="outline"
              size="icon"
              className="rounded-full border-primary text-primary hover:bg-primary/10"
              onClick={prevSlide}
            >
              <ChevronLeft className="h-5 w-5" />
            </Button>
            <Button
              variant="outline"
              size="icon"
              className="rounded-full border-primary text-primary hover:bg-primary/10"
              onClick={nextSlide}
            >
              <ChevronRight className="h-5 w-5" />
            </Button>
          </div>
        </div>

        <div className="mt-12 max-w-2xl mx-auto bg-zinc-900 p-6 rounded-lg border border-red-900">
          <p className="text-center text-white mb-4">
            <span className="text-red-500 font-bold">LIMITED AVAILABILITY ALERT:</span> We only accept{" "}
            <DynamicSpotsCounter />. Apply now to secure your spot before they're gone.
          </p>
          <div className="flex justify-center">
            <Button
              className="bg-primary hover:bg-primary/90 text-black font-teko text-xl"
              onClick={() => document.getElementById("application-form")?.scrollIntoView({ behavior: "smooth" })}
            >
              APPLY FOR A SPOT NOW
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
