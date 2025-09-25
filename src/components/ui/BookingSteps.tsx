interface BookingStepsProps {
  currentStep: number
}

export default function BookingSteps({ currentStep }: BookingStepsProps) {
  const steps = [
    { num: 1, label: 'Dates', icon: '📅' },
    { num: 2, label: 'Locations', icon: '📍' },
    { num: 3, label: 'Add-ons', icon: '🛡️' },
    { num: 4, label: 'Review', icon: '📋' },
    { num: 5, label: 'Payment', icon: '💳' }
  ]

  return (
    <section className="max-w-6xl mx-auto p-4 sm:p-6 mt-12 lg:mt-8 bg-gray-50">
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:flex lg:flex-wrap lg:justify-center lg:items-center gap-3 sm:gap-4 lg:gap-8 mb-8 px-2">
        {steps.map((step) => (
          <div key={step.num} className="flex flex-col items-center text-center">
            <div className={`w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 rounded-full flex items-center justify-center font-bold mb-2 transition-all duration-300 ${currentStep === step.num ? 'text-white shadow-lg transform scale-110' : currentStep > step.num ? 'text-white' : 'bg-gray-200 text-gray-600'}`} style={currentStep >= step.num ? {backgroundColor: '#00473E'} : {}}>
              {currentStep > step.num ? '✓' : step.icon}
            </div>
            <div className="flex flex-col">
              <span className={`text-xs sm:text-sm font-medium ${currentStep === step.num ? 'text-blue-600' : 'text-gray-600'}`}>Step {step.num}</span>
              <span className={`text-sm sm:text-base ${currentStep === step.num ? 'font-bold text-gray-900' : 'text-gray-600'}`}>{step.label}</span>
            </div>
          </div>
        ))}
      </div>

      <div className="bg-gray-100 rounded-2xl shadow-xl p-4 sm:p-8 border border-gray-200">
        {/* Step content would go here - keeping existing step components */}
      </div>
    </section>
  )
}