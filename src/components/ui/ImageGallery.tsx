import { useState, useEffect } from 'react'

interface ImageGalleryProps {
  images: string[]
  alt: string
}

export default function ImageGallery({ images, alt }: ImageGalleryProps) {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [showControls, setShowControls] = useState(true)
  const [isHovered, setIsHovered] = useState(false)
  
  useEffect(() => {
    const timer = setTimeout(() => {
      setShowControls(false)
    }, 1000)
    
    return () => clearTimeout(timer)
  }, [])

  const nextImage = () => setCurrentIndex((prev) => (prev + 1) % images.length)
  const prevImage = () => setCurrentIndex((prev) => (prev - 1 + images.length) % images.length)

  return (
    <div className="w-full lg:w-1/2 flex flex-col h-full">
      <div className="relative mb-4" onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)}>
        <img src={images[currentIndex]} alt={alt} className="w-full h-64 sm:h-80 lg:h-96 object-contain bg-gray-100 rounded-lg" />
        <button onClick={prevImage} className={`absolute left-4 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 hover:bg-opacity-70 text-white p-2 rounded-full transition-all duration-200 ${showControls || isHovered ? 'opacity-100' : 'opacity-0'}`}>
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </button>
        <button onClick={nextImage} className={`absolute right-4 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 hover:bg-opacity-70 text-white p-2 rounded-full transition-all duration-200 ${showControls || isHovered ? 'opacity-100' : 'opacity-0'}`}>
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>
        <div className={`absolute bottom-4 right-4 bg-black bg-opacity-50 text-white px-3 py-1 rounded-full text-sm transition-all duration-200 ${showControls || isHovered ? 'opacity-100' : 'opacity-0'}`}>
          {currentIndex + 1} / {images.length}
        </div>
      </div>
      <div className="flex gap-1 sm:gap-2 overflow-x-auto pb-2">
        {images.map((image, index) => (
          <button key={index} onClick={() => setCurrentIndex(index)} className={`flex-shrink-0 w-16 h-12 sm:w-20 sm:h-16 rounded-lg overflow-hidden border-2 transition-all duration-200 ${currentIndex === index ? 'border-blue-500 ring-2 ring-blue-200' : 'border-gray-200 hover:border-gray-300'}`}>
            <img src={image} alt={`View ${index + 1}`} className="w-full h-full object-cover" />
          </button>
        ))}
      </div>
    </div>
  )
}