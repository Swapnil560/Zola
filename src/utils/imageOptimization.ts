// Image optimization utilities
export const getOptimizedImageUrl = (src: string, width?: number, quality = 80): string => {
  // For production, you could integrate with image CDN services like Cloudinary, ImageKit, etc.
  // For now, return original src with cache busting
  return `${src}?w=${width || 'auto'}&q=${quality}&v=${Date.now()}`
}

export const preloadImage = (src: string): Promise<void> => {
  return new Promise((resolve, reject) => {
    const img = new Image()
    img.onload = () => resolve()
    img.onerror = reject
    img.src = src
  })
}

export const preloadCriticalImages = async (images: string[]): Promise<void> => {
  const promises = images.map(src => preloadImage(src))
  await Promise.allSettled(promises)
}

// Convert image to WebP format (client-side check)
export const supportsWebP = (): boolean => {
  const canvas = document.createElement('canvas')
  canvas.width = 1
  canvas.height = 1
  return canvas.toDataURL('image/webp').indexOf('data:image/webp') === 0
}

export const getWebPUrl = (src: string): string => {
  if (supportsWebP() && !src.includes('.webp')) {
    // In production, you'd convert images to WebP format
    // For now, return original
    return src
  }
  return src
}