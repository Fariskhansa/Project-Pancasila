import { useState, useEffect } from 'react'

/**
 * ScrollProgress - Horizontal progress bar at top of page
 * Tracks scroll position and shows visual progress indicator
 */
export default function ScrollProgress() {
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight
      const scrollPosition = window.scrollY
      setProgress((scrollPosition / totalHeight) * 100)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <div className="scroll-progress" style={{ width: `${progress}%` }} />
  )
}
