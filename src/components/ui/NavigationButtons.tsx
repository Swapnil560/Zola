interface NavigationButtonsProps {
  onPrevious: () => void
  onNext: () => void
  previousDisabled?: boolean
  nextText?: string
  previousText?: string
}

export default function NavigationButtons({ 
  onPrevious, 
  onNext, 
  previousDisabled = false, 
  nextText = "Continue →",
  previousText = "← Previous"
}: NavigationButtonsProps) {
  return (
    <div className="flex flex-col sm:flex-row gap-4 justify-between">
      <button 
        onClick={onPrevious}
        className="px-6 py-3 text-white rounded-xl font-semibold hover:opacity-80 transition-all duration-300 disabled:opacity-50"
        style={{backgroundColor: '#003329'}}
        disabled={previousDisabled}
      >
        {previousText}
      </button>
      <button 
        onClick={onNext}
        className="px-8 py-3 text-white rounded-xl font-semibold hover:shadow-lg transform hover:scale-105 transition-all duration-300"
        style={{backgroundColor: '#00473E'}}
      >
        {nextText}
      </button>
    </div>
  )
}