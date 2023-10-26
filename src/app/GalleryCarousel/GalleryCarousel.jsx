"use client";
import React, { useRef, useEffect } from "react";
import { IoMdClose } from 'react-icons/io';
import Image from "next/image";
import { register } from 'swiper/element/bundle';
import oakFloor from 'public/images/oak-floor-2.jpeg'
import stainedFloor from 'public/images/stainedFloor.jpeg'
import stairsTwo from 'public/images/stairs-2.jpeg'
import oakFloorStairs from 'public/images/oak-floor-stairs.jpeg'
import topOfStairs from 'public/images/stairs-1.jpeg'
import oakKitchen from 'public/images/oak-kitchen-remodel.jpeg'
import "./GalleryCarousel.css";

register();

const GalleryCarousel = ({ handleShowGallery }) => {

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

        <div className="modal-overlay-dark m-auto py-16 px-4 relative group">
            <div  className="absolute sm:right-5 top-8 cursor-pointer text-white">
            <IoMdClose 
            size={45}
            onClick={handleShowGallery}
            className="close-modal-button"/>
            </div>

            <div className="gallery-carousel-container text-white">
            <swiper-container
                ref={swiperElRef}
                slidesPerView="1"
                navigation="true"
                pagination="true"
                style={{"--swiper-navigation-size": "35px"}}
            >
                
                    <swiper-slide className="white-swiper" >
                        <div className="gallery-photo-container">
                        
                            <Image
                                    src={oakFloor}
                                    
                                    alt="sanding logo"
                                    className="p-3 mt-5"
                                />
                        
                        </div>
                    </swiper-slide>
                

                <swiper-slide>
                <div className="gallery-photo-container">
                        
                        
                            <Image
                                src={stainedFloor}
                                alt="repair logo"
                                className="p-3 mt-5"
                            />
                        
                    </div>
                </swiper-slide>
                <swiper-slide>
                <div className="gallery-photo-container">
                        
                        
                            <Image
                                src={stairsTwo}
                                alt="sanding logo"
                                className="p-3 mt-5"
                            />
                        
                    </div>
                </swiper-slide>
                
            </swiper-container>
        </div>
            
            {/* <div className="flex justify-center mt-6">
                <Image 
                src={slides[currentIndex].src} 
                alt={slides[currentIndex].alt} 
                className="gallery-photo-container rounded-2xl bg-center bg-cover  duration-500" />
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
            </div> */}
        </div>
    )
}

export default GalleryCarousel