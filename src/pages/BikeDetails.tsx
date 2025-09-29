import { useState, useEffect } from 'react'
import { useParams, useLocation } from 'react-router-dom'
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
  const location = useLocation()
  const mobileMenu = useToggle()
  
  // Check where we came from to set correct back path
  const getBackPath = () => {
    const from = location.state?.from
    switch (from) {
      case 'bike': return '/bikes'
      case 'cab': return '/cabs'
      case 'tempo': return '/tempo'
      case 'car': return '/cars'
      case 'vehiclelist': return '/vehiclelist'
      default: return '/'
    }
  }
  const backPath = getBackPath()
  
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
    : bike.id === 6
    ? ['/images/Royal Enfield Scram 411/11.jpg', '/images/Royal Enfield Scram 411/backhelmet.webp', '/images/Royal Enfield Scram 411/front.avif', '/images/Royal Enfield Scram 411/helmet (1).webp', '/images/Royal Enfield Scram 411/side (1).jpg']
    : bike.id === 7
    ? ['/images/Toyota Etios/toyota-etios.jpg', '/images/Toyota Etios/2cars.jpg', '/images/Toyota Etios/carmountain.jpeg', '/images/Toyota Etios/seatbelt.jpg', '/images/Toyota Etios/seats.jpeg']
    : bike.id === 8
    ? ['/images/Innova/innova-crysta-exterior-right-front-three-quarter-2.webp', '/images/Innova/half.webp', '/images/Innova/innova-taxi.jpg', '/images/Innova/toyota-innova-1.jpg', '/images/Innova/under.jpg']
    : bike.id === 9
    ? ['/images/force urbania/force.avif', '/images/force urbania/exterior-2-2.jpg', '/images/force urbania/front.avif', '/images/force urbania/interior-3-1.jpg', '/images/force urbania/side.jpg']
    : bike.id === 10
    ? ['/images/mercedes/mercedes-sprinter02.webp', '/images/mercedes/mercedes-tempo-inner-2.webp', '/images/mercedes/mercedes-tempo-traveller-image-2.webp', '/images/mercedes/mercedes-tempo-traveller-image-3.webp', '/images/mercedes/mercedes-tempo-traveller-image-4.webp']
    : bike.id === 11
    ? ['/images/innova-hycross/innova-hycross.jpg', '/images/innova-hycross/1684983008.png', '/images/innova-hycross/jpeg-optimizer_hycross-1.jpg', '/images/innova-hycross/mercedes-tempo-traveller-image-3.webp', '/images/innova-hycross/Toyota-Innova-Hycross-interior-seating-1160x734.webp']
    : bike.id === 12
    ? ['/images/Mahindra XEV/Mahindra.avif', '/images/Mahindra XEV/2024_mahindra_xev_9e_interior_28.jpg', '/images/Mahindra XEV/xev-9e-interior-0757.jpeg', '/images/Mahindra XEV/Mahindra-XEV-9e-jpg.webp', '/images/Mahindra XEV/XEV 9e_Picture 03.jpeg']
    : bike.id === 13
    ? ['/images/tata-curvv/Tata_Curvv_new_colour_cleanup_1739960460053_1739960467626.jpg', '/images/tata-curvv/1739870410507-ftju-Tata-Curvv-ICE-Nitro-Crimson.webp', '/images/tata-curvv/curvv-ev-exterior-right-side-view.avif', '/images/tata-curvv/curvv3_banner_desktop_1920x1080.jpg', '/images/tata-curvv/Tata-Curvv-EV-Dashboard.jpg']
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
      
      <BackButton to={backPath} />

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
            <SpecCard icon="/images/bp.png" value={bike.id === 1 || bike.id === 2 || bike.id === 4 || bike.id === 6 ? "35 kmpl" : bike.id === 3 || bike.id === 5 || bike.id === 7 || bike.id === 8 || bike.id === 9 || bike.id === 10 || bike.id === 11 || bike.id === 13 ? "25 kmpl" : bike.id === 12 ? "450 km" : "54 kmpl"} label={bike.id === 12 ? "Range" : "Mileage"} />
            <SpecCard icon="/images/bppl.png" value={bike.id === 3 || bike.id === 7 || bike.id === 11 || bike.id === 12 || bike.id === 13 ? "5 persons" : bike.id === 5 || bike.id === 9 ? "12 persons" : bike.id === 8 ? "8 persons" : bike.id === 10 ? "15 persons" : "2 persons"} label="Seating" />
            <SpecCard icon="/images/br.png" value={bike.id === 1 ? "350cc" : bike.id === 3 ? "1498cc" : bike.id === 4 ? "452cc" : bike.id === 5 ? "2596cc" : bike.id === 6 ? "411cc" : bike.id === 7 ? "1496cc" : bike.id === 8 ? "2694cc" : bike.id === 9 ? "2596cc" : bike.id === 10 ? "2143cc" : bike.id === 11 ? "2000cc" : bike.id === 12 ? "Electric" : bike.id === 13 ? "1497cc" : "125cc"} label={bike.id === 12 ? "Motor" : "Engine"} />
            <SpecCard icon="/images/bc.png" value={bike.id === 1 || bike.id === 3 || bike.id === 7 || bike.id === 8 || bike.id === 11 || bike.id === 13 ? "110 km/h" : bike.id === 4 ? "165 km/h" : bike.id === 5 || bike.id === 9 || bike.id === 10 ? "80 km/h" : bike.id === 6 ? "120 km/h" : bike.id === 12 ? "200 km/h" : "85 km/h"} label="Top Speed" />
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