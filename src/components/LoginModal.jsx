import { useState } from 'react'

export default function LoginModal({ open, onClose }) {
  const [tab, setTab] = useState('login')

  if (!open) return null

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center px-4">
      <div className="absolute inset-0 bg-black/60" onClick={onClose} />

      <div className="relative bg-white rounded-xl w-full max-w-md p-8 shadow-2xl">
        <button
          onClick={onClose}
          aria-label="Close"
          className="absolute top-4 right-4 text-gray-400 hover:text-ink"
        >
          ✕
        </button>

        <h3 className="font-display font-bold text-xl mb-6">
          Welcome to Global<span className="text-brand-500">Landlord</span>
        </h3>

        <div className="flex border-b mb-6">
          {['login', 'register'].map((t) => (
            <button
              key={t}
              onClick={() => setTab(t)}
              className={`flex-1 pb-3 text-sm font-display font-semibold capitalize ${
                tab === t ? 'text-brand-500 border-b-2 border-brand-500' : 'text-gray-400'
              }`}
            >
              {t}
            </button>
          ))}
        </div>

        {tab === 'login' ? (
          <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
            <div>
              <label className="text-xs font-semibold text-gray-500">Email Address</label>
              <input
                type="email"
                className="mt-1 w-full rounded-md border border-gray-200 px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-brand-400"
              />
            </div>
            <div>
              <label className="text-xs font-semibold text-gray-500">Password</label>
              <input
                type="password"
                className="mt-1 w-full rounded-md border border-gray-200 px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-brand-400"
              />
            </div>
            <button type="submit" className="btn-brand w-full">
              Log In
            </button>
            <a href="#" className="block text-center text-xs text-gray-500 hover:text-brand-500">
              Lost your password?
            </a>
          </form>
        ) : (
          <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
            <div>
              <label className="text-xs font-semibold text-gray-500">Full Name</label>
              <input
                type="text"
                className="mt-1 w-full rounded-md border border-gray-200 px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-brand-400"
              />
            </div>
            <div>
              <label className="text-xs font-semibold text-gray-500">Email Address</label>
              <input
                type="email"
                className="mt-1 w-full rounded-md border border-gray-200 px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-brand-400"
              />
            </div>
            <div>
              <label className="text-xs font-semibold text-gray-500">Password</label>
              <input
                type="password"
                className="mt-1 w-full rounded-md border border-gray-200 px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-brand-400"
              />
            </div>
            <button type="submit" className="btn-brand w-full">
              Register
            </button>
          </form>
        )}
      </div>
    </div>
  )
}
