'use client';
import React from 'react';
import Image from 'next/image';
import uglyLogo from 'public/images/uglyLogo.svg';
import "./Header.css";
import JsHamburger from '../JsHamburger/JsHamburber';

const Header = ({ hideHeader }) => {

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <header id='header' className={`sticky top-0 z-10 ${hideHeader ? 'hidden' : ''}`}>
      <div className="bg-northBlue fixed w-full h-[10vh] flex items-center justify-between  p-2">

        <div>
          <JsHamburger />
        </div>
        
        <div className='w-full md:hidden'></div>
        <Image
          src={uglyLogo}
          alt="ugly logo"
          onClick={() => scrollToSection("header")}
          className=" bg-northBeige rounded-full h-[50px] w-[80px] mr-2 md:mr-0 md:h-20 md:w-24  header-logo cursor-pointer py-[9px]"
        />
        
        
          <span
            className='header-links cursor-pointer md:flex hidden'
            onClick={() => scrollToSection("services")}>
            Services
          </span>
          <div></div>
          <span
            className='header-links cursor-pointer md:flex hidden '
            onClick={() => scrollToSection("about")}>
            About
          </span>
          <div></div>
          <span 
            className='header-links cursor-pointer  md:flex hidden' 
            onClick={() => scrollToSection("gallery")}>
              Gallery
          </span>
          <div></div>
          <span 
            className='header-links cursor-pointer  md:flex hidden' 
            onClick={() => scrollToSection("process")}>
              Process
          </span>
          <div></div>
          <span 
            className='header-links cursor-pointer  md:flex hidden' 
            onClick={() => scrollToSection("quiz")}>
              Guide
          </span>
          <div></div>
          <span 
            className='header-links cursor-pointer  md:flex hidden' 
            onClick={() => scrollToSection("contact")}>
              Contact
          </span>
          <div></div>
        

      </div>
      {/* <div className="bg-northBlue fixed w-[100vw] flex items-center justify-between md:justify-normal p-2">
        <div >
          <Hamburger />
        </div>

        <Image
          src={uglyLogo}
          alt="ugly logo"
          onClick={() => scrollToSection("header")}
          className=" bg-northBeige rounded-full h-14 w-16  md:h-20 md:w-24 lg:h-28 lg:w-36 header-logo cursor-pointer py-2 mx-2 xl:mx-24 md:mx-14"
        />
        <div className="md:flex hidden ">
          <span
            className='header-links cursor-pointer '
            onClick={() => scrollToSection("services")}>
            Services
          </span>
          
          <span
            className='header-links cursor-pointer  '
            onClick={() => scrollToSection("about")}>
            About
          </span>
          <span 
            className='header-links cursor-pointer  ' 
            onClick={() => scrollToSection("gallery")}>
              Gallery
          </span>
          <span 
            className='header-links cursor-pointer  ' 
            onClick={() => scrollToSection("process")}>
              Process
          </span>
          <span 
            className='header-links cursor-pointer  ' 
            onClick={() => scrollToSection("quiz")}>
              Guide
          </span>
          <span 
            className='header-links cursor-pointer  ' 
            onClick={() => scrollToSection("contact")}>
              Contact
          </span>
        </div>

      </div> */}

    </header>
  );
};

Header.noHMR = true; // Disable HMR for this component

export default Header;

