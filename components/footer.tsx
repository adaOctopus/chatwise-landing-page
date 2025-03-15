"use client"

import Link from "next/link"
import { Twitter, Linkedin, Mail, Github } from "lucide-react"
import logo from "@/public/img/logo.png"

// Remove all dynamic content that could cause hydration mismatches
export function Footer() {
  return (
    <footer className="border-t border-zinc-800" id="contact">
      <div className="container mx-auto">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 py-16 px-4">
          {/* Brand Column */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <div className="bg-primary/10 p-2 rounded-full">
                <img
                  src={logo.src}
                  alt="chatWise Logo"
                  className="h-8 w-8 rounded-full"
                />
              </div>
              <span className="text-xl font-bold">chatWise</span>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed">
              Transform your expertise into an interactive AI chatbot and start monetizing your knowledge today.
            </p>
          </div>

          {/* Quick Links */}
          <div className="md:text-center space-y-4">
            <h3 className="text-sm font-semibold text-gray-300 uppercase tracking-wider">Quick Links</h3>
            <div className="space-y-3">
              <Link href="#features" className="block text-gray-400 hover:text-primary transition-colors">
                Features
              </Link>
              <Link href="#early-access" className="block text-gray-400 hover:text-primary transition-colors">
                Early Access
              </Link>
              <Link href="#" className="block text-gray-400 hover:text-primary transition-colors">
                Privacy Policy
              </Link>
              <Link href="#" className="block text-gray-400 hover:text-primary transition-colors">
                Terms of Service
              </Link>
            </div>
          </div>

          {/* Contact Column */}
          <div className="md:text-right space-y-4">
            <h3 className="text-sm font-semibold text-gray-300 uppercase tracking-wider">Connect With Us</h3>
            <a
              href="mailto:contact@chatwise.com"
              className="inline-flex items-center text-gray-400 hover:text-primary transition-colors"
            >
              <Mail className="h-4 w-4 mr-2" />
              contact@chatwise.com
            </a>
            <div className="flex gap-4 md:justify-end pt-2">
              <Link
                href="https://twitter.com"
                className="bg-zinc-900 p-2 rounded-lg text-gray-400 hover:text-primary hover:bg-zinc-800 transition-colors"
              >
                <Twitter className="h-5 w-5" />
                <span className="sr-only">Twitter</span>
              </Link>
              <Link
                href="https://github.com"
                className="bg-zinc-900 p-2 rounded-lg text-gray-400 hover:text-primary hover:bg-zinc-800 transition-colors"
              >
                <Github className="h-5 w-5" />
                <span className="sr-only">GitHub</span>
              </Link>
              <Link
                href="https://linkedin.com"
                className="bg-zinc-900 p-2 rounded-lg text-gray-400 hover:text-primary hover:bg-zinc-800 transition-colors"
              >
                <Linkedin className="h-5 w-5" />
                <span className="sr-only">LinkedIn</span>
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom Bar - HARDCODED YEAR to prevent hydration mismatch */}
        <div className="border-t border-zinc-800 py-8 px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">© 2025 chatWise. All rights reserved.</p>
            <div className="flex items-center gap-6 mt-4 md:mt-0">
              <Link href="#" className="text-sm text-gray-400 hover:text-primary transition-colors">
                Privacy
              </Link>
              <Link href="#" className="text-sm text-gray-400 hover:text-primary transition-colors">
                Terms
              </Link>
              <Link href="#" className="text-sm text-gray-400 hover:text-primary transition-colors">
                Contact
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

