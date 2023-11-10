import React, { useState } from 'react';
import './JsHamburger.css';

export default function JsHamburger() {
    const [isOpen, setIsOpen] = useState(false);
    

    const scrollToSection = (id) => {
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: "smooth" });
        }
        setIsOpen(!isOpen);
    };

    

    const handleClick = () => {
        setIsOpen(!isOpen);
       
    };

    return (
        <div className='relative md:hidden'>
            <button onClick={handleClick}
                className="flex flex-col justify-center items-center">
                <span className={`bg-northBeige block transition-all duration-300 ease-out 
                    h-1 w-[35px] rounded-sm ${isOpen ?
                        'rotate-45 translate-y-1' : '-translate-y-[5px]'
                    }`} >
                </span>
                <span className={`bg-northBeige block transition-all duration-300 ease-out 
                    h-1 w-[35px] rounded-sm my-[ ${isOpen ?
                        'opacity-0' : 'opacity-100'
                    }`} >
                </span>
                <span className={`bg-northBeige block transition-all duration-300 ease-out 
                    h-1 w-[35px] rounded-sm ${isOpen ?
                        '-rotate-45 -translate-y-1' : 'translate-y-[5px]'
                    }`} >
                </span>

            </button>

            

                <div className={`side-nav ${isOpen ? 'showNav' : 'hideNav'}`}>
                        <nav>
                        <div className="my-6">
                            <span className='header-links cursor-pointer' onClick={() => scrollToSection("services")}>Services</span>
                        </div>
                        <div className="my-6">
                            <span className=' header-links cursor-pointer' onClick={() => scrollToSection("about")}>About</span>
                        </div>
                        <div className="my-6">
                            <span className=' header-links cursor-pointer' onClick={() => scrollToSection("gallery")}>Gallery</span>
                        </div>
                        <div className="my-6">
                            <span className=' header-links cursor-pointer' onClick={() => scrollToSection("process")}>Process</span>
                        </div>
                        <div className="my-6">
                            <span className=' header-links cursor-pointer' onClick={() => scrollToSection("quiz")}>Guide</span>
                        </div>
                        <div className="my-6">
                            <span className=' header-links cursor-pointer' onClick={() => scrollToSection("contact")}>Contact</span>
                        </div>
                    </nav>
                </div>
                
        </div >

    )
};