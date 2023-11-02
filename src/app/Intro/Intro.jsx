"use client";
import React from "react";
import Image from "next/image";
import "./intro.css";
import tallerMainFloor from 'public/images/tallerMainFloor.png'
import Paragraph from "../Paragraph/Paragraph";





export default function Intro() {
    return (
        <>
        <div className="bg-northLightBlue h-[10vh]"></div>
        <div className=" pb-[1vh]  md:p-0 md:bg-[#eae2d9] bg-northLightBlue flex justify-center items-center flex-col md:flex-row h-[90vh] sm:h-auto">
            
            <div className="flex relative intro-container  max-w-[1440px]">
                <section className="flex-grow flex justify-center items-center">
                    <div className="intro-text-container">
                        <div className="floating-container">
                            <div className="center-text-container">
                                <h1 className="intro-headline md:block hidden paragraph-wrap">Floors above the rest</h1>
                                <p className="paragraph-wrap md:block hidden">Hardwood floor sanding and repair services based on sound knowledge, quality craftsmanship,
                                    and a level of care that goes beyond expectations. Working and living in the Twin Cities
                                    since 2003.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="intro-image-container w-[90vw] md:w-[100vw]">
                        <Image
                            src={tallerMainFloor}
                            alt="Main Image"
                            priority={true}
                            quality={100}
                            className="brightness-105"
                        />
                    </div>
                </section>
            </div>
            <div className="">
                <Paragraph />
            </div>
        </div>
        </>
    )
}