import { useTranslation } from 'react-i18next';

function LanguageToggle() {
    const { i18n } = useTranslation();
    const toggleLanguage = () => {
        i18n.changeLanguage(i18n.language === 'en' ? 'ar' : 'en');
    };


  return (
        <button 
            onClick={toggleLanguage}
            className="flex items-center space-x-1 px-3 py-2 text-white bg-blue-600 transition-all duration-300 rounded-md text-sm font-medium"
        >
            <span>{i18n.language === 'en' ? 'العربية' : 'English'}</span>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5h12M9 3v2m1.048 9.5A18.022 18.022 0 016.412 9m6.088 9h7M11 21l5-10 5 10M12.751 5C11.783 10.77 8.07 15.61 3 18.129" />
            </svg>
        </button>
  )
}

export default LanguageToggle