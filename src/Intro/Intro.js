import React from "react";
import Image from "next/image";
import "./intro.css";
import tallerMainFloor from 'public/images/tallerMainFloor.png'



export default function Intro() {
    return (
        <div className="flex flex-col h-screen intro-container">
            <section className="flex-grow  flex flex-col justify-center items-center p-4 ">
                <div className="intro-image-container ">
                    <Image
                        src={tallerMainFloor}
                        alt="My Image"
                        // className="w-full lg:max-w-1/2 !important"
                    />
                </div>

                <div className="intro-text-container ">
                    <div className="floating-container">
                    <h1>Floors above the rest</h1>
                    <p>Hardwood floor sanding and repair services based on sound knowledge, quality craftsmanship,
                        and a level of care that goes beyond expectations. Working and living in the Twin Cities
                        since 2003.
                    </p>
                    </div>
                </div>
            </section>

        </div>
    )
}