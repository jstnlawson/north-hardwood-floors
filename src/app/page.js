'use client';
import React, { useState } from 'react'
import Footer from './Footer/Footer'
import Intro from '@/app/Intro/Intro'
import Services from './Services/Services'
import Gallery from './Gallery/Gallery'
import Quiz from './Quiz/Quiz'
import About from './About/About'
import Process from './Process/Process'
import Header from './Header/Header'
import Contact from './Contact/Contact';


export default function Home() {

  const [hideHeader, setHideHeader] = useState(false);

  return (
    <div>
      <Header
        hideHeader={hideHeader} />
      <Intro />
      <Services />
      <About />
      <Gallery
        hideHeader={hideHeader}
        setHideHeader={setHideHeader} />
      <Process
        hideHeader={hideHeader}
        setHideHeader={setHideHeader} />
      <Quiz
        hideHeader={hideHeader}
        setHideHeader={setHideHeader} />
        <Contact />
      <Footer />
    </div>
  )
}
