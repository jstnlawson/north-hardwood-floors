import React from "react";
import Image from "next/image";
import "./intro.css";



export default function Intro() {
    return (
        <div className="flex flex-col h-screen">
            <section className="flex-grow bg-gray-100 flex flex-col justify-center items-center p-4">
                <div className="w-full">
                    <img
                        src="/images/main-floor-image.svg"
                        alt="My Image"
                        className="full-width" // Set the width to 100% using CSS
                    />
                </div>

                <div className="intro-text-container">
                    <h1>Floors above the rest</h1>
                    <p>Hardwood floor sanding and repair services based on sound knowledge, quality craftsmanship,
                        and a level of care that goes beyond expectations. Working and living in the Twin Cities
                        since 2003.
                    </p>
                </div>
            </section>

        </div>
    )
}