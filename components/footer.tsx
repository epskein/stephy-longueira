import { Instagram, Facebook, Twitter, Youtube, Music, Mail } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export default function Footer() {
  return (
    <footer className="bg-black py-12 border-t border-gray-800">
      <div className="container px-4 md:px-6 mx-auto">
        <div className="flex flex-col items-center space-y-8">
          <div className="w-[150px]">
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Stephy%20New%20logo%20V1%20white-yTscy2yrNgaATBqymjZ5ceogrqg84p.png"
              alt="Stephy Longueira Logo"
              width={150}
              height={100}
              className="object-contain"
            />
          </div>

          <div className="flex space-x-6">
            <a href="#" className="text-gray-400 hover:text-white transition-colors">
              <Instagram className="h-6 w-6" />
              <span className="sr-only">Instagram</span>
            </a>
            <a href="#" className="text-gray-400 hover:text-white transition-colors">
              <Facebook className="h-6 w-6" />
              <span className="sr-only">Facebook</span>
            </a>
            <a href="#" className="text-gray-400 hover:text-white transition-colors">
              <Twitter className="h-6 w-6" />
              <span className="sr-only">Twitter</span>
            </a>
            <a href="#" className="text-gray-400 hover:text-white transition-colors">
              <Youtube className="h-6 w-6" />
              <span className="sr-only">YouTube</span>
            </a>
            <a href="#" className="text-gray-400 hover:text-white transition-colors">
              <Music className="h-6 w-6" />
              <span className="sr-only">SoundCloud</span>
            </a>
          </div>

          <nav className="flex flex-wrap justify-center gap-6 text-sm">
            <Link href="/about" className="text-gray-400 hover:text-white transition-colors">
              About
            </Link>
            <Link href="/upcoming-shows" className="text-gray-400 hover:text-white transition-colors">
              Upcoming Shows
            </Link>
            <Link href="/gallery" className="text-gray-400 hover:text-white transition-colors">
              Gallery
            </Link>
            <Link href="/footage" className="text-gray-400 hover:text-white transition-colors">
              Footage
            </Link>
          </nav>

          <div className="flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-8">
            <a
              href="mailto:booking@stephyongueira.com"
              className="flex items-center space-x-2 text-gray-400 hover:text-white transition-colors"
            >
              <Mail className="h-4 w-4" />
              <span>booking@stephyongueira.com</span>
            </a>
          </div>

          <div className="text-center text-gray-500 text-sm">
            <p>© {new Date().getFullYear()} Stephy Longueira. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  )
}
