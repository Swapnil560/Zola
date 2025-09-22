export default function Footer() {
  return (
    <footer className="bg-black text-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4">ZOLA Adventures</h3>
            <p className="text-gray-300">ZOLA Adventures offers bikes, cabs, tempo travellers, and self-drive cars across Guwahati and the Northeast. Experience reliable, safe, and comfortable journeys with our well-maintained fleet.</p>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">About</h3>
            <ul className="space-y-2 text-gray-300">
              <li><a href="#" className="hover:text-white">Who We Are</a></li>
              <li><a href="#" className="hover:text-white">Our Services</a></li>
              <li><a href="#" className="hover:text-white">Why Choose Us</a></li>
              <li><a href="#" className="hover:text-white">Contact</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Bookings</h3>
            <ul className="space-y-2 text-gray-300">
              <li><a href="#" className="hover:text-white">Rent a Bike</a></li>
              <li><a href="#" className="hover:text-white">Rent a Cab</a></li>
              <li><a href="#" className="hover:text-white">Rent a Tempo Traveller</a></li>
              <li><a href="#" className="hover:text-white">Rent a Self-Drive Car</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Support</h3>
            <ul className="space-y-2 text-gray-300">
              <li><a href="#" className="hover:text-white">FAQs</a></li>
              <li><a href="#" className="hover:text-white">Booking & Cancellation Policy</a></li>
              <li><a href="#" className="hover:text-white">Payments & Refunds</a></li>
              <li><a href="#" className="hover:text-white">Terms & Conditions</a></li>
            </ul>
          </div>
        </div>
        <div className="border-t border-gray-600 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0">
              <h4 className="font-semibold mb-2 text-white">Follow Us</h4>
              <div className="flex space-x-4">
                <a href="#" className="text-gray-400 hover:text-blue-600"><img src="/images/facebook.png" alt="Facebook" className="w-6 h-6" /></a>
                <a href="#" className="text-gray-400 hover:text-pink-500"><img src="/images/in.png" alt="Instagram" className="w-6 h-6" /></a>
                <a href="#" className="text-gray-400 hover:text-black"><img src="/images/x1.png" alt="X" className="w-6 h-6" /></a>
                <a href="#" className="text-gray-400 hover:text-red-600"><img src="/images/ytr.png" alt="YouTube" className="w-6 h-6" /></a>
              </div>
            </div>
            <p className="text-gray-300">© 2025 ZOLA Adventures. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  )
}