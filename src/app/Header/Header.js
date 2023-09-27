import React from 'react';
import Image from 'next/image';
import uglyLogo from 'public/images/uglyLogo.svg';

const Header = () => {
  return (
    <header className='bg-white h-20 sm:h-20 md:h-24 lg:h-32 xl:h-40'>
      <div className="header-image-container ">
        <Image
          src={uglyLogo}
          alt="ugly logo"
          className="h-20 sm:h-20 md:h-24 lg:h-32 xl:h-40 float-left ml-6"
        />
      </div>

    </header>
  );
};

Header.noHMR = true; // Disable HMR for this component

export default Header;

