import i18n from "i18next";
import { initReactI18next } from "react-i18next";

// the translations
// (tip move them in a JSON file and import them,
// or even better, manage them separated from your code: https://react.i18next.com/guides/multiple-translation-files)
const resources = {
  en: {
    translation: {
        // Navigation
        "home": "Home",
        "about": "About",
        "contact": "Contact",
        "services": "Services",
        "testimonials": "Testimonials",
        "sponsors": "Sponsors",
        "login": "Login",
        "register": "Sign Up Now",
        "logo": "Mshbak",
        
        // Hero
        "hero.title": "Transform your data into actionable insights",
        "hero.subtitle": "Powerful analytics tools that make data simple and accessible",
        
        // About
        "about.title": "We're here to help you make sense of your data!",
        "about.description1": "We provide powerful analytics tools to help businesses understand their data and make better decisions. Our platform makes complex data analysis simple and accessible for everyone.",
        "about.description2": "Our platform offers a variety of features, including:",
        "about.service1": "Easy file uploads and storage",
        "about.service2": "Customer relationship management",
        "about.service3": "Data analysis and visualization",
        
        // Services
        "services.title": "Services",
        "services.viewAll": "View All",
        "services.requestService": "Request Service",
        "services.service1.title": "File Management System",
        "services.service1.description": "Upload, store, and organize your files securely in one place. Access them anytime, anywhere with our user-friendly interface.",
        "services.service2.title": "Customer Relationship Management",
        "services.service2.description": "Manage your customer relationships efficiently with our CRM system. Track interactions, manage contacts, and improve customer satisfaction.",
        "services.service3.title": "Data Analysis Tools",
        "services.service3.description": "Upload your data files and let our tools analyze them for you. Get insights, trends, and reports to make better business decisions.",
        "services.modal.description1": "Our data analysis tools can process various file formats including Excel, CSV, and PDF. Simply upload your files and our system will automatically analyze the data and generate reports.",
        "services.modal.description2": "Export your data in multiple formats including Excel and PDF. Import data from various sources to keep your analytics up-to-date. Our platform makes data management simple and efficient.",
        
        // Testimonials
        "testimonials.title": "Customer Reviews",
        "testimonials.testimonial1.name": "Saad Siraj",
        "testimonials.testimonial1.text": "I felt like I had a digital consultant helping me plan my project",
        "testimonials.testimonial2.name": "Ahmed Al-Abdullah",
        "testimonials.testimonial2.text": "They provided me with exceptional services that helped me develop my business significantly",
        "testimonials.testimonial3.name": "Noura Al-Khalidi",
        "testimonials.testimonial3.text": "A great experience from start to finish, a professional and cooperative team",
        
        // Sponsors
        "sponsors.title": "Success Partners",
        "sponsors.joinUs": "Join our partners!",
        
        // Footer
        "footer.links": "Links",
        "footer.home": "Home",
        "footer.about": "About Us",
        "footer.services": "Our Services",
        "footer.packages": "Packages",
        "footer.testimonials": "Customer Reviews",
        "footer.contactInfo": "Contact Information",
        "footer.address": "Al Nasr Tower B, AL Dafna, Doha, Qatar",
        "footer.phone": "+974 7727 8478",
        "footer.email": "support@mshbak.com",
        "footer.aboutUs": "About Us",
        "footer.aboutText1": "Mshbak is a comprehensive data analytics platform",
        "footer.aboutText2": "We help businesses transform their data into actionable insights",
        "footer.aboutText3": "Our platform makes data analysis simple and accessible for everyone",
        "footer.copyright": "© Copyright 2024 Mshbak.com All Rights Reserved"
    }
  },
  ar: {
    translation: {
        // Navigation
        "home": "الرئيسية",
        "about": "عنا",
        "contact": "تواصل",
        "services": "خدماتنا",
        "testimonials": "آراء العملاء",
        "sponsors": "الشركاء",
        "login": "تسجيل الدخول",
        "register": "إنشاء حساب",
        "logo": "مشبك",
        
        // Hero
        "hero.title": "حول بياناتك إلى رؤى قابلة للتنفيذ",
        "hero.subtitle": "أدوات تحليلية قوية تجعل البيانات بسيطة وسهلة الوصول",
        
        // About
        "about.title": "نحن هنا لنساعدك في فهم بياناتك!",
        "about.description1": "نحن نقدم أدوات تحليلية قوية لمساعدة الشركات على فهم بياناتها واتخاذ قرارات أفضل. منصتنا تجعل تحليل البيانات المعقد بسيطاً ومتاحاً للجميع.",
        "about.description2": "تقدم منصتنا مجموعة متنوعة من الميزات، بما في ذلك:",
        "about.service1": "رفع وتخزين الملفات بسهولة",
        "about.service2": "إدارة علاقات العملاء",
        "about.service3": "تحليل وتصور البيانات",
        
        // Services
        "services.title": "الخدمات",
        "services.viewAll": "عرض الكل",
        "services.requestService": "طلب الخدمة",
        "services.service1.title": "نظام إدارة الملفات",
        "services.service1.description": "قم برفع وتخزين وتنظيم ملفاتك بأمان في مكان واحد. الوصول إليها في أي وقت وأي مكان من خلال واجهة سهلة الاستخدام.",
        "services.service2.title": "إدارة علاقات العملاء",
        "services.service2.description": "إدارة علاقات عملائك بكفاءة مع نظام إدارة علاقات العملاء لدينا. تتبع التفاعلات وإدارة جهات الاتصال وتحسين رضا العملاء.",
        "services.service3.title": "أدوات تحليل البيانات",
        "services.service3.description": "قم برفع ملفات البيانات الخاصة بك ودع أدواتنا تحللها لك. احصل على رؤى واتجاهات وتقارير لاتخاذ قرارات أعمال أفضل.",
        "services.modal.description1": "يمكن لأدوات تحليل البيانات لدينا معالجة تنسيقات ملفات متنوعة . ما عليك سوى رفع ملفاتك وسيقوم نظامنا بتحليل البيانات وإنشاء التقارير تلقائياً.",
        "services.modal.description2": "قم بتصدير بياناتك بتنسيقات متعددة بما في ذلك Excel وPDF. استيراد البيانات من مصادر متنوعة للحفاظ على تحديث تحليلاتك. منصتنا تجعل إدارة البيانات بسيطة وفعالة.",
        
        // Testimonials
        "testimonials.title": "آراء العملاء",
        "testimonials.testimonial1.name": "سعد سراج",
        "testimonials.testimonial1.text": "شعرت وكأن لدي مستشار رقمياً يساعدني في التخطيط لمشروعي",
        "testimonials.testimonial2.name": "أحمد العبدالله",
        "testimonials.testimonial2.text": "قدموا لي خدمات استثنائية ساعدتني على تطوير أعمالي بشكل كبير",
        "testimonials.testimonial3.name": "نورة الخالدي",
        "testimonials.testimonial3.text": "تجربة رائعة من البداية للنهاية، فريق عمل محترف ومتعاون",
        
        // Sponsors
        "sponsors.title": "شركاء النجاح",
        "sponsors.joinUs": "انضم إلى شركائنا!",
        
        // Footer
        "footer.links": "روابط",
        "footer.home": "الصفحة الرئيسية",
        "footer.about": "من نحن",
        "footer.services": "خدماتنــــا",
        "footer.packages": "الباقـــــات",
        "footer.testimonials": "آراء العملاء",
        "footer.contactInfo": "معلومات التواصل",
        "footer.address": "Al Nasr Tower B, AL Dafna, Doha, Qatar",
        "footer.phone": "+974 7727 8478",
        "footer.email": "support@mshbak.com",
        "footer.aboutUs": "عننا",
        "footer.aboutText1": "مشبك هي منصة شاملة لتحليل البيانات",
        "footer.aboutText2": "نحن نساعد الشركات على تحويل بياناتها إلى رؤى قابلة للتنفيذ",
        "footer.aboutText3": "منصتنا تجعل تحليل البيانات بسيطاً ومتاحاً للجميع",
        "footer.copyright": "© Copyright 2024 Mshbak.com All Rights Reserved"
    }
  }
};

i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    resources,
    lng: "en", // language to use, more information here: https://www.i18next.com/overview/configuration-options#languages-namespaces-resources
    // you can use the i18n.changeLanguage function to change the language manually: https://www.i18next.com/overview/api#changelanguage
    // if you're using a language detector, do not define the lng option

    interpolation: {
      escapeValue: false // react already safes from xss
    }
  });

  export default i18n;