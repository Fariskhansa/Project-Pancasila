import { useState, useEffect } from 'react'
import { AnimatePresence } from 'framer-motion'
import { Routes, Route } from 'react-router-dom'
import LoadingScreen from './components/LoadingScreen'
import ScrollProgress from './components/ScrollProgress'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import BackToTop from './components/BackToTop'
import Home from './pages/Home'
import VideoNotebookLM from './pages/tutorials/VideoNotebookLM'
import AudioNotebookLM from './pages/tutorials/AudioNotebookLM'
import QuizFlashcardNotebookLM from './pages/tutorials/QuizFlashcardNotebookLM'
import QuizGemini from './pages/tutorials/QuizGemini'

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
          <Routes>
            <Route path="/" element={<Home darkMode={darkMode} />} />
            <Route path="/tutorial/video-notebooklm" element={<VideoNotebookLM darkMode={darkMode} />} />
            <Route path="/tutorial/audio-notebooklm" element={<AudioNotebookLM darkMode={darkMode} />} />
            <Route path="/tutorial/quiz-flashcard-notebooklm" element={<QuizFlashcardNotebookLM darkMode={darkMode} />} />
            <Route path="/tutorial/quiz-gemini" element={<QuizGemini darkMode={darkMode} />} />
          </Routes>
          <Footer darkMode={darkMode} />
          <BackToTop />
        </>
      )}
    </div>
  )
}

export default App
