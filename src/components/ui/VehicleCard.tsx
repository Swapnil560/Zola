import { Vehicle } from '../../types'

interface VehicleCardProps {
  vehicle: Vehicle
  isLiked: boolean
  onToggleLike: () => void
  onViewDetails: () => void
}

export default function VehicleCard({ vehicle, isLiked, onToggleLike, onViewDetails }: VehicleCardProps) {
  return (
    <div className="bg-gray-100 rounded-lg overflow-hidden shadow-md hover:scale-105 hover:shadow-lg transition-all duration-300 cursor-pointer">
      <div className="relative h-48">
        <img src={vehicle.image} alt={vehicle.title} className="w-full h-full object-cover" />
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
      <div className="p-6">
        <div className="flex justify-between items-start mb-2">
          <div>
            <h3 className="text-xl font-bold text-black">{vehicle.title}</h3>
            <p className="text-sm text-black font-light">{vehicle.subtitle}</p>
          </div>
          <div className="text-right">
            <div className="flex text-yellow-400">
              {[...Array(vehicle.rating)].map((_, j) => (
                <span key={j}>★</span>
              ))}
            </div>
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