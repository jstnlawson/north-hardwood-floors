'use client';
import React, {useState, useEffect} from 'react';
import Image from 'next/image';
import northLogo from 'public/images/NHF_logo_SVG.svg'
import "./Header.css";
import JsHamburger from '../JsHamburger/JsHamburber';

const Header = ({ hideHeader }) => {

  const [activeSection, setActiveSection] = useState(null);

  const vhToPixels = (vh) => {
    const windowHeight = window.innerHeight;
    return (vh * windowHeight) / 100;
  };
  
  const offsetAdjustment = vhToPixels(10); 
  

  // Function to handle scroll and update active section
  const handleScroll = () => {
    if (typeof window !== 'undefined') { // Check that window is defined is necessary to prevent build errors
    const scrollPosition = window.scrollY;

    // Define the sections and their corresponding IDs
    const sections = {
      header: document.getElementById("header").offsetTop - offsetAdjustment,
      services: document.getElementById("services").offsetTop - offsetAdjustment,
      about: document.getElementById("about").offsetTop - offsetAdjustment,
      gallery: document.getElementById("gallery").offsetTop - offsetAdjustment,
      process: document.getElementById("process").offsetTop - offsetAdjustment,
      quiz: document.getElementById("quiz").offsetTop - offsetAdjustment,
      contact: document.getElementById("contact").offsetTop - offsetAdjustment,
    };

    //Find the active section based on scroll position
    const newActiveSection = Object.entries(sections).find(
      ([_, offset], index, array) =>
        scrollPosition >= offset &&
        (index === array.length - 1 || scrollPosition < array[index + 1][1])
    );
  
    if (newActiveSection && newActiveSection[0] !== activeSection) {
      setActiveSection(newActiveSection[0]);
    }
  }
  };

  // Add scroll event listener when the component mounts
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [activeSection]);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ 
        behavior: 'smooth', 
        block: 'start',
       });
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
          src={northLogo}
          alt="north hardwoods logo"
          onClick={() => scrollToSection("header")}
          className="h-[10vh] max-h-[90px] p-2 w-auto header-logo cursor-pointer my-[9px]"
        />
        
        
          <span
            className={`header-links cursor-pointer md:flex hidden ${activeSection === "services" ? 'active active-section' : ''}`}
            onClick={() => scrollToSection("services")}>
            Services
          </span>
          <div></div>
          <span
            className={`header-links cursor-pointer md:flex hidden ${activeSection === "about" ? 'active active-section' : ''}`}
            onClick={() => scrollToSection("about")}>
            About
          </span>
          <div></div>
          <span 
            className={`header-links cursor-pointer md:flex hidden ${activeSection === "gallery" ? 'active active-section' : ''}`}
            onClick={() => scrollToSection("gallery")}>
              Gallery
          </span>
          <div></div>
          <span 
            className={`header-links cursor-pointer md:flex hidden ${activeSection === "process" ? 'active active-section' : ''}`} 
            onClick={() => scrollToSection("process")}>
              Process
          </span>
          <div></div>
          <span 
            className={`header-links cursor-pointer md:flex hidden ${activeSection === "quiz" ? 'active active-section' : ''}`} 
            onClick={() => scrollToSection("quiz")}>
              Guide
          </span>
          <div></div>
          <span 
            className={`header-links cursor-pointer md:flex hidden ${activeSection === "contact" ? 'active active-section' : ''}`}
            onClick={() => scrollToSection("contact")}>
              Contact
          </span>
          <div></div>
        

      </div>

    </header>
  );
};

Header.noHMR = true; // Disable HMR for this component

export default Header;

