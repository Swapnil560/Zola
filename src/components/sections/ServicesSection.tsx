import ServiceCard from '../ui/ServiceCard'
import { serviceCards } from '../../data/services'
import { useNavigate } from 'react-router-dom'

export default function ServicesSection() {
  const navigate = useNavigate()

  const handleSectionClick = () => {
    navigate('/vehiclelist', { state: { from: 'home' } })
  }

  return (
    <section className="py-16 bg-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="cursor-pointer" onClick={handleSectionClick}>
          <h2 className="text-3xl font-bold text-center mb-4 hover:text-gray-700 transition-colors">Start Your Journey</h2>
          <p className="text-gray-600 text-center mb-12 hover:text-gray-500 transition-colors">Select how you want to travel today</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {serviceCards.map((service, i) => (
            <ServiceCard key={i} service={service} onClick={handleSectionClick} />
          ))}
        </div>
      </div>
    </section>
  )
}