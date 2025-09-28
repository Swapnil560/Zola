interface StepIndicatorProps {
  currentStep: number
  onStepClick?: (step: number) => void
}

export default function StepIndicator({ currentStep, onStepClick }: StepIndicatorProps) {
  const steps = [
    { num: 1, label: 'Dates', icon: '📅' },
    { num: 2, label: 'Locations', icon: '📍' },
    { num: 3, label: 'Add-ons', icon: '🛡️' },
    { num: 4, label: 'Review', icon: '📋' },
    { num: 5, label: 'Payment', icon: '💳' }
  ]

  return (
    <div className="flex justify-center items-center gap-2 sm:gap-4 lg:gap-8 mb-8 px-2">
      {steps.map((step) => (
        <div key={step.num} className={`flex flex-col items-center text-center flex-1 max-w-[70px] sm:max-w-none ${onStepClick ? 'cursor-pointer' : ''}`} onClick={() => onStepClick?.(step.num)}>
          <div className={`w-6 h-6 sm:w-10 sm:h-10 lg:w-12 lg:h-12 rounded-full flex items-center justify-center font-bold mb-1 sm:mb-2 transition-all duration-300 text-xs sm:text-base ${onStepClick ? 'hover:scale-105 hover:shadow-md' : ''} ${currentStep === step.num ? 'text-white shadow-lg transform scale-110' : currentStep > step.num ? 'text-white' : 'bg-gray-200 text-gray-600'}`} style={currentStep >= step.num ? {backgroundColor: '#00473E'} : {}}>
            {currentStep > step.num ? '✓' : step.icon}
          </div>
          <div className="flex flex-col">
            <span className={`text-xs font-medium ${currentStep === step.num ? 'text-blue-600' : 'text-gray-600'}`}>Step {step.num}</span>
            <span className={`text-xs sm:text-base ${currentStep === step.num ? 'font-bold text-gray-900' : 'text-gray-600'}`}>{step.label}</span>
          </div>
        </div>
      ))}
    </div>
  )
}