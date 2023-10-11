import React from 'react'
import Footer from './Footer/Footer'
import Intro from '@/app/Intro/Intro'
import Services from './Sevices/Services'
import Gallery from './Gallery/Gallery'
import Quiz from './Quiz/Quiz'
import About from './About/About'
import Process from './Process/Process'
import ContactForm from './ContactForm/ContactForm'


export default function Home() {
  
  return (
    <div>
      <Intro />
      <Services />
      <About />
      <Gallery />
      <Process />
      <Quiz />
      <ContactForm />
      <Footer />
     </div>
  )
}
