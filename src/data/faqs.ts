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