import { Tour } from '../../types'

interface TourCardProps {
  tour: Tour
  isLiked: boolean
  onToggleLike: () => void
}

export default function TourCard({ tour, isLiked, onToggleLike }: TourCardProps) {
  return (
    <div className="bg-gray-100 rounded-lg overflow-hidden shadow-md hover:scale-105 hover:shadow-lg transition-all duration-300 cursor-pointer group">
      <div className="relative h-48 overflow-hidden">
        <img src={tour.image} alt={tour.title} className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110" />
        <div className="absolute top-2 left-2 bg-[#00473E] text-white px-2 py-1 rounded-full text-xs flex items-center">
          <span className="mr-1 text-white">★</span>
          <span>Most Popular</span>
        </div>
        <button 
          onClick={onToggleLike}
          className="absolute top-2 right-2 text-2xl transition-colors"
          style={{
            color: isLiked ? '#ef4444' : '#ffffff', 
            textShadow: isLiked ? 'none' : '0 0 1px #000'
          }}
        >
          ♥
        </button>
      </div>
      <div className="p-4 sm:p-6">
        <p className="text-xs sm:text-sm text-white px-2 sm:px-3 py-1 rounded-lg mb-3 inline-block" style={{backgroundColor: 'rgba(0, 0, 0, 0.85)'}}>
          {tour.duration}
        </p>
        <div className="flex items-center mb-3">
          <div className="flex mr-2" style={{color: '#FF9937'}}>
            {[...Array(tour.rating)].map((_, i) => (
              <span key={i}>★</span>
            ))}
            <span>☆</span>
          </div>
          <span className="text-gray-600 text-sm">{tour.reviews} reviews</span>
        </div>
        <h3 className="text-xl font-bold mb-4">
          {tour.title}
        </h3>
        <p className="text-gray-600 mb-4">{tour.description}</p>
        <div className="space-y-2 mb-6">
          {tour.highlights.map((highlight, j) => (
            <span key={j} className="inline-block px-3 py-1 rounded-full text-sm mr-2" style={{backgroundColor: '#89DAD0', color: '#00473E'}}>
              {highlight}
            </span>
          ))}
        </div>
        <button className="w-full py-3 rounded-lg hover:scale-105 transition-all duration-200 font-medium flex items-center justify-center" style={{backgroundColor: '#00473E', color: '#89DAD0'}} onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#003329'} onMouseLeave={(e) => e.currentTarget.style.backgroundColor = '#00473E'}>
          Get Quote
          <img src="/images/pen.png?v=1" alt="Pen" className="w-6 h-6 ml-2" />
        </button>
      </div>
    </div>
  )
}