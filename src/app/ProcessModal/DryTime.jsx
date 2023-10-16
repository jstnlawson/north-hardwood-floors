import React from "react";
import { IoMdClose } from 'react-icons/io';
import Image from "next/image";
import wetFloor from 'public/images/wetFloor.jpeg';
import "./ProcessModal.css"

export default function DryTime({ handleShowProcess }) {

    return (
        <div className="bg-northLightBlue flex flex-col justify-center items-center h-4/5">
            <div className="absolute right-5 top-10 cursor-pointer">
                <IoMdClose
                    size={30}
                    onClick={handleShowProcess} />
            </div>
            <div>
                <h2 className="contact-heading text-northBlue text-sm mt-4">FINAL STEP</h2>
                <h1 className="text-northBlue mb-4">Dry Time</h1>
            </div>
            <div className="flex flex-row justify-around">
                <div>
                    <Image
                        src={wetFloor}
                        width={400}
                        height={400}
                        className="m-1 mr-4"
                        alt="Floor with wet finish"
                    />
                </div>
            </div>

            <div className="flex flex-row justify-around">
                <div className="w-1/2 p-10">
                    <h2 className="text-northOrange">Time before foot traffic:</h2>
                    <ul className="text-northBlue">
                        <li>Make sure to clear all items and furniture off the floor.</li>
                        <li>Remove any wall hangings or curtains that aren't too much trouble (things can always be worked around when needed).</li>
                        <li>Window shades can simply be pulled up.</li>
                    </ul>
                </div>
                <div className="w-1/2 p-10">
                    <h2 className="text-northOrange">Actual Cure Time:</h2>
                    <ul className="text-northBlue">
                        <li>Isolate dusty work areas from the rest of the home.</li>
                        <li>Seal off cabinets with plastic sheeting and painters tape.</li>
                        <li>Use tarps and extra footwear for snowy or wet conditions.</li>
                    </ul>
                </div>
            </div>
            <button className="blue-button" onClick={handleShowProcess}>close</button>
        </div>
    )
}