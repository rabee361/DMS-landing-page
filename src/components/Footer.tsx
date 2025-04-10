import { useTranslation } from 'react-i18next'

function Footer() {
  const { t } = useTranslation()
  
  return (
    <footer className="bg-white py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="justify-between w-full hidden md:flex">
          {/* Links Section */}
          <div className="text-right">
            <h3 className="text-xl font-bold text-blue-900 mb-3">{t('footer.links')}</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-600 hover:text-blue-600 text-sm">{t('footer.home')}</a></li>
              <li><a href="#" className="text-gray-600 hover:text-blue-600 text-sm">{t('footer.about')}</a></li>
              <li><a href="#" className="text-gray-600 hover:text-blue-600 text-sm">{t('footer.services')}</a></li>
              <li><a href="#" className="text-gray-600 hover:text-blue-600 text-sm">{t('footer.packages')}</a></li>
              <li><a href="#" className="text-gray-600 hover:text-blue-600 text-sm">{t('footer.testimonials')}</a></li>
            </ul>
          </div>

          {/* Contact Info Section */}
          <div className="text-right" >
            <h3 className="text-xl font-bold text-blue-900 mb-3">{t('footer.contactInfo')}</h3>
            <ul className="space-y-2">
              <li className="flex items-center justify-end gap-2">
                <span className="text-gray-600 text-sm">{t('footer.address')}</span>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-blue-600" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                </svg>
              </li>
              <li className="flex items-center justify-end gap-2">
                <span className="text-gray-600 dir-ltr text-sm">{t('footer.phone')}</span>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-blue-600" viewBox="0 0 20 20" fill="currentColor">
                  <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                </svg>
              </li>
              <li className="flex items-center justify-end gap-2">
                <span className="text-gray-600 text-sm">{t('footer.email')}</span>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-blue-600" viewBox="0 0 20 20" fill="currentColor">
                  <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                  <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                </svg>
              </li>
            </ul>
          </div>

          {/* About Section */}
          <div className="text-right">
            <img src="/plan-click-logo.png" alt="Plan Click" className="h-10 mb-3" />
            <p className="text-gray-600 text-sm mb-1">
              {t('footer.aboutText1')}
            </p>
            <p className="text-gray-600 text-sm mb-1">
              {t('footer.aboutText2')}
            </p>
            <p className="text-gray-600 text-sm">
              {t('footer.aboutText3')}
            </p>
          </div>
        </div>

        {/* Copyright Section */}
        <div className="mt-6 pt-4 border-t border-gray-200">
          <div className="text-center text-gray-600 text-sm">
            <p>{t('footer.copyright')}</p>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer