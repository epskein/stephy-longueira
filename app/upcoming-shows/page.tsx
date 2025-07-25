import Navbar from "@/components/navbar"
import UpcomingShows from "@/components/upcoming-shows"
import Footer from "@/components/footer"

export default function UpcomingShowsPage() {
  return (
    <main className="min-h-screen bg-black text-white">
      <Navbar />
      <div className="pt-24">
        <UpcomingShows />
      </div>
      <Footer />
    </main>
  )
}
