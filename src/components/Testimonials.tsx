import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

function Testimonials() {
    const testimonials = [
        {
            id: 1,
            name: "سعد سراج",
            text: "شعرت وكأن لدي مستشار رقمياً يساعدني في التخطيط لمشروعي",
            image: "https://randomuser.me/api/portraits/men/32.jpg"
        },
        {
            id: 2,
            name: "أحمد العبدالله",
            text: "قدموا لي خدمات استثنائية ساعدتني على تطوير أعمالي بشكل كبير",
            image: "https://randomuser.me/api/portraits/men/41.jpg"
        },
        {   
            id: 3,
            name: "نورة الخالدي",
            text: "تجربة رائعة من البداية للنهاية، فريق عمل محترف ومتعاون",
            image: "https://randomuser.me/api/portraits/women/33.jpg"
        }
    ]

    const [current, setCurrent] = useState(0);

    // Auto-slide every 5 seconds
    useEffect(() => {
        const interval = setInterval(() => {
            setCurrent(prev => (prev + 1) % testimonials.length);
        }, 5000);
        
        return () => clearInterval(interval);
    }, [testimonials.length]);

    // Navigate to a specific slide
    const goToSlide = (index: number) => {
        setCurrent(index);
    };

    // Navigate to the next slide
    const nextSlide = () => {
        setCurrent(prev => (prev + 1) % testimonials.length);
    };

    // Navigate to the previous slide
    const prevSlide = () => {
        setCurrent(prev => (prev === 0 ? testimonials.length - 1 : prev - 1));
    };

    return (
        <div className="bg-white py-16">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                <h2 className="text-5xl font-bold text-center mb-16 text-blue-800">آراء العملاء</h2>
                
                <div className="relative w-full overflow-hidden" style={{ height: "400px" }}>
                    <AnimatePresence mode="wait">
                        <motion.div 
                            key={current}
                            initial={{ opacity: 0, x: 100 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: -100 }}
                            transition={{ duration: 0.5 }}
                            className="absolute w-full h-full"
                        >
                            <div className="flex flex-col items-center justify-center p-8 text-center">
                                <img 
                                    src={testimonials[current].image} 
                                    alt={testimonials[current].name} 
                                    className="w-32 h-32 rounded-full object-cover border-4 border-blue-700 mb-8" 
                                />
                                <h3 className="text-3xl font-bold text-blue-700 mb-2 mt-4">{testimonials[current].name}</h3>
                                <p className="text-xl text-gray-700 max-w-2xl mt-6" style={{ direction: 'rtl' }}>
                                    {testimonials[current].text}
                                </p>
                            </div>
                        </motion.div>
                    </AnimatePresence>

                    {/* Navigation arrows */}
                    <button 
                        onClick={prevSlide}
                        className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-white rounded-full p-2 shadow-md z-10 focus:outline-none"
                        aria-label="Previous testimonial"
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-800" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                        </svg>
                    </button>
                    <button 
                        onClick={nextSlide}
                        className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-white rounded-full p-2 shadow-md z-10 focus:outline-none"
                        aria-label="Next testimonial"
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-800" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                    </button>

                    {/* Indicators */}
                    <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
                        {testimonials.map((_, index) => (
                            <button
                                key={index}
                                onClick={() => goToSlide(index)}
                                className={`w-3 h-3 rounded-full ${index === current ? 'bg-blue-700' : 'bg-gray-300'}`}
                                aria-label={`Go to testimonial ${index + 1}`}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Testimonials