import { popularPlaces } from '../data/listings'

export default function PopularPlaces() {
  return (
    <section className="py-20 bg-white">
      <div className="container-app">
        <div className="section-title">
          <h2>
            <span>Popular</span> Places
          </h2>
          <p>Properties in most popular places.</p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {popularPlaces.map((place) => (
            <a
              key={place.id}
              href="#listings"
              className="group relative block rounded-xl overflow-hidden aspect-[4/5]"
            >
              <img
                src={place.img}
                alt={place.city}
                className="absolute inset-0 h-full w-full object-cover transition duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />
              <div className="absolute bottom-4 left-4">
                <h4 className="text-white font-display font-bold">{place.city}</h4>
                <span className="text-white/80 text-sm">{place.count} Properties</span>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
