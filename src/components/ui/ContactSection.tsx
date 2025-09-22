export default function ContactSection() {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:p-6 text-center">
        <div className="bg-white rounded-lg p-6">
          <h3 className="text-lg font-bold mb-4">Still have questions? We're here to help!</h3>
          <div className="flex flex-col sm:flex-row justify-center items-center gap-4 sm:gap-8">
            <p className="flex items-center text-gray-700 text-sm sm:text-base">
              <span className="mr-2">📞</span>
              Call us: +91 123-456-7890
            </p>
            <p className="flex items-center text-gray-700 text-sm sm:text-base">
              <span className="mr-2">✉️</span>
              Email: support@rideeasy.com
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}