import React from "react";
import Image from "next/image";
import { IoMdClose } from 'react-icons/io';
import emptyRoom from 'public/images/emptyRoom.jpeg';
import dustContainment from 'public/images/dustContainment2.png';
import "./ProcessModal.css"

export default function Prep({ handleNextStep, handleShowProcess }) {

    return (
        
            <div className="bg-northLightBlue h-4/5 w-screen flex flex-col justify-center items-center">
                <div>
                    <h2 className="contact-heading text-northBlue text-sm sm:mt-4 mt-1">STEP 1</h2>
                    <h1 className="text-northBlue sm:mb-4">Preparation</h1>
                </div>
                <div className="flex flex-row justify-around">
                    <div>
                        <Image
                            src={emptyRoom}
                            width={300}
                            height={300}
                            className="sm:m-1 sm:mr-4 pl-4 pr-2 sm:p-0 transition-opacity opacity-0 duration-[1s]"
                            onLoadingComplete={(image) => image.classList.remove("opacity-0")}
                            alt="Picture of empty closet"
                        />
                    </div>
                    <div>
                        <Image
                            src={dustContainment}
                            width={300}
                            height={300}
                            className="sm:m-1 sm:mr-4 pl-2 pr-4 sm:p-0 transition-opacity opacity-0 duration-[3s]"
                            onLoadingComplete={(image) => image.classList.remove("opacity-0")}
                            alt="Picture of plastic sheet dust containment"
                        />
                    </div>
                </div>

                <div className="flex flex-col sm:flex-row justify-around">
                    <div className="sm:w-1/2 p-1 sm:p-10">
                        <h2 className="text-northOrange">Homeowner:</h2>
                        <div className="text-northBlue text-sm">
                            <span>Make sure to clear all items and furniture off the floor. </span>
                            <span>Remove any wall hangings or curtains that aren't too much trouble (things can always be worked around when needed).</span>
                        </div>
                    </div>
                    <div className="sm:w-1/2 p-1 sm:p-10">
                        <h2 className="text-northOrange ">Bart:</h2>
                        <div className="text-northBlue text-sm">
                            <span>Isolate dusty work areas from the rest of the home.
                            Isolate dusty work areas.
                            </span>
                        </div>
                    </div>
                </div>
                <button className="orange-button" onClick={handleNextStep}>next →</button>
            </div>
       
    )
}