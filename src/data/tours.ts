import { Tour, ItineraryDay } from '../types'

// Home page tours - Popular Outstation Tours
export const popularTours: Tour[] = [
  {
    id: 1,
    title: 'Meghalaya Bike Trip',
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
    title: 'Tawang Bike Trip',
    duration: '7 Days / 6 Nights',
    rating: 4,
    reviews: 32,
    description: 'Experience the mystical beauty of Tawang with breathtaking monasteries and mountain landscapes.',
    highlights: [
      '✓ 2 nights in Dirang valley town',
      '✓ 3 nights in Tawang at high altitude',
      '✓ 1 night in Bomdila mountain town'
    ],
    image: '/images/tourmage 4.jpg'
  },
  {
    id: 3,
    title: 'Kaziranga National Park',
    duration: '4 Days / 3 Nights',
    rating: 5,
    reviews: 38,
    description: 'Experience the wildlife paradise of Kaziranga National Park, home to the famous one-horned rhinoceros.',
    highlights: [
      '✓ 2 nights in Kaziranga National Park',
      '✓ Jeep safari and elephant safari',
      '✓ Wildlife photography and bird watching'
    ],
    image: '/images/Shillong-City-1-1536x1024-1-1024x683-2.jpg'
  }
]

// Reusable function to generate epic adventures
export const getEpicAdventures = (tourType: 'meghalaya' | 'tawang' | 'kaziranga'): Tour[] => {
  const isTawang = tourType === 'tawang'
  const isKaziranga = tourType === 'kaziranga'
  const baseId = isKaziranga ? 10 : (isTawang ? 7 : 4)
  const images = ['/images/5-day meghalay escape.png', '/images/Hero.png', '/images/gallery-1920x1080-5.jpg']
  
  return images.map((image, index) => ({
    id: baseId + index,
    title: isKaziranga ? '5-Day Kaziranga National Park' : (isTawang ? '5-Day Tawang Escape' : '5-Day Meghalaya Escape'),
    duration: '5 Days / 4 Nights',
    rating: isKaziranga ? 5 : 4,
    reviews: isKaziranga ? 38 : (isTawang ? 28 : 44),
    description: isKaziranga
      ? 'Experience the wildlife paradise of Kaziranga National Park with extended safari adventures.'
      : (isTawang 
        ? 'Experience the mystical beauty of Tawang with breathtaking monasteries and mountain landscapes.'
        : 'Discover the breathtaking beauty of Meghalaya with our carefully curated tour package.'),
    highlights: isKaziranga
      ? [
          '✓ 3 nights in Kaziranga National Park',
          '✓ Multiple jeep and elephant safaris',
          '✓ Wildlife photography workshops'
        ]
      : (isTawang 
        ? [
            '✓ 2 nights in Tawang at high altitude',
            '✓ 1 night in Bomdila mountain town',
            '✓ Visit Sela Pass and Madhuri Lake'
          ]
        : [
            '✓ 1 night Shillong\'s charming hills',
            '✓ 2 nights scenic Cherrapunjee',
            '✓ 1 night by the crystal waters of Dawki'
          ]),
    image
  }))
}

// For backward compatibility
export const epicAdventures = getEpicAdventures('meghalaya')

export const meghalayaItinerary: ItineraryDay[] = [
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

export const tawangItinerary: ItineraryDay[] = [
  {
    day: 1,
    title: "Arrival at Guwahati / Tezpur",
    location: "Guwahati/Tezpur, Assam",
    distance: "0 km",
    highlights: [
      "Airport pickup",
      "Bike allocation & briefing"
    ],
    image: '/images/airport.avif'
  },
  {
    day: 2,
    title: "Guwahati - Dirang",
    location: "Dirang, Arunachal Pradesh",
    distance: "320 km",
    highlights: [
      "Long scenic ride through Assam and Arunachal",
      "Cross into Arunachal Pradesh",
      "Reach the beautiful valley town of Dirang"
    ],
    image: '/images/Shillong-City-1-1536x1024-1-1024x683-2.jpg'
  },
  {
    day: 3,
    title: "Dirang - Tawang",
    location: "Tawang, Arunachal Pradesh",
    distance: "140 km",
    highlights: [
      "Cross Sela Pass at 13,700 feet",
      "Visit Sela Lake and Jaswant Garh War Memorial",
      "Arrive in the mystical town of Tawang"
    ],
    image: '/images/sides.avif'
  },
  {
    day: 4,
    title: "Explore Tawang",
    location: "Tawang, Arunachal Pradesh",
    distance: "50 km",
    highlights: [
      "Visit Tawang Monastery - largest in India",
      "Explore Urgelling Monastery",
      "Visit Tawang War Memorial and local markets"
    ],
    image: '/images/stoC.jpg'
  },
  {
    day: 5,
    title: "Tawang - Bum La Pass - Madhuri Lake",
    location: "Bum La Pass & Madhuri Lake",
    distance: "80 km",
    highlights: [
      "Visit Bum La Pass at Indo-China border",
      "Explore the famous Madhuri Lake",
      "Experience high altitude adventure"
    ],
    image: '/images/root.jpeg'
  },
  {
    day: 6,
    title: "Tawang - Bomdila",
    location: "Bomdila, Arunachal Pradesh",
    distance: "100 km",
    highlights: [
      "Scenic ride to Bomdila",
      "Visit Bomdila Monastery",
      "Enjoy mountain views and local culture"
    ],
    image: '/images/nohkalikai-falls.jpg'
  },
  {
    day: 7,
    title: "Bomdila - Guwahati/Tezpur",
    location: "Guwahati/Tezpur",
    distance: "320 km",
    highlights: [
      "Long scenic ride back through mountains",
      "Stop at viewpoints for photography",
      "Farewell dinner and trip reflections"
    ],
    image: '/images/back.png'
  }
]

export const kazirangaItinerary: ItineraryDay[] = [
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
    title: "Guwahati to Kaziranga",
    location: "Kaziranga National Park",
    distance: "220 km",
    highlights: [
      "Scenic ride through Assam countryside",
      "Check-in at wildlife resort near Kaziranga",
      "Evening nature walk and bird watching"
    ],
    image: '/images/Shillong-City-1-1536x1024-1-1024x683-2.jpg'
  },
  {
    day: 3,
    title: "Kaziranga Wildlife Safari",
    location: "Kaziranga National Park",
    distance: "50 km",
    highlights: [
      "Early morning jeep safari in Central Range",
      "Spot one-horned rhinoceros and wild elephants",
      "Afternoon elephant safari for closer wildlife experience"
    ],
    image: '/images/sides.avif'
  },
  {
    day: 4,
    title: "Return to Guwahati",
    location: "Guwahati",
    distance: "220 km",
    highlights: [
      "Morning visit to Kaziranga Orchid Park",
      "Leisurely ride back to Guwahati",
      "Farewell dinner and trip reflections"
    ],
    image: '/images/back.png'
  }
]

export const itinerary = meghalayaItinerary