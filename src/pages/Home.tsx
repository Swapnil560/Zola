import Header from '../components/ui/Header'
import Footer from '../components/ui/Footer'
import FAQSection from '../components/ui/FAQSection'
import HeroSection from '../components/ui/HeroSection'
import TourSection from '../components/ui/TourSection'
import ReviewsSection from '../components/ui/ReviewsSection'
import ServicesSection from '../components/sections/ServicesSection'
import AboutSection from '../components/sections/AboutSection'
import VehiclesSection from '../components/sections/VehiclesSection'
import { popularTours } from '../data/tours'
import { toursFAQCategories } from '../data/faqs'
import { homeReviews } from '../data/reviews'
import { useHomeLogic } from '../hooks/useHomeLogic'

export default function Home() {
  const { bikeLikes, mobileMenu, showAllBikes, handleViewDetails, toggleShowAllBikes } = useHomeLogic()

  return (
    <div className="min-h-screen bg-white">
      <Header isMobileMenuOpen={mobileMenu.value} setIsMobileMenuOpen={mobileMenu.toggle} />

      <HeroSection isMobileMenuOpen={mobileMenu.value} />
      <ServicesSection />
      <AboutSection />
      <VehiclesSection 
        showAllBikes={showAllBikes}
        bikeLikes={bikeLikes}
        onToggleShowAll={toggleShowAllBikes}
        onViewDetails={handleViewDetails}
      />

      <div id="popular-tours">
        <TourSection 
          title="Popular Outstation Tours"
          subtitle="Explore the beautiful Northeast India"
          tours={popularTours}
          backgroundColor="bg-gray-50"
        />
      </div>

      <ReviewsSection reviews={homeReviews} />

      <FAQSection categories={toursFAQCategories} />

      <Footer />
    </div>
  )
}