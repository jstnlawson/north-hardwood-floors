"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import sandingLogo from "public/images/sandingLogo.svg";
import repairLogo from "public/images/repairLogo.svg";
import buffLogo from "public/images/buffLogo.svg";
import "./Services.css"
import ServicesCarousel from "../ServicesCarousel/ServicesCarousel";




export default function () {

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
        <div className="services-container">
            {!display && (
            <div className="large-services-container ">
                <h1 className="text-center pt-4 text-northBeige">Services</h1>
                <div className="large-grid-container">
                    <div className="sanding-container ml-10">
                        <div className="services-logo-containers" >
                            <Image
                                src={sandingLogo}
                                alt="sanding logo"
                                className="h-auto w-auto"
                            />
                        </div>
                        <h2 className="mt-4">SANDING & REFINISHING</h2>
                        <p>Sanding off the old finish and applying new-to reveal beautiful, smooth floors.
                            Stain can also be applied at this stage to give your floors the color you want.
                        </p>
                    </div>
                    <div className="repairs-container ml-5 mr-5">
                        <div className="services-logo-containers" >
                            <Image
                                src={repairLogo}
                                alt="repair logo"
                                
                            />
                        </div>
                        <h2 className="mt-4">REPAIRS</h2>
                        <p>If you have pet stains, broken boards, or water damage-some boards may need replacing.
                            This is done in combination with a refinish to make the repair look seamless.</p>
                    </div>
                    <div className="buff-container mr-10">
                        <div className="services-logo-containers" >
                            <Image
                                src={buffLogo}
                                alt="buff logo"
                                
                            />
                        </div>
                        <h2 className="mt-4">BUFF & COAT</h2>
                        <p>Seeing light wear patterns on your floors? Or need a little shine in your life? A
                            quick buff and a new layer of finish will shine it right up!
                        </p>
                    </div>
                </div>
            </div>
            )}

            {display && <ServicesCarousel />}
        </div>
    )
}