"use client"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

const faqs = [
  {
    question: "What is your main offer now?",
    answer:
      "Our core offer is private AI assistant setup plus practical implementation support for founders and small teams.",
  },
  {
    question: "How quickly can we get started?",
    answer:
      "Most teams can begin in days once we align on your workflow priorities, stack, and the first use cases to automate.",
  },
  {
    question: "Do we need technical experience?",
    answer:
      "No. We handle setup and guide your team through day-to-day usage so the assistant is actually useful in real operations.",
  },
  {
    question: "What workflows can you help automate?",
    answer:
      "Common starting points include lead follow-up, CRM updates, repetitive admin tasks, internal knowledge access, and client communication workflows.",
  },
  {
    question: "Will this replace our team?",
    answer:
      "No. The goal is to remove repetitive work so your team can focus on higher-leverage decisions, relationships, and execution.",
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
    answer:
      "Book a free AI consultation and we will map your fastest path to a working private AI assistant.",
  },
]

export function FaqAccordion() {
  return (
    <section className="py-20 bg-black" id="faq">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-teko text-5xl md:text-6xl text-white mb-4">FREQUENTLY ASKED QUESTIONS</h2>
          <p className="text-zinc-400 max-w-2xl mx-auto">
            Answers about our private AI setup offer and how implementation works.
          </p>
          <div className="h-1 w-20 bg-primary mx-auto mt-6"></div>
        </div>

        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="border border-zinc-800 rounded-lg overflow-hidden bg-zinc-900"
              >
                <AccordionTrigger className="px-6 py-4 text-white font-teko text-xl hover:no-underline hover:bg-zinc-800">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="px-6 py-4 text-zinc-300">{faq.answer}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  )
}
