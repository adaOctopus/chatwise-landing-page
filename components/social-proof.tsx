import { Star, DollarSign, Calendar, BarChart3 } from "lucide-react"

export function SocialProofSection() {
  return (
    <section className="container mx-auto px-4 py-20 bg-zinc-950">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">Real People, Real Earnings</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Join the growing community of knowledge creators who are earning passive income every month with chatWise.
          </p>
        </div>

        {/* Success Stories */}
        <div className="grid md:grid-cols-3 gap-8">
          {/* Success Story 1 */}
          <div className="bg-zinc-900 rounded-xl border border-zinc-800 p-8 relative overflow-hidden">
            <div className="absolute -right-8 -top-8 bg-primary/10 w-24 h-24 rounded-full blur-xl opacity-50"></div>
            <div className="relative">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 bg-zinc-800 rounded-full overflow-hidden">
                  <img
                    src="/placeholder.svg?height=48&width=48"
                    alt="Sarah J."
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <h3 className="font-bold">Sarah J.</h3>
                  <p className="text-sm text-gray-400">Financial Advisor</p>
                </div>
              </div>

              <div className="flex mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-4 w-4 text-yellow-400 fill-yellow-400" />
                ))}
              </div>

              <p className="text-gray-300 mb-6">
                "I've been sharing financial advice for years on my blog. With chatWise, I'm now earning $2,300/month
                from the same content, with zero additional work."
              </p>

              <div className="pt-6 border-t border-zinc-800 flex justify-between">
                <div className="flex items-center gap-2">
                  <DollarSign className="h-4 w-4 text-primary" />
                  <span className="text-sm font-medium">$2,300/mo</span>
                </div>
                <div className="flex items-center gap-2">
                  <Calendar className="h-4 w-4 text-gray-400" />
                  <span className="text-sm text-gray-400">8 months</span>
                </div>
              </div>
            </div>
          </div>

          {/* Success Story 2 */}
          <div className="bg-zinc-900 rounded-xl border border-zinc-800 p-8 relative overflow-hidden">
            <div className="absolute -right-8 -top-8 bg-primary/10 w-24 h-24 rounded-full blur-xl opacity-50"></div>
            <div className="relative">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 bg-zinc-800 rounded-full overflow-hidden">
                  <img
                    src="/placeholder.svg?height=48&width=48"
                    alt="Marcus T."
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <h3 className="font-bold">Marcus T.</h3>
                  <p className="text-sm text-gray-400">Fitness Coach</p>
                </div>
              </div>

              <div className="flex mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-4 w-4 text-yellow-400 fill-yellow-400" />
                ))}
              </div>

              <p className="text-gray-300 mb-6">
                "I uploaded my workout guides and nutrition plans to chatWise. Now I'm making $1,850/month while I
                sleep. The setup took less than an hour."
              </p>

              <div className="pt-6 border-t border-zinc-800 flex justify-between">
                <div className="flex items-center gap-2">
                  <DollarSign className="h-4 w-4 text-primary" />
                  <span className="text-sm font-medium">$1,850/mo</span>
                </div>
                <div className="flex items-center gap-2">
                  <Calendar className="h-4 w-4 text-gray-400" />
                  <span className="text-sm text-gray-400">5 months</span>
                </div>
              </div>
            </div>
          </div>

          {/* Success Story 3 */}
          <div className="bg-zinc-900 rounded-xl border border-zinc-800 p-8 relative overflow-hidden">
            <div className="absolute -right-8 -top-8 bg-primary/10 w-24 h-24 rounded-full blur-xl opacity-50"></div>
            <div className="relative">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 bg-zinc-800 rounded-full overflow-hidden">
                  <img
                    src="/placeholder.svg?height=48&width=48"
                    alt="Elena R."
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <h3 className="font-bold">Elena R.</h3>
                  <p className="text-sm text-gray-400">Language Teacher</p>
                </div>
              </div>

              <div className="flex mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-4 w-4 text-yellow-400 fill-yellow-400" />
                ))}
              </div>

              <p className="text-gray-300 mb-6">
                "My Spanish learning materials were just sitting on my hard drive. Now they're earning me $3,100/month
                through chatWise, with zero maintenance."
              </p>

              <div className="pt-6 border-t border-zinc-800 flex justify-between">
                <div className="flex items-center gap-2">
                  <DollarSign className="h-4 w-4 text-primary" />
                  <span className="text-sm font-medium">$3,100/mo</span>
                </div>
                <div className="flex items-center gap-2">
                  <Calendar className="h-4 w-4 text-gray-400" />
                  <span className="text-sm text-gray-400">11 months</span>
                </div>
              </div>
            </div>
          </div>
        </div>


      </div>
    </section>
  )
}

// CHART

        {/* Earnings Graph */}
        // <div className="mt-16 bg-zinc-900 rounded-xl border border-zinc-800 p-8">
        //   <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8">
        //     <div>
        //       <h3 className="text-xl font-bold mb-2">Average Creator Earnings</h3>
        //       <p className="text-gray-400">Monthly earnings growth for active creators</p>
        //     </div>
        //     <div className="mt-4 md:mt-0 flex items-center gap-4">
        //       <div className="flex items-center gap-2">
        //         <div className="w-3 h-3 rounded-full bg-primary"></div>
        //         <span className="text-sm text-gray-400">First 6 months</span>
        //       </div>
        //       <div className="flex items-center gap-2">
        //         <div className="w-3 h-3 rounded-full bg-blue-400"></div>
        //         <span className="text-sm text-gray-400">After 6 months</span>
        //       </div>
        //     </div>
        //   </div>

        //   {/* Simplified Graph */}
        //   <div className="h-64 relative">
        //     <div className="absolute inset-0 flex items-end">
        //       {/* Month 1 */}
        //       <div className="flex-1 flex flex-col items-center">
        //         <div className="w-full max-w-[30px] bg-primary h-[15%] rounded-t-sm"></div>
        //         <span className="text-xs text-gray-500 mt-2">M1</span>
        //       </div>
        //       {/* Month 2 */}
        //       <div className="flex-1 flex flex-col items-center">
        //         <div className="w-full max-w-[30px] bg-primary h-[25%] rounded-t-sm"></div>
        //         <span className="text-xs text-gray-500 mt-2">M2</span>
        //       </div>
        //       {/* Month 3 */}
        //       <div className="flex-1 flex flex-col items-center">
        //         <div className="w-full max-w-[30px] bg-primary h-[35%] rounded-t-sm"></div>
        //         <span className="text-xs text-gray-500 mt-2">M3</span>
        //       </div>
        //       {/* Month 4 */}
        //       <div className="flex-1 flex flex-col items-center">
        //         <div className="w-full max-w-[30px] bg-primary h-[40%] rounded-t-sm"></div>
        //         <span className="text-xs text-gray-500 mt-2">M4</span>
        //       </div>
        //       {/* Month 5 */}
        //       <div className="flex-1 flex flex-col items-center">
        //         <div className="w-full max-w-[30px] bg-primary h-[50%] rounded-t-sm"></div>
        //         <span className="text-xs text-gray-500 mt-2">M5</span>
        //       </div>
        //       {/* Month 6 */}
        //       <div className="flex-1 flex flex-col items-center">
        //         <div className="w-full max-w-[30px] bg-primary h-[60%] rounded-t-sm"></div>
        //         <span className="text-xs text-gray-500 mt-2">M6</span>
        //       </div>
        //       {/* Month 7 */}
        //       <div className="flex-1 flex flex-col items-center">
        //         <div className="w-full max-w-[30px] bg-blue-400 h-[70%] rounded-t-sm"></div>
        //         <span className="text-xs text-gray-500 mt-2">M7</span>
        //       </div>
        //       {/* Month 8 */}
        //       <div className="flex-1 flex flex-col items-center">
        //         <div className="w-full max-w-[30px] bg-blue-400 h-[75%] rounded-t-sm"></div>
        //         <span className="text-xs text-gray-500 mt-2">M8</span>
        //       </div>
        //       {/* Month 9 */}
        //       <div className="flex-1 flex flex-col items-center">
        //         <div className="w-full max-w-[30px] bg-blue-400 h-[80%] rounded-t-sm"></div>
        //         <span className="text-xs text-gray-500 mt-2">M9</span>
        //       </div>
        //       {/* Month 10 */}
        //       <div className="flex-1 flex flex-col items-center">
        //         <div className="w-full max-w-[30px] bg-blue-400 h-[85%] rounded-t-sm"></div>
        //         <span className="text-xs text-gray-500 mt-2">M10</span>
        //       </div>
        //       {/* Month 11 */}
        //       <div className="flex-1 flex flex-col items-center">
        //         <div className="w-full max-w-[30px] bg-blue-400 h-[90%] rounded-t-sm"></div>
        //         <span className="text-xs text-gray-500 mt-2">M11</span>
        //       </div>
        //       {/* Month 12 */}
        //       <div className="flex-1 flex flex-col items-center">
        //         <div className="w-full max-w-[30px] bg-blue-400 h-[95%] rounded-t-sm"></div>
        //         <span className="text-xs text-gray-500 mt-2">M12</span>
        //       </div>
        //     </div>

        //     {/* Y-axis labels */}
        //     <div className="absolute left-0 inset-y-0 flex flex-col justify-between text-xs text-gray-500 pr-2">
        //       <span>$3K</span>
        //       <span>$2K</span>
        //       <span>$1K</span>
        //       <span>$0</span>
        //     </div>
        //   </div>

        //   <div className="mt-8 pt-6 border-t border-zinc-800 flex flex-col md:flex-row justify-between">
        //     <div className="flex items-center gap-2 mb-4 md:mb-0">
        //       <BarChart3 className="h-5 w-5 text-primary" />
        //       <span className="font-medium">Average monthly growth: 23%</span>
        //     </div>
        //     <div className="flex items-center gap-6">
        //       <div>
        //         <p className="text-sm text-gray-400">Starting avg.</p>
        //         <p className="font-medium">$350/mo</p>
        //       </div>
        //       <div>
        //         <p className="text-sm text-gray-400">After 1 year</p>
        //         <p className="font-medium text-primary">$2,800/mo</p>
        //       </div>
        //     </div>
        //   </div>
        // </div>