import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import {
  ArrowLeft,
  Lightbulb,
  CheckCircle2,
  MessageSquare,
  Sparkles,
  ExternalLink,
  Image as ImageIcon,
  Copy,
  Check
} from 'lucide-react'

export default function TutorialLayout({ tutorial, darkMode }) {
  const navigate = useNavigate()
  const [copiedIndex, setCopiedIndex] = useState(null)

  const handleCopy = (text, index) => {
    navigator.clipboard.writeText(text)
    setCopiedIndex(index)
    setTimeout(() => setCopiedIndex(null), 2000)
  }
  
  // Scroll to top on mount
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  if (!tutorial) {
    return (
      <div className={`min-h-[70vh] flex flex-col items-center justify-center p-8 ${darkMode ? 'bg-dark text-white' : 'bg-gray-50'}`}>
        <h2 className="text-3xl font-heading font-bold mb-4">Tutorial Tidak Ditemukan</h2>
        <button 
          onClick={() => navigate('/')}
          className={`neo-btn px-6 py-3 ${darkMode ? 'bg-white text-black' : 'bg-white text-black'}`}
        >
          Kembali ke Beranda
        </button>
      </div>
    )
  }

  return (
    <div className={`min-h-screen pt-20 md:pt-28 pb-12 md:pb-20 ${darkMode ? 'bg-dark text-white' : 'bg-gray-50 text-gray-900'}`}>
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Back Button */}
        <button
          onClick={() => navigate(-1)}
          className={`group flex items-center gap-2 mb-6 md:mb-8 px-4 py-2 rounded-xl font-bold transition-all ${
            darkMode 
              ? 'hover:bg-white/10 text-gray-300 hover:text-white' 
              : 'hover:bg-gray-200 text-gray-600 hover:text-black'
          }`}
        >
          <ArrowLeft size={20} className="transition-transform group-hover:-translate-x-1" />
          Kembali
        </button>

        {/* Hero Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className={`neo-card p-5 sm:p-6 md:p-10 mb-6 md:mb-8 border-4 ${
            darkMode ? 'bg-dark-card border-white/20' : 'bg-white border-black'
          }`}
        >
          <div className="flex flex-col md:flex-row items-start md:items-center gap-4 md:gap-6 mb-6 md:mb-8">
            <div className={`w-16 h-16 md:w-20 md:h-20 rounded-2xl border-4 flex items-center justify-center shrink-0 ${
              tutorial.color
            } ${darkMode ? 'border-white/30' : 'border-black shadow-[4px_4px_0px_0px_#000]'}`}>
              <tutorial.icon size={36} className={tutorial.iconColor} />
            </div>
            <div>
              <span className={`inline-block px-3 py-1 text-sm font-bold border-2 rounded-lg mb-3 ${
                darkMode ? 'border-white/30 text-gray-300' : 'border-black text-gray-700'
              }`}>
                {tutorial.duration}
              </span>
              <h1 className="text-2xl sm:text-3xl md:text-4xl font-heading font-bold leading-tight">
                {tutorial.title}
              </h1>
            </div>
          </div>
          <p className={`text-base md:text-lg leading-relaxed ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
            {tutorial.description}
          </p>
        </motion.div>

        {/* Image/Screenshot Placeholder Area */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className={`w-full aspect-video rounded-2xl border-4 flex flex-col items-center justify-center gap-3 md:gap-4 mb-8 md:mb-10 overflow-hidden ${
            darkMode ? 'bg-white/5 border-white/20' : 'bg-gray-100 border-black shadow-[4px_4px_0px_0px_#000] md:shadow-[6px_6px_0px_0px_#000]'
          }`}
        >
          <ImageIcon className={`w-10 h-10 md:w-12 md:h-12 ${darkMode ? 'text-gray-500' : 'text-gray-400'}`} />
          <span className={`font-mono text-xs md:text-sm ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>
            Area Gambar/Screenshot
          </span>
          {/* TO DO: Replace this div with actual <img src="..." alt="..." className="w-full h-full object-cover" /> when ready */}
        </motion.div>

        {/* Content Modules */}
        <div className="space-y-6 md:space-y-8">
          
          {/* Overview */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className={`neo-card p-5 sm:p-6 md:p-8 ${darkMode ? 'bg-dark-card border-white/20' : 'bg-white'}`}
          >
            <h2 className="text-lg md:text-xl font-heading font-bold mb-3 md:mb-4 flex items-center gap-2">
              <Lightbulb className="w-5 h-5 md:w-6 md:h-6 text-yellow-brand" /> 
              Penjelasan Singkat
            </h2>
            <p className={`leading-relaxed text-base md:text-lg ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
              {tutorial.details.aiUsage}
            </p>
          </motion.div>

          {/* Steps */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className={`neo-card p-5 sm:p-6 md:p-8 ${darkMode ? 'bg-dark-card border-white/20' : 'bg-white'}`}
          >
            <h2 className="text-lg md:text-xl font-heading font-bold mb-4 md:mb-6 flex items-center gap-2">
              <CheckCircle2 className="w-5 h-5 md:w-6 md:h-6 text-green-brand" /> 
              Langkah-Langkah
            </h2>
            <div className="space-y-3 md:space-y-4">
              {tutorial.details.steps.map((step, idx) => (
                <div key={idx} className={`flex items-start gap-3 md:gap-4 p-4 md:p-5 rounded-xl border-3 ${
                  darkMode ? 'bg-white/5 border-white/10' : 'bg-gray-50 border-black/10'
                }`}>
                  <div className={`w-8 h-8 md:w-10 md:h-10 rounded-full border-3 flex items-center justify-center shrink-0 font-bold text-base md:text-lg ${
                    darkMode ? 'border-white/20 bg-dark-card text-white' : 'border-black bg-white shadow-[2px_2px_0px_0px_#000] text-black'
                  }`}>
                    {idx + 1}
                  </div>
                  <p className="pt-1 md:pt-1.5 text-base md:text-lg leading-relaxed">{step}</p>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Prompts */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className={`neo-card p-5 sm:p-6 md:p-8 ${darkMode ? 'bg-dark-card border-white/20' : 'bg-white'}`}
          >
            <h2 className="text-lg md:text-xl font-heading font-bold mb-4 md:mb-6 flex items-center gap-2">
              <MessageSquare className="w-5 h-5 md:w-6 md:h-6 text-blue-brand" /> 
              Contoh Prompt Siap Pakai
            </h2>
            <div className="space-y-3 md:space-y-4">
              {tutorial.details.prompts.map((prompt, idx) => (
                <div key={idx} className={`relative p-4 md:p-5 pr-12 md:pr-14 rounded-xl border-3 font-mono text-sm md:text-[15px] leading-relaxed break-words group ${
                  darkMode ? 'bg-black/50 border-white/20 text-gray-300' : 'bg-[#f4f4f4] border-black text-gray-800'
                }`}>
                  "{prompt}"
                  <button
                    onClick={() => handleCopy(prompt, idx)}
                    className={`absolute right-3 top-3 md:right-4 md:top-4 p-1.5 md:p-2 rounded-lg border-2 transition-all ${
                      copiedIndex === idx 
                        ? 'bg-green-brand text-black border-black shadow-[2px_2px_0px_0px_#000]' 
                        : darkMode 
                          ? 'bg-dark-card border-white/20 hover:bg-white/10 text-gray-300' 
                          : 'bg-white border-black hover:bg-gray-100 text-black shadow-[2px_2px_0px_0px_#000] active:translate-x-[2px] active:translate-y-[2px] active:shadow-none'
                    }`}
                    title="Copy prompt"
                  >
                    {copiedIndex === idx ? <Check size={16} /> : <Copy size={16} />}
                  </button>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Tips */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className={`p-5 sm:p-6 rounded-2xl border-4 shadow-[4px_4px_0px_0px_#000] md:shadow-[6px_6px_0px_0px_#000] ${
              darkMode ? 'bg-yellow-brand/10 border-yellow-brand/30 shadow-none' : 'bg-yellow-brand/20 border-black'
            }`}
          >
            <h2 className="text-lg md:text-xl font-heading font-bold mb-2 md:mb-3 flex items-center gap-2">
              <Sparkles className={`w-5 h-5 md:w-[22px] md:h-[22px] ${darkMode ? 'text-yellow-brand' : 'text-black'}`} />
              Tips Tambahan
            </h2>
            <p className={`text-base md:text-lg leading-relaxed ${darkMode ? 'text-gray-300' : 'text-gray-800'}`}>
              {tutorial.details.tips}
            </p>
          </motion.div>

          {/* CTA Link */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="pt-2 md:pt-4 flex justify-center md:justify-end pb-8"
          >
            <a
              href={tutorial.link}
              target="_blank"
              rel="noopener noreferrer"
              className={`neo-btn px-6 md:px-8 py-3 md:py-4 text-base md:text-lg flex items-center justify-center gap-2 md:gap-3 w-full sm:w-auto ${tutorial.color} ${tutorial.iconColor}`}
            >
              Buka Aplikasi Sekarang <ExternalLink className="w-4 h-4 md:w-5 md:h-5" />
            </a>
          </motion.div>

        </div>
      </div>

      {/* Toast Notification */}
      <AnimatePresence>
        {copiedIndex !== null && (
          <motion.div
            initial={{ opacity: 0, y: 50, x: '-50%' }}
            animate={{ opacity: 1, y: 0, x: '-50%' }}
            exit={{ opacity: 0, y: 50, x: '-50%' }}
            className={`fixed bottom-8 left-1/2 px-6 py-3 rounded-xl border-3 flex items-center gap-3 z-50 font-bold ${
              darkMode 
                ? 'bg-green-brand text-black border-white shadow-[4px_4px_0px_0px_rgba(255,255,255,0.5)]' 
                : 'bg-green-brand text-black border-black shadow-[4px_4px_0px_0px_#000]'
            }`}
          >
            <Check size={20} />
            Prompt Berhasil Di Copy!
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
