import { useTranslation } from 'react-i18next'

function Sponsors() {
  const { t } = useTranslation()
  
  return (
    <div className="py-16 bg-white" id="sponsors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold text-blue-900 mb-2">{t('sponsors.title')}</h2>
        </div>
        
        <div className="bg-gray-50 rounded-lg py-12 px-6 shadow-inner">
          <div className="flex flex-wrap justify-center items-center gap-14 md:gap-24">
            {/* Logo 1 */}
            <div className="w-24 h-16 flex items-center justify-center opacity-70 hover:opacity-100 transition-opacity">
              <svg viewBox="0 0 100 50" className="w-full h-full text-gray-400">
                <path d="M30 10C17.85 10 8 19.85 8 32s9.85 22 22 22 22-9.85 22-22S42.15 10 30 10zm0 38c-8.82 0-16-7.18-16-16s7.18-16 16-16 16 7.18 16 16-7.18 16-16 16z" fill="currentColor"/>
              </svg>
            </div>
            
            {/* Logo 2 */}
            <div className="w-24 h-16 flex items-center justify-center opacity-70 hover:opacity-100 transition-opacity">
              <svg viewBox="0 0 100 50" className="w-full h-full text-gray-400">
                <path d="M20 10h60v10H20zM20 25h60v5H20zM20 35h60v5H20z" fill="currentColor"/>
              </svg>
            </div>
            
            {/* Logo 3 */}
            <div className="w-24 h-16 flex items-center justify-center opacity-70 hover:opacity-100 transition-opacity">
              <svg viewBox="0 0 100 50" className="w-full h-full text-orange-500">
                <circle cx="50" cy="25" r="20" fill="none" stroke="currentColor" strokeWidth="5"/>
                <path d="M40 25l5 5 15-15" stroke="currentColor" strokeWidth="5" fill="none"/>
              </svg>
            </div>
            
            {/* Logo 4 */}
            <div className="w-24 h-16 flex items-center justify-center opacity-70 hover:opacity-100 transition-opacity">
              <svg viewBox="0 0 100 50" className="w-full h-full text-gray-400">
                <rect x="20" y="10" width="60" height="30" rx="5" fill="currentColor"/>
                <circle cx="35" cy="25" r="8" fill="white"/>
              </svg>
            </div>
            
            {/* Logo 5 */}
            <div className="w-24 h-16 flex items-center justify-center opacity-70 hover:opacity-100 transition-opacity">
              <svg viewBox="0 0 100 50" className="w-full h-full text-gray-400">
                <path d="M20 10l30 30 30-30" fill="currentColor"/>
              </svg>
            </div>
          </div>
        </div>
        
        <div className="text-center mt-10">
          <a href="#" className="inline-block text-blue-600 hover:text-blue-800 font-medium text-lg">
            {t('sponsors.joinUs')}
          </a>
        </div>


      </div>
    </div>
  )
}

export default Sponsors 