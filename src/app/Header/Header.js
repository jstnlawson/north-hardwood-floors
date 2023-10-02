import React from 'react';
import Image from 'next/image';
import uglyLogo from 'public/images/uglyLogo.svg';
import "./Header.css";
import Hamburger from '@/Hamburger/Hamburger';

const Header = () => {
  return (
    <header className='bg-transparent'>
      <div className="header-image-container mt-1">
        <Image
          src={uglyLogo}
          alt="ugly logo"
          className="h-20 w-24 sm:h-20 sm:w-24 md:h-24 md:w-28 lg:h-32 lg:w-36  ml-5 header-logo"
        />
        <span className='header-links'>Gallery </span>
        <span className='header-links'> Customer Guide </span>
        <span className='header-links'> About </span>
        <Hamburger />
      </div>
    
    </header>
  );
};

Header.noHMR = true; // Disable HMR for this component

export default Header;

