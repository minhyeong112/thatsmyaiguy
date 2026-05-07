import Link from "next/link"

export function ActiveProjectSpotlight() {
  return (
    <section className="py-14 bg-black border-t border-zinc-800" id="active-project">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <p className="text-zinc-400 uppercase tracking-[0.18em] text-xs mb-3">Active Project Spotlight</p>

          <div className="rounded-xl border border-primary/40 bg-zinc-900 p-6 md:p-7">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
              <div>
                <h3 className="font-teko text-4xl text-primary leading-none">BotSetupCoach</h3>
                <p className="text-zinc-300 mt-2">
                  A focused setup experience for business owners who want a private AI assistant running fast.
                </p>
              </div>
              <Link
                href="https://www.botsetupcoach.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center rounded-md px-5 py-2.5 bg-primary hover:bg-primary/90 text-black font-teko text-xl"
              >
                VIEW PROJECT
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
