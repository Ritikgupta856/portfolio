import Skills from '@/components/Skills'
import Hero from '@/components/Hero'
import Projects from '@/components/Projects'
import Education from '@/components/Education'
import Chatbot from '@/components/ChatBot'
import Experience from '@/components/Experience'


export default function Home() {
  return (
    <main>
      <Hero/>
      <Experience/>
      <Education/>
      <Skills/>
      <Projects/>
      <Chatbot/>
    </main>
   
  )
}
