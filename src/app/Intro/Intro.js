
"use client";
import React from "react";
import Image from "next/image";
import "./intro.css";
import tallerMainFloor from 'public/images/tallerMainFloor.png'
import Header from "@/app/Header/Header";





export default function Intro() {
    return (
        <div className="flex intro-container">
            <Header />
            <section className="flex-grow flex justify-center items-center">

            <div className="intro-text-container">
                    <div className="floating-container">
                        <div className="center-text-container">
                            <h1 className="">Floors above the rest</h1>
                            <p className="">Hardwood floor sanding and repair services based on sound knowledge, quality craftsmanship,
                                and a level of care that goes beyond expectations. Working and living in the Twin Cities
                                since 2003.
                            </p>
                        </div>
                    </div>
                </div>

                <div className="intro-image-container ">

                    <Image
                        src={tallerMainFloor}
                        alt="My Image"
                        priority={true}
                        quality={100}
                    />
                </div>

                
                
            </section>
            

        </div>
    )
}