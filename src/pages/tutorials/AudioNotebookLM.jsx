import TutorialLayout from '../../layouts/TutorialLayout'
import { tutorials } from '../../components/Tutorials'

export default function AudioNotebookLM({ darkMode }) {
  const tutorialData = tutorials.find(t => t.slug === 'audio-notebooklm')
  return <TutorialLayout tutorial={tutorialData} darkMode={darkMode} />
}
