import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useImagePreload } from './useImagePreload'
import { useLikes } from './useLikes'
import { useToggle } from './useToggle'

export const useHomeLogic = () => {
  const navigate = useNavigate()
  const bikeLikes = useLikes()
  const mobileMenu = useToggle()
  const [showAllBikes, setShowAllBikes] = useState(false)
  
  useImagePreload([
    '/images/classic 350.png',
    '/images/Scooter/mainScooty.jpeg',
    '/images/cabs/main.jpeg'
  ])

  const handleViewDetails = (bikeId: number) => navigate(`/bike-details/${bikeId}`)
  const toggleShowAllBikes = () => setShowAllBikes(!showAllBikes)

  return {
    bikeLikes,
    mobileMenu,
    showAllBikes,
    handleViewDetails,
    toggleShowAllBikes
  }
}