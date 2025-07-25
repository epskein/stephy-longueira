import { Calendar, MapPin, Clock } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function UpcomingShows() {
  const shows = [
    {
      id: 1,
      date: "June 15, 2025",
      venue: "Club Zenith",
      location: "Berlin, Germany",
      time: "22:00 - 04:00",
      ticketLink: "#",
    },
    {
      id: 2,
      date: "June 28, 2025",
      venue: "Electric Festival",
      location: "Amsterdam, Netherlands",
      time: "20:30 - 22:00",
      ticketLink: "#",
    },
    {
      id: 3,
      date: "July 10, 2025",
      venue: "Ibiza Beach Club",
      location: "Ibiza, Spain",
      time: "23:00 - 05:00",
      ticketLink: "#",
    },
    {
      id: 4,
      date: "July 24, 2025",
      venue: "Tomorrowland",
      location: "Boom, Belgium",
      time: "18:00 - 19:30",
      ticketLink: "#",
    },
    {
      id: 5,
      date: "August 8, 2025",
      venue: "Space Miami",
      location: "Miami, USA",
      time: "22:00 - 04:00",
      ticketLink: "#",
    },
  ]

  return (
    <section id="upcoming-shows" className="py-20 bg-black">
      <div className="container px-4 md:px-6 mx-auto">
        <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-12">
          Upcoming Shows
        </h2>

        <div className="grid gap-6">
          {shows.map((show) => (
            <div
              key={show.id}
              className="group relative overflow-hidden rounded-lg bg-gray-900 p-6 transition-all hover:bg-gray-800"
            >
              <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                <div className="space-y-1">
                  <div className="flex items-center gap-2 text-purple-400">
                    <Calendar className="h-4 w-4" />
                    <span className="text-sm font-medium">{show.date}</span>
                  </div>
                  <h3 className="text-xl font-bold">{show.venue}</h3>
                  <div className="flex items-center gap-2 text-gray-400">
                    <MapPin className="h-4 w-4" />
                    <span className="text-sm">{show.location}</span>
                  </div>
                  <div className="flex items-center gap-2 text-gray-400">
                    <Clock className="h-4 w-4" />
                    <span className="text-sm">{show.time}</span>
                  </div>
                </div>
                <Button asChild className="md:self-end">
                  <a href={show.ticketLink} target="_blank" rel="noopener noreferrer">
                    Get Tickets
                  </a>
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
