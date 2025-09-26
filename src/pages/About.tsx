import Header from '../components/ui/Header'
import Footer from '../components/ui/Footer'
import BackButton from '../components/ui/BackButton'
import FAQSection from '../components/ui/FAQSection'
import { useToggle } from '../hooks/useToggle'
import { aboutFAQCategories } from '../data/faqs'

export default function About() {
  const mobileMenu = useToggle()

  return (
    <div className="min-h-screen bg-white">
      <Header isMobileMenuOpen={mobileMenu.value} setIsMobileMenuOpen={mobileMenu.toggle} />
      
      <BackButton />

      <main style={{paddingTop: '16px'}}>
        {/* Our Journey Section */}
        <section className="py-12 sm:py-16 lg:py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 items-center">
              <div>
                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-black mb-4 sm:mb-6">Our Journey</h2>
                <p className="text-black text-base sm:text-lg mb-6 sm:mb-8">
                  Since 2016, Zolala Adventures has been making travel in Guwahati easier. We have completed more than 10,000 km on the road, serving locals and visitors with reliable rentals.
                </p>
                <ul className="space-y-3 sm:space-y-4">
                  {[
                    "Trusted Since 2016",
                    "Over 8 years of providing bikes and self-drive cars in Guwahati",
                    "Traveler-Centric Team: A group of enthusiasts who understand what explorers need",
                    "Comprehensive Fleet: From self-drive bikes and cars to cabs and tempo travelers",
                    "Dedicated to Your Journey: We look forward to being part of your next trip with dependable service"
                  ].map((item, index) => (
                    <li key={index} className="flex items-start">
                      <div className="w-6 h-6 sm:w-7 sm:h-7 rounded-full mr-2 sm:mr-3 flex-shrink-0 flex items-center justify-center" style={{backgroundColor: '#00473E'}}>
                        <span className="text-white text-sm sm:text-base font-bold">✓</span>
                      </div>
                      <span className="text-black text-sm sm:text-base">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="order-first lg:order-last">
                <img 
                  src="/images/road-forest.jpg" 
                  alt="Road through forest" 
                  className="w-full h-64 sm:h-80 lg:h-96 object-cover rounded-lg shadow-lg"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Our Story Section */}
        <section className="py-12 sm:py-16 lg:py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-black mb-3 sm:mb-4">Our Story</h2>
            <p className="text-gray-600 text-base sm:text-lg mb-8 sm:mb-12">
              Discover our mission, vision, and the values that guide every trip we serve.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
              <div className="text-center">
                <div className="w-32 h-32 sm:w-40 sm:h-40 lg:w-48 lg:h-48 mx-auto mb-4 sm:mb-6 rounded-full overflow-hidden">
                  <img 
                    src="/images/car-story.jpg" 
                    alt="Mission" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <p className="text-black text-sm sm:text-base">
                  <strong>Mission</strong> - Continue with the bloom of Northeast and spread its blossom to the rest of the world.
                </p>
              </div>
              
              <div className="text-center">
                <div className="w-32 h-32 sm:w-40 sm:h-40 lg:w-48 lg:h-48 mx-auto mb-4 sm:mb-6 rounded-full overflow-hidden">
                  <img 
                    src="/images/group-story.jpg" 
                    alt="Vision" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <p className="text-black text-sm sm:text-base">
                  <strong>Vision</strong> - Provide the best of the best support to any individual who comes to get bloom in the lap of nature.
                </p>
              </div>
              
              <div className="text-center">
                <div className="w-32 h-32 sm:w-40 sm:h-40 lg:w-48 lg:h-48 mx-auto mb-4 sm:mb-6 rounded-full overflow-hidden">
                  <img 
                    src="/images/handshake-story.jpg" 
                    alt="Values" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <p className="text-black text-sm sm:text-base">
                  <strong>Values</strong> - We believe in being punctual, providing support at any cost, and building trust with every traveler we serve.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <FAQSection 
          categories={aboutFAQCategories} 
          title="FAQs About Booking Your Ride"
          subtitle="Find quick answers to common questions"
        />
      </main>

      <Footer />
    </div>
  )
}