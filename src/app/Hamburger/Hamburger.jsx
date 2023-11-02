// import React from "react";
// import "./Hamburger.css"



// export default function () {

//     const scrollToSection = (id) => {
//         const element = document.getElementById(id);
//         if (element) {
//             element.scrollIntoView({ behavior: "smooth", block: 'center' });
//         }
//     };

//     return (
//         <>
//             <div className="hamburger-container  md:hidden">
//                 <label className="hamburger-menu ml-2 mt-3">
//                     <input type="checkbox" />
//                 </label>
//                 <aside className="sidebar">
// import React, { useEffect, useState } from "react";
// import "./Hamburger.css";
import React, { useEffect, useState, useRef } from "react";
import "./Hamburger.css";

export default function Hamburger() {
  const sidebarRef = useRef(null);
  const [isOpen, setIsOpen] = useState(false);

    const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleClick = (e) => {
    if (sidebarRef.current && !sidebarRef.current.contains(e.target)) {
      setIsOpen(false);
    }
  };

  const handleMouseUp = (e) => {
    e.stopPropagation();
  };

  useEffect(() => {
    document.addEventListener('click', handleClick, true);
    return () => {
      document.removeEventListener('click', handleClick, true);
    };
  }, []);

  return (
    <>
      <div className="hamburger-container md:hidden" ref={sidebarRef}>
        <label
          className="hamburger-menu ml-2 mt-3"
          onMouseUp={handleMouseUp}
          htmlFor="hamburger-checkbox"
        >
          <input
            type="checkbox"
            id="hamburger-checkbox"
            checked={isOpen}
            onChange={() => setIsOpen(!isOpen)}
          />
        </label>
        <aside className={`sidebar ${isOpen ? "open" : ""}`}>
                    <nav>
                        <div className="mt-4">
                            <span className='service-links' onClick={() => scrollToSection("services")}>Services</span>
                        </div>
                        <div className="mt-4">
                            <span className=' service-links' onClick={() => scrollToSection("about")}>About</span>
                        </div>
                        <div className="mt-4">
                            <span className=' service-links' onClick={() => scrollToSection("gallery")}>Gallery</span>
                        </div>
                        <div className="mt-4">
                            <span className=' service-links' onClick={() => scrollToSection("process")}>Process</span>
                        </div>
                        <div className="mt-4">
                            <span className=' service-links' onClick={() => scrollToSection("quiz")}>Guide</span>
                        </div>
                        <div className="mt-4">
                            <span className=' service-links' onClick={() => scrollToSection("contact")}>Contact</span>
                        </div>
                    </nav>
                </aside>
            </div>
        </>
    )
}