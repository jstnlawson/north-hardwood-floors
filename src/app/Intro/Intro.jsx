
"use client";
import React from "react";
import Image from "next/image";
import "./intro.css";
import tallerMainFloor from 'public/images/tallerMainFloor.png'
import Header from "@/app/Header/Header";
import Paragraph from "../Paragraph/Paragraph";





export default function Intro() {
    return (
        <>
        <div className="flex intro-container mt-20">
            {/* <Header /> */}
            <section className="flex-grow flex justify-center items-center">

                <div className="intro-text-container">
                    <div className="floating-container">
                        <div className="center-text-container">
                            <h1 className="intro-headline sm:block hidden paragraph-wrap">Floors above the rest</h1>
                            <p className="paragraph-wrap md:block hidden">Hardwood floor sanding and repair services based on sound knowledge, quality craftsmanship,
                                and a level of care that goes beyond expectations. Working and living in the Twin Cities
                                since 2003.
                            </p>
                        </div>
                    </div>
                </div>

                <div className="intro-image-container ">

                    <Image
                        src={tallerMainFloor}
                        alt="Main Image"
                        priority={true}
                        quality={100}
                    />
                </div>
            </section>
            

        </div>
        <div className="">
        <Paragraph />
        </div>
        </>
    )
}