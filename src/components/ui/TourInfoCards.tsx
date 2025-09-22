interface InfoCard {
  icon: string
  title: string
  value: string
}

interface TourInfoCardsProps {
  cards: InfoCard[]
  price?: number
  priceLabel?: string
  pricePrefix?: string
  buttonText?: string
  onBookClick?: () => void
}

export default function TourInfoCards({ 
  cards, 
  price, 
  priceLabel = "/ per person",
  pricePrefix = "Starting From",
  buttonText = "Book Now",
  onBookClick
}: TourInfoCardsProps) {
  return (
    <section className="w-full px-4 sm:px-6 lg:px-8 mb-6">
      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {cards.map((card, index) => (
          <div key={index} className="p-6 rounded-md relative min-h-[100px]" style={{backgroundColor: '#E9E9E9'}}>
            <img src={card.icon} alt={card.title} className="w-6 h-6 absolute top-3 left-3" />
            <div className="absolute bottom-3 left-3">
              <h3 className="text-sm text-left mb-1" style={{color: '#00473E'}}>{card.title}</h3>
              <p className="font-semibold text-left" style={{color: '#00473E'}}>{card.value}</p>
            </div>
          </div>
        ))}
        {price && (
          <div className="p-6 rounded-md" style={{backgroundColor: '#E9E9E9'}}>
            <p className="text-sm text-center" style={{color: '#00473E'}}>{pricePrefix}</p>
            <p className="text-2xl font-bold text-center" style={{color: '#00473E'}}>₹{price.toLocaleString()}</p>
            <p className="text-base font-medium text-center mb-4" style={{color: '#00473E'}}>{priceLabel}</p>
            <button 
              onClick={onBookClick}
              className="px-6 py-2 rounded-md w-full border border-black" 
              style={{backgroundColor: '#00473E', color: 'white'}}
            >
              {buttonText}
            </button>
          </div>
        )}
      </div>
    </section>
  )
}