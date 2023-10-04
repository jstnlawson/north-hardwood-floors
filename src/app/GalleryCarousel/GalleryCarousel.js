"use client";
import React, { useRef, useEffect } from "react";
import { register } from 'swiper/element/bundle';
import Image from "next/image";
import sandingLogo from "public/images/sandingLogo.svg";
import repairLogo from "public/images/repairLogo.svg";
import buffLogo from "public/images/buffLogo.svg";
import "./GalleryCarousel.css";

register();

const GalleryCarousel = ({handleShowGallery}) => {

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
        <div className="modal-overlay">
            <div className="mt-72"></div>
            <div className="carousel-content">
            <swiper-container
                ref={swiperElRef}
                slidesPerView="1"
                navigation="true"
                pagination="true"
            >
                <swiper-slide>
                    <div className="photo-containers" >
                        <Image
                            src={sandingLogo}
                            alt="sanding logo"
                            className="p-1"
                        />
                    </div>
                </swiper-slide>
                <swiper-slide>
                    <div className="photo-containers" >
                        <Image
                            src={repairLogo}
                            alt="repair logo"
                            className="p-1"
                        />
                    </div>
                </swiper-slide>
                <swiper-slide>
                    <div className="photo-containers" >
                        <Image
                            src={buffLogo}
                            alt="sanding logo"
                            className="p-1"
                        />
                    </div>
                </swiper-slide>
                ...
            </swiper-container>
            </div>
            <button className="flex ml-auto mr-auto" onClick={handleShowGallery}>x-close</button>
        </div>
    )
}

export default GalleryCarousel