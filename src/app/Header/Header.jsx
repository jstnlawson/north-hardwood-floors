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
    <header id='header' className={`sticky top-0 z-10 ${hideHeader ? 'hidden' : ''}`}>
      <div className="bg-northBlue fixed w-[100vw] flex items-center justify-between md:justify-normal p-2">
        <div >
          <Hamburger />
        </div>

        <Image
          src={uglyLogo}
          alt="ugly logo"
          onClick={() => scrollToSection("header")}
          className=" bg-northBeige rounded-full h-14 w-16  md:h-20 md:w-24 lg:h-28 lg:w-36 header-logo cursor-pointer py-2 mx-2 xl:mx-24 md:mx-14"
        />
        <div className="md:block hidden">
          <span
            className='header-links cursor-pointer xl:mx-[4vw] lg:mx-[3vw] md:mx-[2vw]'
            onClick={() => scrollToSection("services")}>
            Services
          </span>
          <span
            className='header-links cursor-pointer xl:mx-[4vw] lg:mx-[3vw] md:mx-[2vw] mx-[5vw]'
            onClick={() => scrollToSection("about")}>
            About
          </span>
          <span 
            className='header-links cursor-pointer xl:mx-[4vw] lg:mx-[3vw] md:mx-[2vw] mx-[5vw]' 
            onClick={() => scrollToSection("gallery")}>
              Gallery
          </span>
          <span 
            className='header-links cursor-pointer xl:mx-[4vw] lg:mx-[3vw] md:mx-[2vw] mx-[5vw]' 
            onClick={() => scrollToSection("process")}>
              Process
          </span>
          <span 
            className='header-links cursor-pointer xl:mx-[4vw] lg:mx-[3vw] md:mx-[2vw] mx-[5vw]' 
            onClick={() => scrollToSection("quiz")}>
              Guide
          </span>
          <span 
            className='header-links cursor-pointer xl:mx-[4vw] lg:mx-[3vw] md:mx-[2vw] mx-[5vw]' 
            onClick={() => scrollToSection("contact")}>
              Contact
          </span>
        </div>

      </div>

    </header>
  );
};

Header.noHMR = true; // Disable HMR for this component

export default Header;

