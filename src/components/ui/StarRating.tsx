import { useState } from 'react'

interface StarRatingProps {
  initialRating?: number
  size?: 'sm' | 'md' | 'lg'
  readonly?: boolean
  onRatingChange?: (rating: number) => void
}

export default function StarRating({ 
  initialRating = 5, 
  size = 'md', 
  readonly = false,
  onRatingChange 
}: StarRatingProps) {
  const [rating, setRating] = useState(initialRating)

  const sizeClasses = {
    sm: 'text-lg',
    md: 'text-xl',
    lg: 'text-2xl'
  }

  const handleClick = (newRating: number) => {
    if (readonly) return
    setRating(newRating)
    onRatingChange?.(newRating)
  }

  return (
    <div className="flex">
      {[...Array(5)].map((_, i) => (
        readonly ? (
          <span
            key={i}
            className={`${sizeClasses[size]}`}
            style={{ color: i < rating ? '#FFD700' : '#D1D5DB' }}
          >
            ★
          </span>
        ) : (
          <button
            key={i}
            onClick={() => handleClick(i + 1)}
            className={`${sizeClasses[size]} transition-colors duration-200 hover:scale-110 cursor-pointer`}
            style={{ color: i < rating ? '#FFD700' : '#D1D5DB' }}
          >
            ★
          </button>
        )
      ))}
    </div>
  )
}