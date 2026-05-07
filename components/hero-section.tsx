"use client"

import { Button } from "@/components/ui/button"
import { CheckCircle, ArrowRight } from "lucide-react"
import { TypeAnimation } from "react-type-animation"
import Link from "next/link"

const heroBullets = [
  "Private AI assistant setup for your business",
  "Workflow automation for daily operations",
  "Hands-on rollout support for your team",
]

export function HeroSection() {
  return (
    <section className="bg-black text-white py-20 md:py-32 min-h-[70vh] flex items-center">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="font-teko text-5xl md:text-7xl uppercase mb-4">
            Automate Your{" "}
            <TypeAnimation
              sequence={["Business", 2000, "Workflows", 2000, "Sales", 2000, "Logo", 2000]}
              wrapper="span"
              speed={50}
              className="text-primary"
              repeat={Number.POSITIVE_INFINITY}
              cursor={true}
            />
          </h1>
          <h2 className="font-teko text-5xl md:text-7xl uppercase mb-12">Amplify Your Results.</h2>

          <div className="flex flex-col items-start gap-4 mb-12 w-fit mx-auto">
            {heroBullets.map((text, idx) => (
              <div className="flex items-center text-left" key={idx}>
                <CheckCircle className="text-primary mr-3 h-6 w-6 flex-shrink-0" />
                <p className="text-lg text-zinc-300">{text}</p>
              </div>
            ))}
          </div>

          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link href="https://cal.com/aiguy/discovery" target="_blank" rel="noopener noreferrer">
              <Button
                size="lg"
                className="bg-primary hover:bg-primary/90 text-black font-teko text-xl w-full sm:w-auto"
              >
                BOOK A FREE AI CONSULTATION
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
