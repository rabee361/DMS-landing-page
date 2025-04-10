import Navbar from './Navbar'
import { TypeAnimation } from 'react-type-animation'
import { useTranslation } from 'react-i18next'

function Hero() {
  const { t, i18n } = useTranslation()
  
  return (
    <div className="relative min-h-screen flex flex-col mt-9">
      <Navbar />
      
      {/* Hero Content */}
      <div className="flex-1 flex items-center justify-center py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 
              className="text-5xl sm:text-6xl md:text-8xl font-bold mb-16 bg-gradient-to-r from-blue-700 via-blue-800 to-blue-900 bg-clip-text text-transparent" 
              style={{ direction: 'rtl' }}
            >
              <div className="leading-tight pb-8">
                <TypeAnimation
                  key={i18n.language}
                  sequence={[
                    t('hero.title'),
                  ]}
                  speed={20} // Slow typing speed (characters per second)
                  style={{ whiteSpace: 'pre-line', display: 'inline-block' }}
                  cursor={true}
                  repeat={1} // Play once (1 is the valid value, not 0)
                />
        </div>
            </h1>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Hero