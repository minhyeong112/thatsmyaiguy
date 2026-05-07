"use client"

import * as React from "react"
import { Check, ChevronsUpDown } from "lucide-react"

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Command, CommandEmpty, CommandGroup, CommandInput, CommandItem, CommandList } from "@/components/ui/command"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"

// Common country codes
const countries = [
  { value: "+1", label: "🇺🇸 United States (+1)" },
  { value: "+44", label: "🇬🇧 United Kingdom (+44)" },
  { value: "+61", label: "🇦🇺 Australia (+61)" },
  { value: "+1", label: "🇨🇦 Canada (+1)" },
  { value: "+33", label: "🇫🇷 France (+33)" },
  { value: "+49", label: "🇩🇪 Germany (+49)" },
  { value: "+91", label: "🇮🇳 India (+91)" },
  { value: "+39", label: "🇮🇹 Italy (+39)" },
  { value: "+81", label: "🇯🇵 Japan (+81)" },
  { value: "+52", label: "🇲🇽 Mexico (+52)" },
  { value: "+31", label: "🇳🇱 Netherlands (+31)" },
  { value: "+64", label: "🇳🇿 New Zealand (+64)" },
  { value: "+65", label: "🇸🇬 Singapore (+65)" },
  { value: "+27", label: "🇿🇦 South Africa (+27)" },
  { value: "+34", label: "🇪🇸 Spain (+34)" },
  { value: "+46", label: "🇸🇪 Sweden (+46)" },
  { value: "+41", label: "🇨🇭 Switzerland (+41)" },
  { value: "+971", label: "🇦🇪 UAE (+971)" },
  { value: "+82", label: "🇰🇷 South Korea (+82)" },
  { value: "+86", label: "🇨🇳 China (+86)" },
]

export interface CountrySelectProps {
  value: string
  onChange: (value: string) => void
}

export function CountrySelect({ value, onChange }: CountrySelectProps) {
  const [open, setOpen] = React.useState(false)

  // Find the selected country or default to first one
  const selectedCountry =
    countries.find((country) => country.value === value) || (value ? { value, label: value } : countries[0])

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          role="combobox"
          aria-expanded={open}
          className="w-full justify-between bg-black border-zinc-700 text-white hover:bg-zinc-900 hover:text-white"
        >
          {selectedCountry.label}
          <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-full p-0 bg-black border-zinc-700">
        <Command className="bg-black text-white">
          <CommandInput placeholder="Search country..." className="text-white" />
          <CommandList>
            <CommandEmpty>No country found.</CommandEmpty>
            <CommandGroup className="max-h-64 overflow-y-auto">
              {countries.map((country) => (
                <CommandItem
                  key={country.label}
                  value={country.label}
                  onSelect={() => {
                    onChange(country.value)
                    setOpen(false)
                  }}
                  className="text-white hover:bg-zinc-800"
                >
                  <Check className={cn("mr-2 h-4 w-4", value === country.value ? "opacity-100" : "opacity-0")} />
                  {country.label}
                </CommandItem>
              ))}
            </CommandGroup>
          </CommandList>
        </Command>
      </PopoverContent>
    </Popover>
  )
}
