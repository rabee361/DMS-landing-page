import { useState, useRef } from 'react'
import { motion, AnimatePresence, useInView } from 'framer-motion'
import img1 from '../assets/images/img1.jpg'
import img2 from '../assets/images/img2.avif'
import img3 from '../assets/images/img3.webp'
import { useTranslation } from 'react-i18next'

function Services() {
  const [selectedId, setSelectedId] = useState<number | null>(null)
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })
  const { t } = useTranslation()

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2
      }
    }
  }

  const cardVariants = {
    hidden: { x: -100, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 12,
        duration: 0.3
      }
    }
  }

  // Animation for modal backdrop
  const backdropVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { duration: 0.2 }
    },
    exit: { 
      opacity: 0,
      transition: { duration: 0.2 }
    }
  }

  // Animation for modal content
  const modalVariants = {
    hidden: { scale: 0.8, opacity: 0 },
    visible: { 
      scale: 1, 
      opacity: 1,
      transition: { 
        type: "spring",
        damping: 25,
        stiffness: 300,
        duration: 0.2
      }
    },
    exit: { 
      scale: 0.8, 
      opacity: 0,
      transition: { 
        duration: 0.2
      }
    }
  }

  const services = [
    {
      id: 1,
      title: t('services.service1.title'),
      description: t('services.service1.description'),
      image: img1
    },
    {
      id: 2,
      title: t('services.service2.title'),
      description: t('services.service2.description'),
      image: img2
    },
    {
      id: 3,
      title: t('services.service3.title'),
      description: t('services.service3.description'),
      image: img3
    }
  ]

  const findService = (id: number) => {
    return services.find(service => service.id === id)
  }

  return (
    <div className="py-16 bg-white" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center text-center mb-12">
          <h2 className="text-5xl font-bold text-blue-900 mb-4">{t('services.title')}</h2>
          <div className="flex justify-center w-full">
            <a href="#" className="text-blue-600 hover:text-blue-800 font-medium text-lg">{t('services.viewAll')}</a>
          </div>
        </div>

        {/* Cards Section */}
        <motion.div 
          className="flex flex-col md:flex-row gap-8 justify-center items-center"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {services.map((service) => (
            <motion.div 
              layoutId={`service-container-${service.id}`}
              onClick={() => setSelectedId(service.id)}
              key={service.id} 
              className="bg-white rounded-lg shadow-lg overflow-hidden transform transition duration-300 hover:scale-105 hover:shadow-xl hover:border-blue-200 border-2 border-transparent cursor-pointer w-full max-w-xs flex flex-col h-[32rem]"
              variants={cardVariants}
            >
              <motion.div layoutId={`service-image-${service.id}`} className="h-56 relative overflow-hidden">
                <motion.img 
                  layoutId={`service-img-${service.id}`}
                  src={service.image} 
                  alt={service.title} 
                  className="w-full h-full object-cover transition duration-300"
                />
              </motion.div>
              <motion.div layoutId={`service-content-${service.id}`} className="p-6 text-right flex flex-col flex-1">
                <div className="flex-1">
                  <motion.h3 layoutId={`service-title-${service.id}`} className="text-xl font-bold text-blue-900 mb-3 line-clamp-2">{service.title}</motion.h3>
                  <motion.p layoutId={`service-desc-${service.id}`} className="text-gray-600 mb-4 line-clamp-4">{service.description}</motion.p>
                </div>
                <motion.a 
                  layoutId={`service-link-${service.id}`}
                  href="#" 
                  className="px-2 py-2 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 flex justify-center items-center transition duration-300"
                  onClick={(e) => e.stopPropagation()}
                >
                  {t('services.requestService')}
                </motion.a>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>

        <AnimatePresence mode="wait">
          {selectedId && (
            <>
              <motion.div
                key="backdrop"
                variants={backdropVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
                onClick={() => setSelectedId(null)}
                className="fixed inset-0 backdrop-blur-sm bg-black/40 z-40 flex items-center justify-center"
                style={{ backdropFilter: 'blur(8px)' }}
              />
              <div className="fixed inset-0 z-50 overflow-y-auto flex items-center justify-center">
                <motion.div 
                  key="modal"
                  variants={modalVariants}
                  initial="hidden"
                  animate="visible"
                  exit="exit"
                  className="relative w-full max-w-3xl mx-auto"
                >
                  {selectedId && (
                    <div className="bg-white rounded-lg shadow-2xl overflow-hidden mx-4 my-8 flex flex-col md:flex-row-reverse">
                      <div className="relative w-full md:w-2/5">
                        <div className="h-28 md:h-full relative">
                          <img 
                            src={findService(selectedId)?.image} 
                            alt={findService(selectedId)?.title} 
                            className="w-full h-full object-cover"
                          />
                        </div>
                        <button
                          className="absolute top-4 right-4 bg-white rounded-full p-2 shadow-lg z-10"
                          onClick={() => setSelectedId(null)}
                        >
                          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <line x1="18" y1="6" x2="6" y2="18"></line>
                            <line x1="6" y1="6" x2="18" y2="18"></line>
                          </svg>
                        </button>
                      </div>
                      <div className="p-4 md:p-8 text-right w-full md:w-3/5 flex flex-col">
                        <div className="flex-grow">
                          <h2 className="text-xl md:text-2xl font-bold text-blue-900 mb-2 md:mb-4">
                            {findService(selectedId)?.title}
                          </h2>
                          <p className="text-gray-600 mb-3 md:mb-6 text-sm md:text-base">
                            {findService(selectedId)?.description}
                          </p>
                          <div>
                            <p className="text-gray-700 mb-2 md:mb-4 text-xs md:text-sm">
                              {t('services.modal.description1')}
                            </p>
                            <p className="text-gray-700 mb-3 md:mb-6 text-xs md:text-sm">
                              {t('services.modal.description2')}
                            </p>
                          </div>
                        </div>
                        <button
                          className="mt-2 md:mt-4 px-4 md:px-6 py-2 bg-blue-600 text-white font-medium rounded-lg flex justify-center items-center hover:bg-blue-700 transition duration-300 text-sm md:text-base"
                        >
                          {t('services.requestService')}
                        </button>
                      </div>
                    </div>
                  )}
                </motion.div>
              </div>
            </>
          )}
        </AnimatePresence>
      </div>
    </div>
  )
}

export default Services