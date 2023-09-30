import React from 'react';
import Image from 'next/image';
import uglyLogo from 'public/images/uglyLogo.svg';

const Header = () => {
  return (
    <header className='bg-transparent  relative'>
      <div className="header-image-container absolute">
        <Image
          src={uglyLogo}
          alt="ugly logo"
          width={36}
          height={32}
          className=" sm:h-20 sm:w-24 md:h-24 md:w-28 lg:h-32 lg:w-36 m-4"
        />
      </div>

    </header>
  );
};

Header.noHMR = true; // Disable HMR for this component

export default Header;

// h-20 sm:h-20 md:h-24 lg:h-32 xl:h-40
// h-20 sm:h-20 md:h-24 lg:h-32 xl:h-40