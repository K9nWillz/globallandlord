import React from 'react'

export default function PropertyModal({ 
  property, 
  onClose,
  isFavorite = false,
  onToggleFavorite,
  onShare,
  onViewAllLands
}) {
  if (!property) return null

  const whatsappMessage = encodeURIComponent(
    `Hello Christian, I am inquiring about the property: ${property.title} (${property.address || ''}) listed at ${property.price}. Please provide more details.`
  )

  const handleSeeOtherListings = () => {
    onClose()
    if (onViewAllLands) {
      onViewAllLands()
    } else {
      const listingsSection = document.getElementById('listings')
      if (listingsSection) {
        listingsSection.scrollIntoView({ behavior: 'smooth' })
      }
    }
  }

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/75 backdrop-blur-xs transition-opacity"
      onClick={onClose}
    >
      <div 
        className="bg-white rounded-3xl max-w-2xl w-full p-6 sm:p-8 shadow-2xl relative max-h-[92vh] overflow-y-auto border border-gray-100"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top Control Bar with Margin to avoid image overlap */}
        <div className="flex items-center justify-between pb-3 mb-2 border-b border-gray-100">
          <span className="text-xs font-bold uppercase tracking-wider text-emerald-700 bg-emerald-50 px-2.5 py-1 rounded-md border border-emerald-200">
            ✓ {property.titleDeed || 'C of O Available'}
          </span>
          
          <div className="flex items-center gap-1.5">
            <button 
              type="button"
              onClick={() => onShare?.(property)}
              aria-label="Share property link"
              title="Share property link"
              className="text-gray-500 hover:text-brand-500 h-8 w-8 rounded-full bg-gray-100 hover:bg-gray-200 flex items-center justify-center transition cursor-pointer"
            >
              <svg className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                <path d="M13 4.5a2.5 2.5 0 11.702 1.737L6.97 9.604a2.518 2.518 0 010 .792l6.732 3.367a2.5 2.5 0 11-.671 1.341l-6.732-3.367a2.5 2.5 0 110-3.475l6.732-3.366A2.5 2.5 0 0113 4.5z" />
              </svg>
            </button>

            <button 
              type="button"
              onClick={() => onToggleFavorite?.(property)}
              aria-label={isFavorite ? "Remove favorite" : "Favorite"}
              title={isFavorite ? "Saved in favorites" : "Save to favorites"}
              className={`h-8 w-8 rounded-full bg-gray-100 hover:bg-gray-200 flex items-center justify-center transition cursor-pointer ${
                isFavorite ? 'text-brand-500' : 'text-gray-500 hover:text-brand-500'
              }`}
            >
              <svg
                className={`h-4 w-4 transition-transform duration-200 ${
                  isFavorite ? 'fill-brand-500 text-brand-500 scale-110' : 'fill-none stroke-current stroke-2'
                }`}
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
                />
              </svg>
            </button>

            <button 
              type="button"
              onClick={onClose}
              aria-label="Close modal"
              className="text-gray-500 hover:text-gray-900 h-8 w-8 rounded-full bg-gray-100 hover:bg-gray-200 flex items-center justify-center transition cursor-pointer font-bold text-sm"
            >
              ✕
            </button>
          </div>
        </div>

        {/* Modal Hero Image & Price Badge */}
        <div className="relative rounded-2xl overflow-hidden aspect-[16/9] bg-gray-100 mb-6">
          <img 
            src={property.img} 
            alt={property.title} 
            className="w-full h-full object-cover"
          />
          <div className="absolute bottom-3 left-3 bg-brand-500 text-white font-black px-4 py-1.5 rounded-lg text-sm shadow-md">
            {property.price}
          </div>
        </div>

        {/* Header Information */}
        <div>
          <span className="text-xs uppercase font-extrabold tracking-wider text-brand-600 bg-brand-50 px-2.5 py-1 rounded-md">
            Verified Land Listing
          </span>
          <h3 className="text-2xl font-black text-gray-900 mt-2">{property.title}</h3>
          <p className="text-sm text-gray-500 mt-1 flex items-center gap-1">
            📍 {property.address || 'Abakaliki, Ebonyi State'}
          </p>
        </div>

        {/* Key Metrics */}
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 my-6 text-xs text-gray-700 font-semibold">
          {property.plots && (
            <div className="bg-gray-50 p-3 rounded-xl border border-gray-100">
              <span className="block text-gray-400 font-normal">Plot Count</span>
              <span className="text-sm font-bold text-gray-900">{property.plots} Plots</span>
            </div>
          )}
          {property.area && (
            <div className="bg-gray-50 p-3 rounded-xl border border-gray-100">
              <span className="block text-gray-400 font-normal">Total Area</span>
              <span className="text-sm font-bold text-gray-900">{property.area}</span>
            </div>
          )}
          <div className="bg-gray-50 p-3 rounded-xl border border-gray-100">
            <span className="block text-gray-400 font-normal">Status</span>
            <span className="text-sm font-bold text-emerald-600 capitalize">{property.tag || 'Available'}</span>
          </div>
        </div>

        {/* Description */}
        <div className="space-y-4 text-sm text-gray-600 leading-relaxed border-t border-gray-100 pt-4">
          <div>
            <h4 className="text-xs font-bold text-gray-900 uppercase tracking-wider mb-1">Property Overview</h4>
            <p>{property.description || 'Prime land investment opportunity available with complete verified documentation.'}</p>
          </div>

          {/* Landmarks / Proximity */}
          {property.landmarks?.length > 0 && (
            <div className="bg-amber-50/60 border border-amber-100 rounded-2xl p-4">
              <h4 className="text-xs font-bold text-amber-950 uppercase tracking-wider mb-2 flex items-center gap-1.5">
                <span>📍</span> Key Landmarks & Proximity
              </h4>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-amber-900 font-medium">
                {property.landmarks.map((landmark, idx) => (
                  <li key={idx} className="flex items-center gap-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-amber-500 shrink-0" />
                    <span>{landmark}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Key Highlights */}
          {property.features?.length > 0 && (
            <div>
              <h4 className="text-xs font-bold text-gray-900 uppercase tracking-wider mt-4 mb-2">Key Highlights</h4>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {property.features.map((feat, i) => (
                  <li key={i} className="flex items-center gap-2 text-xs text-gray-700">
                    <span className="h-1.5 w-1.5 rounded-full bg-brand-500" />
                    {feat}
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>

        {/* CTAs */}
        <div className="mt-8 pt-5 border-t border-gray-100 flex flex-col sm:flex-row items-center justify-between gap-3">
          <button 
            type="button"
            onClick={handleSeeOtherListings}
            className="w-full sm:w-auto px-4 py-2.5 border border-gray-200 text-gray-700 rounded-xl text-xs font-semibold hover:bg-gray-50 transition cursor-pointer"
          >
            ← Browse All Land Portfolios
          </button>
          
          <div className="flex w-full sm:w-auto gap-2">
            <a 
              href={`https://wa.me/2349015075960?text=${whatsappMessage}`}
              target="_blank"
              rel="noreferrer"
              className="flex-1 sm:flex-initial px-5 py-2.5 bg-emerald-600 hover:bg-emerald-700 text-white rounded-xl text-xs font-bold shadow-md text-center transition active:scale-95"
            >
              Chat on WhatsApp
            </a>
            <a 
              href="tel:+2349015075960"
              className="flex-1 sm:flex-initial px-4 py-2.5 bg-brand-500 hover:bg-brand-600 text-white rounded-xl text-xs font-bold shadow-md text-center transition active:scale-95"
            >
              Call Consultant
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}
