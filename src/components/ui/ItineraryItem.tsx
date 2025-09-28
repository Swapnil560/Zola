interface ItineraryItemProps {
  day: number
  title: string
  location: string
  distance: string
  highlights: string[]
  isOpen: boolean
  onToggle: () => void
  image?: string
  onImageClick?: (image: string) => void
}

export default function ItineraryItem({ day, title, location, distance, highlights, isOpen, onToggle, image, onImageClick }: ItineraryItemProps) {
  return (
    <div className="bg-gray-100 p-3 sm:p-4 rounded-lg shadow mb-4">
      <button onClick={onToggle} className="w-full text-left flex justify-between items-center">
        <div className="flex items-center gap-3 sm:gap-4">
          <div className="w-8 h-8 sm:w-10 sm:h-10 text-white rounded-full flex items-center justify-center font-bold text-sm sm:text-base flex-shrink-0" style={{backgroundColor: '#1e3a8a'}}>
            {day}
          </div>
          <div className="flex-1 min-w-0">
            <div className="text-gray-900 font-semibold mb-1 sm:mb-2 text-base sm:text-lg leading-tight">Day {day}: {title}</div>
            <div className="text-teal-600 text-sm sm:text-base flex items-center flex-wrap">
              <img src="/images/loc.png" alt="Location" className="w-4 h-4 mr-1 flex-shrink-0" />
              <span className="break-words">{location} ◄ {distance}</span>
            </div>
          </div>
        </div>
        <span className="text-xl sm:text-2xl font-bold text-gray-600 flex-shrink-0 ml-2">
          {isOpen ? 'v' : '>'}
        </span>
      </button>
      {isOpen && (
        <div className="flex flex-col lg:flex-row gap-4 lg:gap-6 mt-4 pt-4 border-t border-gray-300">
          <div className="w-full lg:w-2/5 h-48 sm:h-56 lg:h-48 bg-gray-200 rounded-lg overflow-hidden">
            {image && <img src={image} alt={title} className="w-full h-full object-cover cursor-pointer hover:brightness-110 hover:scale-105 transition-all duration-300" onClick={() => onImageClick?.(image)} />}
          </div>
          <div className="w-full lg:w-3/5">
            {highlights.length > 0 && (
              <ul className="text-gray-700 space-y-2 text-sm sm:text-base">
                {highlights.map((highlight, i) => (
                  <li key={i} className="flex items-start">
                    <span className="text-teal-600 mr-2 flex-shrink-0">•</span>
                    <span className="leading-relaxed">{highlight}</span>
                  </li>
                ))}
              </ul>
            )}
          </div>
        </div>
      )}
    </div>
  )
}