import TutorialLayout from '../../layouts/TutorialLayout'
import { tutorials } from '../../components/Tutorials'

export default function QuizGemini({ darkMode }) {
  const tutorialData = tutorials.find(t => t.slug === 'quiz-gemini')
  return <TutorialLayout tutorial={tutorialData} darkMode={darkMode} />
}
