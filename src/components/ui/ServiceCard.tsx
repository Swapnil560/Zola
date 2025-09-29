import { ServiceCard as ServiceCardType } from '../../types'

interface ServiceCardProps {
  service: ServiceCardType
  onClick?: () => void
}

export default function ServiceCard({ service, onClick }: ServiceCardProps) {
  return (
    <div className="relative bg-gray-100 border border-gray-200 rounded-lg overflow-hidden h-72 hover:scale-105 hover:shadow-lg transition-all duration-300 cursor-pointer" onClick={onClick}>
      <img src={service.image} alt={service.title} className="w-full h-full object-cover object-center" style={{objectPosition: 'center 40%'}} />
      <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-30 text-white p-6 sm:p-3">
        <h3 className="text-xl sm:text-2xl font-bold mb-3">{service.title}</h3>
        <p className="text-sm sm:text-base text-gray-200 leading-relaxed">{service.subtitle}</p>
      </div>
    </div>
  )
}