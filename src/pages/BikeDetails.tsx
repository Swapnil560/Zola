import { useState, useEffect } from 'react'
import Header from '../components/ui/Header'
import Footer from '../components/ui/Footer'
import BackButton from '../components/ui/BackButton'
import ContactSection from '../components/ui/ContactSection'
import FAQSection from '../components/ui/FAQSection'
import { bikeDetailsFAQs } from '../data/faqs'
import { useToggle } from '../hooks/useToggle'

export default function BikeDetails() {
  const mobileMenu = useToggle()
  const [currentStep, setCurrentStep] = useState(1)
  const [currentImageIndex, setCurrentImageIndex] = useState(0)
  const [review1Rating, setReview1Rating] = useState(5)
  const [review2Rating, setReview2Rating] = useState(4)
  const [review3Rating, setReview3Rating] = useState(5)
  
  const bikeImages = [
    '/images/classic 350.png',
    '/images/122.png',
    '/images/133.png', 
    '/images/144.png',
    '/images/blackc.png',
    '/images/whitec.png'
  ]
  
  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % bikeImages.length)
  }
  
  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + bikeImages.length) % bikeImages.length)
  }



  useEffect(() => {
    window.scrollTo({ top: 0 })
  }, [])

  const [pickupDate, setPickupDate] = useState('15-12-2024')
  const [dropoffDate, setDropoffDate] = useState('20-12-2024')
  const [pickupLocation, setPickupLocation] = useState('Guwahati Airport')
  const [dropoffLocation, setDropoffLocation] = useState('Hotel Radisson Blu')
  const extraHelmet = useToggle()
  const premiumInsurance = useToggle(true)

  return (
    <div className="min-h-screen bg-white">
      <Header isMobileMenuOpen={mobileMenu.value} setIsMobileMenuOpen={mobileMenu.toggle} />
      
      <BackButton />

      <main style={{paddingTop: '16px'}}>
        <section className="max-w-6xl mx-auto p-4 sm:p-6">
          <div className="flex flex-col lg:flex-row gap-8 lg:items-end">
            {/* Left Side - Images */}
            <div className="lg:w-1/2 flex flex-col">
              {/* Main Image with Navigation Arrows */}
              <div className="relative mb-4">
                <img 
                  src={bikeImages[currentImageIndex]} 
                  alt="Royal Enfield Classic 350" 
                  className="w-full h-96 object-cover rounded-lg" 
                />
                
                {/* Left Arrow */}
                <button 
                  onClick={prevImage}
                  className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 hover:bg-opacity-70 text-white p-2 rounded-full transition-all duration-200"
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                  </svg>
                </button>
                
                {/* Right Arrow */}
                <button 
                  onClick={nextImage}
                  className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 hover:bg-opacity-70 text-white p-2 rounded-full transition-all duration-200"
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </button>
                
                {/* Image Counter */}
                <div className="absolute bottom-4 right-4 bg-black bg-opacity-50 text-white px-3 py-1 rounded-full text-sm">
                  {currentImageIndex + 1} / {bikeImages.length}
                </div>
              </div>
              
              {/* Thumbnail Gallery */}
              <div className="flex gap-2 overflow-x-auto">
                {bikeImages.map((image, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentImageIndex(index)}
                    className={`flex-shrink-0 w-20 h-16 rounded-lg overflow-hidden border-2 transition-all duration-200 ${
                      currentImageIndex === index 
                        ? 'border-blue-500 ring-2 ring-blue-200' 
                        : 'border-gray-200 hover:border-gray-300'
                    }`}
                  >
                    <img 
                      src={image} 
                      alt={`Bike view ${index + 1}`} 
                      className="w-full h-full object-cover"
                    />
                  </button>
                ))}
              </div>
            </div>
            
            {/* Right Side - Content */}
            <div className="lg:w-1/2 flex flex-col">
              <h1 className="text-3xl font-bold text-black mb-2">Royal Enfield Classic 350</h1>
              <p className="text-gray-600 mb-4">Stylish, reliable city ride with vintage charm</p>
              
              <div className="flex items-center mb-4">
                <div className="flex text-yellow-400 mr-2">
                  {[...Array(5)].map((_, i) => (
                    <span key={i}>★</span>
                  ))}
                </div>
                <span className="text-gray-600">(124 reviews)</span>
              </div>

              <div className="text-4xl font-bold mb-6" style={{color: '#2D2D2D'}}>₹4,500 / per day</div>

              <div className="space-y-3 mb-6">
                <div className="flex items-center px-4 py-3 rounded-lg bg-gray-300 text-gray-700">
                  <span className="mr-3 text-lg">🛡️</span>
                  <span>Free helmet included</span>
                </div>
                <div className="flex items-center px-4 py-3 rounded-lg bg-gray-300 text-gray-700">
                  <span className="mr-3 text-lg">🛡️</span>
                  <span>Fully insured</span>
                </div>
                <div className="flex items-center px-4 py-3 rounded-lg bg-gray-300 text-gray-700">
                  <span className="mr-3 text-lg">✈️</span>
                  <span>Airport pickup</span>
                </div>
              </div>

              <button className="w-full text-white py-3 rounded-lg hover:scale-105 transition-all duration-200 font-medium" style={{backgroundColor: '#00473E'}}>
                Book Now
              </button>
            </div>
          </div>
        </section>

        {/* Specifications Section */}
        <section className="max-w-6xl mx-auto p-4 sm:p-6 mt-8">
          <h2 className="text-2xl font-bold text-black mb-6 text-center">Specifications</h2>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
            {/* Mileage */}
            <div className="bg-gray-300 border border-gray-200 rounded-lg p-6 text-center">
              <div className="text-6xl mb-3 text-blue-500">⛽</div>
              <h3 className="text-xl font-bold text-black mb-1">54 kmpl</h3>
              <p className="text-gray-600 text-sm">Mileage</p>
            </div>
            
            {/* Seating */}
            <div className="bg-gray-300 border border-gray-200 rounded-lg p-6 text-center">
              <div className="w-16 h-16 mx-auto mb-3 flex items-center justify-center">
                <img src="/images/pp.png" alt="Seating" className="w-12 h-12" style={{filter: 'hue-rotate(200deg) saturate(2)'}} />
              </div>
              <h3 className="text-xl font-bold text-black mb-1">2 persons</h3>
              <p className="text-gray-600 text-sm">Seating</p>
            </div>
            
            {/* Engine */}
            <div className="bg-gray-300 border border-gray-200 rounded-lg p-6 text-center">
              <div className="text-6xl mb-3">
                <svg className="w-16 h-16 mx-auto text-blue-500" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M22.7 19l-9.1-9.1c.9-2.3.4-5-1.5-6.9-2-2-5-2.4-7.4-1.3L9 6 6 9 1.6 4.7C.4 7.1.9 10.1 2.9 12.1c1.9 1.9 4.6 2.4 6.9 1.5l9.1 9.1c.4.4 1 .4 1.4 0l2.3-2.3c.5-.4.5-1.1.1-1.4z"/>
                </svg>
              </div>
              <h3 className="text-xl font-bold text-black mb-1">125cc</h3>
              <p className="text-gray-600 text-sm">Engine</p>
            </div>
            
            {/* Top Speed */}
            <div className="bg-gray-300 border border-gray-200 rounded-lg p-6 text-center">
              <div className="text-6xl mb-3 text-blue-500">🕐</div>
              <h3 className="text-xl font-bold text-black mb-1">85 km/h</h3>
              <p className="text-gray-600 text-sm">Top Speed</p>
            </div>
          </div>
        </section>

        {/* Booking Steps */}
        <section className="max-w-6xl mx-auto p-4 sm:p-6 mt-12 lg:mt-8">
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:flex lg:flex-wrap lg:justify-center lg:items-center gap-3 sm:gap-4 lg:gap-8 mb-8 px-2">
            {[
              { num: 1, label: 'Dates', icon: '📅' },
              { num: 2, label: 'Locations', icon: '📍' },
              { num: 3, label: 'Add-ons', icon: '🛡️' },
              { num: 4, label: 'Review', icon: '📋' },
              { num: 5, label: 'Payment', icon: '💳' }
            ].map((step) => (
              <div key={step.num} className="flex flex-col items-center text-center">
                <div className={`w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 rounded-full flex items-center justify-center font-bold mb-2 transition-all duration-300 ${
                  currentStep === step.num 
                    ? 'text-white shadow-lg transform scale-110' 
                    : currentStep > step.num
                    ? 'text-white'
                    : 'bg-gray-200 text-gray-600'
                }`} style={currentStep >= step.num ? {backgroundColor: '#00473E'} : {}}>
                  {currentStep > step.num ? '✓' : step.icon}
                </div>
                <div className="flex flex-col">
                  <span className={`text-xs sm:text-sm font-medium ${
                    currentStep === step.num ? 'text-blue-600' : 'text-gray-600'
                  }`}>
                    Step {step.num}
                  </span>
                  <span className={`text-sm sm:text-base ${
                    currentStep === step.num ? 'font-bold text-gray-900' : 'text-gray-600'
                  }`}>
                    {step.label}
                  </span>
                </div>
              </div>
            ))}
          </div>

          {/* Step Content */}
          <div className="bg-gray-100 rounded-2xl shadow-xl p-4 sm:p-8 border border-gray-300">
            {currentStep === 1 && (
              <div className="max-w-2xl mx-auto">
                <div className="text-center mb-8">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full mb-4">
                    <span className="text-2xl">📅</span>
                  </div>
                  <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-2">Select Your Dates</h2>
                  <p className="text-gray-600">Choose your pickup and drop-off dates</p>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                  <div className="space-y-2">
                    <label className="block text-gray-700 text-sm font-semibold mb-2">Pick-up Date</label>
                    <div className="relative">
                      <input 
                        type="date" 
                        value={pickupDate}
                        onChange={(e) => setPickupDate(e.target.value)}
                        className="w-full border-2 border-gray-200 rounded-xl p-4 text-gray-900 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all duration-300"
                      />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label className="block text-gray-700 text-sm font-semibold mb-2">Drop-off Date</label>
                    <div className="relative">
                      <input 
                        type="date" 
                        value={dropoffDate}
                        onChange={(e) => setDropoffDate(e.target.value)}
                        className="w-full border-2 border-gray-200 rounded-xl p-4 text-gray-900 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all duration-300"
                      />
                    </div>
                  </div>
                </div>
                
                <div className="bg-blue-50 rounded-xl p-4 mb-6">
                  <div className="flex items-center text-blue-800">
                    <span className="mr-2">ℹ️</span>
                    <span className="text-sm font-medium">Total Duration: 5 days • Daily Rate: ₹4,500</span>
                  </div>
                </div>
                
                <div className="flex flex-col sm:flex-row gap-4 justify-between">
                  <button 
                    onClick={() => setCurrentStep(1)}
                    className="px-6 py-3 border-2 border-gray-300 text-gray-600 rounded-xl font-semibold hover:bg-gray-50 transition-all duration-300 disabled:opacity-50"
                    disabled
                  >
                    Previous
                  </button>
                  <button 
                    onClick={() => setCurrentStep(2)}
                    className="px-8 py-3 text-white rounded-xl font-semibold hover:shadow-lg transform hover:scale-105 transition-all duration-300"
                    style={{backgroundColor: '#00473E'}}
                  >
                    Continue to Locations →
                  </button>
                </div>
              </div>
            )}

            {currentStep === 2 && (
              <div className="max-w-2xl mx-auto">
                <div className="text-center mb-8">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-green-500 to-teal-600 rounded-full mb-4">
                    <span className="text-2xl">📍</span>
                  </div>
                  <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-2">Choose Locations</h2>
                  <p className="text-gray-600">Select pickup and drop-off locations</p>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                  <div className="space-y-2">
                    <label className="block text-gray-700 text-sm font-semibold mb-2">Pick-up Location</label>
                    <select 
                      value={pickupLocation}
                      onChange={(e) => setPickupLocation(e.target.value)}
                      className="w-full border-2 border-gray-200 rounded-xl p-4 text-gray-900 focus:border-green-500 focus:ring-2 focus:ring-green-200 transition-all duration-300"
                    >
                      <option value="Guwahati Airport">Guwahati Airport</option>
                      <option value="Guwahati Railway Station">Guwahati Railway Station</option>
                      <option value="Hotel Radisson Blu">Hotel Radisson Blu</option>
                      <option value="Paltan Bazaar">Paltan Bazaar</option>
                    </select>
                  </div>
                  <div className="space-y-2">
                    <label className="block text-gray-700 text-sm font-semibold mb-2">Drop-off Location</label>
                    <select 
                      value={dropoffLocation}
                      onChange={(e) => setDropoffLocation(e.target.value)}
                      className="w-full border-2 border-gray-200 rounded-xl p-4 text-gray-900 focus:border-green-500 focus:ring-2 focus:ring-green-200 transition-all duration-300"
                    >
                      <option value="Hotel Radisson Blu">Hotel Radisson Blu</option>
                      <option value="Guwahati Airport">Guwahati Airport</option>
                      <option value="Guwahati Railway Station">Guwahati Railway Station</option>
                      <option value="Paltan Bazaar">Paltan Bazaar</option>
                    </select>
                  </div>
                </div>
                
                <div className="bg-green-50 rounded-xl p-4 mb-6">
                  <div className="flex items-center text-green-800">
                    <span className="mr-2">🚗</span>
                    <span className="text-sm font-medium">Free pickup & drop-off within 10km radius</span>
                  </div>
                </div>
                
                <div className="flex flex-col sm:flex-row gap-4 justify-between">
                  <button 
                    onClick={() => setCurrentStep(1)}
                    className="px-6 py-3 border-2 border-gray-300 text-gray-600 rounded-xl font-semibold hover:bg-gray-50 transition-all duration-300"
                  >
                    ← Previous
                  </button>
                  <button 
                    onClick={() => setCurrentStep(3)}
                    className="px-8 py-3 text-white rounded-xl font-semibold hover:shadow-lg transform hover:scale-105 transition-all duration-300"
                    style={{backgroundColor: '#00473E'}}
                  >
                    Continue to Add-ons →
                  </button>
                </div>
              </div>
            )}

            {currentStep === 3 && (
              <div className="max-w-2xl mx-auto">
                <div className="text-center mb-8">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-600 rounded-full mb-4">
                    <span className="text-2xl">🛡️</span>
                  </div>
                  <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-2">Select Add-ons</h2>
                  <p className="text-gray-600">Enhance your rental experience</p>
                </div>
                
                <div className="space-y-4 mb-8">
                  {/* Free Helmet */}
                  <div className="bg-gradient-to-r from-green-50 to-emerald-50 border-2 border-green-200 rounded-xl p-6">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center">
                        <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mr-4">
                          <span className="text-2xl">🛡️</span>
                        </div>
                        <div>
                          <h3 className="font-bold text-gray-900 text-lg">Safety Helmet</h3>
                          <p className="text-green-700 text-sm font-medium">Premium quality helmet included</p>
                        </div>
                      </div>
                      <div className="bg-green-500 text-white px-4 py-2 rounded-full font-bold text-sm">
                        FREE
                      </div>
                    </div>
                  </div>

                  {/* Extra Helmet */}
                  <div className={`border-2 rounded-xl p-6 transition-all duration-300 ${
                    extraHelmet.value 
                      ? 'border-blue-300 bg-blue-50' 
                      : 'border-gray-200 bg-white hover:border-gray-300'
                  }`}>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center">
                        <input 
                          type="checkbox" 
                          checked={extraHelmet.value}
                          onChange={extraHelmet.toggle}
                          className="w-5 h-5 text-blue-600 border-2 border-gray-300 rounded focus:ring-blue-500 mr-4" 
                        />
                        <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mr-4">
                          <span className="text-2xl">🛡️</span>
                        </div>
                        <div>
                          <h3 className="font-bold text-gray-900 text-lg">Extra Helmet</h3>
                          <p className="text-gray-600 text-sm">Additional helmet for passenger</p>
                        </div>
                      </div>
                      <div className="text-blue-600 font-bold text-lg">+₹50</div>
                    </div>
                  </div>

                  {/* Premium Insurance */}
                  <div className={`border-2 rounded-xl p-6 transition-all duration-300 ${
                    premiumInsurance.value 
                      ? 'border-purple-300 bg-purple-50' 
                      : 'border-gray-200 bg-white hover:border-gray-300'
                  }`}>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center">
                        <input 
                          type="checkbox" 
                          checked={premiumInsurance.value}
                          onChange={premiumInsurance.toggle}
                          className="w-5 h-5 text-purple-600 border-2 border-gray-300 rounded focus:ring-purple-500 mr-4" 
                        />
                        <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mr-4">
                          <span className="text-2xl">📜</span>
                        </div>
                        <div>
                          <h3 className="font-bold text-gray-900 text-lg">Premium Insurance</h3>
                          <p className="text-gray-600 text-sm">Comprehensive coverage & protection</p>
                        </div>
                      </div>
                      <div className="text-purple-600 font-bold text-lg">+₹100</div>
                    </div>
                  </div>
                </div>
                
                <div className="bg-purple-50 rounded-xl p-4 mb-6">
                  <div className="flex items-center justify-between text-purple-800">
                    <span className="font-medium">Total Add-ons:</span>
                    <span className="font-bold text-lg">₹{(extraHelmet.value ? 50 : 0) + (premiumInsurance.value ? 100 : 0)}</span>
                  </div>
                </div>
                
                <div className="flex flex-col sm:flex-row gap-4 justify-between">
                  <button 
                    onClick={() => setCurrentStep(2)}
                    className="px-6 py-3 border-2 border-gray-300 text-gray-600 rounded-xl font-semibold hover:bg-gray-50 transition-all duration-300"
                  >
                    ← Previous
                  </button>
                  <button 
                    onClick={() => setCurrentStep(4)}
                    className="px-8 py-3 text-white rounded-xl font-semibold hover:shadow-lg transform hover:scale-105 transition-all duration-300"
                    style={{backgroundColor: '#00473E'}}
                  >
                    Review Booking →
                  </button>
                </div>
              </div>
            )}

            {currentStep === 4 && (
              <div className="max-w-2xl mx-auto">
                <div className="text-center mb-8">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-orange-500 to-red-600 rounded-full mb-4">
                    <span className="text-2xl">📋</span>
                  </div>
                  <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-2">Review Booking</h2>
                  <p className="text-gray-600">Confirm your rental details</p>
                </div>
                
                <div className="bg-white border-2 border-gray-200 rounded-2xl p-6 mb-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-6 flex items-center">
                    <span className="mr-2">📝</span>
                    Booking Summary
                  </h3>
                  
                  <div className="space-y-4">
                    <div className="flex justify-between items-center py-2 border-b border-gray-100">
                      <span className="text-gray-600">Vehicle</span>
                      <span className="font-semibold text-gray-900">Royal Enfield Classic 350</span>
                    </div>
                    <div className="flex justify-between items-center py-2 border-b border-gray-100">
                      <span className="text-gray-600">Duration</span>
                      <span className="font-semibold text-gray-900">5 days (15-20 Dec 2024)</span>
                    </div>
                    <div className="flex justify-between items-center py-2 border-b border-gray-100">
                      <span className="text-gray-600">Pickup</span>
                      <span className="font-semibold text-gray-900">{pickupLocation}</span>
                    </div>
                    <div className="flex justify-between items-center py-2 border-b border-gray-100">
                      <span className="text-gray-600">Drop-off</span>
                      <span className="font-semibold text-gray-900">{dropoffLocation}</span>
                    </div>
                    <div className="flex justify-between items-center py-2 border-b border-gray-100">
                      <span className="text-gray-600">Base Price (5 days)</span>
                      <span className="font-semibold text-gray-900">₹22,500</span>
                    </div>
                    {extraHelmet.value && (
                      <div className="flex justify-between items-center py-2 border-b border-gray-100">
                        <span className="text-gray-600">Extra Helmet</span>
                        <span className="font-semibold text-blue-600">+₹50</span>
                      </div>
                    )}
                    {premiumInsurance.value && (
                      <div className="flex justify-between items-center py-2 border-b border-gray-100">
                        <span className="text-gray-600">Premium Insurance</span>
                        <span className="font-semibold text-purple-600">+₹100</span>
                      </div>
                    )}
                    
                    <div className="flex justify-between items-center py-4 bg-gradient-to-r from-orange-50 to-red-50 rounded-xl px-4 mt-4">
                      <span className="font-bold text-lg text-gray-900">Total Amount</span>
                      <span className="font-bold text-2xl text-orange-600">
                        ₹{22500 + (extraHelmet.value ? 50 : 0) + (premiumInsurance.value ? 100 : 0)}
                      </span>
                    </div>
                  </div>
                </div>
                
                <div className="bg-red-50 border border-red-200 rounded-xl p-4 mb-6">
                  <div className="flex items-center text-red-700">
                    <span className="mr-2">⚡</span>
                    <span className="font-medium text-sm">Limited Availability: Only 2 bikes left for this weekend!</span>
                  </div>
                </div>
                
                <div className="flex flex-col sm:flex-row gap-4 justify-between">
                  <button 
                    onClick={() => setCurrentStep(3)}
                    className="px-6 py-3 border-2 border-gray-300 text-gray-600 rounded-xl font-semibold hover:bg-gray-50 transition-all duration-300"
                  >
                    ← Previous
                  </button>
                  <button 
                    onClick={() => setCurrentStep(5)}
                    className="px-8 py-3 text-white rounded-xl font-semibold hover:shadow-lg transform hover:scale-105 transition-all duration-300"
                    style={{backgroundColor: '#00473E'}}
                  >
                    Proceed to Payment →
                  </button>
                </div>
              </div>
            )}

            {currentStep === 5 && (
              <div className="max-w-2xl mx-auto">
                <div className="text-center mb-8">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-green-500 to-emerald-600 rounded-full mb-4">
                    <span className="text-2xl">💳</span>
                  </div>
                  <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-2">Secure Payment</h2>
                  <p className="text-gray-600">Complete your booking safely</p>
                </div>
                
                <div className="bg-white border-2 border-gray-200 rounded-2xl p-6 mb-6">
                  <h3 className="text-lg font-bold text-gray-900 mb-4">Choose Payment Method</h3>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6">
                    {[
                      { name: 'Credit Card', icon: '💳', color: 'blue' },
                      { name: 'UPI Payment', icon: '📱', color: 'green' },
                      { name: 'Net Banking', icon: '🏦', color: 'purple' }
                    ].map((method, i) => (
                      <div key={i} className={`border-2 border-${method.color}-200 bg-${method.color}-50 rounded-xl p-4 text-center cursor-pointer hover:shadow-md transition-all duration-300`}>
                        <div className="text-2xl mb-2">{method.icon}</div>
                        <span className="font-semibold text-gray-900 text-sm">{method.name}</span>
                      </div>
                    ))}
                  </div>
                  
                  <div className="bg-green-50 border border-green-200 rounded-xl p-4 mb-6">
                    <div className="flex items-center justify-center text-green-700">
                      <span className="mr-2">🔒</span>
                      <span className="font-medium text-sm">SSL Secured • 256-bit Encryption • Safe Checkout</span>
                    </div>
                  </div>
                  
                  <button className="w-full text-white py-4 rounded-xl font-bold text-lg hover:shadow-lg transform hover:scale-105 transition-all duration-300" style={{backgroundColor: '#00473E'}}>
                    🔒 Confirm & Pay ₹{22500 + (extraHelmet.value ? 50 : 0) + (premiumInsurance.value ? 100 : 0)}
                  </button>
                </div>
                
                <div className="flex flex-col sm:flex-row gap-4 justify-between">
                  <button 
                    onClick={() => setCurrentStep(4)}
                    className="px-6 py-3 border-2 border-gray-300 text-gray-600 rounded-xl font-semibold hover:bg-gray-50 transition-all duration-300"
                  >
                    ← Previous
                  </button>
                  <div className="text-center text-gray-500 text-sm">
                    <p>By proceeding, you agree to our Terms & Conditions</p>
                  </div>
                </div>
              </div>
            )}
          </div>
        </section>

        <ContactSection />
        
        {/* Customer Reviews Section */}
        <section className="max-w-6xl mx-auto p-4 sm:p-6 mt-8">
          <h2 className="text-2xl font-bold text-black mb-6 text-center">Customer Reviews</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Review 1 */}
            <div className="bg-gray-300 border border-gray-200 rounded-lg p-6">
              <div className="flex items-center mb-3">
                <div className="w-10 h-10 bg-blue-500 rounded-full flex items-center justify-center text-white font-bold mr-3">
                  R
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">Rahul Sharma</h4>
                  <p className="text-gray-500 text-sm">Delhi</p>
                </div>
              </div>
              <div className="flex mb-3">
                {[...Array(5)].map((_, i) => (
                  <button 
                    key={i} 
                    onClick={() => setReview1Rating(i + 1)}
                    className={`text-lg transition-colors ${
                      i < review1Rating ? 'text-yellow-400 hover:text-yellow-500' : 'text-white bg-gray-300 hover:text-yellow-400'
                    }`}
                  >
                    ★
                  </button>
                ))}
              </div>
              <p className="text-gray-700">"Excellent service! The bike was in perfect condition and the staff was very helpful. Highly recommend for anyone visiting Meghalaya."</p>
            </div>
            
            {/* Review 2 */}
            <div className="bg-gray-300 border border-gray-200 rounded-lg p-6">
              <div className="flex items-center mb-3">
                <div className="w-10 h-10 bg-green-500 rounded-full flex items-center justify-center text-white font-bold mr-3">
                  P
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">Priya Patel</h4>
                  <p className="text-gray-500 text-sm">Mumbai</p>
                </div>
              </div>
              <div className="flex mb-3">
                {[...Array(5)].map((_, i) => (
                  <button 
                    key={i} 
                    onClick={() => setReview2Rating(i + 1)}
                    className={`text-lg transition-colors ${
                      i < review2Rating ? 'text-yellow-400 hover:text-yellow-500' : 'text-white bg-gray-300 hover:text-yellow-400'
                    }`}
                  >
                    ★
                  </button>
                ))}
              </div>
              <p className="text-gray-700">"Great experience overall. The Royal Enfield was smooth and reliable throughout my trip. Will definitely book again!"</p>
            </div>
            
            {/* Review 3 */}
            <div className="bg-gray-300 border border-gray-200 rounded-lg p-6">
              <div className="flex items-center mb-3">
                <div className="w-10 h-10 bg-purple-500 rounded-full flex items-center justify-center text-white font-bold mr-3">
                  A
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">Arjun Singh</h4>
                  <p className="text-gray-500 text-sm">Bangalore</p>
                </div>
              </div>
              <div className="flex mb-3">
                {[...Array(5)].map((_, i) => (
                  <button 
                    key={i} 
                    onClick={() => setReview3Rating(i + 1)}
                    className={`text-lg transition-colors ${
                      i < review3Rating ? 'text-yellow-400 hover:text-yellow-500' : 'text-white bg-gray-300 hover:text-yellow-400'
                    }`}
                  >
                    ★
                  </button>
                ))}
              </div>
              <p className="text-gray-700">"Amazing bike rental service! Clean bikes, fair pricing, and excellent customer support. Made my Shillong trip memorable."</p>
            </div>
          </div>
        </section>
        
        <FAQSection faqs={bikeDetailsFAQs} />

      </main>

      <Footer />
    </div>
  )
}