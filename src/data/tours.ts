import { Tour, ItineraryDay } from '../types'

export const popularTours: Tour[] = [
  {
    id: 1,
    title: '5-Day Meghalaya Escape',
    duration: '5 Days / 4 Nights',
    rating: 4,
    reviews: 44,
    description: 'Discover the breathtaking beauty of Meghalaya with our carefully curated tour package.',
    highlights: [
      '✓ 1 night Shillong\'s charming hills',
      '✓ 2 nights scenic Cherrapunjee',
      '✓ 1 night by the crystal waters of Dawki'
    ],
    image: '/images/5-day meghalay escape.png'
  },
  {
    id: 2,
    title: '5-Day Meghalaya Escape',
    duration: '5 Days / 4 Nights',
    rating: 4,
    reviews: 44,
    description: 'Discover the breathtaking beauty of Meghalaya with our carefully curated tour package.',
    highlights: [
      '✓ 1 night Shillong\'s charming hills',
      '✓ 2 nights scenic Cherrapunjee',
      '✓ 1 night by the crystal waters of Dawki'
    ],
    image: '/images/5-day meghalay escape.png'
  },
  {
    id: 3,
    title: '5-Day Meghalaya Escape',
    duration: '5 Days / 4 Nights',
    rating: 4,
    reviews: 44,
    description: 'Discover the breathtaking beauty of Meghalaya with our carefully curated tour package.',
    highlights: [
      '✓ 1 night Shillong\'s charming hills',
      '✓ 2 nights scenic Cherrapunjee',
      '✓ 1 night by the crystal waters of Dawki'
    ],
    image: '/images/5-day meghalay escape.png'
  }
]

export const itinerary: ItineraryDay[] = [
  {
    day: 1,
    title: "Arrival in Guwahati",
    location: "Guwahati, Assam",
    distance: "0 km",
    highlights: [
      "Airport pickup & hotel check-in",
      "Welcome dinner & trip briefing",
      "Bike allocation & safety check"
    ]
  },
  {
    day: 2,
    title: "Guwahati to Shillong",
    location: "Shillong, Meghalaya",
    distance: "160 km",
    highlights: []
  },
  {
    day: 3,
    title: "Shillong Local Sightseeing",
    location: "Shillong & Around",
    distance: "80 km",
    highlights: []
  },
  {
    day: 4,
    title: "Shillong to Cherrapunjee",
    location: "Cherrapunjee",
    distance: "120 km",
    highlights: []
  },
  {
    day: 5,
    title: "Living Root Bridge Trek",
    location: "Nongriat Village",
    distance: "6 km trek",
    highlights: []
  },
  {
    day: 6,
    title: "Cherrapunjee to Dawki",
    location: "Dawki Border",
    distance: "95 km",
    highlights: []
  },
  {
    day: 7,
    title: "Return to Guwahati",
    location: "Guwahati",
    distance: "180 km",
    highlights: []
  }
]