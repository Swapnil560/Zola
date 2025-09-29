import Button from './Button'
import FeatureCard from './FeatureCard'
import StarRating from './StarRating'

interface BikeInfoProps {
  bike: any
}

export default function BikeInfo({ bike }: BikeInfoProps) {
  const features = [
    { icon: "🛡️", text: "Free helmet included" },
    { icon: "🛡️", text: "Fully insured" },
    { icon: "✈️", text: "Airport pickup" }
  ]

  return (
    <div className="lg:w-1/2 flex flex-col justify-between min-h-full">
      <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-black mb-4">{bike.subtitle} {bike.title}</h1>
      <p className="text-gray-600 mb-6">Stylish, reliable city ride with vintage charm</p>
      
      <div className="flex items-center mb-6">
        <div className="mr-2">
          <StarRating initialRating={bike.rating || 5} size="lg" />
        </div>
        <span className="text-gray-600">(124 reviews)</span>
      </div>

      <div className="text-4xl font-bold mb-2" style={{color: '#2D2D2D'}}>₹4,500 / per day</div>
      <p className="text-gray-600 mb-6">(Fuel cost included in price)</p>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-8 flex-grow">
        {features.map((feature, i) => <FeatureCard key={i} icon={feature.icon} text={feature.text} />)}
      </div>

      <Button variant="primary" size="md" className="w-full">Book Now</Button>
    </div>
  )
}