import { useNavigate, useLocation } from 'react-router-dom'

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
  { label: 'Services', to: '/services' },
  { label: 'Tours', href: '/#popular-tours' },
  { label: 'About', to: '/about' },
  { label: 'Terms & Conditions', to: '/terms-conditions' }
]

export default function Header({ 
  isMobileMenuOpen, 
  setIsMobileMenuOpen,
  logo = '/images/zolalog.png',
  title = 'ZOLA Adventures',
  navItems = defaultNavItems,
  contactText = 'Contact Us'
}: HeaderProps) {
  const navigate = useNavigate()
  const location = useLocation()
  
  const handleToursClick = (e: React.MouseEvent) => {
    e.preventDefault()
    if (location.pathname === '/') {
      document.getElementById('popular-tours')?.scrollIntoView({ behavior: 'smooth' })
    } else {
      navigate('/')
      setTimeout(() => {
        document.getElementById('popular-tours')?.scrollIntoView({ behavior: 'smooth' })
      }, 100)
    }
  }
  
  const handleNavClick = (to: string) => {
    navigate(to)
    setTimeout(() => {
      window.scrollTo({ top: 0, behavior: 'smooth' })
    }, 100)
  }

  const handleLogoClick = () => {
    if (location.pathname === '/') {
      window.scrollTo({ top: 0, behavior: 'smooth' })
    } else {
      navigate('/')
      setTimeout(() => {
        window.scrollTo({ top: 0, behavior: 'smooth' })
      }, 100)
    }
  }
  return (
    <header className="fixed top-0 w-full bg-gray-100 shadow-sm z-50">
      <div className="max-w-7xl mx-auto px-2 sm:px-4 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center -ml-2 cursor-pointer" onClick={handleLogoClick}>
            <img src={logo} alt={`${title} Logo`} className="w-24 h-24 object-contain mr-1 -ml-2" />
            <span className="text-sm sm:text-lg md:text-xl font-bold text-gray-800 hover:text-gray-600 transition-colors">{title}</span>
          </div>
          <nav className="hidden sm:flex space-x-1 md:space-x-4 lg:space-x-8 text-xs md:text-base">
            {navItems.map((item, index) => (
              item.to ? (
                <button key={index} onClick={() => handleNavClick(item.to!)} className="text-black font-bold hover:text-gray-700">
                  {item.label}
                </button>
              ) : item.label === 'Tours' ? (
                <button key={index} onClick={handleToursClick} className="text-black font-bold hover:text-gray-700">
                  {item.label}
                </button>
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
          
          <button className="hidden sm:flex text-white px-1 sm:px-2 md:px-6 py-1 sm:py-2 rounded-lg sm:rounded-xl items-center hover:scale-105 hover:shadow-lg transition-all duration-300 text-xs sm:text-sm md:text-base whitespace-nowrap font-medium" style={{backgroundColor: '#00473E'}}>
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
                  <button key={index} onClick={() => handleNavClick(item.to!)} className="text-black font-bold hover:text-gray-700">
                    {item.label}
                  </button>
                ) : item.label === 'Tours' ? (
                  <button key={index} onClick={handleToursClick} className="text-black font-bold hover:text-gray-700">
                    {item.label}
                  </button>
                ) : (
                  <a key={index} href={item.href} className="text-black font-bold hover:text-gray-700">
                    {item.label}
                  </a>
                )
              ))}
              <button className="text-white px-4 py-2 rounded-lg flex items-center justify-center" style={{backgroundColor: '#00473E'}}>
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