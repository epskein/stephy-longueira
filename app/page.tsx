import Navbar from "@/components/navbar"
import Hero from "@/components/hero"
import VenuesCarousel from "@/components/venues-carousel"
import ImageCarousel from "@/components/image-carousel"
import Footer from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white">
      <Navbar />
      <Hero />
      <VenuesCarousel />
      <ImageCarousel />
      <Footer />
    </main>
  )
}
