"use client"

import { useEffect, useRef } from "react"
import Image from "next/image"

export default function ImageCarousel() {
  const scrollRef = useRef<HTMLDivElement>(null)

  const images = [
    {
      src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/StephyLongueira16.jpg-IgEhRkEPe2PVgjZ4XvrAodir5a39O4.jpeg",
      alt: "Stephy DJing in studio with orange top",
    },
    {
      src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/StephyLongueira23.jpg-onnA4SrYapsc7AIV64Fj7CFcNp4kCf.jpeg",
      alt: "Stephy in artistic studio space",
    },
    {
      src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/StephyLongueira26.jpg-zjP6ix0JarqNkzVvAziuhfU53KQS45.jpeg",
      alt: "Stephy performing at rooftop venue",
    },
    {
      src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/StephyLongueira15.jpg-C7OMCuY12hjO2My7cBFcyTqAxfdugj.jpeg",
      alt: "Stephy in club with neon lighting",
    },
    {
      src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/StephyLongueira17.jpg-YX8R0Bg5je788qxwoLYdWDsTlCheiO.jpeg",
      alt: "Stephy portrait with patterned top",
    },
    {
      src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/StephyLongueira24.jpg-m9NFSnnApXSK85FOjegdvdF2JGC7lu.jpeg",
      alt: "Stephy sitting on stairs",
    },
  ]

  useEffect(() => {
    const scrollContainer = scrollRef.current
    if (!scrollContainer) return

    let animationId: number
    let scrollPosition = 0
    const scrollSpeed = 0.5

    const animate = () => {
      scrollPosition += scrollSpeed

      // Reset scroll position when we've scrolled past all images
      if (scrollPosition >= scrollContainer.scrollWidth / 2) {
        scrollPosition = 0
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
    <section className="py-20 bg-black overflow-hidden">
      <div className="mb-12">
        <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center">Behind the Decks</h2>
        <p className="text-center text-gray-400 mt-4 max-w-2xl mx-auto px-4">
          Experience the energy and passion that drives every performance
        </p>
      </div>

      <div ref={scrollRef} className="flex gap-6 overflow-x-hidden" style={{ scrollBehavior: "auto" }}>
        {/* Duplicate images for seamless loop */}
        {[...images, ...images].map((image, index) => (
          <div key={index} className="flex-shrink-0 w-80 h-96 relative rounded-lg overflow-hidden group">
            <Image
              src={image.src || "/placeholder.svg"}
              alt={image.alt}
              fill
              className="object-cover transition-transform duration-500 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </div>
        ))}
      </div>

      {/* Gradient overlays for smooth edges */}
      <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-black to-transparent pointer-events-none" />
      <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-black to-transparent pointer-events-none" />
    </section>
  )
}
