import { useEffect } from 'react'

export const useImagePreload = (images: string[]) => {
  useEffect(() => {
    const preloadImages = async () => {
      const promises = images.map(src => {
        return new Promise((resolve, reject) => {
          const img = new Image()
          img.onload = resolve
          img.onerror = reject
          img.src = src
        })
      })
      
      try {
        await Promise.allSettled(promises)
      } catch (error) {
        console.warn('Some images failed to preload:', error)
      }
    }

    preloadImages()
  }, [images])
}