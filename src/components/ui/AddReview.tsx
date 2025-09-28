import { useState, useEffect } from 'react'
import StarRating from './StarRating'
import Button from './Button'

interface AddReviewProps {
  onAddReview: (review: { name: string; review: string; rating: number }) => void
  editingReview?: { name: string; review: string; index: number } | null
  onCancelEdit?: () => void
}

export default function AddReview({ onAddReview, editingReview, onCancelEdit }: AddReviewProps) {
  const [isOpen, setIsOpen] = useState(false)
  const [name, setName] = useState('')
  const [reviewText, setReviewText] = useState('')
  const [rating, setRating] = useState(5)

  useEffect(() => {
    if (editingReview) {
      setName(editingReview.name)
      setReviewText(editingReview.review)
      setRating(5)
      setIsOpen(true)
    } else {
      setName('')
      setReviewText('')
      setRating(5)
    }
  }, [editingReview])

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (name.trim() && reviewText.trim()) {
      onAddReview({ name: name.trim(), review: reviewText.trim(), rating })
      setName('')
      setReviewText('')
      setRating(5)
      setIsOpen(false)
    }
  }

  const handleCancel = () => {
    if (editingReview && onCancelEdit) {
      onCancelEdit()
    }
    setName('')
    setReviewText('')
    setRating(5)
    setIsOpen(false)
  }

  if (!isOpen && !editingReview) {
    return (
      <div className="text-center mt-8">
        <Button variant="primary" onClick={() => setIsOpen(true)}>
          Add Your Review
        </Button>
      </div>
    )
  }

  return (
    <div className={`mt-8 p-4 sm:p-6 rounded-lg shadow-md ${
      editingReview ? 'bg-blue-50 border-2 border-blue-300' : 'bg-white'
    }`}>
      <h3 className="text-lg sm:text-xl font-bold mb-4">
        {editingReview ? 'Edit Your Review' : 'Share Your Experience'}
      </h3>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Your Rating</label>
          <StarRating 
            initialRating={rating} 
            size="md" 
            onRatingChange={setRating}
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Your Name</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full p-2 sm:p-3 text-sm sm:text-base border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            placeholder="Enter your name"
            required
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Your Review</label>
          <textarea
            value={reviewText}
            onChange={(e) => setReviewText(e.target.value)}
            rows={3}
            className="w-full p-2 sm:p-3 text-sm sm:text-base border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none"
            placeholder="Share your experience..."
            required
          />
        </div>
        <div className="flex flex-col sm:flex-row gap-3">
          <Button type="submit" variant="primary" className="w-full sm:w-auto">
            {editingReview ? 'Update Review' : 'Submit Review'}
          </Button>
          <Button type="button" variant="secondary" className="w-full sm:w-auto" onClick={handleCancel}>Cancel</Button>
        </div>
      </form>
    </div>
  )
}