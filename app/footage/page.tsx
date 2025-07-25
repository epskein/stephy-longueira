import Navbar from "@/components/navbar"
import Footage from "@/components/footage"
import Footer from "@/components/footer"

export default function FootagePage() {
  return (
    <main className="min-h-screen bg-black text-white">
      <Navbar />
      <div className="pt-24">
        <Footage />
      </div>
      <Footer />
    </main>
  )
}
