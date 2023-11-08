"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import sandingLogo from "public/images/sandingLogo.svg";
import repairLogo from "public/images/repairLogo.svg";
import buffLogo from "public/images/buffLogo.svg";
import "./Services.css"
import ServicesCarousel from "../ServicesCarousel/ServicesCarousel";




export default function Services () {

    const [display, setDisplay] = useState(false);

    useEffect(() => {
        const handleDisplay = () => {
            setDisplay(window.innerWidth < 640);
        }

        handleDisplay()

        window.addEventListener("resize", handleDisplay)

        return () => {
            window.removeEventListener("resize", handleDisplay)
        }
    }, []);

    return (
        <div id="services">
            {!display && (
            <div  className="services-container bg-northBlue flex justify-center items-center">
                <div className="large-services-container text-white p-[10vh]">
                    <h1 className="text-center mb-8">Services</h1>
                    <div className="large-grid-container">
                        <div className="sanding-container ml-6">
                            <div className="services-logo-containers" >
                                <Image
                                    src={sandingLogo}
                                    alt="sanding logo"
                                    className="h-auto w-auto"
                                />
                            </div>
                            <h2 className="my-4">SANDING & REFINISHING</h2>
                            <p className="paragraph-wrap">Sanding off the old finish and applying new-to reveal beautiful, smooth floors.
                                Stain can also be applied at this stage to give your floors the color you want.
                            </p>
                        </div>
                        <div className="repairs-container mx-4">
                            <div className="services-logo-containers" >
                                <Image
                                    src={repairLogo}
                                    alt="repair logo"
                                    
                                />
                            </div>
                            <h2 className="my-4">INSTALLATION & REPAIRS</h2>
                            <p className="paragraph-wrap">Whether you want to start fresh, replace worn out stair treads, add to your current floor, or repair a damaged area, 
                                a seamless solution is available.</p>
                        </div>
                        <div className="buff-container mr-6">
                            <div className="services-logo-containers" >
                                <Image
                                    src={buffLogo}
                                    alt="buff logo"
                                    
                                />
                            </div>
                            <h2 className="my-4">BUFF & COAT</h2>
                            <p className="paragraph-wrap">Seeing light wear patterns on your floors? Or need a little shine in your life? A
                                quick buff and a new layer of finish will shine it right up!
                            </p>
                        </div>
                    </div>
                </div>
                </div>
                )}
        
         <div>
            {display && <ServicesCarousel />}
        </div>
        </div>
    )
}