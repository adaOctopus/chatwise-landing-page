import { Search, MessageSquare, TrendingUp, Users } from "lucide-react"
import { Button } from "@/components/ui/button"

export function ChatMarketSection() {
  return (
    <section className="container mx-auto px-4 py-20 bg-black">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">Discover the Chat Market</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            A marketplace of chatbots created by experts in every field. Find knowledge on any topic or add your
            own expertise to the chatbots market.
          </p>
        </div>

                {/* Market Stats */}
                <div className="max-w-3xl mx-auto">
          <div className="bg-zinc-900 border border-zinc-800 rounded-xl p-6 text-center">
            <p className="text-3xl md:text-4xl font-bold text-primary mb-2">100,000+</p>
            <p className="text-sm text-gray-400">Target of Active Chatbots by end of 2025.</p>
          </div>
          {/* <div className="bg-zinc-900 border border-zinc-800 rounded-xl p-6 text-center">
            <p className="text-3xl md:text-4xl font-bold text-primary mb-2">50K+</p>
            <p className="text-sm text-gray-400">Monthly Users</p>
          </div>
          <div className="bg-zinc-900 border border-zinc-800 rounded-xl p-6 text-center">
            <p className="text-3xl md:text-4xl font-bold text-primary mb-2">100+</p>
            <p className="text-sm text-gray-400">Knowledge Areas</p>
          </div>
          <div className="bg-zinc-900 border border-zinc-800 rounded-xl p-6 text-center">
            <p className="text-3xl md:text-4xl font-bold text-primary mb-2">$250K</p>
            <p className="text-sm text-gray-400">Creator Earnings</p>
          </div> */}
        </div>

        {/* Market Visualization */}
        <div className="relative mb-16 mt-10">
          <div className="absolute inset-0 bg-gradient-to-r from-primary/20 via-primary/5 to-transparent rounded-2xl blur-xl opacity-30"></div>
          <div className="relative bg-zinc-900 border border-zinc-800 rounded-xl p-8 overflow-hidden">
            {/* Market Header */}
            <div className="flex flex-col md:flex-row justify-between items-center mb-8 pb-6 border-b border-zinc-800">
              <h3 className="text-xl font-bold mb-4 md:mb-0">ChatMarket</h3>
              <div className="relative w-full md:w-64">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
                <input
                  type="text"
                  placeholder="Search chatbots..."
                  readOnly
                  className="w-full bg-zinc-800 border border-zinc-700 rounded-lg py-2 pl-10 pr-4 text-sm"
                />
              </div>
            </div>

            

            {/* Chatbot Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {/* Chatbot 1 */}
              <div className="bg-zinc-800 rounded-lg p-4 hover:bg-zinc-750 transition-colors cursor-pointer">
                <div className="flex items-start gap-3 mb-3">
                  <div className="bg-blue-500/10 p-2 rounded-full">
                    <MessageSquare className="h-5 w-5 text-blue-400" />
                  </div>
                  <div>
                    <h4 className="font-medium">Financial Advisor</h4>
                    <p className="text-xs text-gray-400">Investment strategies & tips</p>
                  </div>
                </div>
                <div className="flex justify-between items-center text-xs text-gray-400">
                  <span className="flex items-center gap-1">
                    <Users className="h-3 w-3" /> 2.4k users
                  </span>
                  <span className="flex items-center gap-1 text-primary">
                    $5.99 <TrendingUp className="h-3 w-3" />
                  </span>
                </div>
              </div>

              {/* Chatbot 2 */}
              <div className="bg-zinc-800 rounded-lg p-4 hover:bg-zinc-750 transition-colors cursor-pointer">
                <div className="flex items-start gap-3 mb-3">
                  <div className="bg-purple-500/10 p-2 rounded-full">
                    <MessageSquare className="h-5 w-5 text-purple-400" />
                  </div>
                  <div>
                    <h4 className="font-medium">Fitness Coach</h4>
                    <p className="text-xs text-gray-400">Personalized workout plans</p>
                  </div>
                </div>
                <div className="flex justify-between items-center text-xs text-gray-400">
                  <span className="flex items-center gap-1">
                    <Users className="h-3 w-3" /> 3.8k users
                  </span>
                  <span className="flex items-center gap-1 text-primary">
                    $4.99 <TrendingUp className="h-3 w-3" />
                  </span>
                </div>
              </div>

              {/* Chatbot 3 */}
              <div className="bg-zinc-800 rounded-lg p-4 hover:bg-zinc-750 transition-colors cursor-pointer">
                <div className="flex items-start gap-3 mb-3">
                  <div className="bg-amber-500/10 p-2 rounded-full">
                    <MessageSquare className="h-5 w-5 text-amber-400" />
                  </div>
                  <div>
                    <h4 className="font-medium">Cooking Expert</h4>
                    <p className="text-xs text-gray-400">Recipes & culinary techniques</p>
                  </div>
                </div>
                <div className="flex justify-between items-center text-xs text-gray-400">
                  <span className="flex items-center gap-1">
                    <Users className="h-3 w-3" /> 5.2k users
                  </span>
                  <span className="flex items-center gap-1 text-primary">
                    $3.99 <TrendingUp className="h-3 w-3" />
                  </span>
                </div>
              </div>
            </div>

            {/* More Chatbots */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">
              {/* Chatbot 4 */}
              <div className="bg-zinc-800 rounded-lg p-4 hover:bg-zinc-750 transition-colors cursor-pointer">
                <div className="flex items-start gap-3 mb-3">
                  <div className="bg-green-500/10 p-2 rounded-full">
                    <MessageSquare className="h-5 w-5 text-green-400" />
                  </div>
                  <div>
                    <h4 className="font-medium">AI Tools Expert</h4>
                    <p className="text-xs text-gray-400">Leverage AI to grow your income</p>
                  </div>
                </div>
                <div className="flex justify-between items-center text-xs text-gray-400">
                  <span className="flex items-center gap-1">
                    <Users className="h-3 w-3" /> 4.1k users
                  </span>
                  <span className="flex items-center gap-1 text-primary">
                    $7.99 <TrendingUp className="h-3 w-3" />
                  </span>
                </div>
              </div>

              {/* Chatbot 5 */}
              <div className="bg-zinc-800 rounded-lg p-4 hover:bg-zinc-750 transition-colors cursor-pointer">
                <div className="flex items-start gap-3 mb-3">
                  <div className="bg-red-500/10 p-2 rounded-full">
                    <MessageSquare className="h-5 w-5 text-red-400" />
                  </div>
                  <div>
                    <h4 className="font-medium">Marketing Guru</h4>
                    <p className="text-xs text-gray-400">Digital marketing strategies</p>
                  </div>
                </div>
                <div className="flex justify-between items-center text-xs text-gray-400">
                  <span className="flex items-center gap-1">
                    <Users className="h-3 w-3" /> 3.3k users
                  </span>
                  <span className="flex items-center gap-1 text-primary">
                    $6.99 <TrendingUp className="h-3 w-3" />
                  </span>
                </div>
              </div>

              {/* Chatbot 6 */}
              <div className="bg-zinc-800 rounded-lg p-4 hover:bg-zinc-750 transition-colors cursor-pointer">
                <div className="flex items-start gap-3 mb-3">
                  <div className="bg-cyan-500/10 p-2 rounded-full">
                    <MessageSquare className="h-5 w-5 text-cyan-400" />
                  </div>
                  <div>
                    <h4 className="font-medium">Crypto Guru</h4>
                    <p className="text-xs text-gray-400">Get Hidden crypto Gem opportunities</p>
                  </div>
                </div>
                <div className="flex justify-between items-center text-xs text-gray-400">
                  <span className="flex items-center gap-1">
                    <Users className="h-3 w-3" /> 6.7k users
                  </span>
                  <span className="flex items-center gap-1 text-primary">
                    $4.99 <TrendingUp className="h-3 w-3" />
                  </span>
                </div>
              </div>
            </div>

            {/* View More Button */}
            {/* <div className="mt-8 text-center">
              <Button variant="outline" className="border-zinc-700 text-gray-400 hover:text-white hover:bg-zinc-800">
                Explore All Chatbots
              </Button>
            </div> */}
          </div>
        </div>


      </div>
    </section>
  )
}

