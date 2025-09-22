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
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div>
              <img src="/images/classic 350.png" alt="Royal Enfield Classic 350" className="w-full h-96 object-cover rounded-lg" />
            </div>
            
            <div className="flex flex-col justify-between lg:h-96">
              <div>
                <h1 className="text-3xl font-bold text-black mb-2">Royal Enfield Classic 350</h1>
                <p className="text-gray-600 mb-4">Stylish, reliable city ride with vintage charm</p>
                
                <div className="flex items-center mb-4">
                  <div className="flex text-yellow-400 mr-2">
                    {[...Array(4)].map((_, i) => (
                      <span key={i}>★</span>
                    ))}
                    <span className="text-gray-300">★</span>
                  </div>
                  <span className="text-gray-600">(124 reviews)</span>
                </div>

                <div className="text-3xl font-bold mb-6" style={{color: '#2D2D2D'}}>₹4,500 / per day</div>

                <div className="flex-1 mb-6">
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 lg:h-full">
                    <div className="flex items-center justify-center px-3 py-3 lg:px-4 lg:py-4 rounded-lg text-xs sm:text-sm bg-gray-100 text-gray-700 lg:h-full">
                      <span className="mr-2 text-base lg:text-lg">🛡️</span>
                      <span>Free helmet included</span>
                    </div>
                    <div className="flex items-center justify-center px-3 py-3 lg:px-4 lg:py-4 rounded-lg text-xs sm:text-sm bg-gray-100 text-gray-700 lg:h-full">
                      <span className="mr-2 text-base lg:text-lg">🛡️</span>
                      <span>Fully insured</span>
                    </div>
                    <div className="flex items-center justify-center px-3 py-3 lg:px-4 lg:py-4 rounded-lg text-xs sm:text-sm bg-gray-100 text-gray-700 lg:h-full">
                      <span className="mr-2 text-base lg:text-lg">✈️</span>
                      <span>Airport pickup</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex gap-4">
                <button className="flex-1 text-white py-3 rounded-lg hover:scale-105 transition-all duration-200 font-medium" style={{backgroundColor: '#00473E'}}>
                  Book Now
                </button>
                <button className="flex-1 border border-gray-300 py-3 rounded-lg hover:bg-gray-50 transition-colors font-medium">
                  View Details
                </button>
              </div>
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
        <FAQSection faqs={bikeDetailsFAQs} />

      </main>

      <Footer />
    </div>
  )
}