"use client"

import { useState, useEffect } from "react"
import { Menu } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import Image from "next/image"
import Link from "next/link"

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header
      className={`fixed top-4 left-0 right-0 z-50 mx-auto w-[95%] max-w-7xl transition-all duration-300 ${
        scrolled ? "bg-black/80 backdrop-blur-md" : "bg-transparent"
      } rounded-full px-4 py-2`}
    >
      <div className="flex items-center justify-between">
        <div className="flex items-center">
          <Link href="/" className="mr-6">
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Stephy%20New%20logo%20V1%20white%20icon%20only-iFwehHAJvU6gRmO2k3Pw7BI16hgD0K.png"
              alt="Stephy Longueira Logo"
              width={40}
              height={40}
              className="object-contain"
            />
          </Link>
          <div className="hidden md:flex md:gap-6 lg:gap-10">
            <Link href="/about" className="text-sm font-medium text-white hover:text-gray-300 transition-colors">
              About
            </Link>
            <Link
              href="/upcoming-shows"
              className="text-sm font-medium text-white hover:text-gray-300 transition-colors"
            >
              Upcoming Shows
            </Link>
            <Link href="/gallery" className="text-sm font-medium text-white hover:text-gray-300 transition-colors">
              Gallery
            </Link>
            <Link href="/footage" className="text-sm font-medium text-white hover:text-gray-300 transition-colors">
              Footage
            </Link>
          </div>
        </div>

        <Sheet>
          <SheetTrigger asChild className="md:hidden">
            <Button variant="ghost" size="icon" className="text-white">
              <Menu className="h-6 w-6" />
              <span className="sr-only">Toggle menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="left" className="bg-black text-white">
            <div className="flex flex-col gap-6 mt-10">
              <Link href="/about" className="text-lg font-medium text-white hover:text-gray-300 transition-colors">
                About
              </Link>
              <Link
                href="/upcoming-shows"
                className="text-lg font-medium text-white hover:text-gray-300 transition-colors"
              >
                Upcoming Shows
              </Link>
              <Link href="/gallery" className="text-lg font-medium text-white hover:text-gray-300 transition-colors">
                Gallery
              </Link>
              <Link href="/footage" className="text-lg font-medium text-white hover:text-gray-300 transition-colors">
                Footage
              </Link>
            </div>
          </SheetContent>
        </Sheet>

        <div className="ml-auto md:ml-0">
          <Button
            variant="outline"
            className="rounded-full border-white text-white hover:bg-white hover:text-black bg-transparent"
          >
            Book Now
          </Button>
        </div>
      </div>
    </header>
  )
}
