import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { 
  Bot, 
  MessageCircle, 
  NotebookPen,
  GraduationCap,
  FileQuestion,
  FileText,
  Presentation,
  Sparkles
} from 'lucide-react'

/**
 * WhyLearnAI - Educational section explaining what AI is and its benefits
 * Features neo-brutalism cards with simple, child-friendly explanations
 */

const introCards = [
  {
    icon: Bot,
    title: 'AI Sebagai Asisten Belajar',
    description: 'AI dapat membantu menjelaskan pelajaran seperti guru pendamping yang siap membantu kapan saja.',
    color: 'bg-yellow-brand',
    textColor: 'text-black',
  },
  {
    icon: MessageCircle,
    title: 'AI Bisa Diajak Bertanya',
    description: 'Anak-anak bisa bertanya tentang pelajaran, tugas sekolah, atau mencari ide belajar dengan bahasa yang sederhana.',
    color: 'bg-blue-brand',
    textColor: 'text-white',
  },
  {
    icon: NotebookPen,
    title: 'AI Membantu Pengajar',
    description: 'Pengajar dapat membuat materi, kuis, dan rangkuman pembelajaran dengan lebih cepat.',
    color: 'bg-green-brand',
    textColor: 'text-white',
  },
]

const benefits = [
  {
    icon: GraduationCap,
    title: 'Belajar Lebih Mandiri',
    color: 'bg-pink-brand',
    textColor: 'text-white',
  },
  {
    icon: FileQuestion,
    title: 'Membuat Kuis Otomatis',
    color: 'bg-yellow-brand',
    textColor: 'text-black',
  },
  {
    icon: FileText,
    title: 'Membuat Ringkasan Materi',
    color: 'bg-purple-brand',
    textColor: 'text-white',
  },
  {
    icon: Presentation,
    title: 'Membantu Media Pembelajaran',
    color: 'bg-orange-brand',
    textColor: 'text-white',
  },
]

// Animation variant for cards
const cardVariants = {
  hidden: { opacity: 0, y: 60 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.1,
      duration: 0.5,
      ease: 'easeOut',
    },
  }),
}

export default function WhyLearnAI({ darkMode }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section id="why-ai" className={`py-20 md:py-28 relative overflow-hidden bg-dots ${
      darkMode ? '' : 'bg-gray-50'
    }`}>
      {/* Floating Sparkles Illustration */}
      <motion.div 
        animate={{ y: [0, -15, 0], rotate: [0, 5, -5, 0] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-20 right-10 md:top-32 md:right-32 opacity-50 hidden md:block"
      >
        <Sparkles size={64} className="text-yellow-brand" />
      </motion.div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" ref={ref}>
        {/* Section 1 Header: Apa Itu AI? */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className={`inline-block px-4 py-1.5 rounded-full border-3 font-heading font-bold text-sm mb-4 ${
            darkMode
              ? 'bg-yellow-brand/20 border-white/20 text-yellow-brand'
              : 'bg-yellow-brand/10 border-black shadow-[3px_3px_0px_0px_#000]'
          }`}>
            Apa Itu AI?
          </span>
          <h2 className="text-3xl md:text-5xl font-heading font-bold mb-6">
            Kenalan Dengan <span className="text-yellow-brand">AI</span>
          </h2>
          <p className={`text-lg md:text-xl max-w-3xl mx-auto leading-relaxed ${
            darkMode ? 'text-gray-300' : 'text-gray-700'
          }`}>
            AI adalah teknologi yang bisa membantu manusia belajar, mencari informasi, membuat soal, merangkum materi, dan banyak hal lainnya dengan lebih cepat dan mudah.
          </p>
        </motion.div>

        {/* Section 1 Cards: Penjelasan Sederhana */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 mb-24">
          {introCards.map((card, index) => (
            <motion.div
              key={index}
              custom={index}
              variants={cardVariants}
              initial="hidden"
              animate={isInView ? 'visible' : 'hidden'}
              className="neo-card p-6 md:p-8 group flex flex-col items-center text-center hover:scale-[1.02] transition-transform duration-300"
            >
              {/* Icon */}
              <div className={`w-16 h-16 rounded-2xl border-3 flex items-center justify-center mb-6 transition-transform group-hover:-translate-y-2 group-hover:rotate-6 group-hover:scale-110 ${
                card.color
              } ${darkMode ? 'border-white/30' : 'border-black shadow-[4px_4px_0px_0px_#000]'}`}>
                <card.icon size={32} className={card.textColor} />
              </div>

              {/* Content */}
              <h3 className="text-xl font-heading font-bold mb-4">
                {card.title}
              </h3>
              <p className={`leading-relaxed ${
                darkMode ? 'text-gray-300' : 'text-gray-600'
              }`}>
                {card.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Section 2 Header: Kenapa Penting? */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-center mb-12"
        >
          <h2 className="text-2xl md:text-4xl font-heading font-bold mb-4">
            Kenapa Belajar <span className="text-blue-brand">AI</span> Itu Penting?
          </h2>
        </motion.div>

        {/* Section 2 Cards: Benefits */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          {benefits.map((benefit, index) => (
            <motion.div
              key={index}
              custom={index + 3} // Add delay after intro cards
              variants={cardVariants}
              initial="hidden"
              animate={isInView ? 'visible' : 'hidden'}
              className="neo-card p-5 md:p-6 group flex items-center gap-4 hover:scale-[1.03] transition-transform duration-300"
            >
              {/* Icon */}
              <div className={`w-12 h-12 shrink-0 rounded-xl border-2 flex items-center justify-center transition-transform group-hover:rotate-12 ${
                benefit.color
              } ${darkMode ? 'border-white/30' : 'border-black shadow-[2px_2px_0px_0px_#000]'}`}>
                <benefit.icon size={24} className={benefit.textColor} />
              </div>

              {/* Content */}
              <h3 className="text-base font-heading font-bold leading-tight">
                {benefit.title}
              </h3>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
