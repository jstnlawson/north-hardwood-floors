import React from "react";
import Image from "next/image";
import { IoMdClose } from 'react-icons/io';
import isoHeadphones1 from 'public/images/isoHeadphones1.jpeg';
import isoHeadphones2 from 'public/images/isoHeadphones2.jpeg';
import "./ProcessModal.css"

export default function DuringConstruction({ handleNextStep,handleShowProcess }) {

    return (
        <div className="bg-northLightBlue flex flex-col justify-center items-center w-screen h-4/5">
            {/* <div className="absolute right-5 top-10 cursor-pointer">
                <IoMdClose
                    size={30}
                    onClick={handleShowProcess} />
            </div> */}
            <div>
                <h2 className="contact-heading text-northBlue text-sm sm:mt-4">STEP 2</h2>
                <h1 className="text-northBlue sm:mb-4">During Construction</h1>
            </div>
            <div className="flex flex-row justify-around">
                <div>
                    <Image
                        src={isoHeadphones1}
                        width={350}
                        height={350}
                        alt="Picture of person putting on headphones"
                        className="sm:m-1 sm:mr-4 sm:p-0 pl-1 pr-2 transition-opacity opacity-0 duration-[1s]"
                        onLoadingComplete={(image) => image.classList.remove("opacity-0")}

                    />
                </div>
                <div>
                    <Image
                        src={isoHeadphones2}
                        width={350}
                        height={350}
                        alt="Picture of person with headphones on"
                        className="sm:m-1 sm:mr-4 sm:p-0 pl-1 pr-2 transition-opacity opacity-0 duration-[3s]"
                        onLoadingComplete={(image) => image.classList.remove("opacity-0")}
                    />
                </div>
            </div>

            <div className="flex flex-col sm:flex-row justify-around">
                <div className="sm:w-1/3 p-1 sm:p-7">
                    <h2 className="text-northOrange">Install and Sanding:</h2>
                    <div className="text-northBlue text-sm">
                        <span>Make sure to clear all items and furniture off the floor.</span>
                        <span>Remove any wall hangings or curtains that aren't.</span>
                    </div>
                </div>
                <div className="sm:w-1/3 p-1 sm:p-7">
                    <h2 className="text-northOrange">Fine Sanding:</h2>
                    <div className="text-northBlue text-sm">
                        <span>Isolate dusty work areas from the rest of the home.</span>
                        <span>Seal off cabinets with plastic sheeting and painters tape.</span>
                    </div>
                </div>
                <div className="sm:w-1/3 p-1 sm:p-7">
                    <h2 className="text-northOrange">Applying stain and finish:</h2>
                    <div className="text-northBlue text-sm">
                        <span>Isolate dusty work areas from the rest of the home.</span>
                        <span>Seal off cabinets with plastic sheeting and .</span>
                    </div>
                </div>
            </div>
            <button className="orange-button" onClick={handleNextStep}>next →</button>
        </div>
    )
}