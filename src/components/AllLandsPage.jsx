import React, { useState, useMemo } from 'react'
import { properties } from '../data/listings'
import PropertyCard from './PropertyCard'
import Footer from './Footer'

const filterStates = [
  { id: 'all', label: 'All States' },
  { id: 'Ebonyi', label: 'Ebonyi' },
  { id: 'Enugu', label: 'Enugu' },
  { id: 'Abuja', label: 'Abuja' },
  { id: 'Abia', label: 'Abia' },
  { id: 'Anambra', label: 'Anambra' },
]

export default function AllLandsPage({
  onGoHome,
  onSelectProperty,
  favorites = new Set(),
  onToggleFavorite,
  onShare,
  onOpenContact,
  onOpenTerms,
  onOpenPrivacy,
}) {
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedState, setSelectedState] = useState('all')
  const [selectedPriceRange, setSelectedPriceRange] = useState('all')
  const [sortBy, setSortBy] = useState('featured')
  const [showOnlyFavorites, setShowOnlyFavorites] = useState(false)
  const [selectedTag, setSelectedTag] = useState('all')

  // Filter and sort properties
  const filteredProperties = useMemo(() => {
    return properties
      .filter((item) => {
        // Search term
        if (searchTerm.trim()) {
          const q = searchTerm.toLowerCase()
          const inTitle = item.title?.toLowerCase().includes(q)
          const inAddress = item.address?.toLowerCase().includes(q)
          const inDesc = item.description?.toLowerCase().includes(q)
          const inLandmarks = item.landmarks?.some((lm) => lm.toLowerCase().includes(q))
          const inFeatures = item.features?.some((f) => f.toLowerCase().includes(q))
          if (!inTitle && !inAddress && !inDesc && !inLandmarks && !inFeatures) {
            return false
          }
        }

        // State filter
        if (selectedState !== 'all' && item.state !== selectedState) {
          return false
        }

        // Tag filter
        if (selectedTag !== 'all' && item.tag !== selectedTag) {
          return false
        }

        // Favorites filter
        if (showOnlyFavorites && !favorites.has(item.id)) {
          return false
        }

        // Price range filter
        if (selectedPriceRange !== 'all') {
          const numPrice = item.numericPrice || 0
          if (selectedPriceRange === 'under10m' && numPrice > 10000000) return false
          if (selectedPriceRange === '10m-30m' && (numPrice < 10000000 || numPrice > 30000000)) return false
          if (selectedPriceRange === '30m-60m' && (numPrice < 30000000 || numPrice > 60000000)) return false
          if (selectedPriceRange === 'above60m' && numPrice < 60000000) return false
        }

        return true
      })
      .sort((a, b) => {
        if (sortBy === 'price-asc') {
          return (a.numericPrice || 0) - (b.numericPrice || 0)
        }
        if (sortBy === 'price-desc') {
          return (b.numericPrice || 0) - (a.numericPrice || 0)
        }
        if (sortBy === 'plots-desc') {
          return (b.plots || 0) - (a.plots || 0)
        }
        if (sortBy === 'title-asc') {
          return a.title.localeCompare(b.title)
        }
        // Default: featured first, then lower id
        if (a.featured && !b.featured) return -1
        if (!a.featured && b.featured) return 1
        return a.id - b.id
      })
  }, [searchTerm, selectedState, selectedPriceRange, sortBy, showOnlyFavorites, selectedTag, favorites])

  const handleResetFilters = () => {
    setSearchTerm('')
    setSelectedState('all')
    setSelectedPriceRange('all')
    setSortBy('featured')
    setShowOnlyFavorites(false)
    setSelectedTag('all')
  }

  const hasActiveFilters = 
    searchTerm.trim() !== '' || 
    selectedState !== 'all' || 
    selectedPriceRange !== 'all' || 
    sortBy !== 'featured' || 
    showOnlyFavorites ||
    selectedTag !== 'all'

  const isUpcomingState = selectedState !== 'all' && selectedState !== 'Ebonyi'

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col justify-between">
      {/* Top Header / Sticky Nav */}
      <header className="sticky top-0 z-30 bg-white border-b border-gray-200 shadow-xs">
        <div className="container-app h-20 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <button
              type="button"
              onClick={onGoHome}
              aria-label="Back to home page"
              className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-semibold text-gray-700 hover:text-brand-500 bg-gray-100 hover:bg-gray-200 px-3.5 py-2 rounded-lg transition cursor-pointer"
            >
              <span>←</span>
              <span>Back to Home</span>
            </button>

            <a
              href="#home"
              onClick={(e) => {
                e.preventDefault()
                onGoHome()
              }}
              className="font-display font-extrabold text-xl text-ink hidden sm:block cursor-pointer"
            >
              Global<span className="text-brand-500">Landlord</span>
            </a>
          </div>

          <div className="flex items-center gap-2 sm:gap-3">
            <button
              type="button"
              onClick={() => setShowOnlyFavorites((v) => !v)}
              className={`inline-flex items-center gap-2 px-3 sm:px-3.5 py-2 rounded-lg text-xs font-semibold transition cursor-pointer border ${
                showOnlyFavorites
                  ? 'bg-brand-50 border-brand-300 text-brand-600'
                  : 'bg-white border-gray-200 text-gray-700 hover:bg-gray-50'
              }`}
            >
              <svg
                className={`h-4 w-4 ${showOnlyFavorites ? 'fill-brand-500 text-brand-500' : 'text-gray-500'}`}
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path d="M9.653 16.915l-.005-.003-.019-.01a20.759 20.759 0 01-1.162-.682 22.045 22.045 0 01-2.582-1.9C4.045 12.733 2 10.352 2 7.5 2 5.015 4.015 3 6.5 3c1.298 0 2.494.634 3.5 1.9C11.006 3.634 12.202 3 13.5 3 15.985 3 18 5.015 18 7.5c0 2.852-2.044 5.233-3.885 6.82a22.049 22.049 0 01-3.744 2.582l-.019.01-.005.003h-.001a.752.752 0 01-.69.001l-.002-.001z" />
              </svg>
              <span>Saved ({favorites.size})</span>
            </button>
          </div>
        </div>
      </header>

      {/* Hero Banner for All Lands */}
      <section className="bg-ink text-white py-12 md:py-16 relative overflow-hidden">
        <div className="absolute inset-0 opacity-20 pointer-events-none bg-[radial-gradient(#EF4444_1px,transparent_1px)] [background-size:16px_16px]" />
        <div className="container-app relative">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div>
              <h1 className="text-3xl md:text-5xl font-black tracking-tight text-white">
                All Land <span className="text-brand-500">Listings</span>
              </h1>
              <p className="mt-3 text-gray-300 text-sm md:text-base max-w-2xl leading-relaxed">
                Filter and sort verified estate layouts and commercial plots across Ebonyi State with verified titles.
              </p>
            </div>

            <div className="flex items-center gap-3">
              <span className="bg-white/10 px-4 py-2 rounded-xl text-xs font-semibold border border-white/10">
                {properties.length} Verified Plots Available
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Main Filter & Listing Section */}
      <main className="container-app py-8 flex-1">
        {/* Filter Controls Bar */}
        <div className="bg-white rounded-2xl p-5 shadow-sm border border-gray-200 mb-8 space-y-4">
          {/* Row 1: Search & Sort */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-3">
            {/* Search Input */}
            <div className="md:col-span-6 relative">
              <input
                type="text"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                placeholder="Search by estate name, street, corridor, or landmarks..."
                className="w-full bg-gray-50 border border-gray-200 rounded-xl pl-10 pr-10 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-brand-500 focus:bg-white transition"
              />
              <svg
                className="w-4 h-4 text-gray-400 absolute left-3.5 top-3.5"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M9 3.5a5.5 5.5 0 100 11 5.5 5.5 0 000-11zM2 9a7 7 0 1112.452 4.391l3.328 3.329a.75.75 0 11-1.06 1.06l-3.329-3.328A7 7 0 012 9z"
                  clipRule="evenodd"
                />
              </svg>
              {searchTerm && (
                <button
                  type="button"
                  onClick={() => setSearchTerm('')}
                  className="absolute right-3 top-3 text-gray-400 hover:text-gray-600 text-xs bg-gray-200 rounded-full h-5 w-5 flex items-center justify-center cursor-pointer"
                >
                  ✕
                </button>
              )}
            </div>

            {/* Sort Select */}
            <div className="md:col-span-3">
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="w-full bg-gray-50 border border-gray-200 rounded-xl px-3 py-2.5 text-sm text-gray-800 focus:outline-none focus:ring-2 focus:ring-brand-500 cursor-pointer"
              >
                <option value="featured">Sort: Featured First</option>
                <option value="price-asc">Price: Low to High</option>
                <option value="price-desc">Price: High to Low</option>
                <option value="plots-desc">Plots: Most Plots</option>
                <option value="title-asc">Name: A to Z</option>
              </select>
            </div>

            {/* Price Range Select */}
            <div className="md:col-span-3">
              <select
                value={selectedPriceRange}
                onChange={(e) => setSelectedPriceRange(e.target.value)}
                className="w-full bg-gray-50 border border-gray-200 rounded-xl px-3 py-2.5 text-sm text-gray-800 focus:outline-none focus:ring-2 focus:ring-brand-500 cursor-pointer"
              >
                <option value="all">Price: All Ranges</option>
                <option value="under10m">Under ₦10,000,000</option>
                <option value="10m-30m">₦10,000,000 - ₦30,000,000</option>
                <option value="above60m">Above ₦60,000,000</option>
              </select>
            </div>
          </div>

          {/* Row 2: State Filter Pills */}
          <div className="pt-2 border-t border-gray-100 flex flex-wrap items-center justify-between gap-3">
            <div className="flex flex-wrap items-center gap-1.5 sm:gap-2">
              <span className="text-xs font-bold text-gray-500 uppercase tracking-wider mr-1">
                State:
              </span>
              {filterStates.map((st) => {
                const count = st.id === 'all' 
                  ? properties.length 
                  : properties.filter((p) => p.state === st.id).length
                const isSelected = selectedState === st.id

                return (
                  <button
                    key={st.id}
                    type="button"
                    onClick={() => setSelectedState(st.id)}
                    className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition cursor-pointer flex items-center gap-1.5 ${
                      isSelected
                        ? 'bg-brand-500 text-white shadow-xs'
                        : 'bg-gray-100 hover:bg-gray-200 text-gray-700'
                    }`}
                  >
                    <span>{st.label}</span>
                    <span
                      className={`text-[10px] px-1.5 py-0.2 rounded-full ${
                        isSelected 
                          ? 'bg-white/20 text-white' 
                          : count > 0 
                            ? 'bg-gray-200 text-gray-700 font-bold' 
                            : 'bg-amber-100 text-amber-800'
                      }`}
                    >
                      {count > 0 ? count : 'Soon'}
                    </span>
                  </button>
                )
              })}
            </div>

            {/* Quick Action: View All / Reset */}
            {hasActiveFilters && (
              <button
                type="button"
                onClick={handleResetFilters}
                className="text-xs font-bold text-brand-600 hover:text-brand-700 hover:underline cursor-pointer flex items-center gap-1"
              >
                <span>✕</span>
                <span>Reset All Filters</span>
              </button>
            )}
          </div>
        </div>

        {/* Results Header */}
        <div className="flex items-center justify-between mb-6">
          <p className="text-sm font-semibold text-gray-600">
            Showing <span className="text-brand-500 font-bold">{filteredProperties.length}</span> of{' '}
            <span className="text-gray-900 font-bold">{properties.length}</span> land portfolios
          </p>

          {hasActiveFilters && (
            <div className="flex items-center gap-2">
              <button
                type="button"
                onClick={handleResetFilters}
                className="text-xs text-gray-500 hover:text-gray-900 px-2.5 py-1 bg-gray-200 hover:bg-gray-300 rounded-md transition cursor-pointer"
              >
                Clear all filters
              </button>
            </div>
          )}
        </div>

        {/* Property Grid or Specialized State/Empty View */}
        {filteredProperties.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProperties.map((property) => (
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
        ) : isUpcomingState ? (
          <div className="bg-white rounded-3xl p-8 sm:p-12 text-center border border-gray-200 shadow-sm max-w-lg mx-auto my-12">
            <div className="h-16 w-16 bg-amber-50 text-amber-600 rounded-full flex items-center justify-center mx-auto mb-4 text-2xl border border-amber-200">
              📍
            </div>
            <span className="text-xs font-bold uppercase tracking-wider text-amber-700 bg-amber-50 px-3 py-1 rounded-md border border-amber-200 inline-block mb-3">
              Coming Soon to {selectedState}
            </span>
            <h3 className="font-display font-extrabold text-xl text-gray-900 mb-2">
              No lands currently listed in {selectedState}
            </h3>
            <p className="text-sm text-gray-500 mb-6 leading-relaxed">
              We are currently conducting due diligence and boundary layout surveys in {selectedState}. Verified estate portfolios will be added here soon. Contact our consultant for early access or upcoming allocations.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
              <button
                type="button"
                onClick={() => setSelectedState('Ebonyi')}
                className="w-full sm:w-auto px-5 py-2.5 bg-brand-500 hover:bg-brand-600 text-white font-display font-semibold text-xs rounded-xl shadow-md transition cursor-pointer"
              >
                View Available Ebonyi Lands ({properties.length})
              </button>
              <button
                type="button"
                onClick={onOpenContact}
                className="w-full sm:w-auto px-5 py-2.5 border border-gray-300 text-gray-700 hover:bg-gray-100 font-display font-semibold text-xs rounded-xl transition cursor-pointer"
              >
                Inquire / Pre-register
              </button>
            </div>
          </div>
        ) : (
          <div className="bg-white rounded-3xl p-12 text-center border border-gray-200 shadow-sm max-w-lg mx-auto my-12">
            <div className="h-16 w-16 bg-brand-50 text-brand-500 rounded-full flex items-center justify-center mx-auto mb-4 text-2xl">
              🔍
            </div>
            <h3 className="font-display font-extrabold text-xl text-gray-900 mb-2">
              No matching properties found
            </h3>
            <p className="text-sm text-gray-500 mb-6 leading-relaxed">
              We couldn't find any land listings that match your current filter criteria. Try adjusting your search keyword or price range.
            </p>
            <button
              type="button"
              onClick={handleResetFilters}
              className="px-6 py-2.5 bg-brand-500 hover:bg-brand-600 text-white font-display font-semibold text-xs rounded-xl shadow-md transition cursor-pointer"
            >
              Reset Filters & View All
            </button>
          </div>
        )}
      </main>

      {/* Footer */}
      <Footer
        onOpenContact={onOpenContact}
        onOpenTerms={onOpenTerms}
        onOpenPrivacy={onOpenPrivacy}
        onOpenAllLands={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        onGoHome={onGoHome}
      />
    </div>
  )
}
