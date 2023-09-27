import Image from 'next/image'
import Header from './Header/Header'
import React from 'react'
import Footer from './Footer/Footer'
import Intro from '@/Intro/Intro'

export default function Home() {
  return (
    <div>
      <Header />
      <Intro />
      <Footer />
      </div>
    
  )
}
