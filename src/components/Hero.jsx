import { useState } from 'react'

const words = ['House', 'Apartment', 'Plaza', "Asset"]

export default function Hero() {
  const [tab, setTab] = useState('sale')

  return (
    <section
      id="home"
      className="relative flex items-center min-h-[720px] pt-20 bg-cover bg-center"
      style={{
        backgroundImage:
          "linear-gradient(180deg, rgba(10,10,12,0.55), rgba(10,10,12,0.75)), url(/Assets/BG.jpg)",
      }}
    >
      <div className="container-app w-full py-20">
        <div className="max-w-2xl">
          <h1 className="text-4xl md:text-5xl font-extrabold text-white leading-tight">
            Find The Perfect
            <br />
            <span className="text-brand-500">{words[3]}</span>
          </h1>
          <p className="mt-4 text-white/80 text-lg">
            We have wonderful assets waiting for you.
          </p>
        </div>

       {/*  <div className="mt-10 bg-white rounded-xl shadow-xl overflow-hidden max-w-4xl">
          <div className="flex border-b">
            {['sale', 'rent'].map((t) => (
              <button
                key={t}
                onClick={() => setTab(t)}
                className={`flex-1 py-4 font-display font-semibold text-sm uppercase tracking-wide transition ${
                  tab === t
                    ? 'bg-brand-500 text-white'
                    : 'bg-gray-50 text-gray-500 hover:bg-gray-100'
                }`}
              >
                For {t === 'sale' ? 'Sale' : 'Rent'}
              </button>
            ))}
          </div>

          <form
            className="p-5 grid grid-cols-1 md:grid-cols-4 gap-3"
            onSubmit={(e) => e.preventDefault()}
          >
            <input
              type="text"
              placeholder="Enter keyword..."
              className="md:col-span-2 rounded-md border border-gray-200 px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-brand-400"
            />
            <select className="rounded-md border border-gray-200 px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-brand-400">
              <option>Property Type</option>
              <option>Land</option>
              <option>Apartment</option>
              <option>Other</option>
            </select>
            <select className="rounded-md border border-gray-200 px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-brand-400">
              <option>Location</option>
              <option>Abakaliki</option>
              <option>Enugu</option>
              <option>Ibadan</option>
              <option>Abuja</option>
            </select>
            <button type="submit" className="btn-brand md:col-span-4 mt-1">
              Search Now
            </button>
          </form>
        </div> */}
      </div>
    </section>
  )
}
