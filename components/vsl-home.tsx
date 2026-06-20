"use client"

import Image from "next/image"
import { useState, type ReactNode } from "react"

const testimonialImages = [
  "/images/testimonial-1.jpeg",
  "/images/testimonial-2.jpeg",
  "/images/testimonial-3.jpeg",
  "/images/testimonial-4.jpeg",
  "/images/testimonial-5.jpeg",
  "/images/testimonial-6.jpeg",
]

const faqItems = [
  {
    question: "What is your main offer now?",
    answer: "Private AI assistant setup plus practical implementation support for founders and small teams.",
  },
  {
    question: "How quickly can we get started?",
    answer: "Most teams can begin in days once we align on your workflow priorities, stack, and the first use cases to automate.",
  },
  {
    question: "Do we need technical experience?",
    answer: "No. Setup and rollout are handled for you, with practical guidance for day-to-day use.",
  },
  {
    question: "What workflows can you automate?",
    answer:
      "Lead follow-up, CRM updates, repetitive admin tasks, internal knowledge access, and client communication workflows are common starting points.",
  },
  {
    question: "Will this replace our team?",
    answer:
      "No. The goal is to remove repetitive work so your team can focus on better decisions, relationships, and execution.",
  },
  {
    question: "What happens after setup?",
    answer:
      "We run a practical rollout, track what is and is not being used, and iterate so the assistant improves over time instead of getting abandoned.",
  },
  {
    question: "Can this work with our existing tools?",
    answer:
      "Yes. We design around your current stack whenever possible and prioritize the fastest integrations that create clear operational gains.",
  },
  {
    question: "What is the next step?",
    answer: "Book a free AI consultation and Miguel will map your fastest path to a working private AI assistant.",
  },
]

function SectionKicker({ children, dark = false }: { children: ReactNode; dark?: boolean }) {
  return <p className={`mb-3 text-xs font-black uppercase tracking-[0.24em] ${dark ? "text-yellow-700" : "text-[#fec934]"}`}>{children}</p>
}

function DisplayTitle({ children, dark = false }: { children: ReactNode; dark?: boolean }) {
  return (
    <h2
      className={`vsl-display mx-auto max-w-5xl text-balance text-center text-[clamp(3.1rem,8vw,7.15rem)] font-normal uppercase leading-[0.88] tracking-[-0.035em] ${
        dark ? "text-[#080806]" : "text-[#fec934]"
      }`}
    >
      {children}
    </h2>
  )
}

function BrandMark() {
  return (
    <a href="#top" aria-label="That's My AI Guy home" className="flex items-center gap-2.5 leading-none text-white">
      <span className="text-[clamp(1.55rem,2.4vw,2.15rem)] drop-shadow-[0_0_16px_rgba(254,201,52,.16)]" aria-hidden="true">
        🔧
      </span>
      <span className="grid gap-[3px] uppercase tracking-[-0.035em]">
        <span className="text-[clamp(.62rem,1.1vw,.86rem)] font-black leading-[.86] tracking-[.02em] text-white">
          That’s My
        </span>
        <span className="vsl-display text-[clamp(1.28rem,2.7vw,2.05rem)] font-normal leading-[.86] tracking-[-0.02em] text-[#fec934]">
          AI Guy
        </span>
      </span>
    </a>
  )
}

export function VslHome() {
  const [isBookingOpen, setIsBookingOpen] = useState(false)
  const [testimonialIndex, setTestimonialIndex] = useState(0)
  const bookingUrl = "https://cal.com/aiguy/discovery"

  const openBooking = () => setIsBookingOpen(true)
  const closeBooking = () => setIsBookingOpen(false)
  const nextTestimonial = () => setTestimonialIndex((index) => (index + 1) % testimonialImages.length)
  const previousTestimonial = () => setTestimonialIndex((index) => (index - 1 + testimonialImages.length) % testimonialImages.length)

  return (
    <div className="min-h-screen bg-black text-white selection:bg-[#fec934] selection:text-black">
      <div className="absolute left-0 right-0 top-0 z-20 flex items-center justify-between px-4 py-4 md:px-12 md:py-[18px]">
        <BrandMark />
        <button
          type="button"
          onClick={openBooking}
          className="rounded-full bg-[#fec934] px-4 py-2.5 text-xs font-black uppercase tracking-[0.12em] text-black shadow-[0_12px_32px_rgba(254,201,52,.16)] transition hover:bg-[#ffd85b]"
        >
          Book
        </button>
      </div>

      <main id="top">
        <section className="grid min-h-0 place-items-center bg-[radial-gradient(circle_at_50%_-12%,rgba(254,201,52,.16),transparent_34%),linear-gradient(180deg,rgba(5,5,2,.98),#000_58%,#050503)] px-5 pb-16 pt-[150px] text-center md:min-h-screen md:pt-28">
          <div className="mx-auto w-full max-w-[960px]">
            <SectionKicker>AI automation for business owners</SectionKicker>
            <h1 className="vsl-display m-0 text-balance text-[clamp(4.25rem,12vw,10.2rem)] font-normal uppercase leading-[0.88] tracking-[-0.035em] text-[#fec934] drop-shadow-[0_18px_34px_rgba(0,0,0,.5)]">
              Automate Your
              <span className="mt-2 block text-[clamp(3.1rem,8.4vw,7.2rem)] text-white">Business</span>
            </h1>

            <p className="mx-auto mb-6 mt-7 max-w-[790px] text-balance text-[clamp(1.25rem,2.55vw,2.05rem)] leading-[1.12] tracking-[-0.035em] text-white/90">
              Get a practical AI operating partner built around your workflows, your tools, and the way your team already works.
            </p>

            <button type="button" onClick={openBooking} className="vsl-cta">
              Book A Free AI Consultation
            </button>
            <a href="#contact" className="mx-auto mt-4 block w-fit border-b border-white/30 text-sm text-white/75 hover:text-white">
              Contact Miguel Directly
            </a>

            <button
              type="button"
              onClick={openBooking}
              aria-label="Open booking calendar"
              className="group relative mx-auto mt-9 block aspect-video w-full max-w-[780px] overflow-hidden border border-[#fec934]/30 bg-[#0d0c08] shadow-[0_30px_90px_rgba(0,0,0,.48),0_0_80px_rgba(254,201,52,.12)] outline-none transition focus-visible:ring-4 focus-visible:ring-[#fec934]/45"
            >
              <Image
                src="/miguel-nieves.png"
                alt="Miguel Nieves"
                fill
                priority
                className="object-cover object-[center_23%] brightness-[.66] contrast-105 saturate-90 transition duration-500 group-hover:scale-[1.035] group-hover:brightness-75"
              />
            </button>
          </div>
        </section>

        <section className="border-t border-white/10 bg-black px-5 py-20 md:py-28">
          <div className="mx-auto max-w-[960px] text-center">
            <DisplayTitle>
              Want An AI Guy <span className="block text-[#dca700]">In Your Corner?</span>
            </DisplayTitle>
            <p className="mx-auto mt-7 max-w-4xl text-balance text-[clamp(1.35rem,3vw,2.35rem)] leading-[1.08] tracking-[-0.04em] text-white/90">
              Most businesses know AI matters. The hard part is turning it into a system that saves time, follows up,
              remembers context, and supports daily execution.
            </p>
            <p className="mx-auto mt-7 max-w-4xl text-balance text-[clamp(1.35rem,3vw,2.35rem)] leading-[1.08] tracking-[-0.04em] text-white/90">
              That’s My AI Guy keeps it hands-on: private assistant setup, workflow automation, and rollout support without turning your team into prompt engineers.
            </p>
            <button type="button" onClick={openBooking} className="vsl-cta mt-9">
              Yes — Map My AI Setup
            </button>
          </div>
        </section>

        <section id="offer" className="bg-[linear-gradient(145deg,#fff2bd,#fffaf0_48%,#fff)] px-5 py-20 text-[#11100b] shadow-[inset_0_14px_24px_rgba(0,0,0,.22)] md:py-28">
          <div className="mx-auto max-w-[990px] rounded-[30px] border border-black/10 bg-white/80 p-8 text-center shadow-[0_24px_70px_rgba(45,34,0,.12)] md:p-14">
            <SectionKicker dark>Core offer</SectionKicker>
            <DisplayTitle dark>
              Private AI Assistant
              <span className="block text-[#dca700]">Setup With Miguel</span>
            </DisplayTitle>
            <p className="mx-auto mt-7 max-w-4xl text-balance text-[clamp(1.28rem,2.6vw,2rem)] leading-tight tracking-[-0.035em] text-[#17140b]">
              A focused implementation path for founders and small teams who want AI embedded into real operations — lead follow-up, CRM updates, admin workflows, internal knowledge, and client communication.
            </p>
            <div className="mx-auto mt-10 grid max-w-5xl grid-cols-1 gap-4 text-left md:grid-cols-3">
              <article className="rounded-[22px] border border-black/10 bg-white p-6">
                <strong className="mb-2 block text-[#070706]">Private AI assistant setup</strong>
                <p className="text-sm leading-relaxed text-[#4a432c]">Configured around your company, workflows, tools, and recurring decisions.</p>
              </article>
              <article className="rounded-[22px] border border-black/10 bg-white p-6">
                <strong className="mb-2 block text-[#070706]">Workflow automation</strong>
                <p className="text-sm leading-relaxed text-[#4a432c]">Reduce repetitive admin work, handoffs, missed follow-ups, and manual updates.</p>
              </article>
              <article className="rounded-[22px] border border-black/10 bg-white p-6">
                <strong className="mb-2 block text-[#070706]">Hands-on rollout support</strong>
                <p className="text-sm leading-relaxed text-[#4a432c]">Miguel helps your team adopt the system so it gets used after launch.</p>
              </article>
            </div>
          </div>
        </section>

        <section id="services" className="bg-black px-5 py-20 md:py-28">
          <div className="mx-auto max-w-[1100px] text-center">
            <SectionKicker>Ways we help</SectionKicker>
            <DisplayTitle>Practical AI Builds</DisplayTitle>
            <div className="mt-10 grid grid-cols-1 gap-4 text-left md:grid-cols-4">
              {[
                ["01", "Private AI Assistant", "A business-aware assistant that remembers context and helps you execute."],
                ["02", "CRM + Follow-up", "Automated lead handling, client communication, and sales pipeline support."],
                ["03", "Custom Chatbots", "Support and intake bots trained around your business knowledge."],
                ["04", "Brand + Website Launch", "Fast web and funnel setup when the AI system needs a front door."],
              ].map(([number, title, copy]) => (
                <article key={title} className="rounded-[22px] border border-[#fec934]/20 bg-[linear-gradient(145deg,rgba(254,201,52,.10),rgba(255,255,255,.03))] p-6">
                  <small className="mb-3 inline-block text-[0.68rem] font-black uppercase tracking-[0.12em] text-[#fec934]">{number}</small>
                  <h3 className="mb-2 font-bold text-white">{title}</h3>
                  <p className="text-sm leading-relaxed text-white/70">{copy}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="active-project" className="bg-black px-5 py-20 md:py-28">
          <div className="mx-auto max-w-[960px] text-center">
            <SectionKicker>Active project spotlight</SectionKicker>
            <DisplayTitle>BotLaunch.pro</DisplayTitle>
            <p className="mx-auto mt-7 max-w-4xl text-balance text-[clamp(1.3rem,2.7vw,2.05rem)] leading-tight tracking-[-0.035em] text-white/85">
              A focused implementation experience for business owners who want AI and CRM systems working fast.
            </p>
            <div className="mx-auto mt-10 max-w-[860px] overflow-hidden rounded-[26px] border border-[#fec934]/20 bg-[linear-gradient(135deg,rgba(18,16,8,.96),rgba(61,45,0,.45))] text-left shadow-[0_24px_80px_rgba(0,0,0,.42)]">
              <div className="flex h-11 items-center gap-2 border-b border-white/10 px-4 text-xs text-white/45">
                <span className="h-2.5 w-2.5 rounded-full bg-white/20" />
                <span className="h-2.5 w-2.5 rounded-full bg-white/20" />
                <span className="h-2.5 w-2.5 rounded-full bg-white/20" />
                <span className="ml-2">botlaunch.pro</span>
              </div>
              <div className="p-7">
                <h3 className="vsl-display text-[clamp(2.8rem,6vw,5.5rem)] uppercase leading-[0.9] tracking-[-0.035em] text-[#fec934]">
                  Your Own AI Chief Of Staff
                </h3>
                <p className="mt-5 max-w-2xl text-lg text-white/70">
                  BotLaunch stays as the productized, direct-response offer inside the broader That’s My AI Guy ecosystem.
                </p>
                <a href="https://www.botlaunch.pro" target="_blank" rel="noopener noreferrer" className="mt-6 inline-flex rounded-full border border-[#fec934]/35 px-5 py-3 text-sm font-black uppercase tracking-[0.06em] text-[#fec934] hover:bg-[#fec934]/10">
                  View current project
                </a>
              </div>
            </div>
          </div>
        </section>

        <section id="about" className="bg-black px-5 py-20 md:py-28">
          <div className="mx-auto grid max-w-[1040px] grid-cols-1 items-center gap-9 md:grid-cols-[.82fr_1.18fr]">
            <div className="relative overflow-hidden rounded-[28px] border border-[#fec934]/30 bg-[#100f0a] shadow-[0_24px_80px_rgba(0,0,0,.38)]">
              <Image src="/miguel-nieves.png" alt="Miguel Nieves" width={662} height={662} className="block h-auto w-full contrast-105 saturate-90" />
            </div>
            <div className="text-center md:text-left">
              <SectionKicker>About the founder</SectionKicker>
              <h2 className="vsl-display m-0 text-balance text-[clamp(3.1rem,8vw,7.15rem)] font-normal uppercase leading-[0.88] tracking-[-0.035em] text-white">
                Miguel <span className="block text-[#dca700]">Nieves</span>
              </h2>
              <p className="mt-5 text-white/75">Founder and lead consultant of That’s My AI Guy LLC, specializing in AI-driven automation, workflow optimization, and machine learning solutions.</p>
              <p className="mt-5 text-white/75">Former Microsoft AI engineer, PMP-certified technical program manager, and U.S. Marine Corps Captain with experience turning complex systems into usable operations.</p>
              <p className="mt-5 text-white/75">Miguel has built AI-powered Text-to-SQL tooling at Microsoft, supported go-to-market execution for UbiquityOS, and built AI-driven CRM systems that improved real sales operations.</p>
              <div className="mt-6 flex flex-wrap justify-center gap-2.5 md:justify-start">
                {['Ex-Microsoft AI Engineer', 'PMP Certified', 'Marine Corps Captain'].map((badge) => (
                  <span key={badge} className="rounded-full border border-[#fec934]/30 bg-[#fec934]/10 px-3 py-2 text-xs font-black uppercase tracking-[0.08em] text-[#fec934]">
                    {badge}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section id="testimonials" className="bg-black px-5 py-20 md:py-28">
          <div className="mx-auto max-w-[960px] text-center">
            <SectionKicker>Proof</SectionKicker>
            <DisplayTitle>Client Screenshots</DisplayTitle>
            <p className="mx-auto mt-7 max-w-3xl text-balance text-[clamp(1.25rem,2.4vw,1.85rem)] leading-tight tracking-[-0.035em] text-white/85">
              A cleaner proof section using the current testimonial images, framed in the same bold landing-page style.
            </p>
            <div className="mx-auto mt-10 max-w-[900px]">
              <div className="relative aspect-video overflow-hidden rounded-3xl border border-white/10 bg-[#0f0e09]">
                <Image src={testimonialImages[testimonialIndex]} alt={`Client testimonial ${testimonialIndex + 1}`} fill className="object-contain" />
              </div>
              <div className="mt-5 flex items-center justify-center gap-3">
                <button type="button" onClick={previousTestimonial} aria-label="Previous testimonial" className="h-11 w-11 rounded-full border border-[#fec934]/45 text-xl text-[#fec934] hover:bg-[#fec934]/10">‹</button>
                <button type="button" onClick={nextTestimonial} aria-label="Next testimonial" className="h-11 w-11 rounded-full border border-[#fec934]/45 text-xl text-[#fec934] hover:bg-[#fec934]/10">›</button>
              </div>
            </div>
          </div>
        </section>

        <section id="faq" className="bg-black px-5 py-20 md:py-28">
          <div className="mx-auto max-w-[900px] text-center">
            <SectionKicker>Questions</SectionKicker>
            <DisplayTitle>
              Frequently Asked <span className="block text-[#dca700]">Questions</span>
            </DisplayTitle>
            <div className="mx-auto mt-10 max-w-[820px] text-left">
              {faqItems.map((item) => (
                <details key={item.question} className="mb-3 overflow-hidden rounded-2xl border border-white/10 bg-[#0d0c08]">
                  <summary className="cursor-pointer list-none px-6 py-5 font-extrabold text-white marker:hidden">{item.question}</summary>
                  <p className="px-6 pb-5 text-white/70">{item.answer}</p>
                </details>
              ))}
            </div>
          </div>
        </section>

        <section id="contact" className="bg-black px-5 py-20 md:py-28">
          <div className="mx-auto max-w-[960px] text-center">
            <DisplayTitle>Talk To Miguel</DisplayTitle>
            <p className="mx-auto mt-7 max-w-3xl text-balance text-[clamp(1.25rem,2.4vw,1.85rem)] leading-tight tracking-[-0.035em] text-white/85">
              Prefer a direct message instead of booking? Use one of the current contact paths.
            </p>
            <div className="mx-auto mt-9 grid max-w-[900px] grid-cols-1 gap-3 md:grid-cols-4">
              <a href="mailto:miguel@thatsmyaiguy.com?subject=AI%20Automation%20Inquiry" className="rounded-2xl border border-white/10 p-5 text-white/80 hover:border-[#fec934]/40 hover:bg-[#fec934]/10 hover:text-white">Email</a>
              <a href="https://wa.me/821082546224?text=Hi%2C%20I%20want%20to%20automate%20with%20AI!" target="_blank" rel="noopener noreferrer" className="rounded-2xl border border-white/10 p-5 text-white/80 hover:border-[#fec934]/40 hover:bg-[#fec934]/10 hover:text-white">WhatsApp</a>
              <a href="https://www.linkedin.com/in/m6n6" target="_blank" rel="noopener noreferrer" className="rounded-2xl border border-white/10 p-5 text-white/80 hover:border-[#fec934]/40 hover:bg-[#fec934]/10 hover:text-white">LinkedIn</a>
              <a href="https://t.me/mig112" target="_blank" rel="noopener noreferrer" className="rounded-2xl border border-white/10 p-5 text-white/80 hover:border-[#fec934]/40 hover:bg-[#fec934]/10 hover:text-white">Telegram</a>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-white/10 bg-black px-5 py-10 text-center text-sm text-white/50">
        <p>© That’s My AI Guy LLC. All rights reserved.</p>
        <div className="mt-3 flex flex-wrap justify-center gap-x-4 gap-y-1 text-white/60">
          <span>30 N Gould St Ste R, Sheridan, WY 82801</span>
          <a href="mailto:miguel@thatsmyaiguy.com" className="hover:text-[#fec934]">miguel@thatsmyaiguy.com</a>
          <a href={`tel:${"+1 607 608 5715".replace(/\D/g, "")}`} className="hover:text-[#fec934]">+1 607 608 5715</a>
        </div>
      </footer>

      {isBookingOpen && (
        <div
          className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/75 p-0 backdrop-blur md:p-5"
          role="presentation"
          onClick={(event) => {
            if (event.target === event.currentTarget) closeBooking()
          }}
        >
          <div className="flex h-dvh w-screen flex-col overflow-hidden bg-[#030302] md:h-auto md:max-h-[92dvh] md:w-[min(960px,96vw)] md:rounded-[18px] md:border md:border-[#fec934]/30 md:shadow-[0_28px_80px_rgba(0,0,0,.55)]">
            <div className="flex items-center justify-between border-b border-white/10 px-4 py-3 font-extrabold text-white">
              <span>Book a Free AI Consultation</span>
              <button type="button" onClick={closeBooking} aria-label="Close booking calendar" className="h-9 w-9 rounded-xl border border-white/15 text-2xl leading-none text-white hover:bg-white/10">
                ×
              </button>
            </div>
            <iframe src={bookingUrl} title="Book a free AI consultation" className="block min-h-0 flex-1 border-0 bg-white md:h-[720px] md:max-h-[calc(92dvh-62px)]" />
          </div>
        </div>
      )}

      <style jsx global>{`
        .vsl-display {
          font-family: var(--font-anton), Impact, "Arial Narrow", sans-serif;
        }

        .vsl-cta {
          display: inline-flex;
          min-height: 58px;
          align-items: center;
          justify-content: center;
          border-radius: 999px;
          background: #fec934;
          padding: 18px 34px;
          color: #050505;
          font-weight: 950;
          text-transform: uppercase;
          letter-spacing: 0.04em;
          box-shadow: 0 20px 52px rgba(254, 201, 52, 0.24);
          transition: transform 180ms ease, box-shadow 180ms ease, background 180ms ease;
        }

        .vsl-cta:hover {
          transform: translateY(-2px);
          background: #ffd85b;
          box-shadow: 0 26px 70px rgba(254, 201, 52, 0.34);
        }

        @media (max-width: 760px) {
          .vsl-cta {
            width: 100%;
            padding-left: 18px;
            padding-right: 18px;
          }
        }
      `}</style>
    </div>
  )
}
