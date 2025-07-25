export default function Footage() {
  const videos = [
    {
      id: "video1",
      title: "Live at Club Zenith",
      description: "Highlights from Stephy's electrifying performance at Club Zenith in Berlin",
      embedUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    },
    {
      id: "video2",
      title: "Tomorrowland 2024",
      description: "Full set from Stephy's main stage performance at Tomorrowland 2024",
      embedUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    },
    {
      id: "video3",
      title: "Studio Session: Making of 'Euphoria'",
      description: "Behind the scenes look at the creation of Stephy's hit track 'Euphoria'",
      embedUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    },
  ]

  return (
    <section id="footage" className="py-20 bg-black">
      <div className="container px-4 md:px-6 mx-auto">
        <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-12">Footage</h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {videos.map((video) => (
            <div key={video.id} className="space-y-4">
              <div className="aspect-video overflow-hidden rounded-lg">
                <iframe
                  src={video.embedUrl}
                  title={video.title}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="h-full w-full"
                />
              </div>
              <div>
                <h3 className="text-xl font-bold">{video.title}</h3>
                <p className="text-gray-400">{video.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
