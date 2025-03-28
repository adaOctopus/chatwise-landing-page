import { ArrowRight, Upload, DollarSign, BellRing, LogOut } from "lucide-react"
import { Button } from "@/components/ui/button"
import { TrendingUp, Sparkles, Coins } from "lucide-react"
import Link from "next/link"
import { ImageCarousel } from "@/components/image-carousel"
import { EaseOfUseSection } from "@/components/ease-of-use"
import { ChatMarketSection } from "@/components/chat-market"
import { PricingSection } from "@/components/pricing-section"
import { SocialProofSection } from "@/components/social-proof"
import { NewsletterForm } from "@/components/newsletter-form"
import { Footer } from "@/components/footer"
import chatwise1 from "@/public/img/chatwise1.png"
import chatwise2 from '@/public/img/chatwise2.png'
import chatwise3 from '@/public/img/chatwise99.png'
import chatwise4 from '@/public/img/chatwise4.png'
import chatwise5 from '@/public/img/chatwise5.png'
import chatwise6 from '@/public/img/chatwise6.png'
import chatwise7 from '@/public/img/chatwise77.png'
import chatwise8 from '@/public/img/chatwise8.png'
import chatwise9 from '@/public/img/chatwise9.png'
import logo from "@/public/img/logo.png"

export default function Home() {
  const carouselImages = [
    {
      src: chatwise1.src,
      alt: "chatWise AI Assistant Interface",
    },
    {
      src: chatwise2.src,
      alt: "chatWise File Upload Interface",
    },
    {
      src: chatwise3.src,
      alt: "chatWise Chat Market Interface",
    },
    {
      src: chatwise9.src,
      alt: "chatWise Chatbot Settings",
    },
    {
      src: chatwise5.src,
      alt: "chatWise Chatbot Creation",
    },
    {
      src: chatwise6.src,
      alt: "chatWise Chatbot Monetization",
    },
    {
      src: chatwise7.src,
      alt: "chatWise Chatbot Dashboard",
    },
    {
      src: chatwise8.src,
      alt: "chatWise Chatbot Analytics",
    },
   
  ]

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Navbar */}
      <header className="container mx-auto py-6 px-4 flex justify-between items-center">
        <div className="flex items-center gap-2">
          <div className="bg-primary/10 p-2 rounded-full">
            <img
              src={logo.src}
              alt="chatWise Logo"
              className="h-6 w-6 rounded-full"
            />
          </div>
          <h1 className="text-xl font-bold">chatWise</h1>
        </div>
        {/* <Button className="bg-primary hover:bg-primary/90 text-white">
          Launch App
          <ArrowRight className="ml-2 h-4 w-4" />
        </Button> */}
      </header>

      {/* Hero Section */}
      <section className="container mx-auto px-4 py-20 md:py-32">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-3xl md:text-5xl font-bold mb-6">
            Turn Your Knowledge Into a<span className="text-primary"> Cash-Making </span>
            Chatbot
          </h1>
          <p className="text-lg md:text-xl text-gray-400 mb-8 max-w-2xl mx-auto">
            Turn your files, text, links and screenshots into an AI chatbot that others can learn from. With a click. The fastest way to make money from your content.
          </p>

          <Button size="lg" className="bg-primary hover:bg-primary/90 text-white px-8 py-6 text-lg">

          <Link href="https://www.chatwise.live" target="_blank">
          
            GET STARTED
            {/* <ArrowRight className="ml-2 h-5 w-5" /> */}
        
          </Link>
          </Button>
          
        </div>

        <div className="mt-16 px-4 sm:px-8 md:px-16">
          <ImageCarousel images={carouselImages} />
        </div>
      </section>

       {/* Ease of Use Section */}
       <EaseOfUseSection />

      {/* Value Proposition Section */}
      <section className="container mx-auto px-4 py-20 bg-zinc-950/50">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-6">Ready to Earn From Your Content?</h2>
          <p className="text-gray-400 text-center mb-16 max-w-2xl mx-auto">
            Tired of making content and spending all your time and energy without getting paid much?
          </p>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="flex items-start gap-4">
                <div className="bg-primary/10 p-3 rounded-full mt-1">
                  <Sparkles className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Your Knowledge Has Value</h3>
                  <p className="text-gray-400">
                    The time you spend creating content and sharing insights is valuable. It deserves more than just
                    likes and shares.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-primary/10 p-3 rounded-full mt-1">
                  <Coins className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Turn Expertise Into Income</h3>
                  <p className="text-gray-400">
                    chatWise transforms your knowledge into interactive AI chatbots that people pay to access—creating a
                    passive income stream.
                  </p>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="absolute -inset-0.5 bg-gradient-to-r from-primary/20 to-primary/0 rounded-2xl blur-xl opacity-50"></div>
              <div className="relative bg-zinc-900 p-8 rounded-xl border border-zinc-800">
                <div className="flex justify-center mb-8">
                  <div className="relative">
                    <div className="absolute -inset-4 bg-primary/20 rounded-full blur-xl opacity-70"></div>
                    <div className="relative bg-primary/10 p-6 rounded-full">
                      <TrendingUp className="h-12 w-12 text-primary" />
                    </div>
                  </div>
                </div>

                <div className="space-y-4">
                  <div className="flex items-center justify-between border-b border-zinc-800 pb-3">
                    <span className="text-gray-400">Social Media</span>
                    <span className="font-medium text-gray-300">Likes & Comments</span>
                  </div>
                  <div className="flex items-center justify-between border-b border-zinc-800 pb-3">
                    <span className="text-gray-400">chatWise</span>
                    <span className="font-bold text-primary">Real Income</span>
                  </div>
                  <div className="flex items-center justify-between border-b border-zinc-800 pb-3">
                    <span className="text-gray-400">Your Time</span>
                    <span className="font-bold text-primary">Properly Valued</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-gray-400">Your Content</span>
                    <span className="font-bold text-primary">Your Profits</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

           {/* ChatMarket Section */}
           <ChatMarketSection />

      {/* Features Section */}
      <section className="container mx-auto px-4 py-20 bg-zinc-950" id="features">
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-16">How It Works</h2>

        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-zinc-900 p-8 rounded-xl border border-zinc-800">
            <div className="bg-primary/20 p-4 rounded-full w-fit mb-6">
              <Upload className="h-6 w-6 text-primary" />
            </div>
            <h3 className="text-xl font-bold mb-3">Upload Your Content</h3>
            <p className="text-gray-400">
              Simply upload any files, text, links of posts, articles or screenshots of your content, and you are good to go.
            </p>
          </div>

          <div className="bg-zinc-900 p-8 rounded-xl border border-zinc-800">
            <div className="bg-primary/20 p-4 rounded-full w-fit mb-6">
              <img
                src={logo.src}
                alt="chatWise Icon"
                className="h-6 w-6 rounded-full"
              />
            </div>
            <h3 className="text-xl font-bold mb-3">Instant Chatbot Creation</h3>
            <p className="text-gray-400">
              Our AI instantly transforms your content into an interactive chatbot that answers questions using the latest LLMs.
            </p>
          </div>

          <div className="bg-zinc-900 p-8 rounded-xl border border-zinc-800">
            <div className="bg-primary/20 p-4 rounded-full w-fit mb-6">
              <DollarSign className="h-6 w-6 text-primary" />
            </div>
            <h3 className="text-xl font-bold mb-3">Monetize Your Knowledge</h3>
            <p className="text-gray-400">
              Set your price and start earning as users access your chatbot to learn from your expertise while you sleep.
            </p>
          </div>
          
        </div>
      </section>

        {/* Social Proof Section */}
        {/* <SocialProofSection /> */}
        <PricingSection/>

      {/* Early Access Section */}
      {/* <section className="container mx-auto px-4 py-20 bg-zinc-950/50 mb-40" id="early-access">
        <div className="max-w-3xl mx-auto text-center">
          <div className="bg-primary/10 p-3 rounded-full w-fit mx-auto mb-6">
            <BellRing className="h-6 w-6 text-primary" />
          </div>
          <h2 className="text-2xl md:text-3xl font-bold mb-4">Be First to Know When We Launch</h2>
          <p className="text-gray-400 mb-8 max-w-2xl mx-auto">
            Join our early access list and be the first to monetize your knowledge when we launch.
          </p>

          <NewsletterForm />
        </div>
      </section> */}

      {/* CTA Section */}
      {/* <section className="container mx-auto px-4 py-20" id="cta">
        <div className="bg-gradient-to-r from-primary/20 to-zinc-900 rounded-2xl p-8 md:p-16 text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-6">Ready to Turn Your Knowledge Into Income?</h2>
          <p className="text-lg text-gray-400 mb-8 max-w-2xl mx-auto">
            Join the growing community of experts who are monetizing their knowledge with chatWise.
          </p>
          <Button size="lg" className="bg-primary hover:bg-primary/90 text-white px-8 py-6 text-lg">
            <a href="#newsletter-form">JOIN WAITLIST</a>
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </section> */}

      {/* Footer */}
      <Footer />
    </div>
  )
}

