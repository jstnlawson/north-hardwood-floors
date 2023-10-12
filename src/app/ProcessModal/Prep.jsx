import React from "react";
import Image from "next/image";
import emptyRoom from 'public/images/emptyRoom.jpeg';
import dustContainment from 'public/images/dustContainment2.png';
import "./ProcessModal.css"

export default function () {

    return (
        <div className="bg-northLightBlue flex flex-col justify-center items-center">
            <div>
            <h2 className="contact-heading text-northBlue text-sm mt-4">STEP 1</h2>            
            <h1 className="text-northBlue mb-4">Preparation</h1>
            </div>
            <div className="flex flex-row justify-around">
                <div>
                    <Image
                        src={emptyRoom}
                        width={500}
                        height={500}
                        className="m-1 mr-4"
                        alt="Picture of empty closet"
                    />
                </div>
                <div>
                    <Image
                        src={dustContainment}
                        width={500}
                        height={500}
                        className="m-1 ml-4"
                        alt="Picture of plastic sheet dust containment"
                    />
                </div>
            </div>

            <div className="flex flex-row justify-around">
                <div className="w-1/2 p-10">
                    <h2 className="text-northOrange">Homeowner:</h2>
                    <ul className="text-northBlue">
                        <li>Make sure to clear all items and furniture off the floor.</li>
                        <li>Remove any wall hangings or curtains that aren't too much trouble (things can always be worked around when needed).</li>
                        <li>Window shades can simply be pulled up.</li>
                    </ul>
                </div>
                <div className="w-1/2 p-10">
                    <h2 className="text-northOrange">North Hardwood Floors:</h2>
                    <ul className="text-northBlue">
                        <li>Isolate dusty work areas from the rest of the home.</li>
                        <li>Seal off cabinets with plastic sheeting and painters tape.</li>
                        <li>Use tarps and extra footwear for snowy or wet conditions.</li>
                    </ul>
                </div>
            </div>
            <button className="orange-button">next →</button>
        </div>
    )
}