import { useNavigate } from 'react-router-dom'
import Header from '../components/ui/Header'
import Footer from '../components/ui/Footer'
import FAQSection from '../components/ui/FAQSection'
import HeroSection from '../components/ui/HeroSection'
import VehicleCard from '../components/ui/VehicleCard'
import TourCard from '../components/ui/TourCard'
import ServiceCard from '../components/ui/ServiceCard'
import { popularBikes } from '../data/vehicles'
import { popularTours } from '../data/tours'
import { serviceCards, whyChooseUsFeatures } from '../data/services'
import { toursFAQCategories } from '../data/faqs'
import { useLikes } from '../hooks/useLikes'
import { useToggle } from '../hooks/useToggle'

export default function Home() {
  const navigate = useNavigate()
  const bikeLikes = useLikes()
  const tourLikes = useLikes()
  const mobileMenu = useToggle()

  return (
    <div className="min-h-screen bg-white">
      <Header isMobileMenuOpen={mobileMenu.value} setIsMobileMenuOpen={mobileMenu.toggle} />

      <HeroSection isMobileMenuOpen={mobileMenu.value} />

      {/* Start Your Journey */}
      <section className="py-16 bg-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-4">Start Your Journey</h2>
          <p className="text-gray-600 text-center mb-12">Select how you want to travel today</p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {serviceCards.map((service, i) => (
              <ServiceCard key={i} service={service} />
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose ZOLA Adventures */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-stretch">
            <div className="flex flex-col justify-between">
              <h2 className="text-2xl sm:text-3xl font-bold mb-6 leading-tight">Providing car rental services for Meghalaya, Arunachal, Assam, Nagaland, Mizoram</h2>
              <p className="text-gray-600 mb-8 text-base sm:text-lg leading-relaxed">At Zola Adventures we focus on providing the best holiday experience you could have ever planned. We extend our hands to every extent to provide the support we can. Why us? We are one the oldest rentals in Guwahati. Experienced team, fast booking, no booking transfers, tie up with many vendors.</p>
              <p className="text-gray-600 mb-8 text-base sm:text-lg leading-relaxed font-semibold">Call us to book a ride</p>
              <ul className="space-y-6">
                {whyChooseUsFeatures.map((item, i) => (
                  <li key={i} className="flex items-start">
                    <span className="w-3 h-3 rounded-full mr-4 mt-2 flex-shrink-0" style={{backgroundColor: '#00473E'}}></span>
                    <div className="flex-1">
                      <span className="font-semibold block text-gray-900 mb-1">{item.name}</span>
                      <span className="text-sm text-gray-600 leading-relaxed">{item.desc}</span>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
            <img src="/images/providing car rental for meghalaya.png" alt="Car rental services" className="w-full h-full object-cover rounded-lg" />
          </div>
        </div>
      </section>

      {/* Our Most Popular Bikes */}
      <section className="py-16 bg-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-4">Our Most Popular Bikes</h2>
          <p className="text-gray-600 text-center mb-12">Reliable, stylish, and ready for your next trip</p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {popularBikes.map((bike) => (
              <VehicleCard 
                key={bike.id}
                vehicle={bike}
                isLiked={bikeLikes.isLiked(bike.id)}
                onToggleLike={() => bikeLikes.toggleLike(bike.id)}
                onViewDetails={() => navigate('/bike-details')}
              />
            ))}
          </div>
          <div className="text-center mt-8">
            <button className="text-black px-8 py-3 rounded-lg font-medium hover:scale-105 transition-all duration-200" style={{backgroundColor: '#E5E5E5'}} onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#D1D1D1'} onMouseLeave={(e) => e.currentTarget.style.backgroundColor = '#E5E5E5'}>
              View All →
            </button>
          </div>
        </div>
      </section>

      {/* Popular Outstation Tours */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-4">Popular Outstation Tours</h2>
          <p className="text-gray-600 text-center mb-12">Explore the beautiful Northeast India</p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {popularTours.map((tour) => (
              <TourCard 
                key={tour.id}
                tour={tour}
                isLiked={tourLikes.isLiked(tour.id)}
                onToggleLike={() => tourLikes.toggleLike(tour.id)}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Customer Reviews */}
      <section className="py-16 bg-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-4">Real Customers. Real Reviews. Real Happy.</h2>
          <div className="text-center mb-12">
            <div className="flex justify-center items-center mb-2">
              <div className="flex text-yellow-400 mr-2">
                {[...Array(5)].map((_, i) => (
                  <span key={i} className="text-2xl">★</span>
                ))}
              </div>
              <span className="text-3xl font-bold">4.8</span>
            </div>
            <p className="text-gray-600">Based on 10,000+ reviews</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-gray-200 p-6 rounded-lg">
              <div className="flex text-yellow-400 mb-4">
                {[...Array(4)].map((_, j) => (
                  <span key={j}>★</span>
                ))}
              </div>
              <p className="text-gray-700 mb-4">"Snagged a scooter rental and hit the streets in no time—couldn't believe how fast it was!"</p>
              <p className="text-gray-600 font-medium">- Rohan</p>
            </div>
            <div className="bg-gray-200 p-6 rounded-lg">
              <div className="flex text-yellow-400 mb-4">
                {[...Array(4)].map((_, j) => (
                  <span key={j}>★</span>
                ))}
              </div>
              <p className="text-gray-700 mb-4">"Reserved a bike and was cruising in a flash—impressive turnaround!"</p>
              <p className="text-gray-600 font-medium">- Kavita</p>
            </div>
            <div className="bg-gray-200 p-6 rounded-lg">
              <div className="flex text-yellow-400 mb-4">
                {[...Array(4)].map((_, j) => (
                  <span key={j}>★</span>
                ))}
              </div>
              <p className="text-gray-700 mb-4">"Locked in a ride and was exploring the city quickly—top-notch service!"</p>
              <p className="text-gray-600 font-medium">- Sameer</p>
            </div>
            <div className="bg-gray-200 p-6 rounded-lg">
              <div className="flex text-yellow-400 mb-4">
                {[...Array(4)].map((_, j) => (
                  <span key={j}>★</span>
                ))}
              </div>
              <p className="text-gray-700 mb-4">"Booked and rolled out smoothly—even that early!"</p>
              <p className="text-gray-600 font-medium">- Ishita</p>
            </div>
            <div className="bg-gray-200 p-6 rounded-lg">
              <div className="flex text-yellow-400 mb-4">
                {[...Array(4)].map((_, j) => (
                  <span key={j}>★</span>
                ))}
              </div>
              <p className="text-gray-700 mb-4">"Grabbed a scooter and was off on my adventure in a jiffy—excellent efficiency!"</p>
              <p className="text-gray-600 font-medium">- Karan</p>
            </div>
            <div className="bg-gray-200 p-6 rounded-lg">
              <div className="flex text-yellow-400 mb-4">
                {[...Array(4)].map((_, j) => (
                  <span key={j}>★</span>
                ))}
              </div>
              <p className="text-gray-700 mb-4">"Secured a rental and was riding in no time—felt like magic, truly seamless!"</p>
              <p className="text-gray-600 font-medium">- Meera</p>
            </div>
          </div>
        </div>
      </section>

      <FAQSection categories={toursFAQCategories} />

      <Footer />
    </div>
  )
}