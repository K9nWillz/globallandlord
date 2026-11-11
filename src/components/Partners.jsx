const partners = Array.from({ length: 6 }, (_, i) => i + 1)

export default function Partners() {
  return (
    <section className="py-16 bg-white border-t border-gray-100">
      <div className="container-app">
        <p className="text-center text-sm uppercase tracking-widest text-gray-400 mb-8">
          The companies that represent us
        </p>
        <div className="flex flex-wrap items-center justify-center gap-x-12 gap-y-6 grayscale opacity-60">
          {partners.map((p) => (
            <div
              key={p}
              className="h-8 w-28 bg-gray-300 rounded flex items-center justify-center text-xs text-gray-500 font-display font-semibold"
            >
              LOGO {p}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
