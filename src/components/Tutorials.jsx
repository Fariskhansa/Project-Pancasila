import { useState, useRef } from 'react'
import { motion, useInView, AnimatePresence } from 'framer-motion'
import {
  Video,
  Headphones,
  FileQuestion,
  Sparkles,
  ArrowRight,
  Clock,
  CheckCircle2,
  X,
  ExternalLink,
  ChevronRight,
  Lightbulb,
  MessageSquare
} from 'lucide-react'

/**
 * Tutorials - Card-based tutorial section with detailed modal views
 * Features progress tracking and interactive learning modules
 */

const tutorials = [
  {
    id: 1,
    icon: Video,
    title: 'Membuat bahan belajar berupa video pakai NotebookLM',
    description: 'Pelajari cara mengubah materi pelajaran menjadi video edukatif dengan bantuan NotebookLM secara mudah dan cepat.',
    duration: '15 Menit',
    color: 'bg-yellow-brand',
    iconColor: 'text-black',
    link: 'https://notebooklm.google.com',
    details: {
      steps: [
        'Buka NotebookLM dan buat "Notebook" baru',
        'Upload file materi (PDF, Docs, atau link website)',
        'Minta NotebookLM merangkum materi menjadi poin-poin naskah video',
        'Gunakan naskah tersebut di aplikasi pembuat video pilihanmu'
      ],
      aiUsage: 'Gunakan fitur chat di NotebookLM untuk mengekstrak poin penting dari dokumen yang panjang menjadi script video pendek.',
      tips: 'Gunakan bahasa santai di prompt agar script video terdengar lebih natural dan cocok untuk audiens.',
      prompts: [
        'Tolong buatkan naskah video TikTok/Reels berdurasi 1 menit dari materi ini.',
        'Ekstrak 3 poin utama dari dokumen ini untuk dijadikan slide presentasi video.'
      ]
    }
  },
  {
    id: 2,
    icon: Headphones,
    title: 'Membuat bahan belajar berupa audio pakai NotebookLM',
    description: 'Ubah teks atau materi tertulis menjadi ringkasan audio atau format podcast menggunakan fitur NotebookLM.',
    duration: '10 Menit',
    color: 'bg-green-brand',
    iconColor: 'text-white',
    link: 'https://notebooklm.google.com',
    details: {
      steps: [
        'Buka NotebookLM dan upload dokumen materi pelajaran',
        'Pilih opsi "Audio Overview" atau "Podcast Generation"',
        'Tunggu AI memproses dokumen menjadi format percakapan/audio',
        'Dengarkan atau download hasil audio untuk dibagikan ke siswa'
      ],
      aiUsage: 'Fitur "Audio Overview" (Deep Dive) di NotebookLM akan otomatis membuat simulasi podcast 2 orang yang membahas materimu.',
      tips: 'Pastikan dokumen yang diupload cukup lengkap agar AI punya bahan diskusi yang kaya untuk audionya.',
      prompts: [
        'Ubah materi ini menjadi percakapan dua orang yang mudah dipahami.',
        'Rangkum dokumen ini menjadi naskah siaran radio edukatif 5 menit.'
      ]
    }
  },
  {
    id: 3,
    icon: FileQuestion,
    title: 'Membuat bahan belajar berupa quiz dan kartu tanya pakai NotebookLM',
    description: 'Generate soal latihan, quiz interaktif, dan flashcard (kartu tanya) langsung dari dokumen materi belajarmu.',
    duration: '20 Menit',
    color: 'bg-blue-brand',
    iconColor: 'text-white',
    link: 'https://notebooklm.google.com',
    details: {
      steps: [
        'Upload buku cetak atau modul ke dalam NotebookLM',
        'Gunakan prompt untuk meminta AI membuatkan quiz',
        'Minta AI membuat pasangan soal-jawaban untuk flashcard',
        'Salin hasilnya ke aplikasi pembuat kuis (seperti Kahoot/Quizizz)'
      ],
      aiUsage: 'NotebookLM dapat menganalisis ratusan halaman dokumen dan mengekstrak pertanyaan yang sangat relevan dan tidak melenceng dari materi.',
      tips: 'Spesifikkan tingkat kesulitan dan target kelas saat meminta AI membuat soal agar sesuai dengan kemampuan siswa.',
      prompts: [
        'Buatkan 10 soal pilihan ganda dari dokumen ini beserta kunci jawabannya.',
        'Buat flashcard dari file materi berikut: [Pertanyaan] - [Jawaban Singkat]'
      ]
    }
  },
  {
    id: 4,
    icon: Sparkles,
    title: 'Membuat Quiz Interaktif yang proper pakai Gemini',
    description: 'Gunakan Google Gemini untuk menyusun kuis interaktif yang seru, lengkap dengan pembahasan dan skenario.',
    duration: '25 Menit',
    color: 'bg-purple-brand',
    iconColor: 'text-white',
    link: 'https://gemini.google.com',
    details: {
      steps: [
        'Buka Google Gemini',
        'Ketik prompt detail tentang topik, tingkat kesulitan, dan format quiz',
        'Minta Gemini memberikan penjelasan (pembahasan) untuk setiap jawaban yang benar',
        'Review dan sesuaikan gaya bahasanya agar lebih interaktif'
      ],
      aiUsage: 'Gemini sangat kreatif dalam merangkai skenario, sehingga quiz tidak hanya berupa hafalan tetapi juga penyelesaian masalah (problem solving).',
      tips: 'Berikan peran (roleplay) pada Gemini, misalnya: "Bertindaklah sebagai guru IPA yang ramah dan menyenangkan."',
      prompts: [
        'Buatkan quiz interaktif dari materi sistem tata surya untuk anak SMP, dengan 5 soal cerita.',
        'Berperanlah sebagai guru sejarah. Beri saya 1 pertanyaan pilihan ganda. Jika saya jawab benar, beri pujian dan pertanyaan selanjutnya. Jika salah, jelaskan materi yang benar.'
      ]
    }
  }
]

export default function Tutorials({ darkMode }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })
  
  // State for tracking completed modules
  const [completedModules, setCompletedModules] = useState([])
  // State for active modal
  const [activeModal, setActiveModal] = useState(null)

  const toggleComplete = (id, e) => {
    e.stopPropagation()
    if (completedModules.includes(id)) {
      setCompletedModules(completedModules.filter(m => m !== id))
    } else {
      setCompletedModules([...completedModules, id])
    }
  }

  const openModal = (tutorial) => {
    setActiveModal(tutorial)
    document.body.style.overflow = 'hidden'
  }

  const closeModal = () => {
    setActiveModal(null)
    document.body.style.overflow = 'unset'
  }

  // Calculate progress
  const progressPercentage = Math.round((completedModules.length / tutorials.length) * 100)

  return (
    <section id="tutorials" className={`py-20 md:py-28 bg-grid relative ${darkMode ? '' : 'bg-gray-50'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" ref={ref}>
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className={`inline-block px-4 py-1.5 rounded-full border-3 font-heading font-bold text-sm mb-4 ${
            darkMode
              ? 'bg-green-brand/20 border-white/20 text-green-brand'
              : 'bg-green-brand/10 border-black shadow-[3px_3px_0px_0px_#000]'
          }`}>
            Modul Belajar
          </span>
          <h2 className="text-3xl md:text-5xl font-heading font-bold mb-4">
            Tutorial <span className="text-green-brand">Praktis</span>
          </h2>
          <p className={`text-lg max-w-2xl mx-auto mb-8 ${
            darkMode ? 'text-gray-300' : 'text-gray-600'
          }`}>
            Pilih modul pembelajaran di bawah ini untuk mulai memahami cara pemanfaatan AI dalam edukasi.
          </p>

          {/* Progress Bar */}
          <div className={`max-w-md mx-auto neo-card p-4 flex flex-col gap-3 ${darkMode ? 'bg-dark-card' : 'bg-white'}`}>
            <div className="flex justify-between items-center font-heading font-bold text-sm">
              <span>Progress Belajar</span>
              <span>{progressPercentage}%</span>
            </div>
            <div className={`w-full h-4 rounded-full border-2 ${darkMode ? 'border-white/20 bg-dark' : 'border-black bg-gray-100'}`}>
              <div 
                className="h-full bg-green-brand rounded-full transition-all duration-500 ease-out border-r-2 border-black"
                style={{ width: `${progressPercentage}%` }}
              ></div>
            </div>
          </div>
        </motion.div>

        {/* Tutorial cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          {tutorials.map((tutorial, index) => {
            const isCompleted = completedModules.includes(tutorial.id)
            
            return (
              <motion.div
                key={tutorial.id}
                initial={{ opacity: 0, y: 50 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                className={`neo-card p-6 md:p-8 flex flex-col group relative transition-transform hover:-translate-y-2 hover:shadow-[8px_8px_0px_0px_#000] cursor-pointer ${
                  isCompleted ? (darkMode ? 'bg-dark-card opacity-80' : 'bg-gray-50 opacity-80') : ''
                }`}
                onClick={() => openModal(tutorial)}
              >
                {/* Header: Icon & Duration & Checklist */}
                <div className="flex justify-between items-start mb-6">
                  <div className="flex items-center gap-4">
                    <div className={`w-14 h-14 rounded-xl border-3 flex items-center justify-center transition-transform group-hover:rotate-6 ${
                      tutorial.color
                    } ${darkMode ? 'border-white/30' : 'border-black shadow-[3px_3px_0px_0px_#000]'}`}>
                      <tutorial.icon size={28} className={tutorial.iconColor} />
                    </div>
                    <div className={`flex items-center gap-1.5 text-xs font-bold px-3 py-1.5 rounded-full border-2 ${
                      darkMode ? 'bg-white/10 border-white/20 text-gray-300' : 'bg-white border-black text-gray-700 shadow-[2px_2px_0px_0px_#000]'
                    }`}>
                      <Clock size={14} />
                      {tutorial.duration}
                    </div>
                  </div>
                  
                  {/* Complete Checkbox */}
                  <button 
                    onClick={(e) => toggleComplete(tutorial.id, e)}
                    className={`w-8 h-8 rounded-full border-2 flex items-center justify-center transition-colors z-10 ${
                      isCompleted 
                        ? 'bg-green-brand border-black text-white' 
                        : (darkMode ? 'border-white/30 text-transparent hover:border-white' : 'border-black text-transparent hover:bg-gray-100')
                    }`}
                  >
                    <CheckCircle2 size={20} className={isCompleted ? 'opacity-100' : 'opacity-0 hover:opacity-50 text-gray-400'} />
                  </button>
                </div>

                {/* Content */}
                <h3 className="text-xl font-heading font-bold mb-3 pr-8">
                  {tutorial.title}
                </h3>
                <p className={`leading-relaxed mb-8 flex-1 ${
                  darkMode ? 'text-gray-300' : 'text-gray-600'
                }`}>
                  {tutorial.description}
                </p>

                {/* CTA Button */}
                <button
                  className={`neo-btn px-5 py-3 text-sm justify-center w-full mt-auto ${
                    darkMode
                      ? `bg-white text-black border-white/30 hover:bg-gray-200`
                      : `bg-white text-black hover:bg-gray-50`
                  }`}
                >
                  Pelajari Modul <ArrowRight size={16} />
                </button>
              </motion.div>
            )
          })}
        </div>
      </div>

      {/* Modal / Detail View */}
      <AnimatePresence>
        {activeModal && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
            {/* Overlay */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={closeModal}
              className="fixed inset-0 bg-black/60 backdrop-blur-sm"
            />

            {/* Modal Content */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className={`relative w-full max-w-4xl max-h-[90vh] overflow-y-auto neo-card flex flex-col z-10 ${
                darkMode ? 'bg-dark text-white' : 'bg-white text-black'
              }`}
            >
              {/* Modal Header */}
              <div className={`sticky top-0 z-20 flex items-center justify-between p-5 md:p-6 border-b-3 ${
                darkMode ? 'bg-dark border-white/10' : 'bg-white border-black'
              }`}>
                <div className="flex items-center gap-4">
                  <div className={`w-12 h-12 rounded-xl border-3 flex items-center justify-center shrink-0 ${
                    activeModal.color
                  } ${darkMode ? 'border-white/30' : 'border-black'}`}>
                    <activeModal.icon size={24} className={activeModal.iconColor} />
                  </div>
                  <h3 className="text-xl md:text-2xl font-heading font-bold leading-tight pr-4">
                    {activeModal.title}
                  </h3>
                </div>
                <button 
                  onClick={closeModal}
                  className={`p-2 rounded-lg border-2 transition-transform hover:scale-110 shrink-0 ${
                    darkMode ? 'border-white/20 hover:bg-white/10' : 'border-black hover:bg-gray-100'
                  }`}
                >
                  <X size={24} />
                </button>
              </div>

              {/* Modal Body */}
              <div className="p-6 md:p-8 space-y-8">
                {/* Overview */}
                <div>
                  <h4 className="text-lg font-bold mb-2 flex items-center gap-2">
                    <Lightbulb size={20} className="text-yellow-brand" /> 
                    Penjelasan Singkat
                  </h4>
                  <p className={`leading-relaxed ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                    {activeModal.details.aiUsage}
                  </p>
                </div>

                {/* Steps */}
                <div>
                  <h4 className="text-lg font-bold mb-4 flex items-center gap-2">
                    <CheckCircle2 size={20} className="text-green-brand" /> 
                    Langkah-Langkah
                  </h4>
                  <div className="space-y-3">
                    {activeModal.details.steps.map((step, idx) => (
                      <div key={idx} className={`flex items-start gap-4 p-4 rounded-xl border-2 ${
                        darkMode ? 'bg-white/5 border-white/10' : 'bg-gray-50 border-black/10'
                      }`}>
                        <div className={`w-8 h-8 rounded-full border-2 flex items-center justify-center shrink-0 font-bold text-sm ${
                          darkMode ? 'border-white/20 bg-dark-card' : 'border-black bg-white shadow-[2px_2px_0px_0px_#000]'
                        }`}>
                          {idx + 1}
                        </div>
                        <p className="pt-1">{step}</p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Example Prompts */}
                <div>
                  <h4 className="text-lg font-bold mb-4 flex items-center gap-2">
                    <MessageSquare size={20} className="text-blue-brand" /> 
                    Contoh Prompt Siap Pakai
                  </h4>
                  <div className="space-y-3">
                    {activeModal.details.prompts.map((prompt, idx) => (
                      <div key={idx} className={`p-4 rounded-xl border-2 font-mono text-sm leading-relaxed ${
                        darkMode ? 'bg-dark-card border-white/20 text-gray-300' : 'bg-[#f4f4f4] border-black text-gray-800'
                      }`}>
                        "{prompt}"
                      </div>
                    ))}
                  </div>
                </div>

                {/* Tips */}
                <div className={`p-5 rounded-xl border-2 ${
                  darkMode ? 'bg-yellow-brand/10 border-yellow-brand/30' : 'bg-yellow-brand/20 border-black'
                }`}>
                  <h4 className="font-bold mb-2 flex items-center gap-2">
                    <Sparkles size={18} className={darkMode ? 'text-yellow-brand' : 'text-black'} />
                    Tips Tambahan
                  </h4>
                  <p className={`text-sm ${darkMode ? 'text-gray-300' : 'text-gray-800'}`}>
                    {activeModal.details.tips}
                  </p>
                </div>
              </div>

              {/* Modal Footer */}
              <div className={`sticky bottom-0 p-5 md:p-6 border-t-3 flex justify-end gap-4 ${
                darkMode ? 'bg-dark border-white/10' : 'bg-white border-black'
              }`}>
                <button
                  onClick={closeModal}
                  className={`px-6 py-2.5 rounded-lg border-2 font-bold transition-transform hover:scale-105 ${
                    darkMode ? 'border-white/20 hover:bg-white/10' : 'border-black hover:bg-gray-100'
                  }`}
                >
                  Tutup
                </button>
                <a
                  href={activeModal.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`neo-btn px-6 py-2.5 flex items-center gap-2 ${activeModal.color} ${activeModal.iconColor}`}
                >
                  Buka Aplikasi <ExternalLink size={18} />
                </a>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  )
}
