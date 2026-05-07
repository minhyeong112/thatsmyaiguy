"use client"

import { useEffect, useState } from "react"
import Link from "next/link"
import { Mail, Phone, Linkedin, MessageCircle } from "lucide-react"

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

export function Footer() {
  const [currentYear, setCurrentYear] = useState(2025)

  useEffect(() => {
    setCurrentYear(new Date().getFullYear())
  }, [])

  return (
    <footer className="bg-black py-8 border-t border-zinc-800">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <p className="text-zinc-400 text-sm">&copy; {currentYear} That's My AI Guy LLC. All rights reserved.</p>
          </div>

          <div className="flex space-x-4">
            {contactLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className={`${link.color} hover:text-white transition-colors duration-200`}
                title={link.name}
              >
                <link.icon className="h-5 w-5" />
                <span className="sr-only">{link.name}</span>
              </Link>
            ))}
          </div>
        </div>

        {/* Legal Links */}
        <div className="mt-6 text-center">
          <Link href="/privacy" className="text-zinc-400 hover:text-primary text-sm mx-2 transition-colors">
            Privacy Policy
          </Link>
          <span className="text-zinc-600">|</span>
          <Link href="/terms" className="text-zinc-400 hover:text-primary text-sm mx-2 transition-colors">
            Terms of Service
          </Link>
        </div>

        <div className="mt-6 text-center text-sm text-zinc-400 space-y-1">
          <p>30 N Gould St Ste R, Sheridan, Wyoming, 82801</p>
          <p>
            <a href="mailto:miguel@thatsmyaiguy.com" className="hover:text-primary transition-colors">
              miguel@thatsmyaiguy.com
            </a>
            <span className="mx-2 text-zinc-600">|</span>
            <a href="tel:+16076085715" className="hover:text-primary transition-colors">
              +1 607 608 5715
            </a>
          </p>
        </div>
      </div>
    </footer>
  )
}
