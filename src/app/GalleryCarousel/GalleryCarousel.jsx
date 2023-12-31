"use client";
import React, {useEffect, useRef } from "react";
import { IoMdClose } from 'react-icons/io';
import Image from "next/image";
import oakFloor from 'public/images/oak-floor-2.jpeg'
import stainedFloor from 'public/images/stainedFloor.jpeg'
import stairsTwo from 'public/images/stairs-2.jpeg'
import oakFloorStairs from 'public/images/oak-floor-stairs.jpeg'
import topOfStairs from 'public/images/stairs-1.jpeg'
import oakKitchen from 'public/images/oak-kitchen-remodel.jpeg'
import "./GalleryCarousel.css";

import { register } from 'swiper/element/bundle';

register();

const GalleryCarousel = ({ handleShowGallery }) => {


    const images = [
        {
            src: oakFloor,
            alt: "Picture of oak floor"
        },
        {
            src: stairsTwo,
            alt: "Picture of staircase"
        },
        {
            src: stainedFloor,
            alt: "Picture of stained floor"
        },
        {
            src: oakFloorStairs,
            alt: "Picture of oak floor and stairs"
        },
        {
            src: topOfStairs,
            alt: "Picture of stairs from above"
        },
        {
            src: oakKitchen,
            alt: "Picture of oak floor in kitchen"
        },
    ]

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
        
        <div className="modal-overlay-dark m-auto py-16 px-4 relative group h-screen">
            <div  className="absolute right-5 top-8 cursor-pointer text-white hidden sm:block">
                <IoMdClose 
                    size={40}
                    onClick={handleShowGallery}
                    onKeyDown={(e) => {
                        if (e.key === "Enter") {
                            handleShowGallery()
                        }
                    }}
                    className="close-modal-button"
                    tabIndex={0} 
                />
            </div> 
            <div  className="absolute top-8 cursor-pointer text-white sm:hidden">
                <IoMdClose 
                    size={30}
                    onClick={handleShowGallery}
                    className="close-modal-button"
                    onKeyDown={(e) => {
                        if (e.key === "Enter") {
                            handleShowGallery()
                        }
                    }}
                    tabIndex={0} 
                />
            </div>            
                <swiper-container
                ref={swiperElRef}
                slidesPerView="1"
                navigation="true"
                pagination="true"
                style={{"--swiper-navigation-size": "30px"} }
                tabIndex={1}
            >
               
                    {images.map((image, index) => (
                        <swiper-slide key={index}>
                            <div className="flex items-center justify-center">
                                <Image
                                src={image.src}
                                alt={image.alt}
                                className="h-auto md:w-[500px] w-[70vw] rounded-lg my-[10vh] sm:my-[5vh]"
                                />
                            </div>
                        </swiper-slide>
                    ))}   
                               
            </swiper-container>

        </div>
    )
}

export default GalleryCarousel