import { Zap, CreditCard, Shield } from "lucide-react"

export function EaseOfUseSection() {
  return (
    <section className="container mx-auto px-4 py-20 bg-zinc-950/50">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">Why use chatWise?</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Instant chatbot setup. No coding, no complex setup, no payment processing headaches. We handle everything so you can focus on
            monetizing your knowledge.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {/* Step 1 */}
          <div className="bg-zinc-900 rounded-xl border border-zinc-800 p-8 relative overflow-hidden group">
            <div className="absolute -right-4 -top-4 bg-primary/10 w-24 h-24 rounded-full blur-xl opacity-70 group-hover:opacity-100 transition-opacity"></div>
            <div className="relative">
              <div className="bg-primary/10 p-4 rounded-full w-fit mb-6">
                <Zap className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-3">One-Click Creation</h3>
              <p className="text-gray-400">
                Simply upload your content and click a button to start your own chatbot. Well...that's it. Seriously, it is that easy.
              </p>
              <div className="mt-6 pt-6 border-t border-zinc-800">
                <p className="text-sm text-primary font-medium">Chatbot ready in seconds.</p>
              </div>
            </div>
          </div>

          {/* Step 2 */}
          <div className="bg-zinc-900 rounded-xl border border-zinc-800 p-8 relative overflow-hidden group">
            <div className="absolute -right-4 -top-4 bg-primary/10 w-24 h-24 rounded-full blur-xl opacity-70 group-hover:opacity-100 transition-opacity"></div>
            <div className="relative">
              <div className="bg-primary/10 p-4 rounded-full w-fit mb-6">
                <CreditCard className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-3">Automatic Monetization</h3>
              <p className="text-gray-400">
                Set a chatbot price and we handle all payment processing. We deposit your earnings directly into your bank monthly.
              </p>
              <div className="mt-6 pt-6 border-t border-zinc-800">
                <p className="text-sm text-primary font-medium">Payments handled: 100%</p>
              </div>
            </div>
          </div>

          {/* Step 3 */}
          <div className="bg-zinc-900 rounded-xl border border-zinc-800 p-8 relative overflow-hidden group">
            <div className="absolute -right-4 -top-4 bg-primary/10 w-24 h-24 rounded-full blur-xl opacity-70 group-hover:opacity-100 transition-opacity"></div>
            <div className="relative">
              <div className="bg-primary/10 p-4 rounded-full w-fit mb-6">
                <Shield className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-3">Zero Maintenance</h3>
              <p className="text-gray-400">
                We manage hosting, updates, and security. Your chatbot stays online and up-to-date without any effort on
                your part.
              </p>
              <div className="mt-6 pt-6 border-t border-zinc-800">
                <p className="text-sm text-primary font-medium">Maintenance required: None</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

