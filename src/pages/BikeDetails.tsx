import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import Header from '../components/ui/Header'
import Footer from '../components/ui/Footer'
import BackButton from '../components/ui/BackButton'
import ContactSection from '../components/ui/ContactSection'
import FAQSection from '../components/ui/FAQSection'

import ReviewsSection from '../components/ui/ReviewsSection'
import ImageGallery from '../components/ui/ImageGallery'
import SpecCard from '../components/ui/SpecCard'
import BikeInfo from '../components/ui/BikeInfo'
import StepIndicator from '../components/ui/StepIndicator'
import BookingStep from '../components/ui/BookingStep'
import { bikeDetailsFAQs } from '../data/faqs'
import { popularBikes } from '../data/vehicles'
import { useToggle } from '../hooks/useToggle'

export default function BikeDetails() {
  const { id } = useParams()
  const mobileMenu = useToggle()
  
  const bike = popularBikes.find(b => b.id === parseInt(id || '1')) || popularBikes[0]
  const [currentStep, setCurrentStep] = useState(1)
  
  const bikeImages = [bike.image, '/images/dirt.jpg', '/images/gps.jpg', '/images/helmet.jpg', '/images/saddle stay.jpg']



  useEffect(() => {
    window.scrollTo({ top: 0 })
  }, [])

  const [pickupDate, setPickupDate] = useState('2024-12-15')
  const [dropoffDate, setDropoffDate] = useState('2024-12-20')
  const [pickupLocation, setPickupLocation] = useState('Guwahati Airport')
  const [dropoffLocation, setDropoffLocation] = useState('Hotel Radisson Blu')
  const extraHelmet = useToggle()
  const premiumInsurance = useToggle(true)

  return (
    <div className="min-h-screen bg-gray-50">
      <Header isMobileMenuOpen={mobileMenu.value} setIsMobileMenuOpen={mobileMenu.toggle} />
      
      <BackButton />

      <main style={{paddingTop: '16px'}}>
        <section className="max-w-6xl mx-auto p-4 sm:p-6 bg-gray-50">
          <div className="flex flex-col lg:flex-row gap-8 lg:items-stretch">
            <ImageGallery images={bikeImages} alt="Royal Enfield Classic 350" />
            <BikeInfo bike={bike} />
          </div>
        </section>

        <section className="max-w-6xl mx-auto p-4 sm:p-6 mt-8 bg-gray-50">
          <h2 className="text-2xl font-bold text-black mb-6 text-center">Specifications</h2>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
            <SpecCard icon="/images/bp.png" value="54 kmpl" label="Mileage" />
            <SpecCard icon="/images/bppl.png" value="2 persons" label="Seating" />
            <SpecCard icon="/images/br.png" value="125cc" label="Engine" />
            <SpecCard icon="/images/bc.png" value="85 km/h" label="Top Speed" />
          </div>
        </section>

        <section className="max-w-6xl mx-auto p-4 sm:p-6 mt-12 lg:mt-8 bg-gray-50">
          <StepIndicator currentStep={currentStep} />
          <div className="bg-gray-100 rounded-2xl shadow-xl p-4 sm:p-8 border border-gray-200">
            <BookingStep 
              step={currentStep}
              pickupDate={pickupDate}
              setPickupDate={setPickupDate}
              dropoffDate={dropoffDate}
              setDropoffDate={setDropoffDate}
              pickupLocation={pickupLocation}
              setPickupLocation={setPickupLocation}
              dropoffLocation={dropoffLocation}
              setDropoffLocation={setDropoffLocation}
              extraHelmet={extraHelmet}
              premiumInsurance={premiumInsurance}
              onPrevious={() => setCurrentStep(Math.max(1, currentStep - 1))}
              onNext={() => setCurrentStep(currentStep + 1)}
              bike={bike}
            />
          </div>
        </section>

        <ContactSection />
        
        <ReviewsSection title="Customer Reviews" rating={4.9} totalReviews={124} maxReviews={3} />
        
        <FAQSection faqs={bikeDetailsFAQs} />

      </main>

      <Footer />
    </div>
  )
}