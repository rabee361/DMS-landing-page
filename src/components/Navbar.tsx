import { useEffect, useState } from 'react'

function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [activeSection, setActiveSection] = useState('home')
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsScrolled(true)
      } else {
        setIsScrolled(false)
      }

      // Determine which section is currently in view
      const sections = ['home', 'about', 'services', 'testimonials', 'sponsors']

      for (const section of sections) {
        const element = document.getElementById(section)
        if (element) {
          const { top, bottom } = element.getBoundingClientRect()
          if (top <= 150 && bottom >= 150) {
            setActiveSection(section)
            break
          }
        }
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      // Calculate offset based on navbar height and some padding
      const offset = 80
      const elementPosition = element.getBoundingClientRect().top + window.scrollY
      const offsetPosition = elementPosition - offset

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      })
      
      // Close mobile menu after clicking a link
      setIsMenuOpen(false)
    }
  }

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  return (
    <div className="fixed top-0 left-0 right-0 z-50 px-4 md:px-36 pt-5">
      <nav className={`max-w-4xl mx-auto rounded-xl transition-all duration-300 border-2 border-gray-100 ${
        isScrolled ? 'bg-white/80 backdrop-blur-sm shadow-xl border-0' : 'bg-white shadow-lg'
      }`}>
        <div className="px-4 sm:px-6">
          <div className="flex items-center justify-between h-16">
            
            {/* Hamburger Menu Button (visible on small screens) */}
            <div className="lg:hidden">
              <button 
                onClick={toggleMenu}
                className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-blue-600 hover:bg-blue-100 focus:outline-none"
                aria-expanded={isMenuOpen}
              >
                <span className="sr-only">Open main menu</span>
                {/* Hamburger icon */}
                <svg 
                  className={`${isMenuOpen ? 'hidden' : 'block'} h-6 w-6`} 
                  xmlns="http://www.w3.org/2000/svg" 
                  fill="none" 
                  viewBox="0 0 24 24" 
                  stroke="currentColor" 
                  aria-hidden="true"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
                {/* X icon when menu is open */}
                <svg 
                  className={`${isMenuOpen ? 'block' : 'hidden'} h-6 w-6`} 
                  xmlns="http://www.w3.org/2000/svg" 
                  fill="none" 
                  viewBox="0 0 24 24" 
                  stroke="currentColor" 
                  aria-hidden="true"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            {/* Navigation Links (visible on larger screens) */}
            <div className="hidden lg:block">
              <div className="text-nowrap flex items-center space-x-4 mr-2">
                <a href="#" className="text-gray-700 hover:bg-blue-200 hover:scale-105 transition-all duration-300 px-3 py-2 rounded-md text-sm font-medium">تسجيل الدخول</a>
                <a href="#" className="text-white bg-blue-600 hover:scale-105 transition-all duration-300 px-3 py-2 rounded-md text-sm font-medium">إنشاء حساب</a>
                <a 
                  href="#" 
                  onClick={(e) => { e.preventDefault(); scrollToSection('home'); }}
                  className={`${activeSection === 'home' ? 'text-blue-600' : 'text-gray-700'} hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium transition-all duration-300`}
                >
                  الصفحة الرئيسية
                </a>
                <a 
                  href="#" 
                  onClick={(e) => { e.preventDefault(); scrollToSection('services'); }}
                  className={`${activeSection === 'services' ? 'text-blue-600' : 'text-gray-700'} hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium transition-all duration-300`}
                >
                  خدماتنا
                </a>
                <a 
                  href="#" 
                  onClick={(e) => { e.preventDefault(); scrollToSection('about'); }}
                  className={`${activeSection === 'about' ? 'text-blue-600' : 'text-gray-700'} hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium transition-all duration-300`}
                >
                  من نحن
                </a>
                <a 
                  href="#" 
                  onClick={(e) => { e.preventDefault(); scrollToSection('testimonials'); }}
                  className={`${activeSection === 'testimonials' ? 'text-blue-600' : 'text-gray-700'} hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium transition-all duration-300`}
                >
                  آراء العملاء
                </a>
                <a 
                  href="#" 
                  onClick={(e) => { e.preventDefault(); scrollToSection('sponsors'); }}
                  className={`${activeSection === 'sponsors' ? 'text-blue-600' : 'text-gray-700'} hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium transition-all duration-300`}
                >
                  الشركاء
                </a>
              </div>
            </div>

            {/* Logo (always visible, right-aligned) */}
            <div className="flex-shrink-0 hover:scale-105 transition-all duration-300 order-last">
              <span className="text-2xl font-bold text-blue-900">مشبك</span>
            </div>

          </div>
        </div>

        {/* Mobile menu dropdown */}
        <div 
          className={`sm:hidden overflow-hidden transition-all duration-400 ease-in-out ${
            isMenuOpen 
              ? 'max-h-96 opacity-100'  
              : 'max-h-0 opacity-0'
          }`}
        >
          <div className="px-2 pt-2 pb-3 space-y-1 border-t border-gray-200">
            <a 
              href="#" 
              onClick={(e) => { e.preventDefault(); scrollToSection('home'); }}
              className={`${activeSection === 'home' ? 'bg-blue-100 text-blue-600' : 'text-gray-700'} block px-3 py-2 rounded-md text-base font-medium text-right`}
            >
              الصفحة الرئيسية
            </a>
            <a 
              href="#" 
              onClick={(e) => { e.preventDefault(); scrollToSection('services'); }}
              className={`${activeSection === 'services' ? 'bg-blue-100 text-blue-600' : 'text-gray-700'} block px-3 py-2 rounded-md text-base font-medium text-right`}
            >
              خدماتنا
            </a>
            <a 
              href="#" 
              onClick={(e) => { e.preventDefault(); scrollToSection('about'); }}
              className={`${activeSection === 'about' ? 'bg-blue-100 text-blue-600' : 'text-gray-700'} block px-3 py-2 rounded-md text-base font-medium text-right`}
            >
              من نحن
            </a>
            <a 
              href="#" 
              onClick={(e) => { e.preventDefault(); scrollToSection('testimonials'); }}
              className={`${activeSection === 'testimonials' ? 'bg-blue-100 text-blue-600' : 'text-gray-700'} block px-3 py-2 rounded-md text-base font-medium text-right`}
            >
              آراء العملاء
            </a>
            <a 
              href="#" 
              onClick={(e) => { e.preventDefault(); scrollToSection('sponsors'); }}
              className={`${activeSection === 'sponsors' ? 'bg-blue-100 text-blue-600' : 'text-gray-700'} block px-3 py-2 rounded-md text-base font-medium text-right`}
            >
              الشركاء
            </a>
            <div className="flex flex-col space-y-2 pt-2">
              <a href="#" className="text-gray-700 hover:bg-blue-100 px-3 py-2 rounded-md text-base font-medium text-right">تسجيل الدخول</a>
              <a href="#" className="text-white bg-blue-600 px-3 py-2 rounded-md text-base font-medium text-center">إنشاء حساب</a>
            </div>
          </div>
        </div>
      </nav>
    </div>
  )
}

export default Navbar
