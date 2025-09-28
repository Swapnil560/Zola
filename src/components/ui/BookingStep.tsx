import StepHeader from './StepHeader'
import FormInput from './FormInput'
import InfoCard from './InfoCard'
import NavigationButtons from './NavigationButtons'
import AddOnItem from './AddOnItem'
import Button from './Button'

interface BookingStepProps {
  step: number
  pickupDate: string
  setPickupDate: (date: string) => void
  dropoffDate: string
  setDropoffDate: (date: string) => void
  pickupLocation: string
  setPickupLocation: (location: string) => void
  dropoffLocation: string
  setDropoffLocation: (location: string) => void
  extraHelmet: { value: boolean; toggle: () => void }
  premiumInsurance: { value: boolean; toggle: () => void }
  onPrevious: () => void
  onNext: () => void
  bike: { title: string; subtitle: string }
}

export default function BookingStep(props: BookingStepProps) {
  const { step, pickupDate, setPickupDate, dropoffDate, setDropoffDate, pickupLocation, setPickupLocation, dropoffLocation, setDropoffLocation, extraHelmet, premiumInsurance, onPrevious, onNext, bike } = props

  const locations = ['Guwahati Airport', 'Guwahati Railway Station', 'Hotel Radisson Blu', 'Paltan Bazaar']
  const dropoffLocations = ['Hotel Radisson Blu', 'Guwahati Airport', 'Guwahati Railway Station', 'Paltan Bazaar']
  
  const totalPrice = 22500 + (extraHelmet.value ? 50 : 0) + (premiumInsurance.value ? 100 : 0)
  
  const methodStyles = {
    blue: 'border-blue-200 bg-blue-50',
    green: 'border-green-200 bg-green-50',
    purple: 'border-purple-200 bg-purple-50'
  } as const

  if (step === 1) return (
    <div className="max-w-2xl mx-auto min-h-[500px] flex flex-col">
      <StepHeader icon="📅" title="Select Your Dates" description="Choose your pickup and drop-off dates" gradientFrom="blue" gradientTo="purple" />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
        <FormInput label="Pick-up Date" type="date" value={pickupDate} onChange={setPickupDate} focusColor="blue" />
        <FormInput label="Drop-off Date" type="date" value={dropoffDate} onChange={setDropoffDate} focusColor="blue" />
      </div>
      <InfoCard icon="ℹ️" message="Total Duration: 5 days • Daily Rate: ₹4,500" bgColor="bg-blue-50" textColor="text-blue-800" />
      <div className="mt-auto">
        <NavigationButtons onPrevious={onPrevious} onNext={onNext} previousDisabled={true} nextText="Continue to Locations →" />
      </div>
    </div>
  )

  if (step === 2) return (
    <div className="max-w-2xl mx-auto min-h-[500px] flex flex-col">
      <StepHeader icon="📍" title="Choose Locations" description="Select pickup and drop-off locations" gradientFrom="green" gradientTo="teal" />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
        <FormInput label="Pick-up Location" type="text" value={pickupLocation} onChange={setPickupLocation} options={locations} focusColor="green" placeholder="Select or enter pickup location" />
        <FormInput label="Drop-off Location" type="text" value={dropoffLocation} onChange={setDropoffLocation} options={dropoffLocations} focusColor="green" placeholder="Select or enter drop-off location" />
      </div>
      <InfoCard icon="🚗" message="Free pickup & drop-off within 10km radius" bgColor="bg-green-50" textColor="text-green-800" />
      <div className="mt-auto">
        <NavigationButtons onPrevious={onPrevious} onNext={onNext} nextText="Continue to Add-ons →" />
      </div>
    </div>
  )

  if (step === 3) return (
    <div className="max-w-2xl mx-auto min-h-[500px] flex flex-col">
      <StepHeader icon="🛡️" title="Select Add-ons" description="Enhance your rental experience" gradientFrom="purple" gradientTo="pink" />
      <div className="space-y-4 mb-8">
        <AddOnItem icon="🛡️" title="Safety Helmet" description="Premium quality helmet included" isFree={true} />
        <AddOnItem icon="🛡️" title="Extra Helmet" description="Additional helmet for passenger" price={50} isSelected={extraHelmet.value} onToggle={extraHelmet.toggle} />
        <AddOnItem icon="📜" title="Premium Insurance" description="Comprehensive coverage & protection" price={100} isSelected={premiumInsurance.value} onToggle={premiumInsurance.toggle} />
      </div>
      <div className="bg-purple-50 rounded-xl p-4 mb-6">
        <div className="flex items-center justify-between text-purple-800">
          <span className="font-medium">Total Add-ons:</span>
          <span className="font-bold text-lg">₹{(extraHelmet.value ? 50 : 0) + (premiumInsurance.value ? 100 : 0)}</span>
        </div>
      </div>
      <div className="mt-auto">
        <NavigationButtons onPrevious={onPrevious} onNext={onNext} nextText="Review Booking →" />
      </div>
    </div>
  )

  if (step === 4) return (
    <div className="max-w-2xl mx-auto min-h-[500px] flex flex-col">
      <StepHeader icon="📋" title="Review Booking" description="Confirm your rental details" gradientFrom="orange" gradientTo="red" />
      <div className="bg-white border-2 border-gray-200 rounded-2xl p-6 mb-6">
        <h3 className="text-xl font-bold text-gray-900 mb-6 flex items-center">
          <span className="mr-2">📝</span>Booking Summary
        </h3>
        <div className="space-y-4">
          <div className="flex justify-between items-center py-2 border-b border-gray-100">
            <span className="text-gray-600">Vehicle</span>
            <span className="font-semibold text-gray-900">{bike?.subtitle} {bike?.title}</span>
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
          <div className="flex justify-between items-center py-2 border-b border-gray-100">
            <span className="text-gray-600">Fuel</span>
            <span className="font-semibold text-green-600">Included</span>
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
            <span className="font-bold text-2xl text-orange-600">₹{totalPrice}</span>
          </div>
        </div>
      </div>
      <InfoCard icon="⚡" message="Limited Availability: Only 2 bikes left for this weekend!" bgColor="bg-red-50" textColor="text-red-700" />
      <div className="mt-auto">
        <NavigationButtons onPrevious={onPrevious} onNext={onNext} nextText="Proceed to Payment →" />
      </div>
    </div>
  )

  if (step === 5) return (
    <div className="max-w-2xl mx-auto min-h-[500px] flex flex-col">
      <StepHeader icon="💳" title="Secure Payment" description="Complete your booking safely" gradientFrom="green" gradientTo="emerald" />
      <div className="bg-white border-2 border-gray-200 rounded-2xl p-6 mb-6">
        <h3 className="text-lg font-bold text-gray-900 mb-4">Choose Payment Method</h3>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6">
          {[{name: 'Credit Card', icon: '💳', color: 'blue' as const}, {name: 'UPI Payment', icon: '📱', color: 'green' as const}, {name: 'Net Banking', icon: '🏦', color: 'purple' as const}].map((method, i) => (
            <div key={i} className={`border-2 rounded-xl p-4 text-center cursor-pointer hover:shadow-md transition-all duration-300 ${methodStyles[method.color]}`}>
              <div className="text-2xl mb-2">{method.icon}</div>
              <span className="font-semibold text-gray-900 text-sm">{method.name}</span>
            </div>
          ))}
        </div>
        <InfoCard icon="🔒" message="SSL Secured • 256-bit Encryption • Safe Checkout" bgColor="bg-green-50" textColor="text-green-700" />
        <Button variant="primary" size="lg" className="w-full mb-4">🔒 Confirm & Pay ₹{totalPrice}</Button>
      </div>
      <div className="mt-auto flex flex-col sm:flex-row gap-4 justify-between">
        <Button variant="primary" onClick={onPrevious}>← Previous</Button>
        <div className="text-center text-gray-500 text-sm"><p>By proceeding, you agree to our Terms & Conditions</p></div>
      </div>
    </div>
  )

  return null
}