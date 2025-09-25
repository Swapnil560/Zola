import { useState } from 'react'

import Header from '../components/ui/Header'
import Footer from '../components/ui/Footer'
import BackButton from '../components/ui/BackButton'
import TourCard from '../components/ui/TourCard'
import TourInfoCards from '../components/ui/TourInfoCards'
import ReviewsSection from '../components/ui/ReviewsSection'
import FAQSection from '../components/ui/FAQSection'
import Button from '../components/ui/Button'
import InclusionCard from '../components/ui/InclusionCard'
import ItineraryItem from '../components/ui/ItineraryItem'
import { itinerary, popularTours } from '../data/tours'
import { toursFAQCategories } from '../data/faqs'
import { useLikes } from '../hooks/useLikes'
import { useToggle } from '../hooks/useToggle'

export default function Tours() {
  const [openItems, setOpenItems] = useState<number[]>([])
  const mobileMenu = useToggle()
  const tourLikes = useLikes()

  const toggleDay = (day: number) => {
    setOpenItems((prev) =>
      prev.includes(day) ? prev.filter((i) => i !== day) : [...prev, day]
    )
  }



  return (
    <div className="min-h-screen bg-white">
      <Header isMobileMenuOpen={mobileMenu.value} setIsMobileMenuOpen={mobileMenu.toggle} />
      
      <BackButton />

      <main style={{paddingTop: '16px'}}>
        {/* Top Section */}
        <section className="max-w-6xl mx-auto p-4 sm:p-6">
          <div className="flex justify-between items-start mb-6">
            <div className="flex-1 pr-4">
              <h1 className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-800 mb-2 sm:mb-4">Meghalaya Bike Trip</h1>
              <div className="flex flex-col sm:flex-row gap-1 sm:gap-4 text-xs sm:text-sm text-gray-600">
                <span><img src="/images/blackc.png" alt="Clock" className="w-4 h-4 inline mr-1" /> 7 Days / 6 Nights</span>
                <span><img src="/images/loc.png" alt="Location" className="w-4 h-4 inline mr-1" /> Starts from Guwahati</span>
                <span><img src="/images/p.png" alt="People" className="w-4 h-4 inline mr-1" /> Max 12 Riders</span>
              </div>
            </div>
            <div className="flex gap-2 flex-shrink-0">
              <Button variant="primary" size="sm" className="flex items-center">
                <img src="/images/share.png" alt="Share" className="w-4 h-4 mr-1" />Share
              </Button>
              <Button variant="secondary" size="sm" className="flex items-center">
                <img src="/images/whiteheart.png" alt="Heart" className="w-4 h-4 mr-1" />Wishlist
              </Button>
            </div>
          </div>
        </section>

        {/* Image Grid Layout */}
        <section className="w-full px-4 sm:px-6 lg:px-8 mb-6">
          <div className="max-w-6xl mx-auto flex flex-col lg:flex-row gap-4">
            <img src="/images/tourimage 1.jpg" alt="Meghalaya Tour" className="rounded-md shadow-sm h-64 sm:h-80 lg:h-[560px] w-full lg:flex-1 object-cover" />
            <div className="grid grid-cols-2 gap-4 w-full lg:flex-1">
              {[
                '/images/Tourimage 2.jpg',
                '/images/tourimage 3.jpg', 
                '/images/tourmage 4.jpg',
                '/images/tourimage 5.jpg'
              ].map((image, i) => (
                <img key={i} src={image} alt={`Tour Image ${i + 2}`} className="rounded-md shadow-sm h-32 sm:h-40 lg:h-[270px] w-full object-cover" />
              ))}
            </div>
          </div>
        </section>

        <TourInfoCards 
          cards={[
            { icon: '/images/122.png', title: 'Duration', value: '7 Days / 6 Nights' },
            { icon: '/images/133.png', title: 'Ride Type', value: 'Motorcycle' },
            { icon: '/images/144.png', title: 'Safety Level', value: 'Moderate' }
          ]}
          price={45000}
        />

        {/* 7-Day Adventure Itinerary */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl text-gray-900 mb-4 font-bold">7-Day Adventure Itinerary</h2>
          <p className="text-gray-600 mb-8">Every day brings new adventure through Meghalaya's stunning landscape</p>
            <div className="space-y-4">
              {itinerary.map((item) => (
                <ItineraryItem 
                  key={item.day}
                  day={item.day}
                  title={item.title}
                  location={item.location}
                  distance={item.distance}
                  highlights={item.highlights}
                  isOpen={openItems.includes(item.day)}
                  onToggle={() => toggleDay(item.day)}
                />
              ))}
            </div>
          </div>
        </section>

        {/* What's Included & What's Not */}
        <section className="py-16 flex justify-center">
          <div className="max-w-4xl px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl text-gray-900 mb-4 font-bold text-center">What's Included & What's Not</h2>
            <p className="text-gray-600 mb-8 text-center">Complete transparency on what your adventure package covers...</p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
              <InclusionCard 
                title="What's Included"
                type="included"
                items={[
                  { text: "6 nights accommodation (twin sharing)" },
                  { text: "Daily breakfast & dinner" },
                  { text: "Experienced road captain & guide" },
                  { text: "Backup vehicle with mechanic" },
                  { text: "All permits & documentation" },
                  { text: "Group photography sessions" },
                  { text: "Welcome & farewell dinner" },
                  { text: "24/7 support during trip" },
                  { text: "First aid kit & safety briefing" },
                  { text: "Complimentary trip merchandise" }
                ]}
              />
              <InclusionCard 
                title="What's Not Included"
                type="excluded"
                items={[
                  { text: "Fuel costs for motorcycles" },
                  { text: "Lunch meals (local exploration)" },
                  { text: "Personal travel insurance" },
                  { text: "Alcohol & personal beverages" },
                  { text: "Tips for guides & staff" },
                  { text: "Personal expenses & shopping" },
                  { text: "Laundry services" },
                  { text: "Any activity not mentioned in itinerary" },
                  { text: "GST (5% extra on total amount)" },
                  { text: "Emergency evacuation costs" }
                ]}
              />
            </div>
            <div className="p-4 rounded-lg mt-4" style={{backgroundColor: '#E9E9E9'}}>
              <p className="text-gray-700 text-sm text-center">
                <span className="font-bold text-black">Important:</span> All prices are subject to 5% GST. Final pricing may vary based on accommodation availability and seasonal demand. We recommend comprehensive travel insurance before the trip.
              </p>
            </div>
          </div>
        </section>

        <ReviewsSection title="What Our Adventurers Say" />

        {/* More Epic Adventures */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl text-gray-900 mb-4 font-bold text-center">More Epic Adventures</h2>
            <p className="text-gray-600 mb-8 text-center">Discover other incredible motorcycle journeys</p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {popularTours.map((tour) => (
                <div key={tour.id} className="p-4 rounded-lg shadow hover:scale-105 hover:shadow-lg transition-all duration-300 cursor-pointer" style={{backgroundColor: '#E9E9E9'}}>
                  <TourCard 
                    tour={tour}
                    isLiked={tourLikes.isLiked(tour.id)}
                    onToggleLike={() => tourLikes.toggleLike(tour.id)}
                  />
                </div>
              ))}
            </div>
          </div>
        </section>

        <FAQSection 
          categories={toursFAQCategories} 
          title="FAQs About Booking Your Ride"
          subtitle="Find quick answers to common questions"
        />
      </main>

      <Footer />
    </div>
  )
}