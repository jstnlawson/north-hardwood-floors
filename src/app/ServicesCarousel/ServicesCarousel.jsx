"use client";
import React, { useRef, useEffect } from "react";
import { register } from 'swiper/element/bundle';
import Image from "next/image";
import sandingLogo from "public/images/sandingLogo.svg";
import repairLogo from "public/images/repairLogo.svg";
import buffLogo from "public/images/buffLogo.svg";
import "./ServicesCarousel.css"

register();

const ServicesCarousel = () => {

    const swiperElRef = useRef(null);

    useEffect(() => {
        swiperElRef.current.addEventListener('progress', (e) => {
            const [swiper, progress] = e.detail;
            console.log(progress);
        });

        swiperElRef.current.addEventListener('slidechange', (e) => {
            console.log('slide changed');
        });
    }, []);

    return (
        <div className="carousel-container text-white">
            <h1 className="text-center pt-4">Services</h1>
            <swiper-container
                ref={swiperElRef}
                slidesPerView="1"
                navigation="true"
                pagination="true"
                style={{"--swiper-navigation-size": "25px"}}
            >
                <swiper-slide>
                    <div className="small-service-container ">
                        <div className="small-logo-containers bg-northBeige" >
                            <Image
                                src={sandingLogo}
                                alt="sanding logo"
                                className="p-1"
                            />
                        </div>
                        <h2 className="mt-4 mb-4">SANDING & REFINISHING</h2>
                        <p className="mb-8 max-w-[90vw]">Sanding off the old finish and applying new-to reveal beautiful, smooth floors.
                            Stain can also be applied at this stage to give your floors the color you want.
                        </p>
                    </div>
                </swiper-slide>
                <swiper-slide>
                <div className="small-service-container">
                        <div className="small-logo-containers bg-northBeige" >
                            <Image
                                src={repairLogo}
                                alt="repair logo"
                                className="p-1"
                            />
                        </div>
                        <h2 className="mt-4 mb-4">INSTALLATION & REPAIRS</h2>
                        <p className="mb-8 max-w-[90vw]">Wether you want to start fresh, add to your current floor, or repair a damaged area, 
                            a seamless solution is available.
                        </p>
                    </div>
                </swiper-slide>
                <swiper-slide>
                <div className="small-service-container">
                        <div className="small-logo-containers bg-northBeige" >
                            <Image
                                src={buffLogo}
                                alt="sanding logo"
                                className="p-1"
                            />
                        </div>
                        <h2 className="mt-4 mb-4">BUFF & COAT</h2>
                        <p className="mb-8 max-w-[90vw]">Seeing light wear patterns on your floors? Or need a little shine in your life? A
                            quick buff and a new layer of finish will shine it right up!
                        </p>
                    </div>
                </swiper-slide>
                
            </swiper-container>
        </div>
    )
}

export default ServicesCarousel;