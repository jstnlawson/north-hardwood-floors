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
                <h2 className="contact-heading text-northBlue text-sm mt-4">STEP 2</h2>
                <h1 className="text-northBlue mb-4">During Construction</h1>
            </div>
            <div className="flex flex-row justify-around">
                <div>
                    <Image
                        src={isoHeadphones1}
                        width={350}
                        height={350}
                        alt="Picture of person putting on headphones"
                        className="m-1 mr-4 transition-opacity opacity-0 duration-[1s]"
                        onLoadingComplete={(image) => image.classList.remove("opacity-0")}

                    />
                </div>
                <div>
                    <Image
                        src={isoHeadphones2}
                        width={350}
                        height={350}
                        alt="Picture of person with headphones on"
                        className="m-1 mr-4 transition-opacity opacity-0 duration-[3s]"
                        onLoadingComplete={(image) => image.classList.remove("opacity-0")}
                    />
                </div>
            </div>

            <div className="flex flex-row justify-around">
                <div className="w-1/3 p-7">
                    <h2 className="text-northOrange">Install and Sanding:</h2>
                    <ul className="text-northBlue">
                        <li>Make sure to clear all items and furniture off the floor.</li>
                        <li>Remove any wall hangings or curtains that aren't too much trouble (things can always be worked around when needed).</li>
                        <li>Window shades can simply be pulled up.</li>
                    </ul>
                </div>
                <div className="w-1/3 p-7">
                    <h2 className="text-northOrange">Fine Sanding:</h2>
                    <ul className="text-northBlue">
                        <li>Isolate dusty work areas from the rest of the home.</li>
                        <li>Seal off cabinets with plastic sheeting and painters tape.</li>
                        <li>Use tarps and extra footwear for snowy or wet conditions.</li>
                    </ul>
                </div>
                <div className="w-1/3 p-7">
                    <h2 className="text-northOrange">Applying stain and finish:</h2>
                    <ul className="text-northBlue">
                        <li>Isolate dusty work areas from the rest of the home.</li>
                        <li>Seal off cabinets with plastic sheeting and painters tape.</li>
                        <li>Use tarps and extra footwear for snowy or wet conditions.</li>
                    </ul>
                </div>
            </div>
            <button className="orange-button" onClick={handleNextStep}>next →</button>
        </div>
    )
}