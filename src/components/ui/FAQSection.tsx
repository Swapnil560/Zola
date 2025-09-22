import { useState } from 'react'
import { FAQ, FAQCategory } from '../../types'

interface FAQSectionProps {
  categories?: FAQCategory[]
  faqs?: FAQ[]
  title?: string
  subtitle?: string
}

const FAQSection = ({ categories, faqs, title = "Frequently Asked Questions", subtitle = "Got questions? We've got answers." }: FAQSectionProps) => {
  const [openItems, setOpenItems] = useState<number[]>([])

  const toggleItem = (index: number) => {
    setOpenItems((prev) =>
      prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index]
    )
  }

  return (
    <section className="py-20 bg-gray-200" id="faq">
      <div className="max-w-5xl mx-auto px-4 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-16">
        <div>
          <h2 className="text-4xl md:text-5xl font-bold mb-4" style={{color: '#2D2D2D'}}>
            {title}
          </h2>
          <p className="text-gray-600 text-lg">
            {subtitle}
          </p>
        </div>

        <div className="text-left">
          {categories ? (
            categories.map((category, categoryIndex) => (
              <div key={categoryIndex} className="mb-8">
                <h3 className="text-xl font-bold mb-4" style={{color: '#00473E'}}>
                  {category.category}
                </h3>
                <div className="space-y-2">
                  {category.questions.map((faq, questionIndex) => {
                    const itemIndex = categoryIndex * 10 + questionIndex
                    const isOpen = openItems.includes(itemIndex)
                    return (
                      <div key={questionIndex} className="border-b border-gray-400">
                        <button
                          onClick={() => toggleItem(itemIndex)}
                          className="w-full flex justify-between items-center py-4 text-left transition-colors text-black hover:text-gray-900"
                        >
                          <span className="font-medium">{faq.question}</span>
                          <span className="text-2xl font-bold" style={{ color: '#00473E' }}>
                            {isOpen ? "-" : "+"}
                          </span>
                        </button>
                        {isOpen && (
                          <div className="pb-4">
                            <p className="text-gray-600">{faq.answer}</p>
                          </div>
                        )}
                      </div>
                    )
                  })}
                </div>
              </div>
            ))
          ) : (
            faqs?.map((faq, index) => {
              const isOpen = openItems.includes(index)
              return (
                <div key={index} className="border-b border-gray-400">
                  <button
                    onClick={() => toggleItem(index)}
                    className="w-full flex justify-between items-center py-4 text-left transition-colors text-black hover:text-gray-900"
                  >
                    <span className="font-medium">{faq.question}</span>
                    <span className="text-2xl font-bold" style={{ color: '#00473E' }}>
                      {isOpen ? "-" : "+"}
                    </span>
                  </button>
                  {isOpen && (
                    <div className="pb-4">
                      <p className="text-gray-600">{faq.answer}</p>
                    </div>
                  )}
                </div>
              )
            })
          )}
        </div>
      </div>
    </section>
  );
}

export default FAQSection;
