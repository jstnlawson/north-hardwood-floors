import React from "react";
import Image from "next/image";
import meetBart from "public/images/meet-bart.png";
import "./About.css"


export default function About() {


    return (
        <div className="flex bg-northBeige p-16 relative justify-center items-center overflow-hidden">

            <div className="bart-container ">
                <Image
                    src={meetBart}
                    alt="About Bart"
                    quality={100}
                    layout="intrinsic"//not sure this works
                />
            </div>
            <div className="about-text-container bg-white relative p-2">
                <h1 className="text-northBlue">About North Hardwood Floors</h1>
                <p className="text-northBlue">
                    Owned and operated by Bart Boutwell, a hardwood flooring professional with over 15 years 
                    experience. A craftsperson by nature, he loves to work with clients to help make thier 
                    homes as beautiful as they can be.
                </p>
            </div>
        </div>
    )
}