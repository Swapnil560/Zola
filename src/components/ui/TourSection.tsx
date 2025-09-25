import TourCard from './TourCard'
import { Tour } from '../../types'
import { useLikes } from '../../hooks/useLikes'

interface TourSectionProps {
  title: string
  subtitle: string
  tours: Tour[]
  backgroundColor?: string
}

export default function TourSection({ title, subtitle, tours, backgroundColor = 'bg-gray-50' }: TourSectionProps) {
  const tourLikes = useLikes()

  return (
    <section className={`py-16 ${backgroundColor}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center mb-4">{title}</h2>
        <p className="text-gray-600 text-center mb-12">{subtitle}</p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {tours.map((tour) => (
            <TourCard 
              key={tour.id}
              tour={tour}
              isLiked={tourLikes.isLiked(tour.id)}
              onToggleLike={() => tourLikes.toggleLike(tour.id)}
            />
          ))}
        </div>
      </div>
    </section>
  )
}