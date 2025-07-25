import { Headphones, Music, Award, Globe } from "lucide-react"

export default function About() {
  return (
    <section id="about" className="py-20 bg-gradient-to-b from-black to-gray-900">
      <div className="container px-4 md:px-6 mx-auto">
        <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-12">About Stephy</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <p className="text-lg text-gray-300">
              Stephy Ongueira is an internationally acclaimed DJ and producer known for her unique blend of electronic
              music genres and captivating performances.
            </p>
            <p className="text-lg text-gray-300">
              With over a decade of experience, Stephy has performed at some of the world's most prestigious venues and
              festivals, bringing her signature sound to audiences across the globe.
            </p>
            <p className="text-lg text-gray-300">
              Her music transcends boundaries, combining elements of house, techno, and electronic with influences from
              her diverse cultural background, creating an unforgettable experience for her fans.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-6">
            <div className="bg-gray-800 p-6 rounded-lg">
              <Headphones className="h-10 w-10 mb-4 text-purple-400" />
              <h3 className="text-xl font-bold mb-2">Unique Sound</h3>
              <p className="text-gray-300">Blending electronic genres with cultural influences</p>
            </div>

            <div className="bg-gray-800 p-6 rounded-lg">
              <Music className="h-10 w-10 mb-4 text-purple-400" />
              <h3 className="text-xl font-bold mb-2">Producer</h3>
              <p className="text-gray-300">Creating chart-topping tracks and remixes</p>
            </div>

            <div className="bg-gray-800 p-6 rounded-lg">
              <Award className="h-10 w-10 mb-4 text-purple-400" />
              <h3 className="text-xl font-bold mb-2">Award-Winning</h3>
              <p className="text-gray-300">Recognized for contributions to electronic music</p>
            </div>

            <div className="bg-gray-800 p-6 rounded-lg">
              <Globe className="h-10 w-10 mb-4 text-purple-400" />
              <h3 className="text-xl font-bold mb-2">International</h3>
              <p className="text-gray-300">Performing at top venues worldwide</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
