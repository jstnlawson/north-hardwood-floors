'use client';
import React from 'react';
import Image from 'next/image';
import uglyLogo from 'public/images/uglyLogo.svg';
import "./Header.css";
import Hamburger from '@/app/Hamburger/Hamburger';

const Header = ({ hideHeader }) => {

    const scrollToSection = (id) => {
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth', block: 'center' });
      }
    };

  return (
    <header id='header' className={`sticky top-0 z-50 ${hideHeader ? 'hidden' : ''}`}>
      <div className="header-image-container">
        <Image
          src={uglyLogo}
          alt="ugly logo"
          onClick={() => scrollToSection("header")}
          className="h-20 w-24  md:h-24 md:w-28 lg:h-32 lg:w-36  ml-5 header-logo cursor-pointer"
        />
        <div className="md:block hidden">
        <span className='header-links cursor-pointer ml-14 lg:ml-20 xl:ml-24' onClick={() => scrollToSection("services")}>Services</span>
        <span className='header-links cursor-pointer ml-14 lg:ml-20 xl:ml-24' onClick={() => scrollToSection("about")}>About</span>
        <span className='header-links cursor-pointer ml-14 lg:ml-20 xl:ml-24' onClick={() => scrollToSection("gallery")}>Gallery</span>
        <span className='header-links cursor-pointer ml-14 lg:ml-20 xl:ml-24' onClick={() => scrollToSection("process")}>Process</span>
        <span className='header-links cursor-pointer ml-14 lg:ml-20 xl:ml-24' onClick={() => scrollToSection("quiz")}>Guide</span>
        <span className='header-links cursor-pointer ml-14 lg:ml-20 xl:ml-24'>Contact</span>
        </div>
        <div >
        <Hamburger />
        </div>
      </div>
    
    </header>
  );
};

Header.noHMR = true; // Disable HMR for this component

export default Header;

