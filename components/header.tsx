"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Mail, Phone, Linkedin, MessageCircle } from "lucide-react"
import { Menu, X } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

const contactLinks = [
  {
    name: "Email",
    icon: Mail,
    href: "mailto:miguel@thatsmyaiguy.com?subject=AI%20Automation%20Inquiry&body=Hi%2C%20I%20want%20to%20automate%20with%20AI!",
    color: "text-red-500",
  },
  {
    name: "WhatsApp",
    icon: Phone,
    href: "https://wa.me/821082546224?text=Hi%2C%20I%20want%20to%20automate%20with%20AI!",
    color: "text-green-500",
  },
  {
    name: "LinkedIn",
    icon: Linkedin,
    href: "https://www.linkedin.com/in/m6n6?messageRequest=Hi%2C%20I%20want%20to%20automate%20with%20AI!",
    color: "text-blue-500",
  },
  {
    name: "Telegram",
    icon: MessageCircle,
    href: "https://t.me/mig112?start=Hi%2C%20I%20want%20to%20automate%20with%20AI!",
    color: "text-sky-500",
  },
]

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    if (element) {
      const headerHeight = document.querySelector("header")?.offsetHeight || 0
      const elementPosition = element.getBoundingClientRect().top + window.pageYOffset
      window.scrollTo({
        top: elementPosition - headerHeight,
        behavior: "smooth",
      })
      if (mobileMenuOpen) {
        setMobileMenuOpen(false)
      }
    } else {
      // If element is not on the current page, navigate to home and then scroll
      window.location.href = `/#${id}`
    }
  }

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    })
    if (mobileMenuOpen) {
      setMobileMenuOpen(false)
    }
  }

  return (
    <header className="bg-black border-b border-zinc-800 sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <button onClick={scrollToTop} className="flex items-center hover:opacity-80 transition-opacity">
            <Image src="/logo-simplified.png" alt="That's My AI Guy Logo" width={40} height={40} />
            <span className="font-teko text-2xl ml-2 text-primary">THAT'S MY AI GUY</span>
          </button>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-4">
            <Button
              variant="ghost"
              className="text-white hover:text-primary hover:bg-transparent"
              onClick={() => scrollToSection("about-founder")}
            >
              About the Founder
            </Button>
            <Button
              variant="ghost"
              className="text-white hover:text-primary hover:bg-transparent"
              onClick={() => scrollToSection("testimonials")}
            >
              Testimonials
            </Button>
            <Button
              variant="ghost"
              className="text-white hover:text-primary hover:bg-transparent"
              onClick={() => scrollToSection("faq")}
            >
              FAQ
            </Button>
            <Link href="/contact">
              <Button variant="ghost" className="bg-primary hover:bg-primary/90 text-black font-teko">
                CONTACT
              </Button>
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="text-white hover:bg-zinc-800"
            >
              {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>

        {/* Mobile menu */}
        {mobileMenuOpen && (
          <div className="md:hidden py-4 border-t border-zinc-800">
            <div className="space-y-2">
              <Button
                variant="ghost"
                className="w-full text-left justify-start text-white hover:text-primary hover:bg-zinc-800"
                onClick={() => scrollToSection("about-founder")}
              >
                About the Founder
              </Button>
              <Button
                variant="ghost"
                className="w-full text-left justify-start text-white hover:text-primary hover:bg-zinc-800"
                onClick={() => scrollToSection("testimonials")}
              >
                Testimonials
              </Button>
              <Button
                variant="ghost"
                className="w-full text-left justify-start text-white hover:text-primary hover:bg-zinc-800"
                onClick={() => scrollToSection("faq")}
              >
                FAQ
              </Button>
            </div>
            <div className="grid grid-cols-2 gap-4 mt-4">
              {contactLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex flex-col items-center p-2 rounded-lg hover:bg-zinc-800 transition-colors duration-200"
                >
                  <link.icon className={`h-6 w-6 ${link.color} mb-1`} />
                  <span className="text-xs text-zinc-400">{link.name}</span>
                </Link>
              ))}
            </div>
            <div className="flex justify-center mt-4">
              <Link href="/contact" className="w-full">
                <Button className="w-full bg-primary hover:bg-primary/90 text-black font-teko">CONTACT</Button>
              </Link>
            </div>
          </div>
        )}
      </div>
    </header>
  )
}
