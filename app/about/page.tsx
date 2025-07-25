import Navbar from "@/components/navbar"
import About from "@/components/about"
import Footer from "@/components/footer"

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-black text-white">
      <Navbar />
      <div className="pt-24">
        <About />
      </div>
      <Footer />
    </main>
  )
}
