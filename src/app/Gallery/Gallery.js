import React from "react";
import Image from "next/image";
import galleryCover from "public/images/galleryCover.png";
import "./Gallery.css"



export default function Gallery() {

    return (
        <div className="gallery-container">
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
        <button className="blue-button">view the gallery →</button>
      </div>
    </div>
        // <div className="gallery-container flex justify-center items-center">
        //     <div className="gallery-text-contaner  bg-white">
        //         <h1 className="text-northBlue">Have a Look</h1>
        //         <p className="text-northBlue">North Harwood Floors completes every project with a skillful blend 
        //            of professional service and true craftsmanship.</p>
        //            <button className="blue-button">view the gallery →</button>
        //     </div>
        //     <div className="gallery-cover-image-container ">
        //         <Image
        //             src={galleryCover}
        //             alt="Gallery Cover Image"
        //             quality={100}
        //             layout="intrinsic"
        //         />
        //     </div>
        // </div>
    )
}
