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
            <div className="hamburger-container md:hidden">
                <label className="hamburger-menu mt-3">
                    <input type="checkbox" />
                </label>
                <aside className="sidebar">
                    <nav>
                        <div>
                            <span className='cursor-pointer m-2' onClick={() => scrollToSection("services")}>Services</span>
                        </div>
                        <div>
                            <span className=' cursor-pointer m-2' onClick={() => scrollToSection("about")}>About</span>
                        </div>
                        <div>
                            <span className=' cursor-pointer m-2' onClick={() => scrollToSection("gallery")}>Gallery</span>
                        </div>
                        <div>
                            <span className=' cursor-pointer m-2' onClick={() => scrollToSection("process")}>Process</span>
                        </div>
                        <div>
                            <span className=' cursor-pointer m-2' onClick={() => scrollToSection("quiz")}>Guide</span>
                        </div>
                        <div>
                            <span className=' cursor-pointer m-2' onClick={() => scrollToSection("contact")}>Contact</span>
                        </div>
                    </nav>
                </aside>
            </div>
        </>
    )
}