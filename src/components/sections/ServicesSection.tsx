import ServiceCard from '../ui/ServiceCard'
import { serviceCards } from '../../data/services'
import { useNavigate } from 'react-router-dom'

export default function ServicesSection() {
  const navigate = useNavigate()

  const getServiceNavigation = (service: any) => {
    const pathMap: { [key: string]: string } = {
      'Rent a Bike': '/bikes',
      'Rent a Cab': '/cabs', 
      'Rent a Tempo Traveller': '/tempo',
      'Rent Self Driven Car': '/cars'
    }
    return pathMap[service.title] || '/vehiclelist'
  }

  return (
    <section className="py-16 bg-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center mb-4">Start Your Journey</h2>
        <p className="text-gray-600 text-center mb-12">Select how you want to travel today</p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {serviceCards.map((service, i) => (
            <ServiceCard 
              key={i} 
              service={service} 
              onClick={() => navigate(getServiceNavigation(service), { state: { from: 'home' } })} 
            />
          ))}
        </div>
      </div>
    </section>
  )
}