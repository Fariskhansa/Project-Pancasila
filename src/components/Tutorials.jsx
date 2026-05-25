import { useRef, useState, useEffect } from 'react'
import { motion, useInView } from 'framer-motion'
import { useNavigate } from 'react-router-dom'
import {
  Video,
  Headphones,
  FileQuestion,
  Sparkles,
  ArrowRight,
  ChevronRight,
  CheckCircle2,
  RotateCcw
} from 'lucide-react'

/**
 * Tutorials - Card-based tutorial section with detailed modal views
 * Features progress tracking and interactive learning modules
 */

export const tutorials = [
  {
    id: 1,
    slug: 'video-notebooklm',
    icon: Video,
    title: <>Membuat Bahan Belajar Berupa Video Menggunakan <span className="notebook-sparkle">NotebookLM</span></>,
    description: <>Pelajari cara mengubah materi pelajaran menjadi video edukatif dengan bantuan <span className="notebook-sparkle">NotebookLM</span> secara mudah dan cepat.</>,
    duration: '15 Menit',
    color: 'bg-orange-brand',
    hoverColor: 'hover:bg-orange-brand',
    iconColor: 'text-black',
    link: 'https://notebooklm.google.com',
    details: {
      steps: [
        <>Buka <span className="notebook-sparkle">NotebookLM</span> dan buat "Notebook" baru</>,
        'Upload file materi (PDF, Docs, atau link website)',
        <>Minta <span className="notebook-sparkle">NotebookLM</span> merangkum materi menjadi poin-poin naskah video</>,
        'Gunakan naskah tersebut di aplikasi pembuat video pilihanmu'
      ],
      aiUsage: <>Gunakan fitur chat di <span className="notebook-sparkle">NotebookLM</span> untuk mengekstrak poin penting dari dokumen yang panjang menjadi script video pendek.</>,
      tips: 'Gunakan bahasa santai di prompt agar script video terdengar lebih natural dan cocok untuk audiens.',
      prompts: [
        'Tolong buatkan naskah video TikTok/Reels berdurasi 1 menit dari materi ini.',
        'Ekstrak 3 poin utama dari dokumen ini untuk dijadikan slide presentasi video.'
      ]
    }
  },
  {
    id: 2,
    slug: 'audio-notebooklm',
    icon: Headphones,
    title: <>Membuat Bahan Belajar Berupa Audio Menggunakan <span className="notebook-sparkle">NotebookLM</span></>,
    description: <>Ubah teks atau materi tertulis menjadi ringkasan audio atau format podcast menggunakan fitur <span className="notebook-sparkle">NotebookLM</span>.</>,
    duration: '10 Menit',
    color: 'bg-green-brand',
    hoverColor: 'hover:bg-green-brand',
    iconColor: 'text-white',
    link: 'https://notebooklm.google.com',
    details: {
      steps: [
        <>Buka <span className="notebook-sparkle">NotebookLM</span> dan upload dokumen materi pelajaran</>,
        'Pilih opsi "Audio Overview" atau "Podcast Generation"',
        'Tunggu AI memproses dokumen menjadi format percakapan/audio',
        'Dengarkan atau download hasil audio untuk dibagikan ke siswa'
      ],
      aiUsage: <>Fitur "Audio Overview" (Deep Dive) di <span className="notebook-sparkle">NotebookLM</span> akan otomatis membuat simulasi podcast 2 orang yang membahas materimu.</>,
      tips: 'Pastikan dokumen yang diupload cukup lengkap agar AI punya bahan diskusi yang kaya untuk audionya.',
      prompts: [
        'Ubah materi ini menjadi percakapan dua orang yang mudah dipahami.',
        'Rangkum dokumen ini menjadi naskah siaran radio edukatif 5 menit.'
      ]
    }
  },
  {
    id: 3,
    slug: 'quiz-flashcard-notebooklm',
    icon: FileQuestion,
    title: <>Membuat Bahan Belajar Berupa Quiz Dan Kartu Tanya Menggunakan <span className="notebook-sparkle">NotebookLM</span></>,
    description: 'Generate soal latihan, quiz interaktif, dan flashcard (kartu tanya) langsung dari dokumen materi belajarmu.',
    duration: '20 Menit',
    color: 'bg-blue-brand',
    hoverColor: 'hover:bg-blue-brand',
    iconColor: 'text-white',
    link: 'https://notebooklm.google.com',
    details: {
      steps: [
        <>Upload buku cetak atau modul ke dalam <span className="notebook-sparkle">NotebookLM</span></>,
        'Gunakan prompt untuk meminta AI membuatkan quiz',
        'Minta AI membuat pasangan soal-jawaban untuk flashcard',
        'Salin hasilnya ke aplikasi pembuat kuis (seperti Kahoot/Quizizz)'
      ],
      aiUsage: <><span className="notebook-sparkle">NotebookLM</span> dapat menganalisis ratusan halaman dokumen dan mengekstrak pertanyaan yang sangat relevan dan tidak melenceng dari materi.</>,
      tips: 'Spesifikkan tingkat kesulitan dan target kelas saat meminta AI membuat soal agar sesuai dengan kemampuan siswa.',
      prompts: [
        'Buatkan 10 soal pilihan ganda dari dokumen ini beserta kunci jawabannya.',
        'Buat flashcard dari file materi berikut: [Pertanyaan] - [Jawaban Singkat]'
      ]
    }
  },
  {
    id: 4,
    slug: 'quiz-gemini',
    icon: Sparkles,
    title: <>Membuat Kuis Interaktif Menggunakan <span className="gemini-sparkle">Google Gemini</span></>,
    description: <>Gunakan <span className="gemini-sparkle">Google Gemini</span> untuk menyusun kuis interaktif yang seru, lengkap dengan pembahasan dan skenario.</>,
    duration: '25 Menit',
    color: 'bg-purple-brand',
    hoverColor: 'hover:bg-purple-brand',
    iconColor: 'text-white',
    link: 'https://gemini.google.com',
    details: {
      steps: [
        <>Buka <span className="gemini-sparkle">Google Gemini</span></>,
        'Ketik prompt detail tentang topik, tingkat kesulitan, dan format quiz',
        <>Minta <span className="gemini-sparkle">Gemini</span> memberikan penjelasan (pembahasan) untuk setiap jawaban yang benar</>,
        'Review dan sesuaikan gaya bahasanya agar lebih interaktif'
      ],
      aiUsage: <><span className="gemini-sparkle">Gemini</span> sangat kreatif dalam merangkai skenario, sehingga quiz tidak hanya berupa hafalan tetapi juga penyelesaian masalah (problem solving).</>,
      tips: <>Berikan peran (roleplay) pada <span className="gemini-sparkle">Gemini</span>, misalnya: "Bertindaklah sebagai guru IPA yang ramah dan menyenangkan."</>,
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
  const navigate = useNavigate()
  const [completedSlugs, setCompletedSlugs] = useState([])

  useEffect(() => {
    // Check local storage for completed tutorials
    const completed = []
    tutorials.forEach(t => {
      if (localStorage.getItem(`tutorial_${t.slug}_completed`) === 'true') {
        completed.push(t.slug)
      }
    })
    setCompletedSlugs(completed)
  }, [])

  const handleResetProgress = () => {
    tutorials.forEach(t => {
      localStorage.removeItem(`tutorial_${t.slug}_completed`)
    })
    setCompletedSlugs([])
  }

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

          {completedSlugs.length > 0 && (
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.3 }}
              className="flex justify-center"
            >
              <button
                onClick={handleResetProgress}
                className={`flex items-center gap-2 px-5 py-2.5 border-3 border-black rounded-xl font-heading font-bold text-sm shadow-[4px_4px_0px_0px_#000] active:translate-x-1 active:translate-y-1 active:shadow-[0px_0px_0px_0px_#000] transition-all bg-yellow-brand text-black hover:-translate-y-0.5 hover:shadow-[5px_5px_0px_0px_#000]`}
              >
                <RotateCcw size={16} /> Reset Progres Belajar
              </button>
            </motion.div>
          )}
        </motion.div>


        {/* Tutorial cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          {tutorials.map((tutorial, index) => {
            return (
              <motion.div
                key={tutorial.id}
                initial={{ opacity: 0, y: 50 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                className={`neo-card p-6 md:p-8 flex flex-col group relative transition-transform hover:-translate-y-2 hover:shadow-[8px_8px_0px_0px_#000] cursor-pointer`}
                onClick={() => navigate(`/tutorial/${tutorial.slug}`)}
              >
                {/* Header: Icon */}
                <div className="flex justify-between items-start mb-6">
                  <div className="flex items-center gap-4">
                    <div className={`w-14 h-14 rounded-xl border-3 flex items-center justify-center transition-transform group-hover:rotate-6 ${
                      tutorial.color
                    } ${darkMode ? 'border-white/30' : 'border-black shadow-[3px_3px_0px_0px_#000]'}`}>
                      <tutorial.icon size={28} className={tutorial.iconColor} />
                    </div>
                  </div>
                  {/* Completion Badge */}
                  {completedSlugs.includes(tutorial.slug) && (
                    <div className="flex items-center gap-1.5 px-3 py-1.5 bg-green-brand text-black border-2 border-black rounded-full font-bold text-xs shadow-[2px_2px_0px_0px_#000] rotate-3">
                      <CheckCircle2 size={14} /> Selesai
                    </div>
                  )}
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
                  className={`neo-btn px-5 py-3 text-sm justify-center w-full mt-auto transition-colors duration-300 ${
                    darkMode
                      ? `bg-white text-black border-white/30 ${tutorial.hoverColor}`
                      : `bg-white text-black ${tutorial.hoverColor}`
                  }`}
                >
                  Pelajari Modul <ArrowRight size={16} />
                </button>
              </motion.div>
            )
          })}
        </div>
      </div>

    </section>
  )
}
