import Hero from '../components/Hero'
import WhyLearnAI from '../components/WhyLearnAI'
import Tutorials from '../components/Tutorials'
import PromptLibrary from '../components/PromptLibrary'
import AITools from '../components/AITools'

export default function Home({ darkMode }) {
  return (
    <main>
      <Hero darkMode={darkMode} />
      <WhyLearnAI darkMode={darkMode} />
      <Tutorials darkMode={darkMode} />
      <PromptLibrary darkMode={darkMode} />
      <AITools darkMode={darkMode} />
    </main>
  )
}
