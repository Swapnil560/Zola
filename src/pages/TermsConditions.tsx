import { useState } from 'react'
import Header from '../components/ui/Header'
import Footer from '../components/ui/Footer'
import BackButton from '../components/ui/BackButton'
import { useToggle } from '../hooks/useToggle'

export default function TermsConditions() {
  const mobileMenu = useToggle()
  const [expandedSections, setExpandedSections] = useState<number[]>([])

  const termsData = [
    {
      title: "Booking Policy",
      text: "Guest need to inform the company 24 hours in advance for any booking cancellation. Cancellation charges may apply based on the timing of cancellation."
    },
    {
      title: "Payment Terms",
      text: "Full payment must be made at the time of booking confirmation. We accept all major credit cards, debit cards, and digital payment methods."
    },
    {
      title: "Accident Policy",
      text: "In case of Accident, guest is liable to pay the full insurance claim amount. All accidents must be reported to local authorities and our support team immediately."
    },
    {
      title: "Vehicle Usage Policy",
      text: "Vehicles must be returned in the same condition as provided. Any damage, missing items, or excessive cleaning requirements will be charged separately."
    },
    {
      title: "Driver Requirements",
      text: "Valid driving license is mandatory for all drivers. International visitors must provide valid international driving permit along with passport."
    },
    {
      title: "Liability Terms",
      text: "Zola Adventures is not responsible for personal belongings lost or damaged during the trip. Guests are advised to secure their valuables appropriately."
    },
    {
      title: "Route Guidelines",
      text: "Guests must follow designated routes and timing schedules. Deviation from planned routes must be pre-approved by our operations team."
    },
    {
      title: "Emergency Procedures",
      text: "In case of emergency, contact our 24/7 helpline immediately. Emergency contact numbers are provided in the vehicle documentation."
    }
  ]

  return (
    <div className="min-h-screen bg-white">
      <Header isMobileMenuOpen={mobileMenu.value} setIsMobileMenuOpen={mobileMenu.toggle} />
      
      <BackButton />

      <main style={{paddingTop: '16px'}}>
        {/* Hero Section */}
        <section className="py-12 sm:py-16 lg:py-20 bg-gradient-to-br from-gray-50 to-gray-100">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold text-black mb-3 sm:mb-4">Terms and Conditions</h1>
            <p className="text-gray-600 text-base sm:text-lg mb-6 sm:mb-8">Please read our terms carefully to ensure a smooth rental experience</p>
            <div className="w-20 h-1 mx-auto rounded-full" style={{backgroundColor: '#00473E'}}></div>
          </div>
        </section>

        {/* Terms and Policies Section */}
        <section className="py-12 sm:py-16 lg:py-20 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid gap-4 sm:gap-6 lg:gap-8">
              {termsData.map((section, index) => (
                <div 
                  key={index} 
                  className="bg-white border border-gray-200 rounded-xl shadow-sm hover:shadow-md transition-all duration-300 overflow-hidden"
                >
                  <button
                    onClick={() => setExpandedSections(prev => 
                      prev.includes(index) 
                        ? prev.filter(i => i !== index)
                        : [...prev, index]
                    )}
                    className="w-full p-4 sm:p-6 text-left hover:bg-gray-50 transition-colors duration-200"
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex items-center">
                        <div className="w-3 h-3 sm:w-4 sm:h-4 rounded-full mr-3 sm:mr-4 flex-shrink-0" style={{backgroundColor: '#00473E'}}></div>
                        <h2 className="text-base sm:text-lg lg:text-xl font-bold text-black">{section.title}</h2>
                      </div>
                      <div className="text-xl sm:text-2xl font-bold transition-transform duration-200" style={{color: '#00473E', transform: expandedSections.includes(index) ? 'rotate(45deg)' : 'rotate(0deg)'}}>
                        +
                      </div>
                    </div>
                  </button>
                  
                  <div className={`transition-all duration-300 ease-in-out ${expandedSections.includes(index) ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'} overflow-hidden`}>
                    <div className="px-4 sm:px-6 pb-4 sm:pb-6">
                      <div className="pl-4 sm:pl-8 border-l-2" style={{borderColor: '#00473E'}}>
                        <p className="text-gray-700 text-sm sm:text-base leading-relaxed">{section.text}</p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            
            {/* Contact Section */}
            <div className="mt-8 sm:mt-12 p-4 sm:p-6 bg-gray-50 rounded-xl text-center">
              <h3 className="text-lg sm:text-xl font-bold text-black mb-2">Questions about our policies?</h3>
              <p className="text-sm sm:text-base text-gray-600 mb-4">Our support team is here to help clarify any terms</p>
              <button className="px-4 sm:px-6 py-2 sm:py-3 text-white font-semibold rounded-lg hover:opacity-90 transition-opacity text-sm sm:text-base" style={{backgroundColor: '#00473E'}}>
                Contact Support
              </button>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}