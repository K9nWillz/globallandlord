import React from 'react'

export default function PropertyCard({ 
  property, 
  onSelect, 
  isFavorite = false, 
  onToggleFavorite, 
  onShare 
}) {
  const { title, address, price, plots, area, tag, featured, img } = property

  return (
    <div className="bg-white rounded-xl overflow-hidden shadow-sm border border-gray-100 hover:shadow-lg transition group flex flex-col justify-between h-full relative">
      <div>
        <div className="relative aspect-[7/5] overflow-hidden bg-gray-100">
          <img
            src={img}
            alt={title}
            className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
          />
          <div className="absolute top-3 left-3 flex gap-2">
            {featured && (
              <span className="bg-ink text-white text-xs font-semibold px-3 py-1 rounded shadow-sm">
                Featured
              </span>
            )}
            <span
              className={`text-xs font-semibold px-3 py-1 rounded text-white shadow-sm ${
                tag === 'rent' ? 'bg-blue-500' : 'bg-brand-500'
              }`}
            >
              For {tag === 'rent' ? 'Rent' : 'Sale'}
            </span>
          </div>
        </div>

        <div className="p-5">
          <h3 className="font-display font-bold text-lg text-gray-900 line-clamp-1 group-hover:text-brand-500 transition-colors">
            {title}
          </h3>
          {address && (
            <p className="text-sm text-gray-500 mt-1 flex items-center gap-1 line-clamp-1">
              <svg className="h-4 w-4 text-brand-500 shrink-0" viewBox="0 0 20 20" fill="currentColor">
                <path
                  fillRule="evenodd"
                  d="M9.69 18.933a.75.75 0 00.62 0c.058-.026 8.19-3.86 8.19-10.183A8.5 8.5 0 1010 18.933z"
                  clipRule="evenodd"
                />
              </svg>
              <span>{address}</span>
            </p>
          )}

          {(plots || area) && (
            <ul className="flex flex-wrap gap-4 text-sm text-gray-500 mt-4 pt-4 border-t border-gray-100">
              {plots && <li className="font-medium text-gray-700">{plots} plots</li>}
              {area && <li>{area}</li>}
            </ul>
          )}
        </div>
      </div>

      <div className="p-5 pt-0">
        <div className="pt-4 border-t border-gray-100 flex items-center justify-between gap-3">
          <span className="font-display font-extrabold text-brand-500 text-sm sm:text-base">
            {price}
          </span>
          
          <div className="flex items-center gap-2">
            {onSelect && (
              <button
                type="button"
                onClick={() => onSelect(property)}
                className="px-3.5 py-1.5 bg-gray-900 hover:bg-brand-500 text-white text-xs font-bold rounded-lg transition active:scale-95 cursor-pointer shadow-xs"
              >
                More Info
              </button>
            )}

            <div className="flex gap-1 text-gray-400">
              <button 
                type="button"
                onClick={(e) => {
                  e.stopPropagation()
                  onShare?.(property)
                }}
                aria-label="Share property link" 
                title="Share this property"
                className="hover:text-brand-500 transition cursor-pointer p-1.5 rounded-full hover:bg-gray-100 active:scale-90"
              >
                <svg className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                  <path d="M13 4.5a2.5 2.5 0 11.702 1.737L6.97 9.604a2.518 2.518 0 010 .792l6.732 3.367a2.5 2.5 0 11-.671 1.341l-6.732-3.367a2.5 2.5 0 110-3.475l6.732-3.366A2.5 2.5 0 0113 4.5z" />
                </svg>
              </button>
              
              <button 
                type="button"
                onClick={(e) => {
                  e.stopPropagation()
                  onToggleFavorite?.(property)
                }}
                aria-label={isFavorite ? "Remove favorite" : "Favorite"}
                title={isFavorite ? "Saved in favorites" : "Save to favorites"}
                className={`transition cursor-pointer p-1.5 rounded-full hover:bg-gray-100 active:scale-90 ${
                  isFavorite ? 'text-brand-500' : 'hover:text-brand-500'
                }`}
              >
                <svg
                  className={`h-4 w-4 transition-transform duration-200 ${
                    isFavorite ? 'fill-brand-500 text-brand-500 scale-110' : 'fill-none stroke-current stroke-2 text-gray-400'
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
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
