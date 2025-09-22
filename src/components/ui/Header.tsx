import { Link } from 'react-router-dom'

interface NavItem {
  label: string
  href?: string
  to?: string
}

interface HeaderProps {
  isMobileMenuOpen: boolean
  setIsMobileMenuOpen: (open: boolean) => void
  logo?: string
  title?: string
  navItems?: NavItem[]
  contactText?: string
}

const defaultNavItems: NavItem[] = [
  { label: 'Home', to: '/' },
  { label: 'Services', href: '#' },
  { label: 'Tours', to: '/tours' },
  { label: 'About', href: '#' },
  { label: 'Terms', href: '#' }
]

export default function Header({ 
  isMobileMenuOpen, 
  setIsMobileMenuOpen,
  logo = '/images/logo.png',
  title = 'ZOLA Adventures',
  navItems = defaultNavItems,
  contactText = 'Contact Us'
}: HeaderProps) {
  return (
    <header className="fixed top-0 w-full bg-gray-100 shadow-sm z-50">
      <div className="max-w-7xl mx-auto px-2 sm:px-4 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <img src={logo} alt={`${title} Logo`} className="w-12 h-12 mr-3" />
            <span className="text-sm sm:text-lg md:text-xl font-bold text-gray-800">{title}</span>
          </div>
          <nav className="hidden sm:flex space-x-1 md:space-x-4 lg:space-x-8 text-xs md:text-base">
            {navItems.map((item, index) => (
              item.to ? (
                <Link key={index} to={item.to} className="text-black font-bold hover:text-gray-700">
                  {item.label}
                </Link>
              ) : (
                <a key={index} href={item.href} className="text-black font-bold hover:text-gray-700">
                  {item.label}
                </a>
              )
            ))}
          </nav>
          
          <button 
            className="sm:hidden flex flex-col space-y-1 p-1"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            <span className="w-4 h-0.5 bg-green-600 rounded"></span>
            <span className="w-4 h-0.5 bg-green-600 rounded"></span>
            <span className="w-4 h-0.5 bg-green-600 rounded"></span>
          </button>
          
          <button className="hidden sm:flex text-black px-1 sm:px-2 md:px-6 py-1 sm:py-2 rounded-lg sm:rounded-xl items-center hover:scale-105 hover:shadow-lg transition-all duration-300 text-xs sm:text-sm md:text-base whitespace-nowrap font-medium bg-gray-300">
            <img src="/images/tel.png" alt="Phone" className="w-4 h-4 mr-1" />
            <span className="hidden sm:inline">{contactText}</span>
          </button>
        </div>
      </div>
      
      {isMobileMenuOpen && (
        <div className="sm:hidden bg-gray-100 border-t border-gray-200 relative z-50">
          <div className="max-w-7xl mx-auto px-4 py-4">
            <nav className="flex flex-col space-y-4">
              {navItems.map((item, index) => (
                item.to ? (
                  <Link key={index} to={item.to} className="text-black font-bold hover:text-gray-700">
                    {item.label}
                  </Link>
                ) : (
                  <a key={index} href={item.href} className="text-black font-bold hover:text-gray-700">
                    {item.label}
                  </a>
                )
              ))}
              <button className="text-black px-4 py-2 rounded-lg flex items-center justify-center bg-gray-400">
                <img src="/images/tel.png" alt="Phone" className="w-4 h-4 mr-2" />
                {contactText}
              </button>
            </nav>
          </div>
        </div>
      )}
    </header>
  )
}