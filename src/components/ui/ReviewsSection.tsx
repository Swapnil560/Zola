interface ReviewsSectionProps {
  title?: string
  rating?: number
  totalReviews?: number
  reviewCount?: number
}

export default function ReviewsSection({ 
  title = "Real Customers. Real Reviews. Real Happy.",
  rating = 4.8,
  totalReviews = 10000,
  reviewCount = 6
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
          {[...Array(reviewCount)].map((_, i) => (
            <div key={i} className="bg-gray-200 p-6 rounded-lg">
              <div className="flex text-yellow-400 mb-4">
                {[...Array(4)].map((_, j) => (
                  <span key={j}>★</span>
                ))}
              </div>
              <p className="text-gray-700 mb-4">"Booked an Activa at 8am, riding by 8:10. So smooth!"</p>
              <p className="text-gray-600 font-medium">- Ankita</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}