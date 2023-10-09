"use client";
import React, { useState } from "react";
import Image from "next/image";
import galleryCover from "public/images/galleryCover.png";
import "./Gallery.css"
import GalleryCarousel from "../GalleryCarousel/GalleryCarousel";



export default function Gallery() {

    const [showGallery, setShowGallery] = useState(false);

    const handleShowGallery = () => {
        setShowGallery(!showGallery)
    }

    return (
        <div className="gallery-container flex bg-northBeige relative justify-center items-center overflow-hidden">
            <div className="gallery-cover-image-container">
                <Image
                    src={galleryCover}
                    alt="Gallery Cover Image"
                    quality={100}
                    layout="intrinsic"
                />
            </div>
            <div className="gallery-text-container bg-white">
                <h1 className="text-northBlue">Have a Look</h1>
                <p className="text-northBlue">
                    North Harwood Floors completes every project with a skillful blend of
                    professional service and true craftsmanship.
                </p>
                <button className="blue-button" onClick={handleShowGallery}>view the gallery →</button>
            </div>
            {showGallery && 
            <GalleryCarousel handleShowGallery={handleShowGallery}/>
            }
        </div>
    );
}
