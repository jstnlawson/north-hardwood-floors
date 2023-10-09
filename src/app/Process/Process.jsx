import React from "react";
import Image from "next/image";
import process from "public/images/process.png";
import "./Process.css"


export default function About() {


    return (
        <div className="flex bg-northLightBlue p-16 relative justify-center items-center overflow-hidden">

            <div className="process-container ">
                <Image
                    src={process}
                    alt="The Process"
                    quality={100}
                    layout="intrinsic"//not sure this works
                />
            </div>
            <div className="process-text-container bg-white relative p-2">
                <h1 className="text-northBlue">The Step-by-Step <br />Process</h1>
                <p className="text-northBlue">
                    How should I prepare for my service appointment? Will I have to be out of the 
                    house for any span of time? Here's the guide to all your questions.
                </p>
                <button className="blue-button">the process guide →</button>
            </div>
        </div>
    )
}