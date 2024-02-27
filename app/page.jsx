import Skills from '@/components/Skills'
import About from '@/components/About'
import Contact from '@/components/Contact'
import Hero from '@/components/Hero'
import Projects from '@/components/Projects'
import Education from '@/components/Education'


export default function Home() {
  return (
    <main>
      <Hero/>
      <About/>
      <Education/>
      <Skills/>
      <Projects/>
      <Contact/>
    </main>
   
  )
}
