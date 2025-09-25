interface ItineraryItemProps {
  day: number
  title: string
  location: string
  distance: string
  highlights: string[]
  isOpen: boolean
  onToggle: () => void
}

export default function ItineraryItem({ day, title, location, distance, highlights, isOpen, onToggle }: ItineraryItemProps) {
  return (
    <div className="bg-gray-100 p-4 rounded-lg shadow mb-4">
      <button onClick={onToggle} className="w-full text-left flex justify-between items-center">
        <div className="flex items-center gap-2 sm:gap-4">
          <div className="w-6 h-6 sm:w-8 sm:h-8 text-white rounded-full flex items-center justify-center font-bold text-xs sm:text-sm flex-shrink-0" style={{backgroundColor: '#1e3a8a'}}>
            {day}
          </div>
          <div className="flex-1">
            <div className="text-gray-900 font-semibold mb-1 sm:mb-2 text-sm sm:text-base">Day {day}: {title}</div>
            <div className="text-teal-600 text-xs sm:text-sm flex items-center">
              <img src="/images/loc.png" alt="Location" className="w-3 h-3 mr-1" />
              {location} ◄ {distance}
            </div>
          </div>
        </div>
        <span className="text-lg sm:text-2xl font-bold text-gray-600 flex-shrink-0">
          {isOpen ? 'v' : '>'}
        </span>
      </button>
      {isOpen && (
        <div className="flex flex-col sm:flex-row gap-4 sm:gap-8 mt-4">
          <div className="w-full sm:w-2/5 h-32 sm:h-48 bg-gray-200 rounded"></div>
          <div className="w-full sm:w-3/5">
            {highlights.length > 0 && (
              <ul className="text-gray-700">
                {highlights.map((highlight, i) => (
                  <li key={i}>• {highlight}</li>
                ))}
              </ul>
            )}
          </div>
        </div>
      )}
    </div>
  )
}