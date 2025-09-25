import { Tour, ItineraryDay } from '../types'

// Home page tours - Popular Outstation Tours
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
    image: '/images/nohkalikai-falls.jpg'
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
    image: '/images/Shillong-City-1-1536x1024-1-1024x683-2.jpg'
  }
]

// Tours page tours - More Epic Adventures
export const epicAdventures: Tour[] = [
  {
    id: 4,
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
    id: 5,
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
    image: '/images/Hero.png'
  },
  {
    id: 6,
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
    image: '/images/gallery-1920x1080-5.jpg'
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
      "Welcome dinner with local Assamese cuisine",
      "Bike allocation & safety briefing"
    ],
    image: '/images/airport.avif'
  },
  {
    day: 2,
    title: "Guwahati to Shillong",
    location: "Shillong, Meghalaya",
    distance: "160 km",
    highlights: [
      "Scenic ride through lush hills and valleys",
      "Visit Umiam Lake for photography and relaxation",
      "Evening stroll in Shillong's Police Bazaar"
    ],
    image: '/images/Shillong-City-1-1536x1024-1-1024x683-2.jpg'
  },
  {
    day: 3,
    title: "Shillong Local Sightseeing",
    location: "Shillong & Around",
    distance: "80 km",
    highlights: [
      "Explore Ward's Lake and Lady Hydari Park",
      "Visit Shillong Peak for panoramic views",
      "Tour Don Bosco Museum for cultural insights"
    ],
    image: '/images/sides.avif'
  },
  {
    day: 4,
    title: "Shillong to Cherrapunjee",
    location: "Cherrapunjee",
    distance: "120 km",
    highlights: [
      "Ride to the wettest place on Earth",
      "Visit Nohkalikai Falls and Mawsmai Caves",
      "Evening at a local café with Khasi delicacies"
    ],
    image: '/images/stoC.jpg'
  },
  {
    day: 5,
    title: "Living Root Bridge Trek",
    location: "Nongriat Village",
    distance: "6 km trek",
    highlights: [
      "Trek to the iconic Double Decker Living Root Bridge",
      "Swim in natural pools near the bridge",
      "Interact with local Khasi villagers"
    ],
    image: '/images/root.jpeg'
  },
  {
    day: 6,
    title: "Cherrapunjee to Dawki",
    location: "Dawki Border",
    distance: "95 km",
    highlights: [
      "Ride to the crystal-clear Umngot River",
      "Boat ride and border visit at India-Bangladesh line",
      "Explore Mawlynnong, Asia's cleanest village"
    ],
    image: '/images/nohkalikai-falls.jpg'
  },
  {
    day: 7,
    title: "Return to Guwahati",
    location: "Guwahati",
    distance: "180 km",
    highlights: [
      "Leisurely ride back through scenic routes",
      "Visit Kamakhya Temple for blessings",
      "Farewell dinner and trip reflections"
    ],
    image: '/images/back.png'
  }
]