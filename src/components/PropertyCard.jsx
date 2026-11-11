export default function PropertyCard({ property, onSelect }) {
  const { title, address, price, plots, area, tag, featured, img } = property

  return (
    <div className="bg-white rounded-xl overflow-hidden shadow-sm border border-gray-100 hover:shadow-lg transition group flex flex-col justify-between h-full">
      <div>
        <div className="relative aspect-[7/5] overflow-hidden bg-gray-100">
          <img
            src={img}
            alt={title}
            className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
          />
          <div className="absolute top-3 left-3 flex gap-2">
            {featured && (
              <span className="bg-ink text-white text-xs font-semibold px-3 py-1 rounded">
                Featured
              </span>
            )}
            <span
              className={`text-xs font-semibold px-3 py-1 rounded text-white ${
                tag === 'rent' ? 'bg-blue-500' : 'bg-brand-500'
              }`}
            >
              For {tag === 'rent' ? 'Rent' : 'Sale'}
            </span>
          </div>
        </div>

        <div className="p-5">
          <h3 className="font-display font-bold text-lg text-gray-900 line-clamp-1">{title}</h3>
          {address && (
            <p className="text-sm text-gray-500 mt-1 flex items-center gap-1 line-clamp-1">
              <svg className="h-4 w-4 text-brand-500 shrink-0" viewBox="0 0 20 20" fill="currentColor">
                <path
                  fillRule="evenodd"
                  d="M9.69 18.933a.75.75 0 00.62 0c.058-.026 8.19-3.86 8.19-10.183A8.5 8.5 0 1010 18.933z"
                  clipRule="evenodd"
                />
              </svg>
              {address}
            </p>
          )}

          {(plots || area) && (
            <ul className="flex flex-wrap gap-4 text-sm text-gray-500 mt-4 pt-4 border-t border-gray-100">
              {plots && <li>{plots} plots</li>}
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
                className="px-3 py-1.5 bg-gray-900 hover:bg-brand-500 text-white text-xs font-bold rounded-lg transition active:scale-95 cursor-pointer"
              >
                More Info
              </button>
            )}

            <div className="flex gap-2 text-gray-400">
              <button aria-label="Share" className="hover:text-brand-500 transition cursor-pointer p-1">
                <svg className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                  <path d="M13 4.5a2.5 2.5 0 11.702 1.737L6.97 9.604a2.518 2.518 0 010 .792l6.732 3.367a2.5 2.5 0 11-.671 1.341l-6.732-3.367a2.5 2.5 0 110-3.475l6.732-3.366A2.5 2.5 0 0113 4.5z" />
                </svg>
              </button>
              <button aria-label="Favorite" className="hover:text-brand-500 transition cursor-pointer p-1">
                <svg className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                  <path d="M9.653 16.915l-.005-.003-.019-.01a20.759 20.759 0 01-1.162-.682 22.045 22.045 0 01-2.582-1.9C4.045 12.733 2 10.352 2 7.5 2 5.015 4.015 3 6.5 3c1.298 0 2.494.634 3.5 1.9C11.006 3.634 12.202 3 13.5 3 15.985 3 18 5.015 18 7.5c0 2.852-2.044 5.233-3.885 6.82a22.049 22.049 0 01-3.744 2.582l-.019.01-.005.003h-.001a.752.752 0 01-.69.001l-.002-.001z" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
