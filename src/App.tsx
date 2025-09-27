import { useEffect } from 'react'
import Home from './pages/Home'

function App() {
  useEffect(() => {
    // Preload critical images across the website
    const criticalImages = [
      '/images/classic 350.png',
      '/images/Scooter/mainScooty.jpeg',
      '/images/cabs/main.jpeg',
      '/images/gixxer.jpg',
      '/images/tempo/main.jpeg',
      '/images/Meghalaya/river.jpeg',
      '/images/tawang/B.jpeg',
      '/images/Kaziranga/k1.png',
      '/images/Hero.png',
      '/images/logo.png',
      '/images/350/head.jpeg',
      '/images/350/helmet.jpeg',
      '/images/350/mride.jpeg',
      '/images/350/side.jpeg',
      '/images/Scooter/2ppl.jpeg',
      '/images/Scooter/back.jpeg',
      '/images/Scooter/helmet.jpeg',
      '/images/Scooter/side.jpeg'
    ]
    
    criticalImages.forEach(src => {
      const link = document.createElement('link')
      link.rel = 'preload'
      link.as = 'image'
      link.href = src
      document.head.appendChild(link)
    })
  }, [])

  return <Home />
}

export default App