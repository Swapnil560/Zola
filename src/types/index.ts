export interface Vehicle {
  id: number
  title: string
  subtitle: string
  image: string
  rating: number
  reviews: number
  price: number
  features: string[]
}

export interface Tour {
  id: number
  title: string
  duration: string
  rating: number
  reviews: number
  description: string
  highlights: string[]
  image: string
  price?: number
}

export interface ServiceCard {
  title: string
  subtitle: string
  image: string
}

export interface ItineraryDay {
  day: number
  title: string
  location: string
  distance: string
  highlights: string[]
  image?: string
}

export interface FAQ {
  question: string
  answer: string
}

export interface FAQCategory {
  category: string
  questions: FAQ[]
}