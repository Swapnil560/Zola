import { useEffect } from 'react'
import { useNavigate, useLocation } from 'react-router-dom'
import Header from './Header'
import Footer from './Footer'
import BackButton from './BackButton'
import VehicleCard from './VehicleCard'
import { popularBikes } from '../../data/vehicles'
import { useToggle } from '../../hooks/useToggle'
import { useLikes } from '../../hooks/useLikes'

interface VehicleListPageProps {
  title: string
  subtitle?: string
  vehicleType?: string
}

export default function VehicleListPage({ title, subtitle = "Select how you want to travel today", vehicleType }: VehicleListPageProps) {
  const mobileMenu = useToggle()
  const bikeLikes = useLikes()
  const navigate = useNavigate()
  const location = useLocation()
  
  const backPath = location.state?.from === 'services' ? '/services' : '/'
  
  useEffect(() => {
    window.scrollTo({ top: 0 })
  }, [])

  const handleViewDetails = (id: number) => {
    navigate(`/bike-details/${id}`, { state: { from: vehicleType || 'vehiclelist' } })
  }

  // Filter vehicles based on type
  const getFilteredVehicles = () => {
    if (!vehicleType) return popularBikes
    
    switch (vehicleType) {
      case 'bike':
        return popularBikes.filter(bike => bike.id === 1 || bike.id === 2 || bike.id === 4 || bike.id === 6)
      case 'cab':
        return popularBikes.filter(bike => bike.id === 3 || bike.id === 7 || bike.id === 8)
      case 'tempo':
        return popularBikes.filter(bike => bike.id === 5 || bike.id === 9 || bike.id === 10)
      case 'car':
        return popularBikes.filter(bike => bike.id === 11 || bike.id === 12 || bike.id === 13)
      default:
        return popularBikes
    }
  }

  const filteredVehicles = getFilteredVehicles()

  return (
    <div className="min-h-screen bg-white">
      <Header isMobileMenuOpen={mobileMenu.value} setIsMobileMenuOpen={mobileMenu.toggle} />
      
      <BackButton to={backPath} />

      <main style={{paddingTop: '16px'}}>
        <section className="py-16 bg-gray-100">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-center mb-4">{title}</h2>
            <p className="text-gray-600 text-center mb-12">{subtitle}</p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {filteredVehicles.map((bike) => (
                <VehicleCard 
                  key={bike.id}
                  vehicle={bike}
                  isLiked={bikeLikes.isLiked(bike.id)}
                  onToggleLike={() => bikeLikes.toggleLike(bike.id)}
                  onViewDetails={() => handleViewDetails(bike.id)}
                />
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}