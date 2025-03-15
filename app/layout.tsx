import type React from "react"
import type { Metadata } from "next"
import { DM_Sans } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"

const dmSans = DM_Sans({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "chatWise | Turn Your Knowledge Into a Cash-Making Chatbot",
  description:
    "Upload your content and instantly create an AI chatbot that others can use to learn from your expertise. Start monetizing your knowledge today.",
  keywords: [
    "AI chatbot",
    "monetize knowledge",
    "passive income",
    "content monetization",
    "AI assistant",
    "knowledge sharing",
    "earn from expertise",
    "chatbot creator",
    "AI knowledge base",
    "expert chatbot",
  ],
  authors: [{ name: "chatWise" }],
  creator: "chatWise",
  publisher: "chatWise",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://chatwise.com",
    title: "chatWise | Turn Your Knowledge Into a Cash-Making Chatbot",
    description:
      "Upload your content and instantly create an AI chatbot that others can use to learn from your expertise. Start monetizing your knowledge today.",
    siteName: "chatWise",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "chatWise - Monetize Your Knowledge",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "chatWise | Turn Your Knowledge Into a Cash-Making Chatbot",
    description:
      "Upload your content and instantly create an AI chatbot that others can use to learn from your expertise. Start monetizing your knowledge today.",
    images: ["/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="dark">
      <head>
        <link rel="canonical" href="https://chatwise.com" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebSite",
              name: "chatWise",
              url: "https://chatwise.com",
              potentialAction: {
                "@type": "SearchAction",
                target: "https://chatwise.com/search?q={search_term_string}",
                "query-input": "required name=search_term_string",
              },
              description:
                "Upload your content and instantly create an AI chatbot that others can use to learn from your expertise. Start monetizing your knowledge today.",
            }),
          }}
        />
      </head>
      <body className={dmSans.className}>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem={false}>
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}

