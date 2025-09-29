import VehicleCard from '../ui/VehicleCard'
import Button from '../ui/Button'
import { popularBikes } from '../../data/vehicles'
import { useNavigate } from 'react-router-dom'

interface VehiclesSectionProps {
  showAllBikes: boolean
  bikeLikes: any
  onToggleShowAll: () => void
  onViewDetails: (id: number) => void
}

export default function VehiclesSection({ showAllBikes, bikeLikes, onToggleShowAll, onViewDetails }: VehiclesSectionProps) {
  const navigate = useNavigate()

  const handleSectionClick = () => {
    navigate('/vehiclelist')
  }

  return (
    <section className="py-16 bg-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="cursor-pointer" onClick={handleSectionClick}>
          <h2 className="text-3xl font-bold text-center mb-4 hover:text-gray-700 transition-colors">Start Your Journey</h2>
          <p className="text-gray-600 text-center mb-12 hover:text-gray-500 transition-colors">Select how you want to travel today</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {(showAllBikes ? popularBikes : popularBikes.slice(0, 3)).map((bike) => (
            <VehicleCard 
              key={bike.id}
              vehicle={bike}
              isLiked={bikeLikes.isLiked(bike.id)}
              onToggleLike={() => bikeLikes.toggleLike(bike.id)}
              onViewDetails={() => onViewDetails(bike.id)}
              onImageClick={handleSectionClick}
            />
          ))}
        </div>
        <div className="text-center mt-8">
          <Button 
            variant="primary" 
            size="lg" 
            onClick={onToggleShowAll}
            className="px-8 py-4 text-lg font-semibold shadow-lg hover:shadow-xl"
          >
            {showAllBikes ? 'Show Less ←' : 'View All →'}
          </Button>
        </div>
      </div>
    </section>
  )
}