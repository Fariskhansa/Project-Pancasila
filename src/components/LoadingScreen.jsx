import { motion } from 'framer-motion'
import { Bot, BookOpen, Sparkles } from 'lucide-react'

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
        {/* Animated icons */}
        <div className="flex items-center gap-4">
          <motion.div
            animate={{ y: [0, -20, 0], rotate: [0, 10, -10, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
            className="w-16 h-16 bg-yellow-brand border-3 border-black rounded-xl shadow-[4px_4px_0px_0px_#000] flex items-center justify-center"
          >
            <Bot size={32} className="text-black" />
          </motion.div>
          <motion.div
            animate={{ y: [0, -20, 0], rotate: [0, -10, 10, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut', delay: 0.2 }}
            className="w-16 h-16 bg-blue-brand border-3 border-black rounded-xl shadow-[4px_4px_0px_0px_#000] flex items-center justify-center"
          >
            <BookOpen size={32} className="text-white" />
          </motion.div>
          <motion.div
            animate={{ y: [0, -20, 0], rotate: [0, 10, -10, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut', delay: 0.4 }}
            className="w-16 h-16 bg-pink-brand border-3 border-black rounded-xl shadow-[4px_4px_0px_0px_#000] flex items-center justify-center"
          >
            <Sparkles size={32} className="text-white" />
          </motion.div>
        </div>

        {/* Title */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="text-3xl md:text-4xl font-bold font-heading text-center"
        >
          AI Learning Hub
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
