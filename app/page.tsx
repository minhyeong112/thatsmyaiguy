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
        data-widget-id="6a2a823541d7d22db1df636f"
        data-source="WEB_USER"
        strategy="afterInteractive"
      />
    </>
  )
}
