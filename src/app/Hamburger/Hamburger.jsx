import React from "react";
import "./Hamburger.css"



export default function () {

    const scrollToSection = (id) => {
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: "smooth", block: 'center' });
        }
    };

    return (
        <>
            <div className="hamburger-container  md:hidden">
                <label className="hamburger-menu ml-2 mt-3">
                    <input type="checkbox" />
                </label>
                <aside className="sidebar">
                    <nav>
                        <div className="mt-4">
                            <span className='cursor-pointer hover:underline' onClick={() => scrollToSection("services")}>Services</span>
                        </div>
                        <div className="mt-4">
                            <span className=' cursor-pointer hover:underline' onClick={() => scrollToSection("about")}>About</span>
                        </div>
                        <div className="mt-4">
                            <span className=' cursor-pointer hover:underline' onClick={() => scrollToSection("gallery")}>Gallery</span>
                        </div>
                        <div className="mt-4">
                            <span className=' cursor-pointer hover:underline' onClick={() => scrollToSection("process")}>Process</span>
                        </div>
                        <div className="mt-4">
                            <span className=' cursor-pointer hover:underline' onClick={() => scrollToSection("quiz")}>Guide</span>
                        </div>
                        <div className="mt-4">
                            <span className=' cursor-pointer hover:underline' onClick={() => scrollToSection("contact")}>Contact</span>
                        </div>
                    </nav>
                </aside>
            </div>
        </>
    )
}