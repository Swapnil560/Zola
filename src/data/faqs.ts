import { FAQ, FAQCategory } from '../types'

export const bikeDetailsFAQs: FAQ[] = [
  {
    question: 'What documents do I need to rent a motorcycle?',
    answer: 'You need a valid driving license, government-issued ID proof, and a security deposit. International visitors need an International Driving Permit.'
  },
  {
    question: 'Is fuel included in the rental price?',
    answer: 'Fuel policies vary by rental duration. Please check the specific terms for your booking or contact our support team.'
  },
  {
    question: 'What happens if I damage the motorcycle?',
    answer: 'Any damages will be assessed and charged according to our damage policy. We recommend purchasing our premium insurance for better coverage.'
  },
  {
    question: 'Can I extend my rental period?',
    answer: 'Yes, you can extend your rental period subject to availability. Additional charges will apply based on our standard rates.'
  },
  {
    question: 'Do you provide helmets and safety gear?',
    answer: 'Yes, we provide complimentary helmets with every rental. Additional safety gear is available upon request.'
  },
  {
    question: "What's your cancellation policy?",
    answer: 'Cancellations made 24 hours before pickup are eligible for a full refund. Cancellations within 24 hours may incur charges.'
  }
]

export const toursFAQCategories: FAQCategory[] = [
  {
    category: '1. Booking & Reservations',
    questions: [
      { question: 'How do I book a ride?', answer: 'You can book a ride through our website or mobile app by selecting your vehicle type, pickup location, and rental duration.' },
      { question: 'Can I book on the same day?', answer: 'Yes, same-day bookings are available subject to vehicle availability. We recommend booking in advance for guaranteed availability.' },
      { question: 'Do I need a driving license?', answer: 'Yes, a valid driving license is mandatory for all rentals. You must present your original license at the time of pickup.' },
      { question: 'Can I modify or cancel my booking?', answer: 'Yes, bookings can be modified or cancelled up to 24 hours before pickup. Cancellation charges may apply.' }
    ]
  },
  {
    category: '2. Payments and Pricing',
    questions: [
      { question: 'Are there any hidden charges?', answer: 'No, we believe in transparent pricing. All charges including taxes and fees are clearly mentioned during booking.' },
      { question: 'Is fuel included in the rental cost?', answer: 'Fuel policies vary by vehicle type. Some rentals include fuel while others require you to return with the same fuel level.' },
      { question: 'Do you charge a security deposit?', answer: 'Yes, a refundable security deposit is required for all rentals. The amount varies based on the vehicle type and rental duration.' },
      { question: 'What payment methods are accepted?', answer: 'We accept UPI, credit/debit cards, net banking, and cash at pickup.' }
    ]
  },
  {
    category: '3. Vehicle Use & Policies',
    questions: [
      { question: 'Is there a kilometre limit?', answer: 'Most of our rentals come with unlimited kilometres within the city. For outstation trips, specific kilometre limits may apply.' },
      { question: 'Can I take the vehicle outside Guwahati?', answer: 'Yes, outstation trips are allowed with prior approval. Additional charges may apply for inter-state travel.' },
      { question: 'Are helmets and safety gear included?', answer: 'Yes, we provide complimentary helmets and basic safety gear with all two-wheeler rentals.' },
      { question: 'Can multiple people drive the same rental car?', answer: 'Yes, if all drivers present valid licenses at the time of booking.' }
    ]
  },
  {
    category: '4. Safety & Support',
    questions: [
      { question: 'Are the vehicles insured?', answer: 'Yes, all our vehicles are comprehensively insured. However, customers are responsible for any damages due to negligence.' },
      { question: 'What happens in case of a breakdown?', answer: 'We provide 24/7 roadside assistance. Contact our support team immediately, and we will arrange for repair or replacement.' },
      { question: 'Do you offer child seats or extra accessories?', answer: 'Yes, child seats, GPS devices, and other accessories are available on request for an additional charge.' },
      { question: 'How can I contact support?', answer: 'Our customer support team is available 24/7 through phone, WhatsApp, and email.' }
    ]
  }
]

export const aboutFAQCategories: FAQCategory[] = [
  {
    category: '1. Booking & Reservations',
    questions: [
      { question: 'How do I book a ride?', answer: 'Book online or via phone.' },
      { question: 'Can I book on the same day?', answer: 'Yes, if available.' },
      { question: 'Do I need a driving license?', answer: 'Yes, a valid license is required.' },
      { question: 'Can I modify or cancel my booking?', answer: 'Yes, bookings can be modified or canceled up to 24 hours before pickup. Cancellation charges may apply.' }
    ]
  },
  {
    category: '2. Payments and Pricing',
    questions: [
      { question: 'Are there any hidden charges?', answer: 'No hidden charges.' },
      { question: 'Is fuel included in the rental cost?', answer: 'No, fuel is not included.' },
      { question: 'Do you charge a security deposit?', answer: 'Yes, a refundable deposit is required.' },
      { question: 'What payment methods are accepted?', answer: 'We accept UPI, credit/debit cards, net banking, and cash at pickup.' }
    ]
  },
  {
    category: '3. Vehicle Use & Policies',
    questions: [
      { question: 'Is there a kilometer limit?', answer: 'Yes, 100 km per day included.' },
      { question: 'Can I take the vehicle outside Guwahati?', answer: 'Yes, with prior approval.' },
      { question: 'Are helmets and safety gear included?', answer: 'Yes, helmets and gear are provided.' },
      { question: 'Can multiple people drive the same rental car?', answer: 'Yes, if all drivers present valid licenses at the time of booking.' }
    ]
  },
  {
    category: '4. Safety & Support',
    questions: [
      { question: 'Are the vehicles insured?', answer: 'Yes, all vehicles are insured.' },
      { question: 'What happens in case of a breakdown?', answer: 'We provide roadside assistance.' },
      { question: 'Do you offer child seats or extra accessories?', answer: 'Yes, available upon request.' },
      { question: 'How can I contact support?', answer: 'Our customer support team is available 24/7 through phone, WhatsApp, and email.' }
    ]
  }
]

export const servicesFAQCategories: FAQCategory[] = [
  {
    category: '1. Reservation Guide',
    questions: [
      { 
        question: 'What are the documents required to rent a self drive?', 
        answer: 'Guest need to provide a soft copy of his or her driving licence and Aadhaar card. Our team will verify it and proceed further.' 
      },
      { 
        question: 'Where do I need to drop the self drive car or bike?', 
        answer: 'Guest has the liberty to choose their own pickup and drop-off location. A convenience fee is applicable.' 
      },
      { 
        question: 'Can my friend receive the car in my absence?', 
        answer: 'Yes, of course. In the absence of the guest, his or her friend who has a valid driving licence and Aadhaar card can receive the car.' 
      },
      { 
        question: 'Any charges for extra km?', 
        answer: 'In case of self-drive we don\'t charge for extra kms. But in cab rentals extra kms are chargeable after it crosses the km limit. It varies from cab to destination.' 
      },
      { 
        question: 'Do we need to pay tyre punctures?', 
        answer: 'No, in case of cab tyre damages are upon the guest, but yes, in case of self-drive tyre damages are upon the guest.' 
      }
    ]
  }
]