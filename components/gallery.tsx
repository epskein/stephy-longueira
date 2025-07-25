import Image from "next/image"

export default function Gallery() {
  const images = [
    {
      src: "/placeholder.svg?height=600&width=800&query=dj performing at nightclub with crowd",
      alt: "Stephy performing at a nightclub",
    },
    {
      src: "/placeholder.svg?height=600&width=800&query=dj at music festival with light show",
      alt: "Stephy at a music festival",
    },
    {
      src: "/placeholder.svg?height=600&width=800&query=dj in recording studio with equipment",
      alt: "Stephy in the recording studio",
    },
    {
      src: "/placeholder.svg?height=600&width=800&query=dj performing at beach party sunset",
      alt: "Stephy at a beach party",
    },
    {
      src: "/placeholder.svg?height=600&width=800&query=dj with fans after show",
      alt: "Stephy with fans",
    },
    {
      src: "/placeholder.svg?height=600&width=800&query=dj performing at large arena concert",
      alt: "Stephy at an arena concert",
    },
  ]

  return (
    <section id="gallery" className="py-20 bg-gradient-to-b from-gray-900 to-black">
      <div className="container px-4 md:px-6 mx-auto">
        <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-12">Gallery</h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {images.map((image, index) => (
            <div key={index} className="group relative overflow-hidden rounded-lg">
              <Image
                src={image.src || "/placeholder.svg"}
                alt={image.alt}
                width={800}
                height={600}
                className="h-80 w-full object-cover transition-transform duration-300 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black/60 opacity-0 transition-opacity group-hover:opacity-100 flex items-center justify-center">
                <span className="text-white text-lg font-medium">{image.alt}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
