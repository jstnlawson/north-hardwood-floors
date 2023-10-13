"use client";
import React, { useRef, useEffect, useState } from "react";
import {BsChevronCompactLeft, BsChevronCompactRight} from 'react-icons/bs'
import { register } from 'swiper/element/bundle';
import Image from "next/image";
import Refinish from "public/images/Refinish.jpeg";
import weave from "public/images/weave.jpeg";
import sand from "public/images/sand.jpeg";
import "./GalleryCarousel.css";

// register();

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
    const [currentIndex, setCurrentIndex] = useState(0)

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
    ];

    const prevSlide = () => {
        const isFirstSlide = currentIndex === 0;
        const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
        console.log('Current index:', currentIndex);
        setCurrentIndex(newIndex);
    }

    const nextSlide = () => {
       const isLastSlide = currentIndex == slides.length - 1;
       const newIndex = isLastSlide ? 0 : currentIndex + 1;
       setCurrentIndex(newIndex);
    }
    return (

        <div className="modal-overlay flex max-w-[1400px] h-[780px] w-full m-auto py-16 px-4 relative group">
            
                <div>
                    <Image src={slides[currentIndex].src} alt={slides[currentIndex].alt} width={500} height={500} className="w-full h-full rounded-2xl bg-center bg-cover duration-500"/> 
                </div>
            
            <div className="hidden group-hover:block absolute top[50%] -translate-x-0 translate-y-[-50%] left-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer">
                <BsChevronCompactLeft onClick={prevSlide} size={30}/>
            </div>
            <div className="hidden group-hover:block absolute top[50%] -translate-x-0 translate-y-[-50%] right-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer">
                <BsChevronCompactRight onClick={nextSlide} size={30}/>
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