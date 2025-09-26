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
    <section className="max-w-6xl mx-auto p-3 sm:p-6 mt-8 lg:mt-8 bg-gray-50">
      <div className="flex flex-wrap justify-center items-center gap-1 sm:gap-3 lg:gap-6 mb-4 sm:mb-6 px-1">
        {steps.map((step) => (
          <div key={step.num} className="flex flex-col items-center text-center min-w-0 flex-shrink-0 w-16 sm:w-20">
            <div className={`w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 rounded-full flex items-center justify-center font-bold mb-1 transition-all duration-300 text-sm sm:text-base ${currentStep === step.num ? 'text-white shadow-lg transform scale-105' : currentStep > step.num ? 'text-white' : 'bg-gray-200 text-gray-600'}`} style={currentStep >= step.num ? {backgroundColor: '#00473E'} : {}}>
              {currentStep > step.num ? '✓' : step.icon}
            </div>
            <div className="flex flex-col">
              <span className={`text-xs font-medium ${currentStep === step.num ? 'text-blue-600' : 'text-gray-600'}`}>Step {step.num}</span>
              <span className={`text-xs ${currentStep === step.num ? 'font-bold text-gray-900' : 'text-gray-600'}`}>{step.label}</span>
            </div>
          </div>
        ))}
      </div>

      <div className="bg-gray-100 rounded-xl sm:rounded-2xl shadow-xl p-3 sm:p-6 lg:p-8 border border-gray-200">
        {/* Step content would go here - keeping existing step components */}
      </div>
    </section>
  )
}