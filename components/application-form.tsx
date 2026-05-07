"use client"

import type React from "react"
import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { CheckCircle, Loader2, AlertCircle, ArrowLeft, ArrowRight, Calendar } from "lucide-react"
import { DynamicSpotsCounter } from "@/components/dynamic-spots-counter"
import { CountrySelect } from "@/components/country-select"
import { useRouter } from "next/navigation"
import { CalButton } from "@/components/cal-button"
import { FridayCountdown } from "@/components/friday-countdown"

export function ApplicationForm() {
  const router = useRouter()
  const [step, setStep] = useState(1)
  const [submitted, setSubmitted] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [error, setError] = useState("")
  const [validationError, setValidationError] = useState("")

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    whatsapp: "",
    linkedin: "",
    twitter: "",
    telegram: "",
    facebook: "",
    instagram: "",
    notes: "",
  })

  // Add these state variables for country codes
  const [phoneCountryCode, setPhoneCountryCode] = useState("+1")
  const [whatsappCountryCode, setWhatsappCountryCode] = useState("+1")

  useEffect(() => {
    if (typeof window === "undefined") return

    try {
      if (window.location.hash === "#apply") {
        const formElement = document.getElementById("application-form")
        if (formElement) {
          formElement.scrollIntoView({ behavior: "smooth" })
        }
      }
    } catch (error) {
      console.error("Error scrolling to form:", error)
    }
  }, [])

  // Update the handleInputChange function to handle phone numbers without country codes
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target

    // For phone fields, only store the number part, not the country code
    if (name === "phone" || name === "whatsapp") {
      // Remove any non-digit characters the user might have entered
      const digitsOnly = value.replace(/\D/g, "")
      setFormData((prev) => ({ ...prev, [name]: digitsOnly }))
    } else {
      setFormData((prev) => ({ ...prev, [name]: value }))
    }

    // Clear validation error when user types
    if (validationError) {
      setValidationError("")
    }
  }

  const handleSocialInputChange = (e: React.ChangeEvent<HTMLInputElement>, platform: string) => {
    const { value } = e.target
    let formattedValue = value

    // Remove @ if user included it
    if (value.startsWith("@")) {
      formattedValue = value.substring(1)
    }

    setFormData((prev) => ({ ...prev, [platform]: formattedValue }))

    // Clear validation error when user types
    if (validationError) {
      setValidationError("")
    }
  }

  const validateStep = (currentStep: number) => {
    if (currentStep === 1) {
      // Validate Basic Info
      if (!formData.firstName.trim() || !formData.lastName.trim()) {
        setValidationError("First name and last name are required")
        return false
      }
    } else if (currentStep === 2) {
      // Validate Contact Info - at least one method required
      const hasContactMethod =
        formData.email.trim() ||
        formData.phone.trim() ||
        formData.whatsapp.trim() ||
        formData.linkedin.trim() ||
        formData.twitter.trim() ||
        formData.telegram.trim() ||
        formData.facebook.trim() ||
        formData.instagram.trim()

      if (!hasContactMethod) {
        setValidationError("At least one contact method is required")
        return false
      }
    } else if (currentStep === 3) {
      // Validate Goals
      if (!formData.notes.trim()) {
        setValidationError("Please tell us a bit about how we can help you")
        return false
      }
    }

    setValidationError("")
    return true
  }

  const nextStep = () => {
    if (validateStep(step)) {
      // If moving from step 2 to step 3, submit partial data
      if (step === 2) {
        submitPartialData()
      }
      setStep((prev) => prev + 1)
      // Don't scroll to top
    }
  }

  const submitPartialData = async () => {
    try {
      const partialData = {
        fields: {
          First: formData.firstName,
          Last: formData.lastName,
          Email: formData.email,
          Phone: formData.phone ? `${phoneCountryCode}${formData.phone}` : "",
          WhatsApp: formData.whatsapp ? `${whatsappCountryCode}${formData.whatsapp}` : "",
          LinkedIn: formData.linkedin ? `linkedin.com/in/${formData.linkedin}` : "",
          "X.com": formData.twitter ? `x.com/${formData.twitter}` : "",
          Telegram: formData.telegram ? `t.me/${formData.telegram}` : "",
          Facebook: formData.facebook ? `facebook.com/${formData.facebook}` : "",
          Instagram: formData.instagram ? `instagram.com/${formData.instagram}` : "",
          "Append these notes": "PARTIAL SUBMISSION - Contact info provided",
          Status: "0. Lead",
        },
      }

      const response = await fetch("/api/submit-form", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(partialData),
      })

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`)
      }

      console.log("Partial data submitted successfully")
    } catch (err) {
      console.error("Error submitting partial data:", err)
      // Don't show error to user for partial submissions
    }
  }

  const prevStep = () => {
    setStep((prev) => prev - 1)
    setValidationError("")
  }

  // Update the formatDataForAirtable function to include country codes
  const formatDataForAirtable = () => {
    const airtableData = {
      fields: {
        First: formData.firstName,
        Last: formData.lastName,
        Email: formData.email,
        Phone: formData.phone ? `${phoneCountryCode}${formData.phone}` : "",
        WhatsApp: formData.whatsapp ? `${whatsappCountryCode}${formData.whatsapp}` : "",
        LinkedIn: formData.linkedin ? `linkedin.com/in/${formData.linkedin}` : "",
        "X.com": formData.twitter ? `x.com/${formData.twitter}` : "",
        Telegram: formData.telegram ? `t.me/${formData.telegram}` : "",
        Facebook: formData.facebook ? `facebook.com/${formData.facebook}` : "",
        Instagram: formData.instagram ? `instagram.com/${formData.instagram}` : "",
        "Append these notes": formData.notes,
        Status: "0. Lead",
      },
    }

    return airtableData
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    if (!validateStep(3)) {
      return
    }

    setIsSubmitting(true)
    setError("")

    try {
      const airtableData = formatDataForAirtable()

      const response = await fetch("/api/submit-form", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(airtableData),
      })

      if (!response.ok) {
        const errorData = await response.json().catch(() => ({}))
        console.error("Submission error details:", errorData)
        throw new Error(`Form submission failed with status: ${response.status}`)
      }

      setSubmitted(true)
      if (typeof window !== "undefined") {
        window.scrollTo({ top: 0, behavior: "smooth" })
      }
    } catch (err) {
      setError("There was an error submitting your application. Please try again or contact us directly.")
      console.error("Submission error:", err)
    } finally {
      setIsSubmitting(false)
    }
  }

  const renderProgressBar = () => {
    return (
      <div className="mb-8">
        <div className="flex justify-between mb-2">
          <span className={`text-sm ${step >= 1 ? "text-primary" : "text-zinc-500"}`}>Basic Info</span>
          <span className={`text-sm ${step >= 2 ? "text-primary" : "text-zinc-500"}`}>Contact Info</span>
          <span className={`text-sm ${step >= 3 ? "text-primary" : "text-zinc-500"}`}>Goals</span>
        </div>
        <div className="w-full h-2 bg-zinc-800 rounded-full overflow-hidden">
          <div
            className="h-full bg-primary transition-all duration-300 ease-in-out"
            style={{ width: `${(step / 3) * 100}%` }}
          ></div>
        </div>
      </div>
    )
  }

  if (submitted) {
    return (
      <div className="bg-zinc-900 p-8 rounded-lg text-center">
        <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-6">
          <CheckCircle className="h-8 w-8 text-primary" />
        </div>
        <h3 className="font-teko text-3xl text-white mb-4">APPLICATION RECEIVED!</h3>
        <p className="text-zinc-300 mb-6">
          Thank you for applying for a consultation spot. Our team will review your application and get back to you
          within 24 hours.
        </p>
        <div className="bg-black p-4 rounded-lg mb-6 border border-red-900">
          <p className="text-zinc-400">
            <span className="text-red-500 font-bold">IMPORTANT:</span> Due to high demand, we're only accepting{" "}
            <DynamicSpotsCounter /> this month. We'll notify you immediately if your application is approved.
          </p>
        </div>
        <CalButton
          calLink="aiguy/discovery"
          namespace="application-discovery"
          className="bg-primary hover:bg-primary/90 text-black font-teko text-xl mt-4"
        >
          SCHEDULE A CONSULTATION
          <Calendar className="ml-2 h-5 w-5" />
        </CalButton>
        <Button
          className="bg-transparent hover:bg-zinc-800 text-white font-teko text-xl mt-4 ml-4"
          onClick={() => {
            if (typeof window !== "undefined") {
              window.scrollTo({ top: 0, behavior: "smooth" })
            }
          }}
        >
          RETURN TO HOME
        </Button>
      </div>
    )
  }

  return (
    <div className="bg-zinc-900 p-8 rounded-lg" id="application-form">
      <h3 className="font-teko text-3xl text-white mb-2">APPLICATION FORM</h3>
      <p className="text-zinc-400 mb-6">
        Complete this application to be considered for one of our limited consultation spots.
      </p>
      <div className="bg-black p-6 rounded-lg mb-8 border border-red-900">
        <p className="text-white text-center mb-4">
          <span className="text-red-500 font-bold">LIMITED AVAILABILITY:</span> We're currently accepting applications
          for{" "}
          <span className="text-red-500 font-bold">
            <DynamicSpotsCounter />
          </span>
        </p>
        <FridayCountdown />
      </div>

      {renderProgressBar()}

      {error && <div className="bg-red-900/20 border border-red-900 text-red-400 p-4 rounded-lg mb-6">{error}</div>}

      {validationError && (
        <div className="bg-amber-900/20 border border-amber-900 text-amber-400 p-4 rounded-lg mb-6 flex items-start">
          <AlertCircle className="h-5 w-5 mr-2 mt-0.5 flex-shrink-0" />
          <p>{validationError}</p>
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-8">
        {/* Step 1: Basic Info */}
        {step === 1 && (
          <div className="space-y-6">
            <h4 className="font-teko text-2xl text-white mb-4">Step 1: Basic Info</h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <Label className="text-zinc-300 mb-2">First Name *</Label>
                <Input
                  required
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleInputChange}
                  className="bg-black border-zinc-700 text-white"
                />
              </div>
              <div>
                <Label className="text-zinc-300 mb-2">Last Name *</Label>
                <Input
                  required
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleInputChange}
                  className="bg-black border-zinc-700 text-white"
                />
              </div>
            </div>
          </div>
        )}

        {/* Step 2: Contact Info */}
        {step === 2 && (
          <div className="space-y-6">
            <h4 className="font-teko text-2xl text-white mb-4">Step 2: Contact Info (at least one required)</h4>

            <div>
              <Label className="text-zinc-300 mb-2">Email</Label>
              <Input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                className="bg-black border-zinc-700 text-white"
              />
            </div>

            <div>
              <Label className="text-zinc-300 mb-2 block">Phone Number</Label>
              <div className="flex gap-2">
                <div className="w-1/3">
                  <CountrySelect value={phoneCountryCode} onChange={setPhoneCountryCode} />
                </div>
                <div className="w-2/3">
                  <Input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    className="bg-black border-zinc-700 text-white"
                    placeholder="555 123 4567"
                  />
                </div>
              </div>
            </div>

            <div>
              <Label className="text-zinc-300 mb-2 block">WhatsApp Number</Label>
              <div className="flex gap-2">
                <div className="w-1/3">
                  <CountrySelect value={whatsappCountryCode} onChange={setWhatsappCountryCode} />
                </div>
                <div className="w-2/3">
                  <Input
                    type="tel"
                    name="whatsapp"
                    value={formData.whatsapp}
                    onChange={handleInputChange}
                    className="bg-black border-zinc-700 text-white"
                    placeholder="555 123 4567"
                  />
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <Label className="text-zinc-300 mb-2">LinkedIn</Label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none text-zinc-500">
                    @
                  </div>
                  <Input
                    name="linkedin"
                    value={formData.linkedin}
                    onChange={(e) => handleSocialInputChange(e, "linkedin")}
                    className="bg-black border-zinc-700 text-white pl-8"
                    placeholder="username"
                  />
                </div>
              </div>

              <div>
                <Label className="text-zinc-300 mb-2">X (Twitter)</Label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none text-zinc-500">
                    @
                  </div>
                  <Input
                    name="twitter"
                    value={formData.twitter}
                    onChange={(e) => handleSocialInputChange(e, "twitter")}
                    className="bg-black border-zinc-700 text-white pl-8"
                    placeholder="username"
                  />
                </div>
              </div>

              <div>
                <Label className="text-zinc-300 mb-2">Telegram</Label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none text-zinc-500">
                    @
                  </div>
                  <Input
                    name="telegram"
                    value={formData.telegram}
                    onChange={(e) => handleSocialInputChange(e, "telegram")}
                    className="bg-black border-zinc-700 text-white pl-8"
                    placeholder="username"
                  />
                </div>
              </div>

              <div>
                <Label className="text-zinc-300 mb-2">Facebook</Label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none text-zinc-500">
                    @
                  </div>
                  <Input
                    name="facebook"
                    value={formData.facebook}
                    onChange={(e) => handleSocialInputChange(e, "facebook")}
                    className="bg-black border-zinc-700 text-white pl-8"
                    placeholder="username"
                  />
                </div>
              </div>

              <div>
                <Label className="text-zinc-300 mb-2">Instagram</Label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none text-zinc-500">
                    @
                  </div>
                  <Input
                    name="instagram"
                    value={formData.instagram}
                    onChange={(e) => handleSocialInputChange(e, "instagram")}
                    className="bg-black border-zinc-700 text-white pl-8"
                    placeholder="username"
                  />
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Step 3: Goals */}
        {step === 3 && (
          <div className="space-y-6">
            <h4 className="font-teko text-2xl text-white mb-4">Step 3: Goals</h4>
            <div>
              <Label className="text-zinc-300 mb-2">
                Tell me something about you. How can I help? How did we meet? Anything you'd like to share for my notes!
                :) *
              </Label>
              <Textarea
                required
                name="notes"
                value={formData.notes}
                onChange={handleInputChange}
                className="bg-black border-zinc-700 text-white min-h-[150px]"
                placeholder="I'm looking to automate my..."
              />
            </div>
          </div>
        )}

        <div className="flex justify-between mt-8">
          {step > 1 ? (
            <Button
              type="button"
              variant="outline"
              className="border-primary text-primary hover:bg-primary/10 bg-transparent"
              onClick={prevStep}
              disabled={isSubmitting}
            >
              <ArrowLeft className="mr-2 h-4 w-4" />
              Previous
            </Button>
          ) : (
            <div></div>
          )}

          {step < 3 ? (
            <Button
              type="button"
              className="bg-primary hover:bg-primary/90 text-black font-teko text-xl"
              onClick={nextStep}
            >
              Next
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          ) : (
            <Button
              type="submit"
              className="bg-primary hover:bg-primary/90 text-black font-teko text-xl"
              disabled={isSubmitting}
            >
              {isSubmitting ? (
                <>
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  Processing...
                </>
              ) : (
                "Submit Application"
              )}
            </Button>
          )}
        </div>

        <div className="text-zinc-500 text-sm">
          <p>
            * By submitting this application, you understand that spots are limited and submission does not guarantee
            acceptance.
          </p>
        </div>
      </form>
    </div>
  )
}
