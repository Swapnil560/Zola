import { useState } from 'react'
import { Review } from '../../data/reviews'
import StarRating from './StarRating'
import AddReview from './AddReview'

interface ReviewsSectionProps {
  title?: string
  rating?: number
  totalReviews?: number
  maxReviews?: number
  reviews?: Review[]
}

export default function ReviewsSection({ 
  title = "Real Customers. Real Reviews. Real Happy.",
  rating = 4.8,
  totalReviews = 10000,

  reviews = [
    { review: "Rented a scooter and was riding in minutes—super smooth experience!", name: "Aarav" },
    { review: "Grabbed a bike effortlessly and started my journey—excellent service!", name: "Priya" },
    { review: "Got my ride instantly and hit the road—really impressed with the support!", name: "Rohan" },
    { review: "Grabbed a scooter and started my trip effortlessly—great job!", name: "Priyanka" },
    { review: "Rented a bike and was off in a snap—highly efficient!", name: "Aditya" },
    { review: "Locked in a rental and hit the road smoothly—amazing experience!", name: "Rhea" }
  ]
}: ReviewsSectionProps) {
  const [dynamicReviews, setDynamicReviews] = useState<Review[]>(reviews.slice(0, 6))
  const [totalCount, setTotalCount] = useState(totalReviews)
  const [editingReview, setEditingReview] = useState<{ name: string; review: string; index: number } | null>(null)
  const [showAll, setShowAll] = useState(false)

  const handleAddReview = (newReview: { name: string; review: string; rating: number }) => {
    setDynamicReviews(prev => {
      const updated = [newReview, ...prev]
      return updated.slice(0, 6)
    })
    setTotalCount(prev => prev + 1)
  }

  const handleDeleteReview = (index: number) => {
    setDynamicReviews(prev => prev.filter((_, i) => i !== index))
    setTotalCount(prev => prev - 1)
  }

  const handleEditReview = (index: number) => {
    setEditingReview({ 
      name: dynamicReviews[index].name, 
      review: dynamicReviews[index].review, 
      index 
    })
    setTimeout(() => {
      const addReviewSection = document.querySelector('.add-review-section')
      if (addReviewSection) {
        addReviewSection.scrollIntoView({ behavior: 'smooth', block: 'center' })
      }
    }, 100)
  }

  const handleSaveEdit = (updatedReview: { name: string; review: string; rating: number }) => {
    if (editingReview) {
      setDynamicReviews(prev => prev.map((item, i) => 
        i === editingReview.index ? { name: updatedReview.name, review: updatedReview.review } : item
      ))
      setEditingReview(null)
    }
  }

  const handleCancelEdit = () => {
    setEditingReview(null)
  }
  return (
    <section className="py-16 bg-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl sm:text-3xl font-bold text-center mb-4">{title}</h2>
        <div className="text-center mb-12">
          <div className="flex justify-center items-center mb-2">
            <div className="mr-2">
              <StarRating initialRating={Math.round(rating)} size="lg" />
            </div>
            <span className="text-2xl sm:text-3xl font-bold">{rating}</span>
          </div>
          <p className="text-gray-600">Based on {totalCount.toLocaleString()}+ reviews</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {dynamicReviews.slice(0, showAll ? 6 : 3).map((item, i) => (
            <div key={i} className="bg-gray-200 p-4 sm:p-6 rounded-lg relative group">
              <button
                onClick={() => handleDeleteReview(i)}
                className="absolute top-2 right-2 text-gray-600 hover:text-gray-800 opacity-0 group-hover:opacity-100 transition-opacity duration-200"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z" clipRule="evenodd" />
                </svg>
              </button>
              <div className="mb-4">
                <StarRating initialRating={4} size="sm" />
              </div>
              <p className="text-gray-700 mb-4 text-sm sm:text-base">"{item.review}"</p>
              <p className="text-gray-600 font-medium mb-6 sm:mb-8 text-sm sm:text-base">- {item.name}</p>
              <button
                onClick={() => handleEditReview(i)}
                className="absolute bottom-2 right-2 text-gray-600 hover:text-gray-800 opacity-0 group-hover:opacity-100 transition-opacity duration-200"
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M13.586 3.586a2 2 0 112.828 2.828l-.793.793-2.828-2.828.793-.793zM11.379 5.793L3 14.172V17h2.828l8.38-8.379-2.83-2.828z" />
                </svg>
              </button>
            </div>
          ))}
        </div>
        {dynamicReviews.length > 3 && (
          <div className="text-center sm:text-right mt-6 sm:mt-8">
            <button
              onClick={() => setShowAll(!showAll)}
              className="px-4 sm:px-6 py-2 sm:py-3 text-sm sm:text-base bg-gray-500 text-white rounded-lg hover:bg-gray-600 transition-colors duration-200 flex items-center gap-2 mx-auto sm:ml-auto w-full sm:w-auto justify-center sm:justify-start"
            >
              {showAll ? (
                <>
                  <span className="hidden sm:inline">Show Less Reviews</span>
                  <span className="sm:hidden">Show Less</span>
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </>
              ) : (
                <>
                  <span className="hidden sm:inline">Show More Reviews</span>
                  <span className="sm:hidden">Show More</span>
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                  </svg>
                </>
              )}
            </button>
          </div>
        )}
        <div className="add-review-section">
          <AddReview 
            onAddReview={editingReview ? handleSaveEdit : handleAddReview} 
            editingReview={editingReview}
            onCancelEdit={handleCancelEdit}
          />
        </div>
      </div>
    </section>
  )
}