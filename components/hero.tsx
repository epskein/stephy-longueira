"use client"

import { useEffect, useState } from "react"
import Image from "next/image"

export default function Hero() {
  const [scrollY, setScrollY] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <section className="relative h-screen w-full overflow-hidden">
      {/* Hero background image with parallax effect */}
      <div
        className="absolute inset-0 z-0"
        style={{
          transform: `translateY(${scrollY * 0.5}px)`,
        }}
      >
        <Image
          src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Stephy%20Website%20top%20image%20JPEG.jpg-kWHKbFlX0JxxDk5KXGze1WsuUlJORE.jpeg"
          alt="DJ Stephy Ongueira"
          fill
          priority
          className="object-cover scale-110"
        />
        <div className="absolute inset-0 bg-black/20" />
      </div>

      {/* Logo overlay with parallax effect */}
      <div
        className="absolute top-1/4 left-8 z-10 md:left-16 lg:left-24 w-[200px] md:w-[300px]"
        style={{
          transform: `translateY(${scrollY * 0.3}px)`,
        }}
      >
        <Image
          src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Stephy%20New%20logo%20V1%20white-yTscy2yrNgaATBqymjZ5ceogrqg84p.png"
          alt="Stephy Ongueira Logo"
          width={300}
          height={200}
          className="object-contain"
        />
      </div>

      {/* Black fade transition at bottom */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black to-transparent z-20" />
    </section>
  )
}
