"use client";
import React, { useRef, useState } from "react";
import { BsChevronCompactLeft, BsChevronCompactRight } from 'react-icons/bs'
import { RxDotFilled } from 'react-icons/rx';
import { IoMdClose } from 'react-icons/io';
import Image from "next/image";
import Refinish from "public/images/Refinish.jpeg";
import weave from "public/images/weave.jpeg";
import sand from "public/images/sand.jpeg";
import "./GalleryCarousel.css";

const GalleryCarousel = ({ handleShowGallery }) => {
    
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

    const goToSlide = (slideIndex) => {
        setCurrentIndex(slideIndex);
    };

    return (

        <div className="modal-overlay-dark m-auto py-16 px-4 relative group">
            <div  className="absolute right-5 top-10">
            <IoMdClose 
            size={30}
            onClick={handleShowGallery}/>
            </div>
            
            <div className="mt-12 " style={{ maxWidth: "900px", margin: "0 auto" }}>
                <Image 
                src={slides[currentIndex].src} 
                alt={slides[currentIndex].alt} 
                className="w-full h-full rounded-2xl bg-center bg-cover  duration-500" />
            </div>

            <div className=" absolute  left-5 top-1/2 transform -translate-y-1/2  text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer">
                <BsChevronCompactLeft onClick={prevSlide} size={30} />
            </div>
            <div className=" absolute right-5 top-1/2 transform -translate-y-1/2  text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer">
                <BsChevronCompactRight onClick={nextSlide} size={30} />
            </div>

            <div className="flex justify-center items-center mt-10 py-2">
                {slides.map((slide, slideIndex) => (
                    <div
                        key={slideIndex}
                        onClick={() => goToSlide(slideIndex)}
                        className="text-2xl cursor-pointer">
                        {currentIndex === slideIndex ? (
                            <RxDotFilled style={{ color: "black" }} /> 
                        ) : (
                            <RxDotFilled style={{ color: "white" }} />
                        )}
                    </div>
                ))}
            </div>
        </div>
    )
}

export default GalleryCarousel