import Image from 'next/image'
import Header from './Header/Header'
import React from 'react'
import Footer from './Footer/Footer'
import Intro from '@/app/Intro/Intro'
import Services from './Sevices/Services'
import ServicesCarousel from './ServicesCarousel/ServicesCarousel'



export default function Home() {
  
  return (
    <div>
      {/* <Header /> */}
      <Intro />
      <Services />
      {/* <ServicesCarousel /> */}
      <Footer />
      </div>
    
  )
}
