"use client";
import React, { useRef, useEffect } from "react";
import { register } from 'swiper/element/bundle';
import Image from "next/image";
import Refinish from "public/images/Refinish.jpeg";
import weave from "public/images/weave.jpeg";
import sand from "public/images/sand.jpeg";
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
            <div className=""></div>
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
                            src={Refinish}
                            alt="walnut flooring"
                        />
                    </div>
                </swiper-slide>
                <swiper-slide>
                    <div className="photo-containers" >
                        <Image
                            src={weave}
                            alt="repair"
                        />
                    </div>
                </swiper-slide>
                <swiper-slide>
                    <div className="photo-containers" >
                        <Image
                            src={sand}
                            alt="character flooring"
                        />
                    </div>
                </swiper-slide>
                ...
            </swiper-container>
            </div>
            <button className="flex ml-auto mr-auto mt-2" onClick={handleShowGallery}>CLOSE</button>
        </div>
    )
}

export default GalleryCarousel