import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Header from '../components/ui/Header'
import Footer from '../components/ui/Footer'
import FAQSection from '../components/ui/FAQSection'
import HeroSection from '../components/ui/HeroSection'
import VehicleCard from '../components/ui/VehicleCard'
import TourSection from '../components/ui/TourSection'
import ServiceCard from '../components/ui/ServiceCard'
import Button from '../components/ui/Button'
import FeatureList from '../components/ui/FeatureList'
import ReviewsSection from '../components/ui/ReviewsSection'
import { popularBikes } from '../data/vehicles'
import { popularTours } from '../data/tours'
import { serviceCards, whyChooseUsFeatures } from '../data/services'
import { toursFAQCategories } from '../data/faqs'
import { useLikes } from '../hooks/useLikes'
import { useToggle } from '../hooks/useToggle'

export default function Home() {
  const navigate = useNavigate()
  const bikeLikes = useLikes()
  const mobileMenu = useToggle()
  const [showAllBikes, setShowAllBikes] = useState(false)

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
              <FeatureList features={whyChooseUsFeatures} />
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
            {(showAllBikes ? popularBikes : popularBikes.slice(0, 3)).map((bike) => (
              <VehicleCard 
                key={bike.id}
                vehicle={bike}
                isLiked={bikeLikes.isLiked(bike.id)}
                onToggleLike={() => bikeLikes.toggleLike(bike.id)}
                onViewDetails={() => navigate(`/bike-details/${bike.id}`)}
              />
            ))}
          </div>
          <div className="text-center mt-8">
            <Button variant="secondary" onClick={() => setShowAllBikes(!showAllBikes)}>
              {showAllBikes ? 'Show Less ←' : 'View All →'}
            </Button>
          </div>
        </div>
      </section>

      <TourSection 
        title="Popular Outstation Tours"
        subtitle="Explore the beautiful Northeast India"
        tours={popularTours}
        backgroundColor="bg-gray-50"
      />

      <ReviewsSection />

      <FAQSection categories={toursFAQCategories} />

      <Footer />
    </div>
  )
}