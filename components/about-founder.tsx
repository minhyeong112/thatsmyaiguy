import Image from "next/image"
import { Shield, Award, Briefcase } from "lucide-react"

export function AboutFounder() {
  return (
    <section className="py-20 bg-black" id="about-founder">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-teko text-5xl md:text-6xl text-white mb-4">ABOUT THE FOUNDER</h2>
          <div className="h-1 w-20 bg-primary mx-auto"></div>
        </div>

        <div className="flex flex-col md:flex-row items-center gap-12">
          <div className="md:w-80">
            <div className="relative w-80">
              <div className="absolute inset-0 border-2 border-primary rounded-lg transform translate-x-4 translate-y-4 w-auto"></div>
              <div className="relative bg-zinc-900 p-6 rounded-lg border border-zinc-800 w-auto">
                <Image
                  src="/miguel-nieves.png"
                  alt="Miguel Nieves"
                  width={500}
                  height={600}
                  className="rounded-lg mb-6 w-auto"
                />
                <h3 className="font-teko text-3xl text-white mb-2">MIGUEL NIEVES</h3>
                <p className="text-primary font-bold mb-4">Founder & Lead AI Consultant</p>

                <div className="space-y-4">
                  <div className="flex items-center">
                    <Briefcase className="text-primary h-6 w-6 mr-3" />
                    <p className="text-zinc-300">Ex-Microsoft AI Engineer</p>
                  </div>
                  <div className="flex items-center">
                    <Award className="text-primary h-6 w-6 mr-3" />
                    <p className="text-zinc-300">PMP Certified</p>
                  </div>
                  <div className="flex items-center">
                    <Shield className="text-primary h-6 w-6 mr-3" />
                    <p className="text-zinc-300">U.S. Marine Corps Captain</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="md:w-3/5 text-white">
            <p className="text-xl mb-6">
              Work with the AI engineer that built Microsoft's database query tool —now helping businesses automate
              workflows and boost sales by <span className="text-primary font-bold">10%+ in just 2 months</span>.
            </p>

            <p className="mb-6">
              Miguel Nieves is the founder and lead consultant of That's My AI Guy LLC, a veteran-owned firm
              specializing in AI-driven automation, workflow optimization, and machine learning solutions.
            </p>

            <p className="mb-6">
              With a background in AI engineering, technical program management, and data science, Miguel has deployed
              7,000+ lines of AI-powered Text-to-SQL code at Microsoft, enhancing enterprise query accuracy and
              usability. He also led the go-to-market strategy for UbiquityOS, securing early enterprise sales, and
              built an AI-driven CRM at White Feather Investments, increasing sales by 10% in just two months.
            </p>

            <p className="mb-6">
              Before launching That's My AI Guy LLC, Miguel served as a U.S. Marine Corps Captain, managing $236M+ in
              assets and leading AI-driven logistics and decision-making systems. He holds a PMP certification and
              advanced degrees in Operations Research as well as East Asian Studies.
            </p>

            <p className="text-primary font-bold italic">
              "That's My AI Guy LLC operates within a dynamic network of machine learning experts, software engineers,
              and automation specialists, allowing it to scale expertise as needed. We empower businesses with
              cutting-edge AI solutions that drive efficiency, innovation, and long-term success."
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
