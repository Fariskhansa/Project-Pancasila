import TutorialLayout from '../../layouts/TutorialLayout'
import { tutorials } from '../../components/Tutorials'

export default function QuizFlashcardNotebookLM({ darkMode }) {
  const tutorialData = tutorials.find(t => t.slug === 'quiz-flashcard-notebooklm')
  return <TutorialLayout tutorial={tutorialData} darkMode={darkMode} />
}
