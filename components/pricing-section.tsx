import { Check, CreditCard, Coins, ArrowRight, Smile  } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link  from "next/link"

export function PricingSection() {
  return (
    <section className="container mx-auto px-4 py-20 bg-zinc-950">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">Pricing</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Creating a cash-making chatbot is completely FREE! Premium membership unlocks additional features.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 lg:gap-12">

        <div className="relative group">
            {/* Background glow effect */}
            <div className="absolute -inset-0.5 bg-gradient-to-r from-primary/20 to-primary/0 rounded-2xl blur-xl opacity-75 group-hover:opacity-100 transition-opacity"></div>

            <div className="relative bg-zinc-900 rounded-xl border border-zinc-800 p-8 md:p-10 h-full flex flex-col">
              <div className="flex items-center gap-4 mb-6">
                <div className="bg-primary/10 p-3 rounded-full">
                  <Smile className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-xl font-bold">Free Plan</h3>
                  <p className="text-sm text-gray-400">Create your chatbot for free</p>
                </div>
              </div>

              <div className="mb-6">
                <div className="flex items-end gap-1 mb-1">
                  <span className="text-4xl font-bold">0</span>
                  <span className="text-xl font-bold">$</span>
                </div>
                <p className="text-sm text-gray-400">Get started for free</p>
              </div>

              <div className="space-y-4 mb-8">
                <div className="flex items-start gap-3">
                  <Check className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                  <p className="text-gray-300">Upload your first piece of content</p>
                </div>
                <div className="flex items-start gap-3">
                  <Check className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                  <p className="text-gray-300">Instantly create a chatbot</p>
                </div>
                <div className="flex items-start gap-3">
                  <Check className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                  <p className="text-gray-300">Unique link for users to access your chabot</p>
                </div>
                <div className="flex items-start gap-3">
                  <Check className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                  <p className="text-gray-300">Set your own price and start making money</p>
                </div>
                <div className="flex items-start gap-3">
                  <Check className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                  <p className="text-gray-300">Your chatbot uses o3-mini and your content</p>
                </div>
              </div>

              <div className="mt-auto">
              <Link href="https://www.chatwise.live" target="_blank">
              <Button className="w-full bg-primary hover:bg-primary/90 text-white">
                
                
                 JOIN FOR FREE

                </Button>
                
                </Link>
              </div>
            </div>
          </div>


          {/* Creator Card */}
          <div className="relative group">
            {/* Background glow effect */}
            <div className="absolute -inset-0.5 bg-gradient-to-r from-primary/20 to-primary/0 rounded-2xl blur-xl opacity-75 group-hover:opacity-100 transition-opacity"></div>

            <div className="relative bg-zinc-900 rounded-xl border border-zinc-800 p-8 md:p-10 h-full flex flex-col">
              <div className="flex items-center gap-4 mb-6">
                <div className="bg-primary/10 p-3 rounded-full">
                  <CreditCard className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-xl font-bold">One-Time-Payment Plan</h3>
                  <p className="text-sm text-gray-400">Lifetime access</p>
                </div>
              </div>

              <div className="mb-6">
                <div className="flex items-end gap-1 mb-1">
                  <span className="text-4xl font-bold">$39</span>
                  <span className="text-xl font-bold">.99</span>
                </div>
                <p className="text-sm text-gray-400">Access chatWise forever</p>
              </div>

              <div className="space-y-4 mb-8">
              <div className="flex items-start gap-3">
                  <Check className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                  <p className="text-gray-300">Unlimited file uploads to feed your chatbot</p>
                </div>
                <div className="flex items-start gap-3">
                  <Check className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                  <p className="text-gray-300">Latest AI LLMs for your chatbot</p>
                </div>
                <div className="flex items-start gap-3">
                  <Check className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                  <p className="text-gray-300">Performance & Revenue Dashboard</p>
                </div>
                <div className="flex items-start gap-3">
                  <Check className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                  <p className="text-gray-300">Monthly Payments to your Bank</p>
                </div>
                <div className="flex items-start gap-3">
                  <Check className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                  <p className="text-gray-300">Your chatbot subscriptions managed by us</p>
                </div>
                
              </div>

              <div className="mt-auto pt-6 border-t border-zinc-800">
                <div className="flex justify-between items-center">
                  <div>
                    <p className="text-sm text-gray-400">Example:</p>
                    <p className="font-medium">$10/mo subscription</p>
                  </div>
                  <div className="text-right">
                    <p className="text-sm text-gray-400">You receive:</p>
                    <p className="font-medium text-primary">$9.50/mo per user</p>
                  </div>
                </div>
              </div>

        
            </div>
          </div>

          

          
          

          {/* Revenue Share Card */}
       
        </div>

        {/* FAQ or Additional Info */}
        <div className="mt-16 bg-zinc-900/50 rounded-xl border border-zinc-800 p-8">
          <div className="flex flex-col md:flex-row items-start md:items-center gap-6">
            <div className="bg-primary/10 p-4 rounded-full">
              <Coins className="h-8 w-8 text-primary" />
            </div>
            <div>
              <h3 className="text-xl font-bold mb-2">No Hidden Fees or Complicated Pricing</h3>
              <p className="text-gray-400">
                Chatwise is free to use. Premium Membership though makes it 10x better ;) You keep 95% of what your chatbots earn. We only take a
                small 5% commission to keep the platform running and constantly improving.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

