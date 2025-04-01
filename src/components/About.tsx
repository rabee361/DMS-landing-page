import img1 from "../assets/images/img1.jpg"
import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"

function About() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.3 })
  
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { 
        staggerChildren: 0.2,
        delayChildren: 0.2
      }
    }
  }
  
  const imageVariants = {
    hidden: { x: 100, opacity: 0 },
    visible: { 
      x: 0, 
      opacity: 1,
      transition: { 
        type: "spring", 
        stiffness: 100, 
        damping: 15,
        duration: 0.8
      }
    }
  }
  
  const textVariants = {
    hidden: { x: -100, opacity: 0 },
    visible: { 
      x: 0, 
      opacity: 1,
      transition: { 
        type: "spring", 
        stiffness: 100, 
        damping: 15,
        duration: 0.8
      }
    }
  }
  
  const listItemVariants = {
    hidden: { x: -50, opacity: 0 },
    visible: { 
      x: 0, 
      opacity: 1,
      transition: { 
        type: "spring", 
        stiffness: 100, 
        damping: 15
      }
    }
  }

  return (
    <div className="py-20 bg-gray-50" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 flex  sm:px-6 lg:px-8">
        <motion.div 
          className="flex flex-col lg:flex-row-reverse items-center gap-12"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {/* Image placeholder - to be added later */}
          <motion.div 
            className="lg:w-1/2"
            variants={imageVariants}
          >
            <div className="relative">
              <img src={img1} alt="" className="rounded-lg shadow-xl" />
            </div>
          </motion.div>

          {/* Text Content */}
          <motion.div 
            className="lg:w-1/2 text-right"
            variants={textVariants}
          >
            <motion.h2 
              className="text-4xl font-bold text-blue-900 mb-6"
              variants={textVariants}
            >
              نحن هنا لنساعدك في تطبيق فكرتك!
            </motion.h2>
            <div className="space-y-4 text-gray-600">
              <motion.p 
                className="text-lg"
                variants={textVariants}
              >
                نحن نقدم مجموعة من الخدمات لمساعدة الشركات الصغيرة على النمو والنجاح. يتكون فريقنا من محترفين ذوي خبرة مكرسين لمساعدة عملائنا على تحقيق أهدافهم.
              </motion.p>
              <motion.p 
                className="text-lg"
                variants={textVariants}
              >
                نحن نقدم للعملاء مجموعة متنوعة من الخدمات، بما في ذلك:
              </motion.p>
              <motion.ul 
                className="space-y-2 mr-6"
                variants={containerVariants}
              >
                <motion.li 
                  className="flex items-center justify-end gap-2"
                  variants={listItemVariants}
                >
                  <span>نماذج العمل المتخصصة</span>
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-blue-600" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                </motion.li>
                <motion.li 
                  className="flex items-center justify-end gap-2"
                  variants={listItemVariants}
                >
                  <span>دراسات الجدوى الاقتصادية</span>
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-blue-600" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                </motion.li>
                <motion.li 
                  className="flex items-center justify-end gap-2"
                  variants={listItemVariants}
                >
                  <span>الخطط التسويقية المتكاملة</span>
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-blue-600" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                </motion.li>
              </motion.ul>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  )
}

export default About