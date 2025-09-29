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
  
  const bikeImages = bike.id === 1 
    ? [bike.image, '/images/350/head.jpeg', '/images/350/helmet.jpeg', '/images/350/mride.jpeg', '/images/350/side.jpeg']
    : bike.id === 2
    ? [bike.image, '/images/Scooter/2ppl.jpeg', '/images/Scooter/back.jpeg', '/images/Scooter/helmet.jpeg', '/images/Scooter/side.jpeg']
    : bike.id === 3
    ? [bike.image, '/images/cabs/3cars.jpeg', '/images/cabs/back.jpeg', '/images/cabs/side.jpeg', '/images/cabs/top.jpeg']
    : bike.id === 5
    ? [bike.image, '/images/tempo/night.jpeg', '/images/tempo/s1.jpeg', '/images/tempo/s2.jpeg', '/images/tempo/side.jpeg']
    : [bike.image, '/images/dirt.jpg', '/images/gps.jpg', '/images/helmet.jpg', '/images/saddle stay.jpg']



  useEffect(() => {
    window.scrollTo({ top: 0 })
  }, [])

  const [pickupDate, setPickupDate] = useState('')
  const [dropoffDate, setDropoffDate] = useState('')
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
            <SpecCard icon="/images/bp.png" value={bike.id === 1 || bike.id === 2 || bike.id === 4 ? "35 kmpl" : bike.id === 3 || bike.id === 5 ? "25 kmpl" : "54 kmpl"} label="Mileage" />
            <SpecCard icon="/images/bppl.png" value={bike.id === 3 ? "5 persons" : bike.id === 5 ? "12 persons" : "2 persons"} label="Seating" />
            <SpecCard icon="/images/br.png" value={bike.id === 1 ? "350cc" : bike.id === 3 ? "1498cc" : bike.id === 4 ? "452cc" : bike.id === 5 ? "2596cc" : "125cc"} label="Engine" />
            <SpecCard icon="/images/bc.png" value={bike.id === 1 || bike.id === 3 ? "110 km/h" : bike.id === 4 ? "165 km/h" : bike.id === 5 ? "80 km/h" : "85 km/h"} label="Top Speed" />
          </div>
        </section>

        <section className="max-w-6xl mx-auto p-4 sm:p-6 mt-12 lg:mt-8 bg-gray-50">
          <StepIndicator currentStep={currentStep} onStepClick={setCurrentStep} />
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
              onPrevious={() => {
                const buttonRect = document.querySelector('[data-nav-button]')?.getBoundingClientRect()
                setCurrentStep(Math.max(1, currentStep - 1))
                setTimeout(() => {
                  if (buttonRect) {
                    const newButton = document.querySelector('[data-nav-button]')
                    if (newButton) {
                      const newRect = newButton.getBoundingClientRect()
                      const scrollDiff = newRect.top - buttonRect.top
                      window.scrollBy(0, scrollDiff)
                    }
                  }
                }, 0)
              }}
              onNext={() => {
                const buttonRect = document.querySelector('[data-nav-button]')?.getBoundingClientRect()
                setCurrentStep(currentStep + 1)
                setTimeout(() => {
                  if (buttonRect) {
                    const newButton = document.querySelector('[data-nav-button]')
                    if (newButton) {
                      const newRect = newButton.getBoundingClientRect()
                      const scrollDiff = newRect.top - buttonRect.top
                      window.scrollBy(0, scrollDiff)
                    }
                  }
                }, 0)
              }}
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