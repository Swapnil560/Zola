import FeatureList from '../ui/FeatureList'
import { whyChooseUsFeatures } from '../../data/services'

export default function AboutSection() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-stretch">
          <div className="flex flex-col justify-between">
            <h2 className="text-2xl sm:text-3xl font-bold mb-6 leading-tight">Providing car rental services for Meghalaya, Arunachal, Assam, Nagaland, Mizoram</h2>
            <p className="text-gray-600 mb-8 text-base sm:text-lg leading-relaxed">At Zola Adventures we focus on providing the best holiday experience you could have ever planned. We extend our hands to every extent to provide the support we can. Why us? We are one the oldest rentals in Guwahati. Experienced team, fast booking, no booking transfers, tie up with many vendors.</p>
            <p className="text-gray-600 mb-8 text-base sm:text-lg leading-relaxed font-semibold">Call us to book a ride</p>
            <FeatureList features={whyChooseUsFeatures} />
          </div>
          <img src="/images/providing car rental for meghalaya.png" alt="Car rental services" className="w-full h-full object-cover rounded-lg" />
        </div>
      </div>
    </section>
  )
}