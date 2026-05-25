import { motion } from 'framer-motion'
import { BookOpen, Sparkles } from 'lucide-react'

/**
 * LoadingScreen - Animated loading screen with Neo Brutalism style
 * Shows on initial page load with bouncing icons and progress bar
 */
export default function LoadingScreen() {
  return (
    <motion.div
      className="loading-screen"
      exit={{ opacity: 0, scale: 0.95 }}
      transition={{ duration: 0.5 }}
    >
      <div className="flex flex-col items-center gap-6">
        <div className="flex items-center justify-center">
          <motion.div
            animate={{ y: [0, -20, 0], rotate: [0, 5, -5, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
            className="w-[100px] h-[100px] md:w-[300px] md:h-[300px] flex items-center justify-center drop-shadow-[0_10px_10px_rgba(0,0,0,0.3)]"
          >
            <img src="/image/lwa_logo.png" alt="Learn With AI Logo" className="w-full h-full object-contain" />
          </motion.div>
        </div>

        {/* Title */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="text-3xl md:text-4xl font-bold font-heading text-center"
        >
          Learn With AI
        </motion.h1>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="text-gray-500 text-lg"
        >
          Memuat halaman...
        </motion.p>

        {/* Progress bar */}
        <div className="w-64 h-4 border-3 border-black rounded-full overflow-hidden bg-gray-100">
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: '100%' }}
            transition={{ duration: 2, ease: 'easeInOut' }}
            className="h-full bg-gradient-to-r from-yellow-brand via-blue-brand to-pink-brand rounded-full"
          />
        </div>
      </div>
    </motion.div>
  )
}
