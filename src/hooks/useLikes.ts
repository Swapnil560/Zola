import { useState } from 'react'

export const useLikes = () => {
  const [likedItems, setLikedItems] = useState<number[]>([])

  const toggleLike = (id: number) => {
    setLikedItems(prev => 
      prev.includes(id) ? prev.filter(i => i !== id) : [...prev, id]
    )
  }

  const isLiked = (id: number) => likedItems.includes(id)

  return { toggleLike, isLiked }
}