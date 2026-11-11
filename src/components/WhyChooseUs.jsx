import { whyChooseUs } from '../data/listings'

export default function WhyChooseUs() {
  return (
    <section className="py-20 bg-white">
      <div className="container-app">
        <div className="section-title">
          <h2>
            <span>Why</span> Choose Us
          </h2>
          <p>We provide full service at every step.</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {whyChooseUs.map((item, i) => (
            <div key={item.id} className="text-center px-4">
              <div className="mx-auto mb-5 h-16 w-16 rounded-full bg-brand-50 flex items-center justify-center text-brand-500 font-display font-bold text-xl">
                {String(i + 1).padStart(2, '0')}
              </div>
              <h3 className="font-display font-bold mb-2">{item.title}</h3>
              <p className="text-sm text-gray-500">{item.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
