import Skills from '@/components/Skills'
import About from '@/components/About'
import Hero from '@/components/Hero'
import Projects from '@/components/Projects'
import Education from '@/components/Education'
import Chatbot from '@/components/ChatBot'
import Experience from '@/components/Experience'


export default function Home() {
  return (
    <main>
      <Hero/>
      <About/>
      <Experience/>
      <Education/>
      <Skills/>
      <Projects/>
      <Chatbot/>
    </main>
   
  )
}
