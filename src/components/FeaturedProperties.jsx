import { properties } from '../data/listings'
import PropertyCard from './PropertyCard'

export default function FeaturedProperties({ onSelectProperty }) {
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
          {properties.map((property) => (
            <PropertyCard 
              key={property.id} 
              property={property}
              onSelect={onSelectProperty}
            />
          ))}
        </div>

        <div className="text-center mt-12">
          <a href="#listings" className="btn-brand !bg-transparent !text-ink !border !border-ink hover:!bg-ink hover:!text-white">
            View More
          </a>
        </div>
      </div>
    </section>
  )
}
