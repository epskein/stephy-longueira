"use client"

import { useEffect, useRef } from "react"
import Image from "next/image"

export default function VenuesCarousel() {
  const scrollRef = useRef<HTMLDivElement>(null)

  const venues = [
    {
      src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Modular-rXawS9vSZG2F59B8jKq6zhjGNoklt7.png",
      alt: "Modular",
      name: "Modular",
      isWide: true,
    },
    {
      src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/PH40072.Halo-Primary-%40300-1024x389-gVZNjxqbrqKUGfpA8NVu1pkt0j9sfB.png",
      alt: "Halo",
      name: "Halo",
      isWide: true,
    },
    {
      src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Pandora-3.0.jpg-w7QaZhoS5K4tQceiKh58nh94XPMdPr.jpeg",
      alt: "Pandora 3.0",
      name: "Pandora 3.0",
      isWide: false,
    },
    {
      src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/POD-October-2024-Web-Banner-980x551.jpg-z0NAXicNwkmfEtP2xBpqQYAO8Vf5p4.png",
      alt: "POD October - The Illumination",
      name: "POD October",
      isWide: false,
    },
    {
      src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Rage%20Festival.jpg-pTBL0ZO3htd60sPbthN96KthgFSNNW.png",
      alt: "Rage Festival",
      name: "Rage Festival",
      isWide: false,
    },
    {
      src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Sounds%20of%20Summer.jpg-p9EpdpEcirS3ozDWXwvyi33u1vcSqZ.jpeg",
      alt: "Sounds of Summer",
      name: "Sounds of Summer",
      isWide: false,
    },
    {
      src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Lost-City.jpg-M9GuaUdo0eAiiKcDfNY7OXquyHf00S.png",
      alt: "Lost City",
      name: "Lost City",
      isWide: false,
    },
    {
      src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/afrikaburn-identity-ASxOQaWSPfCMF2LOimI8MPt50alwMb.png",
      alt: "Afrikaburn",
      name: "Afrikaburn",
      isWide: true,
    },
  ]

  useEffect(() => {
    const scrollContainer = scrollRef.current
    if (!scrollContainer) return

    let animationId: number
    let scrollPosition = scrollContainer.scrollWidth / 2
    const scrollSpeed = 0.5

    const animate = () => {
      scrollPosition -= scrollSpeed // Negative for opposite direction

      // Reset scroll position when we've scrolled past the beginning
      if (scrollPosition <= 0) {
        scrollPosition = scrollContainer.scrollWidth / 2
      }

      scrollContainer.scrollLeft = scrollPosition
      animationId = requestAnimationFrame(animate)
    }

    animationId = requestAnimationFrame(animate)

    return () => {
      if (animationId) {
        cancelAnimationFrame(animationId)
      }
    }
  }, [])

  return (
    <section className="py-20 bg-black overflow-hidden relative">
      <div className="mb-12">
        <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center">Featured Venues</h2>
        <p className="text-center text-gray-400 mt-4 max-w-2xl mx-auto px-4">
          Prestigious clubs and festivals where Stephy has performed
        </p>
      </div>

      <div ref={scrollRef} className="flex gap-8 overflow-x-hidden" style={{ scrollBehavior: "auto" }}>
        {/* Duplicate venues for seamless loop */}
        {[...venues, ...venues].map((venue, index) => (
          <div
            key={index}
            className={`flex-shrink-0 h-40 relative rounded-2xl overflow-hidden group bg-gray-900/50 backdrop-blur-sm border border-white/10 ${
              venue.isWide ? "w-96" : "w-64"
            }`}
          >
            <Image
              src={venue.src || "/placeholder.svg"}
              alt={venue.alt}
              fill
              className="object-cover transition-transform duration-500 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl" />
          </div>
        ))}
      </div>

      {/* Gradient overlays for smooth edges */}
      <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-black to-transparent pointer-events-none z-10" />
      <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-black to-transparent pointer-events-none z-10" />
    </section>
  )
}
