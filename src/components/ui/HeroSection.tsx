import { useState } from 'react'

interface HeroSectionProps {
  isMobileMenuOpen: boolean
}

export default function HeroSection({ isMobileMenuOpen }: HeroSectionProps) {
  const [activeTab, setActiveTab] = useState('Bike')
  const [pickupDateTime, setPickupDateTime] = useState('')
  const [dropoffDateTime, setDropoffDateTime] = useState('')

  const formatDateTime = (value: string) => {
    const numbers = value.replace(/\D/g, '')
    if (numbers.length <= 2) return numbers
    if (numbers.length <= 4) return `${numbers.slice(0, 2)}/${numbers.slice(2)}`
    if (numbers.length <= 8) return `${numbers.slice(0, 2)}/${numbers.slice(2, 4)}/${numbers.slice(4)}`
    if (numbers.length <= 10) return `${numbers.slice(0, 2)}/${numbers.slice(2, 4)}/${numbers.slice(4, 8)} ${numbers.slice(8, 10)}`
    return `${numbers.slice(0, 2)}/${numbers.slice(2, 4)}/${numbers.slice(4, 8)} ${numbers.slice(8, 10)}:${numbers.slice(10, 12)}`
  }

  return (
    <section className="relative h-[750px] bg-cover bg-center pt-16 mx-4 sm:mx-6 lg:mx-8 rounded-lg overflow-hidden" style={{backgroundImage: 'url("/images/Hero.png")'}}>
      <div className="absolute inset-0 flex items-start justify-start" style={{paddingTop: isMobileMenuOpen ? '180px' : '80px'}}>
        <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-lg">
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl mb-4">
              <span className="font-bold text-black">Ride Guwahati</span> <span className="text-black">Your</span> <span className="font-bold text-black">Way</span>
            </h1>
            <p className="text-xl text-gray-700 mb-8">Bikes, scooties, and cars for every journey. Book in 2 minutes, ride today.</p>
            
            <div className="bg-gray-100 p-4 sm:p-6 rounded-lg shadow-lg w-full max-w-2xl">
              <div className="flex flex-col h-full">
                <div className="mb-4 sm:mb-6">
                  <h3 className="text-sm font-medium text-gray-700 mb-3 flex items-center"><img src="/images/cr.png" alt="Vehicle" className="w-6 h-6 mr-2 mt-0.5 object-contain flex-shrink-0" />Vehicle Type</h3>
                  <div className="grid grid-cols-3 gap-1">
                    {['Bike', 'Scooty', 'Car'].map((tab) => (
                      <button
                        key={tab}
                        onClick={() => setActiveTab(tab)}
                        className={`rounded-lg font-medium flex items-center justify-center py-2 px-4 text-sm border border-gray-400  ${
                          activeTab === tab ? 'text-white' : 'bg-gray-100 text-gray-700'
                        }`}
                        style={{
                          backgroundColor: activeTab === tab ? '#00473E' : undefined
                        }}
                      >
                        {tab}
                      </button>
                    ))}
                  </div>
                </div>
                <div className="flex-1 flex flex-col justify-between">
                <div className="grid grid-cols-1 gap-4">
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                    <div>
                      <label className="text-xs sm:text-sm font-medium text-gray-700 mb-1 block flex items-center"><img src="/images/loc.png" alt="Location" className="w-4 h-4 mr-1 object-contain" /> Pickup</label>
                      <input list="pickup-locations" placeholder="Select Pickup Location" className="border border-gray-400 rounded-lg px-2 sm:px-3 py-2 w-full text-gray-700 text-sm" />
                      <datalist id="pickup-locations">
                        <option value="Guwahati Airport" />
                        <option value="Guwahati Railway Station" />
                        <option value="Paltan Bazaar" />
                        <option value="Fancy Bazaar" />
                        <option value="Zoo Road" />
                      </datalist>
                    </div>
                    <div>
                      <label className="text-xs sm:text-sm font-medium text-gray-700 mb-1 block flex items-center"><img src="/images/loc.png" alt="Location" className="w-4 h-4 mr-1 object-contain" /> Drop-off</label>
                      <input list="dropoff-locations" placeholder="Select Drop-off Location" className="border border-gray-400 rounded-lg px-2 sm:px-3 py-2 w-full text-gray-700 text-sm" />
                      <datalist id="dropoff-locations">
                        <option value="Guwahati Airport" />
                        <option value="Guwahati Railway Station" />
                        <option value="Paltan Bazaar" />
                        <option value="Fancy Bazaar" />
                        <option value="Zoo Road" />
                      </datalist>
                    </div>
                  </div>
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                    <div>
                      <label className="text-xs sm:text-sm font-medium text-gray-700 mb-1 block flex items-center"><img src="/images/blackc.png" alt="Clock" className="w-4 h-4 mr-1 object-contain" /> Pickup Date and Time</label>
                      <input 
                        type="text" 
                        value={pickupDateTime}
                        onChange={(e) => setPickupDateTime(formatDateTime(e.target.value))}
                        placeholder="dd/mm/yyyy --:--"
                        maxLength={16}
                        className="border border-gray-400 rounded-lg px-2 sm:px-3 py-2 w-full text-gray-700 text-sm" 
                      />
                    </div>
                    <div>
                      <label className="text-xs sm:text-sm font-medium text-gray-700 mb-1 block flex items-center"><img src="/images/blackc.png" alt="Clock" className="w-4 h-4 mr-1 object-contain" /> Drop-off Date and Time</label>
                      <input 
                        type="text" 
                        value={dropoffDateTime}
                        onChange={(e) => setDropoffDateTime(formatDateTime(e.target.value))}
                        placeholder="dd/mm/yyyy --:--"
                        maxLength={16}
                        className="border border-gray-400 rounded-lg px-2 sm:px-3 py-2 w-full text-gray-700 text-sm" 
                      />
                    </div>
                  </div>
                </div>
                <button 
                  className="w-full font-medium hover:scale-105 transition-all duration-200 py-3 rounded mt-4" 
                  style={{
                    backgroundColor: '#89DAD0',
                    color: '#00473E',
                    border: 'none'
                  }}
                  onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#6BB6B0'}
                  onMouseLeave={(e) => e.currentTarget.style.backgroundColor = '#89DAD0'}
                >
                  Search Rental →
                </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}