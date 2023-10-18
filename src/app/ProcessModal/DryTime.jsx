import React from "react";
import { IoMdClose } from 'react-icons/io';
import Image from "next/image";
import wetFloor from 'public/images/wetFloor.jpeg';
import "./ProcessModal.css"

export default function DryTime({ handleShowProcess }) {

    return (
        <div className="bg-northLightBlue flex flex-col justify-center items-center w-screen h-4/5">
            <div>
                <h2 className="contact-heading text-northBlue text-sm sm:mt-4">FINAL STEP</h2>
                <h1 className="text-northBlue sm:mb-4">Dry Time</h1>
            </div>
            <div className="flex flex-row justify-around">
                <div>
                    <Image
                        src={wetFloor}
                        width={400}
                        height={400}
                        className="sm:m-1 sm:mr-4 pl-20 pr-20 sm:p-0 transition-opacity opacity-0 duration-[1s]"
                        onLoadingComplete={(image) => image.classList.remove("opacity-0")}
                        alt="Floor with wet finish"
                    />
                </div>
            </div>

            <div className="flex flex-col sm:flex-row justify-around">
                <div className="sm:w-1/2 p-1 sm:p-10">
                    <h2 className="text-northOrange">Time before foot traffic:</h2>
                    <div className="text-northBlue text-sm">
                        <span>Make sure to clear all items and furniture off the floor.</span>
                        <span>Remove any wall hangings or curtains that aren't too much trouble (things can always be worked around when needed).</span>
                        <span>Window shades can simply be pulled up.</span>
                    </div>
                </div>
                <div className="sm:w-1/2 p-1 sm:p-10">
                    <h2 className="text-northOrange">Actual Cure Time:</h2>
                    <div className="text-northBlue text-sm">
                        <span>Isolate dusty work areas from the rest of the home.</span>
                        <span>Seal off cabinets with plastic sheeting and painters tape.</span>
                        <span>Use tarps and extra footwear for snowy or wet conditions.</span>
                    </div>
                </div>
            </div>
            <button className="blue-button" onClick={handleShowProcess}>close</button>
        </div>
    )
}