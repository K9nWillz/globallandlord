import { useRef } from 'react'
import { discoverProperties } from '../data/listings'
import PropertyCard from './PropertyCard'

export default function DiscoverProperties({ 
  onSelectProperty,
  favorites = new Set(),
  onToggleFavorite,
  onShare 
}) {
  const trackRef = useRef(null)

  const scroll = (dir) => {
    trackRef.current?.scrollBy({ left: dir * 340, behavior: 'smooth' })
  }

  return (
    <section className="py-20 bg-gray-50">
      <div className="container-app">
        <div className="flex items-end justify-between mb-10">
          <div>
            <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight">
              <span className="text-brand-500">Discover</span> Popular Properties
            </h2>
            <p className="mt-3 text-gray-500">We provide full service at every step.</p>
          </div>
          <div className="hidden sm:flex gap-2">
            <button
              onClick={() => scroll(-1)}
              aria-label="Scroll left"
              className="h-10 w-10 rounded-full border border-gray-300 flex items-center justify-center hover:bg-ink hover:text-white transition cursor-pointer"
            >
              ‹
            </button>
            <button
              onClick={() => scroll(1)}
              aria-label="Scroll right"
              className="h-10 w-10 rounded-full border border-gray-300 flex items-center justify-center hover:bg-ink hover:text-white transition cursor-pointer"
            >
              ›
            </button>
          </div>
        </div>

        <div
          ref={trackRef}
          className="flex gap-6 overflow-x-auto pb-4 snap-x snap-mandatory scroll-smooth [&::-webkit-scrollbar]:hidden"
        >
          {discoverProperties.map((property) => (
            <div key={property.id} className="min-w-[300px] max-w-[320px] snap-start">
              <PropertyCard 
                property={property} 
                onSelect={onSelectProperty}
                isFavorite={favorites.has(property.id)}
                onToggleFavorite={onToggleFavorite}
                onShare={onShare}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
