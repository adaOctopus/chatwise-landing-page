"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { CheckCircle2, Loader2, AlertCircle } from "lucide-react"
import { subscribeToNewsletter } from "@/lib/actions"

export function NewsletterForm() {
  const [email, setEmail] = useState("")
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle")
  const [message, setMessage] = useState("")
  const [isMounted, setIsMounted] = useState(false)

  // Only run client-side effects after component is mounted
  useEffect(() => {
    setIsMounted(true)
  }, [])

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!email || !/^\S+@\S+\.\S+$/.test(email)) {
      setStatus("error")
      setMessage("Please enter a valid email address")
      return
    }

    setStatus("loading")

    try {
      const result = await subscribeToNewsletter(email)

      if (result.success) {
        setStatus("success")
        setMessage(result.message)
        setEmail("")
      } else {
        setStatus("error")
        setMessage(result.message)
      }
    } catch (error) {
      console.error("Form submission error:", error)
      setStatus("error")
      setMessage("Something went wrong. Please try again later.")
    }
  }

  // Use a simple placeholder during SSR to avoid hydration mismatch
  if (!isMounted) {
    return <div className="w-full h-12 bg-zinc-900 rounded-lg"></div>
  }

  return (
    <div className="w-full max-w-md mx-auto" >
      {status === "success" ? (
        <div className="bg-primary/10 p-6 rounded-xl border border-primary/20 text-center">
          <CheckCircle2 className="h-12 w-12 text-primary mx-auto mb-4" />
          <h4 className="text-xl font-bold mb-2">Thank You!</h4>
          <p className="text-gray-400">{message}</p>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="relative" id="newsletter-form">
            <Input
              type="email"
              placeholder="Enter your email address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="bg-zinc-900 border-zinc-800 text-white h-12 pl-4 pr-32 rounded-lg focus:border-primary focus:ring-primary"
            />
            <Button
              type="submit"
              className="absolute right-1 top-1 bg-primary hover:bg-primary/90 text-white h-10"
              disabled={status === "loading"}
            >
              {status === "loading" ? <Loader2 className="h-4 w-4 animate-spin" /> : "JOIN"}
            </Button>
          </div>
          {status === "error" && (
            <div className="flex items-center gap-2 text-red-400 text-sm">
              <AlertCircle className="h-4 w-4" />
              <span>{message}</span>
            </div>
          )}
        </form>
      )}
    </div>
  )
}

