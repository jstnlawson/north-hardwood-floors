"use client";
import React, { useRef, useEffect, useState } from "react";
import {BsChevronCompactLeft, BsChevronCompactRight} from 'react-icons/bs'
import { register } from 'swiper/element/bundle';
import Image from "next/image";
import Refinish from "public/images/Refinish.jpeg";
import weave from "public/images/weave.jpeg";
import sand from "public/images/sand.jpeg";
import "./GalleryCarousel.css";

register();

const GalleryCarousel = ({handleShowGallery}) => {

    // const swiperElRef = useRef(null);

    // useEffect(() => {
    //     // listen for Swiper events using addEventListener
    //     swiperElRef.current.addEventListener('progress', (e) => {
    //         const [swiper, progress] = e.detail;
    //         console.log(progress);
    //     });

    //     swiperElRef.current.addEventListener('slidechange', (e) => {
    //         console.log('slide changed');
    //     });
    // }, []);

    const slides = [
        {
         src: Refinish,
         alt: "walnut flooring"
        },
        {
            src: weave,
            alt: "walnut flooring"
           },
           {
            src: sand,
            alt: "walnut flooring"
           }
    ]

    return (

        <div className="modal-overlay flex max-w-[1400px] h-[780px] w-full m-auto py-16 px-4 relative">
            {/* <div 
                style={{backgroundImage: `url(${slides[0].src}`}} 
                className="w-full h-full rounded-2xl bg-center bg-cover duration-500">
            </div> */}
            
                <div>
                    <Image src={slides[0].src} alt={slides[0].alt} width={500} height={500} /> 
                </div>
            
        </div>


        // <div className="modal-overlay">
        //     <div className=""></div>
        //     <div className="carousel-content mt-24">
        //     <swiper-container
        //         ref={swiperElRef}
        //         slidesPerView="1"
        //         navigation="true"
        //         pagination="true"
        //     >
        //         <swiper-slide>
        //             <div className="photo-containers" >
        //                 <Image
        //                     src={Refinish}
        //                     alt="walnut flooring"
        //                 />
        //             </div>
        //         </swiper-slide>
        //         <swiper-slide>
        //             <div className="photo-containers" >
        //                 <Image
        //                     src={weave}
        //                     alt="repair"
        //                 />
        //             </div>
        //         </swiper-slide>
        //         <swiper-slide>
        //             <div className="photo-containers" >
        //                 <Image
        //                     src={sand}
        //                     alt="character flooring"
        //                 />
        //             </div>
        //         </swiper-slide>
        //         ...
        //     </swiper-container>
        //     </div>
        //     <button className="flex ml-auto mr-auto mt-2" onClick={handleShowGallery}>CLOSE</button>
        // </div>
    )
}

export default GalleryCarousel