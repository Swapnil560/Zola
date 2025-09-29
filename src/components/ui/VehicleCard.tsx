import { Vehicle } from '../../types'
import OptimizedImage from './OptimizedImage'
import StarRating from './StarRating'

interface VehicleCardProps {
  vehicle: Vehicle
  isLiked: boolean
  onToggleLike: () => void
  onViewDetails: () => void
  onImageClick?: () => void
}

export default function VehicleCard({ vehicle, isLiked, onToggleLike, onViewDetails, onImageClick }: VehicleCardProps) {
  return (
    <div className="bg-gray-100 rounded-lg overflow-hidden shadow-md hover:scale-105 hover:shadow-lg transition-all duration-300 cursor-pointer">
      <div className="relative h-48" onClick={onImageClick}>
        <OptimizedImage src={vehicle.image} alt={vehicle.title} className="w-full h-full object-cover" loading="lazy" />
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
      <div className="p-6">
        <div className="flex justify-between items-start mb-2">
          <div>
            <h3 className="text-xl font-bold text-black">{vehicle.title}</h3>
            <p className="text-sm text-black font-light">{vehicle.subtitle}</p>
          </div>
          <div className="text-right">
            <StarRating initialRating={vehicle.rating} size="sm" />
            <span className="text-gray-600 text-xs">({vehicle.reviews} reviews)</span>
          </div>
        </div>
        <div className="flex flex-wrap gap-2 mb-4">
          {vehicle.features.map((feature, j) => (
            <span key={j} className="inline-block px-3 py-1 rounded-full text-sm mr-2" style={{backgroundColor: '#89DAD0', color: '#00473E'}}>
              {feature}
            </span>
          ))}
        </div>
        <div className="text-2xl font-bold mb-4" style={{color: '#2D2D2D'}}>
          ₹{vehicle.price.toLocaleString()}/ per day
        </div>
        <button 
          onClick={onViewDetails} 
          className="w-full text-white py-2 rounded-lg hover:scale-105 transition-all duration-200" 
          style={{backgroundColor: '#00473E'}} 
          onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#003329'} 
          onMouseLeave={(e) => e.currentTarget.style.backgroundColor = '#00473E'}
        >
          Search Rental
        </button>
      </div>
    </div>
  )
}