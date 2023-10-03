import Image from 'next/image'
import Header from './Header/Header'
import React from 'react'
import Footer from './Footer/Footer'
import Intro from '@/app/Intro/Intro'
import Services from './Sevices/Services'
import ServicesCarousel from './ServicesCarousel/ServicesCarousel'
import Gallery from './Gallery/Gallery'



export default function Home() {
  
  return (
    <div>
      <Intro />
      <Services />
      <Gallery />
      <Footer />
      </div>
    
  )
}
