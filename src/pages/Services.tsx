import Header from '../components/ui/Header'
import Footer from '../components/ui/Footer'
import BackButton from '../components/ui/BackButton'
import FAQSection from '../components/ui/FAQSection'
import ServiceCard from '../components/ui/ServiceCard'
import { useToggle } from '../hooks/useToggle'
import { serviceCards } from '../data/services'
import { servicesFAQCategories } from '../data/faqs'

export default function Services() {
  const mobileMenu = useToggle()

  return (
    <div className="min-h-screen bg-white">
      <Header isMobileMenuOpen={mobileMenu.value} setIsMobileMenuOpen={mobileMenu.toggle} />
      
      <BackButton />

      <main style={{paddingTop: '16px'}}>
        {/* Start Your Journey Section */}
        <section className="py-8 sm:py-12 lg:py-16 xl:py-20 bg-gray-100">
          <div className="max-w-7xl mx-auto px-3 sm:px-4 lg:px-6 xl:px-8">
            <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-center mb-2 sm:mb-3 lg:mb-4">Start Your Journey</h2>
            <p className="text-gray-600 text-center mb-6 sm:mb-8 lg:mb-12 text-xs sm:text-sm lg:text-base">Select how you want to travel today</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 lg:gap-8">
              {serviceCards.map((service, i) => (
                <ServiceCard key={i} service={service} />
              ))}
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <FAQSection 
          categories={servicesFAQCategories} 
          title="FAQs About Booking Your Ride"
          subtitle="Find quick answers to common questions"
        />
      </main>

      <Footer />
    </div>
  )
}