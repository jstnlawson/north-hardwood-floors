import React from "react";
import Image from "next/image";
import { IoMdClose } from 'react-icons/io';
import emptyRoom from 'public/images/emptyRoom.jpeg';
import dustContainment from 'public/images/dustContainment2.png';
import "./ProcessModal.css"

export default function Prep({ handleNextStep, handleShowProcess }) {

    return (
        
            <div className="bg-northLightBlue w-screen flex flex-col justify-center items-center sm:h-[80vh] h-[100vh] p-3">
                <div>
                    <h2 className="contact-heading text-northBlue text-sm mt-4">STEP 1</h2>
                    <h1 className="text-northBlue mb-4">Preparation</h1>
                </div>
                <div className="flex flex-row justify-around">
                    <div>
                        <Image
                            src={emptyRoom}
                            width={250}
                            height={250}
                            className="m-1 mr-4 pl-8 pr-4  transition-opacity opacity-0 duration-[1s]"
                            onLoadingComplete={(image) => image.classList.remove("opacity-0")}
                            alt="Picture of empty closet"
                        />
                    </div>
                    <div>
                        <Image
                            src={dustContainment}
                            width={250}
                            height={250}
                            className="m-1 mr-4 pl-4 pr-8  transition-opacity opacity-0 duration-[3s]"
                            onLoadingComplete={(image) => image.classList.remove("opacity-0")}
                            alt="Picture of plastic sheet dust containment"
                        />
                    </div>
                </div>

                <div className="flex flex-col sm:flex-row justify-around">
                    <div className="sm:w-1/2 p-2 sm:p-10">
                        <h2 className="text-northOrange">Homeowner:</h2>
                        <div className="text-northBlue text-sm sm:text-base">
                            <span>
                                • Make sure to clear all items and furniture off the floor. 
                                <br /> 
                                • Remove wall hangings that aren't too much trouble.
                            </span>
                        </div>
                    </div>
                    <div className="sm:w-1/2 p-2 sm:p-10">
                        <h2 className="text-northOrange ">North Hardwood Floors:</h2>
                        <div className="text-northBlue text-sm sm:text-base">
                            <span>
                                • Isolate work areas from the rest of the home. 
                                <br />
                                • Cover cabinets with plastic sheeting.
                                <br />
                                • Painters tape on transitions and trimwork where necessary.
                            </span>
                        </div>
                    </div>
                </div>
                <div className="mb-14">
                <button className="orange-button" onClick={handleNextStep}>next →</button>
                </div>
            </div>
       
    )
}