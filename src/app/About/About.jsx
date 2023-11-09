import React from "react";
import Image from "next/image";
import meetBart from "public/images/meet-bart.png";
import "./About.css"


export default function About() {


    return (
        <div id="about" className="flex flex-col bg-northLightBlue p-16 relative justify-center items-center overflow-hidden md:flex-row">

            <div className="bart-container max-w-[900px]">
                <Image
                    src={meetBart}
                    alt="About Bart"
                    className="bart-photo"
                    quality={100}
                />
            </div>
            <div className="about-text-container bg-white relative p-5 max-w-[500px]">
                <h1 className="text-northBlue">About North Hardwood Floors</h1>
                <p className="text-northBlue paragraph-wrap mt-[14px]">
                    Owned and operated by Bart Boutwell, a hardwood flooring professional with over 15 years 
                    experience. A craftsperson by nature, he loves to work with clients to help make their 
                    homes as beautiful as they can be.
                </p>
            </div>
        </div>
    )
}