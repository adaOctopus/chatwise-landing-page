"use client"

import type React from "react"

import { useState, useEffect, useRef } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"

interface CarouselProps {
  images: { src: string; alt: string }[]
}

export function ImageCarousel({ images }: CarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isClient, setIsClient] = useState(false)
  const touchStartRef = useRef<number | null>(null)
  const intervalRef = useRef<NodeJS.Timeout | null>(null)

  // Only run after component is mounted on client
  useEffect(() => {
    setIsClient(true)

    // Set up the interval for auto-rotation
    intervalRef.current = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1))
    }, 5000)

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current)
      }
    }
  }, [images.length])

  const nextSlide = () => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current)
    }
    setCurrentIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1))

    // Reset the interval after manual navigation
    intervalRef.current = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1))
    }, 5000)
  }

  const prevSlide = () => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current)
    }
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1))

    // Reset the interval after manual navigation
    intervalRef.current = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1))
    }, 5000)
  }

  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartRef.current = e.touches[0].clientX
  }

  const handleTouchMove = (e: React.TouchEvent) => {
    if (touchStartRef.current === null) return

    const currentTouch = e.touches[0].clientX
    const diff = touchStartRef.current - currentTouch

    if (Math.abs(diff) > 50) {
      if (diff > 0) {
        nextSlide()
      } else {
        prevSlide()
      }
      touchStartRef.current = null
    }
  }

  // Render a static version during SSR to avoid hydration mismatch
  if (!isClient) {
    return (
      <div className="relative w-full max-w-4xl mx-auto overflow-hidden rounded-xl border border-zinc-800">
        <div className="aspect-[16/9] w-full bg-zinc-900">
          {/* Only render the first image during SSR */}
          <img src={images[0].src || "/placeholder.svg"} alt={images[0].alt} className="h-full w-full object-contain" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
        </div>
      </div>
    )
  }

  return (
    <div className="relative w-full max-w-4xl mx-auto overflow-hidden rounded-xl border border-zinc-800">
      <div
        className="relative aspect-[16/9] w-full bg-zinc-900"
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
      >
        {images.map((image, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-transform duration-500 ease-in-out ${
              index === currentIndex ? "translate-x-0" : "translate-x-full"
            } ${index === (currentIndex - 1 + images.length) % images.length ? "-translate-x-full" : ""}`}
          >
            <img src={image.src || "/placeholder.svg"} alt={image.alt} className="h-full w-full object-contain" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
          </div>
        ))}
      </div>

      {/* Navigation Buttons */}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 -translate-y-1/2 rounded-full bg-black/50 p-2 text-white backdrop-blur-sm transition-all hover:bg-black/70"
        aria-label="Previous slide"
      >
        <ChevronLeft className="h-6 w-6" />
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 -translate-y-1/2 rounded-full bg-black/50 p-2 text-white backdrop-blur-sm transition-all hover:bg-black/70"
        aria-label="Next slide"
      >
        <ChevronRight className="h-6 w-6" />
      </button>

      {/* Indicators */}
      <div className="absolute bottom-4 left-1/2 flex -translate-x-1/2 gap-2">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`h-2 rounded-full transition-all ${index === currentIndex ? "bg-white w-4" : "bg-white/50 w-2"}`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  )
}

