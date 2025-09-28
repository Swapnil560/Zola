import { useNavigate } from 'react-router-dom'
import { Tour } from '../../types'
import OptimizedImage from './OptimizedImage'
import StarRating from './StarRating'

interface TourCardProps {
  tour: Tour
  isLiked: boolean
  onToggleLike: () => void
}

export default function TourCard({ tour, isLiked, onToggleLike }: TourCardProps) {
  const navigate = useNavigate()

  return (
    <div className="bg-gray-100 rounded-lg overflow-hidden shadow-md hover:scale-105 hover:shadow-lg transition-all duration-300 cursor-pointer group h-full flex flex-col">
      <div className="relative h-48 overflow-hidden">
        <OptimizedImage src={tour.image} alt={tour.title} className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110" loading="lazy" />
        <div className="absolute top-2 left-2 bg-[#00473E] text-white px-2 py-1 rounded-full text-xs flex items-center">
          <span className="mr-1 text-white">★</span>
          <span>Most Popular</span>
        </div>
        <button 
          onClick={(e) => {
            e.stopPropagation()
            onToggleLike()
          }}
          className="absolute top-2 right-2 w-6 h-6 sm:w-8 sm:h-8 rounded-full bg-white bg-opacity-20 backdrop-blur-sm flex items-center justify-center transition-all duration-300 hover:scale-110 hover:bg-opacity-30 z-10 active:scale-95"
        >
          <svg 
            className="w-4 h-4 sm:w-5 sm:h-5 transition-all duration-300" 
            fill={isLiked ? '#ef4444' : 'none'} 
            stroke={isLiked ? '#ef4444' : '#ffffff'} 
            strokeWidth="2" 
            viewBox="0 0 24 24"
          >
            <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
          </svg>
        </button>
      </div>
      <div className="p-4 sm:p-6 flex flex-col flex-grow">
        <span className="text-sm text-white px-3 py-2 rounded-full mb-3 inline-block bg-black/80 font-light w-fit">
          {tour.duration}
        </span>
        <div className="flex items-center mb-3">
          <div className="mr-2">
            <StarRating initialRating={tour.rating} size="sm" />
          </div>
          <span className="text-gray-600 text-sm">{tour.reviews} reviews</span>
        </div>
        <h3 className="text-xl font-bold mb-4">
          {tour.title}
        </h3>
        <p className="text-gray-600 mb-4 flex-grow">{tour.description}</p>
        <div className="space-y-2 mb-6 min-h-[80px]">
          {tour.highlights.map((highlight, j) => (
            <span key={j} className="inline-block px-3 py-1 rounded-full text-sm mr-2 mb-2" style={{backgroundColor: '#89DAD0', color: '#00473E'}}>
              {highlight}
            </span>
          ))}
        </div>
        <button 
          onClick={() => {
            if (tour.id === 1 || tour.id === 2 || tour.id === 3) {
              navigate(`/tours/${tour.id}`)
              window.scrollTo(0, 0)
            } else if (tour.id >= 4 && tour.id <= 6) {
              navigate('/tours/1')
              window.scrollTo(0, 0)
            } else if (tour.id >= 7 && tour.id <= 9) {
              navigate('/tours/2')
              window.scrollTo(0, 0)
            }
          }}
          className="w-full py-3 rounded-lg hover:scale-105 transition-all duration-200 font-medium flex items-center justify-center mt-auto"
          style={{backgroundColor: '#00473E', color: '#89DAD0'}} 
          onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#003329'} 
          onMouseLeave={(e) => e.currentTarget.style.backgroundColor = '#00473E'}
        >
          Get Quote
          <img src="/images/pen.png?v=1" alt="Pen" className="w-6 h-6 ml-2" />
        </button>
      </div>
    </div>
  )
}