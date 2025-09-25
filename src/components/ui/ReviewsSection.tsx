interface ReviewsSectionProps {
  title?: string
  rating?: number
  totalReviews?: number
  maxReviews?: number
}

export default function ReviewsSection({ 
  title = "Real Customers. Real Reviews. Real Happy.",
  rating = 4.8,
  totalReviews = 10000,
  maxReviews = 6
}: ReviewsSectionProps) {
  return (
    <section className="py-16 bg-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center mb-4">{title}</h2>
        <div className="text-center mb-12">
          <div className="flex justify-center items-center mb-2">
            <div className="flex text-yellow-400 mr-2">
              {[...Array(5)].map((_, i) => (
                <span key={i} className="text-2xl">★</span>
              ))}
            </div>
            <span className="text-3xl font-bold">{rating}</span>
          </div>
          <p className="text-gray-600">Based on {totalReviews.toLocaleString()}+ reviews</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            { review: "Rented a scooter and was riding in minutes—super smooth experience!", name: "Aarav" },
            { review: "Grabbed a bike effortlessly and started my journey—excellent service!", name: "Priya" },
            { review: "Got my ride instantly and hit the road—really impressed with the support!", name: "Rohan" },
            { review: "Grabbed a scooter and started my trip effortlessly—great job!", name: "Priyanka" },
            { review: "Rented a bike and was off in a snap—highly efficient!", name: "Aditya" },
            { review: "Locked in a rental and hit the road smoothly—amazing experience!", name: "Rhea" }
          ].slice(0, maxReviews).map((item, i) => (
            <div key={i} className="bg-gray-200 p-6 rounded-lg">
              <div className="flex text-yellow-400 mb-4">
                {[...Array(4)].map((_, j) => (
                  <span key={j}>★</span>
                ))}
              </div>
              <p className="text-gray-700 mb-4">"{item.review}"</p>
              <p className="text-gray-600 font-medium">- {item.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}