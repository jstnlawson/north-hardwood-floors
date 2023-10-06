import React from 'react'
import Footer from './Footer/Footer'
import Intro from '@/app/Intro/Intro'
import Services from './Sevices/Services'
import Gallery from './Gallery/Gallery'
import Quiz from './Quiz/Quiz'
import QuizModal from './QuizModal/QuizModal'



export default function Home() {
  
  return (
    <div>
      <Intro />
      <Services />
      <Gallery />
      <Quiz />
      <QuizModal />
      <Footer />
      </div>
    
  )
}
