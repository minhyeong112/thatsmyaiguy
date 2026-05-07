"use client"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Mail, Phone, Linkedin, MessageCircle, Calendar } from "lucide-react"
import Link from "next/link"
import { SimpleCalButton } from "@/components/simple-cal-button"
import { Teko } from "next/font/google"

const teko = Teko({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-teko",
})

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
    href: "https://wa.me/821039786800?text=Hi%2C%20I%20want%20to%20automate%20with%20AI!",
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

export default function ContactPage() {
  return (
    <div className={`${teko.variable} font-sans`}>
      <Header />
      <main>
        <section className="py-20 bg-zinc-900" id="contact">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="font-teko text-5xl md:text-6xl text-white mb-4">CONTACT US</h2>
              <div className="h-1 w-20 bg-primary mx-auto mt-6"></div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              {/* Left side - Discovery Call Section */}
              <div>
                <div className="bg-black p-6 rounded-lg border border-zinc-800 mb-8">
                  <div className="text-center">
                    <p className="text-zinc-300 mb-6">
                      30-minute call to discuss your business needs and AI automation opportunities.
                    </p>
                    <SimpleCalButton
                      calLink="aiguy/discovery"
                      namespace="discovery-call"
                      trackingInfo={{
                        service: "discovery-call",
                        price: "free",
                        source: "contact-page",
                      }}
                      className="bg-primary hover:bg-primary/90 text-black font-teko text-xl w-full"
                    >
                      BOOK A CALL
                      <Calendar className="ml-2 h-5 w-5" />
                    </SimpleCalButton>
                  </div>
                </div>

                <p className="text-zinc-400 text-center mb-4">Or reach out directly:</p>

                <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                  {contactLinks.map((link) => (
                    <Link
                      key={link.name}
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex flex-col items-center p-4 rounded-lg bg-zinc-800 hover:bg-zinc-700 transition-colors duration-200"
                    >
                      <link.icon className={`h-8 w-8 ${link.color} mb-2`} />
                      <span className="text-white">{link.name}</span>
                    </Link>
                  ))}
                </div>
              </div>

              {/* Right side - Contact Information */}
              <div>
                <h3 className="font-teko text-3xl text-white mb-6">WHY CHOOSE US</h3>
                <p className="text-zinc-400 mb-8">
                  We specialize in helping businesses leverage AI to automate workflows, improve efficiency, and boost
                  sales. Here's what sets us apart:
                </p>

                <div className="space-y-6">
                  <div className="bg-black p-6 rounded-lg border border-zinc-800">
                    <h4 className="font-teko text-2xl text-white mb-2">EXPERTISE</h4>
                    <p className="text-zinc-300">
                      Founded by an ex-Microsoft AI engineer with a background in military leadership and business
                      automation.
                    </p>
                  </div>

                  <div className="bg-black p-6 rounded-lg border border-zinc-800">
                    <h4 className="font-teko text-2xl text-white mb-2">RESULTS-FOCUSED</h4>
                    <p className="text-zinc-300">
                      Our clients see an average of 10%+ increase in sales within just 2 months of implementing our
                      solutions.
                    </p>
                  </div>

                  <div className="bg-black p-6 rounded-lg border border-zinc-800">
                    <h4 className="font-teko text-2xl text-white mb-2">PERSONALIZED APPROACH</h4>
                    <p className="text-zinc-300">
                      We limit new clients each month to ensure dedicated attention and successful implementation.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
