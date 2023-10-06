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
        // listen for Swiper events using addEventListener
        swiperElRef.current.addEventListener('progress', (e) => {
            const [swiper, progress] = e.detail;
            console.log(progress);
        });

        swiperElRef.current.addEventListener('slidechange', (e) => {
            console.log('slide changed');
        });
    }, []);

    return (
        <div className="carousel-container ">
            <h1 className="text-center pt-4">Services</h1>
            <swiper-container
                ref={swiperElRef}
                slidesPerView="1"
                navigation="true"
                pagination="true"
            >
                <swiper-slide>
                    <div className="small-service-container">
                        <div className="small-logo-containers" >
                            <Image
                                src={sandingLogo}
                                alt="sanding logo"
                                className="p-1"
                            />
                        </div>
                        <h2 className="mt-4 mb-4">SANDING & REFINISHING</h2>
                        <p className="mb-8">Sanding off the old finish and applying new-to reveal beautiful, smooth floors.
                            Stain can also be applied at this stage to give your floors the color you want.
                        </p>
                    </div>
                </swiper-slide>
                <swiper-slide>
                <div className="small-service-container">
                        <div className="small-logo-containers" >
                            <Image
                                src={repairLogo}
                                alt="repair logo"
                                className="p-1"
                            />
                        </div>
                        <h2 className="mt-4 mb-4">REPAIRS</h2>
                        <p className="mb-8">If you have pet stains, broken boards, or water damage-some boards may need replacing.
                            This is done in combination with a refinish to make the repair look seamless.
                        </p>
                    </div>
                </swiper-slide>
                <swiper-slide>
                <div className="small-service-container">
                        <div className="small-logo-containers" >
                            <Image
                                src={buffLogo}
                                alt="sanding logo"
                                className="p-1"
                            />
                        </div>
                        <h2 className="mt-4 mb-4">BUFF & COAT</h2>
                        <p className="mb-8">Seeing light wear patterns on your floors? Or need a little shine in your life? A
                            quick buff and a new layer of finish will shine it right up!
                        </p>
                    </div>
                </swiper-slide>
                ...
            </swiper-container>
        </div>
    )
}

export default ServicesCarousel;