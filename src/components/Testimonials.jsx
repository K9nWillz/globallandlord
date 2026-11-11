import { useState } from 'react'
import { testimonials } from '../data/listings'

export default function Testimonials() {
  const [index, setIndex] = useState(0)
  const visible = 1

  const next = () => setIndex((i) => (i + 1) % testimonials.length)
  const prev = () => setIndex((i) => (i - 1 + testimonials.length) % testimonials.length)
  const t = testimonials[index]

  return (
    <section className="py-20 bg-gray-50">
      <div className="container-app">
        <div className="section-title">
          <h2>
            <span>Client</span> Testimonials
          </h2>
          <p>We collect reviews from our customers.</p>
        </div>

        <div className="max-w-2xl mx-auto text-center">
          <p className="text-lg text-gray-600 italic">&ldquo;{t.quote}&rdquo;</p>
          <div className="mt-6 flex flex-col items-center gap-2">
            <img src={t.img} alt={t.name} className="h-14 w-14 rounded-full object-cover" />
            <h5 className="font-display font-bold">{t.name}</h5>
            <p className="text-sm text-gray-500">{t.city}</p>
          </div>

          <div className="flex justify-center gap-3 mt-8">
            <button
              onClick={prev}
              aria-label="Previous testimonial"
              className="h-10 w-10 rounded-full border border-gray-300 flex items-center justify-center hover:bg-ink hover:text-white transition"
            >
              ‹
            </button>
            <button
              onClick={next}
              aria-label="Next testimonial"
              className="h-10 w-10 rounded-full border border-gray-300 flex items-center justify-center hover:bg-ink hover:text-white transition"
            >
              ›
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
