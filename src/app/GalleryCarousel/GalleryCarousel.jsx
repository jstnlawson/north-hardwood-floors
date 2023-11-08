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
                    className="close-modal-button"
                />
            </div> 
            <div  className="absolute top-8 cursor-pointer text-white sm:hidden">
                <IoMdClose 
                    size={30}
                    onClick={handleShowGallery}
                    className="close-modal-button"
                />
            </div>            
                <swiper-container
                ref={swiperElRef}
                slidesPerView="1"
                navigation="true"
                pagination="true"
                // className="max-h-[80vh] md:w-[600px] w-[90vw] rounded-lg"
                style={{"--swiper-navigation-size": "30px" } }
            >
               
                    {images.map((image, index) => (
                        <swiper-slide key={index}>
                            <div className="flex items-center justify-center">
                                <Image
                                src={image.src}
                                alt={image.alt}
                                className="max-h-[80vh] md:w-[600px] w-[90vw] rounded-lg mt-[5vh]"

                                />
                            </div>
                        </swiper-slide>
                    ))}   
                               
            </swiper-container>



            {/* <IoMdClose 
            size={45}
            onClick={handleShowGallery}
            className="close-modal-button"/>
            </div>
            <div className="gallery-carousel-container  py-12">
                <Swiper
                    navigation
                    pagination={{ clickable: true }}
                    modules={[Navigation, Pagination]}
                    className="max-h-[80vh] md:w-[600px] w-[90vw] rounded-lg"
                    style={{"--swiper-navigation-size": "30px"}}
                >
                    {images.map((image, index) => (
                        <SwiperSlide key={index}>
                            <div className="flex items-center justify-center">
                                <Image
                                src={image.src}
                                alt={image.alt}
                                />
                            </div>
                        </SwiperSlide>
                    ))}   
                </Swiper> */}
            
        </div>
    )
}

export default GalleryCarousel