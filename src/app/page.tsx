import About from '@/components/About'
import Contect from '@/components/Contect'
import Footer from '@/components/Footer'
import Header from '@/components/Header'
import Project from '@/components/Project'
import Showcase from '@/components/ShowCase'
import Tech from '@/components/Tech'
import Image from 'next/image'

export default function Home() {
  return (
   <main>

    <div>
      <Header/>
    </div>

    <div>
      <Showcase/>
      <Tech/>
      <About/>
      <Project/>
      <Contect/>
      <Footer/>
    </div>
   </main>
  )
}
