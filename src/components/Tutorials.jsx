import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { useNavigate } from 'react-router-dom'
import {
  Video,
  Headphones,
  FileQuestion,
  Sparkles,
  ArrowRight,
  ChevronRight
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
    slug: 'audio-notebooklm',
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
    slug: 'quiz-flashcard-notebooklm',
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
    slug: 'quiz-gemini',
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
  const navigate = useNavigate()

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

    </section>
  )
}
