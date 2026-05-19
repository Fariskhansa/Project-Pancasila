import { Bot, Heart, Mail, MapPin, Globe, Camera, Play } from 'lucide-react'

/**
 * Footer - Site footer with about, contact, and social links
 */

export default function Footer({ darkMode }) {
  return (
    <footer className={`py-16 border-t-3 ${
      darkMode
        ? 'bg-dark-card border-white/10'
        : 'bg-gray-900 border-black text-white'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-12">
          {/* About */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 rounded-lg bg-yellow-brand border-2 border-white/30 flex items-center justify-center">
                <Bot size={22} className="text-black" />
              </div>
              <span className="font-heading font-bold text-xl">AI Learning Hub</span>
            </div>
            <p className="text-gray-400 leading-relaxed">
              Platform pembelajaran AI sederhana untuk pengajar dan anak-anak panti asuhan. 
              Membantu memahami dan menggunakan AI sebagai alat bantu belajar yang efektif.
            </p>
          </div>

          {/* Quick links */}
          <div>
            <h3 className="font-heading font-bold text-lg mb-4">Navigasi</h3>
            <ul className="space-y-2">
              {[
                { label: 'Beranda', href: '#hero' },
                { label: 'Kenapa AI?', href: '#why-ai' },
                { label: 'Tutorial', href: '#tutorials' },
                { label: 'Prompt Library', href: '#prompts' },
                { label: 'AI Tools', href: '#tools' },
                { label: 'Quiz', href: '#quiz' },
              ].map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    onClick={(e) => {
                      e.preventDefault()
                      document.querySelector(link.href)?.scrollIntoView({ behavior: 'smooth' })
                    }}
                    className="text-gray-400 hover:text-yellow-brand transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact & Social */}
          <div>
            <h3 className="font-heading font-bold text-lg mb-4">Kontak</h3>
            <div className="space-y-3 mb-6">
              <p className="flex items-center gap-2 text-gray-400">
                <Mail size={18} className="text-blue-brand" />
                ailearninghub@email.com
              </p>
              <p className="flex items-center gap-2 text-gray-400">
                <MapPin size={18} className="text-pink-brand" />
                Indonesia
              </p>
            </div>

            <h4 className="font-heading font-bold text-sm mb-3 text-gray-300">Ikuti Kami</h4>
            <div className="flex items-center gap-3">
              {[
                { icon: Camera, color: 'hover:bg-pink-brand', href: '#' },
                { icon: Play, color: 'hover:bg-red-brand', href: '#' },
                { icon: Globe, color: 'hover:bg-purple-brand', href: '#' },
              ].map((social, i) => (
                <a
                  key={i}
                  href={social.href}
                  className={`w-10 h-10 rounded-lg border-2 border-white/20 flex items-center justify-center text-gray-400 transition-all hover:text-white hover:border-white/40 ${social.color}`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <social.icon size={18} />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className={`border-t pt-8 ${darkMode ? 'border-white/10' : 'border-white/15'}`}>
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-gray-500 text-sm text-center md:text-left">
              © {new Date().getFullYear()} AI Learning Hub. Dibuat dengan{' '}
              <Heart size={14} className="inline text-red-brand" />{' '}
              untuk panti asuhan di Indonesia.
            </p>
            <p className="text-gray-500 text-sm">
              Built with React + Vite + TailwindCSS
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
