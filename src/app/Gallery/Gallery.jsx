"use client";
import React, { useState } from "react";
import Image from "next/image";
import galleryCover from "public/images/galleryCover.png";
import "./Gallery.css"
import GalleryCarousel from "../GalleryCarousel/GalleryCarousel";



export default function Gallery({ hideHeader, setHideHeader }) {

    const [showGallery, setShowGallery] = useState(false);

    const handleShowGallery = () => {
        setShowGallery(!showGallery)
        setHideHeader(!hideHeader)
    }

    return (
        <div id="gallery" className="gallery-container flex bg-northBeige p-16 relative justify-center items-center overflow-hidden">
            <div className="gallery-text-container bg-white relative p-5 max-w-[500px]">
                <h1 className="text-northBlue">Have a Look</h1>
                <p className="text-northBlue paragraph-wrap">
                    North Harwood Floors completes every project with a skillful blend of
                    professional service and true craftsmanship.
                </p>
                <button className="blue-button" onClick={handleShowGallery}>view the gallery →</button>
            </div>
            <div className="gallery-cover-image-container max-w-[900px]">
                <Image
                    src={galleryCover}
                    alt="Gallery Cover Image"
                    quality={100}
                    className="gallery-cover-photo"
                />
            </div>
            {showGallery && 
            <GalleryCarousel handleShowGallery={handleShowGallery}/>
            }
        </div>
    );
}
