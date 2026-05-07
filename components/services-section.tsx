"use client"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Check, Calendar, ArrowRight, MessageSquare, Zap, Clock, Database } from "lucide-react"
import { DynamicSpotsCounter } from "@/components/dynamic-spots-counter"
import { FridayCountdown } from "@/components/friday-countdown"
import { CalButton } from "@/components/cal-button"

export function ServicesSection() {
  return (
    <section className="py-20 bg-zinc-900" id="services">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-teko text-5xl md:text-6xl text-white mb-4">OUR SERVICES</h2>
          <div className="h-1 w-20 bg-primary mx-auto mt-6"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto mb-20">
          {/* Service 1: Brand and Website Launch */}
          <Card className="bg-black border-zinc-800 hover:border-primary transition-all duration-300 flex flex-col">
            <CardHeader className="pb-4">
              <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center mb-4">
                <Zap className="h-6 w-6 text-primary" />
              </div>
              <CardTitle className="font-teko text-3xl text-white">BRAND & WEBSITE LAUNCH</CardTitle>
              <CardDescription className="text-zinc-400">Complete branding and website in just 2 days</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4 flex-grow">
              <div className="flex flex-col border-b border-zinc-800 pb-4">
                <div className="flex items-center justify-between">
                  <div>
                    <span className="text-white font-bold text-2xl">$2,997</span>
                    <span className="text-zinc-400 block text-sm">One-time setup fee</span>
                  </div>
                  <div className="text-right">
                    <span className="text-white font-bold opacity-0">$0</span>
                    <span className="text-zinc-400 block text-sm opacity-0">monthly maintenance</span>
                  </div>
                </div>
              </div>

              <div className="flex items-center gap-2">
                <Clock className="text-primary h-5 w-5 flex-shrink-0" />
                <p className="text-zinc-300">2-day turnaround</p>
              </div>

              <div className="space-y-2">
                <div className="flex items-start">
                  <Check className="text-primary mr-2 h-5 w-5 flex-shrink-0 mt-1" />
                  <p className="text-zinc-300">Professional logo & branding</p>
                </div>
                <div className="flex items-start">
                  <Check className="text-primary mr-2 h-5 w-5 flex-shrink-0 mt-1" />
                  <p className="text-zinc-300">Responsive website design</p>
                </div>
                <div className="flex items-start">
                  <Check className="text-primary mr-2 h-5 w-5 flex-shrink-0 mt-1" />
                  <p className="text-zinc-300">Calendar integration</p>
                </div>
                <div className="flex items-start">
                  <Check className="text-primary mr-2 h-5 w-5 flex-shrink-0 mt-1" />
                  <p className="text-zinc-300">Stripe payment integration</p>
                </div>
                <div className="flex items-start">
                  <Check className="text-primary mr-2 h-5 w-5 flex-shrink-0 mt-1" />
                  <p className="text-zinc-300">Domain setup assistance</p>
                </div>
              </div>
            </CardContent>
            <CardFooter>
              <CalButton
                calLink="aiguy/branding-website-kickoff"
                namespace="branding-website"
                className="w-full bg-primary hover:bg-primary/90 text-black font-teko text-xl"
              >
                SCHEDULE KICK-OFF CALL
                <ArrowRight className="ml-2 h-5 w-5" />
              </CalButton>
            </CardFooter>
          </Card>

          {/* Service 2: Custom Chat Bot Launch */}
          <Card className="bg-black border-zinc-800 hover:border-primary transition-all duration-300 flex flex-col">
            <CardHeader className="pb-4">
              <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center mb-4">
                <MessageSquare className="h-6 w-6 text-primary" />
              </div>
              <CardTitle className="font-teko text-3xl text-white">CUSTOM CHAT BOT</CardTitle>
              <CardDescription className="text-zinc-400">AI-powered customer service chatbot in 1 week</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4 flex-grow">
              <div className="flex flex-col border-b border-zinc-800 pb-4">
                <div className="flex items-center justify-between">
                  <div>
                    <span className="text-white font-bold text-2xl">$3,997</span>
                    <span className="text-zinc-400 block text-sm">One-time setup fee</span>
                  </div>
                  <div className="text-right">
                    <span className="text-white font-bold">$997</span>
                    <span className="text-zinc-400 block text-sm">monthly maintenance (optional)</span>
                  </div>
                </div>
              </div>

              <div className="flex items-center gap-2">
                <Clock className="text-primary h-5 w-5 flex-shrink-0" />
                <p className="text-zinc-300">1-week setup</p>
              </div>

              <div className="space-y-2">
                <div className="flex items-start">
                  <Check className="text-primary mr-2 h-5 w-5 flex-shrink-0 mt-1" />
                  <p className="text-zinc-300">Custom AI chatbot development</p>
                </div>
                <div className="flex items-start">
                  <Check className="text-primary mr-2 h-5 w-5 flex-shrink-0 mt-1" />
                  <p className="text-zinc-300">Training on your business data</p>
                </div>
                <div className="flex items-start">
                  <Check className="text-primary mr-2 h-5 w-5 flex-shrink-0 mt-1" />
                  <p className="text-zinc-300">Website & messaging integration</p>
                </div>
                <div className="flex items-start">
                  <Check className="text-primary mr-2 h-5 w-5 flex-shrink-0 mt-1" />
                  <p className="text-zinc-300">First month of support included</p>
                </div>
                <div className="flex items-start">
                  <Check className="text-primary mr-2 h-5 w-5 flex-shrink-0 mt-1" />
                  <p className="text-zinc-300">Analytics dashboard</p>
                </div>
              </div>
            </CardContent>
            <CardFooter>
              <CalButton
                calLink="aiguy/chatbot-strategy"
                namespace="chatbot-strategy"
                className="w-full bg-primary hover:bg-primary/90 text-black font-teko text-xl"
              >
                SCHEDULE FREE STRATEGY CALL
                <Calendar className="ml-2 h-5 w-5" />
              </CalButton>
            </CardFooter>
          </Card>

          {/* Service 3: CRM Setup and Management */}
          <Card className="bg-black border-zinc-800 hover:border-primary transition-all duration-300 flex flex-col">
            <CardHeader className="pb-4">
              <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center mb-4">
                <Database className="h-6 w-6 text-primary" />
              </div>
              <CardTitle className="font-teko text-3xl text-white">CRM SETUP & MANAGEMENT</CardTitle>
              <CardDescription className="text-zinc-400">
                Automated customer relationship management system
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4 flex-grow">
              <div className="flex flex-col border-b border-zinc-800 pb-4">
                <div className="flex items-center justify-between">
                  <div>
                    <span className="text-white font-bold text-2xl">$3,997</span>
                    <span className="text-zinc-400 block text-sm">One-time setup fee</span>
                  </div>
                  <div className="text-right">
                    <span className="text-white font-bold">$1,997</span>
                    <span className="text-zinc-400 block text-sm">monthly maintenance (optional)</span>
                  </div>
                </div>
              </div>

              <div className="flex items-center gap-2">
                <Clock className="text-primary h-5 w-5 flex-shrink-0" />
                <p className="text-zinc-300">2-week setup</p>
              </div>

              <div className="space-y-2">
                <div className="flex items-start">
                  <Check className="text-primary mr-2 h-5 w-5 flex-shrink-0 mt-1" />
                  <p className="text-zinc-300">Custom CRM implementation</p>
                </div>
                <div className="flex items-start">
                  <Check className="text-primary mr-2 h-5 w-5 flex-shrink-0 mt-1" />
                  <p className="text-zinc-300">Automated lead scoring</p>
                </div>
                <div className="flex items-start">
                  <Check className="text-primary mr-2 h-5 w-5 flex-shrink-0 mt-1" />
                  <p className="text-zinc-300">Email & communication automation</p>
                </div>
                <div className="flex items-start">
                  <Check className="text-primary mr-2 h-5 w-5 flex-shrink-0 mt-1" />
                  <p className="text-zinc-300">Sales pipeline optimization</p>
                </div>
                <div className="flex items-start">
                  <Check className="text-primary mr-2 h-5 w-5 flex-shrink-0 mt-1" />
                  <p className="text-zinc-300">Team training & documentation</p>
                </div>
              </div>
            </CardContent>
            <CardFooter>
              <CalButton
                calLink="aiguy/crm-strategy"
                namespace="crm-strategy"
                className="w-full bg-white hover:bg-gray-100 text-black font-teko text-xl border border-primary"
              >
                SCHEDULE FREE STRATEGY CALL
                <Calendar className="ml-2 h-5 w-5" />
              </CalButton>
            </CardFooter>
          </Card>
        </div>

        {/* Moved sections - after the service cards */}
        <div className="mt-12 space-y-8">
          <div className="bg-black p-6 rounded-lg border border-green-800 max-w-4xl mx-auto">
            <p className="text-center text-white">
              <span className="text-green-500 font-bold">SPECIAL OFFER:</span> Get a $1,000 discount when you combine
              any two services!
            </p>
          </div>

          <div className="bg-black p-6 rounded-lg border border-red-900 max-w-4xl mx-auto">
            <div className="text-center mb-4">
              <p className="text-white text-lg mb-2">
                <span className="text-red-500 font-bold">LIMITED AVAILABILITY:</span> We only take 3 new clients per
                month - <DynamicSpotsCounter />
              </p>
              <FridayCountdown />
            </div>
          </div>
        </div>

        <div className="mt-16 text-center">
          <p className="text-zinc-400 mb-6">
            Not sure which service is right for you? Schedule a free 30-minute discovery call to discuss your needs.
          </p>
          <CalButton
            calLink="aiguy/discovery"
            namespace="discovery"
            className="bg-zinc-800 hover:bg-zinc-700 text-white font-teko text-xl"
          >
            FREE DISCOVERY CALL
            <Calendar className="ml-2 h-5 w-5" />
          </CalButton>
        </div>
      </div>
    </section>
  )
}
