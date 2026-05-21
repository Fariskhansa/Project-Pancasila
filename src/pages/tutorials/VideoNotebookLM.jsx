import TutorialLayout from '../../layouts/TutorialLayout'
import { tutorials } from '../../components/Tutorials'

export default function VideoNotebookLM({ darkMode }) {
  const tutorialData = tutorials.find(t => t.slug === 'video-notebooklm')
  return <TutorialLayout tutorial={tutorialData} darkMode={darkMode} />
}
