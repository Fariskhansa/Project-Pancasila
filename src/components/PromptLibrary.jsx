import { useState, useRef } from 'react'
import { motion, useInView, AnimatePresence } from 'framer-motion'
import { 
  Copy, 
  Check, 
  ChevronDown, 
  ChevronUp, 
  BookOpen, 
  Calculator, 
  Languages, 
  FileQuestion, 
  ListChecks 
} from 'lucide-react'

/**
 * PromptLibrary - Interactive prompt cards with copy and expand functionality
 * Features syntax-highlighted prompts with copy-to-clipboard
 */

const prompts = [
  {
    icon: FileQuestion,
    title: 'Prompt Membuat Kuis',
    category: 'Evaluasi',
    color: 'bg-yellow-brand',
    textColor: 'text-black',
    prompt: `Buatkan 10 soal kuis pilihan ganda tentang [TOPIK PELAJARAN] untuk siswa [TINGKAT KELAS].

Ketentuan:
- Setiap soal memiliki 4 pilihan jawaban (A, B, C, D)
- Tandai jawaban yang benar
- Buat soal dari tingkat mudah ke sulit
- Gunakan bahasa yang sederhana dan mudah dipahami
- Berikan penjelasan singkat untuk setiap jawaban benar`,
  },
  {
    icon: BookOpen,
    title: 'Prompt Membuat Rangkuman',
    category: 'Belajar',
    color: 'bg-blue-brand',
    textColor: 'text-white',
    prompt: `Buatkan rangkuman materi tentang [TOPIK] untuk siswa [TINGKAT KELAS].

Format rangkuman:
1. Pengertian/Definisi
2. Poin-poin penting (gunakan bullet points)
3. Contoh sederhana
4. Kesimpulan

Gunakan bahasa yang mudah dipahami oleh anak-anak. Tambahkan emoji untuk membuat rangkuman lebih menarik.`,
  },
  {
    icon: Languages,
    title: 'Prompt Belajar Bahasa Inggris',
    category: 'Bahasa',
    color: 'bg-green-brand',
    textColor: 'text-white',
    prompt: `Bantu saya belajar bahasa Inggris dengan topik [TOPIK].

Tolong berikan:
1. 10 kosakata baru beserta artinya
2. 5 contoh kalimat menggunakan kosakata tersebut
3. Dialog pendek (5-6 kalimat) menggunakan kosakata di atas
4. Latihan: isi titik-titik dengan kata yang tepat (5 soal)

Gunakan bahasa yang sederhana dan berikan terjemahan bahasa Indonesia.`,
  },
  {
    icon: Calculator,
    title: 'Prompt Belajar Matematika',
    category: 'Matematika',
    color: 'bg-pink-brand',
    textColor: 'text-white',
    prompt: `Jelaskan cara menyelesaikan soal matematika tentang [TOPIK] untuk siswa [TINGKAT KELAS].

Tolong:
1. Jelaskan konsep dasarnya terlebih dahulu
2. Berikan rumus yang digunakan
3. Berikan 3 contoh soal dengan langkah-langkah penyelesaian yang detail
4. Berikan 3 soal latihan untuk dikerjakan sendiri
5. Berikan tips mengingat rumus dengan mudah

Gunakan bahasa yang sederhana dan langkah-langkah yang jelas.`,
  },
  {
    icon: ListChecks,
    title: 'Prompt Soal Pilihan Ganda',
    category: 'Evaluasi',
    color: 'bg-purple-brand',
    textColor: 'text-white',
    prompt: `Buatkan 15 soal pilihan ganda tentang [MATERI] untuk [TINGKAT KELAS].

Format:
- 5 soal tingkat mudah (C1-C2: mengingat & memahami)
- 5 soal tingkat sedang (C3-C4: menerapkan & menganalisis)
- 5 soal tingkat sulit (C5-C6: mengevaluasi & mencipta)

Setiap soal:
- 4 pilihan jawaban (A, B, C, D)
- Kunci jawaban
- Pembahasan singkat

Gunakan bahasa yang sesuai dengan tingkat siswa.`,
  },
]

// Single prompt card component
function PromptCard({ prompt, darkMode, index }) {
  const [expanded, setExpanded] = useState(false)
  const [copied, setCopied] = useState(false)

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(prompt.prompt)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    } catch (err) {
      // Fallback for older browsers
      const textArea = document.createElement('textarea')
      textArea.value = prompt.prompt
      document.body.appendChild(textArea)
      textArea.select()
      document.execCommand('copy')
      document.body.removeChild(textArea)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    }
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1, duration: 0.5 }}
      className="neo-card overflow-hidden"
    >
      {/* Card header */}
      <div className="p-6">
        <div className="flex items-start justify-between gap-4">
          <div className="flex items-center gap-4">
            <div className={`w-12 h-12 rounded-xl border-3 flex items-center justify-center shrink-0 ${
              prompt.color
            } ${darkMode ? 'border-white/30' : 'border-black shadow-[3px_3px_0px_0px_#000]'}`}>
              <prompt.icon size={24} className={prompt.textColor} />
            </div>
            <div>
              <h3 className="text-lg font-heading font-bold">{prompt.title}</h3>
              <span className={`text-xs font-medium px-2 py-0.5 rounded-full ${
                darkMode ? 'bg-white/10 text-gray-300' : 'bg-gray-100 text-gray-600'
              }`}>
                {prompt.category}
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Expand/collapse area */}
      <div className={`px-6 ${expanded ? 'pb-6' : 'pb-4'}`}>
        <button
          onClick={() => setExpanded(!expanded)}
          className={`w-full flex items-center justify-between py-2 px-4 rounded-lg border-2 transition-all font-medium text-sm ${
            darkMode
              ? 'border-white/15 hover:bg-white/5'
              : 'border-black/15 hover:bg-gray-50'
          }`}
        >
          {expanded ? 'Sembunyikan Prompt' : 'Lihat Prompt'}
          {expanded ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
        </button>
      </div>

      {/* Prompt content */}
      <AnimatePresence>
        {expanded && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden"
          >
            <div className="px-6 pb-6">
              <div className="prompt-text text-sm mb-4">
                {prompt.prompt}
              </div>
              
              {/* Copy button */}
              <button
                onClick={handleCopy}
                className={`neo-btn px-5 py-2.5 text-sm w-full justify-center ${
                  copied
                    ? 'bg-green-brand text-white'
                    : darkMode
                    ? 'bg-yellow-brand text-black border-white/30'
                    : 'bg-yellow-brand text-black'
                }`}
              >
                {copied ? (
                  <>
                    <Check size={16} /> Tersalin!
                  </>
                ) : (
                  <>
                    <Copy size={16} /> Salin Prompt
                  </>
                )}
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  )
}

export default function PromptLibrary({ darkMode }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section id="prompts" className={`py-20 md:py-28 bg-dots ${
      darkMode ? '' : 'bg-gray-50'
    }`}>
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
              ? 'bg-yellow-brand/20 border-white/20 text-yellow-brand'
              : 'bg-yellow-brand/10 border-black shadow-[3px_3px_0px_0px_#000]'
          }`}>
            Prompt Library
          </span>
          <h2 className="text-3xl md:text-5xl font-heading font-bold mb-4">
            Koleksi{' '}
            <span className="text-yellow-brand">Prompt</span>{' '}
            Siap Pakai
          </h2>
          <p className={`text-lg max-w-2xl mx-auto ${
            darkMode ? 'text-gray-300' : 'text-gray-600'
          }`}>
            Tinggal salin, tempel, dan sesuaikan dengan kebutuhanmu. Prompt ini dirancang khusus untuk membantu belajar!
          </p>
        </motion.div>

        {/* Prompt cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 items-start">
          {isInView && prompts.map((prompt, index) => (
            <PromptCard
              key={index}
              prompt={prompt}
              darkMode={darkMode}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
