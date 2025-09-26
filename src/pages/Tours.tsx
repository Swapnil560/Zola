import { useState } from 'react'
import { useParams } from 'react-router-dom'

import Header from '../components/ui/Header'
import Footer from '../components/ui/Footer'
import BackButton from '../components/ui/BackButton'
import TourSection from '../components/ui/TourSection'
import TourInfoCards from '../components/ui/TourInfoCards'
import ReviewsSection from '../components/ui/ReviewsSection'
import FAQSection from '../components/ui/FAQSection'
import Button from '../components/ui/Button'
import InclusionCard from '../components/ui/InclusionCard'
import ItineraryItem from '../components/ui/ItineraryItem'
import { meghalayaItinerary, tawangItinerary, kazirangaItinerary, getEpicAdventures } from '../data/tours'
import { toursFAQCategories } from '../data/faqs'
import { meghalayaReviews, tawangReviews, kazirangaReviews } from '../data/reviews'
import { useToggle } from '../hooks/useToggle'

export default function Tours() {
  const { id } = useParams()
  const [openItems, setOpenItems] = useState<number[]>([])
  const mobileMenu = useToggle()

  const toggleDay = (day: number) => {
    setOpenItems((prev) =>
      prev.includes(day) ? prev.filter((i) => i !== day) : [...prev, day]
    )
  }

  const tourId = id ? parseInt(id) : 1
  const isTawang = tourId === 2
  const isKaziranga = tourId === 3
  const currentItinerary = isKaziranga ? kazirangaItinerary : (isTawang ? tawangItinerary : meghalayaItinerary)
  const currentReviews = isKaziranga ? kazirangaReviews : (isTawang ? tawangReviews : meghalayaReviews)
  const currentEpicAdventures = getEpicAdventures(isKaziranga ? 'kaziranga' : (isTawang ? 'tawang' : 'meghalaya'))
  const tourTitle = isKaziranga ? 'Kaziranga National Park' : (isTawang ? 'Tawang Bike Trip' : 'Meghalaya Bike Trip')
  const tourDuration = isKaziranga ? '4 Days / 3 Nights' : (isTawang ? '7 Days / 6 Nights' : '7 Days / 6 Nights')
  const tourLocation = 'Starts from Guwahati'
  const tourPrice = isKaziranga ? 35000 : (isTawang ? 55000 : 45000)



  return (
    <div className="min-h-screen bg-white">
      <Header isMobileMenuOpen={mobileMenu.value} setIsMobileMenuOpen={mobileMenu.toggle} />
      
      <BackButton />

      <main style={{paddingTop: '16px'}}>
        {/* Top Section */}
        <section className="max-w-6xl mx-auto p-4 sm:p-6">
          <div className="flex justify-between items-start mb-6">
            <div className="flex-1 pr-4">
              <h1 className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-800 mb-2 sm:mb-4">{tourTitle}</h1>
              <div className="flex flex-col sm:flex-row gap-1 sm:gap-4 text-xs sm:text-sm text-gray-600">
                <span><img src="/images/blackc.png" alt="Clock" className="w-4 h-4 inline mr-1" /> {tourDuration}</span>
                <span><img src="/images/loc.png" alt="Location" className="w-4 h-4 inline mr-1" /> {tourLocation}</span>
                <span><img src="/images/p.png" alt="People" className="w-4 h-4 inline mr-1" /> Max {isKaziranga ? '8' : '12'} {isKaziranga ? 'Travelers' : 'Riders'}</span>
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
            <img 
              src={isKaziranga ? '/images/Shillong-City-1-1536x1024-1-1024x683-2.jpg' : (isTawang ? '/images/tawang/1.JPG' : '/images/tourimage 1.jpg')} 
              alt={`${tourTitle} Main`} 
              className="rounded-md shadow-sm h-64 sm:h-80 lg:h-[560px] w-full lg:flex-1 object-cover" 
            />
            <div className="grid grid-cols-2 gap-4 w-full lg:flex-1">
              {(isKaziranga ? [
                '/images/airport.avif',
                '/images/sides.avif',
                '/images/root.jpeg',
                '/images/back.png'
              ] : (isTawang ? [
                '/images/tawang/2.JPG',
                '/images/tawang/3.JPG',
                '/images/tawang/4.JPG',
                '/images/tawang/5.JPG'
              ] : [
                '/images/Tourimage 2.jpg',
                '/images/tourimage 3.jpg', 
                '/images/tourmage 4.jpg',
                '/images/tourimage 5.jpg'
              ])).map((image, i) => (
                <img key={i} src={image} alt={`${tourTitle} Image ${i + 2}`} loading="lazy" className="rounded-md shadow-sm h-32 sm:h-40 lg:h-[270px] w-full object-cover" />
              ))}
            </div>
          </div>
        </section>

        <TourInfoCards 
          cards={[
            { icon: '/images/122.png', title: 'Duration', value: tourDuration },
            { icon: '/images/133.png', title: 'Trip Type', value: isKaziranga ? 'Wildlife Safari' : 'Motorcycle' },
            { icon: '/images/144.png', title: 'Safety Level', value: 'Moderate' }
          ]}
          price={tourPrice}
        />

        {/* Adventure Itinerary */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl text-gray-900 mb-4 font-bold">{isKaziranga ? '4-Day Wildlife Adventure' : '7-Day Adventure Itinerary'}</h2>
          <p className="text-gray-600 mb-8">Every day brings new adventure through {isKaziranga ? 'Kaziranga\'s wildlife paradise and natural beauty' : (isTawang ? 'Tawang\'s majestic mountains and high-altitude passes' : 'Meghalaya\'s stunning landscape')}</p>
            <div className="space-y-4">
              {currentItinerary.map((item) => (
                <ItineraryItem 
                  key={item.day}
                  day={item.day}
                  title={item.title}
                  location={item.location}
                  distance={item.distance}
                  highlights={item.highlights}
                  isOpen={openItems.includes(item.day)}
                  onToggle={() => toggleDay(item.day)}
                  image={item.image}
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

        <ReviewsSection title="What Our Adventurers Say" reviews={currentReviews} />

        <TourSection 
          title="More Epic Adventures"
          subtitle="Discover other incredible motorcycle journeys"
          tours={currentEpicAdventures}
          backgroundColor="bg-white"
        />

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