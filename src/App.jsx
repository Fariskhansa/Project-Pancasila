import { useState, useEffect } from 'react'
import { AnimatePresence } from 'framer-motion'
import LoadingScreen from './components/LoadingScreen'
import ScrollProgress from './components/ScrollProgress'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import WhyLearnAI from './components/WhyLearnAI'
import Tutorials from './components/Tutorials'
import PromptLibrary from './components/PromptLibrary'
import AITools from './components/AITools'
import Footer from './components/Footer'
import BackToTop from './components/BackToTop'

function App() {
  const [loading, setLoading] = useState(true)
  const [darkMode, setDarkMode] = useState(false)

  useEffect(() => {
    // Simulate loading
    const timer = setTimeout(() => setLoading(false), 2200)
    return () => clearTimeout(timer)
  }, [])

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }
  }, [darkMode])

  return (
    <div className={`min-h-screen ${darkMode ? 'dark bg-dark text-white' : 'bg-white text-gray-900'}`}>
      <AnimatePresence>
        {loading && <LoadingScreen />}
      </AnimatePresence>

      {!loading && (
        <>
          <ScrollProgress />
          <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />
          <main>
            <Hero darkMode={darkMode} />
            <WhyLearnAI darkMode={darkMode} />
            <Tutorials darkMode={darkMode} />
            <PromptLibrary darkMode={darkMode} />
            <AITools darkMode={darkMode} />
          </main>
          <Footer darkMode={darkMode} />
          <BackToTop />
        </>
      )}
    </div>
  )
}

export default App
