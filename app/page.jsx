import Skills from '@/components/Skills'
import About from '@/components/About'
import Hero from '@/components/Hero'
import Projects from '@/components/Projects'
import Education from '@/components/Education'
import Chatbot from '@/components/ChatBot'


export default function Home() {
  return (
    <main>
      <Hero/>
      <About/>
      <Education/>
      <Skills/>
      <Projects/>
      <Chatbot/>
    </main>
   
  )
}
