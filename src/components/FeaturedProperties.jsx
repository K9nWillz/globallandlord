import React from 'react'
import { properties } from '../data/listings'
import PropertyCard from './PropertyCard'

export default function FeaturedProperties({ 
  onSelectProperty, 
  onViewAllLands,
  favorites = new Set(),
  onToggleFavorite,
  onShare 
}) {
  // Show primary properties on the homepage exactly as in the original layout
  const homeProperties = properties.slice(0, 5)

  return (
    <section id="listings" className="py-20 bg-gray-50">
      <div className="container-app">
        <div className="section-title">
          <h2>
            <span>Featured</span> Properties
          </h2>
          <p>These are our featured properties.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {homeProperties.map((property) => (
            <PropertyCard 
              key={property.id} 
              property={property}
              onSelect={onSelectProperty}
              isFavorite={favorites.has(property.id)}
              onToggleFavorite={onToggleFavorite}
              onShare={onShare}
            />
          ))}
        </div>

        <div className="text-center mt-12">
          <button
            type="button"
            onClick={onViewAllLands}
            className="btn-brand !bg-transparent !text-ink !border !border-ink hover:!bg-ink hover:!text-white transition cursor-pointer shadow-xs active:scale-95"
          >
            View More
          </button>
        </div>
      </div>
    </section>
  )
}
