function Footer() {
  return (
    <footer className="bg-white py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="justify-between w-full hidden md:flex">
          {/* Links Section */}
          <div className="text-right">
            <h3 className="text-xl font-bold text-blue-900 mb-3">روابط</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-600 hover:text-blue-600 text-sm">الصفحة الرئيسية</a></li>
              <li><a href="#" className="text-gray-600 hover:text-blue-600 text-sm">من نحن</a></li>
              <li><a href="#" className="text-gray-600 hover:text-blue-600 text-sm">خدماتنــــا</a></li>
              <li><a href="#" className="text-gray-600 hover:text-blue-600 text-sm">الباقـــــات</a></li>
              <li><a href="#" className="text-gray-600 hover:text-blue-600 text-sm">آراء العملاء</a></li>
            </ul>
          </div>

          {/* Contact Info Section */}
          <div className="text-right" >
            <h3 className="text-xl font-bold text-blue-900 mb-3">معلومات التواصل</h3>
            <ul className="space-y-2">
              <li className="flex items-center justify-end gap-2">
                <span className="text-gray-600 text-sm">Al Nasr Tower B, AL Dafna, Doha, Qatar</span>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-blue-600" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                </svg>
              </li>
              <li className="flex items-center justify-end gap-2">
                <span className="text-gray-600 dir-ltr text-sm">+974 7727 8478</span>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-blue-600" viewBox="0 0 20 20" fill="currentColor">
                  <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                </svg>
              </li>
              <li className="flex items-center justify-end gap-2">
                <span className="text-gray-600 text-sm">support@planclicks.com</span>
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
              مؤسسة متخصصة بمجال الأعمال
            </p>
            <p className="text-gray-600 text-sm mb-1">
              نحن نقدم للعملاء مجموعة متنوعة من الخدمات
            </p>
            <p className="text-gray-600 text-sm">
              بما في ذلك نماذج العمل ودراسة الجدوى والخطط التسويقية
            </p>
          </div>
        </div>

        {/* Copyright Section */}
        <div className="mt-6 pt-4 border-t border-gray-200">
          <div className="text-center text-gray-600 text-sm">
            <p>© Copyright 2024 PlanClick.com <span className="text-blue-600">All Rights Reserved</span></p>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer