import Script from "next/script"
import { VslHome } from "@/components/vsl-home"

export default function Home() {
  return (
    <>
      <VslHome />
      <Script
        id="ghl-chat-widget"
        src="https://widgets.leadconnectorhq.com/loader.js"
        data-resources-url="https://widgets.leadconnectorhq.com/chat-widget/loader.js"
        data-widget-id="69fb18245b108d5fa5ecd22a"
        data-source="WEB_USER"
        strategy="afterInteractive"
      />
    </>
  )
}
