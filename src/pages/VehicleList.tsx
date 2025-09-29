import Header from '../components/ui/Header'
import Footer from '../components/ui/Footer'
import BackButton from '../components/ui/BackButton'
import VehicleCard from '../components/ui/VehicleCard'
import { popularBikes } from '../data/vehicles'
import { useToggle } from '../hooks/useToggle'
import { useLikes } from '../hooks/useLikes'
import { useNavigate, useLocation } from 'react-router-dom'
import { useEffect } from 'react'

export default function VehicleList() {
  const mobileMenu = useToggle()
  const bikeLikes = useLikes()
  const navigate = useNavigate()
  const location = useLocation()
  
  // Check where we came from to set correct back path
  const backPath = location.state?.from === 'services' ? '/services' : '/'
  
  useEffect(() => {
    window.scrollTo({ top: 0 })
  }, [])

  const handleViewDetails = (id: number) => {
    navigate(`/bike-details/${id}`, { state: { from: 'vehiclelist' } })
  }

  return (
    <div className="min-h-screen bg-white">
      <Header isMobileMenuOpen={mobileMenu.value} setIsMobileMenuOpen={mobileMenu.toggle} />
      
      <BackButton to={backPath} />

      <main style={{paddingTop: '16px'}}>
        <section className="py-16 bg-gray-100">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-center mb-4">Vehicle List</h2>
            <p className="text-gray-600 text-center mb-12">Select how you want to travel today</p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {popularBikes.map((bike) => (
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