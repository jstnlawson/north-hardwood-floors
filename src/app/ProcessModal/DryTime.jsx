import React from "react";
import { IoMdClose } from 'react-icons/io';
import Image from "next/image";
import wetFloor from 'public/images/wetFloor.jpeg';
import "./ProcessModal.css"

export default function DryTime({ handleShowProcess, handlePreviousStep }) {

    return (
        <div className="bg-northLightBlue flex flex-col justify-center items-center w-screen sm:h-[80vh] h-[100vh] p-3">
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
                        <p className="paragraph-wrap">
                            Water based finishes can handle light foot traffic (sox) as soon 4 hours and oil based finishes 
                            take about 12 hours. The finish is extra vulnerable to damage for the first couple days so step lightly.
                        </p>
                    </div>
                </div>
                <div className="sm:w-1/2 p-1 sm:p-10">
                    <h2 className="text-northOrange">Actual Cure Time:</h2>
                    <div className="text-northBlue text-sm">
                        <p className="paragraph-wrap">
                           Full cure times for water based are typically 6 to 10 days and oil based finish 2 to 4 weeks. You can 
                           safely move furniture back after 48 hours but be careful not to drag anything across the floor. Rugs should
                           stay off the floor for at least 2 weeks.
                        </p>
                    </div>
                </div>
            </div>
            <div className="flex">
            <button className="orange-button" onClick={handlePreviousStep}>← back</button>
            <button className="blue-button" onClick={handleShowProcess}>close</button>
            </div>
        </div>
    )
}