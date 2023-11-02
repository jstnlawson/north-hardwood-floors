'use client';
import React, { useState } from "react";
import Image from "next/image";
import process from "public/images/process.png";
import "./Process.css"
import ProcessModal from "../ProcessModal/ProcessModal";


export default function About({ hideHeader, setHideHeader }) {

    const [showProcess, setShowProcess] = useState(false)

    const handleShowProcess = () => {
        setShowProcess(!showProcess)
        setHideHeader(!hideHeader)
    }

    return (
        <>
        <div id="process" className="flex flex-col bg-northLightBlue p-16 relative justify-center items-center overflow-hidden md:flex-row">

            <div className="process-container ">
                <Image
                    src={process}
                    alt="The Process"
                    quality={100}
                    className="process-photo"
                />
            </div>
            <div className="process-text-container bg-white relative p-5 max-w-[500px]">
                <h1 className="text-northBlue">The Step-by-Step <br />Process</h1>
                <p className="text-northBlue  paragraph-wrap">
                    How should I prepare for my service appointment? Will I have to be out of the 
                    house for any span of time? Here's the guide to all your questions.
                </p>
                <button className="blue-button" onClick={handleShowProcess}>the process guide →</button>
            </div>
           
        </div>
        {showProcess && <ProcessModal handleShowProcess={handleShowProcess}/>}
        </>
    )
}